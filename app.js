// import { dragons } from './dragons.js';
import { getDragons } from './fetch-utils.js';
import { renderDragons } from './render-utils.js';

async function loadData() {
    const dragons = await getDragons();
    const main = document.querySelector('main');
    for (let dragon of dragons){
        const dragonDiv = renderDragons(dragon);
        main.append(dragonDiv);
    }
}
loadData();