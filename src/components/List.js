import { Link } from 'react-router-dom';
import { Card, ListGroup, Image } from "react-bootstrap";

export default function List({id, name, locations = []}){
  return(
    <Card className='col pb-3' style={{ width: '18rem' }}>
      <Card.Header>
        {name}
      </Card.Header>
      <ListGroup className='list' id={id} variant="flush">
        {locations.map(location => {
          return(
            <ListGroup.Item>
              <Link to={`/locations/${location.id}`}> {location.name} </Link>
            </ListGroup.Item>
          ) 
        })}
      </ListGroup>
     </Card>
    )
}

