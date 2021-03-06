

let full_province_name
let legend_index
let cities 
let map_file
// [14,1,18,6,142,428,129,182,17,46,8,114,29,112,10,7]
let cities_area
let simple_province_name = "湖北"

if (simple_province_name === "湖北")
{
  simple_province_name = "湖北"
  cities = ["恩施", "十堰", "宜昌", "襄阳", "黄冈", "荆州", "荆门", "咸宁", "随州", "孝感", "武汉", "黄石", "神农架", "天门", "仙桃", "潜江", "鄂州"]
  center_location = [112.38, 31] // 省份中心
  legend_index = 10 
  range_index = 8
  map_file = "./hubei_city_topo.json"
  cities_area = {"武汉": 8569.15, "黄石": 4564.56, "十堰": 23666.16, "宜昌": 21230.14, "襄阳": 19727.68, "鄂州": 1596.46, "荆门": 12339.43, "孝感": 8904.41, "荆州": 14099.21, "黄冈": 17457.20, "咸宁": 9751.50, "随州": 9613.86, "恩施": 24060.26, "仙桃": 2519.06, "潜江": 1993.14, "天门": 2612.42, "神农架": 3232.77}
}
// 这边设置
else if (simple_province_name === "福建")
{
  simple_province_name = "福建"
  cities = ['南平', "三明", "龙岩", "宁德", "福州", "漳州", "泉州", "莆田", "厦门"]
  center_location = [118.3008, 25.9277]
  legend_index = 1
  range_index = 8
  map_file = "china-topojson/35.json"
  cities_area = {"福州": 12250.72, "厦门": 1699.39 ,"莆田": 4130.78 ,"三明": 22964.77, "泉州": 11286.59, "漳州": 12879.62, "南平": 26279.67, "龙岩": 19027.62, "宁德": 13431.98}
}

// 
else if (simple_province_name === "浙江"){
  simple_province_name = "浙江" // 省份简称
  // 地级市简称，顺序务必按照geojson的顺序
  cities = ['丽水', "杭州", "温州", "宁波", "舟山", "台州", "金华", "衢州", "绍兴", "嘉兴", "湖州"]
  center_location = [120.498,29.0918]
  legend_index = 5 // 最大值是 legend_index * 64
  range_index = 8
  map_file = "china-topojson/33.json" // topojson 的位置，先使用网站将geojson 转化为 topojson， https://jeffpaine.github.io/geojson-topojson/ 
  cities_area = {"杭州": 16850.03, "宁波": 9714.65, "温州": 12064.77, "嘉兴": 4222.87, "湖州": 5820.26, "绍兴": 8279.08, "金华": 10941.75, "衢州": 8844.55, "舟山": 1454.70, "台州": 10037.91, "丽水": 17275.20}
  // 各个地级市的面积，请务必使用简称（不带市或者州之类的内容）
}

else if (simple_province_name === "河北"){
  simple_province_name = "河北"
  cities = ['承德', '张家口', '保定', '唐山', '沧州', '石家庄', '邢台', '邯郸', '秦皇岛', '衡水', '廊坊']
  center_location = [115.4004,39.4688]
  legend_index = 3
  range_index = 6 
  map_file = "china-topojson/13.json"
  cities_area = {'承德': 39519 , '张家口': 36800, '保定': 22190, '唐山': 13472, '沧州': 14000, '石家庄': 14464, '邢台': 12400, '邯郸': 12073.8, '秦皇岛': 7813, '衡水': 8815, '廊坊': 6429}
}

else if (simple_province_name === "江苏"){
  simple_province_name = "江苏"
  cities = ['盐城', '徐州', '南通', '淮安', '苏州', '宿迁', '连云港', '扬州', '南京', '泰州', '无锡', '常州', '镇江']
  center_location = [118.8586, 32.915]
  legend_index = 2
  range_index = 7
  map_file = "china-topojson/32.json"
  cities_area = {'盐城': 16931, '徐州': 11258, '南通': 8544, '淮安': 10072, '苏州': 8488.42, '宿迁': 8555, '连云港': 7615, '扬州': 6634, '南京': 6587, '泰州': 5787, '无锡': 4627.47, '常州': 4375, '镇江': 3847}
}

else if (simple_province_name === "吉林"){
  simple_province_name = "吉林"
  cities = ['延边', '吉林', '白城', '松原', '长春', '白山', '通化', '四平', '辽源']
  center_location = [125.7746,43.5938]
  legend_index = 1
  range_index = 6
  map_file = "china-topojson/22.json"
  cities_area = {'延边': 43300, '吉林': 187400, '白城': 25685, '松原': 22000, '长春': 20593.5, '白山': 17485, '通化': 15698, '四平': 14323, '辽源': 5140.45}
}


