<template>
  <div class="recommend-container">
    <div class="recommend-header">
      <h2 class="title">为你推荐</h2>
      <div class="control-part">
        <span @click="slidePre" class="control control-left" :class="{'disable': this.currPage === 0}">
          <Icon type="ios-arrow-back" size="40"/>
        </span>
        <span @click="slideNext" class="control control-right" :class="{'disable': this.currPage === Math.floor((this.recommends.length-1) / 5)}">
          <Icon type="ios-arrow-forward" size="40"/>
        </span>
      </div>
    </div>
    <div class="recommend-wrap">
      <ul class="recommend-content clearfix" ref="contentDiv">
        <li class="recommend-item" v-for="item in recommends">
          <a href="#" target="_blank">
            <img class="item-image" :src="item.imgUrl" alt="" />
            <h3 class="item-name">{{item.name}}</h3>
            <p class="item-price">{{item.price}}元</p>
            <p class="item-favorable">{{item.favorable}}人评价</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'recommemd',
  data() {
    return {
      currPage: 0,
			evtNextStatus: true,
			evtPreStatus: true,
			recommends: [
				{sourceUrl: '//item.mi.com/1154300011.html', imgUrl: '//i1.mifile.cn/a1/T1.VVgBjAT1RXrhCrK.jpg?width=140&height=140', name: '小米电视主机', price: '999', favorable: '102'},
				{sourceUrl: '//item.mi.com/1153300030.html', imgUrl: '//i1.mifile.cn/a1/T1LrdvBbAT1RXrhCrK.jpg?width=140&height=140', name: '小米手环', price: '69', favorable: '11.8万'},
				{sourceUrl: '//item.mi.com/1155100006.html', imgUrl: '//i1.mifile.cn/a1/T1_tEgBmVv1RXrhCrK.jpg?width=140&height=140', name: '米兔儿童电话手表', price: '299', favorable: '7865'},
				{sourceUrl: '//item.mi.com/1154100018.html', imgUrl: '//i1.mifile.cn/a1/T1TpZ_ByYv1R4cSCrK.png?width=140&height=140', name: '小米低音炮', price: '599', favorable: '4908'},
				{sourceUrl: '//item.mi.com/1155100011.html', imgUrl: '//i1.mifile.cn/a1/T1CDbjBgAT1RXrhCrK.jpg?width=140&height=140', name: '90分旅行箱 24寸', price: '349', favorable: '1.1万'},
				{sourceUrl: '//item.mi.com/1154900069.html', imgUrl: '//i1.mifile.cn/a1/T1PyZ_Bjdv1RXrhCrK.jpg?width=140&height=140 ', name: '小米智能插座 基础版', price: '49', favorable: '8622'},
				{sourceUrl: '//item.mi.com/1162100021.html', imgUrl: '//i1.mifile.cn/a1/pms_1464071511.37197399.jpg?width=140&height=140', name: '米家 LED 智能台灯', price: '169', favorable: '4268人好评'},
				{sourceUrl: '//item.mi.com/1153700018.html', imgUrl: '//i1.mifile.cn/a1/T1Ay_gBKKv1RXrhCrK.jpg?width=140&height=140', name: '90分旅行箱 20寸', price: '299', favorable: '1.5万'},
				{sourceUrl: '//item.mi.com/1161200004.html', imgUrl: '//i1.mifile.cn/a1/T1WxYvB_xv1RXrhCrK.jpg?width=140&height=140', name: '小米活塞耳机 基础版', price: '29', favorable: '5.5万'},
				{sourceUrl: '//item.mi.com/1153300025.html', imgUrl: '//i1.mifile.cn/a1/T1tzL_BjYT1RXrhCrK.jpg?width=140&height=140', name: '学院风简约双肩包', price: '59', favorable: '1.8万'},
				{sourceUrl: '//item.mi.com/1154300036.html', imgUrl: '//i1.mifile.cn/a1/T1F5K_BjVv1RXrhCrK.jpg?width=140&height=140', name: '小米小钢炮蓝牙音箱2', price: '129', favorable: '1.2万'},
				{sourceUrl: '//item.mi.com/1162900011.html', imgUrl: '//i1.mifile.cn/a1/pms_1470793898.34754317.jpg?width=140&height=140', name: '90分金属旅行箱', price: '1799', favorable: '23'},
				{sourceUrl: '//item.mi.com/1153800044.html', imgUrl: '//i1.mifile.cn/a1/T1MDK_B_YT1RXrhCrK.jpg?width=140&height=140', name: '小米蓝牙音箱', price: '199', favorable: ' 1.9万'},
				{sourceUrl: '//item.mi.com/1161200013.html', imgUrl: '//i1.mifile.cn/a1/T1FtKgBvZv1RXrhCrK.jpg?width=140&height=140', name: '小米多功能都市休闲胸包', price: '69', favorable: '9453'},
				{sourceUrl: '//item.mi.com/1161800001.html', imgUrl: '//i1.mifile.cn/a1/T1HQA_BCd_1RXrhCrK.jpg?width=140&height=140', name: '米家iHealth血压计', price: '399', favorable: '1529'},
				{sourceUrl: '//item.mi.com/1153900041.html', imgUrl: '//i1.mifile.cn/a1/T1JJ__BbYT1RXrhCrK.jpg?width=140&height=140', name: '小米净水器滤芯', price: '59', favorable: '6640'},
				{sourceUrl: '//item.mi.com/1162800007.html', imgUrl: '//i1.mifile.cn/a1/pms_1468287589.40786199.jpg?width=140&height=140', name: '米家随身风扇', price: '19.9', favorable: '4522'},
				{sourceUrl: '//item.mi.com/1160800073.html', imgUrl: '//i1.mifile.cn/a1/T1N5KjB_dT1RXrhCrK.jpg?width=140&height=140', name: '小米家庭音响 金属版', price: '899', favorable: '0'},
				{sourceUrl: '//item.mi.com/1161000003.html', imgUrl: '//i1.mifile.cn/a1/T1LpWjB4bv1RXrhCrK.jpg?width=140&height=140', name: '小米空气净化器滤芯 经济版', price: '129', favorable: '473'},
				{sourceUrl: '//item.mi.com/1161200073.html', imgUrl: '//i1.mifile.cn/a1/T1bED_B__v1RXrhCrK.jpg?width=140&height=140', name: '小蚁摄像机储存套装（夜视+8GB）', price: ' 165.9', favorable: '0'}
			]
    }
  },
  methods: {
    slideNext() {
      if (this.currPage < Math.floor((this.recommends.length - 1) / 5)) {
        this.currPage++;
        this.$refs.contentDiv.style.marginLeft = this.currPage * (-1224) + 'px';
      }
    },
    slidePre() {
      if (this.currPage !== 0) {
        this.currPage--;
        this.$refs.contentDiv.style.marginLeft = this.currPage * (-1224) + 'px';
      }
    }
  }
}
</script>

