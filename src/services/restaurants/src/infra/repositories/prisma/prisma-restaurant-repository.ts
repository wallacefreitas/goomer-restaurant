import { PrismaClient } from "@prisma/client"
import { RestaurantProps } from "../../../application/entities/restaurant";
import { RestaurantsRepository } from "../../../application/repositories/restaurants-repository";

type Restaurant = RestaurantProps

export class PrismaRestaurantRepository implements RestaurantsRepository {
  constructor(private prisma = new PrismaClient()) {

  }

  async create(restaurant: Restaurant): Promise<void> {
    await this.prisma.restaurant.create({
      data: {
        id: restaurant.id,
        name: restaurant.name,
        address: restaurant.address,
        image: restaurant.image,
        starts_at: restaurant.starts_at,
        ends_at: restaurant.ends_at,
        work_days: restaurant.work_days
      }
    })
  }

  async findAll(): Promise<Restaurant[]> {
    return await this.prisma.restaurant.findMany()
  }

  async findUnique(id: string): Promise<Restaurant | null> {
    //await this.prisma.$queryRaw`SELECT * FROM restaurant WHERE id = ${id};`

    return await this.prisma.restaurant.findUnique({
      where: {
        id
      }
    })
  }

  async remove(id: string): Promise<void> {
    await this.prisma.restaurant.delete({
      where: {
        id
      }
    })
  }

  async save(restaurant: Restaurant): Promise<void> {
    await this.prisma.restaurant.update({
      data: {
        name: restaurant.name,
        address: restaurant.address,
        image: restaurant.image
      },
      where: {
        id: restaurant.id
      }
    })
  }
}