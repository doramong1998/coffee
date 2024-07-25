import breakfast from '../../assets/breakfast.svg';
import lunch from '../../assets/lunch.svg';
import pastry from '../../assets/pastry.svg';

const Freshly = () => {
  const listContent = [
    {
      title: 'Breakfast',

      image: breakfast,
    },
    {
      title: 'Lunch',

      image: lunch,
    },
    {
      title: 'Pastry',

      image: pastry,
    },
  ];

  return (
    <section className='mb-[150px]'>
      <div className='m-auto max-w-[1400px] mb-[70px] 2xl:p-0 xl:p-4'>
        <div className='mb-9'>
          <h2 className='text-center font-semibold text-[30px] capitalize text-saddle_brown-950 leading-[40px] tracking-[3px] mb-4'>
            Made Freshly For You
          </h2>
          <h4 className='max-w-[500px] text-center capitalize text-black-950 text-[15px] m-auto leading-[22px]'>
            Figma ipsum component variant main layer. Hand editor object project
            shadow opacity project object community rotate.
          </h4>
        </div>
        <div className='md:flex gap-[65px] justify-between xl:p-0 p-1'>
          {listContent?.map((i) => (
            <div className='md:w-[426px] w-[380px] md:mb-0 mb-4'>
              <div className='mb-5'>
                <img src={i?.image} alt='image-freshly'></img>
              </div>

              <h3 className='text-center font-medium text-[22px] text-saddle_brown-950 leading-[33px] mb-4'>
                {i?.title}
              </h3>
              <div className='flex justify-center'>
                <div className='bg-gold_sand-300 rounded-[31px] w-[142px] h-11 flex items-center justify-center cursor-pointer'>
                  <button className='flex items-center'>
                    <span className='text-saddle_brown-950 text-[15px]'>
                      View more
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Freshly;
