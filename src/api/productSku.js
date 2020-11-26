import Service from '@/util/request.js';

//模糊查询
export function querySku(pid, params) {
    return Service({
        method: "get",
        url: `/sku/${pid}`,
        params: params
    });
}

//编辑
export function editSku(pid, params) {
    return Service({
        url: `/sku/update/${pid}`,
        data: params
    });
}