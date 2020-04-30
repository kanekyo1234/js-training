import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart01";
import instruction from "./instruction.md";

const convertData = (input) => {
  return input.map(([key,sum]) => ({//受け取るものが毎回配列(二次配列より)だから？[]をつけないとダメhttps://hfuji.hatenablog.jp/entry/2016/06/28/232820
    "name":key,
    "count":sum,
  })); // ここを作りましょう！
};

const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer01"
      convertData={convertData}
      dataUrl="data/chs-capacity.json"
      instruction={instruction}
      title="Lesson 01"
      Chart={Chart}
    />
  );
};

export default Lesson;
