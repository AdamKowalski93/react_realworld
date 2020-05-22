import React from "react";
import Axios from "axios";


class Articles extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'Token': props.Token,
            'Articles': [],

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
                        <div className="card mb-8">
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={article.author.image} className="card-img" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{article.title}</h5>
                                        <p className="card-text">{article.body}</p>
                                        <p className="card-text"><small className="text-muted">Created at
                                            :{article.createdAt}</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                )
                }
            </div>
        )
    }
}

export default Articles
