import React from 'react'
import logo from '../assets/logo.png'
import notif from '../assets/BellSimple.png'
import wallet from '../assets/Wallet.png'
import inquiry from '../assets/Question.png'
import settings from '../assets/Gear.png'
import profile from '../assets/profile.png'

const Navbar = () => {
  return (
    <nav className="navbar grid grid-cols-12 p-5 sm:px-9">
      <img src={logo} alt='' className="logo col-start-1 col-end-2 max-w-12" />
      <input type='text' placeholder='Seach Here...' className='col-start-2 col-end-8 h-5 p-7 w-auto bg-gray-100 rounded-lg outline-none' />
      <div className="navIcons flex gap-9 col-start-9 col-end-13 justify-end items-center">
        <ul className="navIcon flex gap-9">
          <li className="IconText flex flex-col items-center justify-center">
            <a href="/" className="flex flex-col justify-center items-center">
              <img src={notif} alt='' className='max-w-6 max-h-6' />
              <p className='font-satoshi text-xs text-gray-500'>Notifications</p>
            </a>
          </li>
          <li className="IconText flex flex-col items-center justify-center">
            <a href="/" className="flex flex-col justify-center items-center">
              <img src={wallet} alt='' className='max-w-6 max-h-6' />
              <p className='font-satoshi text-xs text-gray-500'>Wallet</p>
            </a>
          </li>
          <li className="IconText flex flex-col items-center justify-center">
            <a href="/" className="flex flex-col justify-center items-center">
              <img src={inquiry} alt='' className='max-w-6 max-h-6' />
              <p className='font-satoshi text-xs text-gray-500'>Inquiry</p>
            </a>
          </li>
          <li className="IconText flex flex-col items-center justify-center">
            <a href="/" className="flex flex-col justify-center items-center">
              <img src={settings} alt='' className='max-w-6 max-h-6' />
              <p className='font-satoshi text-xs text-gray-500'>Settings</p>
            </a>
          </li>
        </ul>
        <div>
          <img src={profile} alt='' className="max-w-12" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
