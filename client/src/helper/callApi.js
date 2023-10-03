import axios from 'axios'

export default function callApi(endpoint, data={}) {
    return new Promise((resolve, reject) => {
        const env = 'PRODUCTION'
        const BASE_URL = env === 'PRODUCTION' ? 'http://54.212.174.138:3000' : 'http://localhost:3000'
        const url = `${BASE_URL}/api/${endpoint}`  
        // const config = { headers: { "Authorization": `Bearer ${localStorage.getItem('user_token') && JSON.parse(localStorage.getItem('user_token')).value}` } }
        const body = data
        axios.post(url, body).then(res => {
            return resolve(res.data)
        }).catch(err => {
            return reject(err)
        })
    })
}