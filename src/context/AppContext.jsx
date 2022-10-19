import { useEffect, useState, createContext } from 'react';

export const appContext = createContext();
const { Provider } = appContext;

// eslint-disable-next-line react/prop-types
export const AppContext = ({ children }) => {
  const [boards, setBoards] = useState([]);
  const [isBoardsLoading, setisBoardsLoading] = useState(true);

  useEffect(() => {
    fetch('./data.json')
      .then((res) => res.json())
      .then((data) => {
        setBoards(data.boards);
      })
      .catch((err) => console.log(err))
      .finally(() => setisBoardsLoading(false));
  }, []);

  const findBoard = (voards, id) => {
    console.log('findBoardId', id);
    console.log('findBoardBoards', voards);
    const b = voards.find((b) => b.id === id);
    console.log('b', b);
    return b;
  };

  return (
    <Provider value={{ boards, findBoard, isBoardsLoading }}>
      {children}
    </Provider>
  );
};
