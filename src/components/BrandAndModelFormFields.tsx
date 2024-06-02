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
      <select
        name="brandId"
        required={true}
        value={brandId}
        onChange={handleBrandChange}
      >
        <option value="">Select a brand</option>
        {brands.map(brand => (
          <option key={brand.id} value={brand.id}>
            {brand.name}
          </option>
        ))}
      </select>
      <select name="modelId" required={true} value={modelId} onChange={handleModelChange}>
        <option value="">Select a model</option>
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
