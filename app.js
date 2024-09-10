import React from "react";
import ReactDOM from 'react-dom/client'; // React 18+ uses 'react-dom/client'



const ele1=React.createElement("h2",{},"hello world!");

const ele=React.createElement("h1",{},"hello world!");
const child=React.createElement("div",{id:"child"},ele,ele1);
const child1=React.createElement("div",{id:"child1"},ele,ele1);

const parent=React.createElement("div",{id:"parent"},child,child1);






 const r=document.getElementById("roots");
 const root=ReactDOM.createRoot(r);


 console.log(parent);

 




 root.render(parent);





    
