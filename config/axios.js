const axios = require('axios')

module.exports = axios.create({
    baseURL : 'http://www.eventbriteapi.com/v3',
    headers : {
        Authorization : process.env.ACCESS_TOKEN_EVENTBRITE
    }
})