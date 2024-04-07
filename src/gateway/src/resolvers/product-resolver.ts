import { Arg, Query, Resolver } from "type-graphql";
import { Product } from "../models/product-model";
import { RESTDataSource } from "@apollo/datasource-rest";

@Resolver(() => Product)
export class ProductResolver extends RESTDataSource {
  override baseURL = process.env.APP_URL_MS2;

  @Query(() => [Product])
  async products(): Promise<Product> {
    return await this.get(`v1/products`);
  }

  @Query(() => Product)
  async product(@Arg("id") id: string): Promise<Product> {
    return await this.get(`v1/product/${id}`);
  }
}