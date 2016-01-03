'use strict'

module.exports = {
    jsonOk: function(){
        return function(req, res, next){
            res.jsonOk = function(data) {
                var result = {
                    ok: true
                }

                if (data)
                    for(let key in data)
                        result[key] = data[key];

                res.json(result)
            }

            next()
        }
    },

    jsonError: function(){
        return function(req, res, next){
            res.jsonError = function(error, data) {
                var result = {
                    ok: false,
                    error: error
                }

                if (data)
                    for(let key in data)
                        result[key] = data[key];

                res.json(result)
            }

            next()
        }
    }
}
