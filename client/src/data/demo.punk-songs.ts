import { createServerFn } from "@tanstack/react-start";

export const getPunkSongs = createServerFn({
  method: "GET",
}).handler(async () => [
  { id: 1, name: "Teenage Dirtbag", artist: "Wheatus" },
  { id: 2, name: "We Begged to Explode", artist: "Jeff Rosenstock" },
  { id: 3, name: "Resevoir", artist: "PUP" },
  { id: 4, name: "I Was A Teenage Anarchist", artist: "Against Me" },
  { id: 5, name: "Bad Brains", artist: "I Against I" },
  { id: 6, name: "Adam's Song", artist: "Blink-182" },
  { id: 7, name: "Helena", artist: "My Chemical Romance" },
]);
