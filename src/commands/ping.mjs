/** @type {import("../data/BotTypes.mjs").CommandExport} */
export default {
    name: "ping",
    description: "Shows the Bot's Ping",
    localizations: [
        {name: ["in", "ping"], description: ["en", "Shows my latency"]}
    ],
    async execute(client, interaction) {
        await interaction.reply({
            ephemeral: true,
            content: `🏓 Pong \`${client.ws.ping}ms\``
        });
    }
}