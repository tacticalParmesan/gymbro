export function createElm({type = "div", classes, text, parent} = {}) {
    const newElement = document.createElement(type);
    
    if(Array.isArray(classes)) {
        for (const c of classes) newElement.classList.add(c);
    } else {
        newElement.classList.add(classes)
    }

    if(text) newElement.textContent = text;
    if(parent) parent.append(newElement)

    console.info("Created", newElement)
    return newElement;
}

