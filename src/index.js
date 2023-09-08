import fs from "fs";
import path from "path";
import rules from "./rules";
import webfix from "./webfix";

(() => {
  // 翻译规则
  Object.entries(rules).forEach(([key, val]) => {
    const data = JSON.stringify(val, null, "  ");
    const file = path.resolve(__dirname, `../dist/${key}.json`);
    fs.writeFileSync(file, data);
    console.info(`--> ${file}`);
  });

  // 修复站点
  const data = JSON.stringify(webfix, null, "  ");
  const file = path.resolve(__dirname, `../dist/kiss-webfix.json`);
  fs.writeFileSync(file, data);
  console.info(`--> ${file}`);
})();
