import React, { useState } from 'react';
import Scrollspy from 'react-scrollspy';
import Modal from 'react-modal';
import { FaDiscord, FaTwitter } from 'react-icons/fa';

Modal.setAppElement('#root');

const OogiesHeader = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 68) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <>
      {/* =============================================
				Theme Main Menu
			==============================================  */}
      <div
        className={
          navbar
            ? 'theme-main-menu sticky-menu theme-menu-four bg-none fixed'
            : 'theme-main-menu sticky-menu theme-menu-four bg-none'
        }
      >
        <div className='d-flex align-items-center justify-content-between'>
          <div className='logo'>
            <a href='#home'>
              <img src='images/bannerog.png' alt='brand' />
            </a>
          </div>
          {/* End logo */}

          <nav id='mega-menu-holder' className='navbar navbar-expand-lg'>
            <div className='container nav-container'>
              {/* End Header */}

              <div
                className='navbar-collapse collapse landing-menu-onepage'
                id='navbarSupportedContent'
              >
                <div
                  className='d-lg-flex justify-content-between align-items-center'
                  style={{ fontFamily: 'Bangers' }}
                >
                  <Scrollspy
                    className='navbar-nav  main-side-nav font-bangers'
                    items={['Home', 'Showcase', 'Roadmap', 'Team', 'Faq']}
                    currentClassName='active'
                    offset={-90}
                  >
                    <li className='nav-item'>
                      <a
                        href='#oogies'
                        className='nav-link'
                        style={{
                          color: '#f5f5f5',
                          fontWeight: 500,
                          fontFamily: 'Bangers',
                          fontSize: 30,
                        }}
                      >
                        Oogies
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a
                        href='#sneakpeaks'
                        className='nav-link'
                        style={{
                          color: '#f5f5f5',
                          fontWeight: 500,
                          fontFamily: 'Bangers',
                          fontSize: 30,
                        }}
                      >
                          SNEAK PEAKS
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a
                        href='#team'
                        className='nav-link'
                        style={{
                          color: '#f5f5f5',
                          fontWeight: 500,
                          fontFamily: 'Bangers',
                          fontSize: 30,
                        }}
                      >
                        TEAM
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a
                        href='#roadmap'
                        className='nav-link'
                        style={{
                          color: '#f5f5f5',
                          fontWeight: 500,
                          fontFamily: 'Bangers',
                          fontSize: 30,
                        }}
                      >
                        ROADMAP
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a
                        href='#faq'
                        className='nav-link'
                        style={{
                          color: '#f5f5f5',
                          fontWeight: 500,
                          fontFamily: 'Bangers',
                          fontSize: 30,
                        }}
                      >
                        FAQ
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a
                        href='https://discord.gg/Grkg9uFngB'
                        target='_blank'
                        className='nav-link'
                        style={{
                          color: '#f5f5f5',
                        }}
                        rel='noreferrer'
                      >
                        <FaDiscord size='1.5em' />
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a
                        href='https://twitter.com/OogiesHunters'
                        target='_blank'
                        className='nav-link'
                        style={{
                          color: '#f5f5f5',
                        }}
                        rel='noreferrer'
                      >
                        <FaTwitter size='1.5em' />
                      </a>
                    </li>
                  </Scrollspy>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* /.theme-main-menu */}

      {/* Mobile Menu Start */}
      {/* Mobile Menu End */}

      {/* End  Modal For Request a demo */}
    </>
  );
};

export default OogiesHeader;
