import { favouritesAtom } from "@/store";
import { useAtom } from "jotai";
import ArtworkCard from "@/components/ArtworkCard";
import { Row, Col, Card} from 'react-bootstrap'

export default function Favourties(){

    const [favouritesList] = useAtom(favouritesAtom)
    if(!favouritesList) return null;

    return (
        <>
          {favouritesList.length > 0 && (
            <Row className="gy-4">
              {favouritesList.map((currentObjectID) => (
                <Col lg={3} key={currentObjectID}>
                  <ArtworkCard objectID={currentObjectID} />
                </Col>
              ))}
            </Row>
          )}
          {favouritesList.length === 0 && (
            <Card style={{ width: "20rem" }}>
              <Card.Body>
              <Card.Title>Nothing Here</Card.Title>
                <Card.Text>Try adding some new artwork to the list.</Card.Text>
              </Card.Body>
            </Card>
          )}
        </>
      );
}