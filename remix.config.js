/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  appDirectory: 'app',
  assetsBuildDirectory: 'public/build',
  browserNodeBuiltinsPolyfill: { modules: { path: true } },
  ignoredRouteFiles: ['**/.*'],
  publicPath: '/build/',
  serverBuildPath: 'build/index.js',
  serverDependenciesToBundle: ['axios'],
  serverModuleFormat: 'cjs',
  tailwind: true,
};
