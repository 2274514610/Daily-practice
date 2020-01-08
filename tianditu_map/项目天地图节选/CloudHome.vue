<template>
  <div class="cloud_portal_box" style="width: 100%;position: fixed;height: 100%;background: #f2f2f2">
    <div class="content_wrap"
         style="width: 100%;height: 100%;box-sizing: border-box;margin: 0 auto">
      <!--头部标题&登录  start -->
      <a-row type="flex" justify="center" style="width: 100%;height: 70px;box-sizing: border-box">
        <a-col span="14" class="header_logo" style="height: 70px;display: flex;align-items: center">
          <img src="./img/jiaotongG.png" alt="" style="width: 15%;height: 100%">
          <img src="./img/wenzi.png" alt="" style="display:inline-block;padding-top: 12px;margin-left: 15px">
          <div style="align-self:center;margin-left: 25%;font-size: 16px">
            <span class="action">
                <a class="logout_title" href="javascript:" @click="goLogin">
                  <a-icon style="color: #005492" type="login"/>
                  <span style="color: #005492">登录</span>
                </a>
            </span>
            <span style="color:#005492">&nbsp;|&nbsp;</span>
            <span class="action">
                <a href="javascript:" @click="goReg">
                  <a-icon style="color:#005492" type="login"/>
                  <span style="color: #005492">注册</span>
                </a>
            </span>
          </div>
        </a-col>
      </a-row>
      <!--头部标题&登录  end -->
      <!--顶部导航栏 start-->
      <a-row type="flex" style="width: 100%;height: 44px;margin-top: 5px">
        <a-col span="24" class="nav_box" style="background: #005492;height: 100%;">
          <div class="nav_content">
            <a-menu mode="horizontal" style="width: 58%;height: 44px;line-height:44px;color: #fff;background: #005492;margin:0 auto;
            border-bottom: 1px solid transparent; display: flex;justify-content: space-between">
              <a-sub-menu key="mail">
                <a slot="title" class="submenu-title-wrapper" style="margin-right: 45px;" href="javascript:"
                   @click="home_page">首页</a>
              </a-sub-menu>
              <a-sub-menu>
                <span slot="title" class="submenu-title-wrapper" style="position: relative">图层服务</span>
                <a-menu-item-group key="mapType"
                                   style="width: 1000px;height: 50px;position: absolute;top: 0px;left: -200px;
                  background: #115f9b;opacity:0.8; color: #fff">
                  <a-menu-item key="mapType1"
                               style="float: left;position: absolute;top: 0;left: 10px;background: #115f9b">
                    <a href="javascript:" @click="area_map" style="color: #fff">区域地图</a>
                  </a-menu-item>
                  <a-menu-item key="mapType2"
                               style="float: left;position: absolute;top: 0;left: 100px;background: #115f9b">
                    <!--                    专题地图-->
                    <a href="javascript:" @click="zhuan_map" style="color: #fff">专题地图</a>
                  </a-menu-item>
                </a-menu-item-group>
              </a-sub-menu>
              <a-sub-menu>
                <span slot="title" class="submenu-title-wrapper" style="position: relative">服务资源</span>
                <a-menu-item-group key="development"
                                   style="width: 1000px;height: 50px;position: absolute;top: 0px;left: -300px;;
                  background: #115f9b;opacity:0.8;color: #fff">
                  <a-menu-item key="development1"
                               style="float: left;position: absolute;top: 0;left: 10px;background: #115f9b">
                    <a href="javascript:" @click="sjfw_API" style="color: #fff">数据服务</a>
                  </a-menu-item>
                  <a-menu-item key="development2"
                               style="float: left;position: absolute;top: 0;left: 100px;background: #115f9b">

                    <a href="javascript:" @click="sjcp_API" style="color: #fff">数据产品</a>
                  </a-menu-item>
                  <a-menu-item key="development3"
                               style="float: left;position: absolute;top: 0;left: 200px;background: #115f9b">

                    <a href="javascript:" @click="yyfw_API" style="color: #fff">应用服务</a>
                  </a-menu-item>
                  <a-menu-item key="development4"
                               style="float: left;position: absolute;top: 0;left: 320px;background: #115f9b">

                    <a href="javascript:" @click="web_API" style="color: #fff">WEB服务API</a>
                  </a-menu-item>

                </a-menu-item-group>
              </a-sub-menu>
              <a-sub-menu>
                <span slot="title" class="submenu-title-wrapper" style="position: relative">专题频道</span>
                <a-menu-item-group key="channel"
                                   style="width: 1000px;height: 50px;position: absolute;top: 0px;left: -400px;;
                  background: #115f9b;opacity:0.8;color: #fff">
                  <a-menu-item key="channel1"
                               style="float: left;position: absolute;top: 0px;left:10px;background: #115f9b">

                    <a href="javascript:" @click="ying_ji" style="color: #fff">应急频道</a>
                  </a-menu-item>
                  <a-menu-item key="channel2"
                               style="float: left;position: absolute;top: 0px;left: 100px;background: #115f9b">

                    <a href="javascript:" @click="gaojing_du" style="color: #fff">高精度应用</a>
                  </a-menu-item>
                  <a-menu-item key="channel3"
                               style="float: left;position: absolute;top: 0px;left: 200px;background: #115f9b">

                    <a href="javascript:" @click="licheng_money" style="color: #fff">里程收费</a>
                  </a-menu-item>
                </a-menu-item-group>
              </a-sub-menu>
              <a-sub-menu>
                <span slot="title" class="submenu-title-wrapper" style="position: relative">典型应用</span>
                <a-menu-item-group key="app"
                                   style="width: 1000px;height: 50px;position: absolute;top: 0px;left: -500px;;
                  background: #115f9b;opacity:0.8;color: #fff">
                  <a-menu-item key="app1"
                               style="float: left;position: absolute;top: 0px;left: 10px;background: #115f9b">

                    <a href="javascript:" @click="hai_sou" style="color: #fff">海搜</a>
                  </a-menu-item>
                  <a-menu-item key="app2"
                               style="float: left;position: absolute;top: 0px;left: 100px;background: #115f9b">

                    <a href="javascript:" @click="nei_he" style="color: #fff">内河</a>
                  </a-menu-item>
                </a-menu-item-group>
              </a-sub-menu>
              <a-sub-menu>
                <span slot="title" class="submenu-title-wrapper" style="position: relative">省级节点</span>
                <a-menu-item-group key="node"
                                   style="width: 1000px;height: 200px;position: absolute;top: 0px;left: -600px;;
                  background: #115f9b;opacity:0.8;color: #fff">
                  <a-menu-item v-for="(item,index) in cityDatas" :key="index"
                               style="float: left;top:0;left: 10px;background: #115f9b;"
                               @click="changeCenter(item.name)">{{item.name}}
                  </a-menu-item>
                </a-menu-item-group>
              </a-sub-menu>
            </a-menu>
          </div>
        </a-col>
      </a-row>
      <!--顶部导航栏 end-->
      <!--侧边导航&地图 start-->
      <a-row type="flex" justify="center" style="width: 100%;height: 85%;box-sizing: border-box;margin-top: 20px">
        <!--侧边导航栏 start-->
        <a-col span="2" class="left_box" style="height: 100%;margin-right: 15px">
          <div>
            <a-menu style="width: 100%;background:#f2f2f2;border-right: 1px solid transparent"
                    mode="vertical">
              <a-menu-item key="1" class="Regional_project">
                <a href="javascript:" @click="qu_yu"
                   style="width: 100%;text-align: center;display: flex;justify-content: center;">
                  <i class="iconfont" style="font-size: 26px;margin-right: 5px">&#xe830;</i>
                  区域专题图层
                </a>
              </a-menu-item>
              <a-sub-menu key="sub1" class='app_project'>
                <p slot="title" style="margin: 0;font-size: 16px;">
                  <i class="iconfont" style="font-size: 26px;margin-right: 5px">&#xe6ae;</i>
                  应用专题图层
                </p>
                <a-menu-item key="3" class='project_item'>
                  <a href="javascript:" @click="huo_che">货车</a>
                </a-menu-item>
                <a-menu-item key="4" class='project_item'>
                  <a href="javascript:" @click="qi_xiang">气象</a>
                </a-menu-item>

              </a-sub-menu>
              <a-menu-item key="2" class="pile_system">
                <a href="javascript:" @click="zhuang_hao"
                   style="width: 100%;text-align: center;display: flex;justify-content: center">
                  <i class="iconfont" style="font-size: 26px;margin-right: 5px">&#xe665;</i>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;桩号系统
                </a>
              </a-menu-item>
              <a-sub-menu key="sub2" class="deve_resources">
                <p slot="title" style="padding: 0;margin: 0;font-size: 16px;display: flex;justify-content: center">
                  <i class="iconfont" style="font-size: 26px;margin-right: 5px">&#xe67b;</i>
                  &nbsp;&nbsp;&nbsp;&nbsp;开发资源
                </p>
                <a-menu-item key="7">
                  <a href="javascript:" @click="di_tu">地图API</a>
                </a-menu-item>
                <a-menu-item key="8">
                  <a href="javascript:" @click="S_D">SDK</a>
                </a-menu-item>
              </a-sub-menu>
              <a-menu-item key="10" class="online_update">
                <a href="javascript:" @click="zai_xian"
                   style="width: 100%;text-align: center;display: flex;justify-content: center">
                  <i class="iconfont" style="font-size: 26px;margin-right: 5px">&#xe79d;</i>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在线更新
                </a>
              </a-menu-item>
            </a-menu>
          </div>
        </a-col>
        <!--侧边导航栏 end-->
        <!--地图 start-->
        <a-col span="12" class="right_box" style="height: 100%">
          <div class="mapparent">
            <a-popover trigger="click" title="选择底图" placement="bottomRight" :overlayStyle="{ width: '300px' } "
                       v-model="visible">
             <span class="header-notice">
                <img src="../gs/tiandi/utils/openlayers/img/earth.jpg" class="layer_switch"/>
              </span>
              <template slot="content">
                <div class="layer_panel">
                  <div class="layer-items" style="display: flex">
                    <div @click="change_vec"><a href="javascript:void(0);" id="vec_type" style="margin: 0px 5px;">
                      <img src="../gs/tiandi/utils/openlayers/img/vec.jpg" style="width: 75px;"
                           :class="{ liBackground:changeLeftBackground == 1}"></a>
                      <p style="text-align: center;color:#063bff;margin-bottom: 0;cursor: pointer;width: 75px">地图</p>
                    </div>
                    <div @click="change_img"><a href="javascript:void(0);" id="img_type" style="margin: 0px 5px;">
                      <img src="../gs/tiandi/utils/openlayers/img/img.jpg" style="width: 75px;"
                           :class="{ liBackground:changeLeftBackground == 2}"></a>
                      <p style="text-align: center;color:#063bff;margin-bottom: 0;cursor: pointer;width: 75px">影像</p>
                    </div>
                    <div @click="change_ter"><a href="javascript:void(0);" id="ter_type" style="margin: 0px 5px;">
                      <img src="../gs/tiandi/utils/openlayers/img/ter.jpg" style="width: 75px;"
                           :class="{ liBackground:changeLeftBackground == 3}"></a>
                      <p style="text-align: center;color:#063bff;margin-bottom: 0;cursor: pointer;width: 75px">地形</p>
                    </div>
                  </div>
                  <p style="margin: 0;padding-top: 5px;text-align: center">
                    <a-button @click="closePop" size="small">关闭</a-button>
                  </p>
                </div>
              </template>

            </a-popover>
            <div id="map" class="map" ref="dom">
            </div>
          </div>
        </a-col>
        <!--地图 end-->
      </a-row>
      <!--侧边导航&地图  end-->
    </div>
  </div>
