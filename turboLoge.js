 export const turboLoge = (mensagem, textCollor = 'blue') => {
  const texStyle = `color: ${textCollor}`;
  console.log(`%c${mensagem}`, texStyle);
};