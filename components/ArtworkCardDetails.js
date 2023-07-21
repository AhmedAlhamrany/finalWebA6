import { Card, Button } from "react-bootstrap";
import Link from "next/link";
import useSWR from "swr";
import Error from "next/error";
import { useAtom } from "jotai";
import { favouritesAtom } from "@/store";
import { useState } from "react";

export default function ArtworkCardDetail({ objectID }) {
  const { data, error } = useSWR(objectID ?
    `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}` : null
  );

  const [favouritesList, setFavouritesList] = useAtom(favouritesAtom);
  const [showAdded, setShowAdded] = useState(favouritesList.includes(objectID));

  function favClicked(){

    if(showAdded){
      setFavouritesList(current => current.filter(fav => fav != objectID));
      setShowAdded(false);
    }
    else{
      setFavouritesList(current => [...current, objectID]);
      setShowAdded(true);
    }
  }

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
            <button variant={showAdded ? "primary" : "outline-primary"}
            onClick={favClicked}>
              {showAdded ? "+ Favourite (added)" : "+ Favourite"}
            </button>
          </Card.Text>
          <Link href={`/artwork/${objectID}`} passHref>
            <Button variant="primary">{objectID}</Button>
          </Link>
        </Card.Body>
      </Card>
    );
  }
}