import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart05";
import instruction from "./instruction.md";

const convertData = (input) => {
let max_x=Math.round(Math.max.apply(null,input.map(function(o){return o.y;})))
let min_x=Math.round(Math.min.apply(null,input.map(function(o){return o.y;})))//先にオブジェクトを作りたい
//alert(minx)
function Data(_data) {
  this.bin = _data;
  this.男性 = 0;
  this.女性 = 0;
}
var newData=[];
for (let  i=min_x; i<=max_x;i++){
  newData[i-min_x]=new Data(i);
}//bin:
//console.log(newData[3].男性)
for (let i=0;i<input.length;i++){
  let a=input[i].gender
  newData[Math.round(input[i].y)-min_x][a] +=1
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
