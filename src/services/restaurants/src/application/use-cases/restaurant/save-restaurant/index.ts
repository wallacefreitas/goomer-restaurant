import { SaveRestaurantController } from "../../../../infra/http/controller/restaurant/save-restaurant-controller";
import { InMemoryRestaurantRepository } from "../../../../infra/repositories/in-memory/in-memory-restaurant-repository";
import { SaveRestaurant } from "./save-restaurant";

const inMemoryRestaurantRepository = new InMemoryRestaurantRepository()
const saveRestaurant = new SaveRestaurant(inMemoryRestaurantRepository)
const saveRestaurantController = new SaveRestaurantController(saveRestaurant)

export { saveRestaurant, saveRestaurantController }