const fs = require("fs");
let body = fs.readFileSync("src/body.html", "utf-8");

body = body.replace(/<div id="root"><\/div>/, "");
body = body.replace(/<script type="module" src="\/src\/main\.jsx"><\/script>/, "");

body = body.replace(/\bclass="/g, 'className="');
body = body.replace(/\bfor="/g, 'htmlFor="');

body = body.replace(/style="([^"]+)"/g, (match, styles) => {
  const parts = styles.split(';').filter(Boolean);
  const objStr = parts.map(p => {
    let [k, v] = p.split(':');
    if (!v) return '';
    k = k.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    return `${k}: '${v.trim()}'`;
  }).filter(Boolean).join(', ');
  return `style={{ ${objStr} }}`;
});

['stroke-width', 'stroke-linecap', 'fill-rule', 'clip-rule'].forEach(attr => {
  const camel = attr.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
  body = body.replace(new RegExp(`\\b${attr}="`, 'g'), `${camel}="`);
});

// React handlers
body = body.replace(/onclick="filterJobs\(this,'([^']+)'\)"/g, "onClick={() => setFilter('$1')}");

// We leave the manual filtering to CSS for now to not break the DOM structure, or we can use standard inline style based on dataset:
body = body.replace(/<div className="job-card" data-cat="([^"]+)">/g, 
  `<div className="job-card" data-cat="$1" style={{ display: (filter === 'all' || filter === '$1') ? '' : 'none' }}>`
);

// We also need to fix `className="filter-tab active"` to use the react state filter
body = body.replace(/className="filter-tab( active)?"(.*?)onClick=\{\(\) => setFilter\('([^']+)'\)\}/g, 
  "className={`filter-tab ${filter === '$3' ? 'active' : ''}`} onClick={() => setFilter('$3')}"
);

// Remove the inline script tag from HTML at the bottom
body = body.replace(/<script>[\s\S]*?<\/script>/, "");

// Close empty tags like <br> -> <br/>, <hr> -> <hr/>, <img ...> -> <img ... />
body = body.replace(/<br>/g, "<br/>");
body = body.replace(/<hr>/g, "<hr/>");

const componentCode = `import { useState } from 'react';
import './index.css';

export default function App() {
  const [filter, setFilter] = useState('all');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      ${body}
    </>
  );
}
`;

fs.writeFileSync("src/App.jsx", componentCode);
