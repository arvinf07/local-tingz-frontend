import { Link } from 'react-router-dom';

export default function List({id, name, locations}){
  
  return(
     <ul className='list' id={id}>
        <h3>{name}</h3>
        {locations.map(location => {
          return(
            <li>
              <Link to={`/locations/${location.id}`}> {location.name} </Link>
            </li>
          ) 
        })}
     </ul>
    )

}