import { Dropdown } from "react-bootstrap";

export default function AddButton(props){ 
  return(
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Add to list
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {props.lists.map(list => {
          return <Dropdown.Item onClick={props.addToList}>{list.name}</Dropdown.Item>
        })}
      </Dropdown.Menu>
    </Dropdown>
  )
}