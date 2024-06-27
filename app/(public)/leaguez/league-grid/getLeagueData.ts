export const getLeagueData = async () => {
  console.log('inside ');
  const leagueResponse = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + '/api/league',
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
