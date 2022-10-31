import { useState, createContext } from 'react';

export const appContext = createContext();
const { Provider } = appContext;

// eslint-disable-next-line react/prop-types
export const AppContext = ({ children }) => {
  const [boards, setBoards] = useState([]);
  const [isBoardsLoading, setisBoardsLoading] = useState(true);
  const [board, setBoard] = useState(null);

  const [isShowSidebar, setIsShowSidebar] = useState(false);

  const [isModalViewTaskOpen, setIsModalViewTaskOpen] = useState(false);

  const findBoard = (id) => {
    const b = boards.find((b) => b.id === id);
    return b;
  };

  return (
    <Provider
      value={{
        boards,
        findBoard,
        isBoardsLoading,
        board,
        setBoard,
        isShowSidebar,
        setIsShowSidebar,
        isModalViewTaskOpen,
        setIsModalViewTaskOpen,
        setBoards,
        setisBoardsLoading,
      }}
    >
      {children}
    </Provider>
  );
};
