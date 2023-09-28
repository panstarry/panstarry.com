webpackJsonp([7],{

/***/ 1017:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1027)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1021),
  /* template */
  __webpack_require__(1034),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-2a64fb95",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1021:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// 引用事例
// import CalendarByDay from './../../components/calendar/calendar-by-day.vue';
// <CalendarByDay @queryByDayNav="queryByDayNav"
// @querySelectedDay ='querySelectedDay'
// :max-date='{year:year,month:month,date:date}'
// :min-date="{year:year-10,month:month,date:date}"
// :query-date-prop="queryDateProp" ref="calendar"
//     ></CalendarByDay>
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "calendar-by-day",

  props: {
    hasMarkedProp: {
      type: Array
    },

    minDate: {
      type: Object
    },

    maxDate: {
      type: Object
    },

    queryDateProp: {
      type: Array
    },

    dateShowProp: {
      type: Boolean,
      default: false
    },

    // 选择过去时间标识（报表）
    pastTag: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      todayDate: '',
      oDate: [],
      weekList: ['日', '一', '二', '三', '四', '五', '六'],
      dateList: [],
      year: '',
      month: '',
      date: '',
      currentDate: new Date(),
      changeDate: [],
      pikerShow: false,
      thisIndex: null,
      thisIndexObject: null,
      dateShow: false,
      showDate: false,
      hasMarked: this.hasMarkedProp,
      queryDate: null,
      maxDatePicker: null,
      minDatePicker: null

    };
  },
  mounted() {
    this.initDate(this.queryDateProp, false);
    this.hasMarked = this.hasMarkedProp;
    this.maxDatePicker = new Date(this.maxDate.year, this.maxDate.month, this.maxDate.date);
    this.minDatePicker = new Date(this.minDate.year, this.minDate.month, this.minDate.date);
  },
  watch: {
    hasMarkedProp: {
      immediate: true,
      handler() {
        this.hasMarked = this.hasMarkedProp;
      }
    }
  },
  methods: {
    confirmDatePiker() {
      let time, selectTime;
      let todayDate = this.queryDate.split('-');

      if (this.maxDate != null) {
        if (this.changeDate[0] > this.maxDate.year) {
          alert('抱歉，您选择的时间不支持查询');
          return false;
        } else if (this.changeDate[0] == this.maxDate.year) {
          if (this.changeDate[1] > this.maxDate.month + 1) {
            alert('抱歉，您选择的时间不支持查询');
            return false;
          } else if (this.changeDate[1] == this.maxDate.month + 1) {
            if (this.changeDate[2] > this.maxDate.date) {
              alert('抱歉，您选择的时间不支持查询');
              return false;
            }
          }
        }
      }
      time = this.changeDate;
      selectTime = time.join('-');
      this.initDate(time, false);
      this.pikerShow = false;
      this.$emit('querySelectedDay', selectTime);
    },

    getColumnValue() {
      this.changeDate = $.Util.formatDate(this.currentDate).split('-');
    },

    showDatePiker() {
      this.pikerShow = !this.pikerShow;
    },

    initDate(time, callQuerySelectedDay = true) {
      this.queryDate = $.Util.formatDate(new Date());
      if (this.pastTag && !time) {
        time = this.queryDateProp;
      }
      this.oDate = time ? time : this.queryDate.split('-');
      this.year = parseInt(this.oDate[0]);
      this.month = parseInt(this.oDate[1]);
      this.date = parseInt(this.oDate[2]);
      this.getDateList(this.month, this.year, this.date);
      this.changeDate = $.Util.formatDate(this.oDate).split('-');
      this.dateShow = this.dateShowProp;
      if (time && callQuerySelectedDay) {
        this.$emit('querySelectedDay', this.oDate.join('-'));
      }
    },

    getDateList(month, year, date) {
      this.dateList = [];
      let oDate = new Date();
      let fullYearAllDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      let thisMonthDays = fullYearAllDays[month - 1];
      if (month == 2) {
        if (year % 4 == 0 && year % 100 !== 0 || year % 400 == 0) {
          thisMonthDays = 29;
        }
      }
      oDate.setYear(year);
      oDate.setMonth(month - 1, 1);
      //oDate.setDate(1)
      let week = oDate.getDay();
      for (let j = 0; j < week; j++) {
        this.dateList.push('');
      }
      this.thisIndex = parseInt(date + week - 1);
      for (let i = 1; i < thisMonthDays + 1; i++) {
        this.dateList.push({ iDate: i });
      }
    },

    resetDateList(time) {
      this.changeDate = $.Util.formatDate(this.oDate).split('-');
      this.$emit('queryByDayNav', time);
    },

    setPrevDay() {
      this.resetDateList(-1);
    },

    setNextDay() {
      if (this.pastTag) {
        if (this.maxDate != null && Number(this.oDate[0]) == this.maxDate.year && Number(this.oDate[1]) - 1 >= this.maxDate.month && Number(this.oDate[2]) >= this.maxDate.date) {
          this.$notify({ type: 'warning', message: '亲，您选择的时间不支持查询哦' });
          return false;
        }
      }
      this.resetDateList(1);
    },

    seeThisDayRecorder(i, date) {
      let queryDate, dateArg;
      let todayDate = this.queryDate.split('-');
      todayDate.map(item => {
        return parseInt(item);
      });
      if (this.maxDate != null) {
        if (this.changeDate[0] > this.maxDate.year) {
          alert('抱歉，您选择的时间不支持查询');
          return false;
        } else if (this.changeDate[0] == this.maxDate.year) {
          if (this.changeDate[1] > this.maxDate.month + 1) {
            alert('抱歉，您选择的时间不支持查询');
            return false;
          } else if (this.changeDate[1] == this.maxDate.month + 1) {
            if (this.changeDate[2] > this.maxDate.date || date > this.maxDate.date) {
              alert('抱歉，您选择的时间不支持查询');
              return false;
            }
          }
        }
      }

      this.thisIndex = i;
      dateArg = date < 10 ? '0' + date : date;
      this.oDate.splice(2, 1, dateArg);
      queryDate = this.oDate.join('-');
      this.$emit('querySelectedDay', queryDate);
    },

    showDateFunc() {
      this.dateShow = !this.dateShow;
    }
  }
});

/***/ }),

/***/ 1024:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(763)(false);
// imports


// module
exports.push([module.i, ".section-part[data-v-2a64fb95]{margin:0;border-top:0}.pos-fix[data-v-2a64fb95]{position:fixed;bottom:0;left:0;width:100%;z-index:2100}.qd-calendar .qd-head[data-v-2a64fb95]{padding:0 20px;height:50px;line-height:50px}.qd-calendar .qd-head .iconfont[data-v-2a64fb95]{vertical-align:-2px;font-size:18px}.qd-calendar .today-date[data-v-2a64fb95]{height:33px;line-height:30px;margin:9px 0 0;padding:0 9px}.qd-calendar .qd-week[data-v-2a64fb95]{padding:0 20px;height:50px;line-height:50px;font-weight:600}.qd-calendar .qd-week .week-list[data-v-2a64fb95]{width:14.28%;text-align:center}.qd-calendar .qd-date[data-v-2a64fb95]{padding:5px 10px 10px;justify-content:flex-start}.qd-calendar .qd-date .qd-list[data-v-2a64fb95]{width:14.28%;text-align:center;padding:2px 8px;position:relative;margin:4px 0}.qd-calendar .qd-date .qd-list .iconfont[data-v-2a64fb95]{position:absolute;font-size:38px;top:50%;left:50%;text-align:center;display:inline-block;transform:translate(calc(-50% + -2px),-50%)}.qd-calendar .drop-down-date[data-v-2a64fb95]{color:#999;font-size:14px;text-align:center;padding:10px 0}.qd-calendar .drop-down-date .iconfont[data-v-2a64fb95]{vertical-align:-2px}", ""]);

// exports


/***/ }),

/***/ 1027:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1024);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(764)("dbb10672", content, true, {});

/***/ }),

/***/ 1034:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "qd-calendar"
  }, [_c('section', {
    staticClass: "qd-head row full-sec",
    staticStyle: {
      "margin": "0"
    }
  }, [_c('div', {
    staticClass: "prev-month",
    on: {
      "click": function($event) {
        return _vm.setPrevDay()
      }
    }
  }, [_c('i', {
    staticClass: "iconfont iconArrow-left"
  }), _vm._v("前一天")]), _vm._v(" "), _c('div', {
    staticClass: "today-date",
    on: {
      "click": _vm.showDatePiker
    }
  }, [_vm._v(_vm._s(_vm.oDate.join('-')))]), _vm._v(" "), _c('div', {
    staticClass: "next-month",
    on: {
      "click": function($event) {
        return _vm.setNextDay()
      }
    }
  }, [_vm._v("后一天"), _c('i', {
    staticClass: "iconfont iconArrow-right"
  })])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.dateShow),
      expression: "dateShow"
    }],
    staticClass: "week-date"
  }, [_c('div', {
    staticClass: "qd-week row"
  }, [_vm._l((_vm.weekList), function(week, i) {
    return [_c('div', {
      key: i,
      staticClass: "week-list"
    }, [_vm._v(_vm._s(week))])]
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "qd-date row"
  }, [_vm._l((_vm.dateList), function(date, idx) {
    return [_c('div', {
      key: idx,
      staticClass: "qd-list",
      class: {
        active: idx == _vm.thisIndex
      },
      on: {
        "click": function($event) {
          return _vm.seeThisDayRecorder(idx, date.iDate)
        }
      }
    }, [(idx == _vm.thisIndex) ? _c('i', {
      staticClass: "iconfont iconSelection"
    }) : _vm._e(), _vm._v(_vm._s(date.iDate) + "\n        ")])]
  })], 2)]), _vm._v(" "), _c('div', {
    staticClass: "drop-down-date",
    on: {
      "click": _vm.showDateFunc
    }
  }, [_vm._t("totalNumber"), _vm._v(" "), _c('i', {
    staticClass: "iconfont",
    class: {
      'iconUnder-the-arrow': !_vm.dateShow,
      ' iconOn-the-arrow': _vm.dateShow
    }
  })], 2), _vm._v(" "), _c('van-popup', {
    attrs: {
      "position": "bottom",
      "overlay": true
    },
    model: {
      value: (_vm.pikerShow),
      callback: function($$v) {
        _vm.pikerShow = $$v
      },
      expression: "pikerShow"
    }
  }, [_c('div', {
    staticClass: "pos-fix"
  }, [(_vm.pikerShow) ? _c('van-datetime-picker', {
    attrs: {
      "type": "date",
      "min-date": _vm.minDatePicker,
      "max-date": _vm.maxDatePicker
    },
    on: {
      "cancel": _vm.showDatePiker,
      "confirm": _vm.confirmDatePiker,
      "change": _vm.getColumnValue
    },
    model: {
      value: (_vm.currentDate),
      callback: function($$v) {
        _vm.currentDate = $$v
      },
      expression: "currentDate"
    }
  }) : _vm._e()], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 1410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_sys_img_upload_vue__ = __webpack_require__(953);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_sys_img_upload_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_sys_img_upload_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_pull_down_list_vue__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_pull_down_list_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_pull_down_list_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_monthDayPicker_vue__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_monthDayPicker_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_monthDayPicker_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  components: { PullDownList: __WEBPACK_IMPORTED_MODULE_1__components_pull_down_list_vue___default.a, MonthDayPicker: __WEBPACK_IMPORTED_MODULE_2__components_monthDayPicker_vue___default.a, ImgUpload: __WEBPACK_IMPORTED_MODULE_0__components_sys_img_upload_vue___default.a },

  props: {
    from: {
      type: String,
      default: 'shop'
    },
    defaultReadonly: {
      type: Boolean,
      default: false,
      required: false
    }
  },

  data() {
    return {
      g: $,
      readonly: true,
      chargeByHourConf: {
        fromMin1: null,
        toMin1: null,
        fromMin2: null,
        toMin2: null
      },
      hasMchId: false,
      cardTypeName: '',
      moreCheckinPaymentIdxList: [],
      moreCheckinPaymentTitles: {},
      moreCheckinPaymentValues: {},
      limitDatesDlg: false,
      limitDate: {
        dlg: false,
        ITEM_SIZE: 2,
        beginMonths: [null, null],
        beginDays: [null, null],
        endMonths: [null, null],
        endDays: [null, null],
        desc: null
      },
      moreCardPricePlans: [[], [], [], [], []],
      displayMoreCardPrices: false,
      shopId: null,
      cardForm: {
        limitTimes: { beginTime: '', endTime: '' },
        beginTime: '选择',
        endTime: '选择',
        beginDate: [0, 0, 0, 0],
        endDate: [0, 0, 0, 0]
      },
      card: {
        cardId: '',
        cardName: '',
        cardType: null,
        cardClass: null,
        cardTimeType: 1,
        allowTransfer: false,
        transferFee: null,
        allowCheckin: true,
        checkinPayment: null,
        orderNo: 99,
        intro: '',
        defaultAmount: null,
        defaultDays: null,
        defaultTimes: null,
        createUname: '',
        createTime: '',
        limitTimes: [],
        encSidList: [],
        isOnlineSale: false,
        chargeByHourEnable: false,
        chargeByHourVal: null,
        chargeByHourConf: null,
        chargeByHourBegin: null,
        moreChargeUnitPirceHours: null,
        moreChargeUnitPirceAmount: null,
        isPublic: true,
        isShowPrice: true,
        bgFontColor: 'f1f1f1',
        isShowBgText: true,
        limitBeginDays: null,
        limitOddEvenDay: 0,
        limitWeeks: null,
        limitVacationCount: null,
        limitVacationDays: null,
        allowMemberOptVacation: null
      },
      cardClass: ['会籍卡', '团课卡', '私教卡'],
      cardType: ['期限卡', '次卡', '储蓄卡', '计时卡'],
      beginTimeShow: false,
      endTimeShow: false,
      confirmDateS: ['', ''],
      dlgView: {
        inputShow: false,
        showTips: false,
        datePicker: false,
        datePickerClear: true,
        setBgImg: false,
        setBgFontColor: false,
        setBgMethod: false,
        checkinPayment: false
      },
      swichs: [{ show: '是', hide: '否' }, { show: '是', hide: '否' }, { show: '是', hide: '否' }, { show: '是', hide: '否' }, { show: '是', hide: '否' }, { show: '是', hide: '否' }, { show: '是', hide: '否' }, { show: '是', hide: '否' }],
      tipsCont: '',
      weeks: [{ day: '周一', select: false, no: 1 }, { day: '周二', select: false, no: 2 }, { day: '周三', select: false, no: 3 }, { day: '周四', select: false, no: 4 }, { day: '周五', select: false, no: 5 }, { day: '周六', select: false, no: 6 }, { day: '周日', select: false, no: 0 }],
      limitWeekArr: [],
      onlineSaleLimit: [{ limit: '只限访客购买', select: false }, { limit: '每个手机号只能购买一次', select: false }],
      bgImgActive: 0,
      BG_IMG_CNT: 8,
      bgImgType: 1,
      imgUpload: {
        action: $.Conf.IMG_UPLOAD_URL,
        imgMaxWidth: 1024,
        defaultList: []
      },
      bgImgUrl: null,
      bgFontColors: ['f1f1f1', '444444', 'F8263E', 'F37622', 'F0DE3B', 'A6E22E', '3399FF', '9a76b1'],
      isOnlineCardInDb: false,
      qrcodeUrl: null,
      stepsIdx: 1,
      stepsIdxActive: [true, false, false, false],
      confirmBack: false,
      checkFlag: true,
      checkinPaymentFlag: true,
      checkinPaymentConfirm: ''
    };
  },

  components: { ImgUpload: __WEBPACK_IMPORTED_MODULE_0__components_sys_img_upload_vue___default.a },

  created() {
    if (this.$route.params.cardId) {
      this.card.cardId = this.$route.params.cardId;
      this.queryCard();
    } else if (this.defaultCardId) {
      this.card.cardId = this.defaultCardId;
      this.queryCard();
    } else {
      this.bgImgUrl = this.getBgImgUrl();
      if (this.defaultReadonly) this.readonly = true;else this.readonly = !$.Util.hasRoleFunc($.Dict.RoleFunc.CARD_EDIT.value);
    }
  },

  mounted() {
    this.initCardData();
    this.queryMchId();
    this.queryShopId();
  },

  methods: {
    initCardData() {
      this.card.limitWeeks = this.limitWeekArr.join(',');
      this.card.limitTimes = [this.cardForm.limitTimes.beginTime, this.cardForm.limitTimes.endTime];
      this.card.onlinePrice = this.card.onlinePrice;
    },

    initCardFormData() {
      this.onlineSaleLimit[0].select = this.card.isOnlineSaleForGuest;
      this.onlineSaleLimit[1].select = this.card.isOnlineSaleOnce;
    },

    queryCard() {
      const args = { queryType: 1, cardId: this.card.cardId };
      $.Req.service($.SvName.CARD_QUERY, args, ret => {
        if (ret && ret.cardList && ret.cardList[0]) {
          if ($.Util.isEmpty(ret.cardList[0].chargeByHourEnable)) {
            ret.cardList[0].chargeByHourEnable = false;
          }
          if (!ret.cardList[0].bgFontColor) ret.cardList[0].bgFontColor = 'f1f1f1';
          this.card = ret.cardList[0];
          this.initCardFormData();

          if ($.Util.isEmpty(this.card.limitOddEvenDay)) this.card.limitOddEvenDay = 0;
          this.setMoreCheckinPayments();
          this.bgImgUrl = this.getBgImgUrl();

          if (this.card.moreOnlinePrices) {
            this.displayMoreCardPrices = true;
            this.genMoreCardPricePlans(this.card.moreOnlinePrices);
          }

          this.showChargeByHoureConf(this.card.chargeByHourConf);

          if (!this.defaultReadonly) {
            this.readonly = !$.Util.hasRoleFunc($.Dict.RoleFunc.CARD_EDIT.value) || this.from === 'shop' && this.card.isUniversal;
          }

          if (this.card.limitBeginTime && this.card.limitEndTime) {
            this.card.limitTimes = [$.Util.formatTime(this.card.limitBeginTime), $.Util.formatTime(this.card.limitEndTime)];
            this.cardForm.limitTimes = { beginTime: this.card.limitTimes[0], endTime: this.card.limitTimes[1] };
          } else {
            this.card.limitTimes = null;
          }
          if (this.card.limitDates) {
            let items = this.card.limitDates.split(';');
            for (let i = 0, len = items.length; i < len; i++) {
              let dates = items[i].split(',');
              let beginDates = dates[0].split('/');
              this.limitDate.beginMonths[i] = parseInt(beginDates[0]);
              this.limitDate.beginDays[i] = parseInt(beginDates[1]);
              let endDates = dates[1].split('/');
              this.limitDate.endMonths[i] = parseInt(endDates[0]);
              this.limitDate.endDays[i] = parseInt(endDates[1]);
            }
            let a = [this.limitDate.beginMonths[0], this.limitDate.beginDays[0], this.limitDate.beginMonths[1], this.limitDate.beginDays[1]];
            let b = [this.limitDate.endMonths[0], this.limitDate.endDays[0], this.limitDate.endMonths[1], this.limitDate.endDays[1]];
            this.cardForm.beginDate = a;
            this.cardForm.endDate = b;
            if (a[0] && a[1] && b[0] && b[1]) {
              this.confirmDateS[0] = a[0] + '月' + a[1] + '日 ~ ' + b[0] + '月' + b[1] + '日';
            }
            if (a[2] && a[3] && b[2] && b[3]) {
              this.confirmDateS[1] = a[2] + '月' + a[3] + '日 ~ ' + b[2] + '月' + b[3] + '日';
            }
          }
          if (this.card.chargeByHourValMore) {
            let arr = this.card.chargeByHourValMore.split(',');
            if (arr && arr.length === 2) {
              this.card.moreChargeUnitPirceHours = parseInt(arr[0]);
              this.card.moreChargeUnitPirceAmount = parseFloat(arr[1]);
            }
          }
        } else {
          if (this.from === 'shop') this.$router.push('/shop-card-conf');else if (this.from === 'tenant') this.$router.push('/tenant-card-conf');
        }
        this.isOnlineCardInDb = this.card.isOnlineSale === true;

        if (this.card.limitWeeks) {
          let limitWeeks = this.card.limitWeeks.split(',');
          limitWeeks = limitWeeks.sort();
          for (let w of limitWeeks) {
            this.limitWeekArr.push(parseInt(w));
          }

          this.weeks.map((weekItem, idx) => {
            this.limitWeekArr.map(limitWeekItem => {
              if (limitWeekItem == weekItem.no) {
                weekItem.select = true;
              }
            });
          });
        }
      }, true);
    },

    showTipDlg(val) {
      this.dlgView.showTips = true;
      if (val == 'cardClass') {
        if (this.card.cardClass === 0) {
          this.tipsCont = '会籍卡，会员入场自由锻炼用的卡';
        } else if (this.card.cardClass === 1) {
          this.tipsCont = '团课卡，会员上团课使用的卡';
        } else if (this.card.cardClass === 2) {
          this.tipsCont = '私教卡，会员上私教课使用的卡';
        }
      }

      if (val == 'cardType') {
        this.tipsCont = '请慎重选择，设置后不可修改';
      }
      if (val == 'showPrice') {
        this.tipsCont = '展示时是否显示会员卡原价，即“默认充值金额”';
      }
      if (val == 'onlineSale') {
        this.tipsCont = '如果设置为“是”，客户可以在本店微官网上在线购买会员卡，购买后自动成为本店会员。';
      }
      if (val == 'defaultDays') {
        this.tipsCont = '<p> 指默认使用的有效期天数，员工给会员实际办卡时可自由调整。</p>如果设置了在线售卡，会员购买成功后，系统自动将此卡添加有效期天数。';
      }
      if (val == 'fobiddenModifyTime') {
        this.tipsCont = '<p>如果选择“是”，工作人员给会员办卡时，系统根据“默认使用天数”自动设置有效期，并且不可修改。</p>否则，可自由设置会员卡有效期。';
      }
      if (val == 'useHoursCount') {
        this.tipsCont = '如果本卡启用了按小时计费，会员入场签到后，系统就开始计时，会员离场时需要前台做签出操作，系统会根据签到和签出的时间差自动扣除会员卡的费用。';
      }
      if (val == 'checkinCount') {
        this.tipsCont = '设置此时间后，系统在计费时将先扣除此时间，然后再根据剩余的时间计费。';
      }
      if (val == 'limitTimes') {
        this.tipsCont = '表示每天只能在此时间段内使用本卡';
      }
      if (val == 'limitWeeks') {
        this.tipsCont = '<p>全不选（默认）表示不限制，相当于全选。如果勾选部分星期，表示只限定规定的星期可使用卡。</p>例如，勾选了“周六、周日”，表示只能在每周的周六和周日使用本卡。';
      }
      if (val == 'limitDate') {
        this.tipsCont = '表示每年只能在此期限内使用本卡';
      }
      if (val == 'weekCheckInTime') {
        this.tipsCont = '<p>表示每个会员使用此卡【每天 / 每周 / 每月】最多可入场签到多少次。</p>例如，如果设置为：1次/天，3次/周，10次/月，则表示，会员每天最多可入场签到1次，每周最多入场签到3次，每月最多入场签到10次';
      }
      if (val == 'gLessonLimit') {
        this.tipsCont = '<p>表示每个会员使用此卡【每天 / 每周 / 每月】最多可预约上团课多少次。</p>例如，如果设置为：1次/天，3次/周，10次/月，则表示，会员每天最多可预约上课1次，每周最多可预约上课3次，每月最多可预约上课10次';
      }
      if (val == 'pLessonLimit') {
        this.tipsCont = '<p>表示每个会员使用此卡【每天 / 每周 / 每月】最多可预约上私教课多少次。</p>例如，如果设置为：1次/天，3次/周，10次/月，则表示，会员每天最多可预约上课1次，每周最多可预约上课3次，每月最多可预约上课10次';
      }
      if (val == 'limitVacationCount') {
        this.tipsCont = '表示使用该卡在使用期内可请假多少次，不填表示不限制';
      }
      if (val == 'limitVacationDays') {
        this.tipsCont = '表示使用该卡在使用期内最多累计请假多少天，不填表示不限制';
      }
      if (val == 'leaveByCustSelf') {
        this.tipsCont = '<p>如果选择“是”，会员将允许在手机版自助请假，否则不允许。</p>设置为“是”时，建议设置好上面的“请假次数限制”或“请假天数限制”。';
      }
      if (val == 'showOutside') {
        this.tipsCont = '是否对访客或会员展示，如果选择“是”，将在微官网和会员系统的门店信息中展示';
      }
      if (val == 'showOutside') {
        this.tipsCont = '是否对访客或会员展示，如果选择“是”，将在微官网和会员系统的门店信息中展示';
      }
      if (val == 'showPrice') {
        this.tipsCont = '展示时是否显示会员卡原价，即“默认充值金额”';
      }
      if (val == 'orderNo') {
        this.tipsCont = '用于微官网上展示的顺序，数值越小越靠前';
      }
      if (val == 'setBgFontColor') {
        this.tipsCont = ' 显示在会员卡背景图上的文字（会员卡名、价格等）';
      }
      if (val == 'onlinePrice') {
        this.tipsCont = '此价格为在线售卡的实际价格，即客户需要支付的金额。';
      }
      if (val == 'limitBeginDays') {
        this.tipsCont = '指会员在线购买或充值会员卡后，最迟多少天内要使用此卡，否则按照最迟开卡日期为起始日期';
      }

      if (val == 'moreCardPricePlans') {
        this.tipsCont = '启用并编辑更多价格方案后，访客或会员在线购买时可选择任意一种。';
      }
      if (val == 'msiteLink') {
        this.tipsCont = '此链接地址可复制到文案中作为超连接，也可用于制作二维码';
      }
      if (val == 'checkinPayment') {
        this.tipsCont = '储值卡入场签到可设置多个计费方案，工作人员在给会员签到计费时，需要选择一个计费方案。';
      }
    },

    choseTime(d) {
      if (this.readonly) {
        alert('只读模式，不可操作');
        return false;
      }
      this[d + 'Show'] = false;
      if (this.cardForm.limitTimes[d]) {
        this.cardForm[d] = this.cardForm.limitTimes[d];
        this.cardForm[d] = this.cardForm.limitTimes[d];
      }
    },

    choseDate() {
      this.dlgView.datePicker = true;
      this.dlgView.datePickerClear = true;
    },

    clearDate() {
      if (this.readonly) {
        alert('只读模式，不可操作');
        this.dlgView.datePickerClear = false;
        return false;
      }
      for (let i = 0; i < 4; i++) {
        this.cardForm.beginDate[i] = 0;
        this.cardForm.endDate[i] = 0;
      }
      this.confirmDateS = ['', ''];
      this.card.limitDates = '';
      this.dlgView.datePicker = false;
      this.dlgView.datePickerClear = false;
    },

    confirmDate() {
      if (this.readonly) {
        alert('只读模式，不可操作');
        return false;
      }
      let a = [],
          b = [];
      for (let i = 0; i < 4; i++) {
        a[i] = this.cardForm.beginDate[i];
        b[i] = this.cardForm.endDate[i];
      }
      if (a[0] != 0 && a[1] != 0 && b[0] != 0 && b[1] != 0 && a[2] != 0 && a[3] != 0 && b[2] != 0 && b[3] != 0) {
        if (a[0] > b[0]) return false;
        if (a[0] == b[0]) {
          if (a[1] >= b[1]) {
            alert('结束日期必须大于开始日期');
            return false;
          }
        }
        if (a[2] > b[2]) {
          alert('结束日期必须大于开始日期');
          return false;
        }

        if (a[2] == b[2]) {
          if (a[3] >= b[3]) {
            alert('结束日期必须大于开始日期');
            return false;
          }
        }
        this.confirmDateS[0] = a[0] + '月' + a[1] + '日 ~ ' + b[0] + '月' + b[1] + '日';
        this.confirmDateS[1] = a[2] + '月' + a[3] + '日 ~ ' + b[2] + '月' + b[3] + '日';
        this.card.limitDates = a[0] + '/' + a[1] + ',' + b[0] + '/' + b[1] + ';' + a[2] + '/' + a[3] + ',' + b[2] + '/' + b[3];
      }
      this.setDateFunc(0, a, b);
      this.setDateFunc(2, a, b);
    },

    setDateFunc(i, a, b) {
      if (a[i] != 0 && a[i + 1] != 0 && b[i] != 0 && b[i + 1] != 0) {
        if (a[i] < b[i]) {
          this.confirmDateS[i / 2] = a[i] + '月' + a[i + 1] + '日 ~ ' + b[i] + '月' + b[i + 1] + '日';
          this.card.limitDates = a[i] + '/' + a[i + 1] + ',' + b[i] + '/' + b[i + 1];
          this.dlgView.datePicker = false;
        } else if (a[i] == b[i]) {
          if (a[i + 1] < b[i + 1]) {
            this.confirmDateS[i / 2] = a[i] + '月' + a[i + 1] + '日 ~ ' + b[i] + '月' + b[i + 1] + '日';
            this.card.limitDates = a[i] + '/' + a[i + 1] + ', ' + b[i] + '/' + b[i + 1];
            this.dlgView.datePicker = false;
          } else {
            alert('结束日期必须大于开始日期');
            return false;
          }
        } else {
          alert('结束日期必须大于开始日期');
          return false;
        }
      }
      if (i == 0) {
        if (a[0] != 0 && a[1] != 0 && b[0] != 0 && b[1] != 0) {
          this.card.limitDates = a[0] + '/' + a[1] + ',' + b[0] + '/' + b[1];
        } else {
          this.card.limitDates = '';
        }
      } else {
        if (a[2] != 0 && a[3] != 0 && b[2] != 0 && b[3] != 0) {
          if (this.card.limitDates) {
            this.card.limitDates = this.card.limitDates + ';' + a[2] + '/' + a[3] + ',' + b[2] + '/' + b[3];
          } else {
            this.card.limitDates = a[2] + '/' + a[3] + ',' + b[2] + '/' + b[3];
          }
        }
      }
      this.dlgView.datePicker = false;
    },

    selectWeekDay(item, idx) {
      item.select = !item.select;
      this.limitWeekArr = [];
      this.weeks.map(weekItem => {
        if (weekItem.select) {
          this.limitWeekArr.push(weekItem.no);
        }
      });
    },

    selectOnlineSaleLimit(item, idx) {
      item.select = !item.select;
      if (idx == 0) {
        this.card.isOnlineSaleForGuest = item.select;
      } else {
        this.card.isOnlineSaleOnce = item.select;
      }
    },

    chooseBgImg(no) {
      if (this.readonly) {
        alert('只读模式，不可操作');
        return false;
      }
      this.card.bgImg = no + '.jpg';
      this.bgImgUrl = this.getBgImgUrl();
      this.dlgView.setBgImg = false;
      this.bgImgActive = no;
    },

    getBgImgUrl() {
      if (!this.card.bgImg) {
        this.card.bgImg = '4.jpg';
      }
      if (this.card.bgImg.length < 10) {
        return $.Conf.IMG_LIB_URL + '/cardbg/' + this.card.bgImg;
        // return 'http://' + $.Conf.IMG_LIB_URL + '/cardbg/' + this.card.bgImg;
      } else {
        return $.Util.getImgUrl(this.card.bgImg);
      }
    },

    handleImgUploadSuccess(res, file) {
      file.url = res.data.url;
      file.name = res.data.name;

      this.bgImgUrl = res.data.url;
      this.card.bgImg = res.data.name;
      this.dlgView.setBgMethod = false;
    },

    selectBgFontColor(color) {
      if (this.readonly) {
        alert('只读模式，不可操作');
        return false;
      }
      this.card.bgFontColor = color;
      this.dlgView.setBgFontColor = false;
    },

    submitCard() {
      this.initCardData();
      if (this.card.cardClass == null) {
        $.Bble.warning('请选择卡类别');
        return;
      }
      if (this.card.cardType == null) {
        $.Bble.warning('请选择卡类型');
        return;
      }
      if (this.card.cardName == '') {
        $.Bble.warning('请填写卡名');
        return;
      }

      if (this.from === 'tenant') {
        if (!this.card.encSidList || this.card.encSidList.length === 0) {
          $.Bble.warning('请选择适用门店');
          return;
        }
      }

      if (this.card.defaultDays && this.card.defaultDays > 36500) {
        $.Dlg.error('默认使用天数不能超过36500天（一百年）。');
        return;
      }

      if (this.card.allowCheckin && !this.card.checkinPayment && this.card.cardType !== 1 && this.card.cardType !== 4 && !this.card.chargeByHourEnable) {
        $.Bble.warning('您忘了设置【每次签到计费】');
        return;
      }
      if (this.card.cardType === 2 && parseInt(this.card.checkinPayment) != 1 && this.checkinPaymentFlag) {
        this.dlgView.checkinPayment = true;
        this.checkinPaymentConfirm = '您设置的是次卡，每次签到消费是【{0}】次，不是通常的【1】次，确定是这样吗？'.format(this.card.checkinPayment);
        return;
      }
      if (this.card.intro && this.card.intro.length > 1000) {
        $.Dlg.warning('会员卡简介太长了，不能超过1千字。');
        return;
      }
      if (this.hasMchId && this.card.isOnlineSale) {
        if ($.Util.isEmpty(this.card.onlinePrice)) {
          $.Bble.warning('请输入在线售卡价格。');
          return;
        }
        if (this.card.onlinePrice <= 0) {
          $.Bble.warning('请输入大于0的在线售卡价格。');
          return;
        }
        if (!this.card.defaultAmount) {
          $.Bble.warning('请输入默认充值金额。');
          return;
        }
        if (this.card.cardType === 2 && !this.card.defaultTimes) {
          window.scrollTo(0, 0);
          $.Bble.warning('请输入默认使用次数。');
          return;
        }
        if (this.card.cardType === 4 && !this.card.defaultTimes) {
          window.scrollTo(0, 0);
          $.Bble.warning('请输入默认使用时间。');
          return;
        }
        if (!this.card.defaultDays) {
          $.Bble.warning('请输入默认使用天数。');
          window.scrollTo(0, 0);
          return;
        }
      }
      if (this.card.chargeByHourEnable) {
        if (!this.card.chargeByHourVal) {
          $.Bble.warning('请输入每小时计费。');
          return;
        }
        this.card.chargeByHourConf = this.genChargeByHourConf();
        this.card.checkinPayment = null;
      }

      if (this.card.limitTimes && this.card.limitTimes.length === 2) {
        if (this.card.limitTimes[0]) {
          this.card.limitBeginTime = $.Util.getTimeNum(this.card.limitTimes[0]);
        } else {
          this.card.limitBeginTime = null;
        }
        if (this.card.limitTimes[1]) {
          this.card.limitEndTime = $.Util.getTimeNum(this.card.limitTimes[1]);
        } else {
          this.card.limitEndTime = null;
        }
      } else {
        this.card.limitBeginTime = null;
        this.card.limitEndTime = null;
      }
      if (this.limitDate.beginMonth && this.limitDate.beginDay && this.limitDate.endMonth && this.limitDate.endDay) {
        this.card.limitBeginDate = parseInt(this.limitDate.beginMonth) * 100 + parseInt(this.limitDate.beginDay);
        this.card.limitEndDate = parseInt(this.limitDate.endMonth) * 100 + parseInt(this.limitDate.endDay);
      } else {
        this.card.limitBeginDate = null;
        this.card.limitEndDate = null;
      }
      try {
        this.card.moreCheckinPayments = this.getMoreCheckinPayments();
      } catch (e) {
        $.Dlg.error(e);
        return;
      }

      this.genMoreCardPricesDlg();

      let actionType;
      if (this.card.cardId) {
        // update
        actionType = 'U';
      } else {
        // create
        actionType = 'I';
      }
      if (this.card.cardType === 1) {
        this.card.defaultTimes = null;
      } else if (this.card.cardType === 3) {
        this.card.defaultTimes = null;
      }
      if (this.card.moreChargeUnitPirceHours && !$.Util.isEmpty(this.card.moreChargeUnitPirceAmount)) {
        this.card.chargeByHourValMore = this.card.moreChargeUnitPirceHours + ',' + this.card.moreChargeUnitPirceAmount;
      }

      if (!$.Util.isEmptyArray(this.limitWeekArr)) {
        this.card.limitWeeks = this.limitWeekArr.join(',');
      } else {
        this.card.limitWeeks = null;
      }

      let args = { actionType: actionType, card: this.card };
      $.Req.service($.SvName.CARD_SAVE, args, ret => {
        $.Msg.success($.Lang.OPT_SUCCESS);
        this.checkinPaymentFlag = true;
        if (actionType === 'I') {
          if (this.from === 'shop') this.$router.push('/shop-card-conf');else if (this.from === 'tenant') this.$router.push('/tenant-card-conf');
        }
      });
    },

    queryMchId() {
      let args = {};
      if (this.from === 'shop') args.queryType = 'shop';else if (this.from === 'tenant') args.queryType = 'tenant';
      $.Req.service($.SvName.WX_MCHID_QUERY, args, ret => {
        if (ret.mchId) this.hasMchId = true;
      });
    },

    addMoreCheckinPayment() {
      this.moreCheckinPaymentIdxList.push(true);
    },

    getMoreCheckinPayments() {
      let conf = [];
      for (let i = 0, len = this.moreCheckinPaymentIdxList.length; i < len; i++) {
        let tit = this.moreCheckinPaymentTitles[i];
        let val = this.moreCheckinPaymentValues[i];
        if (tit && !val) {
          throw '请为【{0}】设置计费金额'.format(tit);
        } else if (!tit && val) {
          throw '请为计费金额【{0}】设置计费项目名'.format(val);
        } else if (tit && val) {
          conf.push('{0},{1}'.format(tit, val));
        }
      }
      return conf.join(';');
    },

    genMoreCardPricePlans(priceConf) {
      if ($.Util.isEmpty(priceConf)) return;
      let items = priceConf.split(';');
      for (let i = 0, len = items.length; i < len; i++) {
        let data = items[i].split(',');
        this.moreCardPricePlans[i] = [data[0], data[1]];
        if (data.length === 3) this.moreCardPricePlans[i].push(data[2]);
      }
    },

    genMoreCardPrices() {
      let items = [];
      let i = 0;
      for (let p of this.moreCardPricePlans) {
        i++;
        if (p[0] && !p[1] || !p[0] && p[1]) {
          throw '第 {0} 行数据不全，请填写完整'.format(i);
        } else if (p[0] && p[1]) {
          if (this.card.cardType === 2 && !p[2]) {
            throw '第 {0} 行请填写使用次数'.format(i);
          } else if (this.card.cardType === 4 && !p[2]) {
            throw '第 {0} 行请填写使用时间'.format(i);
          }

          if (p[2]) items.push(p[0] + ',' + p[1] + ',' + p[2]);else items.push(p[0] + ',' + p[1]);
        }
      }
      return items.join(';');
    },

    genMoreCardPricesDlg() {
      try {
        this.card.moreOnlinePrices = this.genMoreCardPrices();
      } catch (err) {
        $.Bble.warning(err);
        return false;
      }
    },

    setMoreCheckinPayments() {
      if (!this.card.moreCheckinPayments) return;
      let items = this.card.moreCheckinPayments.split(';');
      let i = 0;
      for (let item of items) {
        let arr = item.split(',');
        this.moreCheckinPaymentIdxList.push(true);
        this.moreCheckinPaymentTitles[i] = arr[0];
        this.moreCheckinPaymentValues[i] = parseFloat(arr[1]);
        i++;
      }
    },

    showChargeByHoureConf(confStr) {
      if (!confStr || confStr == '[]') return;
      let confs = confStr.split(';');
      for (let c of confs) {
        let items = c.split(':');
        let minArr = items[1].split(',');
        if (items[0] === '1') {
          this.chargeByHourConf.fromMin1 = parseInt(minArr[0]);
          this.chargeByHourConf.toMin1 = parseInt(minArr[1]);
        } else if (items[0] === '2') {
          this.chargeByHourConf.fromMin2 = parseInt(minArr[0]);
          this.chargeByHourConf.toMin2 = parseInt(minArr[1]);
        }
      }
    },

    genChargeByHourConf() {
      let confs = [];
      if (!$.Util.isEmpty(this.chargeByHourConf.fromMin1) && this.chargeByHourConf.toMin1) {
        confs.push('1:{0},{1}'.format(this.chargeByHourConf.fromMin1, this.chargeByHourConf.toMin1));
      }
      if (!$.Util.isEmpty(this.chargeByHourConf.fromMin2) && this.chargeByHourConf.toMin2) {
        confs.push('2:{0},{1}'.format(this.chargeByHourConf.fromMin2, this.chargeByHourConf.toMin2));
      }

      return confs.join(';');
    },

    queryShopId() {
      $.Req.service($.SvName.SHOP_ID_QUERY_FOR_MSITE, {}, ret => {
        this.shopId = ret.shopId;
        let url = "http://tool.jzongguan.com/#/shop-card-sale/{0}?s={1}".format(this.card.cardId, this.shopId);
        this.qrcodeUrl = $.Conf.QR_CODE_URL + encodeURIComponent(url);
      });
    },

    processCtrl(i) {
      if (i < 0) {
        this.stepsIdxActive[this.stepsIdx - 1] = false;
        this.stepsIdx--;
      } else {
        this.stepsIdx++;
        this.stepsIdxActive[this.stepsIdx - 1] = true;
      }
    },

    confirmBackFun() {
      history.go(-1);
    },

    selectCardClass(s) {
      this.card.cardClass = s.selectedIdx;
      if (this.card.cardClass === 0) {
        this.card.allowCheckin = true;
      } else {
        this.card.allowCheckin = false;
      }
    },

    selectCardType(s) {
      this.card.cardType = s.selectedIdx + 1;
      if (parseInt(this.card.cardType) === 2) this.card.checkinPayment = 1;else this.card.checkinPayment = null;
    },

    checkValue(name, mustFill) {
      if (name == 'cardName') {
        if (this.card.cardName == '') {
          $.Bble.warning('卡名称不能为空');
        }
      }
    },

    choseSysBg() {
      this.dlgView.setBgImg = true;
      this.dlgView.setBgMethod = false;
    },

    checkinPaymentSure() {
      this.checkinPaymentFlag = false;
      this.dlgView.checkinPayment = false;
      this.submitCard();
    },

    checkInputSize(v, tips) {
      if (this.card[v] < 0) {
        $.Bble.warning(tips);
        this.card[v] = '';
      }
    }
  }
});

/***/ }),

