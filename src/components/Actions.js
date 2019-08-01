

export const test =()=>{
return dispatch =>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => {
        dispatch({
          type:"virus",
          payload:json
        })
    })
}

}

