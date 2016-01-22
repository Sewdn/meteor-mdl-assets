var mdlVersion = '1.0.6';
var revision = 0;
var mdlDistPath = 'dist'; // This relies on the symlink.

Npm.depends({
  'material-design-lite': mdlVersion
});

Package.describe({
  name: 'zodiase:mdl-assets',
  version: (revision > 0) ? mdlVersion + '_' + revision : mdlVersion,
  summary: 'Assets of Google\'s Material Design Lite. Not intended to be used directly.',
  git: 'https://github.com/Zodiase/meteor-mdl-assets.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');

  api.addAssets(prepandPathToFiles(distAssets, mdlDistPath), 'server');

  api.addFiles('serve.js', 'server');
  api.export(['_mdlGetAsset'], 'server');
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('jquery');
  api.use('zodiase:mdl-assets');
});

function prepandPathToFiles(files, path) {
  var npmPath = Npm.require('path');
  return files.map(function(file) {
    return npmPath.join(path, file);
  });
}

// The following code are generated by scripts. Do not manually edit. Run the scripts instead.
var distAssets = [];
///>>>>DISTASSETS
distAssets = ["material-grid.css","material-grid.min.css","material.amber-blue.min.css","material.amber-cyan.min.css","material.amber-deep_orange.min.css","material.amber-deep_purple.min.css","material.amber-green.min.css","material.amber-indigo.min.css","material.amber-light_blue.min.css","material.amber-light_green.min.css","material.amber-lime.min.css","material.amber-orange.min.css","material.amber-pink.min.css","material.amber-purple.min.css","material.amber-red.min.css","material.amber-teal.min.css","material.amber-yellow.min.css","material.blue-amber.min.css","material.blue-cyan.min.css","material.blue-deep_orange.min.css","material.blue-deep_purple.min.css","material.blue-green.min.css","material.blue-indigo.min.css","material.blue-light_blue.min.css","material.blue-light_green.min.css","material.blue-lime.min.css","material.blue-orange.min.css","material.blue-pink.min.css","material.blue-purple.min.css","material.blue-red.min.css","material.blue-teal.min.css","material.blue-yellow.min.css","material.blue_grey-amber.min.css","material.blue_grey-blue.min.css","material.blue_grey-cyan.min.css","material.blue_grey-deep_orange.min.css","material.blue_grey-deep_purple.min.css","material.blue_grey-green.min.css","material.blue_grey-indigo.min.css","material.blue_grey-light_blue.min.css","material.blue_grey-light_green.min.css","material.blue_grey-lime.min.css","material.blue_grey-orange.min.css","material.blue_grey-pink.min.css","material.blue_grey-purple.min.css","material.blue_grey-red.min.css","material.blue_grey-teal.min.css","material.blue_grey-yellow.min.css","material.brown-amber.min.css","material.brown-blue.min.css","material.brown-cyan.min.css","material.brown-deep_orange.min.css","material.brown-deep_purple.min.css","material.brown-green.min.css","material.brown-indigo.min.css","material.brown-light_blue.min.css","material.brown-light_green.min.css","material.brown-lime.min.css","material.brown-orange.min.css","material.brown-pink.min.css","material.brown-purple.min.css","material.brown-red.min.css","material.brown-teal.min.css","material.brown-yellow.min.css","material.css","material.cyan-amber.min.css","material.cyan-blue.min.css","material.cyan-deep_orange.min.css","material.cyan-deep_purple.min.css","material.cyan-green.min.css","material.cyan-indigo.min.css","material.cyan-light_blue.min.css","material.cyan-light_green.min.css","material.cyan-lime.min.css","material.cyan-orange.min.css","material.cyan-pink.min.css","material.cyan-purple.min.css","material.cyan-red.min.css","material.cyan-teal.min.css","material.cyan-yellow.min.css","material.deep_orange-amber.min.css","material.deep_orange-blue.min.css","material.deep_orange-cyan.min.css","material.deep_orange-deep_purple.min.css","material.deep_orange-green.min.css","material.deep_orange-indigo.min.css","material.deep_orange-light_blue.min.css","material.deep_orange-light_green.min.css","material.deep_orange-lime.min.css","material.deep_orange-orange.min.css","material.deep_orange-pink.min.css","material.deep_orange-purple.min.css","material.deep_orange-red.min.css","material.deep_orange-teal.min.css","material.deep_orange-yellow.min.css","material.deep_purple-amber.min.css","material.deep_purple-blue.min.css","material.deep_purple-cyan.min.css","material.deep_purple-deep_orange.min.css","material.deep_purple-green.min.css","material.deep_purple-indigo.min.css","material.deep_purple-light_blue.min.css","material.deep_purple-light_green.min.css","material.deep_purple-lime.min.css","material.deep_purple-orange.min.css","material.deep_purple-pink.min.css","material.deep_purple-purple.min.css","material.deep_purple-red.min.css","material.deep_purple-teal.min.css","material.deep_purple-yellow.min.css","material.green-amber.min.css","material.green-blue.min.css","material.green-cyan.min.css","material.green-deep_orange.min.css","material.green-deep_purple.min.css","material.green-indigo.min.css","material.green-light_blue.min.css","material.green-light_green.min.css","material.green-lime.min.css","material.green-orange.min.css","material.green-pink.min.css","material.green-purple.min.css","material.green-red.min.css","material.green-teal.min.css","material.green-yellow.min.css","material.grey-amber.min.css","material.grey-blue.min.css","material.grey-cyan.min.css","material.grey-deep_orange.min.css","material.grey-deep_purple.min.css","material.grey-green.min.css","material.grey-indigo.min.css","material.grey-light_blue.min.css","material.grey-light_green.min.css","material.grey-lime.min.css","material.grey-orange.min.css","material.grey-pink.min.css","material.grey-purple.min.css","material.grey-red.min.css","material.grey-teal.min.css","material.grey-yellow.min.css","material.indigo-amber.min.css","material.indigo-blue.min.css","material.indigo-cyan.min.css","material.indigo-deep_orange.min.css","material.indigo-deep_purple.min.css","material.indigo-green.min.css","material.indigo-light_blue.min.css","material.indigo-light_green.min.css","material.indigo-lime.min.css","material.indigo-orange.min.css","material.indigo-pink.min.css","material.indigo-purple.min.css","material.indigo-red.min.css","material.indigo-teal.min.css","material.indigo-yellow.min.css","material.js","material.light_blue-amber.min.css","material.light_blue-blue.min.css","material.light_blue-cyan.min.css","material.light_blue-deep_orange.min.css","material.light_blue-deep_purple.min.css","material.light_blue-green.min.css","material.light_blue-indigo.min.css","material.light_blue-light_green.min.css","material.light_blue-lime.min.css","material.light_blue-orange.min.css","material.light_blue-pink.min.css","material.light_blue-purple.min.css","material.light_blue-red.min.css","material.light_blue-teal.min.css","material.light_blue-yellow.min.css","material.light_green-amber.min.css","material.light_green-blue.min.css","material.light_green-cyan.min.css","material.light_green-deep_orange.min.css","material.light_green-deep_purple.min.css","material.light_green-green.min.css","material.light_green-indigo.min.css","material.light_green-light_blue.min.css","material.light_green-lime.min.css","material.light_green-orange.min.css","material.light_green-pink.min.css","material.light_green-purple.min.css","material.light_green-red.min.css","material.light_green-teal.min.css","material.light_green-yellow.min.css","material.lime-amber.min.css","material.lime-blue.min.css","material.lime-cyan.min.css","material.lime-deep_orange.min.css","material.lime-deep_purple.min.css","material.lime-green.min.css","material.lime-indigo.min.css","material.lime-light_blue.min.css","material.lime-light_green.min.css","material.lime-orange.min.css","material.lime-pink.min.css","material.lime-purple.min.css","material.lime-red.min.css","material.lime-teal.min.css","material.lime-yellow.min.css","material.min.css","material.min.js","material.orange-amber.min.css","material.orange-blue.min.css","material.orange-cyan.min.css","material.orange-deep_orange.min.css","material.orange-deep_purple.min.css","material.orange-green.min.css","material.orange-indigo.min.css","material.orange-light_blue.min.css","material.orange-light_green.min.css","material.orange-lime.min.css","material.orange-pink.min.css","material.orange-purple.min.css","material.orange-red.min.css","material.orange-teal.min.css","material.orange-yellow.min.css","material.pink-amber.min.css","material.pink-blue.min.css","material.pink-cyan.min.css","material.pink-deep_orange.min.css","material.pink-deep_purple.min.css","material.pink-green.min.css","material.pink-indigo.min.css","material.pink-light_blue.min.css","material.pink-light_green.min.css","material.pink-lime.min.css","material.pink-orange.min.css","material.pink-purple.min.css","material.pink-red.min.css","material.pink-teal.min.css","material.pink-yellow.min.css","material.purple-amber.min.css","material.purple-blue.min.css","material.purple-cyan.min.css","material.purple-deep_orange.min.css","material.purple-deep_purple.min.css","material.purple-green.min.css","material.purple-indigo.min.css","material.purple-light_blue.min.css","material.purple-light_green.min.css","material.purple-lime.min.css","material.purple-orange.min.css","material.purple-pink.min.css","material.purple-red.min.css","material.purple-teal.min.css","material.purple-yellow.min.css","material.red-amber.min.css","material.red-blue.min.css","material.red-cyan.min.css","material.red-deep_orange.min.css","material.red-deep_purple.min.css","material.red-green.min.css","material.red-indigo.min.css","material.red-light_blue.min.css","material.red-light_green.min.css","material.red-lime.min.css","material.red-orange.min.css","material.red-pink.min.css","material.red-purple.min.css","material.red-teal.min.css","material.red-yellow.min.css","material.teal-amber.min.css","material.teal-blue.min.css","material.teal-cyan.min.css","material.teal-deep_orange.min.css","material.teal-deep_purple.min.css","material.teal-green.min.css","material.teal-indigo.min.css","material.teal-light_blue.min.css","material.teal-light_green.min.css","material.teal-lime.min.css","material.teal-orange.min.css","material.teal-pink.min.css","material.teal-purple.min.css","material.teal-red.min.css","material.teal-yellow.min.css","material.yellow-amber.min.css","material.yellow-blue.min.css","material.yellow-cyan.min.css","material.yellow-deep_orange.min.css","material.yellow-deep_purple.min.css","material.yellow-green.min.css","material.yellow-indigo.min.css","material.yellow-light_blue.min.css","material.yellow-light_green.min.css","material.yellow-lime.min.css","material.yellow-orange.min.css","material.yellow-pink.min.css","material.yellow-purple.min.css","material.yellow-red.min.css","material.yellow-teal.min.css"];
///<<<<DISTASSETS
