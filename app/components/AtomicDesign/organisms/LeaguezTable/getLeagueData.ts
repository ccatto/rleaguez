export const getLeagueData = async () => {
  console.log('inside get league data ');
  const leagueResponse = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + '/api/v2/league',
    {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
      // body: JSON.stringify(data),
    },
  );
  // console.log('leagueResponse === ', leagueResponse);
  const data = await leagueResponse.json();
  // console.log('data now === ', data);
  return data;
};
