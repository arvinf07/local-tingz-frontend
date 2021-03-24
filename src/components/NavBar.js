import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

export default function NavBar(){
  return(
    <div>
      <NavLink
        to="/"
        exact
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
      >Home</NavLink>
       <NavLink
          to="/locations"
          exact
          style={link}
          activeStyle={{
            background: 'darkblue'
          }}
        >Locations</NavLink>
    </div>
  )
}