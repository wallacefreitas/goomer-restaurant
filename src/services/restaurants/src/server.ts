import fastify, { FastifyReply, FastifyRequest } from "fastify";

import * as restaurantUseCase from "./application/use-cases/restaurant"
import { Restaurant } from "./application/entities/restaurant";

export const server = fastify()

server.post('/restaurant', (request: FastifyRequest<{Body: Restaurant}>, response: FastifyReply) => {
  return restaurantUseCase.createRestaurantController.handle(request, response)
})

server.listen({ port: 3333 }).then(() => {
  console.log("HTTP Server running 🚀...")
})