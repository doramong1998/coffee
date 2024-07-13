
import Slider from 'react-slick';
import coffee1 from '../../assets/coffee1.svg';
import coffee3 from '../../assets/coffee3.svg';
import sliderRight from '../../assets/slider-right.svg';
import sliderLeft from '../../assets/slider-left.svg';

const CoffeeCarousel = () => {
  const settings = {
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    nextArrow: <img src={sliderRight}></img>,
    prevArrow: <img src={sliderLeft}></img>,
    centerPadding: '0px',
    speed: 500,
    autoplay: true,
  };

  const listProducts = [
    {
      image: coffee1,
      name: 'iced cappuccino',
    },
    {
      image: coffee3,
      name: 'raspberry  cappuccino',
    },

    {
      image: coffee1,
      name: 'iced cappuccino',
    },
    {
      image: coffee3,
      name: 'caramel macchiato',
    },
  ];
  return (
    <div className='bg-muddy-400 h-[282px] rounded-[50px] relative'>
      <div className='absolute bottom-5 w-full px-[98px]'>
        <Slider
          {...settings}
     
          className='custom-slider'
        >
          {listProducts?.map((i, index) => (
            <div>
              <div key={index} className='relative'>
                <div className='item-container relative h-[572px]'>
                  <img
                    className='item-image m-auto absolute bottom-0 left-1/2 -translate-x-1/2'
                    src={i?.image}
                  ></img>
                </div>
                <div className='item-text absolute bottom-2 left-1/2 -translate-x-1/2 w-full'>
                  <div className='text-center text-white text-[22px] font-medium leading-[33px] capitalize'>
                    {i?.name}
                  </div>
                  <div className='item-add text-center text-[15px] text-black-950 capitalize hover:text-saddle_brown-950 cursor-pointer'>
                    add to order +
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CoffeeCarousel;