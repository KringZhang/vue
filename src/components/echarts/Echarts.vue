<template>
    <div class="echarts">
        <el-row :gutter="12">
            <el-col :span="10">
                <div class="title">车辆统计</div>
                <el-card shadow="hover">
                    <div class="left">
                        <div class="left-top-text">车辆总数</div>
                        <div class="left-top-number">60</div>
                    </div>
                    <div class="right">
                        <div class="right-text">ATB总数</div>
                        <div class="right-number">60</div>
                        <div class="right-text">SIM卡总数</div>
                        <div class="right-number">60</div>
                        <div class="right-text">NAC总数</div>
                        <div class="right-number">60</div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="14">
                <div class="title">车辆激活统计</div>
                <el-card shadow="hover">
                    <!-- <div>
                        <el-select v-model="">
                            <el-option></el-option>
                        </el-select>
                    </div> -->
                    <!-- 折线图 -->
                    <div id="lineGraph"></div>
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="12">
            <el-col :span="10">
                <div class="title">售出激活占比</div>
                <el-card shadow="hover">
                    <!-- 饼状图 -->
                    <div id="pieGraph"></div>
                </el-card>
            </el-col>
            <el-col :span="14">
                <div class="title">子车系激活率</div>
                <el-card shadow="hover">
                    <!-- 柱状图 -->
                    <div id="barGraph"></div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import echarts from 'echarts';
