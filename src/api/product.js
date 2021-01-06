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

//添加
export function productCreate(param) {
    return Service({
        url: '/product/create',
        data: param
    });
}

// 根据id查询编辑的商品信息
export function productUpdateInfo(id) {
    return Service({
        method: 'get',
        url: `/product/updateInfo/${id}`
    });
}

// 更新商品
export function productUpdate(id, params) {
    return Service({
        url: `/product/update/${id}`,
        data: params
    });
}

// 删除
export function productDelStatus(params) {
    return Service({
        url: "/product/update/deleteStatus",
        params: params
    });
}

// 商品专题
export function getSubjectList(param) {
    return Service({
        method: 'get',
        url: '/subject/listAll'
    });
}

// 商品优选
export function getPrefrenceAreaList() {
    return Service({
        method: 'get',
        url: '/prefrenceArea/listAll'
    });
}