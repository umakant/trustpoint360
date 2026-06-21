/** PM2 config — app listens on 8081 (not 3000). Nginx should proxy to this port. */
module.exports = {
  apps: [
    {
      name: "trustpoint360",
      script: "server/index.mjs",
      cwd: ".output",
      env: {
        NODE_ENV: "production",
        PORT: "8081",
        NITRO_PORT: "8081",
      },
    },
  ],
};
