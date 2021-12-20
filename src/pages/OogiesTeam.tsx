import React from 'react';
import useDocumentTitle from '../components/utils/useDocumentTitle';
import TeamFive from '../components/team/TeamFive';

const Team5 = () => {
  useDocumentTitle(' Oggies Hunters');
  return (
    <div>
      <div className='team-section-four custom-bg' id='team'>
        <div className='container'>
          <h2 className='text-center oggies-title'>
            <span>TEAM</span>
          </h2>
          <div className='team-wrapper'>
            <div className='row'>
              <TeamFive />
            </div>

            <img
              src='images/shape/135.svg'
              alt='shape'
              className='shapes shape-two'
            />
            <img
              src='images/shape/126.svg'
              alt='shape'
              className='shapes shape-one'
            />

            <img
              src='images/shape/136.svg'
              alt='shape'
              className='shapes shape-three'
            />

            <img
              src='images/shape/131.svg'
              alt='shape'
              className='shapes shape-four'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team5;
