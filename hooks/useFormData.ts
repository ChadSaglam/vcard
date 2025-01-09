'use client';

import { useState } from 'react';

interface FormData {
  personal: {
    firstName: string;
    lastName: string;
    title: string;
    organization: string;
  };
  contact: {
    workPhone: string;
    homePhone: string;
    mobilePhone: string;
    workFax: string;
    workEmail: string;
    personalEmail: string;
  };
  workAddress: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  homeAddress: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  websites: {
    companyWebsite: string;
    personalWebsite: string;
  };
  notesAndBirthday: {
    notes: string;
    birthday: string;
  };
}

export default function useFormData() {
  const [formData, setFormData] = useState<FormData>({
    personal: {
      firstName: '',
      lastName: '',
      title: '',
      organization: '',
    },
    contact: {
      workPhone: '',
      homePhone: '',
      mobilePhone: '',
      workFax: '',
      workEmail: '',
      personalEmail: '',
    },
    workAddress: {
      street: '',
      city: '',
      state: '',
      zip: '',
      country: '',
    },
    homeAddress: {
      street: '',
      city: '',
      state: '',
      zip: '',
      country: '',
    },
    websites: {
      companyWebsite: '',
      personalWebsite: '',
    },
    notesAndBirthday: {
      notes: '',
      birthday: '',
    },
  });

  const updateFormData = (section: keyof FormData, field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  return { formData, updateFormData };
}