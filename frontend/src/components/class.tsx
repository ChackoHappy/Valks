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
        <div onClick={() => router.push({pathname: '/modules'})}>
            <img src={"/" + classID + ".jpg"} alt={classID} width={150} height={175}/>
            <div className={'row flex-lg-row align-items-center g-5 py-5'}>
                <div className={'col-md-5'}>
                    <p>{name}</p>
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
  