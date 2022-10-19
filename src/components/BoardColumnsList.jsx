/* eslint-disable react/prop-types */
import { Column } from './Column';

export const BoardColumnsList = ({ board }) => {
  console.log(board);
  return (
    <ul>
      {board.map((b) => {
        return <Column key={b} board={b} />;
      })}
    </ul>
  );
};