</template>

<script>
  import ChartCard from '@/components/ChartCard'
  import ACol from 'ant-design-vue/es/grid/Col'
  import ATooltip from 'ant-design-vue/es/tooltip/Tooltip'
  import MiniArea from '@/components/chart/MiniArea'
  import MiniBar from '@/components/chart/MiniBar'
  import MiniProgress from '@/components/chart/MiniProgress'
  import Bar from '@/components/chart/Bar'
  import LineChartMultid from '@/components/chart/LineChartMultid'
  import HeadInfo from '@/components/tools/HeadInfo.vue'
  import { mapActions, mapGetters } from 'vuex'
  import Trend from '@/components/Trend'
  import { getLoginfo, getVisitInfo } from '@/api/api'

  import { httpAction, getAction } from '@/api/manage'
  import '../gs/tiandi/utils/openlayers/css/OverviewMap.css'
  import 'ol/ol.css'
  import Map from 'ol/Map'
  import View from 'ol/View'
  import TileLayer from 'ol/layer/Tile'
  import OSM from 'ol/source/OSM'
  import XYZ from 'ol/source/XYZ'
  import WMTS from 'ol/source/WMTS'
  import { fromLonLat, transform, get } from 'ol/proj.js'
  import { OverviewMap } from 'ol/control.js'
  import 'ol/events/Event'
  import 'ol/obj'
  // 比例尺
  import ScaleLine from 'ol/control/ScaleLine'
  import Circle from 'ol/geom/Circle'
  //LJH
  import GeoJSON from 'ol/format/GeoJSON'   //以GeoJSON（地图数据/矢量数据）格式读取和写入数据
  import Feature from 'ol/Feature'   //具有几何和其他属性的地理要素的矢量对象
  import VectorSource from 'ol/source/Vector'   //提供矢量图层的数据
  import VectorLayer from 'ol/layer/Vector'    //用于显示在客户端渲染的矢量数据
  import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style'

  const cityDatas = [{ name: '北京' }, { name: '天津' }, { name: '河北' }, { name: '山西' }, { name: '内蒙古' }, { name: '辽宁' }, { name: '吉林' }, { name: '黑龙江' }, { name: '上海' }, { name: '江苏' }, { name: '浙江' }, { name: '安徽' }, { name: '福建' }, { name: '江西' }, { name: '山东' }, { name: '河南' }, { name: '湖北' }, { name: '湖南' }, { name: '广东' }, { name: '广西' }, { name: '海南' }, { name: '重庆' }, { name: '四川' }, { name: '贵州' }, { name: '云南' }, { name: '西藏' }, { name: '陕西' }, { name: '甘肃' }, { name: '青海' }, { name: '宁夏' }, { name: '新疆' }];


  export default {
    name: 'Analysis',
    components: {
      ATooltip,
      ACol,
      ChartCard,
      MiniArea,
      MiniBar,
      MiniProgress,
      Bar,
      Trend,
      LineChartMultid,
      HeadInfo
    },
    data() {
      return {
        loading: true,
        center: null,
        loginfo: {},
        cityDatas: cityDatas,
        visitFields: ['ip', 'visit'],
        visitInfo: [],
        // indicator: <a-icon type="loading" style="font-size: 24px" spin />

        map: null,
        map_img: null,
        map_vec: null,
        changeLeftBackground: 1,
        map_ter: null,
        visible: false,
        tempLayer:"",
        layers: [
          new TileLayer({
            source: new OSM()
          })
        ],
        center: [108.707509278, 34.345372996]
      }
    },

    created() {
      setTimeout(() => {
        this.loading = !this.loading
      }, 1000)
      // this.initLogInfo()
    },
    mounted() {
      let that = this;
      var view = new View({
        // center: fromLonLat([108.707509278, 34.345372996]),
        center: transform(fromLonLat(this.center), 'EPSG:3857', 'EPSG:4326'),
        projection: get('EPSG:4326'),
        zoom: 5
      });
      this.map = new Map({
        target: 'map',
        layers: that.layers,
        view: view
      });
      this.change_vec();

      //实例化比例尺控件（ScaleLine）
      var scaleLineControl = new ScaleLine({
        //设置比例尺单位，degrees、imperial、us、nautical、metric（度量单位）
        units: 'metric'
      });
      this.map.addControl(scaleLineControl)
      // this.orange_begin();


    },
    methods: {
      ...mapActions(['Logout']),
      change_img() {
        var img = new TileLayer({
          source: new XYZ({
            url: 'http://t3.tianditu.com/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=d0cf74b31931aab68af181d23fa23d8d'
          })
        });
        this.map.addLayer(img);
        this.changeLeftBackground = 2
      },
      change_vec() {
        var map_cva = new TileLayer({
          source: new XYZ({
            url: 'http://t3.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=d0cf74b31931aab68af181d23fa23d8d'
          })
        });
        var map_vec = new TileLayer({
          source: new XYZ({
            url: 'http://t4.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=d0cf74b31931aab68af181d23fa23d8d'
          })
        });

        this.map.addLayer(map_vec);
        this.map.addLayer(map_cva);
        //console.log(this.map.getLayers());
        this.changeLeftBackground = 1
      },
      change_ter() {
        var map_ter = new TileLayer({
          source: new XYZ({
            url: 'http://t4.tianditu.com/DataServer?T=ter_w&x={x}&y={y}&l={z}&tk=d0cf74b31931aab68af181d23fa23d8d'
          })
        });
        var map_cta = new TileLayer({
          source: new XYZ({
            url: 'http://t4.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=d0cf74b31931aab68af181d23fa23d8d'
          })
        });
        this.map.addLayer(map_ter);
        this.map.addLayer(map_cta);
        this.changeLeftBackground = 3
      },
      drawArea(json, opacity) {

        var pointsz = [];   //存储点坐标
        var points = json.points;   //获取点坐标
          //对获取的点坐标数据进行处理，重构，得到我们需要的数据结构
        for (var i = 0; i < points.length; i++) {
          var region = points[i].region;   //单个面
          var pointArr = region.split(',');
          // console.log(pointArr);
          for (var j = 0; j < pointArr.length - 1; j++) {
            var p = pointArr[j];
            var pArr = p.split(' ');
            // console.log(pArr)
            var pos = fromLonLat(pArr);  //将坐标转化成目标投影，默认投影是EPSG:3857
            var hdms = transform(pos, 'EPSG:3857', 'EPSG:4326');   //坐标系间坐标相互转换,由前面坐标系转为后面坐标系坐标
            pointsz.push(pArr)   //将转化格式后的点坐标存储起来
          }
        }
        //自己造的地图数据（GeoJSON数据）
        var geojsonObject = {
          'type': 'FeatureCollection',   //要素集合
          'crs': {
            'type': 'name',
            'properties': {  //特性
              'name': 'EPSG:3857'
            }
          },
          'features': [{  //要素
            'type': 'Feature',
            'geometry': {  //几何图形
              'type': 'GeometryCollection',  //几何图形集合
              'geometries': [{   //几何形状
                'type': 'Polygon',  //多边形
                'coordinates': [pointsz]   //坐标
              }]
            }
          }]
        };
        var vectorSource = new VectorSource({  //提供矢量图层的数据
          features: (new GeoJSON()).readFeatures(geojsonObject)
        });
        var vectorLayer = new VectorLayer({
          source: vectorSource,  //来源
          style: new Style({
            stroke: new Stroke({
              color: 'yellow',
              width: 6
            }),
            fill: new Fill({
              color: 'rgba(255, 255, 0, 0.1)'
            })
          })
        });
        if(this.tempLayer!=""){
          this.map.removeLayer(this.tempLayer);
        }
        this.map.addLayer(vectorLayer);
        this.tempLayer = vectorLayer;

      },
      closePop() {
        this.visible = false
      },
      goLogin() {
        window.location.href = '/user/login'
      },
      goReg() {
        window.open('/user/register')
      },
      home_page() {
        window.open('/home/cloudhome')
      },
      //顶部导航栏  start
      area_map() {
        // alert('区域地图');
        window.open('/home/jsz')
      },
      zhuan_map() {
        // alert('专题地图')
        window.open('/home/jsz')
      },
      sjfw_API() {
        // alert('数据服务')
        window.open('/gs/ziyuanshow/dataservices/shujuservice')
      },
      sjcp_API() {
        // alert('数据产品')
        window.open('/gs/ziyuanshow/dataproducts/shujuproducts')
      },
      yyfw_API() {
        // alert('应用服务')
        window.open('/gs/ziyuanshow/appservice/appservice')
      },
      web_API() {
        // alert('web服务api')
        window.open('/home/jsz')
      },
      ying_ji() {
        // alert('应急频道')
        window.open('http://yjfw.tianditu.gov.cn/yjzt/')
      },
      gaojing_du() {
        // alert('高精度应用')
        window.open('/home/jsz')
      },
      licheng_money() {
        // alert('里程收费')
        window.open('/home/jsz')
      },
      hai_sou() {
        // alert('海搜')
        window.open('/home/jsz')
      },
      nei_he() {
        // alert('内河')
        window.open('/home/jsz')
      },
      changeCenter(name) {

        let param = {};
        param.postStr = {};
        param.postStr.searchWord = name;
        param.postStr.searchType = '1';   //查询类型（0:根据code查询; 1:根据名称）
        param.postStr.needSubInfo = 'false';  //是否需要下一级信息
        param.postStr.needAll = 'false';  //是否需要所有子节点（包括孙子节点）
        param.postStr.needPolygon = 'true';  //是否需要行政区划范围
        param.postStr.needPre = 'true';  //是否需要上一级所有信息
        param.tk = 'd0cf74b31931aab68af181d23fa23d8d';   //自己的秘钥
        getAction('http://api.tianditu.gov.cn/administrative', param).then(res => {
          console.log(res.data);
          var resData = res.data[0];

          var view = new View({
            center:transform(fromLonLat([resData.lnt, resData.lat]), 'EPSG:3857', 'EPSG:4326'), //将中心点坐标转为EPSG4326坐标
            projection: get('EPSG:4326'),  //投影坐标系 EPSG:4326
            zoom: resData.level - 1
          });
          this.map.setView(view);
          this.drawArea(resData, 0.5)
        })

      },
      //顶部导航栏 end

      //侧边导航栏 start
      qu_yu() {
        // alert('区域专题图层')
        window.open('/home/jsz')
      },
      huo_che() {
        // alert('货车')
        window.open('/home/jsz')
      },
      qi_xiang() {
        // alert('气象')
        window.open('https://weather.tianditu.gov.cn/')
      },
      zhuang_hao() {
        // alert('桩号系统')
        window.open('/home/jsz')
      },
      di_tu() {
        // alert('地图API')
        window.open('/home/jsz')
      },
      S_D() {
        // alert('SDK')
        window.open('/home/jsz')
      },
      zai_xian() {
        // alert('在线更新')
        window.open('/home/jsz')
      }
      //侧边导航栏 end


    }
  }
