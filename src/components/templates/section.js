import React from 'react';

import './style.css'

function Section(props){

    return (
        <div className="section">
            {/* <div>{JSON.stringify(props,null,2)}</div> */}
            <SectionTitle></SectionTitle>
            <SectionContent></SectionContent>
        </div>
    );

    function SectionTitle(){
        return (<div  className="section-title">{props.title}</div>);
    }
    function SectionContent(){

        const {content} = props;

        let to_return = content.map((single_content)=>{

            let single_to_return;

            if(single_content.type==="plain"){
                
                single_to_return = single_content.data.map((cur)=>{
                    return(
                        <div>{cur}</div>
                    )
                });

            }else if(single_content.type==="plain-date"){

                single_to_return = (
                    <span className="plain-date-holder">
                        <span className="title">{single_content.data[0]}</span>
                        <span className="date">{single_content.date || "ADD A DATE"}</span>
                    </span>
                );

            }else if(single_content.type==="bullet"){

                single_to_return = single_content.data.map((cur)=>{
                    return (
                        <div>* {cur}</div>
                    );
                });

            }else{
                console.log(JSON.stringify(single_content,null,2));
                debugger
                single_to_return = JSON.stringify(single_content,null,2)
            }

            return single_to_return;

        });

        return (<div className="section-content">{to_return}</div>);

        function subSection(){
            
        }
    }
}

export {Section}