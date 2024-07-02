// GET Team Data
export const getTeamData = async () => {
  // console.log('inside get team data ');
  const teamResponse = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + '/api/v2/league',
    {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
      // body: JSON.stringify(data),
    },
  );
  const data = await teamResponse.json();
  return data;
};
