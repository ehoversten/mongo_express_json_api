let path = require('path')
let ApiController = require('../controllers/ApiController')

module.exports = app => {
  app.get('/', ApiController.all)
  app.get('/new/:name/', ApiController.create)
  app.get('/remove/:name/', ApiController.remove)
  app.get('/:name', ApiController.findOne)
}
