import supabase from "./supabase";

export async function getMenu() {
  const { data, error } = await supabase.from("menu").select("*");

  if (error) {
    console.log(error);
    throw new Error("menu data could not be loaded");
  }

  return data;
}
