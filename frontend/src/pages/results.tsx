import Image from "next/image";
import { useState } from 'react';
import Head from 'next/head';

import Header from "@/components/Header";

import LearningType from "@/components/LearningType";

export default function Results() {
	const [ learningTypes, setLearningTypes ] = useState([
    {name: "Visual Learner", details: "Prefers learning through images, charts, and diagrams.", percentage: 90, color: "#4CAF50"}, // Green
    {name: "Auditorial Learner", details: "Learns best through listening and verbal instruction.", percentage: 71, color: "#FFC107"}, // Amber
    {name: "Social Learner", details: "Thrives in group settings, enjoys discussions and collaboration.", percentage: 37, color: "#FF9800"}, // Orange
    {name: "Solitary Learner", details: "Prefers studying alone, independent and self-motivated.", percentage: 4, color: "#F44336"}, // Red
	]);

  return (
    <main>
      <div className="container">
			<Header name={"Learning Type Results"} />
        <h1 className="text-center mt-5 mb-4">Congratulations! Here are your learning type results.	</h1>
        <div className="d-flex flex-column align-items-center">
          {learningTypes.map((item) => (
            <LearningType key={item.name} name={item.name} details={item.details} percentage={item.percentage} color={item.color}/>
          ))}
        </div>
      </div>
    </main>
  );
}
