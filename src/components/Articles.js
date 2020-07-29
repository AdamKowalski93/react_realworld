import React from "react";
import Axios from "axios";
import store from "../store";
import {connect} from "react-redux";
import types from "../constans/types";


class Articles extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'Token': '',
            'Link': 'https://conduit.productionready.io/api/articles'
        }
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.Link !== this.props.Link) {
            this.setState({Link: nextProps.Link})
            this.props.REMOVE_ARTICLES()
            this.renderArticles()
        }
    }

    componentWillMount() {
        this.setState({Token:store.getState().auth.token_value})
    }

    componentDidMount() {
        this.renderArticles()
    }

    renderArticles() {
        let auth_token='Token '+this.state.Token
        console.log(auth_token)
        let config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': auth_token
            }
        }

        Axios.get(this.state.Link, config).then(
            function (response) {
                this.setState({Articles: response.data.articles});
                this.props.UPDATE_ARTICLES(response.data.articles)

            }.bind(this));

    }


    render() {
        return (
            <div className="card border">
                {this.props.art_list.Articles.map((article, index) => (
                        <div className="card mb-8" key={index}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={article.author.image} className="card-img" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{article.title}</h5>
                                        <p className="card-text">{article.body}</p>
                                        <p className="card-text"><small className="text-muted">Created at :{article.createdAt}</small></p>
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
        },
        REMOVE_ARTICLES:() =>{
            dispatch({type:types.REMOVE_ARTICLES})
        }
    }
}

function mapStateToProps(state) {
    return {art_list: state.articles_list};
}

export default connect(mapStateToProps,mapDispatchToProps)(Articles);
