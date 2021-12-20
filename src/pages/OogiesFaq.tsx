import Faq from '../components/faq/Faq';

const OogiesFaq = () => {
  return (
    <div className='faq-section-four' id='faq'>
      <img
        src='images/shape/120.svg'
        alt='shape'
        className='shapes shape-one'
      />
      <img
        src='images/shape/121.svg'
        alt='shape'
        className='shapes shape-two'
      />
      <div className='container'>
        <div className=' text-center md-mb-60'>
          <h2 className='text-center oggies-title'>
            <span>FAQ</span>
          </h2>
        </div>

        <div className='row'>
          <div className='col-xl-9 col-lg-10 m-auto'>
            <Faq />
          </div>
        </div>
      </div>
      {/* /.container */}
    </div>
  );
};

export default OogiesFaq;
