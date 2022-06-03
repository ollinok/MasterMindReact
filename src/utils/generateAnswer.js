function randomInt(max) {
  const num = Math.floor(Math.random() * max);
  return num;
}

export default function generateAnswer(colors) {
  let answer = [];
    for (let i=0;i<4;i++){
      answer[i] = colors[randomInt(colors.length)];
    }
  return answer
}
