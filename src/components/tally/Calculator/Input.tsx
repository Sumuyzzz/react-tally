export default function Input(text: string, output = '0') {
  switch (text) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      if (output === '0') {
        return text;
      } else {
        return output + text;
      }
    case '←':
      return output.substring(0, output.length - 1) || '0';
    case 'AC':
      return '0';
    case '.':
      if (output.indexOf('.') !== -1) {
        return output;
      }
      return output + '.';
    default:
      return '';
  }
}
