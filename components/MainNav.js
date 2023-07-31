import { Container, Nav, Navbar, Form, Button, NavDropdown } from "react-bootstrap";
import { useRouter } from "next/router";
import { useState } from "react";
import { searchHistoryAtom } from "@/store";
import { useAtom } from "jotai";
import { addToHistory } from "../lib/userData";
import { readToken, removeToken } from "@/lib/authenticate";

export default function MainNav() {
  const router = useRouter();
  const [searchField, setSearch] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchHistory, setSearchHistory] = useAtom(searchHistoryAtom);

  let token = readToken();
  let userName = token ? token.userName : null;

  async function submit(e) {
    e.preventDefault();
    setIsExpanded(false);
    router.push(`/artwork?title=true&q=${searchField}`);
    setSearchHistory(await addToHistory(`title=true&q=${searchField}`));
  }

  function toggleNavBar() {
    setIsExpanded((prevExpanded) => !prevExpanded);
  }

  function closeNavBar() {
    setIsExpanded(false);
  }

  function favRoute() {
    setIsExpanded(false);
    router.push('/favourites');
  }

  function historyRoute() {
    setIsExpanded(false);
    router.push('/history');
  }

  function logout() {
    setIsExpanded(false);
    removeToken();
    router.push('/login');
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary" expanded={isExpanded}>
      <Container>
        <Navbar.Brand>Ahmed Alhamrany</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={toggleNavBar}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" onClick={closeNavBar}>
            <Nav.Link active={router.pathname === "/"} href="/" expanded={isExpanded}>
              Home
            </Nav.Link>
            {token && (
              <Nav.Link active={router.pathname === "/search"} href="/search" expanded={isExpanded}>
                Advanced Search
              </Nav.Link>
            )}
          </Nav>
          {token && (
            <Form className="d-flex" onSubmit={submit}>
              &nbsp;
              <Form.Control
                type="search"
                placeholder="Search"
                name="search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button type="submit" variant="outline-primary">
                Search
              </Button>
              &nbsp;
            </Form>
          )}
          <Nav>
            {token ? (
              <NavDropdown title={userName} id="user-dropdown">
                <NavDropdown.Item onClick={favRoute}>
                  Favourites
                </NavDropdown.Item>
                <NavDropdown.Item onClick={historyRoute}>
                  Search History
                </NavDropdown.Item>
                <NavDropdown.Item onClick={logout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav>
                <Nav.Link active={router.pathname === "/register"} href="/register" onClick={() => setIsExpanded(false)}>
                  Register
                </Nav.Link>
                <Nav.Link active={router.pathname === "/login"} href="/login" onClick={() => setIsExpanded(false)}>
                  Login
                </Nav.Link>
              </Nav>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}