else if (simple_province_name === "内蒙古"){
  simple_province_name = "内蒙古"
  cities = ['呼伦贝尔', '阿拉善', '锡林郭勒', '鄂尔多斯', '赤峰', '巴彦淖尔', '通辽', '乌兰察布', '兴安', '包头', '呼和浩特', '乌海']
  center_location = [112.5977,45.3408]
  legend_index = 1
  range_index = 2
  map_file = "china-topojson/15.json"
  cities_area = {'呼伦贝尔': 252777, '阿拉善': 270000, '锡林郭勒': 203000, '鄂尔多斯': 86752, '赤峰': 90021, '巴彦淖尔': 64000, '通辽': 59835, '乌兰察布': 54500, '兴安': 59806, '包头': 27768, '呼和浩特': 17224, '乌海': 1745}
}
else if (simple_province_name === "辽宁"){
  simple_province_name = "辽宁"
  cities = ['大连', '朝阳', '丹东', '铁岭', '沈阳', '抚顺', '葫芦岛', '阜新', '锦州', '鞍山', '本溪', '营口', '辽阳', '盘锦']
  center_location = [122.0438,41.0889]
  legend_index = 1
  range_index = 6
  map_file = "china-topojson/21.json"
  cities_area = {'大连': 12573.85, '朝阳': 19736, '丹东': 15222, '铁岭': 13000, '沈阳': 13000, '抚顺': 11271.03, '葫芦岛': 10400, '阜新': 10445, '锦州': 10301, '鞍山': 9252.35, '本溪': 8414, '营口': 5402, '辽阳': 4744, '盘锦': 4102.9}
}
else if (simple_province_name === "山东"){
  simple_province_name = "山东"
  cities = ['烟台', '临沂', '潍坊', '青岛', '菏泽', '济宁', '德州', '滨州', '聊城', '东营', '济南', '泰安', '威海', '日照', '淄博', '枣庄', '莱芜']
  center_location = [118.7402,36.4307]
  legend_index = 4
  range_index = 7
  map_file = "china-topojson/37.json"
  cities_area = {'烟台': 13745.95, '临沂': 17191.2, '潍坊': 15859, '青岛': 11282, '菏泽': 12238.62, '济宁': 11187, '德州': 10356, '滨州': 9453, '聊城': 8715, '东营': 8243, '济南': 10244, '泰安': 7761, '威海': 5797, '日照': 5359, '淄博': 5965, '枣庄': 4563, '莱芜': 1739.61}
}
else if (simple_province_name === "贵州"){
  simple_province_name = "贵州"
  cities = ['遵义', '黔东南', '毕节', '黔南', '铜仁', '黔西南', '六盘水', '安顺', '贵阳']
  center_location = [106.6113, 26.9385]
  legend_index = 1
  range_index = 6
  map_file = "china-topojson/52.json"
  cities_area = {'遵义': 30762, '黔东南': 30337.1, '毕节': 26853, '黔南': 26197, '铜仁': 18003, '黔西南': 16805, '六盘水': 9965, '安顺': 9267, '贵阳': 8034}
}

let color_ncov = ["#FFC1BB", "#F6978E", "#D9736A", "#DF5C50", "#CF4033", '#9F3026', '#881719']

let need_update_states = false
// let method = "log"

let provinces_area = cities_area
let is_playing = true

let provinces = cities
let provinces_number = provinces.length
let ncov_data
let begin_date
let current_step = 0
let defalt_method = "log"
let method = defalt_method
let map_margin = {left: 0, right: 0, top: 0, bottom: 0}
let map_width = document.getElementById('map').clientWidth - map_margin.left - map_margin.right,
    map_height = document.getElementById('map').clientHeight - map_margin.top - map_margin.bottom;


function modify_city_name()
{

  for (let i = 0; i < ncov_data.length; i ++ )
  {
    // ncov_data[i][0] = modify_name(ncov_data[i][0])
    for (let j = 2; j < ncov_data[i].length; j ++ )
      ncov_data[i][j] = ncov_data[i][j - 1] + ncov_data[i][j]
  }
}




// console.log(ncov_data)



let map_svg = d3.select("#map").append("svg")
  .attr("id", "fujian_map")
  .attr("font-family", "Arial")
  .attr("width", map_width - map_margin.left - map_margin.right)
  .attr("height", map_height - map_margin.top - map_margin.bottom);


let states = map_svg.append("g")
  .attr("id", "states")
  .selectAll("path");

let nanhai_svg = map_svg.append("g")
  .attr("id", "nanhai")

let texts = map_svg.append("g")
  .attr("id", "text")

let title_left = map_width * 0.05
let title_top = map_height * 0.09
let title_font_size = "1.5em"

let date_left = map_width * 0.05
let date_top = map_height * 0.12
let date_font_size = "1em"


let scale_button_right = map_width * 0.95
let scale_button_top = map_height * 0.08
let scale_button_width = 100
let scale_button_height = 35
let scale_button_font = 18

