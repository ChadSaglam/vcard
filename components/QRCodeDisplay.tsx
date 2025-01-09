'use client';

import QRCode from 'qrcode.react';

interface QRCodeDisplayProps {
  qrValue: string;
  onDownload: (format: 'png' | 'svg') => void;
}

export default function QRCodeDisplay({ qrValue, onDownload }: QRCodeDisplayProps) {
  return (
    <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
      {qrValue && (
        <>
          <div className="mb-4">
            <QRCode
              id="qr-code"
              value={qrValue}
              size={256}
              level="H"
              includeMargin={true}
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => onDownload('png')}
              className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
            >
              Download PNG
            </button>
            <button
              onClick={() => onDownload('svg')}
              className="bg-purple-500 text-white p-2 rounded-md hover:bg-purple-600"
            >
              Download SVG
            </button>
          </div>
        </>
      )}
    </div>
  );
}