export const fetchGames= () => {
    return (dispatch) => {
        fetch(`localhost:3000/games`)
        .then((response => {
            if (response.ok) {
                return response.json()
                .then((games) => {
                    debugger
                })
            } else {
                return response.json()
                }
            }
        ))
    }
}