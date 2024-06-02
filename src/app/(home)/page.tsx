import CarList from '@/components/CarList'
import prisma from '@/utils/prisma'

const getCars = async () => {
  const cars = await prisma.car.findMany({
    include: {
      model: true,
      brand: true,
    },
  })
  return cars
}

const HomePage = async () => {
  const cars = await getCars()
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">Home Page</h1>
      <CarList cars={cars} />
    </div>
  )
}

export default HomePage
