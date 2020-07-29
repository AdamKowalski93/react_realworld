import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Articles from "./Articles";
import Tags from "./Tags";
import store from "../store";
import {connect} from "react-redux";


class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'Token': "",
            'Article_link':'https://conduit.productionready.io/api/articles'
        }
        this.onChange_link = this.onChange_link.bind(this)
        this.checkAuth = this.checkAuth.bind(this)

    }

    checkAuth()
    {
       if(this.props.auth == null)
       {
           console.log('redirect to sign')
           this.props.history.push('/sign')
       }
    }

    componentDidMount() {
        this.checkAuth()
        this.setState({Token:store.getState().auth.token_value})
    }

    onChange_link(newLink)
    {

        this.setState({Article_link: newLink})
    }

    render() {
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-md-12 ">
                        <div className="jumbotron bg-success">
                            <h1 className="text-white text-center font-weight-bold">
                                Conduit
                            </h1>
                            <p className="text-white text-center">
                                A place to share your knowledge.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">

                    <div className="col-md-8">
                        <Articles Token={this.state.Token} Link={this.state.Article_link} />
                    </div>
                    <div className="col-md-4">
                        <Tags Token={this.state.Token} onClick={this.onChange_link}/>
                    </div>
                </div>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {auth: state.auth.token};
}

export default connect(mapStateToProps,null)(Home);