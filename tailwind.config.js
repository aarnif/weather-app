/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./dist/*.html", "./src/**/*.js"],
  theme: {
    extend: {
      keyframes: {
        emergeFromUp: {
          "0%": { opacity: "0", transform: "translateY(-50px)" },
          "50%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        emergeFromDown: {
          "0%": { opacity: "0", transform: "translateY(50px)" },
          "50%": { opacity: "0", transform: "translateY(50px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        emergeFromLeft: {
          "0%": { opacity: "0", transform: "translateX(-50px)" },
          "50%": { opacity: "0", transform: "translateX(-50px)" },
          "75%": { opacity: "0", transform: "translateX(-50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        emergeFromRight: {
          "0%": { opacity: "0", transform: "translateX(50px)" },
          "50%": { opacity: "0", transform: "translateX(50px)" },
          "75%": { opacity: "0", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        rotateAndScale: {
          "0%": { opacity: "0", transform: "rotate(0) scale(1)" },
          "100%": { opacity: "1", transform: "rotate(360deg) scale(1.5)" },
        },
      },
      animation: {
        "emerge-up": "emergeFromUp 1s ease-in-out",
        "emerge-down": "emergeFromDown 1s ease-in-out",
        "emerge-left": "emergeFromLeft 1s ease-in-out",
        "emerge-right": "emergeFromRight 1s ease-in-out",
        "rotate-and-scale": "rotateAndScale 500ms ease-in-out forwards",
      },
      backgroundImage: {
        default: "url('assets/images/backgrounds/default.png')",
        // "patchy-sleet-possible":
        //   "url('assets/images/backgrounds/patchy_sleet_possible.png')",
        "blowing-snow": "url('assets/images/backgrounds/snow.png')",
        "light-snow": "url('assets/images/backgrounds/snow.png')",
        // "patchy-freezing-drizzle-possible":
        //   "url('assets/images/backgrounds/patchy_freezing_drizzle_possible.png')",
        "patchy-heavy-snow": "url('assets/images/backgrounds/snow.png')",
        "heavy-snow": "url('assets/images/backgrounds/snow.png')",
        // "light-drizzle": "url('assets/images/backgrounds/light_drizzle.png')",
        // "moderate-or-heavy-sleet-showers":
        //   "url('assets/images/backgrounds/moderate_or_heavy_sleet_showers.png')",
        "heavy-rain": "url('assets/images/backgrounds/rain.png')",
        "patchy-light-rain": "url('assets/images/backgrounds/rain.png')",
        // "heavy-freezing-drizzle":
        //   "url('assets/images/backgrounds/heavy_freezing_drizzle.png')",
        // "light-snow-showers": "url('assets/images/backgrounds/snow.png')",
        // "light-sleet-showers":
        //   "url('assets/images/backgrounds/light_sleet_showers.png')",
        "patchy-moderate-snow": "url('assets/images/backgrounds/snow.png')",
        // "light-freezing-rain":
        //   "url('assets/images/backgrounds/light_freezing_rain.png')",
        "moderate-or-heavy-snow-showers":
          "url('assets/images/backgrounds/snow.png')",
        // "moderate-or-heavy-showers-of-ice-pellets":
        //   "url('assets/images/backgrounds/moderate_or_heavy_showers_of_ice_pellets.png')",
        // "thundery-outbreaks-possible":
        //   "url('assets/images/backgrounds/thundery_outbreaks_possible.png')",
        mist: "url('assets/images/backgrounds/mist.png')",
        // clear: "url('assets/images/backgrounds/clear.png')",
        "torrential-rain-shower": "url('assets/images/backgrounds/rain.png')",
        sunny: "url('assets/images/backgrounds/sunny.png')",
        blizzard: "url('assets/images/backgrounds/snow.png')",
        // "patchy-light-drizzle":
        //   "url('assets/images/backgrounds/patchy_light_drizzle.png')",
        "patchy-rain-possible": "url('assets/images/backgrounds/rain.png')",
        "moderate-or-heavy-rain-shower":
          "url('assets/images/backgrounds/rain.png')",
        "moderate-snow": "url('assets/images/backgrounds/snow.png')",
        overcast: "url('assets/images/backgrounds/overcast.png')",
        // "moderate-or-heavy-sleet":
        //   "url('assets/images/backgrounds/moderate_or_heavy_sleet.png')",
        cloudy: "url('assets/images/backgrounds/cloudy.png')",
        // "freezing-fog": "url('assets/images/backgrounds/freezing_fog.png')",
        "patchy-light-rain-with-thunder":
          "url('assets/images/backgrounds/rain_thunder.png')",
        "patchy-snow-possible": "url('assets/images/backgrounds/snow.png')",
        // "patchy-light-snow-with-thunder":
        //   "url('assets/images/backgrounds/snow_thunder.png')",
        // "ice-pellets": "url('assets/images/backgrounds/ice_pellets.png')",
        // "moderate-or-heavy-snow-with-thunder":
        //   "url('assets/images/backgrounds/snow_thunder.png')",
        "light-rain": "url('assets/images/backgrounds/rain.png')",
        "moderate-rain": "url('assets/images/backgrounds/rain.png')",
        "partly-cloudy": "url('assets/images/backgrounds/cloudy.png')",
        fog: "url('assets/images/backgrounds/fog.png')",
        // "freezing-drizzle":
        //   "url('assets/images/backgrounds/freezing_drizzle.png')",
        // "light-showers-of-ice-pellets":
        //   "url('assets/images/backgrounds/light_showers_of_ice_pellets.png')",
        "heavy-rain-at-times": "url('assets/images/backgrounds/rain.png')",
        "light-rain-shower": "url('assets/images/backgrounds/rain.png')",
        "moderate-rain-at-times": "url('assets/images/backgrounds/rain.png')",
        // "light-sleet": "url('assets/images/backgrounds/light_sleet.png')",
        // "moderate-or-heavy-freezing-rain":
        // "url('assets/images/backgrounds/moderate_or_heavy_freezing_rain.png')",
        "patchy-light-snow": "url('assets/images/backgrounds/snow.png')",
        "moderate-or-heavy-rain-with-thunder":
          "url('assets/images/backgrounds/rain_thunder.png')",
      },
    },
  },
  plugins: [],
};
