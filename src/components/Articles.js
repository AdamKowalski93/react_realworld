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

        return (<div>
            {this.state.Articles.map((article, index) => (
                <p key={index}>{article.body} </p>
            ))}
        </div>);
    }
}

export default Articles