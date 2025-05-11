import { AxiosInstance } from "../helper/axios-instance-constant";
import { AnimeDetailModel, AnimeListModel } from "../models/anime-model";

export const GetAnimeList = async ({
  page,
  animeName,
}: {
  page: number;
  animeName: string;
}) => {
  interface ApiResponse {
    data: AnimeListModel;
  }
  try {
    const response: ApiResponse = await AxiosInstance.get(
      `/anime?page=${page}&q=${animeName}`
    );
    return response.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch anime list: ${error.message}`);
  }
};

export const GetAnimeDetail = async (mal_id: string) => {
  interface ApiResponse {
    data: AnimeDetailModel;
  }
  try {
    const response: ApiResponse = await AxiosInstance.get(
      `/anime/${mal_id}/full`
    );
    return response.data.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch anime detail: ${error.message}`);
  }
};
