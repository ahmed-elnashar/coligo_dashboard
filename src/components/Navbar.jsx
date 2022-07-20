import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { toggleMenu, toggleCart, toggleChat, toggleNotifications, toggleUserProfile, setScreenSize } from '../redux/store/app';

import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notifications, UserProfile } from '.';

const NavButton = ({ title, func, icon, color, dotColor }) => (
  <TooltipComponent content={title} position='BottomCenter'>
    <button
      type='button'
      onClick={func}
      style={{ color }}
      className='relative text-xl rounded-full p-3 hover:bg-light-gray'>
      <span style={{ background: dotColor }}
        className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2' />

      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {

  const activeMenu = useSelector(state => state.app.menu);
  const activeCart = useSelector(state => state.app.cart);
  const activeChat = useSelector(state => state.app.chat);
  const activeNotifications = useSelector(state => state.app.notifications);
  const activeUserProfile = useSelector(state => state.app.userProfile);
  const screenSize = useSelector(state => state.app.screenSize);
  const currentColor = useSelector(state => state.theme.color);
  const dispatch = useDispatch();


  useEffect(() => {
    const handleResize = () => dispatch(setScreenSize(window.innerWidth));
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [dispatch]);

  useEffect(() => {
    if (screenSize <= 900) dispatch(toggleMenu(true));
    else dispatch(toggleMenu(false));
  }, [dispatch, screenSize]);

  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton
        title='Menu'
        func={() => dispatch(toggleMenu(activeMenu))}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />

      <div className='flex'>
        <NavButton
          title='Cart'
          func={() => dispatch(toggleCart(activeCart))}
          color={currentColor}
          icon={<FiShoppingCart />}
        />
        <NavButton
          title='Chat'
          dotColor='#03C907'
          func={() => dispatch(toggleChat(activeChat))}
          color={currentColor}
          icon={<BsChatLeft />}
        />
        <NavButton
          title='Notifications'
          dotColor='#03C907'
          func={() => dispatch(toggleNotifications(activeNotifications))}
          color={currentColor}
          icon={<RiNotification3Line />}
        />
        <TooltipComponent content="Profile" position='BottomCenter'>
          <div
            className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
            onClick={() => dispatch(toggleUserProfile(activeUserProfile))}>
            <img
              className='rounded-full w-8 h-8'
              src={avatar}
              alt='User Profile'
            />
            <p className='text-gray-400 text-14'>
              <span>Hi, </span> {' '}
              <span className='font-bold ml-1'>Michael</span>
            </p>
            <MdKeyboardArrowDown className='text-gray-400 text-14' />
          </div>
        </TooltipComponent>

        {activeCart && <Cart />}
        {activeChat && <Chat />}
        {activeNotifications && <Notifications />}
        {activeUserProfile && <UserProfile />}
      </div>

    </div>
  );
};

export default Navbar;