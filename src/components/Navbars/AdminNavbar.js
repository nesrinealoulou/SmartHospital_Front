 import {Link, useHistory} from "react-router-dom";
// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Nav,
  Container,
  Media,
} from "reactstrap";

const AdminNavbar = (props) => {
  const history = useHistory();
  const logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('role');
    history.push('/auth/login');
  };
  return (
    <>
      <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
        <Container fluid>
          <Link
            className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
            to="/"
          >
            {props.brandText}
          </Link>

          <Nav className="align-items-center d-none d-md-flex" navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle className="pr-0" nav>
                <Media className="align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                    <img
                      alt="..."
                      src={
                        require("../../assets/img/theme/image_doctor.jpg")
                          .default
                      }
                    />
                  </span>
                  <Media className="ml-2 d-none d-lg-block" onClick={() => {logout()}}>
                    <span className="mb-0 text-sm font-weight-bold">
                      Log out
                    </span>
                  </Media>
                </Media>
              </DropdownToggle>
            </UncontrolledDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default AdminNavbar;
