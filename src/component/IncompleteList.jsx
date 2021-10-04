import React from "react";

export const IncompleteList = (props) => {
  const { incomplete, onClickComplete, onClickDelete } = props;
  return (
    <div className="area" id="incomplete-area">
      <h1>未完了リスト</h1>
      <ul>
        {incomplete.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
