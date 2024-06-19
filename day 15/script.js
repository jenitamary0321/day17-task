
// const shapeDiv = document.createElement("div");
// shapeDiv.setAttribute("style" , "width: 100px; height: 100px; backgroundcolour:red");
//     document.body.appendChild(shapeDiv);

//     shapeDiv.addEventListener("mouseover",()=>{
//         shapeDiv.setAttribute(
//            "style",
//            "width:100px;height:100px;backgroundcolour:blue"
//         );
//     });

//     shapeDiv.addEventListener("mouseover",() = > {
//         shapeDiv.setAttribute(
//            "style",
//            "width:100px;height:100px;backgroundcolour:yellow"
//         );
//     });




const textarea = document.createElement("textarea");
const para = document.createElement("p");
const span = document.createElement("span");
span.innerText = 0;
para.innerText = "enter text length:";
para.appendChild(span);
textarea.setAttribute("placeholder","enter message");

document.body.append(...[textarea,para]);
textarea.addEventListener("input",(e) => {
    span.innerText = e.target.value.length;
});