</script>
<style lang="scss" scoped>
  .iconfont {
    font-family: "iconfont";
    font-size: 12px;
    font-style: normal;
  }

  @font-face {
    font-family: 'iconfont';  /* project id 1578954 */
    src: url('//at.alicdn.com/t/font_1578954_wmuvwxtr9g.eot');
    src: url('//at.alicdn.com/t/font_1578954_wmuvwxtr9g.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1578954_wmuvwxtr9g.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1578954_wmuvwxtr9g.woff') format('woff'),
    url('//at.alicdn.com/t/font_1578954_wmuvwxtr9g.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1578954_wmuvwxtr9g.svg#iconfont') format('svg');
  }
</style>
<style lang="scss" scoped>
  .ant-menu-vertical /deep/ {
    .ant-menu-submenu {
      .ant-menu-submenu-title {
        height: 80px;
        line-height: 80px;
        /*margin-bottom: 0;*/
        /*padding-bottom: 0;*/
        margin: 0;
        padding: 0;
      }

      .ant-menu-submenu-arrow::after {
        display: none;
      }

      .ant-menu-submenu-arrow::before {
        display: none;
      }
    }
  }

  .a_menu_self /deep/ {
    width: 100px;
    height: 50px;
  }

  .liBackground {
    border: 1px solid #0000ff;
  }

