import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart07";
import instruction from "./instruction.md";

const convertData = (input) => {
  let tweet=new Set();
  for (let i=0;i<input.length;i++){
    tweet.add(input[i].isRetweet)
  }
  tweet=Array.from(tweet)
  console.log(tweet)
  /*
  return species.map((species) => {
    return {
      id: species,
      data: input.filter((item) => item.species === species)
        .map(({ sepalLength: x, petalWidth: y }) => ({ x, y })),
    };
  });
  */
  return []; // ここを作りましょう！
};

const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer07"
      convertData={convertData}
      dataUrl="data/covid19-tweets.json"
      instruction={instruction}
      title="Lesson 07"
      Chart={Chart}
    />
  );
};

export default Lesson;
