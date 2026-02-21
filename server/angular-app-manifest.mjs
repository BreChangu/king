
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/king/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/king"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5721, hash: '5d3f2f311abedd7612937db48ae5ee52cac09e8c92ea01de3191048f87b34609', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 6020, hash: '17c2635521875fa96b1ffb6771f0965f9912d8262595683eab63cf35f9be6708', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 27346, hash: '10442b893440ba86af0926bd0d27b65bbf2abc9ab8ed79e91631c65d3f475b25', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-7Y2WE2RD.css': {size: 120, hash: 'zZLbS0Tx3VE', text: () => import('./assets-chunks/styles-7Y2WE2RD_css.mjs').then(m => m.default)}
  },
};
