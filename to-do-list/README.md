# To Do List

<p align="center">
  <img src="https://user-images.githubusercontent.com/57832605/155050254-96055b70-b1a8-4b5e-85fb-f8514ee8b964.gif" alt="animated" />
</p>

## Installation (Yükleme)

Use the git clone command to clone the project to local.

(Projeyi bilgisayara klonlamak için git clone komutunu kullanın.)

```bash
git clone https://github.com/umutdag1/patika/
```

## Usage (Kullanım)

```bash
cd patika/to-do-list
Run with Live Server
```

## Example Code (Örnek Kod)
```js
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
```
