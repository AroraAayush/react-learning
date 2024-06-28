
function renderElement(rootEle,reactEle)
{
    let domEle=document.createElement(reactEle.type);
    domEle.innerHTML=reactEle.children;
    for(prop in reactEle.props)
        {
            domEle.setAttribute(prop,reactEle.props[prop]);
        }
        rootEle.appendChild(domEle);
}

let rootEle=document.querySelector('#root');

const reactEle={
    type:"a",
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    children:"Click here to visit google"
}
console.log(rootEle);
renderElement(rootEle,reactEle);