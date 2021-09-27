import axios from "axios";

export const executeQuery = ({
    url,
    data,
    currenturl,
    success,
    error,
    fail,
}) => {
    axios.defaults.baseURL = "http://3.37.158.173/";

    const json = new FormData();
    // Object.keys(data).map((element) => {
    //     params.append(element, data[element]);
    // });
    json.append("currenturl", Location.href);
    json.append("token", sessionStorage.getItem("token"));

    axios({
        method: "post",
        url: "http://3.37.158.173/action/member/login.php",
        data: json || {},
    })
        .then((res) => {
            if (res.data.response === "error") {
                if (error) {
                    error(res.data);
                } else if (res.data.msg === "이미 사용중인 학번 주소입니다.") {
                    error(res.data);
                } else if (res.data.msg === "이미 로그인하셨습니다.") {
                    success(res.data);
                } else {
                    alert(res.data.msg);
                }
            }
            if (res.data.response === "fail") {
                alert("서버접속에 실패하였습니다. 관리자에게 문의해주시기 바랍니다.");
            }
            if (res.data.response === "ok") {
                console.log("성공")
            }
        })
        .catch((err) => {
            if (fail) {
                fail(err);
            } else {
                alert("서버접속에 실패하였습니다. 관리자에게 문의해주시기 바랍니다.");
            }
        });
};