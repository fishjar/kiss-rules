import fs from "fs";
import path from "path";
import rules from "./rules";
import rules_v2 from "./rules_v2";
import webfix from "./webfix";

(() => {
  try {
    Object.entries({ ...rules, ...rules_v2, ...webfix }).forEach(
      ([key, val]) => {
        const data = JSON.stringify(val, null, 2);
        const file = path.resolve(__dirname, `../dist/${key}.json`);
        fs.writeFileSync(file, data);
        console.info(`--> ${file}`);
      }
    );
  } catch (err) {
    console.error(err);
  }
})();
