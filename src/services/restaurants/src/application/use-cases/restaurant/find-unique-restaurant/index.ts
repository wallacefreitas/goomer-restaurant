import { FindUniqueRestaurantController } from "../../../../infra/http/controller/restaurant/find-unique-restaurant-controller";
import { InMemoryRestaurantRepository } from "../../../../infra/repositories/in-memory/in-memory-restaurant-repository";
import { PrismaRestaurantRepository } from "../../../../infra/repositories/prisma/prisma-restaurant-repository";
import { FindUniqueRestaurant } from "./find-unique-restaurant";

const inMemoryRestaurantRepository = new InMemoryRestaurantRepository()
const prismaRestaurantRepository = new PrismaRestaurantRepository()
const findUniqueRestaurant = new FindUniqueRestaurant(prismaRestaurantRepository)
const findUniqueRestaurantController = new FindUniqueRestaurantController(findUniqueRestaurant)

export { findUniqueRestaurant, findUniqueRestaurantController }