/***/ 1413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_mng_card_edit_vue__ = __webpack_require__(2021);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_mng_card_edit_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__pages_mng_card_edit_vue__);
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: { CardEdit: __WEBPACK_IMPORTED_MODULE_0__pages_mng_card_edit_vue___default.a },
  data() {
    return {};
  },

  created() {},

  methods: {}
});

/***/ }),

/***/ 1416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data() {
    return {
      g: $,
      noticeArg: {
        memberBirthdaySmsEnable: false,
        memberBirthdayTmptId: 1,
        memberCardSmsEnable: false,
        memberCardNoticeDays: [],
        memberGcLessonSmsEnable: false,
        memberGcLessonNoticeDays: [],
        memberEntrySmsEnable: false,
        memberEntryNoticeDays: [],
        memberPcLessonSmsEnable: false,
        memberPcLessonNoticeDays: []
      }
    };
  },

  created() {
    this.queryNoticeArg();
  },

  methods: {
    queryNoticeArg() {
      $.Req.service($.SvName.MEMBER_NOTICE_ARG_QUERY, {}, ret => {
        if (!ret.memberCardNoticeDays) ret.memberCardNoticeDays = [null, null, null];
        if (!ret.memberGcLessonNoticeDays) ret.memberGcLessonNoticeDays = [null, null, null];
        if (!ret.memberPcLessonNoticeDays) ret.memberPcLessonNoticeDays = [null, null, null];
        if (!ret.memberEntryNoticeDays) ret.memberEntryNoticeDays = [null, null, null];
        this.noticeArg = ret;
      });
    },

    updateNoticeArg() {
      $.Dlg.confirm('您确定保存吗？', () => {
        $.Req.service($.SvName.MEMBER_NOTICE_ARG_UPDATE, this.noticeArg, ret => {
          $.Msg.success($.Lang.OPT_SUCCESS);
          window.scroll(0, 0);
        }, true);
      });
    }
  }
});

/***/ }),

/***/ 1417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data() {
    return {
      g: $
    };
  },

  methods: {
    pageTo(page) {
      this.$router.push(page);
    }
  }
});

/***/ }),

/***/ 1418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_sys_img_upload_vue__ = __webpack_require__(953);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_sys_img_upload_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_sys_img_upload_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: { ImgUpload: __WEBPACK_IMPORTED_MODULE_0__components_sys_img_upload_vue___default.a },

  data() {
    return {
      g: window.$,
      editable: $.Util.hasRoleFunc($.Dict.RoleFunc.SHOP_EDIT.value),
      encSid: null,
      shop: {},
      imgUpload: {
        action: $.Conf.IMG_UPLOAD_URL,
        imgMaxWidth: 512,
        defaultList: []
      },
      shopImgUrl: null
    };
  },
  created() {
    this.encSid = $.data.shop.encSid;
    this.queryShop();
  },
  methods: {
    queryShop() {
      if (!this.encSid) {
        alert('操作异常，请重新登录');
      }

      const args = { queryType: 2, encSid: this.encSid };
      $.Req.service($.SvName.SHOP_QUERY, args, ret => {
        this.shop = ret.shop;
        this.shop.encSid = this.encSid;
        this.shop.encTid = $.data.tenant.encTid;
        this.shopImgUrl = $.Util.getImgUrl(this.shop.logoPathname, 175, 175, 'EEEEEE');
        if (this.shop.logoPathname) {
          this.imgUpload.defaultList.push({
            name: this.shop.logoPathname,
            url: $.Util.getImgUrl(this.shop.logoPathname, 175, 175, 'EEEEEE')
          });
        }
      });
    },

    handleImgUploadSuccess(res, file) {
      file.url = res.data.url;
      file.name = res.data.name;
      let args = { imgName: file.name };
      $.Req.service($.SvName.SHOP_LOGO_IMG_SAVE, args, ret => {
        this.shop.logoPathname = file.name;
        $.data.shop.logoPathname = file.name;
        this.shopImgUrl = $.Util.getImgUrl(this.shop.logoPathname, 175, 175, 'EEEEEE');
        $.Msg.success('图片已保存');
      });
    },

    handleUpdateShop() {
      // check
      if (!this.shop.shopName) {
        $.Msg.error("门店名称不能为空");
        return;
      }
      if (!this.shop.tel) {
        $.Msg.error("门店电话不能为空");
        return;
      }
      if (!this.shop.bizHours) {
        $.Msg.error("营业时间不能为空");
        return;
      }

      let args = this.shop;
      $.Req.service($.SvName.SHOP_UPDATE, args, ret => {
        $.data.shop.shopName = this.shop.shopName;
        $.data.shop.logoPathname = ret.logoPathname;
        $.Msg.success($.Lang.OPT_SUCCESS);

        this.imgUpload.defaultList = [];
        this.imgUpload.defaultList.push({
          name: this.shop.logoPathname,
          url: $.Util.getImgUrl(this.shop.logoPathname, 200, 200, 'EEEEEE')
        });
      }, true);
    },

    updateShopAccessPwd() {
      let args = { encSid: this.encSid, accessPwd: this.shop.accessPwd };
      $.Req.service($.SvName.SHOP_ACCESS_PWD_UPDATE, args, ret => {
        $.Msg.success($.Lang.OPT_SUCCESS);
      });
    }
  }
});

/***/ }),

/***/ 1419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_calendar_calendar_by_day_vue__ = __webpack_require__(1017);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_calendar_calendar_by_day_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_calendar_calendar_by_day_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: { CalendarByDay: __WEBPACK_IMPORTED_MODULE_0__components_calendar_calendar_by_day_vue___default.a },
  data() {
    return {
      g: window.$,
      viewAllEntryRecordsPermit: $.Util.hasRoleFunc($.Dict.RoleFunc.MEMBER_AGENT.value) || $.Util.hasRoleFunc($.Dict.RoleFunc.MEMBER_QUERY_ALL.value),
      queryDate: this.$route.params.queryDate ? this.$route.params.queryDate : $.Util.formatDate(new Date()),
      queryDateProp: null,
      totalCount: 0,
      mecList: null,
      selectMemberName: null,
      selectMemberId: null,
      selectMemberAvatarPathname: null,
      memberDlg: false,
      memberStat: {
        entryCheckins: null,
        gcLessonTimes: null,
        pcLessonTimes: null,
        points: null,
        pointsTitle: null
      }
    };
  },

  created() {
    this.queryDate = $.Util.formatDate(new Date());
    this.queryEntryCheckin();
    let oDate = new Date();
    this.month = oDate.getMonth();
    this.year = oDate.getFullYear();
    this.date = oDate.getDate();
  },

  methods: {
    queryByDayNav(alt) {
      if (alt > 0 && Date.new(this.queryDate).compareDatePart(new Date()) >= 0) {
        $.Msg.warning($.Lang.NAV_TO_TOMORROW_TIPS);
        return;
      }
      this.queryDate = $.Util.formatDate(new Date(Date.new(this.queryDate).getTime() + alt * 3600 * 24 * 1000));
      let queryDateProp = this.queryDate.split('-');
      this.$refs.calendar.initDate(queryDateProp);
      this.queryEntryCheckin();
    },
    querySelectedDay(arg) {
      this.queryDate = arg;
      this.queryEntryCheckin();
    },
    queryEntryCheckin(page = null) {
      if (!this.queryDate) {
        $.Msg.warning('请选择日期');
        return;
      }
      if (!page) {
        this.totalCount = null;
      }

      let args = {
        page: page,
        needDetail: true,
        beginDate: this.queryDate
      };
      if (!this.viewAllEntryRecordsPermit) {
        args.ownerStaffId = $.data.user.staffId;
      }
      $.Req.service($.SvName.MEMBER_ENTRY_CHECKIN_QUERY, args, ret => {
        let now = new Date();
        if (Date.new(this.queryDate).compareDatePart(now) === 0) {
          for (let mec of ret.mecList) {
            if (mec.cardType === 1 && mec.endDate) {
              mec.leftDays = Date.new(mec.endDate).subtract(now);
            } else if (mec.cardType === 2) {
              mec.leftTimes = mec.currentTimes;
            }
          }
        }
        this.mecList = ret.mecList;
        if (!page) {
          this.totalCount = ret.count;
        }
      }, true);
    },
    onChangeDate() {
      if (!this.queryDate) {
        $.Msg.warning('请选择日期');
        return;
      }
      //this.queryDate = Date.new(date);
      this.queryEntryCheckin();
    },

    changePageNo(page) {
      this.queryEntryCheckin(page);
      window.scroll(0, 0);
    },

    toMemberPage(memberId) {
      this.$router.push('/member-entry-checkins/' + memberId);
    },

    viewMemberBase(memberId, memberName, avatarPathname) {
      this.selectMemberAvatarPathname = avatarPathname;
      this.selectMemberName = memberName;
      this.selectMemberId = memberId;

      $.Req.service($.SvName.MEMBER_STAT_QUERY, { memberId: memberId }, ret => {
        this.memberStat = ret.memberStat;
        this.memberDlg = true;
      }, true);
    }
  }
});

