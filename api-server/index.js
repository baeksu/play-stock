const fs = require("fs");

//config file 경로
const filePath = "../config.json";

fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
        console.error("파일을 읽는 도중 오류가 발생했습니다!", err);
        return;
    }

    const configData = JSON.parse(data);
    console.log(configData);
});
