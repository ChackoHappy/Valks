import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {useRouter} from 'next/router';

interface ClassProps {
    name: string;
    classID: string;
}

export default function Class( {name, classID} : ClassProps ) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const router = useRouter();

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: string) => {
        setIsOpen(false);
    };
        
    return (
      <main>
        <div className='rounded-3 shadow-sm justify-content-center text-center'>
            <img onClick={() => router.push({pathname: '/modules'})} src={"/" + classID + ".jpg"} alt={classID} width={150} height={175}/>
            <div className={'row flex-lg-row align-items-center g-5 py-5'}>
                <div className={'col-md-5'}>
                    <p>{name}</p>
                </div>
                <div className={'col-md-7'}>
                    <button onClick={toggleDropdown} className='btn btn-light'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                        </svg>
                    </button>
                    {isOpen && (
                        <ul className="dropup dropdown-menu position-static d-grid gap-1 p-2 rounded-3 mx-0 shadow w-220px" data-bs-theme="light">
                            <li><a className="dropdown-item rounded-2" href="#">Change Learning Style</a></li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
      </main>
    );
  }
  