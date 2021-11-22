import React from "react";
import { Typography, Link, Card,} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { useQuery } from "react-query";
import fetch from "./fetch";

export default function Episodes() {
  const { data, status } = useQuery("episodes", () =>
    fetch("https://rickandmortyapi.com/api/episode")
  );

  if (status === "loading") {
    return <p>Loading...</p>;
  }
  if (status === "error") {
    return <p>Error :(</p>;
  }

  return (
    <div>
     <Typography variant="h2">Episodes</Typography>
          {data.results.map((episode) => (
            <article key={episode.id} style={{ margin: "16px 16px 16px 16px" }}>
              <Link component={RouterLink} to={`/episodes/${episode.id}`}>
                <Card>
                  <Typography variant="h6">
                    {episode.episode} - {episode.name}{" "}
                    <em>{episode.airDate}</em>
                  </Typography>
                </Card>
              </Link>
            </article>
          ))}
    
    </div>
  );
}
