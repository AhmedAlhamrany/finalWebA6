import { Row, Col } from "react-bootstrap";
import { useRouter } from "next/router";
import ArtworkCardDetail from "@/components/ArtworkCardDetails";

export default function ArtworkID() {
  const router = useRouter();
  const { objectID } = router.query;

  return (
    <Row>
      <Col>
        <ArtworkCardDetail objectID={objectID} />
      </Col>
    </Row>
  );
}