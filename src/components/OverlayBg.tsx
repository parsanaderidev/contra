import type { CSSProperties } from 'react';

export default function OverlayBg() {
  return (
    <div
      id={"overlay"}
      dangerouslySetInnerHTML={{ __html: "" }}
    />
  );
}
