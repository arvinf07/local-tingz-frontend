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
