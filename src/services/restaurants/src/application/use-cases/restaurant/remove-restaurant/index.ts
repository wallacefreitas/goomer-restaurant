import { RemoveRestaurantController } from "../../../../infra/http/controller/restaurant/remove-restaurant-controller";
import { InMemoryRestaurantRepository } from "../../../../infra/repositories/in-memory/in-memory-restaurant-repository";
import { PrismaRestaurantRepository } from "../../../../infra/repositories/prisma/prisma-restaurant-repository";
import { RemoveRestaurant } from "./remove-restaurant";

const inMemoryRestaurantRepository = new InMemoryRestaurantRepository()
const prismaRestaurantRepository = new PrismaRestaurantRepository()
const removeRestaurant = new RemoveRestaurant(prismaRestaurantRepository)
const removeRestaurantController = new RemoveRestaurantController(removeRestaurant)

export { removeRestaurant, removeRestaurantController }