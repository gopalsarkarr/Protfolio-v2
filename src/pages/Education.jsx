import React from 'react';
import SectionTitle from '../components/SectionTitle';
import EducationCard from '../components/EducationCard';
import { educationData } from '../data/education';

export default function Education() {
  return (
    <div className="max-w-4xl mx-auto pb-16 space-y-10">
      
      <SectionTitle
        tag="academic_timeline"
        title="Education & Qualifications"
        subtitle="Formal academic record and educational milestones from secondary schooling to B.Tech."
      />

      {/* Timeline container */}
      <div className="pt-4">
        {educationData.map((item, index) => (
          <EducationCard
            key={item.id}
            item={item}
            isLast={index === educationData.length - 1}
          />
        ))}
      </div>

    </div>
  );
}
