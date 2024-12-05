import { ImageResponse } from "next/og";
import { APP_NAME, APP_TITLE, OG_BACKGROUND_COLOR } from "@/app/config";

export const runtime = "edge";

export const alt = `${APP_TITLE} - ${APP_NAME}`;
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  const interSemiBold = fetch(
    new URL("./fonts/Inter-SemiBold.ttf", import.meta.url),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          background: OG_BACKGROUND_COLOR,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "40px",
        }}>
        <h1
          style={{
            fontSize: 92,
            lineHeight: 1,
            padding: "0px",
            margin: "0px",
          }}>
          {APP_TITLE}
        </h1>
        <p
          style={{
            fontSize: 60,
            lineHeight: 1,
            padding: "0px",
            margin: "0px",
          }}>
          {APP_NAME}
        </p>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: await interSemiBold,
          style: "normal",
          weight: 600,
        },
      ],
    },
  );
}
