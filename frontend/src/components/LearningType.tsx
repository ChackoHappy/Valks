import Image from "next/image";
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

interface LearningTypeProps {
  name: string;
  details: string;
  percentage: number;
  color?: string;
}

export default function LearningType({ name, details, percentage, color }: LearningTypeProps) {

  const cardStyle = {
    width: "500px",
    backgroundColor: color || "white"
  };

  return (
    <div className="card p-3 rounded mb-3 mt-3" style={cardStyle}>
      <div className="row">
        <div className="col-8">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{details}</p>
        </div>
        <div className="col-4 d-flex align-items-start justify-content-end">
          <h5 className="card-title">{percentage}%</h5>
        </div>
      </div>
    </div>
  );
}
