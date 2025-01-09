'use client';

import InputField from './InputField';

interface WebsitesSectionProps {
  formData: {
    companyWebsite: string;
    personalWebsite: string;
  };
  onChange: (field: string, value: string) => void; // Updated type
}

export default function WebsitesSection({ formData, onChange }: WebsitesSectionProps) {
  return (
    <>
      <InputField
        label="Company Website"
        type="url"
        name="companyWebsite"
        placeholder="https://www.google.com"
        value={formData.companyWebsite}
        onChange={(e) => onChange('companyWebsite', e.target.value)} // Updated handler
      />
      <InputField
        label="Personal Website"
        type="url"
        name="personalWebsite"
        placeholder="https://www.johndoe.com"
        value={formData.personalWebsite}
        onChange={(e) => onChange('personalWebsite', e.target.value)} // Updated handler
      />
    </>
  );
}