// import './modalViewTask.css';

import { appContext } from '../../context/AppContext';
import { useContext } from 'react';
import './addtaskmodal.css';

export const AddTaskModal = () => {
  const { setIsModalAddTaskOpen } = useContext(appContext);
  return (
    <>
      <div className='addtask-container'>
        <div className='modal-backdrop' />
        <dialog open className='modal md:w-[480px]'>
          <button
            className='close-button'
            onClick={() => setIsModalAddTaskOpen(false)}
          >
            X
          </button>
          <div>
            <h1 className='text-[#000112] text-lg font-bold wra'>
              Add New Task
            </h1>
            <div className='mt-4'>
              <label className='font-bold text-graySecondary text-xs'>
                Title
              </label>{' '}
              <br />
              <input
                type={'text'}
                className='p-2 w-full h-10 outline-none border border-[#828FA3] rounded-md mt-2  '
                placeholder='e.g. Take coffee break'
              />
            </div>
            <div className='mt-4'>
              <label className='font-bold text-graySecondary text-xs'>
                Description
              </label>
              <br />
              <input
                type={'text'}
                className='  h-[110px] w-full outline-none border border-[#828FA3] rounded-md mt-2 placeholder:  '
                placeholder='e.g. It’s always good to take a break. This 
15 minute break will  recharge the batteries 
a little.'
              />
            </div>
            <div className='mt-2'>
              <label className='font-bold text-graySecondary text-xs'>
                Subtasks
              </label>
              <div className='flex items-center'>
                <input
                  type={'text'}
                  className='p-2 h-10 w-full  outline-none border border-[#828FA3] rounded-md mt-2  '
                  placeholder='e.g. Make coffee'
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
                />
                <img
                  className='ml-2 cursor-pointer'
                  src='../assets/icon-cross.svg'
                />
              </div>
            </div>
            <button className='p-2 my-3 w-full rounded-[20px] text-mainPurple text-center font-semibold  bg-[#635fc733] '>
              + Add New Subtask
            </button>
            <div className=''>
              <p className='text-graySecondary text-xs font-bold'>Status</p>
              <select className='border w-full rounded-md border-graySecondary mt-1  p-2'>
                <option value='todo'>Todo</option>
                <option value='doing' selected>
                  Doing
                </option>
                <option value='done'>Done</option>
              </select>
            </div>
            <button className='p-2 mt-4 w-full rounded-[20px] hover:bg-mainPurpleHover text-white text-center font-semibold  bg-mainPurple '>
              Create Task
            </button>
          </div>
        </dialog>
      </div>
    </>
  );
};
