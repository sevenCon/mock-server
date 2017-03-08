// 配置 Mock 路径
require.config({
    paths: {
        mock: '../lib/mock'
    }
});

// 加载 Mock
require(['mock'], function(Mock) {

    var service = {
        // [效果分析]3.1.4预习/作业/辅导分析列表
        getPreAnalysisList:{ 
            type:'get',
            name:'getPreAnalysisList',
            url:'\/json\/analysis\/selectListWithCourseAnalysis.do',
            res:{
                'status|1': 0,
                'msg':"",
                'result':{
                    'pageIndex':1,
                    'pageCount|2-15':15,
                    'pageSize':5,
                    'recordCount|2':+('@pageSize')*+('@pageCount'),
                    'data|5':[{
                        'id|3':111,
                        'courseId|3':999,
                        'createdTime':Mock.mock('@date()'),
                        'name':Mock.mock('@ctitle'),
                        'submitCount|0-30':30,
                        'allSubmitCount':35,
                        'checkCount|0-15':15,
                        'allCheckCount':35,
                        'endTime':Mock.mock('@date()')
                    }]
                }
            }
        },
        // [效果分析]获取预习课程详情 ???????
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
            url:"\/analysis\/getJudgeContent.do" ,
            res:{
                'status|1': 0,
                'msg':"",
                'result':{
                    'pageIndex':1,
                    'pageCount|2-15':15,
                    'pageSize':5,
                    'recordCount|2':+('@pageSize')*+('@pageCount'),
                    'data|5':[{
                        'id|3':111,
                        'courseId|3':999,
                        'createdTime':Mock.mock('@date()'),
                        'name':Mock.mock('@ctitle'),
                        'submitCount|0-30':30,
                        'allSubmitCount':35,
                        'checkCount|0-15':15,
                        'allCheckCount':35,
                        'endTime':Mock.mock('@date()')
                    }]
                }
            }
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
                    'pageIndex':1,
                    'pageCount|2-15':15,
                    'pageSize':5,
                    'recordCount|2':+('@pageSize')*+('@pageCount'),
                    'data|5':[{
                        'questionId|3':111,
                        'assignTime':Mock.mock('@date()'),
                        'questionName':Mock.mock('@ctitle'),
                        'rightAnswer|1':['A','B','C','D'],
                        'wrongRate':Mock.mock('@natural(60, 100)') + '%',
                        'source':"",
                        'choose_item_list|4':[{
                            'name|+1':["A","B","C","D"],
                            'value|+1':["A","B","C","D"],
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
                'msg':""
            }
        },
        // [效果分析]3.1.6课堂列表
        selectWorkingDay:{
            type:"get",
            name:"selectWorkingDay",
            url:"\/json\/analysis\/selectWorkingDay.do",  
            res:{
                'status|1': 0,
                'msg':"",
                'result':{
                    'date':Mock.mock('@date()'),,
                    'value|1':[0,1]
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
                'result':Mock.mock("@date()");
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
                    'course':{
                       'courseId|4':9999,
                       'name':Random.title(5),
                       'type|1':[0,1,2,4]
                       'lessonId|4':9999    
                       'assignTime':Mock.mock("@date()"),
                       'endTime':Mock.mock("@date()")
                    },
                    'singleCorrectRates|12':[{
                        'testId|4':9999,
                        'questionId|4':9999,
                        'result|10-40':40,
                        'testQuestionId|4':9999,
                        'rightsRate': Mock.mock('@natural(60, 100)') + '%',
                        'nativeRightsRate':"0."+Mock.mock('@natural(60, 100)'),
                        'seq|+1':1
                    }]
                    'topicCorrectRates':{
                        'topicId|4':9999,
                        'name':Mock.mock("@ctitle"),
                        'rightsRate':Mock.mock('@natural(60, 100)') + '%',
                        'nativeRightsRate': Random.float(0, 0, 2, 2)
                    },
                    'averageRate':Mock.mock('@natural(60, 100)') + '%'
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
                'msg':""
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
                    'commitedInTimeSum|20-35':35,
                    'commitedInTimeUsers|@commitedInTimeSum':[{
                        'id|4':9999,
                        'userName':Mock.mock('@cname'),
                        'courseId|4':9999,
                        'userId|4':9999,
                        'createdTime':Mock.mock("@date()"),
                        'personRate':Mock.mock('@natural(60, 100)') + '%',
                        'nativeRate':"0."+Mock.mock('@natural(60, 100)')
                    }],
                    'commitedLateSum|1-5':5,
                    'commitedLateUsers|@commitedLateSum':[{
                        'id|4':9999,
                        'userName':Mock.mock('@cname'),
                        'courseId|4':9999,
                        'userId|4':9999,
                        'createdTime':Mock.mock("@date()"),
                        'personRate':Mock.mock('@natural(60, 100)') + '%',
                        'nativeRate':"0."+Mock.mock('@natural(60, 100)')
                    }],
                    'noCommitedSum|1-5':5,
                    'noCommitedInTimeUsers|@noCommitedSum':{
                        'id|4':9999,
                        'userName':Mock.mock('@cname'),
                        'courseId|4':9999,
                        'userId|4':9999,
                        'createdTime':Mock.mock("@date()"),
                        'personRate':Mock.mock('@natural(60, 100)') + '%',
                        'nativeRate':"0."+Mock.mock('@natural(60, 100)')
                    }
                }
            }
        },
        // [效果分析] 课程（预习，作业，辅导）3.1.8题目详情
        detailQuestion:{
            type:"get",
            name:"detailQuestion",
            url:"\/json\/course\/detailQuestion.do", 
            res:{
                'status|1': 0,
                'msg':"",
                'result':{
                    'testQuestionId|4':9999,
                    'testType|1':[2,4,5],
                    'testId|4':9999,
                    'seq|+1':1,
                    'fileUrl':{
                        'src':'',
                        'pdf':'',
                        'swf':''
                    },
                    'questionList':[{
                        'questionId|4':9999,
                        'testId|4':9999,
                        'seq|+1':["@../seq"+"-1","@../seq"+"-2","@../seq"+"-3"]
                    }],
                    'question':{
                        'questionId|4':9999,
                        'questionType':[1,2,3,4],
                        'name':Mock.mock("@ctitle(10,15)"),
                        'rightAnswer|1':["A","B","C","D"],
                        'rightRate':Mock.mock('@natural(60, 100)') + '%',
                        'analyse':Mock.mock("@ctitle(20,35)"),
                        'chooseItem|4':[{
                            'rightStatus|+1':[0,0,0,1],
                            'name|+1':["A","B","C","D"],
                            'value|+1':["A","B","C","D"],
                            'questionItem':Mock.mock("@ctitle(20,35)")
                            'userList|5-20':[{
                                'userId|4'：9999,
                                'userName':Mock.mock("@date()")
                            }]
                        }]
                    }
                }
            }
        }
    }

    var _service = Object.assign(service);
    for(var key in _service) {
        Mock.mock(new RegExp(_service[key].url), _service[key].res);
    }

    $.ajax({
        url:service.getMistakensList.url,
        dataType:"json",
        type:"GET",
        success:function(res){
            console.log(res);
        }
    })

});