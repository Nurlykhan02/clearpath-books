import Script from "next/script";

/** Blocks page flash; auto-releases after 3.5s if client JS is slow or blocked. */
export default function SplashInitScript() {
  const script = `
(function(){
  try {
    document.documentElement.classList.add('splash-pending');
    setTimeout(function(){
      document.documentElement.classList.remove('splash-pending');
      document.body.classList.remove('splash-active');
    }, 3500);
  } catch(e){}
})();
`;

  return (
    <Script
      id="splash-init"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{ __html: script }}
    />
  );
}
