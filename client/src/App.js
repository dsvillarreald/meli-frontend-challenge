import React from 'react'
import Navbar from './shared/Navbar';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './sass/app.scss';
//redux 
import { Provider } from 'react-redux';
import store from './store';
//components
import Home from './pages/Home';
import Breadcrumb from './shared/Breadcrumb';
import Detail from './pages/Detail';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Navbar />
        <div className='general-content'>
          <Breadcrumb />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/item/:id" element={<Detail />} />
            </Routes>
        </div>
      </Provider>
    </BrowserRouter>
   
  )
}

export default App