</style>
<style lang="scss" scoped>
  /* 顶部导航栏样式 start*/
  .cloud_portal_box {
    .nav_box {
      .nav_content {
        .submenu-title-wrapper {
          color: #fff;

          &:hover {
            color: #409eff;
          }
        }
      }
    }

    /*顶部导航栏样式 end*/
    .content_wrap {
      /* 侧边导航栏样式 start*/
      .left_box {
        .Regional_project {
          width: 100%;
          height: 80px;
          line-height: 80px;
          margin-bottom: 30px;
          background: #fff;
          color: #000000;
          font-size: 16px;
          padding: 0;

          a:hover {
            color: #fff;
            background: #1c528e;
          }
        }

        .app_project {
          width: 100%;
          height: 80px;
          margin-bottom: 30px;
          background: #fff;
          text-align: center;

          p:hover {
            color: #fff;
            background: #1c528e;
          }

          .project_item {
            width: 100%;
            height: 100%;
            background: #fff;

            a:hover {
              background: #1c528e;
              color: #fff;
            }

          }

        }

        .pile_system {
          width: 100%;
          height: 80px;
          line-height: 80px;
          margin-bottom: 30px;
          background: #fff;
          color: #000000;
          font-size: 16px;
          padding: 0;
          text-align: center;

          a:hover {
            color: #fff;
            background: #1c528e;
          }
        }
      }

      .deve_resources {
        width: 100%;
        height: 80px;
        line-height: 80px;
        margin-bottom: 30px;
        background: #fff;
        padding: 0;
        text-align: center;

        p:hover {
          color: #fff;
          background: #1c528e;
        }
      }

      .online_update {
        width: 100%;
        height: 80px;
        line-height: 80px;
        margin-bottom: 30px;
        background: #fff;
        color: #000000;
        font-size: 16px;
        padding: 0;
        text-align: center;

        a:hover {
          color: #fff;
          background: #1c528e;
        }
      }

      /*侧边导航栏样式 end*/

      /*地图样式 start*/
      .right_box {
        .map {
          width: 100%;
          height: 100%;
        }

        .liBackground {
          border: 1px solid #0000ff;
        }

        .header-notice {
          display: inline-block;
          transition: all 0.3s;
          cursor: pointer;
          position: absolute;
          z-index: 99999;
          bottom: auto;
          left: auto;
          /* 右侧显示 */
          right: 2%;
          /* 顶部显示 */
          top: 2%;

          span {
            vertical-align: initial;
          }
        }

        .mapparent {
          /*position: fixed;*/
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .layer_panel {
          background: #fff;
          top: 0;
          padding: 5px;
          display: block;
        }

        .layer_panel .layer-items {
          margin-top: 10px;
          display: flex;
        }

        .layer_switch {
          display: block;
          width: 40px;
          height: 40px;
        }
      }

      /*地图样式  end*/
    }

  }

</style>
