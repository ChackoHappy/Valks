import React, { useState } from 'react';
import styles from "./class.module.css";

export default function Class( {classID} : {classID:any} ) {
    const options = ["Set Learning Type"]
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);
    };
    
    return (
      <main>
        <div>
            <img src={"/" + classID + ".jpg"} alt={classID} width={100} />
            <div>
                <p>Python</p>
                <div>
                    <button onClick={toggleDropdown}>
                        {"..."}
                    </button>
                    {isOpen && (
                        <div>
                        <button onClick={() => handleOptionClick("")}>
                        {"Set Learning Type"}
                        </button>
                        </div>
                    )}
                    </div>
            </div>
        </div>
      </main>
    );
  }
  