let legend_left = map_width * 0.05
let legend_top = map_height * 0.3
let legend_width = 80
let legend_height = 18
let legend_opacity = 0.8
let legend_skip = 2

let play_left = map_width * 0.9
let play_top = map_height * 0.5
let play_width = map_width * 0.05
let play_opacity = 0.3

let day_left = map_width * 0.05
let day_top = map_height * 0.95 
let day_size = "3em"

let total_left = map_width * 0.05 
let total_top = map_height * 0.85
let total_font_size = "2em"

// 数据来源
let info_left = map_width * 0.75
let info_top = map_height * 0.94
let info_font_size = "0.7em"
let info_top_second = map_height * 0.96

let copyright_left = map_width * 0.5 - map_height * 0.1
let copyright_top = map_height * 0.92
let copyright_height = map_height * 0.04



// 适配手机

if (map_height > map_width)
{
  d3.select(".titleText").style("font-size", "2em")
  title_left = map_width * 0.05
  title_top = map_height * 0.07
  title_font_size = map_width / 20

  date_left = map_width * 0.05
  date_top = map_height * 0.10
  date_font_size = map_width / 40



  scale_button_right = map_width * 0.95
  scale_button_top = map_height * 0.12
  scale_button_width = map_width / 5
  scale_button_height = map_width / 15
  scale_button_font = scale_button_height / 2

  legend_left = title_left
  legend_top = map_height * 0.12
  legend_width = map_width * 0.13
  legend_height = date_font_size * 1.2
  legend_opacity = 0.8
  legend_skip = 2

  play_left = map_width * 0.8
  play_top = map_height * 0.7
  play_width = map_width * 0.1
  play_opacity = 0.3

  day_left = title_left
  day_top = map_height * 0.8 
  day_size = "4em"

  total_left = title_left
  total_top = map_height * 0.75
  total_font_size = "2em"

  // 数据来源
 info_left = map_width * 0.05
 info_top = map_height * 0.9
 info_font_size = date_font_size
 info_top_second = info_top + map_height * 0.02

   copyright_left = map_width * 0.5 - map_height * 0.1
   copyright_top = map_height * 0.95
   copyright_height = map_height * 0.04

}



let title = map_svg.append("g")
  .attr("transform", "translate(" + title_left + "," + title_top  + ")")
  // change
title.append("text")
  .text("新型冠状病毒感染肺炎疫情: " + simple_province_name + "态势")
  .attr('font-size', title_font_size)
  .attr('text-anchor', "start")
  .style("fill", "#D75E5E")
  .style("text-decoration", "underline")
  .style("text-shadow", "-2px -2px white, 2px 2px #F6978E")


let date = map_svg.append("g")
  .attr("transform", "translate(" + date_left  + "," + date_top  + ")")
  
date.append("text")
  .attr('font-size', date_font_size)
  .attr('text-anchor', "start")
  .style("fill", "#666")

let scale_button = map_svg.append('g')
  .attr('id', "scale_button")
  .attr("transform", function(d){
    return "translate(" + scale_button_right + "," + scale_button_top + ")"
  })



let log_button = scale_button.append("g")
  .attr("transform", "translate(" + (-scale_button_width) +", 0)")

let linear_button = scale_button.append("g")
  .attr("transform", "translate(" + (-scale_button_width) +", " + (scale_button_height + 7) + ")")

let normal_button = scale_button.append("g")
  .attr("transform", "translate(" + (-scale_button_width) +", " + (scale_button_height + 7) * 2 + ")")


log_button.append("rect")
  .attr("width", scale_button_width ) 
  .attr("height", scale_button_height)
  .attr("fill", "#D75E5E")
  .attr("rx", 8)

log_button.append("text")
  .text("对数比例")
  .attr("text-anchor", "middle")
  .attr("y", (scale_button_height + scale_button_font ) / 2 - 2)
  .attr("x", scale_button_width / 2 )
  .style("fill", "white")
  .attr("font-size", scale_button_font)


linear_button.append("rect")
  .attr("width",scale_button_width ) 
  .attr("height", scale_button_height)
  .attr("fill", "#98999A")
  .attr("rx", 8)

linear_button.append("text")
  .text("线性比例")
  .attr("text-anchor", "middle")
  .attr("y", (scale_button_height + scale_button_font ) / 2 - 2)
  .attr("x", scale_button_width / 2 )
  .style("fill", "white")
  .attr("font-size", scale_button_font)

normal_button.append("rect")
  .attr("width",scale_button_width ) 
  .attr("height", scale_button_height)
  .attr("fill", "#98999A")
  .attr("rx", 8)

normal_button.append("text")
  .text("面积固定")
  .attr("text-anchor", "middle")
  .attr("y", (scale_button_height + scale_button_font ) / 2 - 2)
  .attr("x", scale_button_width / 2 )
  .style("fill", "white")
  .attr("font-size", scale_button_font)



