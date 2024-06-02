import { CarWithDeps } from '@/types/prismaTypes'
import Link from 'next/link'

const CarItem = ({ car }: { car: CarWithDeps }) => {
  return (
    <li className="flex justify-between gap-x-6 py-5">
    <Link href={`car/${car.id}`} className="cursor-pointer">
      <div className="flex min-w-0 gap-x-4">{car.model.name}</div>
    </Link>
    </li>
  )
}

export default CarItem
