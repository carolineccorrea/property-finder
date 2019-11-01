export const FETCH_RENTS = 'FETCH_RENTS'

export const getAll = () => {
  return (dispatch) => {
    fetch(`https://my-json-server.typicode.com/eduardobvale/demo/rentals`)
      .then(res => res.json())
      .then(rents => {
        dispatch({
          type: FETCH_RENTS,
          payload: rents
        })
      })
  }
}