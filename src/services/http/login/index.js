import axios from "axios";

export function RequisitionBackend() {
    const http = axios.create({
        baseURL: `${process.env.REACT_APP_BASE_URL_BACKEND}/api`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    });

    return {
        http,
    };
}
