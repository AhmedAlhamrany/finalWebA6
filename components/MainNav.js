import { Container, Nav, Navbar, Form, Button, NavDropdown } from "react-bootstrap";
import { useRouter } from "next/router";
import { useState } from "react";
import { searchHistoryAtom } from "@/store";
import { useAtom } from "jotai";

export default function MainNav() {
  const router = useRouter();
  const [searchField, setSearch] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchHistory, setSearchHistory] = useAtom(searchHistoryAtom);

  function submit(e) {
    e.preventDefault();
    setIsExpanded(false);
    router.push(`/artwork?title=true&q=${searchField}`);
    const queryString = `title=true&q=${searchField}`;
    setSearchHistory(current => [...current, queryString]);
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

  function historyRoute(){
    setIsExpanded(false);
    router.push('/history')
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
            <Nav.Link active={router.pathname === "/search"} href="/search" expanded={isExpanded}>
              Advanced Search
            </Nav.Link>
          </Nav>
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
          <Nav>
            <NavDropdown title="User Name" id="user-dropdown">
              <NavDropdown.Item active={router.pathname === "/favourites"} onClick={favRoute}>
                Favourites
              </NavDropdown.Item>
              <NavDropdown.Item  active={router.pathname === "/history"} onClick={historyRoute}>
                Search History
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}