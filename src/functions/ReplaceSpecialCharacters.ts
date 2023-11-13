export default function ReplaceSpecialCharacters(word: string) {
  const a = /[àáâãÁÀÂÃ]/i;
  const e = /[éêÉÊ]/i;
  const i = /[íÍ]/i;
  const o = /[óôõÓÕÔ]/i;
  const u = /[úüÚÜ]/i;
  const c = /[çÇ]/;

  if(a.test(word.toLowerCase())){
    word = word.replace(a, "a");
  }
  if(e.test(word.toLowerCase())){
    word = word.replace(e, "e");
  }
  if(i.test(word.toLowerCase())){
    word = word.replace(i, "i");
  }
  if(o.test(word.toLowerCase())){
    word = word.replace(o, "o");
  }
  if(u.test(word.toLowerCase())){
    word = word.replace(u, "u");
  }
  if(c.test(word.toLowerCase())){
    word = word.replace(c, "c");
  }
  return word;
};