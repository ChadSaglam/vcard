'use client';

import InputField from './InputField';

interface PersonalInfoSectionProps {
  formData: {
    firstName: string;
    lastName: string;
    title: string;
    organization: string;
  };
  onChange: (field: string, value: string) => void; // Updated type
}

export default function PersonalInfoSection({ formData, onChange }: PersonalInfoSectionProps) {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <InputField
          label="First Name"
          type="text"
          name="firstName"
          placeholder="John"
          value={formData.firstName}
          onChange={(e) => onChange('firstName', e.target.value)} // Updated handler
          required
        />
        <InputField
          label="Last Name"
          type="text"
          name="lastName"
          placeholder="Doe"
          value={formData.lastName}
          onChange={(e) => onChange('lastName', e.target.value)} // Updated handler
          required
        />
      </div>
      <InputField
        label="Title"
        type="text"
        name="title"
        placeholder="Software Engineer"
        value={formData.title}
        onChange={(e) => onChange('title', e.target.value)} // Updated handler
      />
      <InputField
        label="Organization"
        type="text"
        name="organization"
        placeholder="Google LLC"
        value={formData.organization}
        onChange={(e) => onChange('organization', e.target.value)} // Updated handler
      />
    </>
  );
}