import React from 'react';
import {
  FaDiscord,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaTwitch,
  FaTwitter,
} from 'react-icons/fa';

const TeamContent = [
  {
    designation: 'Co-Founder',
    name: 'Baylitro',
    img: 'baylitro.jpg',
    animationDelay: '250',
    socialCombo: 'LinkedingTwitter',
    social1: 'https://www.linkedin.com/in/bayron-dillems/',
    social2: 'https://twitter.com/baylitro',
  },
  {
    designation: 'Co-Founder',
    name: 'Madssimo',
    img: 'madssimo.jpg',
    animationDelay: '300',
    socialCombo: 'InstagramTwitter',
    social1: 'https://www.instagram.com/madssimo/',
    social2: 'https://twitter.com/madssimo',
  },
  {
    designation: 'Developer',
    name: 'Xaelkaz',
    img: 'xbernikov.jpg',
    animationDelay: '200',
    socialCombo: 'LinkedingTwitter',
    social1: 'https://www.linkedin.com/in/xavier-bieberach-13b31113b/',
    social2: 'https://twitter.com/xBernikov',
  },
  {
    designation: 'Design',
    name: 'Leletiger',
    img: 'leletiger.jpg',
    animationDelay: '200',
    socialCombo: 'LinkedingTwitter',
    social1: 'https://www.linkedin.com/in/ale-araujo-519476211/',
    social2: 'https://twitter.com/leletiger_',
  },
  {
    designation: 'Design',
    name: 'Shallita',
    img: 'shallita.jpg',
    animationDelay: '200',
    socialCombo: 'Twitter',
    social1: 'https://mobile.twitter.com/shallitta',
    social2: ''
  },
  {
    designation: '-',
    name: 'Team',
    img: 'oggieshuntersteam.gif',
    animationDelay: '200',
    socialCombo: 'Discord',
    social1: 'https://discord.com/invite/Grkg9uFngB',
    social2: ''
  },
];

const renderLinkedingTwitterCombo = (linkeding: string, twitter: string) => {
  return (
    <div className='position'>
      <a href={linkeding}>
        <FaLinkedin size='1.5em' />
      </a>{' '}
      <a href={twitter}>
        <FaTwitter size='1.5em' />
      </a>
    </div>
  );
};

const renderTwitterInstagramCombo = (instagram: string, twitter: string) => {
  console.log('INSTAGRAM', instagram)
  return (
    <div className='position'>
      <a href={instagram} target='_blank' rel='noreferrer'>
        <FaInstagram size='1.5em' />
      </a>{' '}
      <a href={twitter} target='_blank' rel='noreferrer'>
        <FaTwitter size='1.5em' />{' '}
      </a>
    </div>
  );
};

const renderTwitter = (twitter: string) => {
  return (
    <div className='position'>
      <a href={twitter} target='_blank' rel='noreferrer'>
        <FaTwitter size='1.5em' />
      </a>
    </div>
  );
};

const renderDiscord = (discord: string) => {
  return (
    <div className='position'>
      {' '}
      <a href={discord} target='_blank' rel='noreferrer'>
        <FaDiscord href='' size='1.5em' />{' '}
      </a>
    </div>
  );
};

const renderSocialMediaIcon = (
  combo: string,
  social1: string,
  social2: string
) => {
  switch (combo) {
    case 'LinkedingTwitter':
      return renderLinkedingTwitterCombo(social1, social2);
    case 'InstagramTwitter':
      return renderTwitterInstagramCombo(social1, social2);
    case 'Twitter':
      return renderTwitter(social1);
    case 'Discord':
      return renderDiscord(social1);
    default:
      break;
  }
};
const TeamFive = () => {
  const title: string = '/team-details-v1'
  return (
    <>
      {TeamContent.map((item, i) => (
        <div
          className='col-lg-4 col-sm-6'
          data-aos='fade-up'
          data-aos-duration='1200'
          data-aos-delay={item.animationDelay}
          key={i}
        >
          <div className='team-member'>
            <div className='img-holder'>
              <img src={`images/${item.img}`} alt='team' />
            </div>
            <h6 className='name'>{item.name}</h6>
            <div className='position'>{item.designation}</div>
            {renderSocialMediaIcon(
              item.socialCombo,
              item.social1,
              item.social2
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default TeamFive;
