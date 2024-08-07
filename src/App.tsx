import Header from './components/Header';
import Banner from './components/Banner';
import Steps from './components/Steps';
import Offer from './components/Offer';
import Customer from './components/Customer';
import Freshly from './components/Freshly';
import Form from './components/Form';
import Gallery from './components/Gallery';
import Logos from './components/Logos';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState(0);
  return (
    <div className='bg-derby-100 w-full'>
      <div className='max-w-[1920px]  m-auto min-h-screen pb-12  xl:p-0 p-4'>
        <Header cart={cart} setCart={setCart} />
        <Banner cart={cart} setCart={setCart} />
        <Steps />
        <Offer />
        <Customer />
        <Freshly />
        <Form />
        <Gallery />
        <Logos />
      </div>
      <Footer />
    </div>
  );
}

export default App;
