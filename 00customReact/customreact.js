function customRender(element, container){

    const domElement = document.createElement(element.type)
    domElement.innerHTML = element.children

    // domElement.setAttribute('href', element.props.href)
    for(const prop in element.props){
        domElement.setAttribute(prop, element.props[prop])
    }

    container.appendChild(domElement)
}   

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: "Click to visit Google!"
}


const root = document.getElementById('root')

// Replacing root with reactElement
customRender(reactElement, root)

