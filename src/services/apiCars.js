import supabase from "./supabase";

export async function getCars() {
  const { data: cars, error } = await supabase.from("cars").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cars could not be loaded");
  }

  return cars;
}

export async function getCar(id) {
  const { data: car, error } = await supabase
    .from("cars")
    .select("*")
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cars could not be loaded");
  }

  return car;
}
