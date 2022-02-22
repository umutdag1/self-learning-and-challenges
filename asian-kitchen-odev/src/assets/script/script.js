import menu from "../../data/menu.json" assert { type: "json" }; // Importing Menu JSON Data

/* Rendering Menu On HTML */

const buttonContentElem = document.getElementsByClassName('btn-container')[0]; // Getting a Button Content DOM Element

// Getting a list of category
const filters = removeDuplicationInArr(
    menu.map((menu_elem) => menu_elem.category)
);
addElemInArr(filters, "All", 'start'); // Adding "All" in list

// Create Buttons depending on Categories and Adding the DOM Actions, Settings etc. to be shown on HTML
filters.forEach(filter => {
    const filterBtnOptions = {
        attributes: {
            class: "btn btn-outline-dark btn-item",
            id: filter
        },
        innerText: filter,
        event: {
            click: (e) => {
                const menuListSectionElem = document.getElementsByClassName('section-center')[0];
                
                if (menuListSectionElem.children.length > 0) {
                    menuListSectionElem.innerHTML = '';
                }

                const menuElems = filter === 'All' ?
                    menu :
                    menu.filter(menuElem => menuElem.category === filter);

                menuElems.forEach(menuElem => {
                    const menuElemOptions = {
                        attributes: {
                            class: "menu-items col-lg-6 col-sm-12",
                        },
                        innerHTML: `
                                <img src='${menuElem.img}' class='photo'/>
                                <div class='menu-info'>
                                    <div class='menu-title'>
                                        <h4>${menuElem.title}</h4>
                                        <h4 class='price'>${menuElem.price}</h4>
                                    </div>
                                    <div class='menu-text'>${menuElem.desc}</div>
                                </div>
                            `
                    };

                    const menuDOMElem = createDOMElem("div", menuElemOptions);
                    menuListSectionElem.appendChild(menuDOMElem);
                })
            }
        }
    };
    const filterBtn = createDOMElem("button", filterBtnOptions);
    buttonContentElem.appendChild(filterBtn);
});

document.getElementById('All').click(); // Rendering All Menus When the HTML is first loaded.

/* Handling DOM */

// Creating a DOM Element
function createDOMElem(elemType, options) {
    const elemDOM = document.createElement(elemType);
    setDOMOptions(elemDOM, options);
    return elemDOM;
}

// Handling DOM Options to be Added to a Created DOM Element
function setDOMOptions(elemDOM, options) {
    const optionsKeys = Object.keys(options);
    optionsKeys.forEach(optionKey => {
        switch (optionKey) {
            case "attributes":
                setDOMAttributes(elemDOM, options[optionKey]);
                break;
            case "innerText":
            case "innerHTML":
                setDOMContents(elemDOM, optionKey, options[optionKey]);
                break;
            case "event":
                setDOMEvent(elemDOM, options[optionKey]);
                break;
            default:
                break;
        }
    });
}

// Adding the Contents to a DOM Element such as innerHTML, innerText etc.
function setDOMContents(elemDOM, contentType, contentText) {
    elemDOM[contentType] = contentText;
}

// Adding the Attributes to a DOM Element
function setDOMAttributes(elemDOM, attributes) {
    const attributesKeys = Object.keys(attributes);
    attributesKeys.forEach(attributeKey => {
        elemDOM.setAttribute(attributeKey, attributes[attributeKey]);
    })
}

// Adding an Event to a DOM Element
function setDOMEvent(elemDOM, event) {
    const eventKey = Object.keys(event);
    elemDOM.addEventListener(eventKey, event[eventKey]);
}

/* Handling Array */

// Getting a removed duplicated elems in array
function removeDuplicationInArr(duplicateArr) {
    return [...new Set(duplicateArr)];
}

// Adding an elem in array
function addElemInArr(arr, elem, position) {
    position === 'start' ? arr.unshift(elem) : arr.push(elem);
}