import { Brand, Car, CarModel } from '@prisma/client'

export interface CarWithDeps extends Car {
  model: CarModel
  brand: Brand
}

export interface BrandWithDeps extends Brand {
  cars: Car[]
}

export interface CarModelWithDeps extends CarModel {
  cars: Car[]
}
