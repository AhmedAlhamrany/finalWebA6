/*********************************************************************************
 *  WEB422 – Assignment 5
 *  I declare that this assignment is my own work in accordance with Seneca Academic Policy.
 *  No part of this assignment has been copied manually or electronically from any other source
 *  (including web sites) or distributed to other students.
 *
 *  Name: Ahmed Alhamrany Student ID: 144654217 Date: 7/17/2023
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
            The Metropolitan Museum of Art in New York City, colloquially
            &quot;the Met&quot;, is the largest art museum in the Americas. In
            2022 it welcomed 3,208,832 visitors, ranking it eighth on the list
            of most-visited art museums in the world, and the second-most
            visited art museum in the United States. Its permanent collection
            contains over two million works, divided among 17 curatorial
            departments. The main building at 1000 Fifth Avenue, along the
            Museum Mile on the eastern edge of Central Park on Manhattan&apos;s
            Upper East Side, is by area one of the world&apos;s largest art
            museums. The first portion of the approximately
            2-million-square-foot (190,000 m2) building was built in 1880. A
            much smaller second location, The Cloisters at Fort Tryon Park in
            Upper Manhattan, contains an extensive collection of art,
            architecture, and artifacts from medieval Europe. The Metropolitan
            Museum of Art was founded in 1870 with its mission to bring art and
            art education to the American people. The museum&apos;s permanent
            collection consists of works of art from classical antiquity and
            ancient Egypt, paintings, and sculptures from nearly all the
            European Old Masters, and an extensive collection of American and
            modern art. The Met maintains extensive holdings of African, Asian,
            Oceanian, Byzantine, and Islamic art. The museum is home to
            encyclopedic collections of musical instruments, costumes, and
            accessories, as well as antique weapons and armor from around the
            world. Several notable interiors, ranging from 1st-century Rome
            through modern American design, are installed in its galleries.
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