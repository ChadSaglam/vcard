"use client"

import QRCode from 'qrcode.react';
import { useState } from "react";

interface VCardFormValues {
  firstName: string;
  lastName: string;
  orgTitle: string;
  orgName: string;
  orgStreet: string;
  orgCity: string;
  orgRegion: string;
  orgPost: string;
  orgCountry: string;
  orgTel: string;
  orgEmail: string;
  orgUrl: string;
  profilePic: string,
}

const initialFormValues: VCardFormValues = {
  firstName: '',
  lastName: '',
  orgTitle: '',
  orgName: '',
  orgStreet: '',
  orgCity: '',
  orgRegion: '',
  orgPost: '',
  orgCountry: '',
  orgTel: '',
  orgEmail: '',
  orgUrl: '',
  profilePic: '',
};
export default function Home() {
  const [formValues, setFormValues] = useState<VCardFormValues>(initialFormValues);
  const [vcardString, setVcardString] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const generateVcard = () => {
    let vcard = 'BEGIN:VCARD\nVERSION:3.0\n';

    vcard += `N:${formValues.lastName};${formValues.firstName}\n`;
    vcard += `FN:${formValues.firstName} ${formValues.lastName}\n`;

    // Work information
    if (formValues.orgName) {
      vcard += `ORG:${formValues.orgName}\n`;
    }
    if (formValues.orgTitle) {
      vcard += `TITLE:${formValues.orgTitle}\n`;
    }
    if (formValues.orgStreet || formValues.orgCity || formValues.orgRegion || formValues.orgPost || formValues.orgCountry) {
      vcard += `ADR;TYPE=work:;;${formValues.orgStreet};${formValues.orgCity};${formValues.orgRegion};${formValues.orgPost};${formValues.orgCountry}\n`;
    }
    if (formValues.orgTel) {
      vcard += `TEL;TYPE=work:${formValues.orgTel}\n`;
    }
    if (formValues.orgEmail) {
      vcard += `EMAIL;TYPE=internet,work:${formValues.orgEmail}\n`;
    }
    if (formValues.orgUrl) {
      vcard += `URL;TYPE=work:${formValues.orgUrl}\n`;
    }

    // Add profile picture
    // if (formValues.profilePic) {
    //   vcard += `PHOTO;TYPE=JPEG:${'https://avatars.githubusercontent.com/u/142899363?v=4.jpg'}\n`; 
    // }

    // Add profile picture
    // if (formValues.profilePic) {
    //   vcard += `LOGO;TYPE=PNG:${formValues.profilePic}\n`; 
    // }

    console.log(vcard)

    vcard += 'END:VCARD';
    setVcardString(vcard);
  };

  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <div className="flex flex-row w-full">
        <div className="flex flex-col w-3/4">
          <form className="flex flex-col gap-4" onSubmit={(e) => {
            e.preventDefault();
            generateVcard();
          }}>
            {/* <label htmlFor="profilePic" className="text-gray-700 font-medium">Profile Picture:</label>
            <div className="flex flex-col ">
              <input
                type="url"
                id="profilePic"
                name="profilePic"
                value={formValues.profilePic}
                placeholder='URL'
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div> */}
          
            <label htmlFor="firstName" className="text-gray-700 font-medium">Full Name</label>
            <div className="flex flex-row w-full">
              <div className="flex flex-col w-full">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formValues.firstName}
                  placeholder='First Name'
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col pl-3 w-full">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formValues.lastName}
                  placeholder='Last Name'
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>
            </div>

            <label htmlFor="firstName" className="text-gray-700 font-medium">Work Details</label>
            <div className="flex flex-row w-full">
              <div className="flex flex-col w-full">
                <input
                  type="text"
                  id="orgTitle"
                  name="orgTitle"
                  value={formValues.orgTitle}
                  placeholder='Job Title'
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col pl-3 w-full">
                <input
                  type="text"
                  id="orgName"
                  name="orgName"
                  value={formValues.orgName}
                  placeholder='Organization Name'
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex flex-row w-full">
              <div className="flex flex-col w-full">
                <input
                  type="text"
                  id="orgStreet"
                  name="orgStreet"
                  value={formValues.orgStreet}
                  placeholder='Street Address'
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col pl-3 w-full">
                <input
                  type="text"
                  id="orgCity"
                  name="orgCity"
                  value={formValues.orgCity}
                  placeholder='City'
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex flex-row w-full">
              <div className="flex flex-col w-full">
                <input
                  type="text"
                  id="orgRegion"
                  name="orgRegion"
                  value={formValues.orgRegion}
                  placeholder='Region'
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col pl-3 w-full">
                <input
                  type="text"
                  id="orgPost"
                  name="orgPost"
                  value={formValues.orgPost}
                  placeholder='Postal Code'
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex flex-row w-full">
              <div className="flex flex-col w-full">
                <input
                  type="text"
                  id="orgCountry"
                  name="orgCountry"
                  value={formValues.orgCountry}
                  placeholder='Country'
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col pl-3 w-full">
                <input
                  type="tel"
                  id="orgTel"
                  name="orgTel"
                  value={formValues.orgTel}
                  placeholder='Phone Number'
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex flex-row w-full">
              <div className="flex flex-col w-full">
                <input
                  type="email"
                  id="orgEmail"
                  name="orgEmail"
                  value={formValues.orgEmail}
                  placeholder='Email Address'
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col pl-3 w-full">
                <input
                  type="url"
                  id="orgUrl"
                  name="orgUrl"
                  value={formValues.orgUrl}
                  placeholder='Website'
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Generate vCard
            </button>
          </form>
        </div>

        <div className="flex flex-col w-1/4 pl-9">
          <h3 className="flex flex-col pb-12">QR code</h3>
          <div className="flex justify-center py-32">
            {vcardString && 
              <QRCode value={vcardString} size={256} />
            }
          </div>
        </div>
      </div>
    </main>
  );
}
