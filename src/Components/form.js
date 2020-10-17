import React from 'react';
import './../App.css';

function generateItemList() {
    return (
        <ul>
            <li>num 1</li>
            <li>num 2</li>
            <li>num 3</li>
        </ul>
    );
}

function MainForm() {
    return (
        <div>
            <h1 
            className="MainTitle">
                To-Do List
            </h1>
            {generateItemList()}
            
        </div>
        
    );
}

export default MainForm;