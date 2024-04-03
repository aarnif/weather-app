const conditions = {
  Sunny:
    "m-0 box-border text-slate-50 text-xl bg-sunny bg-center bg-cover 2xl:bg-no-repeat",
  "Partly cloudy":
    "m-0 box-border text-slate-50 text-xl bg-partly-cloudy bg-center bg-cover 2xl:bg-no-repeat",
  "Partly Cloudy":
    "m-0 box-border text-slate-50 text-xl bg-partly-cloudy bg-center bg-cover 2xl:bg-no-repeat",
  Cloudy:
    "m-0 box-border text-slate-50 text-xl bg-cloudy bg-center bg-cover 2xl:bg-no-repeat",
  Overcast:
    "m-0 box-border text-slate-50 text-xl bg-overcast bg-center bg-cover 2xl:bg-no-repeat",
  Mist: "m-0 box-border text-slate-50 text-xl bg-mist bg-center bg-cover 2xl:bg-no-repeat",
  "Patchy rain possible":
    "m-0 box-border text-slate-50 text-xl bg-patchy-rain-possible bg-center bg-cover 2xl:bg-no-repeat",
  "Patchy snow possible":
    "m-0 box-border text-slate-50 text-xl bg-patchy-snow-possible bg-center bg-cover 2xl:bg-no-repeat",
  "Patchy sleet possible":
    "m-0 box-border text-slate-50 text-xl bg-patchy-sleet-possible bg-center bg-cover 2xl:bg-no-repeat",
  "Patchy freezing drizzle possible":
    "m-0 box-border text-slate-50 text-xl bg-patchy-freezing-drizzle-possible bg-center bg-cover 2xl:bg-no-repeat",
  "Thundery outbreaks possible":
    "m-0 box-border text-slate-50 text-xl bg-thundery-outbreaks-possible bg-center bg-cover 2xl:bg-no-repeat",
  "Blowing snow":
    "m-0 box-border text-slate-50 text-xl bg-blowing-snow bg-center bg-cover 2xl:bg-no-repeat",
  Blizzard:
    "m-0 box-border text-slate-50 text-xl bg-blizzard bg-center bg-cover 2xl:bg-no-repeat",
  Fog: "m-0 box-border text-slate-50 text-xl bg-fog bg-center bg-cover 2xl:bg-no-repeat",
  "Freezing fog":
    "m-0 box-border text-slate-50 text-xl bg-freezing-fog bg-center bg-cover 2xl:bg-no-repeat",
  "Patchy light drizzle":
    "m-0 box-border text-slate-50 text-xl bg-patchy-light-drizzle bg-center bg-cover 2xl:bg-no-repeat",
  "Light drizzle":
    "m-0 box-border text-slate-50 text-xl bg-light-drizzle bg-center bg-cover 2xl:bg-no-repeat",
  "Freezing drizzle":
    "m-0 box-border text-slate-50 text-xl bg-freezing-drizzle bg-center bg-cover 2xl:bg-no-repeat",
  "Heavy freezing drizzle":
    "m-0 box-border text-slate-50 text-xl bg-heavy-freezing-drizzle bg-center bg-cover 2xl:bg-no-repeat",
  "Patchy light rain":
    "m-0 box-border text-slate-50 text-xl bg-patchy-light-rain bg-center bg-cover 2xl:bg-no-repeat",
  "Light rain":
    "m-0 box-border text-slate-50 text-xl bg-light-rain bg-center bg-cover 2xl:bg-no-repeat",
  "Moderate rain at times":
    "m-0 box-border text-slate-50 text-xl bg-moderate-rain-at-times bg-center bg-cover 2xl:bg-no-repeat",
  "Moderate rain":
    "m-0 box-border text-slate-50 text-xl bg-moderate-rain bg-center bg-cover 2xl:bg-no-repeat",
  "Heavy rain at times":
    "m-0 box-border text-slate-50 text-xl bg-heavy-rain-at-times bg-center bg-cover 2xl:bg-no-repeat",
  "Heavy rain":
    "m-0 box-border text-slate-50 text-xl bg-heavy-rain bg-center bg-cover 2xl:bg-no-repeat",
  "Light freezing rain":
    "m-0 box-border text-slate-50 text-xl bg-light-freezing-rain bg-center bg-cover 2xl:bg-no-repeat",
  "Moderate or heavy freezing rain":
    "m-0 box-border text-slate-50 text-xl bg-moderate-or-heavy-freezing-rain bg-center bg-cover 2xl:bg-no-repeat",
  "Light sleet":
    "m-0 box-border text-slate-50 text-xl bg-light-sleet bg-center bg-cover 2xl:bg-no-repeat",
  "Moderate or heavy sleet":
    "m-0 box-border text-slate-50 text-xl bg-moderate-or-heavy-sleet bg-center bg-cover 2xl:bg-no-repeat",
  "Patchy light snow":
    "m-0 box-border text-slate-50 text-xl bg-patchy-light-snow bg-center bg-cover 2xl:bg-no-repeat",
  "Light snow":
    "m-0 box-border text-slate-50 text-xl bg-light-snow bg-center bg-cover 2xl:bg-no-repeat",
  "Patchy moderate snow":
    "m-0 box-border text-slate-50 text-xl bg-patchy-moderate-snow bg-center bg-cover 2xl:bg-no-repeat",
  "Moderate snow":
    "m-0 box-border text-slate-50 text-xl bg-moderate-snow bg-center bg-cover 2xl:bg-no-repeat",
  "Patchy heavy snow":
    "m-0 box-border text-slate-50 text-xl bg-patchy-heavy-snow bg-center bg-cover 2xl:bg-no-repeat",
  "Heavy snow":
    "m-0 box-border text-slate-50 text-xl bg-heavy-snow bg-center bg-cover 2xl:bg-no-repeat",
  "Ice pellets":
    "m-0 box-border text-slate-50 text-xl bg-ice-pellets bg-center bg-cover 2xl:bg-no-repeat",
  "Light rain shower":
    "m-0 box-border text-slate-50 text-xl bg-light-rain-shower bg-center bg-cover 2xl:bg-no-repeat",
  "Moderate or heavy rain shower":
    "m-0 box-border text-slate-50 text-xl bg-moderate-or-heavy-rain-shower bg-center bg-cover 2xl:bg-no-repeat",
  "Torrential rain shower":
    "m-0 box-border text-slate-50 text-xl bg-torrential-rain-shower bg-center bg-cover 2xl:bg-no-repeat",
  "Light sleet showers":
    "m-0 box-border text-slate-50 text-xl bg-light-sleet-showers bg-center bg-cover 2xl:bg-no-repeat",
  "Moderate or heavy sleet showers":
    "m-0 box-border text-slate-50 text-xl bg-moderate-or-heavy-sleet-showers bg-center bg-cover 2xl:bg-no-repeat",
  "Light snow showers":
    "m-0 box-border text-slate-50 text-xl bg-light-snow-showers bg-center bg-cover 2xl:bg-no-repeat",
  "Moderate or heavy snow showers":
    "m-0 box-border text-slate-50 text-xl bg-moderate-or-heavy-snow-showers bg-center bg-cover 2xl:bg-no-repeat",
  "Light showers of ice pellets":
    "m-0 box-border text-slate-50 text-xl bg-light-showers-of-ice-pellets bg-center bg-cover 2xl:bg-no-repeat",
  "Moderate or heavy showers of ice pellets":
    "m-0 box-border text-slate-50 text-xl bg-moderate-or-heavy-showers-of-ice-pellets bg-center bg-cover 2xl:bg-no-repeat",
  "Patchy light rain with thunder":
    "m-0 box-border text-slate-50 text-xl bg-patchy-light-rain-with-thunder bg-center bg-cover 2xl:bg-no-repeat",
  "Moderate or heavy rain with thunder":
    "m-0 box-border text-slate-50 text-xl bg-moderate-or-heavy-rain-with-thunder bg-center bg-cover 2xl:bg-no-repeat",
  "Patchy light snow with thunder":
    "m-0 box-border text-slate-50 text-xl bg-patchy-light-snow-with-thunder bg-center bg-cover 2xl:bg-no-repeat",
  "Moderate or heavy snow with thunder":
    "m-0 box-border text-slate-50 text-xl bg-moderate-or-heavy-snow-with-thunder bg-center bg-cover 2xl:bg-no-repeat",
};

export default conditions;
