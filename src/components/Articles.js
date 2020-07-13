import React from "react";
import Axios from "axios";
import store from "../store";
import articleActions from "../actions/articleActions";
import {connect} from "react-redux";
import types from "../constans/types";


class Articles extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'Token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTA1MDEzLCJ1c2VybmFtZSI6InRlc3QwMjIyMDEiLCJleHAiOjE1OTk4MTMzMDd9.BoFc_X58IfNqjgqke6_6r1syFDopM4K3wRmVKk8kI1M',
            'Link': 'https://conduit.productionready.io/api/articles'
        }


    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.Link !== this.props.Link) {
            //Perform some operation here
            this.setState({Link: nextProps.Link})
            this.renderArticles()
        }
    }

    componentDidMount() {
        this.renderArticles()
    }

    renderArticles() {
        let config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + this.state.Token
            }
        }

        Axios.get(this.state.Link, config).then(
            function (response) {
                this.setState({Articles: response.data.articles});
                this.props.UPDATE_ARTICLES(response.data.articles)

            }.bind(this));

    }


    render() {
        console.log('article_list:', this.props.siema)
        return (
            <div className="card border">
                {this.props.siema.Articles.map((article, index) => (
                        <div className="card mb-8" key={index}>
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


function mapDispatchToProps(dispatch) {
    return {
        UPDATE_ARTICLES: (payload) => {
             dispatch({type:types.ADD_ARTICLES, item:payload})
        }
    }
}

function mapStateToProps(state) {
    return {siema: state.articles_list};
}

export default connect(mapStateToProps,mapDispatchToProps)(Articles);
