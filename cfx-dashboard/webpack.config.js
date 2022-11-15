module.exports = {
    resolve: {
        fallback: { "url": require.resolve("url/") }
    }
};
// module.exports = {
//     webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
//         config.resolve.alias.https = "https-browserify";
//         config.resolve.alias.http = "http-browserify";
//         return config;
//     },
// };