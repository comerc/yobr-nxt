const bodyParser = require('body-parser')
const fs = require('fs')
const path = require('path')
const pify = require('pify')
const merge = require('lodash/merge')

const HTTP_CREATED = 201
const HTTP_ISE = 500
const HTTP_BAD_REQUEST = 400

const jsonParser = bodyParser.json()
const fileName = path.resolve('data/storage.json') // можно иначе: path.join(process.cwd(), 'data/storage.json')

module.exports = (server) => {
  server.get('/api/posts', (req, res) => {
    pify(fs.readFile)(fileName)
      .then(posts =>
        res.set('Content-Type', 'application/json; charset=utf-8').send(posts)
      )
      .catch(error => {
        console.log('error', error)
        res.sendStatus(HTTP_ISE)
      })
  })
  server.post('/api/posts/reset', (req, res) => {
    const posts = require('./posts')
    pify(fs.writeFile)(fileName, JSON.stringify(posts), 'utf-8')
      .then(() => res.sendStatus(HTTP_CREATED))
      .catch(error => {
        console.log('error', error)
        res.sendStatus(HTTP_ISE)
      })
  })
  server.post('/api/posts', jsonParser, (req, res) => {
    // TODO разблюдовка по версии API: req.get('X-Accept-API-Version')
    if (!req.body) {
      return res.sendStatus(HTTP_BAD_REQUEST)
    }
    const post = req.body.post
    pify(fs.readFile)(fileName)
      .then(JSON.parse)
      .then(posts => {
        if (post.id) {
          const index = posts.findIndex(element => element.id === post.id)
          posts[index] = merge(posts[index], post)
        } else {
          post.id = +Math.random().toString().slice(2)
          post.published = (new Date()).toLocaleString()
          // post.author = state.currentUser
          posts.push(post)
        }
        // console.log('post', post)
        return posts
      })
      .then(posts =>
        pify(fs.writeFile)(fileName, JSON.stringify(posts), 'utf-8')
      )
      .then(() =>
        res.set('Content-Type', 'text/plain; charset=utf-8').send(post.id)
      )
      .catch(error => {
        console.log('error', error)
        res.sendStatus(HTTP_ISE)
      })
  })
}
