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

  return <script id="splash-init" dangerouslySetInnerHTML={{ __html: script }} />;
}
