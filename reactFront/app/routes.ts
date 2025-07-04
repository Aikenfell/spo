import {
  type RouteConfig,
  route,
  index,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default [
//   index("./routes/home.tsx"),
  index("./core/LandingPage.jsx"),
//   route("about", "./about.tsx"),
//   route("test", ".//about.tsx"),
    route("login", "./oauth2/login.jsx"),
    route("register", "./oauth2/register.jsx"),
    // route("oauth", "./oauth2/oauth.jsx"),

//   layout("./auth/layout.tsx", [
//     route("login", "./auth/login.tsx"),
//     route("register", "./auth/register.tsx"),
//   ]),

  ...prefix("entityOne", [
    index("./entityOne/combined.jsx"),
//     route(":city", "./concerts/city.tsx"),
//     route("trending", "./concerts/trending.tsx"),
  ]),
  ...prefix("warehouse", [
    index("./warehouse/combined.jsx"),
    route(":warehouseID", "./warehouse/warehouseManage.jsx"),
//     route("trending", "./concerts/trending.tsx"),
  ]),
] satisfies RouteConfig;