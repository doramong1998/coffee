import logo from '../../assets/logo.svg';
import shopping from '../../assets/mdi_shopping-outline.svg';
import menu from '../../assets/menu.svg';

const Header = () => {
  const listMenu = [
    {
      name: 'Home',
    },
    {
      name: 'coffee',
    },
    {
      name: 'Menu',
    },
    {
      name: 'gallery',
    },
    {
      name: 'team',
    },
  ];
  return (
    <div className='md:px-9 px-2v flex justify-between items-center mb-[111px]'>
      <div>
        <img src={logo} className='md:h-[119px] md:w-[272px] w-[160px]'></img>
      </div>
      <div className='flex gap-5 items-center'>
        <div className='flex gap-[34px] md:block hidden'>
          {listMenu?.map((i) => (
            <div
              key={i?.name}
              className='font-normal uppercase cursor-pointer hover:text-muddy-400'
            >
              {i?.name}
            </div>
          ))}
        </div>
        <div>
          <img
            className='bg-gold_sand-300 rounded-full p-[10px] cursor-pointer'
            src={shopping}
          ></img>
        </div>
        <div>
          <img
            className='px-[5.25px] py-[10.5px] cursor-pointer'
            src={menu}
          ></img>
        </div>
      </div>
    </div>
  );
};
export default Header;
