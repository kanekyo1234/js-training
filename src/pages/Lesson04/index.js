import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart04";
import instruction from "./instruction.md";

const convertData = (input) => {

  let species=new Set();
  for (let i=0;i<input.length;i++){
    console.log(input[i].species)
    species.add(input[i].species)
  }
  species=Array.from(species)
  console.log(species)
  return species.map((species) => {
    return {
      id: species,
      data: input.filter((item) => item.species === species)
        .map(({ sepalLength: x, petalWidth: y }) => ({ x, y })),
    };
  });
};

const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer04"
      dataUrl="data/iris.json"
      convertData={convertData}
      instruction={instruction}
      title="Lesson 04"
      Chart={Chart}
    />
  );
};

export default Lesson;
