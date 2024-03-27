import { RemoveRestaurantController } from "../../../../infra/http/controller/restaurant/remove-restaurant-controller";
import { InMemoryRestaurantRepository } from "../../../../infra/repositories/in-memory/in-memory-restaurant-repository";
import { RemoveRestaurant } from "./remove-restaurant";

const inMemoryRestaurantRepository = new InMemoryRestaurantRepository()
const removeRestaurant = new RemoveRestaurant(inMemoryRestaurantRepository)
const removeRestaurantController = new RemoveRestaurantController(removeRestaurant)

export { removeRestaurant, removeRestaurantController }