import Script from "next/script";
import { STORAGE_KEY } from "@/lib/theme";

export default function ThemeInitScript() {
  const script = `
(function(){
  try {
    var raw = localStorage.getItem(${JSON.stringify(STORAGE_KEY)});
    if (!raw) return;
    var c = JSON.parse(raw);
    if (!c.clay || !c.sage || !c.cream || !c.ink || !c.terracotta) return;
    var r = document.documentElement;
    function mix(a,b,w){
      var p=function(h){h=h.replace('#','');if(h.length===3)h=h.split('').map(function(x){return x+x;}).join('');var n=parseInt(h,16);return{r:(n>>16)&255,g:(n>>8)&255,b:n&255};};
      var c1=p(a),c2=p(b);
      var toHex=function(v){return Math.max(0,Math.min(255,v)).toString(16).padStart(2,'0');};
      return '#'+toHex(Math.round(c1.r*(1-w)+c2.r*w))+toHex(Math.round(c1.g*(1-w)+c2.g*w))+toHex(Math.round(c1.b*(1-w)+c2.b*w));
    }
    function dk(h,a){return mix(h,'#000000',a);}
    function lt(h,a){return mix(h,'#ffffff',a);}
    function rgb(h){h=h.replace('#','');if(h.length===3)h=h.split('').map(function(x){return x+x;}).join('');var n=parseInt(h,16);return{r:(n>>16)&255,g:(n>>8)&255,b:n&255};}
    r.style.setProperty('--clay',c.clay);
    r.style.setProperty('--clay-deep',dk(c.clay,0.14));
    r.style.setProperty('--sage',c.sage);
    r.style.setProperty('--sage-deep',dk(c.sage,0.16));
    r.style.setProperty('--cream',c.cream);
    r.style.setProperty('--cream-2',dk(c.cream,0.04));
    r.style.setProperty('--sand',mix(c.cream,c.terracotta,0.18));
    r.style.setProperty('--ink',c.ink);
    r.style.setProperty('--ink-soft',mix(c.ink,c.cream,0.45));
    r.style.setProperty('--ink-faint',mix(c.ink,c.cream,0.62));
    r.style.setProperty('--terracotta',c.terracotta);
    var apricot=lt(c.terracotta,0.28);
    r.style.setProperty('--apricot',apricot);
    r.style.setProperty('--line',mix(c.cream,c.ink,0.22));
    r.style.setProperty('--card',lt(c.cream,0.35));
    var ap=rgb(apricot);
    var sg=rgb(c.sage);
    r.style.setProperty('--bg-glow-warm','rgba('+ap.r+','+ap.g+','+ap.b+',0.45)');
    r.style.setProperty('--bg-glow-sage','rgba('+sg.r+','+sg.g+','+sg.b+',0.18)');
    r.style.backgroundColor=c.cream;
    document.body.style.backgroundColor=c.cream;
    document.body.style.backgroundImage='radial-gradient(120% 90% at 12% -10%, rgba('+ap.r+','+ap.g+','+ap.b+',0.45), transparent 55%), radial-gradient(90% 70% at 105% 0%, rgba('+sg.r+','+sg.g+','+sg.b+',0.18), transparent 50%)';
  } catch(e){}
})();
`;

  return (
    <Script
      id="theme-init"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{ __html: script }}
    />
  );
}
