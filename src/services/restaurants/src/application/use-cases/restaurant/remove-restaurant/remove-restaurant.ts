import { RestaurantsRepository } from "../../../repositories/restaurants-repository";


export class RemoveRestaurant {
  constructor(private restaurantsRepository: RestaurantsRepository) {

  }

  async execute(id: string): Promise<void> {
    return await this.restaurantsRepository.remove(id);
  }
}