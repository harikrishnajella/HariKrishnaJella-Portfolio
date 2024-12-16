import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'

import {IoIosMenu} from 'react-icons/io'


class Header extends Component{
    state = {showHamburger: false}

    onClickHamburger = () => {
        const {showHamburger} = this.state
        this.setState({showHamburger: !showHamburger})
    }

    render() {
        const {showHamburger} = this.state
        return (
            <div className='bg-navbar-container'>
                <nav className='navbar-container'>
                    <Link to='/' className='link'>
                       <h1 className='navbar-title-heading'>Hari Krishna Jella</h1>
                    </Link>
                    <button onClick={this.onClickHamburger} className='navbar-mobile-hamburger-btn' type='button'>
                        <IoIosMenu className='navbar-mobile-hamburger' />
                    </button>
                    <ul className='navbar-desktop-icons-ul'>
                    <li className='navbar-mobile-icon-li'>
                    <Link to='/' className='link'>
                        <button className='navbar-mobile-icon-btn' type='button'>
                          Home
                        </button>
                        </Link>
                    </li>
                    <li className='navbar-mobile-icon-li'>
                    <Link to='/aboutme' className='link'>
                        <button className='navbar-mobile-icon-btn' type='button'>
                            About
                        </button>
                        </Link>
                    </li>
                    <li className='navbar-mobile-icon-li'>
                    <Link to='/projects' className='link'>
                        <button className='navbar-mobile-icon-btn' type='button'>
                        Projects
                        </button>
                    </Link>
                    </li>
                </ul>
                </nav>
                {showHamburger &&
                <ul className='navbar-mobile-icons-ul'>
                    <li className='navbar-mobile-icon-li'>
                    <Link to='/' className='link'>
                        <button className='navbar-mobile-icon-btn' type='button'>
                            Home
                        </button>
                    </Link>
                    </li>
                    <li className='navbar-mobile-icon-li'>
                    <Link to='/aboutme' className='link'>
                        <button className='navbar-mobile-icon-btn' type='button'>
                            About
                        </button>
                        </Link>
                    </li>
                    <li className='navbar-mobile-icon-li'>
                    <Link to='/projects' className='link'>
                        <button className='navbar-mobile-icon-btn' type='button'>
                            Projects
                        </button>
                        </Link>
                    </li>
                </ul>
                }
            </div>
          )
    }
}

export default Header