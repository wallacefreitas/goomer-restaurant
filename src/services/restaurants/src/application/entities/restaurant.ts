import { randomUUID } from "crypto"
import { z, ZodError } from "zod"

export interface RestaurantProps {
  id?: string
  name: string
  address: string
  image: string
  starts_at: string
  ends_at: string
  work_days: number[]
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
      image: z.string(),
      starts_at: z.string(),
      ends_at: z.string(),
      work_days: z.number().array()
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

  get starts_at() {
    return this.props.starts_at
  }

  set starts_at(starts_at: string) {
    this.props.starts_at = starts_at;
  }

  get ends_at() {
    return this.props.ends_at
  }

  set ends_at(ends_at: string) {
    this.props.ends_at = ends_at;
  }

  get work_days() {
    return this.props.work_days
  }

  set work_days(work_days: number[]) {
    this.props.work_days = work_days;
  }
}