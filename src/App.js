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
          type:"plain",
          data:["Obtain a Software Engineering position at IBM"],
        }
      ]
    },
    {
      title:"Work Experience",
      content:[
        {
          type:"plain-date",
          data:["IBM – IT Specialist"],
          date:"September 2016-present"
        },
        {
          type:"bullet",
          data:[
            "Worked with two teams on IBM Worklight Apps using HTML, CSS, and JS",
            "Backend for Mobile App in Node.JS that is now published ",
            "Support for NYPD bodycam proposal ",
            "Presented at IBM Seller’s Academy and IBM Insight conferences ",
            "Made UI for internal IBM search application",
          ],
        },
        {
          type:"plain-date",
          data:["IBM – IT Specialist Co-Op, Coppell, Texas"],
          date:"Summer 2014, May 2015-September 2016"
        },
        {
          type:"bullet",
          data:[
            "Worked with two teams on IBM Worklight Apps using HTML, CSS, and JS",
            "Backend for Mobile App in Node.JS that is now published ",
            "Support for NYPD bodycam proposal ",
            "Presented at IBM Seller’s Academy and IBM Insight conferences ",
            "Made UI for internal IBM search application",
          ],
        },
        {
          type:"plain-date",
          data:["Camp Counselor - Camp Gilmont - Gilmer, Texas"],
          date:""
        },
        {
          type:"bullet",
          data:[
            "Responsible for leading campers from the age of 7 to 17 in camp related activities",
            "Trained campers to become counselor",
          ],
        },
      ]
    },
    {
      title:"Skills",
      content:[
        {
          type:"plain",
          data:[
            "Software: Word, Excel, PowerPoint, Eclipse, Android Studio, Bluemix, Git",
            "Languages and Technologies: Java, HTML, JavaScript, CSS, NodeJS, Cloudant",
            "Operating Systems: Unix, Windows, Mac",
            "Education: University of Texas at Dallas– Software Engineering Major",
          ],
        }
      ]
    },
    {
      title:"Achievements",
      content:[
        {
          type:"plain-date",
          data:["Eagle Scout"],
          date:""
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