log_button.on("click", function(d){
  method = "log"
  log_button.select("rect")
    .attr("fill", "#D75E5E")
  linear_button.select("rect")
    .attr("fill", "#98999A")
  normal_button.select("rect")
    .attr("fill", "#98999A")
  if (!is_playing){
      update_current_step()
  }
})

linear_button.on("click", function(d){
  method = "linear"
  log_button.select("rect")
    .attr("fill", "#98999A")
  linear_button.select("rect")
    .attr("fill", "#D75E5E")
  normal_button.select("rect")
    .attr("fill", "#98999A")
  if (!is_playing){
      update_current_step()
  }
})

normal_button.on("click", function(d){
  method = "normal"
  log_button.select("rect")
    .attr("fill", "#98999A")
  linear_button.select("rect")
    .attr("fill", "#98999A")
  normal_button.select("rect")
    .attr("fill", "#D75E5E")
  if (!is_playing){
      update_current_step()
  }
})





let legend = map_svg.append("g")
  .attr("transform", "translate(" + legend_left  + "," + legend_top  + ")")

let single_legend_contain = legend.selectAll(".single_legend")
  .data(color_ncov)
  .enter()
  .append("g")
  .attr("class", "single_legend")
  .attr("transform", function(d, i){
    return "translate(0," + i * (legend_height + legend_skip) + ")"
  })

single_legend_contain.append("rect")
  .attr("fill", function(d){
    return d
  })
  .attr("width", legend_width )
  .attr("height", legend_height )
  .attr("opacity", legend_opacity)

single_legend_contain.append("text")
  .attr("transform", "translate(1, 17)")
  .text(function(d, i){
    let small = Math.pow(2, i) * legend_index + 1
    let big  = Math.pow(2, i + 1) * legend_index
    if (i === 0)
    {
      small = 1
    }
    if (i === 6)
    {
      big = ""
      return "> " + (small - 1)
    }
    return small + "-" + big
  })
  .style("fill", "#fff")

//添加播放按钮



map_svg.append("image")
    .attr("xlink:href", "./play-button.png")
    .attr("x", play_left)
    .attr("y", play_top)
    .attr("id", "play")
    .attr("width", play_width)
    .attr("opacity", play_opacity)
    .on("click", function(d, i){
      if (!is_playing){
        console.log("continue play")
        play_button()
      }
      else if (is_playing){
        stop_button()
      }
    })




map_svg.append("image")
    .attr("xlink:href", "./icon.png")
    .attr("x", copyright_left)
    .attr("y", copyright_top)
    .attr("id", "play")
    .attr("height", copyright_height)




// let copyright = map_svg.append("g")
//   .attr("transform", "translate(" + map_width * 0.5  + "," + map_height * 0.96  + ")")
//   .append("text")
//   .text("© PKU Visualization and Visual Analytics Group")
//   .attr('font-size', "1em")
//   .attr('text-anchor', "middle")
//   .style("font-family", "Khand-Regular")
//   .style("fill", "#444")


let day_info = map_svg.append("g")
  .attr("transform", "translate(" + day_left + "," + day_top + ")")
  .append("text")
  .attr("id", "day")
  .attr('font-size', day_size)
  .attr('text-anchor', "start")
  .style("fill", "#666")



let total_info = map_svg.append("g")
  .attr("transform", "translate(" + total_left  + "," + total_top + ")")
  .append("text")
  .attr("id", "day")
  .attr('font-size', total_font_size)
  .attr('text-anchor', "start")
  .style("fill", "#666")
  .text("")

let data_info = map_svg.append("g")
  .attr("transform", "translate(" + info_left  + "," +  info_top + ")")
  .append("text")
  .attr("id", "day")
  .attr('font-size', info_font_size)
  .attr('text-anchor', "start")
  .text("数据来源：国家卫生健康委员会")
  .style("fill", "#444")
  .style("text-decoration", "underline")

let src_info = map_svg.append("g")
  .attr("transform", "translate(" + info_left  + "," + info_top_second  + ")")
  .append("text")
  .attr("id", "day")
  .attr('font-size', info_font_size)
  .attr('text-anchor', "start")
  .text("变形地图库：gist.github.com/emeeks/d57083a45e60a64fe976")
  .style("fill", "#444")
  .style("text-decoration", "underline")

// https://gist.github.com/emeeks/d57083a45e60a64fe976




function update_current_step(){
  let ncov_value = get_value_from_someday(ncov_data, current_step);
  console.log(current_step)
  console.log(ncov_value);
  update_ncov_data(ncov_value, 500)
}

let min_edge = map_width 
if (map_height < map_width * 3/4)
{
  min_edge = map_height * 4/3
}



