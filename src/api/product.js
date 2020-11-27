import Service from '@/util/request.js';

//商品列表
export function getProductList(form) {
    // Service()
    return Service({
        method: "GET",
        url: "/product/list",
        params: form
    });
}

// 封装商品状态
//上架
export function productPublishStatus(params) {
    return Service({
        url: '/product/update/publishStatus',
        params: params
    });
}

//新品
export function productNewStatus(params) {
    return Service({
        url: "product/update/newStatus",
        params: params
    });
}

//推荐
export function productRecommendStatus(params) {
    return Service({
        url: "/product/update/recommendStatus",
        params: params
    });
}

// 删除
export function productDelStatus(params) {
    return Service({
        url: "/product/update/deleteStatus",
        params: params
    });
}