import morseCodeMap from './morseCodeMap';

const morseToNaturalMap: Record<string, string> = Object.fromEntries(
  Object.entries(morseCodeMap).map(([letter, morse]) => [morse, letter])
);

function textToMorse(text: string): string {
  return text
    .toUpperCase()
    .split('')
    .map((char) => morseCodeMap[char] || '')
    .join(' ');
}

function morseToText(morse: string): string {
  return morse
    .split('  ')
    .map((word) =>
      word
        .split(' ')
        .map((code) => morseToNaturalMap[code] || '')
        .join('')
    )
    .join(' ');
}

const args = process.argv.slice(2);

if (args.length < 2) {
  console.log('Uso: node morseTraductor.ts <modo> <texto>');
  console.log(
    "  <modo>: 'encode' para texto a Morse, 'decode' para Morse a texto"
  );
  console.log('  <texto>: Texto o código Morse a traducir');
  process.exit(1);
}

const mode = args[0];
const input = args.slice(1).join(' ');

if (mode === 'encode') {
  console.log('Morse:', textToMorse(input));
} else if (mode === 'decode') {
  console.log('Texto:', morseToText(input));
} else {
  console.log("Modo no reconocido. Usa 'encode' o 'decode'.");
}
