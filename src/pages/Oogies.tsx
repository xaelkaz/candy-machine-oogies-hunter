import CounterOne from '../components/features/CounterOne';

const Oogies = () => {
  return (
    <div className='fancy-feature-fourteen dark-style pt-80' id='oogies'>
      <div className=' text-center md-mb-60'>
        <h2 className='text-center oggies-title'>
          <span>Oogies</span>
        </h2>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-6 col-lg-7 col-md-8'>
            <div className='title-style-six'>
              <CounterOne />
              <p className='text-xs pr-5 mr-5'></p>
            </div>
            {/*  /.title-style-six */}
          </div>

          <div className='col-lg-5 ml-auto'>
            <div className='right-side'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='logo-meta lg d-flex align-items-center justify-content-center '>
                    <img
                      data-aos='fade-up'
                      data-aos-duration='1200'
                      src='images/oggieshuntersshowcases.gif'
                      alt='shape'
                      className='illustration'
                    />
                  </div>
                </div>
                {/* End .col */}

                {/* End .col */}
              </div>
            </div>
            {/* /.right-side */}
          </div>
        </div>
        <p className='text-xs pr-12 mr-12 text-justify'>
          We are an ambitious team of 5 friends based on Panamá with great and
          also realistic goals. We know the value of our project because we are
          putting our heart into it to be successful, not only that but we know
          what it takes to bring this project to the next level, with our plan
          and your support we know we can make it.We are going to give our best
          to build an amazing community to set free the oogies from the labs
          they were accidentally created and let our little fellas to play
          around, make friends, and explore the MetaWorld.
        </p>
      </div>
    </div>
  );
};

export default Oogies;
