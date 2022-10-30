/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { Column } from './Column';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import './modalViewTask.css';
import './Column.css';
import { appContext } from '../context/AppContext';

export const BoardColumnsList = ({ board }) => {
  console.log(board);
  const { isModalViewTaskOpen, setIsModalViewTaskOpen } =
    useContext(appContext);

  return (
    <>
      <ul className='flex  p-16  gap-4  overflow-x-auto w-full h-full'>
        {board.columns.map((b) => {
          return <Column key={b.id} board={b} />;
        })}
        <li className='column-new flex items-center justify-center  min-w-[280px] ml-2'>
          <p className='text-graySecondary font-bold text-2xl hover:text-mainPurple cursor-pointer'>
            + New Column
          </p>
        </li>
      </ul>
      <div>
        <Modal
          open={isModalViewTaskOpen}
          onClose={() => setIsModalViewTaskOpen(false)}
          center
          classNames={{
            overlay: 'customOverlay',
            modal: 'customModal',
          }}
        >
          <h1 className='text-[#000112] text-xl font-bold wra'>
            Research pricing points of various competitors and trial different
            business models
          </h1>
          <p className='text-graySecondary text-base  my-6 leading-6'>
            We know what were planning to build for version one. Now we need to
            finalise the first pricing model well use. Keep iterating the
            subtasks until we have a coherent proposition.
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
            <p className='text-graySecondary text-sm font-bold'>
              Current Status
            </p>
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
    </>
  );
};
