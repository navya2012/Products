
import { BrowserRouter, } from 'react-router-dom';
import './App.css';
import AppRoutes from './Components/Routes/AppRoutes';
import DataProvider from './Components/Data/DataProvider';
import SearchProvider from './Components/Containers/Navbar/searchData/SearchProvider';


function App() {

  return (
    <>
      <BrowserRouter>
        <DataProvider>
          <SearchProvider>
            <AppRoutes />
          </SearchProvider>
        </DataProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
