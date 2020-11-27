import Service from '@/util/request.js';

export function getBrand() {
    return Service({
        method: "get",
        url: "/brand/listAll"
    });
}