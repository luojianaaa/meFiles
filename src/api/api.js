// 引入封装头信息和请求域名的axios对象
import http from './http'
// 引入请求的url地址
import { nowPlayingListUri, comingSoonListUri, moiveDetailUrl } from '@/config/url';
/**
 * 获取正在热映列表分页数据
 * @param {int} page 页码数 默认1 
 * @returns promise对象
 */
export const nowPlayingListData = (page = 1) => {
    return http.get(nowPlayingListUri + page)
}
//获取即将上映列表分页数据
export const comingSoonListData = (page = 1) => {
    return http.get(comingSoonListUri + page)
}

// 对电影详情的请求方法并导出
export const moiveDetail = (filmId) => {
    http.defaults.headers.info = "info";
    return http.get(moiveDetailUrl + filmId);
};