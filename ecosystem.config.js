module.exports = {
  apps: [
    {
      name: "oogiesHunter",
      script: "yarn",
      args: "start",
      env: {
        PORT: 3001,
        NODE_ENV: "production",
      },
    },
  ],
};
