"use client";
import React, { useState } from 'react';
import CarItem from './CarItem';
import { BrandWithDeps, CarModelWithDeps, CarWithDeps } from '@/types/prismaTypes';
import BrandAndModelFormFields from '@/components/BrandAndModelFormFields';
import prisma from '@/utils/prisma';

type Props = {
  cars: CarWithDeps[],
  brands: BrandWithDeps[],
  models: CarModelWithDeps[]
};

const CarList = ({ cars, brands, models }: Props) => {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');

  const handleSelectionChange = (brandId: string, modelId: string) => {
    setSelectedBrand(brandId);
    setSelectedModel(modelId);
    // Perform any additional logic or filtering based on the selected brand and model
  };

  return (
    <div className="w-1/3">
      <BrandAndModelFormFields
        brands={brands}
        models={models}
        onSelectionChange={handleSelectionChange}
      />
      <ul role='list' className='divide-y divide-gray-100'>
        {cars
          .filter(car => (selectedBrand ? car.brandId === selectedBrand : true))
          .filter(car => (selectedModel ? car.modelId === selectedModel : true))
          .map(car => (
            <CarItem key={car.id} car={car} />
          ))}
      </ul>
    </div>
  );
};

export default CarList;
