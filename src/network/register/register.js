import { request } from '@/network/request.js'

export function register(data) {
    return request({
        method: "post",
        url: "/user",
        data: data
    })
}