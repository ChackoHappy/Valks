import Image from "next/image";
import { useState } from 'react';

import Module from "@/components/Module";
import Header from "@/components/Header";

export default function Modules() {
	const [bioClasses, setBioClasses] = useState([
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

	const [csClasses, setCsClasses] = useState([
    { id: 1, name: "Introduction to Programming", date: new Date("2024-02-23"), keyPoints: ["Programming Fundamentals", "Overview of Programming"] },
    { id: 2, name: "Intermediate Data Structures and Algorithms", date: new Date("2024-03-01"), keyPoints: ["Arrays and Linked Lists", "Stacks and Queues", "Trees and Graphs", "Algorithm Analysis"] },
    { id: 3, name: "Object-Oriented Programming with Java", date: new Date("2024-03-08"), keyPoints: ["Classes and Objects", "Inheritance and Polymorphism", "Encapsulation and Abstraction"] },
    { id: 4, name: "Web Development Fundamentals", date: new Date("2024-03-15"), keyPoints: ["HTML5 and CSS3 Basics", "Responsive Web Design", "Introduction to JavaScript"] },
    { id: 5, name: "Database Design and Management", date: new Date("2024-03-22"), keyPoints: ["Relational Database Concepts", "SQL Basics", "Normalization and Denormalization"] },
    { id: 6, name: "Introduction to Python Programming", date: new Date("2024-03-29"), keyPoints: ["Python Syntax and Data Types", "Control Structures", "Functions and Modules"] },
    { id: 7, name: "Software Engineering Principles", date: new Date("2024-04-05"), keyPoints: ["Software Development Life Cycle", "Version Control Systems", "Agile Methodologies"] },
    { id: 8, name: "Mobile App Development with React Native", date: new Date("2024-04-12"), keyPoints: ["React Native Basics", "Building UI Components", "State Management"] },
    { id: 9, name: "Introduction to Machine Learning", date: new Date("2024-04-19"), keyPoints: ["Supervised and Unsupervised Learning", "Model Evaluation", "Feature Engineering"] },
    { id: 10, name: "Cybersecurity Fundamentals", date: new Date("2024-04-26"), keyPoints: ["Network Security", "Cryptography Basics", "Security Policies and Procedures"] },
	]);

  return (
    <main>
      <div className="container">
			<Header name={"Modules"} />
        {csClasses.map((item) => (
          <Module key={item.id} id={item.id} name={item.name} date={item.date} keyPoints={item.keyPoints}/>
        ))}
      </div>
    </main>
  );
}
