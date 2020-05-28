import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Articles from "./Articles";
import Tags from "./Tags";
import {get_jwt} from "./guardians/Auth"


class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'Token': get_jwt(),
            'Article_link':'https://conduit.productionready.io/api/articles'
        }
        this.onChange_link = this.onChange_link.bind(this)

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

export default Home