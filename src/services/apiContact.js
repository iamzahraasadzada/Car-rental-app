import supabase from "./supabase";

export async function createContact(infotmation) {
  const { data, error } = await supabase.from("contact").insert([infotmation]);

  if (error) {
    console.error(error);
    throw new Error("information could not be sent");
  }

  return data;
}
