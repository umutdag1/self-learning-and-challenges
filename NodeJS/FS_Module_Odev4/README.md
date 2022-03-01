# FS Module

## Installation (Yükleme)

Use the git clone command to clone the project to local.

(Projeyi bilgisayara klonlamak için git clone komutunu kullanın.)

```bash
git clone https://github.com/umutdag1/patika/
```

## Usage (Kullanım)

```bash
cd patika/NodeJS/FS_Module_Odev4
node main.js 
```

## Example Code (Örnek Kod)
```js
/* Initiliazing */
const DATA = { "name": "Employee 1 Name", "salary": 2000 };
const NEW_DATA = { "name": "Employee 2 Name", "salary": 4000 };
const FILE_NAME = 'data';

createJSONFile = (name, data) => {
    data = JSON.stringify(data);
    fs.writeFileSync(`${name}.json`, data, { flag: 'w' });
}

readJSONFile = name => fs.readFileSync(`${name}.json`, { encoding: 'utf8', flag: 'r' });

updateJSONFile = (name, data) => {
    let readData = JSON.parse(readJSONFile(name));
    if(data?.name){
        readData.name = data.name;
    }
    if(data?.salary) {
        readData.salary = data.salary;
    }
    createJSONFile(name,readData);
}

deleteJSONFile = (name) => fs.unlinkSync(`${name}.json`);


/* Executing */
createJSONFile(FILE_NAME, DATA);

console.log("Before Update", readJSONFile(FILE_NAME));
updateJSONFile(FILE_NAME, NEW_DATA);
console.log("After Update", readJSONFile(FILE_NAME));

setTimeout(() => {
    deleteJSONFile(FILE_NAME);
    console.log(`${FILE_NAME}.json removed`);
}, 3000);
console.log(`${FILE_NAME}.json will be removed in 3 seconds`);
```
