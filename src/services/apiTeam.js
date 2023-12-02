import supabase from "./supabase";

export async function getTeam() {
  const { data: team } = await supabase.from("team").select("*");

  return team;
}
