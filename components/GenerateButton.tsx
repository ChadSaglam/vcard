'use client';

interface GenerateButtonProps {
  onClick: () => void;
}

export default function GenerateButton({ onClick }: GenerateButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
    >
      Generate QR Code
    </button>
  );
}