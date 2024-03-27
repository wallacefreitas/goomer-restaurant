import { FindAllRestaurantsController } from "../../../../infra/http/controller/restaurant/find-all-restaurants-controller";
import { InMemoryRestaurantRepository } from "../../../../infra/repositories/in-memory/in-memory-restaurant-repository";
import { FindAllRestaurants } from "./find-all-restaurants";

const inMemoryRestaurantRepository = new InMemoryRestaurantRepository()
const findAllRestaurants = new FindAllRestaurants(inMemoryRestaurantRepository)
const findAllRestaurantsController = new FindAllRestaurantsController(findAllRestaurants)

export { findAllRestaurants, findAllRestaurantsController }