// var React = require('react');
// var ReactDOM = require('react-dom');

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; 
import './index.css';


//<h1 contentEditable='true'>Hello All</h1>
//contentEditable = 'true' means we can edit in browser (temporarily)

//simple meaning of render dikhhao
// ReactDOM.render('kya dikhana h', 'kaha dikhana h', 'callback funct');
// .heading{
//     border: 2px solid black;
//     margin: 5px;
//     padding: 5px;
//     display: flex;
//     justify-content: center;
// }

// let para = {
//     // convert kabab case to camel case {act as object}
// textAlign: 'center',
// border:'2px solid yellow',
// //padding: '5px',

// };

// para.padding = '5px';

// let fname = 'Saurabh';
// let lname = 'Sawale';
// let img1 = "https://picsum.photos/350/300";
// let img2 = "https://picsum.photos/250/300";
// let img3 = "https://picsum.photos/300/300";
// //we can write only expressions in {} not statements (if-else statements)
// ReactDOM.render(<>
//     <h1 className="heading" style={{
//         // convert kabab case to camel case {act as object}
//     textAlign: 'center',
//     border:'2px solid red',
//     padding: '5px',
    
// }}> Hello World </h1>
//     {/* <h1 contentEditable='true'>Hello All</h1>  */}
//     <p style={para}>My name is {fname} {lname}</p>
//     <p>My name is {fname + " " + lname}</p>
//     <div className="images">

//         <img src="https://picsum.photos/200/300" alt="image loading" />
//         <img src={img1} alt="Random" />
//         <img src={img2} alt="Random" />
//         <a href="https://google.com" target="_blank">
//             <img src={img3} alt="Random" />
//         </a>
//     </div>
//     <p>{`my name is ${fname} ${lname}`}</p>
//     <p>My lucky number is {17 + 9}</p>
// </>
//     , document.getElementById('root'));

// /*M2 by array
// ReactDOM.render(
//     [
//     <h1> Hello World </h1>,
//     <p>My name is Saurabh</p>
//     ]
//     , document.getElementById('root'));
//     */
// /*
// using pure JS

// var h1 = document.createElement('h1');
// h1.innerHTML = "Hello World";
// document.getElementById('root').appendChild(h1);
// */

//components in React js

ReactDOM.render(

    <App />
    
,document.getElementById('root'));