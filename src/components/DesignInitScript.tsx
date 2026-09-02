import Script from "next/script";
import { DESIGN_STORAGE_KEY, DEFAULT_DESIGN } from "@/lib/design";
import { HEADER_STORAGE_KEY, DEFAULT_HEADER } from "@/lib/header";

export default function DesignInitScript() {
  const script = `
(function(){
  try {
    var d = localStorage.getItem(${JSON.stringify(DESIGN_STORAGE_KEY)});
    var dv = (d === 'solid' || d === 'minimal' || d === 'organic') ? d : ${JSON.stringify(DEFAULT_DESIGN)};
    document.documentElement.setAttribute('data-design', dv);
  } catch(e){
    document.documentElement.setAttribute('data-design', ${JSON.stringify(DEFAULT_DESIGN)});
  }
  try {
    var h = localStorage.getItem(${JSON.stringify(HEADER_STORAGE_KEY)});
    var hv = (h === 'glass' || h === 'solid-dark' || h === 'solid-light' || h === 'navy' || h === 'executive') ? h : ${JSON.stringify(DEFAULT_HEADER)};
    document.documentElement.setAttribute('data-header', hv);
  } catch(e){
    document.documentElement.setAttribute('data-header', ${JSON.stringify(DEFAULT_HEADER)});
  }
})();
`;

  return (
    <Script
      id="design-init"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{ __html: script }}
    />
  );
}
