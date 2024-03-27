import { FastifyReply, FastifyRequest } from "fastify";
import { FindAllRestaurants } from "../../../../application/use-cases/restaurant/find-all-restaurants/find-all-restaurants";

export class FindAllRestaurantsController {
  constructor(private findAllRestaurantsUseCase: FindAllRestaurants) {

  }

  async handle(request: FastifyRequest, response: FastifyReply): Promise<FastifyReply> {
    try {
      const restaurants = await this.findAllRestaurantsUseCase.execute()

      return response.status(200).send(restaurants);
    } catch (err: any) {
      return response.status(400).send({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}