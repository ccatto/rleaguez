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

// Table is League1
export type Leaguez = {
  league_id: number;
  league_name: string;
  league_color: string;
  is_active: boolean;
  league_sport: number;
};

// Table is Teamz1
export type Teamz = {
  team_id: number;
  team_name: string;
  league_color: string;
  is_active: boolean;
  // _sport: number;
};

// Table is Organizationz1
export type Organizationz1 = {
  organization_id: number;
  organization_name: string;
  organization_color: string;
  is_active: boolean;
  organization_owner: string;
};