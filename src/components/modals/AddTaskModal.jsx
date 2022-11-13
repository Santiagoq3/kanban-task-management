import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
// import './modalViewTask.css';

import { appContext } from '../../context/AppContext';
import { useContext } from 'react';

export const AddTaskModal = () => {
  const { isModalAddTaskOpen, setIsModalAddTaskOpen } = useContext(appContext);
  return (
    <div>
      <Modal
        open={isModalAddTaskOpen}
        onClose={() => setIsModalAddTaskOpen(true)}
        center
        classNames={{
          overlay: 'customOverlay',
          modal: 'customModal',
        }}
      >
        <h1 className='text-[#000112] text-xl font-bold wra'>Add New Task</h1>
        <div className='mt-4'>
          <label className='font-bold text-graySecondary text-sm'>Title</label>{' '}
          <br />
          <input
            type={'text'}
            className='p-2 w-[295px] outline-none border border-[#828FA3] rounded-md mt-2  '
            placeholder='e.g. Take coffee break'
          />
        </div>
        <div className='mt-4'>
          <label className='font-bold text-graySecondary text-sm'>
            Description
          </label>
          <br />
          <input
            type={'text'}
            className=' w-[295px] h-[110px] outline-none border border-[#828FA3] rounded-md mt-2 placeholder:  '
            placeholder='e.g. It’s always good to take a break. This 
15 minute break will  recharge the batteries 
a little.'
          />
        </div>
        <div className='mt-4'>
          <label className='font-bold text-graySecondary text-sm'>
            Subtasks
          </label>
          <div className='flex items-center'>
            <input
              type={'text'}
              className='p-2 w-[295px] outline-none border border-[#828FA3] rounded-md mt-2  '
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
              className='p-2 w-[295px] outline-none border border-[#828FA3] rounded-md mt-2  '
              placeholder='e.g. Drink coffee & smile'
            />
            <img
              className='ml-2 cursor-pointer'
              src='../assets/icon-cross.svg'
            />
          </div>
          <br />
        </div>
        <button className='p-3 rounded-[20px] text-mainPurple text-center font-semibold w-full bg-[#635fc733] '>
          + Add New Subtask
        </button>
        <div className='mt-8'>
          <p className='text-graySecondary text-sm font-bold'>Status</p>
          <select className='border rounded-md border-graySecondary mt-1 w-full p-2'>
            <option value='todo'>Todo</option>
            <option value='doing' selected>
              Doing
            </option>
            <option value='done'>Done</option>
          </select>
        </div>
        <button className='p-3 mt-4 rounded-[20px] text-white text-center font-semibold w-full bg-mainPurple '>
          Create Task
        </button>
      </Modal>
    </div>
  );
};
