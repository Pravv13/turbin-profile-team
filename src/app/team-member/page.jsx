const getTeamMembers = async () => {
  const apiUrl = 'https://api.jikan.moe/v4/anime';
  const response = await fetch(apiUrl);
  const data = await response.json();

  return data.data;
}

export default async function TeamMemberPage() {
  const teamMembers = await getTeamMembers();

  return (
    <section>
      <nav className="w-full px-6 py-4 bg-slate-100">
        <h1 className="text-5xl">meet the teams</h1>
      </nav>
      {
        teamMembers.map((teamMember) => (
          <div key={teamMember.mal_id}>{teamMember.title}</div>
        ))
      }
    </section>
  )
}