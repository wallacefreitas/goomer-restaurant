import { describe, expect, it } from "vitest";

import { FindAllRestaurants } from "./find-all-restaurants";
import { Restaurant } from "../../../entities/restaurant";
import { InMemoryRestaurantRepository } from "../../../../infra/repositories/in-memory/in-memory-restaurant-repository";

describe('List all restaurants', () => {
  it('should be able to list all restaurants', () => {
    const inMemoryRestaurantsRepository = new InMemoryRestaurantRepository()
    const restaurants = new FindAllRestaurants(inMemoryRestaurantsRepository)

    expect(restaurants).resolves.toBeInstanceOf(Restaurant)
  })
})