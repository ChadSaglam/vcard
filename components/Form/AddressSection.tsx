'use client';

import InputField from './InputField';

interface AddressSectionProps {
  formData: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  onChange: (field: string, value: string) => void; // Updated type
}

export default function AddressSection({ formData, onChange }: AddressSectionProps) {
  return (
    <>
      <InputField
        label="Street"
        type="text"
        name="street"
        placeholder="123 Main St"
        value={formData.street}
        onChange={(e) => onChange('street', e.target.value)} // Updated handler
      />
      <div className="grid grid-cols-2 gap-4">
        <InputField
          label="City"
          type="text"
          name="city"
          placeholder="New York"
          value={formData.city}
          onChange={(e) => onChange('city', e.target.value)} // Updated handler
        />
        <InputField
          label="State"
          type="text"
          name="state"
          placeholder="CA"
          value={formData.state}
          onChange={(e) => onChange('state', e.target.value)} // Updated handler
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <InputField
          label="ZIP"
          type="text"
          name="zip"
          placeholder="10001"
          value={formData.zip}
          onChange={(e) => onChange('zip', e.target.value)} // Updated handler
        />
        <InputField
          label="Country"
          type="text"
          name="country"
          placeholder="USA"
          value={formData.country}
          onChange={(e) => onChange('country', e.target.value)} // Updated handler
        />
      </div>
    </>
  );
}