import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart07";
import instruction from "./instruction.md";
import { IonGrid } from "@ionic/react";

const convertData = (input) => {
  /*
  let tweet=new Set();

  const tweet_type=["tweet", "retweet"]
  const dates=new Set()

  for(const item of input){
    dates.add(item.createdAt.slice(0,10))
  }
  const date = Array.from(dates)
  const  date_count = {
    tweet,
    retweet,
  }
  for(const item of input){
    for(let i=0;i<date.length;i++){
      if(date[i] === item.createdAt.slice(0,10)){
        if (item.isRetweet){
          date_count.retweet[i] += 1
        }else{
          date_count.tweet[i] += 1
        }
      }
    }
  }

  return tweet_type.map((id)=>{
    return {
      id,
      data:input.filter(item) => 

    }
  })
  

  return species.map((species) => {
    return {
      id: species,
      data: input.filter((item) => item.species === species)
        .map(({ sepalLength: x, petalWidth: y }) => ({ x, y })),
    };
  });
  */

  const dates=(()=> {
    const dates = new Set()
    for(const item of input){
      dates.add(item.createdAt.slice(0,10));
    }
    return Array.from(dates);
  })();
  return ["tweet", "retweet"].map((id)=>{
    return{
      id,
      data: dates.map((d)=>{
        return {
          x: d,
          y: input.filter(
            (item)=>
            ((id === "tweet" && !item.isRetweet) || 
              (id === "retweet" && item.isRetweet)) && 
            item.createdAt.slice(0,10) === d
          ).length,
        };
      }),
    };
  });
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
