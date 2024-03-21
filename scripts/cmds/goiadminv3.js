module.exports = {
	config: {
		name: "goiadmin",
		author: "cliff",
		role: 2,
		shortDescription: " ",
		longDescription: "",
		category: "BOT",
		guide: "{pn}"
	},

onChat: function({ api, event }) {
	if (event.senderID !== "100085303477541") {
		var aid = ["100074525696138"];
		for (const id of aid) {
		if ( Object.keys(event.mentions) == id) {
			var msg = ["Kya hua use mention kyu kar rahe ho", "Tag Admin again, I'll punch you", "mere admin ko tang na karo","tujhe samjh ni ata use mention kyu kar rae ho","Kya hua boss ko kyu bula rahe ho?"];
			return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
		}
		}}
},
onStart: async function({}) {
	}
};
