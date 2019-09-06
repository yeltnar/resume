import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Section} from "./components/templates/section"

function App() {

  const sectionArr = [
    {
      title:"Objective",
      content:[
        {
          type:"",
          data:[],
        }
      ]
    },
    {
      title:"Work Experience",
      content:[
        {
          type:"",
          data:[],
        }
      ]
    },
    {
      title:"Skills",
      content:[
        {
          type:"",
          data:[],
        }
      ]
    },
    {
      title:"Achievements",
      content:[
        {
          type:"",
          data:[],
        }
      ]
    },
  ];

  console.log(sectionArr.length);

  const sectionElementArr = sectionArr.map((cur)=>{
    console.log(cur);
    return (<Section title={cur.title} content={cur.content}></Section>)
  });

  return (
    <div className="App">
      {sectionElementArr}
    </div>
  );
}

export default App;
