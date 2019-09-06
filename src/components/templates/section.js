import React from 'react';

import './style.css'

function Section(props){

    return (
        <div>
            {/* <div>{JSON.stringify(props,null,2)}</div> */}
            <SectionTitle></SectionTitle>
            <SectionContent></SectionContent>
        </div>
    );

    function SectionTitle(){
        return (<div  className="title">{props.title}</div>);
    }
    function SectionContent(){
        return (<div></div>);

        function subSection(){
            
        }
    }
}

export {Section}