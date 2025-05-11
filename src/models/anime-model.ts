export interface AnimeListModel {
  data: AnimeModel[];
  pagination: PaginationModel;
}
export const AnimeListModelInitialValues: AnimeListModel = {
  data: [],
  pagination: {
    last_visible_page: 1,
    has_next_page: false,
    current_page: 1,
    items: {
      count: 0,
      total: 0,
      per_page: 10,
    },
  },
};

export interface AnimeDetailModel {
  data: AnimeModel;
}
export interface AnimeModel {
  mal_id: number;
  url: string;
  images: Images;
  trailer: Trailer;
  approved: boolean;
  titles: Title[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired: Aired;
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: string;
  year: number;
  broadcast: Broadcast;
  producers: Entity[];
  licensors: Entity[];
  studios: Entity[];
  genres: Entity[];
  explicit_genres: Entity[];
  themes: Entity[];
  demographics: Entity[];
}

export interface Images {
  jpg: ImageVariant;
  webp: ImageVariant;
}

export interface ImageVariant {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

export interface Trailer {
  youtube_id: string;
  url: string;
  embed_url: string;
}

export interface Title {
  type: string;
  title: string;
}

export interface Aired {
  from: string;
  to: string;
  prop: {
    from: AirDate;
    to: AirDate;
    string: string;
  };
}

export interface AirDate {
  day: number;
  month: number;
  year: number;
}

export interface Broadcast {
  day: string;
  time: string;
  timezone: string;
  string: string;
}

export interface Entity {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface PaginationModel {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
  items: {
    count: number;
    total: number;
    per_page: number;
  };
}
