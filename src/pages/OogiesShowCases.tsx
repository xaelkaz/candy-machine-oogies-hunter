import MobileAppPortfolio from '../components/portfolio/MobileAppPortfolio';
const OogiesShowCases = () => {
  return (
    <div className='app-screen-preview-one dark-style' id='sneakpeaks'>
      <h2 className='text-center oggies-title-white'>
        <span>Sneak Peaks</span>
      </h2>
      <div className='container'>
        <div className='app-preview-slider-one'>
          <MobileAppPortfolio />
        </div>
      </div>
      {/* End .container */}

      <img
        src='images/shape/202.svg'
        alt='shape'
        className='shapes shape-one'
      />
      <img
        src='images/shape/oggie9.svg'
        alt='shape'
        className='shapes shape-two'
      />
      <img
        src='images/shape/205.svg'
        alt='shape'
        className='shapes shape-seven'
      />
      <img
        src='images/shape/208.svg'
        alt='shape'
        className='shapes shape-three'
      />

      <img
        src='images/shape/oggie9.svg'
        alt='shape'
        className='shapes shape-five'
      />
      <img
        src='images/shape/207.svg'
        alt='shape'
        className='shapes shape-six'
      />
    </div>
  );
};

export default OogiesShowCases;
