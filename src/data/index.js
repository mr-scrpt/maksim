const { readFileSync } = require("fs");

exports.data = {
	menu: JSON.parse(readFileSync("./src/data/menu.json", "utf8")),
	phone: JSON.parse(readFileSync("./src/data/phone.json", "utf8")),
	social: JSON.parse(readFileSync("./src/data/social.json", "utf8")),
	lang: JSON.parse(readFileSync("./src/data/lang.json", "utf8")),
};
