import { Arg, Query, Resolver } from "type-graphql";
import { Restaurant } from "../models/restaurant-model";
import { RESTDataSource,  } from "@apollo/datasource-rest";

@Resolver(() => Restaurant)
export class RestaurantResolver extends RESTDataSource {
  override baseURL = process.env.APP_URL_MS1;

  @Query(() => [Restaurant])
  async restaurants(): Promise<Restaurant> {
    return await this.get('v1/restaurants');
  }

  @Query(() => Restaurant)
  async restaurant(@Arg("id") id: string): Promise<Restaurant> {
    return await this.get(`v1/restaurant/${id}`);
  }
}