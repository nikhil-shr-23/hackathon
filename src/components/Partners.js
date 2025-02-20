import React from 'react'
import './PartnerHospitals.css'

const PartnerHospitals = () => {
  const hospitals = [
    {
      name: 'Apollo Hospitals',
      location: 'Mumbai, India',
      specialties: ['Cardiology', 'Orthopedics', 'Neurology'],
      image: 'https://via.placeholder.com/350x200?text=Apollo+Hospitals',
      href: '#'
    },
    {
      name: 'Fortis Healthcare',
      location: 'New Delhi, India',
      specialties: ['Oncology', 'Gastroenterology', 'Urology'],
      image: 'https://via.placeholder.com/350x200?text=Fortis+Healthcare',
      href: '#'
    },
    {
      name: 'Max Healthcare',
      location: 'Bangalore, India',
      specialties: ['Fertility', 'Cosmetic Surgery', 'General Medicine'],
      image: 'https://via.placeholder.com/350x200?text=Max+Healthcare',
      href: '#'
    },
    {
      name: 'Medanta',
      location: 'Chennai, India',
      specialties: ['Nephrology', 'Cardiac Surgery', 'Hematology'],
      image: 'https://via.placeholder.com/350x200?text=Medanta',
      href: '#'
    },
  ];

  return (
    <div className="container mx-auto p-4 pt-6">
      <h1 className='text-2xl text-center font-bold ubuntu mt-2'>
        Our Partner Hospitals
      </h1>

      <div className="flex flex-wrap gap-6 justify-center mt-6">
        {hospitals.map((hospital, index) => (
          <div key={index} className='hospital-card'>
            <div className="relative w-[350px] rounded-md border border-gray-300 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <img
                src={hospital.image}
                alt={hospital.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-black">{hospital.name}</h2>
                <p className="mt-1 text-sm text-gray-700">{hospital.location}</p>
                <div className="mt-4">
                  <h3 className="text-md font-medium text-gray-800">Specialties:</h3>
                  <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
                    {hospital.specialties.map((specialty, i) => (
                      <li key={i}>{specialty}</li>
                    ))}
                  </ul>
                </div>
                <a
                  href={hospital.href}
                  className="mt-4 block rounded-sm bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PartnerHospitals
