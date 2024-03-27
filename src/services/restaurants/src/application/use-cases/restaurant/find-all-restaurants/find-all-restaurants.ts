import { RestaurantProps } from "../../../entities/restaurant";
import { RestaurantsRepository } from "../../../repositories/restaurants-repository";

type Restaurant = RestaurantProps
type CreateRestaurantResponse = Restaurant[]

export class FindAllRestaurants {
  constructor(private restaurantsRepository: RestaurantsRepository) {

  }

  async execute(): Promise<CreateRestaurantResponse> {
    return await this.restaurantsRepository.findAll();
  }
}