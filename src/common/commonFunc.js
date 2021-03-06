/* eslint no-restricted-globals: ["off"] */

import axios from "axios";

export const executeQuery = ({
    url,
    data,
    success,
    error,
    fail,
}) => {
    axios.defaults.baseURL = "http://52.79.141.166/";

    axios({
        method: "post",
        url,
        data: data || {},
    })
        .then((res) => {
            if (res.data.response === "error") {
                alert(res.data.msg);
            } else if (res.data.response === "fail") {
                alert("서버접속에 실패하였습니다. 관리자에게 문의해주시기 바랍니다.");
            } else if (res.data.response === "ok") {
                success(res.data);
            }
        })
        .catch((err) => {
            alert(err.response.data.msg);
            location.reload();
        });
};