import { randomUUID } from "crypto"
import { z, ZodError } from "zod"

export interface RestaurantProps {
  id?: string
  name: string
  address: string
  image: string
}

export class Restaurant {
  private props: RestaurantProps

  constructor(props: RestaurantProps) {

    if (!props.id) {
      props.id = randomUUID()
    }

    const restaurantSchema = z.object({
      name: z.string().min(1),
      address: z.string().min(1),
      image: z.string()
    })

    try {
      const restaurant = restaurantSchema.parse(props)
      this.props = restaurant;

    } catch(err) {
      if (err instanceof ZodError) {
        err.errors.map(error => { throw new Error(error.message) })
      }

      throw new Error("Unknown error")
    }
  }

  get name() {
    return this.props.name
  }

  set name(name: string) {
    this.props.name = name;
  }

  get address() {
    return this.props.address
  }

  set address(address: string) {
    this.props.address = address;
  }

  get image() {
    return this.props.image
  }

  set image(image: string) {
    this.props.image = image;
  }
}