const { readFileSync } = require("fs");

exports.data = {
	menu: JSON.parse(readFileSync("./src/data/menu.json", "utf8")),
	phone: JSON.parse(readFileSync("./src/data/phone.json", "utf8")),
	social: JSON.parse(readFileSync("./src/data/social.json", "utf8")),
	lang: JSON.parse(readFileSync("./src/data/lang.json", "utf8")),
	competence: JSON.parse(readFileSync("./src/data/competence.json", "utf8")),
	principle: JSON.parse(readFileSync("./src/data/principle.json", "utf8")),
	project: JSON.parse(readFileSync("./src/data/project.json", "utf8")),
	benefits: JSON.parse(readFileSync("./src/data/benefits.json", "utf8")),
	how_work: JSON.parse(readFileSync("./src/data/how-work.json", "utf8")),
	specialists: JSON.parse(
		readFileSync("./src/data/specialists.json", "utf8")
	),
	career: JSON.parse(readFileSync("./src/data/career.json", "utf8")),
	news: JSON.parse(readFileSync("./src/data/news.json", "utf8")),
};
