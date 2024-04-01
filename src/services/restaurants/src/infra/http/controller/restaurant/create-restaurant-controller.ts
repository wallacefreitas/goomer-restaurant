import { FastifyReply, FastifyRequest } from "fastify";
import { CreateRestaurant } from "../../../../application/use-cases/restaurant/create-restaurant/create-restaurant";
import { RestaurantProps } from "../../../../application/entities/restaurant";

type Restaurant = RestaurantProps

export class CreateRestaurantController {
  constructor(private createRestaurantUseCase: CreateRestaurant) {

  }

  async handle(request: FastifyRequest<{Body: Restaurant}>, response: FastifyReply): Promise<FastifyReply> {
    const { name, address, image, starts_at, ends_at, work_days } = request.body;

    try {
      await this.createRestaurantUseCase.execute({
        name,
        address,
        image,
        starts_at,
        ends_at,
        work_days
      })

      return response.status(201).send();
    } catch (err: any) {
      return response.status(400).send({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}