let projection = d3.geoAlbers()
  .rotate([-center_location[0], 0])
  .center([-0, center_location[1]])
  .scale(min_edge * range_index )
  .translate([map_width / 2, map_height / 2])

let topology,
  geometries,
  carto_features;

let hexTooltip = d3.select("body").append("div").attr("class", "hexTooltip")

// let pop_data = d3.map();

let carto = d3.cartogram()
    .projection(projection)
    .iterations(30)
    .properties(function (d) {
      // this adds the "properties" properties to the geometries
      return d;
    });

let province_data


let city_polygon = new Array()
let city_pathNode = new Array()
let hex_state = new Array() // 存储各个六边形的状态, 注意它是反过来的
let city_list = ["福州","厦门","莆田","三明","泉州","漳州","南平","龙岩","宁德"]
let all_major_list = ["数理化生", "经济管理", "语言文学", "信息技术","机械能源", "政法城关","考古历史", "元培计划", ""]
let science_major_list = ["信息技术", "数理化生", "机械能源", "经济管理"]
let literature_major_list = ["语言文学","考古历史", "元培计划", "政法城关"]
let student_data

let color_choices =  ['#fbb4ae','#b3cde3','#ccebc5','#decbe4','#fed9a6','#ffffcc','#e5d8bd','#fddaec','#f2f2f2']



function play(table_data)
{
  is_playing = true
  d3.select("#play").attr("xlink:href", "./stop-button.png")
  console.log("???")
  run_on_step(0)


  // for (let i = 0; i < ncov_data[0].length - 1; i ++){
  //       setTimeout(function(){
  //         day = "1月" + (i + 4) + "日";
  //         console.log(day);
  //         let ncov_value = get_value_from_someday(table_data, i + 1);
  //         console.log(ncov_value);
  //         update_ncov_data(ncov_value, 500)
  //         let total_number = 0;
  //         for (j = 0; j < provinces_number; j ++){
  //           total_number = total_number + table_data[j][i + 1]
  //         }
  //         // parseInt(table_data[34][day]) + parseInt(table_data[28][day]) + parseInt(table_data[32][day]) + parseInt(table_data[33][day])
  //         console.log(total_number)
  //         update_total(total_number)
  //         update_day(day)
  //         if (i == ncov_data[0].length - 2){
  //           is_playing = false
  //           d3.select("#play").attr("xlink:href", "./play-button.png")
  //         }
  //       },600 * i)
  // }
}

function run_on_step(i)
{
  if (!is_playing)
    return
  setTimeout(function(){
    if (!is_playing)
      return
    day = get_day(i);
    // console.log(day);
    console.log("day", day)
    let ncov_value = get_value_from_someday(ncov_data, i + 1);
    console.log("ncov_value", ncov_value);
    update_ncov_data(ncov_value, 500)
    let total_number = 0;
    for (j = 0; j < provinces_number; j ++){
      total_number = total_number + ncov_data[j][i + 1]
    }
    // parseInt(table_data[34][day]) + parseInt(table_data[28][day]) + parseInt(table_data[32][day]) + parseInt(table_data[33][day])
    // console.log(total_number)
    update_total(total_number)
    update_day(day)
    current_step = i + 1
    if (i == ncov_data[0].length - 2){
      stop_button()
    }
    
    run_on_step(i + 1)
  },600)
}

function reload_map()
{
  // update_day("")
  // total_info.text("")

  play(ncov_data)  
}

function update_day(day)
{
  day_info.text(day)
}

function update_total(total_number)
{
  total_info.text("累计确诊：" + total_number)
}

function draw_day(){

}

