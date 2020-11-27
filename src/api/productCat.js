import Service from '@/util/request.js';

export function getProductCat() {
    return Service({
        method: "get",
        url: "/productCategory/list/withChildren"
    });
}