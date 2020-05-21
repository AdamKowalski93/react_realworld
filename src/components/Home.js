import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Articles from "./Articles";
import Tags from "./Tags";
import {get_jwt} from "./guardians/Auth"


class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'Token': get_jwt()
        }

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
                        <Articles Token={this.state.Token}/>
                    </div>
                    <div className="col-md-4">
                        <Tags Token={this.state.Token}/>
                    </div>
                </div>
            </div>

        )
    }
}

export default Home