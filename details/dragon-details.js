import { getDragonId } from '../fetch-utils';
import { renderDragons } from '../render-utils';

const dragon = document.getElementById('dragons');

async function loadData() {
    const params = new URLSearchParams(window.location.search);
    const dragonId = params.get('id');
    const dragons = await getDragonId(dragonId);

    const dragonDiv = renderDragons(dragons);
    dragon.append(dragonDiv);
}
loadData();