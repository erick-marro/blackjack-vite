
/**
 * Esta función retorna el valor de una carta especificada
 * @param {String} carta Ejemplo: '2C'
 * @returns {Number} retorna el valor de la carta evaluada
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}
