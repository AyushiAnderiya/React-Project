function customRendor(ReactElement,container)
{
    const domElement=document.createElement(ReactElement.type)
    domElement.innerHTML=ReactElement.children
    for(const prop in ReactElement.props){
        if (prop==='children') {
            continue;
        }
        domElement.setAttribute(prop,ReactElement.props[prop])
    }
    container.appendChild(domElement);
}

const ReactElement={
    type:'a',
    props:{
        href:'https://google.com',
      target:'_blank'  
    },
    children:'Click me to visit google'
   
}



let root=document.querySelector("#root")
document.querySelector(".asd").innerHTML="hello";
customRendor(ReactElement,root);

