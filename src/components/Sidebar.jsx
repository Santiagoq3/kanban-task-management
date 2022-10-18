// import { useState } from "react";
/* eslint-disable react/prop-types */
export const Sidebar = ({ setIsShowSidebar, isShowSidebar }) => {
  return (
    <nav className='md:block md:static md:rounded-none md:w-[300px] absolute top-24 flex justify-between flex-col left-24 right-24  rounded-md bg-white  '>
      <p className='mb-4 pt-6 pl-6 font-bold text-graySecondary text-sm tracking-widest uppercase'>
        All boards (3)
      </p>
      <ul>
        <li className='grid gap-6'>
          <a
            className='flex  max-w-[250px] rounded-r-xl text-graySecondary hover:text-white  items-center gap-3 hover:bg-mainPurple pl-6 pt-2 pb-2'
            href=''
          >
            <img className='w-[16px] h-[16px]' src='../assets/icon-board.svg' />
            <p className='font-semibold'>Platform Launch</p>
          </a>
          <a
            className='flex  max-w-[250px] rounded-r-xl text-graySecondary hover:text-white  items-center gap-3 hover:bg-mainPurple pl-6 pt-2 pb-2'
            href=''
          >
            <img className='w-[16px] h-[16px]' src='../assets/icon-board.svg' />
            <p className='font-semibold'>Marketing plant</p>
          </a>
          <a
            className='flex  max-w-[250px] rounded-r-xl text-graySecondary hover:text-white  items-center gap-3 hover:bg-mainPurple pl-6 pt-2 pb-2'
            href=''
          >
            <img className='w-[16px] h-[16px]' src='../assets/icon-board.svg' />
            <p className='font-semibold'>Roadmap</p>
          </a>
          <a
            className='flex  max-w-[250px] rounded-r-xl text-mainPurple hover:text-white  items-center gap-3 hover:bg-mainPurple pl-6 pt-2 pb-2'
            href=''
          >
            <img className='w-[16px] h-[16px]' src='../assets/icon-board.svg' />
            <p className='font-semibold'>+ Create New Board</p>
          </a>
        </li>
      </ul>
      <div className='p-2 mt-6 '>
        <div className='p-3 mt-6 flex justify-evenly bg-Light rounded'>
          <img
            className='cursor-pointer'
            src='../assets/icon-light-theme.svg'
          />

          <img className='cursor-pointer' src='../assets/icon-dark-theme.svg' />
        </div>

        <div
          onClick={() => setIsShowSidebar(!isShowSidebar)}
          className='hidden md:flex items-center gap-2 p-4 cursor-pointer'
        >
          <img src='../assets/icon-hide-sidebar.svg' />
          <p className='text-graySecondary text-base font-semibold'>
            Hide sidebar
          </p>
        </div>
      </div>
    </nav>
  );
};
