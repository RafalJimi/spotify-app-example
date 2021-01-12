const fastify = require('fastify')({ logger: true })
const connectDB = require("./config/mongoDB");


require("dotenv").config({ path: "./server/config/config.env", debug: true });

fastify.register(require('fastify-cors'), { 
  origin: process.env.CLIENT_URL,
})

connectDB();

fastify.register(require(`./routes/auth.route`), { prefix: '/api/auth' })

const PORT = process.env.PORT

const start = async () => {
  try {
    await fastify.listen(PORT)
    fastify.log.info(`Server is running at port ${PORT}`)
  } catch (err) {
    process.exit(1)
  }
}

start()