import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

type OgInput = {
  eyebrow: string;
  title: string;
  description: string;
};

/** Shared branded Open Graph card used by the root and project images. */
export async function renderOgImage({ eyebrow, title, description }: OgInput) {
  const logo = await readFile(join(process.cwd(), "public/brand/neyroset-logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #ffffff 0%, #eef2ff 55%, #e2e8ff 100%)",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -160,
            top: -160,
            width: 620,
            height: 620,
            borderRadius: 9999,
            background: "radial-gradient(closest-side, rgba(61,92,246,0.28), rgba(122,92,250,0.08), transparent)",
          }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse only supports <img> */}
        <img src={logoSrc} width={258} height={60} alt="Neyroset" />

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 940 }}>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              padding: "10px 20px",
              borderRadius: 9999,
              border: "2px solid #c5d2ff",
              background: "rgba(255,255,255,0.7)",
              color: "#1734c9",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            {eyebrow}
          </div>
          <div style={{ marginTop: 28, fontSize: 68, fontWeight: 800, lineHeight: 1.05, color: "#0b1035", letterSpacing: -2.5 }}>
            {title}
          </div>
          <div style={{ marginTop: 24, fontSize: 28, lineHeight: 1.4, color: "#464e6a" }}>{description}</div>
        </div>
      </div>
    ),
    ogSize,
  );
}
