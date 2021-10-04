import React from "react";

export const CompleteLIst = (props) => {
  const { complete, onClickBack } = props;
  return (
    <div className="area" id="complete-area">
      <h1>完了リスト</h1>
      <ul>
        {complete.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
