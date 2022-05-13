// import { dragons } from './dragons.js';
import { renderDragon } from './render-utils.js';
console.log(dragons);

const dragonList = document.getElementById ('dragons');

for (let dragon of dragons) {
    const dragonDiv = renderDragon(dragon);
    dragonList.append(dragonDiv);
}