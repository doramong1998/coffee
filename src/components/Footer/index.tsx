import footerLogo from '../../assets/footer-logo.svg';
import snapchat from '../../assets/snapchat.svg';
import twitter from '../../assets/twitter.svg';

import whatsapp from '../../assets/whatsapp.svg';

import facebook from '../../assets/facebook.svg';

import message from '../../assets/messenger.svg';

const Footer = () => {
  return (
    <div className='w-full bg-muddy-400 py-[110px]'>
      <div className='m-auto w-[1403px] mb-4'>
        <div className='flex gap-[93px] justify-between align-middle'>
          <div>
            <div className='font-medium text-[22px] leading-[33px] text-saddle_brown-950 mb-4'>
              Contact
            </div>
            <div className='text-[15px] leading-[22px] text-saddle_brown-950'>
              Phone: 0225566734
            </div>
            <div className='text-[15px] leading-[22px] text-saddle_brown-950'>
              Email:lache@example.com
            </div>
            <div className='text-[15px] leading-[22px] text-saddle_brown-950'>
              Address: NY, Linn Dr 238
            </div>
          </div>
          <div>
            <div className='font-medium text-[22px] leading-[33px] text-saddle_brown-950 mb-4'>
              Locations
            </div>
            <div className='text-[15px] leading-[22px] text-saddle_brown-950'>
              LA, Halatio Ave 16
            </div>
            <div className='text-[15px] leading-[22px] text-saddle_brown-950'>
              New York, Linn Dr 238
            </div>
            <div className='text-[15px] leading-[22px] text-saddle_brown-950'>
              LA, Halatio Ave 9
            </div>
          </div>
          <div>
            <img src={footerLogo}></img>
          </div>

          <div>
            <div className='font-medium text-[22px] leading-[33px] text-saddle_brown-950 mb-4'>
              Information
            </div>
            <div className='text-[15px] leading-[22px] text-saddle_brown-950'>
              About
            </div>
            <div className='text-[15px] leading-[22px] text-saddle_brown-950'>
              Contact
            </div>
            <div className='text-[15px] leading-[22px] text-saddle_brown-950'>
              Reservations
            </div>
          </div>
          <div>
            <div className='font-medium text-[22px] leading-[33px] text-saddle_brown-950 mb-4'>
              Opening hours
            </div>
            <div className='text-[15px] leading-[22px] text-saddle_brown-950'>
              Mon - Fri 09-22
            </div>
            <div className='text-[15px] leading-[22px] text-saddle_brown-950'>
              Saturday 09-01
            </div>
            <div className='text-[15px] leading-[22px] text-saddle_brown-950'>
              Sunday 09-23
            </div>
          </div>
        </div>
      </div>
      <div className='m-auto flex gap-2 w-[154px]'>
        <img src={snapchat}></img>
        <img src={twitter}></img>
        <img src={whatsapp}></img>
        <img src={facebook}></img>
        <img src={message}></img>
      </div>
    </div>
  );
};
export default Footer;
