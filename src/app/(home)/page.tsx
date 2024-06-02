import CarList from '@/components/CarList'
import prisma from '@/utils/prisma'
import BrandAndModelFormFields from '@/components/BrandAndModelFormFields'

const getCars = async () => {
  const cars = await prisma.car.findMany({
    include: {
      model: true,
      brand: true,
    },
  })
  return cars
}

const fetchBrands = async () => {
  const brands = await prisma.brand.findMany()
  return brands
}

const fetchModels = async () => {
  const models = await prisma.carModel.findMany()
  return models
}

const HomePage = async () => {
  const brands = await fetchBrands()
  const models = await fetchModels()
  const cars = await getCars()
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">Home Page</h1>

      <CarList cars={cars} brands={brands} models={models}/>
    </div>
  )
}

export default HomePage
