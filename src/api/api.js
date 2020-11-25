import Axios from "axios";

const fetch_data = async (dane) =>
{

    try {
        let config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }


        let data = {
            "user": {
                email: dane.data[0],
                password: dane.data[1]
            }
        }


        const response =   await Axios.post('https://conduit.productionready.io/api/users/login', data, config)
        console.log(response)
        localStorage.setItem('login_parameters', JSON.stringify(response.data))
        return response
    }

    catch (e) {
        console.log(e);
    }


}

export default fetch_data

