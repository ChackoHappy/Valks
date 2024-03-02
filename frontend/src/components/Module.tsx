import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Module.css';

interface ModuleProps {
  id: number;
  name: string;
  date: Date;
  keyPoints: string[];
}

export default function Module({ id, name, date, keyPoints }: ModuleProps) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="module-container p-2">
      <div className="card p-3 rounded">
        <div className="d-flex justify-content-between align-items-center">
          <div>{id} - {name} ({date.toISOString().split("T")[0]})</div>
          <div style={{ marginLeft: '10px', cursor: 'pointer' }} onClick={toggleCollapse}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`bi bi-caret-${isCollapsed ? 'down' : 'up'}`} viewBox="0 0 16 16">
              <path d={isCollapsed ? "M8 11l5-6H3z" : "M8 5l-5 6h10z"} />
            </svg>
          </div>
        </div>
        {!isCollapsed && (
          <div className="collapsible-section">
            <p></p>
            <div className="text-center"><strong>Key Points</strong></div>
            <ul className="list-unstyled">
              {keyPoints.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
