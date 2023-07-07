import useSWR from "swr";
import { Card, Button } from "react-bootstrap";
import Link from "next/link";
import Error from "next/error";

export default function ArtworkCard({ objectID }) {
  const { data, error } = useSWR(
    `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`
  );

  if (error) {
    return <Error statusCode={404} />;
  }

  if (!data) {
    return null;
  } else {
    const { primaryImageSmall, title, objectDate, classification, medium } =
      data;

    return (
      <>
        <Card>
          {primaryImageSmall.length > 0 ? (
            <Card.Img variant="top" src={primaryImageSmall} alt={title} />
          ) : (
            <Card.Img
              variant="top"
              src={
                "https://via.placeholder.com/375x375.png?text=[+Not+Available+]"
              }
              alt={title}
            />
          )}
          <Card.Body>
            {title.length > 0 ? (
              <Card.Title>{title}</Card.Title>
            ) : (
              <Card.Title>'N/A'</Card.Title>
            )}
            <Card.Text>
              Date: {objectDate ? objectDate : "N/A"}
              <br />
              Classification: {classification ? classification : "N/A"}
              <br />
              Medium: {medium ? medium : "N/A"}
            </Card.Text>
            <Link href={`/artwork/${objectID}`} passHref>
              <Button variant="primary">{objectID}</Button>
            </Link>
          </Card.Body>
        </Card>
      </>
    );
  }
}