const fs = require("fs");
const path = require("path");

const dataDir =
  path.join(__dirname, "data");

const files =
  fs.readdirSync(dataDir);

files.forEach(file => {

  if (!file.endsWith(".json")) {
    return;
  }

  if (
    file === "index.json" ||
    file === "bat-quai.json" ||
    file === "dan-nhap.json"
  ) {
    return;
  }

  const filePath =
    path.join(dataDir, file);

  const data =
    JSON.parse(
      fs.readFileSync(
        filePath,
        "utf8"
      )
    );

  const q =
    data.du_lieu;

  if (!q) {
    return;
  }

  if (q.hao === "chưa cập nhật") {
    q.hao = [];
  }

  if (q.quai_tu === undefined) {
    q.quai_tu = "";
  }

  if (q.thoan_truyen === undefined) {
    q.thoan_truyen = "";
  }

  if (q.tuong_truyen === undefined) {
    q.tuong_truyen = "";
  }

  data.phien_ban = "2.0";

  fs.writeFileSync(
    filePath,
    JSON.stringify(
      data,
      null,
      2
    ),
    "utf8"
  );

  console.log(
    `✅ Updated ${file}`
  );

});

console.log(
  "🎉 Schema upgrade complete!"
);
