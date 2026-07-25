export function initClarity(projectId?: string) {
  const id = projectId || import.meta.env.VITE_CLARITY_PROJECT_ID;
  if (!id || id === 'YOUR_CLARITY_PROJECT_ID' || id.trim() === '') {
    return;
  }

  if (typeof window !== 'undefined' && !(window as any).clarity) {
    (function(c: any, l: any, a: any, r: any, i: any, t?: any, y?: any) {
      c[a] = c[a] || function() { (c[a].q = c[a].q || []).push(arguments); };
      t = l.createElement(r);
      t.async = 1;
      t.src = "https://www.clarity.ms/tag/" + i;
      y = l.getElementsByTagName(r)[0];
      y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", id.trim());
  }
}
