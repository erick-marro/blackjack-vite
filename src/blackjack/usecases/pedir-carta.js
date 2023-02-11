
/**
 * Esta función me permite obtener una carta
 * @param {Array<String>} deck la baraja de donde sacará la carta
 * @returns {string} retorna una carta del deck
 */
export const pedirCarta = (deck) => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}
