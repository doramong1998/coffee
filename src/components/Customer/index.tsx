import cup2 from '../../assets/cup-2.svg';
import beans from '../../assets/beans.svg';
import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';
import avatar1 from '../../assets/avatar1.svg';
import avatar2 from '../../assets/avatar2.svg';
import avatar3 from '../../assets/avatar3.svg';
import Slider from 'react-slick';
import { useRef } from 'react';

const Customer = () => {
  const settings = {
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  let sliderRef: any = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  return (
    <div className='md:flex relative mb-[150px] xl:p-0 p-4 '>
      <img src={cup2} className='xl:block hidden'></img>
      <div>
        <div className='mt-[60px]'>
          <div className='w-[364px]  font-medium text-saddle_brown-950 text-[30px] leading-[45px] tracking-[3px] capitalize mb-4 '>
            What our Customer are saying
          </div>
          <div className='text-black-950 text-[15px] leading-[22px] xl:max-w-[498px] max-w-[364px] capitalize mb-4'>
            Figma ipsum component variant main layer. Layout selection group
            blur arrow flows undo figma style. Star shadow flatten export select
            text pen.
          </div>
          <div className='flex gap-4'>
            <img
              src={arrowLeft}
              onClick={() => previous()}
              className='cursor-pointer'
            ></img>
            <img
              src={arrowRight}
              onClick={() => next()}
              className='cursor-pointer'
            ></img>
          </div>
        </div>
      </div>
      <div className='2xl:w-[1036px] xl:w-[680px] md:w-[660px] w-[420px]'>
        <Slider
          {...settings}
          ref={(slider) => {
            sliderRef = slider;
          }}
        >
          <div className={`px-8 mt-16`}>
            <div className='bg-gold_sand-300 px-5 py-8 rounded-[22px] max-w-[270px]'>
              <div className='mb-4'>
                <img className='m-auto' src={avatar1}></img>
              </div>
              <div className='text-center text-saddle_brown-950 text-[22px] leading-[33px] capitalize mb-4'>
                David Gale
              </div>
              <div className=' text-center text-[15px] text-black-950 capitalize'>
                Figma ipsum component variant main layer. Font hand device scale
                flows underline boolean vector.Figma ipsum component variant
                main layer. Font hand device scale flows underline boolean
                vector.
              </div>
            </div>
          </div>
          <div className={`px-8`}>
            <div className='bg-gold_sand-300 px-5 py-8 rounded-[22px] max-w-[270px]'>
              <div className='mb-4'>
                <img className='m-auto' src={avatar2}></img>
              </div>
              <div className='text-center text-saddle_brown-950 text-[22px] leading-[33px] capitalize mb-4'>
                David Gale
              </div>
              <div className=' text-center text-[15px] text-black-950 capitalize'>
                Figma ipsum component variant main layer. Font hand device scale
                flows underline boolean vector.Figma ipsum component variant
                main layer. Font hand device scale flows underline boolean
                vector.
              </div>
            </div>
          </div>
          <div className={`px-8 mt-32`}>
            <div className='bg-gold_sand-300 px-5 py-8 rounded-[22px] max-w-[270px]'>
              <div className='mb-4'>
                <img className='m-auto' src={avatar3}></img>
              </div>
              <div className='text-center text-saddle_brown-950 text-[22px] leading-[33px] capitalize mb-4'>
                David Gale
              </div>
              <div className=' text-center text-[15px] text-black-950 capitalize'>
                Figma ipsum component variant main layer. Font hand device scale
                flows underline boolean vector.Figma ipsum component variant
                main layer. Font hand device scale flows underline boolean
                vector.
              </div>
            </div>
          </div>
          <div className={`px-8 mt-9`}>
            <div className='bg-gold_sand-300 px-5 py-8 rounded-[22px] max-w-[270px]'>
              <div className='mb-4'>
                <img className='m-auto' src={avatar1}></img>
              </div>
              <div className='text-center text-saddle_brown-950 text-[22px] leading-[33px] capitalize mb-4'>
                David Gale
              </div>
              <div className=' text-center text-[15px] text-black-950 capitalize'>
                Figma ipsum component variant main layer. Font hand device scale
                flows underline boolean vector.Figma ipsum component variant
                main layer. Font hand device scale flows underline boolean
                vector.
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <div className='absolute top-0 2xl:right-[170px] xl:right-0 2xl:w-auto xl:w-[820px] xl:block hidden'>
        <img src={beans}></img>
      </div>
    </div>
  );
};
export default Customer;
