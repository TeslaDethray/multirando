const fs = require("fs-extra");
const path = require("path");

exports.onPostBuild = () => {
  fs.copySync(
    path.join(__dirname, "/public/locales")
  )
};