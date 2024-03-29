import { useContext } from 'react';
import { appContext } from '../context/AppContext';

export const Navbar = () => {
  const { isShowSidebar, setIsShowSidebar, setIsModalAddTaskOpen } =
    useContext(appContext);
  return (
    <header className='bg-white h-[80px]  sticky  '>
      <div className=' flex gap-12 h-full items-center justify-between '>
        <img className='md:block hidden p-4 ' src='../assets/logo-dark.svg' />
        <div className='flex h-full  border-l-[#ccc] border-b-[#ccc] flex-auto items-center justify-between p-4'>
          <div className=' flex items-center gap-4'>
            <img
              className='md:hidden '
              src='../assets/logo-mobile.svg'
              alt='logo'
            />
            <div className='flex items-center gap-2 font-JakartaSans '>
              <h1 className='text-lg font-bold leading-5'>Platform Launch</h1>
              <img
                className='w-2 h-2 cursor-pointer'
                src='../assets/icon-chevron-up.svg'
                onClick={() => {
                  setIsShowSidebar(!isShowSidebar);
                }}
              />
            </div>
          </div>
          <div className='flex items-center gap-6 mr-2'>
            <button
              onClick={() => setIsModalAddTaskOpen(true)}
              className='md:w-[195px] flex items-center justify-center bg-mainPurple p-4 rounded-3xl w-12'
            >
              <img
                className='w-full md:hidden'
                src='../assets/icon-add-task-mobile.svg'
              />
              <p className='hidden md:block text-white font-bold text-base'>
                + Add New Task
              </p>
            </button>
            <button>
              <img src='../assets/icon-vertical-ellipsis.svg' />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
