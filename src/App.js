import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import {Section} from "./components/templates/section"
import {Title} from "./components/title/Title"

import {resume} from "./data/main.json"

function App() {

  const [resume_obj, setResumeObj] = useState(resume);

  if(resume_obj===undefined){
    return LoadingElement
  }

  console.log(resume_obj.length);

  const sectionElementArr = resume_obj.map((cur,i)=>{
    console.log(cur);
    return (<Section title={cur.title} content={cur.content} key={i}></Section>)
  });

  return (
    <div className="App">
      <Title></Title>
      <span className="main_resume">{sectionElementArr}</span>
    </div>
  );
}

function LoadingElement(){
  return (<div><i>Loading</i></div>);
}

export default App;
