import { useState } from 'react';
import gallery1 from '../../assets/gallery1.jpeg';
import gallery2 from '../../assets/gallery2.jpeg';
import gallery3 from '../../assets/gallery3.jpeg';
import gallery4 from '../../assets/gallery4.jpeg';
import gallery5 from '../../assets/gallery5.jpeg';
import gallery6 from '../../assets/gallery6.jpeg';
import gallery7 from '../../assets/gallery7.jpeg';

const Gallery = () => {
  const [active, setActive] = useState(4);
  const listImages = [
    {
      key: 1,
      image: gallery1,
    },
    {
      key: 2,
      image: gallery2,
    },
    {
      key: 3,
      image: gallery3,
    },
    {
      key: 4,
      image: gallery4,
    },
    {
      key: 5,
      image: gallery5,
    },
    {
      key: 6,
      image: gallery6,
    },
    {
      key: 7,
      image: gallery7,
    },
  ];
  return (
    <div className='mb-[150px]'>
      <div className='m-auto w-[1388px] flex gap-4'>
        {listImages?.map((i) => (
          <div
            onClick={() => setActive(i?.key)}
            className={`${
              active === i?.key ? 'w-[700px]' : 'w-[100px]'
            } h-[616px] transition-all ease-in delay-150`}
          >
            <img
              src={i?.image}
              className='w-full h-full object-cover rounded-[50px]'
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Gallery;
