import "./styles.css";
import React from "react";

export const App = () => {
  return (
    <>
      {/* 入力欄 */}
      <div class="area" id="input-area">
        <input placeholder="入力しろ" />
        <button>追加</button>
      </div>
      {/* 未完了リスト */}
      <div class="area" id="incomplete-area">
        <h1>未完了リスト</h1>
        <ul>
          <div class="list-row">
            <li>a</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      {/* 完了リスト */}
      <div class="area" id="complete-area">
        <h1>完了リスト</h1>
        <ul>
          <div class="list-row">
            <li>i</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
};
