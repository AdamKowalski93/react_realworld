import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Articles from "./Articles";


class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'isToken': false,
            'Token' : ''
        }

    }

    componentDidMount() {
        let jwt_Token = JSON.parse(localStorage.getItem('login_parameters'))
        if (jwt_Token) {
            this.setState({'isToken': true,'Token':jwt_Token.user.token})
        }

    }


    render() {
        return (
            <div>

                {this.state.isToken ? <Articles Token={this.state.Token}/> : <p>Nalezy sie zalogowac</p>
                }
            </div>
        )
    }
}

export default Home