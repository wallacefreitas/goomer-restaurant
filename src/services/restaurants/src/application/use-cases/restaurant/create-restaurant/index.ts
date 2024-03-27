import { CreateRestaurantController } from "../../../../infra/http/controller/restaurant/create-restaurant-controller";
import { InMemoryRestaurantRepository } from "../../../../infra/repositories/in-memory/in-memory-restaurant-repository";
import { PrismaRestaurantRepository } from "../../../../infra/repositories/prisma/prisma-restaurant-repository";
import { CreateRestaurant } from "./create-restaurant";

const inMemoryRestaurantRepository = new InMemoryRestaurantRepository()
const prismaRestaurantRepository = new PrismaRestaurantRepository()
const createRestaurant = new CreateRestaurant(prismaRestaurantRepository)
const createRestaurantController = new CreateRestaurantController(createRestaurant)

export { createRestaurant, createRestaurantController }