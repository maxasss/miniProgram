// 导入request请求工具方法
// import {getBaseUrl, requestUtil} from "../../utils/requestUtil.js";
import regeneratorRuntime from '../../lib/runtime/runtime';
Page({
 data:{
   // 轮播图数组
   swiperList: [],
   baseUrl:'',
   bigTypeList:[],
   bigTypeList_row1:[],
   bigTypeList_row2:[],
   hotProductList:[]
 }
//  onLoad:function(){
//   this.getSwiperList();
//   this.getBigTypeList();
//   this.getHotProductList();
//  },
 // 获取轮播图数据
//  async getSwiperList(){
//   requestUtil({ url: "/home/swiperdata" })
    // .then(result => {
    //   this.setData({
        // swiperList: result
    //   })
    // })

    // const result=await requestUtil({url: "/product/findSwiper"});
    // 
    // const baseUrl=getBaseUrl();
    // console.log(baseUrl);
    // console.log(result)
    // this.setData({
    //   swiperList: result.message,
    //   baseUrl:baseUrl
    // })
//   }
})