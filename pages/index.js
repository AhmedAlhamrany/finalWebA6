/*********************************************************************************
 *  WEB422 – Assignment 4
 *  I declare that this assignment is my own work in accordance with Seneca Academic Policy.
 *  No part of this assignment has been copied manually or electronically from any other source
 *  (including web sites) or distributed to other students.
 *
 *  Name: Ahmed Alhamrany Student ID: 144654217 Date: 7/6/2023
 *
 ********************************************************************************/

import { Image, Row, Col } from "react-bootstrap";

export default function About() {
  return (
    <>
      <Row>
        <Col md={6}>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/3/30/Metropolitan_Museum_of_Art_%28The_Met%29_-_Central_Park%2C_NYC.jpg"
            fluid
            rounded
          />
        </Col>
        <Col md={6}>
          <p>
            The Metropolitan Museum of Art, colloquially known as The Met, is
            located in New York City and is the largest art museum in the United
            States. It is situated in Central Park, along Fifth Avenue's Museum
            Mile. The museum's permanent collection includes more than two
            million works, spanning over 5,000 years of art history.
          </p>
          <p>
            The Met's collection consists of artworks from various cultures and
            time periods, including ancient Egyptian artifacts, European
            paintings, American decorative arts, Asian sculptures, African
            masks, and much more. It is renowned for its extensive collection
            and the breadth of art forms represented.
          </p>
          <p>
            To learn more about The Metropolitan Museum of Art, you can visit
            the{" "}
            <a
              href="https://en.wikipedia.org/wiki/Metropolitan_Museum_of_Art"
              target="_blank"
              rel="noreferrer"
            >
              Wikipedia entry
            </a>
            .
          </p>
        </Col>
      </Row>
    </>
  );
}