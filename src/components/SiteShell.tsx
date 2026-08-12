import type { CSSProperties } from 'react';
import Texture from "@/components/Texture";
import FramerRoot from "@/components/FramerRoot";
import OverlayBg from "@/components/OverlayBg";
import MobileMenu from "@/components/MobileMenu";
import TopNav from "@/components/TopNav";
import LogoBanner from "@/components/LogoBanner";
import Footer from "@/components/Footer";

export default function SiteShell() {
  return (
    <div
      data-layout-template={"true"}
      className={"framer-Ziygi framer-eg4zwo"}
      style={{"minHeight": "100vh", "width": "auto"} as CSSProperties}
    >
      <Texture />
      <FramerRoot />
      <OverlayBg />
      <MobileMenu />
      <TopNav />
      <LogoBanner />
      <Footer />
    </div>
  );
}
