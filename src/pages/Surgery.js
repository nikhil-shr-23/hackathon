import React from 'react';

import surgery from '../images/urology.jpeg';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Surgery = () => {
  const INR_TO_USD = 0.012 

  const chartData = {
    labels: [
      'Moolchand Medicity',
      'Fortis Escorts Heart Institute',
      'BLK Super Specialty Hospital',
      'Sonal Hospital',
      'Max Super Specialty Hospital',
      'Fortis HealthCare'
    ],
    datasets: [
      {
        label: 'Surgery Prices (INR)',
        data: [30000, 32000, 50000, 54000, 56000, 63000],
        backgroundColor: '#EE4B2B', 
        borderColor: '#4682B4',
        borderWidth: 1,
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Comparison of Surgery Department Prices in Delhi Hospitals',
        font: {
          size: 16
        }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const inrValue = context.raw;
            const usdValue = (inrValue * INR_TO_USD).toFixed(2);
            return [
              `INR: ₹${inrValue.toLocaleString()}`,
              `USD: $${usdValue.toLocaleString()}`
            ];
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Surgery Department Price (INR)'
        },
        ticks: {
          callback: function(value) {
            return '₹' + value.toLocaleString();
          }
        }
      },
      x: {
        title: {
          display: true,
          text: 'Hospitals'
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Surgery Department</h1>
          <p className="text-xl text-gray-600">Advanced Surgical Care and Procedures</p>
        </div>

        {/* Information Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-5xl font-semibold mb-4">What is the Surgery Department?</h2>
              <p className="text-gray-700 mb-20 mt-6">
                The Surgery Department offers a wide range of surgical procedures, from minimally invasive techniques to complex operations.
                Our experienced surgeons use state-of-the-art equipment to provide the highest quality care for various conditions requiring surgical intervention.
              </p>
              <a 
                href="/signup" 
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-['SF Pro Display'] font-medium py-3 px-8 rounded-lg transition duration-300"
              >
                Start Your Journey
              </a>
            </div>
            <div className="flex-1 flex justify-end">
              <img 
                src={surgery} 
                alt="Surgery Department" 
                className="rounded-lg w-2/3 h-auto shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Treatment Costs</h2>
          <div className="w-full h-[400px]">
            <Bar
              data={chartData}
              options={chartOptions}
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4 font-['SF Pro Display']">Want to Compare Prices in Detail?</h2>
          <p className="text-gray-600 mb-6 font-['SF Pro Display']">Use our advanced price analyzer to compare treatment costs across different hospitals.</p>
          <a 
            href="/analysis" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-['SF Pro Display'] font-medium py-3 px-8 rounded-lg transition duration-300"
          >
            Compare Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Surgery;