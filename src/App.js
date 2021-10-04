import "./styles.css";
import React, { useState } from "react";

export const App = () => {
  // state
  const [inputText, setInputText] = useState("");
  const [incomplete, setIncomplete] = useState(["a"]);
  const [complete, setComplete] = useState(["i"]);
  // 関数
  const onChangeInput = (event) => {
    setInputText(event.target.value);
  };
  const onClickAdd = () => {
    const newTodos = [...incomplete, inputText];
    setIncomplete(newTodos);
    setInputText("");
  };
  const onClickComplete = (index) => {
    const newTodos = [...incomplete];
    newTodos.splice(index, 1);
    setIncomplete(newTodos);
  };

  return (
    <>
      {/* 入力欄 */}
      <div className="area" id="input-area">
        <input
          placeholder="入力しろ"
          value={inputText}
          onChange={onChangeInput}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      {/* 未完了リスト */}
      <div className="area" id="incomplete-area">
        <h1>未完了リスト</h1>
        <ul>
          {incomplete.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onclick={() => onClickComplete(index)}>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      {/* 完了リスト */}
      <div className="area" id="complete-area">
        <h1>完了リスト</h1>
        <ul>
          {complete.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
