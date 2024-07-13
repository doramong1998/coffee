import right from '../../assets/right.svg';
import bean from '../../assets/bean.svg';
import sugar from '../../assets/sugar.svg';
import classic from '../../assets/classic.svg';
import coffeeCup from '../../assets/coffee-cup.svg';
import CoffeeCarousel from './CoffeeCarousel';

const Banner = () => {
  const list = [
    {
      image: bean,
      title: '100% Premium',
      content: 'Skinny latte using 100% premium arabic beans',
    },
    {
      image: sugar,
      title: 'Sugar free',
      content: 'now without added sugar',
    },
    {
      image: classic,
      title: 'Chilled Classics',
      content: 'compliments redmud cherry coffee',
    },
  ];

  return (
    <div className='mb-[150px]'>
      <div className='max-w-[1417px] m-auto relative mb-[275px] min-h-[635px]'>
        <div className='flex justify-between'>
          <div className='max-w-[620px]'>
            <div className='font-black text-saddle_brown-950 text-[80px] leading-[80px] mb-[25px] capitalize'>
              Mindful Drinks For Calm
            </div>
            <div className='text-black-950 text-[15px] leading-[22.5px] max-w-[468px] mb-[34px] capitalize'>
              Figma ipsum component variant main layer. Figma ipsum component
              variant main layer. Figma ipsum component variant main layer.
            </div>
            <div>
              <div className='bg-gold_sand-300 rounded-[31px] w-[205px] h-14 flex items-center justify-end pr-[10px] cursor-pointer'>
                <div className='flex items-center gap-6 right-3'>
                  <span className='text-saddle_brown-950 font-bold text-lg'>
                    BUY NOW
                  </span>
                  <img className='' src={right}></img>
                </div>
              </div>
            </div>
          </div>
          <div>
            {list?.map((i: any) => (
              <div className='flex gap-5 items-center mb-10'>
                <div>
                  <img className='' src={i?.image}></img>
                </div>
                <div>
                  <div className='text-saddle_brown-950 font-semibold text-lg leading-7 mb-[5px] capitalize'>
                    {i?.title}
                  </div>
                  <div className='text-black-950 text-[15px] leading-[22.5px] max-w-[210px] capitalize'>
                    {i?.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <img className='absolute top-20 right-[300px]' src={coffeeCup}></img>
      </div>
      <div className='max-w-[1200px] m-auto'>
        <CoffeeCarousel />
      </div>
    </div>
  );
};
export default Banner;
