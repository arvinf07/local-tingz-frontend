import Navbar from 'react-bootstrap/Navbar'
import {Nav} from 'react-bootstrap'

export default function NavigationBar(){
  return(
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Local Tingz</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/locations">Locations</Nav.Link>
        <Nav.Link href="/lists">Lists</Nav.Link>
      </Nav>
    </Navbar>
  )
}

