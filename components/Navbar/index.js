import Image from 'next/image'
import { Navbar, Container ,Nav} from "react-bootstrap";
import styles from '../../styles/Navbar.module.css'
import logo from '../../public/logo.svg'

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Image src={logo} className={`${styles.navbar}`}></Image>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='mx-auto'>
            <Nav.Link href="#deets">Sign In</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Sign Out
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
