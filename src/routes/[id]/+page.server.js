export async function load({ url, params }) {
    const memberResponse = await fetch (`https://fdnd.directus.app/items/person/${params.id}?fields=name,bio,avatar,squads.*.*`);
    const memberData = await memberResponse.json();

    return {member: memberData.data};
}