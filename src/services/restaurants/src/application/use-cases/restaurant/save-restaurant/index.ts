import { SaveRestaurantController } from "../../../../infra/http/controller/restaurant/save-restaurant-controller";
import { InMemoryRestaurantRepository } from "../../../../infra/repositories/in-memory/in-memory-restaurant-repository";
import { PrismaRestaurantRepository } from "../../../../infra/repositories/prisma/prisma-restaurant-repository";
import { SaveRestaurant } from "./save-restaurant";

const inMemoryRestaurantRepository = new InMemoryRestaurantRepository()
const prismaRestaurantRepository = new PrismaRestaurantRepository()
const saveRestaurant = new SaveRestaurant(prismaRestaurantRepository)
const saveRestaurantController = new SaveRestaurantController(saveRestaurant)

export { saveRestaurant, saveRestaurantController }