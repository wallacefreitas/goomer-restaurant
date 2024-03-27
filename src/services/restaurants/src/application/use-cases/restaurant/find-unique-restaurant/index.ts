import { FindUniqueRestaurantController } from "../../../../infra/http/controller/restaurant/find-unique-restaurant-controller";
import { InMemoryRestaurantRepository } from "../../../../infra/repositories/in-memory/in-memory-restaurant-repository";
import { FindUniqueRestaurant } from "./find-unique-restaurant";

const inMemoryRestaurantRepository = new InMemoryRestaurantRepository()
const findUniqueRestaurant = new FindUniqueRestaurant(inMemoryRestaurantRepository)
const findUniqueRestaurantController = new FindUniqueRestaurantController(findUniqueRestaurant)

export { findUniqueRestaurant, findUniqueRestaurantController }