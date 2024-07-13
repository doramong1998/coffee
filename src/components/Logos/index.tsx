import logoSpark from '../../assets/logo-spark.svg';
import logoSato from '../../assets/logo-sato.svg';
import logoCoconut from '../../assets/logo-coconut.svg';
import logoNight from '../../assets/logo-night.svg';
import logoGrid from '../../assets/logo-grid.svg';
import email from '../../assets/email.svg';

const Logos = () => {
  const listImages = [
    {
      key: 1,
      image: logoSpark,
    },
    {
      key: 2,
      image: logoSato,
    },
    {
      key: 3,
      image: logoCoconut,
    },
    {
      key: 4,
      image: logoNight,
    },
    {
      key: 5,
      image: logoGrid,
    },
  ];
  return (
    <div className='mb-[150px]'>
      <div className='m-auto w-[1640px] mb-4'>
        <div className='flex gap-[14px]'>
          {listImages?.map((i) => (
            <div>
              <img src={i?.image}></img>
            </div>
          ))}
        </div>
      </div>
      <div className='m-auto w-[530px]'>
        <div className='text-center font-semibold text-[30px] capitalize text-saddle_brown-950 leading-[40px] tracking-[3px] mb-4'>
          News as fresh as our coffee
        </div>
        <div className='flex border-[3px] border-saddle_brown-950'>
          <input
            className='w-full p-[22px]'
            placeholder='Your Email Address'
          ></input>
          <div className='w-[80px] h-[80px] bg-saddle_brown-950 flex m-auto justify-center'>
            <img src={email} className='w-[30px]'></img>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Logos;
