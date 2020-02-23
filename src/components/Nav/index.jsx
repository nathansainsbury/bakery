import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <nav>
        <div className='row nav-top'>
            <div className='col-lg-12 text-center'>
                <h1><Link className='title-link' to='/'>FUN HOME BAKERY</Link></h1>
            </div>
        </div>
        <div className='row nav-bottom'>
            <div className='col-lg-12 text-center'>
                <ul>
                    <li><Link className='link' to='/about'>ABOUT</Link></li>
                    <li><Link className='link' to='/cakes'>CAKES</Link></li>
                    <li><Link className='link' to='/contact'>CONTACT</Link></li>
                </ul>
            </div>
        </div>
    </nav>
);

// export default () => (
//     <nav className='navbar'>
//         <div className='container-fluid'>
            
//             <Link to='/'>FUN HOME BAKERY</Link>

//             <div className='collapse navbar-collapse ml-auto'>
//                 <ul className='nav navbar-nav ml-auto'>
//                     <li className='nav-item'><Link className='nav-link' to='/about'>About</Link></li>    
//                     <li className='nav-item'><Link className='nav-link' to='/cakes'>Cakes</Link></li>    
//                     <li className='nav-item'><Link className='nav-link' to='/contact'>Contact</Link></li>    
//                 </ul>
//             </div>

//         </div>
//     </nav>
// );
