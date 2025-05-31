const { exec } = require("child_process");

const url = process.argv[2] || "https://default.com";
const tag = process.argv[3] || "@smoke";

process.env.TEST_URL = url;
process.env.TAGS = tag;

exec("npx cucumber-js", (err, stdout, stderr) => {
  if (err) {
    console.error(`❌ Error:\n${stderr}`);
    return;
  }
  console.log(stdout);
});
