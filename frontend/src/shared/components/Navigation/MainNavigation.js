import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElements/Backdrop';
import './MainNavigation.css';

const MainNavigation = props => {
  ////////// 상태
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };
   //////////

  return (
    <React.Fragment>
      {/* 
        세부 컴포넌트 3개
        1. Backdrop
        2. SideDrawer
        3. NavLinks
      
      영역 */}
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>
      {/* SideDrawer 영역 */}



      {/* MainHeader 영역 */}
      <MainHeader>

        {/* 햄버거 버튼 */}
        <button
          className="main-navigation__menu-btn"
          onClick={openDrawerHandler}
        >
          <span />
          <span />
          <span />
        </button>
        {/* 햄버거 버튼 */}


        {/* 
        h1이라는 외형적 속성을 나타내는 태그 안에
        세부 작동에 해당하는 태그 사용
        */}
        <h1 className="main-navigation__title">
          <Link to="/">YourPlaces</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
      {/* MainHeader 영역 */}

    </React.Fragment>
  );
};

export default MainNavigation;
