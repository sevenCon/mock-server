var Mock = require("./assets/vendor/mock/mock.js");

var service = {
        // [效果分析]获取预习分析列表
        getPreAnalysisList:{ 
            type:'get',
            name:'getPreAnalysisList',
            url:'\/json\/analysis\/selectListWithCourseAnalysis.do',
            res:{
                'status|1': 1,
                'msg':"",
                'result':{
                    'classId|1-10000':10000,
                    'className|2-10':["高三(1)班","初二(41)班"]
                }
            }
        },
        // [效果分析]获取预习课程详情
        preAnalysisLessionDetail:{
            type:"get",
            name:"preAnalysisLessionDetail",
            url:"analysis\/preAnalysisLessionDetail.do",
            res:{
               'status|1': 1,
                'msg':"",
                'result':{
                    'classId|1-10000':10000,
                    'className|2-10':["高三(1)班","初二(41)班"]
                } 
            }
        },
        // [效果分析]获取批改内容
        getJudgeContent:{
            type:"get",
            name:"getJudgeContent",
            url:"\/analysis\/getJudgeContent.do"  
        },
        // [效果分析]获取错题列表
        getMistakensList:{
            type:"get",
            name:"selectWrongTitleSetListWithAnalysis",
            url:"\/json\/analysis\/selectWrongTitleSetListWithAnalysis.do", 
            res:{
                'status|1': 0,
                'msg':"",
                'result':{
                    'recordCount|2':10,
                    'pageSize':5,
                    'pageIndex':1,
                    'pageCount|2-15':15,
                    'data|1-10':[{
                        'questionId|3':111,
                        'assignTime':Mock.mock('@date()'),
                        'questionName':Mock.mock('@ctitle'),
                        'rightAnswer|1':['A','B','C','D'],
                        'wrongRate':Mock.mock('@natural(60, 100)') + '%',
                        'source':"",
                        'choose_item_list|4':[{
                            'name|+1':["A","B","C","D"],
                            'value+1':["A","B","C","D"],
                            'questionItem':Mock.mock('@city')
                        }]
                    }]
                }
            }
        },
        // [效果分析]获取班级列表
        getAnalysisTeachingList:{
            type:"get",
            name:"teachingList",
            url:"\/json\/class\/teachingClassList.do",
            res:{
                'status|1': 0,
                'msg':"",
                'result':{
                    'classId|1-10000':10000,
                    'className|2-10':["高三(1)班","初二(41)班"]
                }
            }
        },
        // [效果分析]删除错题集
        rmMistakensByIdList:{
            type:"get",
            name:"updateAnalysisByIdList",
            url:"\/json\/analysis\/updateAnalysisByIdList.do",  
            res:{
                'status|1': 0,
                'msg':"",
                'result':{
                    'classId|1-10000':10000,
                    'className|2-10':["高三(1)班","初二(41)班"]
                }
            }
        },
        // [效果分析]删除错题集
        selectWorkingDay:{
            type:"get",
            name:"selectWorkingDay",
            url:"\/json\/analysis\/selectWorkingDay.do",  
            res:{
                'status|1': 0,
                'msg':"",
                'result':{
                    'classId|1-10000':10000,
                    'className|2-10':["高三(1)班","初二(41)班"]
                }
            }
        },
        // [效果分析]课程截止
        updateCourseEndTime:{
            type:"post",
            name:"updateCourseEndTime",
            url:"\/json\/analysis\/updateCourseEndTime.do", 
            res:{
                'status|1': 0,
                'msg':"",
                'result':{
                    'classId|1-10000':10000,
                    'className|2-10':["高三(1)班","初二(41)班"]
                }
            } 
        },
        // [效果分析] 预习/作业/辅导分析详情百分比数据
        courseResultAnalysis:{
            type:"get",
            name:"courseResultAnalysis",
            url:"\/json\/analysis\/courseResultAnalysis.do",  
            res:{
                'status|1': 0,
                'msg':"",
                'result':{
                    'classId|1-10000':10000,
                    'className|2-10':["高三(1)班","初二(41)班"]
                }
            }
        },
        // [效果分析] 批改作业
        checkQuestion:{
            type:"post",
            name:"checkQuestion",
            url:"\/json\/course\/checkQuestion.do",  
            res:{
                'status|1': 0,
                'msg':"",
                'result':{
                    'classId|1-10000':10000,
                    'className|2-10':["高三(1)班","初二(41)班"]
                }
            }
        },
        // [效果分析] 课程（预习，作业，辅导）提交情况
        commitedDetail:{
            type:"get",
            name:"commitedDetail",
            url:"\/json\/course\/commitedDetail.do",  
            res:{
                'status|1': 0,
                'msg':"",
                'result':{
                    'classId|1-10000':10000,
                    'className|2-10':["高三(1)班","初二(41)班"]
                }
            }
        },
        // [效果分析] 课程（预习，作业，辅导）作业列表，答题卡，题库
        detailQuestion:{
            type:"get",
            name:"detailQuestion",
            url:"\/json\/course\/detailQuestion.do", 
            res:{
                'status|1': 0,
                'msg':"",
                'result':{
                    'classId|1-10000':10000,
                    'className|2-10':["高三(1)班","初二(41)班"]
                }
            }
        }
}

var _service = Object.assign(service});
for(var key in _service) {
    Mock.mock(new RegExp(_service[key].url), _service[key].res);
}


$.ajax({
    url:"\/json\/analysis\/selectListWithCourseAnalysis.do",
    dataType:"json",
    type:"GET",
    success:function(res){
        console.log('selectListWithCourseAnalysis.do, 获取预习分析列表',JSON.stringify(res));
    }
})
