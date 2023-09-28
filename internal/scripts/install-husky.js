// https://typicode.github.io/husky/#/?id=with-a-custom-script
const path = require("path");

const REPO_ROOT = path.resolve(__dirname, "..");

const IS_CI = process.env["CI"] != null;
const IS_INTERNAL_DEV = process.env["IS_INTERNAL_DEV"] === "1";

if (!IS_CI && IS_INTERNAL_DEV) {
  process.chdir(REPO_ROOT);
  require("husky").install();
}
