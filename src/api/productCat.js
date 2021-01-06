import Service from '@/util/request.js';

//添加商品分类
export function productCatCreate(params) {
    return Service({
        url: '/productCategory/create',
        data: params
    });
}

// 查询所有一级分类及子分类
export function getProductCat() {
    return Service({
        method: "get",
        url: "/productCategory/list/withChildren"
    });
}


// 根据ID分页查询商品分类
export function pCatListId(parentId) {
    return Service({
        method: 'get',
        url: `/productCategory/list/${parentId}`
    });
}