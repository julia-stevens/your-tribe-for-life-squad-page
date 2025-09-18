export async function load({ url }) {
  const sort = url.searchParams.get("sort") || "name"; // default sorteren op naam

  const baseUrl = "https://fdnd.directus.app/items/person";
  const fields = "*,squads.squad_id.name,squads.squad_id.cohort,squads.squad_id.tribe.name";
  const filters = "filter[squads][squad_id][cohort][_eq]=2526&filter[squads][squad_id][tribe][name][_eq]=FDND%20Jaar%202";

  let fetchUrl;

  if (sort === "name") {
    fetchUrl = `${baseUrl}?fields=${fields}&${filters}&sort=name`;
  } else if (sort === "age") {
    fetchUrl = `${baseUrl}?fields=${fields}&${filters}&sort=birthdate`;
  } else {
    fetchUrl = `${baseUrl}?fields=${fields}&${filters}&sort=name`;
  }

  const membersResponse = await fetch(fetchUrl);
  const membersData = await membersResponse.json();

  return {
    members: membersData.data,
    sort
  };
}