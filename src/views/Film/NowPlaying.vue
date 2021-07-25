<template>
  <div>
    <FilmList :list="list" :key="'film' + list.length" :type="type"></FilmList>
  </div>
</template>

<script>
//导入正在热映的请求方法
import { nowPlayingListData } from "@/api/api";
import FilmList from "@/components/FilmList";
export default {
  data() {
    return {
      page: 1,
      list: [],
      //当前传递的数据为正在热映的电影数据
      type: 1,
    };
  },
  components: {
    FilmList,
  },
  //异步请求
  async mounted() {
    let ret = await nowPlayingListData(this.page);
    // console.log(ret.data.data.films);
    this.list = ret.data.data.films;
  },
};
</script>
