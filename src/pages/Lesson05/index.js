import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart05";
import instruction from "./instruction.md";

const convertData = (input) => {
let maxx=Math.round(Math.max.apply(null,input.map(function(o){return o.y;})))
let minx=Math.round(Math.min.apply(null,input.map(function(o){return o.y;})))//先にオブジェクトを作りたい
//alert(minx)
function Data(_data) {
  this.bin = _data;
  this.男性 = 0;
  this.女性 = 0;
}
var newData=[];
for (let  i=minx; i<=maxx;i++){
  newData[i-minx]=new Data(i);
}//bin:
//alert(newData[3].男性)
//alert(input[100].gender)
for (let i=0;i<input.length;i++){
  let a=input[i].gender
  newData[Math.round(input[i].y)-minx][a] +=1
  
}

  return newData;
};

const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer05"
      convertData={convertData}
      dataUrl="data/size-and-weight.json"
      instruction={instruction}
      title="Lesson 05"
      Chart={Chart}
    />
  );
};

export default Lesson;
