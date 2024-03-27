import { describe, expect, it } from "vitest";

import { CreateRestaurant } from "./create-restaurant";
import { Restaurant } from "../../../entities/restaurant";
import { InMemoryRestaurantRepository } from "../../../../infra/repositories/in-memory/in-memory-restaurant-repository";

describe('Create restaurant', () => {
  it('should be able to create an appointment', () => {
    const inMemoryRestaurantsRepository = new InMemoryRestaurantRepository()
    const createRestaurant = new CreateRestaurant(inMemoryRestaurantsRepository)

    expect(createRestaurant.execute({
      name: 'Restaurant 4',
      address: 'Street 4',
      image: ''
    })).resolves.toBeInstanceOf(Restaurant)
  })
})