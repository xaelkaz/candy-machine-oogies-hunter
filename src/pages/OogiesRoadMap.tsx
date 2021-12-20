import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBeer } from 'react-icons/fa';

const OogieRoadMap = () => {
  return (
    <div className='fancy-short-banner-seven dark-style' id='roadmap'>
      <div className='text-center'>
        <h2 className='text-center oggies-title'>
          <span>ROADMAP</span>
        </h2>
      </div>

      {/* End .col */}
      <div>
        <VerticalTimeline>
          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            contentStyle={{ background: '#9945FF', color: '#fff' }}
            contentArrowStyle={{
              borderRight: '7px solid  rgb(33, 150, 243)',
            }}
            date=''
            iconStyle={{ background: '#DC1FFF', color: '#fff' }}
            icon={<feFuncA />}
          >
            <h3 className='vertical-timeline-element-title font-bangers'>
              ROADMAP OOGIES HUNTERS
            </h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            date='01 November 2021'
            contentStyle={{ background: '#9945FF', color: '#fff' }}
            iconStyle={{ background: '#DC1FFF', color: '#fff' }}
          >
            <h4 className='font-bangers'>Marketing campaigns - Collabs</h4>
            <p className='font-comfortaa'>
              Twitter, Instagram, Influencer marketing, Giveaways.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            date='08 November 2021'
            contentStyle={{ background: '#9945FF', color: '#fff' }}
            iconStyle={{ background: '#DC1FFF', color: '#fff' }}
          >
            <h4 className='vertical-timeline-element-subtitle font-bangers'>
              NFT Collection Reveal
            </h4>
            <p className='font-comfortaa'>Oogies meet the Metaverse.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            date='15 November 2021'
            contentStyle={{ background: '#9945FF', color: '#fff' }}
            iconStyle={{ background: '#DC1FFF', color: '#fff' }}
          >
            <h4 className='vertical-timeline-element-subtitle font-bangers'>
              Website launch | Sneak Peaks
            </h4>
            <p className='font-comfortaa'>
              Website launch, Showing off the creative process, new traitsm
              community activities.{' '}
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertical-timeline-element--education'
            date='06 December 2021'
            contentStyle={{ background: '#9945FF', color: '#fff' }}
            iconStyle={{ background: '#DC1FFF', color: '#fff' }}
          >
            <h4 className='vertical-timeline-element-subtitle font-bangers'>
              Lore Reveal
            </h4>
            <p className='font-comfortaa'>
              We will share the little story we were preparing for the Oogies.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertical-timeline-element--education'
            date='December'
            contentStyle={{ background: '#9945FF', color: '#fff' }}
            iconStyle={{ background: '#DC1FFF', color: '#fff' }}
          >
            <h4 className='vertical-timeline-element-subtitle font-bangers'>
              Price Voting
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertical-timeline-element--education'
            date='17 December 2021'
            contentStyle={{ background: '#9945FF', color: '#fff' }}
            iconStyle={{ background: '#DC1FFF', color: '#fff' }}
          >
            <h4 className='vertical-timeline-element-subtitle font-bangers'>
              Oogies meet the Metaverse
            </h4>
            <p className='font-comfortaa'>Oogie Hunters drop</p>
            <p className='font-comfortaa'>500 The Real OG’s.</p>
            <p className='font-comfortaa'>Public Minting.</p>
            <p className='font-comfortaa'>Giveaways airdrops.</p>
            <p className='font-comfortaa'>Rarity Chart.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertical-timeline-element--education'
            date='All Q4'
            contentStyle={{ background: '#9945FF', color: '#fff' }}
            iconStyle={{ background: '#DC1FFF', color: '#fff' }}
          >
            <h4 className='vertical-timeline-element-subtitle font-bangers'>
              Postminting Marketing
            </h4>
            <p className='font-comfortaa'>
              To keep things active we'll be doing Community activities
              Marketing Campaigns Collabs
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertical-timeline-element--education'
            date='Q4 - Q1 2022'
            contentStyle={{ background: '#9945FF', color: '#fff' }}
            iconStyle={{ background: '#DC1FFF', color: '#fff' }}
          >
            <h4 className='vertical-timeline-element-subtitle font-bangers'>
              The hunting season continues
            </h4>
            <p className='font-comfortaa'>
              We’ll let our diamond hands decide the Oogies hunters future (Q4
              2021 - Q1 2022) We’ll keep you updated
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertical-timeline-element--education'
            date='DAO  - Q1 2022'
            contentStyle={{ background: '#9945FF', color: '#fff' }}
            iconStyle={{ background: '#DC1FFF', color: '#fff' }}
          >
            <h4 className='vertical-timeline-element-subtitle font-bangers'>
              Grape DAO Protocol
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertical-timeline-element--education'
            date='Launchpad - Q1 2022'
            contentStyle={{ background: '#9945FF', color: '#fff' }}
            iconStyle={{ background: '#DC1FFF', color: '#fff' }}
          >
            <h4 className='vertical-timeline-element-subtitle font-bangers'>
              Collaboration with another Projects, TBA Q1 - 2020 Season 2 TBA
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>

        {/* End .row */}
      </div>
      {/* /.container */}

      <img
        src='images/shape/162.svg'
        alt='shape'
        className='shapes shape-one'
      />
      <img
        src='images/shape/163.svg'
        alt='shape'
        className='shapes shape-two'
      />
    </div>
  );
};

export default OogieRoadMap;
