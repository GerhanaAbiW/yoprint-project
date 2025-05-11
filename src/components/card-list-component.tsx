import { Box, Typography } from "@mui/material";
import React from "react";
import { AnimeModel } from "../models/anime-model";
import CardComponent from "./card-component";

const CardListComponent: React.FC<{
  data: AnimeModel[];
  onClickCard: (id: string) => void;
}> = ({ data, onClickCard }) => {
  return (
    <Box display="flex" flexWrap="wrap" gap={2} width="100%">
      {data.length === 0 ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100%"
          minHeight={200}
          width="100%"
        >
          <Typography variant="h6" color="textSecondary">
            No data exist
          </Typography>
        </Box>
      ) : (
        data.map((data, index) => (
          <CardComponent
            key={data.mal_id}
            alt={`Card image ${index + 1}`}
            image={data.images.jpg.image_url}
            title={data.title}
            width={225}
            height={350}
            onClick={() => onClickCard(data.mal_id.toString())}
          />
        ))
      )}
    </Box>
  );
};

export default CardListComponent;
