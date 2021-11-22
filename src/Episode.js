import React from "react";
import { Typography, Link, Card, CardContent } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { useParams } from "react-router";
import { useQuery } from "react-query";
import fetch from "./fetch";

function Episode() {
  const { episodeId } = useParams();
  const { data, status } = useQuery(`episode-${episodeId}`, () =>
    fetch(`https://rickandmortyapi.com/api/episode/${episodeId}`)
  );

  if (status === "loading") return <p>Loading...</p>;
  if (status === "error") return <p>Error :(</p>;

  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {data.name}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {data.air_date}
          </Typography>
          <Typography variant="h5" component="div">
            Characters
          </Typography>
          
          {data.characters.map((character) => {
            const characterUrlParts = character.split("/").filter(Boolean);
            const characterId = characterUrlParts[characterUrlParts.length - 1];
            return <Character id={characterId} key={characterId} />;
          })}
        
        </CardContent>
      </Card>
    </div>
  );
}

function Character({ id }) {
  const { data, status } = useQuery(`character-${id}`, () =>
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
  );

  if (status === "loading") return <p>Loading...</p>;
  if (status === "error") return <p>Error :(</p>;

  return (
    <Card style={{ margin: "0 0 5px 0" ,background:"#a9e5ed"}}>
    <article key={id} >
      <Link component={RouterLink} to={`/characters/${id}`} >
        <Typography variant="h6">{data.name}</Typography>
      </Link>
    </article>
    </Card>
  );
}
export default Episode;
