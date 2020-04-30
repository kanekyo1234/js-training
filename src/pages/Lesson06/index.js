import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart06";
import instruction from "./instruction.md";

const convertData = (input) => {
//alert(minx)
function Data(a,b,y,x) {
  this.color = a;
  this.gender = b;
  this.bmi = x/y**2;
  this.weight =x;
  this.height =y;
}
let newData=[];
for (let i=0; i<input.length;i++){
  if (input[i].gender==="男性"){
    newData[i]=new Data("blue",input[i].gender,input[i].y,input[i].x);

  }else{
    newData[i]=new Data("red",input[i].gender,input[i].y,input[i].x);

  }
  }//bin:
  
  return newData; // ここを作りましょう！
};

const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer06"
      convertData={convertData}
      dataUrl="data/size-and-weight.json"
      instruction={instruction}
      title="Lesson 06"
      Chart={Chart}
    />
  );
};

export default Lesson;
