import {
  xingliTest,
  yiyuTest,
  qingxuTest
} from "./test_data.js"

Page({
  data: {
    options: null,
    inputValue: "",
    msgList: [],
    questions: [],
    curQuetIndex: 0,
    fenshu: 0,
    showResult: !1,
    testResult: null,
    scrollTop: 0,
    oldScrollTop: 0,
  },
  onLoad(options) {
    this.data.options = options;
    if (this.data.options.type === "2") {
      wx.setNavigationBarTitle({
        title: '抑郁测试'
      })
    }
    if (this.data.options.type === "3") {
      wx.setNavigationBarTitle({
        title: '情绪测试'
      })
    }
    this.initTest()
  },
  initTest() {
    let data = ["你好，我是你的心里健康助手小emo我可以智能分析你目前的心理健康状态，如实请您填写以下问题。", "测试开始，预计需要一分钟完成"];
    let i = 0;
    let interval = setInterval((() => {
      if (i < data.length && data[i]) {
        this.data.msgList.push({
          type: 0,
          msg: data[i]
        })
        this.renderMsgList()
      } else {
        clearInterval(interval)
        setTimeout((() => {
          this.getQuestion()
        }).bind(this), 500)
      }
      i++
    }).bind(this), 500)
  },
  getQuestion() {
    this.data.questions = xingliTest.questionList
    if (this.data.options.type === "2") this.data.questions = yiyuTest.questionList
    if (this.data.options.type === "3") this.data.questions = qingxuTest.questionList
    this.showQuestion(0)
  },
  showQuestion(index) {
    if (index > this.data.questions.length - 1) {
      this.getTestResult()
      return
    }
    this.data.msgList.push({
      type: 0,
      msg: this.data.questions[index].question
    })
    if (this.data.questions[index].answerList.length > 0) {
      this.data.msgList.push({
        type: 2,
        answers: this.data.questions[index].answerList.map((item) => {
          return item.answer
        })
      })
    }
    this.renderMsgList()
    this.data.curQuetIndex = index;
    this.goBottom()
  },
  setInput() {

  },
  sendMsg() {
    this.sendAnswer(null, this.data.inputValue)
    this.setData({
      inputValue: ''
    })
  },
  sendAnswer(e, answer = "") {
    if (e) answer = e.currentTarget.dataset.answer
    let answerItem = this.data.questions[this.data.curQuetIndex].answerList.find((item) => {
      return answer.indexOf(item.answer) != -1
    });
    if (!answerItem) {
      wx.showToast({
        title: '请提交正确的答案',
        icon: 'error',
        duration: 1000
      });
      return;
    }
    this.data.fenshu = this.data.fenshu + answerItem.fenshu;
    this.data.msgList.push({
      type: 1,
      msg: answer
    })
    this.renderMsgList()
    setTimeout((() => {
      this.showQuestion(this.data.curQuetIndex + 1)
    }).bind(this), 500)
    this.goBottom()
  },
  getTestResult() {
    let resultList = xingliTest.resultList;
    if (this.data.options.type === "2") resultList = yiyuTest.resultList
    if (this.data.options.type === "3") resultList = qingxuTest.resultList
    let result = resultList.find(((item) => {
      return this.data.fenshu >= item.start && this.data.fenshu <= item.end
    }).bind(this))
    this.data.msgList = []
    this.renderMsgList()
    this.data.msgList.push({
      type: 0,
      msg: '本测试及结果经供参考，不能作为诊断及诊疗的依据'
    })
    this.renderMsgList()
    this.setData({
      testResult: result,
      showResult: true
    })
    this.goTop()
  },
  scroll(e) {
    this.data.oldScrollTop = e.detail.scrollTop
  },
  goTop(e) {
    this.data.scrollTop = this.data.oldScrollTop
    wx.nextTick(function () {
      this.setData({
        scrollTop: 0
      })
    }.bind(this));
  },
  goBottom(e) {
    this.data.scrollTop = this.data.oldScrollTop
    wx.nextTick(function () {
      this.setData({
        scrollTop: this.data.scrollTop + 800
      })
    }.bind(this));
  },
  redo() {
    wx.redirectTo({
      url: '/pages/emotest/emotest?type=' + this.data.options.type
    })
  },
  goToKnowledge() {
    wx.navigateTo({
      url: '/pages/qxknowledge/qxknowledge',
    })
  },
  renderMsgList() {
    this.setData({
      msgList: this.data.msgList
    })
  }
})