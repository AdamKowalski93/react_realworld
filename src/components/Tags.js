import React from "react";
import Axios from "axios";


class Tags extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'Token': props.Token,
            'Tags': []

        }
    }

    componentDidMount() {
        let config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + this.props.Token
            }
        }

        // Promises posiada funkcje jak isFulfilled dopytac jak ich tu uzyc

        Axios.get('https://conduit.productionready.io/api/tags', config)
            .then(function (response) {
                this.setState({Tags: response.data.tags});
            }.bind(this));

    }

    render() {
        return (
            <div className="card text-white bg-secondary bg-light mb-3">
                <div className="card-body">
                    {this.state.Tags.map((tag_string, index) => (
                        <span key={index} className="badge badge-pill badge-secondary">{tag_string}</span>
                    ))}
                </div>
            </div>
        )
    }
}

export default Tags