import React from 'react';
import Header from '@/components/Header';
import Image from 'next/image';
import Image1 from '@/assets/image1.png';
import Image2 from '@/assets/image2.png';

const Content: React.FC = () => {
  return (
    <main className="container">
      <Header name="Content" />
      <div className="row">
        <div className="col-md-12 text-center mb-4">
          <h1>You are a visual learner</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center mb-4">
          <Image src={Image1} alt="Image 1" width={300} height={200} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center mb-4">
          <Image src={Image2} alt="Image 2" width={300} height={200} />
        </div>
      </div>
    </main>
  );
};

export default Content;
