import type { CSSProperties } from 'react';
import SmoothScroll from "@/components/SmoothScroll";
import MainContent from "@/components/MainContent";

export default function FramerRoot() {
  return (
    <div
      data-framer-root={""}
      className={"framer-GrwXV framer-U5bhW framer-WrChI framer-eGumK framer-7a2L8 framer-WBWD1 framer-1523gqx"}
      style={{"minHeight": "100vh", "width": "auto", "display": "contents"} as CSSProperties}
    >
      <SmoothScroll />
      <MainContent />
    </div>
  );
}
