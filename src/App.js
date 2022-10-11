
import './App.css'
import { Box, ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';


//import AllRoutes from './components/allroute';

import Footer from './Components/Footer';
import AllRoute from './Routes/AllRoutes';
import Navbar from './Components/Navbar';
import ContextProvider from './Context/ContextProvider';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <BrowserRouter>
        <ContextProvider>
        <Box   mt='30' mb='30'><Navbar/></Box>
        <AllRoute/>
        <Footer/>
        </ContextProvider>
        </BrowserRouter>
      
      </ChakraProvider>
     
      
    </div>
  );
}

export default App;
