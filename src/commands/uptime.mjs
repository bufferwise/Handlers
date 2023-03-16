/** @type {import("../data/BotTypes.mjs").CommandExport} */
export default {
    name: "uptime",
    description: "Shows the Bot's Uptime",
    localizations: [
        {name: ["in", "uptime"], description: ["en", "Shows how long I've been running"]}
    ],
    async execute(client, interaction) {
        await interaction.reply({
            ephemeral: true,
            content: `🏓 I'm running since <t:${Math.floor((Date.now() + client.uptime) / 1000)}:R>`
        });
    }
}