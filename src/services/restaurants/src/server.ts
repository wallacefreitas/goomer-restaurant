import fastify from "fastify";

import { routes } from "./routes";

async function boostrap() {
  const server = fastify()

  await server.register(routes);

  await server.listen({ port: 3333, host: '0.0.0.0' }).then(() => {
    console.log("🚀 HTTP Server running...")
  })
}

boostrap()