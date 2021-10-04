import "./styles.css";
import React, { useState } from "react";
import { InputTodo } from "./component/InputTodo";
import { IncompleteList } from "./component/IncompleteList";
import { CompleteLIst } from "./component/CompleteList";

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
      <InputTodo
        inputText={inputText}
        onChangeInput={onChangeInput}
        onClickAdd={onClickAdd}
      />
      {/* 未完了リスト */}
      <IncompleteList
        incomplete={incomplete}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      {/* 完了リスト */}
      <CompleteLIst complete={complete} onClickBack={onClickBack} />
    </>
  );
};
