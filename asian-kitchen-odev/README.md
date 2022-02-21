# Asian Kitchen's Menu

<p align="center">
  <img src="https://user-images.githubusercontent.com/57832605/155039117-e761c2d0-8b3a-4022-b39d-712477363db7.gif" alt="animated" />
</p>

## Installation (Yükleme)

Use the git clone command to clone the project to local.

(Projeyi bilgisayara klonlamak için git clone komutunu kullanın.)

```bash
git clone https://github.com/umutdag1/patika/
```

## Usage (Kullanım)

```bash
cd patika/asian-kitchen-odev
Run with Live Server
```

## Example Code (Örnek Kod)
```js
const filters = removeDuplicationInArr(
    menu.map((menu_elem) => menu_elem.category)
);
addElemInArr(filters, "All", 'start'); // Adding "All" in list

// Create Buttons depending on Categories and Adding the DOM Actions, Settings etc. to be shown on 
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
```
