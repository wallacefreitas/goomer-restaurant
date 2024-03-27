import { CreateRestaurantController } from "../../../../infra/http/controller/restaurant/create-restaurant-controller";
import { InMemoryRestaurantRepository } from "../../../../infra/repositories/in-memory/in-memory-restaurant-repository";
import { CreateRestaurant } from "./create-restaurant";

const inMemoryRestaurantRepository = new InMemoryRestaurantRepository()
const createRestaurant = new CreateRestaurant(inMemoryRestaurantRepository)
const createRestaurantController = new CreateRestaurantController(createRestaurant)

export { createRestaurant, createRestaurantController }