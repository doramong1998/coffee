import coffeePoured from '../../assets/coffeePoured.svg';
import Input from '../Input';
import formName from '../../assets/form-name.svg';
import formEmail from '../../assets/form-email.svg';
import formPhone from '../../assets/form-phone.svg';
import formDate from '../../assets/form-date.svg';
import formTime from '../../assets/form-time.svg';
import formGroup from '../../assets/form-group.svg';
import formMessage from '../../assets/form-message.svg';

const Form = () => {
  return (
    <section className='mb-[150px]'>
      <div className='m-auto max-w-[1344px] flex md:justify-end relative '>
        <div className='md:absolute top-[188px] 2xl:left-0 left-4'>
          <h2 className=' font-semibold text-[30px] capitalize text-saddle_brown-950 leading-[40px] tracking-[3px] mb-4'>
            Book Your Table
          </h2>
          <h4 className='max-w-[409px] capitalize text-black-950 text-[15px] leading-[22px] mb-4'>
            Figma ipsum component variant main layer.Figma ipsum component
            variant main layer.
          </h4>
          <div className='md:w-[641px] w-[360px]'>
            <div className='md:flex gap-4 mb-4'>
              <div className='basis-1/2 md:mb-0 mb-4'>
                <Input icon={formName} placeholder='Your Name' />
              </div>
              <div className='basis-1/2'>
                <Input icon={formEmail} placeholder='Email Address' />
              </div>
            </div>
            <div className='md:flex gap-4 mb-4'>
              <div className='basis-1/2 md:mb-0 mb-4'>
                <Input icon={formPhone} placeholder='Phone Number' />
              </div>
              <div className='basis-1/2'>
                <Input icon={formDate} placeholder='MM/DD/YY' />
              </div>
            </div>
            <div className='md:flex gap-4 mb-4'>
              <div className='basis-1/2 md:mb-0 mb-4'>
                <Input icon={formTime} placeholder='7:00 AM' type='select' />
              </div>
              <div className='basis-1/2'>
                <Input icon={formGroup} placeholder='03 Person' type='select' />
              </div>
            </div>
            <div className='mb-4'>
              <Input
                icon={formMessage}
                placeholder='Your Message'
                type='textarea'
              />
            </div>
            <div className='w-full bg-muddy-400 rounded-[33px]  h-11 flex items-center justify-center cursor-pointer'>
              <button className='flex items-center'>
                <span className='text-saddle_brown-950 text-[15px]'>
                  Submit
                </span>
              </button>
            </div>
          </div>
        </div>
        <div>
          <img src={coffeePoured} className='md:block hidden' alt='form'></img>
        </div>
      </div>
    </section>
  );
};
export default Form;
