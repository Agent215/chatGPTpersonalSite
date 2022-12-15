const {
    override,
    addWebpackResolve
  } = require('customize-cra');
  
  module.exports = override(
    addWebpackResolve({
      fallback: {
        crypto: require.resolve('crypto-browserify'),
        url: require.resolve('url/'),
        child_process: require.resolve('child_process'),
        util: require.resolve('util/'),
        fs: require.resolve('fs'),
        stream: require.resolve("stream-browserify") 
      }
    })
  );
  