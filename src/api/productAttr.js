import Service from '@/util/request.js';

//分页获取所有商品属性分类
export function getpAttrCatList(params) {
    return Service({
        method: 'get',
        url: '/productAttribute/category/list/withAttr'
    });
}

// 跟商品属性分类ID查询该属性分类对应的参数列表或者属性列表
export function getpAttrList(cid, params) {
    return Service({
        method: 'get',
        url: `/productAttribute/list/${cid}`,
        params: params
    });
}