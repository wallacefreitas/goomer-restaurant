import { Restaurant } from "../../../entities/restaurant";
import { RestaurantsRepository } from "../../../repositories/restaurants-repository";

interface SaveRestaurantRequest {
  id: string;
  name: string;
  address: string;
  image: string;
}

type SaveRestaurantResponse = Restaurant

export class SaveRestaurant {
  constructor(private restaurantsRepository: RestaurantsRepository) {

  }

  async execute(restaurant: SaveRestaurantRequest): Promise<void> {
    await this.restaurantsRepository.save(restaurant);
  }
}