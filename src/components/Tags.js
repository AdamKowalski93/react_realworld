import React from "react";
import Axios from "axios";
import Articles from "./Articles";


class Tags extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'Token': props.Token,
            'Tags': [],

        }
    }

    componentDidMount() {
        let config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + this.props.Token
            }
        }

        Axios.get('https://conduit.productionready.io/api/tags', config)
            .then(function (response) {
                this.setState({Tags: response.data.tags});
            }.bind(this));

    }

    onClick(e)
    {

        this.props.onClick('https://conduit.productionready.io/api/articles'+e.target.value)


    }

    render() {
        return (
            <div className="card text-white bg-secondary bg-light mb-3">
                <button type="button btn-sm" className="btn btn-primary btn-sm mr-1 mt-1" onClick={this.onClick.bind(this)}>reset</button>
                <div className="card-body">
                    {this.state.Tags.map((tag_string, index) => (
                        <button type="button"  key={index} value={'?tag='+tag_string} className="btn btn-primary btn-sm mr-1 mt-1" onClick={this.onClick.bind(this)}>{tag_string}</button>
                    ))}
                </div>
            </div>
        )
    }
}

export default Tags