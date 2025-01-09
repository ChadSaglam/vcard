'use client';

import InputField from './InputField';

interface NotesAndBirthdaySectionProps {
  formData: {
    notes: string;
    birthday: string;
  };
  onChange: (field: string, value: string) => void; // Updated type
}

export default function NotesAndBirthdaySection({ formData, onChange }: NotesAndBirthdaySectionProps) {
  return (
    <>
      <InputField
        label="Notes"
        type="text"
        name="notes"
        placeholder="Lead developer for Android apps."
        value={formData.notes}
        onChange={(e) => onChange('notes', e.target.value)} // Updated handler
        textarea
      />
      <InputField
        label="Birthday"
        type="date"
        name="birthday"
        placeholder="YYYY-MM-DD"
        value={formData.birthday}
        onChange={(e) => onChange('birthday', e.target.value)} // Updated handler
      />
    </>
  );
}