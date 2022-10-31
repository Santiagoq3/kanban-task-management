import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { appContext } from '../context/AppContext';
import { BoardColumnsList } from './BoardColumnsList';
export const Boards = () => {
  const { findBoard, board, setBoard } = useContext(appContext);

  const { id } = useParams();

  useEffect(() => {
    setBoard(findBoard(Number(id)));
  }, [id]);

  // eslint-disable-next-line no-unneeded-ternary
  if (!board) {
    return <span>loading...</span>;
  }
  return (
    <div className=' bg-lightGrey  w-full overflow-x-scroll   h-full  font-JakartaSans '>
      {board.columns.length > 0 ? (
        <BoardColumnsList board={board} />
      ) : (
        <div className=' flex flex-col items-center h-full w-full  justify-center text-center mb-4'>
          <div>
            <p className='text-graySecondary text-xl font-bold'>
              This board is empty. Create a new column to get started.
            </p>
            <button className='flex items-center m-auto bg-mainPurple p-3 mt-4 text-white rounded-3xl text-lg font-bold hover:bg-mainPurpleHover'>
              + Add New Column
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
