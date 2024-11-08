import { request } from "http";

export const getUser = (params: any) => {
    return request({
        url: '/users',
        params
    })
}