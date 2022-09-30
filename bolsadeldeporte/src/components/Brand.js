import Navbar from 'react-bootstrap/Navbar';

const Brand = (props) => {
    return (
        <Navbar.Brand href="#home">{props.children}</Navbar.Brand>
    )
}

export default Brand;