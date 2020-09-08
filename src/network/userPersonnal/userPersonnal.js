import { request } from "@/network/request.js"

export function userLogin(data) {
    return request({
        method: "get",
        url: "/editor",
        data: data
    })
}