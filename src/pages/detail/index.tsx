import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Box, CircularProgress } from "@mui/material";
import React from "react";
import CardDetailComponent from "src/components/card-detail-component";
import ButtonComponent from "../../components/button-component";
import DialogErrorComponent from "../../components/dialog-error-component";
import useDetailHooks from "./hooks";
const Detail: React.FC = () => {
  const { animeDetail, isLoading, dialogError, setDialogError, handleBack } =
    useDetailHooks();

  let content;

  if (isLoading) {
    content = (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <CircularProgress />
      </Box>
    );
  } else if (!animeDetail) {
    content = (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <h2>No data exists</h2>
      </Box>
    );
  } else {
    content = (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          width: "1200px",
          margin: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 20,
          }}
        >
          <img
            alt={animeDetail.title}
            src={animeDetail.images.jpg.image_url}
            style={{
              height: "100%",
              width: 200,
              objectFit: "cover",
              borderRadius: 8,
              display: "block",
            }}
          />
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div>
              <span style={{ fontWeight: "bold", fontSize: "24px" }}>
                Synopsis
              </span>
              <p>{animeDetail.synopsis}</p>
              <div
                style={{
                  display: "flex",
                  gap: 20,
                  flexWrap: "wrap",
                  paddingTop: "20px",
                }}
              >
                <CardDetailComponent
                  color="#E3F2FC"
                  titleStyle={{ color: "#003F9C" }}
                  title={animeDetail.score}
                  subtitleStyle={{ color: "#5597FB" }}
                  subtitle={`${animeDetail.scored_by} USERS`}
                />
                <CardDetailComponent
                  color="#F3E5F5"
                  titleStyle={{ color: "#461588" }}
                  title={`#${animeDetail.rank}`}
                  subtitleStyle={{ color: "#E26CF7" }}
                  subtitle={`RANKED`}
                />
                <CardDetailComponent
                  color="#FBE4EC"
                  titleStyle={{ color: "#85104E" }}
                  title={`#${animeDetail.popularity}`}
                  subtitleStyle={{ color: "#FC5B93" }}
                  subtitle={`POPULARITY`}
                />
                <CardDetailComponent
                  color="#E1F2F1"
                  titleStyle={{ color: "#06675A" }}
                  title={`#${animeDetail.members}`}
                  subtitleStyle={{ color: "#46C9B5" }}
                  subtitle={`MEMBERS`}
                />
              </div>
            </div>
          </div>
        </div>
        <ButtonComponent
          text="Back"
          startIcon={<ArrowBackIosNewIcon />}
          onClick={handleBack}
          width={150}
          height={40}
          style={{ backgroundColor: "#673AB7" }}
        />
      </div>
    );
  }

  return (
    <>
      <DialogErrorComponent
        open={dialogError.open}
        onClose={() => setDialogError((prev) => ({ ...prev, open: false }))}
        message="Terjadi kesalahan pada sistem. Silakan coba lagi."
      />
      {content}
    </>
  );
};

export default Detail;
