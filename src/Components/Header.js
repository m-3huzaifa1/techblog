import React from 'react';
import {Navbar,Nav,NavLink,NavItem} from 'reactstrap';
import 'font-awesome/css/font-awesome.css';

export default function Header() {
    return(
        <div className='header'>
            <Navbar expand='md'>
              <div className='container'>
                <div className='row'>
                    
                <Nav horizontal='center' className='col-10'>
                    <NavItem>
                        <NavLink className='nav-link' to='#'>
                           Services
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='#'>
                        Product
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='#'>
                        Technology
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link arrow' to='#'>
                        About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link arrow' to='#'>
                        Client
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='#'>
                        Partner
                        </NavLink>
                    </NavItem>
                </Nav>
                <Nav horizontal='end' className='col-2'>
                <NavItem horizontal='end'>
                        <NavLink className='nav-link' to='#'>
                           <i className='fa fa-home fa-lg'></i>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='#'>
                        <i className="fa fa-envelope-o fa-lg"></i>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link cross' to='#'>
                        
                        </NavLink>
                    </NavItem>
                    </Nav>
                </div>
              </div>
            </Navbar>
            <hr/>
        </div>
    )
}