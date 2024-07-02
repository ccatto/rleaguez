export const getLeagueData = async (slug: any) => {
  // console.log('FETCH api v2 inside get data for league by slug ');
  // console.log("url = ", process.env.NEXT_PUBLIC_BASE_URL + '/api/v2/league/'+slug)
  const leagueResponse = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + '/api/v2/league/' + slug,
    {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
      // body: JSON.stringify(data),
    },
  );
  // console.log('leagueResponse 8383 === ', leagueResponse.json());
  const data = await leagueResponse.json();
  // console.log('data now === ', data);
  return data;
};
