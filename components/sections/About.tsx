import { AboutDetails } from '@/constants';
import React from 'react';
import Container from '../Container';


const About = () => {
  return (
    <div id="why" className="scroll-mt-30 py-16 body-text">
      <Container>
        <div className="grid md:grid-cols-3 gap-16 items-start">
          {AboutDetails.map((detail) => (
            <div key={detail.id} className="text-center">
              <div className="mb-12 flex justify-center">
                <div className="w-16 h-16 flex items-center justify-center">
                  <div className="text-8xl">
                    {detail.img}
                  </div>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-amber-900 mb-4 uppercase tracking-wide section-title">
                {detail.title}
              </h3>
              <p className="text-amber-900 text-[0.9rem] leading-relaxed text-center">
                {detail.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default About;