import "./styles.css";
import React, { useState } from "react";

export const App = () => {
  // state
  const [inputText, setInputText] = useState("");
  const [incomplete, setIncomplete] = useState(["a"]);
  const [complete, setComplete] = useState(["i"]);
  // 関数
  // 入力欄
  const onChangeInput = (event) => {
    setInputText(event.target.value);
  };
  // 追加ボタン
  const onClickAdd = () => {
    const newTodos = [...incomplete, inputText];
    setIncomplete(newTodos);
    setInputText("");
  };
  // 完了ボタン
  const onClickComplete = (index) => {
    // 未完了リストからの削除
    const newIncompleteTodos = [...incomplete];
    newIncompleteTodos.splice(index, 1);
    setIncomplete(newIncompleteTodos);
    // 完了リストへの追加
    const newCompleteTodos = [...complete, incomplete[index]];
    setComplete(newCompleteTodos);
  };
  // 削除ボタン
  const onClickDelete = (index) => {
    const newTodos = [...incomplete];
    newTodos.splice(index, 1);
    setIncomplete(newTodos);
  };
  // 戻るボタン
  const onClickBack = (index) => {
    // 完了リストからの削除
    const newCompleteTodos = [...complete];
    newCompleteTodos.splice(index, 1);
    setComplete(newCompleteTodos);
    // 未完了リストへの追加
    const newIncompleteTodos = [...incomplete, complete[index]];
    setIncomplete(newIncompleteTodos);
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
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      {/* 完了リスト */}
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
    </>
  );
};
