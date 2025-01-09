'use client';

import { useState } from 'react';
import CategoryAccordion from '@/components/Form/CategoryAccordion';
import PersonalInfoSection from '@/components/Form/PersonalInfoSection';
import ContactInfoSection from '@/components/Form/ContactInfoSection';
import AddressSection from '@/components/Form/AddressSection';
import WebsitesSection from '@/components/Form/WebsitesSection';
import NotesAndBirthdaySection from '@/components/Form/NotesAndBirthdaySection';
import QRCodeDisplay from '@/components/QRCodeDisplay';
import GenerateButton from '@/components/GenerateButton';
import ErrorMessage from '@/components/ErrorMessage';
import useFormData from '@/hooks/useFormData';

export default function GeneratePage() {
  const { formData, updateFormData } = useFormData();
  const [qrValue, setQrValue] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [openAccordion, setOpenAccordion] = useState<string | null>('personal');

  const handleToggleAccordion = (accordion: string) => {
    setOpenAccordion((prev) => (prev === accordion ? null : accordion));
  };

  const generateVCard = () => {
    const {
      personal,
      contact,
      workAddress,
      homeAddress,
      websites,
      notesAndBirthday,
    } = formData;

    if (!personal.firstName || !personal.lastName) {
      setError('First Name and Last Name are required.');
      return;
    }

    const vCard = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      `FN:${personal.firstName} ${personal.lastName}`,
      `N:${personal.lastName};${personal.firstName};;;`,
      `TITLE:${personal.title}`,
      `ORG:${personal.organization}`,
      `TEL;TYPE=WORK,VOICE:${contact.workPhone}`,
      `TEL;TYPE=HOME,VOICE:${contact.homePhone}`,
      `TEL;TYPE=CELL,VOICE:${contact.mobilePhone}`,
      `TEL;TYPE=FAX,WORK:${contact.workFax}`,
      `EMAIL;TYPE=WORK,INTERNET:${contact.workEmail}`,
      `EMAIL;TYPE=HOME,INTERNET:${contact.personalEmail}`,
      `ADR;TYPE=WORK:;;${workAddress.street};${workAddress.city};${workAddress.state};${workAddress.zip};${workAddress.country}`,
      `ADR;TYPE=HOME:;;${homeAddress.street};${homeAddress.city};${homeAddress.state};${homeAddress.zip};${homeAddress.country}`,
      `URL:${websites.personalWebsite}`,
      `URL;TYPE=WORK:${websites.companyWebsite}`,
      `NOTE:${notesAndBirthday.notes}`,
      `BDAY:${notesAndBirthday.birthday}`,
      'END:VCARD',
    ]
      .filter((line) => !line.endsWith(':'))
      .join('\n');

    setQrValue(vCard);
    setError('');
  };

  const downloadQRCode = (format: 'png' | 'svg') => {
    if (qrValue) {
      const canvas = document.getElementById('qr-code') as HTMLCanvasElement;
      if (canvas) {
        const url = canvas.toDataURL(`image/${format}`);
        const link = document.createElement('a');
        link.href = url;
        link.download = `vcard-qrcode.${format}`;
        link.click();
      }
    }
  };

  return (
    <div className="">
      <div className="bg-white p-8 rounded-lg w-full max-w-8xl flex flex-col lg:flex-row gap-8">
        {/* Left Side: Input Fields */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h1 className="text-2xl font-bold mb-6">VCard QR Code Generator</h1>

          {/* Personal Information */}
          <CategoryAccordion
            title="Personal Information"
            isOpen={openAccordion === 'personal'}
            onToggle={() => handleToggleAccordion('personal')}
          >
            <PersonalInfoSection
              formData={formData.personal}
              onChange={(field, value) => updateFormData('personal', field, value)}
            />
          </CategoryAccordion>

          {/* Contact Information */}
          <CategoryAccordion
            title="Contact Information"
            isOpen={openAccordion === 'contact'}
            onToggle={() => handleToggleAccordion('contact')}
          >
            <ContactInfoSection
              formData={formData.contact}
              onChange={(field, value) => updateFormData('contact', field, value)}
            />
          </CategoryAccordion>

          {/* Address */}
          <CategoryAccordion
            title="Address"
            isOpen={openAccordion === 'address'}
            onToggle={() => handleToggleAccordion('address')}
          >
            <AddressSection
              formData={formData.workAddress}
              onChange={(field, value) => updateFormData('workAddress', field, value)}
            />
          </CategoryAccordion>

          {/* Websites */}
          <CategoryAccordion
            title="Websites"
            isOpen={openAccordion === 'websites'}
            onToggle={() => handleToggleAccordion('websites')}
          >
            <WebsitesSection
              formData={formData.websites}
              onChange={(field, value) => updateFormData('websites', field, value)}
            />
          </CategoryAccordion>

          {/* Notes and Birthday */}
          <CategoryAccordion
            title="Notes and Birthday"
            isOpen={openAccordion === 'notes'}
            onToggle={() => handleToggleAccordion('notes')}
          >
            <NotesAndBirthdaySection
              formData={formData.notesAndBirthday}
              onChange={(field, value) => updateFormData('notesAndBirthday', field, value)}
            />
          </CategoryAccordion>

          {/* Error Message */}
          {error && <ErrorMessage message={error} />}

          {/* Generate Button */}
          <GenerateButton onClick={generateVCard} />
        </div>

        {/* Right Side: QR Code */}
        <QRCodeDisplay qrValue={qrValue} onDownload={downloadQRCode} />
      </div>
    </div>
  );
}