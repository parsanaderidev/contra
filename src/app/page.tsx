import mainInnerHTML from "./blob/main-inner";
import SvgTemplates from "@/components/SvgTemplates";
import FramerRuntime from "@/components/FramerRuntime";
import CreditFooter from "@/components/CreditFooter";

const hydrate = {
  routeId: "CEGgZgA96",
  localeId: "default",
  breakpoints: [
    { hash: "1523gqx", mediaQuery: "(min-width: 1600px)" },
    { hash: "tg3joy", mediaQuery: "(min-width: 1200px) and (max-width: 1599.98px)" },
    { hash: "1pqjven", mediaQuery: "(min-width: 810px) and (max-width: 1199.98px)" },
    { hash: "vm8aph", mediaQuery: "(max-width: 809.98px)" },
    { hash: "eg4zwo", mediaQuery: "(min-width: 1600px)" },
    { hash: "145u4y0", mediaQuery: "(min-width: 1200px) and (max-width: 1599.98px)" },
    { hash: "1uhti4o", mediaQuery: "(min-width: 810px) and (max-width: 1199.98px)" },
    { hash: "1xr5c9s", mediaQuery: "(max-width: 809.98px)" },
  ],
};

export default function Home() {
  return (
    <>
      <div
        id="main"
        data-framer-hydrate-v2={JSON.stringify(hydrate)}
        data-framer-ssr-released-at={"2026-08-06T12:57:44.116Z"}
        data-framer-page-optimized-at={"2026-08-07T18:34:06.613Z"}
        data-framer-generated-page={""}
        dangerouslySetInnerHTML={{ __html: mainInnerHTML }}
      />
      <SvgTemplates />
      <FramerRuntime />
      <CreditFooter />
    </>
  );
}