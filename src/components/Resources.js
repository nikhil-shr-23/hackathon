import React from 'react'
import './Resources.css'

const Resources = () => {
  const items = [
    {
      name: 'Visa Assistance',
      para: 'Get detailed guidance on obtaining a medical visa for your trip to India.',
      href: '#'
    },
    {
      name: 'Financial Planning',
      para: 'Learn about budgeting for your medical treatment and additional expenses.',
      href: '#'
    },
    {
      name: 'Cost Comparison',
      para: 'Compare the costs of medical procedures between different hospitals and countries.',
      href: '#'
    },
    {
      name: 'Consultation Services',
      para: 'Schedule consultations with medical experts to discuss your treatment options.',
      href: '#'
    },
  ];

  return (
    <div className="container mx-auto p-4 pt-6">
      <h1 className='text-2xl text-center font-bold ubuntu mt-2'>
        Find the Right Resources with Health Bridge
      </h1>

      <div className="items flex flex-wrap gap-5 justify-center mt-4">
        {items.map((item, index) => (
          <div key={index} className='cards'>
            <div className="w-[300px] rounded-md border p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h1 className="text-lg font-semibold text-black">{item.name}</h1>
              <p className="mt-3 text-sm text-gray-700">
                {item.para}
              </p>
              <a
                href={item.href}
                className="mt-4 block rounded-sm bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Resources
