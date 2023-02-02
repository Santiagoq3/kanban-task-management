/* eslint-disable react/prop-types */

import './viewtaskmodal.css';

const ViewTaskModal = ({ setIsModalViewTaskOpen }) => {
  return (
    <div onClick={() => setIsModalViewTaskOpen(false)}>
      <div className='modal-backdrop' />
      <dialog
        open
        className='view-task-modal'
        onClick={(event) => event.stopPropagation()}
      >
        {/* <button
        className='close-button'
        onClick={() => setIsModalViewTaskOpen(false)}
        
      >
        X
      </button> */}

        <div>
          <div className='flex '>
            <h1 className='text-[#000112] text-lg font-bold wra'>
              Research pricing points of various competitors and trial different
              business models
            </h1>
            <div className='flex  flex-col '>
              <button onClick={() => setIsModalViewTaskOpen(false)}>X</button>
              <button className='mt-1'>X</button>
            </div>
          </div>
          <p className='text-graySecondary text-xs md:text-sm  my-6 leading-6'>
            We know what were planning to build for version one. Now we need to
            finalise the first pricing model well use. Keep iterating the
            subtasks until we have a coherent proposition.
          </p>
          <h3 className='text-graySecondary text-sm font-semibold'>
            Subtasks (2 of 3)
          </h3>
          <ul>
            <li className='flex items-center p-4 h-14 bg-lightGrey mt-2 '>
              <input type={'checkbox'} />
              <p className='text-graySecondary ml-2 text-xs font-semibold '>
                Research competitor pricing and business models
              </p>
            </li>
            <li className='flex items-center p-4 h-14 bg-lightGrey mt-2 '>
              <input type={'checkbox'} />
              <p className='text-graySecondary ml-2 text-xs font-semibold '>
                Research competitor pricing and business models
              </p>
            </li>
            {/* dont delete */}
            <li className='flex items-center p-4 h-14 bg-lightGrey mt-2 '>
              <input type={'checkbox'} />
              <p className='text-[#000112] ml-2 text-xs font-bold '>
                Research competitor pricing and business models
              </p>
            </li>
          </ul>
          <div className='mt-2 md:mt-6'>
            <p className='text-graySecondary text-sm font-bold'>
              Current Status
            </p>
            <select className='border rounded-md border-graySecondary  w-full p-2'>
              <option value='todo'>Todo</option>
              <option value='doing' selected>
                Doing
              </option>
              <option value='done'>Done</option>
            </select>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ViewTaskModal;
