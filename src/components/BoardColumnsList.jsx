/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { Column } from './Column';
import { appContext } from '../context/AppContext';
import { AddTaskModal } from './modals/AddTaskModal';
import ViewTaskModal from './modals/ViewTaskModal';
import { AddNewBoardModal } from './modals/AddNewBoardModal';

export const BoardColumnsList = ({ board }) => {
  const {
    isModalViewTaskOpen,
    setIsModalViewTaskOpen,
    isModalAddTaskOpen,
    isModalNewBoardOpen,
  } = useContext(appContext);
  // const [isModalOptionsOpen, setIsModalOptionsOpen] =useState(false)
  // const [isOpen, setIsOpen] = useState(false);
  //  const [isPopoverOpen, isSetPopoverOpen] = useState(false);
  return (
    <>
      {board ? (
        <>
          <ul className='flex  p-16  gap-4  overflow-x-auto w-full h-full'>
            {board.columns.map((b) => {
              return <Column key={b.name} board={b} />;
            })}
            <li className='column-new flex items-center justify-center  min-w-[280px] ml-2'>
              <p className='text-graySecondary font-bold text-2xl hover:text-mainPurple cursor-pointer'>
                + New Column
              </p>
            </li>
          </ul>
          <div>
            <div>
              <div>{isModalAddTaskOpen && <AddTaskModal />}</div>
            </div>
            <div>
              <div>
                {isModalViewTaskOpen && (
                  <ViewTaskModal
                    setIsModalViewTaskOpen={setIsModalViewTaskOpen}
                  />
                )}
              </div>
            </div>
            <div>
              <div>{isModalNewBoardOpen && <AddNewBoardModal />}</div>
            </div>
          </div>
        </>
      ) : (
        <span>loading...</span>
      )}
    </>
  );
};
