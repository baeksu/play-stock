const fs = require("fs");

//config file 경로
const filePath = "../config.json";

//app key & app secret 세팅
let appKey = "";
let appSecret = "";

fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
        console.error("파일을 읽는 도중 오류가 발생했습니다!", err);
        return;
    }

    const configData = JSON.parse(data);
    appkey = configData.APPKEY;
    appSecret = configData.APPSECRET;
});

//TODO : 접근토큰발급을 위한 get 요청

//접근토큰발급을 위한 request header
const accessAuthorizationRequestHeader = {
    grant_type: "client_credentials",
    appkey: appKey,
    appsecret: appSecret,
};

//request header
const financialRatioRequestHeader = {
    "content-type": "application/json",
    appkey: appKey,
    appSecret: appSecret,
};
