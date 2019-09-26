import React, {useState} from 'react';
import {contact} from "../../data/main.json"
import './style.css';

function Title(){

    return (
        <div className="contact">
            <div className="name">{contact.name}</div>
            <div className="email">
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
            <div className="website">
                <a href={contact.website.link} target="_blank">{contact.website.text}</a>
            </div>
        </div>
    );
}

export {
    Title
}