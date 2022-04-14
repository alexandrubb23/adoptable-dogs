module.exports = () => {
  return {
    reactStrictMode: true,
    webpack: config => {
      if (!config.experiments) {
        config.experiments = {};
      }

      config.experiments.topLevelAwait = true;
      return config;
    },
  };
};
