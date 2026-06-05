import { ImageResponse } from "next/og";
import { PERSON } from "./site.config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${PERSON.name} — ${PERSON.jobTitle}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#14110d",
          color: "#ece6dc",
          padding: "72px 80px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 24,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#9a8f7e",
            fontFamily: "monospace",
          }}
        >
          Student · Software Developer · Shipping in production
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 600, lineHeight: 1.05 }}>
            {PERSON.name}
          </div>
          <div style={{ fontSize: 40, color: "#cf9a5b", marginTop: 8 }}>
            {PERSON.jobTitle}
          </div>
        </div>
        <div style={{ fontSize: 26, color: "#9a8f7e", fontFamily: "monospace" }}>
          Four live business systems · POS · Ticketing · Booking · Attendance
        </div>
      </div>
    ),
    { ...size }
  );
}