/***/ }),

/***/ 1420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data() {
    return {
      g: $,
      reply: null,
      feedbackReplyCreate: false,
      feedbackList: null,
      selectFeedbackIdx: null
    };
  },

  created() {
    this.queryFeedbackList();
  },

  methods: {
    queryFeedbackList() {
      $.Req.service($.SvName.SHOP_FEEDBACK_QUERY, {}, ret => {
        this.feedbackList = ret.feedbackList;
      });
    },

    openFeedbackReplyCreateDlg(idx) {
      this.selectFeedbackIdx = idx;
      this.reply = '';
      this.feedbackReplyCreate = true;
    },

    closeFeedbackReplyCreateDlg() {
      this.selectFeedbackIdx = null;
      this.feedbackReplyCreate = false;
    },

    submitReply() {
      if (!this.reply) {
        $.Dlg.error('回复内容不能为空。');
        return;
      }
      if (this.reply.length < 5) {
        $.Dlg.error('回复内容太少了，诚意不够啊。');
        return;
      }
      if (this.reply.length > 1000) {
        $.Dlg.error('回复内容太多了');
        return;
      }

      let args = {
        actionType: 'I',
        reply: { content: this.reply, fid: this.feedbackList[this.selectFeedbackIdx].fid }
      };
      $.Req.service($.SvName.SHOP_FEEDBACK_REPLY_SAVE, args, ret => {
        $.Dlg.success($.Lang.OPT_SUCCESS);
        this.feedbackList[this.selectFeedbackIdx].replyList.push({
          rid: ret.rid,
          createUname: $.data.user.uname,
          createUid: $.data.user.uid,
          content: this.reply
        });
        this.feedbackReplyCreate = false;
      });
    },

    deleteReply(rid, feedbackIdx, replyIdx) {
      $.Dlg.confirm('您确定要删除该回复吗？', () => {
        let arg = {
          actionType: 'D',
          deleteId: rid
        };
        $.Req.service($.SvName.SHOP_FEEDBACK_REPLY_SAVE, arg, ret => {
          $.Dlg.success($.Lang.OPT_SUCCESS);
          this.feedbackList[feedbackIdx].replyList.splice(replyIdx, 1);
        });
      });
    }
  }
});

/***/ }),

/***/ 1421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},

  data() {
    return {
      g: window.$,
      editable: $.Util.hasRoleFunc($.Dict.RoleFunc.SHOP_EDIT.value),
      latitude: $.data.shop.gpsLatitude,
      longitude: $.data.shop.gpsLongitude,
      testPosList: []
    };
  },
  created() {
    this.encSid = $.data.shop.encSid;
  },
  methods: {
    getAndSaveGps() {
      wx.getLocation({
        type: 'wgs84',
        success: res => {
          //alert(res.latitude + ", " + res.longitude);
          this.latitude = res.latitude;
          this.longitude = res.longitude;

          // update shop gps
          let args = { gpsLongitude: this.longitude, gpsLatitude: this.latitude };
          $.Req.service($.SvName.SHOP_GPS_UPDATE, args, ret => {
            $.data.shop.gpsLatitude = this.latitude;
            $.data.shop.gpsLongitude = this.longitude;
            $.Msg.success($.Lang.OPT_SUCCESS);
          });
        },
        fail(ret) {
          alert('抱歉，定位失败！请刷新后再试或检查是否启用了定位服务。');
        }
      });
    },

    _getAndSaveGps() {
      let geolocation;
      let myMap = new AMap.Map('', {});
      myMap.plugin('AMap.Geolocation', () => {
        geolocation = new AMap.Geolocation({
          enableHighAccuracy: true, //是否使用高精度定位，默认:true
          timeout: 10000, //超过10秒后停止定位，默认：无穷大
          buttonPosition: 'RB'
        });
        geolocation.getCurrentPosition();
        AMap.event.addListener(geolocation, 'complete', data => {
          this.latitude = data.position.getLat();
          this.longitude = data.position.getLng();

          // update shop gps
          let args = { gpsLongitude: this.longitude, gpsLatitude: this.latitude };
          $.Req.service($.SvName.SHOP_GPS_UPDATE, args, ret => {
            $.data.shop.gpsLatitude = this.latitude;
            $.data.shop.gpsLongitude = this.longitude;
            $.Msg.success($.Lang.OPT_SUCCESS);
          });
        });
        AMap.event.addListener(geolocation, 'error', data => {
          alert('定位失败');
        });
      });
    },

    removeGps() {
      // update shop gps
      this.latitude = null;
      this.longitude = null;
      let args = { gpsLongitude: this.longitude, gpsLatitude: this.latitude };
      $.Req.service($.SvName.SHOP_GPS_UPDATE, args, ret => {
        $.data.shop.gpsLatitude = this.latitude;
        $.data.shop.gpsLongitude = this.longitude;
        $.Msg.success($.Lang.OPT_SUCCESS);
      });
    },

    testWithWx() {
      wx.getLocation({
        type: 'wgs84',
        success: res => {
          try {
            let latitude = res.latitude;
            let longitude = res.longitude;
            this.testPosList.push('wx => ' + longitude + ', ' + latitude + ", " + res.accuracy);

            let dst = $.Util.calcGpsDistance($.data.shop.gpsLatitude, $.data.shop.gpsLongitude, latitude, longitude);
            alert("Distance: {0} m".format(dst));
          } catch (e) {
            alert(e);
          }
        },
        fail(ret) {
          alert('定位失败，请重新登录后再试。');
        }
      });
    },

    testWithGd() {
      let geolocation;
      let myMap = new AMap.Map('', {});
      myMap.plugin('AMap.Geolocation', () => {
        geolocation = new AMap.Geolocation({
          enableHighAccuracy: true, //是否使用高精度定位，默认:true
          timeout: 10000, //超过10秒后停止定位，默认：无穷大
          buttonPosition: 'RB'
        });
        geolocation.getCurrentPosition();
        AMap.event.addListener(geolocation, 'complete', data => {
          let longitude = data.position.getLng();
          let latitude = data.position.getLat();
          //alert(JSON.stringify(data));
          let lnglat = new AMap.LngLat(longitude, latitude);
          this.testPosList.push('gd => ' + longitude + ', ' + latitude + ", " + data.accuracy);

          let dst1 = lnglat.distance([$.data.shop.gpsLongitude, $.data.shop.gpsLatitude]);
          //let dst2 = this.calcGpsDistance($.data.shop.gpsLatitude, $.data.shop.gpsLongitude, latitude, longitude);
          alert("Distance: " + dst1);
        });
        AMap.event.addListener(geolocation, 'error', data => {
          alert('定位失败');
        });
      });
    },

    testLink() {
      wx.miniProgram.navigateTo({ url: 'https://app.jzongguan.com/run.html#/my-card-list' });
    }
  }
});

/***/ }),

/***/ 1422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},

  data() {
    return {
      g: window.$,
      editable: $.Util.hasRoleFunc($.Dict.RoleFunc.BIZ_MODULE_CONF.value),
      shopParam: {}
    };
  },
  created() {
    $.Req.queryShopParam(ret => {
      this.shopParam = ret.shopParam;
    }, true);
  },
  methods: {
    save() {
      let args = { shopParam: this.shopParam };
      $.Req.service($.SvName.SHOP_PARAM_UPDATE, args, ret => {
        $.data.shop.hasEntryCheckin = this.shopParam.hasEntryCheckin;
        $.data.shop.hasGroupCourse = this.shopParam.hasGroupCourse;
        $.data.shop.hasPrivateCourse = this.shopParam.hasPrivateCourse;
        $.Msg.success($.Lang.OPT_SUCCESS);
      }, true);
    }
  }
});

/***/ }),

/***/ 1423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data() {
    return {
      g: $,
      smsLogList: [],
      smsCount: null,
      smsType: '',
      smsCnts: {},
      countStatChartData: {
        xdata: [],
        ydata: []
      },
      themeFontColor: ''

    };
  },

  computed: {
    countStatChartOption() {
      return {
        textStyle: {
          color: this.themeFontColor
        },
        grid: { x: 30, y: 10, x2: 20, y2: 20 },
        /*legend: {
         data: ['入场人数'],
         },*/
        tooltip: {
          trigger: 'axis',
          formatter: "{b} : 发送{c}条"
        },
        calculable: false,
        xAxis: [{
          padding: 1,
          type: 'category',
          boundaryGap: false,
          data: this.countStatChartData.xdata
        }],
        yAxis: [{
          type: 'value',
          axisLabel: {
            formatter: '{value}'
          }
        }],
        series: [{
          name: '短信条数',
          type: 'line',
          data: this.countStatChartData.ydata,
          itemStyle: {
            normal: {
              color: "orange"
            }
          },
          lineStyle: {
            normal: {
              color: "orange"
            }
          }
        }]
      };
    }
  },

  created() {
    this.querySmsCounts();
    this.querySmsLog();
    this.themeChange();
  },

  methods: {
    querySmsCounts() {
      let args = {
        sendStatBeginDate: new Date(new Date().getTime() - 29 * 3600000 * 24),
        sendStatEndDate: new Date()
      };
      $.Req.service($.SvName.SMS_COUNTS_QUERY, args, ret => {
        this.smsCnts.sends = ret.sends;
        this.smsCnts.buys = ret.buys;
        this.smsCnts.remnant = ret.remnant;

        let cntMap = {};
        for (let c of ret.sendCntList) {
          cntMap[Date.new(c.statDate).format('yyyyMMdd')] = c.count;
        }
        let cnt,
            xdata = [],
            ydata = [];
        for (let bt = new Date(args.sendStatBeginDate); bt.compareDatePart(args.sendStatEndDate) <= 0; bt = new Date(bt.getTime() + 3600 * 24 * 1000)) {
          xdata.push(bt.format('M/d'));
          cnt = cntMap[bt.format('yyyyMMdd')];
          if (!cnt) cnt = 0;
          ydata.push(cnt);
        }
        this.countStatChartData.xdata = xdata;
        this.countStatChartData.ydata = ydata;
      });
    },

    querySmsLog(page = null) {
      let args = { page: page };
      if (this.smsType) {
        args.smsType = this.smsType;
      }
      $.Req.service($.SvName.SMS_LOG_QUERY, args, ret => {
        this.smsLogList = ret.smsLogList;
        if (ret.count) {
          this.smsCount = ret.count;
        } else {
          this.smsCount = 0;
        }
      }, true);
    },

    changePageNo(page) {
      this.querySmsLog(page);
      window.scroll(0, 0);
    },

    changeSmsType() {
      this.querySmsLog(null);
    },
    themeChange() {
      let themeFontColor = document.getElementsByTagName("body")[0].className;
      if (themeFontColor == 'theme-black') {
        this.themeFontColor = '#fff';
      }
    }
  }
});

/***/ }),

/***/ 1515:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(763)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 1535:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(763)(false);
// imports


// module
exports.push([module.i, ".-style- .set-gprs[data-v-1fa58f8e]{padding:10px 20px}.-style- .set-gprs .weidu[data-v-1fa58f8e]{padding:10px 0}.-style- .hd[data-v-1fa58f8e]{line-height:50px;height:50px}.-style- .remark[data-v-1fa58f8e]{padding:0}.-style- .remark .tit[data-v-1fa58f8e]:before{color:#ff4500}.-style- .remark .desc[data-v-1fa58f8e]{padding:10px 20px;line-height:2}.-style- .opt[data-v-1fa58f8e]{padding-bottom:12px}.-style- .opt button[data-v-1fa58f8e]{margin-top:12px}", ""]);

// exports


/***/ }),

/***/ 1543:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(763)(false);
// imports


// module
exports.push([module.i, ".-style- section[data-v-2b955cae]{padding:0}.-style- .radio-items[data-v-2b955cae]{margin:5px 0;padding:0 20px}.-style- .radio-items li[data-v-2b955cae]{display:block;list-style-type:none;border-bottom:1px dashed #ddd;padding:8px 0;line-height:1.75}.-style- .radio-items li label[data-v-2b955cae]{padding-left:5px}.-style- .radio-items li[data-v-2b955cae]:last-child{border-bottom:0}.-style- .switches[data-v-2b955cae]{padding:5px 20px;margin:10px 0}.-style- .theme-btn-bor[data-v-2b955cae]{width:150px}.-style- .note[data-v-2b955cae]{color:#999;padding:10px 20px 5px;line-height:1.75;font-size:12px;margin-top:10px}.-style- .note i[data-v-2b955cae]{color:orange;font-size:13px;padding-right:5px}.-style- .note [data-v-2b955cae]{font-size:12px}.-style- .note li[data-v-2b955cae]{margin-left:2px}.-style- .lines[data-v-2b955cae]{line-height:1.8;padding:0 20px}.-style- .nums[data-v-2b955cae]{padding:10px 20px}.-style- .nums input[type=number][data-v-2b955cae]{display:inline-block;-webkit-appearance:none;height:30px;line-height:30px;padding:0;width:80px;border:1px solid #ddd;border-radius:2px;margin-right:5px;text-align:center}.icon-radio[data-v-2b955cae]{vertical-align:-2px}", ""]);

// exports


/***/ }),

/***/ 1565:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(763)(false);
// imports


// module
exports.push([module.i, ".-stat-home-[data-v-3b7b14a5]{padding:0}.-stat-home- .menu li[data-v-3b7b14a5]{line-height:4rem;height:4rem;padding:0 20px}.-stat-home- .menu li .icon-arrow-r[data-v-3b7b14a5]{font-weight:700}.-stat-home- .menu li .txt[data-v-3b7b14a5]{float:left;font-size:14px;height:4rem}.-stat-home- .menu li .iconfont[data-v-3b7b14a5]{float:left;font-size:18px;margin-right:5px}.-stat-home- .menu li .r[data-v-3b7b14a5]{text-align:right;height:4rem}.-stat-home- .menu li .r i[data-v-3b7b14a5]{color:#bbb}.-stat-home- .menus[data-v-3b7b14a5]{width:100%;border-collapse:collapse;background:#fff;border-bottom:1px solid #e5e5e5}.-stat-home- .menus td[data-v-3b7b14a5]{height:70px;vertical-align:middle;width:33%;text-align:center;border-right:1px solid #e5e5e5;border-top:1px solid #e5e5e5}.-stat-home- .menus .icon[data-v-3b7b14a5]{font-size:24px}.-stat-home- .menus .txt[data-v-3b7b14a5]{display:block;font-size:12px}", ""]);

// exports


/***/ }),

/***/ 1567:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(763)(false);
// imports


// module
exports.push([module.i, ".-style- .hd[data-v-3d6e8912]{line-height:50px;height:50px}.-style- .tblform th[data-v-3d6e8912]{width:120px}.-style- .access-pwd-conf[data-v-3d6e8912]{padding-bottom:10px;margin-bottom:20px}.-style- .access-pwd-conf input[type=number][data-v-3d6e8912]{width:100%;display:block;margin-top:10px;padding:1rem;border:0;border-radius:5px;background:#f6f6f6}.-style- .exam[data-v-3d6e8912]{border-top:1px dashed #ddd;padding:10px 0;margin-top:10px}.-style- .remark-tit[data-v-3d6e8912]{margin:15px 16px 0;color:orange}.-style- .remark-tit i[data-v-3d6e8912]{padding-right:6px}.-style- .remark[data-v-3d6e8912]{padding:0 16px;margin:5px 0 0;line-height:1.8;color:#888}.-style- .photo[data-v-3d6e8912]{margin:0 16px 16px;border-radius:5px;width:175px}.-style- input[data-v-3d6e8912]{padding:0}.-style- .pink[data-v-3d6e8912]{color:#ff7578}.theme-black .-style- .access-pwd-conf input[type=number][data-v-3d6e8912]{background:#212121}", ""]);

// exports


/***/ }),

/***/ 1576:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(763)(false);
// imports


// module
exports.push([module.i, ".-style- .memlist[data-v-419bfebc]{margin-top:10px;padding:0}.-style- .memlist .photo[data-v-419bfebc]{margin-right:15px}.-style- .memlist .photo img[data-v-419bfebc]{height:50px;width:50px;line-height:50px;border-radius:50%}.-style- .memlist .bd[data-v-419bfebc]{line-height:1;width:calc(100% - 65px)}.-style- .memlist .left-side[data-v-419bfebc]{width:calc(100% - 60px)}.-style- .memlist .-hd[data-v-419bfebc]{padding-bottom:10px}.-style- .memlist li[data-v-419bfebc]{padding:10px 20px}.-style- .memlist li .tit[data-v-419bfebc]{padding-bottom:10px}.-style- .memlist li label[data-v-419bfebc]{color:#aaa;padding:0}.-style- .memlist li .cktime[data-v-419bfebc]{padding-right:15px;font-size:15px;color:#53a92d}.-style- .memlist li .name[data-v-419bfebc]{font-size:14px}.-style- .middle-btn[data-v-419bfebc]{width:160px;margin:15px 0}.-style- .bottom-tips[data-v-419bfebc]{margin-top:15px;font-size:12px;padding:12px;color:orange;text-align:left;background:#eaeaea}.-style- .bottom-tips i[data-v-419bfebc]{font-size:13px}.member-photo img[data-v-419bfebc]{width:100%;display:block}.memb-stat[data-v-419bfebc]{padding:0 20px}.memb-stat li[data-v-419bfebc]{padding:10px}.memb-stat label[data-v-419bfebc]{padding-right:6px;color:#999;display:inline-block;width:110px}.card-info[data-v-419bfebc]{line-height:1.7}", ""]);

// exports


/***/ }),

/***/ 1595:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(763)(false);
// imports


// module
exports.push([module.i, ".-style- section[data-v-490f1648]{padding:0}.-style- section .remark[data-v-490f1648]{padding-top:10px;margin-bottom:12px}.-style- section .remark .tit[data-v-490f1648]{font-weight:400;color:orange;margin-bottom:5px}.-style- section .remark ul[data-v-490f1648]{padding-left:20px}.-style- section .remark ul li[data-v-490f1648]{list-style-type:disc;padding:3px 0;color:#777;line-height:1.8}.-style- section .cont li[data-v-490f1648]{padding:15px 16px;display:block;line-height:1.5}.-style- .submit[data-v-490f1648]{padding:15px 0}", ""]);

// exports


/***/ }),

/***/ 1618:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(763)(false);
// imports


// module
exports.push([module.i, ".feedback-reply-dlg .src{margin:10px 0;line-height:1.7;color:#666;max-height:300px;overflow-y:auto;background:#f9f9f9;padding:10px}.feedback-reply-dlg .input{border:1px solid #ddd}.feedback-reply-dlg .opt{width:100%;margin:10px 0 0}.feedback-reply-dlg .opt td{width:50%;padding:0 5px}.feedback-reply-dlg .opt td:first-child{padding-left:0}.feedback-reply-dlg .opt td:last-child{padding-right:0}textarea{display:block;padding:5px;width:100%;border:1px solid hsla(0,0%,83%,.6);margin-top:15px}", ""]);

// exports


/***/ }),

/***/ 1619:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(763)(false);
// imports


// module
exports.push([module.i, ".-style- .feedback li .theme-border-bottom[data-v-57c432b5]{padding:10px 20px}.-style- .feedback li table[data-v-57c432b5]{width:100%}.-style- .feedback li table th[data-v-57c432b5]{width:62px;vertical-align:top}.-style- .feedback .photo[data-v-57c432b5]{width:60px;height:60px;border-radius:100%}.-style- .feedback .feedback-right[data-v-57c432b5]{width:calc(100% - 70px);margin-left:10px}.-style- .feedback .feedback-left[data-v-57c432b5]{width:calc(100% - 70px)}.-style- .feedback .feedback-left .hd[data-v-57c432b5]{padding:0}.-style- .feedback .hd[data-v-57c432b5]{height:20px;line-height:20px;margin-bottom:10px}.-style- .feedback .hd .time[data-v-57c432b5]{padding-left:15px}.-style- .feedback .content[data-v-57c432b5]{line-height:1.8px}.-style- .feedback .reply-list[data-v-57c432b5]{padding:0 20px 10px}.-style- .feedback .reply-list .name[data-v-57c432b5]{color:#aaa;padding-right:3px}.-style- .feedback .reply-list .item[data-v-57c432b5]{padding-top:8px;line-height:19px}.-style- .feedback .reply-btn[data-v-57c432b5]{display:block;padding:3px 20px;width:70px}.-style- .feedback .icon-delete[data-v-57c432b5]{color:#999}.-style- .reply-dialog[data-v-57c432b5]{padding:10px 20px}.-style- .reply-dialog .input[data-v-57c432b5]{margin-top:10px}.-style- .reply-dialog .input textarea[data-v-57c432b5]{width:100%;padding:8px}", ""]);

// exports


/***/ }),

/***/ 1645:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(763)(false);
// imports


// module
exports.push([module.i, ".-style- section[data-v-76325c42]{padding:0}.-style- .page-inner-menus li[data-v-76325c42]{width:100%}.-style- .page-inner-menus select[data-v-76325c42]{height:24px;line-height:24px;font-size:12px}.-style- .tbl-item .lines th[data-v-76325c42]{vertical-align:top}.-style- .tbl-item .lines td[data-v-76325c42]{line-height:1.75}.-style- .stat-more[data-v-76325c42]{padding:15px 0 5px;color:#aaa;text-align:center}.-style- .chart[data-v-76325c42]{width:100%;height:200px;font-size:11px;padding:5px 0}.-style- section .hd select[data-v-76325c42]{height:24px;line-height:24px;border:0;font-size:12px;padding:0 5px}.-style- section .tbl-item[data-v-76325c42]{margin:12px 20px}.bottom-remark[data-v-76325c42]{padding:15px 20px}.theme-black .tbl-item[data-v-76325c42]{border-color:#2c2c2c}", ""]);

// exports


/***/ }),

/***/ 1706:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(763)(false);
// imports


