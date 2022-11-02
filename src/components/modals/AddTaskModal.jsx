import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
// import './modalViewTask.css';

import { appContext } from '../../context/AppContext';
import { useContext } from 'react';


export const AddTaskModal = () => {
    const { isModalAddTaskOpen, setIsModalAddTaskOpen } =
      useContext(appContext);
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
        <h1 className='text-[#000112] text-xl font-bold wra'>
         Add New Task
        </h1>
        <p className='text-graySecondary text-base  my-6 leading-6'>
          We know what were planning to build for version one. Now we need to
          finalise the first pricing model well use. Keep iterating the subtasks
          until we have a coherent proposition.
        </p>
        <h3 className='text-graySecondary text-sm font-semibold'>
          Subtasks (2 of 3)
        </h3>
        <ul>
          <li className='flex items-center p-4 bg-lightGrey mt-2 '>
            <input type={'checkbox'} />
            <p className='text-graySecondary ml-2 text-base font-semibold '>
              Research competitor pricing and business models
            </p>
          </li>
          <li className='flex items-center p-4 bg-lightGrey mt-2 '>
            <input type={'checkbox'} />
            <p className='text-graySecondary ml-2 text-base font-semibold '>
              Research competitor pricing and business models
            </p>
          </li>
          {/* dont delete */}
          <li className='flex items-center p-4 bg-lightGrey mt-2 '>
            <input type={'checkbox'} />
            <p className='text-[#000112] ml-2 text-base font-bold '>
              Research competitor pricing and business models
            </p>
          </li>
        </ul>
        <div className='mt-8'>
          <p className='text-graySecondary text-sm font-bold'>Current Status</p>
          <select className='border rounded-md border-graySecondary mt-1 w-full p-2'>
            <option value='todo'>Todo</option>
            <option value='doing' selected>
              Doing
            </option>
            <option value='done'>Done</option>
          </select>
        </div>
      </Modal>
    </div>
  );
};
