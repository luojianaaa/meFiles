<template>
  <div>
     <FilmList2 :list="list" :key="'film' + list.length" :type="type"></FilmList2>
  </div>
</template>

<script>
import { comingSoonListData } from "@/api/api";
import FilmList2 from '@/components/FilmList2'
export default {
  data() {
    return {
      page: 1,
      list: [],
      type:2
    };
  },
  components:{
      FilmList2
  },
  //异步请求
  async mounted() {
    let ret = await comingSoonListData(this.page);
    // console.log(ret.data.data.films);
    this.list = ret.data.data.films;
  },
};
</script>