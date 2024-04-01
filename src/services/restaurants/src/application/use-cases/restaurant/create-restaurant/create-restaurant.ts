import { Restaurant } from "../../../entities/restaurant";
import { RestaurantsRepository } from "../../../repositories/restaurants-repository";

interface CreateRestaurantRequest {
  name: string;
  address: string;
  image: string;
  starts_at: string;
  ends_at: string;
  work_days: number[];
}

type CreateRestaurantResponse = Restaurant

export class CreateRestaurant {
  constructor(private restaurantsRepository: RestaurantsRepository) {

  }

  async execute({ name, address, image, starts_at, ends_at, work_days }: CreateRestaurantRequest): Promise<CreateRestaurantResponse> {
    const restaurant = new Restaurant({
      name,
      address,
      image,
      starts_at,
      ends_at,
      work_days
    })

    await this.restaurantsRepository.create(restaurant);

    return restaurant
  }
}