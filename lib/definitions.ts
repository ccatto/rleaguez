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
  // status: 'pending' | 'processing' | 'success' | 'failed';
  leagueName: string;
  leagueColor: string;
  isActive: boolean;
  leagueSport: number;
};
