import { Card, Button } from "react-bootstrap";
import {Link, Error} from "next";
import useSWR from "swr";

export default function ArtworkCardDetail({ objectID }) {
  const { data, error } = useSWR(
    `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`
  );

  if (error) {
    return <Error statusCode={404} />;
  }

  if (!data) {
    return null;
  } else {
    const {
      primaryImage,
      title,
      objectDate,
      classification,
      medium,
      artistDisplayName,
      creditLine,
      dimensions,
      artistWikidata_URL,
    } = data;

    return (
      <Card>
        {primaryImage && (
          <Card.Img variant="top" src={primaryImage} alt={title} />
        )}
        <Card.Body>
          <Card.Title>{title ? title : "N/A"}</Card.Title>
          <Card.Text>
            Date: {objectDate ? objectDate : "N/A"}
            <br />
            Classification: {classification ? classification : "N/A"}
            <br />
            Medium: {medium ? medium : "N/A"}
            <br />
            <br />
            {artistDisplayName ? (
              <>
                Artist:{" "}
                <a href={artistWikidata_URL} target="_blank" rel="noreferrer">
                  wiki
                </a>
                <br />
              </>
            ) : (
              <>
                Artist: N/A
                <br />
              </>
            )}
            Credit Line: {creditLine ? creditLine : "N/A"}
            <br />
            Dimensions: {dimensions ? dimensions : "N/A"}
            <br />
          </Card.Text>
          <Link href={`/artwork/${objectID}`} passHref>
            <Button variant="primary">{objectID}</Button>
          </Link>
        </Card.Body>
      </Card>
    );
  }
}