<style lang="css" scoped>
.recommend-container {
  width: 1226px;
  height: auto;
  margin: 0 auto;
}
.recommend-header {
  position: relative;
}
.recommend-header .title {
  margin: 0;
  font-size: 22px;
  font-weight: 200px;
  line-height: 58px;
  color: #333;
}
.recommend-header .control-part {
  position: absolute;
  top: 10px;
  right: 0;
  float: left;
  display: block;
};
.recommend-header .control-part .control {
  display: block;
  float: left;
  width: 34px;
  height: 23px;
  line-height: 23px;
  text-align: center;
  border: 1px solid #e0e0e0;
  cursor: pointer;
}
.recommend-header .control-part .control:hover {
  color: #A013EB;
}
.recommend-header .control-part .control.disable:hover {
  color: #e0e0e0;
}
.recommend-header .control-part .control.disable {
  color: #e0e0e0;
}
.recommend-wrap {
  width: 1226px;
  height: 310px;
  overflow: hidden;
}
.recommend-content {
  width: auto;
  height: 300px;
  transition: all 0.5s;
}
.recommend-content .recommend-item {
  float: left;
  display: block;
  width: 234px;
  height: 300px;
  margin: 0 13px 14px 0;
  font-size: 14px;
  background: #fff;
  cursor: pointer;
  transition: all 0.5s;
}
.recommend-content .recommend-item:hover {
  transform: translateY(-3px);
}
.recommend-content .recommend-item:nth-last-child(5n+1) {
  margin-right: 0;
}
.recommend-content .recommend-item .item-image {
  display: block;
  width: 140px;
  height: 140px;
  margin: 40px auto 15px;
}
.recommend-content .recommend-item .item-name {
  margin-bottom: 10px;
  font-weight: normal;
  font-size: 14px;
  text-align: center;
  color: #333;
}
.recommend-content .recommend-item a {
  text-decoration: none;
}
.recommend-content .recommend-item .item-price {
  margin-bottom: 10px;
  font-size: 14px;
  text-align: center;
    color: #A013EB;
}
.recommend-content .recommend-item .item-favorable {
  font-size: 14px;
  text-align: center;
  color: #757575;
}
</style>
