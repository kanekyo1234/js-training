import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart02";
import instruction from "./instruction.md";


const convertData = (input) => {
  input.sort(function(a, b) {
    if (a.count < b.count) {
      return 1;
    } else {
      return -1;
    }
  })
  return input.slice(0,20);
};
const Lesson = () => {
  return (
    <LessonPage
      dataUrl="data/qiita-tags.json"
      answerUrl="/answer02"
      convertData={convertData}
      instruction={instruction}
      title="Lesson 02"
      Chart={Chart}
    />
  );
};

export default Lesson;
