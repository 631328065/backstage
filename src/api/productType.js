import Service from '@/util/request.js';

// 分页获取所有商品属性分类
export function pAttrCatList() {
    return Service({
        method: 'get',
        url: '/productAttribute/category/list'
    });
}