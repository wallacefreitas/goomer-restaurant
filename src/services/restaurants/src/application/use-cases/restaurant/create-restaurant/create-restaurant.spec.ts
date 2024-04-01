import { describe, expect, it } from "vitest";

import { CreateRestaurant } from "./create-restaurant";
import { Restaurant } from "../../../entities/restaurant";
import { InMemoryRestaurantRepository } from "../../../../infra/repositories/in-memory/in-memory-restaurant-repository";

describe('Create restaurant', () => {
  it('should be able to create an restaurant', () => {
    const inMemoryRestaurantsRepository = new InMemoryRestaurantRepository()
    const createRestaurant = new CreateRestaurant(inMemoryRestaurantsRepository)

    expect(createRestaurant.execute({
      name: 'Restaurant 4',
      address: 'Street 4',
      image: '',
      starts_at: '',
      ends_at: '',
      work_days: [0, 1, 2]
    })).resolves.toBeInstanceOf(Restaurant)
  })
})