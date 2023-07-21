import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { Card, Col, Pagination, Row } from "react-bootstrap";
import Error from "next/error";
import ArtworkCard from "@/components/ArtworkCard";
import validObjectIDList from "@/public/data/validObjectIDList.json";

const PER_PAGE = 12;

export default function Artwork() {
  const [artworkList, setArtworkList] = useState(null);
  const [page, setPage] = useState(1);

  const router = useRouter();
  const finalQuery = router.asPath.split("?")[1];

  const { data, error } = useSWR(
    `https://collectionapi.metmuseum.org/public/collection/v1/search?${finalQuery}`
  );

  function prevPage() {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  }

  function nextPage() {
    if (page < artworkList.length) {
      setPage((prevPage) => prevPage + 1);
    }
  }

  useEffect(() => {
    if (data) {
      let results = []
      let filteredResults = validObjectIDList.objectIDs.filter((x) =>
        data.objectIDs?.includes(x)
      );

      for (let i = 0; i < filteredResults.length; i += PER_PAGE) {
        const chunk = filteredResults.slice(i, i + PER_PAGE);
        results.push(chunk);
      }

      setArtworkList(results);
      setPage(1);
    }
  }, [data]);

  if (error) {
    return <Error statusCode={404} />;
  }

  if (!artworkList) {
    return null;
  } else {
    return (
      <>
        {artworkList.length > 0 && (
          <Row className="gy-4">
            {artworkList[page - 1].map((currentObjectID) => (
              <Col lg={3} key={currentObjectID}>
                <ArtworkCard objectID={currentObjectID} />
              </Col>
            ))}
          </Row>
        )}
        {artworkList.length === 0 && (
          <Card>
            <Card.Body>
              <h4>Nothing Here</h4>
              Try searching for something else.
            </Card.Body>
          </Card>
        )}
        {artworkList.length > 0 && (
          <Row>
            <Col className="d-flex justify-content-center">
              <Pagination>
                <Pagination.Prev onClick={prevPage} />
                <Pagination.Item active>{page}</Pagination.Item>
                <Pagination.Next onClick={nextPage} />
              </Pagination>
            </Col>
          </Row>
        )}
      </>
    );
  }
}
