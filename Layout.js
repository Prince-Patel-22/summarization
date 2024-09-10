import React from 'react';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({children}) => {
  return (
    <div>
      <main>
        <ToastContainer/>
        {children}
      </main>
    </div>
  )
}

export default Layout;
