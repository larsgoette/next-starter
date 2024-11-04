import type { MetadataRoute } from "next";
import {
  APP_DESCRIPTION,
  APP_NAME,
  THEME_COLOR,
  LOADING_BACKGROUND_COLOR,
} from "./config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: APP_NAME,
    short_name: APP_NAME,
    description: APP_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: LOADING_BACKGROUND_COLOR,
    theme_color: THEME_COLOR,
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
