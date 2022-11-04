import { Weather } from 'src/interfaces/weather.interface';

export function serializeWeather(weather: Weather): string {
  const {
    results: {
      city_name,
      description,
      currently,
      date,
      time,
      temp,
      wind_speedy,
    },
  } = weather;

  const formattedDescription = description.split(' ')[1];
  const now = new Date().toLocaleTimeString('pt-br');

  return `${date}, ${now}.
  É ${currently} em ${city_name}! O tempo hoje é ${formattedDescription} com temperatura de ${temp} graus e ventos de ${wind_speedy}.
  Post feito com meu botzinho :3 github/ivanzigoni`;
}
