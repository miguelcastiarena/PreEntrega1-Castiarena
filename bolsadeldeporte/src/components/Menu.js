import Nav from 'react-bootstrap/Nav';
import CartWidget from "./CartWidget"

const Menu = ({secciones}) => {
    
    return (

        <Nav className="me-auto">
            {
                secciones.map(
                    opt => <Nav.Link href="#seccion1">{opt}</Nav.Link>
                )
            }
            <Nav.Link href="#carrito"><CartWidget /></Nav.Link>
        </Nav>
    )
}
        

export default Menu;