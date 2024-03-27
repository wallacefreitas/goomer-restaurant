import { RestaurantProps } from "../entities/restaurant";

type Restaurant = RestaurantProps

export interface RestaurantsRepository {
  create(restaurant: Restaurant): Promise<void>;
  findAll(): Promise<Restaurant[]>;
  findUnique(id: string): Promise<Restaurant | null>;
  remove(id: string): Promise<void>;
  save(restaurant: Restaurant): Promise<void>;
}