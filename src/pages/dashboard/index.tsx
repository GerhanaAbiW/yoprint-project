import { Box, CircularProgress } from "@mui/material";
import PaginationComponent from "src/components/pagination-component";
import SearchBarComponent from "src/components/search-bar-component";
import CardListComponent from "../../components/card-list-component";
import DialogErrorComponent from "../../components/dialog-error-component";
import useDashboardHooks from "./hooks";

const Dashboard = () => {
  const {
    animeList,
    isLoading,
    dialogError,
    setPage,
    setDialogError,
    handleSearch,
    handleOnClickCard,
  } = useDashboardHooks();
  return (
    <>
      <DialogErrorComponent
        open={dialogError.open}
        onClose={() => setDialogError((prev) => ({ ...prev, open: false }))}
        message="Terjadi kesalahan pada sistem. Silakan coba lagi."
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          width: "1200px",
          margin: "auto",
          paddingBottom: "20px",
        }}
      >
        <SearchBarComponent onSearch={handleSearch} height={35} />
        {isLoading ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
          >
            <CircularProgress />
          </Box>
        ) : (
          <CardListComponent
            data={animeList.data}
            onClickCard={handleOnClickCard}
          />
        )}
      </div>
      <PaginationComponent
        data={animeList.pagination}
        onPageChange={(newPage) => setPage(newPage)}
      />
    </>
  );
};

export default Dashboard;
