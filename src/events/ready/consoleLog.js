const { ActivityType } = require("discord.js");

module.exports = (client) => {
  console.log(`${client.user.tag} is online!`);

  client.user.setActivity({
    name: "Lil Wuyn - An (Full Album)",
    type: ActivityType.Listening
  });
};
