import { Row, Col } from "react-bootstrap";
import { useRouter } from "next/router";
import ArtworkCardDetails from "@/components/ArtworkCardDetails";

export default function ArtworkID() {
  const router = useRouter();
  const { objectID } = router.query;

  return (
    <Row>
      <Col>
        <ArtworkCardDetails objectID={objectID} />
      </Col>
    </Row>
  );
}