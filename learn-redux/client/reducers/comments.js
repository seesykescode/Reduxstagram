// a reducer takes two arguments, an action and a copy of current state

var comments = (state = [], action)=> {
  console.log(state, action)
  return state
}


export default comments