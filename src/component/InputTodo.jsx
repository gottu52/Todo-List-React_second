import React from "react";

export const InputTodo = (props) => {
  const { inputText, onChangeInput, onClickAdd } = props;
  return (
    <div className="area" id="input-area">
      <input
        placeholder="入力しろ"
        value={inputText}
        onChange={onChangeInput}
      />
      <button onClick={onClickAdd}>追加</button>
    </div>
  );
};
