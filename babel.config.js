module.exports = api => {
  api.cache(true);

  return {
    retainLines: true,
    presets: [
      [
        "@babel/preset-env",
        {
          targets: {
            node: "8.10"
          }
        }
      ]
    ]
  };
};