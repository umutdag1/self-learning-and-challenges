const addBtn = document.getElementById("liveToastBtn");
const toastText = document.getElementById("toastText");
const inputRules = {
    '!= ""': "Lütfen Boş Bırakmayınız!",
    '!= null': "Lütfen Bir Task Giriniz!",
    '!= undefined': "Bir Hata Oluştu!",
    '.indexOf(" ") < 0': "Lütfen Boş Bırakmayınız!"
};
const input = document.getElementById("task");
const list = document.getElementById("list");

loadListFromLocalStorage();

addBtn.addEventListener('click', () => {
    const inputText = input.value;
    let isOK = true;
    for (const rule in inputRules) {
        const ruleCondition = `inputText${rule} ;`;
        if (!eval(ruleCondition)) {
            isOK = false;
            setInputText("");
            fireToast(inputRules[rule]);
            break;
        }
    }

    if (isOK) {
        addToList(inputText);
        setInputText("");
        addToLocalStorage(inputText);
    }
});

function fireToast(text) {
    toastText.innerText = text;
    $('.toast').toast('show');
}

function setInputText(text) {
    input.value = text;
}

function taskIsDone(e) {
    const currentElem = e.target
    setOptionsToHTMLElem(currentElem, {
        "attribute": {
            "class": `checked`
        }
    });

    const text = currentElem.childNodes[0].textContent;
    removeFromLocalStorage(text);
}

function addToLocalStorage(text) {
    localStorage.setItem(text, text);
}

function removeFromLocalStorage(key) {
    if (key) {
        localStorage.removeItem(key);
    }
}

function clearLocalStorage() {
    localStorage.clear();
}

function loadListFromLocalStorage() {
    const storageLen = localStorage.length;

    for (let i = 0; i < storageLen; i++) {
        const itemKey = localStorage.key(i);
        const item = localStorage.getItem(itemKey);
        if (item) {
            addToList(item, false);
        }
    }
}

function removeFromList(e) {
    const listElem = e.target.parentElement;
    const text = listElem.childNodes[0].textContent;
    removeFromLocalStorage(text);
    listElem.remove();
}

function addToList(text, isAdded = true) {
    if (localStorage.getItem(text) && isAdded) {
        fireToast("Zaten bunu ekledin.");
        return;
    }

    let liElem = createHTMLElem("li", {
        "actionProp": {
            "innerText": `'${text}'`,
            "onclick": `taskIsDone`
        }
    });

    let deleteBtn = createHTMLElem("span", {
        "actionProp": {
            "textContent": `'x'`,
            "onclick": `removeFromList;`
        },
        "attribute": {
            "class": `close`
        }
    });

    liElem.appendChild(deleteBtn);
    list.appendChild(liElem);
    fireToast("Başarıyla Eklendi.");
}

function createHTMLElem(elemTag, options) {
    let elem = document.createElement(elemTag);
    setOptionsToHTMLElem(elem, options);
    return elem;
}

function setOptionsToHTMLElem(elem, options) {
    for (const optionKey in options) {
        if (typeof options[optionKey] == "object") {
            if (optionKey === "actionProp") {
                for (const actionKey in options[optionKey]) {
                    if (Array.isArray(options[optionKey][actionKey])) {
                        let array = options[optionKey][actionKey];
                        for (const arrayElem of array) {
                            eval(`elem.${actionKey} = ${arrayElem};`);
                        }
                    } else {
                        eval(`elem.${actionKey} = ${options[optionKey][actionKey]};`);
                    }
                }
            } else if (optionKey === "attribute") {
                for (const attributeKey in options[optionKey]) {
                    if (Array.isArray(options[optionKey][attributeKey])) {
                        let array = options[optionKey][attributeKey];
                        for (const arrayElem of array) {
                            elem.setAttribute(attributeKey, arrayElem);
                        }
                    } else {
                        elem.setAttribute(attributeKey, options[optionKey][attributeKey]);
                    }
                }
            }
        }
    }
}