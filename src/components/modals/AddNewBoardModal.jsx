import { appContext } from '../../context/AppContext';
import { useContext } from 'react';
import './addtaskmodal.css';

export const AddNewBoardModal = () => {
  const { setIsModalNewBoardOpen } = useContext(appContext);
  return (
    <>
      <div className='addtask-container'>
        <div className='modal-backdrop' />
        <dialog open className='modal p-5 md:w-[480px] md:p-8'>
          <button
            className='close-button'
            onClick={() => setIsModalNewBoardOpen(false)}
          >
            X
          </button>
          <div>
            <h1 className='text-[#000112] text-lg font-bold wra'>
              Add New Board
            </h1>
            <div className='mt-4'>
              <label className='font-bold text-graySecondary text-xs'>
                Board Name
              </label>{' '}
              <br />
              <input
                type={'text'}
                className='p-2 w-full h-10 outline-none border border-[#828FA3] rounded-md mt-2  '
                placeholder='e.g. Web design'
              />
            </div>
            <div className='mt-2'>
              <label className='font-bold text-graySecondary text-xs'>
                Board Columns
              </label>
              <div className='flex items-center'>
                <input
                  type={'text'}
                  className='p-2 h-10 w-full  outline-none border border-[#828FA3] rounded-md mt-2  '
                  placeholder='e.g. Make coffee'
                  value={'Todo'}
                />
                <img
                  className='ml-2 cursor-pointer'
                  src='../assets/icon-cross.svg'
                />
              </div>
              <div className='flex items-center'>
                <input
                  type={'text'}
                  className='p-2 h-10 w-full  outline-none border border-[#828FA3] rounded-md mt-2  '
                  placeholder='e.g. Drink coffee & smile'
                  value={'Doing'}
                />
                <img
                  className='ml-2 cursor-pointer'
                  src='../assets/icon-cross.svg'
                />
              </div>
            </div>
            <button className='p-2 my-3 w-full rounded-[20px] text-mainPurple text-center font-semibold  bg-[#635fc733] '>
              + Add New Column
            </button>
            <button className='p-2 mt-4 w-full rounded-[20px] hover:bg-mainPurpleHover text-white text-center font-semibold  bg-mainPurple '>
              Create Task
            </button>
          </div>
        </dialog>
      </div>
    </>
  );
};
