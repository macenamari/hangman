export default function ReplaceSpecialCharacters(word: string) {
  return word
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
};