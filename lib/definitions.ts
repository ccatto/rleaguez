export type League = {
  league_id: number;
  league_name: string;
  league_link: string;
  league_image: string;
  created_date: string;
};

export type StaticLeague = {
  id: string;
  leagueId: number;
  leagueName: string;
  leagueColor: string;
  isActive: boolean;
  leagueSport: number;
};

export type Leaguez = {
  league_id: number;
  league_name: string;
  league_color: string;
  is_active: boolean;
  league_sport: number;
};
