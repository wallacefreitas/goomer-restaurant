import { FastifyReply, FastifyRequest } from "fastify";

import { RemoveRestaurant } from "../../../../application/use-cases/restaurant/remove-restaurant/remove-restaurant";

export class RemoveRestaurantController {
  constructor(private removeRestaurantUseCase: RemoveRestaurant) {

  }

  async handle(request: FastifyRequest<{Params: { id: string } }>, response: FastifyReply): Promise<FastifyReply> {
    try {
      const { id } = request.params
      
      await this.removeRestaurantUseCase.execute(id)

      return response.status(200).send({
        message: `Restaurant ${id} removed`
      });
    } catch (err: any) {
      return response.status(400).send({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}