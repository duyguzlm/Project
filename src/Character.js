import React from "react";
import { Typography, Card, CardContent } from "@material-ui/core";
import { useParams } from "react-router";
import { useQuery } from "react-query";
import fetch from "./fetch";

function Character() {
  const { characterId } = useParams();
  const { data } = useQuery(`character-${characterId}`, () =>
    fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
  );
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            <img src={data.image} alt="profile pic" />
          </Typography>
          <Typography variant="h5" component="div">
            {data.name}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
           Gender: {data.gender}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Status: {data.status}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Species: {data.species}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Origin: {data.origin.name}
            </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
export default Character;
