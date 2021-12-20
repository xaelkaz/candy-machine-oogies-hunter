module.exports = {
  apps: [
    {
      name: "oogiesHunter",
      script: "yarn",
      args: "start",
      env: {
        PORT: 3000,
        NODE_ENV: "production",
      },
    },
  ],
};
