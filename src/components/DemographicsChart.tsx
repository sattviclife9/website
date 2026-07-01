import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

interface DemographicsChartProps {
  conditionName: string;
  category?: string;
}

export default function DemographicsChart({ conditionName, category }: DemographicsChartProps) {
  const isFemaleOnly = category?.includes("Women");
  const isMaleOnly = category?.includes("Men’s") || category?.includes("Men's") || (category?.includes("Men") && !category?.includes("Women"));
  const isChildOnly = category?.includes("Pediatric") || category?.includes("Child");

  const [selectedGender, setSelectedGender] = useState<'Female' | 'Male'>(isMaleOnly ? 'Male' : 'Female');

  let data;

  if (isChildOnly) {
    data = [
      { ageGroup: '0-3', Male: 15, Female: 12 },
      { ageGroup: '4-7', Male: 25, Female: 22 },
      { ageGroup: '8-12', Male: 35, Female: 30 },
      { ageGroup: '13-17', Male: 25, Female: 36 },
    ];
  } else if (conditionName.includes("PCOD") || conditionName.includes("PCOS") || conditionName.includes("Menstrual") || conditionName.includes("Fertility") || conditionName.includes("Endometriosis")) {
    // Reproductive age conditions
    data = [
      { ageGroup: '13-17', Male: 0, Female: 15 },
      { ageGroup: '18-30', Male: 0, Female: 45 },
      { ageGroup: '31-40', Male: 0, Female: 30 },
      { ageGroup: '41-50', Male: 0, Female: 10 },
      { ageGroup: '51-60', Male: 0, Female: 0 },
      { ageGroup: '61+', Male: 0, Female: 0 },
    ];
  } else if (conditionName.includes("Arthritis") || conditionName.includes("Osteoarthritis") || conditionName.includes("Spondylosis") || conditionName.includes("Sciatica") || conditionName.includes("Joint")) {
    // Degenerative / older age conditions
    data = [
      { ageGroup: '18-30', Male: 5, Female: 5 },
      { ageGroup: '31-40', Male: 15, Female: 15 },
      { ageGroup: '41-50', Male: 25, Female: 30 },
      { ageGroup: '51-60', Male: 30, Female: 40 },
      { ageGroup: '61+', Male: 40, Female: 50 },
    ];
  } else if (category?.includes("Skin") || category?.includes("Hair")) {
    // Skin and hair conditions (psoriasis, acne, hair fall)
    data = [
      { ageGroup: '13-17', Male: 15, Female: 20 },
      { ageGroup: '18-30', Male: 40, Female: 45 },
      { ageGroup: '31-40', Male: 25, Female: 30 },
      { ageGroup: '41-50', Male: 15, Female: 15 },
      { ageGroup: '51-60', Male: 10, Female: 10 },
      { ageGroup: '61+', Male: 5, Female: 5 },
    ];
  } else if (conditionName.includes("Men's") || conditionName.includes("Prostate") || conditionName.includes("Erectile")) {
    data = [
      { ageGroup: '18-30', Male: 15, Female: 0 },
      { ageGroup: '31-40', Male: 25, Female: 0 },
      { ageGroup: '41-50', Male: 35, Female: 0 },
      { ageGroup: '51-60', Male: 45, Female: 0 },
      { ageGroup: '61+', Male: 50, Female: 0 },
    ];
  } else {
    // General typical adult data
    data = [
      { ageGroup: '18-30', Male: 20, Female: 25 },
      { ageGroup: '31-40', Male: 35, Female: 30 },
      { ageGroup: '41-50', Male: 40, Female: 45 },
      { ageGroup: '51-60', Male: 35, Female: 40 },
      { ageGroup: '61+', Male: 30, Female: 35 },
    ];
  }

  return (
    <div className="w-full flex justify-center pb-2 md:pb-4">
      <div className="w-full bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-clinic-sand">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h3 className="text-2xl font-serif text-clinic-teal-900 mb-2">Global Prevalence Demographics</h3>
            <p className="text-clinic-muted text-sm md:text-base">
              Estimated global distribution for {conditionName} by age.
            </p>
          </div>
          
          {(!isFemaleOnly && !isMaleOnly) && (
            <div className="flex items-center gap-2 bg-clinic-paper p-1.5 rounded-full border border-clinic-border/30 w-fit">
              <button 
                onClick={() => setSelectedGender('Female')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${selectedGender === 'Female' ? 'bg-clinic-bronze text-white shadow-md' : 'text-clinic-muted hover:text-clinic-teal-900'}`}
              >
                {isChildOnly ? 'Girls' : 'Female'}
              </button>
              <button 
                onClick={() => setSelectedGender('Male')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${selectedGender === 'Male' ? 'bg-clinic-teal-900 text-white shadow-md' : 'text-clinic-muted hover:text-clinic-teal-900'}`}
              >
                {isChildOnly ? 'Boys' : 'Male'}
              </button>
            </div>
          )}
          {(isFemaleOnly || isMaleOnly) && (
            <div className="flex items-center gap-2 bg-clinic-paper p-1.5 rounded-full border border-clinic-border/30 w-fit">
              <div className="px-6 py-2 rounded-full text-sm font-medium transition-all bg-clinic-teal-900 text-white shadow-md">
                {isFemaleOnly ? 'Female' : 'Male'}
              </div>
            </div>
          )}
        </div>

        <div className="h-[350px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              layout="vertical"
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#E5E7EB" />
              <XAxis type="number" stroke="#6B7280" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis 
                dataKey="ageGroup" 
                type="category" 
                stroke="#6B7280" 
                fontSize={12} 
                tickLine={false} 
                axisLine={false} 
              />
              <Tooltip 
                cursor={{ fill: '#F3F4F6' }}
                contentStyle={{ borderRadius: '8px', border: '1px solid #E5E7EB', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
              />
              <Legend 
                wrapperStyle={{ paddingTop: '20px' }}
                iconType="circle"
              />
              <Bar 
                dataKey={selectedGender} 
                name={isChildOnly ? `${selectedGender === 'Female' ? 'Girls' : 'Boys'} (%)` : `${selectedGender} Patients (%)`} 
                radius={[0, 4, 4, 0]} 
                barSize={32}
              >
                {data.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={selectedGender === 'Female' ? '#B48259' : '#134E4A'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-6 text-xs text-slate-400 italic text-center text-balance max-w-4xl mx-auto">
          * Disclaimer: This chart represents estimated demographic distributions based on general clinical observations and broad medical trends. It is intended for illustrative and educational purposes only and does not reflect specific epidemiological statistics or patient data from Sattvic Ayurveda.
        </div>
      </div>
    </div>
  );
}
