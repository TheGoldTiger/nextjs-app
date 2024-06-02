'use client';
import { Brand, CarModel } from '@prisma/client';
import { Fragment, useMemo, useState } from 'react';

const BrandAndModelFormFields = ({
                                   models,
                                   brands,
                                   onSelectionChange,
                                 }: {
  models: CarModel[],
  brands: Brand[],
  onSelectionChange: (brandId: string, modelId: string) => void,
}) => {
  const [brandId, setBrandId] = useState('');
  const [modelId, setModelId] = useState('');

  const filteredModels = useMemo(() => {
    return models.filter(model => model.brandId === brandId);
  }, [brandId, models]);

  const handleBrandChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newBrandId = e.target.value;
    setBrandId(newBrandId);
    setModelId(''); // Reset model selection when brand changes
    onSelectionChange(newBrandId, '');
  };

  const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newModelId = e.target.value;
    setModelId(newModelId);
    onSelectionChange(brandId, newModelId);
  };

  return (
    <Fragment>

      <label htmlFor="brand" className="block mb-2 text-base font-medium text-gray-900">Název značky</label>
      <select name="brandId" required={true} value={brandId} onChange={handleBrandChange}  id="brand" className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 ">
        <option value="">Vybrat značku</option>
        {brands.map(brand => (
          <option key={brand.id} value={brand.id}>
            {brand.name}
          </option>
        ))}
      </select>
      <label htmlFor="model" className="block mb-2 text-base font-medium text-gray-900">Název modelu</label>
      <select name="modelId" required={true} value={modelId} onChange={handleModelChange}  id="model" className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500">
        <option value="">Vybrat model</option>
        {filteredModels.map(model => (
          <option key={model.id} value={model.id}>
            {model.name}
          </option>
        ))}
      </select>
    </Fragment>
  );
};

export default BrandAndModelFormFields;