// module
exports.push([module.i, ".tblform[data-v-db538f74]{margin-bottom:20px;padding:0}.tblform .row[data-v-db538f74]{padding:16px}.tblform .row.ml-16[data-v-db538f74]{padding-left:0;margin-left:16px}.tblform .col[data-v-db538f74]{padding:16px}.tblform .col .iconinfo[data-v-db538f74]{left:85px}.tblform input[data-v-db538f74],.tblform textarea[data-v-db538f74]{padding:0;text-align:left;width:100%}.tblform input[data-v-db538f74]::placeholder,.tblform textarea[data-v-db538f74]::placeholder{color:#ccc}.tblform .infor-name[data-v-db538f74]{position:relative;color:#666}.tblform .infor-detail[data-v-db538f74]{position:relative;width:calc(100% - 118px);text-align:left}.tblform .infor-detail .row[data-v-db538f74]{padding:0}.tblform .must-fill[data-v-db538f74]:before{display:none}.tblform .must-fill[data-v-db538f74]:after{margin-left:2px;display:inline-block;content:\"*\";color:#ff1e24;vertical-align:-2px}.tblform .time-picker-detail[data-v-db538f74]{padding:0;position:relative}.tblform .tips-icon[data-v-db538f74]{position:absolute;top:-1px;right:-20px;z-index:2;font-size:14px}.tblform .dialog-tips[data-v-db538f74]{margin-bottom:15px}.tblform .dialog-tips i[data-v-db538f74]{margin-right:4px}.tblform .wid80[data-v-db538f74]{width:calc(100% - 20px)}.tblform .wid70[data-v-db538f74]{width:calc(100% - 30px)}.tblform .wid67[data-v-db538f74]{width:calc(100% - 33px)}.tblform .wid30[data-v-db538f74]{width:calc((100% - 35px) / 2)}.tblform .qrcode .qrcode-link[data-v-db538f74]{margin-top:-6px;padding:0 16px 10px}.tblform .qrcode img[data-v-db538f74]{margin-left:16px;margin-bottom:16px;display:inline-block;width:75px;height:75px}.tblform[data-v-db538f74] .van-cell{padding:0}.tblform .swicth[data-v-db538f74]{float:right}.tblform .swicth[data-v-db538f74] .van-cell__title{width:30px}.tblform .swicth[data-v-db538f74] .van-cell__title span{margin-right:10px}.tblform .time-type .icon-radio-on[data-v-db538f74]{vertical-align:-1px;margin-right:4px}.tblform .time-type .icon-radio-on[data-v-db538f74]:before{margin:0 2px 2px}.tblform .bt-10[data-v-db538f74]{border-top:10px solid #f5f5f5}.tblform .limit-hr[data-v-db538f74]{padding:10px 0 10px 16px}.tblform .limit-hr.pt-0[data-v-db538f74]{padding-top:0}.tblform .limit-hr.pb-0[data-v-db538f74]{padding-bottom:0}.tblform .limit-hr .limit-checkin[data-v-db538f74]{padding:6px 16px 16px 0}.tblform .chose-time[data-v-db538f74]{display:inline-block;margin-right:8px;width:30px;height:27px;line-height:27px}.tblform .chose-time.chose-time-mr[data-v-db538f74]{margin-right:8px}.tblform .lt-hour-tips[data-v-db538f74]{padding-bottom:10px}.tblform .limit-checkin[data-v-db538f74]{position:relative}.tblform .limit-checkin input[data-v-db538f74]{display:inline-block;width:50px;height:30px;padding:0 4px;margin-right:5px;text-align:center}.tblform .limit-checkin .tips-icon[data-v-db538f74]{padding:5px;top:6px;left:250px}.tblform .radio-single-chose[data-v-db538f74]{padding:0}.tblform .radio-single-chose li[data-v-db538f74]{text-align:center;font-size:12px}.tblform .radio-single-chose .icon-radio[data-v-db538f74]{vertical-align:-2px;margin-right:2px}.tblform .radio-single-chose .icon-radio[data-v-db538f74]:before{margin:0 0 2px}.tblform .check-box[data-v-db538f74]{padding:0;margin-bottom:-8px}.tblform .check-box li[data-v-db538f74]{margin-bottom:8px}.tblform .check-box .check-box-check[data-v-db538f74]{margin:0 5px 0 0;vertical-align:-2px;display:inline-block;width:14px;height:14px;border:1px solid #e0c17f;color:#1aad19;border-radius:2px;line-height:10px}.tblform .check-box .check-box-check.check-box-check1[data-v-db538f74]{vertical-align:1px}.tblform .check-box .check-box-check .iconcheck0[data-v-db538f74]{font-size:14px;margin-left:-.5px}.tblform .check-box .create-more-card[data-v-db538f74]{padding:0;width:calc(100% - 120px)}.tblform .check-box .create-more-card input[data-v-db538f74]{width:60px;height:35px;padding:0 8px;line-height:35px;background:#f5f5f5;border-radius:4px;text-align:center}.tip-cont[data-v-db538f74]{padding:30px 16px 25px;font-size:18px;text-align:left}.chose-begin-date[data-v-db538f74]{overflow:unset}.chose-begin-date .to[data-v-db538f74]{margin:20px 5px 0 0;color:#999}.chose-begin-date[data-v-db538f74] .chose-cont{padding:6px 5px;width:60px;margin:15px 5px 15px 0;text-align:center}.chose-begin-date[data-v-db538f74] .chose-cont .pull-down-box ul{width:50px;left:-1px}.use-card-time.section-part[data-v-db538f74]{margin-bottom:0;border-top:0}.van-has-overlay[data-v-db538f74]{height:max-content;left:50%;top:38%;transform:translate(-50%,-38%);border-radius:5px;text-align:center}.van-has-overlay .dlg-head[data-v-db538f74]{padding-top:15px;margin-bottom:20px;text-align:center;font-size:16px;font-weight:600}.van-has-overlay .dlg-cont[data-v-db538f74]{padding:0 30px;text-align:left}.van-has-overlay .dlg-cont input[data-v-db538f74]{display:inline-block;padding:6px 8px;width:100%;border:1px solid #dadade}.van-has-overlay .dlg-cont .btn[data-v-db538f74]{font-size:13px;text-align:left;padding:15px}.van-has-overlay .dlg-cont .btn.theme-border-bottom[data-v-db538f74]{border-color:#ededed}.van-has-overlay table[data-v-db538f74]{width:100%}.van-has-overlay table th[data-v-db538f74]{padding-bottom:5px;color:#333}.van-has-overlay table td[data-v-db538f74]{padding-bottom:5px;color:#999}.van-has-overlay .close-dlg[data-v-db538f74]{position:absolute;left:50%;bottom:-60px;margin-left:-14px;color:#fff}.van-has-overlay .close-dlg i[data-v-db538f74]{font-size:32px}.van-has-overlay .ok[data-v-db538f74]{padding:7px 20px 10px;color:#3478f6}.van-has-overlay .middle-btn[data-v-db538f74]{margin:20px auto;padding:10px 0;width:calc(100% - 90px)}[data-v-db538f74].van-dialog__confirm .van-button__text{color:#dbb76b}[data-v-db538f74].van-picker__toolbar{position:absolute;width:77px;bottom:-40px;left:-6px}.more-prices.infor-detail[data-v-db538f74]{width:100%}.more-prices th[data-v-db538f74]{color:#666;padding:16px 5px}.more-prices td[data-v-db538f74]{padding:5px}.more-prices td[data-v-db538f74],.more-prices th[data-v-db538f74]{text-align:center}.more-prices tr:last-child td[data-v-db538f74]{border:0}.more-prices input[data-v-db538f74]{text-align:center;height:30px;width:80px;padding:0 4px}small[data-v-db538f74]{font-size:10px;vertical-align:1px}.iconarrow-down-1[data-v-db538f74]{font-size:10px}.process-bar[data-v-db538f74]{position:relative;margin:25px 20px 0;height:2px;background:#f7e9dd}.process-bar ul li[data-v-db538f74]{box-sizing:content-box;position:absolute;top:-3px;width:8px;height:8px;border-radius:50%;background:#f7e9dd;margin-left:-7px}.process-bar ul li.first-step[data-v-db538f74]{left:0}.process-bar ul li.second-step[data-v-db538f74]{left:33.3%}.process-bar ul li.third-step[data-v-db538f74]{left:66.6%}.process-bar ul li.last-step[data-v-db538f74]{left:100%}.process-bar ul li.active[data-v-db538f74]{top:-10px;background:#ff7900;border:7px solid #f7e9dd;margin-left:-20px}.process-bar ul li.active.first-step[data-v-db538f74]{margin-left:-4px}.process-ctrl[data-v-db538f74]{margin:25px 16px 30px;background:#dbb76b;border-radius:4px}.process-ctrl .btn[data-v-db538f74]{padding:10px;width:50%;text-align:center;border-radius:0}.process-ctrl .prev-step[data-v-db538f74]{margin:1px 0 1px 1px;background:#fff;color:#dbb76b;border-radius:4px 0 0 4px}.process-ctrl .next-step1[data-v-db538f74]{width:100%;color:#fff}.process-ctrl .next-step[data-v-db538f74]{margin:1px 0 1px -1px;color:#fff;border-radius:0 4px 4px 0}.submit[data-v-db538f74]{margin:15px 0}.submit .btn[data-v-db538f74]{padding:5px 0;width:70px}.submit .theme-btn-bor[data-v-db538f74]{margin-right:10px;padding:4px 0}.limit-week[data-v-db538f74]{padding:0;text-align:left}.limit-week li[data-v-db538f74]{width:20%}.limit-week li i[data-v-db538f74]{vertical-align:-1px}.bgimgs[data-v-db538f74]{overflow:hidden;padding:18px;border-top:10px solid #f6f6f6}.bgimgs li[data-v-db538f74]{margin-right:15px;margin-bottom:15px;width:calc((100% - 15px) / 2);text-align:center;border-radius:2px}.bgimgs li[data-v-db538f74]:nth-child(2n){margin-right:0}.bgimgs img[data-v-db538f74]{display:block;width:100%;height:102px;border-radius:5px}.bg-img[data-v-db538f74]{padding:0 0 0 16px;margin-bottom:16px}.bg-img img[data-v-db538f74]{display:block;width:175px;height:110px;border-radius:5px}.chose-bg-img-type[data-v-db538f74]{padding:15px 0}.chose-bg-img-type li[data-v-db538f74]{margin-right:10px}.chose-bg-img-type li i[data-v-db538f74]{vertical-align:-1px;margin-right:4px}.bgfont-conf[data-v-db538f74]{padding:15px 20px}.bgfont-conf li[data-v-db538f74]{margin:0 15px 10px 0;height:44px;border-radius:2px;width:calc((100% - 45px) / 4)}.bgfont-conf li[data-v-db538f74]:nth-child(4n){margin-right:0}.cheif-intro[data-v-db538f74]{margin-top:8px}.cheif-intro.infor-detail[data-v-db538f74]{width:100%}.on-line-sale[data-v-db538f74]{padding:10px 16px}.on-line-sale .infor-name[data-v-db538f74]{margin-bottom:10px}.on-line-sale .infor-detail[data-v-db538f74]{width:100%}.on-line-sale .infor-detail .row[data-v-db538f74]{justify-content:start}.on-line-sale .infor-detail .row li[data-v-db538f74]{margin-right:20px}.bg-card-name[data-v-db538f74]{position:absolute;font-size:11px;top:50%;left:22px;transform:translateY(-50%);max-width:80px;white-space:nowrap;height:18px;overflow:hidden;text-overflow:ellipsis;text-align:left}[data-v-db538f74].van-picker /deep/ .van-picker__cancel,[data-v-db538f74].van-picker /deep/ .van-picker__confirm{color:#dbb76b}.vant .van-has-overlay[data-v-db538f74] .van-dialog__content{max-height:62vh}.infor-detail[data-v-db538f74] .qd-switch-bar{margin-right:0}.more-ckin-payments[data-v-db538f74]{margin-left:16px}.more-ckin-payments li[data-v-db538f74]{padding:10px 16px 10px 118px}.more-ckin-payments li input[data-v-db538f74]{margin-right:5px;text-align:center;padding:0 4px;height:30px;line-height:30px}.more-ckin-payments li input[data-v-db538f74]:first-child{margin-right:10px}[data-v-db538f74].van-popup{background:#fff}[data-v-db538f74].van-cell__title{opacity:0}.chose-begin-time[data-v-db538f74]{position:relative;margin-right:10px}.chose-begin-time .time-picker[data-v-db538f74]{position:absolute;top:29px;left:50%;transform:translateX(-50%);z-index:10;width:80px}.chose-begin-time[data-v-db538f74] .van-picker__cancel,.chose-begin-time[data-v-db538f74] .van-picker__confirm{padding:0 5px}.theme-black .bt-10[data-v-db538f74]{border-top:10px solid #111}", ""]);

// exports


/***/ }),

/***/ 1745:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1515);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(764)("0fb2c473", content, true, {});

/***/ }),

/***/ 1765:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1535);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(764)("5055418c", content, true, {});

/***/ }),

/***/ 1773:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1543);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(764)("9fad0058", content, true, {});

/***/ }),

/***/ 1795:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1565);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(764)("317a69fe", content, true, {});

/***/ }),

/***/ 1797:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1567);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(764)("5f7c3a10", content, true, {});

/***/ }),

/***/ 1806:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1576);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(764)("89ce0828", content, true, {});

/***/ }),

/***/ 1825:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1595);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(764)("e7f064dc", content, true, {});

/***/ }),

/***/ 1848:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1618);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(764)("06fdb388", content, true, {});

/***/ }),

/***/ 1849:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1619);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(764)("b679b0bc", content, true, {});

/***/ }),

/***/ 1875:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1645);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(764)("abb6119c", content, true, {});

/***/ }),

/***/ 1936:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1706);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(764)("676564ae", content, true, {});

/***/ }),

/***/ 2021:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1936)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1410),
  /* template */
  __webpack_require__(2243),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-db538f74",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 2053:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "g-main"
  }, [_c('card-edit', {
    attrs: {
      "from": "shop"
    }
  })], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 2072:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "-style-"
  }, [_c('page-head', {
    attrs: {
      "title": "门店定位"
    }
  }), _vm._v(" "), _c('section', {
    staticClass: "set-gprs"
  }, [_c('div', [_c('b', [_vm._v("经度：")]), _vm._v(" " + _vm._s(_vm.longitude))]), _vm._v(" "), _c('div', {
    staticClass: "theme-border-bottom weidu"
  }, [_c('b', [_vm._v("纬度：")]), _vm._v(" " + _vm._s(_vm.latitude))]), _vm._v(" "), (_vm.editable) ? _c('div', {
    staticClass: "opt"
  }, [(!_vm.longitude) ? _c('div', {
    staticClass: "theme-font-color2 center",
    staticStyle: {
      "margin": "10px 0 0 0"
    }
  }, [_vm._v("请在微信版定位门店")]) : _vm._e()]) : _vm._e(), _vm._v(" "), (_vm.editable) ? _c('div', {
    staticClass: "submit row justify-center"
  }, [(_vm.longitude) ? _c('div', {
    staticClass: "btn theme-btn-bor mr-15",
    on: {
      "click": _vm.removeGps
    }
  }, [_vm._v("取消定位")]) : _vm._e(), _vm._v(" "), (_vm.g.Util.isInWeixin()) ? _c('div', {
    staticClass: "btn theme-btn-bg",
    on: {
      "click": _vm.getAndSaveGps
    }
  }, [_vm._v("定位并保存")]) : _vm._e()]) : _vm._e()]), _vm._v(" "), _vm._m(0), _vm._v(" "), (_vm.g.data.user.phoneNo == 13601409821) ? _c('section', {
    staticClass: "allpadding center"
  }, [_c('mu-raised-button', {
    attrs: {
      "fullWidth": "",
      "label": "Test Wx"
    },
    on: {
      "click": _vm.testWithWx
    }
  }), _c('p'), _vm._v(" "), _c('mu-raised-button', {
    attrs: {
      "fullWidth": "",
      "label": "Test Gd"
    },
    on: {
      "click": _vm.testWithGd
    }
  }), _c('p'), _vm._v(" "), _c('a', {
    on: {
      "click": function($event) {
        return _vm.testLink()
      }
    }
  }, [_vm._v("LINK-")]), _vm._v(" "), _c('ul', _vm._l((_vm.testPosList), function(r) {
    return _c('li', [_vm._v(_vm._s(r))])
  }), 0)], 1) : _vm._e(), _vm._v(" "), _c('bottom-nav')], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "remark"
  }, [_c('div', {
    staticClass: "hd theme-padding theme-border-bottom"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("说明")])]), _vm._v(" "), _c('div', {
    staticClass: "desc"
  }, [_vm._v("\n        门店定位主要用于会员入场签到。这样，可以保证会员必须在门店内签到，杜绝了各种签到作弊。\n      ")])])
}]}

/***/ }),

/***/ 2080:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "-style-"
  }, [_c('page-head', {
    attrs: {
      "title": "消息提醒设置"
    }
  }), _vm._v(" "), _c('section', [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "switches"
  }, [_c('qd-switch', {
    attrs: {
      "title": "短信提醒"
    },
    model: {
      value: (_vm.noticeArg.memberBirthdaySmsEnable),
      callback: function($$v) {
        _vm.$set(_vm.noticeArg, "memberBirthdaySmsEnable", $$v)
      },
      expression: "noticeArg.memberBirthdaySmsEnable"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "radio-items"
  }, [_c('ul', [_c('li', {
    on: {
      "click": function($event) {
        _vm.noticeArg.memberBirthdayTmptId = 1
      }
    }
  }, [_c('i', {
    staticClass: "iconfont icon-radio",
    class: {
      'icon-radio-on': _vm.noticeArg.memberBirthdayTmptId === 1
    }
  }), _vm._v(" "), _c('label', [_vm._v("\n            亲爱的#会员名#，健总管总部全体员工祝您生日快乐、身体健康、工作顺利！\n          ")])]), _vm._v(" "), _c('li', {
    on: {
      "click": function($event) {
        _vm.noticeArg.memberBirthdayTmptId = 2
      }
    }
  }, [_c('i', {
    staticClass: "iconfont icon-radio",
    class: {
      'icon-radio-on': _vm.noticeArg.memberBirthdayTmptId === 2
    }
  }), _vm._v(" "), _c('label', [_vm._v("\n            亲，今天是您的生日，健总管总部从未忘记在这特别的日子祝福您：生日快乐、身体健康！\n          ")])]), _vm._v(" "), _c('li', {
    on: {
      "click": function($event) {
        _vm.noticeArg.memberBirthdayTmptId = 3
      }
    }
  }, [_c('i', {
    staticClass: "iconfont icon-radio",
    class: {
      'icon-radio-on': _vm.noticeArg.memberBirthdayTmptId === 3
    }
  }), _vm._v(" "), _c('label', [_vm._v("\n            亲爱的#会员名#，小店健总管总部掐指一算得知今天是您生日，小店代表全体员工祝您生日快乐！\n         ")])])])]), _vm._v(" "), _vm._m(1)]), _vm._v(" "), _c('section', [_vm._m(2), _vm._v(" "), _c('div', {
    staticClass: "switches"
  }, [_c('qd-switch', {
    attrs: {
      "title": "短信提醒"
    },
    model: {
      value: (_vm.noticeArg.memberCardSmsEnable),
      callback: function($$v) {
        _vm.$set(_vm.noticeArg, "memberCardSmsEnable", $$v)
      },
      expression: "noticeArg.memberCardSmsEnable"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "lines"
  }, [_vm._v("\n      对于期限卡，当会员的会员卡剩余*天时，系统可提醒会员。请设置需提醒的剩余天数：\n      "), _c('div', {
    staticClass: "nums"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.noticeArg.memberCardNoticeDays[0]),
      expression: "noticeArg.memberCardNoticeDays[0]"
    }],
    attrs: {
      "type": "number",
      "title": ""
    },
    domProps: {
      "value": (_vm.noticeArg.memberCardNoticeDays[0])
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.noticeArg.memberCardNoticeDays, 0, $event.target.value)
      }
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.noticeArg.memberCardNoticeDays[1]),
      expression: "noticeArg.memberCardNoticeDays[1]"
    }],
    attrs: {
      "type": "number",
      "title": ""
    },
    domProps: {
      "value": (_vm.noticeArg.memberCardNoticeDays[1])
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.noticeArg.memberCardNoticeDays, 1, $event.target.value)
      }
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.noticeArg.memberCardNoticeDays[2]),
      expression: "noticeArg.memberCardNoticeDays[2]"
    }],
    attrs: {
      "type": "number",
      "title": ""
    },
    domProps: {
      "value": (_vm.noticeArg.memberCardNoticeDays[2])
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.noticeArg.memberCardNoticeDays, 2, $event.target.value)
      }
    }
  })])]), _vm._v(" "), _vm._m(3)]), _vm._v(" "), _c('section', [_vm._m(4), _vm._v(" "), _c('div', {
    staticClass: "switches"
  }, [_c('qd-switch', {
    attrs: {
      "title": "短信提醒"
    },
    model: {
      value: (_vm.noticeArg.memberGcLessonSmsEnable),
      callback: function($$v) {
        _vm.$set(_vm.noticeArg, "memberGcLessonSmsEnable", $$v)
      },
      expression: "noticeArg.memberGcLessonSmsEnable"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "lines"
  }, [_vm._v("\n      当距离会员上次上团课*天时，系统可提醒会员。 请设置需提醒的天数：\n      "), _c('div', {
    staticClass: "nums"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.noticeArg.memberGcLessonNoticeDays[0]),
      expression: "noticeArg.memberGcLessonNoticeDays[0]"
    }],
    attrs: {
      "type": "number",
      "title": ""
    },
    domProps: {
      "value": (_vm.noticeArg.memberGcLessonNoticeDays[0])
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.noticeArg.memberGcLessonNoticeDays, 0, $event.target.value)
      }
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.noticeArg.memberGcLessonNoticeDays[1]),
      expression: "noticeArg.memberGcLessonNoticeDays[1]"
    }],
    attrs: {
      "type": "number",
      "title": ""
    },
    domProps: {
      "value": (_vm.noticeArg.memberGcLessonNoticeDays[1])
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.noticeArg.memberGcLessonNoticeDays, 1, $event.target.value)
      }
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.noticeArg.memberGcLessonNoticeDays[2]),
      expression: "noticeArg.memberGcLessonNoticeDays[2]"
    }],
    attrs: {
      "type": "number",
      "title": ""
    },
    domProps: {
      "value": (_vm.noticeArg.memberGcLessonNoticeDays[2])
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.noticeArg.memberGcLessonNoticeDays, 2, $event.target.value)
      }
    }
  })])]), _vm._v(" "), _vm._m(5)]), _vm._v(" "), _c('section', [_vm._m(6), _vm._v(" "), _c('div', {
    staticClass: "switches"
  }, [_c('qd-switch', {
    attrs: {
      "title": "短信提醒"
    },
    model: {
      value: (_vm.noticeArg.memberPcLessonSmsEnable),
      callback: function($$v) {
        _vm.$set(_vm.noticeArg, "memberPcLessonSmsEnable", $$v)
      },
      expression: "noticeArg.memberPcLessonSmsEnable"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "lines"
  }, [_vm._v("\n      当距离会员上次上私教课*天时，系统可提醒会员。 请设置需提醒的天数：\n      "), _c('div', {
    staticClass: "nums"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.noticeArg.memberPcLessonNoticeDays[0]),
      expression: "noticeArg.memberPcLessonNoticeDays[0]"
    }],
    attrs: {
      "type": "number",
      "title": ""
    },
    domProps: {
      "value": (_vm.noticeArg.memberPcLessonNoticeDays[0])
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.noticeArg.memberPcLessonNoticeDays, 0, $event.target.value)
      }
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.noticeArg.memberPcLessonNoticeDays[1]),
      expression: "noticeArg.memberPcLessonNoticeDays[1]"
    }],
    attrs: {
      "type": "number",
      "title": ""
    },
    domProps: {
      "value": (_vm.noticeArg.memberPcLessonNoticeDays[1])
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.noticeArg.memberPcLessonNoticeDays, 1, $event.target.value)
      }
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.noticeArg.memberPcLessonNoticeDays[2]),
      expression: "noticeArg.memberPcLessonNoticeDays[2]"
    }],
    attrs: {
      "type": "number",
      "title": ""
    },
    domProps: {
      "value": (_vm.noticeArg.memberPcLessonNoticeDays[2])
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.noticeArg.memberPcLessonNoticeDays, 2, $event.target.value)
      }
    }
  })])]), _vm._v(" "), _vm._m(7)]), _vm._v(" "), _c('section', [_vm._m(8), _vm._v(" "), _c('div', {
    staticClass: "switches"
  }, [_c('qd-switch', {
    attrs: {
      "title": "短信提醒"
    },
    model: {
      value: (_vm.noticeArg.memberEntrySmsEnable),
      callback: function($$v) {
        _vm.$set(_vm.noticeArg, "memberEntrySmsEnable", $$v)
      },
      expression: "noticeArg.memberEntrySmsEnable"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "lines"
  }, [_vm._v("\n      当距离会员上次入场签到*天时，系统可提醒会员。 请设置需提醒的天数：\n      "), _c('div', {
    staticClass: "nums"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.noticeArg.memberEntryNoticeDays[0]),
      expression: "noticeArg.memberEntryNoticeDays[0]"
    }],
    attrs: {
      "type": "number",
      "title": ""
    },
    domProps: {
      "value": (_vm.noticeArg.memberEntryNoticeDays[0])
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.noticeArg.memberEntryNoticeDays, 0, $event.target.value)
      }
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.noticeArg.memberEntryNoticeDays[1]),
      expression: "noticeArg.memberEntryNoticeDays[1]"
    }],
    attrs: {
      "type": "number",
      "title": ""
    },
    domProps: {
      "value": (_vm.noticeArg.memberEntryNoticeDays[1])
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.noticeArg.memberEntryNoticeDays, 1, $event.target.value)
      }
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.noticeArg.memberEntryNoticeDays[2]),
      expression: "noticeArg.memberEntryNoticeDays[2]"
    }],
    attrs: {
      "type": "number",
      "title": ""
    },
    domProps: {
      "value": (_vm.noticeArg.memberEntryNoticeDays[2])
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.noticeArg.memberEntryNoticeDays, 2, $event.target.value)
      }
    }
  })])]), _vm._v(" "), _vm._m(9)]), _vm._v(" "), (_vm.g.data.user.isShopOwner) ? _c('div', {
    staticClass: "submit row justify-center"
  }, [_c('div', {
    staticClass: "btn theme-btn-bor middle-btn",
    on: {
      "click": function($event) {
        return _vm.$router.push('/shop-sms-log')
      }
    }
  }, [_vm._v("查看短信记录")]), _vm._v(" "), _c('div', {
    staticClass: "btn theme-btn-bg middle-btn",
    on: {
      "click": function($event) {
        return _vm.updateNoticeArg()
      }
    }
  }, [_vm._v("保存")])]) : _c('div', {
    staticClass: "none"
  }, [_vm._v("\n    仅有店长有权限保存\n  ")]), _vm._v(" "), _c('bottom-nav')], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd theme-padding theme-border-bottom"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("会员生日提醒")]), _vm._v(" "), _c('div', {
    staticClass: "r orange medium"
  }, [_vm._v("选择短信内容模板")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "note theme-border-top"
  }, [_c('i', {
    staticClass: "iconfont iconinfo"
  }), _vm._v("设置好后，系统会自动在会员生日当天（7:30左右）发送祝福短信；\n    ")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd theme-padding theme-border-bottom"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("会员卡提醒")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "note theme-border-top"
  }, [_c('i', {
    staticClass: "iconfont iconinfo"
  }), _vm._v(" "), _c('b', [_vm._v("备注")]), _vm._v(" "), _c('ol', [_c('li', [_vm._v("设置剩余天数后，系统会在每天7:30左右检查符合条件的会员，然后发送消息；")]), _vm._v(" "), _c('li', [_vm._v("剩余天数可设置多个，如果为空，则不作检查和提醒；")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd theme-padding theme-border-bottom"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("会员团课出勤提醒")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "note theme-border-top"
  }, [_c('i', {
    staticClass: "iconfont iconinfo"
  }), _vm._v(" "), _c('b', [_vm._v("备注")]), _vm._v(" "), _c('ol', [_c('li', [_vm._v("设置提醒天数后，系统会在每天 7:45左右检查符合条件的会员，然后发送消息；")]), _vm._v(" "), _c('li', [_vm._v("提醒天数可设置多个，如果为空，则不作检查和提醒；")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd theme-padding theme-border-bottom"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("会员私教课出勤提醒")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "note theme-border-top"
  }, [_c('i', {
    staticClass: "iconfont iconinfo"
  }), _vm._v(" "), _c('b', [_vm._v("备注")]), _vm._v(" "), _c('ol', [_c('li', [_vm._v("设置提醒天数后，系统会在每天 7:45左右检查符合条件的会员，然后发送消息；")]), _vm._v(" "), _c('li', [_vm._v("提醒天数可设置多个，如果为空，则不作检查和提醒；")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd theme-padding theme-border-bottom"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("会员入场锻炼提醒")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "note theme-border-top"
  }, [_c('i', {
    staticClass: "iconfont iconinfo"
  }), _vm._v(" "), _c('b', [_vm._v("备注")]), _vm._v(" "), _c('ol', [_c('li', [_vm._v("设置提醒天数后，系统会在每天 7:45左右检查符合条件的会员，然后发送消息；")]), _vm._v(" "), _c('li', [_vm._v("提醒天数可设置多个，如果为空，则不作检查和提醒；")])])])
}]}

/***/ }),

/***/ 2103:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "-stat-home- section-part"
  }, [_c('page-head', {
    attrs: {
      "title": "设置"
    }
  }), _vm._v(" "), (_vm.g.data.user.staffId) ? _c('ul', {
    staticClass: "menu"
  }, [_c('li', {
    staticClass: "theme-border-bottom",
    on: {
      "click": function($event) {
        return _vm.pageTo('/shop-detail')
      }
    }
  }, [_c('i', {
    staticClass: "iconfont iconmendianxiangqing"
  }), _c('div', {
    staticClass: "txt"
  }, [_vm._v("门店详情")]), _vm._m(0)]), _vm._v(" "), _c('li', {
    staticClass: "theme-border-bottom",
    on: {
      "click": function($event) {
        return _vm.pageTo('/shop-gps')
      }
    }
  }, [_c('i', {
    staticClass: "iconfont iconmendiandingwei"
  }), _c('div', {
    staticClass: "txt"
  }, [_vm._v("门店定位")]), _vm._m(1)]), _vm._v(" "), _c('li', {
    staticClass: "theme-border-bottom",
    on: {
      "click": function($event) {
        return _vm.pageTo('/reminder-conf')
      }
    }
  }, [_c('i', {
    staticClass: "iconfont iconxiaoxitixing"
  }), _c('div', {
    staticClass: "txt"
  }, [_vm._v("消息提醒")]), _vm._m(2)]), _vm._v(" "), _c('li', {
    staticClass: "theme-border-bottom",
    on: {
      "click": function($event) {
        return _vm.pageTo('/lesson-booking-conf')
      }
    }
  }, [_c('i', {
    staticClass: "iconfont iconshezhi1"
  }), _c('div', {
    staticClass: "txt"
  }, [_vm._v("课程预约签到设置")]), _vm._m(3)]), _vm._v(" "), _c('li', {
    staticClass: "theme-border-bottom",
    on: {
      "click": function($event) {
        return _vm.pageTo('/member-label-setting')
      }
    }
  }, [_c('i', {
    staticClass: "iconfont icon-label"
  }), _c('div', {
    staticClass: "txt"
  }, [_vm._v("会员标签设置")]), _vm._m(4)])]) : _vm._e(), _vm._v(" "), _c('ul', {
    staticClass: "menu"
  }, [_c('li', {
    staticClass: "theme-border-bottom",
    on: {
      "click": function($event) {
        return _vm.pageTo('/about-us')
      }
    }
  }, [_c('i', {
    staticClass: "iconfont iconguanyuwomen"
  }), _c('div', {
    staticClass: "txt"
  }, [_vm._v("联系我们")]), _vm._m(5)])]), _vm._v(" "), _c('bottom-nav')], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "r"
  }, [_c('i', {
    staticClass: "iconfont iconarrow-r"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "r"
  }, [_c('i', {
    staticClass: "iconfont iconarrow-r"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "r"
  }, [_c('i', {
    staticClass: "iconfont iconarrow-r"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "r"
  }, [_c('i', {
    staticClass: "iconfont iconarrow-r"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "r"
  }, [_c('i', {
    staticClass: "iconfont iconarrow-r"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "r"
  }, [_c('i', {
    staticClass: "iconfont iconarrow-r"
  })])
}]}

/***/ }),

/***/ 2105:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "-style- vant"
  }, [_c('page-head', {
    attrs: {
      "title": "门店详情"
    }
  }), _vm._v(" "), _c('section', {
    staticClass: "tblform"
  }, [_c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name must-fill"
  }, [_vm._v("门店名称")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.shop.shopName),
      expression: "shop.shopName",
      modifiers: {
        "trim": true
      }
    }],
    attrs: {
      "type": "text",
      "placeholder": "请输入门店名称",
      "readonly": !_vm.editable
    },
    domProps: {
      "value": (_vm.shop.shopName)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.shop, "shopName", $event.target.value.trim())
      },
      "blur": function($event) {
        return _vm.$forceUpdate()
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "theme-border-bottom"
  }, [_c('div', {
    staticClass: "row align-center"
  }, [_c('div', {
    staticClass: "infor-name must-fill"
  }, [_vm._v("门店图片")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail",
    staticStyle: {
      "text-align": "right"
    }
  }, [_c('img-upload', {
    attrs: {
      "action": _vm.imgUpload.action,
      "img-max-width": _vm.imgUpload.imgMaxWidth,
      "on-success": _vm.handleImgUploadSuccess,
      "max-size": _vm.imgUpload.maxSize,
      "show-thumb": false
    }
  }, [(_vm.editable) ? _c('a', {
    staticClass: "theme-font-color"
  }, [_vm._v("点击上传图片")]) : _vm._e()])], 1)]), _vm._v(" "), (_vm.shopImgUrl) ? _c('img', {
    staticClass: "photo",
    attrs: {
      "src": _vm.shopImgUrl
    }
  }) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name must-fill"
  }, [_vm._v("门店电话")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.shop.tel),
      expression: "shop.tel",
      modifiers: {
        "trim": true
      }
    }],
    attrs: {
      "type": "text",
      "placeholder": "请输入门店电话",
      "readonly": !_vm.editable
    },
    domProps: {
      "value": (_vm.shop.tel)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.shop, "tel", $event.target.value.trim())
      },
      "blur": function($event) {
        return _vm.$forceUpdate()
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name must-fill"
  }, [_vm._v("营业时间")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.shop.bizHours),
      expression: "shop.bizHours",
      modifiers: {
        "trim": true
      }
    }],
    attrs: {
      "placeholder": "请输入营业时间",
      "readonly": !_vm.editable,
      "type": "text"
    },
    domProps: {
      "value": (_vm.shop.bizHours)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.shop, "bizHours", $event.target.value.trim())
      },
      "blur": function($event) {
        return _vm.$forceUpdate()
      }
    }
  })])]), _vm._v(" "), (_vm.shop.isTrial) ? _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("软件试用期")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_vm._v("\n          是\n        ")])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("系统有效期")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail bold"
  }, [_vm._v(_vm._s(_vm.g.Util.formatDate(_vm.shop.expDate)))])]), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("已购会员数")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail bold"
  }, [_vm._v(_vm._s(_vm.shop.buyMembers) + " 个")])]), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("剩余短信数")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_vm._v(_vm._s(_vm.shop.smsCount) + " 条")])]), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("更新人")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_vm._v(_vm._s(_vm.shop.updateUname))])]), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("更新时间")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_vm._v(_vm._s(_vm.shop.updateTime))])]), _vm._v(" "), (_vm.editable) ? _c('div', {
    staticClass: "form-submit"
  }, [_c('div', {
    staticClass: "theme-btn-bg largest-btn",
    on: {
      "click": function($event) {
        return _vm.handleUpdateShop()
      }
    }
  }, [_vm._v("更新")]), _vm._v(" "), _c('br')]) : _vm._e()]), _vm._v(" "), (_vm.editable) ? _c('section', {
    staticClass: "access-pwd-conf"
  }, [_c('div', {
    staticClass: "hd theme-border-bottom"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("门禁密码设置")]), _vm._v(" "), (_vm.editable) ? _c('div', {
    staticClass: "r"
  }, [_c('a', {
    on: {
      "click": _vm.updateShopAccessPwd
    }
  }, [_c('span', {
    staticClass: "theme-font-color"
  }, [_vm._v("保存")])])]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "theme-padding"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.shop.accessPwd),
      expression: "shop.accessPwd"
    }],
    attrs: {
      "type": "number",
      "number": "",
      "placeholder": "请输入门禁密码"
    },
    domProps: {
      "value": (_vm.shop.accessPwd)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.shop, "accessPwd", $event.target.value)
      }
    }
  })]), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1)]) : _vm._e(), _vm._v(" "), _c('bottom-nav')], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "remark-tit"
  }, [_c('i', {
    staticClass: "iconfont iconinfo orange"
  }), _vm._v("您需要知道的")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "remark"
  }, [_vm._v("\n\t\t    如果贵店有带密码锁的门禁，并且只想让员工和签到会员知道。\n\t\t    可将门禁密码保存至本系统，然后员工和签到成功的会员就能在我们的手机版看到。\n\t\t    "), _c('p', [_vm._v("为了保障门禁的安全、可靠，建议不定期地修改门禁密码，并保存至系统。")]), _vm._v(" "), _c('div', {
    staticClass: "exam"
  }, [_c('b', [_vm._v("适用场景示例：")]), _vm._v("\n\t\t\t    某健身房旁边有其他机构的成员，为了防止非会员潜入健身区域，可在健身区域安装带普通密码锁的门。\n\t\t\t    这样，会员签到后就能看到当日门禁密码。而非会员，或会籍过期的会员无法获知门禁密码。\n\t\t    ")])])
}]}

