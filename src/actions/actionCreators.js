const url = 'http://127.0.0.1:3000/'
export const addLocations = locations => {
  return {
    type: 'ADD_LOCATIONS',
    locations
  };
};

export const addLists = lists => {
  return {
    type: 'ADD_LISTS',
    lists
  };
};

export const createList = listName => {
  return {
    type: 'CREATE_LIST',
    listName
  }
}

//ASYNC ACTIONS
export const fetchLocations = () => {
  return dispatch => {
    fetch(url + 'locations')
    .then(resp => resp.json())
    .then(json => dispatch(addLocations(json)))
  }
}

export const fetchLists = () => {
  return dispatch => {
    fetch(url + 'lists')
    .then(resp => resp.json())
    .then(json => dispatch(addLists(json)))
  }
}

export const postList = (listName) => {
  return (dispatch) => {
    const body = {name: listName}
    const configObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(body)
    }; 

    fetch(`http://127.0.0.1:3000/lists`, configObject)
    .then(resp => resp.json())
    .then(json => dispatch(createList(json)))
    
  }
}
