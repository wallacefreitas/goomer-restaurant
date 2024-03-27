import { Restaurant } from "../../../entities/restaurant";
import { RestaurantsRepository } from "../../../repositories/restaurants-repository";

interface CreateRestaurantRequest {
  name: string;
  address: string;
  image: string;
}

type CreateRestaurantResponse = Restaurant

export class CreateRestaurant {
  constructor(private restaurantsRepository: RestaurantsRepository) {

  }

  async execute({ name, address, image }: CreateRestaurantRequest): Promise<CreateRestaurantResponse> {
    const restaurant = new Restaurant({
      name,
      address,
      image
    })

    await this.restaurantsRepository.create(restaurant);

    return restaurant
  }
}