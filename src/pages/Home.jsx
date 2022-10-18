import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';
export const Home = () => {
  const [isShowSidebar, setIsShowSidebar] = useState(true);
  return (
    <>
      <div className='md:flex h-[890px] m-h-[1024px] bg-mainRed md:bg-mainPurpleHover sm:bg-mainPurple'>
        {isShowSidebar ? (
          <Sidebar
            setIsShowSidebar={setIsShowSidebar}
            isShowSidebar={isShowSidebar}
          />
        ) : (
          <div
            onClick={() => setIsShowSidebar(!isShowSidebar)}
            className='absolute bottom-20 left-0  p-4 bg-mainPurple rounded-r-2xl cursor-pointer	hover:bg-mainPurpleHover	'
          >
            <img className='w-4 h-3' src='../assets/icon-show-sidebar.svg' />
          </div>
        )}

        <Outlet />
      </div>
    </>
  );
};
