import Image from "next/image";
import type { ScreenId } from "@/data/mockups";
import type { ImageAsset } from "@/types/common";
import { BrowserFrame, LaptopFrame, PhoneFrame } from "./frames";
import { Screen } from "./Screen";

type Device = "laptop" | "phone" | "browser";

type DeviceMockupProps = {
  device: Device;
  screen: ScreenId;
  image?: ImageAsset;
  className?: string;
  /** `sizes` hint for real screenshots. */
  sizes?: string;
};

/** A screen inside a device frame. Uses a real screenshot when one is supplied. */
export function DeviceMockup({ device, screen, image, className, sizes = "(min-width: 1024px) 50vw, 100vw" }: DeviceMockupProps) {
  const content = image ? (
    <Image src={image.src} alt={image.alt} fill sizes={sizes} className="object-cover object-top" />
  ) : (
    <Screen id={screen} />
  );

  if (device === "phone") return <PhoneFrame className={className}>{content}</PhoneFrame>;
  if (device === "browser") return <BrowserFrame className={className}>{content}</BrowserFrame>;
  return <LaptopFrame className={className}>{content}</LaptopFrame>;
}
