/* eslint-disable no-unused-vars */
import supabase, { supabaseUrl } from "./supabase";
// import supabaseUrl from "./supabase";

export async function getCabins() {
  //from("cabins") => name of table, select("*") => all feilds
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error(`Cabins could not be loaded`);
  }
  return data;
}

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath ? newCabin.image : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  //https://gpjeipjsboqtxecoiqvo.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg

  // 1. Create/Edit Cabin
  let query = supabase.from("cabins");
  if (!id) {
    // we use id to check if we have id so we use edit, if not we use create
    // A) CREATE
    query = query.insert([{ ...newCabin, image: imagePath }]).select();
  }

  // B) EDIT:
  if(id){
    //without array in update
    query = query
      .update({ ...newCabin, image: imagePath })
      .eq("id", id)
      .select();
  }

  const { data, error } = await query.select().single();

  if (error) {
    throw new Error("Cabin could not be inserted");
  }

  // 2.Upload image
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  // 3.Delete the cabin if there was an error uploading image
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    throw new Error(
      "Cabin image could not be uploaded and the cabin not be created"
    );
  }
  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }

  return data;
}
