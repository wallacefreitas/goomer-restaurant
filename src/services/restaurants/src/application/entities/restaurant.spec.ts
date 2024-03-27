import { it, describe, expect } from "vitest"
import { Restaurant } from "./restaurant"

describe('restaurant class', () => {
  it("allow created an restaurant", () => {
    const data = {
      name: "Restaurant XPTO",
      address: "Street of Rage",
      image: "http://localhost:1000/images/123456789.png"
    }

    const restaurant = new Restaurant(data)

    expect(restaurant).toBeInstanceOf(Restaurant)
  })

  it("not allow created an restaurant without name", () => {
    const data = {
      name: "",
      address: "Street of Rage 2",
      image: "http://localhost:1000/images/123456789.png"
    }

    expect(() => new Restaurant(data)).toThrowError()
  })

  it("allow created an restaurant without image", () => {
    const data = {
      name: "",
      address: "Street of Rages 3",
      image: ""
    }

    expect(() => new Restaurant(data)).toThrowError()
  })
})