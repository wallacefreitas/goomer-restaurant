import { FastifyReply, FastifyRequest } from "fastify";

import { FindUniqueRestaurant } from "../../../../application/use-cases/restaurant/find-unique-restaurant/find-unique-restaurant";

export class FindUniqueRestaurantController {
  constructor(private findUniqueRestaurantUseCase: FindUniqueRestaurant) {

  }

  async handle(request: FastifyRequest<{Params: { id: string } }>, response: FastifyReply): Promise<FastifyReply> {
    try {
      const { id } = request.params
      const restaurants = await this.findUniqueRestaurantUseCase.execute(id)

      return response.status(200).send(restaurants);
    } catch (err: any) {
      return response.status(400).send({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}