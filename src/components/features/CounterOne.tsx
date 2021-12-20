import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const counterUpContent = [
  {
    startCount: '0',
    endCount: '500 ',
    meta: 'Total NFTs',
    colorClass: 'color-one',
  },

  {
    startCount: '0',
    endCount: '1',
    meta: 'Season',
    colorClass: 'color-three',
  },
  {
    startCount: '0',
    endCount: '1.25 - 1.75',
    meta: 'SOL',
    colorClass: 'color-two',
  },
];

const CounterOne = () => {
  const [focus, setFocus] = React.useState(false);
  return (
    <div className='counter-info-classic'>
      {counterUpContent.map((val, i) => (
        <div className={`counter-box-one ${val.colorClass}`} key={i}>
          <h2 className='number font-bangers'>
            <span className='timer' style={{ fontSize: 70, color: '9945FF' }}>
              {' '}
              {val.meta === 'SOL' ? (
                <h1 style={{ fontSize: 35 }}>{val.endCount}</h1>
              ) : (
                <CountUp
                  start={focus ? parseInt(val.startCount) : 0}
                  end={parseInt(val.endCount)}
                  duration={1}
                  redraw={true}
                >
                  {({ countUpRef }) => (
                    <VisibilitySensor
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setFocus(true);
                        }
                      }}
                    >
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              )}
            </span>{' '}
          </h2>
          <p className='font-bangers'>{val.meta}</p>
        </div>
      ))}

      <div className='bubble-one'></div>
      <div className='bubble-two'></div>
      <div className='bubble-three'></div>
      <div className='bubble-four'></div>
      <div className='bubble-five'></div>
      <div className='bubble-six'></div>
      <div className='bubble-seven'></div>
      <img src='images/shape/8.svg' alt='' className='cs-screen dot-shape' />
    </div>
  );
};

export default CounterOne;
