const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// TODO sitemap.xml https://github.com/zeit/next.js/issues/751

app.prepare()
.then(() => {
  const server = express()

  // server.get('/a', (req, res) => {
  //   return app.render(req, res, '/b', req.query)
  // })

  server.get('/:filterType(all|flow|hub)/:filterId?', (req, res) => {
    return app.render(req, res, '/PostList', req.query)
  })

  server.get('/b', (req, res) => {
    res.writeHead(302, { Location: '/b/about' })
    res.end()
  })

  server.get('/b/about/:my', (req, res) => {
    return app.render(req, res, '/aPage')
  })

  server.get('/post/:slug', (req, res) => {
    return app.render(req, res, '/post')
  })

  server.get('/robots.txt', (req, res) => {
    res.type('text/plain')
    res.send("User-agent: *\nDisallow: /")
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