/***/ }),

/***/ 2114:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "-style- vant"
  }, [_c('page-head', {
    attrs: {
      "title": "门店入场签到"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "top-date-nav"
  }, [_c('CalendarByDay', {
    ref: "calendar",
    attrs: {
      "max-date": {
        year: _vm.year,
        month: _vm.month,
        date: _vm.date
      },
      "min-date": {
        year: _vm.year - 10,
        month: _vm.month,
        date: _vm.date
      },
      "query-date-prop": _vm.queryDateProp
    },
    on: {
      "queryByDayNav": _vm.queryByDayNav,
      "querySelectedDay": _vm.querySelectedDay
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "center"
  }, [_vm._v("共 "), _c('b', [_vm._v(_vm._s(_vm.totalCount))]), _vm._v(" 人签到")]), _vm._v(" "), (_vm.mecList && _vm.mecList.length > 0) ? _c('div', {
    staticClass: "memlist section-part"
  }, _vm._l((_vm.mecList), function(l, idx) {
    return _c('li', {
      key: idx,
      staticClass: "row align-center lesson-list theme-border-bottom"
    }, [_c('div', {
      staticClass: "row start align-center left-side"
    }, [_c('div', {
      staticClass: "photo"
    }, [_c('img', {
      attrs: {
        "src": _vm.g.Util.getImgUrl(l.avatarPathname, 200, 200, 'EEEEEE')
      },
      on: {
        "click": function($event) {
          return _vm.viewMemberBase(l.memberId, l.memberName, l.avatarPathname)
        }
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "bd"
    }, [_c('div', {
      staticClass: "tit"
    }, [_c('span', {
      staticClass: "cktime"
    }, [_vm._v(_vm._s(Date.new(l.createTime).format('h:mm')))]), _vm._v(" "), _c('b', {
      staticClass: "name theme-font-color"
    }, [_vm._v(_vm._s(l.memberName))])]), _vm._v(" "), _c('div', {
      staticClass: "card-info"
    }, [_c('label', [_vm._v("签到卡：")]), _vm._v(_vm._s(l.cardName) + "\n            "), (l.cardPayment) ? [_c('span', {
      staticClass: "font-color-9"
    }, [_vm._v(", 消费" + _vm._s(l.cardPayment) + _vm._s(_vm.g.Dict.CardTypeUnit[l.cardType]))])] : _vm._e(), _vm._v(" "), (l.cardType === 1 && l.leftDays) ? _c('span', {
      staticClass: "font-color-9"
    }, [_vm._v("\n              （剩余 " + _vm._s(l.leftDays) + " 天）\n            ")]) : (l.cardType === 2 && l.leftTimes !== undefined) ? _c('span', {
      staticClass: "font-color-9"
    }, [_vm._v("\n              （剩余 " + _vm._s(l.leftTimes) + " 次）\n            ")]) : _vm._e()], 2)])])])
  }), 0) : _vm._e(), _vm._v(" "), _c('pagination', {
    attrs: {
      "total": _vm.totalCount,
      "page-change": _vm.changePageNo
    }
  }), _vm._v(" "), (!_vm.viewAllEntryRecordsPermit) ? _c('div', {
    staticClass: "bottom-tips"
  }, [_c('i', {
    staticClass: "iconfont icon-info"
  }), _vm._v(" 仅显示我名下会员的的入场签到记录")]) : _vm._e(), _vm._v(" "), _c('bottom-nav'), _vm._v(" "), _c('van-popup', {
    style: ({
      height: '100%',
      width: '100%'
    }),
    attrs: {
      "position": "right"
    },
    model: {
      value: (_vm.memberDlg),
      callback: function($$v) {
        _vm.memberDlg = $$v
      },
      expression: "memberDlg"
    }
  }, [_c('div', {
    staticClass: "page-head"
  }, [_vm._v("\n      " + _vm._s(_vm.selectMemberName) + "\n      "), _c('div', {
    staticClass: "move-right theme-font-color",
    on: {
      "click": function($event) {
        _vm.memberDlg = false
      }
    }
  }, [_vm._v("关闭")])]), _vm._v(" "), _c('section', {
    staticStyle: {
      "margin-bottom": "0",
      "padding": "0"
    }
  }, [(_vm.selectMemberAvatarPathname) ? _c('div', {
    staticClass: "member-photo"
  }, [_c('img', {
    attrs: {
      "src": _vm.g.Util.getImgUrl(_vm.selectMemberAvatarPathname, 600, 600, 'EEEEEE')
    }
  })]) : _vm._e(), _vm._v(" "), _c('ul', {
    staticClass: "memb-stat"
  }, [_c('li', {
    staticClass: "theme-border-bottom"
  }, [_c('label', [_vm._v("入场签到：")]), _vm._v(_vm._s(_vm.memberStat.entryCheckins) + " 次")]), _vm._v(" "), _c('li', {
    staticClass: "theme-border-bottom"
  }, [_c('label', [_vm._v("团课次数：")]), _vm._v(_vm._s(_vm.memberStat.gcLessonTimes) + " 次")]), _vm._v(" "), _c('li', {
    staticClass: "theme-border-bottom"
  }, [_c('label', [_vm._v("私教课次数：")]), _vm._v(_vm._s(_vm.memberStat.pcLessonTimes) + " 次")]), _vm._v(" "), _c('li', {
    staticClass: "theme-border-bottom"
  }, [_c('label', [_vm._v("剩余/累计积分：")]), (_vm.memberStat.points) ? [_vm._v(_vm._s(_vm.memberStat.points) + " / " + _vm._s(_vm.memberStat.pointsSum) + " （" + _vm._s(_vm.memberStat.pointsTitle) + "）")] : _vm._e()], 2)]), _vm._v(" "), _c('div', {
    staticClass: "submit row justify-center"
  }, [_c('div', {
    staticClass: "btn theme-btn-bg middle-btn",
    on: {
      "click": function($event) {
        return _vm.toMemberPage(_vm.selectMemberId)
      }
    }
  }, [_vm._v("查看会员详细 ")])])])])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2132:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "-style-"
  }, [_c('page-head', {
    attrs: {
      "title": "参数设置"
    }
  }), _vm._v(" "), _c('section', [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "cont"
  }, [_c('ul', [_c('li', {
    staticClass: "theme-border-bottom"
  }, [_c('div', {
    staticClass: "swicth"
  }, [_c('qd-switch', {
    attrs: {
      "title": "是否需要入场签到"
    },
    model: {
      value: (_vm.shopParam.hasEntryCheckin),
      callback: function($$v) {
        _vm.$set(_vm.shopParam, "hasEntryCheckin", $$v)
      },
      expression: "shopParam.hasEntryCheckin"
    }
  })], 1)]), _vm._v(" "), _c('li', {
    staticClass: "theme-border-bottom"
  }, [_c('div', {
    staticClass: "swicth"
  }, [_c('qd-switch', {
    attrs: {
      "title": "是否需要团课"
    },
    model: {
      value: (_vm.shopParam.hasGroupCourse),
      callback: function($$v) {
        _vm.$set(_vm.shopParam, "hasGroupCourse", $$v)
      },
      expression: "shopParam.hasGroupCourse"
    }
  })], 1)]), _vm._v(" "), _c('li', {
    staticClass: "theme-border-bottom"
  }, [_c('div', {
    staticClass: "swicth"
  }, [_c('qd-switch', {
    attrs: {
      "title": "是否需要私教课"
    },
    model: {
      value: (_vm.shopParam.hasPrivateCourse),
      callback: function($$v) {
        _vm.$set(_vm.shopParam, "hasPrivateCourse", $$v)
      },
      expression: "shopParam.hasPrivateCourse"
    }
  })], 1)])])]), _vm._v(" "), _vm._m(1)]), _vm._v(" "), (_vm.editable) ? _c('div', {
    staticClass: "submit"
  }, [_c('div', {
    staticClass: "text-center theme-btn-bg largest-btn",
    on: {
      "click": function($event) {
        return _vm.save()
      }
    }
  }, [_vm._v("保存")])]) : _vm._e(), _vm._v(" "), _c('bottom-nav')], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd theme-padding theme-border-bottom"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("门店业务模块选择")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "remark theme-padding"
  }, [_c('div', {
    staticClass: "tit"
  }, [_c('i', {
    staticClass: "iconfont iconinfo"
  }), _vm._v(" 说明：")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("对于健身房或俱乐部，一般需要会员入场签到，用于检查会员是否有效；")]), _vm._v(" "), _c('li', [_vm._v("对于健身工作室（私教馆、瑜伽馆、舞蹈房等），一般不需要会员入场签到，只需要团课或私教课；")]), _vm._v(" "), _c('li', [_vm._v("如果设置为【否（灰色）】，电脑版及手机版将不显示相关模块。")])])])
}]}

/***/ }),

/***/ 2155:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "-style- vant"
  }, [_c('page-head', {
    attrs: {
      "title": "门店意见箱"
    }
  }), _vm._v(" "), (!_vm.feedbackList || _vm.feedbackList.length === 0) ? _c('p', {
    staticClass: "center gray"
  }, [_vm._v("\n      尚无意见反馈，贵店估计做得十全十美\n    ")]) : _vm._e(), _vm._v(" "), _c('ul', {
    staticClass: "feedback"
  }, _vm._l((_vm.feedbackList), function(f, idx) {
    return _c('li', {
      staticClass: "section-part"
    }, [_c('div', {
      staticClass: "theme-border-bottom row start align-center"
    }, [_c('div', [_c('img', {
      staticClass: "photo",
      attrs: {
        "src": _vm.g.Util.getImgUrl(f.avatarPathname, 200, 200, 'EEEEEE')
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "row align-center flex-grow-1 feedback-right"
    }, [_c('div', {
      staticClass: "flex-grow-1 feedback-left"
    }, [_c('div', {
      staticClass: "hd"
    }, [_c('div', {
      staticClass: "l"
    }, [_c('a', {
      staticClass: "font-color-3",
      attrs: {
        "href": '#/member-base/' + f.memberId
      }
    }, [_vm._v(_vm._s(f.createUname))]), _c('span', {
      staticClass: "small ml-10"
    }, [_vm._v(_vm._s(f.createTime))])])]), _vm._v(" "), _c('div', {
      staticClass: "content"
    }, [_c('pre', {
      staticClass: "font-color-9"
    }, [_vm._v(_vm._s(f.content))])])]), _vm._v(" "), _c('div', {
      staticClass: "reply-btn btn theme-btn-bor",
      on: {
        "click": function($event) {
          return _vm.openFeedbackReplyCreateDlg(idx)
        }
      }
    }, [_vm._v("回复")])])]), _vm._v(" "), (f.replyList && f.replyList.length > 0) ? _c('div', {
      staticClass: "reply-list"
    }, _vm._l((f.replyList), function(r, replyIdx) {
      return _c('div', {
        staticClass: "item"
      }, [_c('span', {
        staticClass: "theme-font-color2"
      }, [_vm._v(_vm._s(r.createUname))]), _vm._v(" 回复 "), _c('span', {
        staticClass: "theme-font-color2"
      }, [_vm._v(_vm._s(f.createUname))]), _vm._v("："), _c('span', {
        staticClass: "font-color-9"
      }, [_vm._v(" " + _vm._s(r.content))]), _vm._v(" "), (r.createUid === _vm.g.data.user.uid) ? _c('span', {
        staticClass: "font-color-9"
      }, [_c('a', {
        on: {
          "click": function($event) {
            return _vm.deleteReply(r.rid, idx, replyIdx)
          }
        }
      }, [_c('i', {
        staticClass: "iconfont icondelete"
      })])]) : _vm._e()])
    }), 0) : _vm._e()])
  }), 0), _vm._v(" "), _c('bottom-nav'), _vm._v(" "), _c('div', {
    staticClass: "vant"
  }, [(_vm.feedbackReplyCreate) ? _c('van-dialog', {
    staticClass: "van-has-overlay visible-close section-part",
    attrs: {
      "show-confirm-button": true,
      "show-cancel-button": true,
      "confirmButtonText": "提交"
    },
    on: {
      "confirm": _vm.submitReply
    },
    model: {
      value: (_vm.feedbackReplyCreate),
      callback: function($$v) {
        _vm.feedbackReplyCreate = $$v
      },
      expression: "feedbackReplyCreate"
    }
  }, [_c('div', {
    staticClass: "dlg-head",
    staticStyle: {
      "margin-bottom": "15px"
    }
  }, [_vm._v("回复")]), _vm._v(" "), _c('div', {
    staticClass: "dlg-cont",
    staticStyle: {
      "text-align": "left",
      "padding": "0 16px 16px 16px"
    }
  }, [_c('div', {
    staticClass: "memb-confirm"
  }, [(_vm.selectFeedbackIdx !== null && _vm.selectFeedbackIdx >= 0) ? _c('div', {
    staticClass: "src"
  }, [_vm._v("\n              " + _vm._s(_vm.feedbackList[_vm.selectFeedbackIdx].content) + "\n            ")]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "tblform"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.reply),
      expression: "reply",
      modifiers: {
        "trim": true
      }
    }],
    staticStyle: {
      "padding": "8px"
    },
    attrs: {
      "rows": "12",
      "placeholder": "请认真填写回复内容"
    },
    domProps: {
      "value": (_vm.reply)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.reply = $event.target.value.trim()
      },
      "blur": function($event) {
        return _vm.$forceUpdate()
      }
    }
  })])])])]) : _vm._e()], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2181:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "-style-"
  }, [_c('page-head', {
    attrs: {
      "title": "门店短信记录"
    }
  }), _vm._v(" "), _c('section', {
    staticStyle: {
      "padding": "0"
    }
  }, [_c('div', {
    staticClass: "hd-menus theme-border-bottom"
  }, [_c('table', [_c('tr', [_c('td', {
    attrs: {
      "width": "33%"
    }
  }, [_vm._v("\n            已购短信\n            "), _c('div', {
    staticClass: "val green"
  }, [_vm._v(_vm._s(_vm.smsCnts.buys)), _c('span', {
    staticClass: "tips"
  }, [_vm._v("条")])])]), _vm._v(" "), _c('td', [_vm._v("\n            已发短信\n             "), _c('div', {
    staticClass: "val orange"
  }, [_vm._v(_vm._s(_vm.smsCnts.sends)), _c('span', {
    staticClass: "tips"
  }, [_vm._v("条")])])]), _vm._v(" "), _c('td', {
    attrs: {
      "width": "33%"
    }
  }, [_vm._v("\n            剩余短信\n             "), _c('div', {
    staticClass: "val orangered"
  }, [_vm._v(_vm._s(_vm.smsCnts.remnant)), _c('span', {
    staticClass: "tips"
  }, [_vm._v("条")])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "stat-more"
  }, [_vm._v("\n      最近30天发送短信数\n      "), _c('div', {
    staticClass: "theme-padding"
  }, [_c('chart', {
    staticClass: "chart",
    attrs: {
      "options": _vm.countStatChartOption
    }
  })], 1)])]), _vm._v(" "), _c('section', [_c('div', {
    staticClass: "hd theme-padding theme-border-bottom"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("短信发送记录")]), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.smsType),
      expression: "smsType"
    }],
    attrs: {
      "size": "1"
    },
    on: {
      "change": [function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.smsType = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }, _vm.changeSmsType]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("全部类型")]), _vm._v(" "), _vm._l((_vm.g.Dict.SmsTypes), function(name, typeId) {
    return (typeId > 0) ? _c('option', {
      domProps: {
        "value": typeId
      }
    }, [_vm._v("\n            " + _vm._s(name) + "\n          ")]) : _vm._e()
  })], 2), _vm._v(" "), _c('i', {
    staticClass: "iconfont iconUnder-the-arrow"
  })])]), _vm._v(" "), _vm._l((_vm.smsLogList), function(l) {
    return _c('div', {
      staticClass: "tbl-item theme-shadow-grey"
    }, [_c('table', [_c('tr', [_c('th', [_vm._v("发送时间")]), _c('td', [_vm._v(_vm._s(l.createTime))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("短信类型")]), _c('td', [_vm._v(_vm._s(_vm.g.Dict.SmsTypes[l.smsType]))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("收件人")]), _c('td', [_vm._v(_vm._s(l.receiverName))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("手机号")]), _c('td', [_vm._v(_vm._s(l.phoneNo))])]), _vm._v(" "), _c('tr', {
      staticClass: "lines"
    }, [_c('th', [_vm._v("短信内容")]), _c('td', [_vm._v(_vm._s(l.content))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("短信条数")]), _c('td', [_vm._v(_vm._s(l.smsNum) + " 条")])])])])
  }), _vm._v(" "), _c('div', {
    staticClass: "gray center medium"
  }, [_c('p', [_vm._v("共 " + _vm._s(_vm.smsCount) + " 条记录")])]), _vm._v(" "), _c('pagination', {
    attrs: {
      "total": _vm.smsCount,
      "page-change": _vm.changePageNo
    }
  })], 2), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('bottom-nav')], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "bottom-remark section-part"
  }, [_c('h3', {
    staticClass: "theme-font-color2"
  }, [_c('i', {
    staticClass: "iconfont iconinfo big"
  }), _vm._v("备注：")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("每70字计为一条短信，不限制短信字数；")]), _vm._v(" "), _c('li', [_vm._v("短信实际内容包括电信运营商规定的系统签名“【健总管】”（5个字，也计算在短信字数内）；")]), _vm._v(" "), _c('li', [_vm._v("如果贵店的剩余短信数不足，系统将停止发送短信，充值后即可继续使用短信服务；")]), _vm._v(" "), _c('li', {
    staticClass: "theme-font-color2"
  }, [_vm._v("充值短信数，请通过电脑端右上角“系统支付”")])])])
}]}

