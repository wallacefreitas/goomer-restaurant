import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

import * as restaurantUseCase from "./application/use-cases/restaurant"
import { Restaurant } from "./application/entities/restaurant";

export async function routes(server: FastifyInstance) {
  server.post('/restaurant', (request: FastifyRequest<{Body: Restaurant}>, response: FastifyReply) => {
    return restaurantUseCase.createRestaurantController.handle(request, response)
  })

  server.get('/restaurants', (request: FastifyRequest, response: FastifyReply) => {
    return restaurantUseCase.findAllRestaurantsController.handle(request, response)
  })

  server.get('/restaurant/:id', (request: FastifyRequest<{Params: { id: string }}>, response: FastifyReply) => {
    return restaurantUseCase.findUniqueRestaurantController.handle(request, response)
  })

  server.delete('/restaurant/:id', (request: FastifyRequest<{Params: { id: string }}>, response: FastifyReply) => {
    return restaurantUseCase.removeRestaurantController.handle(request, response)
  })

  server.put('/restaurant/:id', (request: FastifyRequest<{Params: { id: string }, Body: Restaurant}>, response: FastifyReply) => {
    return restaurantUseCase.saveRestaurantController.handle(request, response)
  })
}