function get_value_from_someday(table_data, day){
  let ncov_value = new Array()
  for (i = 0; i < ncov_data.length; i ++ )
  {
    // console.log(table_data[i])
    // console.log(table_data[i]["1月5日'"])
    console.log(table_data[i][0])
    let index = provinces.indexOf(table_data[i][0])

    ncov_value[index] = parseInt(table_data[i][day])
  }
  // console.log("value", ncov_value)
  return ncov_value;
}
function update_ncov_data(day_ncov_value, set_time = 3000, initialize = false){
  let value_array = new Array()//[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  for (i = 0; i < provinces_number; i ++){
    if (initialize)
    {
      value_array[i] = provinces_area[provinces[i]]
    }
    else if (method == "log"){
      value_array[i] = Math.log(day_ncov_value[i] + 1 ) + provinces_area[provinces[i]]/50000
      if (provinces[i] == simple_province_name)
        value_array[i] = value_array[i] * 1.5
    }
    else if (method == "normal")
      value_array[i] = provinces_area[provinces[i]]
    else{
      value_array[i] = day_ncov_value[i] + provinces_area[provinces[i]]/1000
    }
    // 
  }
  console.log("看看数值", value_array)


  carto.value(function (d, i ) {
    // let ret = Math.floor(Math.random() * 500)
    let this_value = parseFloat(value_array[i])
    // console.log(this_value)
    return this_value 
    // return 1;
  });

  carto_features = carto(topology, geometries).features;

  states.data(carto_features)
    .text(function (d, i ) {
      return provinces[i];
    })

  // console.log(carto.path)

  // states.transition()
  //     .duration(set_time)
  //     .attr("d", carto.path)
  //     .attr("fill", function(d, i){
  //         // let city_index = parseInt(d.properties.id[3]) - 1
  //         let value = day_ncov_value[i];
  //         return get_color(value)

  //         // return "white"
  //       })


  d3.selectAll(".state")
    .attr("new_d", carto.path)
    // .each(function(d){
    //   console.log(get_centroid(d3.select(this).attr("new_d"))) 
    // })

  let duration_contain = d3.transition()
      .duration(set_time)

  duration_contain.selectAll(".state")
      .attr("d", carto.path)
      .attr("fill", function(d, i){
          // let city_index = parseInt(d.properties.id[3]) - 1
          if (initialize)
            return get_color(0)
          let value = day_ncov_value[i];
          return get_color(value)
          // return "white"
      })

  // console.log(carto.path)

  let province_name = duration_contain.selectAll(".name")
      .attr("transform", function(d, i){
        // console.log(bbox)
        center = get_centroid(d3.select('#province_' + i).attr("new_d"))
        // console.log("center", center)
        // console.log(bbox.x + bbox.width/2, bbox.y + bbox.height/2)
        center = adjust_position(center, i)
        return "translate(" + center[0] + "," + center[1] + ")"
      })

  province_name.selectAll(".province_number")
      .text(function(d){
        return day_ncov_value[provinces.indexOf(d)]
      })
      .attr("fill-opacity", function(d,i){
        if (day_ncov_value[provinces.indexOf(d)] == 0 || initialize)
          return 0
        return 1
      })
      .attr("font-size", function(d, i){
        if (initialize)
          return "1em"
        let font_size = value_array[provinces.indexOf(d)]
        if (method == "log")
          return (font_size/10 + 1) + "em"
        // if (method == "normal")
        //   return "1em"

        return (Math.log(value_array[provinces.indexOf(d)] + 1) / 10 + 1) + "em"
      })
      .attr("y", "1em")

  province_name.selectAll(".province_name")
      .attr("fill-opacity", function(d, i){
        if (initialize)
          return 1
        if (day_ncov_value[provinces.indexOf(d)] == 0)
          return 0
        return 1
      })
}

function adjust_position(center, i){
  let position = new Array()
  position[0] = center[0]
  position[1] = center[1]

  if (provinces[i] == "香港" || provinces[i] == "澳门")
    position[1] = center[1] + map_height * 0.05
  if (provinces[i] == "内蒙古")
  {  
    position[0] = center[0] - map_width * 0.03
    position[1] = center[1] + map_height * 0.04
  }
  if (provinces[i] == "天津")
  {  
    position[0] = center[0] + map_width * 0.01
    position[1] = center[1] + map_height * 0.01
  }
  return position
}

d3.json(map_file)
  .then(function(data){
    topology = data;
    console.log(data)
    geometries = topology.objects.collection.geometries;

    console.log(geometries)
    let features = carto.features(topology, geometries),
      path = d3.geoPath()
        .projection(projection);

    console.log(features)

    // add_nanhai()
    
    states = states.data(features)
        .enter()
        .append("path")
        .attr("class", "state")
        .attr("id", function (d, i) { return "province_" + i; })
        .attr("name", function(d, i){
          return provinces[i]
        })
        .attr("fill", function(d, i){
          // let city_index = parseInt(d.properties.id[3]) - 1
          return "#F2F2F2"

          // return "white"
        })
        // .attr("fill-opacity", 1)
        .attr("d", path)
        .attr("stroke", "#fff")
        .attr("stroke-width", "2px")
        .attr("fill-opacity", 0.9)
    
    texts = texts.selectAll(".name")
      .data(provinces)
      .enter()
      .append("g")
      .attr('class', "name")
      .attr("transform", function(d, i){
        center = get_centroid(d3.select('#province_' + i).attr("d"))
        // console.log("center", center)
        // console.log(bbox.x + bbox.width/2, bbox.y + bbox.height/2)
        center = adjust_position(center, i)
        return "translate(" + center[0] + "," + center[1] + ")"
      })
      .attr("id", function(d, i){
        return "province_name_" + i
      })

    texts.append("text")
      .attr("class", "province_name")
      .attr("text-anchor", "middle")
      .text(function(d){
        return d
      })
    
    texts.append("text")
      .attr("class", "province_number")
      .attr("text-anchor", "middle")

    
      // province_data = table_data
      // window._table_data = table_data
      // console.log(table_data)

    // d3.csv("https://tanshaocong.github.io/2019-nCoV/detail.csv")
    url = "https://tanshaocong.github.io/2019-nCoV/map.csv"
    d3.csv(url)
    .then(function(data){
      // a = data[1000]
      console.log(url)
      // modify_city_name()
      // console.log("old", ncov_data)
      ncov_data = convert_data(data)
      modify_city_name() 
      console.log("new", ncov_data)
      d3.csv("https://tanshaocong.github.io/2019-nCoV/time.csv")
      .then(function(update_time){
        console.log(update_time[0]["time"])
        date.select("text").text("数据截止至 " + update_time[0]["time"])

      })
      .catch(function(error){
        date.select("text").text("数据截止至" + get_day(ncov_data[0].length - 2) + "24时")
      })
      // date.select("text").text("数据截止至" + get_day(ncov_data[0].length - 2) + "24时")
      play(ncov_data)
    })
    // .catch(function(error){
    //   console.log("read from local")
    //   d3.csv("map.csv")
    //   .then(function(data){
    //     // modify_city_name()
    //     console.log("old", ncov_data)
    //     ncov_data = convert_data(data)
    //     modify_city_name() 
    //     console.log("new", ncov_data)
    //     date.select("text").text("数据截止至" + get_day(ncov_data[0].length - 2) + "24时")
    //     play(ncov_data)
    //   })
    // })


    
      


    // read_data()
  })
  .catch(function(error){
    console.log("error")
     // handle error
  })

