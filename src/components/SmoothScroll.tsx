import type { CSSProperties } from 'react';

export default function SmoothScroll() {
  return (
    <div
      data-framer-name={"Smooth Scroll"}
      name={"Smooth Scroll"}
      className={"framer-qdjtrg-container"}
      style={{"transform": "translateX(-50%)"} as CSSProperties}
      dangerouslySetInnerHTML={{ __html: "<!--$--><link href=\"https://unpkg.com/lenis@1.3.19/dist/lenis.css\" rel=\"stylesheet\"><!--/$-->" }}
    />
  );
}
