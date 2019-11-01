const axios = require('../config/axiosConnection')

class StockController {
    static getCurrentStock(req, res, next) {
        axios.get(`/v1/stock?symbol=AAPL,MSFT,HSBA.L,SNAP,TWTR&api_token=${process.env.WORLD_TRADING_TOKEN}`)
            .then(stocks => {
                let data = stocks.data
                res.status(200).json({
                    data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    static getByDate(req, res, next) {
        axios.get(`/v1/history_multi_single_day?symbol=${req.body.stock}&date=${req.body.date}&api_token=${process.env.WORLD_TRADING_TOKEN}`)
            .then(stocks => {
                let data = stocks.data
                res.status(200).json({
                    data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }


    static getFromTo(req, res, next) {
        axios.get(`/v1/history?symbol=${req.body.stock}&sort=newest&date_from=${req.body.lastDate}&date_to=${req.body.currentDate}&api_token=${process.env.WORLD_TRADING_TOKEN}`)
            .then(stocks => {
                let data = stocks.data
                res.status(200).json({
                    data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

module.exports = StockController