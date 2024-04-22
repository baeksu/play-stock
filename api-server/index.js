const fs = require("fs");
const axios = require("axios");

//config file 경로
const filePath = "../config.json";

//한국투자증권 base url
const kisDevelopersUrl = "https://openapi.koreainvestment.com:9443";

//app key & app secret 세팅
let appKey = "";
let appSecret = "";

async function readJsonFile() {
    fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) {
            console.error("파일을 읽는 도중 오류가 발생했습니다!", err);
            return;
        }

        const configData = JSON.parse(data);
        appKey = configData.APPKEY;
        appSecret = configData.APPSECRET;
    });
}

readJsonFile();
console.log(appKey);
console.log(appSecret);

//접근토큰발급을 위한 request header
const accessAuthorizationRequestHeader = {
    grant_type: "client_credentials",
    appkey: appKey,
    appsecret: appSecret,
};

//TODO : 접근토큰발급을 위한 post 요청
const OAuthRequestUrl = `${kisDevelopersUrl}/oauth2/tokenP`;
axios
    .post(OAuthRequestUrl, {
        headers: accessAuthorizationRequestHeader,
    })
    .then((res) => {
        //요청 성공
        console.log(res.data);
    })
    .catch((err) => {
        //요청 실패
        // console.log(err);
    });

//request header
const financialRatioRequestHeader = {
    "content-type": "application/json",
    appkey: appKey,
    appSecret: appSecret,
};
