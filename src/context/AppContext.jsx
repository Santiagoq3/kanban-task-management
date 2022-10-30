import { useEffect, useState, createContext } from 'react';

export const appContext = createContext();
const { Provider } = appContext;

// eslint-disable-next-line react/prop-types
export const AppContext = ({ children }) => {
  const [boards, setBoards] = useState([]);
  const [isBoardsLoading, setisBoardsLoading] = useState(true);
  const [board, setBoard] = useState(null);
  // const [boardParamId, setboardParamId] = useState(1)

  const [isShowSidebar, setIsShowSidebar] = useState(true);

  const [isModalViewTaskOpen, setIsModalViewTaskOpen] = useState(false);

  useEffect(() => {
    fetch('./data.json')
      .then((res) => res.json())
      .then((data) => {
        setBoards(data.boards);
      })
      .catch((err) => console.log(err))
      .finally(() => setisBoardsLoading(false));
  }, [board]);

  const findBoard = (id) => {
    // console.log('findBoardBoards', voards);
    // setboardParamId(id)
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
      }}
    >
      {children}
    </Provider>
  );
};
