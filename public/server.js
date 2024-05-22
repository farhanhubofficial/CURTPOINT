

const jsonServer = require('json-server')
const multer  = require('multer')

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/Plain-Curtainns')
    },
    filename: function (req, file, cb) {
let date = new Date() 
let imageFilename = date.getTime()
req.body.imageFilename = imageFilename
        cb(null, imageFilename)
    }
  })
  
  const bodyParser = multer({ storage: storage }).any()


// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(bodyParser)
server.post("/ProductList",(req, res, next) => {
  if (req.body.price) {
    req.body.price = Number( req.body.price)
  }
  // Continue to JSON Server router
  next()
})

// Use default router
server.use(router)
server.listen(3002, () => {
  console.log('JSON Server is running')
})