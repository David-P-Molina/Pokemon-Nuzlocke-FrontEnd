export const addGamesToState = (gamesArray) => {
       return {type: 'FETCH_GAMES', games: gamesArray}
}