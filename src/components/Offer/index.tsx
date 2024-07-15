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
      <div className='m-auto max-w-[1334px] mb-[70px]'>
        <div className='mb-9'>
          <div className='text-center font-semibold text-[30px] capitalize text-saddle_brown-950 leading-[40px] tracking-[3px] mb-4'>
            What we offer
          </div>
          <div className='max-w-[500px] text-center capitalize text-black-950 text-[15px] m-auto leading-[22px]'>
            Figma ipsum component variant main layer. Rotate style prototype
            arrange fill horizontal connection.
          </div>
        </div>
        <div className='md:flex xl:gap-[90px] gap-[36px] justify-center'>
          {listContent?.map((i) => (
            <div className='w-[266px] md:m-0 m-auto mb-6'>
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
      <div className='md:block hidden m-auto 2xl:w-[1420px] xl:w-[1300px] rounded-[20px] bg-gold_sand-300 xl:h-[650px] 2xl:h-[710px] h-[512px]'>
        <div className='flex'>
          <div className='2xl:w-[355px] w-[256px] 2xl:h-[355px] h-[256px] xl:w-[325px] xl:h-[325px]'>
            <img src={offerList1}></img>
          </div>
          <div className='2xl:w-[355px] w-[256px] 2xl:h-[355px] h-[256px] xl:w-[325px] xl:h-[325px] flex justify-center'>
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
          <div className='2xl:w-[355px] w-[256px] 2xl:h-[355px] h-[256px] xl:w-[325px] xl:h-[325px]'>
            {' '}
            <img src={offerList2}></img>
          </div>
          <div className='2xl:w-[355px] w-[256px] 2xl:h-[355px] h-[256px] flex justify-center xl:w-[325px] xl:h-[325px]'>
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
          <div className='2xl:w-[355px] w-[256px] 2xl:h-[355px] h-[256px] flex justify-center xl:w-[325px] xl:h-[325px]'>
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
          <div className='2xl:w-[355px] w-[256px] 2xl:h-[355px] h-[256px] xl:w-[325px] xl:h-[325px]'>
            <img src={offerList3}></img>
          </div>
          <div className='2xl:w-[355px] w-[256px] 2xl:h-[355px] h-[256px] flex justify-center xl:w-[325px] xl:h-[325px]'>
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
          <div className='2xl:w-[355px] w-[256px] 2xl:h-[355px] h-[256px] xl:w-[325px] xl:h-[325px]'>
            {' '}
            <img src={offerList4}></img>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Offer;
