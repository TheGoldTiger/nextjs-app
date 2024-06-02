import prisma from '@/utils/prisma'
import Link from 'next/link'

const fetchCarDetail = async (id: string) => {
  const car = await prisma.car.findUnique({
    where: {
      id: id
    },
    include: {
      model: true,
      brand: true,
    }
  })
  return car
}
 const formatNumber = (number) => {
   if (number === null || number === undefined) {
     return "Neuvedeno";
   }

  let price = new Intl.NumberFormat('cz-CS', {
    style: 'decimal',
    minimumFractionDigits: 0,
  }).format(number);
  return price + ' Kč';
};

const CarDetailPage = async ({ params }: { params: { id: string } }) => {
  const car = await fetchCarDetail(params.id)

  return (
    <div>
      <Link href={'/'}>
        <div className='flex flex-row items-left items-center p-2 cursor-pointer'>
          <svg className='w-4 h-4 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'
               xmlns='http://www.w3.org/2000/svg'>
            <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 19l-7-7 7-7'></path>
          </svg>
          <span>Zpět na přehled</span>
        </div>
      </Link>
      <div className='flex flex-col items-center'>
        <h1 className='text-4xl font-bold text-gray-900 leading-tight mb-4'>Detail
          auta {car?.brand.name} {car?.model.name}</h1>
        <div className='flex flex-row items-center justify-start'>
          <div className='flex flex-col items-center p-2 w-1/2'>
            <img src={car?.image} alt={car?.brand.name} />
          </div>

          <div className='flex flex-col p-2 cursor-pointer w-1/2 justify-start'>
            <div className='flex flex-col items-left justify-start'>
              <div>Značka: {car?.brand.name}</div>
              <div>Model: {car?.model.name}</div>
              <div>Popis: {car?.description}</div>
              <div>Price: {formatNumber(car?.price)}</div>
              <div>Barva: {car?.color ? car.year : "Neuvedeno"}</div>
              <div>Rok: {car?.year ? car.year : "Neuvedeno"}</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CarDetailPage
