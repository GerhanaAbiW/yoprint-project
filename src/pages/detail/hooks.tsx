import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AnimeModel } from "src/models/anime-model";
import { DialogModel, DialogModelInitialValues } from "src/models/dialog-model";
import { GetAnimeDetail } from "src/services/anime-services";

const useDetailHooks = () => {
  const navigate = useNavigate();
  const location: {
    state: { mal_id: number; page: number; searchAnimeName: string };
  } = useLocation();
  const mal_id = location.state?.mal_id;
  const page = location.state?.page;
  const searchAnimeName = location.state?.searchAnimeName;
  const [isLoading, setIsLoading] = useState(false);
  const [dialogError, setDialogError] = useState<DialogModel>(
    DialogModelInitialValues
  );
  const [animeDetail, setAnimeDetail] = useState<AnimeModel>();
  const fetchAnimeDetail = async (mal_id: number) => {
    setIsLoading(true);
    try {
      const response = await GetAnimeDetail(mal_id.toString());
      setAnimeDetail(response);
    } catch (error: any) {
      setDialogError((prev) => ({
        ...prev,
        open: true,
        message:
          error?.message ?? "Terjadi kesalahan pada sistem. Silakan coba lagi.",
      }));
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    navigate("/", { state: { searchAnimeName, page } });
  };

  useEffect(() => {
    fetchAnimeDetail(mal_id);
  }, [mal_id]);

  return {
    animeDetail,
    isLoading,
    dialogError,
    setDialogError,
    handleBack,
  };
};

export default useDetailHooks;
