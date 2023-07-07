import { Container, Nav, Navbar, Form, Button } from "react-bootstrap";
import { useRouter } from "next/router";
import { useState } from "react";

export default function MainNav() {
  const router = useRouter();
  const [searchField, setSearch] = useState("");

  function submit(e) {
    e.preventDefault();
    router.push(`/artwork?title=true&q=${searchField}`);
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>Ahmed Alhamrany</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/search">Advanced Search</Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={submit}>
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
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}