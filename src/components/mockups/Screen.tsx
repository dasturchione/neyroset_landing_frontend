import { getScreen, type ScreenId } from "@/data/mockups";
import { AdminScreen, AnalyticsScreen, LearningScreen, MobileScreen, OcrScreen, PosScreen, TableScreen } from "./screens";

/** Renders the code-drawn mockup for a screen id. Must be placed inside a frame (container). */
export function Screen({ id }: { id: ScreenId }) {
  const spec = getScreen(id);
  switch (spec.kind) {
    case "admin":
      return <AdminScreen spec={spec} />;
    case "table":
      return <TableScreen spec={spec} />;
    case "analytics":
      return <AnalyticsScreen spec={spec} />;
    case "mobile":
      return <MobileScreen spec={spec} />;
    case "ocr":
      return <OcrScreen spec={spec} />;
    case "learning":
      return <LearningScreen spec={spec} />;
    case "pos":
      return <PosScreen spec={spec} />;
  }
}
