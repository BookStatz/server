const axios = require('axios')

class newsController {
  static getTopHeadlines(req, res, next) {
    console.log('masuk sini');
    
    axios({
      method: 'get',
      url: `https://newsapi.org/v2/top-headlines?country=id&sortBy=publishedAt&apiKey=${process.env.NEWS_API_KEY}`
    })
      .then(({data}) => {
        res.status(200).json(data)
      })
      .catch(next)
  }

  static search(req, res, next) {
    axios({
      method: 'get',
      url: `https://newsapi.org/v2/everything?q=${req.params.query}&sortBy=publishedAt&apiKey=${process.env.NEWS_API_KEY}`
    })
      .then(({data}) => {
        res.status(200).json(data)
      })
      .catch(next)
  }

  // date still not working
  
  // static searchByDate(req, res, next) {
  //   // Date example: 
  //   axios({
  //     method: 'get',
  //     url: `https://newsapi.org/v2/top-headlines?q=${req.params.query}&country=id&apiKey=${process.env.NEWS_API_KEY}`
  //   })
  //     .then()
  //     .catch(next)
  // }
}

module.exports = newsController