import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Articles from "./Articles";


class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'isToken': false,
            'Token': ''
        }

    }

    componentDidMount() {
        let jwt_Token = JSON.parse(localStorage.getItem('login_parameters'))
        if (jwt_Token) {
            this.setState({'isToken': true, 'Token': jwt_Token.user.token})
        }

    }


    render() {
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-md-12 ">
                        <div className="jumbotron bg-success" >
                            <h1 class="text-white text-center font-weight-bold">
                               Conduit
                            </h1>
                            <p class="text-white text-center">
                                A place to share your knowledge.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        {this.state.isToken ? <Articles Token={this.state.Token}/> : <p>Nalezy sie zalogowac</p>
                        }
                    </div>
                    <div className="col-md-4">
                        <div className="card text-white bg-secondary bg-light mb-3">
                            <div className="card-body">
                                <span className="badge badge-pill badge-secondary">Secondary</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Home