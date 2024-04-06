import { Restaurant } from "../../../entities/restaurant";
import { RestaurantsRepository } from "../../../repositories/restaurants-repository";

interface SaveRestaurantRequest {
  id: string;
  name: string;
  address: string;
  image: string;
  starts_at: string;
  ends_at: string;
  work_days: number[]
}

type SaveRestaurantResponse = Restaurant

export class SaveRestaurant {
  constructor(private restaurantsRepository: RestaurantsRepository) {

  }

  async execute(restaurant: SaveRestaurantRequest): Promise<void> {
    await this.restaurantsRepository.save(restaurant);
  }
}