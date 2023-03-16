import { BotClient } from "./structures/BotClient.mjs";
// https://discord.com/oauth2/authorize?client_id=963361040203153448&permissions=37088600&scope=bot%20applications.commands
const client = new BotClient();

client.on("MRZ.NowLoaded", () => {
    client.logger.info("Now starting the bot");
    
    client.login(process.env.DISCORD_TOKEN)
})
