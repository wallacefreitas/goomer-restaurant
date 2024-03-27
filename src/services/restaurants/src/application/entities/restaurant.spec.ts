import { it, describe, expect, test } from "vitest"
import { Restaurant } from "./restaurant"

test("created an restaurant", () => {
  const restaurant = new Restaurant({
    name: "Restaurant XPTO",
    address: "Street of Rage",
    image: "http://localhost:1000/images/123456789.png"
  })

  expect(restaurant).toBeInstanceOf(Restaurant)
  expect(restaurant.name).toEqual("Restaurant XPTO")
})

test("cannot created an restaurant without name", () => {
  expect(() => {
    new Restaurant({
      name: "",
      address: "Street of Rage 2",
      image: "http://localhost:1000/images/123456789.png"
    })
  }).toThrowError()
})

test("cannot created an restaurant without image", () => {
  const restaurant = new Restaurant({
    name: "Restaurant 2",
    address: "Street of Rages 3",
    image: ""
  })

  expect(restaurant).toBeInstanceOf(Restaurant)
})