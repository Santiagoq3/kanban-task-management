import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { appContext } from '../context/AppContext';
// import { BoardColumnsList } from './BoardColumnsList';
export const Boards = () => {
  const { boards, isBoardsLoading } = useContext(appContext);
  const [board, setBoard] = useState({});
  console.log(boards);
  const { id } = useParams();

  useEffect(() => {
    console.log(boards);
    const boardAux = boards.find((b) => b.id === Number(id));
    console.log('boardAux', boardAux);
    setBoard(boardAux);
  }, [boards]);

  if (isBoardsLoading) {
    return <p>Loading...</p>;
  }

  console.log(board);
  return (
    <div className='flex items-center justify-center bg-Light w-full h-full m-h-[1000px] font-JakartaSans '>
      {boards.length > 0 ? (
        // <BoardColumnsList board={board} />
        <h1>zs</h1>
      ) : (
        <div className='text-center mb-4'>
          <p className='text-graySecondary text-xl font-bold'>
            This board is empty. Create a new column to get started.
          </p>
          <button className='flex items-center m-auto bg-mainPurple p-3 mt-4 text-white rounded-3xl text-lg font-bold hover:bg-mainPurpleHover'>
            + Add New Column
          </button>
        </div>
      )}
    </div>
  );
};
