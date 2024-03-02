import React from 'react';
import Header from '@/components/Header';
import Image from 'next/image';
import Image1 from '@/assets/image1.png';
import Image2 from '@/assets/image2.png';
import TextToSpeech from '@/components/textToSpeech';

const Content: React.FC = () => {
  return (
    <main className="container">
      <Header name="Content" />
      <div className="row">
        <div className="col-md-12 text-center mb-4">
          <h1>You are an auditory learner</h1>
        </div>
      </div>
      <TextToSpeech text={"To get a “feeling” of a RE-but-not-recursive language, suppose you just made a public post on social media. Now consider the language consisting of the handle (username, email, or some other unique identifying string) of all persons who will at some point respond to your post. Notice the future tense here. Given an arbitrary handle of some user of the same social medium, you may wait forever to if they respond. You can only know about those who have responded already. This language of such handle strings is not “decidable” because of the way it is defined, just as the function g(f,x) in the “Halting” subsection of Chapter 8 does not halt on all input strings because of the particular problem it is trying to model"} />
    </main>
  );
};

export default Content;