/***/ }),

/***/ 2243:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "card-edit -style-"
  }, [_c('section', {
    staticClass: "tblform section-part"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.stepsIdx === 1),
      expression: "stepsIdx === 1"
    }]
  }, [_c('div', {
    staticClass: "page-head"
  }, [_c('div', {
    staticClass: "move",
    on: {
      "click": function($event) {
        _vm.confirmBack = true
      }
    }
  }, [_c('i', {
    staticClass: "iconfont iconarrow-l"
  })]), _vm._v("\n        基础信息设置\n      ")]), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name must-fill"
  }, [_vm._v("卡类别"), (_vm.card.cardClass != null) ? _c('i', {
    staticClass: "iconfont iconinfo theme-font-color tips-icon",
    on: {
      "click": function($event) {
        return _vm.showTipDlg('cardClass')
      }
    }
  }) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_c('pull-down-list', {
    attrs: {
      "selectList": _vm.cardClass,
      "readonly": _vm.readonly
    },
    on: {
      "selectOne": _vm.selectCardClass
    }
  }, [_c('span', {
    attrs: {
      "slot": "dlgTit"
    },
    slot: "dlgTit"
  }, [_vm._v("卡类别")]), _vm._v(" "), (_vm.g.Dict.CardClass[_vm.card.cardClass]) ? [_c('span', {
    staticClass: "font-color-3",
    attrs: {
      "slot": "pleaseChose"
    },
    slot: "pleaseChose"
  }, [_vm._v(_vm._s(_vm.g.Dict.CardClass[_vm.card.cardClass]))])] : [_c('span', {
    staticClass: "font-color-c",
    attrs: {
      "slot": "pleaseChose"
    },
    slot: "pleaseChose"
  }, [_vm._v("请选择")])]], 2)], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name",
    class: {
      'must-fill': !_vm.card.cardId
    }
  }, [_vm._v("卡类型"), (!_vm.card.cardId) ? _c('i', {
    staticClass: "iconfont iconinfo theme-font-color tips-icon",
    on: {
      "click": function($event) {
        return _vm.showTipDlg('cardType')
      }
    }
  }) : _vm._e()]), _vm._v(" "), (!_vm.card.cardId) ? _c('div', {
    staticClass: "infor-detail"
  }, [_c('pull-down-list', {
    attrs: {
      "selectList": _vm.cardType
    },
    on: {
      "selectOne": _vm.selectCardType
    }
  }, [_c('span', {
    attrs: {
      "slot": "dlgTit"
    },
    slot: "dlgTit"
  }, [_vm._v("卡类型")]), _vm._v(" "), _c('span', {
    staticClass: "font-color-c",
    attrs: {
      "slot": "pleaseChose"
    },
    slot: "pleaseChose"
  }, [_vm._v("请选择")])])], 1) : _c('div', {
    staticClass: "infor-detail"
  }, [_vm._v("\n          " + _vm._s(_vm.g.Dict.CardType[_vm.card.cardType]) + "\n        ")])]), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name must-fill"
  }, [_vm._v("卡名称")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.card.cardName),
      expression: "card.cardName",
      modifiers: {
        "trim": true
      }
    }],
    attrs: {
      "placeholder": "请输入卡名称",
      "readonly": _vm.readonly,
      "type": "text"
    },
    domProps: {
      "value": (_vm.card.cardName)
    },
    on: {
      "blur": [function($event) {
        return _vm.checkValue('cardName')
      }, function($event) {
        return _vm.$forceUpdate()
      }],
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.card, "cardName", $event.target.value.trim())
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("默认充值金额")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.card.defaultAmount),
      expression: "card.defaultAmount",
      modifiers: {
        "trim": true
      }
    }],
    staticClass: "wid80",
    attrs: {
      "placeholder": "请输入默认充值金额",
      "readonly": _vm.readonly,
      "type": "number"
    },
    domProps: {
      "value": (_vm.card.defaultAmount)
    },
    on: {
      "blur": [function($event) {
        return _vm.checkInputSize('defaultAmount', '默认充值金额不能小于0')
      }, function($event) {
        return _vm.$forceUpdate()
      }],
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.card, "defaultAmount", $event.target.value.trim())
      }
    }
  }), _vm._v(" "), _c('span', [_vm._v("元")])])]), _vm._v(" "), (_vm.card.cardType === 4) ? _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("时间类型：")]), _vm._v(" "), _vm._m(0)]) : _vm._e(), _vm._v(" "), (_vm.card.cardType === 4) ? _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("默认使用时间")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.card.defaultTimes),
      expression: "card.defaultTimes",
      modifiers: {
        "trim": true
      }
    }],
    staticClass: "wid70",
    attrs: {
      "placeholder": "请输入默认使用时间",
      "readonly": _vm.readonly,
      "type": "number"
    },
    domProps: {
      "value": (_vm.card.defaultTimes)
    },
    on: {
      "blur": [function($event) {
        return _vm.checkInputSize('defaultTimes', '默认使用时间不能小于0')
      }, function($event) {
        return _vm.$forceUpdate()
      }],
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.card, "defaultTimes", $event.target.value.trim())
      }
    }
  }), _vm._v(" "), _c('span', [_vm._v("分钟")])])]) : _vm._e(), _vm._v(" "), (_vm.card.cardType === 2) ? _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("默认使用次数")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.card.defaultTimes),
      expression: "card.defaultTimes",
      modifiers: {
        "trim": true
      }
    }],
    staticClass: "wid80",
    attrs: {
      "placeholder": "请输入默认使用次数",
      "readonly": _vm.readonly,
      "type": "number"
    },
    domProps: {
      "value": (_vm.card.defaultTimes)
    },
    on: {
      "blur": [function($event) {
        return _vm.checkInputSize('defaultTimes', '默认使用次数不能小于0')
      }, function($event) {
        return _vm.$forceUpdate()
      }],
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.card, "defaultTimes", $event.target.value.trim())
      }
    }
  }), _vm._v(" "), _c('span', [_vm._v("次")])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("默认使用天数 "), _c('i', {
    staticClass: "iconfont iconinfo theme-font-color tips-icon",
    on: {
      "click": function($event) {
        return _vm.showTipDlg('defaultDays')
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.card.defaultDays),
      expression: "card.defaultDays",
      modifiers: {
        "trim": true
      }
    }],
    staticClass: "wid80",
    attrs: {
      "placeholder": "请输入默认使用天数",
      "readonly": _vm.readonly,
      "type": "number"
    },
    domProps: {
      "value": (_vm.card.defaultDays)
    },
    on: {
      "blur": [function($event) {
        return _vm.checkInputSize('defaultDays', '默认使用天数不能小于0')
      }, function($event) {
        return _vm.$forceUpdate()
      }],
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.card, "defaultDays", $event.target.value.trim())
      }
    }
  }), _vm._v(" "), _c('span', [_vm._v("天")])])]), _vm._v(" "), (_vm.card.cardType > 1 && _vm.card.defaultDays) ? _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("禁止修改有效期"), _c('i', {
    staticClass: "iconfont iconinfo theme-font-color tips-icon",
    on: {
      "click": function($event) {
        return _vm.showTipDlg('fobiddenModifyTime')
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail row row-flex-end align-center",
    staticStyle: {
      "padding": "0"
    }
  }, [_c('div', {
    staticClass: "swicth"
  }, [_c('qd-switch', {
    attrs: {
      "disabled": _vm.readonly
    },
    model: {
      value: (_vm.card.expDateDisable),
      callback: function($$v) {
        _vm.$set(_vm.card, "expDateDisable", $$v)
      },
      expression: "card.expDateDisable"
    }
  })], 1)])]) : _vm._e(), _vm._v(" "), (_vm.card.cardClass === 0) ? _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("是否入场签到用")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail row row-flex-end align-center",
    staticStyle: {
      "padding": "0"
    }
  }, [_c('div', {
    staticClass: "swicth"
  }, [_c('qd-switch', {
    attrs: {
      "disabled": _vm.readonly
    },
    model: {
      value: (_vm.card.allowCheckin),
      callback: function($$v) {
        _vm.$set(_vm.card, "allowCheckin", $$v)
      },
      expression: "card.allowCheckin"
    }
  })], 1)])]) : _vm._e(), _vm._v(" "), (_vm.card.cardClass === 0 && _vm.card.allowCheckin && _vm.card.cardType !== 1 && _vm.card.cardType !== 4 && !_vm.card.chargeByHourEnable) ? [_c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("每次签到计费"), (_vm.card.cardType === 3) ? _c('i', {
    staticClass: "iconfont iconinfo theme-font-color tips-icon",
    on: {
      "click": function($event) {
        return _vm.showTipDlg('checkinPayment')
      }
    }
  }) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.card.checkinPayment),
      expression: "card.checkinPayment",
      modifiers: {
        "trim": true
      }
    }],
    staticClass: "wid80",
    attrs: {
      "placeholder": "请输入默认使用天数",
      "readonly": _vm.readonly,
      "type": "number"
    },
    domProps: {
      "value": (_vm.card.checkinPayment)
    },
    on: {
      "blur": [function($event) {
        return _vm.checkInputSize('checkinPayment', '默认使用天数不能小于0')
      }, function($event) {
        return _vm.$forceUpdate()
      }],
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.card, "checkinPayment", $event.target.value.trim())
      }
    }
  }), _vm._v(" "), _c('span', [(_vm.card.cardType === 2) ? [_vm._v("次")] : _vm._e(), _vm._v(" "), (_vm.card.cardType === 3) ? [_vm._v("元")] : _vm._e(), _vm._v(" "), (_vm.card.cardType === 4) ? [_vm._v(_vm._s(_vm.g.Dict.CardTimeTypes[_vm.card.cardTimeType]))] : _vm._e()], 2)])]), _vm._v(" "), (_vm.card.cardType === 3) ? [(_vm.moreCheckinPaymentIdxList.length > 0) ? _c('div', {}, [_c('ul', {
    staticClass: "more-ckin-payments"
  }, _vm._l((_vm.moreCheckinPaymentIdxList), function(v, idx) {
    return _c('li', {
      staticClass: "theme-border-bottom"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model.trim",
        value: (_vm.moreCheckinPaymentTitles[idx]),
        expression: "moreCheckinPaymentTitles[idx]",
        modifiers: {
          "trim": true
        }
      }],
      staticClass: "wid30 input-bg",
      attrs: {
        "placeholder": "计费项目名",
        "readonly": _vm.readonly,
        "type": "number"
      },
      domProps: {
        "value": (_vm.moreCheckinPaymentTitles[idx])
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          _vm.$set(_vm.moreCheckinPaymentTitles, idx, $event.target.value.trim())
        },
        "blur": function($event) {
          return _vm.$forceUpdate()
        }
      }
    }), _vm._v(" "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model.trim",
        value: (_vm.moreCheckinPaymentValues[idx]),
        expression: "moreCheckinPaymentValues[idx]",
        modifiers: {
          "trim": true
        }
      }],
      staticClass: "wid30 input-bg",
      attrs: {
        "placeholder": "计费金额",
        "readonly": _vm.readonly,
        "type": "number"
      },
      domProps: {
        "value": (_vm.moreCheckinPaymentValues[idx])
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          _vm.$set(_vm.moreCheckinPaymentValues, idx, $event.target.value.trim())
        },
        "blur": function($event) {
          return _vm.$forceUpdate()
        }
      }
    }), _vm._v("元\n              ")])
  }), 0)]) : _vm._e(), _vm._v(" "), (!_vm.readonly) ? _c('div', {
    staticClass: "row theme-border-bottom text-center"
  }, [_c('span', {
    staticStyle: {
      "padding": "0 5px 0 20px",
      "margin": "0 auto"
    }
  }, [_c('a', {
    on: {
      "click": _vm.addMoreCheckinPayment
    }
  }, [_vm._v(" 添加更多计费方案")])])]) : _vm._e()] : _vm._e()] : _vm._e(), _vm._v(" "), (_vm.card.cardClass === 0 && (_vm.card.cardType === 3 || _vm.card.cardType === 2) && _vm.card.allowCheckin) ? _c('div', {
    staticClass: "row align-center theme-border-bottom bt-10"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("启用按小时计费 "), _c('i', {
    staticClass: "iconfont iconinfo theme-font-color tips-icon",
    on: {
      "click": function($event) {
        return _vm.showTipDlg('useHoursCount')
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail row row-flex-end align-center",
    staticStyle: {
      "padding": "0"
    }
  }, [_c('div', {
    staticClass: "swicth"
  }, [_c('qd-switch', {
    attrs: {
      "disabled": _vm.readonly
    },
    model: {
      value: (_vm.card.chargeByHourEnable),
      callback: function($$v) {
        _vm.$set(_vm.card, "chargeByHourEnable", $$v)
      },
      expression: "card.chargeByHourEnable"
    }
  })], 1)])]) : _vm._e(), _vm._v(" "), (_vm.card.chargeByHourEnable && _vm.card.cardClass === 0 && _vm.card.allowCheckin && (_vm.card.cardType !== 1 && _vm.card.cardType !== 4)) ? [_c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("每小时计费")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.card.chargeByHourVal),
      expression: "card.chargeByHourVal",
      modifiers: {
        "trim": true
      }
    }],
    staticClass: "wid80",
    attrs: {
      "placeholder": "请输入每小时计费",
      "readonly": _vm.readonly,
      "type": "number"
    },
    domProps: {
      "value": (_vm.card.chargeByHourVal)
    },
    on: {
      "blur": [function($event) {
        return _vm.checkInputSize('chargeByHourVal', '计费金额不能小于0')
      }, function($event) {
        return _vm.$forceUpdate()
      }],
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.card, "chargeByHourVal", $event.target.value.trim())
      }
    }
  }), _vm._v(" "), _c('span', [(_vm.card.cardType === 3) ? [_vm._v("元")] : _vm._e(), _vm._v(" "), (_vm.card.cardType === 2) ? [_vm._v("次")] : _vm._e()], 2)])]), _vm._v(" "), _c('div', {
    staticClass: "limit-hr"
  }, [_c('div', {
    staticClass: "theme-font-color lt-hour-tips"
  }, [_vm._v("不足一小时的计费设置")]), _vm._v(" "), _c('div', {
    staticClass: "limit-checkin mb-10 theme-border-bottom row align-center"
  }, [_c('div', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.chargeByHourConf.fromMin1),
      expression: "chargeByHourConf.fromMin1",
      modifiers: {
        "trim": true
      }
    }],
    staticClass: "theme-btn-bor input-bg",
    attrs: {
      "autofocus": "",
      "type": "number",
      "readonly": _vm.readonly
    },
    domProps: {
      "value": (_vm.chargeByHourConf.fromMin1)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.chargeByHourConf, "fromMin1", $event.target.value.trim())
      },
      "blur": function($event) {
        return _vm.$forceUpdate()
      }
    }
  }), _vm._v(" 分钟 "), _c('span', {
    staticClass: "ml-10 mr-10"
  }, [_vm._v("~")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.chargeByHourConf.toMin1),
      expression: "chargeByHourConf.toMin1",
      modifiers: {
        "trim": true
      }
    }],
    staticClass: "theme-btn-bor input-bg",
    attrs: {
      "autofocus": "",
      "type": "number",
      "readonly": _vm.readonly
    },
    domProps: {
      "value": (_vm.chargeByHourConf.toMin1)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.chargeByHourConf, "toMin1", $event.target.value.trim())
      },
      "blur": function($event) {
        return _vm.$forceUpdate()
      }
    }
  }), _vm._v("分钟\n            ")]), _vm._v(" "), _c('div', [_vm._v("按半小时计费")])]), _vm._v(" "), _c('div', {
    staticClass: "limit-checkin theme-border-bottom row align-center"
  }, [_c('div', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.chargeByHourConf.fromMin2),
      expression: "chargeByHourConf.fromMin2",
      modifiers: {
        "trim": true
      }
    }],
    staticClass: "theme-btn-bor input-bg",
    attrs: {
      "autofocus": "",
      "type": "number",
      "readonly": _vm.readonly
    },
    domProps: {
      "value": (_vm.chargeByHourConf.fromMin2)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.chargeByHourConf, "fromMin2", $event.target.value.trim())
      },
      "blur": function($event) {
        return _vm.$forceUpdate()
      }
    }
  }), _vm._v("分钟  "), _c('span', {
    staticClass: "ml-10 mr-10"
  }, [_vm._v("~")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.chargeByHourConf.toMin2),
      expression: "chargeByHourConf.toMin2",
      modifiers: {
        "trim": true
      }
    }],
    staticClass: "theme-btn-bor input-bg",
    attrs: {
      "autofocus": "",
      "type": "number",
      "readonly": _vm.readonly
    },
    domProps: {
      "value": (_vm.chargeByHourConf.toMin2)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.chargeByHourConf, "toMin2", $event.target.value.trim())
      },
      "blur": function($event) {
        return _vm.$forceUpdate()
      }
    }
  }), _vm._v("分钟\n            ")]), _vm._v(" "), _c('div', [_vm._v("按一小时计费")])])]), _vm._v(" "), _c('div', {
    staticClass: "limit-hr pt-0"
  }, [_c('div', {
    staticClass: "limit-checkin theme-border-bottom"
  }, [_c('span', {
    staticClass: "mr-5"
  }, [_vm._v("入场签到")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.card.chargeByHourBegin),
      expression: "card.chargeByHourBegin",
      modifiers: {
        "trim": true
      }
    }],
    staticClass: "input-bg",
    attrs: {
      "autofocus": "",
      "type": "number",
      "readonly": _vm.readonly
    },
    domProps: {
      "value": (_vm.card.chargeByHourBegin)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.card, "chargeByHourBegin", $event.target.value.trim())
      },
      "blur": function($event) {
        return _vm.$forceUpdate()
      }
    }
  }), _vm._v("分钟后开始计时（计费）\n            "), _c('i', {
    staticClass: "iconfont iconinfo theme-font-color tips-icon",
    on: {
      "click": function($event) {
        return _vm.showTipDlg('checkinCount')
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "limit-hr pt-0 pb-0"
  }, [_c('div', {
    staticClass: "limit-checkin"
  }, [_c('span', {
    staticClass: "mr-5"
  }, [_vm._v("超过")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.card.moreChargeUnitPirceHours),
      expression: "card.moreChargeUnitPirceHours",
      modifiers: {
        "trim": true
      }
    }],
    staticClass: "input-bg",
    attrs: {
      "autofocus": "",
      "type": "number",
      "readonly": _vm.readonly
    },
    domProps: {
      "value": (_vm.card.moreChargeUnitPirceHours)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.card, "moreChargeUnitPirceHours", $event.target.value.trim())
      },
      "blur": function($event) {
        return _vm.$forceUpdate()
      }
    }
  }), _vm._v("小时后， 按照\n            "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.card.moreChargeUnitPirceAmount),
      expression: "card.moreChargeUnitPirceAmount",
      modifiers: {
        "trim": true
      }
    }],
    staticClass: "input-bg",
    attrs: {
      "autofocus": "",
      "type": "number",
      "readonly": _vm.readonly
    },
    domProps: {
      "value": (_vm.card.moreChargeUnitPirceAmount)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.card, "moreChargeUnitPirceAmount", $event.target.value.trim())
      },
      "blur": function($event) {
        return _vm.$forceUpdate()
      }
    }
  }), _vm._v(" "), (_vm.card.cardType === 2) ? [_vm._v("元/小时")] : _vm._e(), _vm._v(" "), (_vm.card.cardType === 1) ? [_vm._v("次")] : _vm._e(), _vm._v("\n            计费\n          ")], 2)])] : _vm._e()], 2), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.stepsIdx === 2),
      expression: "stepsIdx === 2"
    }]
  }, [_c('div', {
    staticClass: "page-head"
  }, [_c('div', {
    staticClass: "move",
    on: {
      "click": function($event) {
        _vm.confirmBack = true
      }
    }
  }, [_c('i', {
    staticClass: "iconfont iconarrow-l"
  })]), _vm._v("\n        使用限制设置"), _c('small', {
    staticClass: "font-color-c",
    staticStyle: {
      "font-size": "12px"
    }
  }, [_vm._v(" (可选填）")])]), _vm._v(" "), (_vm.card.cardClass === 0) ? _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("限定用卡时间"), _c('i', {
    staticClass: "iconfont iconinfo theme-font-color tips-icon",
    on: {
      "click": function($event) {
        return _vm.showTipDlg('limitTimes')
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail row start time-picker-detail"
  }, [_c('div', {
    staticClass: "chose-begin-time"
  }, [_c('div', {
    on: {
      "click": function($event) {
        _vm.beginTimeShow = true
      }
    }
  }, [(_vm.cardForm.limitTimes.beginTime && _vm.cardForm.limitTimes.endTime) ? [_c('span', {
    staticClass: "chose-time",
    class: {
      'font-color-c chose-time-mr': _vm.cardForm.limitTimes.beginTime == '选择'
    }
  }, [_vm._v(_vm._s(_vm.cardForm.limitTimes.beginTime))])] : [_c('span', {
    staticClass: "chose-time",
    class: {
      'font-color-c chose-time-mr': _vm.cardForm.beginTime == '选择'
    }
  }, [_vm._v(_vm._s(_vm.cardForm.beginTime))])], _c('small', [_vm._v("开始时间")]), _vm._v(" "), _c('i', {
    staticClass: "iconfont iconarrow-down-1 font-color-c"
  })], 2), _vm._v(" "), (_vm.beginTimeShow) ? _c('div', {
    staticClass: "time-picker"
  }, [_c('van-datetime-picker', {
    attrs: {
      "type": "time",
      "min-hour": 0,
      "max-hour": 23,
      "item-height": 30,
      "visible-item-count": 3
    },
    on: {
      "cancel": function($event) {
        _vm.beginTimeShow = false
      },
      "confirm": function($event) {
        return _vm.choseTime('beginTime')
      }
    },
    model: {
      value: (_vm.cardForm.limitTimes.beginTime),
      callback: function($$v) {
        _vm.$set(_vm.cardForm.limitTimes, "beginTime", $$v)
      },
      expression: "cardForm.limitTimes.beginTime"
    }
  })], 1) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "chose-begin-time"
  }, [_c('div', {
    on: {
      "click": function($event) {
        _vm.endTimeShow = true
      }
    }
  }, [(_vm.cardForm.limitTimes.beginTime && _vm.cardForm.limitTimes.endTime) ? [_c('span', {
    staticClass: "chose-time",
    class: {
      'font-color-c chose-time-mr': _vm.cardForm.limitTimes.endTime == '选择'
    }
  }, [_vm._v(_vm._s(_vm.cardForm.limitTimes.endTime))])] : [_c('span', {
    staticClass: "chose-time",
    class: {
      'font-color-c chose-time-mr': _vm.cardForm.endTime == '选择'
    }
  }, [_vm._v(_vm._s(_vm.cardForm.endTime))])], _c('small', [_vm._v("结束时间")]), _vm._v(" "), _c('i', {
    staticClass: "iconfont iconarrow-down-1 font-color-c"
  })], 2), _vm._v(" "), (_vm.endTimeShow) ? _c('div', {
    staticClass: "time-picker"
  }, [_c('van-datetime-picker', {
    attrs: {
      "type": "time",
      "min-hour": 0,
      "max-hour": 23,
      "item-height": 30,
      "visible-item-count": 3
    },
    on: {
      "cancel": function($event) {
        _vm.endTimeShow = false
      },
      "confirm": function($event) {
        return _vm.choseTime('endTime')
      }
    },
    model: {
      value: (_vm.cardForm.limitTimes.endTime),
      callback: function($$v) {
        _vm.$set(_vm.cardForm.limitTimes, "endTime", $$v)
      },
      expression: "cardForm.limitTimes.endTime"
    }
  })], 1) : _vm._e()])])]) : _vm._e(), _vm._v(" "), (_vm.card.cardClass === 0) ? _c('div', {
    staticClass: "theme-border-bottom col"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("限定用卡星期 "), _c('i', {
    staticClass: "iconfont iconinfo theme-font-color tips-icon",
    on: {
      "click": function($event) {
        return _vm.showTipDlg('limitWeeks')
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail",
    staticStyle: {
      "width": "100%",
      "margin-top": "10px"
    }
  }, [_c('ul', {
    staticClass: "row start limit-week check-box"
  }, [_vm._l((_vm.weeks), function(item, idx) {
    return [_c('li', {
      on: {
        "click": function($event) {
          return _vm.selectWeekDay(item, idx)
        }
      }
    }, [_c('span', {
      staticClass: "check-box-check",
      class: {
        'check-box-check1': item.select
      }
    }, [_c('i', {
      staticClass: "iconfont",
      class: {
        'iconcheck0': item.select
      }
    })]), _vm._v(_vm._s(item.day))])]
  })], 2)])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("限定用卡日期 "), _c('i', {
    staticClass: "iconfont iconinfo theme-font-color tips-icon",
    on: {
      "click": function($event) {
        return _vm.showTipDlg('limitDate')
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail",
    on: {
      "click": _vm.choseDate
    }
  }, [(_vm.confirmDateS[0] == '' && _vm.confirmDateS[1] == '') ? [_c('span', {
    staticClass: "font-color-c"
  }, [_vm._v("请选择日期")])] : [_c('div', {
    staticClass: "row align-center start",
    staticStyle: {
      "padding": "0"
    }
  }, [(_vm.confirmDateS[0]) ? _c('div', {
    staticClass: "mr-10"
  }, [_vm._v(_vm._s(_vm.confirmDateS[0]))]) : _vm._e(), _vm._v(" "), (_vm.confirmDateS[1]) ? _c('div', [_vm._v(_vm._s(_vm.confirmDateS[1]))]) : _vm._e()])]], 2)]), _vm._v(" "), (_vm.card.cardClass === 0) ? _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("限定单双日使用")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_c('ul', {
    staticClass: "row radio-single-chose"
  }, [_c('li', {
    on: {
      "click": function($event) {
        _vm.card.limitOddEvenDay = 0
      }
    }
  }, [_c('i', {
    staticClass: "iconfont icon-radio",
    class: {
      'icon-radio-on': _vm.card.limitOddEvenDay === 0
    }
  }), _vm._v("不限定")]), _vm._v(" "), _c('li', {
    on: {
      "click": function($event) {
        _vm.card.limitOddEvenDay = 1
      }
    }
  }, [_c('i', {
    staticClass: "iconfont icon-radio",
    class: {
      'icon-radio-on': _vm.card.limitOddEvenDay === 1
    }
  }), _vm._v("限定单日")]), _vm._v(" "), _c('li', {
    on: {
      "click": function($event) {
        _vm.card.limitOddEvenDay = 2
      }
    }
  }, [_c('i', {
    staticClass: "iconfont icon-radio",
    class: {
      'icon-radio-on': _vm.card.limitOddEvenDay === 2
    }
  }), _vm._v("限定双日")])])])]) : _vm._e(), _vm._v(" "), (_vm.card.cardClass === 0 && _vm.card.allowCheckin) ? [_c('div', {
    staticClass: "row align-center theme-border-bottom ml-16"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("入场签到限制"), _c('i', {
    staticClass: "iconfont iconinfo theme-font-color tips-icon",
    on: {
      "click": function($event) {
        return _vm.showTipDlg('weekCheckInTime')
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.card.limitDayUses),
      expression: "card.limitDayUses",
      modifiers: {
        "trim": true
      }
    }],
    staticClass: "wid67",
    attrs: {
      "placeholder": "请输入入场签到限制次数",
      "readonly": _vm.readonly,
      "type": "number"
    },
    domProps: {
      "value": (_vm.card.limitDayUses)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.card, "limitDayUses", $event.target.value.trim())
      },
      "blur": function($event) {
        return _vm.$forceUpdate()
      }
    }
  }), _c('span', [_vm._v("次/天")])])]), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom ml-16"
  }, [_c('div', {
    staticClass: "infor-name"
  }), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.card.limitWeekUses),
      expression: "card.limitWeekUses",
      modifiers: {
        "trim": true
      }
    }],
    staticClass: "wid67",
    attrs: {
      "placeholder": "请输入入场签到限制次数",
      "readonly": _vm.readonly,
      "type": "number"
    },
    domProps: {
      "value": (_vm.card.limitWeekUses)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.card, "limitWeekUses", $event.target.value.trim())
      },
      "blur": function($event) {
        return _vm.$forceUpdate()
      }
    }
  }), _c('span', [_vm._v("次/周")])])]), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.card.limitMonthUses),
      expression: "card.limitMonthUses",
      modifiers: {
        "trim": true
      }
    }],
    staticClass: "wid67",
    attrs: {
      "placeholder": "请输入入场签到限制次数",
      "readonly": _vm.readonly,
      "type": "number"
    },
    domProps: {
      "value": (_vm.card.limitMonthUses)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.card, "limitMonthUses", $event.target.value.trim())
      },
      "blur": function($event) {
        return _vm.$forceUpdate()
      }
    }
  }), _c('span', [_vm._v("次/月")])])])] : _vm._e(), _vm._v(" "), [_c('div', {
    staticClass: "row align-center theme-border-bottom ml-16"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("团课预约限制"), _c('i', {
    staticClass: "iconfont iconinfo theme-font-color tips-icon",
    on: {
      "click": function($event) {
        return _vm.showTipDlg('gLessonLimit')
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.card.limitDayGlBookings),
      expression: "card.limitDayGlBookings",
      modifiers: {
        "trim": true
      }
    }],
    staticClass: "wid67",
    attrs: {
      "placeholder": "请输入团课预约限制次数",
      "readonly": _vm.readonly,
      "type": "number"
    },
    domProps: {
      "value": (_vm.card.limitDayGlBookings)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.card, "limitDayGlBookings", $event.target.value.trim())
      },
      "blur": function($event) {
        return _vm.$forceUpdate()
      }
    }
  }), _c('span', [_vm._v("次/天")])])]), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom ml-16"
  }, [_c('div', {
    staticClass: "infor-name"
  }), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.card.limitWeekGlBookings),
      expression: "card.limitWeekGlBookings",
      modifiers: {
        "trim": true
      }
    }],
    staticClass: "wid67",
    attrs: {
      "placeholder": "请输入团课预约限制次数",
      "readonly": _vm.readonly,
      "type": "number"
    },
    domProps: {
      "value": (_vm.card.limitWeekGlBookings)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.card, "limitWeekGlBookings", $event.target.value.trim())
      },
      "blur": function($event) {
        return _vm.$forceUpdate()
      }
    }
  }), _c('span', [_vm._v("次/周")])])]), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.card.limitMonthGlBookings),
      expression: "card.limitMonthGlBookings",
      modifiers: {
        "trim": true
      }
    }],
    staticClass: "wid67",
    attrs: {
      "placeholder": "请输入团课预约限制次数",
      "readonly": _vm.readonly,
      "type": "number"
    },
    domProps: {
      "value": (_vm.card.limitMonthGlBookings)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.card, "limitMonthGlBookings", $event.target.value.trim())
      },
      "blur": function($event) {
        return _vm.$forceUpdate()
      }
    }
  }), _c('span', [_vm._v("次/月")])])])], _vm._v(" "), (!(_vm.card.cardType === 1 && (_vm.card.cardClass === 0 || _vm.card.cardClass === 1))) ? [_c('div', {
    staticClass: "row align-center theme-border-bottom ml-16"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("私教课预约限制"), _c('i', {
    staticClass: "iconfont iconinfo theme-font-color tips-icon",
    staticStyle: {
      "right": "-15px"
    },
    on: {
      "click": function($event) {
        return _vm.showTipDlg('pLessonLimit')
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.card.limitDayPlBookings),
      expression: "card.limitDayPlBookings",
      modifiers: {
        "trim": true
      }
    }],
    staticClass: "wid67",
    attrs: {
      "placeholder": "请输入私教预约限制次数",
      "readonly": _vm.readonly,
      "type": "number"
    },
    domProps: {
      "value": (_vm.card.limitDayPlBookings)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.card, "limitDayPlBookings", $event.target.value.trim())
      },
      "blur": function($event) {
        return _vm.$forceUpdate()
      }
    }
  }), _c('span', [_vm._v("次/天")])])]), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom ml-16"
  }, [_c('div', {
    staticClass: "infor-name"
  }), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.card.limitWeekPlBookings),
      expression: "card.limitWeekPlBookings",
      modifiers: {
        "trim": true
      }
    }],
    staticClass: "wid67",
    attrs: {
      "placeholder": "请输入私教预约限制次数",
      "readonly": _vm.readonly,
      "type": "number"
    },
    domProps: {
      "value": (_vm.card.limitWeekPlBookings)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.card, "limitWeekPlBookings", $event.target.value.trim())
      },
      "blur": function($event) {
        return _vm.$forceUpdate()
      }
    }
  }), _c('span', [_vm._v("次/周")])])]), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.card.limitMonthPlBookings),
      expression: "card.limitMonthPlBookings",
      modifiers: {
        "trim": true
      }
    }],
    staticClass: "wid67",
    attrs: {
      "placeholder": "请输入私教预约限制次数",
      "readonly": _vm.readonly,
      "type": "number"
    },
    domProps: {
      "value": (_vm.card.limitMonthPlBookings)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.card, "limitMonthPlBookings", $event.target.value.trim())
      },
      "blur": function($event) {
        return _vm.$forceUpdate()
      }
    }
  }), _c('span', [_vm._v("次/月")])])])] : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("请假次数限制"), _c('i', {
    staticClass: "iconfont iconinfo theme-font-color tips-icon",
    on: {
      "click": function($event) {
        return _vm.showTipDlg('limitVacationCount')
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.card.limitVacationCount),
      expression: "card.limitVacationCount",
      modifiers: {
        "trim": true
      }
    }],
    staticClass: "wid80",
    attrs: {
      "placeholder": "请输入请假次数",
      "readonly": _vm.readonly,
      "type": "number"
    },
    domProps: {
      "value": (_vm.card.limitVacationCount)
    },
    on: {
      "blur": [function($event) {
        return _vm.checkInputSize('limitVacationCount', '请假次数不能小于0')
      }, function($event) {
        return _vm.$forceUpdate()
      }],
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.card, "limitVacationCount", $event.target.value.trim())
      }
    }
  }), _c('span', [_vm._v("次")])])]), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("请假天数限制"), _c('i', {
    staticClass: "iconfont iconinfo theme-font-color tips-icon",
    on: {
      "click": function($event) {
        return _vm.showTipDlg('limitVacationDays')
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.card.limitVacationDays),
      expression: "card.limitVacationDays",
      modifiers: {
        "trim": true
      }
    }],
    staticClass: "wid80",
    attrs: {
      "placeholder": "请输入请假天数",
      "readonly": _vm.readonly,
      "type": "number"
    },
    domProps: {
      "value": (_vm.card.limitVacationDays)
    },
    on: {
      "blur": [function($event) {
        return _vm.checkInputSize('limitVacationDays', '请假天数不能小于0')
      }, function($event) {
        return _vm.$forceUpdate()
      }],
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.card, "limitVacationDays", $event.target.value.trim())
      }
    }
  }), _c('span', [_vm._v("天")])])]), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("会员可否自助请假"), _c('i', {
    staticClass: "iconfont iconinfo theme-font-color tips-icon",
    on: {
      "click": function($event) {
        return _vm.showTipDlg('leaveByCustSelf')
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_c('div', {
    staticClass: "swicth"
  }, [_c('qd-switch', {
    attrs: {
      "disabled": _vm.readonly
    },
    model: {
      value: (_vm.card.allowMemberOptVacation),
      callback: function($$v) {
        _vm.$set(_vm.card, "allowMemberOptVacation", $$v)
      },
      expression: "card.allowMemberOptVacation"
    }
  })], 1)])])], 2), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.stepsIdx === 3),
      expression: "stepsIdx === 3"
    }]
  }, [_c('div', {
    staticClass: "page-head"
  }, [_c('div', {
    staticClass: "move",
    on: {
      "click": function($event) {
        _vm.confirmBack = true
      }
    }
  }, [_c('i', {
    staticClass: "iconfont iconarrow-l"
  })]), _vm._v("\n        展示信息设置（可选填）\n      ")]), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("是否对外展示"), _c('i', {
    staticClass: "iconfont iconinfo theme-font-color tips-icon",
    on: {
      "click": function($event) {
        return _vm.showTipDlg('showOutside')
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_c('div', {
    staticClass: "swicth"
  }, [_c('qd-switch', {
    attrs: {
      "disabled": _vm.readonly
    },
    model: {
      value: (_vm.card.isPublic),
      callback: function($$v) {
        _vm.$set(_vm.card, "isPublic", $$v)
      },
      expression: "card.isPublic"
    }
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("是否显示价格"), _c('i', {
    staticClass: "iconfont iconinfo theme-font-color tips-icon",
    on: {
      "click": function($event) {
        return _vm.showTipDlg('showPrice')
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_c('div', {
    staticClass: "swicth"
  }, [_c('qd-switch', {
    attrs: {
      "disabled": _vm.readonly
    },
    model: {
      value: (_vm.card.isShowPrice),
      callback: function($$v) {
        _vm.$set(_vm.card, "isShowPrice", $$v)
      },
      expression: "card.isShowPrice"
    }
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "theme-border-bottom"
  }, [_c('div', {
    staticClass: "row align-center"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("会员卡背景图")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail",
    staticStyle: {
      "text-align": "right"
    },
    on: {
      "click": function($event) {
        _vm.dlgView.setBgMethod = true
      }
    }
  }, [_c('span', {
    staticClass: "theme-font-color"
  }, [_vm._v("设置背景图")])])]), _vm._v(" "), _c('div', {
    staticClass: "bg-img",
    staticStyle: {
      "position": "relative"
    }
  }, [(_vm.card.cardName && _vm.card.isShowBgText && _vm.card.bgImg) ? _c('div', {
    staticClass: "bg-card-name",
    style: ({
      color: '#' + _vm.card.bgFontColor
    })
  }, [_vm._v(" " + _vm._s(_vm.card.cardName))]) : _vm._e(), _vm._v(" "), _c('img', {
    attrs: {
      "src": _vm.bgImgUrl
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("是否显示背景文字")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_c('div', {
    staticClass: "swicth"
  }, [_c('qd-switch', {
    attrs: {
      "disabled": _vm.readonly
    },
    model: {
      value: (_vm.card.isShowBgText),
      callback: function($$v) {
        _vm.$set(_vm.card, "isShowBgText", $$v)
      },
      expression: "card.isShowBgText"
    }
  })], 1)])]), _vm._v(" "), (_vm.card.isShowBgText) ? _c('div', {
    staticClass: "row row-l-r align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("背景文字颜色"), _c('i', {
    staticClass: "iconfont iconinfo theme-font-color tips-icon",
    on: {
      "click": function($event) {
        return _vm.showTipDlg('setBgFontColor')
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail",
    staticStyle: {
      "text-align": "right"
    },
    on: {
      "click": function($event) {
        _vm.dlgView.setBgFontColor = true
      }
    }
  }, [_c('span', {
    staticStyle: {
      "display": "inline-block",
      "width": "23px",
      "height": "23px",
      "vertical-align": "-6px",
      "border": "1px solid #f5f5f5"
    },
    style: ({
      background: '#' + _vm.card.bgFontColor
    })
  }), _vm._v(" "), _c('i', {
    staticClass: "iconfont iconarrow-r font-color-c"
  })])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("展示序号"), _c('i', {
    staticClass: "iconfont iconinfo theme-font-color tips-icon",
    on: {
      "click": function($event) {
        return _vm.showTipDlg('orderNo')
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.card.orderNo),
      expression: "card.orderNo",
      modifiers: {
        "trim": true
      }
    }],
    staticClass: "theme-btn-bor",
    attrs: {
      "autofocus": "",
      "type": "number",
      "readonly": _vm.readonly
    },
    domProps: {
      "value": (_vm.card.orderNo)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.card, "orderNo", $event.target.value.trim())
      },
      "blur": function($event) {
        return _vm.$forceUpdate()
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("会员卡简介")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail cheif-intro"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.card.intro),
      expression: "card.intro",
      modifiers: {
        "trim": true
      }
    }],
    staticStyle: {
      "padding": "8px"
    },
    attrs: {
      "rows": "6",
      "placeholder": "请输入简介内容"
    },
    domProps: {
      "value": (_vm.card.intro)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.card, "intro", $event.target.value.trim())
      },
      "blur": function($event) {
        return _vm.$forceUpdate()
      }
    }
  })])])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.stepsIdx === 4),
      expression: "stepsIdx === 4"
    }]
  }, [_c('div', {
    staticClass: "page-head"
  }, [_c('div', {
    staticClass: "move",
    on: {
      "click": function($event) {
        _vm.confirmBack = true
      }
    }
  }, [_c('i', {
    staticClass: "iconfont iconarrow-l"
  })]), _vm._v("\n        在线售卡设置\n      ")]), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("是否在线售卡"), _c('i', {
    staticClass: "iconfont iconinfo theme-font-color tips-icon",
    on: {
      "click": function($event) {
        return _vm.showTipDlg('onlineSale')
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_c('div', {
    staticClass: "swicth"
  }, [_c('qd-switch', {
    attrs: {
      "disabled": _vm.readonly
    },
    model: {
      value: (_vm.card.isOnlineSale),
      callback: function($$v) {
        _vm.$set(_vm.card, "isOnlineSale", $$v)
      },
      expression: "card.isOnlineSale"
    }
  })], 1)])]), _vm._v(" "), (_vm.hasMchId && _vm.card.isOnlineSale) ? [_c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("在线售卡价格"), _c('i', {
    staticClass: "iconfont iconinfo theme-font-color tips-icon",
    on: {
      "click": function($event) {
        return _vm.showTipDlg('onlinePrice')
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.card.onlinePrice),
      expression: "card.onlinePrice",
      modifiers: {
        "trim": true
      }
    }],
    staticClass: "wid80",
    attrs: {
      "placeholder": "请输入售卡价格",
      "readonly": _vm.readonly,
      "type": "number"
    },
    domProps: {
      "value": (_vm.card.onlinePrice)
    },
    on: {
      "blur": [function($event) {
        return _vm.checkInputSize('onlinePrice', '售卡价格不能小于0')
      }, function($event) {
        return _vm.$forceUpdate()
      }],
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.card, "onlinePrice", $event.target.value.trim())
      }
    }
  }), _vm._v(" "), _c('span', [_vm._v("元")])])]), _vm._v(" "), (_vm.card.defaultDays) ? _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("最迟开卡天数"), _c('i', {
    staticClass: "iconfont iconinfo theme-font-color tips-icon",
    on: {
      "click": function($event) {
        return _vm.showTipDlg('limitBeginDays')
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.card.limitBeginDays),
      expression: "card.limitBeginDays",
      modifiers: {
        "trim": true
      }
    }],
    staticClass: "wid80",
    attrs: {
      "placeholder": "请输入最迟开卡天数",
      "readonly": _vm.readonly,
      "type": "number"
    },
    domProps: {
      "value": (_vm.card.limitBeginDays)
    },
    on: {
      "blur": [function($event) {
        return _vm.checkInputSize('limitBeginDays', '最迟开卡天数不能小于0')
      }, function($event) {
        return _vm.$forceUpdate()
      }],
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.card, "limitBeginDays", $event.target.value.trim())
      }
    }
  }), _vm._v(" "), _c('span', [_vm._v("天")])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "on-line-sale",
    class: {
      'theme-border-bottom': _vm.card.cardType === 3 || _vm.card.cardType === 2
    }
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("在线售卡限制")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_c('ul', {
    staticClass: "row check-box"
  }, [_vm._l((_vm.onlineSaleLimit), function(item, idx) {
    return [_c('li', {
      on: {
        "click": function($event) {
          return _vm.selectOnlineSaleLimit(item, idx)
        }
      }
    }, [_c('span', {
      staticClass: "check-box-check",
      class: {
        'check-box-check1': item.select
      }
    }, [_c('i', {
      staticClass: "iconfont",
      class: {
        'iconcheck0': item.select
      }
    })]), _vm._v(_vm._s(item.limit))])]
  })], 2)])]), _vm._v(" "), (_vm.card.cardType === 3 || _vm.card.cardType === 2) ? [_c('div', {
    staticClass: "row align-center theme-border-bottom",
    class: {
      'ml-16': _vm.displayMoreCardPrices
    }
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("更多价格方案"), _c('i', {
    staticClass: "iconfont iconinfo theme-font-color tips-icon",
    on: {
      "click": function($event) {
        return _vm.showTipDlg('moreCardPricePlans')
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail check-box",
    staticStyle: {
      "margin": "0"
    }
  }, [_c('div', {
    on: {
      "click": function($event) {
        _vm.displayMoreCardPrices = !_vm.displayMoreCardPrices
      }
    }
  }, [_c('span', {
    staticClass: "check-box-check",
    class: {
      'check-box-check1': _vm.displayMoreCardPrices
    }
  }, [_c('i', {
    staticClass: "iconfont",
    class: {
      'iconcheck0': _vm.displayMoreCardPrices
    }
  })]), _vm._v("显示")])])]), _vm._v(" "), (_vm.displayMoreCardPrices) ? [_c('div', {
    staticClass: "row align-center ml-16",
    staticStyle: {
      "padding": "0"
    }
  }, [_c('div', {
    staticClass: "infor-name"
  }), _vm._v(" "), _c('div', {
    staticClass: "infor-detail more-prices"
  }, [_c('table', {}, [_c('tr', [_c('th', {
    staticStyle: {
      "width": "40px",
      "text-align": "center"
    }
  }, [_vm._v("序号")]), _vm._v(" "), (_vm.card.cardType === 2) ? _c('th', {
    staticStyle: {
      "width": "30px"
    }
  }, [_vm._v("使用次数")]) : (_vm.card.cardType === 4) ? _c('th', {
    staticStyle: {
      "width": "50px"
    }
  }, [_vm._v("使用时间")]) : _vm._e(), _vm._v(" "), _c('th', {
    staticStyle: {
      "width": "50px"
    }
  }, [(_vm.card.cardType === 3) ? [_vm._v("充值金额（元）")] : [_vm._v("原价（元）")]], 2), _vm._v(" "), _c('th', {
    staticStyle: {
      "width": "50px"
    }
  }, [_vm._v("在线售价（元）")])]), _vm._v(" "), _vm._l((_vm.moreCardPricePlans), function(p, idx) {
    return _c('tr', [_c('td', {
      staticStyle: {
        "text-align": "center"
      }
    }, [_vm._v(_vm._s(idx + 1))]), _vm._v(" "), (_vm.card.cardType === 2 || _vm.card.cardType === 4) ? _c('td', [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (p[2]),
        expression: "p[2]"
      }],
      staticClass: "input-bg",
      attrs: {
        "type": "number",
        "readonly": _vm.readonly
      },
      domProps: {
        "value": (p[2])
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          _vm.$set(p, 2, $event.target.value)
        }
      }
    })]) : _vm._e(), _vm._v(" "), _c('td', [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (p[0]),
        expression: "p[0]"
      }],
      staticClass: "input-bg",
      attrs: {
        "type": "number",
        "readonly": _vm.readonly
      },
      domProps: {
        "value": (p[0])
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          _vm.$set(p, 0, $event.target.value)
        }
      }
    })]), _vm._v(" "), _c('td', [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (p[1]),
        expression: "p[1]"
      }],
      staticClass: "input-bg",
      attrs: {
        "type": "number",
        "readonly": _vm.readonly
      },
      domProps: {
        "value": (p[1])
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          _vm.$set(p, 1, $event.target.value)
        }
      }
    })])])
  })], 2)])]), _vm._v(" "), _c('div', {
    staticClass: "theme-border-bottom"
  })] : _vm._e()] : _vm._e(), _vm._v(" "), (_vm.card.cardId && _vm.isOnlineCardInDb) ? [_c('div', {
    staticClass: "theme-border-bottom qrcode"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("微官网卡页面链接"), _c('i', {
    staticClass: "iconfont iconinfo theme-font-color tips-icon",
    on: {
      "click": function($event) {
        return _vm.showTipDlg('msiteLink')
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "qrcode-link"
  }, [_vm._v("http://tool.jzongguan.com/#/shop-card-sale/" + _vm._s(_vm.card.cardId) + "?s=" + _vm._s(_vm.shopId))]), _vm._v(" "), (_vm.qrcodeUrl) ? _c('div', {
    staticClass: "qrcode-img"
  }, [_c('img', {
    attrs: {
      "src": _vm.qrcodeUrl
    }
  })]) : _vm._e()])] : _vm._e()] : _vm._e(), _vm._v(" "), (_vm.card.cardId) ? _c('div', {
    staticClass: "hd theme-padding theme-border-bottom"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("更新记录")])]) : _vm._e(), _vm._v(" "), (_vm.card.cardId) ? _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("更新人")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_vm._v("\n          " + _vm._s(_vm.card.updateUname) + "\n        ")])]) : _vm._e(), _vm._v(" "), (_vm.card.cardId) ? _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("更新时间")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_vm._v("\n          " + _vm._s(_vm.card.updateTime) + "\n        ")])]) : _vm._e()], 2)]), _vm._v(" "), _c('div', {
    staticClass: "process-bar"
  }, [_c('ul', [_c('li', {
    staticClass: "first-step",
    class: {
      'active': _vm.stepsIdxActive[0]
    }
  }), _vm._v(" "), _c('li', {
    staticClass: "second-step",
    class: {
      'active': _vm.stepsIdxActive[1]
    }
  }), _vm._v(" "), _c('li', {
    staticClass: "third-step",
    class: {
      'active': _vm.stepsIdxActive[2]
    }
  }), _vm._v(" "), _c('li', {
    staticClass: "last-step",
    class: {
      'active': _vm.stepsIdxActive[3]
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "process-ctrl row start"
  }, [(_vm.stepsIdx == 1) ? [(_vm.stepsIdx !== 4) ? _c('div', {
    staticClass: "btn next-step1",
    on: {
      "click": function($event) {
        return _vm.processCtrl(1)
      }
    }
  }, [_vm._v("下一步")]) : _vm._e()] : [_c('div', {
    staticClass: "btn prev-step",
    on: {
      "click": function($event) {
        return _vm.processCtrl(-1)
      }
    }
  }, [_vm._v("上一步")]), _vm._v(" "), (_vm.stepsIdx !== 4) ? _c('div', {
    staticClass: "btn next-step",
    on: {
      "click": function($event) {
        return _vm.processCtrl(1)
      }
    }
  }, [_vm._v("下一步")]) : _c('div', {
    staticClass: "btn next-step",
    on: {
      "click": _vm.submitCard
    }
  }, [(_vm.card.cardId) ? [_vm._v("更新")] : [_vm._v("提交")]], 2)]], 2), _vm._v(" "), _c('div', {
    staticClass: "vant"
  }, [(_vm.dlgView.showTips) ? _c('van-dialog', {
    staticClass: "van-has-overlay visible-close section-part",
    attrs: {
      "show-confirm-button": false,
      "show-cancel-button": false
    },
    model: {
      value: (_vm.dlgView.showTips),
      callback: function($$v) {
        _vm.$set(_vm.dlgView, "showTips", $$v)
      },
      expression: "dlgView.showTips"
    }
  }, [_c('div', {
    staticClass: "dlg-head"
  }, [_vm._v("提示")]), _vm._v(" "), _c('div', {
    staticClass: "dlg-cont",
    domProps: {
      "innerHTML": _vm._s(_vm.tipsCont)
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "btn theme-btn-bg middle-btn",
    on: {
      "click": function($event) {
        _vm.dlgView.showTips = false
      }
    }
  }, [_vm._v("好的")])]) : _vm._e(), _vm._v(" "), (_vm.dlgView.datePickerClear) ? _c('van-dialog', {
    staticClass: "section-part chose-begin-date",
    staticStyle: {
      "top": "20vh",
      "left": "49%",
      "transform": "translateX(-49%)"
    },
    attrs: {
      "show-confirm-button": false,
      "show-cancel-button": false
    },
    model: {
      value: (_vm.dlgView.datePicker),
      callback: function($$v) {
        _vm.$set(_vm.dlgView, "datePicker", $$v)
      },
      expression: "dlgView.datePicker"
    }
  }, [_c('div', {
    staticClass: "page-head"
  }, [_vm._v("\n        限定用卡日期\n      ")]), _vm._v(" "), _c('div', {
    staticClass: "row section-part justify-center use-card-time"
  }, [_c('div', {
    staticClass: "row justify-center"
  }, [_c('month-day-picker', {
    attrs: {
      "type": "month",
      "choseitemOrigin": _vm.cardForm.beginDate[0] ? _vm.cardForm.beginDate[0].toString() : '开始'
    },
    model: {
      value: (_vm.cardForm.beginDate[0]),
      callback: function($$v) {
        _vm.$set(_vm.cardForm.beginDate, 0, $$v)
      },
      expression: "cardForm.beginDate[0]"
    }
  }), _vm._v(" "), _c('month-day-picker', {
    attrs: {
      "type": "day",
      "choseitemOrigin": _vm.cardForm.beginDate[1] ? _vm.cardForm.beginDate[1].toString() : '开始'
    },
    model: {
      value: (_vm.cardForm.beginDate[1]),
      callback: function($$v) {
        _vm.$set(_vm.cardForm.beginDate, 1, $$v)
      },
      expression: "cardForm.beginDate[1]"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "to"
  }, [_vm._v("~")]), _vm._v(" "), _c('div', {
    staticClass: "row justify-center use-card-time"
  }, [_c('month-day-picker', {
    attrs: {
      "type": "month",
      "choseitemOrigin": _vm.cardForm.endDate[0] ? _vm.cardForm.endDate[0].toString() : '结束'
    },
    model: {
      value: (_vm.cardForm.endDate[0]),
      callback: function($$v) {
        _vm.$set(_vm.cardForm.endDate, 0, $$v)
      },
      expression: "cardForm.endDate[0]"
    }
  }), _vm._v(" "), _c('month-day-picker', {
    attrs: {
      "type": "day",
      "choseitemOrigin": _vm.cardForm.endDate[1] ? _vm.cardForm.endDate[1].toString() : '结束'
    },
    model: {
      value: (_vm.cardForm.endDate[1]),
      callback: function($$v) {
        _vm.$set(_vm.cardForm.endDate, 1, $$v)
      },
      expression: "cardForm.endDate[1]"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row section-part justify-center use-card-time"
  }, [_c('div', {
    staticClass: "row justify-center"
  }, [_c('month-day-picker', {
    attrs: {
      "type": "month",
      "choseitemOrigin": _vm.cardForm.beginDate[2] ? _vm.cardForm.beginDate[2].toString() : '开始'
    },
    model: {
      value: (_vm.cardForm.beginDate[2]),
      callback: function($$v) {
        _vm.$set(_vm.cardForm.beginDate, 2, $$v)
      },
      expression: "cardForm.beginDate[2]"
    }
  }), _vm._v(" "), _c('month-day-picker', {
    attrs: {
      "type": "day",
      "choseitemOrigin": _vm.cardForm.beginDate[3] ? _vm.cardForm.beginDate[3].toString() : '开始'
    },
    model: {
      value: (_vm.cardForm.beginDate[3]),
      callback: function($$v) {
        _vm.$set(_vm.cardForm.beginDate, 3, $$v)
      },
      expression: "cardForm.beginDate[3]"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "to"
  }, [_vm._v("~")]), _vm._v(" "), _c('div', {
    staticClass: "row justify-center use-card-time"
  }, [_c('month-day-picker', {
    attrs: {
      "type": "month",
      "choseitemOrigin": _vm.cardForm.endDate[2] ? _vm.cardForm.endDate[2].toString() : '结束'
    },
    model: {
      value: (_vm.cardForm.endDate[2]),
      callback: function($$v) {
        _vm.$set(_vm.cardForm.endDate, 2, $$v)
      },
      expression: "cardForm.endDate[2]"
    }
  }), _vm._v(" "), _c('month-day-picker', {
    attrs: {
      "type": "day",
      "choseitemOrigin": _vm.cardForm.endDate[3] ? _vm.cardForm.endDate[3].toString() : '结束'
    },
    model: {
      value: (_vm.cardForm.endDate[3]),
      callback: function($$v) {
        _vm.$set(_vm.cardForm.endDate, 3, $$v)
      },
      expression: "cardForm.endDate[3]"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "section-part theme-font-color",
    staticStyle: {
      "padding": "10px 20px"
    }
  }, [_vm._v("此日期范围表示，该会员卡只能在每年的上述日期范围内使用，例如：寒暑假卡")]), _vm._v(" "), _c('div', {
    staticClass: "row justify-center submit"
  }, [_c('div', {
    staticClass: "btn theme-btn-bor",
    on: {
      "click": _vm.clearDate
    }
  }, [_vm._v("清空")]), _vm._v(" "), _c('div', {
    staticClass: "btn theme-btn-bg",
    on: {
      "click": _vm.confirmDate
    }
  }, [_vm._v("确定")])])]) : _vm._e(), _vm._v(" "), (_vm.confirmBack) ? _c('van-dialog', {
    staticClass: "van-has-overlay checkin-success section-part",
    attrs: {
      "show-confirm-button": true,
      "show-cancel-button": true
    },
    on: {
      "confirm": _vm.confirmBackFun
    },
    model: {
      value: (_vm.confirmBack),
      callback: function($$v) {
        _vm.confirmBack = $$v
      },
      expression: "confirmBack"
    }
  }, [_c('div', {
    staticClass: "tip-cont"
  }, [_vm._v("\n        直接返回或关闭，此次页面上修改的内容将不能自动保存。"), _c('br'), _vm._v("\n        是否确认关闭或返回？\n      ")])]) : _vm._e(), _vm._v(" "), (_vm.dlgView.checkinPayment) ? _c('van-dialog', {
    staticClass: "van-has-overlay checkin-success section-part",
    attrs: {
      "show-confirm-button": true,
      "show-cancel-button": true
    },
    on: {
      "confirm": _vm.checkinPaymentSure
    },
    model: {
      value: (_vm.dlgView.checkinPayment),
      callback: function($$v) {
        _vm.$set(_vm.dlgView, "checkinPayment", $$v)
      },
      expression: "dlgView.checkinPayment"
    }
  }, [_c('div', {
    staticClass: "tip-cont"
  }, [_vm._v("\n        " + _vm._s(_vm.checkinPaymentConfirm) + "\n      ")])]) : _vm._e(), _vm._v(" "), (_vm.dlgView.setBgMethod) ? _c('van-dialog', {
    staticClass: "van-has-overlay show-close section-part",
    staticStyle: {
      "overflow": "visible"
    },
    attrs: {
      "show-confirm-button": false,
      "show-cancel-button": false
    },
    model: {
      value: (_vm.dlgView.setBgMethod),
      callback: function($$v) {
        _vm.$set(_vm.dlgView, "setBgMethod", $$v)
      },
      expression: "dlgView.setBgMethod"
    }
  }, [_c('div', {
    staticClass: "dlg-head theme-border-bottom",
    staticStyle: {
      "margin-bottom": "0",
      "padding-bottom": "15px"
    }
  }, [_vm._v("会员卡背景图设置")]), _vm._v(" "), _c('div', {
    staticClass: "dlg-cont",
    staticStyle: {
      "padding": "0"
    }
  }, [_c('div', {
    staticClass: "btn theme-border-bottom",
    on: {
      "click": _vm.choseSysBg
    }
  }, [_vm._v("选择系统默认背景图")]), _vm._v(" "), _c('div', {
    staticClass: "btn"
  }, [_c('img-upload', {
    attrs: {
      "action": _vm.imgUpload.action,
      "show-thumb": false,
      "img-max-width": _vm.imgUpload.imgMaxWidth,
      "on-success": _vm.handleImgUploadSuccess
    }
  }, [_c('div', [_vm._v("上传自定义背景图")])])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "close-dlg"
  }, [_c('i', {
    staticClass: "iconfont iconfork",
    on: {
      "click": function($event) {
        _vm.dlgView.setBgMethod = false
      }
    }
  })])]) : _vm._e(), _vm._v(" "), (_vm.dlgView.setBgImg) ? _c('van-popup', {
    style: ({
      height: '100%',
      width: '100%'
    }),
    attrs: {
      "position": "right"
    },
    model: {
      value: (_vm.dlgView.setBgImg),
      callback: function($$v) {
        _vm.$set(_vm.dlgView, "setBgImg", $$v)
      },
      expression: "dlgView.setBgImg"
    }
  }, [_c('div', {
    staticClass: "page-head"
  }, [_c('div', {
    staticClass: "move theme-font-color",
    on: {
      "click": function($event) {
        _vm.dlgView.setBgImg = false
      }
    }
  }, [_c('i', {
    staticClass: "iconfont iconarrow-l back-icon"
  })]), _vm._v("\n        会员卡背景图设置\n      ")]), _vm._v(" "), _c('ul', {
    staticClass: "bgimgs row justify-center"
  }, _vm._l((_vm.BG_IMG_CNT), function(n) {
    return _c('li', {
      class: {
        'theme-shadow-grey': _vm.bgImgActive === n
      },
      on: {
        "click": function($event) {
          return _vm.chooseBgImg(n)
        }
      }
    }, [_c('img', {
      attrs: {
        "src": _vm.g.Conf.IMG_LIB_URL + '/cardbg/' + n + '.jpg'
      }
    })])
  }), 0)]) : _vm._e(), _vm._v(" "), (_vm.dlgView.setBgFontColor) ? _c('van-popup', {
    style: ({
      height: '100%',
      width: '100%'
    }),
    attrs: {
      "position": "right"
    },
    model: {
      value: (_vm.dlgView.setBgFontColor),
      callback: function($$v) {
        _vm.$set(_vm.dlgView, "setBgFontColor", $$v)
      },
      expression: "dlgView.setBgFontColor"
    }
  }, [_c('div', {
    staticClass: "page-head"
  }, [_c('div', {
    staticClass: "move theme-font-color",
    on: {
      "click": function($event) {
        _vm.dlgView.setBgFontColor = false
      }
    }
  }, [_c('i', {
    staticClass: "iconfont iconarrow-l back-icon"
  })]), _vm._v("\n        会员卡背景文字颜色设置\n      ")]), _vm._v(" "), _c('ul', {
    staticClass: "bgfont-conf row"
  }, _vm._l((_vm.bgFontColors), function(c) {
    return _c('li', {
      style: ('background: #' + c),
      on: {
        "click": function($event) {
          return _vm.selectBgFontColor(c)
        }
      }
    }, [_vm._v(" ")])
  }), 0)]) : _vm._e()], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "infor-detail time-type"
  }, [_c('i', {
    staticClass: "iconfont icon-radio icon-radio-on"
  }), _vm._v("分钟\n        ")])
}]}

/***/ }),

/***/ 888:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1745)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1413),
  /* template */
  __webpack_require__(2053),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-14887a88",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 891:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1773)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1416),
  /* template */
  __webpack_require__(2080),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-2b955cae",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 892:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1795)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1417),
  /* template */
  __webpack_require__(2103),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-3b7b14a5",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 893:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1797)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1418),
  /* template */
  __webpack_require__(2105),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-3d6e8912",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 894:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1806)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1419),
  /* template */
  __webpack_require__(2114),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-419bfebc",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 895:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1848)
  __webpack_require__(1849)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1420),
  /* template */
  __webpack_require__(2155),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-57c432b5",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 896:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1765)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1421),
  /* template */
  __webpack_require__(2072),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-1fa58f8e",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 897:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1825)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1422),
  /* template */
  __webpack_require__(2132),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-490f1648",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 898:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1875)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1423),
  /* template */
  __webpack_require__(2181),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-76325c42",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 953:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(964)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(962),
  /* template */
  __webpack_require__(974),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 960:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = upload;
/**
 * Created by zxl on 2017/5/13.
 */
function getError(action, option, xhr) {
	const msg = `fail to post ${action} ${xhr.status}'`;
	const err = new Error(msg);
	err.status = xhr.status;
	err.method = 'post';
	err.url = action;
	return err;
}

function getBody(xhr) {
	const text = xhr.responseText || xhr.response;
	if (!text) {
		return text;
	}

	try {
		return JSON.parse(text);
	} catch (e) {
		return text;
	}
}

function upload(option) {
	if (typeof XMLHttpRequest === 'undefined') {
		return;
	}

	const xhr = new XMLHttpRequest();
	const action = option.action;

	if (xhr.upload) {
		xhr.upload.onprogress = function progress(e) {
			if (e.total > 0) {
				e.percent = e.loaded / e.total * 100;
			}
			option.onProgress(e);
		};
	}
	/*
 const formData = new FormData();
 if (option.data) {
 	Object.keys(option.data).map(key => {
 		formData.append(key, option.data[key]);
 	});
 }
 formData.append(option.filename, option.file);
 */
	xhr.onerror = function error(e) {
		option.onError(e);
	};

	xhr.onload = function onload() {
		if (xhr.status < 200 || xhr.status >= 300) {
			return option.onError(getError(action, option, xhr), getBody(xhr));
		}

		option.onSuccess(getBody(xhr));
	};

	xhr.open('post', action, true);

	//if (option.withCredentials && 'withCredentials' in xhr) {
	xhr.withCredentials = true;
	//}

	const headers = option.headers || {};

	// if (headers['X-Requested-With'] !== null) {
	//   xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	// }

	for (let item in headers) {
		if (headers.hasOwnProperty(item) && headers[item] !== null) {
			xhr.setRequestHeader(item, headers[item]);
		}
	}
	xhr.send(option.formData);
}

/***/ }),

/***/ 962:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ajax_js__ = __webpack_require__(960);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ImgUpload',
  props: {
    action: {
      type: String,
      required: true
    },
    imgMaxWidth: { // 图片最大宽度（px）
      type: Number,
      default: 2048
    },
    imgCompressRate: { // 图片压缩率（0 ~ 1）
      type: Number,
      default: 0.85
    },
    args: { // 附带的参数（键值对）
      type: Object
    },
    multiple: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: 'img'
    },
    cantDel: {
      type: Boolean,
      default: true
    },
    showThumb: {
      type: Boolean,
      default: true
    },
    seeBigImg: {
      type: Boolean,
      default: false
    },
    format: {
      type: Array,
      default() {
        return ['jpg', 'jpeg', 'png', 'gif'];
      }
    },
    accept: {
      type: String,
      default: 'image/gif, image/jpeg, image/png, image/gif'
    },
    maxSize: {
      type: Number,
      default: 10 * 1024 * 1024
    },
    defaultFileList: {
      type: Array,
      default() {
        return [];
      }
    },
    headers: {
      type: Object,
      default() {
        return {};
      }
    },
    onSuccess: {
      type: Function,
      default() {
        return {};
      }
    },
    onProgress: {
      type: Function,
      default() {
        return {};
      }
    },
    onError: {
      type: Function,
      default() {
        return {};
      }
    },
    onRemove: {
      type: Function,
      default() {
        return {};
      }
    }

  },
  data() {
    return {
      g: $,
      fileList: [],
      tempIndex: 1,
      imgVisible: false,
      imgUrl: '',
      isInWx: null
    };
  },

  created() {
    this.isInWx = $.Util.isInWeixin();
  },

  methods: {
    uploadImgByWx() {
      $.Util.uploadImgByWxApi(res => {
        this.fileList = [{
          status: 'finished',
          percentage: 100,
          url: res.data.url
        }];
        this.onSuccess(res, {});
      }, err => {
        alert('上传失败，请稍后重试。');
      }, this.imgMaxWidth, this.imgCompressRate);
    },

    handleClick() {
      this.$refs.input.click();
    },

    handleChange(e) {
      let myFiles = e.target.files;
      if (!myFiles) {
        return;
      }
      this.uploadFiles(myFiles);
      this.$refs.input.value = null;
    },

    uploadFiles(files) {
      $.Msg.info('正在上传 ...');
      let postFiles = Array.prototype.slice.call(files);
      if (!this.multiple) {
        postFiles = postFiles.slice(0, 1);
        this.fileList = [];
      }
      if (postFiles.length === 0) {
        return;
      }
      postFiles.forEach(file => {
        this.upload(file);
      });
    },

    upload(file) {
      if (this.format.length) {
        const thisFileFormat = file.name.split('.').pop().toLocaleLowerCase();
        const checked = this.format.some(item => item.toLocaleLowerCase() === thisFileFormat);
        if (!checked) {
          $.Dlg.error('您的图片格式【{0}】不符合要求, 规定的图片格式有【{1}】'.format(thisFileFormat, this.foramt.join(',')));
          return false;
        }
      }

      if (this.maxSize && file.size > this.maxSize) {
        const fileSize = (file.size / 1024).toFixed(2);
        $.Dlg.error('您当前的图片大小为【{0}K】, 图片大小不能超过【{1}K】。'.format(fileSize, this.maxSize));
        return false;
      }

      this.post(file);
    },

    post(file) {
      // check format
      if (this.format.length) {
        const _file_format = file.name.split('.').pop().toLocaleLowerCase();
        const checked = this.format.some(item => item.toLocaleLowerCase() === _file_format);
        if (!checked) {
          this.onFormatError(file, this.fileList);
          return false;
        }
      }
      // check maxSize
      if (this.maxSize) {
        if (file.size > this.maxSize) {
          //this.onExceededSize(file, this.fileList);
          $.Dlg.error('文件大小不能超过 {0}M', this.maxSize / 1024 / 1024);
          return false;
        }
      }
      this.handleStart(file);

      let lrzArgs = {};
      if (this.imgMaxWidth) lrzArgs.width = this.imgMaxWidth;
      if (this.imgCompressRate) lrzArgs.quality = this.imgCompressRate;
      lrz(file, lrzArgs).then(rst => {
        // set args
        if (this.args) {
          Object.keys(this.args).map(key => {
            rst.formData.append(key, this.args[key]);
          });
        }
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ajax_js__["a" /* default */])({
          headers: this.headers,
          withCredentials: true,
          formData: rst.formData,
          action: this.action,
          onProgress: e => {
            this.handleProgress(e, file);
          },
          onSuccess: res => {
            this.handleSuccess(res, file);
          },
          onError: (err, response) => {
            this.handleError(err, response, file);
          }
        });
      });
    },

    handleStart(file) {
      file.uid = Date.now() + this.tempIndex++;
      const _file = {
        status: 'uploading',
        name: file.name,
        size: file.size,
        percentage: 0,
        uid: file.uid,
        showProgress: true
      };
      this.fileList.push(_file);
    },
    getFile(file) {
      const fileList = this.fileList;
      let target;
      fileList.every(item => {
        target = file.uid === item.uid ? item : null;
        return !target;
      });
      return target;
    },
    handleProgress(e, file) {
      const _file = this.getFile(file);
      this.onProgress(e, _file, this.fileList);
      _file.percentage = e.percent || 0;
    },
    handleSuccess(res, file) {
      const _file = this.getFile(file);
      if (_file) {
        _file.status = 'finished';
        _file.response = res;
        //this.dispatch('FormItem', 'on-form-change', _file);
        this.onSuccess(res, _file, this.fileList);
        setTimeout(() => {
          _file.showProgress = false;
        }, 1000);
      }
    },
    handleError(err, response, file) {
      const _file = this.getFile(file);
      const fileList = this.fileList;
      _file.status = 'fail';
      fileList.splice(fileList.indexOf(_file), 1);
      this.onError(err, response, file);
    },
    handleRemove(idx, file) {
      const fileList = this.fileList;
      fileList.splice(idx, 1);
      this.$emit('onRemove', idx);
    },
    handlePreview(file) {
      if (file.status === 'finished') {
        this.onPreview(file);
      }
    },
    handleView(item) {
      if (this.seeBigImg) {
        this.imgVisible = true;
        this.imgUrl = $.Util.getImgUrl(item.name, 250, 250, 'EEEEEE'); //item.url;
      }
    },
    closeDlg() {
      this.imgVisible = false;
    },
    clearFiles() {
      this.fileList = [];
    }
  },
  watch: {
    defaultFileList: {
      immediate: true,
      handler(fileList) {
        this.fileList = fileList.map(item => {
          item.status = 'finished';
          item.percentage = 100;
          item.uid = Date.now() + this.tempIndex++;
          return item;
        });
      }
    }
  }
});

/***/ }),

/***/ 963:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(763)(false);
// imports


// module
exports.push([module.i, ".img-upload-list{margin-top:10px}.img-upload-list-item{display:inline-block;width:100px;height:100px;text-align:center;line-height:100px;margin:0 15px 15px 0;border-radius:4px;position:relative;box-shadow:0 1px 1px rgba(0,0,0,.1)}.img-upload-list-item img{width:100%;height:100%;border:0}.img-upload-list-cover{display:none;position:absolute;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,.6)}.del-img{position:absolute;top:-5px;right:-5px;width:20px;height:20px;line-height:20px;border-radius:100%;text-align:center;background:#333;color:#fff}.img-upload-list-item:hover .img-upload-list-cover{display:block}.img-upload-list-cover i{color:#fff;font-size:20px;cursor:pointer;margin:0 2px}.img-dlg{text-align:center;margin:0}.img-dlg img{margin:15px 0}", ""]);

// exports


/***/ }),

/***/ 964:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(963);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(764)("ab67c0e2", content, true, {});

/***/ }),

/***/ 974:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vant"
  }, [_c('div', [(_vm.isInWx) ? _c('div', {
    on: {
      "click": _vm.uploadImgByWx
    }
  }, [_vm._t("default")], 2) : _c('div', {
    staticClass: "img-upload"
  }, [_c('div', {
    on: {
      "click": _vm.handleClick
    }
  }, [_c('input', {
    ref: "input",
    staticStyle: {
      "display": "none"
    },
    attrs: {
      "type": "file",
      "multiple": _vm.multiple,
      "accept": _vm.accept
    },
    on: {
      "change": _vm.handleChange
    }
  }), _vm._v(" "), _vm._t("default")], 2)]), _vm._v(" "), (_vm.showThumb && _vm.fileList && _vm.fileList.length > 0) ? _c('div', {
    staticClass: "img-upload-list"
  }, _vm._l((_vm.fileList), function(item, idx) {
    return _c('div', {
      staticClass: "img-upload-list-item"
    }, [(item.status === 'finished') ? [_c('img', {
      attrs: {
        "src": item.url
      },
      on: {
        "click": function($event) {
          return _vm.handleView(item)
        }
      }
    }), _vm._v(" "), (_vm.cantDel) ? _c('div', {
      staticClass: "del-img",
      on: {
        "click": function($event) {
          $event.stopPropagation();
          return _vm.handleRemove(idx, item)
        }
      }
    }, [_c('i', {
      staticClass: "iconfont iconclose"
    })]) : _vm._e()] : [(item.showProgress) ? _c('progress', {
      attrs: {
        "percent": item.percentage,
        "hide-info": ""
      }
    }) : _vm._e()]], 2)
  }), 0) : _vm._e(), _vm._v(" "), _c('van-dialog', {
    staticClass: "van-has-overlay",
    attrs: {
      "show-cancel-button": true,
      "show-confirm-button": false,
      "cancelButtonText": "关闭",
      "title": "查看图片"
    },
    model: {
      value: (_vm.imgVisible),
      callback: function($$v) {
        _vm.imgVisible = $$v
      },
      expression: "imgVisible"
    }
  }, [_c('section', {
    staticStyle: {
      "margin-bottom": "10px",
      "padding-top": "15px"
    }
  }, [_c('div', [_c('img', {
    attrs: {
      "src": _vm.imgUrl
    }
  })])])])], 1)])
},staticRenderFns: []}

/***/ })

});