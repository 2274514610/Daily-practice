import TileLayer from "ol/layer/Tile"
import View from 'ol/View'
import OSM from "ol/source/OSM"
import XYZ from 'ol/source/XYZ'
import {fromLonLat} from "ol/proj";

// let maptype=1;          //0表示部署的离线瓦片地图，1表示OSM,2表示使用Arcgis在线午夜蓝地图服务

let streetmap=function(){
    var maplayer=null;
    let view = new View({
        center:fromLonLat([108.707509278, 34.345372996]),
        zoom:5
    })
    return [maplayer];
}

let mapconfig={
    x:114.064839,     //中心点经度和纬度
    y:22.548857,
    zoom:15,          //地图缩放级别
    streetmap:streetmap
};

export default mapconfig
