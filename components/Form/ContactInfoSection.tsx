'use client';

import InputField from './InputField';

interface ContactInfoSectionProps {
  formData: {
    workPhone: string;
    homePhone: string;
    mobilePhone: string;
    workFax: string;
    workEmail: string;
    personalEmail: string;
  };
  onChange: (field: string, value: string) => void; // Updated type
}

export default function ContactInfoSection({ formData, onChange }: ContactInfoSectionProps) {
  return (
    <>
      <InputField
        label="Work Phone"
        type="tel"
        name="workPhone"
        placeholder="+1-650-253-0000"
        value={formData.workPhone}
        onChange={(e) => onChange('workPhone', e.target.value)} // Updated handler
      />
      <InputField
        label="Home Phone"
        type="tel"
        name="homePhone"
        placeholder="+1-408-996-1010"
        value={formData.homePhone}
        onChange={(e) => onChange('homePhone', e.target.value)} // Updated handler
      />
      <InputField
        label="Mobile Phone"
        type="tel"
        name="mobilePhone"
        placeholder="+1-408-555-1234"
        value={formData.mobilePhone}
        onChange={(e) => onChange('mobilePhone', e.target.value)} // Updated handler
      />
      <InputField
        label="Work Fax"
        type="tel"
        name="workFax"
        placeholder="+1-408-555-5678"
        value={formData.workFax}
        onChange={(e) => onChange('workFax', e.target.value)} // Updated handler
      />
      <InputField
        label="Work Email"
        type="email"
        name="workEmail"
        placeholder="john.doe@gmail.com"
        value={formData.workEmail}
        onChange={(e) => onChange('workEmail', e.target.value)} // Updated handler
      />
      <InputField
        label="Personal Email"
        type="email"
        name="personalEmail"
        placeholder="john.doe@personal.com"
        value={formData.personalEmail}
        onChange={(e) => onChange('personalEmail', e.target.value)} // Updated handler
      />
    </>
  );
}