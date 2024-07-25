import footerLogo from '../../assets/footer-logo.svg';
import snapchat from '../../assets/snapchat.svg';
import twitter from '../../assets/twitter.svg';

import whatsapp from '../../assets/whatsapp.svg';

import facebook from '../../assets/facebook.svg';

import message from '../../assets/messenger.svg';

const Footer = () => {
  return (
    <footer className='w-full bg-muddy-400 py-[110px]'>
      <div className='m-auto max-w-[1403px] mb-4'>
        <div className='md:flex 2xl:gap-[93px] xl:gap-[40px] justify-between align-middle'>
          <div className='md:mb-0 mb-4'>
            <h3 className='font-medium text-[22px] leading-[33px] text-saddle_brown-950 mb-4'>
              Contact
            </h3>
            <ul>
              <li className='text-[15px] leading-[22px] text-saddle_brown-950'>
                Phone: 0225566734
              </li>
              <li className='text-[15px] leading-[22px] text-saddle_brown-950'>
                Email:lache@example.com
              </li>
              <li className='text-[15px] leading-[22px] text-saddle_brown-950'>
                Address: NY, Linn Dr 238
              </li>
            </ul>
          </div>
          <div className='md:mb-0 mb-4'>
            <h3 className='font-medium text-[22px] leading-[33px] text-saddle_brown-950 mb-4'>
              Locations
            </h3>
            <ul>
              <li className='text-[15px] leading-[22px] text-saddle_brown-950'>
                LA, Halatio Ave 16
              </li>
              <li className='text-[15px] leading-[22px] text-saddle_brown-950'>
                New York, Linn Dr 238
              </li>
              <li className='text-[15px] leading-[22px] text-saddle_brown-950'>
                LA, Halatio Ave 9
              </li>
            </ul>
          </div>
          <div className='xl:block hidden'>
            <img src={footerLogo} alt='logo'></img>
          </div>

          <div className='md:mb-0 mb-4'>
            <h3 className='font-medium text-[22px] leading-[33px] text-saddle_brown-950 mb-4'>
              Information
            </h3>
            <ul>
              <li className='text-[15px] leading-[22px] text-saddle_brown-950'>
                About
              </li>
              <li className='text-[15px] leading-[22px] text-saddle_brown-950'>
                Contact
              </li>
              <li className='text-[15px] leading-[22px] text-saddle_brown-950'>
                Reservations
              </li>
            </ul>
          </div>
          <div className='md:mb-0 mb-4'>
            <h3 className='font-medium text-[22px] leading-[33px] text-saddle_brown-950 mb-4'>
              Opening hours
            </h3>
            <ul>
              <li className='text-[15px] leading-[22px] text-saddle_brown-950'>
                Mon - Fri 09-22
              </li>
              <li className='text-[15px] leading-[22px] text-saddle_brown-950'>
                Saturday 09-01
              </li>
              <li className='text-[15px] leading-[22px] text-saddle_brown-950'>
                Sunday 09-23
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='m-auto flex gap-2 w-[154px]'>
        <a href='https://www.snapchat.com/'>
          <img src={snapchat}></img>
        </a>
        <a href='https://x.com/?lang=vi'>
          <img src={twitter}></img>
        </a>
        <a href='https://web.whatsapp.com/'>
          <img src={whatsapp}></img>
        </a>
        <a href='https://www.facebook.com/'>
          <img src={facebook}></img>
        </a>
        <a href='https://www.messenger.com/'>
          <img src={message}></img>
        </a>
      </div>
    </footer>
  );
};
export default Footer;
