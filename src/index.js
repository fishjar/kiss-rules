import fs from "fs";
import path from "path";
import rules from "./rules";

(() => {
  Object.entries(rules).forEach(([key, val]) => {
    const data = JSON.stringify(val, null, "  ");
    const file = path.resolve(__dirname, `../dist/${key}.json`);
    fs.writeFileSync(file, data);
    console.info(`--> ${file}`);
  });
})();
