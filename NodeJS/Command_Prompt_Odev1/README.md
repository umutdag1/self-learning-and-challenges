# Command Prompt

<p align="center">
  <img src="https://user-images.githubusercontent.com/57832605/155476366-242a311a-a0c3-4ca3-8228-732477980dd9.png" alt="animated" />
</p>

## Installation (Yükleme)

Use the git clone command to clone the project to local.

(Projeyi bilgisayara klonlamak için git clone komutunu kullanın.)

```bash
git clone https://github.com/umutdag1/patika/
```

## Usage (Kullanım)

```bash
cd patika/NodeJS/Command_Prompt_Odev1
node script.js <number>
```

## Example Code (Örnek Kod)
```js
// Not needed to be Imported
const radius = process.argv[2] ? // Getting Command Prompt Third Param 
	process.argv[2] : // Which is in Second Position in an Arr
	0; // If It's not Defined, Then Assign to 0(Zero) as radius
const PI = Math.PI; // Getting PI

const circleArea = (r) => PI * r ** 2; // Calculating Circle Area and Getting Result

console.log(circleArea(radius));  // Print it to Console
```
