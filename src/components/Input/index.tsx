import arrow from '../../assets/arrow-down.svg';

const Input = ({ icon, placeholder, type }: any) => {
  return (
    <div
      className={`w-full flex justify-between p-2 rounded-[20px] border-2 border-saddle_brown-950 ${
        type === 'textarea' ? 'h-[194px]' : 'h-[54px]'
      }`}
    >
      <div className='flex w-full'>
        <div className='mr-4'>
          <div className='w-[35px] h-[35px]'>
            <img src={icon}></img>
          </div>
        </div>
        {type === 'textarea' ? (
          <textarea
            className='bg-transparent w-full mt-1'
            placeholder={placeholder}
          />
        ) : (
          <input className='bg-transparent' placeholder={placeholder} />
        )}
      </div>

      {type === 'select' && <img src={arrow}></img>}
    </div>
  );
};
export default Input;
