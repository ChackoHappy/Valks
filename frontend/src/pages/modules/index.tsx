import Image from "next/image";
import { useState } from 'react';

import Module from "@/components/Module";

export default function Modules() {
	const [classes, setClasses] = useState([
    { id: 1, name: "Introduction to Biology", date: new Date("2024-02-23"), keyPoints: ["Basic concepts of biology", "Overview of living organisms"] },
    { id: 2, name: "Cell Structure and Function", date: new Date("2024-03-01"), keyPoints: ["Cell organelles", "Cellular processes"] },
    { id: 3, name: "Genetics and Heredity", date: new Date("2024-03-08"), keyPoints: ["Mendelian genetics", "DNA structure and function"] },
    { id: 4, name: "Evolutionary Biology", date: new Date("2024-03-15"), keyPoints: ["Principles of evolution", "Natural selection"] },
    { id: 5, name: "Ecology and Environmental Biology", date: new Date("2024-03-22"), keyPoints: ["Ecosystems", "Biodiversity"] },
    { id: 6, name: "Human Anatomy and Physiology", date: new Date("2024-03-29"), keyPoints: ["Human body systems", "Physiological processes"] },
    { id: 7, name: "Microbiology and Immunology", date: new Date("2024-04-05"), keyPoints: ["Microorganisms", "Immune system"] },
    { id: 8, name: "Plant Biology", date: new Date("2024-04-12"), keyPoints: ["Plant structure", "Photosynthesis"] },
    { id: 9, name: "Animal Behavior", date: new Date("2024-04-19"), keyPoints: ["Instinctive behaviors", "Social behaviors"] },
    { id: 10, name: "Biotechnology and Bioengineering", date: new Date("2024-04-26"), keyPoints: ["Applications of biotechnology", "Genetic engineering"] },
]);


  return (
    <main>
      <div>
        {classes.map((item) => (
          <Module key={item.id} id={item.id} name={item.name} date={item.date} keyPoints={item.keyPoints}/>
        ))}
      </div>
    </main>
  );
}
