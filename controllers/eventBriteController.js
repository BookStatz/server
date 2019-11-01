const axios = require('../config/axios')
class EventBrite {
    static findByCategories(req,res,next){
        axios.get('/categories/')
            .then(data=>{
                res.status(200).json(data.data)
            })
            .catch(next)
    }

    static findByName(req,res,next){
        axios.get(`/events/search/?q=${req.body.query}`)
            .then(data=>{
                res.status(200).json(data.data)
            })
            .catch(next)
    }

    static findByDate(req,res,next){
        axios.get(`/events/search/?start_date.keyword=this_week`)
            .then(data=>{
              console.log("data dapet ga");
              
                res.status(200).json(data.data)
            })
            .catch(next)
    }

    static findByLocation(req,res,next){
        axios.get(`/events/search/?location.address=${queryLocation}`)
            .then(data=>{
                res.status(200).json(data.data)
            })
            .catch(next)
    }
}

module.exports = EventBrite