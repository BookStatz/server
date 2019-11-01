const axios = require('../config/axiosConnection')

class StockController {
    static getCurrentStock(req, res, next) {
        axios.get(`/v1/stock?symbol=AAPL,MSFT,HSBA.L,SNAP,TWTR&api_token=${process.env.WORLD_TRADING_TOKEN}`)
            .then(stocks => {
                let data = stocks.data
                res.status(200).json(data)
            })
            .catch(err => {
                console.log(err);
            })
    }

    static getByDate(req, res, next) {
        axios.get(`/v1/history_multi_single_day?symbol=AAPL,MSFT&date=2019-10-31&api_token=${process.env.WORLD_TRADING_TOKEN}`)
            .then(stocks => {
                res.status(200).json(stocks.data)
            })
            .catch(err => {
                console.log(err)
            })
    }


    static getFromTo(req, res, next) {
        axios.get(`/v1/history?symbol=AAPL&sort=newest&date_from=2019-10-24&date_to=2019-10-31&api_token=${process.env.WORLD_TRADING_TOKEN}`)
            .then(stocks => {
                res.status(200).json(stocks.data)
            })
            .catch(err => {
                console.log(err)
            })
    }
}

module.exports = StockController