/* eslint-disable no-constant-condition */
import { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';
import { appContext } from '../context/AppContext';

export const Home = () => {
  const {
    isShowSidebar,
    setIsShowSidebar,
    setBoards,
    setisBoardsLoading,
    boards,
  } = useContext(appContext);

  useEffect(() => {
    fetch('./data.json')
      .then((res) => res.json())
      .then((data) => {
        setBoards(data.boards);
      })
      .catch((err) => console.log(err))
      .finally(() => setisBoardsLoading(false));
  }, []);

  return (
    <>
      {boards.length > 0 ? (
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
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};
