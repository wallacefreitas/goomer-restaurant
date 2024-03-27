import { FastifyReply, FastifyRequest } from "fastify";
import { SaveRestaurant } from "../../../../application/use-cases/restaurant/save-restaurant/save-restaurant";
import { RestaurantProps } from "../../../../application/entities/restaurant";

type Restaurant = RestaurantProps

export class SaveRestaurantController {
  constructor(private saveRestaurantUseCase: SaveRestaurant) {

  }

  async handle(request: FastifyRequest<{Body: Restaurant}>, response: FastifyReply): Promise<FastifyReply> {
    const { name, address, image } = request.body;

    try {
      await this.saveRestaurantUseCase.execute({
        name,
        address,
        image
      })

      return response.status(200).send();
    } catch (err: any) {
      return response.status(400).send({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}