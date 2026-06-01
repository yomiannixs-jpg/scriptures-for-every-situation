export function speak(text){ if(!('speechSynthesis' in window)) return alert('Audio reading is not supported in this browser.'); window.speechSynthesis.cancel(); const u=new SpeechSynthesisUtterance(text); u.rate=.95; window.speechSynthesis.speak(u); }
export async function shareVerse(verse){ const text=`${verse.ref}\n\n${verse.text}\n\nScriptures for Every Situation`; if(navigator.share){ await navigator.share({title:verse.ref,text}); } else { await navigator.clipboard.writeText(text); alert('Verse copied to clipboard.'); } }
export async function copyText(text){ await navigator.clipboard.writeText(text); alert('Copied.'); }
export function registerSW(){ if('serviceWorker' in navigator){ window.addEventListener('load',()=>navigator.serviceWorker.register('/sw.js').catch(()=>{})); } }
