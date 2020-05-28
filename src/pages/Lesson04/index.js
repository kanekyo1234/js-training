import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart04";
import instruction from "./instruction.md";

const convertData = (input) => {
  let species_data=new Set();
  
  for (let i=0;i<input.length;i++){
    console.log(input[i].species)
    species_data.add(input[i].species)
  }//配列に入れるときはpushを入れるset型なのでadd
　
  for (const data of input){
    species_data.add(data.species_data)
  }
  //ここから
  species_data=Array.from(species_data)
  //.length.console.log(species)
  
  return species_data.map((id)=>({
    id,
    data: input.filter((item)=>item.species===id)
    .map((item)=>({x:item.sepalLength,y:item.petalWidth})),
  }));
  /*
  return species_data.map((species) => {
    return {
      id: species,
      data: input.filter((item) => item.species === species)
        .map(({ sepalLength: x, petalWidth: y }) => ({ x, y })),
    };
  });
  */
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
