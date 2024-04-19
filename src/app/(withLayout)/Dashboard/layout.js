import Footer from '@/components/shared/Footer.jsx/Footer';
import React from 'react';

const Layout = ({children}) => {
    return (
        <div >
           <div className='min-h-screen'>
           {children}
           </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;