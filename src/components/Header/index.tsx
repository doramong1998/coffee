import { useState } from 'react';
import logo from '../../assets/logo.svg';
import shopping from '../../assets/mdi_shopping-outline.svg';
import menu from '../../assets/menu.svg';
import { Badge, Drawer } from 'antd';

const Header = ({ cart }: any) => {
  const listMenu = [
    {
      name: 'home',
    },
    {
      name: 'coffee',
    },
    {
      name: 'menu',
    },
    {
      name: 'gallery',
    },
    {
      name: 'team',
    },
  ];

  const [open, setOpen] = useState(false);
  return (
    <header className='xl:px-9 px-2v flex justify-between items-center mb-[111px]'>
      <div>
        <a href='/'>
          <img
            src={logo}
            alt='logo'
            className='md:h-[119px] md:w-[272px] w-[160px]'
          ></img>
        </a>
      </div>
      <div className='flex gap-5 items-center'>
        <ul className='md:flex gap-[34px] hidden'>
          {listMenu?.map((i) => (
            <li
              key={i?.name}
              className='font-normal uppercase cursor-pointer hover:text-muddy-400'
            >
              <a href={`#${i?.name}`}>{i?.name}</a>
            </li>
          ))}
        </ul>
        <div>
          <Badge count={cart || 0} offset={[-2, 40]} color='#583101'>
            <a href='#cart'>
              <img
                className='bg-gold_sand-300 rounded-full p-[10px] cursor-pointer'
                src={shopping}
                alt='header-cart'
              ></img>
            </a>
          </Badge>
        </div>
        <div>
          <img
            className='px-[5.25px] py-[10.5px] cursor-pointer md:hidden block'
            src={menu}
            alt='menu'
            onClick={() => setOpen(true)}
          ></img>
        </div>
      </div>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        style={{ background: '#FFEDD8' }}
        bodyStyle={{ padding: 0 }}
      >
        <ul className=''>
          {listMenu?.map((i) => (
            <li
              key={i?.name}
              className='font-semibold uppercase cursor-pointer hover:text-muddy-400 p-4 hover:bg-gold_sand-300  mb-2'
            >
              <a href={`#${i?.name}`}>{i?.name}</a>
            </li>
          ))}
        </ul>
      </Drawer>
    </header>
  );
};
export default Header;
