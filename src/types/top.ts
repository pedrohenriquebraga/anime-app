export interface TopPaginationItems {
  count: number;
  total: number;
  per_page: number;
}

export interface TopPagination {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
  items: TopPaginationItems;
}

export interface TopImageSet {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

export interface TopAnimeImages {
  jpg: TopImageSet;
  webp: TopImageSet;
}

export interface TopTrailerImages {
  image_url: string;
  small_image_url: string;
  medium_image_url: string;
  large_image_url: string;
  maximum_image_url: string;
}

export interface TopTrailerRegionRestriction {
  allowed: string[];
}

export interface TopTrailer {
  youtube_id: string;
  url: string;
  embed_url: string;
  images: TopTrailerImages;
  title: string;
  views: number;
  likes: number;
  dislikes: number;
  comment_count: number;
  published_at: string;
  duration: string;
  privacy_status: string;
  region_restriction: TopTrailerRegionRestriction | null;
  embeddable: boolean;
}

export interface TopTitle {
  type: string;
  title: string;
}

export interface TopAiredPropDate {
  day: number | null;
  month: number | null;
  year: number | null;
}

export interface TopAired {
  from: string;
  to: string | null;
  prop: {
    from: TopAiredPropDate;
    to: TopAiredPropDate;
  };
  string: string;
}

export interface TopBroadcast {
  day: string;
  time: string;
  timezone: string;
  string: string;
}

export interface TopEntity {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface TopAnimeItem {
  mal_id: number;
  url: string;
  images: TopAnimeImages;
  trailer: TopTrailer;
  approved: boolean;
  titles: TopTitle[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired: TopAired;
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string | null;
  season: string;
  year: number;
  broadcast: TopBroadcast;
  producers: TopEntity[];
  licensors: TopEntity[];
  studios: TopEntity[];
  genres: TopEntity[];
  explicit_genres: TopEntity[];
  themes: TopEntity[];
  demographics: TopEntity[];
}

export interface TopResponse {
  pagination: TopPagination;
  data: TopAnimeItem[];
}
