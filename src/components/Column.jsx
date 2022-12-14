/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { appContext } from '../context/AppContext';
import './Column.css';
export const Column = ({ board }) => {
  const { setIsModalViewTaskOpen } = useContext(appContext);
  return (
    <div className='cursor-pointer min-w-[280px] ml-2'>
      <span className='flex items-center gap-2'>
        <div className='w-[15px] h-[15px] bg-mainPurple rounded-full '></div>
        <p className='uppercase text-graySecondary text-sm font-bold tracking-widest	 '>
          {board.name} (2)
        </p>
      </span>
      <ul className='mt-4'>
        {board.tasks.map((task, i) => {
          return (
            <li
              className='column-task bg-white mt-6 p-3 w-full rounded max-w-[280px]'
              key={i}
            >
              <h3
                onClick={() => setIsModalViewTaskOpen(true)}
                className='text-[#000112] font-bold hover:text-mainPurple'
              >
                {task.title}
              </h3>
              <p className='mt-2 text-graySecondary text-sm font-bold pb-2'>
                0 of {task.subtasks.length} substasks
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
