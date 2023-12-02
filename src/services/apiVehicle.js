import supabase from "./supabase";

export async function getVehicle() {
  const { data: vehicle } = await supabase.from("vehicle").select("*");

  return vehicle;
}
