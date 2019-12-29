<template>
    <div class="mapWorld_box" style="width: 100%;height:1080px;position: relative">
        <span class="image_box" style="display: inline-block;position: absolute;top: 2%;right: 2%;z-index:20">
            <img src="../assets/earth.jpg" alt="" style="display: block;width: 40px;height: 40px">
        </span>
        <button @click="show_box" class="node_box" style="position: absolute;top: 8%;right: 2%;z-index:20">省市节点</button>
        <div class="popup_box" v-if="show" style="position: absolute;top: 11%;right: 2%;z-index:20" @click="closeMsg">
            <div calss="item_box" style="width:800px;height: 120px;background: #1e56a5;opacity: 0.8">
                <ul v-for="(item,index) in cityDatas" :key="index">
                    <li class="item_event" style="" @click="change_city(item.name)">{{item.name}}</li>
                </ul>
            </div>
        </div>
        <div id="map" ></div>

    </div>
</template>

<script>
    /*最简单的demo需要引入四个模块，最外层的Map模块，Map属性中的View，layer/Tile模块，数据源source/OSM模块
    第一步：属性注入
    初始化Map时传入一个对象，对象中简单包含了view,layers,target属性。Map是一个类，继承了Pluggable(扩展点接口)Map类，Map类初始化时会将
    属性对象option传入PluggableMap类，对父类初始化。PluggableMap类初始化的时候会将view,layers,target等属性赋值到对应的实例
    属性上。
    第二步：渲染OSM
    初始化Map的过程也会构造canvas渲染环境，然后会解析OSM切片地址，将特定分辨率的每张图片加载到canvas中。
    */
    import 'ol/ol.css'
    import Map from 'ol/Map'
    import View from 'ol/View'
    import TileLayer from 'ol/layer/Tile'
    import OSM from 'ol/source/OSM'
    import XYZ from 'ol/source/XYZ'  //具有URL模板中定义的XYZ格式的URL的图块数据的图层源。
    import {fromLonLat} from 'ol/proj'
    import ScaleLine from 'ol/control/ScaleLine'  //比例尺

    // import GeoJSON from 'ol/format/geoJson'
    // import Feature from 'ol/Feature'
    // import VectorLayer from 'ol/layer/Vector'
    // import SourceVector from 'ol/source/Vector'
    // import {Style,Stroke} from 'ol/style'

    const cityDatas = [{name: '北京'}, {name: '天津'}, {name: '河北'}, {name: '山西'}, {name: '内蒙古'}, {name: '辽宁'}, {name: '吉林'}, {name: '黑龙江'}, {name: '上海'}, {name: '江苏'}, {name: '浙江'}, {name: '安徽'}, {name: '福建'}, {name: '江西'}, {name: '山东'}, {name: '河南'}, {name: '湖北'}, {name: '湖南'}, {name: '广东'}, {name: '广西'}, {name: '海南'}, {name: '重庆'}, {name: '四川'}, {name: '贵州'}, {name: '云南'}, {name: '西藏'}, {name: '陕西'}, {name: '甘肃'}, {name: '青海'}, {name: '宁夏'}, {name: '新疆'}]
    export default {
        name: 'map_world',
        data() {
            return {
                map: null,
                // source: null,
                // resDate: null,
                // vector: null,
                show: false,
                cityDatas: cityDatas,
            }
        },
        mounted() {
            // let mapContainer = this.$refs.rootmap;
            let view = new View({
                // projection: 'EPSG:4326',   //使用这个坐标系
                center: fromLonLat([108.707509278, 34.345372996]),  //中国
                zoom: 5,
            });
            this.map = new Map({
                target: 'map',
                layers: [
                    new TileLayer({
                        source: new OSM()
                    })
                ],
                view,
            });
            let map_cva = new TileLayer({
                source: new XYZ({
                    url: 'http://t3.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=52c24cdd10559b6b65b96d65c02ac075'
                })
            });
            let map_vec = new TileLayer({
                source: new XYZ({
                    url: 'http://t4.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=52c24cdd10559b6b65b96d65c02ac075'
                })
            });
            this.map.addLayer(map_vec);
            this.map.addLayer(map_cva);
            //实例化比例尺控件（ScaleLine）
            var scaleLineControl = new ScaleLine({
                //设置比例尺单位，degrees、imperial、us、nautical、metric（度量单位）
                units: 'metric'
            })
            this.map.addControl(scaleLineControl);
        },
        methods: {
            show_box() {
                this.show = !this.show
            },
            change_city(name) {

                window.console.log(name);
                let params = {};
                params.postStr = {};
                params.postStr.searchWord = name;
                params.postStr.searchType = '1';  //查询类型(0：根据code查询，1：根据名称。)。
                params.postStr.needSubInfo = 'false';  //是否需要下一级信息。
                params.postStr.needAll = 'false';  //是否需要所有子节点(包括孙子节点..)。
                params.postStr.needPolygon = 'true';  //是否需要行政区划范围。
                params.postStr.needPre = 'false';  //是否需要上一级所有信息。
                params.tk = '52c24cdd10559b6b65b96d65c02ac075';   //自己的秘钥
                this.axios.post('/api', params).then(res => {
                    window.console.log(res.data[0]);
                    var resData = res.data[0]
                    var view = new View({
                        center: fromLonLat([resData.lnt, resData.lat]),
                        zoom: resData.level - 1
                    })
                    this.map.setView(view)
                })
            },
            closeMsg() {
                let btn = document.querySelector('.node_box');
                if(btn) {
                    if(!btn.contains(event.target)){
                        this.show = false
                    }
                }
            }
        }
    }
</script>

<!--添加“scoped”属性以将CSS限制到此组件 -->
<style scoped>
    #map {
        width: 100%;
        height: 100%;
        /*display: flex;*/
        overflow: hidden;
    }

    .item_event {
        list-style: none;
        float: left;
        margin-top: 10px;
        margin-right: 20px;
        color: #fff;
    }

    .item_event:hover {
        cursor: pointer;
        background: #fff;
        color: #1e56a5;
    }

</style>
