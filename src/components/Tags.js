import React from "react";
import Axios from "axios";
import {connect} from "react-redux";
import types from "../constans/types";
import store from "../store";

class Tags extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'Token': '',
            'Tags':[]
        }
    }

    componentWillMount() {
        this.setState({Token:store.getState().auth.token_value})
    }

    componentDidMount() {
        let config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + this.state.Token
            }
        }

        Axios.get('https://conduit.productionready.io/api/tags', config)
            .then(function (response) {
                this.setState({Tags: response.data.tags});
                this.props.UPDATE_TAGS(response.data.tags)
            }.bind(this))


    }

    onClick(e) {

        this.props.onClick('https://conduit.productionready.io/api/articles' + e.target.value)


    }

    render() {

        return (
            <div className="card text-white bg-secondary bg-light mb-3">
                <button type="button btn-sm" className="btn btn-primary btn-sm mr-1 mt-1"
                        onClick={this.onClick.bind(this)}>reset
                </button>
                <div className="card-body">
                    {this.state.Tags.map((tag_string, index) => (
                        <button type="button" key={index} value={'?tag=' + tag_string}
                                className="btn btn-primary btn-sm mr-1 mt-1"
                                onClick={this.onClick.bind(this)}>{tag_string}</button>
                    ))}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {tag_list: state.tags_list};
}

function mapDispatchToProps(dispatch) {
    return {
        UPDATE_TAGS: (payload) => {
            dispatch({type: types.ADD_TAGS, item:payload})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Tags);
