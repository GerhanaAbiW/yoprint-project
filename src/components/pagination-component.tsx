import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { Box, IconButton, Typography } from "@mui/material";
import { FC } from "react";
import { PaginationModel } from "src/models/anime-model";

const PaginationComponent: FC<{
  data: PaginationModel;
  onPageChange: (newPage: number) => void;
}> = ({ data, onPageChange }) => {
  const isFirstPage = data.current_page <= 1;
  const isLastPage = !data.has_next_page;

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="flex-end"
      gap={1}
      padding={1}
    >
      <Typography variant="body2" style={{ marginRight: "15px" }}>
        Items per page: {data.items.per_page}
      </Typography>
      <Typography variant="body2" style={{ marginRight: "15px" }}>
        {data.current_page} – {data.items.count} of {data.items.total}
      </Typography>
      <IconButton
        onClick={() => onPageChange(1)}
        disabled={isFirstPage}
        aria-label="first page"
        size="small"
      >
        <FirstPageIcon fontSize="small" />
      </IconButton>
      <IconButton
        onClick={() => onPageChange(data.current_page - 1)}
        disabled={isFirstPage}
        aria-label="previous page"
        size="small"
      >
        <KeyboardArrowLeft fontSize="small" />
      </IconButton>
      <IconButton
        onClick={() => onPageChange(data.current_page + 1)}
        disabled={isLastPage}
        aria-label="next page"
        size="small"
      >
        <KeyboardArrowRight fontSize="small" />
      </IconButton>
      <IconButton
        onClick={() => onPageChange(data.last_visible_page)}
        disabled={isLastPage}
        aria-label="last page"
        size="small"
      >
        <LastPageIcon fontSize="small" />
      </IconButton>
    </Box>
  );
};

export default PaginationComponent;
