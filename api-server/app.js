const fs = require("fs");
const axios = require("axios");
const filePath = "../config.json"; //config file 경로

//appKey & appSecret 등 설정파일 정보 읽어온다.
//어차피 app.js 에서는 configData 를 직접 접근할 일은 없을 듯
const configData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

dailyCreateOauthData(); //주기적으로 oauth 요청

function dailyCreateOauthData() {
    setInterval(fetchOauthData, 5000);
}

//하루에 한번씩 oauth 데이터를 가져와야 한다.
function fetchOauthData() {
    //접근토큰발급을 위한 request header
    const accessAuthorizationRequestBody = {
        grant_type: "client_credentials",
        appkey: configData.app_key,
        appsecret: configData.app_secret,
    };

    const OAuthRequestUrl = `https://openapi.koreainvestment.com:9443/oauth2/tokenP`;
    axios
        .post(OAuthRequestUrl, accessAuthorizationRequestBody)
        .then((res) => {
            //요청 성공
            console.log(res.data);
        })
        .catch((err) => {
            //요청 실패
            console.log(err);
        });
}
