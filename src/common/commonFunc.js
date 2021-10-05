/* eslint no-restricted-globals: ["off"] */

import axios from "axios";

export const executeQuery = ({
    url,
    data,
    success,
    error,
    fail,
}) => {
    axios.defaults.baseURL = "http://13.209.7.48/";

    axios({
        method: "post",
        url,
        data: data || {},
    })
        .then((res) => {
            if (res.data.response === "error") {
                if (error) {
                    error(res.data);
                } else if (res.data.msg === "이미 로그인하셨습니다.") {
                    success(res.data);
                } else {
                    alert(res.data.msg);
                }
            } else if (res.data.response === "fail") {
                alert("서버접속에 실패하였습니다. 관리자에게 문의해주시기 바랍니다.");
            } else if (res.data.response === "ok") {
                success(res.data);
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