// map_svg.on("click", function(){
//   let m = d3.mouse(this)
//   console.log(m)
//   // draw_closest(m)
// })
//

function get_centroid(coords){
    coords = coords.replace(/ *[LC] */g,'],[').replace(/ *M */g,'[[[').replace(/ *Z */g,']]]').replace(/ *z */g,']]]').replace(/ /g,'],[');
    if (coords.split("]]][[[").length > 1 ){
      coords = coords.split("]]][[[")[0] + "]]]"
    }
    // console.log(coords)
    return d3.geoPath().centroid({
      "type":"Feature",
      "geometry":{"type":"Polygon","coordinates":JSON.parse(coords)}
  });
}


function get_color(value){
  
  if (value == 0)
    return "#F2F2F2"
  if (value <= 2 * legend_index)
    return color_ncov[0]
  if (value <= 4 * legend_index)
    return color_ncov[1]
  if (value <= 8 * legend_index)
    return color_ncov[2]
  if (value <= 16 * legend_index)
    return color_ncov[3]
  if (value <= 32 * legend_index)
    return color_ncov[4]
  if (value <= 64 * legend_index)
    return color_ncov[5]
  // if (value < 640)
  //   return color_ncov[6]
  return color_ncov[6]

}


function add_play(){
  map_svg.append("image")
    .attr("xlink:href", "./play-button.png")
    .attr("x", map_width * 0.9)
    .attr("y", map_height * 0.5)
    .attr("id", "play")
    .attr("width", map_width * 0.05)
    .attr("opacity", 0.3)
    .on("click", function(d, i){
      if (!is_playing){
        console.log("continue play")
        play_button()
      }
      else if (is_playing){
        stop_button()
      }
    })
    // .attr("height", map_width * 0.12);
}

function stop_button(){
  is_playing = false
  d3.select("#play").attr("xlink:href", "./play-button.png")
}

function play_button(){
  is_playing = true
  console.log("enter play")
  d3.select("#play").attr("xlink:href", "./stop-button.png")
  console.log("current_step", current_step)
  console.log("ncov_data[0].length",  ncov_data[0].length)
  if (current_step == ncov_data[0].length - 1){
    initialize()
    setTimeout(function(){
         run_on_step(0)
    },2000)
  }
  else
    run_on_step(current_step + 1)
}


function sleep(delay) {
        let start = new Date().getTime();
        while (new Date().getTime() < start + delay);
      }

Array.prototype.insert = function (index, item) {
  this.splice(index, 0, item);
};

function initialize(set_time = 500)
{

  let ncov_value = get_value_from_someday(ncov_data, current_step);
  console.log(ncov_value);
  update_ncov_data(ncov_value, set_time, true)

}

function get_day(i)
{
  let date = i + begin_date
  if (date > 31)
  {
    return "2月" + (date - 31) + "日"
  }
  return "1月" + date + "日"
}

function get_day_index(day_str)
{
  let date_array = day_str.split(/月|日/)
  let month = parseInt(date_array[0])
  let day = parseInt(date_array[1])
  if (month == 1)
    return day
  if (month == 2)
    return day + 31
  if (month == 3)
    return day + 60
  return (month - 1) * 30 + day 


  // let date = i + 10
  // if (date > 31)
  // {
  //   return "2月" + (date - 31) + "日"
  // }
  // return "1月" + date + "日"
  return 0
}


