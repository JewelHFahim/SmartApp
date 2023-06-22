import { RouterProvider } from 'react-router-dom';
import router from './Routes/Router';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';


const App = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;