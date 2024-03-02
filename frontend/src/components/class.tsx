import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default function Class( {classID} : {classID:any} ) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: string) => {
        setIsOpen(false);
    };
    
    return (
      <main>
        <div>
            <img src={"/" + classID + ".jpg"} alt={classID} width={100} />
            <div className={'row flex-lg-row align-items-center g-5 py-5'}>
                <div className={'col-md-5'}>
                    <p>Python</p>
                </div>
                <div className={'col-md-7'}>
                    <button onClick={toggleDropdown} className='btn btn-light'>
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
  