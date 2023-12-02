import supabase from "./supabase";

export async function createPickCar(newOrder) {
  const { data, error } = await supabase.from("pickCar").insert([newOrder]);

  if (error) {
    console.error(error);
    throw new Error("New order could not be created");
  }

  return data;
}
