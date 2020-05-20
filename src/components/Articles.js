import React from "react";
import Axios from "axios";

class Articles extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'Token': this.props.Token,
            'Articles': []
        }

    }

    componentDidMount() {
        let config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + this.state.Token
            }
        }
        // Promises posiada funkcje jak isFulfilled dopytac jak ich tu uzyc

        Axios.get('https://conduit.productionready.io/api/articles', config)
            .then(function (response) {
                this.setState({Articles: response.data.articles});
            }.bind(this));

    }


    render() {

        return (
            <div className="card border">
            {this.state.Articles.map((article, index) => (
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-header-pills" >User Name: {article.author.username}</h4>
                        <h5 className="card-title" >Title: {article.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Description: {article.description}</h6>
                        <p className="card-text" key={index}>{article.body}</p>
                    </div>
                </div>))}</div>)
    }
}

export default Articles