import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';
export const Home = () => {
  const [isShowSidebar, setIsShowSidebar] = useState(true);
  return (
    <>
      <div className='md:flex h-[890px] m-h-[1024px] bg-mainRed md:bg-mainPurpleHover sm:bg-mainPurple'>
        {isShowSidebar && (
          <Sidebar
            setIsShowSidebar={setIsShowSidebar}
            isShowSidebar={isShowSidebar}
          />
        )}
        <Outlet />
      </div>
    </>
  );
};
