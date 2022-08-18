const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "colin",
        mongodb_password: "garados",
        mongodb_cluster: "cluster0",
        mongodb_database: "blog-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "colin",
      mongodb_password: "garados",
      mongodb_cluster: "cluster0",
      mongodb_database: "blog",
    },
  };
};

//Set-up different envs for developement and production
