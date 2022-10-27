/* eslint-disable react/prop-types */
import { Column } from './Column';
import './Column.css';
export const BoardColumnsList = ({ board }) => {
  console.log(board);
  return (
    <>
      <ul className='flex  p-16   gap-4  overflow-x-auto w-full h-full'>
        {board.columns.map((b) => {
          return <Column key={b.id} board={b} />;
        })}
        <li className='column-new flex items-center justify-center  min-w-[280px] ml-2'>
          <p className='text-graySecondary font-bold text-2xl hover:text-mainPurple cursor-pointer'>
            + New Column
          </p>
        </li>
      </ul>
    </>
  );
};
