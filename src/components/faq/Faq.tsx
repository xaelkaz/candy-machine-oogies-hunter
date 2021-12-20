import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

const FaqContent = [
  {
    title: 'How many NFTs are available for minting in S1?',
    desc: `Season 1 will have 500 NFTs available for minting. For upcoming Seasons the quantity could change, we will keep you updated. `,
    expand: 'a',
  },
  {
    title: 'When is the launch?',
    desc: `We aim to launch on Dec 17, 16:00  UTC.`,
    expand: 'b',
  },
  {
    title: 'What are the compatible wallets?',
    desc: `Only send your SOL via Phantom Wallet, Sollet and Solfrare.
 Please no send from any exchange like Binance, Kucoin, Coinbase as your SOL can disappear.`,
    expand: 'c',
  },
  {
    title: 'Will there be a whitelist?',
    desc: `Yes,  Dec 17, 13:00  UTC.`,
    expand: 'd',
  },
  {
    title: 'How enter to WhiteList?',
    desc: `The first 1000 Hunters to meet in our official discord and joined twitter will be added to the whitelist by default.`,
    expand: 'e',
  },
  {
    title: 'Why do I want to hold an Oogie?',
    desc: `Holding an Oogie will grant you access to the DAO.
    As a DAO you will decide on the future of the Oogie Hunters.
    We want to be like a launchpad for new Solana NFTs that satisfy the community standards to elevate the probabilities of good investments for our holders, the idea is to partner up with these projects to guarantee some privileges for those who hold some Oogies.
    Besides this the DAO also will vote for other projects that they hold for us to collaborate on exclusive drops for both communities leading to a win-win situation where both communities benefit from this increasing the hype on their NFTs and improving your chances to make better profits.
    We have more ideas to make this a NFT that you would like to hold long term, and as the time goes by we'll be doing more things for the community!
    `,
    expand: 'f',
  },
  {
    title: 'Drop dynamics?',
    desc: `We will be implementing Seasons to our project, every season will start to roll out after the previous season sells out.`,
    expand: 'g',
  },
  {
    title: 'Whats the mint price?',
    desc: `1.25 - 1.75 SOL We want you to vote, we'll let you know how soon. `,
    expand: 'i',
  },
];

const Faq = () => {
  return (
    <div
      className='accordion-style-four'
      data-aos='fade-up'
      data-aos-duration='1200'
    >
      <div className='faq-wrraper'>
        <Accordion preExpanded={['b']} allowZeroExpanded>
          {FaqContent.map((item, i) => (
            <AccordionItem className='card' key={i} uuid={item.expand}>
              <AccordionItemHeading className='card-header'>
                <AccordionItemButton>
                  <h5 className='mb-0'>
                    <button className='btn btn-link'>{item.title}</button>{' '}
                  </h5>
                </AccordionItemButton>
              </AccordionItemHeading>
              {/* Accordion Heading */}
              <AccordionItemPanel className='card-body fadeInUp'>
                <p className='text-justify'>{item.desc}</p>
              </AccordionItemPanel>
              {/* Accordion Body Content */}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
