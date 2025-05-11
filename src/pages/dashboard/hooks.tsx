import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  AnimeListModel,
  AnimeListModelInitialValues,
} from "../../models/anime-model";
import {
  DialogModel,
  DialogModelInitialValues,
} from "../../models/dialog-model";
import { GetAnimeList } from "../../services/anime-services";

const useDashboardHooks = () => {
  const navigate = useNavigate();
  const location: { state: { page: number; searchAnimeName: string } } =
    useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [dialogError, setDialogError] = useState<DialogModel>(
    DialogModelInitialValues
  );
  const [searchAnimeName, setSearchAnimeName] = useState<string>(
    location.state?.searchAnimeName ?? ""
  );
  const [page, setPage] = useState(location.state?.page ?? 1);
  const [animeList, setAnimeList] = useState<AnimeListModel>(
    AnimeListModelInitialValues
  );
  const fetchAnimeList = async ({
    page,
    animeName,
  }: {
    page: number;
    animeName: string;
  }) => {
    setIsLoading(true);
    try {
      const response = await GetAnimeList({ page, animeName });
      setAnimeList(response);
      setPage(response.pagination.current_page);
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
  const handleSearch = (value: string) => {
    setPage(1);
    setSearchAnimeName(value);
  };
  const handleOnClickCard = (mal_id: string) => {
    navigate(`/detail`, { state: { mal_id, page, searchAnimeName } });
  };

  useEffect(() => {
    fetchAnimeList({ page, animeName: searchAnimeName });
  }, [page, searchAnimeName]);

  return {
    animeList,
    dialogError,
    isLoading,
    page,
    setPage,
    setDialogError,
    handleSearch,
    handleOnClickCard,
  };
};
export default useDashboardHooks;