export default {
    data() {
        return {
            lineGraph: '',
            pieGraph: '',
            barGraph: '',
        }
    },
    methods: {
        drawLineGraph() {
            this.lineGraph = echarts.init(document.getElementById('lineGraph'));
			this.lineGraph.showLoading();
			const option = {
                color: ['#3398DB', '#ED7D31'],
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    bottom: 0,
			        left: 'center',
                    data:['用户', '试乘试驾'],
                },
                grid: {
                    left: '3%',
                    right: '50px',
                    bottom: '7%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    name: '日期',
                    boundaryGap: false,
                    data: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'],
                },
                yAxis: {
                    type: 'value',
                    name: '车辆激活数量'
                },
                series: [
                    {
                        name:'用户',
                        type:'line',
                        stack: '总量',
                        data:[120, 132, 101, 134, 90, 230, 210, 210, 20, 216, 264, 110, 210, 290, 360, 10, 90, 45, 29, 200],
                        // label: {
						// 	normal: {
						// 		show: true,
						// 		position: 'top'
						// 	}
						// },
                    },
                    {
                        name:'试乘试驾',
                        type:'line',
                        stack: '总量',
                        data:[220, 182, 191, 234, 290, 330, 310, 320, 92, 245, 123, 153, 312, 24, 64, 109, 208, 45, 65, 230],
                        // label: {
						// 	normal: {
						// 		show: true,
						// 		position: 'top'
						// 	}
						// },
                    },
                ]
			};
			this.lineGraph.setOption(option);
			this.lineGraph.hideLoading();
			window.addEventListener('resize', this.resizeLineGraph, false);
        },
        drawPieGraph() { // 饼状图
            this.pieGraph = echarts.init(document.getElementById('pieGraph'));
			this.pieGraph.showLoading();
			const option = {
                backgroundColor: '#F3F3F3',
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                // legend: {
                //     orient: 'vertical',
                //     x: 'left',
                //     data:['直达','营销广告','搜索引擎','邮件营销','联盟广告','视频广告','百度','谷歌','必应','其他']
                // },
                series: [
                    {
                        name:'售出情况',
                        type:'pie',
                        selectedMode: 'single',
                        radius: [0, '30%'],

                        label: {
                            normal: {
                                position: 'inner'
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:[
                            {value:335, name:'用户'},
                            {value:679, name:'初始'},
                            {value:1548, name:'试乘试驾'}
                        ]
                    },
                    {
                        name:'售出情况',
                        type:'pie',
                        radius: ['40%', '55%'],
                        label: {
                            normal: {
                                formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                                backgroundColor: '#eee',
                                borderColor: '#aaa',
                                borderWidth: 1,
                                borderRadius: 4,
                                // shadowBlur:3,
                                // shadowOffsetX: 2,
                                // shadowOffsetY: 2,
                                // shadowColor: '#999',
                                // padding: [0, 7],
                                rich: {
                                    a: {
                                        color: '#999',
                                        lineHeight: 22,
                                        align: 'center'
                                    },
                                    // abg: {
                                    //     backgroundColor: '#333',
                                    //     width: '100%',
                                    //     align: 'right',
                                    //     height: 22,
                                    //     borderRadius: [4, 4, 0, 0]
                                    // },
                                    hr: {
                                        borderColor: '#aaa',
                                        width: '100%',
                                        borderWidth: 0.5,
                                        height: 0
                                    },
                                    b: {
                                        fontSize: 16,
                                        lineHeight: 33
                                    },
                                    per: {
                                        color: '#eee',
                                        backgroundColor: '#334455',
                                        padding: [2, 4],
                                        borderRadius: 2
                                    }
                                }
                            }
                        },
                        data:[
                            {value:335, name:'试乘试驾已售'},
                            {value:310, name:'用户已售'},
                            {value:234, name:'用户未售'},
                            {value:135, name:'初始已售'},
                            {value:1048, name:'初始未售'},
                        ]
                    }
                ]
            };
			this.pieGraph.setOption(option);
			this.pieGraph.hideLoading();
			window.addEventListener('resize', this.resizePieGraph, false);
        },
        drawBarGraph() { // 柱状图
            this.barGraph = echarts.init(document.getElementById('barGraph'));
			this.barGraph.showLoading();
			const option = {
                color: ['#3398DB', '#ED7D31'],
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    data:['用户', '试乘试驾'],
                    bottom: 0,
			        left: 'center',
                },
                grid: {
                    left: '3%',
                    right: '50px',
                    bottom: '7%',
                    containLabel: true
                },
                xAxis : [
                    {
                        name: '子车系',
                        type : 'category',
                        data : ['R83','P87','T93','P84C','C6','C84']
                    }
                ],
                yAxis : [
                    {
                        name: '激活率',
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'用户',
                        type:'bar',
                        stack: '激活率',
                        label: {
							normal: {
								show: true,
								position: 'inside'
							}
						},
						barWidth: '40%',
                        data:[30, 45, 17, 35, 67, 34]
                    },
                    {
                        name:'试乘试驾',
                        type:'bar',
                        stack: '激活率',
                        label: {
							normal: {
								show: true,
								position: 'inside'
							}
						},
						barWidth: '40%',
                        data:[5, 17, 4, 6, 12, 3]
                    },
                ]
            };
			this.barGraph.setOption(option);
			this.barGraph.hideLoading();
			window.addEventListener('resize', this.resizeBarGraph, false);
        },
        resizeLineGraph() {
			this.lineGraph.resize();
		},
        resizePieGraph() {
			this.pieGraph.resize();
		},
        resizeBarGraph() {
			this.barGraph.resize();
		},
    },
    mounted() {
        this.drawLineGraph();
        this.drawPieGraph();
        this.drawBarGraph();
    },
    destroyed() {
		window.removeEventListener('resize', this.resizeLineGraph, false);
		window.removeEventListener('resize', this.resizePieGraph, false);
		window.removeEventListener('resize', this.resizeBarGraph, false);
	}
}
</script>

<style lang="less" scoped>
.echarts{
    .el-card{
        margin-bottom: 20px;
        height: 350px;
    }
    .title{
        margin-bottom: 10px;
        font-size: 18px;
        font-weight: bolder;
    }
    /deep/ .el-card__body{
        display: flex;
        & > .left{
            display: flex;
            flex: 1;
            height: 310px;
            flex-direction: column;
            justify-content: center;
            & > .left-top-text{
                margin: 0 0 10px 33%;
                width: 50%;
                font-size: 20px;
            }
            & > .left-top-number{
                margin: 0 0 0 33%;
                width: 50%;
                font-size: 20px;
                font-weight: bold;
            }
        }
        & > .right{
            display: flex;
            flex: 1;
            height: 310px;
            flex-direction: column;
            justify-content: center;
            & > .right-text{
                margin: 0 0 10px 16%;
                width: 50%;
                font-size: 16px;
            }
            & > .right-number{
                margin: 0 0 10px 16%;
                width: 50%;
                font-size: 16px;
                font-weight: bold;
            }
        }
    }
    #lineGraph{
        width: 100%;
        height: 310px;
    }
    #pieGraph{
        width: 100%;
        height: 310px;
    }
    #barGraph{
        width: 100%;
        height: 310px;
    }
}
</style>
