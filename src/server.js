const Hapi = require('@hapi/hapi')
const routes = require('./routes')

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  })

  server.route(routes)

  await server.start()

  console.log(`Server berjalan pada ${server.info.uri}`)

  const response = server.response({ error: false, message: 'Catatan berhasil ditambahkan' })

  response.header('Access-Control-Allow-Origin', '*')

  return response
}

// Panggil fungsi init
init()
