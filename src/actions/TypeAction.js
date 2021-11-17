export const fetchTypes= () => {
    return (dispatch) => {
        fetch(`localhost:3000/types`)
        .then((response => {
            if (response.ok) {
                return response.json()
                .then((types) => {
                    debugger
                })
            } else {
                return response.json()
                }
            }
        ))
    }
}