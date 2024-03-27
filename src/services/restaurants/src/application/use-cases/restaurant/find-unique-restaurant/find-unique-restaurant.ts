import { RestaurantProps } from "../../../entities/restaurant";
import { RestaurantsRepository } from "../../../repositories/restaurants-repository";

type Restaurant = RestaurantProps
type FindUniqueRestaurantResponse = Restaurant | null

export class FindUniqueRestaurant {
  constructor(private restaurantsRepository: RestaurantsRepository) {

  }

  async execute(id: string): Promise<FindUniqueRestaurantResponse> {
    return await this.restaurantsRepository.findUnique(id);
  }
}