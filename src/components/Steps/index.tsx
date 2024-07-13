import steps from '../../assets/steps.svg';

const Steps = () => {
  const listContent = [
    {
      title: 'Roasting',
      content: 'Lorem ipsum dolor sit amet, his convenire similiqu.',
    },
    {
      title: 'grinding',
      content: 'Lorem ipsum dolor sit amet, his convenire similiqu.',
    },
    {
      title: 'brewing',
      content: 'Lorem ipsum dolor sit amet, his convenire similiqu.',
    },
    {
      title: 'Presentation',
      content: 'Lorem ipsum dolor sit amet, his convenire similiqu.',
    },
  ];

  return (
    <div className='m-auto px-[62px] mb-[150px]'>
      <img src={steps} className='mb-9'></img>
      <div className='flex gap-[154px] justify-center'>
        {listContent?.map((i) => (
          <div className='w-[227px]' key={i?.title}>
            <div className='text-saddle_brown-950 font-medium text-[22px] leading-[33px] text-center mb-4 capitalize'>
              {i?.title}
            </div>
            <div className='text-black-950 text-[15px] leading-[22px] text-center capitalize'>
              {i?.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Steps;
