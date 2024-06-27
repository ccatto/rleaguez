export type StaticLeague = {
  id: string;
  leagueId: number;
  // status: 'pending' | 'processing' | 'success' | 'failed';
  leagueName: string;
  leagueColor: string;
  isActive: boolean;
  leagueSport: number;
};

export const staticleague: StaticLeague[] = [
  {
    "id": "1",
    "leagueId": 12,
    "leagueName": "Blue League",
    "leagueColor": "Blue",
    "isActive": true,
    "leagueSport": 1,
  },
  {
    "id": "11",
    "leagueId": 123,
    "leagueName": "zah League",
    "leagueColor": "BlueOrange",
    "isActive": true,
    "leagueSport": 2,
  },
  {
    "id": "13",
    "leagueId": 124,
    "leagueName": "Blue League 3",
    "leagueColor": "BlueBlack",
    "isActive": true,
    "leagueSport": 18,
  },
  {
    "id": "121",
    "leagueId": 1223,
    "leagueName": "Kelly League",
    "leagueColor": "BlueOrange",
    "isActive": true,
    "leagueSport": 3,
  },
  // ...
];


// "id": "1",
// "leagueId": "",
// "leagueName": "Blue League",
// "leagueColor": "Blue",
// "isActive": true,
// "leagueSport": 1
