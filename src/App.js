import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import {Section} from "./components/templates/section"

import resume_json from "./data/resume.json"

function App() {

  const [resume_obj, setResumeObj] = useState(resume_json);

  if(resume_obj===undefined){
    return LoadingElement
  }

  console.log(resume_obj.length);

  const sectionElementArr = resume_obj.map((cur)=>{
    console.log(cur);
    return (<Section title={cur.title} content={cur.content}></Section>)
  });

  return (
    <div className="App">
      {sectionElementArr}
    </div>
  );
}

function LoadingElement(){
  return (<div><i>Loading</i></div>);
}

export default App;
