import offerBean from '../../assets/offer-bean.svg';
import offerBread from '../../assets/offer-bread.svg';
import offerCoffee from '../../assets/offer-coffee.svg';
import offerCup from '../../assets/offer-cup.svg';
import offerList1 from '../../assets/offer-list1.svg';
import offerList2 from '../../assets/offer-list2.svg';

import offerList3 from '../../assets/offer-list3.svg';

import offerList4 from '../../assets/offer-list4.svg';

const Offer = () => {
  const listContent = [
    {
      title: 'Coffee Variety’s',
      content:
        'Figma ipsum component variant main layer. Rotate style prototype arrange fill horizontal connection.',
      image: offerCoffee,
    },
    {
      title: 'Beans',
      content:
        'Figma ipsum component variant main layer. Rotate style prototype arrange fill horizontal connection.',
      image: offerBean,
    },
    {
      title: 'Pastry',
      content:
        'Figma ipsum component variant main layer. Rotate style prototype arrange fill horizontal connection.',
      image: offerBread,
    },
    {
      title: 'Take Away',
      content:
        'Figma ipsum component variant main layer. Rotate style prototype arrange fill horizontal connection.',
      image: offerCup,
    },
  ];

  return (
    <div className='mb-[150px]'>
      <div className='m-auto w-[1334px] mb-[70px]'>
        <div className='mb-9'>
          <div className='text-center font-semibold text-[30px] capitalize text-saddle_brown-950 leading-[40px] tracking-[3px] mb-4'>
            What we offer
          </div>
          <div className='max-w-[500px] text-center capitalize text-black-950 text-[15px] m-auto leading-[22px]'>
            Figma ipsum component variant main layer. Rotate style prototype
            arrange fill horizontal connection.
          </div>
        </div>
        <div className='flex gap-[90px] justify-center'>
          {listContent?.map((i) => (
            <div className='w-[266px]'>
              <div className='h-[126px] mb-4 relative'>
                <img
                  src={i?.image}
                  className='absolute bottom-0 left-1/2 -translate-x-1/2'
                ></img>
              </div>

              <div className='text-center font-medium text-[22px] text-saddle_brown-950 leading-[33px] mb-[10px]'>
                {i?.title}
              </div>
              <div className='text-center text-[15px] leading-[22px] text-black-950 font-normal'>
                {i?.content}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='m-auto w-[1420px] rounded-[20px] bg-gold_sand-300 h-[710px]'>
        <div className='flex'>
          <div className='w-[355px] h-[355px]'>
            <img src={offerList1}></img>
          </div>
          <div className='w-[355px] h-[355px] flex justify-center'>
            <div className='m-auto'>
              <div className='text-saddle_brown-950 text-[22px] leading-[33px] font-medium mb-[18px]'>
                RESERVATIONS
              </div>
              <div className='text-center text-black-950 text-[15px] leading-[22px]'>
                Reservation numbers:
              </div>
              <div className='text-center text-black-950 text-[15px] leading-[22px]'>
                +458-874-36-21{' '}
              </div>
              <div className='text-center text-black-950 text-[15px] leading-[22px]'>
                +458-471-56-36
              </div>
            </div>
          </div>
          <div className='w-[355px] h-[355px]'>
            {' '}
            <img src={offerList2}></img>
          </div>
          <div className='w-[355px] h-[355px] flex justify-center'>
            <div className='m-auto'>
              <div className='text-saddle_brown-950 text-[22px] leading-[33px] font-medium mb-[18px]'>
                RESERVATIONS
              </div>
              <div className='text-center text-black-950 text-[15px] leading-[22px]'>
                Reservation numbers:
              </div>
              <div className='text-center text-black-950 text-[15px] leading-[22px]'>
                +458-874-36-21{' '}
              </div>
              <div className='text-center text-black-950 text-[15px] leading-[22px]'>
                +458-471-56-36
              </div>
            </div>
          </div>
        </div>
        <div className='flex'>
          <div className='w-[355px] h-[355px] flex justify-center'>
            <div className='m-auto'>
              <div className='text-saddle_brown-950 text-[22px] leading-[33px] font-medium mb-[18px]'>
                RESERVATIONS
              </div>
              <div className='text-center text-black-950 text-[15px] leading-[22px]'>
                Reservation numbers:
              </div>
              <div className='text-center text-black-950 text-[15px] leading-[22px]'>
                +458-874-36-21{' '}
              </div>
              <div className='text-center text-black-950 text-[15px] leading-[22px]'>
                +458-471-56-36
              </div>
            </div>
          </div>
          <div className='w-[355px] h-[355px]'>
            <img src={offerList3}></img>
          </div>
          <div className='w-[355px] h-[355px] flex justify-center'>
            <div className='m-auto'>
              <div className='text-saddle_brown-950 text-[22px] leading-[33px] font-medium mb-[18px]'>
                RESERVATIONS
              </div>
              <div className='text-center text-black-950 text-[15px] leading-[22px]'>
                Reservation numbers:
              </div>
              <div className='text-center text-black-950 text-[15px] leading-[22px]'>
                +458-874-36-21{' '}
              </div>
              <div className='text-center text-black-950 text-[15px] leading-[22px]'>
                +458-471-56-36
              </div>
            </div>
          </div>
          <div className='w-[355px] h-[355px]'>
            {' '}
            <img src={offerList4}></img>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Offer;
