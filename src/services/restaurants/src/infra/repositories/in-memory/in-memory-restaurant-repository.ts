import { RestaurantProps } from "../../../application/entities/restaurant";
import { RestaurantsRepository } from "../../../application/repositories/restaurants-repository";

type Restaurant = RestaurantProps

export class InMemoryRestaurantRepository implements RestaurantsRepository {
  private restaurants: Restaurant[] = [
    {
      id: "1",
      name: "Restaurant 1",
      address: "Address 1",
      image: ""
    },
    {
      id: "2",
      name: "Restaurant 2",
      address: "Address 2",
      image: ""
    }
  ];

  async create(restaurant: Restaurant): Promise<void> {
    this.restaurants.push(restaurant)
  }

  async findAll(): Promise<Restaurant[]> {
    return this.restaurants
  }

  async findUnique(id: string): Promise<Restaurant | null> {
    return this.restaurants.find(restaurant => restaurant.id === id) || null
  }

  async remove(id: string): Promise<void> {
    this.restaurants.splice(this.restaurants.findIndex(restaurants => restaurants.id === id), 1)
  }

  async save(restaurant: Restaurant): Promise<void> {
    this.restaurants.filter(restaurants => restaurants.id === restaurant.id).forEach(data => data = restaurant)
  }
}