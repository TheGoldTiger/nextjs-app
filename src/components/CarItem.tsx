import { CarWithDeps } from '@/types/prismaTypes'
import Link from 'next/link'

const CarItem = ({ car }: { car: CarWithDeps }) => {
  return (
    <Link href={`car/${car.id}`} className='cursor-pointer'>
      <li className='flex justify-between gap-x-6 py-5 hover:bg-gray-200'>

        <div className='flex min-w-0 gap-x-4'>
          <div className="p-1">
            <img src={car.image} alt={car.model.name} className='h-16 w-20' />
          </div>
          <div>
            <div className='text-lg font-bold'>{car.brand.name}</div>
            <div>{car.model.name}</div>
            <div>{car.year}</div>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default CarItem