function convert_data(data){ 
    console.log(data)
    let item_number = data.length
    let new_data = new Array()
    let date_list = new Array()
    for (i = 0; i < item_number; i ++)
    {
      let current_item = data[i]
      if (current_item["类别"] != "地区级")
        continue
      if (current_item["省份"] != simple_province_name)
        continue
      let city_name = current_item["城市"].replace("市", "").replace("恩施州", "恩施").replace("林区", "")
      // city_name = correct_simple_name(city_name)
      // console.log(city_name)
      if (!new_data.hasOwnProperty(city_name))
        new_data[city_name] = new Array()
      let new_add = current_item["新增确诊病例"]

      if (new_add === "")
        new_add = 0
      else 
        new_add = parseInt(new_add)

      if (!new_data[city_name].hasOwnProperty(current_item["公开时间"])){

        new_data[city_name][current_item["公开时间"]] = new_add
      }
      else {
        new_data[city_name][current_item["公开时间"]] += new_add
        // if (parseInt(current_item["新增确诊病例"]) > new_data[city_name][current_item["公开时间"]])
        //   new_data[city_name][current_item["公开时间"]] = parseInt(current_item["新增确诊病例"])
      }
      if (date_list.indexOf(current_item["公开时间"]) === -1)
        date_list.push(current_item["公开时间"])
    }
    console.log("new_data ", new_data)
    date_list = date_list.sort()
    console.log(date_list)
    begin_date = get_day_index(date_list[0])
    end_date = get_day_index(date_list[date_list.length - 1])
    console.log("end_date", begin_date)
    console.log("end_date", end_date)
    diff_day = end_date - begin_date
    console.log(diff_day)

    let table_data = new Array()
    let city_list = Object.keys(new_data)
    let city_dict = find_pair(city_list)
    console.log("city_dict", city_dict)
    let used_city = new Array()
    for (i = 0; i < city_list.length; i ++ )
    {
      table_data[i] = new Array()
      table_data[i][0] = city_dict[city_list[i]]
      used_city[i] = city_dict[city_list[i]] 

      for (j = 0; j < diff_day + 1; j ++)
      {
        // console.log(city_list)
        // console.log(city_list[i])
        // console.log()
        if (new_data[city_list[i]].hasOwnProperty(get_day(j)))
          table_data[i][j + 1] = new_data[city_list[i]][get_day(j)]
        else table_data[i][j + 1] = 0
      }
      // for (j = 1; j < )
    }

    console.log("old table_data"+ table_data)
    console.log("city_list", city_list)
    console.log("cities", cities)
    console.log("used_city", used_city)
    let city_index = city_list.length
    for (i = 0; i < provinces.length; i ++)
    {
      console.log("正在排查", provinces[i])
      if (used_city.indexOf(provinces[i]) === -1)
      {
        console.log(provinces[i])
        table_data[city_index] = new Array()
        console.log(table_data[city_index])
        // table_data[city_index][2] = 0
        table_data[city_index][0] = provinces[i]
        for (j = 0; j < diff_day + 1; j ++)
        {
          // console.log(city_list)
          // console.log(city_list[i])
          // console.log("asdf" + table_data[city_index])
          table_data[city_index][j + 1] = 0
          // console.log(city_index)
        }
        city_index = city_index + 1
      }
    }
    console.log("new table_data" + table_data)
    let table_data_length = table_data.length
    console.log("table_data_length", table_data_length)
    // for (i = 0; i < table_data_length; i ++ )
    // {
    //   table_data[i][0] = correct_simple_name(table_data[i][0])
    // }
    

    console.log(city_list)
    console.log("new table_data", table_data)
    return table_data
}

function find_pair(city_list){
  console.log("city_list", city_list)
  console.log("cities", cities)
  let city_dict = new Array()
  for (let i = 0; i < city_list.length; i ++)
  {
    city_dict[city_list[i]] = city_list[i]
    for (let j = 0; j < cities.length; j ++)
    {
      if (city_list[i].indexOf(cities[j]) === 0)
      {
        city_dict[city_list[i]] = cities[j]
      }
    }
  }
  console.log(city_dict)
  return city_dict
}

function modify_name(city_name){
  let new_name 
  if (city_name.indexOf("市") > -1)
    new_name = city_name.replace("市", "")
  else if (city_name.indexOf("州") > -1)
    new_name = city_name.replace("州", "")
  else if (city_name.indexOf("林区") > -1)
    new_name = city_name.replace("林区", "")
  return new_name
}

function correct_simple_name(city_name){
  // console.log(city_name)
  let new_city_name = city_name

  for (i = 0; i < provinces_number; i ++){
    // console.log(provinces[i])
    if (city_name.indexOf(provinces[i]) === 0){
      // console.log(provinces[i])
      new_city_name = provinces[i]
    }
  }
  console.log(new_city_name)
  return new_city_name
}

