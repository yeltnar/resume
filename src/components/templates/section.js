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

        let to_return = content.map((single_content,i)=>{

            let single_to_return;

            if(single_content.type==="plain"){
                
                single_to_return = single_content.data.map((cur,i)=>{
                    return <div dangerouslySetInnerHTML={{__html:cur}} key={i}/>;
                });
            }else if(single_content.type==="label-content"){
                
                single_to_return = single_content.data.reduce((acc, cur, i) => {
                    acc.push((
                        <React.Fragment>
                            <div className="label">{cur.label}:</div>
                            <div className="content">{cur.content}</div>
                        </React.Fragment>
                    ));
                    return acc
                }, []);

                single_to_return = (<div className="label-content">{single_to_return}</div>);

            }else if(single_content.type==="plain-date"){

                single_to_return = (
                    <span className="plain-date-holder">
                        <span className="title">{single_content.data[0]}</span>
                        <span className="date">{single_content.date || "ADD A DATE"}</span>
                    </span>
                );
            }else if(single_content.type==="achievement-date"){

                single_to_return = (
                    <span className="plain-date-holder achievement-date-holder">
                        <div className="title">{single_content.data[0]}</div>
                        <div className="date">{single_content.date || "ADD A DATE"}</div>
                    </span>
                );

            }else if(single_content.type==="bullet"){

                single_to_return = single_content.data.map((cur,i)=>{
                    return (
                        <div key={i}>* {cur}</div>
                    );
                });

                single_to_return = <div className="bullet_container">{single_to_return}</div>

            }else{
                console.log(JSON.stringify(single_content,null,2));
                debugger
                single_to_return = JSON.stringify(single_content,null,2)
            }

            return <span key={i}>{single_to_return}</span>;

        });

        return (<div className="section-content">{to_return}</div>);

        function subSection(){
            
        }
    }
}

export {Section}