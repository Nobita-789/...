module.exports = {
config: {
  name: "goiadmin",
  aurthor:"?/zed",// Convert By Goatbot Zed
   role: 0,
  shortDescription: " ",
  longDescription: "",
  category: "love",
  guide: "{pn}"
},
  onStart: async function ({ api, event }) {
  if (event.senderID !== "100053549552408") {
    var aid = ["100040426712109"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["wo busy hai use mention kyu kar rahe ho😗", "Kal Ana mera admin busy hai 🤧", "teko samjh ni ata wo busy hai 😪","Abee Baar Baar kyu Mention kar rage ho usko? 😏"," Another tag in my admin, i will punch you 🙂"];
      api.setMessageReaction("😒", event.messageID, (err) => {}, true);
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
},
  };
