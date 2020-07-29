import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Redirect } from 'react-router';
import {connect} from "react-redux"
import store from "../../store";




class isAuthenticated extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Token:''
        }
    }

    componentDidMount() {
       this.setState({Token:store.getState().auth})
    }


    render() {
        if (store.getState().auth !== '') {
            console.log('redirect to home')
            return <Redirect to="/" />
        } else {
            console.log('redirect to sing')
            return <Redirect to="/sign" />;
        }
    }


}

function mapStateToProps(state) {
    return {auth: state.token};
}

export default connect(mapStateToProps,null)(isAuthenticated);