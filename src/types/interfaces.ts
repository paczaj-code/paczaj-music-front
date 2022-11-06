export interface ImageTypes {
  albumId?: number | undefined;
  image_size?: 'big' | 'small' | undefined;
  small_image_url: string | undefined;
  medium_image_url: string | undefined;
  onClick?: React.MouseEventHandler;
}

export interface WikipediaDataTypes {
  description: string | undefined;
  image: string | undefined;
}

export interface ArtistDataTypes {
  artist_name: string | undefined;
  artist_type: string;
  begin_date_year: number | undefined;
  country: string;
  country_code: string;
  end_date_year: number | undefined;
  tags: string[] | [] | undefined;
  wikipedia_suffix: string | undefined;
  wikipedia_data: { description: string | undefined };
}

export interface YoutubeMovieTypes {
  medium_image_url: string | undefined;
  small_image_url: string | undefined;
  title: string | undefined;
  youtube_id: string | undefined;
  onClick?: React.MouseEventHandler;
}

// export interface ReleaseTypes {
//   first_release_date: number | undefined;
//   front_small: string | undefined;
//   id: number;
//   name: string;
// }

// export interface TrackTypes {
//   id?: number;
//   name: string | null;
//   position: number | null;
//   length_minutes: string | null;
// }

// interface ReleaseInfo {
//   id: number;
//   release_name: string | undefined;
//   artist: string | undefined;
//   track_count: number | null;
//   front_big: string | undefined;
//   total_time: string | null;
//   release_year: number | null;
// }

// export interface ReleaseDetailsTypes {
//   tracks: TrackTypes[] | undefined;
//   releaseInfo: ReleaseInfo | undefined;
// }
