import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

/**
 * Rudimentary thumbnail image generator.
 *
 * @returns {ImageResponse} - The thumbnail image.
 */
export function getThumbnailImage(): ImageResponse {
  const today = new Date();
  const dayName = daysOfWeek[today.getDay()];
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 88,
          background: "#000",
          color: "#fafafa",
        }}
      >
        Happy {dayName}!
      </div>
    ),
    {
      ...size,
    },
  );
}
