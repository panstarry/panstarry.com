webpackJsonp([0],{

/***/ 1009:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "qd-calendar"
  }, [_c('div', {
    staticClass: "qd-head row section-part",
    staticStyle: {
      "border-radius": "0"
    }
  }, [_c('div', {
    staticClass: "prev-month",
    on: {
      "click": function($event) {
        return _vm.setPrevMonth()
      }
    }
  }, [_c('i', {
    staticClass: "iconfont iconArrow-left"
  }), _vm._v("上个月")]), _vm._v(" "), _c('div', {
    staticClass: "today-date",
    on: {
      "click": _vm.showDatePiker
    }
  }, [_vm._v(_vm._s(_vm.todayDate))]), _vm._v(" "), _c('div', {
    staticClass: "next-month",
    on: {
      "click": function($event) {
        return _vm.setNextMonth()
      }
    }
  }, [_vm._v("下个月"), _c('i', {
    staticClass: "iconfont iconArrow-right"
  })])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.dateShow && _vm.cantPullProp),
      expression: "dateShow && cantPullProp"
    }],
    staticClass: "week-date"
  }, [_c('div', {
    staticClass: "qd-week row"
  }, [_vm._l((_vm.weekList), function(week) {
    return [_c('div', {
      staticClass: "week-list"
    }, [_vm._v(_vm._s(week))])]
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "qd-date row"
  }, [_vm._l((_vm.dateList), function(date, idx) {
    return [_c('div', {
      staticClass: "qd-list",
      class: {
        active: idx == _vm.thisIndex || date.unSign,
        'reverse-active': idx == _vm.thisIndexObject
      },
      on: {
        "click": function($event) {
          return _vm.seeThisDayRecorder(idx, date.iDate)
        }
      }
    }, [(date.hasMarkedList || idx == _vm.thisIndexObject) ? _c('i', {
      staticClass: "iconfont iconSelection"
    }) : _vm._e(), _vm._v(_vm._s(date.iDate) + "\n        ")])]
  })], 2)]), _vm._v(" "), (_vm.cantPullProp) ? _c('div', {
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
  })], 2) : _vm._e(), _vm._v(" "), _c('van-popup', {
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
      "type": "year-month",
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

/***/ 1010:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__member_head_vue__ = __webpack_require__(961);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__member_head_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__member_head_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_sys_img_upload_vue__ = __webpack_require__(955);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_sys_img_upload_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_sys_img_upload_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { ImgUpload: __WEBPACK_IMPORTED_MODULE_1__components_sys_img_upload_vue___default.a, MemberHead: __WEBPACK_IMPORTED_MODULE_0__member_head_vue___default.a },
  props: {
    memberId: {
      type: Number,
      required: true
    },
    selectMember: {
      type: Object,
      required: false
    },
    readonly: {
      type: Boolean,
      value: false
    }
  },
  data() {
    return {
      memberAdvEditable: $.Util.hasRoleFunc($.Dict.RoleFunc.MEMBER_ADV_EDIT.value),
      g: window.$,
      member: null,
      avatarPathname: null,
      imgUpload: {
        action: $.Conf.IMG_UPLOAD_URL,
        imgMaxWidth: 512
      },
      addrList: [{}, {}, {}],
      addressLSelect: '',
      imgUrl: null,
      imgVisible: false,
      changeHead: true,
      headPhotoSucess: false,
      photo: {
        photoDlgView: false,
        imgUrl: null,
        morePhotoDlgView: false
      },
      querySelectedMember: null
    };
  },

  created() {
    this.querySelectedMember = this.$route.query.member;

    if ($.Util.isInWeixin()) {
      $.Req.initWxApi();
    }
    this.loadRegion(() => {
      this.queryMember();
    });
  },

  methods: {
    queryMember() {
      if (!this.memberId) return;

      let args = { memberId: this.memberId };
      $.Req.service($.SvName.MEMBER_ADV_QUERY, args, ret => {
        if (ret && ret.memberList) {
          let member = ret.memberList[0];
          this.member = Object.assign({}, member, this.selectMember, this.querySelectedMember);
        } else {
          return;
        }

        if (this.member.avatarPathname) {
          this.photo.imgUrl = $.Util.getImgUrl(this.member.avatarPathname);
        }

        if (!this.member.points) this.member.points = 0;
        if (this.member.birthdayYear && this.member.birthdayDate) {
          let month = parseInt(this.member.birthdayDate / 100);
          if (month < 10) month = '0' + month;
          let day = this.member.birthdayDate % 100;
          if (day < 10) day = '0' + day;
          this.member.birthday = '{0}-{1}-{2}'.format(this.member.birthdayYear, month, day);
        }
        if (this.member.birthdayYear) {
          this.member.age = new Date().getFullYear() - this.member.birthdayYear;
        }

        if (this.member.addrProvince) {
          this.changeMemberAddr(1, this.member.addrProvince);
          if (this.member.addrCity) {
            this.changeMemberAddr(2, this.member.addrCity);
          }
        }

        // set addr
        if (this.member.addrProvince) {
          for (let key in this.addrList[0]) {
            if (this.addrList[0][key].value == this.member.addrProvince) {
              this.addressLSelect = this.addrList[0][key].label;
            }
          }
        }
        setTimeout(() => {
          if (this.member.addrCity) {
            for (let key in this.addrList[1]) {
              if (this.addrList[1][key].value == this.member.addrCity) {
                this.addressLSelect += this.addrList[1][key].label;
              }
            }
          }
        }, 400);

        setTimeout(() => {
          if (this.member.addrDistrict) {
            for (let key in this.addrList[2]) {
              if (this.addrList[2][key].value == this.member.addrDistrict) {
                this.addressLSelect += this.addrList[2][key].label;
              }
            }
          }
        }, 600);
      });
    },

    queryRegion(level, pid, callback) {
      let args = null;
      if (pid) {
        args = { queryType: 2, pid: pid };
      } else if (level) {
        args = { queryType: 1, level: level };
      } else {
        return;
      }

      $.Req.service($.SvName.REGION_GET, args, ret => {
        let retRegions = [];
        const regions = ret.regionList;
        for (let i = 0, len = regions.length; i < len; i++) {
          retRegions.push({ value: regions[i].rid, label: regions[i].name });
        }
        callback(retRegions);
      });
    },

    loadRegion(callback) {
      this.queryRegion(1, null, regions => {
        this.$set(this.addrList, 0, regions);
        if (callback) callback();
      });
    },

    changeMemberAddr(level, value) {
      if (level > 1 && !value) return;

      if (level === 1) {
        this.queryRegion(level, value, regions => {
          this.$set(this.addrList, 2, {});
          this.$set(this.addrList, 1, regions);
        });
      } else if (level === 2) {
        this.queryRegion(level, value, regions => {
          this.$set(this.addrList, 2, regions);
        });
      } else {
        alert('Error level: ' + level);
      }
    },

    pageTo(page) {
      this.$router.push(page + "/" + this.memberId);
    },

    toggleImgDlg() {
      this.imgVisible = !this.imgVisible;
    },

    handleImgUploadSuccess(res, file) {
      file.url = res.data.url;
      file.name = res.data.name;
      this.photo.imgUrl = null;

      let newMember = { memberId: this.memberId, avatarPathname: res.data.name };
      $.Req.service($.SvName.MEMBER_AVATAR_UPDATE, { member: newMember }, ret => {
        this.member.avatarPathname = res.data.name;
        this.changeHead = false;
        $.Msg.success($.Lang.OPT_SUCCESS);
      }, true);
      this.headPhotoSucess = true;
    },

    seeLargeHead(src) {
      this.imgVisible = true;
      this.imgUrl = this.g.Util.getImgUrl(src, 250, 250, 'EEEEEE');
    }
  }
});

/***/ }),

/***/ 1011:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_sys_img_upload_vue__ = __webpack_require__(955);
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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: { ImgUpload: __WEBPACK_IMPORTED_MODULE_0__components_sys_img_upload_vue___default.a },

  props: {
    memberId: {
      type: Number,
      required: true
    },
    menu: {
      type: String,
      required: true
    },
    avatarPathname: {
      type: String,
      required: false
    }
  },

  data() {
    return {
      g: window.$,
      member: null,
      smallPhotoUrl: null,
      bigPhotoUrl: null,
      imgVisible: false,
      imgUpload: {
        action: $.Conf.IMG_UPLOAD_URL,
        imgMaxWidth: 512
      },
      menus: {
        'info': '编辑',
        'base': '基本信息',
        'card-list': '卡信息',
        'entry-checkins': '入场记录',
        'group-lesson': '团课记录',
        'private-lesson': '私教课记录',
        'follows': '跟进',
        'fitness-photo': '相册',
        'body-test': '测试',
        'hrs': '心率',
        'health-report': '体测'
      }
    };
  },

  created() {
    this.queryMember();
  },

  methods: {
    queryMember() {
      if (!this.memberId) return;

      let args = { memberId: this.memberId, needPhoneNo: true };
      $.Req.service($.SvName.MEMBER_BASE_QUERY, args, ret => {
        this.member = ret.member;
      });
    },

    pageTo(page) {
      this.$router.push(page + "/" + this.member.memberId);
    },

    toggleImgDlg() {
      this.imgVisible = !this.imgVisible;
    }
  }
});

/***/ }),

/***/ 1012:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(764)(false);
// imports


// module
exports.push([module.i, ".edit[data-v-282eb559]{border-bottom:1px solid #f5f5f5;padding:12px}.edit i[data-v-282eb559]{font-size:14px}.tblform td[data-v-282eb559]{text-align:left}.-style- .tblform tr[data-v-282eb559]:last-child{border:0}.-style- .tblform th[data-v-282eb559]{width:125px}.-style- .tblform th[data-v-282eb559]:after{content:\"\\FF1A\"}.coaches i[data-v-282eb559]{color:#999;padding-left:3px}.coaches li[data-v-282eb559]{padding:3px 0;display:block}.head-photo[data-v-282eb559]{display:block;width:50px;height:50px;border-radius:5px}.member-photo-dlg[data-v-282eb559]{width:95%;text-align:center;max-height:90%;overflow-y:scroll}.member-photo-dlg img[data-v-282eb559]{margin:10px 0}.member-photo-dlg .edit-photo-btn[data-v-282eb559]{margin:10px 0 0;width:100%}.photo[data-v-282eb559]{display:inline-block;margin-top:10px}.theme-black .edit[data-v-282eb559]{border-color:#111}", ""]);

// exports


/***/ }),

/***/ 1013:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(764)(false);
// imports


// module
exports.push([module.i, ".member-head[data-v-4c495ce8]{background:#dbb76b url(/static/img/member/member-base-bg.png) no-repeat;height:100px;line-height:100px;overflow:hidden;background-size:100% 100%}.member-head table[data-v-4c495ce8]{width:100%;height:100px}.member-head table td[data-v-4c495ce8]{vertical-align:middle}.member-head table .opts[data-v-4c495ce8]{margin-right:10px}.member-head table .opts .mu-icon-button[data-v-4c495ce8]{width:38px;height:38px;vertical-align:middle}.member-head table .opts a[data-v-4c495ce8]{display:inline-block;width:32px;height:32px;border-radius:100%;background:hsla(0,0%,100%,.2);text-align:center;border:1px solid #fff;line-height:32px;margin-right:5px;color:#fff}.member-nav[data-v-4c495ce8]{margin-bottom:12px;padding:0 3px;background:#fff}.member-nav ul[data-v-4c495ce8]{padding:5px 0}.member-nav li[data-v-4c495ce8]{display:inline-block;font-size:12px;border-radius:4px;width:70px;background:#f5f5f5;line-height:1;margin:4px;padding:9px 0;text-align:center;border:1px solid #f5f5f5}.member-nav li.on[data-v-4c495ce8]{border-color:orange;background:#fff;color:orange}.theme-black .member-head[data-v-4c495ce8]{background-color:#212121}.theme-black .member-nav[data-v-4c495ce8]{background:#2c2c2c}.theme-black .member-nav li[data-v-4c495ce8]{color:#aaa;background:#191919;border-color:#191919}.theme-black .member-nav li.on[data-v-4c495ce8]{border-color:orange;color:orange}.theme-pink .member-head[data-v-4c495ce8]{background-color:#f199bc}", ""]);

// exports


/***/ }),

/***/ 1014:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1012);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(765)("628c9138", content, true, {});

/***/ }),

/***/ 1015:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1013);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(765)("be3340c6", content, true, {});

/***/ }),

/***/ 1017:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "-style-"
  }, [(_vm.member) ? _c('div', {
    staticClass: "member-body tblform section-part",
    staticStyle: {
      "padding": "0"
    }
  }, [(!_vm.readonly && _vm.g.data.user.staffId) ? _c('div', {
    staticClass: "edit"
  }, [_c('a', {
    staticClass: "theme-font-color",
    on: {
      "click": function($event) {
        return _vm.pageTo('/member-info')
      }
    }
  }, [_c('i', {
    staticClass: "iconedit-1 iconfont"
  }), _vm._v(" 编辑会员")])]) : _vm._e(), _vm._v(" "), (!_vm.readonly && _vm.memberAdvEditable) ? _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("会员头像")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail staff-head row end",
    class: {
      'img-pad': _vm.headPhotoSucess
    },
    staticStyle: {
      "padding": "0"
    }
  }, [_c('img-upload', {
    attrs: {
      "action": _vm.imgUpload.action,
      "show-thumb": true,
      "img-max-width": _vm.imgUpload.imgMaxWidth,
      "on-success": _vm.handleImgUploadSuccess,
      "cant-del": false
    }
  }, [(_vm.photo.imgUrl) ? _c('span', {
    staticClass: "row align-center"
  }, [_c('img', {
    staticClass: "head-photo",
    attrs: {
      "src": _vm.photo.imgUrl
    }
  }), _c('i', {
    staticClass: "iconfont iconarrow-r"
  })]) : _c('span', [_c('i', {
    staticClass: "iconfont iconarrow-r"
  })])])], 1)]) : _vm._e(), _vm._v(" "), (_vm.member.avatarPathname) ? _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [(_vm.readonly || !_vm.memberAdvEditable) ? [_vm._v("头像")] : _vm._e()], 2), _vm._v(" "), _c('div', {
    staticClass: "infor-detail card-class"
  }, [_c('img', {
    attrs: {
      "src": _vm.g.Util.getImgUrl(_vm.member.avatarPathname),
      "height": "200"
    }
  })])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("姓名")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail card-class"
  }, [_vm._v("\n          " + _vm._s(_vm.member.name) + "\n        ")])]), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("手机号")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail card-class"
  }, [_c('a', {
    attrs: {
      "href": 'tel:' + _vm.member.phoneNo
    }
  }, [_vm._v(_vm._s(_vm.member.phoneNo))])])]), _vm._v(" "), (_vm.member.sex !== null) ? _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("性别")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail card-class"
  }, [_vm._v("\n          " + _vm._s(_vm.g.Dict.Sex[_vm.member.sex]) + "\n        ")])]) : _vm._e(), _vm._v(" "), (_vm.member.idNo) ? _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("身份证号")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_vm._v("\n          " + _vm._s(_vm.member.idNo) + "\n        ")])]) : _vm._e(), _vm._v(" "), (_vm.member.birthday) ? _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("出生日期")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_vm._v("\n          " + _vm._s(_vm.member.birthday) + "\n\t        "), (_vm.member.age) ? _c('span', {
    staticClass: "l5"
  }, [_vm._v("（" + _vm._s(_vm.member.age) + " 岁）")]) : _vm._e()])]) : _vm._e(), _vm._v(" "), (_vm.member.salesName) ? _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("销售")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_vm._v("\n          " + _vm._s(_vm.member.salesName) + "\n        ")])]) : _vm._e(), _vm._v(" "), (_vm.member.coachName || _vm.member.moreCoachNameList) ? _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("教练")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_vm._v("\n          " + _vm._s(_vm.member.coachName) + "\n          "), (_vm.member.moreCoachIds) ? _c('ul', {
    class: {
      coaches: true,
      'p10': _vm.member.coachName
    }
  }, _vm._l((_vm.member.moreCoachNameList), function(coachName, idx) {
    return (coachName) ? _c('li', [_vm._v("\n              " + _vm._s(coachName)), _c('i', [_vm._v("（" + _vm._s(_vm.member.moreCoachTypeNameList[idx]) + "）")])]) : _vm._e()
  }), 0) : _vm._e()])]) : _vm._e(), _vm._v(" "), (_vm.member.advisorName) ? _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("会籍顾问")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_vm._v("\n          " + _vm._s(_vm.member.advisorName) + "\n        ")])]) : _vm._e(), _vm._v(" "), (_vm.member.sourceName) ? _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("客户来源")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_vm._v("\n          " + _vm._s(_vm.member.sourceName) + "\n        ")])]) : _vm._e(), _vm._v(" "), (_vm.member.regDate) ? _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("注册日期")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_vm._v("\n          " + _vm._s(_vm.g.Util.formatDate(_vm.member.regDate)) + "\n        ")])]) : _vm._e(), _vm._v(" "), (_vm.member.wxNo) ? _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("微信号")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail row row-l-r"
  }, [_vm._v("\n          " + _vm._s(_vm.member.wxNo) + "\n        ")])]) : _vm._e(), _vm._v(" "), (_vm.member.contractNo) ? _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("合同编号")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail row row-l-r"
  }, [_vm._v("\n          " + _vm._s(_vm.member.contractNo) + "\n        ")])]) : _vm._e(), _vm._v(" "), (_vm.member.cardNo) ? _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("会员卡号")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail row row-l-r"
  }, [_vm._v("\n          " + _vm._s(_vm.member.cardNo) + "\n        ")])]) : _vm._e(), _vm._v(" "), (_vm.member.addrDetail) ? _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("会员地址")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail row row-l-r"
  }, [(_vm.addressLSelect) ? [_vm._v(_vm._s(_vm.addressLSelect))] : _vm._e(), _vm._v("\n          " + _vm._s(_vm.member.addrDetail) + "\n        ")], 2)]) : _vm._e(), _vm._v(" "), (_vm.member.latestMcpTime) ? _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("最近充值时间")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail row row-l-r"
  }, [_vm._v("\n          " + _vm._s(_vm.member.latestMcpTime) + "\n        ")])]) : _vm._e(), _vm._v(" "), (_vm.member.latestMcpCardName) ? _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("最近充值卡")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail row row-l-r"
  }, [_vm._v("\n          " + _vm._s(_vm.member.latestMcpCardName) + "\n        ")])]) : _vm._e(), _vm._v(" "), (!_vm.g.Util.isEmpty(_vm.member.latestMcpAmount)) ? _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("最近充值信息")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail row row-l-r"
  }, [(!_vm.g.Util.isEmpty(_vm.member.latestMcpAmount)) ? [_vm._v("￥" + _vm._s(_vm.member.latestMcpAmount))] : _vm._e(), _vm._v(" "), (_vm.member.latestMcpCardType == 1) ? [_vm._v("/ " + _vm._s(_vm.member.latestMcpDays) + "天")] : (_vm.member.latestMcpCardType == 2) ? [_vm._v("/ " + _vm._s(_vm.member.latestMcpTimes) + "次")] : (_vm.member.latestMcpCardType == 4) ? [_vm._v("/ " + _vm._s(_vm.member.latestMcpTimes) + "分钟")] : _vm._e()], 2)]) : _vm._e(), _vm._v(" "), (_vm.member.latestFollowTime) ? _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("最近跟进")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail row row-l-r"
  }, [_vm._v("\n          " + _vm._s(_vm.member.latestFollowStaffName) + " / " + _vm._s(_vm.member.latestFollowTime) + "\n        ")])]) : _vm._e(), _vm._v(" "), (_vm.member.latestFollowContent) ? _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("最近跟进内容")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail row row-l-r"
  }, [_vm._v("\n          " + _vm._s(_vm.member.latestFollowContent) + "\n        ")])]) : _vm._e(), _vm._v(" "), (_vm.member.points) ? _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("当前积分")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail row row-l-r"
  }, [_vm._v("\n          " + _vm._s(_vm.member.points) + "分\n        ")])]) : _vm._e(), _vm._v(" "), (_vm.member.pointsSum) ? _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("累计积分")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail row row-l-r"
  }, [_vm._v("\n          " + _vm._s(_vm.member.pointsSum) + "分\n        ")])]) : _vm._e(), _vm._v(" "), (_vm.member.pointsTitle) ? _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("积分头衔")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail row row-l-r"
  }, [_vm._v("\n          " + _vm._s(_vm.member.pointsTitle) + "\n        ")])]) : _vm._e(), _vm._v(" "), (_vm.member.tagNames) ? _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("会员标签")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail row row-l-r"
  }, [_vm._v("\n          " + _vm._s(_vm.member.tagNames.join('、')) + "\n        ")])]) : _vm._e(), _vm._v(" "), (_vm.member.height) ? _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("身高")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_vm._v("\n          " + _vm._s(_vm.member.height) + " "), (_vm.member.height) ? _c('span', {
    staticClass: "gray"
  }, [_vm._v("CM")]) : _vm._e()])]) : _vm._e(), _vm._v(" "), (_vm.member.weight) ? _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("体重")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_vm._v("\n          " + _vm._s(_vm.member.weight) + " "), (_vm.member.weight) ? _c('span', {
    staticClass: "gray"
  }, [_vm._v("KG")]) : _vm._e()])]) : _vm._e(), _vm._v(" "), (_vm.member.bmi) ? _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("BMI")]), _vm._v(" "), (_vm.member.bmi) ? _c('div', {
    staticClass: "infor-detail"
  }, [_vm._v("\n          " + _vm._s(_vm.member.bmi) + "\n        ")]) : _vm._e()]) : _vm._e(), _vm._v(" "), (_vm.member.fencingType) ? _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("剑种")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_vm._v("\n          " + _vm._s(_vm.g.Dict.FencingTypeName[_vm.member.fencingType]) + "\n        ")])]) : _vm._e(), _vm._v(" "), (_vm.member.fencingLevel) ? _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("组别")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_vm._v("\n          " + _vm._s(_vm.g.Dict.FencingLevelName[_vm.member.fencingLevel]) + "\n        ")])]) : _vm._e(), _vm._v(" "), (_vm.member.emergencyPhone) ? _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("紧急联系人")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_c('a', {
    attrs: {
      "href": 'tel:' + _vm.member.emergencyPhone
    }
  }, [_vm._v(_vm._s(_vm.member.emergencyPhone))])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("登记人")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_vm._v("\n          " + _vm._s(_vm.member.createUname) + "\n        ")])]), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("登记时间")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_vm._v("\n          " + _vm._s(_vm.member.createTime) + "\n        ")])]), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("更新人")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_vm._v("\n          " + _vm._s(_vm.member.updateUname) + "\n        ")])]), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("更新时间")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_vm._v("\n          " + _vm._s(_vm.member.updateTime) + "\n        ")])]), _vm._v(" "), (_vm.member.remark) ? _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("会员备注")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_vm._v("\n          " + _vm._s(_vm.member.remark) + "\n        ")])]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "vant"
  }, [_c('van-dialog', {
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
      "padding": "15px 0",
      "margin-bottom": "0"
    }
  }, [_c('div', [_c('img', {
    attrs: {
      "src": _vm.imgUrl
    }
  })])])])], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 1018:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.member) ? _c('div', {
    staticClass: "vant"
  }, [_c('page-head', {
    attrs: {
      "title": '会员' + _vm.menus[_vm.menu]
    }
  }, [_c('i', {
    staticClass: "iconfont gray iconsearch-1",
    on: {
      "click": function($event) {
        return _vm.$router.push('/member-query')
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "member-head"
  }, [_c('table', [_c('tr', [_c('td', {
    staticClass: "avatar",
    attrs: {
      "width": "75"
    }
  }, [_c('img', {
    staticClass: "photo",
    attrs: {
      "src": _vm.g.Util.getAvatarUrl(_vm.avatarPathname ? _vm.avatarPathname : _vm.member.avatarPathname, 250, 250, 'EEEEEE', _vm.member.sex)
    },
    on: {
      "click": function($event) {
        return _vm.toggleImgDlg()
      }
    }
  })]), _vm._v(" "), _c('td', {
    staticClass: "tit"
  }, [_vm._v("\n          " + _vm._s(_vm.member.name) + "\n        ")]), _vm._v(" "), _c('td', {
    staticClass: "opts",
    attrs: {
      "align": "right"
    }
  }, [_c('a', {
    staticClass: "message",
    attrs: {
      "href": 'sms:' + _vm.member.phoneNo
    }
  }, [_c('i', {
    staticClass: "iconfont iconsms"
  })]), _vm._v("\n           \n          "), _c('a', {
    staticClass: "telephone",
    attrs: {
      "href": 'tel:' + _vm.member.phoneNo,
      "class": "telephone"
    }
  }, [_c('i', {
    staticClass: "iconfont icontel"
  })])])])])]), _vm._v(" "), _c('div', {
    staticClass: "member-nav section-part"
  }, [_c('ul', [_c('li', {
    class: {
      'on theme-border-bottom theme-font-color': _vm.menu === 'base'
    },
    on: {
      "click": function($event) {
        return _vm.pageTo('/member-base')
      }
    }
  }, [_vm._v("基本信息")]), _vm._v(" "), _c('li', {
    class: {
      'on theme-border-bottom theme-font-color': _vm.menu === 'card-list'
    },
    on: {
      "click": function($event) {
        return _vm.pageTo('/member-card-list')
      }
    }
  }, [_vm._v("会员卡")]), _vm._v(" "), _c('li', {
    class: {
      'on theme-border-bottom theme-font-color': _vm.menu === 'entry-checkins'
    },
    on: {
      "click": function($event) {
        return _vm.pageTo('/member-entry-checkins')
      }
    }
  }, [_vm._v("入场记录")]), _vm._v(" "), _c('li', {
    class: {
      'on theme-border-bottom theme-font-color': _vm.menu === 'group-lesson'
    },
    on: {
      "click": function($event) {
        return _vm.pageTo('/member-group-lessons')
      }
    }
  }, [_vm._v("团课记录")]), _vm._v(" "), _c('li', {
    class: {
      'on theme-border-bottom theme-font-color': _vm.menu === 'private-lesson'
    },
    on: {
      "click": function($event) {
        return _vm.pageTo('/member-private-lessons')
      }
    }
  }, [_vm._v("私教记录")]), _vm._v(" "), _c('li', {
    class: {
      'on theme-border-bottom theme-font-color': _vm.menu === 'follows'
    },
    on: {
      "click": function($event) {
        return _vm.pageTo('/member-follows')
      }
    }
  }, [_vm._v("会员跟进")]), _vm._v(" "), _c('li', {
    class: {
      'on theme-border-bottom theme-font-color': _vm.menu === 'fitness-photo'
    },
    on: {
      "click": function($event) {
        return _vm.pageTo('/member-fitness-photo')
      }
    }
  }, [_vm._v("会员相册")]), _vm._v(" "), _c('li', {
    class: {
      'on theme-border-bottom theme-font-color': _vm.menu === 'body-test'
    },
    on: {
      "click": function($event) {
        return _vm.pageTo('/member-body-test')
      }
    }
  }, [_vm._v("会员测试")]), _vm._v(" "), _c('li', {
    class: {
      'on theme-border-bottom theme-font-color': _vm.menu === 'hrs'
    },
    on: {
      "click": function($event) {
        return _vm.pageTo('/member-hrs')
      }
    }
  }, [_vm._v("心率记录")]), _vm._v(" "), _c('li', {
    class: {
      'on theme-border-bottom theme-font-color': _vm.menu === 'health-report'
    },
    on: {
      "click": function($event) {
        return _vm.pageTo('/member-health-report')
      }
    }
  }, [_vm._v("体测记录")])])]), _vm._v(" "), _c('van-dialog', {
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
  }, [_c('section', [_c('img', {
    staticStyle: {
      "padding": "15px 0"
    },
    attrs: {
      "src": _vm.g.Util.getAvatarUrl(_vm.avatarPathname ? _vm.avatarPathname : _vm.member.avatarPathname, 250, null, 'EEEEEE', _vm.member.sex)
    }
  })])])], 1) : _vm._e()
},staticRenderFns: []}

/***/ }),

/***/ 1019:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1029)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1023),
  /* template */
  __webpack_require__(1036),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-2a64fb95",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1023:
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

/***/ 1026:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(764)(false);
// imports


// module
exports.push([module.i, ".section-part[data-v-2a64fb95]{margin:0;border-top:0}.pos-fix[data-v-2a64fb95]{position:fixed;bottom:0;left:0;width:100%;z-index:2100}.qd-calendar .qd-head[data-v-2a64fb95]{padding:0 20px;height:50px;line-height:50px}.qd-calendar .qd-head .iconfont[data-v-2a64fb95]{vertical-align:-2px;font-size:18px}.qd-calendar .today-date[data-v-2a64fb95]{height:33px;line-height:30px;margin:9px 0 0;padding:0 9px}.qd-calendar .qd-week[data-v-2a64fb95]{padding:0 20px;height:50px;line-height:50px;font-weight:600}.qd-calendar .qd-week .week-list[data-v-2a64fb95]{width:14.28%;text-align:center}.qd-calendar .qd-date[data-v-2a64fb95]{padding:5px 10px 10px;justify-content:flex-start}.qd-calendar .qd-date .qd-list[data-v-2a64fb95]{width:14.28%;text-align:center;padding:2px 8px;position:relative;margin:4px 0}.qd-calendar .qd-date .qd-list .iconfont[data-v-2a64fb95]{position:absolute;font-size:38px;top:50%;left:50%;text-align:center;display:inline-block;transform:translate(calc(-50% + -2px),-50%)}.qd-calendar .drop-down-date[data-v-2a64fb95]{color:#999;font-size:14px;text-align:center;padding:10px 0}.qd-calendar .drop-down-date .iconfont[data-v-2a64fb95]{vertical-align:-2px}", ""]);

// exports


/***/ }),

/***/ 1029:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1026);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(765)("dbb10672", content, true, {});

/***/ }),

/***/ 1036:
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

/***/ 1071:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1841)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1463),
  /* template */
  __webpack_require__(2150),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-4fef7962",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1076:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    shopList: {
      type: Array,
      required: false
    },
    userType: {
      type: String, // staff, member
      required: true
    },
    staffPage: {
      type: String,
      required: false
    }
  },

  data() {
    return {
      g: $,
      newShopList: null
    };
  },

  created() {
    if ($.Util.isEmptyArray(this.shopList) || !this.shopList[0].addrProvinceName) {
      this.queryUserShops();
    } else {
      this.newShopList = this.shopList;
    }
  },

  methods: {
    queryUserShops() {
      // load shop list
      let args = { encTid: $.data.tenant.encTid, uid: $.data.user.uid, userType: this.userType };
      $.Req.service($.SvName.TENANT_SHOPS_QUERY, args, ret => {
        this.newShopList = ret.shopList;
        $.data.shopList = ret.shopList;
      }, true);
    },

    enterShop(index) {
      if ($.data.tenant.tenantType === 1) return;

      let shop = this.newShopList[index];
      if (shop.isExpire) {
        $.Dlg.warning('抱歉，本店的软件系统已到期，无法进入了。');
        return;
      }
      if (shop.forbiddenInChain) {
        $.Dlg.warning('抱歉，您无权进入本店');
        return;
      }
      $.Req.service($.SvName.USER_SHOP_SET, { encSid: shop.encSid, isFromMobile: true }, ret => {
        if (!ret.isValidShop) {
          $.Dlg.warning($.Lang.SHOP_EXPIRED.format(shop.shopName));
          return;
        }

        shop.hasEntryCheckin = ret.hasEntryCheckin;
        shop.hasGroupCourse = ret.hasGroupCourse;
        shop.hasPrivateCourse = ret.hasPrivateCourse;
        shop.hasMall = ret.hasMall;
        shop.hasVenueBooking = ret.hasVenueBooking;

        $.data.shop = shop;
        $.Util.copyAttributes(ret.user, $.data.user);
        this.loginSelect(this.userType);
      }, true);
    },

    loginSelect(type) {
      document.title = $.data.shop.shopName;
      $.Util.cookie.set($.Conf.CookieKeys.LOGIN_SID, $.data.shop.encSid, 365);
      if (type === 'staff') {
        $.data.user.memberId = null;
        $.Util.cookie.set($.Conf.CookieKeys.LOGIN_AS, 'staff', 365);
        let page = this.staffPage ? this.staffPage : '/staff-home';
        this.$router.push(page);
      } else if (type === 'member') {
        $.data.user.staffId = null;
        $.data.user.isTenantOwner = null;
        $.data.user.isShopOwner = null;
        $.Util.cookie.set($.Conf.CookieKeys.LOGIN_AS, 'member', 365);
        this.$router.push('/member-home');
      }
      location.reload();
    }
  }
});

/***/ }),

/***/ 1078:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(764)(false);
// imports


// module
exports.push([module.i, ".shop[data-v-1367b6f2]{border:1px solid #ddd;border-radius:3px;padding:10px;margin:12px}.shop[data-v-1367b6f2]:hover{border-width:2px}.shop table[data-v-1367b6f2]{width:100%}.shop td[data-v-1367b6f2]{text-align:left}.shop .name[data-v-1367b6f2]{font-size:14px;font-weight:800;margin-bottom:5px;padding:0 0 12px 5px;border-bottom:1px dotted #ddd;text-align:left}.shop .cont[data-v-1367b6f2]{padding-left:5px}.shop .cont li[data-v-1367b6f2]{padding:3px 0;font-size:12px;color:#999;border-top:none}.shop .cont li[data-v-1367b6f2]:last-child{padding-bottom:0}.shop .opt[data-v-1367b6f2]{margin-top:10px;border-top:1px dotted #ddd;padding-top:10px}.shop .shop-img[data-v-1367b6f2]{height:90px;width:90px}.login-chose[data-v-1367b6f2]{padding:10px 0 0}.login-chose .btn[data-v-1367b6f2]{padding:10px 0;width:40%}", ""]);

// exports


/***/ }),

/***/ 1082:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1078);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(765)("49e37e24", content, true, {});

/***/ }),

/***/ 1091:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1082)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1076),
  /* template */
  __webpack_require__(1093),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-1367b6f2",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1093:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.newShopList) ? _c('div', _vm._l((_vm.newShopList), function(s, index) {
    return _c('section', {
      staticClass: "shop",
      on: {
        "click": function($event) {
          return _vm.enterShop(index)
        }
      }
    }, [_c('table', [_c('tr', [_c('td', {
      attrs: {
        "width": "100",
        "valign": "top"
      }
    }, [_c('img', {
      staticClass: "shop-img",
      attrs: {
        "src": _vm.g.Util.getImgUrl(s.logoPathname, 600, 600, 'EEEEEE')
      }
    })]), _vm._v(" "), _c('td', {
      attrs: {
        "valign": "top"
      }
    }, [_c('div', {
      staticClass: "name"
    }, [_vm._v("\n            " + _vm._s(s.shopName) + "\n            "), (s.isExpire) ? _c('span', {
      staticClass: "orangered normal"
    }, [_vm._v("[系统已到期]")]) : _vm._e()]), _vm._v(" "), _c('ul', {
      staticClass: "cont"
    }, [_c('li', [_vm._v("地址：" + _vm._s(s.addrProvinceName) + _vm._s(s.addrCityName) + _vm._s(s.addrDistrictName) + _vm._s(s.addrDetail))]), _vm._v(" "), _c('li', [_vm._v("电话：" + _vm._s(s.tel))])])])])])])
  }), 0) : _vm._e()
},staticRenderFns: []}

/***/ }),

/***/ 1100:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1844)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1461),
  /* template */
  __webpack_require__(2153),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-529b2e22",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1101:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1788)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1464),
  /* template */
  __webpack_require__(2098),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-3191217e",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header__ = __webpack_require__(1130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(1131);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// 使用说明
/**
 * @data 展示的数据内容数组
          {
            _checked: true 可以默认选中当前项 
            _disabled: true 可以禁止选择当前项。
          }
 * @columns 表格的相关配置
          {
            title: "时间",   列头显示文字
            key: "date",    对应列内容的字段名
            width: 100,     每列宽度
            align: 'left/center/right', 列对齐方式
            fixed: "right", 固定左右位置
            slotName: 'name'   插槽的name值，自定义内容必填
            type: 'selection'   开启多选
            renderHeader(h, { column, index }) {}   自定义列头显示内容，使用 Vue 的 Render 函数。传入两个参数，第一个是 h，第二个为对象，包含 column 和 index，分别为当前列数据和当前列索引。            
          }
 * @width 表格宽度，单位 px
 * @height 表格的高度，设置后，如果表格内容大于此值，会固定表头
 * @maxHeight 表格最大高度，单位 px，设置后，如果表格内容大于此值，会固定表头
 * @border 是否显示纵向边框
 * @stripe 是否显示间隔斑马纹
 * @showHeader 是否显示表头
 * @noDataText 数据为空时显示的提示内容
 * @showNoDataText 是否显示为空时的提示内容
 */

// 启用多选可使用的方法
/**
 * @onSelect	在多选模式下有效，选中某一项时触发	selection：已选项数据 row：刚选择的项数据
 * @onSelectCancel	在多选模式下有效，取消选中某一项时触发	selection：已选项数据 row：取消选择的项数据
 * @onSelectAll	在多选模式下有效，点击全选时触发	selection：已选项数据
 * @onSelectAllCancel	在多选模式下有效，点击取消全选时触发	selection：已选项数据
 * @onSelectionChange	在多选模式下有效，只要选中项发生变化时就会触发	selection：已选项数据
 *
 */

/**
 * @自定义列内容和自定义标题的使用
 *
 * 1.自定义标题内容
 * 第一种方法（优先级大于第二种，自定义全部标题内容）：<template #header="{row, index}">{{row.title}}</template>
 * 第二种方法（自定义指定标题）：在 columns 元素中添加 renderHeader 属性，传递一个方法使用
 *
 * 2.自定义列内容
 * 2.1  在 columns 元素添加 slotName 属性，传一个字符串
 * 2.2  <template #slotName="{row, index}">{{row.name}}</template>, "slotName"是你穿的那个字符串名
 */




const prefixCls = "qd-table";

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    renderHeader: __WEBPACK_IMPORTED_MODULE_0__header__["a" /* default */]
  },
  emits: ["onSelect", "onSelectCancel", "onSelectAll", "onSelectAllCancel", "onSelectionChange"],
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    columns: {
      type: Array,
      default() {
        return [];
      }
    },
    width: {
      type: [Number, String]
    },
    height: {
      type: [Number, String]
    },
    maxHeight: {
      type: [Number, String]
    },
    border: {
      type: Boolean,
      default: false
    },
    stripe: {
      type: Boolean,
      default: false
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    noDataText: {
      type: [Number, String],
      default: "暂无数据"
    },
    showNoDataText: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      headerInputId: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* getRandomStr */])(6),
      cloneData: [],
      cloneColumns: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* deepCopy */])(this.columns),
      prefixCls: prefixCls,
      fixedHeader: !!this.height,
      widthList: [],
      fixedIdx: [],
      selectFlag: false,
      showVerticalScrollBar: false,
      scrollBarWidth: 0,
      columnsWidth: null,
      tableWidth: null
    };
  },
  computed: {
    classesFixed() {
      return [`${prefixCls}-box`, {
        [`${prefixCls}-fixed`]: this.fixedHeader
      }];
    },
    classesBox() {
      return [`${prefixCls}-mytbl`, `${prefixCls}-box`, {
        [`${prefixCls}-box-fixed`]: this.fixedHeader,
        [`${prefixCls}-border`]: this.border,
        [`${prefixCls}-stripe`]: this.stripe
      }];
    },
    classesHeader() {
      return [`${prefixCls}-header`, {
        [`${prefixCls}-header-fixed`]: this.fixedHeader
      }];
    },
    classesColumnFixed() {
      return [`${prefixCls}-column-fixed`];
    },
    classesBody() {
      return [`${prefixCls}-tbody`];
    },
    styles() {
      const obj = {};
      if (this.height) {
        obj.height = this.height + "px";
      }
      if (this.width) {
        obj.width = this.width + "px";
      }
      if (this.maxHeight) {
        obj.maxHeight = this.maxHeight + "px";
      }
      return obj;
    },
    showSlotHeader() {
      let flag = false;
      // vue2 使用 $scopedSlots
      flag = this.$scopedSlots.header !== undefined;
      return flag;
    }
  },
  watch: {
    columns: {
      handler() {
        if (!this.columns.length) return;
        this.cloneColumns = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* deepCopy */])(this.columns);
        this.handleResize();
      },
      deep: true
    },
    data: {
      handler() {
        if (!this.data.length) return;
        this.cloneData = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* deepCopy */])(this.data);
        this.setDataId();
      },
      deep: true,
      immediate: true
    },
    cloneData: {
      handler() {
        let list = this.cloneData.filter(item => {
          if (item._disabled) return;
          if (!item._checked) return item;
        });
        this.selectFlag = !list.length;
        this.$emit("onSelectionChange", this.filterSelectFun());
      },
      deep: true
    }
  },
  created() {},
  mounted() {
    this.handleResize();
  },
  methods: {
    resize() {
      const _this = this;
      window.addEventListener("resize", function () {
        _this.handleResize();
      });
    },
    setDataId() {
      this.cloneData.forEach(item => {
        item._id = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* getRandomStr */])(6);
      });
    },
    handleResize() {
      let tableWidth = this.$el.offsetWidth - 2;
      let columnsWidth = {};
      let sumMinWidth = 0;
      let hasWidthColumns = [];
      let noWidthColumns = [];
      let maxWidthColumns = [];
      let noMaxWidthColumns = [];
      this.cloneColumns.forEach(col => {
        if (col.width) {
          hasWidthColumns.push(col);
        } else {
          noWidthColumns.push(col);
          if (col.minWidth) {
            sumMinWidth += col.minWidth;
          }
          if (col.maxWidth) {
            maxWidthColumns.push(col);
          } else {
            noMaxWidthColumns.push(col);
          }
        }
        col._width = null;
      });

      let unUsableWidth = hasWidthColumns.map(cell => cell.width).reduce((a, b) => a + b, 0);

      let scrollBarWidth = tableWidth - this.$refs.trHeaderHd.offsetWidth || 0;
      let showVerticalScrollBar = !!scrollBarWidth;

      this.scrollBarWidth = scrollBarWidth;
      this.showVerticalScrollBar = showVerticalScrollBar;

      let usableWidth = tableWidth - unUsableWidth - sumMinWidth - (showVerticalScrollBar ? scrollBarWidth : 0) - 1;
      let usableLength = noWidthColumns.length;
      let columnWidth = 0;
      if (usableWidth > 0 && usableLength > 0) {
        columnWidth = parseInt(usableWidth / usableLength);
      }

      for (let i = 0; i < this.cloneColumns.length; i++) {
        const column = this.cloneColumns[i];
        let width = columnWidth + (column.minWidth ? column.minWidth : 0);
        if (column.width) {
          width = column.width;
        } else {
          if (column._width) {
            width = column._width;
          } else {
            if (column.minWidth > width) {
              width = column.minWidth;
            } else if (column.maxWidth < width) {
              width = column.maxWidth;
            }

            if (usableWidth > 0) {
              usableWidth -= width - (column.minWidth ? column.minWidth : 0);
              usableLength--;
              if (usableLength > 0) {
                columnWidth = parseInt(usableWidth / usableLength);
              } else {
                columnWidth = 0;
              }
            } else {
              columnWidth = 0;
            }
          }
        }
        width = width || 50;
        column._width = width;

        columnsWidth[i] = {
          width: width
        };
      }
      if (usableWidth > 0) {
        usableLength = noMaxWidthColumns.length;
        columnWidth = parseInt(usableWidth / usableLength);
        for (let i = 0; i < noMaxWidthColumns.length; i++) {
          const column = noMaxWidthColumns[i];
          let width = column._width + columnWidth;
          if (usableLength > 1) {
            usableLength--;
            usableWidth -= columnWidth;
            columnWidth = parseInt(usableWidth / usableLength);
          } else {
            columnWidth = 0;
          }

          column._width = width;

          columnsWidth[i] = {
            width: width
          };
        }
      }

      this.tableWidth = this.cloneColumns.map(cell => cell._width).reduce((a, b) => a + b, 0) + (this.showVerticalScrollBar ? this.scrollBarWidth : 0) + 1;
      this.columnsWidth = columnsWidth;
      this.computeFixedDistance();
    },
    computeFixedDistance() {
      this.fixedIdx = [];
      // 操作获取的 columns 数组
      this.cloneColumns.forEach((item, idx) => {
        // 找出固定列项
        if (item.fixed) {
          this.fixedIdx.push({
            key: idx,
            width: item._width,
            fixed: item.fixed
          });
        }
        item.style = {
          minWidth: item.minWidth + "px",
          maxWidth: item.maxWidth + "px"
        };
        if (!item.minWidth) delete item.style.minWidth;
        if (!item.maxWidth) delete item.style.maxWidth;
      });

      // 计算固定列左边距离
      let leftSum = 0;
      let leftCount = 0;
      this.fixedIdx.forEach((item, idx) => {
        leftCount -= 1;
        if (item.fixed === "left") {
          if (idx === 0) {
            leftSum = item.width;
            item.sum = leftCount;
          } else {
            item.sum = leftSum + leftCount;
            leftSum += item.width;
          }
          this.cloneColumns[item.key].style[item.fixed] = item.sum + "px";
        }
      });

      // 计算固定列右边距离
      let rightSum = 0;
      let rightCount = 0;
      this.fixedIdx.reverse().forEach((item, idx) => {
        rightCount -= 1;
        if (item.fixed === "right") {
          if (idx === 0) {
            rightSum = item.width;
            item.sum = rightCount;
          } else {
            item.sum = rightSum + rightCount;
            rightSum += item.width;
          }
          this.cloneColumns[item.key].style[item.fixed] = item.sum + "px";
        }
      });
    },

    activeItemFun(e, idx) {
      const flag = e.target.checked;
      if (flag) {
        this.$emit("onSelect", this.data[idx]);
      } else {
        this.$emit("onSelectCancel", this.data[idx]);
      }
    },
    allCheckboxFun(e) {
      const flag = e.target.checked;
      this.cloneData.forEach((item, idx) => {
        if (item._disabled) return;
        // item._checked = flag;
        this.$set(this.cloneData[idx], "_checked", flag);
      });
      if (flag) {
        this.$emit("onSelectAll", this.filterSelectFun());
      } else {
        this.$emit("onSelectAllCancel", this.filterSelectFun());
      }
    },
    filterSelectFun() {
      return this.data.filter((item, idx) => {
        const c = this.cloneData[idx];
        return c._checked;
      });
    },
    filterFixed(c, idx) {
      if (c.type === "selection") return false;
      const a = this.fixedIdx.find(item => item.key === idx);
      if (a) {
        return !!a;
      }
    }
  }
});

/***/ }),

/***/ 1130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'TableRenderHeader',
    functional: true,
    props: {
        render: Function,
        column: Object,
        index: Number
    },
    render: (h, ctx) => {
        console.log(ctx);
        const params = {
            column: ctx.props.column,
            index: ctx.props.index
        };
        return ctx.props.render(h, params);
    }
});

/***/ }),

/***/ 1131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = deepCopy;
/* harmony export (immutable) */ __webpack_exports__["a"] = getRandomStr;
// deepCopy
function deepCopy(data) {
  const t = typeOf(data);
  let o;

  if (t === "array") {
    o = [];
  } else if (t === "object") {
    o = {};
  } else {
    return data;
  }

  if (t === "array") {
    for (let i = 0; i < data.length; i++) {
      o.push(deepCopy(data[i]));
    }
  } else if (t === "object") {
    for (let i in data) {
      o[i] = deepCopy(data[i]);
    }
  }
  return o;
}

function typeOf(obj) {
  const toString = Object.prototype.toString;
  const map = {
    "[object Boolean]": "boolean",
    "[object Number]": "number",
    "[object String]": "string",
    "[object Function]": "function",
    "[object Array]": "array",
    "[object Date]": "date",
    "[object RegExp]": "regExp",
    "[object Undefined]": "undefined",
    "[object Null]": "null",
    "[object Object]": "object"
  };
  return map[toString.call(obj)];
}

function getRandomStr(len = 32) {
  const $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  const maxPos = $chars.length;
  let str = "";
  for (let i = 0; i < len; i++) {
    str += $chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return str;
}

/***/ }),

/***/ 1156:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(764)(false);
// imports


// module
exports.push([module.i, "[data-v-e848f6e8]{box-sizing:border-box}.qd-table[data-v-e848f6e8]{border:1px solid #e3e8ee}.qd-table .qd-table-mytbl[data-v-e848f6e8]{width:100%;overflow:auto}.qd-table .qd-table-mytbl table[data-v-e848f6e8]{table-layout:fixed;width:100%}.qd-table .qd-table-mytbl tbody tr td[data-v-e848f6e8]{background:#f6f6f6}.qd-table .qd-table-mytbl th[data-v-e848f6e8]{font-weight:700;color:#777;background:#f0f0f0}.qd-table .qd-table-mytbl td[data-v-e848f6e8],.qd-table .qd-table-mytbl th[data-v-e848f6e8]{padding:10px 10px 8px;font-size:12px;border-bottom:1px solid #e3e8ee}.qd-table .qd-table-mytbl td[data-v-e848f6e8]:last-child,.qd-table .qd-table-mytbl th[data-v-e848f6e8]:last-child{border-right:0}.qd-table .qd-table-mytbl tr[data-v-e848f6e8]:hover{background:#fafafa}.qd-table .qd-table-mytbl .ckbox[data-v-e848f6e8]{cursor:pointer}.qd-table .qd-table-mytbl .ckbox:hover .ckbox-0[data-v-e848f6e8]{color:#2e86e5}.qd-table .qd-table-mytbl .ckbox .ckbox-0[data-v-e848f6e8]{color:#ccc;font-size:14px;font-weight:400}.qd-table .qd-table-mytbl .ckbox .ckbox-1[data-v-e848f6e8]{color:#2e86e5;font-size:14px;font-weight:400}.qd-table .qd-table-mytbl .th-help[data-v-e848f6e8]{font-weight:400;color:#999;border-radius:50%;padding:0 6px;background:#ddd;font-size:11px;margin-left:3px}.qd-table-box-fixed[data-v-e848f6e8]{overflow:auto}.qd-table-border td[data-v-e848f6e8],.qd-table-border th[data-v-e848f6e8]{border-right:1px solid #e3e8ee}.qd-table-header-fixed[data-v-e848f6e8]{position:sticky;top:0;z-index:99}.qd-table-column-fixed[data-v-e848f6e8]{position:sticky;z-index:90}.qd-table-column-fixed[data-v-e848f6e8]:after{position:absolute;top:0;right:0;content:\"\";display:block;width:1px;height:100%;box-shadow:3px 0 6px 0 rgba(0,0,0,.4)}.qd-table-column-fixed[data-v-e848f6e8]:before{position:absolute;top:0;left:0;content:\"\";display:block;width:1px;height:100%;box-shadow:-3px 0 6px 0 rgba(0,0,0,.4)}.qd-table-checkbox[data-v-e848f6e8]{width:18px;height:18px;position:relative}.qd-table-checkbox input[type=checkbox][data-v-e848f6e8]{display:none}.qd-table-checkbox .disabled[data-v-e848f6e8]{display:inline-block}.qd-table-checkbox input[type=checkbox]+label[data-v-e848f6e8]{display:inline-block;position:relative;cursor:pointer;position:absolute;left:0;top:50%;transform:translateY(-50%)}.qd-table-checkbox input[type=checkbox]+label[data-v-e848f6e8]:before{content:\"\";display:inline-block;width:18px;height:18px;border-radius:2px;border:1px solid #dcdee2;background-color:#fff;vertical-align:top;text-align:center;font-size:12px;line-height:14px}.qd-table-checkbox input[type=checkbox]:checked+label[data-v-e848f6e8]:before{content:\"\\2714\";background-color:#2d8cf0;color:#fff}.qd-table-checkbox .disabled+label[data-v-e848f6e8]:before,.qd-table-checkbox input[type=checkbox][data-v-e848f6e8],.qd-table-checkbox input[type=checkbox][data-v-e848f6e8]:checked{background-color:#f3f3f3!important;color:#ccc!important;cursor:not-allowed!important}.qd-table-stripe table tbody tr:nth-of-type(odd) td[data-v-e848f6e8]{background-color:#fff}.none[data-v-e848f6e8]{text-align:center;color:#bbb;font-size:12px;margin-top:20px}", ""]);

// exports


/***/ }),

/***/ 1183:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1156);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(765)("1cc194b2", content, true, {});

/***/ }),

/***/ 1202:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1183)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1103),
  /* template */
  __webpack_require__(1250),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-e848f6e8",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1250:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "qd-table"
  }, [_c('div', {
    class: _vm.classesFixed
  }, [_c('div', {
    class: _vm.classesBox,
    style: (_vm.styles)
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showHeader),
      expression: "showHeader"
    }],
    class: _vm.classesHeader
  }, [_c('table', [_c('colgroup', _vm._l((_vm.cloneColumns), function(cw, idx) {
    return _c('col', {
      key: idx,
      attrs: {
        "width": cw._width
      }
    })
  }), 0), _vm._v(" "), _c('thead', [_c('tr', {
    ref: "trHeaderHd"
  }, [_vm._l((_vm.cloneColumns), function(cols, idx) {
    return [(_vm.filterFixed(cols, idx)) ? [_c('th', {
      key: idx,
      class: _vm.classesColumnFixed,
      style: (cols.style),
      attrs: {
        "align": cols.align || 'left'
      }
    }, [(_vm.showSlotHeader) ? [_vm._t("header", null, {
      "row": _vm.columns[idx],
      "index": idx
    })] : [(!cols.renderHeader) ? [_vm._v(_vm._s(cols.title))] : [_c('render-header', {
      attrs: {
        "render": cols.renderHeader,
        "column": cols,
        "index": idx
      }
    })]]], 2)] : (cols.type === 'selection') ? [_c('th', {
      key: idx,
      class: _vm.classesColumnFixed,
      style: (cols.style),
      attrs: {
        "align": cols.align || 'left'
      }
    }, [_c('div', {
      staticClass: "qd-table-checkbox"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (_vm.selectFlag),
        expression: "selectFlag"
      }],
      attrs: {
        "type": "checkbox",
        "id": _vm.headerInputId
      },
      domProps: {
        "checked": Array.isArray(_vm.selectFlag) ? _vm._i(_vm.selectFlag, null) > -1 : (_vm.selectFlag)
      },
      on: {
        "input": _vm.allCheckboxFun,
        "change": function($event) {
          var $$a = _vm.selectFlag,
            $$el = $event.target,
            $$c = $$el.checked ? (true) : (false);
          if (Array.isArray($$a)) {
            var $$v = null,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && (_vm.selectFlag = $$a.concat([$$v]))
            } else {
              $$i > -1 && (_vm.selectFlag = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
            }
          } else {
            _vm.selectFlag = $$c
          }
        }
      }
    }), _vm._v(" "), _c('label', {
      attrs: {
        "for": _vm.headerInputId
      }
    })])])] : [_c('th', {
      key: idx,
      style: (cols.style),
      attrs: {
        "align": cols.align || 'left'
      }
    }, [(_vm.showSlotHeader) ? [_vm._t("header", null, {
      "row": _vm.columns[idx],
      "index": idx
    })] : [(!cols.renderHeader) ? [_vm._v(_vm._s(cols.title))] : [_c('render-header', {
      attrs: {
        "render": cols.renderHeader,
        "column": cols,
        "index": idx
      }
    })]]], 2)]]
  })], 2)])])]), _vm._v(" "), (_vm.data.length) ? _c('div', {
    class: _vm.classesBody
  }, [_c('table', [_c('colgroup', _vm._l((_vm.cloneColumns), function(cw, idx) {
    return _c('col', {
      key: idx,
      attrs: {
        "width": cw._width
      }
    })
  }), 0), _vm._v(" "), _c('tbody', _vm._l((_vm.cloneData), function(c, idx) {
    return _c('tr', {
      key: idx
    }, [_vm._l((_vm.cloneColumns), function(cols, cIdx) {
      return [(_vm.filterFixed(cols, cIdx)) ? [_c('td', {
        key: cIdx,
        class: _vm.classesColumnFixed,
        style: (cols.style),
        attrs: {
          "align": cols.align || 'left'
        }
      }, [(!cols.slotName) ? [_vm._v("\n                      " + _vm._s(c[cols.key]) + "\n                    ")] : [_vm._t(cols.slotName, null, {
        "row": c,
        "index": idx
      })]], 2)] : (cols.type === 'selection') ? [_c('td', {
        key: cIdx,
        class: _vm.classesColumnFixed,
        style: (cols.style),
        attrs: {
          "align": cols.align || 'left'
        }
      }, [_c('div', {
        staticClass: "qd-table-checkbox"
      }, [_c('input', {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: (c._checked),
          expression: "c._checked"
        }],
        class: c._disabled && 'disabled',
        attrs: {
          "type": "checkbox",
          "id": c._id,
          "disabled": c._disabled
        },
        domProps: {
          "checked": Array.isArray(c._checked) ? _vm._i(c._checked, null) > -1 : (c._checked)
        },
        on: {
          "input": function($event) {
            return _vm.activeItemFun($event, c)
          },
          "change": function($event) {
            var $$a = c._checked,
              $$el = $event.target,
              $$c = $$el.checked ? (true) : (false);
            if (Array.isArray($$a)) {
              var $$v = null,
                $$i = _vm._i($$a, $$v);
              if ($$el.checked) {
                $$i < 0 && (_vm.$set(c, "_checked", $$a.concat([$$v])))
              } else {
                $$i > -1 && (_vm.$set(c, "_checked", $$a.slice(0, $$i).concat($$a.slice($$i + 1))))
              }
            } else {
              _vm.$set(c, "_checked", $$c)
            }
          }
        }
      }), _vm._v(" "), _c('label', {
        attrs: {
          "for": c._id
        }
      })])])] : [_c('td', {
        key: cIdx,
        style: (cols.style),
        attrs: {
          "align": cols.align || 'left'
        }
      }, [(!cols.slotName) ? [_vm._v("\n                      " + _vm._s(c[cols.key]) + "\n                    ")] : [_vm._t(cols.slotName, null, {
        "row": c,
        "index": idx
      })]], 2)]]
    })], 2)
  }), 0)])]) : [(_vm.showNoDataText) ? _c('div', {
    staticClass: "none"
  }, [_vm._v(_vm._s(_vm.noDataText))]) : _vm._e()]], 2)])])
},staticRenderFns: []}

/***/ }),

/***/ 1270:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1761)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1458),
  /* template */
  __webpack_require__(2071),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-1ce28daf",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1358:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  props: {
    lessonDate: {
      type: String,
      required: true
    },

    lessonEndDate: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      g: $,
      memberLessonList: null,
      memberLessonCount: null,
      cardCostAmountSum: null,
      viewMemberDlg: null,
      viewMemberId: null,
      exportFileUrl: null,
      exportDlg: null,
      coachList: null,
      queryCoachId: null
    };
  },

  created() {
    if (this.lessonDate) {
      this.queryMemberLessonList();
    }
  },

  methods: {
    queryMemberLessonList(page = null, isExport = null) {
      if (!page && !isExport) {
        this.memberLessonCount = null;
      }
      let args = {
        beginDate: this.lessonDate,
        needCardCostAmount: true,
        isExport: isExport,
        needLessonCoaches: true
      };
      if (this.lessonEndDate) {
        args.endDate = this.lessonEndDate;
      }
      if (isExport) {
        this.exportDlg = true;
      }
      if (!page && this.coachList && this.queryCoachId) {
        args.coachId = this.queryCoachId;
      }
      $.Req.service($.SvName.MEMBER_GROUP_LESSON_QUERY, args, ret => {
        if (isExport) {
          this.exportFileUrl = ret.fileurl;
        } else {
          this.memberLessonList = ret.memberLessonList;
          if (!page) {
            this.memberLessonCount = ret.count;
            this.cardCostAmountSum = ret.cardCostAmountSum;
            if (!this.coachList) this.coachList = ret.coachList;
          }
        }
      }, true);
    },

    viewMember(memberId) {
      this.$router.push('/member-base/' + memberId);
    },

    exportMemberLessonList() {
      this.queryMemberLessonList(null, true);
    }
  }
});

/***/ }),

/***/ 1456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stat_head_vue__ = __webpack_require__(979);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stat_head_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stat_head_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stat_staff_head_vue__ = __webpack_require__(1101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stat_staff_head_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__stat_staff_head_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { StatHead: __WEBPACK_IMPORTED_MODULE_0__stat_head_vue___default.a, StatStaffHead: __WEBPACK_IMPORTED_MODULE_1__stat_staff_head_vue___default.a },
  props: {
    statType: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      dateIdx: 0,
      showMoreDates: false,
      query: {
        beginDate: null,
        endDate: null
      },
      dateOptions: {
        disabledDate(date) {
          return date && date.valueOf() > Date.now();
        }
      },
      dateShortcuts: [],
      statLists: [[], [], []],
      statTitles: [null, '团课教练排名', '私教课教练排名'],
      statConf: [{ typeName: '上课次数', statType: 1, unitType: '次', bgcolor: '#F5B400' }, { typeName: '学员数', statType: 2, unitType: '人', bgcolor: '#36CB36' }, { typeName: '平均得分', statType: 3, unitType: '分', bgcolor: '#01BFC6' }],
      loadings: [false, false, false]
    };
  },

  created() {
    this.initDateShortCuts();
    this.statByDateShortcuts(0);
  },

  methods: {
    initDateShortCuts() {
      let today = new Date();
      let date = new Date();
      date.setDate(1);
      let year, month, beginDate, endDate;
      for (let i = 0; i < 6; i++) {
        year = date.getFullYear();
        month = date.getMonth();
        beginDate = new Date(date.getFullYear(), month, 1);
        if (i === 0) {
          endDate = new Date(today);
        } else {
          endDate = new Date(date.getFullYear(), month + 1, 0);
        }

        this.dateShortcuts.push({
          name: '{0}年{1}月'.format(date.getFullYear(), month + 1),
          beginDate: beginDate,
          endDate: endDate
        });

        date.setMonth(month - 1);
      }
      this.dateShortcuts.push({
        name: today.getFullYear() + '年',
        beginDate: new Date(today.getFullYear(), 0, 1),
        endDate: today
      });
    },

    statByDateShortcuts(idx) {
      this.dateIdx = idx;
      this.showMoreDates = false;
      let d = this.dateShortcuts[idx];
      this.query.beginDate = new Date(d.beginDate);
      this.query.endDate = new Date(d.endDate);
      this.statCoach();
    },

    statCoach() {
      for (let i = 0; i < 3; i++) {
        this.callCoachStat(i + 1, ret => {
          this.$set(this.statLists, i, ret.coachStatList);
        });
      }
    },

    callCoachStat(statType, callback) {
      let args = {
        coachType: this.statType - 1,
        statType: statType,
        beginDate: this.query.beginDate,
        endDate: this.query.endDate
      };
      this.$set(this.loadings, statType - 1, true);
      $.Req.service($.SvName.COACH_STAT, args, ret => {
        this.$set(this.loadings, statType - 1, false);
        callback(ret);
      });
    },

    toggleMoreDates() {
      this.showMoreDates = !this.showMoreDates;
    }

  }
});

/***/ }),

/***/ 1457:
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

/* harmony default export */ __webpack_exports__["default"] = ({
	components: {},
	props: {
		courseType: {
			type: Number,
			required: true
		}
	},
	data() {
		return {
			g: $,
			query: {
				beginDate: null,
				endDate: null
			},
			dateOptions: {
				disabledDate(date) {
					return date && date.valueOf() > Date.now();
				}
			},
			dateShortcuts: [],
			statLists: [[], [], []],

			loadings: [false, false, false],
			queryDateShourtcut: null,

			dateIdx: 0,
			statLessonDateIdx: 0,
			showMoreStatLessonDate: false,
			showMoreDates: false,

			dlgView: {
				inputShow: false
			},
			checkDlgViewName: '',
			minDate: new Date(1940, 0, 1),
			maxDate: new Date(),
			currentDate: new Date(),
			thisYear: new Date().getFullYear(),
			thisMonth: new Date().getMonth(),
			thisDate: new Date().getDate(),
			changeDate: new Date(),
			endDate: null,
			beginDate: null,
			maxDatePicker: null,
			minDatePicker: null,

			active: 0,
			tabData: [{ name: '上课次数', active: 1, unitType: '次' }, { name: '学员人数', active: 2, unitType: '人' }, { name: '平均得分', active: 3, unitType: '分' }, { name: '签到次数', active: 4, unitType: '次' }]
		};
	},

	created() {
		this.initDateShortCuts();
		this.statByDateShortcuts(0);
		this.statCoach();
		if (this.courseType == 2) {
			this.tabData = [{ name: '上课次数', active: 1, unitType: '次' }, { name: '学员人数', active: 2, unitType: '人' }, { name: '平均得分', active: 3, unitType: '分' }];
		}
	},

	methods: {
		confirmDatePiker(name) {
			let date = { year: null, month: null, date: null, hr: null, min: null, sec: null };
			date.year = this.currentDate.getFullYear();
			date.month = this.currentDate.getMonth() < 9 ? '0' + (this.currentDate.getMonth() + 1) : this.currentDate.getMonth() + 1;
			date.date = this.currentDate.getDate() < 10 ? '0' + this.currentDate.getDate() : this.currentDate.getDate();
			if (name === 'beginDate') {
				this.beginDate = date.year + '-' + date.month + '-' + date.date;
				this.query.beginDate = this.beginDate;
			} else if (name === 'endDate') {
				this.endDate = date.year + '-' + date.month + '-' + date.date;
				this.query.endDate = this.endDate;
			}

			this.dlgView.inputShow = false;
		},

		showInputDlg(name) {
			this.dlgView.inputShow = true;
			this.checkDlgViewName = name;
			if (this.currentDate && this[name]) {
				let date = this[name].split('-');
				this.currentDate = new Date(parseInt(date[0]), parseInt(date[1]) - 1, parseInt(date[2]));
			}
		},

		toggleMoreDates() {
			this.showMoreDates = !this.showMoreDates;
		},

		changeTab() {
			let tabName = this.tabData[this.active].active;
			$.Util.cookie.delete('tabNameActive');
		},
		//pc
		initDateShortCuts() {
			// 获取最近*个月的月份
			let today = new Date();
			let date = new Date();
			let year, month, beginDate, endDate;
			date.setDate(1);
			for (let i = 0; i < 3; i++) {
				year = date.getFullYear();
				month = date.getMonth();
				beginDate = new Date(date.getFullYear(), month, 1);
				if (i === 0) {
					endDate = new Date(today);
				} else {
					endDate = new Date(date.getFullYear(), month + 1, 0);
				}
				this.dateShortcuts.push({
					name: '{0}-{1}月'.format(date.getFullYear(), month + 1),
					beginDate: beginDate,
					endDate: endDate
				});
				date.setMonth(month - 1);
			}
			this.dateShortcuts.push({
				name: today.getFullYear() + '年',
				beginDate: new Date(today.getFullYear(), 0, 1),
				endDate: today
			});
		},

		statByDateShortcuts(idx) {
			this.dateIdx = idx;
			this.showMoreDates = false;
			let d = this.dateShortcuts[idx];
			this.beginDate = $.Util.formatDate(d.beginDate);
			this.endDate = $.Util.formatDate(d.endDate);
			this.query.beginDate = new Date(d.beginDate);
			this.query.endDate = new Date(d.endDate);
			this.statCoach();
		},

		statCoach() {
			for (let i = 0; i < 4; i++) {
				if (this.courseType === 2 && i === 3) continue;
				this.callCoachStat(i + 1, ret => {
					this.$set(this.statLists, i, ret.courseStatList);
				});
			}
		},

		callCoachStat(statType, callback) {
			let args = {
				courseType: this.courseType,
				statType: statType,
				beginDate: this.query.beginDate,
				endDate: this.query.endDate
			};
			this.$set(this.loadings, statType - 1, true);
			$.Req.service($.SvName.COURSE_STAT, args, ret => {
				this.$set(this.loadings, statType - 1, false);
				callback(ret);
			}, false, err => {
				this.$set(this.loadings, statType - 1, false);
				$.Dlg.error(err);
			});
		}

	}
});

/***/ }),

/***/ 1458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_table_table_vue__ = __webpack_require__(1202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_table_table_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_table_table_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stat_head_vue__ = __webpack_require__(979);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stat_head_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__stat_head_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_member_member_lesson_list_vue__ = __webpack_require__(2025);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_member_member_lesson_list_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__pages_member_member_lesson_list_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stat_course_vue__ = __webpack_require__(2037);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stat_course_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__stat_course_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { StatHead: __WEBPACK_IMPORTED_MODULE_1__stat_head_vue___default.a, MemberLessonList: __WEBPACK_IMPORTED_MODULE_2__pages_member_member_lesson_list_vue___default.a, CourseStat: __WEBPACK_IMPORTED_MODULE_3__stat_course_vue___default.a, qdTable: __WEBPACK_IMPORTED_MODULE_0__components_table_table_vue___default.a },
  props: {},
  data() {
    return {
      g: $,
      courseType: 1,
      plStatPermit: $.Util.hasRoleFunc($.Dict.RoleFunc.STAT_PRIVATE_LESSON.value),
      glStatPermit: $.Util.hasRoleFunc($.Dict.RoleFunc.STAT_GROUP_LESSON.value),
      query: {
        beginDate: null,
        endDate: null,
        dates: [],
        statBy: 1,
        dates2: []
      },
      dateOptions: {
        disabledDate(date) {
          return date && date.valueOf() > Date.now();
        }
      },
      columns: [{
        title: "日期",
        key: "lessonDate",
        fixed: "left",
        width: 100,
        slotName: "lessonDate"
      }, {
        title: "已上课次数",
        key: "lessonCnt",
        width: 123,
        iconTip: "指在课表中已有预约或签到的课时数"
      }, {
        title: "预约人次",
        key: "bookingCnt",
        width: 80
      }, {
        title: "签到人次",
        key: "checkinCnt",
        width: 80
      }, {
        title: "参与人数",
        key: "memberCnt",
        width: 107,
        iconTip: "指不重复的预约或签到人数"
      }, {
        title: "固定班级平均出勤率",
        key: "",
        width: 191,
        slotName: "class",
        iconTip: "AVG（每节固定班级课的出勤率），出勤率"
      }, {
        title: "会员卡消费折算金额",
        key: "cardCostFee",
        width: 191,
        slotName: "memberCar",
        iconTip: "汇总每个约课或签到会员的会员卡消费金额（期限卡根据日均费计算，次卡根据平均单次价计算）"
      }, {
        title: "明细",
        key: "",
        width: 81,
        slotName: "handler"
      }],
      personalTrainersColumns: [{ title: "教练", key: "name", width: 100, fixed: "left" }, {
        title: "总排课数",
        key: "",
        width: 70,
        slotName: "totalTimes"
      }, {
        title: "总课时费",
        key: "",
        width: 70,
        slotName: "totalFee"
      }, {
        title: "已消课数",
        key: "",
        width: 70,
        slotName: "usedTimes"
      }, {
        title: "已消课费用",
        key: "",
        width: 85,
        slotName: "usedFee"
      }, {
        title: "剩余课时数",
        key: "",
        width: 85,
        slotName: "usedTimes2"
      }, {
        title: "剩余课时费",
        key: "",
        width: 85,
        slotName: "residueTimes"
      }],
      dateShortcuts: [],
      statLists: [[], [], []],
      statTitles: ["团课排名", "私教课排名"],
      loadings: [false, false, false],
      showMoreDates: false,
      statLessonDate: [{ tit: "日统计", statBy: 1 }, { tit: "周统计", statBy: 2 }, { tit: "月统计", statBy: 3 }],
      dateIdx: 0,
      statLessonDateIdx: 0,
      showMoreStatLessonDate: false,
      dlgView: {
        inputShow: false,
        showTips: false
      },
      checkDlgViewName: "",
      minDate: new Date(1940, 0, 1),
      maxDate: new Date(),
      currentDate: new Date(),
      thisYear: new Date().getFullYear(),
      thisMonth: new Date().getMonth(),
      thisDate: new Date().getDate(),
      changeDate: new Date(),
      endDate: null,
      beginDate: null,
      limitDate: null,
      statInSum: {},
      statList: [],
      lessonSum: {},
      groupBy: "day",
      memberLessonListDlg: null,
      queryLessonBeginDate: null,
      queryLessonEndDate: null,
      memberLessonListDlgTit: "",
      shortcutsIdx: 0,
      createDateOption: {
        shortcuts: [{
          text: "最近一周",
          value() {
            let end = new Date();
            let start = new Date();
            start = start.setTime(start.getTime() - 3600 * 1000 * 24 * 6);
            return [start, end];
          }
        }, {
          text: "最近30天",
          value() {
            let end = new Date();
            let start = new Date();
            start = start.setTime(start.getTime() - 3600 * 1000 * 24 * 29);
            return [start, end];
          }
        }, {
          text: "最近60天",
          value() {
            let end = new Date();
            let start = new Date();
            start = start.setTime(start.getTime() - 3600 * 1000 * 24 * 59);
            return [start, end];
          }
        }, {
          text: "最近90天",
          value() {
            let end = new Date();
            let start = new Date();
            start = start.setTime(start.getTime() - 3600 * 1000 * 24 * 89);
            return [start, end];
          }
        }, {
          text: "最近180天",
          value() {
            let end = new Date();
            let start = new Date();
            start = start.setTime(start.getTime() - 3600 * 1000 * 24 * 179);
            return [start, end];
          }
        }]
      },
      dateTYepe: ["日期", "周数", "月份"],
      courseStatus: 1,

      tableList: [],
      tableTheadList: [],
      tableColsList: [],
      tableFixColNumber: 1,
      tableThMinWidth: 160,
      scrolledTop: [0],
      scrolledLeft: [0],
      zIndexTop: 0,
      zIndexLeft: 0,
      fixNumber: [],
      respsTableWid: null,
      respsTableFixHeadWid: null,
      tipsCont: "",
      plStat: {},
      plStatEndDate: null,
      plStatCardDatesType: null,
      privateCoachList: [],
      hasLoadCoachStat: false,
      plMcTermOfValid: []
    };
  },

  created() {
    this.initQuery();
    this.initDateShortCuts();

    if (this.glStatPermit) {
      this.statByDateShortcuts(0);
      this.statLessson(1);
      this.statGlByDateShortcuts(0);
      this.initTable();
    }
  },

  methods: {
    choseCourseType(t) {
      this.courseType = t;
      if (t == 2 && this.plStatPermit) {
        this.dateShortcuts = $.Util.getDateShortcuts(6, false);
        this.statPrivateLesson();
        this.plMcTermOfValid = [{ name: "不限制", id: 0 }, { name: "有效期内的卡", id: 1 }, { name: "过期的卡", id: 2 }, { name: "未设置期限的卡", id: 3 }];
        $.Req.queryCoachBase(2, coachList => {
          if (coachList) {
            this.privateCoachList = coachList;
            this.statCoachLessonCost();
          }
        });
      }
      this.initTable();
    },

    handleShotcuts(idx, valueFun) {
      this.shortcutsIdx = idx;
      let date = valueFun();
      this.query.dates2 = [date[0], date[1]];
      this.beginDate = $.Util.formatDate(date[0]);
      this.endDate = $.Util.formatDate(date[1]);
      // this.statLessson();
    },

    confirmDatePiker(name) {
      let date = {
        year: null,
        month: null,
        date: null,
        hr: null,
        min: null,
        sec: null
      };
      date.year = this.currentDate.getFullYear();
      date.month = this.currentDate.getMonth() < 9 ? "0" + (this.currentDate.getMonth() + 1) : this.currentDate.getMonth() + 1;
      date.date = this.currentDate.getDate() < 10 ? "0" + this.currentDate.getDate() : this.currentDate.getDate();
      if (name === "beginDate") {
        this.beginDate = date.year + "-" + date.month + "-" + date.date;
        this.query.dates2[0] = this.beginDate;
      } else if (name === "endDate") {
        this.endDate = date.year + "-" + date.month + "-" + date.date;
        this.query.dates2[1] = this.endDate;
      } else if (name === "limitDate") {
        this.limitDate = date.year + "-" + date.month + "-" + date.date;
        this.plStatEndDate = this.limitDate;
        this.statPrivateLesson();
      }

      this.dlgView.inputShow = false;
    },

    showInputDlg(name) {
      this.dlgView.inputShow = true;
      this.checkDlgViewName = name;
      if (this.currentDate && this[name]) {
        let date = this[name].split("-");
        this.currentDate = new Date(parseInt(date[0]), parseInt(date[1]) - 1, parseInt(date[2]));
      }
    },

    initDateShortCuts() {
      let today = new Date();
      let date = new Date();
      let year, month, beginDate, endDate;
      for (let i = 0; i < 6; i++) {
        year = date.getFullYear();
        month = date.getMonth();
        beginDate = new Date(date.getFullYear(), month, 1);
        if (i === 0) {
          endDate = new Date(today);
        } else {
          endDate = new Date(date.getFullYear(), month + 1, 0);
        }

        this.dateShortcuts.push({
          name: "{0}年{1}月".format(date.getFullYear(), month + 1),
          beginDate: beginDate,
          endDate: endDate
        });

        date.setMonth(month - 1);
      }
    },

    statByDateShortcuts(idx) {
      this.dateIdx = idx;
      this.showMoreDates = false;
      let d = this.dateShortcuts[idx];
      this.query.beginDate = new Date(d.beginDate);
      this.query.endDate = new Date(d.endDate);
      this.statCoach();
    },

    statCoach() {
      for (let i = 0; i < 4; i++) {
        if (this.courseType === 2 && i === 3) continue;
        this.callCoachStat(i + 1, ret => {
          this.$set(this.statLists, i, ret.courseStatList);
        });
      }
    },

    callCoachStat(statType, callback) {
      let args = {
        courseType: this.courseType,
        statType: statType,
        beginDate: this.query.beginDate,
        endDate: this.query.endDate
      };
      this.$set(this.loadings, statType - 1, true);
      $.Req.service($.SvName.COURSE_STAT, args, ret => {
        this.$set(this.loadings, statType - 1, false);
        callback(ret);
      });
    },

    toggleMoreDates() {
      this.showMoreDates = !this.showMoreDates;
    },

    initTable() {
      let _this = this;
      let timer = null;

      if (this.courseType == 1) {
        this.tableTheadList = [{ title: this.dateTYepe[this.query.statBy - 1], iconTip: "" }, { title: "已上课次数", iconTip: "指在课表中已有预约或签到的课时数" }, { title: "预约人次", iconTip: "" }, { title: "签到人次", iconTip: "" }, { title: "参与人数", iconTip: "指不重复的预约或签到人数" }, {
          title: "固定班级平均出勤率",
          iconTip: "AVG（每节固定班级课的出勤率），出勤率=签到人数 / 固定班级课学员数"
        }, {
          title: "会员卡消费折算金额",
          iconTip: "汇总每个约课或签到会员的会员卡消费金额（期限卡根据日均费计算，次卡根据平均单次价计算）"
        }, { title: "明细", iconTip: "" }];
      } else {
        this.tableTheadList = [{ title: "教练", iconTip: "" }, { title: "总排课数", iconTip: "" }, { title: "总课时费", iconTip: "" }, { title: "已消课数", iconTip: "" }, { title: "已消课费用", iconTip: "" }, { title: "剩余课时数", iconTip: "" }, { title: "剩余课时费", iconTip: "" }];
      }
      let tableNum = this.courseType - 1;
    },

    showTipDlg(idx, val) {
      this.dlgView.showTips = true;
      if (idx != 6) {
        this.tipsCont = this.tableTheadList[idx].iconTip;
      } else {
        this.tipsCont = '<div class="remark "><div class="tit">说明：</div><ul><li>1、消耗卡次数，是指使用私教次卡消课的总次数</li><li>2、剩余卡次数，是指会员卡尚未消耗的次数</li><li>3、消耗课时费，是估算值，消耗卡次数 x 平均每次课时费</li></ul></div>';
      }
    },

    //pc
    initQuery() {
      let endDate = new Date();
      let beginDate = new Date();
      beginDate.setDate(1);
      this.query.dates = [beginDate, endDate];
      this.query.dates2 = [beginDate, endDate];
    },

    statLessson(statBy) {
      if (!this.query.dates2 || !this.query.dates2[0] || !this.query.dates2[1]) {
        $.Dlg.error("请设置正确的日期范围");
        return;
      }

      if (statBy) {
        this.query.statBy = statBy;
        this.statLessonDateIdx = statBy - 1;
        if (statBy === 3) {
          let date = Date.new(this.query.dates2[0]);
          date.setMonth(0);
          this.query.dates2 = [date, this.query.dates2[1]];
        } else {
          this.initQuery();
        }
      }
      let args = {
        statBy: this.query.statBy,
        beginDate: Date.new(this.query.dates2[0]),
        endDate: Date.new(this.query.dates2[1]),
        needCardCostFee: true
      };
      if (args.statBy === 1 && $.Util.calcDateDiffDays(this.query.dates2[1], this.query.dates2[0]) > 180) {
        $.Dlg.error("日期范围不能超过180天");
        return;
      }
      this.showMoreStatLessonDate = false;
      $.Req.service($.SvName.GROUP_LESSON_STAT, args, ret => {
        this.statList = ret.attendanceStatList;
        this.statList.unshift({
          lessonDate: "合计",
          lessonCnt: ret.sumOfLessonCnt,
          bookingCnt: ret.sumOfBookingCnt,
          checkinCnt: ret.sumOfCheckinCnt,
          memberCnt: ret.sumOfMemberCnt,
          cardCostFee: ret.sumOfCardCostFee
        });
      }, true);
      this.initTable();
    },

    viewMemberLessonListByDate(lessonDate) {
      this.queryLessonBeginDate = lessonDate;
      this.queryLessonEndDate = lessonDate;
      this.memberLessonListDlgTit = $.Util.formatDate(lessonDate);
      this.memberLessonListDlg = true;
    },

    viewMemberLessonListByMonth(lesonMonth) {
      let beginDate = Date.new($.Util.formatMonth(lesonMonth) + "-1");
      let endDate = new Date(beginDate.getFullYear(), beginDate.getMonth() + 1, 0);
      this.queryLessonBeginDate = $.Util.formatDate(beginDate);
      this.queryLessonEndDate = $.Util.formatDate(endDate);
      this.memberLessonListDlgTit = $.Util.formatMonth(lesonMonth) + "月";
      this.memberLessonListDlg = true;
    },

    statGlByDateShortcuts(idx) {
      this.queryDateShourtcut = idx;
      this.query.dates[0] = this.dateShortcuts[idx].beginDate;
      this.query.dates[1] = this.dateShortcuts[idx].endDate;
      this.statGroupLessonInSum();
    },

    statGroupLessonInSum() {
      if (!this.query.dates || !this.query.dates[0] || !this.query.dates[1]) {
        $.Dlg.error("请设置正确的日期范围");
        return;
      }
      let args = {
        beginDate: Date.new(this.query.dates[0]),
        endDate: Date.new(this.query.dates[1])
      };
      $.Req.service($.SvName.GROUP_LESSON_STAT, args, ret => {
        if (ret.attendanceStatList) {
          this.statInSum = ret.attendanceStatList[0];
        } else {
          this.statInSum = {
            lessonCnt: 0,
            bookingCnt: 0,
            checkinCnt: 0,
            memberCnt: 0
          };
        }
      }, true);
    },

    //私教课统计
    statPrivateLesson() {
      let args = {
        cardDatesType: this.plStatCardDatesType
      };
      if (this.plStatEndDate) args.endDate = this.plStatEndDate;
      $.Req.service($.SvName.PRIVATE_LESSON_STAT, args, ret => {
        this.plStat = ret;
        if (this.plStat.totalTimes > 0) {
          this.plStat.costTimesRate = (100 * this.plStat.costTimes / this.plStat.totalTimes).toFixed(1);
          this.plStat.costFeeRate = (100 * this.plStat.costFee / this.plStat.totalAmount).toFixed(1);
        } else {
          this.plStat.costTimesRate = 0;
          this.plStat.costFeeRate = 0;
        }
      });
    },

    statCoachLessonCost() {
      let args = {
        needStatTotal: true
      };
      $.Req.service($.SvName.COACH_LESSON_COST_STAT, args, ret => {
        let map = {};
        for (let s of ret.totalLessonStatList) {
          map[s.coachId] = s;
        }
        for (let c of this.privateCoachList) {
          this.$set(c, "stat", map[c.staffId]);
        }
        this.hasLoadCoachStat = true;
      });
    }
  }
});

/***/ }),

/***/ 1459:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      g: window.$,
      dateIdx: 0,
      // showMoreDates: false,
      countStatChartData: {
        xdata: [],
        ydata: []
      },
      dateShortcuts: [{
        name: "最近30天",
        statType: 1
      }, {
        name: "最近4周",
        statType: 2
      }, {
        name: "最近半年 ",
        statType: 3
      }]
    };
  },

  props: {
    dataList: {
      type: Array,
      required: true
    },
    menu: {
      type: String,
      default: "by-day",
      required: false
    }
  },
  computed: {
    // countStatChartOption() {
    //   return ;
    // },
  },
  methods: {
    resetChartByRange() {
      this.showMoreDates = false;
      this.dateIdx = idx;
      let d = this.dateShortcuts[idx];
      this.dates = [new Date(d.beginDate), new Date(d.endDate)];
      //请求数据
      // this.loadMemberCardPaymentCntStat(null);
    },
    // toggleSwitchRange() {
    //   this.showMoreDates = !this.showMoreDates;
    // },
    /**
     * 展开收起
     */
    expandCollapse(keyId, type) {
      let obj = {
        keyId: keyId,
        menu: this.menu,
        type: this.menu == "by-day" ? 1 : this.menu == "by-week" ? 2 : 3,
        status: type
      };
      this.$emit("expandCollapse", obj);
    }
  }
});

/***/ }),

/***/ 1460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_user_user_shops_vue__ = __webpack_require__(1091);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_user_user_shops_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__pages_user_user_shops_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { UserShops: __WEBPACK_IMPORTED_MODULE_0__pages_user_user_shops_vue___default.a },

  props: {
    statObject: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      g: window.$,
      menusPopup: false,
      statObjects: {
        member: {
          icon: 'iconmember',
          title: '会员统计',
          path: '/shop-stat-member'
        },
        staff: {
          icon: 'iconyuangongyeji',
          title: '员工业绩统计',
          path: '/shop-stat-staff'
        },
        course: {
          icon: 'iconcourse',
          title: '课程统计',
          path: '/shop-stat-course'
        },
        card: {
          icon: 'iconcard-3',
          title: '会员卡统计',
          path: '/shop-stat-card'
        },
        revenue: {
          icon: 'iconrevenue',
          title: '收支统计',
          path: '/shop-stat-revenue'
        },
        report: {
          icon: 'iconreport',
          title: '营业报表',
          path: '/shop-stat-report'
        }
      },
      userShopsDlg: null,
      shopList: $.data.shopList
    };
  },

  created() {},

  methods: {
    back() {
      history.go(-1);
    },

    togglerPopup() {
      this.menusPopup = !this.menusPopup;
    }
  }
});

/***/ }),

/***/ 1461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stat_member_head_vue__ = __webpack_require__(1071);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stat_member_head_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stat_member_head_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



const PAGE_SIZE = 50;
/* harmony default export */ __webpack_exports__["default"] = ({
	components: { StatMemberHead: __WEBPACK_IMPORTED_MODULE_0__stat_member_head_vue___default.a },
	props: {
		statType: {
			type: Number,
			required: true
		}
	},
	data() {
		return {
			g: $,
			statTitles: ['', '入场签到排名', '积分排名', '上课排名', '会员卡充值排名'],
			statTypes: ['', '入场次数', '积分', '上课次数', '充值金额'],
			statTypeUnits: ['', '次', '分', '次', '元'],
			query: {
				beginDate: null,
				endDate: null
			},
			statList: [],
			totalCount: 0,
			selectMemberId: 0,
			dateShortcuts: [],
			dateIdx: 0,
			queryPage: null,
			showMoreDates: false
		};
	},

	created() {
		this.initQuery();
		this.initDateShortCuts();
		this.statMember();
	},

	methods: {
		initQuery() {
			this.query.endDate = new Date();
			this.query.beginDate = new Date(this.query.endDate.getTime() - 30 * 3600 * 24 * 1000);
		},
		initDateShortCuts() {
			this.dateShortcuts.push({
				name: '最近30天',
				beginDate: this.query.beginDate,
				endDate: this.query.endDate
			});

			// 获取最近3个月的月份
			let today = new Date();
			let date = new Date();
			let year, month, beginDate, endDate;
			for (let i = 0; i < 3; i++) {
				year = date.getFullYear();
				month = date.getMonth();
				beginDate = new Date(date.getFullYear(), month, 1);
				if (i === 0) {
					endDate = new Date(today);
				} else {
					endDate = new Date(date.getFullYear(), month + 1, 0);
				}

				this.dateShortcuts.push({
					name: '{0}年{1}月'.format(date.getFullYear(), month + 1),
					beginDate: beginDate,
					endDate: endDate
				});

				date.setMonth(month - 1);
			}
			this.dateShortcuts.push({
				name: today.getFullYear() + '年',
				beginDate: new Date(today.getFullYear(), 0, 1),
				endDate: today
			});
		},
		statMemberByDateShortcuts(idx) {
			this.showMoreDates = false;
			this.dateIdx = idx;
			let d = this.dateShortcuts[idx];
			this.query.beginDate = new Date(d.beginDate);
			this.query.endDate = new Date(d.endDate);
			this.statMember(null);
		},

		toggleMoreDates() {
			this.showMoreDates = !this.showMoreDates;
		},

		statMember(page = null) {
			let args = {
				statType: this.statType,
				page: page,
				beginDate: this.query.beginDate,
				endDate: this.query.endDate
			};
			this.loading = true;
			$.Req.service($.SvName.MEMBER_STAT, args, ret => {
				this.loading = false;
				this.statList = ret.memberStatList;
				let i = 1;
				for (let s of this.statList) {
					s.order = i + PAGE_SIZE * (page !== null ? page - 1 : 0);

					let val = null;
					if (this.statType === 1) val = s.entryCheckins;else if (this.statType === 2) val = s.points;else if (this.statType === 3) val = s.lessonTimes;else if (this.statType === 4) val = s.cardPayment.toFixed(0);
					s.val = val;
					i++;
				}
				if (ret.count !== null) {
					this.totalCount = ret.count;
				}
			}, true);
		},

		changePageNo(page) {
			this.queryPage = page;
			this.statMember(page);
			window.scroll(0, 0);
		},

		viewMember(memberId) {
			this.$router.push('/member-base/' + memberId);
		}
	}
});

/***/ }),

/***/ 1462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__member_member_base_vue__ = __webpack_require__(963);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__member_member_base_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__member_member_base_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



const PAGE_SIZE = 50;
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    statType: {
      type: Number,
      required: true
    }
  },
  components: { MemberBase: __WEBPACK_IMPORTED_MODULE_0__member_member_base_vue___default.a },
  data() {
    return {
      g: $,
      columnNames: ['', '入场签到次数', '积分', '上课次数', '会员卡充值金额', '出勤天数'],
      query: {
        beginDate: null,
        endDate: null,
        onlyOriginalMember: null,
        includeAllShops: null,
        cardIdList: null,
        includeGl: true,
        includePl: true,
        duration: null
      },
      showMemberPhoto: false,
      statList: [],
      totalCount: 0,
      selectMemberId: 0,
      member: null,
      selectMemberName: null,
      viewMemberDlg: false,
      dateShortcuts: [],
      statTypeUnitName: '',
      cardList: null,
      dateIdx: 0,
      queryPage: null,
      showMoreDates: false,
      dlgView: {
        inputShow: false
      },
      checkDlgViewName: '',
      minDate: new Date(1940, 0, 1),
      maxDate: new Date(),
      currentDate: new Date(),
      thisYear: new Date().getFullYear(),
      changeDate: new Date(),
      endDate: null,
      beginDate: null,
      maxDatePicker: null,
      minDatePicker: null,
      todayDate: '',

      tableTheadList: [],
      tableFixColNumber: 2,
      tableThMinWidth: 80,
      scrolledTop: 0,
      scrolledLeft: 0,
      zIndexTop: 0,
      zIndexLeft: 0,
      fixNumber: [],
      respsTableWid: null,
      respsTableFixHeadWid: null
    };
  },

  created() {
    this.initQuery();
    this.initDateShortCuts();
    this.statMember();
    if (this.statType === 1) {
      $.Req.service($.SvName.CARD_QUERY, {}, ret => {
        this.cardList = ret.cardList;
      });
    }
    for (let i = 0; i < this.tableFixColNumber; i++) {
      this.fixNumber.push(i);
    }
    this.initTable();
  },

  methods: {
    confirmDatePiker(name) {
      let date = { year: null, month: null, date: null, hr: null, min: null, sec: null };
      date.year = this.currentDate.getFullYear();
      date.month = this.currentDate.getMonth() < 9 ? '0' + (this.currentDate.getMonth() + 1) : this.currentDate.getMonth() + 1;
      date.date = this.currentDate.getDate() < 10 ? '0' + this.currentDate.getDate() : this.currentDate.getDate();
      if (name === 'beginDate') {
        this.beginDate = date.year + '-' + date.month + '-' + date.date;
        this.query.beginDate = this.beginDate;
      } else if (name === 'endDate') {
        this.endDate = date.year + '-' + date.month + '-' + date.date;
        this.query.endDate = this.endDate;
      } else if (name === 'beginMonth') {
        let oDate = new Date();
        this.year = oDate.getFullYear();
        this.month = oDate.getMonth();
        if (this.maxDate != null) {
          if (this.changeDate.getFullYear() > this.maxDate.year) {
            alert('抱歉，您选择的时间不支持查询');
            return false;
          } else if (this.changeDate.getFullYear() == this.maxDate.year && this.currentDate.getMonth() > this.maxDate.month) {
            alert('抱歉，您选择的时间不支持查询');
            return false;
          }
        }
        oDate = this.changeDate;
        this.initDate(oDate);
        this.statMemberByDateShortcuts(oDate);
      }

      this.dlgView.inputShow = false;
    },

    initDate(time, callBack) {
      let oDate = time != undefined && time != '' ? time : new Date();
      this.year = oDate.getFullYear();
      this.month = oDate.getMonth();
      this.getMonthPrefix(this.month, this.year);
    },

    showInputDlg(name) {
      this.dlgView.inputShow = true;
      this.checkDlgViewName = name;
      if (name !== 'beginMonth') {
        if (this.currentDate && this[name]) {
          let date = this[name].split('-');
          this.currentDate = new Date(parseInt(date[0]), parseInt(date[1]) - 1, parseInt(date[2]));
        }
      }
    },

    getMonthPrefix(month, year) {
      if (month < 9) {
        this.todayDate = year + '年0' + (month + 1) + '月';
      } else {
        this.todayDate = year + '年' + (month + 1) + '月';
      }
    },

    getColumnValue() {
      this.changeDate = this.currentDate;
    },

    showDatePiker() {
      this.dlgView.inputShow = false;
    },

    initTable() {
      let _this = this;
      let timer = null;
      this.tableTheadList = [{ title: '排名' }, { title: '会员' }, { title: _this.columnNames[_this.statType] }, { title: '手机号' }, { title: '性别' }, { title: '注册日期' }];
      if (this.$refs.respsTable) {
        document.getElementById('respsTable').scrollTop = 0;
        document.getElementById('respsTable').scrollLeft = 0;
        this.scrolledTop = 0;
        this.scrolledLeft = 0;
      }
      timer = setTimeout(() => {
        this.$nextTick(() => {
          let tableTh = document.getElementById('table-th');
          if (tableTh) {
            let tableThs = tableTh.children;
            this.respsTableWid = tableTh.clientWidth;
            let tableFixHeadTh = document.getElementById('table-fix-head-th');
            let tableFixHeadThs = tableFixHeadTh.children;
            let tableFixColTd = document.getElementById('table-fix-col-td');
            let tableFixColTds = tableFixColTd.children;
            let tableFixTh = document.getElementById('table-fix-th');
            let tableFixThs = tableFixTh.children;
            if (tableFixHeadTh) {
              for (let i = 0; i < tableThs.length - 1; i++) {
                tableFixHeadThs[i].style.width = tableThs[i].offsetWidth + 'px';
                if (tableFixColTds[i]) tableFixColTds[i].style.width = tableThs[i].offsetWidth + 'px';
                if (tableFixThs[i]) tableFixThs[i].style.width = tableThs[i].offsetWidth + 'px';
              }
            }
            document.getElementById('respsTable').addEventListener('scroll', () => {
              if (this.$refs.respsTable) {
                this.scrolledTop = this.$refs.respsTable.scrollTop;
                this.scrolledLeft = this.$refs.respsTable.scrollLeft;
              }
            });
          }
        });
      }, 1000);
    },

    showMemHead() {
      this.showMemberPhoto = !this.showMemberPhoto;
      this.statMember();
      this.initTable();
    },

    //pc代码

    initQuery(time) {
      this.query.endDate = new Date();
      this.query.beginDate = new Date(this.query.endDate.getTime() - 30 * 3600 * 24 * 1000);
      let oDate = new Date();
      this.year = oDate.getFullYear();
      this.month = oDate.getMonth();
      this.maxDatePicker = new Date(this.year, this.month);
      this.minDatePicker = new Date(this.year, this.month - 2);
      this.getMonthPrefix(this.month, this.year);
    },

    initDateShortCuts() {
      this.dateShortcuts.push({
        name: '最近30天',
        beginDate: this.query.beginDate,
        endDate: this.query.endDate
      });

      // 获取最近3个月的月份
      let today = new Date();
      let date = new Date();
      let year, month, beginDate, endDate;
      for (let i = 0; i < 3; i++) {
        year = date.getFullYear();
        month = date.getMonth();
        beginDate = new Date(date.getFullYear(), month, 1);
        if (i === 0) {
          endDate = new Date(today);
        } else {
          endDate = new Date(date.getFullYear(), month + 1, 0);
        }

        this.dateShortcuts.push({
          name: '{0}年{1}月'.format(date.getFullYear(), month + 1),
          beginDate: beginDate,
          endDate: endDate
        });

        date.setMonth(month - 1);
      }
      this.dateShortcuts.push({
        name: today.getFullYear() + '年',
        beginDate: new Date(today.getFullYear(), 0, 1),
        endDate: today
      });
    },

    statMemberByDateShortcuts(oDate) {
      let today = new Date();
      let date = oDate;
      let beginDate, endDate;
      let month = date.getMonth();
      beginDate = new Date(date.getFullYear(), month, 1);
      if (today.getMonth() === oDate.getMonth() && today.getFullYear() === oDate.getFullYear()) {
        endDate = new Date(today);
      } else {
        endDate = new Date(date.getFullYear(), month + 1, 0);
      }

      this.query.beginDate = new Date(beginDate);
      this.query.endDate = new Date(endDate);
      this.statMember(null);
    },

    statMember(page = null) {
      if (!page) this.totalCount = null;
      let args = {
        statType: this.statType,
        page: page,
        beginDate: this.query.beginDate,
        endDate: this.query.endDate
      };
      if (this.statType === 1) {
        // 入场签到
        args.onlyOriginalMember = this.query.onlyOriginalMember;
        args.includeAllShops = this.query.includeAllShops;
        args.cardIdList = this.query.cardIdList;
        if (this.query.duration) {
          args.durationBegin = this.query.duration;
        }
      } else if (this.statType === 3) {
        // 上课排名
        if (!this.query.includeGl && !this.query.includePl) {
          $.Dlg.error('请至少选择一种上课类型');
          return;
        }
        args.includeGl = this.query.includeGl;
        args.includePl = this.query.includePl;
      }
      $.Req.service($.SvName.MEMBER_STAT, args, ret => {
        this.statList = ret.memberStatList;
        let i = 1;
        if (this.statList) {
          for (let s of this.statList) {
            let order = i + PAGE_SIZE * (page !== null ? page - 1 : 0);
            s.order = '<span class="theme-font-color">{0}</span>'.format(order);

            let val = null;
            if (this.statType === 1) val = s.entryCheckins;else if (this.statType === 2) val = s.points;else if (this.statType === 3) val = s.lessonTimes;else if (this.statType === 4) val = s.cardPayment;else if (this.statType === 5) val = s.checkinDays;
            if (val) {
              s.valDesc = '<span class="">{0}</span>  {1}'.format(val, this.statTypeUnitName);
            } else {
              s.valDesc = '';
            }
            i++;
          }
        }

        if (!page) {
          this.totalCount = ret.count;
        } else {
          window.scrollTo(0, 0);
        }
      }, true, err => {
        $.Dlg.error(err);
      });
    },

    changePageNo(page) {
      this.queryPage = page;
      this.statMember(page);
      window.scroll(0, 0);
    },

    viewMember(m) {
      this.selectMemberName = m.name;
      this.selectMemberId = m.memberId;
      this.member = m;
      this.viewMemberDlg = true;
    },

    handleQueryBtn() {
      this.statMember(null);
    }
  }
});

/***/ }),

/***/ 1463:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    statType: {
      type: Number,
      required: true
    }
  },

  data() {
    return {
      active: 0,
      tabData: [{ name: '概要' }, { name: '入场' }, { name: '积分' }, { name: '上课' }, { name: '会员卡' }, { name: '出勤排名' }, { name: '来源' }, { name: '私教课' }, { name: '更多统计' }]
    };
  },

  created() {
    this.active = this.statType;
  },

  methods: {
    changeTab() {
      switch (this.active) {
        case 0:
          this.$router.push('/shop-stat-member');
          break;
        case 1:
          this.$router.push('/shop-stat-member-entry');
          break;
        case 2:
          this.$router.push('/shop-stat-member-points');
          break;
        case 3:
          this.$router.push('/shop-stat-member-lesson');
          break;
        case 4:
          this.$router.push('/shop-stat-member-payment');
          break;
        case 5:
          this.$router.push('/shop-stat-member-checkin-days');
          break;
        case 6:
          this.$router.push('/shop-stat-member-source');
          break;
        case 7:
          this.$router.push('/shop-stat-member-private-lesson');
          break;
        case 8:
          this.$router.push('/shop-stat-member-more');
          break;
      }

      // <span :class="{'theme-font-color theme-tab-bor-bottom': statType === 1}" @click="$router.push('/shop-stat-member-entry')">入场</span>
      //     <span :class="{'theme-font-color theme-tab-bor-bottom': statType === 2}" @click="$router.push('/shop-stat-member-points')">积分</span>
      //     <span :class="{'theme-font-color theme-tab-bor-bottom': statType === 3}" @click="$router.push('/shop-stat-member-lesson')">上课</span>
      //     <span :class="{'theme-font-color theme-tab-bor-bottom': statType === 4}" @click="$router.push('/shop-stat-member-payment')">会员卡</span>
      //     <span :class="{'theme-font-color theme-tab-bor-bottom': statType === 5}" @click="$router.push('/shop-stat-member-checkin-days')">出勤排名</span>
      //     <span :class="{'theme-font-color theme-tab-bor-bottom': statType === 6}" @click="$router.push('/shop-stat-member-source')">来源</span>
      //     <span :class="{'theme-font-color theme-tab-bor-bottom': statType === 7}" @click="$router.push('/shop-stat-member-private-lesson')">私教课</span>
      //     <span :class="{'theme-font-color theme-tab-bor-bottom': statType === 8}" @click="$router.push('/shop-stat-member-more')">更多统计</span>
    }
  }
});

/***/ }),

/***/ 1464:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    statType: {
      type: Number,
      required: true
    }
  },

  data() {
    return {};
  },

  created() {},

  methods: {}
});

/***/ }),

/***/ 1465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stat_head_vue__ = __webpack_require__(979);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stat_head_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stat_head_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { StatHead: __WEBPACK_IMPORTED_MODULE_0__stat_head_vue___default.a },

  computed: {
    chartOption() {
      return {
        textStyle: {
          color: this.themeFontColor
        },
        grid: { x: 45, y: 30, x2: 30, y2: 20 },
        legend: {
          data: ['会籍卡', '私教卡', '团课卡']
        },

        tooltip: {
          trigger: 'axis',
          formatter: function (a) {
            if (!a || a.length === 0) return '';

            let elements = [];
            for (let e of a) {
              elements.push('{0}：￥{1}'.format(e.seriesName, e.value * 1000));
            }
            return a[0].name + '<br>' + elements.join('<br>');
          }
        },
        calculable: false,
        xAxis: [{
          padding: 1,
          type: 'category',
          boundaryGap: false,
          data: this.chartData.xdata
        }],
        yAxis: [{
          type: 'value',
          axisLabel: {
            formatter: '{value} k'
          }
        }],
        series: [{
          name: '会籍卡',
          type: 'line',
          data: this.chartData.membCardAmtList,
          itemStyle: {
            normal: {
              color: "#F24B52"
            }
          },
          lineStyle: {
            normal: {
              color: "#F24B52"
            }
          }
        }, {
          name: '私教卡',
          type: 'line',
          data: this.chartData.pcCardAmtList,
          itemStyle: {
            normal: {
              color: "#5FD60F"
            }
          },
          lineStyle: {
            normal: {
              color: "#5FD60F"
            }
          }
        }, {
          name: '团课卡',
          type: 'line',
          data: this.chartData.gcCardAmtList,
          itemStyle: {
            normal: {
              color: "#6AB2FF"
            }
          },
          lineStyle: {
            normal: {
              color: "#6AB2FF"
            }
          }
        }]

      };
    }

  },

  data() {
    return {
      showDlg: false,
      dateBegin: null,
      dateEnd: null,
      statDataList: [],
      themeFontColor: '',
      chartData: {
        xdata: [],
        membCardAmtList: [],
        gcCardAmtList: [],
        pcCardAmtList: []
      },
      statQuery: {
        statType: 1,
        dates: [null, null]
      },
      dlgView: {
        inputShow: false
      },
      checkDlgViewName: '',
      minDate: new Date(1940, 0, 1),
      maxDate: new Date(),
      currentDate: new Date(),
      beginDate: null,
      endDate: null,
      thisYear: new Date().getFullYear()
    };
  },
  created() {
    this.initQuery();
    this.loadStat($.Dict.DateStatType.BY_DAY);
    this.themeChange();
  },
  methods: {
    initQuery() {
      let endDate = new Date();
      let beginDate = new Date(endDate.getTime() - 31 * 3600 * 24 * 1000);
      this.statQuery.dates = [beginDate, endDate];
      this.statQuery.dates = [beginDate, endDate];
      this.dateBegin = $.Util.formatDate(beginDate);
      this.dateEnd = $.Util.formatDate(endDate);
    },

    themeChange() {
      let themeFontColor = document.getElementsByTagName("body")[0].className;
      if (themeFontColor == 'theme-black') {
        this.themeFontColor = '#fff';
      }
    },
    loadStat(statType) {
      this.statQuery.statType = parseInt(statType);
      if (statType !== 3) {
        if (!this.statQuery.dates[0] || !this.statQuery.dates[1]) {
          $.Dlg.error('请输入完整的日期范围。');
          return;
        }
      }

      if (statType === 2) {
        let beginDate = this.statQuery.dates[0];
        let endDate = this.statQuery.dates[1];
        if (beginDate.getFullYear() !== endDate.getFullYear()) {
          beginDate.setFullYear(endDate.getFullYear());
          beginDate.setMonth(0);
          beginDate.setDate(1);
        }
      }
      let args = {
        statType: statType,
        beginDate: this.statQuery.dates[0],
        endDate: this.statQuery.dates[1]
      };

      $.Req.service($.SvName.CARD_AMOUNT_STAT, args, ret => {
        let membCardAmtMap = {},
            pcCardAmtMap = {},
            gcCardAmtMap = {},
            dateid;
        let xdata = [],
            membCardAmtList = [],
            pcCardAmtList = [],
            gcCardAmtList = [];
        this.statDataList = [];
        if (statType === 1) {
          // stat by day
          for (let c of ret.membCardStatList) {
            dateid = Date.new(c.createDate).format('yyyyMMdd');
            membCardAmtMap[dateid] = c.amount;
          }
          for (let c of ret.pcCardStatList) {
            dateid = Date.new(c.createDate).format('yyyyMMdd');
            pcCardAmtMap[dateid] = c.amount;
          }
          for (let c of ret.gcCardStatList) {
            dateid = Date.new(c.createDate).format('yyyyMMdd');
            gcCardAmtMap[dateid] = c.amount;
          }
          for (let bt = args.beginDate; bt <= args.endDate; bt = new Date(bt.getTime() + 3600 * 24 * 1000)) {
            xdata.push(bt.format('M/d'));
            dateid = bt.format('yyyyMMdd');
            membCardAmtList.push(membCardAmtMap[dateid] ? membCardAmtMap[dateid] / 1000 : 0);
            pcCardAmtList.push(pcCardAmtMap[dateid] ? pcCardAmtMap[dateid] / 1000 : 0);
            gcCardAmtList.push(gcCardAmtMap[dateid] ? gcCardAmtMap[dateid] / 1000 : 0);

            this.statDataList.push({
              date: bt.format('yyyy-MM-dd'), c0: membCardAmtMap[dateid], c1: gcCardAmtMap[dateid], c2: pcCardAmtMap[dateid] });
          }
          this.statDataList.reverse();
        } else if (statType === 2) {
          // stat by week
          for (let c of ret.membCardStatList) {
            membCardAmtMap[c.createWeek] = c.amount;
          }
          for (let c of ret.pcCardStatList) {
            pcCardAmtMap[c.createWeek] = c.amount;
          }
          for (let c of ret.gcCardStatList) {
            gcCardAmtMap[c.createWeek] = c.amount;
          }
          let beginWeek = $.Util.getYearWeek(args.beginDate);
          let endWeek = $.Util.getYearWeek(args.endDate);
          for (let w = beginWeek; w <= endWeek; w++) {
            xdata.push('{0}周'.format(w));
            membCardAmtList.push(membCardAmtMap[w] ? membCardAmtMap[w] / 1000 : 0);
            pcCardAmtList.push(pcCardAmtMap[w] ? pcCardAmtMap[w] / 1000 : 0);
            gcCardAmtList.push(gcCardAmtMap[w] ? gcCardAmtMap[w] / 1000 : 0);

            this.statDataList.push({
              date: '{0}周'.format(w), c0: membCardAmtMap[w], c1: gcCardAmtMap[w], c2: pcCardAmtMap[w] });
          }
          this.statDataList.reverse();
        } else if (statType === 3) {
          // stat by month
          let year,
              month,
              monthid,
              dates = [];
          for (let c of ret.membCardStatList) {
            year = parseInt(c.createMonth / 100);
            month = c.createMonth % 100;
            monthid = '{0}-{1}'.format(year, month);
            membCardAmtMap[monthid] = c.amount;
            if (!dates.contains(monthid)) dates.push(monthid);
          }
          for (let c of ret.pcCardStatList) {
            year = parseInt(c.createMonth / 100);
            month = c.createMonth % 100;
            monthid = '{0}-{1}'.format(year, month);
            pcCardAmtMap[monthid] = c.amount;
            if (!dates.contains(monthid)) dates.push(monthid);
          }
          for (let c of ret.gcCardStatList) {
            year = parseInt(c.createMonth / 100);
            month = c.createMonth % 100;
            monthid = '{0}-{1}'.format(year, month);
            gcCardAmtMap[monthid] = c.amount;
            if (!dates.contains(monthid)) dates.push(monthid);
          }

          dates.sort();
          for (let d of dates) {
            xdata.push(d);
            membCardAmtList.push(membCardAmtMap[d] ? membCardAmtMap[d] / 1000 : 0);
            pcCardAmtList.push(pcCardAmtMap[d] ? pcCardAmtMap[d] / 1000 : 0);
            gcCardAmtList.push(gcCardAmtMap[d] ? gcCardAmtMap[d] / 1000 : 0);
            this.statDataList.push({
              date: d + '月', c0: membCardAmtMap[d], c1: gcCardAmtMap[d], c2: pcCardAmtMap[d] });
          }
        }

        this.chartData.xdata = xdata;
        this.chartData.membCardAmtList = membCardAmtList;
        this.chartData.pcCardAmtList = pcCardAmtList;
        this.chartData.gcCardAmtList = gcCardAmtList;
      }, true);
    },

    handleQueryBtn() {
      this.statQuery.dates[0] = this.dateBegin;
      this.statQuery.dates[1] = this.dateEnd;
      if (this.dateBegin && this.dateEnd) {
        this.loadStat(this.statQuery.statType);
        this.showDlg = false;
      } else {
        $.Bble.warning('请检查日期范围');
      }
    },

    showInputDlg(name) {
      this.dlgView.inputShow = true;
      this.checkDlgViewName = name;
      if (this.currentDate && this[name]) {
        let date = this[name].split('/');
        this.currentDate = new Date(parseInt(date[0]), parseInt(date[1]) - 1, parseInt(date[2]));
      }
    },

    confirmDatePiker(name) {
      if (name === 'beginDate') {
        let d = { year: null, month: null, date: null };
        d.year = this.currentDate.getFullYear();
        d.month = this.currentDate.getMonth() < 9 ? '0' + (this.currentDate.getMonth() + 1) : this.currentDate.getMonth() + 1;
        d.date = this.currentDate.getDate() < 10 ? '0' + this.currentDate.getDate() : this.currentDate.getDate();
        this.dateBegin = this.currentDate;
        this.beginDate = d.year + '/' + d.month + '/' + d.date;
      } else if (name === 'endDate') {
        let d = { year: null, month: null, date: null };
        d.year = this.currentDate.getFullYear();
        d.month = this.currentDate.getMonth() < 9 ? '0' + (this.currentDate.getMonth() + 1) : this.currentDate.getMonth() + 1;
        d.date = this.currentDate.getDate() < 10 ? '0' + this.currentDate.getDate() : this.currentDate.getDate();
        this.dateEnd = this.currentDate;
        this.endDate = d.year + '/' + d.month + '/' + d.date;
      }

      this.dlgView.inputShow = false;
    }

  }
});

/***/ }),

/***/ 1466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_calendar_calendar_by_day_vue__ = __webpack_require__(1019);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_calendar_calendar_by_day_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_calendar_calendar_by_day_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_calendar_calendar_vue__ = __webpack_require__(959);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_calendar_calendar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_calendar_calendar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stat_data_report_vue__ = __webpack_require__(2038);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stat_data_report_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__stat_data_report_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { CalendarByDay: __WEBPACK_IMPORTED_MODULE_0__components_calendar_calendar_by_day_vue___default.a, Calendar: __WEBPACK_IMPORTED_MODULE_1__components_calendar_calendar_vue___default.a, DataReport: __WEBPACK_IMPORTED_MODULE_2__stat_data_report_vue___default.a },

  data() {
    return {
      g: window.$,
      hasSettings: false,
      menu: this.$route.query.menu ? this.$route.query.menu : "by-day",
      argList: [],
      queryArr: [], //用于查询，记录已true
      queryDate: $.Util.formatDate(new Date()),
      queryDateProp: null,
      expandQueryDate: {
        beginDate: null,
        endDate: null
      },
      dayQuery: {
        beginDate: new Date(),
        endDate: new Date()
      },
      byDayList: [],
      byWeekList: [],
      byMonthList: [],
      pikerShow: false,
      currentDate: null, // 按日
      changeDate: [],
      currentWeek: null,
      checkinDateId: [],
      cantPull: true,
      weekCount: -1, // 0当前周
      hasByDay: false,
      hasByWeek: false,
      hasByMonth: false,
      themeFontColor: "",
      maxMon: null,
      weekLastDay: null
    };
  },
  created() {
    this.getShopArgs();
    this.currentDate = new Date(Date.new().getTime() - 3600000 * 24);
    this.year = this.currentDate.getFullYear();
    this.month = Number(this.currentDate.getMonth());
    this.maxMon = Date.new().getMonth();
    this.day = this.currentDate.getDate();
    this.currentWeek = this.getWeekStartAndEnd(true);
    //
    let themeFontColor = document.getElementsByTagName("body")[0].className;
    if (themeFontColor == "theme-black") {
      this.themeFontColor = "#fff";
    }
  },
  mounted() {},
  methods: {
    /**
     * 展开收起
     */
    expandCollapse(obj) {
      // console.log("expandobj:", obj);
      // console.log("expand-date:", this.queryDate);
      if (obj.status == 3) {
        this.dealListByStatus(obj.menu, obj.keyId, 1);
        return;
      } else {
        this.dealListByStatus(obj.menu, obj.keyId, 2);
      }
      //
      let args = {
        keyId: obj.keyId,
        statType: obj.type,
        beginDate: this.expandQueryDate.beginDate,
        endDate: this.expandQueryDate.endDate
      };
      $.Req.service($.SvName.VENUE_REPORT_CONTENT_STAT, args, res => {
        // console.log("展开：", res);
        // res.reportStatList
        this.dealListByStatus(obj.menu, obj.keyId, 3);
        this.dealChartData(res.reportStatList, args, obj.type);
      }, true);
    },

    /**
     * 处理表格数据
     */
    dealChartData(result, args, statType) {
      let xdata = [],
          ydata = [];
      let arr = [21, 22, 23, 24];
      if (statType === 1) {
        // {createDate: "2021-09-08 00:00:00", intVal: 23}
        // let d = $.Util.formatDate(c.createDate);
        // 包含则走前端手动塞 不包含走后端 （??）
        if (arr.includes(args.keyId)) {
          for (let i = 0; i < result.length; i++) {
            let dt = result[i].createDate.substring(0, 10);
            xdata.push(new Date(dt).format("M/d"));
            let val = JSON.stringify(result[i].intVal) ? result[i].intVal : result[i].doubleVal;
            ydata.push(val);
          }
        } else {
          let newMap = {};
          for (let c of result) {
            // {createWeek: 31, intVal: 22}
            let v = JSON.stringify(c.intVal) ? c.intVal : c.doubleVal;
            newMap[c.createDate] = v;
          }
          for (let i = args.endDate.getTime() - 30 * 3600000 * 24; i <= args.endDate.getTime(); i += 3600 * 24 * 1000) {
            xdata.push(new Date(i).format("M/d"));
            let format = new Date(i).format("yyyy-MM-dd hh:mm:ss");
            let cnt = newMap[format] || 0;
            ydata.push(cnt);
          }
        }

        this.dealXYaxis(this.byDayList, statType, xdata, ydata, args);
      } else if (statType === 2) {
        // let endWeek = $.Util.getYearWeek(args.endDate);
        for (let w = 0; w < result.length; w++) {
          // xdata.push("{0}周".format(w));
          xdata.push(result[w].createWeek + "周");
          let val = JSON.stringify(result[w].intVal) ? result[w].intVal : result[w].doubleVal;
          ydata.push(val);
        }
        // console.log('xdata:',xdata);
        this.dealXYaxis(this.byWeekList, statType, xdata, ydata, args);
      } else if (statType === 3) {
        let year, month;
        if (result.length > 0) {
          for (let c of result) {
            year = parseInt(c.createMonth / 100);
            month = c.createMonth % 100;
            xdata.push("{0}/{1}".format(year, month));
            let v = JSON.stringify(c.intVal) ? c.intVal : c.doubleVal;
            ydata.push(v);
          }
        } else {
          let end = this.expandQueryDate.endDate;
          let endyear = end.getFullYear();
          let endMonIdx = end.getMonth();
          let idxArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
          for (let i = 0; i <= 5; i++) {
            xdata.push(endyear + '/' + idxArr[endMonIdx]);
            endMonIdx--;
            if (endMonIdx < 0) {
              endMonIdx = 11;
              endyear--;
            }
            ydata.push(0);
          }
          xdata.reverse();
        }
        this.dealXYaxis(this.byMonthList, statType, xdata, ydata, args);
      }
    },

    /**
     * 处理展开图表x轴y轴赋值
     */
    dealXYaxis(dataSeries, statType, xdata, ydata, args) {
      let idx = dataSeries.findIndex(m => m.keyId == args.keyId);
      let line = dataSeries.find(m => m.keyId == args.keyId);
      let chartOptions = {
        textStyle: {
          color: this.themeFontColor
        },
        grid: { x: 40, y: 10, x2: 20, y2: 20 },
        tooltip: {
          trigger: "axis",
          formatter: "{b} : {c}"
        },
        calculable: false,
        xAxis: [{
          padding: 1,
          type: "category",
          boundaryGap: false,
          data: xdata
        }],
        yAxis: [{
          type: "value",
          axisLabel: {
            margin: 1,
            // formatter: "{value}",
            formatter: function (value, index) {
              if (value >= 1000 && value < 10000) {
                value = value / 1000 + "k";
              } else if (value >= 10000) {
                value = value / 10000 + "w";
              }
              return value;
            }
          }
        }],
        series: [{
          name: "",
          type: "line",
          data: ydata,
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
      let newObj = Object.assign(line, { chartOptions: chartOptions });
      dataSeries.splice(idx, 1, newObj);
      if (statType == 1) {
        this.byDayList = dataSeries;
      } else if (statType == 2) {
        this.byWeekList = dataSeries;
      } else {
        this.byMonthList = dataSeries;
      }
    },

    /**
     * 处理展开收起状态
     */
    dealListByStatus(name, id, status) {
      if (name == "by-day") {
        this.expandQueryDate.beginDate = new Date(Date.new(this.queryDate).getTime() - 30 * 3600000 * 24);
        this.expandQueryDate.endDate = Date.new(this.queryDate);
        this.byDayList.forEach(ele => {
          if (ele.keyId == id) {
            ele.status = status;
          }
        });
      } else if (name == "by-week") {
        let right = this.currentWeek.split("~")[1];
        this.expandQueryDate.beginDate = new Date(Date.new(right).getTime() - 55 * 3600000 * 24); //8week
        this.expandQueryDate.endDate = Date.new(right);
        this.byWeekList.forEach(ele => {
          if (ele.keyId == id) {
            ele.status = status;
          }
        });
      } else {
        this.expandQueryDate.beginDate = new Date(this.dayQuery.endDate.getTime() - 183 * 3600000 * 24); //
        this.expandQueryDate.endDate = this.dayQuery.endDate;
        this.byMonthList.forEach(ele => {
          if (ele.keyId == id) {
            ele.status = status;
          }
        });
      }
    },

    getShopArgs() {
      let args = { typeIdList: [2060, 2061, 2062] };
      $.Req.service($.SvName.SHOP_ARG_QUERY, args, res => {
        // 判断hasSetting
        if (res.argList.length > 0) {
          let list = res.argList;
          list.forEach(ele => {
            if (ele.typeValue) {
              let idx = ele.typeValue.indexOf("|");
              let str = ele.typeValue.substring(0, idx);
              ele.typeValue = str;
            } else {
              ele.typeValue = null;
            }
          });
          this.argList = list;
          this.hasByDay = list.some(m => m.typeId == 2060 && m.typeValue);
          this.hasByWeek = list.some(m => m.typeId == 2061 && m.typeValue);
          this.hasByMonth = list.some(m => m.typeId == 2062 && m.typeValue);
          this.judgeMenu();
        }
      }, true);
    },

    /**
     * 请求报表
     */
    queryReportData(name) {
      let selected = this.queryArr.find(m => m.name == name);
      let query = this.dayQuery;
      let args = {
        typeId: selected.typeId,
        typeValue: selected.typeValue,
        beginDate: query.beginDate,
        endDate: query.endDate
      };
      $.Req.service($.SvName.VENUE_REPORT_STAT, args, res => {
        let list = res.reportStatList;
        if (list.length > 0) {
          list.forEach(ele => {
            ele.status = 1; //1收起 2loading 3展开
          });
        }
        if (name == "by-day") {
          this.byDayList = list;
        } else if (name == "by-week") {
          this.byWeekList = list;
        } else if (name == "by-month") {
          this.byMonthList = list;
        }
      }, true);
    },

    /**
     * 判断请求菜单
     */
    judgeMenu() {
      let argList = this.argList;
      let arr = [{
        name: "by-day",
        val: this.hasByDay,
        typeId: 2060
      }, {
        name: "by-week",
        val: this.hasByWeek,
        typeId: 2061
      }, {
        name: "by-month",
        val: this.hasByMonth,
        typeId: 2062
      }];
      //let selected = arr.find((m) => m.val);
      //this.menu = selected.name;
      let queryArr = arr.filter(v => v.val);
      queryArr.forEach(ele => {
        ele.typeValue = argList.find(c => c.typeId == ele.typeId).typeValue;
      });
      this.queryArr = queryArr;
      for (let ele of queryArr) {
        this.changeMenuAndRequest(ele.name, 2);
      }
    },

    /**
     * 切换和请求tab
     */
    changeMenuAndRequest(menuName, changeOrRequest) {
      // 1 仅change 2仅请求
      if (changeOrRequest == 1) {
        this.menu = menuName;
        return;
      } else {
        switch (menuName) {
          case "by-day":
            let dt = $.Util.formatDate(this.currentDate);
            let prop = dt.split("-");
            this.queryDateProp = prop;
            if (this.$refs.calendar) {
              this.$nextTick(() => {
                this.$refs.calendar.initDate(prop);
              });
            }
            this.querySelectedDay(dt);
            break;
          case "by-week":
            let arr = this.currentWeek.split("~");
            this.dayQuery.beginDate = Date.new(arr[0]);
            this.dayQuery.endDate = Date.new(arr[1]);
            this.queryReportData("by-week");
            break;
          case "by-month":
            this.checkMonth();
            let lastMon = new Date(Date.new(this.currentDate).getTime() - 30 * 3600000 * 24);
            this.$nextTick(() => {
              this.$refs.mcalendar.initDate(lastMon);
            });
            break;
        }
      }
    },

    // 按周
    resetWeek(alt) {
      let interval = (this.currentDate.getTime() - this.weekLastDay.getTime()) / (3600000 * 24);
      if (alt > 0 && interval < 7) {
        this.$notify({
          type: "warning",
          message: "亲，您选择的时间不支持查询哦"
        });
        return false;
      }
      this.weekCount = this.weekCount + alt;
      this.currentWeek = this.getWeekStartAndEnd();
      //请求数据
      let arr = this.currentWeek.split("~");
      this.dayQuery.beginDate = Date.new(arr[0]).getTime();
      this.dayQuery.endDate = Date.new(arr[1]).getTime();
      this.queryReportData("by-week");
    },

    // 按天
    resetDateList(alt) {
      //Prev -1  next 1
      this.changeDate = $.Util.formatDate(this.currentDate).split("-");
      this.queryDate = $.Util.formatDate(Date.new(Date.new(this.queryDate).getTime() + alt * 3600000 * 24));
      let queryDateProp = this.queryDate.split("-");
      this.queryDateProp = queryDateProp;
      this.$nextTick(() => {
        this.$refs.calendar.initDate(queryDateProp);
      });
      this.dayQuery.beginDate = this.queryDate;
      this.dayQuery.endDate = this.queryDate;
    },

    /**
     * 查询天
     */
    querySelectedDay(arg) {
      let date = arg.split("-");
      this.dayQuery.beginDate = new Date(date[0], date[1] - 1, date[2]);
      this.dayQuery.endDate = new Date(date[0], date[1] - 1, date[2]);
      this.queryDate = $.Util.formatDate(this.dayQuery.beginDate);
      //
      // 请求数据
      this.queryReportData("by-day");
    },
    /**
     * 选择月
     */
    checkMonth(option) {
      //option=>[date,date,false]
      this.dayQuery.beginDate = option ? option[0] : new Date(this.year, this.month, 1);
      this.dayQuery.endDate = option ? option[1] : new Date(this.year, this.month + 1, 0);
      // this.queryDate = $.Util.formatDate(this.dayQuery.beginDate);
      //
      // 请求数据
      this.queryReportData("by-month");
    },

    getColumnValue() {
      this.changeDate = $.Util.formatDate(this.currentDate).split("-");
    },

    showDatePiker() {
      this.pikerShow = !this.pikerShow;
    },

    /**
     * 获取周起始
     */
    getWeekStartAndEnd(isInit = false) {
      let startStopStr;
      var millisecond = 1000 * 60 * 60 * 24;
      //相对于当前日期weekCount个周的日期
      let current = new Date(this.currentDate.getTime() + millisecond * 7 * this.weekCount);
      //返回date是一周中的某一天
      let week = current.getDay();
      let minusDay = week != 0 ? week - 1 : 6;
      //当前周的第一天
      let currentWeekFirstDay = new Date(current.getTime() - millisecond * minusDay);
      //当前周的最后一天
      let currentWeekLastDay = new Date(currentWeekFirstDay.getTime() + millisecond * 6);
      // if (isInit) {
      this.weekLastDay = currentWeekLastDay;
      // }
      startStopStr = $.Util.formatDate(currentWeekFirstDay) + "~" + $.Util.formatDate(currentWeekLastDay);
      return startStopStr;
    }
  }
});

/***/ }),

/***/ 1467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stat_coach_vue__ = __webpack_require__(2036);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stat_coach_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stat_coach_vue__);
//
//
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
  components: { StatCoach: __WEBPACK_IMPORTED_MODULE_0__stat_coach_vue___default.a },
  data() {
    return {};
  },

  created() {},

  methods: {}
});

/***/ }),

/***/ 1468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stat_course_vue__ = __webpack_require__(1270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stat_course_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stat_course_vue__);
//
//
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
  components: { StatCourse: __WEBPACK_IMPORTED_MODULE_0__stat_course_vue___default.a },
  data() {
    return {
      cards: []
    };
  },

  created() {},

  methods: {}
});

/***/ }),

/***/ 1469:
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

/***/ 1470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stat_head_vue__ = __webpack_require__(979);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stat_head_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stat_head_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stat_member_checkin_vue__ = __webpack_require__(2039);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stat_member_checkin_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__stat_member_checkin_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stat_member_head_vue__ = __webpack_require__(1071);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stat_member_head_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__stat_member_head_vue__);
//
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
	components: { StatHead: __WEBPACK_IMPORTED_MODULE_0__stat_head_vue___default.a, MemberCheckinDays: __WEBPACK_IMPORTED_MODULE_1__stat_member_checkin_vue___default.a, StatMemberHead: __WEBPACK_IMPORTED_MODULE_2__stat_member_head_vue___default.a },
	data() {
		return {};
	},

	created() {},

	methods: {}
});

/***/ }),

/***/ 1471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stat_head_vue__ = __webpack_require__(979);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stat_head_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stat_head_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stat_member_vue__ = __webpack_require__(1100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stat_member_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__stat_member_vue__);
//
//
//
//
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
  components: { StatHead: __WEBPACK_IMPORTED_MODULE_0__stat_head_vue___default.a, MemberStat: __WEBPACK_IMPORTED_MODULE_1__stat_member_vue___default.a },
  data() {
    return {
      cards: []
    };
  },

  created() {},

  methods: {}
});

/***/ }),

/***/ 1472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stat_head_vue__ = __webpack_require__(979);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stat_head_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stat_head_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stat_member_vue__ = __webpack_require__(1100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stat_member_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__stat_member_vue__);
//
//
//
//
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
  components: { StatHead: __WEBPACK_IMPORTED_MODULE_0__stat_head_vue___default.a, MemberStat: __WEBPACK_IMPORTED_MODULE_1__stat_member_vue___default.a },
  data() {
    return {
      cards: []
    };
  },

  created() {},

  methods: {}
});

/***/ }),

/***/ 1473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stat_head_vue__ = __webpack_require__(979);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stat_head_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stat_head_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stat_member_head_vue__ = __webpack_require__(1071);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stat_member_head_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__stat_member_head_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	components: { StatHead: __WEBPACK_IMPORTED_MODULE_0__stat_head_vue___default.a, StatMemberHead: __WEBPACK_IMPORTED_MODULE_1__stat_member_head_vue___default.a },
	data() {
		return {
			query: {
				beginDateForSexStat: null,
				endDateForSexStat: null,
				beginDateForAgeStat: null,
				endDateForAgeStat: null,
				ageSpanType: 1,
				memberTypeForSexStat: 0,
				memberTypeForAgeStat: 0
			},
			dateOptions: {
				disabledDate(date) {
					return date && date.valueOf() > Date.now();
				}
			},
			dateShortcuts: [],
			queryDateShourtcut: null,
			sexStatData: null,
			ageNames: [],
			ageStatData: [],
			ageStatList: null,
			active: 0,
			tabData: [{ name: '会员性别统计' }, { name: '会员年龄统计' }],

			dlgView: {
				inputShow: false
			},
			checkDlgViewName: '',
			minDate: new Date(1940, 0, 1),
			maxDate: new Date(),
			currentDate: new Date(),
			thisYear: new Date().getFullYear(),
			thisMonth: new Date().getMonth(),
			thisDate: new Date().getDate(),
			changeDate: new Date(),
			endDate: null,
			beginDate: null,
			beginDateForAgeStat: null,
			endDateForAgeStat: null,
			memberType: [{ name: '所有会员', id: 0 }, { name: '有效会员', id: 1 }, { name: '无效会员', id: 2 }],
			ageSpanType: [{ name: '10岁间隔', id: 1 }, { name: '1岁间隔', id: 2 }],
			sexNames: []
		};
	},

	computed: {
		memberSexStatOption() {
			return {
				title: {
					text: '',
					x: 'center'
				},
				tooltip: {
					trigger: 'item',
					formatter: "{a} <br/>{b}"
				},
				legend: {
					orient: 'vertical',
					x: 'left',
					data: ''
				},
				toolbox: {
					show: true,
					feature: {
						mark: { show: true },
						dataView: { show: true, readOnly: false },
						magicType: {
							show: true,
							type: ['pie', 'funnel'],
							option: {
								funnel: {
									x: '25%',
									width: '50%',
									funnelAlign: 'left',
									max: 1548
								}
							}
						},
						restore: { show: true },
						saveAsImage: { show: true }
					}
				},
				calculable: true,
				series: [{
					name: '性别',
					type: 'pie',
					radius: '50%',
					center: ['50%', '35%'],
					data: this.sexStatData
				}]
			};
		},

		memberAgeStatOption() {
			return {
				color: ['#ffaa00'],
				legend: {
					orient: 'vertical',
					x: 'left',
					data: ''
				},
				tooltip: {
					trigger: 'item',
					formatter: "{b} {c}个"
				},
				xAxis: {
					type: 'category',
					data: this.ageNames
				},
				yAxis: {
					type: 'value'
				},
				series: [{
					data: this.ageStatData,
					type: 'bar',
					barWidth: '40px'
				}]
			};
		}
	},

	created() {
		if ($.Util.cookie.get($.Conf.CookieKeys.STAT_MEMBER_AGE_SAPN_TYPE)) {
			this.query.ageSpanType = parseInt($.Util.cookie.get($.Conf.CookieKeys.STAT_MEMBER_AGE_SAPN_TYPE));
		}
		this.statMemberSex();
		this.statMemberAge();
	},

	methods: {
		showInputDlg(name) {
			this.dlgView.inputShow = true;
			this.checkDlgViewName = name;
			if (this.currentDate && this[name]) {
				let date = this[name].split('-');
				this.currentDate = new Date(parseInt(date[0]), parseInt(date[1]) - 1, parseInt(date[2]));
			}
		},

		confirmDatePiker(name) {
			let date = { year: null, month: null, date: null, hr: null, min: null, sec: null };
			date.year = this.currentDate.getFullYear();
			date.month = this.currentDate.getMonth() < 9 ? '0' + (this.currentDate.getMonth() + 1) : this.currentDate.getMonth() + 1;
			date.date = this.currentDate.getDate() < 10 ? '0' + this.currentDate.getDate() : this.currentDate.getDate();
			if (name === 'beginDate') {
				this.beginDate = date.year + '-' + date.month + '-' + date.date;
				this.query.beginDateForSexStat = this.beginDate;
			} else if (name === 'endDate') {
				this.endDate = date.year + '-' + date.month + '-' + date.date;
				this.query.endDateForSexStat = this.endDate;
			} else if (name === 'beginDateForAgeStat') {
				this.beginDateForAgeStat = date.year + '-' + date.month + '-' + date.date;
				this.query.beginDateForAgeStat = this.beginDateForAgeStat;
			} else if (name === 'endDateForAgeStat') {
				this.endDateForAgeStat = date.year + '-' + date.month + '-' + date.date;
				this.query.endDateForAgeStat = this.endDateForAgeStat;
			}
			this.dlgView.inputShow = false;
		},

		statMemberSex() {
			let args = {
				statType: 6,
				beginDate: this.query.beginDateForSexStat,
				endDate: this.query.endDateForSexStat,
				memberType: this.query.memberTypeForSexStat
			};
			$.Req.service($.SvName.MEMBER_STAT, args, ret => {
				this.sexNames = [];
				this.sexStatData = [];
				let memberCnt = 0;
				for (let s of ret.sexStatList) {
					memberCnt += s.count;
				}
				for (let s of ret.sexStatList) {
					let sname = "{0} ({1}个，{2}%)".format(s.flag ? '男' : '女', s.count, $.Util.round(s.count * 100 / memberCnt));
					this.sexNames.push({
						sex: s.flag ? '男' : '女',
						value: s.count, name: $.Util.round(s.count * 100 / memberCnt)
					});
					this.sexStatData.push({
						value: s.count, name: sname
					});
				}
			}, true);
		},

		statMemberAge() {
			let args = {
				statType: 7,
				ageSpanType: this.query.ageSpanType,
				beginDate: this.query.beginDateForAgeStat,
				endDate: this.query.endDateForAgeStat,
				memberType: this.query.memberTypeForAgeStat
			};
			$.Req.service($.SvName.MEMBER_STAT, args, ret => {
				this.ageNames = [];
				this.ageStatData = [];
				let memberCnt = 0;
				for (let s of ret.ageStatList) {
					memberCnt += s.count;
				}
				for (let s of ret.ageStatList) {
					s.rate = $.Util.round(s.count * 100 / memberCnt);
					this.ageNames.push(s.flagName);
					this.ageStatData.push(s.count);
				}
				this.ageStatList = ret.ageStatList;
			}, true);
		},

		changeMemberAgeSpan(val) {
			$.Util.cookie.set($.Conf.CookieKeys.STAT_MEMBER_AGE_SAPN_TYPE, val, 365);
			this.statMemberAge();
		}
	}
});

/***/ }),

/***/ 1474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stat_head_vue__ = __webpack_require__(979);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stat_head_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stat_head_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stat_member_vue__ = __webpack_require__(1100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stat_member_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__stat_member_vue__);
//
//
//
//
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
  components: { StatHead: __WEBPACK_IMPORTED_MODULE_0__stat_head_vue___default.a, MemberStat: __WEBPACK_IMPORTED_MODULE_1__stat_member_vue___default.a },
  data() {
    return {
      cards: []
    };
  },

  created() {},

  methods: {}
});

/***/ }),

/***/ 1475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stat_head_vue__ = __webpack_require__(979);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stat_head_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stat_head_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stat_member_vue__ = __webpack_require__(1100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stat_member_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__stat_member_vue__);
//
//
//
//
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
  components: { StatHead: __WEBPACK_IMPORTED_MODULE_0__stat_head_vue___default.a, MemberStat: __WEBPACK_IMPORTED_MODULE_1__stat_member_vue___default.a },
  data() {
    return {
      cards: []
    };
  },

  created() {},

  methods: {}
});

/***/ }),

/***/ 1476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stat_head_vue__ = __webpack_require__(979);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stat_head_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stat_head_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stat_member_head_vue__ = __webpack_require__(1071);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stat_member_head_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__stat_member_head_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__member_member_base_vue__ = __webpack_require__(963);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__member_member_base_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__member_member_base_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	components: { StatHead: __WEBPACK_IMPORTED_MODULE_0__stat_head_vue___default.a, StatMemberHead: __WEBPACK_IMPORTED_MODULE_1__stat_member_head_vue___default.a, MemberBase: __WEBPACK_IMPORTED_MODULE_2__member_member_base_vue___default.a },
	data() {
		return {
			g: $,
			memberPlStatCount: null,
			stat: {},
			memberPlStatList: [],
			query: {
				minLeftCount: null,
				maxLeftCount: null,
				unused: null
			},
			tableTheadList: [{ title: '会员' }, { title: '总排课次数' }, { title: '已用课时数' }, { title: '已用比例' }, { title: '剩余课时数' }, { title: '剩余比例' }],
			tableFixColNumber: 1,
			tableThMinWidth: 80,
			scrolledTop: 0,
			scrolledLeft: 0,
			zIndexTop: 0,
			zIndexLeft: 0,
			fixNumber: [0],
			respsTableWid: null,
			respsTableFixHeadWid: null,
			viewMemberDlg: false,
			selectMemberId: null,
			member: null,
			selectMemberName: null
		};
	},

	created() {
		this.statMemberPl();
		this.initTable();
	},

	methods: {
		initTable() {
			let _this = this;
			let timer = null;
			if (this.$refs.respsTable) {
				document.getElementById('respsTable').scrollTop = 0;
				document.getElementById('respsTable').scrollLeft = 0;
				this.scrolledTop = 0;
				this.scrolledLeft = 0;
			}
			timer = setTimeout(() => {
				this.$nextTick(() => {
					let tableTh = document.getElementById('table-th');
					if (tableTh) {
						let tableThs = tableTh.children;
						this.respsTableWid = tableTh.clientWidth;
						let tableFixHeadTh = document.getElementById('table-fix-head-th');
						let tableFixHeadThs = tableFixHeadTh.children;
						let tableFixColTd = document.getElementById('table-fix-col-td');
						let tableFixColTds = tableFixColTd.children;
						let tableFixTh = document.getElementById('table-fix-th');
						let tableFixThs = tableFixTh.children;
						if (tableFixHeadTh) {
							for (let i = 0; i < tableThs.length - 1; i++) {
								tableFixHeadThs[i].style.width = tableThs[i].offsetWidth + 'px';
								if (tableFixColTds[i]) tableFixColTds[i].style.width = tableThs[i].offsetWidth + 'px';
								if (tableFixThs[i]) tableFixThs[i].style.width = tableThs[i].offsetWidth + 'px';
							}
						}
						document.getElementById('respsTable').addEventListener('scroll', () => {
							if (this.$refs.respsTable) {
								this.scrolledTop = this.$refs.respsTable.scrollTop;
								this.scrolledLeft = this.$refs.respsTable.scrollLeft;
							}
						});
					}
				});
			}, 1000);
		},

		statMemberPl(page = null) {
			this.query.unused = null;
			let args = {
				page: page,
				minLeftCount: this.query.minLeftCount,
				maxLeftCount: this.query.maxLeftCount
			};
			if (!page && this.query.minLeftCount === null) {
				this.memberPlStatCount = null;
				args.initMinLeftCount = 1;
				args.initMaxLeftCount = 5;
			}

			$.Req.service($.SvName.MEMBER_PL_STAT, args, ret => {
				if (!page && this.query.minLeftCount === null) {
					this.stat = ret;
				}
				this.memberPlStatList = ret.memberPlStatList;
				if (!page) {
					this.memberPlStatCount = ret.count;
				}
			});
		},

		viewMember(m) {
			this.selectMemberName = m.memberName;
			this.selectMemberId = m.memberId;
			this.member = m;
			this.viewMemberDlg = true;
		},

		queryByLeftCount(minLeft, maxLeft, curCnt) {
			if (!curCnt) {
				return;
			}
			this.query.minLeftCount = minLeft;
			this.query.maxLeftCount = maxLeft;
			this.statMemberPl();
		},

		queryUnusedMemberPl(page = null) {
			this.query.unused = true;
			this.query.minLeftCount = null;
			this.query.maxLeftCount = null;
			if (!page) {
				this.memberPlStatCount = null;
			}
			let args = { page: page, unused: true };
			$.Req.service($.SvName.MEMBER_PL_STAT, args, ret => {
				this.memberPlStatList = ret.memberPlStatList;
				if (!page) {
					this.memberPlStatCount = ret.count;
				}
			});
		}
	}
});

/***/ }),

/***/ 1477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stat_head_vue__ = __webpack_require__(979);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stat_head_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stat_head_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stat_member_head_vue__ = __webpack_require__(1071);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stat_member_head_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__stat_member_head_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { StatHead: __WEBPACK_IMPORTED_MODULE_0__stat_head_vue___default.a, StatMemberHead: __WEBPACK_IMPORTED_MODULE_1__stat_member_head_vue___default.a },

  data() {
    return {
      query: {
        beginDate: null,
        endDate: null
      },
      dateOptions: {
        disabledDate(date) {
          return date && date.valueOf() > Date.now();
        }
      },
      dateShortcuts: [],
      statList: null,
      memberCount: null,
      queryDateShourtcut: null,
      custSourceNames: [],
      custSourceChartData: null,
      showDlg: false,
      dateBegin: null,
      dateEnd: null
    };
  },

  computed: {
    memberSourceStatOption() {
      return {
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: {
              show: true,
              type: ['pie', 'funnel'],
              option: {
                funnel: {
                  x: '25%',
                  width: '50%',
                  funnelAlign: 'left',
                  max: 1548
                }
              }
            },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        series: [{
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          center: ['50%', '50%'],
          data: this.custSourceChartData
        }]
      };
    }
  },

  created() {
    this.initQuery();
    this.initDateShortCuts();
    this.statCustSource();
  },

  methods: {
    initQuery() {
      this.query.endDate = new Date();
      this.query.beginDate = new Date(Date.new().getTime() - 30 * 3600 * 24 * 1000);
      this.dateBegin = $.Util.formatDate(this.query.beginDate);
      this.dateEnd = $.Util.formatDate(this.query.endDate);
    },

    initDateShortCuts() {
      // 获取最近3个月的月份
      let today = new Date();
      let date = new Date();
      let year, month, beginDate, endDate;
      for (let i = 0; i < 3; i++) {
        year = date.getFullYear();
        month = date.getMonth();
        beginDate = new Date(date.getFullYear(), month, 1);
        if (i === 0) {
          endDate = new Date(today);
        } else {
          endDate = new Date(date.getFullYear(), month + 1, 0);
        }

        this.dateShortcuts.push({
          name: '{1}月'.format(date.getFullYear(), month + 1),
          beginDate: beginDate,
          endDate: endDate
        });

        date.setMonth(month - 1);
      }
      this.dateShortcuts.push({
        name: today.getFullYear() + '年',
        beginDate: new Date(today.getFullYear(), 0, 1),
        endDate: today
      });
    },

    statByDateShortcuts(idx) {
      this.queryDateShourtcut = idx;
      let d = this.dateShortcuts[idx];
      this.query.beginDate = new Date(d.beginDate);
      this.query.endDate = new Date(d.endDate);
      this.dateBegin = $.Util.formatDate(this.query.beginDate);
      this.dateEnd = $.Util.formatDate(this.query.endDate);
      this.statCustSource();
    },

    statCustSource() {
      let args = {
        beginDate: this.query.beginDate,
        endDate: this.query.endDate
      };
      $.Req.service($.SvName.CUST_SOURCE_STAT, args, ret => {
        this.statList = ret.custSourceStatList;
        this.memberCount = ret.count;
        this.custSourceNames = [];
        this.custSourceChartData = [];
        for (let s of this.statList) {
          this.custSourceNames.push(s.sourceName ? s.sourceName : '无');
          this.custSourceChartData.push({
            value: s.count, name: s.sourceName
          });
        }
      }, true);
    },

    handleQueryBtn() {
      this.queryDateShourtcut = null;
      this.query.beginDate = Date.new(this.dateBegin);
      this.query.endDate = Date.new(this.dateEnd);
      this.statCustSource();
      this.showDlg = false;
    }

  }
});

/***/ }),

/***/ 1478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stat_head_vue__ = __webpack_require__(979);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stat_head_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stat_head_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stat_member_head_vue__ = __webpack_require__(1071);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stat_member_head_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__stat_member_head_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { StatHead: __WEBPACK_IMPORTED_MODULE_0__stat_head_vue___default.a, StatMemberHead: __WEBPACK_IMPORTED_MODULE_1__stat_member_head_vue___default.a },

  computed: {
    memberCntChartOption() {
      return {
        textStyle: {
          color: this.themeFontColor
        },
        grid: { x: 35, y: 10, x2: 20, y2: 20 },
        tooltip: {
          trigger: 'axis',
          formatter: "{b} : 新入会员{c} 人"
        },
        calculable: false,
        xAxis: [{
          padding: 1,
          type: 'category',
          boundaryGap: false,
          data: this.memberCntChartData.xdata,
          axisLabel: {
            textStyle: {
              color: '#fff'
            }
          }
        }],
        yAxis: [{
          type: 'value',
          axisLabel: {
            formatter: '{value}',
            textStyle: {
              color: '#fff'
            }
          }
        }],
        series: [{
          name: '新增会员数',
          type: 'line',
          data: this.memberCntChartData.ydata,
          itemStyle: {
            normal: {
              color: "#86C440"
            }
          },
          lineStyle: {
            normal: {
              color: "#86C440"
            }
          }
        }]
      };
    },

    memberEntryChartOption() {
      return {
        textStyle: {
          color: this.themeFontColor
        },
        grid: { x: 40, y: 10, x2: 20, y2: 20 },
        /*legend: {
          data: ['入场人数'],
        },*/
        tooltip: {
          trigger: 'axis',
          formatter: "{b} : 入场 {c} 人次"
        },
        calculable: false,
        xAxis: [{
          padding: 1,
          type: 'category',
          boundaryGap: false,
          data: this.memberEntryChartData.xdata
        }],
        yAxis: [{
          type: 'value',
          axisLabel: {
            formatter: '{value}'
          }
        }],
        series: [{
          name: '入场人数',
          type: 'line',
          data: this.memberEntryChartData.ydata,
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
    },

    memberCntForCpChartOption() {
      return {

        grid: { x: 35, y: 10, x2: 20, y2: 20 },
        tooltip: {
          trigger: 'axis',
          formatter: "{b} : 续卡会员 {c} 人"
        },
        calculable: false,
        xAxis: [{
          padding: 1,
          type: 'category',
          boundaryGap: false,
          data: this.memberCntForCpChartData.xdata,
          axisLabel: {
            textStyle: {
              color: '#fff'
            }
          }
        }],
        yAxis: [{
          type: 'value',
          axisLabel: {
            formatter: '{value}'
          }
        }],
        series: [{
          name: '续卡会员数',
          type: 'line',
          data: this.memberCntForCpChartData.ydata,
          axisLabel: {
            textStyle: {
              color: '#fff'
            }
          },
          itemStyle: {
            normal: {
              color: "#5BAEFB"
            }
          },
          lineStyle: {
            normal: {
              color: "#5BAEFB"
            }
          }
        }]
      };
    }
  },

  data() {
    return {

      memberEntryChartData: {
        xdata: [],
        ydata: []
      },
      memberEntryQuery: {
        statType: 1,
        dates: [null, null],
        dateShortcuts: [],
        dateIdx: 0,
        showMoreDates: false
      },
      mentryQueryLoading: false,
      memberCntChartData: {
        xdata: [],
        ydata: []
      },
      memberCntQuery: {
        statType: 1,
        dates: [null, null],
        dateShortcuts: [],
        dateIdx: 0,
        showMoreDates: false
      },
      mcntQueryLoading: false,

      memberCntForCpChartData: {
        xdata: [],
        ydata: []
      },
      memberCntForCpQuery: {
        statType: 1,
        dates: [null, null],
        dateShortcuts: [],
        dateIdx: 0,
        showMoreDates: false
      },
      mcntForCpQueryLoading: false,
      themeFontColor: ''
    };
  },

  created() {
    this.initQuery();
    this.initDateShortCuts(this.memberEntryQuery.dateShortcuts);
    this.initDateShortCuts(this.memberCntQuery.dateShortcuts);
    this.initDateShortCuts(this.memberCntForCpQuery.dateShortcuts);
    this.themeChange();
    this.loadMemberEntryStat($.Dict.DateStatType.BY_DAY);
    this.loadMemberCntStat($.Dict.DateStatType.BY_DAY);
    this.loadMemberCardPaymentCntStat($.Dict.DateStatType.BY_DAY);
  },

  methods: {
    initQuery() {
      let endDate = new Date();
      let beginDate = new Date(endDate.getTime() - 31 * 3600 * 24 * 1000);
      this.memberCntQuery.dates = [beginDate, endDate];
      this.memberEntryQuery.dates = [beginDate, endDate];
      this.memberCntForCpQuery.dates = [beginDate, endDate];
    },

    initDateShortCuts(dateShortcuts) {
      dateShortcuts.push({
        name: '最近30天',
        beginDate: this.memberCntQuery.dates[0],
        endDate: this.memberCntQuery.dates[1]
      });

      // 获取最近*个月的月份
      const MONTHS = 3;
      let today = new Date();
      let date = new Date();
      let year, month, beginDate, endDate;
      for (let i = 0; i < MONTHS; i++) {
        year = date.getFullYear();
        month = date.getMonth();
        beginDate = new Date(date.getFullYear(), month, 1);
        if (i === 0) {
          endDate = new Date(today);
        } else {
          endDate = new Date(date.getFullYear(), month + 1, 0);
        }

        dateShortcuts.push({
          name: '{0}年{1}月'.format(date.getFullYear(), month + 1),
          beginDate: beginDate,
          endDate: endDate
        });

        date.setMonth(month - 1);
      }
    },
    themeChange() {
      let themeFontColor = document.getElementsByTagName("body")[0].className;
      if (themeFontColor == 'theme-black') {
        this.themeFontColor = '#fff';
      }
    },
    loadMemberCntStat(statType = null) {
      if (statType === null) {
        statType = this.memberCntQuery.statType;
      }
      if (statType !== 3) {
        if (!this.memberCntQuery.dates[0] || !this.memberCntQuery.dates[1]) {
          $.Dlg.error('请输入完整的日期范围。');
          return;
        }

        if (statType === 2) {
          let beginDate = this.memberCntQuery.dates[0];
          let endDate = this.memberCntQuery.dates[1];
          if (beginDate.getFullYear() !== endDate.getFullYear()) {
            beginDate.setFullYear(endDate.getFullYear());
            beginDate.setMonth(0);
            beginDate.setDate(1);
            this.memberCntQuery.dates = [beginDate, endDate];
          }
        }
      }

      this.memberCntQuery.statType = statType;
      let args = {
        statType: statType,
        beginDate: this.memberCntQuery.dates[0],
        endDate: this.memberCntQuery.dates[1]
      };

      this.mcntQueryLoading = true;
      $.Req.service($.SvName.MEMBER_CNT_STAT, args, ret => {
        this.mcntQueryLoading = false;
        let xdata = [],
            ydata = [],
            cnt;
        if (statType === 1) {
          let cntMap = {};
          for (let c of ret.memberCntStatList) {
            cntMap[Date.new(c.createDate).format('yyyyMMdd')] = c.count;
          }
          for (let bt = args.beginDate; bt <= args.endDate; bt = new Date(bt.getTime() + 3600 * 24 * 1000)) {
            xdata.push(bt.format('M/d'));
            cnt = cntMap[bt.format('yyyyMMdd')];
            if (!cnt) cnt = 0;
            ydata.push(cnt);
          }
        } else if (statType === 2) {
          let cntMap = {};
          for (let c of ret.memberCntStatList) {
            cntMap[c.createWeek] = c.count;
          }
          let beginWeek = $.Util.getYearWeek(args.beginDate);
          let endWeek = $.Util.getYearWeek(args.endDate);
          for (let w = beginWeek; w <= endWeek; w++) {
            xdata.push('{0}周'.format(w));
            cnt = cntMap[w];
            if (!cnt) cnt = 0;
            ydata.push(cnt);
          }
        } else if (statType === 3) {
          let year, month;
          for (let c of ret.memberCntStatList) {
            year = parseInt(c.createMonth / 100);
            month = c.createMonth % 100;
            xdata.push('{0}/{1}'.format(year, month));
            ydata.push(c.count);
          }
        }

        this.memberCntChartData.xdata = xdata;
        this.memberCntChartData.ydata = ydata;
      }, false, err => {
        this.mcntQueryLoading = false;
        $.Dlg.error(err);
      });
    },

    loadMemberEntryStat(statType = null) {
      if (statType === null) {
        statType = this.memberEntryQuery.statType;
      }
      if (statType !== 3) {
        if (!this.memberEntryQuery.dates[0] || !this.memberEntryQuery.dates[1]) {
          $.Dlg.error('请输入完整的日期范围。');
          return;
        }

        if (statType === 2) {
          let beginDate = this.memberEntryQuery.dates[0];
          let endDate = this.memberEntryQuery.dates[1];
          if (beginDate.getFullYear() !== endDate.getFullYear()) {
            beginDate.setFullYear(endDate.getFullYear());
            beginDate.setMonth(0);
            beginDate.setDate(1);
            this.memberEntryQuery.dates = [beginDate, endDate];
          }
        }
      }

      this.memberEntryQuery.statType = statType;
      let args = {
        statType: statType,
        beginDate: this.memberEntryQuery.dates[0],
        endDate: this.memberEntryQuery.dates[1]
      };

      this.mentryQueryLoading = true;
      $.Req.service($.SvName.MEMBER_ENTRY_STAT_BY_DATE, args, ret => {
        this.mentryQueryLoading = false;
        let xdata = [],
            ydata = [],
            cnt;
        if (statType === 1) {
          let cntMap = {};
          for (let c of ret.memberCntStatList) {
            cntMap[c.createDateId] = c.count;
          }
          for (let bt = args.beginDate; bt <= args.endDate; bt = new Date(bt.getTime() + 3600 * 24 * 1000)) {
            xdata.push(bt.format('M/d'));
            cnt = cntMap[bt.format('yyyyMMdd')];
            if (!cnt) cnt = 0;
            ydata.push(cnt);
          }
        } else if (statType === 2) {
          let cntMap = {};
          for (let c of ret.memberCntStatList) {
            cntMap[c.createWeek] = c.count;
          }
          let beginWeek = $.Util.getYearWeek(args.beginDate);
          let endWeek = $.Util.getYearWeek(args.endDate);
          for (let w = beginWeek; w <= endWeek; w++) {
            xdata.push('{0}周'.format(w));
            cnt = cntMap[w];
            if (!cnt) cnt = 0;
            ydata.push(cnt);
          }
        } else if (statType === 3) {
          let year, month;
          for (let c of ret.memberCntStatList) {
            year = parseInt(c.createMonth / 100);
            month = c.createMonth % 100;
            xdata.push('{0}/{1}'.format(year, month));
            ydata.push(c.count);
          }
        }

        this.memberEntryChartData.xdata = xdata;
        this.memberEntryChartData.ydata = ydata;
      }, false, err => {
        this.mentryQueryLoading = false;
        $.Dlg.error(err);
      });
    },

    loadMemberCardPaymentCntStat(statType) {
      if (statType === null) {
        statType = this.memberCntForCpQuery.statType;
      }
      if (statType !== 3) {
        if (!this.memberCntForCpQuery.dates[0] || !this.memberCntForCpQuery.dates[1]) {
          $.Dlg.error('请输入完整的日期范围。');
          return;
        }

        if (statType === 2) {
          let beginDate = this.memberCntForCpQuery.dates[0];
          let endDate = this.memberCntForCpQuery.dates[1];
          if (beginDate.getFullYear() !== endDate.getFullYear()) {
            beginDate.setFullYear(endDate.getFullYear());
            beginDate.setMonth(0);
            beginDate.setDate(1);
            this.memberCntForCpQuery.dates = [beginDate, endDate];
          }
        }
      }

      this.memberCntForCpQuery.statType = statType;
      let args = {
        statType: statType,
        beginDate: this.memberCntForCpQuery.dates[0],
        endDate: this.memberCntForCpQuery.dates[1]
      };

      this.mcntForCpQueryLoading = true;
      $.Req.service($.SvName.MEMBER_CARD_PAYMENT_CNT_STAT, args, ret => {
        this.mcntForCpQueryLoading = false;
        let xdata = [],
            ydata = [],
            cnt;
        if (statType === 1) {
          let cntMap = {};
          for (let c of ret.memberCntStatList) {
            cntMap[Date.new(c.createDate).format('yyyyMMdd')] = c.count;
          }
          for (let bt = args.beginDate; bt <= args.endDate; bt = new Date(bt.getTime() + 3600 * 24 * 1000)) {
            xdata.push(bt.format('M/d'));
            cnt = cntMap[bt.format('yyyyMMdd')];
            if (!cnt) cnt = 0;
            ydata.push(cnt);
          }
        } else if (statType === 2) {
          let cntMap = {};
          for (let c of ret.memberCntStatList) {
            cntMap[c.createWeek] = c.count;
          }
          let beginWeek = $.Util.getYearWeek(args.beginDate);
          let endWeek = $.Util.getYearWeek(args.endDate);
          for (let w = beginWeek; w <= endWeek; w++) {
            xdata.push('{0}周'.format(w));
            cnt = cntMap[w];
            if (!cnt) cnt = 0;
            ydata.push(cnt);
          }
        } else if (statType === 3) {
          let year, month;
          for (let c of ret.memberCntStatList) {
            year = parseInt(c.createMonth / 100);
            month = c.createMonth % 100;
            xdata.push('{0}/{1}'.format(year, month));
            ydata.push(c.count);
          }
        }

        this.memberCntForCpChartData.xdata = xdata;
        this.memberCntForCpChartData.ydata = ydata;
      }, false, err => {
        this.mcntForCpQueryLoading = false;
        $.Dlg.error(err);
      });
    },

    statMemberEntryByDateShortcuts(idx) {
      this.memberEntryQuery.showMoreDates = false;
      this.memberEntryQuery.dateIdx = idx;
      let d = this.memberEntryQuery.dateShortcuts[idx];
      this.memberEntryQuery.dates = [new Date(d.beginDate), new Date(d.endDate)];
      this.loadMemberEntryStat(null);
    },

    statMemberCntByDateShortcuts(idx) {
      this.memberCntQuery.showMoreDates = false;
      this.memberCntQuery.dateIdx = idx;
      let d = this.memberCntQuery.dateShortcuts[idx];
      this.memberCntQuery.dates = [new Date(d.beginDate), new Date(d.endDate)];
      this.loadMemberCntStat(null);
    },

    statMemberCntForCpByDateShortcuts(idx) {
      this.memberCntForCpQuery.showMoreDates = false;
      this.memberCntForCpQuery.dateIdx = idx;
      let d = this.memberCntForCpQuery.dateShortcuts[idx];
      this.memberCntForCpQuery.dates = [new Date(d.beginDate), new Date(d.endDate)];
      this.loadMemberCardPaymentCntStat(null);
    },

    toggleMemberEntryQueryDates() {
      this.memberEntryQuery.showMoreDates = !this.memberEntryQuery.showMoreDates;
    },

    toggleMemberCntQueryDates() {
      this.memberCntQuery.showMoreDates = !this.memberCntQuery.showMoreDates;
    },

    toggleMemberCntForCpQueryDates() {
      this.memberCntForCpQuery.showMoreDates = !this.memberCntForCpQuery.showMoreDates;
    }
  }
});

/***/ }),

/***/ 1479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stat_head_vue__ = __webpack_require__(979);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stat_head_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stat_head_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stat_staff_head_vue__ = __webpack_require__(1101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stat_staff_head_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__stat_staff_head_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__member_member_base_vue__ = __webpack_require__(963);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__member_member_base_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__member_member_base_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { StatHead: __WEBPACK_IMPORTED_MODULE_0__stat_head_vue___default.a, StatStaffHead: __WEBPACK_IMPORTED_MODULE_1__stat_staff_head_vue___default.a, MemberBase: __WEBPACK_IMPORTED_MODULE_2__member_member_base_vue___default.a },
  data() {
    return {
      g: $,
      coachType: 2,
      query: {
        beginDate: null,
        endDate: null,
        orderBy: 'lessonDate',
        deptId: null
      },
      dateOptions: {
        disabledDate(date) {
          return date && date.valueOf() > Date.now();
        }
      },
      dateShortcuts: [],
      statLists: [[], [], []],
      statConf: [{ typeName: '上课次数', statType: 1, unitType: '次', bgcolor: 'orange' }, { typeName: '学员数', statType: 2, unitType: '人', bgcolor: '#47DC47' }, { typeName: '平均得分', statType: 3, unitType: '分', bgcolor: '#01BFC6' }],
      loadings: [false, false, false],
      queryDateShourtcut: null,
      coachLessonCostList: [],
      sum: {
        lessonCnt: null,
        lessonFee: null,
        custLessonCnt: null,
        salesAmount: null,
        valueCardCost: null,
        timesCardCost: null
      },
      plDetailSum: {
        lessonCnt: null,
        finishedLessonCnt: null,
        coachLessonFee: null,
        memberCardPaymentAmount: null,
        memberCardPaymentTimes: null,
        sumOfTimesCardAmount: null
      },
      coachTotalLessonStatMap: {},
      includePcTotal: false,
      coachSaleMap: {},
      dlg: {
        selectCoachId: null,
        selectCoachName: null,
        pcLessonView: false,
        privateLessonList: null,
        salesView: false,
        mcpList: null
      },
      selectCoachName: '',
      privateCoachList: null,
      privateCoachIdList: [],
      enablePrivateCoachScore: false,
      coachList: [],
      memberPlStatList: null,
      courseStatList: null,
      selectCourseId: null,
      exportDlg: false,
      exportFileUrl: null,
      viewMemberId: null,
      salesChartData: null,
      salesNames: [],
      departmentList: null,

      dateIdx: 0,
      dlgView: {
        inputShow: false
      },
      checkDlgViewName: '',
      minDate: new Date(1940, 0, 1),
      maxDate: new Date(),
      currentDate: new Date(),
      thisYear: new Date().getFullYear(),
      thisMonth: new Date().getMonth(),
      thisDate: new Date().getDate(),
      changeDate: new Date(),
      endDate: null,
      beginDate: null,

      tableTheadList: [],
      tableFixColNumber: 1,
      tableThMinWidth: 120,
      scrolledTop: 0,
      scrolledLeft: 0,
      zIndexTop: 0,
      zIndexLeft: 0,
      fixNumber: [0],
      respsTableWid: null,
      respsTableFixHeadWid: null,

      active: 0,
      tabData: [{ name: '上课次数', active: 1, unitType: '次' }, { name: '学员人数', active: 2, unitType: '人' }, { name: '平均得分', active: 3, unitType: '分' }],

      viewMemberDlg: false,
      selectMemberId: null,
      member: null,
      selectMemberName: null,
      shortcutsIdx: null,
      defaultDeptName: null,
      staffDeptIds: []
    };
  },

  created() {
    this.initDateShortCuts();
    this.queryDepartments();
    $.Req.queryCoachBase(2, coachList => {
      if (coachList) {
        this.privateCoachList = coachList;
        this.statByDateShortcuts(0);
        this.queryPrivateCoachScorePermit();
      }
    });
    this.initTable();
  },

  computed: {
    salesAmountStatOption() {
      return {
        title: {
          text: '私教销售业绩统计图',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c}"
        },
        legend: {
          orient: 'vertical',
          x: 'left',
          data: ''
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: {
              show: true,
              type: ['pie', 'funnel'],
              option: {
                funnel: {
                  x: '25%',
                  width: '50%',
                  funnelAlign: 'left',
                  max: 1548
                }
              }
            },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        series: [{
          name: '销售额',
          type: 'pie',
          radius: '45%',
          center: ['50%', '55%'],
          data: this.salesChartData
        }]
      };
    }
  },

  methods: {
    viewMember(m) {
      this.selectMemberName = m.memberName;
      this.selectMemberId = m.memberId;
      this.member = m;
      this.viewMemberDlg = true;
    },

    initTable() {
      let _this = this;
      let timer = null;
      this.tableTheadList = [{ title: '教练' }, { title: '销售额' }, { title: '常规课上课次数' }, { title: '常规课教练课时费' }, { title: '体验课上课次数' }, { title: '储值卡消费' }, { title: '次卡消费' }, { title: '次卡消费金额' }, { title: '明细' }];
      if (this.$refs.respsTable) {
        document.getElementById('respsTable').scrollTop = 0;
        document.getElementById('respsTable').scrollLeft = 0;
        this.scrolledTop = 0;
        this.scrolledLeft = 0;
      }
      timer = setTimeout(() => {
        this.$nextTick(() => {
          let tableTh = document.getElementById('table-th');
          if (tableTh) {
            let tableThs = tableTh.children;
            this.respsTableWid = tableTh.clientWidth;
            let tableFixHeadTh = document.getElementById('table-fix-head-th');
            let tableFixHeadThs = tableFixHeadTh.children;
            let tableFixColTd = document.getElementById('table-fix-col-td');
            let tableFixColTds = tableFixColTd.children;
            let tableFixTh = document.getElementById('table-fix-th');
            let tableFixThs = tableFixTh.children;
            if (tableFixHeadTh && tableThs) {
              for (let i = 0; i < tableThs.length - 1; i++) {
                tableFixHeadThs[i].style.width = tableThs[i].offsetWidth + 'px';
                if (tableFixColTds[i]) {
                  tableFixColTds[i].style.width = tableThs[i].offsetWidth + 'px';
                  tableFixColTds[i].style.height = tableThs[i].offsetHeight + 'px';
                }
                if (tableFixThs[i]) {
                  tableFixThs[i].style.width = tableThs[i].offsetWidth + 'px';
                  tableFixThs[i].style.height = tableThs[i].offsetHeight + 'px';
                }
              }
            }
            if (this.coachLessonCostList && this.coachLessonCostList.length) {
              this.coachLessonCostList.map((item, idx) => {
                document.getElementById('fix-col-td-' + idx).style.height = document.getElementById('rel-col-td-' + idx).offsetHeight + 'px';
              });
              document.getElementById('fix-col-td-total').style.height = document.getElementById('rel-col-td-total').offsetHeight + 'px';
            }
            document.getElementById('respsTable').addEventListener('scroll', () => {
              if (this.$refs.respsTable) {
                this.scrolledTop = this.$refs.respsTable.scrollTop;
                this.scrolledLeft = this.$refs.respsTable.scrollLeft;
              }
            });
          }
        });
      }, 1000);
    },

    showInputDlg(name) {
      this.dlgView.inputShow = true;
      this.checkDlgViewName = name;
      if (this.currentDate && this[name]) {
        let date = this[name].split('-');
        this.currentDate = new Date(parseInt(date[0]), parseInt(date[1]) - 1, parseInt(date[2]));
      }
    },

    confirmDatePiker(name) {
      let date = { year: null, month: null, date: null, hr: null, min: null, sec: null };
      date.year = this.currentDate.getFullYear();
      date.month = this.currentDate.getMonth() < 9 ? '0' + (this.currentDate.getMonth() + 1) : this.currentDate.getMonth() + 1;
      date.date = this.currentDate.getDate() < 10 ? '0' + this.currentDate.getDate() : this.currentDate.getDate();
      if (name === 'beginDate') {
        this.beginDate = date.year + '-' + date.month + '-' + date.date;
        this.query.beginDate = this.beginDate;
      } else if (name === 'endDate') {
        this.endDate = date.year + '-' + date.month + '-' + date.date;
        this.query.endDate = this.endDate;
      }
      this.dlgView.inputShow = false;
    },

    initDateShortCuts() {
      // 获取最近6个月的月份
      let today = new Date();
      let date = new Date();
      date.setDate(1);
      let year, month, beginDate, endDate;
      for (let i = 0; i < 6; i++) {
        year = date.getFullYear();
        month = date.getMonth();
        beginDate = new Date(date.getFullYear(), month, 1);
        if (i === 0) {
          endDate = new Date(today);
        } else {
          endDate = new Date(date.getFullYear(), month + 1, 0);
        }

        this.dateShortcuts.push({
          name: '{0}-{1}月'.format(date.getFullYear(), month + 1),
          beginDate: beginDate,
          endDate: endDate
        });

        date.setMonth(month - 1);
      }
      /*this.dateShortcuts.push({
       name: today.getFullYear() + '年',
       beginDate: new Date(today.getFullYear(), 0, 1),
       endDate : today,
       });*/
    },

    statCoachLessonCost(callback = null) {
      let args = {
        beginDate: this.query.beginDate,
        endDate: this.query.endDate,
        deptId: this.query.deptId
      };
      $.Req.service($.SvName.COACH_LESSON_COST_STAT, args, ret => {
        let coachIds = {};
        for (let s of ret.lessonCostList) {
          coachIds[s.coachId] = true;
        }
        for (let c of this.privateCoachList) {
          if (!coachIds[c.staffId]) {
            ret.lessonCostList.push({ coachId: c.staffId, coachName: c.name });
          }
        }
        if (ret.custLessonStatList) {
          for (let s of ret.lessonCostList) {
            for (let c of ret.custLessonStatList) {
              if (s.coachId === c.coachId) {
                s.custLessonCnt = c.custLessonCnt;
                break;
              }
            }
          }
        }
        let sumLessonCnt = 0,
            sumFee = 0,
            sumCustLessonCnt = 0,
            sumValueCardCost = 0,
            sumTimesCardCost = 0,
            sumTimesCardCoustAmount = 0;
        this.coachList = [];
        for (let s of ret.lessonCostList) {
          if (s.lessonCnt) sumLessonCnt += s.lessonCnt;
          if (s.lessonFee) sumFee += s.lessonFee;
          if (s.custLessonCnt) sumCustLessonCnt += s.custLessonCnt;
          if (s.valueCardCost) sumValueCardCost += s.valueCardCost;
          if (s.timesCardCost) sumTimesCardCost += s.timesCardCost;
          if (s.timesCardCostAmount) sumTimesCardCoustAmount += s.timesCardCostAmount;
          this.coachList.push({ coachId: s.coachId, coachName: s.coachName });
        }
        this.sum.lessonCnt = $.Util.round(sumLessonCnt);
        this.sum.lessonFee = $.Util.round(sumFee);
        this.sum.custLessonCnt = $.Util.round(sumCustLessonCnt);
        this.sum.valueCardCost = $.Util.round(sumValueCardCost);
        this.sum.timesCardCost = $.Util.round(sumTimesCardCost);
        this.sum.timesCardCostAmount = $.Util.round(sumTimesCardCoustAmount);
        this.coachLessonCostList = ret.lessonCostList;

        this.privateCoachIdList = [];
        for (let c of ret.lessonCostList) {
          this.privateCoachIdList.push(c.coachId);
        }
        if (callback) callback();
      }, true);
    },

    statByDateShortcuts(r) {
      let queryDateShourtcut = null;
      if (typeof r == 'number') {
        queryDateShourtcut = r;
      } else {
        queryDateShourtcut = r.selectedIdx;
      }
      let d = this.dateShortcuts[queryDateShourtcut];
      this.beginDate = $.Util.formatDate(d.beginDate);
      this.endDate = $.Util.formatDate(d.endDate);
      this.query.beginDate = new Date(d.beginDate);
      this.query.endDate = new Date(d.endDate);
      this.statCoach();
      this.statCoachLessonCost(() => {
        this.statCoachSales();
      });
    },

    statCoach() {
      for (let i = 0; i < 3; i++) {
        this.callCoachStat(i + 1, ret => {
          this.$set(this.statLists, i, ret.coachStatList);
        });
      }
    },

    callCoachStat(statType, callback) {
      let args = {
        coachType: this.coachType,
        statType: statType,
        beginDate: this.query.beginDate,
        endDate: this.query.endDate
      };
      this.$set(this.loadings, statType - 1, true);
      $.Req.service($.SvName.COACH_STAT, args, ret => {
        this.$set(this.loadings, statType - 1, false);
        callback(ret);
      }, false, err => {
        this.$set(this.loadings, statType - 1, false);
        $.Dlg.error(err);
      });
    },

    statCoachSales() {
      let args = {
        statType: 1,
        needStatAll: true,
        beginDate: this.query.beginDate,
        endDate: this.query.endDate,
        deptId: this.query.deptId
      };

      $.Req.service($.SvName.SALES_STAT, args, ret => {
        this.coachSaleMap = {};
        let sum = 0;
        for (let r of ret.salesStatList) {
          this.coachSaleMap[r.salesId] = r.salesAmount;
        }
        for (let id of this.privateCoachIdList) {
          if (this.coachSaleMap[id]) {
            sum += this.coachSaleMap[id];
          }
        }
        this.sum.salesAmount = $.Util.round(sum);

        // gen chart data
        this.salesNames = [];
        this.salesChartData = [];
        for (let s of ret.salesStatList) {
          if (!this.privateCoachIdList.contains(s.salesId)) continue;

          let sname = "{0} ￥{1}（{2}%）".format(s.salesName, $.Util.round(s.salesAmount), (s.salesAmount * 100 / sum).toFixed(1));
          this.salesNames.push({ value: s.salesAmount, name: s.salesName, percent: (s.salesAmount * 100 / sum).toFixed(1) });
          this.salesChartData.push({ value: s.salesAmount, name: sname });
        }
      });
    },

    doQuery() {
      this.queryDateShourtcut = null;
      this.statCoach();
      this.statCoachLessonCost();
      this.statCoachSales();
      this.initTable();
    },

    viewPrivateLesson(coachId) {
      this.dlg.selectCoachId = coachId;
      this.dlg.pcLessonView = true;
      this.selectMemberId = null;
      this.coachList.map(item => {
        if (item.coachId == this.dlg.selectCoachId) this.selectCoachName = item.coachName;
      });
      this.queryPrivateLesson();
    },

    queryPrivateLesson(isExport = null) {
      let args = {
        coachId: this.dlg.selectCoachId,
        beginDate: this.query.beginDate,
        endDate: this.query.endDate,
        //needPaging: false,
        needMemberCardInfo: true,
        needStatMemberLessonCount: true,
        needStatCourseCount: true,
        orderBy: this.query.orderBy,
        needTimesCardAmount: true
      };
      if (isExport) {
        args.orderBy = 'coachFirst';
        args.coachId = null;
        args.isExport = true;
        this.exportDlg = true;
      }
      if (this.selectMemberId) {
        args.memberId = this.selectMemberId;
      }
      if (this.selectCourseId) {
        args.courseId = this.selectCourseId;
      }
      let sumOfCoachLessonFee = 0,
          sumOfMemberValueCardPayment = 0,
          sumOfFinishedLessonCnt = 0,
          sumOfMemberCardTimes = 0;
      $.Req.service($.SvName.PC_LESSON_QUERY, args, ret => {
        if (isExport) {
          this.exportFileUrl = ret.fileurl;
          return;
        }

        for (let l of ret.pcLessonList) {
          l.lessonDate = $.Util.formatDate(l.lessonDate);
          l.lessonTimeDesc = "{0}~{1}".format($.Util.formatTime(l.beginTime), $.Util.formatTime(l.endTime));

          if (l.status === 9) {
            if (l.memberCardType === 2) sumOfMemberCardTimes += l.memberCardPayment;else if (l.memberCardType === 3) sumOfMemberValueCardPayment += l.memberCardPayment;
            if (l.coachLessonFee) sumOfCoachLessonFee += l.coachLessonFee;
            sumOfFinishedLessonCnt++;
          }
        }
        this.plDetailSum.lessonCnt = ret.pcLessonList ? ret.pcLessonList.length : 0;
        this.plDetailSum.coachLessonFee = sumOfCoachLessonFee;
        this.plDetailSum.memberCardPaymentAmount = sumOfMemberValueCardPayment;
        this.plDetailSum.memberCardPaymentTimes = sumOfMemberCardTimes;
        this.plDetailSum.finishedLessonCnt = sumOfFinishedLessonCnt;
        this.plDetailSum.sumOfTimesCardAmount = $.Util.round(ret.sumOfTimesCardAmount);
        this.dlg.privateLessonList = ret.pcLessonList;
        this.memberPlStatList = ret.memberPlStatList;
        this.courseStatList = ret.courseStatList;
      }, true);
    },

    viewCoachSales(coachId) {
      this.dlg.selectCoachId = coachId;
      this.dlg.salesView = true;
      this.queryMemberCardPayments();
    },

    queryMemberCardPayments(isExport = null) {
      let args = {
        salesId: this.dlg.selectCoachId,
        beginDate: this.query.beginDate,
        endDate: this.query.endDate,
        needPaging: false
      };
      if (isExport) {
        args.salesId = null;
        args.salesIdList = this.privateCoachIdList;
        args.isExport = true;
        this.exportFileUrl = null;
        this.exportDlg = true;
      }
      $.Req.service($.SvName.MEMBER_CARD_PAYMENT_QUERY, args, ret => {
        if (isExport) {
          this.exportFileUrl = ret.fileurl;
          return;
        }

        this.dlg.mcpList = ret.memberCardPaymentList;
      }, true);
    },

    queryPrivateCoachScorePermit() {
      let args = { typeId: $.Dict.ShopArg.PRIVATE_COACH_LESSON_SALARY_TYPE };
      $.Req.service($.SvName.SHOP_ARG_QUERY, args, ret => {
        this.enablePrivateCoachScore = ret.value === '4';
      });
    },

    changeCoachForPlList(val) {
      this.dlg.selectCoachId = val;
      this.selectMemberId = null;
      this.queryPrivateLesson();
    },

    queryMemberPlStatByMemberId(memberId) {
      if (memberId === this.selectMemberId) {
        this.selectMemberId = null;
      } else {
        this.selectMemberId = memberId;
      }
      this.queryPrivateLesson();
    },

    queryMemberPlStatByCourse(courseId) {
      if (courseId === this.selectCourseId) {
        this.selectCourseId = null;
      } else {
        this.selectCourseId = courseId;
      }
      this.queryPrivateLesson();
    },

    setOrderBy(orderBy) {
      this.query.orderBy = orderBy;
      this.queryPrivateLesson();
    },

    queryDepartments(callback = null) {
      let args = { isBaseInfo: true };
      $.Req.service($.SvName.SHOP_DEPARTMENT_QUERY, args, ret => {
        if ($.data.user.isShopOwner) {
          this.departmentList = ret.departmentList;
        } else {
          this.departmentList = [];
          let myStaffId = $.data.user.staffId + '';
          for (let d of ret.departmentList) {
            if (d.ownerStaffIds && d.ownerStaffIds.split(',').contains(myStaffId)) {
              this.staffDeptIds.push(d.sdId);
              this.departmentList.push(d);
            }
          }
          if (this.departmentList.length === 0) this.departmentList = ret.departmentList;else {
            this.query.deptId = this.departmentList[0].sdId;
            this.defaultDeptName = this.departmentList[0].deptName;
          }
        }

        if ($.data.user.isShopOwner || $.Util.isEmptyArray(this.staffDeptIds)) {
          this.defaultDeptName = '所有部门';
          this.departmentList.unshift({ sdId: -1, deptName: '所有部门' });
        }
        if (callback) callback();
      });
    },

    changeDeptId(r) {
      if (r) {
        this.query.deptId = r.selected.sdId;
      }
      this.statCoachLessonCost();
      this.statCoachSales();
      this.initTable();
    }
  }
});

/***/ }),

/***/ 1480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stat_course_vue__ = __webpack_require__(1270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stat_course_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stat_course_vue__);
//
//
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
  components: { StatCourse: __WEBPACK_IMPORTED_MODULE_0__stat_course_vue___default.a },
  data() {
    return {
      cards: []
    };
  },

  created() {},

  methods: {}
});

/***/ }),

/***/ 1481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stat_head_vue__ = __webpack_require__(979);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stat_head_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stat_head_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_calendar_calendar_by_day__ = __webpack_require__(1019);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_calendar_calendar_by_day___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_calendar_calendar_by_day__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_calendar_calendar_vue__ = __webpack_require__(959);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_calendar_calendar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_calendar_calendar_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { CalendarByDay: __WEBPACK_IMPORTED_MODULE_1__components_calendar_calendar_by_day___default.a, StatHead: __WEBPACK_IMPORTED_MODULE_0__stat_head_vue___default.a, Calendar: __WEBPACK_IMPORTED_MODULE_2__components_calendar_calendar_vue___default.a },
  data() {
    return {
      g: $,
      queryDate: null,
      queryDateProp: null,
      queryDates: [null, null],
      minDate: new Date(1940, 0, 1),
      maxDate: new Date(),
      currentDate: new Date(),
      thisYear: new Date().getFullYear(),
      checkDlgViewName: '',
      checkinDateId: [],
      hasRequest: true,
      dlgView: {
        inputShow: false,
        detail: false
      },
      selectDayFlag: false,
      endDate: null,
      beginDate: null,

      dateOptions: {
        disabledDate(date) {
          return date && date.valueOf() > Date.now();
        }
      },
      totalAmount: 0,
      sumAmounts: {},
      loadFlag: {
        sumStat: false,
        memberCardStat: false,
        courseStat: false,
        chargeItemStat: false
      },
      memberCardStatList: [],
      memberCardCntTotal: null,
      memberCardAmtTotal: null,
      gcCardStatList: [],
      gcCardCntTotal: null,
      gcCardAmtTotal: null,
      pcCardStatList: [],
      pcCardAmtTotal: null,
      pcCardCntTotal: null,
      chargeItemStatList: [],
      chargeItemCntTotal: null,
      chargeItemAmtTotal: null,
      queryDateType: 1,
      cardChgDlg: {
        title: '',
        show: false,
        data: null,
        cardClass: null
      },
      totalCount: null,
      queryPage: null,
      chargeListDlg: false,
      chargeList: null,
      chargeTotalCount: null,
      seeFutureDay: false,
      payChnlTypes: [1, 2, 3, 4, 5],
      payChnlCheck: [false, true, true, true, true, true]
    };
  },

  created() {
    this.queryDate = $.Util.formatDate(new Date());
    this.loadData();
    let oDate = new Date();
    this.month = oDate.getMonth();
    this.year = oDate.getFullYear();
    this.date = oDate.getDate();
  },

  methods: {
    loadData() {
      this.statChargePaymentChnl();
      this.statMemberCard();
      this.statCourseCard();
      this.statChargeItem();
    },

    querySelectedDay(arg) {
      this.queryDate = arg;
      this.loadData();
    },

    queryByDayNav(alt) {
      if (alt > 0 && Date.new(this.queryDate).compareDatePart(new Date()) >= 0) {
        $.Msg.warning($.Lang.NAV_TO_TOMORROW_TIPS);
        return;
      }
      this.queryDate = $.Util.formatDate(new Date(Date.new(this.queryDate).getTime() + alt * 3600 * 24 * 1000));
      let queryDateProp = this.queryDate.split('-');
      this.$refs.calendar.initDate(queryDateProp);
      this.loadData();
    },

    statChargePaymentChnl() {
      this.loadFlag.sumStat = true;
      let args = {};
      if (this.queryDateType === 1) {
        if (!this.queryDate) {
          $.Msg.error('请选择统计日期');
          return;
        }
        args.beginDate = this.queryDate;
        args.endDate = this.queryDate;
      } else if (this.queryDateType === 2) {
        if (!this.checkQueryDates()) return;
        args.beginDate = this.queryDates[0];
        args.endDate = this.queryDates[1];
      }
      this.sumAmounts = {};
      $.Req.service($.SvName.CHARGE_PAYMENT_CHNL_STAT, args, ret => {
        for (let s of ret.chargePaymentChnlStatList) {
          this.sumAmounts[s.paymentChannel] = s.amount;
        }
        this.loadFlag.sumStat = false;
        this.sumTotalAmount();
      }, true);
    },

    statMemberCard() {
      let args = {};
      if (this.queryDateType === 1) {
        if (!this.queryDate) {
          $.Msg.error('请选择统计日期');
          return;
        }
        args.beginDate = this.queryDate;
        args.endDate = this.queryDate;
      } else if (this.queryDateType === 2) {
        if (!this.checkQueryDates()) return;
        args.beginDate = this.queryDates[0];
        args.endDate = this.queryDates[1];
      }

      this.loadFlag.memberCardStat = true;
      $.Req.service($.SvName.MEMBER_CARD_STAT, args, ret => {
        this.memberCardStatList = ret.cardStatList;
        this.memberCardCntTotal = ret.totalCount;
        this.memberCardAmtTotal = ret.totalAmount;
        this.loadFlag.memberCardStat = false;
      });
    },

    statCourseCard() {
      let args = {};
      if (this.queryDateType === 1) {
        if (!this.queryDate) {
          $.Msg.error('请选择统计日期');
          return;
        }
        args.beginDate = this.queryDate;
        args.endDate = this.queryDate;
      } else if (this.queryDateType === 2) {
        if (!this.checkQueryDates()) return;
        args.beginDate = this.queryDates[0];
        args.endDate = this.queryDates[1];
      }

      this.loadFlag.courseStat = true;
      $.Req.service($.SvName.COURSE_CARD_STAT, args, ret => {
        this.gcCardStatList = ret.groupCourseCardStatList;
        this.gcCardCntTotal = ret.gcCardTotalCount;
        this.gcCardAmtTotal = ret.gcCardTotalAmount;

        this.pcCardStatList = ret.privateCourseCardStatList;
        this.pcCardCntTotal = ret.pcCardTotalCount;
        this.pcCardAmtTotal = ret.pcCardTotalAmount;

        this.loadFlag.courseStat = false;
      });
    },

    statChargeItem() {
      this.loadFlag.chargeItemStat = true;
      let args = {};
      if (this.queryDateType === 1) {
        if (!this.queryDate) {
          $.Msg.error('请选择统计日期');
          return;
        }
        args.beginDate = this.queryDate;
        args.endDate = this.queryDate;
      } else if (this.queryDateType === 2) {
        if (!this.checkQueryDates()) return;
        args.beginDate = this.queryDates[0];
        args.endDate = this.queryDates[1];
      }
      $.Req.service($.SvName.CHARGE_ITEM_STAT, args, ret => {
        this.chargeItemStatList = ret.chargeItemStatList;
        this.chargeItemCntTotal = ret.totalQuantity;
        this.chargeItemAmtTotal = ret.totalAmount;
        this.loadFlag.chargeItemStat = false;
      });
    },

    statByWhich(t) {
      this.queryDateType = t;
      this.queryDateProp = null;
    },

    queryMonth(beginDate) {
      this.queryDate = $.Util.formatDate(beginDate ? beginDate['0'] : new Date(this.year, this.month, 1));
      this.queryDateProp = this.queryDate;
      this.selectDayFlag = false;
    },

    querySelectedDate(arg) {
      let date = arg;
      if (date) {
        date = date < 10 ? '0' + date : date;
      }
      let queryDate = this.queryDate.substring(0, 8) + date;
      this.queryDateProp = queryDate;
      this.selectDayFlag = true;
    },

    showInputDlg(name) {
      this.dlgView.inputShow = true;
      this.checkDlgViewName = name;
      let month = this.month;
      month = month < 9 ? '0' + month : month + 1;
      this.currentDate = this[name] ? this[name] : this.year + '-' + month + '-' + this.date;
      // this.seeFutureDay = name == "beginDate" ? true : false
    },

    cancleChoseDate() {
      this.dlgView.inputShow = false;
    },

    confirmDatePiker() {
      if (this.selectDayFlag) {
        if (this.checkDlgViewName == 'beginDate') {
          this.beginDate = this.queryDateProp;
          this.queryDates[0] = this.queryDateProp;
        } else {
          this.endDate = this.queryDateProp;
          this.queryDates[1] = this.queryDateProp;
        }
        this.dlgView.inputShow = false;
        this.queryDateProp = null;
      } else {
        $.Bble.warning('请选择日期');
      }
    },

    clearDate(t) {
      if (!t) {
        this.queryDateProp = null;
        this.beginDate = null;
        this.queryDates[0] = null;
      } else {
        this.queryDateProp = null;
        this.endDate = null;
        this.queryDates[1] = null;
      }
    },

    changeQueryDates() {
      if (!this.checkQueryDates()) return;
      this.loadData();
    },

    checkQueryDates() {
      if (!this.queryDates || !this.queryDates[0] || !this.queryDates[1]) {
        $.Msg.warning('请设置日期范围');
        return false;
      }
      if ($.Util.calcDateDiffDays(this.queryDates[1], this.queryDates[0]) > 180) {
        $.Msg.warning('日期范围不能超过180天');
        return false;
      }
      if (this.queryDates[0] > this.queryDates[1]) {
        $.Msg.warning('开始日期须小于结束日期');
        return false;
      }
      return true;
    },

    viewCardPaymentDetail(cardClass) {
      if (!$.Util.isEmpty(cardClass)) {
        this.queryPage = null;
        this.cardChgDlg.cardClass = cardClass;
      }

      let args = {
        cardClass: this.cardChgDlg.cardClass,
        ignoreSum: true,
        page: this.queryPage
      };
      if (this.queryDateType === 1) {
        if (!this.queryDate) {
          $.Msg.error('请选择统计日期');
          return;
        }
        args.beginDate = this.queryDate;
        args.endDate = this.queryDate;
      } else if (this.queryDateType === 2) {
        if (!this.checkQueryDates()) return;
        args.beginDate = this.queryDates[0];
        args.endDate = this.queryDates[1];
      }
      if (cardClass === 0) this.cardChgDlg.title = '会籍卡销售明细';else if (cardClass === 1) this.cardChgDlg.title = '团课卡销售明细';else if (cardClass === 2) this.cardChgDlg.title = '私教卡销售明细';

      $.Req.service($.SvName.MEMBER_CARD_PAYMENT_QUERY, args, ret => {
        this.cardChgDlg.data = ret.memberCardPaymentList;
        if (ret.count) this.totalCount = ret.count;
        this.cardChgDlg.show = true;
      });
    },

    changePageNo(page) {
      this.queryPage = page;
      this.viewCardPaymentDetail();
    },

    viewChargeDetail() {
      this.queryChargeList(null);
      this.chargeListDlg = true;
    },

    queryChargeList(page = null) {
      let args = {
        arAp: 0,
        chargeFromList: [1, 3, 4, 5, 7, 8, 9, 10, 11],
        page: page
      };
      if (this.queryDateType === 1) {
        args.beginDate = this.queryDate;
        args.endDate = this.queryDate;
      } else if (this.queryDateType === 2) {
        args.beginDate = this.queryDates[0];
        args.endDate = this.queryDates[1];
      }
      $.Req.service($.SvName.CHARGE_QUERY, args, ret => {
        this.chargeList = ret.chargeList;
        if (!page) {
          this.chargeTotalCount = ret.count;
        }
      }, true);
    },

    sumTotalAmount(chnl) {
      this.payChnlCheck[chnl] = !this.payChnlCheck[chnl];
      this.totalAmount = 0;
      for (let chnl in this.sumAmounts) {
        if (this.payChnlCheck[chnl]) this.totalAmount += this.sumAmounts[chnl];
      }
    }
  }
});

/***/ }),

/***/ 1482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stat_head_vue__ = __webpack_require__(979);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stat_head_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stat_head_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { StatHead: __WEBPACK_IMPORTED_MODULE_0__stat_head_vue___default.a },
  computed: {
    chargeChartOption() {
      return {
        textStyle: {
          color: this.themeFontColor
        },
        grid: { x: 45, y: 30, x2: 30, y2: 20 },
        legend: {
          data: ['收入', '支出', '余额']
        },
        tooltip: {
          trigger: 'axis',
          formatter: function (a) {
            if (!a || a.length === 0) return '';

            let elements = [];
            for (let e of a) {
              elements.push('{0}：￥{1}'.format(e.seriesName, e.value * 1000));
            }
            return a[0].name + '<br>' + elements.join('<br>');
          }
        },
        calculable: false,
        xAxis: [{
          padding: 1,
          type: 'category',
          boundaryGap: false,
          data: this.chargeChartData.xdata
        }],
        yAxis: [{
          type: 'value',
          axisLabel: {
            formatter: '{value} k'
          }
        }],
        series: [{
          name: '收入',
          type: 'line',
          data: this.chargeChartData.arAmounts,
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
        }, {
          name: '支出',
          type: 'line',
          data: this.chargeChartData.apAmounts,
          itemStyle: {
            normal: {
              color: "green"
            }
          },
          lineStyle: {
            normal: {
              color: "green"
            }
          }
        }, {
          name: '余额',
          type: 'line',
          data: this.chargeChartData.balances,
          itemStyle: {
            normal: {
              color: "#3399FF"
            }
          },
          lineStyle: {
            normal: {
              color: "#3399FF"
            }
          }
        }]
      };
    }

  },
  data() {
    return {
      g: $,
      stateType: 1,
      chargeChartData: {
        xdata: [],
        arAmounts: [],
        apAmounts: [],
        balances: []
      },
      chargeQuery: {
        statType: 1,
        dates: [null, null]
      },
      chargeStatList: [],
      dateBegin: null,
      dateEnd: null,
      showDlg: false,
      themeFontColor: ''
    };
  },

  created() {
    this.initQuery();
    this.loadChargeStat($.Dict.DateStatType.BY_DAY);
    this.themeChange();
  },

  methods: {
    initQuery() {
      let endDate = new Date();
      let beginDate = new Date(endDate.getTime() - 31 * 3600 * 24 * 1000);
      this.chargeQuery.dates = [beginDate, endDate];
      this.dateBegin = $.Util.formatDate(beginDate);
      this.dateEnd = $.Util.formatDate(endDate);
    },
    themeChange() {
      let themeFontColor = document.getElementsByTagName("body")[0].className;
      if (themeFontColor == 'theme-black') {
        this.themeFontColor = '#fff';
      }
    },
    loadChargeStat(statType) {
      if (statType !== 3) {
        if (!this.chargeQuery.dates[0] || !this.chargeQuery.dates[1]) {
          $.Dlg.error('请输入完整的日期范围。');
          return;
        }

        if (statType === 2) {
          let beginDate = this.chargeQuery.dates[0];
          let endDate = this.chargeQuery.dates[1];
          if (beginDate.getFullYear() !== endDate.getFullYear()) {
            beginDate.setFullYear(endDate.getFullYear());
            beginDate.setMonth(0);
            beginDate.setDate(1);
            this.chargeQuery.dates = [beginDate, endDate];
          }
        }
      }

      this.stateType = statType;
      this.chargeQuery.statType = statType;
      let args = {
        statType: statType,
        beginDate: this.chargeQuery.dates[0],
        endDate: this.chargeQuery.dates[1]
      };

      $.Req.service($.SvName.CHARGE_STAT, args, ret => {
        this.chargeStatList = ret.chargeStatList;

        let xdata = [],
            arAmounts = [],
            apAmounts = [],
            balances = [];
        if (statType === 1) {
          let arAmountMap = {},
              apAmountMap = {},
              balanceMap = {},
              dateid;
          for (let c of ret.chargeStatList) {
            dateid = Date.new(c.createDate).format('yyyyMMdd');
            arAmountMap[dateid] = c.arAmount / 1000;
            apAmountMap[dateid] = c.apAmount / 1000;
            balanceMap[dateid] = c.balance / 1000;
          }
          for (let bt = args.beginDate; bt <= args.endDate; bt = new Date(bt.getTime() + 3600 * 24 * 1000)) {
            xdata.push(bt.format('M/d'));
            dateid = bt.format('yyyyMMdd');
            arAmounts.push(arAmountMap[dateid] ? arAmountMap[dateid] : 0);
            apAmounts.push(apAmountMap[dateid] ? apAmountMap[dateid] : 0);
            balances.push(balanceMap[dateid] ? balanceMap[dateid] : 0);
          }
        } else if (statType === 2) {
          let arAmountMap = {},
              apAmountMap = {},
              balanceMap = {};
          for (let c of ret.chargeStatList) {
            arAmountMap[c.createWeek] = c.arAmount / 1000;
            apAmountMap[c.createWeek] = c.apAmount / 1000;
            balanceMap[c.createWeek] = c.balance / 1000;
          }
          let beginWeek = $.Util.getYearWeek(args.beginDate);
          let endWeek = $.Util.getYearWeek(args.endDate);
          for (let w = beginWeek; w <= endWeek; w++) {
            xdata.push('{0}周'.format(w));
            arAmounts.push(arAmountMap[w] ? arAmountMap[w] : 0);
            apAmounts.push(apAmountMap[w] ? apAmountMap[w] : 0);
            balances.push(balanceMap[w] ? balanceMap[w] : 0);
          }
        } else if (statType === 3) {
          let year, month;
          for (let c of ret.chargeStatList) {
            year = parseInt(c.createMonth / 100);
            month = c.createMonth % 100;
            xdata.push('{0}-{1}'.format(year, month));
            arAmounts.push(c.arAmount / 1000);
            apAmounts.push(c.apAmount / 1000);
            balances.push(c.balance / 1000);
          }
        }

        this.chargeChartData.xdata = xdata;
        this.chargeChartData.arAmounts = arAmounts;
        this.chargeChartData.apAmounts = apAmounts;
        this.chargeChartData.balances = balances;
      }, true);
    },
    formatMonth(monthId) {
      let year = parseInt(monthId / 100);
      let month = parseInt(monthId % 100);
      return '{0}-{1}月'.format(year, month);
    },
    handleQueryBtn() {
      this.chargeQuery.dates[0] = Date.new(this.dateBegin);
      this.chargeQuery.dates[1] = Date.new(this.dateEnd);
      this.loadChargeStat(this.chargeQuery.statType);
      this.showDlg = false;
    }
  }
});

/***/ }),

/***/ 1483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stat_head_vue__ = __webpack_require__(979);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stat_head_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stat_head_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stat_staff_head_vue__ = __webpack_require__(1101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stat_staff_head_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__stat_staff_head_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { StatHead: __WEBPACK_IMPORTED_MODULE_0__stat_head_vue___default.a, StatStaffHead: __WEBPACK_IMPORTED_MODULE_1__stat_staff_head_vue___default.a },
  data() {
    return {
      checkDlgViewName: '',
      minDate: new Date(2000, 0, 1),
      maxDate: new Date(),
      currentDate: new Date(),
      yearMonth: '',
      dlgView: {
        inputShow: false
      },
      departmentList: null,
      deptId: null,
      staffTargetList: null,
      shopName: '',
      shopTarget: null,
      staffTargetStatList: [],
      deptTargetStatList: [],
      deptTargetStatPie: [],
      salesChartData: null,
      shopChartData: [],
      shopTargetStatPie: [],
      staffDeptIds: [],
      defaultDeptName: null
    };
  },

  created() {
    let oDate = new Date();
    this.year = parseInt(oDate.getFullYear());
    this.month = parseInt(oDate.getMonth() + 1);
    this.yearMonth = this.year + '年' + this.month + '月';
    let year = oDate.getFullYear();
    this.maxDate = new Date(year + 2, 0, 1);

    this.queryDepartments(() => {
      this.querySalesTargetStat();
    });
  },

  computed: {
    salesAmountStatOption() {
      return {
        title: {
          text: '销售业绩统计图',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c}"
        },
        legend: {
          orient: 'vertical',
          x: 'left',
          data: ''
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: {
              show: true,
              type: ['pie', 'funnel'],
              option: {
                funnel: {
                  x: '25%',
                  width: '50%',
                  funnelAlign: 'left',
                  max: 1548
                }
              }
            },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        series: [{
          name: '',
          type: 'pie',
          radius: '40%',
          center: ['50%', '55%'],
          data: this.salesChartData
        }]
      };
    },
    shopAmountStatOption() {
      return {
        title: {
          text: '销售业绩统计图',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c}"
        },
        legend: {
          orient: 'vertical',
          x: 'left',
          data: ''
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: {
              show: true,
              type: ['pie', 'funnel'],
              option: {
                funnel: {
                  x: '25%',
                  width: '50%',
                  funnelAlign: 'left',
                  max: 1548
                }
              }
            },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        series: [{
          name: '',
          type: 'pie',
          radius: '40%',
          center: ['50%', '55%'],
          data: this.shopChartData
        }]
      };
    }
  },

  methods: {
    querySalesTargetStat() {
      let arg = { year: this.year, month: this.month };
      if (this.deptId > 0) arg.deptId = this.deptId;
      $.Req.service($.SvName.SALES_TARGET_STAT, arg, ret => {
        if (ret) {
          this.shopName = ret.shopName;
          this.shopTarget = ret.shopTarget;
          this.shopAchievement = ret.shopAchievement ? ret.shopAchievement : 0;
          this.shopCompletionRate = ret.shopCompletionRate ? ret.shopCompletionRate.toFixed(3) * 100 : 0;
          this.shopDifference = ret.shopDifference;
          this.staffTargetStatList = ret.staffTargetStatList;
          this.deptTargetStatList = ret.deptTargetStatList;
          this.salesChartData = [];
          this.deptTargetStatPie = [];
          this.shopChartData = [];
          let totalAmount = null;
          for (let s of ret.deptTargetStatList) {
            totalAmount += s.achievement;
          }
          for (let s of ret.deptTargetStatList) {
            let sname = "{0} ￥{1}（{2}%）".format(s.deptName, s.achievement, s.achievement ? (s.achievement / totalAmount).toFixed(2) * 100 : 0);
            this.deptTargetStatPie.push({ value: s.achievement, name: s.deptName, percent: s.achievement ? (s.achievement / totalAmount).toFixed(2) * 100 : 0 });
            this.salesChartData.push({ value: s.achievement, name: sname });
          }

          let shopName1 = "{0} ￥{1}（{2}%）".format('完成率', this.shopAchievement, this.shopCompletionRate);
          this.shopChartData.push({ value: this.shopAchievement, name: shopName1 });
          let shopName2 = "{0} ￥{1}（{2}%）".format('未完成率', this.shopTarget - this.shopAchievement, 100 - this.shopCompletionRate);
          this.shopChartData.push({ value: this.shopTarget - this.shopAchievement, name: shopName2 });
        }
      });
    },

    querySalesTargetDeptStat() {
      let arg = { year: this.year, month: this.month, deptId: this.deptId };
      $.Req.service($.SvName.SALES_TARGET_STAT, arg, ret => {
        if (ret) {
          this.staffTargetStatList = ret.staffTargetStatList;
        }
      });
    },

    showInputDlg(name) {
      this.dlgView.inputShow = true;
      this.checkDlgViewName = name;
      if (this.currentDate && this[name]) {
        let date = this[name].split('年');
        this.currentDate = new Date(parseInt(date[0]), parseInt(date[1]) - 1);
      }
    },

    confirmDatePiker(name) {
      if (name === 'yearMonth') {
        let d = { year: null, month: null, date: null };
        d.year = this.currentDate.getFullYear();
        d.month = this.currentDate.getMonth() < 9 ? '0' + (this.currentDate.getMonth() + 1) : this.currentDate.getMonth() + 1;
        this.yearMonth = d.year + '年' + d.month + '月';
        this.year = parseInt(d.year);
        this.month = parseInt(d.month);
      }
      this.querySalesTargetStat();
      this.dlgView.inputShow = false;
    },

    queryDepartments(callback = null) {
      /*      let args = {isBaseInfo: true};
            $.Req.service($.SvName.SHOP_DEPARTMENT_QUERY, args, (ret) =>{
              this.departmentList = ret.departmentList;
              this.departmentList.unshift({sdId: '', deptName: '所有部门'})
            });*/
      let args = { isBaseInfo: true };
      $.Req.service($.SvName.SHOP_DEPARTMENT_QUERY, args, ret => {
        if ($.data.user.isShopOwner) {
          this.departmentList = ret.departmentList;
        } else {
          this.departmentList = [];
          let myStaffId = $.data.user.staffId + '';
          for (let d of ret.departmentList) {
            if (d.ownerStaffIds && d.ownerStaffIds.split(',').contains(myStaffId)) {
              this.staffDeptIds.push(d.sdId);
              this.departmentList.push(d);
            }
          }
          if (this.departmentList.length === 0) this.departmentList = ret.departmentList;else {
            this.deptId = this.departmentList[0].sdId;
            this.defaultDeptName = this.departmentList[0].deptName;
          }
        }

        if ($.data.user.isShopOwner || $.Util.isEmptyArray(this.staffDeptIds)) {
          this.defaultDeptName = '所有部门';
          this.departmentList.unshift({ sdId: -1, deptName: '所有部门' });
        }
        if (callback) callback();
      });
    },

    changeDeptId(r) {
      if (r) {
        this.deptId = r.selected.sdId;
      }
      this.querySalesTargetDeptStat();
    }
  }
});

/***/ }),

/***/ 1484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stat_head_vue__ = __webpack_require__(979);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stat_head_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stat_head_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stat_staff_head_vue__ = __webpack_require__(1101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stat_staff_head_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__stat_staff_head_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { StatHead: __WEBPACK_IMPORTED_MODULE_0__stat_head_vue___default.a, StatStaffHead: __WEBPACK_IMPORTED_MODULE_1__stat_staff_head_vue___default.a },
  data() {
    return {
      g: $,
      query: {
        beginDate: null,
        endDate: null,
        deptId: -1
      },
      dateOptions: {
        disabledDate(date) {
          return date && date.valueOf() > Date.now();
        }
      },
      dateShortcuts: [],
      salesAmountList: [],
      saleMembersMap: {},
      statByPaymentTypeMap: {},
      loadings: [false, false, false],
      queryDateShourtcut: null,
      mcpList: [],
      mcpTotalCount: null,
      selectSalesId: null,
      selectSalesName: null,
      salesDetailDlg: false,
      departmentList: false,
      exportDlg: false,
      exportFileUrl: null,
      salesNames: [],
      salesChartData: null,
      saleSum: {
        totalAmount: 0, amountsOfPaymentTypes: [0, 0, 0], totalMembers: 0
      },
      dateIdx: 0,
      dlgView: {
        inputShow: false
      },
      checkDlgViewName: '',
      minDate: new Date(1940, 0, 1),
      maxDate: new Date(),
      currentDate: new Date(),
      thisYear: new Date().getFullYear(),
      thisMonth: new Date().getMonth(),
      thisDate: new Date().getDate(),
      changeDate: new Date(),
      endDate: null,
      beginDate: null,

      tableTheadList: [],
      tableFixColNumber: 1,
      tableThMinWidth: 100,
      scrolledTop: 0,
      scrolledLeft: 0,
      zIndexTop: 0,
      zIndexLeft: 0,
      fixNumber: [0, 1],
      respsTableWid: null,
      respsTableFixHeadWid: null,
      staffDeptIds: [],
      defaultDeptName: null
    };
  },

  created() {
    this.initDateShortCuts();
    this.queryDepartment(() => {
      this.statByDateShortcuts(0);
      this.initTable();
    });
  },

  computed: {
    salesAmountStatOption() {
      return {
        title: {
          text: '销售业绩统计图',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c}"
        },
        legend: {
          orient: 'vertical',
          x: 'left',
          data: ''
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: {
              show: true,
              type: ['pie', 'funnel'],
              option: {
                funnel: {
                  x: '25%',
                  width: '50%',
                  funnelAlign: 'left',
                  max: 1548
                }
              }
            },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        series: [{
          name: '销售额',
          type: 'pie',
          radius: '40%',
          center: ['50%', '55%'],
          data: this.salesChartData
        }]
      };
    }
  },

  methods: {
    initTable() {
      let timer = null;
      this.tableTheadList = [{ title: '序号' }, { title: '销售人员' }, { title: '总销售额' }, { title: '新会员办卡' }, { title: '会员卡续费' }, { title: '老会员购卡' }, { title: '销售会员数' }, { title: '明细' }];
      if (this.$refs.respsTable) {
        document.getElementById('respsTable').scrollTop = 0;
        document.getElementById('respsTable').scrollLeft = 0;
        this.scrolledTop = 0;
        this.scrolledLeft = 0;
      }
      timer = setTimeout(() => {
        this.$nextTick(() => {
          let tableTh = document.getElementById('table-th');
          if (tableTh) {
            let tableThs = tableTh.children;
            this.respsTableWid = tableTh.clientWidth;
            let tableFixHeadTh = document.getElementById('table-fix-head-th');
            let tableFixHeadThs = tableFixHeadTh.children;
            let tableFixColTd = document.getElementById('table-fix-col-td');
            let tableFixColTds = tableFixColTd.children;
            let tableFixTh = document.getElementById('table-fix-th');
            let tableFixThs = tableFixTh.children;
            if (tableFixHeadTh) {
              for (let i = 0; i < tableThs.length - 1; i++) {
                tableFixHeadThs[i].style.width = tableThs[i].offsetWidth + 'px';
                if (tableFixColTds[i]) {
                  tableFixColTds[i].style.width = tableThs[i].offsetWidth + 'px';
                  tableFixColTds[i].style.height = tableThs[i].offsetHeight + 'px';
                }
                if (tableFixThs[i]) {
                  tableFixThs[i].style.width = tableThs[i].offsetWidth + 'px';
                  tableFixThs[i].style.height = tableThs[i].offsetHeight + 'px';
                }
              }
            }
            this.salesAmountList.map((item, idx) => {
              document.getElementById('fix-col-td-' + idx).style.height = document.getElementById('rel-col-td-' + idx).offsetHeight + 'px';
            });
            document.getElementById('fix-col-td-total').style.height = document.getElementById('rel-col-td-total').offsetHeight + 'px';

            document.getElementById('respsTable').addEventListener('scroll', () => {
              if (this.$refs.respsTable) {
                this.scrolledTop = this.$refs.respsTable.scrollTop;
                this.scrolledLeft = this.$refs.respsTable.scrollLeft;
              }
            });
          }
        });
      }, 1000);
    },

    showInputDlg(name) {
      this.dlgView.inputShow = true;
      this.checkDlgViewName = name;
      if (this.currentDate && this[name]) {
        let date = this[name].split('-');
        this.currentDate = new Date(parseInt(date[0]), parseInt(date[1]) - 1, parseInt(date[2]));
      }
    },

    confirmDatePiker(name) {
      let date = { year: null, month: null, date: null, hr: null, min: null, sec: null };
      date.year = this.currentDate.getFullYear();
      date.month = this.currentDate.getMonth() < 9 ? '0' + (this.currentDate.getMonth() + 1) : this.currentDate.getMonth() + 1;
      date.date = this.currentDate.getDate() < 10 ? '0' + this.currentDate.getDate() : this.currentDate.getDate();
      if (name === 'beginDate') {
        this.beginDate = date.year + '-' + date.month + '-' + date.date;
        this.query.beginDate = this.beginDate;
      } else if (name === 'endDate') {
        this.endDate = date.year + '-' + date.month + '-' + date.date;
        this.query.endDate = this.endDate;
      }
      this.dlgView.inputShow = false;
    },

    initDateShortCuts() {
      let today = new Date();
      let date = new Date();
      let year, month, beginDate, endDate;
      for (let i = 0; i < 6; i++) {
        year = date.getFullYear();
        month = date.getMonth();
        beginDate = new Date(date.getFullYear(), month, 1);
        if (i === 0) {
          endDate = new Date(today);
        } else {
          endDate = new Date(date.getFullYear(), month + 1, 0);
        }

        this.dateShortcuts.push({
          name: '{0}年{1}月'.format(date.getFullYear(), month + 1),
          beginDate: beginDate,
          endDate: endDate
        });

        date.setMonth(month - 1);
      }
      this.dateShortcuts.push({
        name: today.getFullYear() + '年',
        beginDate: new Date(today.getFullYear(), 0, 1),
        endDate: today
      });
    },

    statByDateShortcuts(r) {
      let queryDateShourtcut = null;
      if (typeof r == 'number') {
        queryDateShourtcut = r;
      } else {
        queryDateShourtcut = r.selectedIdx;
      }
      let d = this.dateShortcuts[queryDateShourtcut];
      this.beginDate = $.Util.formatDate(d.beginDate);
      this.endDate = $.Util.formatDate(d.endDate);
      this.query.beginDate = new Date(d.beginDate);
      this.query.endDate = new Date(d.endDate);
      this.statSales();
    },

    statSales(r) {
      if (r) {
        this.query.deptId = r.selected.sdId;
      }
      this.callSalesStat(1, ret => {
        this.salesAmountList = ret.salesStatList;
        let salesAmountSum = 0;
        for (let s of ret.salesStatList) {
          salesAmountSum += s.salesAmount;
        }
        this.saleSum.totalAmount = $.Util.round(salesAmountSum);

        // gen chart data
        this.salesNames = [];
        this.salesChartData = [];
        for (let s of ret.salesStatList) {
          let sname = "{0} ￥{1}（{2}%）".format(s.salesName, $.Util.round(s.salesAmount), (s.salesAmount * 100 / this.saleSum.totalAmount).toFixed(1));
          this.salesNames.push({ value: s.salesAmount, name: s.salesName, percent: (s.salesAmount * 100 / this.saleSum.totalAmount).toFixed(1) });
          this.salesChartData.push({ value: s.salesAmount, name: sname });
        }

        this.callSalesStat(2, r1 => {
          this.saleMembersMap = {};
          let sumVal = 0;
          for (let s of r1.salesStatList) {
            this.saleMembersMap[s.salesId] = s.salesMembers;
            sumVal += s.salesMembers;
          }
          this.saleSum.totalMembers = sumVal;
        });

        this.callSalesStat(3, r2 => {
          this.statByPaymentTypeMap = {};
          this.saleSum.amountsOfPaymentTypes = [0, 0, 0];
          for (let s of r2.salesStatList) {
            this.statByPaymentTypeMap[s.salesId + '#' + s.paymentType] = $.Util.round(s.salesAmount);
            this.saleSum.amountsOfPaymentTypes[s.paymentType - 1] += $.Util.round(s.salesAmount);
          }
        });
        this.initTable();
      });
    },

    callSalesStat(statType, callback) {
      let args = {
        statType: statType,
        beginDate: this.query.beginDate,
        endDate: this.query.endDate,
        needStatAll: true
      };
      if (this.query.deptId > 0) args.deptId = this.query.deptId;
      this.$set(this.loadings, statType - 1, true);
      $.Req.service($.SvName.SALES_STAT, args, ret => {
        this.$set(this.loadings, statType - 1, false);
        callback(ret);
      }, false, err => {
        this.$set(this.loadings, statType - 1, false);
        $.Dlg.error(err);
      });
    },

    viewSalesDetail(salesName, salesId) {
      this.selectSalesName = salesName;
      this.selectSalesId = salesId;
      this.salesDetailDlg = true;
      this.queryMemberCardPayments();
    },

    queryMemberCardPayments(page = null) {
      if (!page) this.mcpTotalCount = null;
      let args = {
        beginDate: this.query.beginDate,
        endDate: this.query.endDate,
        salesId: this.selectSalesId,
        page: page
      };
      $.Req.service($.SvName.MEMBER_CARD_PAYMENT_QUERY, args, ret => {
        this.mcpList = ret.memberCardPaymentList;
        if (!page) {
          this.mcpTotalCount = ret.count;
        }
      }, true);
    },

    queryDepartment(callback = null) {
      /*      let args = {isBaseInfo: true};
            $.Req.service($.SvName.SHOP_DEPARTMENT_QUERY, args, (ret) =>{
              this.departmentList = ret.departmentList;
      
              this.departmentList.unshift({sdId: -1, deptName: '所有部门'})
            });*/

      let args = { isBaseInfo: true };
      $.Req.service($.SvName.SHOP_DEPARTMENT_QUERY, args, ret => {
        if ($.data.user.isShopOwner) {
          this.departmentList = ret.departmentList;
        } else {
          this.departmentList = [];
          let myStaffId = $.data.user.staffId + '';
          for (let d of ret.departmentList) {
            if (d.ownerStaffIds && d.ownerStaffIds.split(',').contains(myStaffId)) {
              this.staffDeptIds.push(d.sdId);
              this.departmentList.push(d);
            }
          }
          if (this.departmentList.length === 0) this.departmentList = ret.departmentList;else {
            this.query.deptId = this.departmentList[0].sdId;
            this.defaultDeptName = this.departmentList[0].deptName;
          }
        }

        if ($.data.user.isShopOwner || $.Util.isEmptyArray(this.staffDeptIds)) {
          this.defaultDeptName = '所有部门';
          this.departmentList.unshift({ sdId: -1, deptName: '所有部门' });
        }
        if (callback) callback();
      });
    },

    doQuery() {
      this.statSales();
    }

  }
});

/***/ }),

/***/ 1507:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(764)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 1509:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(764)(false);
// imports


// module
exports.push([module.i, ".-style- .chart[data-v-0823e7ca]{width:100%;height:200px;font-size:11px;padding:10px 0}", ""]);

// exports


/***/ }),

/***/ 1530:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(764)(false);
// imports


// module
exports.push([module.i, ".-style- .order[data-v-1ce28daf]{width:35px}.-style- .coach-name[data-v-1ce28daf]{color:#1aad19}.-style- .page-sub-menus[data-v-1ce28daf]{margin:0}.-style- .page-sub-menus .theme-border-bottom[data-v-1ce28daf]{padding:0}.-style- .page-sub-menus span[data-v-1ce28daf]{margin:0 0 -1px;display:block;font-size:13px;text-align:center}.-style- .detail .item[data-v-1ce28daf]{padding:0}.-style- select[data-v-1ce28daf]{padding:4px 0}.lesson-stat[data-v-1ce28daf]{padding:15px 0;text-align:center}.lesson-stat>div[data-v-1ce28daf]{width:25%}.lesson-stat .stat-num[data-v-1ce28daf]{font-size:19px}.lesson-stat-2[data-v-1ce28daf]{padding:15px 16px;text-align:center}.lesson-stat-2>div[data-v-1ce28daf]{width:100%}.lesson-stat-2.lesson-stat-div3>div[data-v-1ce28daf]{width:33.3%}.lesson-stat-2 .red[data-v-1ce28daf]{margin-bottom:5px;font-size:17px;color:#ef5a5a}.filter-list[data-v-1ce28daf]{padding:10px 16px}.filter-list .filter-tit[data-v-1ce28daf]{padding:0}.filter-list .filter-tit i[data-v-1ce28daf]{font-size:14px;padding:4px 10px}.filter-list .infor-name[data-v-1ce28daf]{margin-bottom:10px;font-size:12px}.filter-list .date-picker[data-v-1ce28daf]{padding:0 14px 0 8px;margin-left:0}.filter-list .date-picker li[data-v-1ce28daf]{padding:0;margin-bottom:0}.filter-list .date-picker li div[data-v-1ce28daf]{height:32px}.filter-list .date-picker li.wave[data-v-1ce28daf]{width:20px;line-height:32px}.filter-list .recent-list li[data-v-1ce28daf]{height:32px}.filter-list ul[data-v-1ce28daf]{max-height:126px;overflow:hidden;margin-bottom:-7px;margin-right:-10px;width:100%}.filter-list li[data-v-1ce28daf]{padding:1px 10px 1px 1px;margin-bottom:10px;text-align:center;height:32px;border-radius:2px}.filter-list li div[data-v-1ce28daf]{padding:0 10px;background:#f8f8f8;border-radius:2px;height:100%;font-size:12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:32px;width:100%;color:#666}.filter-list li.active[data-v-1ce28daf]{padding:0 9px 0 0}.filter-list li.active div[data-v-1ce28daf]{color:#dbb76b;background:hsla(41,61%,64%,.1);border:1px solid #dbb76b;height:100%}.filter-list li[data-v-1ce28daf]:nth-child(3n){margin-right:0}.filter-list .more-list[data-v-1ce28daf]{max-height:unset;overflow:visible}.theme-black select[data-v-1ce28daf]{background:none;color:#333}.theme-black .filter-list .infor-name[data-v-1ce28daf]{color:#ccc}.theme-black .filter-list li div[data-v-1ce28daf]{background:#212121;color:#ccc}.theme-black .filter-list li.active div[data-v-1ce28daf]{color:#dbb76b;background:hsla(41,61%,64%,.1);border:1px solid #dbb76b;height:100%}.theme-pink .filter-list li.active div[data-v-1ce28daf]{color:#f199bc;background:rgba(241,153,188,.1);border:1px solid #f199bc}.date-btn[data-v-1ce28daf]{width:fit-content;margin:0 auto;padding:4px 10px;border-radius:20px}.van-has-overlay[data-v-1ce28daf]{height:max-content;left:50%;top:38%;transform:translate(-50%,-38%);border-radius:5px;text-align:center}.van-has-overlay .dlg-head[data-v-1ce28daf]{padding-top:15px;padding-bottom:15px;text-align:center;font-size:16px;font-weight:600}.van-has-overlay .dlg-cont[data-v-1ce28daf]{padding:0 30px;text-align:left;line-height:20px;max-height:70vh;overflow-y:scroll;overflow-x:hidden}.van-has-overlay .middle-btn[data-v-1ce28daf]{margin:20px auto;padding:10px 0;width:calc(100% - 90px)}.van-has-overlay .dlg-confirm-btns li[data-v-1ce28daf]{width:100%;padding:10px;text-align:center}[data-v-1ce28daf].van-dialog__confirm .van-button__text{color:#dbb76b}.resps-table[data-v-1ce28daf]{overflow:auto;max-height:80vh}.resps-table table[data-v-1ce28daf]{width:100%}.resps-table .resps-table-box[data-v-1ce28daf]{min-width:100%;position:relative}.resps-table .resps-table-box .left-column[data-v-1ce28daf]{position:absolute;top:0;left:0}.tblform[data-v-1ce28daf]{margin-bottom:10px}.tblform td[data-v-1ce28daf],.tblform th[data-v-1ce28daf]{padding:10px 5px;text-align:left;width:unset}.tblform td>div[data-v-1ce28daf],.tblform th>div[data-v-1ce28daf]{height:23px;line-height:23px}.iconinfo[data-v-1ce28daf]{vertical-align:-1px}.cost[data-v-1ce28daf]{background:#389426}.current[data-v-1ce28daf]{background:#38db18;margin-top:12px}.stat-graph[data-v-1ce28daf]{margin:0 16px 13px;text-align:center}.stat-graph div[data-v-1ce28daf]{display:inline-block;height:26px}.stat-graph-desc[data-v-1ce28daf]{margin:0 16px;padding-bottom:15px;text-align:left}.stat-graph-desc .flag[data-v-1ce28daf]{display:inline-block;width:20px;height:20px;margin-right:5px}.red-pink[data-v-1ce28daf]{color:#ef5a5a}.detail[data-v-1ce28daf] .qd-table{border:none;margin:10px;border-radius:9px;overflow:hidden}.detail[data-v-1ce28daf] .qd-table th{font-weight:400!important}.detail[data-v-1ce28daf] .qd-table tr:first-of-type{font-weight:700}.stat2[data-v-1ce28daf] .qd-table{border:none;padding:15px}.stat2[data-v-1ce28daf] .qd-table th{font-weight:400!important}", ""]);

// exports


/***/ }),

/***/ 1531:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(764)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 1537:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(764)(false);
// imports


// module
exports.push([module.i, ".align-center[data-v-1ecaae5a],.row-space[data-v-1ecaae5a]{display:flex;align-items:center}.row-space[data-v-1ecaae5a]{justify-content:space-between}.tag[data-v-1ecaae5a]{font-size:12px;padding:1.5px 5px;border-radius:1px;margin-right:12px;display:inline-block;transform:scale(.95)}.up-tag[data-v-1ecaae5a]{color:#fc373a;background-color:rgba(252,55,58,.1)}.down-tag[data-v-1ecaae5a]{color:#67a548;background-color:rgba(103,165,72,.1)}.chart[data-v-1ecaae5a]{width:100%;height:200px;font-size:12px;padding:10px 0}.coll[data-v-1ecaae5a]{background-color:#fff}.coll .bor-bottom[data-v-1ecaae5a]{border-bottom:8px solid #f6f6f6}.coll .bor-bottom[data-v-1ecaae5a]:last-child{border-bottom:none}.coll .coll-item .coll-title[data-v-1ecaae5a]{padding:0 16px;box-sizing:border-box;height:50px;border-bottom:1px solid #ededed}.coll .coll-item .coll-title .title[data-v-1ecaae5a]{color:#333;font-size:14px}.coll .coll-item .coll-title .right .val[data-v-1ecaae5a]{color:#666;font-weight:700;font-size:14px}.coll .coll-item .coll-title .right i[data-v-1ecaae5a]{margin-left:8px;color:#aaa;font-size:14px}.coll .coll-item .coll-content[data-v-1ecaae5a]{padding:0 16px;box-sizing:border-box}.coll .coll-item .coll-content .compare[data-v-1ecaae5a]{height:50px}.coll .coll-item .coll-content .compare .num[data-v-1ecaae5a]{color:#333;font-size:15px}.coll .coll-item .coll-content .compare i[data-v-1ecaae5a]{font-size:11px;margin-left:8px}.iconshangjiantou1[data-v-1ecaae5a]{color:#fc373a}.icondecline-icon[data-v-1ecaae5a]{color:#67a548}", ""]);

// exports


/***/ }),

/***/ 1539:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(764)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 1540:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(764)(false);
// imports


// module
exports.push([module.i, ".-stat-home- .hd img[data-v-237fb220]{display:block;width:100%}.-stat-home- .menu-list[data-v-237fb220]{margin:0}.-stat-home- .menu-list li[data-v-237fb220]{overflow:hidden}.-stat-home- .menu table[data-v-237fb220]{width:100%}.-stat-home- .menu th[data-v-237fb220]{width:100px;vertical-align:middle;border-right:1px solid #eee;text-align:center;font-weight:400}.-stat-home- .menu th i[data-v-237fb220]{font-size:24px}.-stat-home- .menu td[data-v-237fb220]{padding:0 0 0 10px}.-stat-home- .menu td i[data-v-237fb220]{font-size:15px;color:#bbb}.-stat-home- .menu li[data-v-237fb220]{padding:14px 0;line-height:1;border-bottom:1px solid #eee}.-stat-home- .menu li[data-v-237fb220]:last-child{border:0}.-stat-home- .menus[data-v-237fb220]{width:100%;border-collapse:collapse;background:#fff;border-bottom:1px solid #e5e5e5}.-stat-home- .menus td[data-v-237fb220]{height:70px;vertical-align:middle;width:33%;text-align:center;border-right:1px solid #e5e5e5;border-top:1px solid #e5e5e5}.-stat-home- .menus .icon[data-v-237fb220]{font-size:24px}.-stat-home- .menus .txt[data-v-237fb220]{display:block;font-size:12px}", ""]);

// exports


/***/ }),

/***/ 1557:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(764)(false);
// imports


// module
exports.push([module.i, ".page-sub-menus[data-v-3191217e]{margin:0;border:0}.page-sub-menus span[data-v-3191217e]{margin:0 8px;padding:10px 0}", ""]);

// exports


/***/ }),

/***/ 1561:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(764)(false);
// imports


// module
exports.push([module.i, ".tit[data-v-32c7fff4]{font-size:16px}.stat-popup[data-v-32c7fff4]{position:absolute;z-index:100;right:10px;margin-top:-5px;box-shadow:3px 0 10px #aaa,-3px 0 9px #aaa;width:150px;border:1px solid #e2e2e2;border-top:0}.stat-popup .iconfont[data-v-32c7fff4]{color:#aaa}.stat-popup li[data-v-32c7fff4]{text-align:left;line-height:3.6rem;height:3.6rem;padding-left:15px}.stat-popup li[data-v-32c7fff4]:hover{background:#ddd}.stat-popup li[data-v-32c7fff4]:last-child{border-bottom:0}.stat-popup li i[data-v-32c7fff4]{padding-right:5px;font-size:16px}", ""]);

// exports


/***/ }),

/***/ 1567:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(764)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 1574:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(764)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 1576:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(764)(false);
// imports


// module
exports.push([module.i, ".-style- .chart[data-v-3ffcb7d1]{width:100%;height:300px;font-size:11px;padding:10px 0}.-style- .detail td[data-v-3ffcb7d1]{font-size:12px}", ""]);

// exports


/***/ }),

/***/ 1591:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(764)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 1601:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(764)(false);
// imports


// module
exports.push([module.i, ".resps-table[data-v-4b596e0e]{overflow:auto;max-height:80vh}.resps-table table[data-v-4b596e0e]{width:100%}.resps-table .resps-table-box[data-v-4b596e0e]{min-width:100%;position:relative}.resps-table .resps-table-box .left-column[data-v-4b596e0e]{position:absolute;top:0;left:0}.tblform[data-v-4b596e0e]{margin-bottom:10px}.tblform td[data-v-4b596e0e],.tblform th[data-v-4b596e0e]{padding:10px 5px;text-align:left;width:unset}.tblform td>div[data-v-4b596e0e],.tblform th>div[data-v-4b596e0e]{height:23px;line-height:23px}.tblform .infor-infor[data-v-4b596e0e]{width:80px}.tblform .infor-detail[data-v-4b596e0e]{width:calc(100% - 80px)}.tblform .order[data-v-4b596e0e]{text-align:left}.today-date[data-v-4b596e0e]{text-align:center;padding:5px 20px;border-radius:40px}.today-date i[data-v-4b596e0e]{font-size:13px;vertical-align:-1px;margin-left:4px}.ret-cnt[data-v-4b596e0e]{margin-bottom:10px;color:#999}.ret-cnt .check-box[data-v-4b596e0e]{margin-bottom:0}.stat-member-info.row[data-v-4b596e0e]{padding:0}.stat-member-info img[data-v-4b596e0e]{display:inline-block;margin-right:5px;width:23px;height:23px;border-radius:100%;vertical-align:middle}a.block[data-v-4b596e0e]{display:inline-block;height:23px;line-height:23px}", ""]);

// exports


/***/ }),

/***/ 1610:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(764)(false);
// imports


// module
exports.push([module.i, ".section-part[data-v-4fef7962]{margin-bottom:0}.section-part[data-v-4fef7962] .van-tab{flex-basis:65px!important}", ""]);

// exports


/***/ }),

/***/ 1612:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(764)(false);
// imports


// module
exports.push([module.i, ".date-btn[data-v-51095a36]{width:fit-content;margin:0 auto;padding:4px 10px;border-radius:20px}.center-date-nav[data-v-51095a36]{padding:10px 16px}", ""]);

// exports


/***/ }),

/***/ 1613:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(764)(false);
// imports


// module
exports.push([module.i, ".-stat-memb- .member-info[data-v-529b2e22]{padding:8px 0 4px}.-stat-memb- .member-info img[data-v-529b2e22]{display:inline-block;border:1px solid #eee;width:45px;height:45px;border-radius:50%;float:left}.-stat-memb- .member-info a[data-v-529b2e22]{font-size:15px;margin-left:12px;float:left;display:inline-block;line-height:50px;height:50px}.-stat-memb- .val[data-v-529b2e22]{font-size:15px;font-weight:700}", ""]);

// exports


/***/ }),

/***/ 1634:
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(766);
exports = module.exports = __webpack_require__(764)(false);
// imports


// module
exports.push([module.i, ".detail .finished[data-v-64a6df9a]{color:#467a59}.detail .empty[data-v-64a6df9a]{color:#bbb}.center-date-nav[data-v-64a6df9a]{text-align:center;padding:10px 16px}.date-btn[data-v-64a6df9a]{width:fit-content;margin:0 auto;padding:4px 10px;border-radius:20px}.date-btn i[data-v-64a6df9a]{font-size:13px}.shop-target[data-v-64a6df9a]{margin:16px;padding:15px 10px 5px;background:url(" + escape(__webpack_require__(2004)) + ");background-size:100% 100%}.shop-target .shop-target-tit[data-v-64a6df9a]{margin-bottom:15px;font-size:15px;text-align:center}.target-items .item[data-v-64a6df9a]{position:relative;padding:10px 8px;width:25%;text-align:center}.target-items .item .item-tit[data-v-64a6df9a]{margin:6px 0 3px;font-size:13px;color:#999}.target-items .item .item-sum[data-v-64a6df9a]{font-family:Times New Roman;font-size:16px}.target-items .item[data-v-64a6df9a]:after{position:absolute;top:50%;right:0;transform:translateY(-50%);display:inline-block;content:\"\";width:1px;height:40%;background:#efefef}.target-items .item[data-v-64a6df9a]:last-child:after{display:none}.theme-pink .shop-target[data-v-64a6df9a]{background:url(" + escape(__webpack_require__(2005)) + ");background-size:100% 100%}.theme-black .shop-target[data-v-64a6df9a]{background:url(" + escape(__webpack_require__(2006)) + ");background-size:100% 100%}.theme-black .shop-target .target-items .item .item-tit[data-v-64a6df9a],.theme-black .shop-target .theme-font-color[data-v-64a6df9a]{color:#fff}.tblform[data-v-64a6df9a]{margin-bottom:10px}.tblform td[data-v-64a6df9a],.tblform th[data-v-64a6df9a]{padding:10px 5px;text-align:left;width:unset}.tblform table[data-v-64a6df9a]{margin-left:15px;width:calc(100% - 15px)}.piechart[data-v-64a6df9a]{padding-top:20px}[data-v-64a6df9a].echarts{margin:0 auto;width:calc(100% - 32px);height:200px}", ""]);

// exports


/***/ }),

/***/ 1636:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(764)(false);
// imports


// module
exports.push([module.i, ".tblform[data-v-68476eca]{margin-bottom:10px}.tblform td[data-v-68476eca],.tblform th[data-v-68476eca]{padding:10px 5px;text-align:left;width:unset}.tblform td>div[data-v-68476eca],.tblform th>div[data-v-68476eca]{height:23px;line-height:23px}.tblform .infor-infor[data-v-68476eca]{width:80px}.tblform .infor-detail[data-v-68476eca]{width:calc(100% - 80px)}.tblform .order[data-v-68476eca]{text-align:left}.tblform table[data-v-68476eca]{margin-left:15px;width:calc(100% - 15px)}.-style- .remark[data-v-68476eca]{padding:10px;color:#999;font-size:12px}.-style- .remark b[data-v-68476eca]{font-size:12px}.-style- .center-date-nav[data-v-68476eca]{width:50%;padding:9px 16px 8px;position:relative;text-align:center}.-style- .center-date-nav[data-v-68476eca] .row{justify-content:center}.-style- .dept[data-v-68476eca]{position:relative;display:block;margin:0;width:50%;padding:9px 16px 8px;text-align:center;border-left:1px solid #f6f6f6}.-style- .dept[data-v-68476eca] .row{justify-content:center}.-style- .dept select[data-v-68476eca]{border:0;padding:3px 10px}.-style- select[data-v-68476eca]{padding:4px 0}.theme-black select[data-v-68476eca]{background:none;color:#fff}.theme-black .dept[data-v-68476eca]{border-left:1px solid #212121}.date-btn[data-v-68476eca]{width:fit-content;margin:0 auto;padding:4px 10px;border-radius:20px}.piechart[data-v-68476eca]{padding-top:20px}[data-v-68476eca].echarts{margin:0 auto;width:calc(100% - 32px);height:150px}.consume-status[data-v-68476eca]{padding-bottom:50px}.van-has-overlay[data-v-68476eca]{height:max-content;left:50%;top:38%;transform:translate(-50%,-38%);border-radius:5px;text-align:center}.van-has-overlay .dlg-head[data-v-68476eca]{padding-top:15px;padding-bottom:15px;text-align:center;font-size:16px;font-weight:600}.van-has-overlay .dlg-cont[data-v-68476eca]{padding:0 30px;text-align:left;line-height:20px;max-height:70vh;overflow-y:scroll;overflow-x:hidden}.van-has-overlay .middle-btn[data-v-68476eca]{margin:20px auto;padding:10px 0;width:calc(100% - 90px)}.van-has-overlay .dlg-confirm-btns li[data-v-68476eca]{width:100%;padding:10px;text-align:center}.course-records[data-v-68476eca]{min-height:auto}.course-records .ret[data-v-68476eca]{padding:0}.course-records .ret dl[data-v-68476eca]{padding:0 0 15px;margin-bottom:10px}.course-records .ret dl[data-v-68476eca]:first-child{padding-top:10px}.course-records .ret dl[data-v-68476eca]:last-child{border-bottom:0;margin-bottom:0;padding-bottom:0}.course-records .ret dt[data-v-68476eca]{padding:0 16px;font-size:15px;height:4rem;line-height:4rem;margin-bottom:8px}.course-records .ret dd[data-v-68476eca]{padding:7px 16px 0}.course-records .ret dd label[data-v-68476eca]{margin-right:5px;padding-right:0;width:100px;vertical-align:top;line-height:20px}.course-records .ret dd>span[data-v-68476eca]{display:inline-block;width:calc(100% - 105px);line-height:20px}.course-records .btn-box[data-v-68476eca]{padding:13px 0;margin-top:10px;text-align:center}.table-list li[data-v-68476eca]{padding:5px;margin-bottom:5px;text-align:center;color:#fff;border-radius:4px}.table-list li .iconfont[data-v-68476eca]{font-size:13px}.table-list li div[data-v-68476eca],.table-list li div[data-v-68476eca]:first-child{font-size:12px}.resps-table[data-v-68476eca]{overflow:auto}.resps-table table[data-v-68476eca]{width:100%}.resps-table table td[data-v-68476eca],.resps-table table th[data-v-68476eca]{padding:4px;color:#333;width:90px;text-align:center}.resps-table table td[data-v-68476eca]{vertical-align:center}.resps-table table td[data-v-68476eca]:first-child,.resps-table table th[data-v-68476eca]{background:#faf9f9}.resps-table table td[data-v-68476eca]:first-child,.resps-table table th[data-v-68476eca]:first-child{width:50px}.resps-table .table-fix-td[data-v-68476eca]{padding-left:15px}.resps-table .table-fix-td table[data-v-68476eca]{margin-left:0}.resps-table .resps-table-box[data-v-68476eca]{min-width:100%;position:relative;width:680px}.resps-table .resps-table-box .left-column[data-v-68476eca]{position:absolute;top:0;left:0}.resps-table .table-fix-head[data-v-68476eca]{text-align:center;width:680px}.resps-table .week-tit[data-v-68476eca]{padding:5px 0 4px}.resps-table .week-tit.active[data-v-68476eca]{border-radius:4px}.resps-table .week-tit.active .week-date[data-v-68476eca],.resps-table .week-tit.active .week-day[data-v-68476eca]{font-weight:600}.resps-table .week-date[data-v-68476eca]{font-size:12px}.fixtop[data-v-68476eca]{position:fixed;top:0;width:100%;z-index:1000;background:#f0f0f0}.theme-black .grid td[data-v-68476eca]{border-color:#111}.theme-black .resps-table table .time[data-v-68476eca],.theme-black .resps-table table td[data-v-68476eca],.theme-black .resps-table table th[data-v-68476eca]{color:#fff}.theme-black .resps-table table .time .theme-font-color[data-v-68476eca],.theme-black .resps-table table td .theme-font-color[data-v-68476eca],.theme-black .resps-table table th .theme-font-color[data-v-68476eca]{color:#dbb76b}.theme-black .resps-table table tr td[data-v-68476eca]:first-child,.theme-black .resps-table table tr th[data-v-68476eca]{background:#212121}", ""]);

// exports


/***/ }),

/***/ 1644:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(764)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 1652:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(764)(false);
// imports


// module
exports.push([module.i, ".page-sub-menus span[data-v-776a9986]{flex:1;margin:0;position:relative}.page-sub-menus .tab-bor-bottom[data-v-776a9986]:after{position:absolute;bottom:-2px;left:50%;transform:translateX(-50%);content:\"\";width:115px;height:2px;background-color:#dbb76b}.qd-calendar .qd-head[data-v-776a9986]{padding:0 20px;height:50px;line-height:50px;background-color:#fff}.qd-calendar .qd-head .iconfont[data-v-776a9986]{vertical-align:-2px;font-size:18px}.qd-calendar .today-date[data-v-776a9986]{height:33px;line-height:30px;margin:9px 0 0;padding:0 9px}.qd-calendar .qd-week[data-v-776a9986]{padding:0 20px;height:50px;line-height:50px;font-weight:600}.qd-calendar .qd-week .week-list[data-v-776a9986]{width:14.28%;text-align:center}.qd-calendar .qd-date[data-v-776a9986]{padding:5px 10px 10px;justify-content:flex-start}.qd-calendar .qd-date .qd-list[data-v-776a9986]{width:14.28%;text-align:center;padding:2px 8px;position:relative;margin:4px 0}.qd-calendar .qd-date .qd-list .iconfont[data-v-776a9986]{position:absolute;font-size:38px;top:50%;left:50%;text-align:center;display:inline-block;transform:translate(calc(-50% + -2px),-50%)}.qd-calendar .drop-down-date[data-v-776a9986]{color:#999;font-size:14px;text-align:center;padding:10px 0}.qd-calendar .drop-down-date .iconfont[data-v-776a9986]{vertical-align:-2px}", ""]);

// exports


/***/ }),

/***/ 1662:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(764)(false);
// imports


// module
exports.push([module.i, ".record-num[data-v-7ca86ebb]{padding:16px;border-bottom-width:10px}.record-num div[data-v-7ca86ebb]:first-child{margin-bottom:5px}.record-num td[data-v-7ca86ebb]{border:0;padding:0}.course-records[data-v-7ca86ebb]{min-height:auto}.course-records .ret[data-v-7ca86ebb]{padding:0}.course-records .ret dl[data-v-7ca86ebb]{padding:0 0 15px;margin-bottom:10px;border-width:10px}.course-records .ret dl[data-v-7ca86ebb]:first-child{padding-top:10px}.course-records .ret dl[data-v-7ca86ebb]:last-child{border-bottom:0;margin-bottom:0;padding-bottom:0}.course-records .ret dt[data-v-7ca86ebb]{padding:0 16px;font-size:12px;height:4rem;line-height:4rem;margin-bottom:8px}.course-records .ret dd[data-v-7ca86ebb]{padding:7px 16px 0}.course-records .ret dd label[data-v-7ca86ebb]{margin-right:5px;padding-right:0;width:100px;vertical-align:top;line-height:20px}.course-records .ret dd>span[data-v-7ca86ebb]{display:inline-block;width:calc(100% - 105px);line-height:20px}.course-records .btn-box[data-v-7ca86ebb]{padding:13px 0;margin-top:10px;text-align:center}.red[data-v-7ca86ebb]{color:#ef5a5a}", ""]);

// exports


/***/ }),

/***/ 1664:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(764)(false);
// imports


// module
exports.push([module.i, ".date-btn[data-v-7f405c0e]{width:fit-content;margin:0 auto;padding:4px 10px;border-radius:20px}.tblform table[data-v-7f405c0e]{margin-left:15px;width:calc(100% - 15px)}.tblform table td[data-v-7f405c0e],.tblform table th[data-v-7f405c0e]{padding:10px 0 10px 10px}.tblform table td .order[data-v-7f405c0e],.tblform table th .order[data-v-7f405c0e]{text-align:left;width:max-content}", ""]);

// exports


/***/ }),

/***/ 1667:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(764)(false);
// imports


// module
exports.push([module.i, ".-style- .loading[data-v-82060c96]{display:inline-block;position:relative;left:10px}.-style- .loading1[data-v-82060c96]{position:absolute;margin-top:-30px}.-style- .date-tit[data-v-82060c96]{text-align:center;margin:-11px 0 10px}.-style- .date-tit .date[data-v-82060c96]{width:150px;position:relative;top:-2px}.-style- section table[data-v-82060c96]{width:calc(100% - 32px);margin-left:16px}.-style- section td[data-v-82060c96],.-style- section th[data-v-82060c96]{padding:10px 0;border-bottom:1px solid #eee}.-style- section th[data-v-82060c96]{text-align:left;color:#aaa;font-weight:400}.-style- section tr:last-child td[data-v-82060c96],.-style- section tr:last-child th[data-v-82060c96]{border-bottom:0}.-style- .sum-tbl th[data-v-82060c96]{min-width:40px}.-style- .sum-tbl td[data-v-82060c96],.-style- .sum-tbl th[data-v-82060c96]{text-align:center}.-style- .sum-tbl i[data-v-82060c96]{font-size:13px;padding-right:2px}.-style- .sum-num[data-v-82060c96]{color:#ff4500;font-size:14px;font-weight:700}.-style- .sum-column td[data-v-82060c96],.-style- .sum-column th[data-v-82060c96]{color:#1aad19}.-style- .sum-column td[data-v-82060c96]{font-weight:700}.-style- .no-record[data-v-82060c96]{font-style:italic;border-top:1px solid #eee;padding:10px 0;text-align:center;color:#ccc}.limit-sig-db[data-v-82060c96]{padding:12px 16px}.limit-sig-db li[data-v-82060c96]{margin-right:10px;text-align:center}.limit-sig-db .icon-radio[data-v-82060c96]{vertical-align:-2px;margin-right:2px}.limit-sig-db .icon-radio[data-v-82060c96]:before{margin:0 0 2px}.date-picker[data-v-82060c96]{padding:0 14px 0 16px;margin-left:0}.date-picker li[data-v-82060c96]{padding:10px 0;width:120px}.date-picker li[data-v-82060c96] .iconfork{margin-right:8px;margin-left:5px}.date-picker li[data-v-82060c96] .iconarrow-down-1{float:right}.date-picker li.wave[data-v-82060c96]{width:30px;margin:0 10px;text-align:center}.hd .theme-font-color[data-v-82060c96]{float:right}.course-records[data-v-82060c96]{min-height:auto;border-bottom-width:10px}.course-records[data-v-82060c96]:last-child{border-bottom-width:0}.course-records .ret[data-v-82060c96]{padding:0}.course-records .ret dl dd[data-v-82060c96]{padding:4px 16px}.course-records .ret dl dd label[data-v-82060c96]{vertical-align:top;line-height:21px}.course-records .ret dl dd>span[data-v-82060c96]{display:inline-block;width:calc(100% - 100px);line-height:21px}.theme-black .-style- section td[data-v-82060c96],.theme-black .-style- section th[data-v-82060c96]{border-bottom:1px solid #111}", ""]);

// exports


/***/ }),

/***/ 1669:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(764)(false);
// imports


// module
exports.push([module.i, ".stat-privite[data-v-837bed38]{padding:15px 16px 0}.stat-privite ul li[data-v-837bed38]{position:relative;margin-bottom:15px;padding:13px 15px 13px 17px;border-radius:6px;color:#666}.stat-privite ul li[data-v-837bed38]:before{position:absolute;display:inline-block;content:\"\";height:100%;width:5px;left:0;top:0;border-radius:6px 0 0 6px}.stat-privite ul li.stat-1[data-v-837bed38]{background:hsla(41,61%,64%,.1)}.stat-privite ul li.stat-1[data-v-837bed38]:before{background:#dbb76b}.stat-privite ul li.stat-2[data-v-837bed38]{background:rgba(239,90,90,.1)}.stat-privite ul li.stat-2[data-v-837bed38]:before{background:#ef5a5a}.stat-privite ul li.stat-3[data-v-837bed38]{background:rgba(56,219,24,.1)}.stat-privite ul li.stat-3[data-v-837bed38]:before{background:#38db18}input.wid40[data-v-837bed38]{display:inline-block;width:40%;text-align:center}.tblform .infor-detail[data-v-837bed38]{width:calc(100% - 80px)}.tblform td[data-v-837bed38],.tblform th[data-v-837bed38]{padding:10px 10px 10px 0}", ""]);

// exports


/***/ }),

/***/ 1671:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(764)(false);
// imports


// module
exports.push([module.i, ".-style- .chart[data-v-87194c2a]{width:100%;height:300px;font-size:11px;padding:10px 0}.-style- .detail td[data-v-87194c2a]{font-size:12px}", ""]);

// exports


/***/ }),

/***/ 1683:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(764)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 1685:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(764)(false);
// imports


// module
exports.push([module.i, ".piechart[data-v-a2010386]{width:100%;height:270px}.date[data-v-a2010386]{width:100px;font-size:12px}closeBookingDlg[data-v-a2010386]{background-color:#eee;padding:10px 0}closeBookingDlg a[data-v-a2010386]{border-radius:2px;padding:5px 15px;margin-left:5px;background-color:#fff}.opt-list[data-v-a2010386]{line-height:3.2rem;height:3.2rem;font-size:12px;color:#aaa}.opt-list li[data-v-a2010386]{display:inline}.opt-list li span[data-v-a2010386]{font-size:12px;padding:0 10px}", ""]);

// exports


/***/ }),

/***/ 1708:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(764)(false);
// imports


// module
exports.push([module.i, ".tblform .infor-detail[data-v-d7664212]{width:calc(100% - 90px)}.piechart[data-v-d7664212]{padding-top:20px}[data-v-d7664212].echarts{margin:0 auto;width:calc(100% - 32px);height:150px}.consume-status[data-v-d7664212]{padding-bottom:50px}.barchart[data-v-d7664212]{height:300px}", ""]);

// exports


/***/ }),

/***/ 1725:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(764)(false);
// imports


// module
exports.push([module.i, ".tblform[data-v-ee0e3342]{margin-bottom:10px}.tblform td[data-v-ee0e3342],.tblform th[data-v-ee0e3342]{padding:10px 5px;text-align:left;width:unset}.tblform td>div[data-v-ee0e3342],.tblform th>div[data-v-ee0e3342]{height:23px;line-height:23px}.tblform .infor-infor[data-v-ee0e3342]{width:80px}.tblform .infor-detail[data-v-ee0e3342]{width:calc(100% - 80px)}.tblform .order[data-v-ee0e3342]{text-align:left}.tblform table[data-v-ee0e3342]{margin-left:15px;width:calc(100% - 15px)}.-style- .remark[data-v-ee0e3342]{padding:10px;color:#999;font-size:12px}.-style- .remark b[data-v-ee0e3342]{font-size:12px}.-style- .center-date-nav[data-v-ee0e3342]{width:50%;padding:9px 16px 8px;position:relative;text-align:center}.-style- .center-date-nav[data-v-ee0e3342] .row{justify-content:center}.-style- .dept[data-v-ee0e3342]{position:relative;display:block;margin:0;width:50%;padding:9px 16px 8px;text-align:center;border-left:1px solid #f6f6f6}.-style- .dept[data-v-ee0e3342] .row{justify-content:center}.-style- .dept select[data-v-ee0e3342]{border:0;padding:3px 10px}.-style- select[data-v-ee0e3342]{padding:4px 0}.theme-black select[data-v-ee0e3342]{background:none;color:#fff}.theme-black .dept[data-v-ee0e3342]{border-left:1px solid #212121}.date-btn[data-v-ee0e3342]{width:fit-content;margin:0 auto;padding:4px 10px;border-radius:20px}.piechart[data-v-ee0e3342]{padding-top:20px}[data-v-ee0e3342].echarts{margin:0 auto;width:calc(100% - 32px);height:200px}.consume-status[data-v-ee0e3342]{padding-bottom:50px}.van-has-overlay[data-v-ee0e3342]{height:max-content;left:50%;top:38%;transform:translate(-50%,-38%);border-radius:5px;text-align:center}.van-has-overlay .dlg-head[data-v-ee0e3342]{padding-top:15px;padding-bottom:15px;text-align:center;font-size:16px;font-weight:600}.van-has-overlay .dlg-cont[data-v-ee0e3342]{padding:0 30px;text-align:left;line-height:20px;max-height:70vh;overflow-y:scroll;overflow-x:hidden}.van-has-overlay .middle-btn[data-v-ee0e3342]{margin:20px auto;padding:10px 0;width:calc(100% - 90px)}.van-has-overlay .dlg-confirm-btns li[data-v-ee0e3342]{width:100%;padding:10px;text-align:center}.course-records[data-v-ee0e3342]{min-height:auto}.course-records .ret[data-v-ee0e3342]{padding:0}.course-records .ret dl[data-v-ee0e3342]{padding:0 0 15px;margin-bottom:10px}.course-records .ret dl[data-v-ee0e3342]:first-child{padding-top:10px}.course-records .ret dl[data-v-ee0e3342]:last-child{border-bottom:0;margin-bottom:0;padding-bottom:0}.course-records .ret dt[data-v-ee0e3342]{padding:0 16px;font-size:15px;height:4rem;line-height:4rem;margin-bottom:8px}.course-records .ret dd[data-v-ee0e3342]{padding:7px 16px 0}.course-records .ret dd label[data-v-ee0e3342]{margin-right:5px;padding-right:0;width:100px;vertical-align:top;line-height:20px}.course-records .ret dd>span[data-v-ee0e3342]{display:inline-block;width:calc(100% - 105px);line-height:20px}.course-records .btn-box[data-v-ee0e3342]{padding:13px 0;margin-top:10px;text-align:center}.red-pink[data-v-ee0e3342]{color:#ef5a5a}.passed-less-stat .theme-border-top[data-v-ee0e3342]{margin-top:15px;padding-top:15px}.passed-less-stat span[data-v-ee0e3342]{font-size:12px;vertical-align:-1px}.passed-less-stat label[data-v-ee0e3342]{padding-left:0;margin-right:4px;font-size:12px}.filter-list[data-v-ee0e3342]{padding:10px 0 0;width:100%}.filter-list .filter-tit[data-v-ee0e3342]{padding:0}.filter-list .filter-tit i[data-v-ee0e3342]{font-size:14px;padding:4px 10px}.filter-list .infor-name[data-v-ee0e3342]{margin-bottom:10px;font-size:12px}.filter-list .date-picker[data-v-ee0e3342]{padding:0 14px 0 8px;margin-left:0}.filter-list .date-picker li[data-v-ee0e3342]{padding:0;margin-bottom:0}.filter-list .date-picker li div[data-v-ee0e3342]{height:32px}.filter-list .date-picker li.wave[data-v-ee0e3342]{width:20px;line-height:32px}.filter-list .recent-list li[data-v-ee0e3342]{height:32px}.filter-list ul[data-v-ee0e3342]{overflow:hidden;margin-bottom:-7px;margin-right:-11px;width:100%}.filter-list li[data-v-ee0e3342]{padding:1px 10px 1px 1px;margin-bottom:10px;max-width:100%;height:32px;border-radius:2px}.filter-list li div[data-v-ee0e3342]{padding:0 10px;background:#f8f8f8;border-radius:2px;height:100%;width:100%;font-size:12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:32px;color:#666}.filter-list li.active[data-v-ee0e3342]{padding:0 9px 0 0}.filter-list li.active div[data-v-ee0e3342]{color:#dbb76b;background:hsla(41,61%,64%,.1);border:1px solid #dbb76b;height:100%}.filter-list li[data-v-ee0e3342]:nth-child(3n){margin-right:0}.filter-list .more-list[data-v-ee0e3342]{max-height:unset;overflow:visible}.resps-table[data-v-ee0e3342]{overflow:auto}.resps-table table[data-v-ee0e3342]{width:100%}.resps-table table td[data-v-ee0e3342],.resps-table table th[data-v-ee0e3342]{color:#333;text-align:center}.resps-table table td[data-v-ee0e3342]{vertical-align:center}.resps-table table td[data-v-ee0e3342]:first-child,.resps-table table th[data-v-ee0e3342]{background:#faf9f9}.resps-table table td[data-v-ee0e3342]:first-child,.resps-table table th[data-v-ee0e3342]:first-child{width:50px}.resps-table .table-fix-td[data-v-ee0e3342]{padding-left:15px}.resps-table .table-fix-td table[data-v-ee0e3342]{margin-left:0}.resps-table .resps-table-box[data-v-ee0e3342]{min-width:100%;position:relative;width:680px}.resps-table .resps-table-box .left-column[data-v-ee0e3342]{position:absolute;top:0;left:0}.resps-table .table-fix-head[data-v-ee0e3342]{text-align:center;width:680px}.resps-table .week-tit[data-v-ee0e3342]{padding:5px 0 4px}.resps-table .week-tit.active[data-v-ee0e3342]{border-radius:4px}.resps-table .week-tit.active .week-date[data-v-ee0e3342],.resps-table .week-tit.active .week-day[data-v-ee0e3342]{font-weight:600}.resps-table .week-date[data-v-ee0e3342]{font-size:12px}.fixtop[data-v-ee0e3342]{position:fixed;top:0;width:100%;z-index:1000;background:#f0f0f0}.theme-black .grid td[data-v-ee0e3342]{border-color:#111}.theme-black .resps-table table .time[data-v-ee0e3342],.theme-black .resps-table table td[data-v-ee0e3342],.theme-black .resps-table table th[data-v-ee0e3342]{color:#fff}.theme-black .resps-table table .time .theme-font-color[data-v-ee0e3342],.theme-black .resps-table table td .theme-font-color[data-v-ee0e3342],.theme-black .resps-table table th .theme-font-color[data-v-ee0e3342]{color:#dbb76b}.theme-black .resps-table table tr td[data-v-ee0e3342]:first-child,.theme-black .resps-table table tr th[data-v-ee0e3342]{background:#212121}", ""]);

// exports


/***/ }),

/***/ 1738:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1507);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(765)("1bef2850", content, true, {});

/***/ }),

/***/ 1740:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1509);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(765)("727cd1b7", content, true, {});

/***/ }),

/***/ 1761:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1530);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(765)("2896a06a", content, true, {});

/***/ }),

/***/ 1762:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1531);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(765)("1b096228", content, true, {});

/***/ }),

/***/ 1768:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1537);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(765)("04b1f8e4", content, true, {});

/***/ }),

/***/ 1770:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1539);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(765)("24bfeb69", content, true, {});

/***/ }),

/***/ 1771:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1540);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(765)("12243232", content, true, {});

/***/ }),

/***/ 1788:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1557);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(765)("75297c8a", content, true, {});

/***/ }),

/***/ 1792:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1561);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(765)("41deea83", content, true, {});

/***/ }),

/***/ 1798:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1567);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(765)("48834de1", content, true, {});

/***/ }),

/***/ 1805:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1574);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(765)("6c6ecdc6", content, true, {});

/***/ }),

/***/ 1807:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1576);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(765)("e6b1ee84", content, true, {});

/***/ }),

/***/ 1822:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1591);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(765)("5170b732", content, true, {});

/***/ }),

/***/ 1832:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1601);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(765)("0ea7be02", content, true, {});

/***/ }),

/***/ 1841:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1610);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(765)("3c5c9d1f", content, true, {});

/***/ }),

/***/ 1843:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1612);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(765)("2f508188", content, true, {});

/***/ }),

/***/ 1844:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1613);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(765)("3ddf3777", content, true, {});

/***/ }),

/***/ 1865:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1634);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(765)("6dd7e193", content, true, {});

/***/ }),

/***/ 1867:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1636);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(765)("c48def00", content, true, {});

/***/ }),

/***/ 1875:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1644);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(765)("76c1a1b2", content, true, {});

/***/ }),

/***/ 1883:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1652);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(765)("040e935f", content, true, {});

/***/ }),

/***/ 1893:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1662);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(765)("0b39e7c4", content, true, {});

/***/ }),

/***/ 1895:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1664);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(765)("f02a8dfc", content, true, {});

/***/ }),

/***/ 1898:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1667);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(765)("306f5340", content, true, {});

/***/ }),

/***/ 1900:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1669);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(765)("c76b1e4c", content, true, {});

/***/ }),

/***/ 1902:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1671);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(765)("0252d30d", content, true, {});

/***/ }),

/***/ 1914:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1683);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(765)("1b4e5ae4", content, true, {});

/***/ }),

/***/ 1916:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1685);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(765)("7de1e403", content, true, {});

/***/ }),

/***/ 1939:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1708);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(765)("243d0358", content, true, {});

/***/ }),

/***/ 1956:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1725);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(765)("2d343d07", content, true, {});

/***/ }),

/***/ 2004:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/sales-target-bg1.2957a2b.png";

/***/ }),

/***/ 2005:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/sales-target-bg2.0ed6768.png";

/***/ }),

/***/ 2006:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/sales-target-bg3.f52f967.png";

/***/ }),

/***/ 2025:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1893)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1358),
  /* template */
  __webpack_require__(2201),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-7ca86ebb",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 2036:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1843)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1456),
  /* template */
  __webpack_require__(2152),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-51095a36",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 2037:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1895)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1457),
  /* template */
  __webpack_require__(2203),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-7f405c0e",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 2038:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1768)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1459),
  /* template */
  __webpack_require__(2077),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-1ecaae5a",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 2039:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1832)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1462),
  /* template */
  __webpack_require__(2141),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-4b596e0e",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 2048:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('stat-coach', {
    attrs: {
      "stat-type": 2
    }
  })], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2050:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "-style-"
  }, [_c('stat-head', {
    attrs: {
      "stat-object": "member"
    }
  }), _vm._v(" "), _c('stat-member-head', {
    attrs: {
      "stat-type": 0
    }
  }), _vm._v(" "), _c('section', {
    staticClass: "chart-sec stat-order"
  }, [_c('div', {
    staticClass: "hd theme-border-bottom theme-padding"
  }, [_c('div', {
    staticClass: "l tit"
  }, [_vm._v("入场签到数")]), _vm._v(" "), (_vm.memberEntryQuery.statType !== 3) ? _c('div', {
    staticClass: "r"
  }, [_c('div', {
    staticClass: "medium",
    on: {
      "click": function($event) {
        return _vm.toggleMemberEntryQueryDates()
      }
    }
  }, [_vm._v(_vm._s(_vm.memberEntryQuery.dateShortcuts[_vm.memberEntryQuery.dateIdx].name) + " "), _c('i', {
    staticClass: "iconfont icon-arrow-down-1 gray big"
  })]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.memberEntryQuery.showMoreDates),
      expression: "memberEntryQuery.showMoreDates"
    }],
    staticClass: "more-dates"
  }, _vm._l((_vm.memberEntryQuery.dateShortcuts), function(d, idx) {
    return (idx !== _vm.memberEntryQuery.dateIdx) ? _c('a', {
      class: {
        'on': _vm.memberEntryQuery.dateIdx === idx
      },
      on: {
        "click": function($event) {
          return _vm.statMemberEntryByDateShortcuts(idx)
        }
      }
    }, [_vm._v(_vm._s(d.name))]) : _vm._e()
  }), 0)]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "stat-btns theme-border-bottom"
  }, [_c('span', {
    staticClass: "btn theme-btn-bor",
    class: {
      'theme-btn-bg': _vm.memberEntryQuery.statType === 1
    },
    on: {
      "click": function($event) {
        return _vm.loadMemberEntryStat(1)
      }
    }
  }, [_vm._v("日统计")]), _vm._v(" "), _c('span', {
    staticClass: "btn theme-btn-bor",
    class: {
      'theme-btn-bg': _vm.memberEntryQuery.statType === 2
    },
    on: {
      "click": function($event) {
        return _vm.loadMemberEntryStat(2)
      }
    }
  }, [_vm._v("周统计")]), _vm._v(" "), _c('span', {
    staticClass: "btn theme-btn-bor",
    class: {
      'theme-btn-bg': _vm.memberEntryQuery.statType === 3
    },
    on: {
      "click": function($event) {
        return _vm.loadMemberEntryStat(3)
      }
    }
  }, [_vm._v("月统计")])]), _vm._v(" "), _c('chart', {
    staticClass: "chart",
    attrs: {
      "options": _vm.memberEntryChartOption
    }
  })], 1), _vm._v(" "), _c('section', {
    staticClass: "chart-sec stat-order"
  }, [_c('div', {
    staticClass: "hd theme-border-bottom theme-padding"
  }, [_c('div', {
    staticClass: "l tit"
  }, [_vm._v("新增会员数")]), _vm._v(" "), (_vm.memberCntQuery.statType !== 3) ? _c('div', {
    staticClass: "r"
  }, [_c('div', {
    staticClass: "medium",
    on: {
      "click": function($event) {
        return _vm.toggleMemberCntQueryDates()
      }
    }
  }, [_vm._v(_vm._s(_vm.memberCntQuery.dateShortcuts[_vm.memberCntQuery.dateIdx].name) + " "), _c('i', {
    staticClass: "iconfont icon-arrow-down-1 gray big"
  })]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.memberCntQuery.showMoreDates),
      expression: "memberCntQuery.showMoreDates"
    }],
    staticClass: "more-dates"
  }, _vm._l((_vm.memberCntQuery.dateShortcuts), function(d, idx) {
    return (idx !== _vm.memberCntQuery.dateIdx) ? _c('a', {
      class: {
        'on': _vm.memberCntQuery.dateIdx === idx
      },
      on: {
        "click": function($event) {
          return _vm.statMemberCntByDateShortcuts(idx)
        }
      }
    }, [_vm._v(_vm._s(d.name))]) : _vm._e()
  }), 0)]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "stat-btns theme-border-bottom"
  }, [_c('span', {
    staticClass: "btn theme-btn-bor",
    class: {
      'theme-btn-bg': _vm.memberCntQuery.statType === 1
    },
    on: {
      "click": function($event) {
        return _vm.loadMemberCntStat(1)
      }
    }
  }, [_vm._v("日统计")]), _vm._v(" "), _c('span', {
    staticClass: "btn theme-btn-bor",
    class: {
      'theme-btn-bg': _vm.memberCntQuery.statType === 2
    },
    on: {
      "click": function($event) {
        return _vm.loadMemberCntStat(2)
      }
    }
  }, [_vm._v("周统计")]), _vm._v(" "), _c('span', {
    staticClass: "btn theme-btn-bor",
    class: {
      'theme-btn-bg': _vm.memberCntQuery.statType === 3
    },
    on: {
      "click": function($event) {
        return _vm.loadMemberCntStat(3)
      }
    }
  }, [_vm._v("月统计")])]), _vm._v(" "), _c('chart', {
    staticClass: "chart",
    attrs: {
      "options": _vm.memberCntChartOption
    }
  })], 1), _vm._v(" "), _c('section', {
    staticClass: "chart-sec stat-order"
  }, [_c('div', {
    staticClass: "hd theme-border-bottom theme-padding"
  }, [_c('div', {
    staticClass: "l tit"
  }, [_vm._v("续卡会员数")]), _vm._v(" "), (_vm.memberCntForCpQuery.statType !== 3) ? _c('div', {
    staticClass: "r"
  }, [_c('div', {
    staticClass: "medium",
    on: {
      "click": function($event) {
        return _vm.toggleMemberCntForCpQueryDates()
      }
    }
  }, [_vm._v(_vm._s(_vm.memberCntForCpQuery.dateShortcuts[_vm.memberCntForCpQuery.dateIdx].name) + " "), _c('i', {
    staticClass: "iconfont icon-arrow-down-1 gray big"
  })]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.memberCntForCpQuery.showMoreDates),
      expression: "memberCntForCpQuery.showMoreDates"
    }],
    staticClass: "more-dates"
  }, _vm._l((_vm.memberCntForCpQuery.dateShortcuts), function(d, idx) {
    return (idx !== _vm.memberCntForCpQuery.dateIdx) ? _c('a', {
      class: {
        'on': _vm.memberCntForCpQuery.dateIdx === idx
      },
      on: {
        "click": function($event) {
          return _vm.statMemberCntForCpByDateShortcuts(idx)
        }
      }
    }, [_vm._v(_vm._s(d.name))]) : _vm._e()
  }), 0)]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "stat-btns theme-border-bottom"
  }, [_c('span', {
    staticClass: "btn theme-btn-bor",
    class: {
      'theme-btn-bg': _vm.memberCntForCpQuery.statType === 1
    },
    on: {
      "click": function($event) {
        return _vm.loadMemberCardPaymentCntStat(1)
      }
    }
  }, [_vm._v("日统计")]), _vm._v(" "), _c('span', {
    staticClass: "btn theme-btn-bor",
    class: {
      'theme-btn-bg': _vm.memberCntForCpQuery.statType === 2
    },
    on: {
      "click": function($event) {
        return _vm.loadMemberCardPaymentCntStat(2)
      }
    }
  }, [_vm._v("周统计")]), _vm._v(" "), _c('span', {
    staticClass: "btn theme-btn-bor",
    class: {
      'theme-btn-bg': _vm.memberCntForCpQuery.statType === 3
    },
    on: {
      "click": function($event) {
        return _vm.loadMemberCardPaymentCntStat(3)
      }
    }
  }, [_vm._v("月统计")])]), _vm._v(" "), _c('chart', {
    staticClass: "chart",
    attrs: {
      "options": _vm.memberCntForCpChartOption
    }
  })], 1), _vm._v(" "), _c('bottom-nav', {
    attrs: {
      "menu": "stat"
    }
  })], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2071:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "stat-order -style-"
  }, [_c('stat-head', {
    attrs: {
      "stat-object": "course"
    }
  }), _vm._v(" "), _c('section', {
    staticClass: "page-sub-menus full-sec"
  }, [_c('div', {
    staticClass: "theme-border-bottom row space-around"
  }, [_c('span', {
    class: {
      'theme-font-color theme-tab-bor-bottom': _vm.courseType === 1
    },
    on: {
      "click": function($event) {
        return _vm.choseCourseType(1)
      }
    }
  }, [_vm._v("团课统计")]), _vm._v(" "), _c('span', {
    class: {
      'theme-font-color theme-tab-bor-bottom': _vm.courseType === 2
    },
    on: {
      "click": function($event) {
        return _vm.choseCourseType(2)
      }
    }
  }, [_vm._v("私教课统计")])])]), _vm._v(" "), (_vm.courseType === 1) ? [(_vm.glStatPermit) ? _c('div', {
    staticClass: "detail"
  }, [_c('section', {
    staticClass: "item"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "row lesson-stat"
  }, [_c('div', {}, [_c('div', {
    staticClass: "stat-num"
  }, [_vm._v(_vm._s(_vm.statInSum.lessonCnt ? _vm.statInSum.lessonCnt : 0))]), _vm._v(" "), _c('div', {
    staticClass: "stat-tit font-color-9"
  }, [_vm._v("总课时数")])]), _vm._v(" "), _c('div', {}, [_c('div', {
    staticClass: "stat-num"
  }, [_vm._v(_vm._s(_vm.statInSum.bookingCnt ? _vm.statInSum.bookingCnt : 0))]), _vm._v(" "), _c('div', {
    staticClass: "stat-tit font-color-9"
  }, [_vm._v("预约人次")])]), _vm._v(" "), _c('div', {}, [_c('div', {
    staticClass: "stat-num"
  }, [_vm._v(_vm._s(_vm.statInSum.checkinCnt ? _vm.statInSum.checkinCnt : 0))]), _vm._v(" "), _c('div', {
    staticClass: "stat-tit font-color-9"
  }, [_vm._v("签到人次")])]), _vm._v(" "), _c('div', {}, [_c('div', {
    staticClass: "stat-num"
  }, [_vm._v(_vm._s(_vm.statInSum.memberCnt ? _vm.statInSum.memberCnt : 0))]), _vm._v(" "), _c('div', {
    staticClass: "stat-tit font-color-9"
  }, [_vm._v("参与人数")])])])]), _vm._v(" "), _c('section', {
    staticClass: "tblform"
  }, [_c('div', {
    staticClass: "page-sub-menus section-part"
  }, [_c('div', {
    staticClass: "theme-border-bottom row space-around"
  }, [_c('span', {
    class: {
      'theme-font-color': _vm.courseStatus === 1
    },
    on: {
      "click": function($event) {
        _vm.courseStatus = 1
      }
    }
  }, [_vm._v("上课统计")]), _vm._v(" "), _c('span', {
    class: {
      'theme-font-color': _vm.courseStatus === 2
    },
    on: {
      "click": function($event) {
        _vm.courseStatus = 2
      }
    }
  }, [_vm._v("团课排名")])])]), _vm._v(" "), (_vm.courseStatus == 1) ? [_c('div', {
    staticClass: "center-date-nav",
    staticStyle: {
      "padding": "0"
    }
  }, [_c('div', {
    staticClass: "theme-border-bottom",
    staticStyle: {
      "padding": "10px 16px"
    }
  }, [_c('div', {
    staticClass: "theme-btn-bor date-btn",
    on: {
      "click": function($event) {
        _vm.showMoreStatLessonDate = !_vm.showMoreStatLessonDate
      }
    }
  }, [_vm._v(_vm._s(_vm.statLessonDate[_vm.statLessonDateIdx].tit) + " "), _c('i', {
    staticClass: "iconfont iconarrow-down-1 big"
  })]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showMoreStatLessonDate),
      expression: "showMoreStatLessonDate"
    }],
    staticClass: "more-dates"
  }, _vm._l((_vm.statLessonDate), function(d, idx) {
    return _c('a', {
      class: {
        'on': _vm.statLessonDateIdx === idx
      },
      on: {
        "click": function($event) {
          return _vm.statLessson(idx + 1)
        }
      }
    }, [_vm._v(_vm._s(d.tit))])
  }), 0)])]), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("统计日期")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail row align-center"
  }, [_c('div', {
    staticClass: "row row-l-r start",
    staticStyle: {
      "padding": "0"
    },
    on: {
      "click": function($event) {
        return _vm.showInputDlg('beginDate')
      }
    }
  }, [(_vm.beginDate) ? [_c('span', [_vm._v(_vm._s(_vm.beginDate))])] : [_c('span', {
    staticClass: "font-color-c"
  }, [_vm._v("请选择开始日期")])], _vm._v(" "), _c('i', {
    staticClass: "iconfont iconarrow-down-1 font-color-c",
    staticStyle: {
      "margin-top": "2px",
      "font-size": "12px"
    }
  })], 2), _vm._v(" "), _c('div', [_vm._v("~")]), _vm._v(" "), _c('div', {
    staticClass: "row row-l-r start",
    staticStyle: {
      "padding": "0"
    },
    on: {
      "click": function($event) {
        return _vm.showInputDlg('endDate')
      }
    }
  }, [(_vm.endDate) ? [_c('span', [_vm._v(_vm._s(_vm.endDate))])] : [_c('span', {
    staticClass: "font-color-c"
  }, [_vm._v("请选择结束日期")])], _vm._v(" "), _c('i', {
    staticClass: "iconfont iconarrow-down-1 font-color-c",
    staticStyle: {
      "margin-top": "2px",
      "font-size": "12px"
    }
  })], 2)])]), _vm._v(" "), _c('div', {
    staticClass: "filter-list theme-border-bottom"
  }, [_c('ul', {
    staticClass: "ul-li-fl recent-list"
  }, [_vm._l((_vm.createDateOption.shortcuts), function(s, idx) {
    return [_c('li', {
      class: {
        'active': _vm.shortcutsIdx == idx
      },
      on: {
        "click": function($event) {
          return _vm.handleShotcuts(idx, s.value)
        }
      }
    }, [_c('div', [_vm._v(_vm._s(s.text))])])]
  })], 2)]), _vm._v(" "), _c('div', {
    staticStyle: {
      "padding": "15px 0"
    }
  }, [_c('div', {
    staticClass: "largest-btn theme-btn-bg",
    on: {
      "click": function($event) {
        return _vm.statLessson(null)
      }
    }
  }, [_vm._v("查询")])])] : _vm._e(), _vm._v(" "), (_vm.courseStatus == 2) ? [_c('course-stat', {
    attrs: {
      "course-type": 1
    }
  })] : _vm._e()], 2), _vm._v(" "), (_vm.courseStatus == 1) ? [_c('qd-table', {
    attrs: {
      "height": 250,
      "columns": _vm.columns,
      "data": _vm.statList
    },
    scopedSlots: _vm._u([{
      key: "header",
      fn: function(ref) {
        var row = ref.row;
        var index = ref.index;

        return [_c('div', [_vm._v(_vm._s(row.title)), (row.iconTip) ? _c('i', {
          staticClass: "iconfont iconinfo theme-font-color ml-5",
          on: {
            "click": function($event) {
              return _vm.showTipDlg(index)
            }
          }
        }) : _vm._e()])]
      }
    }, {
      key: "lessonDate",
      fn: function(ref) {
        var row = ref.row;
        var index = ref.index;

        return [(index !== 0) ? [_vm._v("\n              " + _vm._s(_vm.g.Util.formatDate(row.lessonDate)) + "\n            ")] : [_vm._v("\n              " + _vm._s(row.lessonDate) + "\n            ")]]
      }
    }, {
      key: "class",
      fn: function(ref) {
        var row = ref.row;

        return [_c('div', [(row.avgCheckinRateForClass) ? _c('span', [_vm._v(_vm._s(_vm.g.Util.round(row.avgCheckinRateForClass * 100)) + "%")]) : _vm._e()])]
      }
    }, {
      key: "memberCar",
      fn: function(ref) {
        var row = ref.row;

        return [_c('div', [(row.cardCostFee) ? [_vm._v("￥" + _vm._s(_vm.g.Util.round(row.cardCostFee)))] : [_vm._v("0")]], 2)]
      }
    }, {
      key: "handler",
      fn: function(ref) {
        var row = ref.row;
        var index = ref.index;

        return [(index !== 0) ? [(_vm.query.statBy === 1) ? _c('span', {
          staticClass: "theme-font-color",
          on: {
            "click": function($event) {
              return _vm.viewMemberLessonListByDate(row.lessonDate)
            }
          }
        }, [_vm._v("上课明细")]) : _vm._e(), _vm._v(" "), (_vm.query.statBy === 3) ? _c('span', {
          staticClass: "theme-font-color",
          on: {
            "click": function($event) {
              return _vm.viewMemberLessonListByMonth(row.lessonMonth)
            }
          }
        }, [_vm._v("上课明细")]) : _vm._e()] : _vm._e()]
      }
    }], null, false, 17833572)
  }), _vm._v(" "), (_vm.statList && !_vm.statList.length) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("暂无数据")]) : _vm._e()] : _vm._e()], 2) : _c('div', {
    staticClass: "no-data"
  }, [_c('p'), _vm._v("您尚无此功能权限\n    ")])] : _vm._e(), _vm._v(" "), (_vm.courseType === 2 && !_vm.plStatPermit) ? _c('div', {
    staticClass: "no-data"
  }, [_c('p'), _vm._v("您尚无此功能权限\n  ")]) : _vm._e(), _vm._v(" "), (_vm.courseType === 2 && _vm.plStatPermit) ? [(_vm.plStat.costTimes && _vm.plStat.totalTimes >= _vm.plStat.currentTimes) ? _c('section', {
    staticClass: "stat1 tblform"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("到期日期")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_c('div', {
    staticClass: "row row-l-r",
    staticStyle: {
      "padding": "0"
    },
    on: {
      "click": function($event) {
        return _vm.showInputDlg('limitDate')
      }
    }
  }, [(_vm.limitDate) ? [_c('span', [_vm._v(_vm._s(_vm.limitDate))])] : [_c('span', {
    staticClass: "font-color-c"
  }, [_vm._v("请选择到期日期")])], _vm._v(" "), _c('i', {
    staticClass: "iconfont iconarrow-down-1 font-color-c",
    staticStyle: {
      "margin-top": "2px",
      "font-size": "12px"
    }
  })], 2)])]), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("会员卡有效期筛选")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_c('pull-down-list', {
    attrs: {
      "selectList": _vm.plMcTermOfValid,
      "selectId": "name",
      "changeId": "id"
    },
    on: {
      "selectOne": _vm.statPrivateLesson
    },
    model: {
      value: (_vm.plStatCardDatesType),
      callback: function($$v) {
        _vm.plStatCardDatesType = $$v
      },
      expression: "plStatCardDatesType"
    }
  }, [_c('span', {
    attrs: {
      "slot": "dlgTit"
    },
    slot: "dlgTit"
  }, [_vm._v("会员卡有效期筛选")]), _vm._v(" "), _c('span', {
    staticClass: "font-color-c",
    attrs: {
      "slot": "pleaseChose"
    },
    slot: "pleaseChose"
  }, [_vm._v("请选择有效期")])])], 1)]), _vm._v(" "), (_vm.plStat && _vm.plStat.totalTimes) ? _c('div', {
    staticClass: "row lesson-stat-2 theme-border-bottom",
    class: {
      'lesson-stat-div3': _vm.plStat.totalAmount
    }
  }, [(_vm.plStat.totalAmount) ? [_c('div', [_c('div', {
    staticClass: "red"
  }, [_vm._v("￥" + _vm._s(_vm.plStat.totalAmount))]), _vm._v(" "), _c('div', {
    staticClass: "stat-tit font-color-9"
  }, [_vm._v("总课时费")])]), _vm._v(" "), _c('div', [_c('div', {
    staticClass: "red"
  }, [_vm._v(_vm._s(_vm.plStat.totalTimes) + "次")]), _vm._v(" "), _c('div', {
    staticClass: "stat-tit font-color-9"
  }, [_vm._v("总课时数")])]), _vm._v(" "), _c('div', [_c('div', {
    staticClass: "red"
  }, [_c('span', {
    staticClass: "small"
  }, [_vm._v("￥")]), _vm._v(_vm._s((_vm.plStat.totalAmount / _vm.plStat.totalTimes).toFixed(2)))]), _vm._v(" "), _c('div', {
    staticClass: "stat-tit font-color-9"
  }, [_vm._v("平均每次课时费")])])] : [_c('div', [_c('div', {
    staticClass: "red"
  }, [_vm._v(_vm._s(_vm.plStat.totalTimes) + "次")]), _vm._v(" "), _c('div', {
    staticClass: "stat-tit font-color-9"
  }, [_vm._v("总课时数")])])]], 2) : _vm._e(), _vm._v(" "), (_vm.plStat && _vm.plStat.totalTimes > 0 && _vm.plStat.totalTimes >= _vm.plStat.currentTimes) ? [_c('div', {
    staticClass: "theme-border-bottom"
  }, [_c('div', {
    staticClass: "stat-graph"
  }, [_c('div', {
    staticClass: "cost",
    style: ('width: ' + _vm.plStat.costTimesRate + '%')
  }, [_vm._v(" ")]), _vm._v(" "), _c('div', {
    staticClass: "current",
    style: ('width: ' + (100 - _vm.plStat.costTimesRate) + '%')
  }, [_vm._v(" ")])]), _vm._v(" "), _c('div', {
    staticClass: "stat-graph-desc"
  }, [_c('div', [_c('span', {
    staticClass: "cost flag"
  }, [_vm._v(" ")]), _vm._v(" "), _c('span', [_vm._v("消耗")]), _vm._v("（"), _c('span', {}, [_vm._v(_vm._s(_vm.plStat.costTimesRate) + "%")]), _vm._v("）： "), _c('b', {
    staticClass: "big"
  }, [_vm._v(_vm._s(_vm.plStat.costTimes))]), _vm._v("次 /\n              "), (_vm.plStat.costFee) ? _c('span', [_c('b', {
    staticClass: "big"
  }, [_vm._v("￥" + _vm._s(_vm.plStat.costFee))])]) : _vm._e()]), _vm._v(" "), _c('div', [_c('span', {
    staticClass: "current flag"
  }, [_vm._v(" ")]), _vm._v(" "), _c('span', [_vm._v("剩余")]), _vm._v("（"), _c('span', {}, [_vm._v(_vm._s(_vm.g.Util.round(100 - _vm.plStat.costTimesRate)) + "%")]), _vm._v("）： "), _c('b', {
    staticClass: "big"
  }, [_vm._v(_vm._s(_vm.plStat.currentTimes))]), _vm._v("次 /\n              "), (_vm.plStat.leftFee) ? _c('span', [_c('b', {
    staticClass: "big"
  }, [_vm._v("￥" + _vm._s(_vm.plStat.leftFee))])]) : _vm._e(), _vm._v(" "), _c('i', {
    staticClass: "iconfont iconinfo theme-font-color ml-5",
    on: {
      "click": function($event) {
        return _vm.showTipDlg(6)
      }
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "red-pink row"
  }, [_vm._v("\n          备注： 此处统计数据仅来源于私教次卡充值记录\n        ")])] : _c('div', {
    staticClass: "none",
    staticStyle: {
      "padding-bottom": "15px"
    }
  }, [_c('i', {
    staticClass: "iconfont icon-none"
  }), _vm._v("暂无数据\n      ")])], 2) : _vm._e(), _vm._v(" "), _c('section', {
    staticClass: "stat2 tblform"
  }, [_vm._m(2), _vm._v(" "), (_vm.hasLoadCoachStat) ? _c('qd-table', {
    attrs: {
      "height": 280,
      "columns": _vm.personalTrainersColumns,
      "data": _vm.privateCoachList
    },
    scopedSlots: _vm._u([{
      key: "totalTimes",
      fn: function(ref) {
        var row = ref.row;

        return [_c('div', {
          staticClass: "color1"
        }, [(row.stat && row.stat.totalTimes) ? [_vm._v(_vm._s(row.stat.totalTimes) + " 次")] : _vm._e()], 2)]
      }
    }, {
      key: "totalFee",
      fn: function(ref) {
        var row = ref.row;

        return [_c('div', {
          staticClass: "color1"
        }, [(row.stat && row.stat.totalFee) ? [_vm._v("￥" + _vm._s(_vm.g.Util.round(row.stat.totalFee)))] : _vm._e()], 2)]
      }
    }, {
      key: "usedTimes",
      fn: function(ref) {
        var row = ref.row;

        return [_c('div', {
          staticClass: "color2"
        }, [(row.stat && row.stat.usedTimes) ? _c('span', [_vm._v(_vm._s(row.stat.usedTimes) + " 次")]) : _vm._e()])]
      }
    }, {
      key: "usedFee",
      fn: function(ref) {
        var row = ref.row;

        return [_c('div', {
          staticClass: "color2"
        }, [(row.stat) ? [_vm._v("￥" + _vm._s(_vm.g.Util.round(row.stat.usedFee)))] : _vm._e()], 2)]
      }
    }, {
      key: "usedTimes2",
      fn: function(ref) {
        var row = ref.row;

        return [_c('div', {
          staticClass: "color3"
        }, [(row.stat && row.stat.totalTimes > row.stat.usedTimes) ? [_vm._v(_vm._s(row.stat.totalTimes - row.stat.usedTimes) + " 次")] : _vm._e()], 2)]
      }
    }, {
      key: "residueTimes",
      fn: function(ref) {
        var row = ref.row;

        return [_c('div', {
          staticClass: "color3"
        }, [(row.stat && row.stat.totalFee > row.stat.usedFee) ? [_vm._v("￥" + _vm._s(_vm.g.Util.round(row.stat.totalFee - row.stat.usedFee)))] : _vm._e()], 2)]
      }
    }], null, false, 945260443)
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "red-pink row"
  }, [_vm._v("\n        备注： 此处统计数据仅来源于私教排课和约课记录 （数据如有不对，请仔细检查私教排课）\n      ")])], 1), _vm._v(" "), _c('section', {
    staticClass: "stat2 tblform"
  }, [_vm._m(3), _vm._v(" "), _c('course-stat', {
    attrs: {
      "course-type": 2
    }
  })], 1)] : _vm._e(), _vm._v(" "), _c('bottom-nav', {
    attrs: {
      "menu": "stat"
    }
  }), _vm._v(" "), _c('van-action-sheet', {
    attrs: {
      "close-on-click-overlay": false
    },
    model: {
      value: (_vm.dlgView.inputShow),
      callback: function($$v) {
        _vm.$set(_vm.dlgView, "inputShow", $$v)
      },
      expression: "dlgView.inputShow"
    }
  }, [(_vm.checkDlgViewName == 'beginDate') ? [_c('van-datetime-picker', {
    attrs: {
      "type": "date",
      "title": "选择年月日",
      "confirm-button-text": "完成"
    },
    on: {
      "confirm": function($event) {
        return _vm.confirmDatePiker('beginDate')
      },
      "cancel": function($event) {
        _vm.dlgView.inputShow = false
      }
    },
    model: {
      value: (_vm.currentDate),
      callback: function($$v) {
        _vm.currentDate = $$v
      },
      expression: "currentDate"
    }
  })] : _vm._e(), _vm._v(" "), (_vm.checkDlgViewName == 'endDate') ? [_c('van-datetime-picker', {
    attrs: {
      "type": "date",
      "title": "选择年月日",
      "confirm-button-text": "完成"
    },
    on: {
      "confirm": function($event) {
        return _vm.confirmDatePiker('endDate')
      },
      "cancel": function($event) {
        _vm.dlgView.inputShow = false
      }
    },
    model: {
      value: (_vm.currentDate),
      callback: function($$v) {
        _vm.currentDate = $$v
      },
      expression: "currentDate"
    }
  })] : _vm._e(), _vm._v(" "), (_vm.checkDlgViewName == 'limitDate') ? [_c('van-datetime-picker', {
    attrs: {
      "type": "date",
      "title": "选择年月日",
      "confirm-button-text": "完成"
    },
    on: {
      "confirm": function($event) {
        return _vm.confirmDatePiker('limitDate')
      },
      "cancel": function($event) {
        _vm.dlgView.inputShow = false
      }
    },
    model: {
      value: (_vm.currentDate),
      callback: function($$v) {
        _vm.currentDate = $$v
      },
      expression: "currentDate"
    }
  })] : _vm._e()], 2), _vm._v(" "), (_vm.dlgView.showTips) ? _c('van-dialog', {
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
  }, [_vm._v("好的")])]) : _vm._e(), _vm._v(" "), (_vm.memberLessonListDlg) ? _c('van-dialog', {
    staticClass: "van-has-overlay section-part",
    attrs: {
      "show-cancel-button": false,
      "show-confirm-button": false
    },
    model: {
      value: (_vm.memberLessonListDlg),
      callback: function($$v) {
        _vm.memberLessonListDlg = $$v
      },
      expression: "memberLessonListDlg"
    }
  }, [_c('section', {
    staticStyle: {
      "margin-bottom": "0",
      "border": "0"
    }
  }, [_c('div', {
    staticClass: "dlg-head theme-border-bottom"
  }, [_vm._v("上课明细：" + _vm._s(_vm.memberLessonListDlgTit))]), _vm._v(" "), _c('div', {
    staticClass: "dlg-cont",
    staticStyle: {
      "padding": "0"
    }
  }, [_c('member-lesson-list', {
    attrs: {
      "lesson-date": _vm.queryLessonBeginDate,
      "lesson-end-date": _vm.queryLessonEndDate
    }
  })], 1), _vm._v(" "), _c('ul', {
    staticClass: "ul-li-fl dlg-confirm-btns theme-border-top"
  }, [_c('li', {
    staticClass: "cancel btn font-color-9",
    on: {
      "click": function($event) {
        _vm.memberLessonListDlg = false
      }
    }
  }, [_vm._v("关闭")])])])]) : _vm._e()], 2)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd theme-border-bottom theme-padding"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("本月上课统计")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd theme-border-bottom theme-padding"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("私教课次卡统计")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd theme-border-bottom theme-padding"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("私教课时统计")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd theme-border-bottom theme-padding"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("课程排名")])])
}]}

/***/ }),

/***/ 2072:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vant"
  }, [_c('stat-head', {
    attrs: {
      "stat-object": "member"
    }
  }), _vm._v(" "), _c('stat-member-head', {
    attrs: {
      "stat-type": 5
    }
  }), _vm._v(" "), _c('member-checkin-days', {
    attrs: {
      "stat-type": 5
    }
  })], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2077:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "coll"
  }, _vm._l((_vm.dataList), function(item, idx) {
    return _c('div', {
      key: idx,
      class: ['coll-item', _vm.menu == 'by-day' ? '' : 'bor-bottom']
    }, [_c('div', {
      staticClass: "coll-title row-space",
      on: {
        "click": function($event) {
          return _vm.expandCollapse(item.keyId, item.status)
        }
      }
    }, [_c('span', {
      staticClass: "title"
    }, [_vm._v("•  " + _vm._s(_vm.g.Dict.StatItems[item.keyId]))]), _vm._v(" "), _c('div', {
      staticClass: "right align-center"
    }, [_c('span', {
      staticClass: "val"
    }, [_vm._v(_vm._s(JSON.stringify(item.intVal) ? item.intVal : '￥' + item.doubleVal))]), _vm._v(" "), (item.status == 1) ? _c('i', {
      staticClass: "iconfont iconPutaway-icon"
    }) : _vm._e(), _vm._v(" "), (item.status == 2) ? _c('i', {
      staticClass: "iconfont iconPutaway-icon"
    }) : _vm._e(), _vm._v(" "), (item.status == 3) ? _c('i', {
      staticClass: "iconfont icondropdown-icon"
    }) : _vm._e()])]), _vm._v(" "), _c('div', {
      staticClass: "coll-content"
    }, [(item.status == 3) ? _c('section', {
      staticClass: "chart-sec stat-order"
    }, [_c('div', {
      staticClass: "hd sel",
      staticStyle: {
        "padding": "0",
        "height": "30px",
        "line-height": "38px"
      }
    }, [_c('div', {
      staticClass: "r",
      staticStyle: {
        "padding": "0 0 5px 10px",
        "width": "100%",
        "text-align": "right"
      }
    }, [(_vm.menu === 'by-day') ? _c('div', {
      staticClass: "medium"
    }, [_vm._v("最近30天")]) : _vm._e(), _vm._v(" "), (_vm.menu === 'by-week') ? _c('div', {
      staticClass: "medium"
    }, [_vm._v("最近8周")]) : _vm._e(), _vm._v(" "), (_vm.menu === 'by-month') ? _c('div', {
      staticClass: "medium"
    }, [_vm._v("最近半年")]) : _vm._e()])]), _vm._v(" "), (item.chartOptions) ? _c('chart', {
      staticClass: "chart",
      attrs: {
        "options": item.chartOptions
      }
    }) : _vm._e()], 1) : _vm._e(), _vm._v(" "), (_vm.menu !== 'by-day' && (JSON.stringify(item.yoyStat) || JSON.stringify(item.momStat))) ? _c('div', {
      staticClass: "compare row-space"
    }, [(JSON.stringify(item.yoyStat)) ? _c('div', {
      staticClass: "straight align-center"
    }, [_c('span', {
      class: Number(item.yoyStat) >= 0 ? 'tag up-tag' : 'tag down-tag'
    }, [_vm._v(_vm._s(Number(item.yoyStat) >= 0 ? '同比新增' : '同比下降'))]), _vm._v(" "), _c('span', {
      staticClass: "num"
    }, [_vm._v(_vm._s((Math.abs(item.yoyStat) * 100).toFixed(1) + '%'))]), _vm._v(" "), _c('i', {
      class: Number(item.yoyStat) >= 0 ? 'iconfont iconshangjiantou1' : 'iconfont icondecline-icon'
    })]) : _vm._e(), _vm._v(" "), (JSON.stringify(item.momStat)) ? _c('div', {
      staticClass: "round align-center"
    }, [_c('span', {
      class: Number(item.momStat) >= 0 ? 'tag up-tag' : 'tag down-tag'
    }, [_vm._v(_vm._s(Number(item.momStat) >= 0 ? '环比新增' : '环比下降'))]), _vm._v(" "), _c('span', {
      staticClass: "num"
    }, [_vm._v(_vm._s((Math.abs(item.momStat) * 100).toFixed(1) + '%'))]), _vm._v(" "), _c('i', {
      class: Number(item.momStat) >= 0 ? 'iconfont iconshangjiantou1' : 'iconfont icondecline-icon'
    })]) : _vm._e()]) : _vm._e()])])
  }), 0)])
},staticRenderFns: []}

/***/ }),

/***/ 2079:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "-style-"
  }, [_c('stat-course', {
    attrs: {
      "course-type": 1
    }
  })], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2080:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "-stat-home-"
  }, [_vm._m(0), _vm._v(" "), _c('section', {
    staticStyle: {
      "padding": "0"
    }
  }, [(_vm.g.data.user.staffId) ? _c('ul', {
    staticClass: "menu-list"
  }, [_c('li', {
    staticClass: "theme-border-bottom",
    on: {
      "click": function($event) {
        return _vm.pageTo('/shop-stat-member')
      }
    }
  }, [_c('i', {
    staticClass: "icon iconfont iconhuiyuantongji1"
  }), _c('div', {
    staticClass: "txt"
  }, [_vm._v("会员统计")]), _vm._m(1)]), _vm._v(" "), _c('li', {
    staticClass: "theme-border-bottom",
    on: {
      "click": function($event) {
        return _vm.pageTo('/shop-stat-staff')
      }
    }
  }, [_c('i', {
    staticClass: "icon iconfont iconyeji"
  }), _c('div', {
    staticClass: "txt"
  }, [_vm._v("员工业绩统计")]), _vm._m(2)]), _vm._v(" "), _c('li', {
    staticClass: "theme-border-bottom",
    on: {
      "click": function($event) {
        return _vm.pageTo('/shop-stat-course')
      }
    }
  }, [_c('i', {
    staticClass: "icon iconfont iconkechengtongji-"
  }), _c('div', {
    staticClass: "txt"
  }, [_vm._v("课程统计")]), _vm._m(3)]), _vm._v(" "), _c('li', {
    staticClass: "theme-border-bottom",
    on: {
      "click": function($event) {
        return _vm.pageTo('/shop-stat-card')
      }
    }
  }, [_c('i', {
    staticClass: "icon iconfont iconhuiyuanqia"
  }), _c('div', {
    staticClass: "txt"
  }, [_vm._v("会员卡统计")]), _vm._m(4)]), _vm._v(" "), _c('li', {
    staticClass: "theme-border-bottom",
    on: {
      "click": function($event) {
        return _vm.pageTo('/shop-stat-revenue')
      }
    }
  }, [_c('i', {
    staticClass: "icon iconfont iconshouzhimingxi"
  }), _c('div', {
    staticClass: "txt"
  }, [_vm._v("收支统计")]), _vm._m(5)]), _vm._v(" "), _c('li', {
    staticClass: "theme-border-bottom",
    on: {
      "click": function($event) {
        return _vm.pageTo('/shop-stat-report')
      }
    }
  }, [_c('i', {
    staticClass: "icon iconfont iconliulanliang-"
  }), _c('div', {
    staticClass: "txt"
  }, [_vm._v("营业额统计")]), _vm._m(6)])]) : _vm._e()]), _vm._v(" "), _c('bottom-nav', {
    attrs: {
      "menu": "stat",
      "show-slogan": false
    }
  })], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd"
  }, [_c('img', {
    attrs: {
      "src": "/static/img/stat-bg.png"
    }
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
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "r"
  }, [_c('i', {
    staticClass: "iconfont iconarrow-r"
  })])
}]}

/***/ }),

/***/ 2098:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "page-sub-menus full-sec"
  }, [_c('div', {
    staticClass: "theme-border-bottom row"
  }, [_c('span', {
    class: {
      'theme-font-color theme-tab-bor-bottom': _vm.statType === 1
    },
    on: {
      "click": function($event) {
        return _vm.$router.push('/shop-stat-sales')
      }
    }
  }, [_vm._v("销售业绩")]), _vm._v(" "), _c('span', {
    class: {
      'theme-font-color theme-tab-bor-bottom': _vm.statType === 2
    },
    on: {
      "click": function($event) {
        return _vm.$router.push('/shop-stat-group-coach')
      }
    }
  }, [_vm._v("团课教练业绩")]), _vm._v(" "), _c('span', {
    class: {
      'theme-font-color theme-tab-bor-bottom': _vm.statType === 3
    },
    on: {
      "click": function($event) {
        return _vm.$router.push('/shop-stat-private-coach')
      }
    }
  }, [_vm._v("私教业绩")]), _vm._v(" "), _c('span', {
    class: {
      'theme-font-color theme-tab-bor-bottom': _vm.statType === 4
    },
    on: {
      "click": function($event) {
        return _vm.$router.push('/shop-stat-sales-target')
      }
    }
  }, [_vm._v("销售目标")])])])
},staticRenderFns: []}

/***/ }),

/***/ 2102:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "page-head"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "tit"
  }, [_vm._v(_vm._s(_vm.statObjects[_vm.statObject].title))]), _vm._v(" "), _c('div', {
    staticClass: "move-right"
  }, [_c('div', {
    on: {
      "click": function($event) {
        return _vm.togglerPopup()
      }
    }
  }, [_vm._v("更多统计 "), _c('i', {
    staticClass: "iconfont iconarrow-down-1 gray bigger"
  })]), _vm._v(" "), _c('section', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.menusPopup),
      expression: "menusPopup"
    }],
    staticClass: "stat-popup full-sec"
  }, [_c('ul', [_vm._l((_vm.statObjects), function(s, key) {
    return (key !== _vm.statObject) ? _c('li', {
      staticClass: "theme-border-bottom",
      on: {
        "click": function($event) {
          return _vm.$router.push(s.path)
        }
      }
    }, [_c('i', {
      class: 'icon iconfont ' + s.icon
    }), _vm._v(" " + _vm._s(s.title))]) : _vm._e()
  }), _vm._v(" "), (_vm.shopList && _vm.shopList.length > 1) ? _c('li', {
    staticClass: "theme-font-color",
    on: {
      "click": function($event) {
        _vm.userShopsDlg = true
      }
    }
  }, [_c('i', {
    staticClass: "iconfont iconswitch"
  }), _vm._v(" 切换门店")]) : _vm._e()], 2)])])]), _vm._v(" "), _c('div', {
    staticClass: "vant"
  }, [(_vm.userShopsDlg) ? _c('van-dialog', {
    staticClass: "van-has-overlay section-part show-close",
    staticStyle: {
      "overflow": "visible"
    },
    attrs: {
      "show-cancel-button": false,
      "show-confirm-button": false
    },
    model: {
      value: (_vm.userShopsDlg),
      callback: function($$v) {
        _vm.userShopsDlg = $$v
      },
      expression: "userShopsDlg"
    }
  }, [_c('div', {
    staticClass: "dlg-head theme-bg",
    staticStyle: {
      "padding-bottom": "15px"
    }
  }, [_vm._v("请选择一个登录门店")]), _vm._v(" "), (_vm.userShopsDlg) ? [_c('user-shops', {
    attrs: {
      "user-type": "staff",
      "shop-list": _vm.shopList,
      "staff-page": _vm.statObjects[_vm.statObject].path
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "close-dlg"
  }, [_c('i', {
    staticClass: "iconfont iconfork",
    on: {
      "click": function($event) {
        _vm.userShopsDlg = false
      }
    }
  })])] : _vm._e()], 2) : _vm._e()], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "move",
    attrs: {
      "onclick": "history.go(-1)"
    }
  }, [_c('i', {
    staticClass: "iconfont iconarrow-l"
  })])
}]}

/***/ }),

/***/ 2108:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "-style-"
  }, [_c('stat-course', {
    attrs: {
      "course-type": 2
    }
  })], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2115:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "-style-"
  }, [_c('stat-head', {
    attrs: {
      "stat-object": "member"
    }
  }), _vm._v(" "), _c('member-stat', {
    attrs: {
      "stat-type": 2
    }
  }), _vm._v(" "), _c('bottom-nav', {
    attrs: {
      "menu": "stat"
    }
  })], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2117:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "-style- vant"
  }, [_c('stat-head', {
    attrs: {
      "stat-object": "card"
    }
  }), _vm._v(" "), _c('section', {
    staticClass: "chart-sec"
  }, [_c('div', {
    staticClass: "hd theme-padding theme-border-bottom"
  }, [_c('div', {
    staticClass: "l tit"
  }, [_vm._v("会员卡售卖统计")]), _vm._v(" "), _c('div', {
    staticClass: "r medium",
    on: {
      "click": function($event) {
        _vm.showDlg = true
      }
    }
  }, [_vm._v("\n        " + _vm._s(_vm.statQuery.dates[0].format('yyyy/M/d')) + " ~ " + _vm._s(_vm.statQuery.dates[1].format('yyyy/M/d')) + "\n        "), _c('i', {
    staticClass: "iconfont big gray icon-arrow-down-1"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "stat-btns theme-border-bottom"
  }, [_c('span', {
    staticClass: "btn theme-btn-bor",
    class: {
      'theme-btn-bg': _vm.statQuery.statType === 1
    },
    on: {
      "click": function($event) {
        return _vm.loadStat(1)
      }
    }
  }, [_vm._v("日统计")]), _vm._v(" "), _c('span', {
    staticClass: "btn theme-btn-bor",
    class: {
      'theme-btn-bg': _vm.statQuery.statType === 2
    },
    on: {
      "click": function($event) {
        return _vm.loadStat(2)
      }
    }
  }, [_vm._v("周统计")]), _vm._v(" "), _c('span', {
    staticClass: "btn theme-btn-bor",
    class: {
      'theme-btn-bg': _vm.statQuery.statType === 3
    },
    on: {
      "click": function($event) {
        return _vm.loadStat(3)
      }
    }
  }, [_vm._v("月统计")])]), _vm._v(" "), _c('chart', {
    staticClass: "chart",
    attrs: {
      "options": _vm.chartOption
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "theme-padding",
    staticStyle: {
      "margin": "10px"
    }
  }, [_c('table', {
    staticClass: "mytbl detail"
  }, [_c('tr', [_c('th', [(_vm.statQuery.statType === 1) ? [_vm._v("日期")] : _vm._e(), _vm._v(" "), (_vm.statQuery.statType === 2) ? [_vm._v("周数")] : _vm._e(), _vm._v(" "), (_vm.statQuery.statType === 3) ? [_vm._v("月份")] : _vm._e()], 2), _vm._v(" "), _c('th', [_vm._v("会籍卡")]), _c('th', [_vm._v("私教卡")]), _c('th', [_vm._v("团课卡")])]), _vm._v(" "), _vm._l((_vm.statDataList), function(c) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(c.date))]), _vm._v(" "), _c('td', [(c.c0) ? [_vm._v("￥" + _vm._s(c.c0))] : _c('span', {
      staticClass: "gray"
    }, [_vm._v("0")])], 2), _vm._v(" "), _c('td', [(c.c2) ? [_vm._v("￥" + _vm._s(c.c2))] : _c('span', {
      staticClass: "gray"
    }, [_vm._v("0")])], 2), _vm._v(" "), _c('td', [(c.c1) ? [_vm._v("￥" + _vm._s(c.c1))] : _c('span', {
      staticClass: "gray"
    }, [_vm._v("0")])], 2)])
  })], 2)]), _vm._v(" "), _c('van-dialog', {
    staticClass: "van-has-overlay",
    attrs: {
      "show-cancel-button": true,
      "show-confirm-button": true,
      "cancelButtonText": "关闭",
      "confirmButtonText": "查询",
      "title": "根据日期范围统计"
    },
    on: {
      "confirm": _vm.handleQueryBtn
    },
    model: {
      value: (_vm.showDlg),
      callback: function($$v) {
        _vm.showDlg = $$v
      },
      expression: "showDlg"
    }
  }, [_c('section', {
    staticStyle: {
      "margin-bottom": "0"
    }
  }, [_c('div', {
    staticClass: "tblform",
    staticStyle: {
      "margin-bottom": "0"
    }
  }, [_c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("开始日期")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_c('div', {
    staticClass: "row row-l-r",
    staticStyle: {
      "padding": "0"
    },
    on: {
      "click": function($event) {
        return _vm.showInputDlg('beginDate')
      }
    }
  }, [(_vm.beginDate) ? [_c('span', [_vm._v(_vm._s(_vm.beginDate))])] : [_c('span', {
    staticClass: "font-color-c"
  }, [_vm._v("请选择日期")])], _vm._v(" "), _c('i', {
    staticClass: "iconfont iconarrow-down-1 font-color-c"
  })], 2)])]), _vm._v(" "), _c('div', {
    staticClass: "row align-center"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("结束日期")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_c('div', {
    staticClass: "row row-l-r",
    staticStyle: {
      "padding": "0"
    },
    on: {
      "click": function($event) {
        return _vm.showInputDlg('endDate')
      }
    }
  }, [(_vm.endDate) ? [_c('span', [_vm._v(_vm._s(_vm.endDate))])] : [_c('span', {
    staticClass: "font-color-c"
  }, [_vm._v("请选择日期")])], _vm._v(" "), _c('i', {
    staticClass: "iconfont iconarrow-down-1 font-color-c"
  })], 2)])])])])])], 1), _vm._v(" "), _c('bottom-nav', {
    attrs: {
      "menu": "stat"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "vant"
  }, [_c('van-action-sheet', {
    attrs: {
      "close-on-click-overlay": false
    },
    model: {
      value: (_vm.dlgView.inputShow),
      callback: function($$v) {
        _vm.$set(_vm.dlgView, "inputShow", $$v)
      },
      expression: "dlgView.inputShow"
    }
  }, [(_vm.checkDlgViewName == 'beginDate') ? [_c('van-datetime-picker', {
    attrs: {
      "type": "date",
      "title": "选择年月日",
      "min-date": _vm.minDate,
      "max-date": new Date(_vm.thisYear + 2, 0, 1),
      "confirm-button-text": "完成"
    },
    on: {
      "confirm": function($event) {
        return _vm.confirmDatePiker('beginDate')
      },
      "cancel": function($event) {
        _vm.dlgView.inputShow = false
      }
    },
    model: {
      value: (_vm.currentDate),
      callback: function($$v) {
        _vm.currentDate = $$v
      },
      expression: "currentDate"
    }
  })] : _vm._e(), _vm._v(" "), (_vm.checkDlgViewName == 'endDate') ? [_c('van-datetime-picker', {
    attrs: {
      "type": "date",
      "title": "选择年月日",
      "min-date": _vm.minDate,
      "max-date": new Date(_vm.thisYear + 2, 0, 1),
      "confirm-button-text": "完成"
    },
    on: {
      "confirm": function($event) {
        return _vm.confirmDatePiker('endDate')
      },
      "cancel": function($event) {
        _vm.dlgView.inputShow = false
      }
    },
    model: {
      value: (_vm.currentDate),
      callback: function($$v) {
        _vm.currentDate = $$v
      },
      expression: "currentDate"
    }
  })] : _vm._e()], 2)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2132:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "-style-"
  }, [_c('stat-head', {
    attrs: {
      "stat-object": "member"
    }
  }), _vm._v(" "), _c('member-stat', {
    attrs: {
      "stat-type": 4
    }
  }), _vm._v(" "), _c('bottom-nav', {
    attrs: {
      "menu": "stat"
    }
  })], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2141:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "-stat-memb- vant"
  }, [_c('div', {
    staticClass: "tblform"
  }, [_c('div', {
    staticClass: "section-part"
  }, [_c('div', {
    staticClass: "qd-head row theme-border-bottom",
    staticStyle: {
      "justify-content": "center",
      "padding": "8px 16px"
    }
  }, [_c('div', {
    staticClass: "today-date theme-btn-bor",
    on: {
      "click": function($event) {
        return _vm.showInputDlg('beginMonth')
      }
    }
  }, [_vm._v(_vm._s(_vm.todayDate)), _c('i', {
    staticClass: "iconfont iconarrow-down-1"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("统计日期")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail row align-center"
  }, [_c('div', {
    staticClass: "row row-l-r start",
    staticStyle: {
      "padding": "0"
    },
    on: {
      "click": function($event) {
        return _vm.showInputDlg('beginDate')
      }
    }
  }, [(_vm.beginDate) ? [_c('span', [_vm._v(_vm._s(_vm.beginDate))])] : [_c('span', {
    staticClass: "font-color-c"
  }, [_vm._v("请选择开始日期")])], _vm._v(" "), _c('i', {
    staticClass: "iconfont iconarrow-down-1 font-color-c",
    staticStyle: {
      "margin-top": "2px",
      "font-size": "12px"
    }
  })], 2), _vm._v(" "), _c('div', [_vm._v("~")]), _vm._v(" "), _c('div', {
    staticClass: "row row-l-r start",
    staticStyle: {
      "padding": "0"
    },
    on: {
      "click": function($event) {
        return _vm.showInputDlg('endDate')
      }
    }
  }, [(_vm.endDate) ? [_c('span', [_vm._v(_vm._s(_vm.endDate))])] : [_c('span', {
    staticClass: "font-color-c"
  }, [_vm._v("请选择结束日期")])], _vm._v(" "), _c('i', {
    staticClass: "iconfont iconarrow-down-1 font-color-c",
    staticStyle: {
      "margin-top": "2px",
      "font-size": "12px"
    }
  })], 2)])]), _vm._v(" "), _c('div', {
    staticStyle: {
      "padding": "15px 0"
    }
  }, [_c('div', {
    staticClass: "largest-btn theme-btn-bg",
    on: {
      "click": function($event) {
        return _vm.handleQueryBtn(null)
      }
    }
  }, [_vm._v("查询")])])]), _vm._v(" "), _c('div', {
    staticClass: "ret-cnt align-center"
  }, [_c('div', {
    staticClass: "check-box"
  }, [_c('div', {
    on: {
      "click": function($event) {
        return _vm.showMemHead()
      }
    }
  }, [_c('span', {
    staticClass: "check-box-check",
    class: {
      'check-box-check1': _vm.showMemberPhoto
    }
  }, [_c('i', {
    staticClass: "iconfont",
    class: {
      'iconcheck0': _vm.showMemberPhoto
    }
  })]), _vm._v("显示会员头像")])])]), _vm._v(" "), _c('div', {
    staticClass: "section-part"
  }, [_c('div', {
    ref: "respsTable",
    staticClass: "tblform section-part resps-table",
    staticStyle: {
      "border": "0",
      "margin": "0 0 0 15px"
    },
    attrs: {
      "id": "respsTable"
    }
  }, [_c('div', {
    staticClass: "resps-table-box",
    style: ({
      'width': 6 * _vm.tableThMinWidth + 'px'
    }),
    attrs: {
      "id": "respsTableBox"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.scrolledTop > 0),
      expression: "scrolledTop > 0"
    }],
    staticClass: "table-fix-head",
    style: ({
      'top': _vm.scrolledTop + 'px',
      'width': 6 * _vm.tableThMinWidth + 'px'
    })
  }, [_c('table', [_c('tr', {
    attrs: {
      "id": "table-fix-head-th"
    }
  }, _vm._l((_vm.tableTheadList), function(t) {
    return _c('th', [_c('div', [_vm._v(_vm._s(t.title))])])
  }), 0)])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.scrolledTop > 0 && _vm.scrolledLeft > 0),
      expression: "scrolledTop > 0 && scrolledLeft > 0"
    }],
    staticClass: "table-fix-th",
    style: ({
      'top': _vm.scrolledTop + 'px',
      'left': _vm.scrolledLeft + 'px'
    })
  }, [_c('table', [_c('tr', {
    attrs: {
      "id": "table-fix-th"
    }
  }, _vm._l((_vm.fixNumber), function(d) {
    return _c('th', [_c('div', [_vm._v(_vm._s(_vm.tableTheadList[d].title))])])
  }), 0)])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.scrolledLeft > 0),
      expression: "scrolledLeft > 0"
    }],
    staticClass: "table-fix-td",
    style: ({
      'left': _vm.scrolledLeft + 'px'
    })
  }, [_c('table', [_c('tr', {
    attrs: {
      "id": "table-fix-col-td"
    }
  }, _vm._l((_vm.fixNumber), function(d) {
    return _c('th', [_c('div', [_vm._v(_vm._s(_vm.tableTheadList[d].title))])])
  }), 0), _vm._v(" "), _vm._l((_vm.statList), function(s) {
    return _c('tr', [_c('td', [_c('div', {
      domProps: {
        "innerHTML": _vm._s(s.order)
      }
    })]), _vm._v(" "), _c('td', [(_vm.showMemberPhoto) ? _c('div', {
      staticClass: "stat-member-info row align-center start"
    }, [_c('img', {
      attrs: {
        "src": _vm.g.Util.getImgUrl(s.avatarPathname, 100, 100, 'e5e5e5')
      },
      on: {
        "click": function($event) {
          return _vm.viewMember(s)
        }
      }
    }), _vm._v(" "), _c('div', {
      on: {
        "click": function($event) {
          return _vm.viewMember(s)
        }
      }
    }, [_vm._v(_vm._s(s.name))])]) : _c('div', {
      staticClass: "theme-font-color",
      on: {
        "click": function($event) {
          return _vm.viewMember(s)
        }
      }
    }, [_vm._v(_vm._s(s.name))])])])
  })], 2)]), _vm._v(" "), _c('table', [_c('tr', {
    attrs: {
      "id": "table-th"
    }
  }, _vm._l((_vm.tableTheadList), function(t) {
    return _c('th', [_c('div', [_vm._v(_vm._s(t.title))])])
  }), 0), _vm._v(" "), _vm._l((_vm.statList), function(s, idx) {
    return _c('tr', [_c('td', [_c('div', {
      domProps: {
        "innerHTML": _vm._s(s.order)
      }
    })]), _vm._v(" "), _c('td', [(_vm.showMemberPhoto) ? _c('div', {
      staticClass: "stat-member-info row align-center start"
    }, [_c('img', {
      attrs: {
        "src": _vm.g.Util.getImgUrl(s.avatarPathname, 100, 100, 'e5e5e5')
      },
      on: {
        "click": function($event) {
          return _vm.viewMember(s)
        }
      }
    }), _vm._v(" "), _c('div', {
      on: {
        "click": function($event) {
          return _vm.viewMember(s)
        }
      }
    }, [_vm._v(_vm._s(s.name))])]) : _c('div', {
      staticClass: "theme-font-color",
      on: {
        "click": function($event) {
          return _vm.viewMember(s)
        }
      }
    }, [_vm._v(_vm._s(s.name))])]), _vm._v(" "), _c('td', [_c('div', {
      domProps: {
        "innerHTML": _vm._s(s.valDesc)
      }
    })]), _vm._v(" "), _c('td', [_vm._v(_vm._s(s.phoneNo))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Dict.Sex[s.sex]))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Util.formatDate(s.memberCreateTime)))])])
  })], 2)])]), _vm._v(" "), (_vm.statList && !_vm.statList.length) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("暂无数据")]) : _vm._e(), _vm._v(" "), (_vm.totalCount && _vm.totalCount > 1) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('pagination', {
    attrs: {
      "total": _vm.totalCount,
      "page-change": _vm.changePageNo,
      "page-size": 50
    }
  })], 1) : _vm._e()]), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _c('van-action-sheet', {
    attrs: {
      "close-on-click-overlay": false
    },
    model: {
      value: (_vm.dlgView.inputShow),
      callback: function($$v) {
        _vm.$set(_vm.dlgView, "inputShow", $$v)
      },
      expression: "dlgView.inputShow"
    }
  }, [(_vm.checkDlgViewName == 'beginDate') ? [_c('van-datetime-picker', {
    attrs: {
      "type": "date",
      "title": "选择年月日",
      "min-date": _vm.minDate,
      "max-date": new Date(_vm.thisYear + 2, 0, 1),
      "confirm-button-text": "完成"
    },
    on: {
      "confirm": function($event) {
        return _vm.confirmDatePiker('beginDate')
      },
      "cancel": function($event) {
        _vm.dlgView.inputShow = false
      }
    },
    model: {
      value: (_vm.currentDate),
      callback: function($$v) {
        _vm.currentDate = $$v
      },
      expression: "currentDate"
    }
  })] : _vm._e(), _vm._v(" "), (_vm.checkDlgViewName == 'endDate') ? [_c('van-datetime-picker', {
    attrs: {
      "type": "date",
      "title": "选择年月日",
      "min-date": _vm.minDate,
      "max-date": new Date(_vm.thisYear + 2, 0, 1),
      "confirm-button-text": "完成"
    },
    on: {
      "confirm": function($event) {
        return _vm.confirmDatePiker('endDate')
      },
      "cancel": function($event) {
        _vm.dlgView.inputShow = false
      }
    },
    model: {
      value: (_vm.currentDate),
      callback: function($$v) {
        _vm.currentDate = $$v
      },
      expression: "currentDate"
    }
  })] : _vm._e(), _vm._v(" "), (_vm.checkDlgViewName == 'beginMonth') ? _c('van-datetime-picker', {
    attrs: {
      "type": "year-month",
      "min-date": _vm.minDatePicker,
      "max-date": _vm.maxDatePicker
    },
    on: {
      "cancel": _vm.showDatePiker,
      "confirm": function($event) {
        return _vm.confirmDatePiker('beginMonth')
      },
      "change": _vm.getColumnValue
    },
    model: {
      value: (_vm.currentDate),
      callback: function($$v) {
        _vm.currentDate = $$v
      },
      expression: "currentDate"
    }
  }) : _vm._e()], 2), _vm._v(" "), _c('van-popup', {
    style: ({
      height: '100%',
      width: '100%'
    }),
    attrs: {
      "position": "right"
    },
    model: {
      value: (_vm.viewMemberDlg),
      callback: function($$v) {
        _vm.viewMemberDlg = $$v
      },
      expression: "viewMemberDlg"
    }
  }, [_c('div', {
    staticClass: "page-head"
  }, [_c('div', {
    staticClass: "move",
    on: {
      "click": function($event) {
        _vm.viewMemberDlg = false
      }
    }
  }, [_c('i', {
    staticClass: "iconfont iconarrow-l"
  })]), _vm._v(" "), _c('div', {
    staticClass: "tit"
  }, [_vm._v(" " + _vm._s(_vm.selectMemberName) + " ")])]), _vm._v(" "), (_vm.viewMemberDlg) ? [_c('div', [_c('member-base', {
    attrs: {
      "member-id": _vm.selectMemberId,
      "readonly": true,
      "select-member": _vm.member
    }
  })], 1)] : _vm._e()], 2)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "bottom-remark font-color-9"
  }, [_c('div', {
    staticClass: "theme-font-color mb-5"
  }, [_c('i', {
    staticClass: "iconfont iconinfo",
    staticStyle: {
      "margin-right": "2px",
      "vertical-align": "-1px"
    }
  }), _vm._v("备注：")]), _vm._v(" 出勤是指会员入场签到、团课签到或私教课签到；如果一天内多次签到，也只算作一天。\n    ")])
}]}

/***/ }),

/***/ 2150:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "full-sec",
    staticStyle: {
      "margin-top": "0"
    }
  }, [_c('van-tabs', {
    attrs: {
      "swipe-threshold": 3
    },
    on: {
      "click": _vm.changeTab
    },
    model: {
      value: (_vm.active),
      callback: function($$v) {
        _vm.active = $$v
      },
      expression: "active"
    }
  }, _vm._l((_vm.tabData), function(c, idx) {
    return _c('van-tab', {
      key: idx,
      attrs: {
        "title": c.name
      }
    })
  }), 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2152:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "stat-order"
  }, [_c('stat-head', {
    attrs: {
      "stat-object": "staff"
    }
  }), _vm._v(" "), _c('stat-staff-head', {
    attrs: {
      "stat-type": _vm.statType
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "center-date-nav section-part"
  }, [_c('div', {
    staticClass: "theme-btn-bor date-btn",
    on: {
      "click": function($event) {
        return _vm.toggleMoreDates()
      }
    }
  }, [_vm._v(_vm._s(_vm.dateShortcuts[_vm.dateIdx].name) + " "), _c('i', {
    staticClass: "iconfont iconarrow-down-1 gray big"
  })]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showMoreDates),
      expression: "showMoreDates"
    }],
    staticClass: "more-dates"
  }, _vm._l((_vm.dateShortcuts), function(d, idx) {
    return (idx !== _vm.dateIdx) ? _c('a', {
      class: {
        'on': _vm.dateIdx === idx
      },
      on: {
        "click": function($event) {
          return _vm.statByDateShortcuts(idx)
        }
      }
    }, [_vm._v(_vm._s(d.name))]) : _vm._e()
  }), 0)]), _vm._v(" "), _c('div', {
    staticClass: "detail"
  }, _vm._l((_vm.statConf), function(c, idx) {
    return _c('section', {
      staticClass: "item"
    }, [_c('div', {
      staticClass: "hd theme-border-bottom theme-padding"
    }, [_c('div', {
      staticClass: "tit"
    }, [_vm._v("\n          按" + _vm._s(c.typeName) + "排名\n        ")])]), _vm._v(" "), _c('div', {
      staticClass: "theme-padding"
    }, [_c('table', [_c('tr', [_c('th', {
      attrs: {
        "width": "65",
        "align": "center"
      }
    }, [_vm._v("排名")]), _vm._v(" "), _c('th', {
      attrs: {
        "align": "left"
      }
    }, [_vm._v("教练")]), _vm._v(" "), _c('th', {
      attrs: {
        "width": "80",
        "align": "right"
      }
    }, [_vm._v(_vm._s(c.typeName))])]), _vm._v(" "), _vm._l((_vm.statLists[idx]), function(s, sidx) {
      return _c('tr', [_c('td', [_c('div', {
        staticClass: "order"
      }, [_vm._v(_vm._s(sidx + 1))])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(s.coachName))]), _vm._v(" "), _c('td', {
        attrs: {
          "align": "right"
        }
      }, [(idx === 0) ? _c('span', [_vm._v(_vm._s(s.lessonCnt))]) : _vm._e(), _vm._v(" "), (idx === 1) ? _c('span', [_vm._v(_vm._s(s.memberCnt))]) : _vm._e(), _vm._v(" "), (idx === 2) ? _c('span', [_vm._v(_vm._s(s.avgScore.toFixed(2)))]) : _vm._e(), _vm._v("\n              " + _vm._s(c.unitType) + "\n            ")])])
    })], 2)]), _vm._v(" "), _c('p', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (!_vm.statLists[idx].length),
        expression: "!statLists[idx].length"
      }],
      staticClass: "no-data"
    }, [_vm._v("无记录")])])
  }), 0), _vm._v(" "), _c('bottom-nav', {
    attrs: {
      "menu": "stat"
    }
  })], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2153:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "-stat-memb-"
  }, [_c('stat-member-head', {
    attrs: {
      "stat-type": _vm.statType
    }
  }), _vm._v(" "), _c('section', {
    staticClass: "stat-order"
  }, [_c('div', {
    staticClass: "hd theme-border-bottom theme-padding"
  }, [_c('div', {
    staticClass: "l tit"
  }, [_vm._v(_vm._s(_vm.statTitles[_vm.statType]))]), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [_c('div', {
    staticClass: "medium",
    on: {
      "click": function($event) {
        return _vm.toggleMoreDates()
      }
    }
  }, [_vm._v(_vm._s(_vm.dateShortcuts[_vm.dateIdx].name) + " "), _c('i', {
    staticClass: "iconfont icon-arrow-down-1 gray big"
  })]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showMoreDates),
      expression: "showMoreDates"
    }],
    staticClass: "more-dates"
  }, _vm._l((_vm.dateShortcuts), function(d, idx) {
    return (idx !== _vm.dateIdx) ? _c('a', {
      class: {
        'on': _vm.dateIdx === idx
      },
      on: {
        "click": function($event) {
          return _vm.statMemberByDateShortcuts(idx)
        }
      }
    }, [_vm._v(_vm._s(d.name))]) : _vm._e()
  }), 0)])]), _vm._v(" "), _c('div', {
    staticClass: "theme-padding"
  }, [_c('table', {
    staticClass: "mytbl"
  }, [_c('tr', [_c('th', {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      "width": "60"
    }
  }, [_vm._v("排名")]), _vm._v(" "), _c('th', [_vm._v("会员")]), _vm._v(" "), _c('th', {
    staticStyle: {
      "text-align": "right"
    },
    attrs: {
      "width": "100"
    }
  }, [_vm._v(_vm._s(_vm.statTypes[_vm.statType]))])]), _vm._v(" "), _vm._l((_vm.statList), function(s) {
    return _c('tr', [_c('td', [_c('div', {
      staticClass: "order"
    }, [_vm._v(_vm._s(s.order) + ".")])]), _vm._v(" "), _c('td', {
      staticClass: "member-info"
    }, [_c('img', {
      attrs: {
        "src": _vm.g.Util.getImgUrl(s.avatarPathname, 100, 100, 'e5e5e5')
      },
      on: {
        "click": function($event) {
          return _vm.viewMember(s.memberId)
        }
      }
    }), _c('a', {
      on: {
        "click": function($event) {
          return _vm.viewMember(s.memberId)
        }
      }
    }, [_vm._v(_vm._s(s.name.substr(0, 6)))])]), _vm._v(" "), _c('td', {
      attrs: {
        "align": "right"
      }
    }, [_c('span', {
      staticClass: "val"
    }, [_vm._v(_vm._s(s.val))]), _vm._v(" "), _c('span', {
      staticClass: "gray"
    }, [_vm._v(_vm._s(_vm.statTypeUnits[_vm.statType]))])])])
  })], 2)]), _vm._v(" "), (_vm.statList && _vm.statList.length === 0) ? _c('div', {
    staticClass: "allpadding none"
  }, [_vm._v("无记录")]) : _vm._e(), _vm._v(" "), _c('pagination', {
    attrs: {
      "total": _vm.totalCount,
      "page-change": _vm.changePageNo
    }
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2173:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "stat-order"
  }, [_c('stat-head', {
    attrs: {
      "stat-object": "staff"
    }
  }), _vm._v(" "), _c('stat-staff-head', {
    attrs: {
      "stat-type": 4
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "section-part"
  }, [_c('div', {
    staticClass: "theme-border-bottom"
  }, [_c('div', {
    staticClass: "center-date-nav"
  }, [_c('div', {
    staticClass: "date-btn theme-btn-bor align-center",
    on: {
      "click": function($event) {
        return _vm.showInputDlg('yearMonth')
      }
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.yearMonth))]), _vm._v(" "), _c('i', {
    staticClass: "iconfont iconarrow-down-1 gray"
  })])])]), _vm._v(" "), (_vm.shopTarget) ? _c('div', {
    staticClass: "shop-target theme-shadow"
  }, [_c('div', {
    staticClass: "shop-target-tit"
  }, [_vm._v("场馆销售目标")]), _vm._v(" "), _c('div', {
    staticClass: "target-items row"
  }, [_c('div', {
    staticClass: "item"
  }, [_c('div', {
    staticClass: "item-sum theme-font-color"
  }, [_vm._v("￥" + _vm._s(_vm.shopAchievement))]), _vm._v(" "), _c('div', {
    staticClass: "item-tit"
  }, [_vm._v("当月业绩")])]), _vm._v(" "), _c('div', {
    staticClass: "item"
  }, [_c('div', {
    staticClass: "item-sum theme-font-color"
  }, [_vm._v("￥" + _vm._s(_vm.shopTarget))]), _vm._v(" "), _c('div', {
    staticClass: "item-tit"
  }, [_vm._v("目标业绩")])]), _vm._v(" "), _c('div', {
    staticClass: "item"
  }, [_c('div', {
    staticClass: "item-sum theme-font-color"
  }, [_vm._v(_vm._s(_vm.shopCompletionRate) + "%")]), _vm._v(" "), _c('div', {
    staticClass: "item-tit"
  }, [_vm._v("完成率")])]), _vm._v(" "), _c('div', {
    staticClass: "item"
  }, [_c('div', {
    staticClass: "item-sum theme-font-color"
  }, [_vm._v("￥" + _vm._s(_vm.shopDifference))]), _vm._v(" "), _c('div', {
    staticClass: "item-tit"
  }, [_vm._v("差额")])])])]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "detail"
  }, [_c('div', {
    staticClass: "section-part"
  }, [_c('div', {
    staticClass: "hd theme-border-bottom theme-padding"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("销售统计")]), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [_c('pull-down-list', {
    attrs: {
      "selectList": _vm.departmentList,
      "selectId": "deptName"
    },
    on: {
      "selectOne": _vm.changeDeptId
    }
  }, [_c('span', {
    attrs: {
      "slot": "dlgTit"
    },
    slot: "dlgTit"
  }, [_vm._v("员工部门")]), _vm._v(" "), _c('span', {
    attrs: {
      "slot": "pleaseChose"
    },
    slot: "pleaseChose"
  }, [_vm._v(_vm._s(_vm.defaultDeptName))])])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "tblform"
  }, [_c('table', [_vm._m(0), _vm._v(" "), (_vm.staffTargetStatList.length > 0) ? _vm._l((_vm.staffTargetStatList), function(s) {
    return (s.target) ? _c('tr', [_c('td', [_c('div', {}, [_vm._v(_vm._s(s.name))])]), _vm._v(" "), _c('td', [_c('div', {}, [_vm._v("￥" + _vm._s(s.achievement))])]), _vm._v(" "), _c('td', [_c('div', {}, [_vm._v("￥" + _vm._s(s.target))])]), _vm._v(" "), _c('td', [_c('div', {
      class: {
        finished: s.achievement >= s.target,
        empty: s.achievement == 0
      }
    }, [_vm._v(_vm._s(parseInt(s.completionRate * 100)) + "%")])]), _vm._v(" "), _c('td', [_c('div', {}, [_vm._v("￥" + _vm._s(s.difference))])])]) : _vm._e()
  }) : _vm._e()], 2), _vm._v(" "), (_vm.staffTargetStatList.length == 0) ? [_c('div', {
    staticClass: "none font-color-c",
    staticStyle: {
      "padding": "10px 0"
    }
  }, [_vm._v("\n            暂无数据\n          ")])] : _vm._e()], 2)])]), _vm._v(" "), _c('div', {
    staticClass: "detail tblform"
  }, [_c('div', {
    staticClass: "section-part"
  }, [_vm._m(1), _vm._v(" "), _c('div', {}, [_c('table', [_vm._m(2), _vm._v(" "), (_vm.deptTargetStatList.length > 0) ? _vm._l((_vm.deptTargetStatList), function(s) {
    return _c('tr', [_c('td', [_c('div', {}, [_vm._v(_vm._s(s.deptName))])]), _vm._v(" "), _c('td', [_c('div', {}, [_vm._v("￥" + _vm._s(s.achievement))])]), _vm._v(" "), _c('td', [_c('div', {}, [_vm._v("￥" + _vm._s(s.target))])]), _vm._v(" "), _c('td', [_c('div', {
      class: {
        finished: s.achievement >= s.target,
        empty: s.achievement == 0
      }
    }, [_vm._v(_vm._s((s.completionRate * 100).toFixed(1)) + "%")])]), _vm._v(" "), _c('td', [_c('div', {}, [_vm._v("￥" + _vm._s(s.difference))])])])
  }) : _vm._e()], 2), _vm._v(" "), (_vm.deptTargetStatList.length == 0) ? [_c('div', {
    staticClass: "none font-color-c",
    staticStyle: {
      "padding": "10px 0"
    }
  }, [_vm._v("\n            暂无数据\n          ")])] : _vm._e()], 2)])]), _vm._v(" "), (_vm.salesChartData && _vm.salesChartData.length > 1) ? _c('section', {
    staticClass: "item tblform"
  }, [_c('div', [_c('chart', {
    staticClass: "piechart",
    attrs: {
      "options": _vm.salesAmountStatOption
    }
  })], 1), _vm._v(" "), (_vm.salesAmountStatOption) ? _c('div', {
    staticClass: "consume-status"
  }, [_c('table', [_vm._m(3), _vm._v(" "), _vm._l((_vm.deptTargetStatPie), function(s) {
    return _c('tr', [_c('td', [_c('div', {}, [_vm._v(_vm._s(s.name))])]), _vm._v(" "), _c('td', [_c('div', {}, [_vm._v("￥" + _vm._s(s.value))])]), _vm._v(" "), _c('td', [_c('div', {}, [_vm._v("￥" + _vm._s(s.percent) + "%")])])])
  })], 2)]) : _vm._e()]) : _vm._e(), _vm._v(" "), (_vm.shopTarget) ? _c('div', {
    staticClass: "detail tblform"
  }, [_c('div', {
    staticClass: "section-part"
  }, [_vm._m(4), _vm._v(" "), _c('div', [_c('chart', {
    staticClass: "piechart",
    attrs: {
      "options": _vm.shopAmountStatOption
    }
  })], 1), _vm._v(" "), (_vm.shopAmountStatOption) ? _c('div', {
    staticClass: "consume-status"
  }, [_c('table', [_vm._m(5), _vm._v(" "), _c('tr', [_c('td', [_c('div', {}, [_vm._v("￥" + _vm._s(_vm.shopAchievement))])]), _vm._v(" "), _c('td', [_c('div', {}, [_vm._v("￥" + _vm._s(_vm.shopTarget))])]), _vm._v(" "), _c('td', [_c('div', {
    class: {
      finished: _vm.shopAchievement == _vm.shopTarget,
      empty: _vm.shopAchievement == 0
    }
  }, [_vm._v(_vm._s(_vm.shopCompletionRate) + "%")])])])])]) : _vm._e()])]) : _vm._e(), _vm._v(" "), _c('van-action-sheet', {
    attrs: {
      "close-on-click-overlay": false
    },
    model: {
      value: (_vm.dlgView.inputShow),
      callback: function($$v) {
        _vm.$set(_vm.dlgView, "inputShow", $$v)
      },
      expression: "dlgView.inputShow"
    }
  }, [(_vm.checkDlgViewName == 'yearMonth') ? [_c('van-datetime-picker', {
    attrs: {
      "type": "year-month",
      "title": "选择年月",
      "min-date": _vm.minDate,
      "max-date": _vm.maxDate,
      "confirm-button-text": "完成"
    },
    on: {
      "confirm": function($event) {
        return _vm.confirmDatePiker('yearMonth')
      },
      "cancel": function($event) {
        _vm.dlgView.inputShow = false
      }
    },
    model: {
      value: (_vm.currentDate),
      callback: function($$v) {
        _vm.currentDate = $$v
      },
      expression: "currentDate"
    }
  })] : _vm._e()], 2), _vm._v(" "), _c('bottom-nav')], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', [_vm._v("销售")]), _vm._v(" "), _c('th', [_vm._v("当月业绩")]), _vm._v(" "), _c('th', [_vm._v("目标业绩")]), _vm._v(" "), _c('th', [_vm._v("完成率")]), _vm._v(" "), _c('th', [_vm._v("差额")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd theme-border-bottom theme-padding"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("部门业绩及目标")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', [_vm._v("部门")]), _vm._v(" "), _c('th', [_vm._v("当月业绩")]), _vm._v(" "), _c('th', [_vm._v("目标业绩")]), _vm._v(" "), _c('th', [_vm._v("完成率")]), _vm._v(" "), _c('th', [_vm._v("差额")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', [_vm._v("部门")]), _vm._v(" "), _c('th', [_vm._v("销售总额")]), _vm._v(" "), _c('th', [_vm._v("销售比例")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd theme-border-bottom theme-padding"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("全场馆业绩及目标")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', [_vm._v("当月场馆业绩")]), _vm._v(" "), _c('th', [_vm._v("全场馆销售目标")]), _vm._v(" "), _c('th', [_vm._v("完成率")])])
}]}

/***/ }),

/***/ 2176:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "stat-order -style-"
  }, [_c('stat-head', {
    attrs: {
      "stat-object": "staff"
    }
  }), _vm._v(" "), _c('stat-staff-head', {
    attrs: {
      "stat-type": 1
    }
  }), _vm._v(" "), _c('section', {
    staticClass: "tblform"
  }, [_c('div', {
    staticClass: "row space-around theme-border-bottom",
    staticStyle: {
      "padding": "2px 16px"
    }
  }, [_c('div', {
    staticClass: "center-date-nav"
  }, [(_vm.dateShortcuts) ? _c('pull-down-list', {
    attrs: {
      "selectList": _vm.dateShortcuts,
      "selectId": "name"
    },
    on: {
      "selectOne": _vm.statByDateShortcuts
    }
  }, [_c('span', {
    attrs: {
      "slot": "dlgTit"
    },
    slot: "dlgTit"
  }, [_vm._v("请选择")]), _vm._v(" "), (_vm.dateShortcuts) ? _c('span', {
    attrs: {
      "slot": "pleaseChose"
    },
    slot: "pleaseChose"
  }, [_vm._v(_vm._s(_vm.dateShortcuts[_vm.dateIdx].name))]) : [_c('span', {
    staticClass: "font-color-c",
    attrs: {
      "slot": "pleaseChose"
    },
    slot: "pleaseChose"
  }, [_vm._v("请选择")])]], 2) : _vm._e()], 1), _vm._v(" "), (_vm.departmentList && _vm.departmentList.length) ? _c('div', {
    staticClass: "dept"
  }, [_c('pull-down-list', {
    attrs: {
      "selectList": _vm.departmentList,
      "selectId": "deptName"
    },
    on: {
      "selectOne": _vm.statSales
    }
  }, [_c('span', {
    attrs: {
      "slot": "dlgTit"
    },
    slot: "dlgTit"
  }, [_vm._v("员工部门")]), _vm._v(" "), _c('span', {
    attrs: {
      "slot": "pleaseChose"
    },
    slot: "pleaseChose"
  }, [_vm._v(_vm._s(_vm.defaultDeptName))])])], 1) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("统计日期")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail row align-center"
  }, [_c('div', {
    staticClass: "row row-l-r start",
    staticStyle: {
      "padding": "0"
    },
    on: {
      "click": function($event) {
        return _vm.showInputDlg('beginDate')
      }
    }
  }, [(_vm.beginDate) ? [_c('span', [_vm._v(_vm._s(_vm.beginDate))])] : [_c('span', {
    staticClass: "font-color-c"
  }, [_vm._v("请选择开始日期")])], _vm._v(" "), _c('i', {
    staticClass: "iconfont iconarrow-down-1 font-color-c",
    staticStyle: {
      "margin-top": "2px",
      "font-size": "12px"
    }
  })], 2), _vm._v(" "), _c('div', [_vm._v("~")]), _vm._v(" "), _c('div', {
    staticClass: "row row-l-r start",
    staticStyle: {
      "padding": "0"
    },
    on: {
      "click": function($event) {
        return _vm.showInputDlg('endDate')
      }
    }
  }, [(_vm.endDate) ? [_c('span', [_vm._v(_vm._s(_vm.endDate))])] : [_c('span', {
    staticClass: "font-color-c"
  }, [_vm._v("请选择结束日期")])], _vm._v(" "), _c('i', {
    staticClass: "iconfont iconarrow-down-1 font-color-c",
    staticStyle: {
      "margin-top": "2px",
      "font-size": "12px"
    }
  })], 2)])]), _vm._v(" "), _c('div', {
    staticClass: "theme-border-bottom",
    staticStyle: {
      "padding": "15px 0"
    }
  }, [_c('div', {
    staticClass: "largest-btn theme-btn-bg",
    on: {
      "click": _vm.doQuery
    }
  }, [_vm._v("查询")])])]), _vm._v(" "), _c('div', {
    staticClass: "detail"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "section-part"
  }, [_c('div', {
    ref: "respsTable",
    staticClass: "tblform section-part resps-table",
    staticStyle: {
      "border": "0",
      "margin-bottom": "0"
    },
    attrs: {
      "id": "respsTable"
    }
  }, [_c('div', {
    staticClass: "resps-table-box",
    style: ({
      'width': 8 * _vm.tableThMinWidth + 'px'
    }),
    attrs: {
      "id": "respsTableBox"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.scrolledTop > 0),
      expression: "scrolledTop > 0"
    }],
    staticClass: "table-fix-head",
    style: ({
      'top': _vm.scrolledTop + 'px',
      'width': 8 * _vm.tableThMinWidth + 'px'
    })
  }, [_c('table', [_c('tr', {
    attrs: {
      "id": "table-fix-head-th"
    }
  }, _vm._l((_vm.tableTheadList), function(t) {
    return _c('th', [_c('div', [_vm._v(_vm._s(t.title))])])
  }), 0)])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.scrolledTop > 0 && _vm.scrolledLeft > 0),
      expression: "scrolledTop > 0 && scrolledLeft > 0"
    }],
    staticClass: "table-fix-th",
    style: ({
      'top': _vm.scrolledTop + 'px',
      'left': _vm.scrolledLeft + 'px'
    })
  }, [_c('table', [_c('tr', {
    attrs: {
      "id": "table-fix-th"
    }
  }, _vm._l((_vm.fixNumber), function(d) {
    return _c('th', [_c('div', [_vm._v(_vm._s(_vm.tableTheadList[d].title))])])
  }), 0)])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.scrolledLeft > 0),
      expression: "scrolledLeft > 0"
    }],
    staticClass: "table-fix-td",
    style: ({
      'left': _vm.scrolledLeft + 'px'
    })
  }, [_c('table', [_c('tr', {
    attrs: {
      "id": "table-fix-col-td"
    }
  }, _vm._l((_vm.fixNumber), function(d) {
    return _c('th', [_c('div', [_vm._v(_vm._s(_vm.tableTheadList[d].title))])])
  }), 0), _vm._v(" "), _vm._l((_vm.salesAmountList), function(s, idx) {
    return _c('tr', {
      attrs: {
        "id": "fix-col-td-" + idx
      }
    }, [_c('td', [_vm._v(_vm._s(idx + 1))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(s.salesName))])])
  }), _vm._v(" "), _vm._m(1)], 2)]), _vm._v(" "), _c('table', [_c('tr', {
    attrs: {
      "id": "table-th"
    }
  }, _vm._l((_vm.tableTheadList), function(t) {
    return _c('th', [_c('div', [_vm._v(_vm._s(t.title))])])
  }), 0), _vm._v(" "), _vm._l((_vm.salesAmountList), function(s, idx) {
    return _c('tr', [_c('td', {
      attrs: {
        "id": "rel-col-td-" + idx
      }
    }, [_vm._v(_vm._s(idx + 1))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(s.salesName))]), _vm._v(" "), _c('td', [_vm._v("￥" + _vm._s(_vm.g.Util.round(s.salesAmount)))]), _vm._v(" "), _c('td', [(_vm.statByPaymentTypeMap[s.salesId + '#1']) ? [_vm._v("￥" + _vm._s(_vm.statByPaymentTypeMap[s.salesId + '#1']) + "\n                    "), _c('span', {
      staticClass: "gray medium"
    }, [_vm._v("（" + _vm._s((100 * _vm.statByPaymentTypeMap[s.salesId + '#1'] / s.salesAmount).toFixed(1)) + "%）")])] : _c('span', {
      staticClass: "gray"
    }, [_vm._v("0")])], 2), _vm._v(" "), _c('td', [(_vm.statByPaymentTypeMap[s.salesId + '#2']) ? [_vm._v("￥" + _vm._s(_vm.statByPaymentTypeMap[s.salesId + '#2']) + "\n                    "), _c('span', {
      staticClass: "gray medium"
    }, [_vm._v("（" + _vm._s((100 * _vm.statByPaymentTypeMap[s.salesId + '#2'] / s.salesAmount).toFixed(1)) + "%）")])] : _c('span', {
      staticClass: "gray"
    }, [_vm._v("0")])], 2), _vm._v(" "), _c('td', [(_vm.statByPaymentTypeMap[s.salesId + '#3']) ? [_vm._v("￥" + _vm._s(_vm.statByPaymentTypeMap[s.salesId + '#3']) + "\n                    "), _c('span', {
      staticClass: "gray medium"
    }, [_vm._v("（" + _vm._s((100 * _vm.statByPaymentTypeMap[s.salesId + '#3'] / s.salesAmount).toFixed(1)) + "%）")])] : _c('span', {
      staticClass: "gray"
    }, [_vm._v("0")])], 2), _vm._v(" "), _c('td', {
      attrs: {
        "width": "90"
      }
    }, [_vm._v(_vm._s(_vm.saleMembersMap[s.salesId]) + " 人")]), _vm._v(" "), _c('td', [_c('a', {
      staticClass: "detail-link",
      on: {
        "click": function($event) {
          return _vm.viewSalesDetail(s.salesName, s.salesId)
        }
      }
    }, [_vm._v("查看")])])])
  }), _vm._v(" "), _c('tr', {
    staticClass: "bold"
  }, [_c('td', {
    staticClass: "font-color-9",
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      "colspan": "2",
      "id": "rel-col-td-total"
    }
  }, [_vm._v("合计")]), _vm._v(" "), _c('td', [_vm._v("￥" + _vm._s(_vm.saleSum.totalAmount))]), _vm._v(" "), _c('td', [_vm._v("￥" + _vm._s(_vm.saleSum.amountsOfPaymentTypes[0]) + "\n                  "), (_vm.saleSum.totalAmount && _vm.saleSum.amountsOfPaymentTypes[0]) ? [_vm._v("（" + _vm._s((100 * _vm.saleSum.amountsOfPaymentTypes[0] / _vm.saleSum.totalAmount).toFixed(1)) + "%）")] : _vm._e()], 2), _vm._v(" "), _c('td', [_vm._v("￥" + _vm._s(_vm.saleSum.amountsOfPaymentTypes[1]) + "\n                  "), (_vm.saleSum.totalAmount && _vm.saleSum.amountsOfPaymentTypes[1]) ? [_vm._v("（" + _vm._s((100 * _vm.saleSum.amountsOfPaymentTypes[1] / _vm.saleSum.totalAmount).toFixed(1)) + "%）")] : _vm._e()], 2), _vm._v(" "), _c('td', [_vm._v("￥" + _vm._s(_vm.saleSum.amountsOfPaymentTypes[2]) + "\n                  "), (_vm.saleSum.totalAmount && _vm.saleSum.amountsOfPaymentTypes[2]) ? [_vm._v("（" + _vm._s((100 * _vm.saleSum.amountsOfPaymentTypes[2] / _vm.saleSum.totalAmount).toFixed(1)) + "%）")] : _vm._e()], 2), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.saleSum.totalMembers) + " 人")]), _vm._v(" "), _c('td')])], 2)])]), _vm._v(" "), (_vm.salesAmountList && !_vm.salesAmountList.length) ? _c('div', {
    staticClass: "none"
  }, [_c('i', {
    staticClass: "icon-none iconfont"
  }), _vm._v("暂无数据")]) : _vm._e(), _vm._v(" "), (_vm.mcpTotalCount > 0) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('pagination', {
    attrs: {
      "total": _vm.mcpTotalCount,
      "page-change": _vm.queryMemberCardPayments,
      "page-size": 30
    }
  })], 1) : _vm._e()]), _vm._v(" "), (_vm.salesChartData && _vm.salesChartData.length > 1) ? _c('section', {
    staticClass: "item tblform"
  }, [_vm._m(2), _vm._v(" "), _c('div', [_c('chart', {
    staticClass: "piechart",
    attrs: {
      "options": _vm.salesAmountStatOption
    }
  })], 1), _vm._v(" "), (_vm.salesAmountStatOption) ? _c('div', {
    staticClass: "consume-status"
  }, [_c('table', [_vm._m(3), _vm._v(" "), _vm._l((_vm.salesNames), function(s, idx) {
    return _c('tr', {
      staticClass: "theme-border-bottom"
    }, [_c('td', [_vm._v(_vm._s(s.name))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(s.value))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(s.percent) + "%")])])
  })], 2)]) : _vm._e()]) : _vm._e()]), _vm._v(" "), _c('bottom-nav', {
    attrs: {
      "menu": "stat"
    }
  }), _vm._v(" "), _c('van-action-sheet', {
    attrs: {
      "close-on-click-overlay": false
    },
    model: {
      value: (_vm.dlgView.inputShow),
      callback: function($$v) {
        _vm.$set(_vm.dlgView, "inputShow", $$v)
      },
      expression: "dlgView.inputShow"
    }
  }, [(_vm.checkDlgViewName == 'beginDate') ? [_c('van-datetime-picker', {
    attrs: {
      "type": "date",
      "title": "选择年月日",
      "min-date": _vm.minDate,
      "max-date": new Date(_vm.thisYear, _vm.thisMonth, _vm.thisDate),
      "confirm-button-text": "完成"
    },
    on: {
      "confirm": function($event) {
        return _vm.confirmDatePiker('beginDate')
      },
      "cancel": function($event) {
        _vm.dlgView.inputShow = false
      }
    },
    model: {
      value: (_vm.currentDate),
      callback: function($$v) {
        _vm.currentDate = $$v
      },
      expression: "currentDate"
    }
  })] : _vm._e(), _vm._v(" "), (_vm.checkDlgViewName == 'endDate') ? [_c('van-datetime-picker', {
    attrs: {
      "type": "date",
      "title": "选择年月日",
      "min-date": _vm.minDate,
      "max-date": new Date(_vm.thisYear, _vm.thisMonth, _vm.thisDate),
      "confirm-button-text": "完成"
    },
    on: {
      "confirm": function($event) {
        return _vm.confirmDatePiker('endDate')
      },
      "cancel": function($event) {
        _vm.dlgView.inputShow = false
      }
    },
    model: {
      value: (_vm.currentDate),
      callback: function($$v) {
        _vm.currentDate = $$v
      },
      expression: "currentDate"
    }
  })] : _vm._e()], 2), _vm._v(" "), (_vm.salesDetailDlg) ? _c('van-dialog', {
    staticClass: "van-has-overlay section-part",
    attrs: {
      "show-cancel-button": false,
      "show-confirm-button": false
    },
    model: {
      value: (_vm.salesDetailDlg),
      callback: function($$v) {
        _vm.salesDetailDlg = $$v
      },
      expression: "salesDetailDlg"
    }
  }, [_c('section', {
    staticStyle: {
      "margin-bottom": "0",
      "border": "0"
    }
  }, [_c('div', {
    staticClass: "dlg-head theme-border-bottom"
  }, [_vm._v("销售记录 - " + _vm._s(_vm.selectSalesName))]), _vm._v(" "), _c('div', {
    staticClass: "dlg-cont",
    staticStyle: {
      "padding": "0"
    }
  }, [_c('div', {
    staticClass: "course-records -style- tblform"
  }, [_c('div', {
    staticClass: "ret"
  }, [(_vm.mcpList && _vm.mcpList.length > 0) ? _c('div', _vm._l((_vm.mcpList), function(m, idx) {
    return _c('dl', {
      staticClass: "theme-border-bottom"
    }, [_c('dd', [_c('label', [_vm._v("创建时间")]), _c('span', {
      staticClass: "dd-span-wid"
    }, [_vm._v(_vm._s(m.createTime))])]), _vm._v(" "), _c('dd', [_c('label', [_vm._v("会员")]), _c('span', {
      staticClass: "dd-span-wid"
    }, [_vm._v(_vm._s(m.memberName))])]), _vm._v(" "), _c('dd', [_c('label', [_vm._v("会员卡名称")]), _c('span', {
      staticClass: "dd-span-wid"
    }, [_vm._v(_vm._s(m.cardName))])]), _vm._v(" "), _c('dd', [_c('label', [_vm._v("卡类型")]), _c('span', {
      staticClass: "dd-span-wid"
    }, [_vm._v(_vm._s(_vm.g.Dict.CardType[m.cardType]))])]), _vm._v(" "), _c('dd', [_c('label', [_vm._v("支付类型")]), _c('span', {
      staticClass: "dd-span-wid"
    }, [_vm._v(_vm._s(_vm.g.Dict.CardPaymentType[m.paymentType]))])]), _vm._v(" "), _c('dd', [_c('label', [_vm._v("支付方式")]), _c('span', {
      staticClass: "dd-span-wid"
    }, [_vm._v(_vm._s(_vm.g.Dict.CardPaymentChannel[m.paymentChannel]))])]), _vm._v(" "), _c('dd', [_c('label', [_vm._v("充值金额")]), _c('span', {
      staticClass: "dd-span-wid"
    }, [_vm._v("￥" + _vm._s(m.usableAmount))])]), _vm._v(" "), _c('dd', [_c('label', [_vm._v("实收金额")]), _c('span', {
      staticClass: "dd-span-wid"
    }, [(m.deposit) ? [_vm._v("￥" + _vm._s(m.paymentAmount) + " + "), _c('span', {
      staticClass: "font-color-9"
    }, [_vm._v(" 订金 ")]), _vm._v("￥" + _vm._s(m.deposit))] : [_vm._v("￥" + _vm._s(m.paymentAmount))]], 2)]), _vm._v(" "), _c('dd', [_c('label', [_vm._v("销售业绩")]), _c('span', {
      staticClass: "dd-span-wid"
    }, [(m.salesId) ? [_vm._v("￥" + _vm._s(m.paymentAmount))] : (m.salesConfList) ? _vm._l((m.salesConfList), function(sc) {
      return (sc.split(':')[0] == _vm.selectSalesId) ? _c('div', [_vm._v("￥" + _vm._s(parseFloat(sc.split(':')[2])))]) : _vm._e()
    }) : _vm._e()], 2)]), _vm._v(" "), (m.createUname) ? _c('dd', [_c('label', [_vm._v("创建人")]), _c('span', {
      staticClass: "dd-span-wid"
    }, [_vm._v(_vm._s(m.createUname))])]) : _vm._e()])
  }), 0) : _c('div', {
    staticClass: "none"
  }, [_c('i', {
    staticClass: "iconfont icon-none"
  }), _vm._v("暂无记录\n              ")])])])]), _vm._v(" "), _c('ul', {
    staticClass: "ul-li-fl dlg-confirm-btns theme-border-top"
  }, [_c('li', {
    staticClass: "cancel btn font-color-9",
    on: {
      "click": function($event) {
        _vm.salesDetailDlg = false
      }
    }
  }, [_vm._v("关闭")])])])]) : _vm._e()], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "item"
  }, [_c('div', {
    staticClass: "hd theme-padding"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("销售业绩统计")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', {
    staticClass: "bold"
  }, [_c('td', {
    staticClass: "font-color-9",
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      "colspan": "2",
      "id": "fix-col-td-total"
    }
  }, [_vm._v("合计")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd theme-padding theme-border-bottom"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("销售业绩统计图")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', {
    staticClass: "theme-border-bottom"
  }, [_c('th', {
    staticClass: "font-color-c"
  }, [_vm._v("销售人员")]), _vm._v(" "), _c('th', {
    staticClass: "font-color-c"
  }, [_vm._v("销售总额")]), _vm._v(" "), _c('th', {
    staticClass: "font-color-c"
  }, [_vm._v("销售比例")])])
}]}

/***/ }),

/***/ 2183:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "-style-"
  }, [_c('stat-head', {
    attrs: {
      "stat-object": "member"
    }
  }), _vm._v(" "), _c('member-stat', {
    attrs: {
      "stat-type": 1
    }
  }), _vm._v(" "), _c('bottom-nav', {
    attrs: {
      "menu": "stat"
    }
  })], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2191:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "report"
  }, [_c('page-head', {
    attrs: {
      "title": "定制统计报表"
    }
  }), _vm._v(" "), (_vm.hasByDay || _vm.hasByWeek || _vm.hasByMonth) ? [_c('div', {
    staticClass: "page-sub-menus section-part"
  }, [_c('div', {
    staticClass: "theme-border-bottom row space-between"
  }, [(_vm.hasByDay) ? _c('span', {
    class: {
      'theme-font-color tab-bor-bottom': _vm.menu === 'by-day'
    },
    on: {
      "click": function($event) {
        return _vm.changeMenuAndRequest('by-day', 1)
      }
    }
  }, [_vm._v("按日查")]) : _vm._e(), _vm._v(" "), (_vm.hasByWeek) ? _c('span', {
    class: {
      'theme-font-color tab-bor-bottom': _vm.menu === 'by-week'
    },
    on: {
      "click": function($event) {
        return _vm.changeMenuAndRequest('by-week', 1)
      }
    }
  }, [_vm._v("按周查")]) : _vm._e(), _vm._v(" "), (_vm.hasByMonth) ? _c('span', {
    class: {
      'theme-font-color tab-bor-bottom': _vm.menu === 'by-month'
    },
    on: {
      "click": function($event) {
        return _vm.changeMenuAndRequest('by-month', 1)
      }
    }
  }, [_vm._v("按月查")]) : _vm._e()])]), _vm._v(" "), (_vm.menu === 'by-day') ? _c('div', [_c('CalendarByDay', {
    ref: "calendar",
    attrs: {
      "queryDateProp": _vm.queryDateProp,
      "pastTag": true,
      "max-date": {
        year: _vm.year,
        month: _vm.month,
        date: _vm.day
      },
      "min-date": {
        year: _vm.year - 10,
        month: _vm.month,
        date: _vm.day
      }
    },
    on: {
      "queryByDayNav": _vm.resetDateList,
      "querySelectedDay": _vm.querySelectedDay
    }
  }), _vm._v(" "), _c('DataReport', {
    attrs: {
      "dataList": _vm.byDayList,
      "menu": _vm.menu
    },
    on: {
      "expandCollapse": _vm.expandCollapse
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.menu === 'by-week') ? _c('div', {
    staticClass: "qd-calendar"
  }, [_c('div', {
    staticClass: "qd-head row"
  }, [_c('div', {
    staticClass: "prev-month",
    on: {
      "click": function($event) {
        return _vm.resetWeek(-1)
      }
    }
  }, [_c('i', {
    staticClass: "iconfont iconArrow-left"
  }), _vm._v("上一周")]), _vm._v(" "), _c('div', {
    staticClass: "today-date"
  }, [_vm._v(_vm._s(_vm.currentWeek))]), _vm._v(" "), _c('div', {
    staticClass: "next-month",
    on: {
      "click": function($event) {
        return _vm.resetWeek(1)
      }
    }
  }, [_vm._v("下一周"), _c('i', {
    staticClass: "iconfont iconArrow-right"
  })])]), _vm._v(" "), _c('DataReport', {
    attrs: {
      "dataList": _vm.byWeekList,
      "menu": _vm.menu
    },
    on: {
      "expandCollapse": _vm.expandCollapse
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.menu === 'by-month'),
      expression: "menu === 'by-month'"
    }]
  }, [_c('Calendar', {
    ref: "mcalendar",
    attrs: {
      "seeFutureDay": false,
      "pastTag": true,
      "has-marked-prop": _vm.checkinDateId,
      "max-date": {
        year: _vm.year,
        month: parseInt(_vm.maxMon) - 1
      },
      "min-date": {
        year: _vm.year - 10,
        month: _vm.month
      },
      "cant-pull": _vm.cantPull
    },
    on: {
      "queryMonth": function($event) {
        return _vm.checkMonth(arguments)
      },
      "querySelectedDay": _vm.querySelectedDay
    }
  }), _vm._v(" "), _c('DataReport', {
    attrs: {
      "dataList": _vm.byMonthList,
      "menu": _vm.menu
    },
    on: {
      "expandCollapse": _vm.expandCollapse
    }
  })], 1)] : _c('div', {
    staticClass: "center font-color-9",
    staticStyle: {
      "padding": "15px 0 0 0"
    }
  }, [_vm._v("尚未配置")])], 2)
},staticRenderFns: []}

/***/ }),

/***/ 2201:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tblform vant"
  }, [(_vm.coachList && _vm.coachList.length > 1) ? _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("教练")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_c('pull-down-list', {
    attrs: {
      "selectList": _vm.coachList,
      "selectId": "name",
      "changeId": "staffId"
    },
    on: {
      "selectOne": function($event) {
        return _vm.queryMemberLessonList()
      }
    },
    model: {
      value: (_vm.queryCoachId),
      callback: function($$v) {
        _vm.queryCoachId = $$v
      },
      expression: "queryCoachId"
    }
  }, [_c('span', {
    attrs: {
      "slot": "dlgTit"
    },
    slot: "dlgTit"
  }, [_vm._v("教练")]), _vm._v(" "), _c('span', {
    staticClass: "font-color-c",
    attrs: {
      "slot": "pleaseChose"
    },
    slot: "pleaseChose"
  }, [_vm._v("请选择教练")])])], 1)]) : _vm._e(), _vm._v(" "), (_vm.memberLessonCount || _vm.cardCostAmountSum) ? _c('div', {
    staticClass: "theme-border-bottom record-num"
  }, [_c('table', {
    staticStyle: {
      "border": "0"
    },
    attrs: {
      "width": "100%"
    }
  }, [_c('tr', [_c('td', [(_vm.memberLessonCount) ? [_vm._v("共"), _c('span', {
    staticClass: "red"
  }, [_vm._v(" " + _vm._s(_vm.memberLessonCount) + " ")]), _vm._v("条记录")] : _vm._e()], 2), _vm._v(" "), _c('td', {
    attrs: {
      "align": "right"
    }
  }, [(_vm.cardCostAmountSum) ? [_vm._v("会员卡消费："), _c('span', {
    staticClass: "red"
  }, [_vm._v("￥" + _vm._s(_vm.cardCostAmountSum))])] : _vm._e()], 2)])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "course-records -style- tblform"
  }, [_c('div', {
    staticClass: "ret"
  }, [(_vm.memberLessonList && _vm.memberLessonList.length > 0) ? _c('div', _vm._l((_vm.memberLessonList), function(ml, idx) {
    return _c('dl', {
      staticClass: "theme-border-bottom"
    }, [_c('dd', [_c('label', [_vm._v("课程")]), _c('span', {
      staticClass: "dd-span-wid"
    }, [_vm._v(_vm._s(ml.lessonTitle))])]), _vm._v(" "), _c('dd', [_c('label', [_vm._v("上课时间")]), _c('span', {
      staticClass: "dd-span-wid"
    }, [_vm._v(_vm._s(_vm.g.Util.formatDate(ml.lessonDate)) + "   " + _vm._s(_vm.g.Util.formatTime(ml.beginTime)))])]), _vm._v(" "), _c('dd', [_c('label', [_vm._v("教练")]), _c('span', {
      staticClass: "dd-span-wid"
    }, [_vm._v(_vm._s(ml.coachName))])]), _vm._v(" "), _c('dd', [_c('label', [_vm._v("上课学员")]), _c('span', {
      staticClass: "dd-span-wid theme-font-color",
      on: {
        "click": function($event) {
          return _vm.viewMember(ml.memberId)
        }
      }
    }, [_vm._v(_vm._s(ml.memberName))])]), _vm._v(" "), (ml.cardName) ? _c('dd', [_c('label', [_vm._v("消费会员卡")]), _c('span', {
      staticClass: "dd-span-wid"
    }, [_vm._v(_vm._s(ml.cardName))])]) : _vm._e(), _vm._v(" "), (ml.cardType > 1) ? _c('dd', [_c('label', [_vm._v("消费额")]), _c('span', {
      staticClass: "dd-span-wid"
    }, [_vm._v(_vm._s(ml.cardPayment) + " " + _vm._s(_vm.g.Dict.CardUnitName[ml.cardType]))])]) : _vm._e(), _vm._v(" "), _c('dd', [_c('label', [_vm._v("消费人次")]), _c('span', {
      staticClass: "dd-span-wid"
    }, [_vm._v(_vm._s(ml.paymentCount))])]), _vm._v(" "), (ml.cardCostAmount) ? _c('dd', [_c('label', [_vm._v("消费折算金额")]), _c('span', {
      staticClass: "dd-span-wid"
    }, [_vm._v("￥" + _vm._s(ml.cardCostAmount))])]) : _vm._e(), _vm._v(" "), (ml.bookingTime) ? _c('dd', [_c('label', [_vm._v("预约时间")]), _c('span', {
      staticClass: "dd-span-wid"
    }, [_vm._v(_vm._s(ml.bookingTime))])]) : _vm._e(), _vm._v(" "), (ml.bookingUname) ? _c('dd', [_c('label', [_vm._v("预约人")]), _c('span', {
      staticClass: "dd-span-wid"
    }, [_vm._v(_vm._s(ml.bookingUname))])]) : _vm._e(), _vm._v(" "), (ml.checkinTime) ? _c('dd', [_c('label', [_vm._v("签到时间")]), _c('span', {
      staticClass: "dd-span-wid"
    }, [_vm._v(_vm._s(ml.checkinTime))])]) : _vm._e(), _vm._v(" "), (ml.checkinUname) ? _c('dd', [_c('label', [_vm._v("签到人")]), _c('span', {
      staticClass: "dd-span-wid"
    }, [_vm._v(_vm._s(ml.checkinUname))])]) : _vm._e()])
  }), 0) : _c('div', {
    staticClass: "none"
  }, [_c('i', {
    staticClass: "iconfont icon-none"
  }), _vm._v("暂无数据\n\t\t\t")])])]), _vm._v(" "), (_vm.memberLessonCount && _vm.memberLessonCount > 30) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.memberLessonCount,
      "page-size": 30,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.queryMemberLessonList
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.memberLessonCount === 0) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("\n\t\t暂无数据\n\t")]) : _vm._e()])
},staticRenderFns: []}

/***/ }),

/***/ 2203:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "stat-order -style-"
  }, [_c('div', {
    staticClass: "theme-border-bottom"
  }, [_c('div', {
    staticClass: "center-date-nav"
  }, [_c('div', {
    staticClass: "theme-btn-bor date-btn",
    on: {
      "click": function($event) {
        return _vm.toggleMoreDates()
      }
    }
  }, [_vm._v(_vm._s(_vm.dateShortcuts[_vm.dateIdx].name) + " "), _c('i', {
    staticClass: "iconfont iconarrow-down-1 big"
  })]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showMoreDates),
      expression: "showMoreDates"
    }],
    staticClass: "more-dates"
  }, _vm._l((_vm.dateShortcuts), function(d, idx) {
    return (idx !== _vm.dateIdx) ? _c('a', {
      class: {
        'on': _vm.dateIdx === idx
      },
      on: {
        "click": function($event) {
          return _vm.statByDateShortcuts(idx)
        }
      }
    }, [_vm._v(_vm._s(d.name))]) : _vm._e()
  }), 0)])]), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("统计日期")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail row align-center"
  }, [_c('div', {
    staticClass: "row row-l-r start",
    staticStyle: {
      "padding": "0"
    },
    on: {
      "click": function($event) {
        return _vm.showInputDlg('beginDate')
      }
    }
  }, [(_vm.beginDate) ? [_c('span', [_vm._v(_vm._s(_vm.beginDate))])] : [_c('span', {
    staticClass: "font-color-c"
  }, [_vm._v("请选择开始日期")])], _vm._v(" "), _c('i', {
    staticClass: "iconfont iconarrow-down-1 font-color-c",
    staticStyle: {
      "margin-top": "2px",
      "font-size": "12px"
    }
  })], 2), _vm._v(" "), _c('div', [_vm._v("~")]), _vm._v(" "), _c('div', {
    staticClass: "row row-l-r start",
    staticStyle: {
      "padding": "0"
    },
    on: {
      "click": function($event) {
        return _vm.showInputDlg('endDate')
      }
    }
  }, [(_vm.endDate) ? [_c('span', [_vm._v(_vm._s(_vm.endDate))])] : [_c('span', {
    staticClass: "font-color-c"
  }, [_vm._v("请选择结束日期")])], _vm._v(" "), _c('i', {
    staticClass: "iconfont iconarrow-down-1 font-color-c",
    staticStyle: {
      "margin-top": "2px",
      "font-size": "12px"
    }
  })], 2)])]), _vm._v(" "), _c('div', {
    staticStyle: {
      "padding": "15px 0"
    }
  }, [_c('div', {
    staticClass: "largest-btn theme-btn-bg",
    on: {
      "click": function($event) {
        return _vm.statCoach(null)
      }
    }
  }, [_vm._v("查询")])]), _vm._v(" "), _c('van-tabs', {
    attrs: {
      "swipe-threshold": 3
    },
    on: {
      "click": _vm.changeTab
    },
    model: {
      value: (_vm.active),
      callback: function($$v) {
        _vm.active = $$v
      },
      expression: "active"
    }
  }, _vm._l((_vm.tabData), function(c, idx) {
    return (_vm.courseType === 1 || (_vm.courseType === 2 && c.statType !== 4)) ? _c('van-tab', {
      key: idx,
      attrs: {
        "title": '按' + c.name + '排名'
      }
    }, [(c.active == idx + 1) ? _c('div', [_c('table', [_c('tr', [_c('th', {
      staticStyle: {
        "width": "40px"
      },
      attrs: {
        "align": "center"
      }
    }, [_vm._v("排名")]), _c('th', [_vm._v("课程")]), _c('th', {
      staticStyle: {
        "width": "90px"
      }
    }, [_vm._v(_vm._s(c.name))])]), _vm._v(" "), _vm._l((_vm.statLists[idx]), function(s, sidx) {
      return _c('tr', [_c('td', [_c('span', {
        staticClass: "order"
      }, [_vm._v(_vm._s(sidx + 1))])]), _vm._v(" "), _c('td', {
        staticClass: "course-name"
      }, [_vm._v(_vm._s(s.courseName) + " "), (s.coachName) ? _c('span', {
        staticClass: "coach-name"
      }, [_vm._v("- " + _vm._s(s.coachName))]) : _vm._e()]), _vm._v(" "), _c('td', [(idx === 0) ? _c('span', [_vm._v(_vm._s(s.lessonCnt))]) : _vm._e(), _vm._v(" "), (idx === 1) ? _c('span', [_vm._v(_vm._s(s.memberCnt))]) : _vm._e(), _vm._v(" "), (idx === 2) ? _c('span', [_vm._v(_vm._s(_vm.g.Util.round(s.avgScore)))]) : _vm._e(), _vm._v(" "), (idx === 3) ? _c('span', [_vm._v(_vm._s(s.checkinCnt))]) : _vm._e(), _vm._v("\n\t\t\t\t\t\t\t\t" + _vm._s(c.unitType) + "\n\t\t\t\t\t\t\t")])])
    })], 2), _vm._v(" "), (_vm.statLists[idx]) ? [(!_vm.statLists[idx].length) ? _c('div', {
      staticClass: "no-data"
    }, [_vm._v("暂无数据")]) : _vm._e()] : _vm._e()], 2) : _vm._e()]) : _vm._e()
  }), 1), _vm._v(" "), _c('van-action-sheet', {
    attrs: {
      "close-on-click-overlay": false
    },
    model: {
      value: (_vm.dlgView.inputShow),
      callback: function($$v) {
        _vm.$set(_vm.dlgView, "inputShow", $$v)
      },
      expression: "dlgView.inputShow"
    }
  }, [(_vm.checkDlgViewName == 'beginDate') ? [_c('van-datetime-picker', {
    attrs: {
      "type": "date",
      "title": "选择年月日",
      "min-date": _vm.minDate,
      "max-date": new Date(_vm.thisYear, _vm.thisMonth, _vm.thisDate),
      "confirm-button-text": "完成"
    },
    on: {
      "confirm": function($event) {
        return _vm.confirmDatePiker('beginDate')
      },
      "cancel": function($event) {
        _vm.dlgView.inputShow = false
      }
    },
    model: {
      value: (_vm.currentDate),
      callback: function($$v) {
        _vm.currentDate = $$v
      },
      expression: "currentDate"
    }
  })] : _vm._e(), _vm._v(" "), (_vm.checkDlgViewName == 'endDate') ? [_c('van-datetime-picker', {
    attrs: {
      "type": "date",
      "title": "选择年月日",
      "min-date": _vm.minDate,
      "max-date": new Date(_vm.thisYear, _vm.thisMonth, _vm.thisDate),
      "confirm-button-text": "完成"
    },
    on: {
      "confirm": function($event) {
        return _vm.confirmDatePiker('endDate')
      },
      "cancel": function($event) {
        _vm.dlgView.inputShow = false
      }
    },
    model: {
      value: (_vm.currentDate),
      callback: function($$v) {
        _vm.currentDate = $$v
      },
      expression: "currentDate"
    }
  })] : _vm._e()], 2)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2206:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "-style-"
  }, [_c('stat-head', {
    attrs: {
      "stat-object": "report"
    }
  }), _vm._v(" "), _c('section', {
    staticClass: "page-sub-menus full-sec"
  }, [_c('div', {
    staticClass: "theme-border-bottom row space-around"
  }, [_c('span', {
    class: {
      'theme-font-color theme-tab-bor-bottom': _vm.queryDateType === 1
    },
    on: {
      "click": function($event) {
        return _vm.statByWhich(1)
      }
    }
  }, [_vm._v("按日统计")]), _vm._v(" "), _c('span', {
    class: {
      'theme-font-color theme-tab-bor-bottom': _vm.queryDateType === 2
    },
    on: {
      "click": function($event) {
        return _vm.statByWhich(2)
      }
    }
  }, [_vm._v("按日期范围统计")])])]), _vm._v(" "), _c('div', {
    staticClass: "top-date-nav",
    staticStyle: {
      "margin-bottom": "10px"
    }
  }, [(_vm.queryDateType == 1) ? _c('div', {
    staticStyle: {
      "padding": "10px"
    }
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
  })], 1) : [_c('section', {
    staticStyle: {
      "padding-bottom": "3px"
    }
  }, [_c('ul', {
    staticClass: "ul-li-fl date-picker theme-border-bottom"
  }, [_c('li', [_c('div', {
    staticStyle: {
      "padding": "0"
    },
    on: {
      "click": function($event) {
        return _vm.showInputDlg('beginDate')
      }
    }
  }, [(_vm.beginDate) ? [_c('span', [_vm._v(_vm._s(_vm.beginDate))]), _vm._v(" "), _c('i', {
    staticClass: "iconfont iconfork font-color-c",
    staticStyle: {
      "margin-top": "2px",
      "font-size": "12px"
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        return _vm.clearDate(0)
      }
    }
  })] : [_c('span', {
    staticClass: "font-color-c"
  }, [_vm._v("请选择开始时间")])], _vm._v(" "), _c('i', {
    staticClass: "iconfont iconarrow-down-1 font-color-c",
    staticStyle: {
      "margin-top": "2px",
      "font-size": "12px"
    }
  })], 2)]), _vm._v(" "), _c('li', {
    staticClass: "wave"
  }, [_vm._v("~")]), _vm._v(" "), _c('li', [_c('div', {
    staticStyle: {
      "padding": "0"
    },
    on: {
      "click": function($event) {
        return _vm.showInputDlg('endDate')
      }
    }
  }, [(_vm.endDate) ? [_c('span', [_vm._v(_vm._s(_vm.endDate))]), _vm._v(" "), _c('i', {
    staticClass: "iconfont iconfork font-color-c",
    staticStyle: {
      "margin-top": "2px",
      "font-size": "12px"
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        return _vm.clearDate(1)
      }
    }
  })] : [_c('span', {
    staticClass: "font-color-c"
  }, [_vm._v("请选择结束时间")])], _vm._v(" "), _c('i', {
    staticClass: "iconfont iconarrow-down-1 font-color-c",
    staticStyle: {
      "margin-top": "2px",
      "font-size": "12px"
    }
  })], 2)])]), _vm._v(" "), _c('div', {
    staticClass: "btn theme-btn-bg largest-btn",
    staticStyle: {
      "margin": "15px auto"
    },
    on: {
      "click": _vm.changeQueryDates
    }
  }, [_vm._v("确定")])])]], 2), _vm._v(" "), _c('section', [_c('div', {
    staticClass: "hd theme-border-bottom"
  }, [_c('div', {
    staticClass: "tit l"
  }, [_vm._v("当日营业收入")]), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [_c('span', {
    staticClass: "sum-num"
  }, [_vm._v("￥" + _vm._s(_vm.totalAmount))])])]), _vm._v(" "), _c('table', {
    staticClass: "sum-tbl"
  }, [_c('tr', [_c('th', [(_vm.sumAmounts[1]) ? _c('span', {
    on: {
      "click": function($event) {
        return _vm.sumTotalAmount(1)
      }
    }
  }, [(_vm.payChnlCheck[1]) ? _c('i', {
    staticClass: "iconfont iconckbox-on"
  }) : _c('i', {
    staticClass: "iconfont iconckbox-off"
  }), _vm._v("现金")]) : [_vm._v("现金")]], 2), _vm._v(" "), _c('th', [(_vm.sumAmounts[2]) ? _c('span', {
    on: {
      "click": function($event) {
        return _vm.sumTotalAmount(2)
      }
    }
  }, [(_vm.payChnlCheck[2]) ? _c('i', {
    staticClass: "iconfont iconckbox-on"
  }) : _c('i', {
    staticClass: "iconfont iconckbox-off"
  }), _vm._v("刷卡")]) : [_vm._v("刷卡")]], 2), _vm._v(" "), _c('th', [(_vm.sumAmounts[3]) ? _c('span', {
    on: {
      "click": function($event) {
        return _vm.sumTotalAmount(3)
      }
    }
  }, [(_vm.payChnlCheck[3]) ? _c('i', {
    staticClass: "iconfont iconckbox-on"
  }) : _c('i', {
    staticClass: "iconfont iconckbox-off"
  }), _vm._v("支付宝")]) : [_vm._v("支付宝")]], 2), _vm._v(" "), _c('th', [(_vm.sumAmounts[4]) ? _c('span', {
    on: {
      "click": function($event) {
        return _vm.sumTotalAmount(4)
      }
    }
  }, [(_vm.payChnlCheck[4]) ? _c('i', {
    staticClass: "iconfont iconckbox-on"
  }) : _c('i', {
    staticClass: "iconfont iconckbox-off"
  }), _vm._v("微信")]) : [_vm._v("微信")]], 2), _vm._v(" "), _c('th', [(_vm.sumAmounts[0]) ? _c('span', {
    on: {
      "click": function($event) {
        return _vm.sumTotalAmount(0)
      }
    }
  }, [(_vm.payChnlCheck[0]) ? _c('i', {
    staticClass: "iconfont iconckbox-on"
  }) : _c('i', {
    staticClass: "iconfont iconckbox-off"
  }), _vm._v("储值卡")]) : [_vm._v("储值卡")]], 2), _vm._v(" "), _c('th', [(_vm.sumAmounts[5]) ? _c('span', {
    on: {
      "click": function($event) {
        return _vm.sumTotalAmount(5)
      }
    }
  }, [(_vm.payChnlCheck[5]) ? _c('i', {
    staticClass: "iconfont iconckbox-on"
  }) : _c('i', {
    staticClass: "iconfont iconckbox-off"
  }), _vm._v("其它")]) : [_vm._v("其它")]], 2)]), _vm._v(" "), _c('tr', [_c('td', [(_vm.sumAmounts[1]) ? [_vm._v("￥" + _vm._s(_vm.sumAmounts[1]))] : _c('span', {
    staticClass: "gray"
  }, [_vm._v("0")])], 2), _vm._v(" "), _c('td', [(_vm.sumAmounts[2]) ? [_vm._v("￥" + _vm._s(_vm.sumAmounts[2]))] : _c('span', {
    staticClass: "gray"
  }, [_vm._v("0")])], 2), _vm._v(" "), _c('td', [(_vm.sumAmounts[3]) ? [_vm._v("￥" + _vm._s(_vm.sumAmounts[3]))] : _c('span', {
    staticClass: "gray"
  }, [_vm._v("0")])], 2), _vm._v(" "), _c('td', [(_vm.sumAmounts[4]) ? [_vm._v("￥" + _vm._s(_vm.sumAmounts[4]))] : _c('span', {
    staticClass: "gray"
  }, [_vm._v("0")])], 2), _vm._v(" "), _c('td', [(_vm.sumAmounts[0]) ? [_vm._v("￥" + _vm._s(_vm.sumAmounts[0]))] : _c('span', {
    staticClass: "gray"
  }, [_vm._v("0")])], 2), _vm._v(" "), _c('td', [(_vm.sumAmounts[5]) ? [_vm._v("￥" + _vm._s(_vm.sumAmounts[5]))] : _c('span', {
    staticClass: "gray"
  }, [_vm._v("0")])], 2)])])]), _vm._v(" "), (_vm.memberCardStatList && _vm.memberCardStatList.length > 0) ? _c('section', [_c('div', {
    staticClass: "hd theme-border-bottom"
  }, [_c('div', {
    staticClass: "tit l"
  }, [_vm._v("会籍卡收入")]), _vm._v(" "), _c('div', {
    staticClass: "theme-font-color",
    on: {
      "click": function($event) {
        return _vm.viewCardPaymentDetail(0)
      }
    }
  }, [_vm._v("详细")])]), _vm._v(" "), _c('table', [_vm._m(0), _vm._v(" "), _vm._l((_vm.memberCardStatList), function(s) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(s.cardName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(s.records) + " "), _c('span', {
      staticClass: "gray"
    }, [_vm._v("张")])]), _vm._v(" "), _c('td', [_vm._v("￥" + _vm._s(s.payment))])])
  }), _vm._v(" "), _c('tr', {
    staticClass: "sum-column"
  }, [_c('th', [_vm._v("合计")]), _c('td', [_vm._v(_vm._s(_vm.memberCardCntTotal))]), _c('td', [_vm._v("￥" + _vm._s(_vm.memberCardAmtTotal))])])], 2), _vm._v(" "), (_vm.memberCardStatList && _vm.memberCardStatList.length === 0) ? _c('div', {
    staticClass: "no-record"
  }, [_vm._v("无记录")]) : _vm._e()]) : _vm._e(), _vm._v(" "), (_vm.gcCardStatList && _vm.gcCardStatList.length > 0) ? _c('section', [_c('div', {
    staticClass: "hd theme-border-bottom"
  }, [_c('div', {
    staticClass: "tit l"
  }, [_vm._v("团课卡收入")]), _vm._v(" "), _c('div', {
    staticClass: "theme-font-color",
    on: {
      "click": function($event) {
        return _vm.viewCardPaymentDetail(1)
      }
    }
  }, [_vm._v("详细")])]), _vm._v(" "), _c('table', [_vm._m(1), _vm._v(" "), _vm._l((_vm.gcCardStatList), function(s) {
    return _c('tr', [_c('td', [(s.salesName) ? [_vm._v(_vm._s(s.salesName))] : _c('span', {
      staticClass: "gray"
    }, [_vm._v("无")])], 2), _vm._v(" "), _c('td', [_vm._v(_vm._s(s.salesMembers) + " "), _c('span', {
      staticClass: "gray"
    }, [_vm._v("份")])]), _vm._v(" "), _c('td', [_vm._v("￥" + _vm._s(s.salesAmount))])])
  }), _vm._v(" "), _c('tr', {
    staticClass: "sum-column"
  }, [_c('th', [_vm._v("合计")]), _c('td', [_vm._v(_vm._s(_vm.gcCardCntTotal))]), _c('td', [_vm._v("￥" + _vm._s(_vm.gcCardAmtTotal))])])], 2), _vm._v(" "), (_vm.gcCardStatList && _vm.gcCardStatList.length === 0) ? _c('div', {
    staticClass: "no-record"
  }, [_vm._v("无记录")]) : _vm._e()]) : _vm._e(), _vm._v(" "), (_vm.pcCardStatList && _vm.pcCardStatList.length > 0) ? _c('section', [_c('div', {
    staticClass: "hd theme-border-bottom"
  }, [_c('div', {
    staticClass: "tit l"
  }, [_vm._v("私教卡收入")]), _vm._v(" "), _c('div', {
    staticClass: "theme-font-color",
    on: {
      "click": function($event) {
        return _vm.viewCardPaymentDetail(2)
      }
    }
  }, [_vm._v("详细")])]), _vm._v(" "), _c('table', [_vm._m(2), _vm._v(" "), _vm._l((_vm.pcCardStatList), function(s) {
    return _c('tr', [_c('td', [(s.salesName) ? [_vm._v(_vm._s(s.salesName))] : _c('span', {
      staticClass: "gray"
    }, [_vm._v("无")])], 2), _vm._v(" "), _c('td', [_vm._v(_vm._s(s.salesMembers) + " "), _c('span', {
      staticClass: "gray"
    }, [_vm._v("份")])]), _vm._v(" "), _c('td', [_vm._v("￥" + _vm._s(s.salesAmount))])])
  }), _vm._v(" "), _c('tr', {
    staticClass: "sum-column"
  }, [_c('th', [_vm._v("合计")]), _c('td', [_vm._v(_vm._s(_vm.pcCardCntTotal))]), _c('td', [_vm._v("￥" + _vm._s(_vm.pcCardAmtTotal))])])], 2), _vm._v(" "), (_vm.pcCardStatList && _vm.pcCardStatList.length === 0) ? _c('div', {
    staticClass: "no-record"
  }, [_vm._v("无记录")]) : _vm._e()]) : _vm._e(), _vm._v(" "), (_vm.chargeItemStatList && _vm.chargeItemStatList.length > 0) ? _c('section', [_c('div', {
    staticClass: "hd theme-border-bottom"
  }, [_c('div', {
    staticClass: "tit l"
  }, [_vm._v("其它收入")]), _vm._v(" "), _c('div', {
    staticClass: "theme-font-color",
    on: {
      "click": _vm.viewChargeDetail
    }
  }, [_vm._v("详细")])]), _vm._v(" "), _c('table', [_vm._m(3), _vm._v(" "), _vm._l((_vm.chargeItemStatList), function(s) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(s.chargeItemName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(s.quantity))]), _vm._v(" "), _c('td', [_vm._v("￥" + _vm._s(s.amount))])])
  }), _vm._v(" "), _c('tr', {
    staticClass: "sum-column"
  }, [_c('th', [_vm._v("合计")]), _c('td', [_vm._v(_vm._s(_vm.chargeItemCntTotal))]), _c('td', [_vm._v("￥" + _vm._s(_vm.chargeItemAmtTotal))])])], 2), _vm._v(" "), (_vm.chargeItemStatList && _vm.chargeItemStatList.length === 0) ? _c('div', {
    staticClass: "no-record"
  }, [_vm._v("无记录")]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('bottom-nav', {
    attrs: {
      "menu": "stat"
    }
  }), _vm._v(" "), (_vm.dlgView.inputShow) ? _c('van-action-sheet', {
    attrs: {
      "close-on-click-overlay": false
    },
    model: {
      value: (_vm.dlgView.inputShow),
      callback: function($$v) {
        _vm.$set(_vm.dlgView, "inputShow", $$v)
      },
      expression: "dlgView.inputShow"
    }
  }, [(_vm.hasRequest) ? _c('Calendar', {
    ref: "calendar",
    attrs: {
      "has-marked-prop": _vm.checkinDateId,
      "max-date": {
        year: _vm.year,
        month: _vm.month
      },
      "min-date": {
        year: _vm.year - 10,
        month: _vm.month
      },
      "cantPullProp": false,
      "presentDate": _vm.currentDate,
      "seeFutureDay": _vm.seeFutureDay
    },
    on: {
      "queryMonth": function($event) {
        return _vm.queryMonth(arguments)
      },
      "querySelectedDay": _vm.querySelectedDate
    }
  }) : _vm._e(), _vm._v(" "), _c('section', {
    staticClass: "date-tool-comfirm"
  }, [_c('div', {
    staticClass: "row align-center"
  }, [_c('div', {
    staticClass: "lbtn font-color-9 theme-btn-bor",
    on: {
      "click": _vm.cancleChoseDate
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('div', {
    staticClass: "lbtn theme-btn-bg",
    on: {
      "click": _vm.confirmDatePiker
    }
  }, [_vm._v("确定")])])])], 1) : _vm._e(), _vm._v(" "), (_vm.cardChgDlg.show) ? _c('van-popup', {
    staticClass: "van-pop-has-overlay",
    style: ({
      height: '100%',
      width: '100%'
    }),
    attrs: {
      "position": "right"
    },
    model: {
      value: (_vm.cardChgDlg.show),
      callback: function($$v) {
        _vm.$set(_vm.cardChgDlg, "show", $$v)
      },
      expression: "cardChgDlg.show"
    }
  }, [_c('div', {
    staticClass: "page-head"
  }, [_c('div', {
    staticClass: "move",
    on: {
      "click": function($event) {
        _vm.cardChgDlg.show = false
      }
    }
  }, [_c('i', {
    staticClass: "iconfont iconarrow-l"
  })]), _vm._v("\n        " + _vm._s(_vm.cardChgDlg.title) + "\n      ")]), _vm._v(" "), (_vm.cardChgDlg.show && _vm.cardChgDlg.data && _vm.cardChgDlg.data.length) ? [_vm._l((_vm.cardChgDlg.data), function(c) {
    return _c('div', {
      staticClass: "course-records theme-border-bottom"
    }, [_c('div', {
      staticClass: "ret"
    }, [_c('dl', [_c('dt', {
      staticClass: "theme-border-bottom"
    }, [_c('span', {
      staticClass: "l big bold"
    }, [_vm._v(_vm._s(c.cardName))])]), _vm._v(" "), _c('dd', [_c('label', [_vm._v("会员")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(c.memberName.shorten(15)))])]), _vm._v(" "), _c('dd', [_c('label', [_vm._v("消费类型")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.g.Dict.CardPaymentType[c.paymentType]))])]), _vm._v(" "), _c('dd', [_c('label', [_vm._v("充值")]), _vm._v(" "), _c('span', [_vm._v("￥" + _vm._s(c.usableAmount))])]), _vm._v(" "), _c('dd', [_c('label', [_vm._v("实收")]), _vm._v(" "), (c.usableAmount) ? [_c('span', {
      class: {
        orangered: c.usableAmount !== c.paymentAmount
      }
    }, [_vm._v("￥" + _vm._s(c.paymentAmount))])] : _c('span', [_vm._v("￥" + _vm._s(c.paymentAmount))])], 2), _vm._v(" "), (c.cardType == 1 || c.cardType == 2) ? _c('dd', [_c('label', [_vm._v("使用额")]), _vm._v(" "), _c('span', [(c.cardType === 1) ? [_vm._v(_vm._s(c.usableDays) + " 天")] : (c.cardType === 2) ? [_vm._v(_vm._s(c.usableTimes) + " 次")] : _vm._e()], 2)]) : _vm._e(), _vm._v(" "), _c('dd', [_c('label', [_vm._v("支付方式")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.g.Dict.CardPaymentChannel[c.paymentChannel]))])]), _vm._v(" "), (c.salesName || c.salesConfList) ? _c('dd', [_c('label', [_vm._v("销售 ")]), _vm._v(" "), _c('span', [(c.salesName) ? [_vm._v(_vm._s(c.salesName))] : (c.salesConfList) ? _vm._l((c.salesConfList), function(sc) {
      return _c('div', [_vm._v(_vm._s(sc.split(':')[1]) + " ￥" + _vm._s(sc.split(':')[2]))])
    }) : _vm._e()], 2)]) : _vm._e(), _vm._v(" "), (c.createUname) ? _c('dd', [_c('label', [_vm._v("登记人")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(c.createUname.shorten(15)))])]) : _vm._e(), _vm._v(" "), (c.createTime) ? _c('dd', [_c('label', [_vm._v("登记时间")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(c.createTime))])]) : _vm._e(), _vm._v(" "), (c.remark || c.paymentPoints) ? _c('dd', [_c('label', [_vm._v("备注")]), _vm._v(" "), _c('span', [(c.paymentPoints) ? _c('div', [_c('i', [_vm._v("使用 " + _vm._s(c.paymentPoints) + " 积分支付")])]) : _vm._e(), _vm._v("\n                  " + _vm._s(c.remark) + "\n               ")])]) : _vm._e()])])])
  }), _vm._v(" "), (_vm.totalCount && _vm.totalCount > _vm.g.Conf.PAGE_SIZE) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('pagination', {
    attrs: {
      "total": _vm.totalCount,
      "page-change": _vm.changePageNo
    }
  })], 1) : _vm._e()] : _vm._e()], 2) : _vm._e(), _vm._v(" "), (_vm.chargeListDlg) ? _c('van-popup', {
    staticClass: "van-pop-has-overlay",
    style: ({
      height: '100%',
      width: '100%'
    }),
    attrs: {
      "position": "right"
    },
    model: {
      value: (_vm.chargeListDlg),
      callback: function($$v) {
        _vm.chargeListDlg = $$v
      },
      expression: "chargeListDlg"
    }
  }, [_c('div', {
    staticClass: "page-head"
  }, [_c('div', {
    staticClass: "move",
    on: {
      "click": function($event) {
        _vm.chargeListDlg = false
      }
    }
  }, [_c('i', {
    staticClass: "iconfont iconarrow-l"
  })]), _vm._v("\n        其它收入明细\n      ")]), _vm._v(" "), _vm._l((_vm.chargeList), function(c) {
    return _c('div', {
      staticClass: "course-records theme-border-bottom"
    }, [_c('div', {
      staticClass: "ret"
    }, [_c('dl', [_c('dt', {
      staticClass: "theme-border-bottom"
    }, [_c('span', {
      staticClass: "big bold"
    }, [(c.chargeItemName) ? [_vm._v(_vm._s(c.chargeItemName))] : [_vm._v(_vm._s(_vm.g.Dict.ChargeFroms[c.chargeFrom]))]], 2)]), _vm._v(" "), _c('dd', [_c('label', [_vm._v("单价")]), _vm._v(" "), _c('span', [_vm._v("￥" + _vm._s(c.unitPrice))])]), _vm._v(" "), _c('dd', [_c('label', [_vm._v("数量")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(c.unitNum))])]), _vm._v(" "), _c('dd', [_c('label', [_vm._v("金额")]), _vm._v(" "), _c('span', [_vm._v("￥"), (c.arAp === 0) ? [_vm._v(_vm._s(c.arAmount))] : [_vm._v(_vm._s(c.apAmount))]], 2)]), _vm._v(" "), _c('dd', [_c('label', [_vm._v("支付方式")]), _vm._v(" "), _c('span', [(c.paymentChannel === 0) ? [_vm._v("储值卡")] : (c.paymentChannel === 99) ? [_vm._v("赠送")] : (c.paymentChannel) ? [_vm._v(_vm._s(_vm.g.Dict.CardPaymentChannel[c.paymentChannel]))] : _vm._e()], 2)]), _vm._v(" "), (c.transTime) ? _c('dd', [_c('label', [_vm._v("交易时间")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(c.transTime))])]) : _vm._e(), _vm._v(" "), (c.createUname) ? _c('dd', [_c('label', [_vm._v("记账人")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(c.createUname))])]) : _vm._e(), _vm._v(" "), (c.createTime) ? _c('dd', [_c('label', [_vm._v("记账时间")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(c.createTime))])]) : _vm._e(), _vm._v(" "), (c.memberName) ? _c('dd', [_c('label', [_vm._v("消费会员")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(c.memberName))])]) : _vm._e(), _vm._v(" "), (c.salesName) ? _c('dd', [_c('label', [_vm._v("销售")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(c.salesName))])]) : _vm._e(), _vm._v(" "), (c.remark) ? _c('dd', [_c('label', [_vm._v("备注")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(c.remark))])]) : _vm._e()])])])
  }), _vm._v(" "), (_vm.chargeTotalCount && _vm.chargeTotalCount > _vm.g.Conf.PAGE_SIZE) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('pagination', {
    attrs: {
      "total": _vm.chargeTotalCount,
      "page-change": _vm.queryChargeList
    }
  })], 1) : _vm._e()], 2) : _vm._e()], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', [_vm._v("卡名")]), _c('th', {
    attrs: {
      "width": "55"
    }
  }, [_vm._v("数量")]), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("金额")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', [_vm._v("销售")]), _c('th', {
    attrs: {
      "width": "55"
    }
  }, [_vm._v("数量")]), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("金额")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', [_vm._v("销售")]), _c('th', {
    attrs: {
      "width": "55"
    }
  }, [_vm._v("数量")]), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("金额")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', [_vm._v("项目")]), _c('th', {
    attrs: {
      "width": "55"
    }
  }, [_vm._v("数量")]), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("金额")])])
}]}

/***/ }),

/***/ 2208:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tblform"
  }, [_c('stat-head', {
    attrs: {
      "stat-object": "member"
    }
  }), _vm._v(" "), _c('stat-member-head', {
    attrs: {
      "stat-type": 7
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "section-part"
  }, [_c('div', {
    staticClass: "stat-privite theme-border-bottom"
  }, [_c('ul', [_c('li', {
    staticClass: "row stat-1",
    on: {
      "click": function($event) {
        return _vm.queryByLeftCount(0, 0, _vm.stat.membersOfFinishedPl)
      }
    }
  }, [_c('div', [_vm._v("已结束课时的会员数")]), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.stat.membersOfFinishedPl) + " 人")])]), _vm._v(" "), _c('li', {
    staticClass: "row stat-2",
    on: {
      "click": function($event) {
        return _vm.queryByLeftCount(1, 5, _vm.stat.membersOfLeftCnt)
      }
    }
  }, [_c('div', [_vm._v("快结束课时(1~5次)的会员数")]), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.stat.membersOfLeftCnt) + " 人")])]), _vm._v(" "), _c('li', {
    staticClass: "row stat-3",
    on: {
      "click": function($event) {
        return _vm.queryUnusedMemberPl(null)
      }
    }
  }, [_c('div', [_vm._v("尚未约课的会员数")]), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.stat.membersOfUnusedPl) + " 人")])])])]), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("剩余次数")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail row"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.query.minLeftCount),
      expression: "query.minLeftCount",
      modifiers: {
        "trim": true
      }
    }],
    staticClass: "wid40",
    attrs: {
      "placeholder": "请输入开始次数",
      "type": "number",
      "min": "0"
    },
    domProps: {
      "value": (_vm.query.minLeftCount)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.query, "minLeftCount", $event.target.value.trim())
      },
      "blur": function($event) {
        return _vm.$forceUpdate()
      }
    }
  }), _vm._v(" ~\n\t\t\t\t"), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.query.maxLeftCount),
      expression: "query.maxLeftCount",
      modifiers: {
        "trim": true
      }
    }],
    staticClass: "wid40",
    attrs: {
      "placeholder": "请输入结束次数",
      "type": "number",
      "min": "0"
    },
    domProps: {
      "value": (_vm.query.maxLeftCount)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.query, "maxLeftCount", $event.target.value.trim())
      },
      "blur": function($event) {
        return _vm.$forceUpdate()
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticStyle: {
      "padding": "15px 0"
    }
  }, [_c('div', {
    staticClass: "btn largest-btn theme-btn-bg",
    on: {
      "click": function($event) {
        return _vm.statMemberPl(null)
      }
    }
  }, [_vm._v("查询")])])]), _vm._v(" "), _c('div', {
    staticClass: "section-part",
    staticStyle: {
      "margin-bottom": "0"
    }
  }, [_c('div', {
    ref: "respsTable",
    staticClass: "tblform resps-table",
    staticStyle: {
      "border": "0",
      "margin": "0 0 0 15px"
    },
    attrs: {
      "id": "respsTable"
    }
  }, [_c('div', {
    staticClass: "resps-table-box",
    style: ({
      'width': 6 * _vm.tableThMinWidth + 'px'
    }),
    attrs: {
      "id": "respsTableBox"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.scrolledTop > 0),
      expression: "scrolledTop > 0"
    }],
    staticClass: "table-fix-head",
    style: ({
      'top': _vm.scrolledTop + 'px',
      'width': 6 * _vm.tableThMinWidth + 'px'
    })
  }, [_c('table', [_c('tr', {
    attrs: {
      "id": "table-fix-head-th"
    }
  }, _vm._l((_vm.tableTheadList), function(t) {
    return _c('th', [_c('div', [_vm._v(_vm._s(t.title))])])
  }), 0)])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.scrolledTop > 0 && _vm.scrolledLeft > 0),
      expression: "scrolledTop > 0 && scrolledLeft > 0"
    }],
    staticClass: "table-fix-th",
    style: ({
      'top': _vm.scrolledTop + 'px',
      'left': _vm.scrolledLeft + 'px'
    })
  }, [_c('table', [_c('tr', {
    attrs: {
      "id": "table-fix-th"
    }
  }, _vm._l((_vm.fixNumber), function(d) {
    return _c('th', [_c('div', [_vm._v(_vm._s(_vm.tableTheadList[d].title))])])
  }), 0)])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.scrolledLeft > 0),
      expression: "scrolledLeft > 0"
    }],
    staticClass: "table-fix-td",
    style: ({
      'left': _vm.scrolledLeft + 'px'
    })
  }, [_c('table', [_c('tr', {
    attrs: {
      "id": "table-fix-col-td"
    }
  }, _vm._l((_vm.fixNumber), function(d) {
    return _c('th', [_c('div', [_vm._v(_vm._s(_vm.tableTheadList[d].title))])])
  }), 0), _vm._v(" "), _vm._l((_vm.memberPlStatList), function(s) {
    return _c('tr', [_c('td', [_c('a', {
      staticClass: "block",
      on: {
        "click": function($event) {
          return _vm.viewMember(s)
        }
      }
    }, [_vm._v(_vm._s(s.memberName))])])])
  })], 2)]), _vm._v(" "), _c('table', [_c('tr', {
    attrs: {
      "id": "table-th"
    }
  }, _vm._l((_vm.tableTheadList), function(t) {
    return _c('th', [_c('div', [_vm._v(_vm._s(t.title))])])
  }), 0), _vm._v(" "), (_vm.memberPlStatList && _vm.memberPlStatList.length > 0) ? _vm._l((_vm.memberPlStatList), function(s, idx) {
    return _c('tr', [_c('td', [_c('a', {
      staticClass: "block theme-font-color",
      on: {
        "click": function($event) {
          return _vm.viewMember(s)
        }
      }
    }, [_vm._v(_vm._s(s.memberName))])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(s.totalCount))]), _vm._v(" "), _c('td', {
      staticClass: "darkred"
    }, [_vm._v(_vm._s(s.usedCount))]), _vm._v(" "), _c('td', [(s.totalCount && s.usedCount) ? [_vm._v(_vm._s(_vm.g.Util.round(100 * s.usedCount / s.totalCount)) + "%")] : _vm._e()], 2), _vm._v(" "), _c('td', {
      staticClass: "green"
    }, [(s.totalCount > s.usedCount) ? [_vm._v(_vm._s(s.totalCount - s.usedCount))] : _vm._e()], 2), _vm._v(" "), _c('td', [(s.totalCount && s.totalCount > s.usedCount) ? [_vm._v("\n\t\t\t\t\t\t\t\t" + _vm._s(_vm.g.Util.round(100 * (s.totalCount - s.usedCount) / s.totalCount)) + "%")] : _vm._e()], 2)])
  }) : _vm._e()], 2)])])]), _vm._v(" "), (!_vm.memberPlStatList.length) ? [_c('div', {
    staticClass: "no-data"
  }, [_vm._v("暂无数据")])] : _vm._e(), _vm._v(" "), (_vm.memberPlStatCount && _vm.memberPlStatCount > 0) ? _c('div', [_c('pagination', {
    attrs: {
      "total": _vm.memberPlStatCount,
      "defaultPageSize": 50,
      "page-change": _vm.statMemberPl
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('van-popup', {
    style: ({
      height: '100%',
      width: '100%'
    }),
    attrs: {
      "position": "right"
    },
    model: {
      value: (_vm.viewMemberDlg),
      callback: function($$v) {
        _vm.viewMemberDlg = $$v
      },
      expression: "viewMemberDlg"
    }
  }, [_c('div', {
    staticClass: "page-head"
  }, [_c('div', {
    staticClass: "move",
    on: {
      "click": function($event) {
        _vm.viewMemberDlg = false
      }
    }
  }, [_c('i', {
    staticClass: "iconfont iconarrow-l"
  })]), _vm._v(" "), _c('div', {
    staticClass: "tit"
  }, [_vm._v(" " + _vm._s(_vm.selectMemberName) + " ")])]), _vm._v(" "), (_vm.viewMemberDlg) ? [_c('div', [_c('member-base', {
    attrs: {
      "member-id": _vm.selectMemberId,
      "readonly": true,
      "select-member": _vm.member
    }
  })], 1)] : _vm._e()], 2)], 2)
},staticRenderFns: []}

/***/ }),

/***/ 2210:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "-style- vant"
  }, [_c('stat-head', {
    attrs: {
      "stat-object": "revenue"
    }
  }), _vm._v(" "), _c('section', {
    staticClass: "chart-sec"
  }, [_c('div', {
    staticClass: "hd theme-padding theme-border-bottom"
  }, [_c('div', {
    staticClass: "l tit"
  }, [_vm._v("收支统计")]), _vm._v(" "), _c('div', {
    staticClass: "r medium",
    on: {
      "click": function($event) {
        _vm.showDlg = true
      }
    }
  }, [_vm._v("\n        " + _vm._s(_vm.chargeQuery.dates[0].format('yyyy/M/d')) + " ~ " + _vm._s(_vm.chargeQuery.dates[1].format('yyyy/M/d')) + "\n        "), _c('i', {
    staticClass: "iconfont big gray icon-arrow-down-1"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "stat-btns theme-border-bottom"
  }, [_c('span', {
    staticClass: "btn theme-btn-bor",
    class: {
      'theme-btn-bg': _vm.chargeQuery.statType === 1
    },
    on: {
      "click": function($event) {
        return _vm.loadChargeStat(1)
      }
    }
  }, [_vm._v("日统计")]), _vm._v(" "), _c('span', {
    staticClass: "btn theme-btn-bor",
    class: {
      'theme-btn-bg': _vm.chargeQuery.statType === 2
    },
    on: {
      "click": function($event) {
        return _vm.loadChargeStat(2)
      }
    }
  }, [_vm._v("周统计")]), _vm._v(" "), _c('span', {
    staticClass: "btn theme-btn-bor",
    class: {
      'theme-btn-bg': _vm.chargeQuery.statType === 3
    },
    on: {
      "click": function($event) {
        return _vm.loadChargeStat(3)
      }
    }
  }, [_vm._v("月统计")])]), _vm._v(" "), _c('chart', {
    staticClass: "chart",
    attrs: {
      "options": _vm.chargeChartOption
    }
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin": "10px"
    }
  }, [_c('table', {
    staticClass: "mytbl detail"
  }, [_c('tr', [_c('th', [(_vm.stateType === 1) ? [_vm._v("日期")] : _vm._e(), _vm._v(" "), (_vm.stateType === 2) ? [_vm._v("周数")] : _vm._e(), _vm._v(" "), (_vm.stateType === 3) ? [_vm._v("月份")] : _vm._e()], 2), _vm._v(" "), _c('th', [_vm._v("收入")]), _c('th', [_vm._v("支出")]), _c('th', [_vm._v("余额")])]), _vm._v(" "), _vm._l((_vm.chargeStatList), function(c) {
    return _c('tr', [_c('td', [(_vm.stateType === 1) ? [_vm._v(_vm._s(Date.new(c.createDate).format('yyyy-MM-dd')))] : _vm._e(), _vm._v(" "), (_vm.stateType === 2) ? [_vm._v("第" + _vm._s(c.createWeek) + "周")] : _vm._e(), _vm._v(" "), (_vm.stateType === 3) ? [_vm._v(_vm._s(_vm.formatMonth(c.createMonth)))] : _vm._e()], 2), _vm._v(" "), _c('td', [_vm._v("￥" + _vm._s(_vm.g.Util.formatNum(c.arAmount)))]), _vm._v(" "), _c('td', [_vm._v("￥" + _vm._s(_vm.g.Util.formatNum(c.apAmount)))]), _vm._v(" "), _c('td', [_vm._v("￥" + _vm._s(_vm.g.Util.formatNum(c.balance)))])])
  })], 2)]), _vm._v(" "), _c('van-dialog', {
    staticClass: "van-has-overlay",
    attrs: {
      "show-cancel-button": true,
      "show-confirm-button": true,
      "cancelButtonText": "关闭",
      "confirmButtonText": "查询",
      "title": "根据日期范围统计"
    },
    on: {
      "confirm": _vm.handleQueryBtn
    },
    model: {
      value: (_vm.showDlg),
      callback: function($$v) {
        _vm.showDlg = $$v
      },
      expression: "showDlg"
    }
  }, [_c('section', {
    staticStyle: {
      "margin-bottom": "0",
      "padding": "0 16px"
    }
  }, [_c('div', {
    staticClass: "center"
  }, [_c('p', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.dateBegin),
      expression: "dateBegin"
    }],
    staticClass: "big-date",
    attrs: {
      "type": "date"
    },
    domProps: {
      "value": (_vm.dateBegin)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.dateBegin = $event.target.value
      }
    }
  })]), _vm._v("\n          至\n          "), _c('p', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.dateEnd),
      expression: "dateEnd"
    }],
    staticClass: "big-date",
    attrs: {
      "type": "date"
    },
    domProps: {
      "value": (_vm.dateEnd)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.dateEnd = $event.target.value
      }
    }
  })])])])])], 1), _vm._v(" "), _c('bottom-nav', {
    attrs: {
      "menu": "stat"
    }
  })], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2223:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "-style-"
  }, [_c('stat-head', {
    attrs: {
      "stat-object": "member"
    }
  }), _vm._v(" "), _c('member-stat', {
    attrs: {
      "stat-type": 3
    }
  }), _vm._v(" "), _c('bottom-nav', {
    attrs: {
      "menu": "stat"
    }
  })], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2226:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vant"
  }, [_c('stat-head', {
    attrs: {
      "stat-object": "member"
    }
  }), _vm._v(" "), _c('stat-member-head', {
    attrs: {
      "stat-type": 6
    }
  }), _vm._v(" "), _c('section', {
    staticClass: "chart-sec"
  }, [_c('div', {
    staticClass: "hd theme-padding theme-border-bottom"
  }, [_c('div', {
    staticClass: "l tit"
  }, [_vm._v("新会员来源")]), _vm._v(" "), _c('div', {
    staticClass: "r medium",
    on: {
      "click": function($event) {
        _vm.showDlg = true
      }
    }
  }, [_vm._v("\n        " + _vm._s(_vm.query.beginDate.format('yyyy/M/d')) + " - " + _vm._s(_vm.query.endDate.format('yyyy/M/d')) + "\n        "), _c('i', {
    staticClass: "iconfont big gray icon-arrow-down-1"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "opt-list center theme-border-bottom"
  }, [_c('ul', [_c('li', {
    staticClass: "opt-tit"
  }, [_vm._v("日期导航：")]), _vm._v(" "), _vm._l((_vm.dateShortcuts), function(d, idx) {
    return _c('li', [_c('span', {
      class: {
        'theme-font-color': _vm.queryDateShourtcut === idx
      },
      on: {
        "click": function($event) {
          return _vm.statByDateShortcuts(idx)
        }
      }
    }, [_vm._v(_vm._s(d.name))])])
  })], 2)]), _vm._v(" "), (_vm.statList && _vm.statList.length > 0) ? _c('div', [_c('chart', {
    staticClass: "piechart",
    attrs: {
      "options": _vm.memberSourceStatOption
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin": "10px"
    }
  }, [_c('table', {
    staticClass: "mytbl detail"
  }, [_vm._m(0), _vm._v(" "), _vm._l((_vm.statList), function(s) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(s.sourceName))]), _c('td', [_vm._v(_vm._s(s.count))]), _c('td', [_vm._v(_vm._s((s.rate * 100).toFixed(2)) + "%")])])
  })], 2), _vm._v(" "), (_vm.statList && _vm.statList.length === 0) ? _c('div', {
    staticClass: "none p15"
  }, [_vm._v("无记录")]) : _vm._e()])]), _vm._v(" "), _c('van-dialog', {
    staticClass: "van-has-overlay",
    attrs: {
      "show-cancel-button": true,
      "show-confirm-button": true,
      "cancelButtonText": "关闭",
      "confirmButtonText": "查询",
      "title": "根据日期范围统计"
    },
    on: {
      "confirm": _vm.handleQueryBtn
    },
    model: {
      value: (_vm.showDlg),
      callback: function($$v) {
        _vm.showDlg = $$v
      },
      expression: "showDlg"
    }
  }, [_c('section', {
    staticStyle: {
      "margin-bottom": "0",
      "padding": "0 16px"
    }
  }, [_c('div', {
    staticClass: "center"
  }, [_c('p', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.dateBegin),
      expression: "dateBegin"
    }],
    staticClass: "big-date",
    attrs: {
      "type": "date"
    },
    domProps: {
      "value": (_vm.dateBegin)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.dateBegin = $event.target.value
      }
    }
  })]), _vm._v("\n        至\n        "), _c('p', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.dateEnd),
      expression: "dateEnd"
    }],
    staticClass: "big-date",
    attrs: {
      "type": "date"
    },
    domProps: {
      "value": (_vm.dateEnd)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.dateEnd = $event.target.value
      }
    }
  })])])])]), _vm._v(" "), _c('bottom-nav', {
    attrs: {
      "menu": "stat"
    }
  })], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', [_vm._v("来源")]), _c('th', [_vm._v("会员数")]), _c('th', [_vm._v("比例")])])
}]}

/***/ }),

/***/ 2248:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tblform section-part vant"
  }, [_c('stat-head', {
    attrs: {
      "stat-object": "member"
    }
  }), _vm._v(" "), _c('stat-member-head', {
    attrs: {
      "stat-type": 8
    }
  }), _vm._v(" "), _c('van-tabs', {
    model: {
      value: (_vm.active),
      callback: function($$v) {
        _vm.active = $$v
      },
      expression: "active"
    }
  }, _vm._l((_vm.tabData), function(c, idx) {
    return _c('van-tab', {
      key: idx,
      attrs: {
        "title": c.name
      }
    }, [(_vm.active == 0) ? _c('div', [_c('div', {
      staticClass: "row align-center theme-border-bottom"
    }, [_c('div', {
      staticClass: "infor-name"
    }, [_vm._v("会员类型")]), _vm._v(" "), _c('div', {
      staticClass: "infor-detail"
    }, [_c('pull-down-list', {
      attrs: {
        "selectList": _vm.memberType,
        "selectId": "name",
        "changeId": "id"
      },
      model: {
        value: (_vm.query.memberTypeForSexStat),
        callback: function($$v) {
          _vm.$set(_vm.query, "memberTypeForSexStat", $$v)
        },
        expression: "query.memberTypeForSexStat"
      }
    }, [_c('span', {
      attrs: {
        "slot": "dlgTit"
      },
      slot: "dlgTit"
    }, [_vm._v("会员类型")]), _vm._v(" "), _c('span', {
      attrs: {
        "slot": "pleaseChose"
      },
      slot: "pleaseChose"
    }, [_vm._v("所有会员")])])], 1)]), _vm._v(" "), _c('div', {
      staticClass: "row align-center theme-border-bottom"
    }, [_c('div', {
      staticClass: "infor-name"
    }, [_vm._v("会员注册日期")]), _vm._v(" "), _c('div', {
      staticClass: "infor-detail row align-center"
    }, [_c('div', {
      staticClass: "row row-l-r start",
      staticStyle: {
        "padding": "0"
      },
      on: {
        "click": function($event) {
          return _vm.showInputDlg('beginDate')
        }
      }
    }, [(_vm.beginDate) ? [_c('span', [_vm._v(_vm._s(_vm.beginDate))])] : [_c('span', {
      staticClass: "font-color-c"
    }, [_vm._v("请选择开始日期")])], _vm._v(" "), _c('i', {
      staticClass: "iconfont iconarrow-down-1 font-color-c",
      staticStyle: {
        "margin-top": "2px",
        "font-size": "12px"
      }
    })], 2), _vm._v(" "), _c('div', [_vm._v("~")]), _vm._v(" "), _c('div', {
      staticClass: "row row-l-r start",
      staticStyle: {
        "padding": "0"
      },
      on: {
        "click": function($event) {
          return _vm.showInputDlg('endDate')
        }
      }
    }, [(_vm.endDate) ? [_c('span', [_vm._v(_vm._s(_vm.endDate))])] : [_c('span', {
      staticClass: "font-color-c"
    }, [_vm._v("请选择结束日期")])], _vm._v(" "), _c('i', {
      staticClass: "iconfont iconarrow-down-1 font-color-c",
      staticStyle: {
        "margin-top": "2px",
        "font-size": "12px"
      }
    })], 2)])]), _vm._v(" "), _c('div', {
      staticClass: "theme-border-bottom",
      staticStyle: {
        "padding": "15px 0"
      }
    }, [_c('div', {
      staticClass: "largest-btn theme-btn-bg",
      on: {
        "click": _vm.statMemberSex
      }
    }, [_vm._v("查询")])]), _vm._v(" "), (_vm.sexStatData && _vm.sexStatData.length > 0) ? _c('div', [_c('chart', {
      staticClass: "piechart",
      attrs: {
        "options": _vm.memberSexStatOption
      }
    })], 1) : _vm._e(), _vm._v(" "), (_vm.sexNames) ? _c('div', {
      staticClass: "consume-status"
    }, [_c('table', [_c('tr', {
      staticClass: "theme-border-bottom"
    }, [_c('th', {
      staticClass: "font-color-c"
    }, [_vm._v("会员性别")]), _vm._v(" "), _c('th', {
      staticClass: "font-color-c"
    }, [_vm._v("所占数量")]), _vm._v(" "), _c('th', {
      staticClass: "font-color-c"
    }, [_vm._v("所占比例")])]), _vm._v(" "), _vm._l((_vm.sexNames), function(s, idx) {
      return _c('tr', {
        staticClass: "theme-border-bottom"
      }, [_c('td', [_vm._v(_vm._s(s.sex))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(s.value))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(s.name) + "%")])])
    })], 2)]) : _vm._e()]) : _vm._e(), _vm._v(" "), (_vm.active == 1) ? _c('div', [_c('div', {
      staticClass: "row align-center theme-border-bottom"
    }, [_c('div', {
      staticClass: "infor-name"
    }, [_vm._v("会员类型")]), _vm._v(" "), _c('div', {
      staticClass: "infor-detail"
    }, [_c('pull-down-list', {
      attrs: {
        "selectList": _vm.memberType,
        "selectId": "name",
        "changeId": "id"
      },
      model: {
        value: (_vm.query.memberTypeForAgeStat),
        callback: function($$v) {
          _vm.$set(_vm.query, "memberTypeForAgeStat", $$v)
        },
        expression: "query.memberTypeForAgeStat"
      }
    }, [_c('span', {
      attrs: {
        "slot": "dlgTit"
      },
      slot: "dlgTit"
    }, [_vm._v("会员类型")]), _vm._v(" "), _c('span', {
      attrs: {
        "slot": "pleaseChose"
      },
      slot: "pleaseChose"
    }, [_vm._v("所有会员")])])], 1)]), _vm._v(" "), _c('div', {
      staticClass: "row align-center theme-border-bottom"
    }, [_c('div', {
      staticClass: "infor-name"
    }, [_vm._v("会员注册日期")]), _vm._v(" "), _c('div', {
      staticClass: "infor-detail row align-center"
    }, [_c('div', {
      staticClass: "row row-l-r start",
      staticStyle: {
        "padding": "0"
      },
      on: {
        "click": function($event) {
          return _vm.showInputDlg('beginDateForAgeStat')
        }
      }
    }, [(_vm.beginDateForAgeStat) ? [_c('span', [_vm._v(_vm._s(_vm.beginDateForAgeStat))])] : [_c('span', {
      staticClass: "font-color-c"
    }, [_vm._v("请选择开始日期")])], _vm._v(" "), _c('i', {
      staticClass: "iconfont iconarrow-down-1 font-color-c",
      staticStyle: {
        "margin-top": "2px",
        "font-size": "12px"
      }
    })], 2), _vm._v(" "), _c('div', [_vm._v("~")]), _vm._v(" "), _c('div', {
      staticClass: "row row-l-r start",
      staticStyle: {
        "padding": "0"
      },
      on: {
        "click": function($event) {
          return _vm.showInputDlg('endDateForAgeStat')
        }
      }
    }, [(_vm.endDateForAgeStat) ? [_c('span', [_vm._v(_vm._s(_vm.endDateForAgeStat))])] : [_c('span', {
      staticClass: "font-color-c"
    }, [_vm._v("请选择结束日期")])], _vm._v(" "), _c('i', {
      staticClass: "iconfont iconarrow-down-1 font-color-c",
      staticStyle: {
        "margin-top": "2px",
        "font-size": "12px"
      }
    })], 2)])]), _vm._v(" "), _c('div', {
      staticClass: "row align-center theme-border-bottom"
    }, [_c('div', {
      staticClass: "infor-name"
    }, [_vm._v("年龄段")]), _vm._v(" "), _c('div', {
      staticClass: "infor-detail"
    }, [_c('pull-down-list', {
      attrs: {
        "selectList": _vm.ageSpanType,
        "selectId": "name",
        "changeId": "id"
      },
      model: {
        value: (_vm.query.ageSpanType),
        callback: function($$v) {
          _vm.$set(_vm.query, "ageSpanType", $$v)
        },
        expression: "query.ageSpanType"
      }
    }, [_c('span', {
      attrs: {
        "slot": "dlgTit"
      },
      slot: "dlgTit"
    }, [_vm._v("年龄段")]), _vm._v(" "), _c('span', {
      attrs: {
        "slot": "pleaseChose"
      },
      slot: "pleaseChose"
    }, [_vm._v("10岁间隔")])])], 1)]), _vm._v(" "), _c('div', {
      staticClass: "theme-border-bottom",
      staticStyle: {
        "padding": "15px 0"
      }
    }, [_c('div', {
      staticClass: "largest-btn theme-btn-bg",
      on: {
        "click": _vm.statMemberAge
      }
    }, [_vm._v("查询")])]), _vm._v(" "), (_vm.ageStatData && _vm.ageStatData.length > 0) ? _c('div', {
      staticClass: "l15"
    }, [_c('chart', {
      staticClass: "barchart",
      attrs: {
        "options": _vm.memberAgeStatOption
      }
    })], 1) : _vm._e(), _vm._v(" "), (_vm.ageStatList) ? _c('div', {
      staticClass: "consume-status"
    }, [_c('table', [_c('tr', {
      staticClass: "theme-border-bottom"
    }, [_c('th', {
      staticClass: "font-color-c"
    }, [_vm._v("年龄段")]), _vm._v(" "), _c('th', {
      staticClass: "font-color-c"
    }, [_vm._v("人数")]), _vm._v(" "), _c('th', {
      staticClass: "font-color-c"
    }, [_vm._v("比例")])]), _vm._v(" "), _vm._l((_vm.ageStatList), function(r, idx) {
      return _c('tr', {
        staticClass: "theme-border-bottom"
      }, [_c('td', [_vm._v(_vm._s(r.flagName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(r.count))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(r.rate) + "%")])])
    })], 2)]) : _vm._e()]) : _vm._e()])
  }), 1), _vm._v(" "), _c('van-action-sheet', {
    attrs: {
      "close-on-click-overlay": false
    },
    model: {
      value: (_vm.dlgView.inputShow),
      callback: function($$v) {
        _vm.$set(_vm.dlgView, "inputShow", $$v)
      },
      expression: "dlgView.inputShow"
    }
  }, [(_vm.checkDlgViewName == 'beginDate') ? [_c('van-datetime-picker', {
    attrs: {
      "type": "date",
      "title": "选择年月日",
      "min-date": _vm.minDate,
      "max-date": new Date(_vm.thisYear, _vm.thisMonth, _vm.thisDate),
      "confirm-button-text": "完成"
    },
    on: {
      "confirm": function($event) {
        return _vm.confirmDatePiker('beginDate')
      },
      "cancel": function($event) {
        _vm.dlgView.inputShow = false
      }
    },
    model: {
      value: (_vm.currentDate),
      callback: function($$v) {
        _vm.currentDate = $$v
      },
      expression: "currentDate"
    }
  })] : _vm._e(), _vm._v(" "), (_vm.checkDlgViewName == 'endDate') ? [_c('van-datetime-picker', {
    attrs: {
      "type": "date",
      "title": "选择年月日",
      "min-date": _vm.minDate,
      "max-date": new Date(_vm.thisYear, _vm.thisMonth, _vm.thisDate),
      "confirm-button-text": "完成"
    },
    on: {
      "confirm": function($event) {
        return _vm.confirmDatePiker('endDate')
      },
      "cancel": function($event) {
        _vm.dlgView.inputShow = false
      }
    },
    model: {
      value: (_vm.currentDate),
      callback: function($$v) {
        _vm.currentDate = $$v
      },
      expression: "currentDate"
    }
  })] : _vm._e(), _vm._v(" "), (_vm.checkDlgViewName == 'beginDateForAgeStat') ? [_c('van-datetime-picker', {
    attrs: {
      "type": "date",
      "title": "选择年月日",
      "min-date": _vm.minDate,
      "max-date": new Date(_vm.thisYear, _vm.thisMonth, _vm.thisDate),
      "confirm-button-text": "完成"
    },
    on: {
      "confirm": function($event) {
        return _vm.confirmDatePiker('beginDateForAgeStat')
      },
      "cancel": function($event) {
        _vm.dlgView.inputShow = false
      }
    },
    model: {
      value: (_vm.currentDate),
      callback: function($$v) {
        _vm.currentDate = $$v
      },
      expression: "currentDate"
    }
  })] : _vm._e(), _vm._v(" "), (_vm.checkDlgViewName == 'endDateForAgeStat') ? [_c('van-datetime-picker', {
    attrs: {
      "type": "date",
      "title": "选择年月日",
      "min-date": _vm.minDate,
      "max-date": new Date(_vm.thisYear, _vm.thisMonth, _vm.thisDate),
      "confirm-button-text": "完成"
    },
    on: {
      "confirm": function($event) {
        return _vm.confirmDatePiker('endDateForAgeStat')
      },
      "cancel": function($event) {
        _vm.dlgView.inputShow = false
      }
    },
    model: {
      value: (_vm.currentDate),
      callback: function($$v) {
        _vm.currentDate = $$v
      },
      expression: "currentDate"
    }
  })] : _vm._e()], 2)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2264:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "stat-order -style-"
  }, [_c('stat-head', {
    attrs: {
      "stat-object": "staff"
    }
  }), _vm._v(" "), _c('stat-staff-head', {
    attrs: {
      "stat-type": 3
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "section-part tblform",
    staticStyle: {
      "margin": "10px 0"
    }
  }, [_c('div', {
    staticClass: "row space-around theme-border-bottom",
    staticStyle: {
      "padding": "2px 16px"
    }
  }, [_c('div', {
    staticClass: "center-date-nav"
  }, [(_vm.dateShortcuts) ? _c('pull-down-list', {
    attrs: {
      "selectList": _vm.dateShortcuts,
      "selectId": "name"
    },
    on: {
      "selectOne": _vm.statByDateShortcuts
    }
  }, [_c('span', {
    attrs: {
      "slot": "dlgTit"
    },
    slot: "dlgTit"
  }, [_vm._v("请选择")]), _vm._v(" "), (_vm.dateShortcuts) ? _c('span', {
    attrs: {
      "slot": "pleaseChose"
    },
    slot: "pleaseChose"
  }, [_vm._v(_vm._s(_vm.dateShortcuts[_vm.dateIdx].name))]) : [_c('span', {
    staticClass: "font-color-c",
    attrs: {
      "slot": "pleaseChose"
    },
    slot: "pleaseChose"
  }, [_vm._v("请选择")])]], 2) : _vm._e()], 1), _vm._v(" "), (_vm.departmentList && _vm.departmentList.length) ? _c('div', {
    staticClass: "dept"
  }, [_c('pull-down-list', {
    attrs: {
      "selectList": _vm.departmentList,
      "selectId": "deptName"
    },
    on: {
      "selectOne": _vm.changeDeptId
    }
  }, [_c('span', {
    attrs: {
      "slot": "dlgTit"
    },
    slot: "dlgTit"
  }, [_vm._v("员工部门")]), _vm._v(" "), _c('span', {
    attrs: {
      "slot": "pleaseChose"
    },
    slot: "pleaseChose"
  }, [_vm._v(_vm._s(_vm.defaultDeptName))])])], 1) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("统计日期")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail row align-center"
  }, [_c('div', {
    staticClass: "row row-l-r start",
    staticStyle: {
      "padding": "0"
    },
    on: {
      "click": function($event) {
        return _vm.showInputDlg('beginDate')
      }
    }
  }, [(_vm.beginDate) ? [_c('span', [_vm._v(_vm._s(_vm.beginDate))])] : [_c('span', {
    staticClass: "font-color-c"
  }, [_vm._v("请选择开始日期")])], _vm._v(" "), _c('i', {
    staticClass: "iconfont iconarrow-down-1 font-color-c",
    staticStyle: {
      "margin-top": "2px",
      "font-size": "12px"
    }
  })], 2), _vm._v(" "), _c('div', [_vm._v("~")]), _vm._v(" "), _c('div', {
    staticClass: "row row-l-r start",
    staticStyle: {
      "padding": "0"
    },
    on: {
      "click": function($event) {
        return _vm.showInputDlg('endDate')
      }
    }
  }, [(_vm.endDate) ? [_c('span', [_vm._v(_vm._s(_vm.endDate))])] : [_c('span', {
    staticClass: "font-color-c"
  }, [_vm._v("请选择结束日期")])], _vm._v(" "), _c('i', {
    staticClass: "iconfont iconarrow-down-1 font-color-c",
    staticStyle: {
      "margin-top": "2px",
      "font-size": "12px"
    }
  })], 2)])]), _vm._v(" "), _c('div', {
    staticClass: "theme-border-bottom",
    staticStyle: {
      "padding": "15px 0"
    }
  }, [_c('div', {
    staticClass: "largest-btn theme-btn-bg",
    on: {
      "click": _vm.doQuery
    }
  }, [_vm._v("查询")])])]), _vm._v(" "), _c('div', {
    staticClass: "section-part"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    ref: "respsTable",
    staticClass: "tblform section-part resps-table",
    staticStyle: {
      "border": "0",
      "margin-bottom": "0"
    },
    attrs: {
      "id": "respsTable"
    }
  }, [_c('div', {
    staticClass: "resps-table-box",
    style: ({
      'width': 8 * _vm.tableThMinWidth + 'px'
    }),
    attrs: {
      "id": "respsTableBox"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.scrolledTop > 0),
      expression: "scrolledTop > 0"
    }],
    staticClass: "table-fix-head",
    style: ({
      'top': _vm.scrolledTop + 'px',
      'width': 8 * _vm.tableThMinWidth + 'px'
    })
  }, [_c('table', [_c('tr', {
    attrs: {
      "id": "table-fix-head-th"
    }
  }, _vm._l((_vm.tableTheadList), function(t) {
    return _c('th', [_c('div', [_vm._v(_vm._s(t.title))])])
  }), 0)])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.scrolledTop > 0 && _vm.scrolledLeft > 0),
      expression: "scrolledTop > 0 && scrolledLeft > 0"
    }],
    staticClass: "table-fix-th",
    style: ({
      'top': _vm.scrolledTop + 'px',
      'left': _vm.scrolledLeft + 'px'
    })
  }, [_c('table', [_c('tr', {
    attrs: {
      "id": "table-fix-th"
    }
  }, _vm._l((_vm.fixNumber), function(d) {
    return _c('th', [_c('div', [_vm._v(_vm._s(_vm.tableTheadList[d].title))])])
  }), 0)])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.scrolledLeft > 0),
      expression: "scrolledLeft > 0"
    }],
    staticClass: "table-fix-td",
    style: ({
      'left': _vm.scrolledLeft + 'px'
    })
  }, [_c('table', [_c('tr', {
    attrs: {
      "id": "table-fix-col-td"
    }
  }, _vm._l((_vm.fixNumber), function(d) {
    return _c('th', [_c('div', [_vm._v(_vm._s(_vm.tableTheadList[d].title))])])
  }), 0), _vm._v(" "), _vm._l((_vm.coachLessonCostList), function(s, idx) {
    return _c('tr', {
      attrs: {
        "id": "fix-col-td-" + idx
      }
    }, [_c('td', [_vm._v(_vm._s(s.coachName))])])
  }), _vm._v(" "), _vm._m(1)], 2)]), _vm._v(" "), _c('table', [_c('tr', {
    attrs: {
      "id": "table-th"
    }
  }, _vm._l((_vm.tableTheadList), function(t) {
    return _c('th', [_c('div', [_vm._v(_vm._s(t.title))])])
  }), 0), _vm._v(" "), _vm._l((_vm.coachLessonCostList), function(s, idx) {
    return _c('tr', [_c('td', {
      attrs: {
        "id": "rel-col-td-" + idx
      }
    }, [_vm._v(_vm._s(s.coachName))]), _vm._v(" "), _c('td', [(_vm.coachSaleMap[s.coachId]) ? [_vm._v("￥" + _vm._s(_vm.coachSaleMap[s.coachId]))] : _vm._e()], 2), _vm._v(" "), _c('td', [(s.lessonCnt) ? [_vm._v(_vm._s(s.lessonCnt) + " 次")] : _vm._e()], 2), _vm._v(" "), _c('td', [(s.lessonFee) ? [_vm._v("￥" + _vm._s(_vm.g.Util.round(s.lessonFee)))] : _vm._e()], 2), _vm._v(" "), _c('td', [(s.custLessonCnt) ? [_vm._v(_vm._s(s.custLessonCnt) + " 次")] : _vm._e()], 2), _vm._v(" "), _c('td', [(s.valueCardCost) ? [_vm._v("￥" + _vm._s(_vm.g.Util.round(s.valueCardCost)))] : _vm._e()], 2), _vm._v(" "), _c('td', [(s.timesCardCost) ? [_vm._v(_vm._s(_vm.g.Util.round(s.timesCardCost)) + " 次")] : _vm._e()], 2), _vm._v(" "), _c('td', [(s.timesCardCostAmount) ? [_vm._v("￥" + _vm._s(_vm.g.Util.round(s.timesCardCostAmount)))] : _vm._e()], 2), _vm._v(" "), _c('td', [_c('ul', {
      staticClass: "opt-list row start",
      staticStyle: {
        "padding": "0"
      }
    }, [(_vm.coachSaleMap[s.coachId]) ? _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.viewCoachSales(s.coachId)
        }
      }
    }, [_vm._v("销售明细")])]) : _vm._e(), _vm._v(" "), (_vm.coachSaleMap[s.coachId] && (s.lessonCnt || s.custLessonCnt)) ? _c('li', {
      staticClass: "theme-font-color",
      staticStyle: {
        "padding": "0 8px"
      }
    }, [_vm._v("|")]) : _vm._e(), _vm._v(" "), (s.lessonCnt || s.custLessonCnt) ? _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.viewPrivateLesson(s.coachId)
        }
      }
    }, [_vm._v("上课明细")])]) : _vm._e()])])])
  }), _vm._v(" "), (_vm.coachLessonCostList.length > 0) ? _c('tr', {
    staticClass: "sum"
  }, [_vm._m(2), _vm._v(" "), _c('td', [_vm._v("￥"), _c('b', [_vm._v(_vm._s(_vm.sum.salesAmount))])]), _vm._v(" "), _c('td', [_c('b', [_vm._v(_vm._s(_vm.sum.lessonCnt))]), _vm._v(" 次")]), _vm._v(" "), _c('td', [_vm._v("￥"), _c('b', [_vm._v(_vm._s(_vm.sum.lessonFee))])]), _vm._v(" "), _c('td', [_c('b', [_vm._v(_vm._s(_vm.sum.custLessonCnt))]), _vm._v(" 次")]), _vm._v(" "), _c('td', [_vm._v("￥"), _c('b', [_vm._v(_vm._s(_vm.sum.valueCardCost))])]), _vm._v(" "), _c('td', [_c('b', [_vm._v(_vm._s(_vm.sum.timesCardCost))]), _vm._v(" 次")]), _vm._v(" "), _c('td', [(_vm.sum.timesCardCostAmount) ? [_vm._v("￥"), _c('b', [_vm._v(_vm._s(_vm.sum.timesCardCostAmount))])] : _vm._e()], 2), _vm._v(" "), _c('td')]) : _vm._e()], 2)])]), _vm._v(" "), (_vm.coachLessonCostList && !_vm.coachLessonCostList.length) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("暂无数据")]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "section-part"
  }, [_vm._m(3), _vm._v(" "), _c('van-tabs', {
    attrs: {
      "swipe-threshold": 3
    },
    model: {
      value: (_vm.active),
      callback: function($$v) {
        _vm.active = $$v
      },
      expression: "active"
    }
  }, _vm._l((_vm.tabData), function(c, idx) {
    return _c('van-tab', {
      key: idx,
      attrs: {
        "title": '按' + c.name + '排名'
      }
    }, [(c.active == idx + 1) ? _c('div', {
      staticClass: "tblform"
    }, [_c('table', [_c('tr', [_c('th', {
      staticStyle: {
        "width": "40px"
      },
      attrs: {
        "align": "center"
      }
    }, [_vm._v("排名")]), _c('th', [_vm._v("教练")]), _c('th', {
      staticStyle: {
        "width": "110px"
      }
    }, [_vm._v(_vm._s(c.name))])]), _vm._v(" "), _vm._l((_vm.statLists[idx]), function(s, sidx) {
      return _c('tr', [_c('td', [_c('span', {
        staticClass: "order"
      }, [_vm._v(_vm._s(sidx + 1))])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(s.coachName))]), _vm._v(" "), _c('td', [(idx === 0) ? _c('span', [_vm._v(_vm._s(s.lessonCnt))]) : _vm._e(), _vm._v(" "), (idx === 1) ? _c('span', [_vm._v(_vm._s(s.memberCnt))]) : _vm._e(), _vm._v(" "), (idx === 2) ? _c('span', [_vm._v(_vm._s(_vm.g.Util.round(s.avgScore)))]) : _vm._e(), _vm._v("\n                  " + _vm._s(c.unitType) + "\n                ")])])
    })], 2), _vm._v(" "), (_vm.statLists[idx]) ? [(!_vm.statLists[idx].length) ? _c('div', {
      staticClass: "no-data"
    }, [_vm._v("暂无数据")]) : _vm._e()] : _vm._e()], 2) : _vm._e()])
  }), 1)], 1), _vm._v(" "), (_vm.salesChartData && _vm.salesChartData.length > 1) ? _c('section', {
    staticClass: "item tblform"
  }, [_vm._m(4), _vm._v(" "), _c('div', [_c('chart', {
    staticClass: "piechart",
    attrs: {
      "options": _vm.salesAmountStatOption
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "consume-status"
  }, [_c('table', [_vm._m(5), _vm._v(" "), _vm._l((_vm.salesNames), function(s, idx) {
    return _c('tr', {
      staticClass: "theme-border-bottom"
    }, [_c('td', [_vm._v(_vm._s(s.name))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(s.value))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(s.percent) + "%")])])
  })], 2)])]) : _vm._e(), _vm._v(" "), _c('bottom-nav', {
    attrs: {
      "menu": "stat"
    }
  }), _vm._v(" "), _c('van-action-sheet', {
    attrs: {
      "close-on-click-overlay": false
    },
    model: {
      value: (_vm.dlgView.inputShow),
      callback: function($$v) {
        _vm.$set(_vm.dlgView, "inputShow", $$v)
      },
      expression: "dlgView.inputShow"
    }
  }, [(_vm.checkDlgViewName == 'beginDate') ? [_c('van-datetime-picker', {
    attrs: {
      "type": "date",
      "title": "选择年月日",
      "min-date": _vm.minDate,
      "max-date": new Date(_vm.thisYear, _vm.thisMonth, _vm.thisDate),
      "confirm-button-text": "完成"
    },
    on: {
      "confirm": function($event) {
        return _vm.confirmDatePiker('beginDate')
      },
      "cancel": function($event) {
        _vm.dlgView.inputShow = false
      }
    },
    model: {
      value: (_vm.currentDate),
      callback: function($$v) {
        _vm.currentDate = $$v
      },
      expression: "currentDate"
    }
  })] : _vm._e(), _vm._v(" "), (_vm.checkDlgViewName == 'endDate') ? [_c('van-datetime-picker', {
    attrs: {
      "type": "date",
      "title": "选择年月日",
      "min-date": _vm.minDate,
      "max-date": new Date(_vm.thisYear, _vm.thisMonth, _vm.thisDate),
      "confirm-button-text": "完成"
    },
    on: {
      "confirm": function($event) {
        return _vm.confirmDatePiker('endDate')
      },
      "cancel": function($event) {
        _vm.dlgView.inputShow = false
      }
    },
    model: {
      value: (_vm.currentDate),
      callback: function($$v) {
        _vm.currentDate = $$v
      },
      expression: "currentDate"
    }
  })] : _vm._e()], 2), _vm._v(" "), (_vm.dlg.salesView) ? _c('van-dialog', {
    staticClass: "van-has-overlay section-part",
    attrs: {
      "show-cancel-button": false,
      "show-confirm-button": false
    },
    model: {
      value: (_vm.dlg.salesView),
      callback: function($$v) {
        _vm.$set(_vm.dlg, "salesView", $$v)
      },
      expression: "dlg.salesView"
    }
  }, [_c('section', {
    staticStyle: {
      "margin-bottom": "0",
      "border": "0"
    }
  }, [_c('div', {
    staticClass: "dlg-head theme-border-bottom"
  }, [_vm._v("销售明细")]), _vm._v(" "), _c('div', {
    staticClass: "dlg-cont",
    staticStyle: {
      "padding": "0"
    }
  }, [_c('div', {
    staticClass: "course-records -style- tblform"
  }, [_c('div', {
    staticClass: "ret"
  }, [(_vm.dlg.mcpList && _vm.dlg.mcpList.length > 0) ? _c('div', _vm._l((_vm.dlg.mcpList), function(m, idx) {
    return _c('dl', {
      staticClass: "theme-border-bottom"
    }, [_c('dd', [_c('label', [_vm._v("教练")]), _c('span', {
      staticClass: "dd-span-wid"
    }, [_vm._v(_vm._s(m.salesName))])]), _vm._v(" "), _c('dd', [_c('label', [_vm._v("创建时间")]), _c('span', {
      staticClass: "dd-span-wid"
    }, [_vm._v(_vm._s(m.createTime))])]), _vm._v(" "), _c('dd', [_c('label', [_vm._v("会员")]), _c('span', {
      staticClass: "dd-span-wid"
    }, [_vm._v(_vm._s(m.memberName))])]), _vm._v(" "), _c('dd', [_c('label', [_vm._v("会员卡名称")]), _c('span', {
      staticClass: "dd-span-wid"
    }, [_vm._v(_vm._s(m.cardName))])]), _vm._v(" "), _c('dd', [_c('label', [_vm._v("卡类型")]), _c('span', {
      staticClass: "dd-span-wid"
    }, [_vm._v(_vm._s(_vm.g.Dict.CardType[m.cardType]))])]), _vm._v(" "), _c('dd', [_c('label', [_vm._v("支付类型")]), _c('span', {
      staticClass: "dd-span-wid"
    }, [_vm._v(_vm._s(_vm.g.Dict.CardPaymentType[m.paymentType]))])]), _vm._v(" "), _c('dd', [_c('label', [_vm._v("支付方式")]), _c('span', {
      staticClass: "dd-span-wid"
    }, [_vm._v(_vm._s(_vm.g.Dict.CardPaymentChannel[m.paymentChannel]))])]), _vm._v(" "), _c('dd', [_c('label', [_vm._v("充值金额")]), _c('span', {
      staticClass: "dd-span-wid"
    }, [_vm._v("￥" + _vm._s(m.usableAmount))])]), _vm._v(" "), _c('dd', [_c('label', [_vm._v("实收金额")]), _c('span', {
      staticClass: "dd-span-wid"
    }, [(m.deposit) ? [_vm._v("￥" + _vm._s(m.paymentAmount) + " + "), _c('span', {
      staticClass: "font-color-9"
    }, [_vm._v("(订金)")]), _vm._v(" " + _vm._s(m.mdeposit))] : [_vm._v("￥" + _vm._s(m.paymentAmount))]], 2)]), _vm._v(" "), _c('dd', [_c('label', [_vm._v("销售业绩")]), _c('span', {
      staticClass: "dd-span-wid"
    }, [(m.salesId) ? [_vm._v("￥" + _vm._s(m.paymentAmount))] : (m.salesConfList) ? _vm._l((m.salesConfList), function(sc) {
      return (sc.split(':')[0] == _vm.dlg.selectCoachId) ? _c('div', [_vm._v("￥" + _vm._s(parseFloat(sc.split(':')[2])))]) : _vm._e()
    }) : _vm._e()], 2)]), _vm._v(" "), _c('dd', [_c('label', [_vm._v("创建人")]), _c('span', {
      staticClass: "dd-span-wid"
    }, [_vm._v(_vm._s(m.createUname))])])])
  }), 0) : _c('div', {
    staticClass: "none"
  }, [_c('i', {
    staticClass: "iconfont icon-none"
  }), _vm._v("暂无数据\n              ")])])])]), _vm._v(" "), _c('ul', {
    staticClass: "ul-li-fl dlg-confirm-btns theme-border-top"
  }, [_c('li', {
    staticClass: "cancel btn font-color-9",
    on: {
      "click": function($event) {
        _vm.dlg.salesView = false
      }
    }
  }, [_vm._v("关闭")])])])]) : _vm._e(), _vm._v(" "), (_vm.dlg.pcLessonView) ? _c('van-popup', {
    style: ({
      height: '100%',
      width: '100%'
    }),
    attrs: {
      "position": "right"
    },
    model: {
      value: (_vm.dlg.pcLessonView),
      callback: function($$v) {
        _vm.$set(_vm.dlg, "pcLessonView", $$v)
      },
      expression: "dlg.pcLessonView"
    }
  }, [_c('div', {
    staticClass: "page-head"
  }, [_c('div', {
    staticClass: "move",
    on: {
      "click": function($event) {
        _vm.dlg.pcLessonView = false
      }
    }
  }, [_c('i', {
    staticClass: "iconfont iconarrow-l"
  })]), _vm._v("\n        私教上课明细\n      ")]), _vm._v(" "), _c('section', {
    staticClass: "tblform theme-border-bottom",
    staticStyle: {
      "border-bottom-width": "10px",
      "margin-bottom": "0",
      "border-top": "0"
    }
  }, [_c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("教练")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_c('pull-down-list', {
    attrs: {
      "selectList": _vm.coachList,
      "selectId": "coachName",
      "changeId": "coachId"
    },
    on: {
      "selectOne": _vm.changeCoachForPlList
    },
    model: {
      value: (_vm.dlg.selectCoachId),
      callback: function($$v) {
        _vm.$set(_vm.dlg, "selectCoachId", $$v)
      },
      expression: "dlg.selectCoachId"
    }
  }, [_c('span', {
    attrs: {
      "slot": "dlgTit"
    },
    slot: "dlgTit"
  }, [_vm._v("教练")]), _vm._v(" "), (_vm.selectCoachName) ? _c('span', {
    attrs: {
      "slot": "pleaseChose"
    },
    slot: "pleaseChose"
  }, [_vm._v(_vm._s(_vm.selectCoachName))]) : [_c('span', {
    staticClass: "font-color-c",
    attrs: {
      "slot": "pleaseChose"
    },
    slot: "pleaseChose"
  }, [_vm._v("请选择")])]], 2)], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row theme-border-bottom"
  }, [_c('div', {
    staticStyle: {
      "width": "100%"
    }
  }, [_vm._v("会员私教课")]), _vm._v(" "), _c('div', {
    staticClass: "filter-list"
  }, [_c('ul', {
    staticClass: "ul-li-fl recent-list"
  }, _vm._l((_vm.memberPlStatList), function(s) {
    return _c('li', {
      key: s.memberId,
      class: {
        'active': _vm.selectMemberId === s.memberId
      },
      on: {
        "click": function($event) {
          return _vm.queryMemberPlStatByMemberId(s.memberId)
        }
      }
    }, [_c('div', [_vm._v(_vm._s(s.memberName) + "(" + _vm._s(s.lessonCnt) + ")")])])
  }), 0)])]), _vm._v(" "), _c('div', {
    staticClass: "theme-border-bottom row"
  }, [_c('div', {
    staticStyle: {
      "width": "100%"
    }
  }, [_vm._v("私教课程名")]), _vm._v(" "), _c('div', {
    staticClass: "filter-list"
  }, [_c('ul', {
    staticClass: "ul-li-fl recent-list"
  }, _vm._l((_vm.courseStatList), function(s) {
    return _c('li', {
      key: s.courseId,
      class: {
        'active': _vm.selectCourseId === s.courseId
      },
      on: {
        "click": function($event) {
          return _vm.queryMemberPlStatByCourse(s.courseId)
        }
      }
    }, [_c('div', [_vm._v(_vm._s(s.courseName) + "(" + _vm._s(s.lessonCnt) + ")")])])
  }), 0)])])]), _vm._v(" "), _c('section', {
    staticClass: "tblform",
    staticStyle: {
      "border-bottom-width": "10px",
      "margin-bottom": "0",
      "border-top": "0"
    }
  }, [_c('div', {
    staticClass: "row theme-border-bottom"
  }, [_c('div', {}, [_vm._v("未结束课时数："), _c('span', {
    staticClass: "red-pink"
  }, [_vm._v(_vm._s(_vm.plDetailSum.lessonCnt - _vm.plDetailSum.finishedLessonCnt))]), _vm._v(" 节")])]), _vm._v(" "), _c('div', {
    staticClass: "row theme-border-bottom passed-less-stat"
  }, [_c('div', {
    staticStyle: {
      "width": "100%"
    }
  }, [_vm._v("已结束课合计")]), _vm._v(" "), _c('div', {
    staticClass: "theme-border-top",
    staticStyle: {
      "width": "45%"
    }
  }, [_c('div', {
    staticStyle: {
      "margin-bottom": "8px"
    }
  }, [_c('label', {
    staticClass: "font-color-9"
  }, [_vm._v("已结束课时数：")]), _c('span', [_vm._v(_vm._s(_vm.plDetailSum.finishedLessonCnt) + "节")])]), _vm._v(" "), _c('div', [_c('label', {
    staticClass: "font-color-9"
  }, [_vm._v("会员储值卡消费：")]), _c('span', [_vm._v("￥" + _vm._s(_vm.g.Util.round(_vm.plDetailSum.memberCardPaymentAmount)))])])]), _vm._v(" "), _c('div', {
    staticClass: "theme-border-top",
    staticStyle: {
      "width": "55%"
    }
  }, [_c('div', {
    staticStyle: {
      "margin-bottom": "8px"
    }
  }, [_c('label', {
    staticClass: "font-color-9"
  }, [_vm._v("教练课时费：")]), _c('span', [_vm._v("￥" + _vm._s(_vm.plDetailSum.coachLessonFee))])]), _vm._v(" "), _c('div', [_c('label', {
    staticClass: "font-color-9"
  }, [_vm._v("会员次卡消费：")]), _c('span', [_vm._v(_vm._s(_vm.g.Util.round(_vm.plDetailSum.memberCardPaymentTimes)) + " 次"), (_vm.plDetailSum.sumOfTimesCardAmount) ? [_vm._v("(" + _vm._s(_vm.plDetailSum.sumOfTimesCardAmount) + "元)")] : _vm._e()], 2)])])]), _vm._v(" "), _c('div', {
    staticClass: "course-records -style- tblform"
  }, [_c('div', {
    staticClass: "ret"
  }, [(_vm.dlg.privateLessonList && _vm.dlg.privateLessonList.length > 0) ? _c('div', _vm._l((_vm.dlg.privateLessonList), function(m, idx) {
    return _c('dl', {
      staticClass: "theme-border-bottom"
    }, [_c('dd', [_c('label', [_vm._v("学员")]), _c('span', {
      staticClass: "dd-span-wid theme-font-color",
      on: {
        "click": function($event) {
          return _vm.viewMember(m)
        }
      }
    }, [_vm._v(_vm._s(m.memberName))])]), _vm._v(" "), _c('dd', [_c('label', [_vm._v("上课类型")]), _c('span', {
      staticClass: "dd-span-wid"
    }, [(m.ltype === 1) ? [_vm._v("常规课")] : [_vm._v("体验课")]], 2)]), _vm._v(" "), _c('dd', [_c('label', [_vm._v("课程名")]), _c('span', {
      staticClass: "dd-span-wid"
    }, [_vm._v(_vm._s(m.courseName))])]), _vm._v(" "), _c('dd', [_c('label', [_vm._v("上课日期")]), _c('span', {
      staticClass: "dd-span-wid"
    }, [_vm._v(_vm._s(m.lessonDate))])]), _vm._v(" "), _c('dd', [_c('label', [_vm._v("上课时间")]), _c('span', {
      staticClass: "dd-span-wid"
    }, [_vm._v(_vm._s(m.lessonTimeDesc))])]), _vm._v(" "), _c('dd', [_c('label', [_vm._v("状态")]), _c('span', {
      class: {
        'green': m.status === 9,
        'gray': m.status !== 9
      }
    }, [_vm._v(_vm._s(_vm.g.Dict.PcLessonStatus[m.status]))])]), _vm._v(" "), (m.checkinTime) ? _c('dd', [_c('label', [_vm._v("签到时间")]), _c('span', {
      staticClass: "dd-span-wid"
    }, [_vm._v(_vm._s(m.checkinTime))])]) : _vm._e(), _vm._v(" "), (m.memberCardName) ? _c('dd', [_c('label', [_vm._v("计费会员卡")]), _c('span', {
      staticClass: "dd-span-wid"
    }, [_vm._v(_vm._s(m.memberCardName))])]) : _vm._e(), _vm._v(" "), (_vm.enablePrivateCoachScore) ? _c('dd', [_c('label', [_vm._v("教练得分")]), _c('span', {
      staticClass: "dd-span-wid"
    }, [_vm._v(_vm._s(m.coachScore))])]) : _vm._e(), _vm._v(" "), _c('dd', [_c('label', [_vm._v("本次卡消费")]), _c('span', {
      staticClass: "dd-span-wid"
    }, [(m.memberCardType > 1) ? [_vm._v(_vm._s(m.memberCardPayment) + " " + _vm._s(_vm.g.Dict.CardUnitName[m.memberCardType]))] : [_vm._v("不计费")], (m.memberCardType === 2 && m.memberCardPaymentAmount) ? [_c('span', {
      staticClass: "spt"
    }, [_vm._v("|")]), _vm._v("￥" + _vm._s(m.memberCardPaymentAmount))] : _vm._e()], 2)]), _vm._v(" "), (m.coachLessonFee) ? _c('dd', [_c('label', [_vm._v("教练课时单价")]), _c('span', {
      staticClass: "dd-span-wid"
    }, [_vm._v("￥" + _vm._s(m.coachLessonFee))])]) : _vm._e()])
  }), 0) : _c('div', {
    staticClass: "none"
  }, [_c('i', {
    staticClass: "iconfont icon-none"
  }), _vm._v("暂无数据\n            ")])])])])]) : _vm._e(), _vm._v(" "), _c('van-popup', {
    style: ({
      height: '100%',
      width: '100%'
    }),
    attrs: {
      "position": "right"
    },
    model: {
      value: (_vm.viewMemberDlg),
      callback: function($$v) {
        _vm.viewMemberDlg = $$v
      },
      expression: "viewMemberDlg"
    }
  }, [_c('div', {
    staticClass: "page-head"
  }, [_c('div', {
    staticClass: "move",
    on: {
      "click": function($event) {
        _vm.viewMemberDlg = false
      }
    }
  }, [_c('i', {
    staticClass: "iconfont iconarrow-l"
  })]), _vm._v(" "), _c('div', {
    staticClass: "tit"
  }, [_vm._v(" " + _vm._s(_vm.selectMemberName) + " ")])]), _vm._v(" "), (_vm.viewMemberDlg) ? [_c('div', [_c('member-base', {
    attrs: {
      "member-id": _vm.selectMemberId,
      "readonly": true,
      "select-member": _vm.member
    }
  })], 1)] : _vm._e()], 2)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd theme-padding theme-border-bottom"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("私教业绩统计")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', {
    staticClass: "bold"
  }, [_c('td', {
    staticClass: "font-color-9",
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      "id": "fix-col-td-total"
    }
  }, [_vm._v("合计")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "gray",
    attrs: {
      "id": "rel-col-td-total"
    }
  }, [_c('b', [_vm._v("合计")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd theme-padding theme-border-bottom"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("私教上课业绩排名")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd theme-padding theme-border-bottom"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("私教销售业绩统计图")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', {
    staticClass: "theme-border-bottom"
  }, [_c('th', {
    staticClass: "font-color-c"
  }, [_vm._v("销售人员")]), _vm._v(" "), _c('th', {
    staticClass: "font-color-c"
  }, [_vm._v("销售总额")]), _vm._v(" "), _c('th', {
    staticClass: "font-color-c"
  }, [_vm._v("销售比例")])])
}]}

/***/ }),

/***/ 919:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1807)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1465),
  /* template */
  __webpack_require__(2117),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-3ffcb7d1",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 920:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1883)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1466),
  /* template */
  __webpack_require__(2191),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-776a9986",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 921:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1738)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1467),
  /* template */
  __webpack_require__(2048),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-06d53e1b",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 922:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1770)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1468),
  /* template */
  __webpack_require__(2079),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-2093266a",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 923:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1771)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1469),
  /* template */
  __webpack_require__(2080),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-237fb220",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 924:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1762)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1470),
  /* template */
  __webpack_require__(2072),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-1d22a2ce",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 925:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1875)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1471),
  /* template */
  __webpack_require__(2183),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-6f45ffc0",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 926:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1914)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1472),
  /* template */
  __webpack_require__(2223),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-9f24264c",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 927:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1939)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1473),
  /* template */
  __webpack_require__(2248),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-d7664212",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 928:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1822)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1474),
  /* template */
  __webpack_require__(2132),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-4668ac58",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 929:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1805)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1475),
  /* template */
  __webpack_require__(2115),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-3dc3cf05",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 930:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1900)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1476),
  /* template */
  __webpack_require__(2208),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-837bed38",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 931:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1916)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1477),
  /* template */
  __webpack_require__(2226),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-a2010386",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 932:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1740)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1478),
  /* template */
  __webpack_require__(2050),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-0823e7ca",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 933:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1956)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1479),
  /* template */
  __webpack_require__(2264),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-ee0e3342",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 934:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1798)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1480),
  /* template */
  __webpack_require__(2108),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-3a36f2b4",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 935:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1898)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1481),
  /* template */
  __webpack_require__(2206),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-82060c96",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 936:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1902)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1482),
  /* template */
  __webpack_require__(2210),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-87194c2a",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 937:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1865)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1483),
  /* template */
  __webpack_require__(2173),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-64a6df9a",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 938:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1867)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1484),
  /* template */
  __webpack_require__(2176),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-68476eca",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 955:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(966)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(964),
  /* template */
  __webpack_require__(976),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 959:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(982)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(980),
  /* template */
  __webpack_require__(1009),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-245766ee",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 961:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1015)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1011),
  /* template */
  __webpack_require__(1018),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-4c495ce8",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 962:
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

/***/ 963:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1014)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1010),
  /* template */
  __webpack_require__(1017),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-282eb559",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 964:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ajax_js__ = __webpack_require__(962);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 965:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(764)(false);
// imports


// module
exports.push([module.i, ".img-upload-list{margin-top:10px}.img-upload-list-item{display:inline-block;width:100px;height:100px;text-align:center;line-height:100px;margin:0 15px 15px 0;border-radius:4px;position:relative;box-shadow:0 1px 1px rgba(0,0,0,.1)}.img-upload-list-item img{width:100%;height:100%;border:0}.img-upload-list-cover{display:none;position:absolute;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,.6)}.del-img{position:absolute;top:-5px;right:-5px;width:20px;height:20px;line-height:20px;border-radius:100%;text-align:center;background:#333;color:#fff}.img-upload-list-item:hover .img-upload-list-cover{display:block}.img-upload-list-cover i{color:#fff;font-size:20px;cursor:pointer;margin:0 2px}.img-dlg{text-align:center;margin:0}.img-dlg img{margin:15px 0}", ""]);

// exports


/***/ }),

/***/ 966:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(965);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(765)("ab67c0e2", content, true, {});

/***/ }),

/***/ 976:
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

/***/ }),

/***/ 979:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1792)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1460),
  /* template */
  __webpack_require__(2102),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-32c7fff4",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 980:
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

// 引用事例
// import Calendar from './../../components/calendar/calendar.vue';
// <Calendar @queryMonth="queryMonth(arguments)"
// @querySelectedDay="querySelectedDay"
// :has-marked-prop="checkinDateId"   //注意，这里的checkinDateId是数组，也可以是数组对象
// :max-date='{year:year,month:month}'
// :min-date="{year:year-10,month:month}"
// v-if="hasRequest">
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "calendar",

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

    cantPull: {
      type: Boolean
    },

    seeFutureDay: {
      type: Boolean,
      default: true
    },

    presentDate: {
      type: String
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
      weekList: ['日', '一', '二', '三', '四', '五', '六'],
      dateList: [],
      dateListCopy: [],
      year: '',
      month: '',
      currentDate: new Date(),
      changeDate: new Date(),
      pikerShow: false,
      thisIndex: '',
      thisIndexObject: '',
      dateShow: true,
      showDate: false,
      hasMarked: null,
      cantPullProp: true,
      maxDatePicker: null,
      minDatePicker: null
    };
  },

  mounted() {
    this.cantPullProp = !this.cantPull ? true : false;
    if (this.presentDate) {
      let dateData = this.presentDate.split('-');
      let date = new Date(parseInt(dateData[0]), parseInt(dateData[1]) - 1, parseInt(dateData[2]));
      this.initDate(date, () => {
        let _this = this;
        this.dateList.map((item, idx) => {
          if (item.iDate == parseInt(dateData[2])) {
            _this.thisIndexObject = idx;
          }
        });
      });
    } else {
      this.initDate();
    }
    this.hasMarked = this.hasMarkedProp;
    this.maxDatePicker = new Date(this.maxDate.year, this.maxDate.month);
    this.minDatePicker = new Date(this.minDate.year, this.minDate.month);
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
      let oDate = this.pastTag ? this.currentDate : new Date();
      this.year = oDate.getFullYear();
      this.month = oDate.getMonth();
      if (this.maxDate != null) {
        if (this.changeDate.getFullYear() > this.maxDate.year) {
          alert('抱歉，您选择的时间不支持查询');
          return false;
        } else if (this.changeDate.getFullYear() == this.maxDate.year && this.currentDate.getMonth() > this.maxDate.month) {
          alert('抱歉，您选择的时间不支持查询');
          return false;
        }
      }
      if (!this.pastTag) {
        oDate = this.changeDate;
      }
      this.initDate(oDate);
      this.pikerShow = false;
    },

    getColumnValue() {
      this.changeDate = this.currentDate;
    },

    showDatePiker() {
      this.pikerShow = !this.pikerShow;
    },

    initDate(time, callBack) {
      let oDate = time != undefined && time != '' ? time : new Date();
      this.year = oDate.getFullYear();
      this.month = oDate.getMonth();
      if (time) {
        this.resetDateList(oDate, callBack);
      } else {
        this.getMonthPrefix(this.month, this.year);
        this.getDateList(this.month, this.year);
      }
    },

    getMonthPrefix(month, year) {
      if (month < 9) {
        this.todayDate = year + '年0' + (month + 1) + '月';
      } else {
        this.todayDate = year + '年' + (month + 1) + '月';
      }
    },

    getDateList(month, year) {
      this.dateList = [];
      let oDate = new Date();
      let fullYearAllDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      let thisMonthDays = fullYearAllDays[month];
      if (month == 1) {
        if (year % 4 == 0 && year % 100 !== 0 || year % 400 == 0) {
          thisMonthDays = 29;
        }
      }
      oDate.setYear(year);
      oDate.setMonth(month, 1); // 把 oDate.setMonth(month)  改为 oDate.setMonth(month, 1)
      //oDate.setDate(1)
      let week = oDate.getDay();
      for (let j = 0; j < week; j++) {
        this.dateList.push('');
      }
      for (let i = 1; i < thisMonthDays + 1; i++) {
        this.dateList.push({ iDate: i, hasMarkedList: false, unSign: false });
      }
      for (let i = 0; i < this.hasMarked.length; i++) {
        for (let j = 0; j < this.dateList.length; j++) {
          if (this.hasMarked[i].constructor == Object) {
            if (this.hasMarked[i].hasRecorder == this.dateList[j].iDate) {
              this.dateList[j].hasMarkedList = true;
              this.dateList[j].unSign = !this.hasMarked[i].unSign;
              break;
            }
          } else {
            if (this.hasMarked[i] == this.dateList[j].iDate) {
              this.dateList[j].hasMarkedList = true;
              break;
            }
          }
        }
      }
      this.thisIndex = null;
      this.thisIndexObject = null;
    },

    resetDateList(time, callBack) {
      let beginDate = time ? new Date(time.getFullYear(), this.month, 1) : new Date(this.year, this.month, 1);
      let endDate = time ? new Date(time.getFullYear(), this.month + 1, 0) : new Date(this.year, this.month + 1, 0);
      this.$emit('queryMonth', beginDate, endDate, false);
      this.callDate(callBack);
    },

    callDate(callBack) {
      this.getMonthPrefix(this.month, this.year);
      this.getDateList(this.month, this.year);
      if (callBack) {
        callBack();
      }
    },

    setPrevMonth() {
      this.month--;
      if (this.month < 0) {
        this.month = 11;
        this.year--;
      }
      this.resetDateList();
    },

    setNextMonth() {
      if (!this.seeFutureDay) {
        if (this.maxDate != null && this.month == this.maxDate.month && this.year == this.maxDate.year) {
          this.$notify({ type: 'warning', message: '亲，下个月还没到，无法查询哦' });
          return false;
        }
      }
      this.month++;
      if (this.month > 11) {
        this.month = 0;
        this.year++;
      }
      this.resetDateList();
    },

    seeThisDayRecorder(i, date) {
      if (!this.seeFutureDay) {
        let oDate = new Date();
        let year = oDate.getFullYear();
        let month = oDate.getMonth();
        let todDate = oDate.getDate();

        if (date > todDate && month == this.month && year == this.year) {
          this.$notify({ type: 'warning', message: '亲，不能选择未来的日期哦' });
          return false;
        }
      }
      if (this.hasMarked.length > 0) {
        if (this.hasMarked[0].constructor != Object) this.thisIndex = i;
      }
      this.thisIndexObject = i;
      this.$emit('querySelectedDay', date);
    },

    showDateFunc() {
      this.dateShow = !this.dateShow;
    }
  }
});

/***/ }),

/***/ 981:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(764)(false);
// imports


// module
exports.push([module.i, ".section-part[data-v-245766ee]{margin:0;border-top:0}.pos-fix[data-v-245766ee]{position:fixed;bottom:0;left:0;width:100%;z-index:2100}.qd-calendar .qd-head[data-v-245766ee]{padding:0 20px;height:50px;line-height:50px}.qd-calendar .qd-head .iconfont[data-v-245766ee]{vertical-align:-2px;font-size:18px}.qd-calendar .today-date[data-v-245766ee]{height:33px;line-height:30px;margin:9px 0 0;padding:0 9px}.qd-calendar .qd-week[data-v-245766ee]{padding:0 20px;height:50px;line-height:50px;font-weight:600}.qd-calendar .qd-week .week-list[data-v-245766ee]{width:14.28%;text-align:center}.qd-calendar .qd-date[data-v-245766ee]{padding:5px 10px 10px;justify-content:flex-start}.qd-calendar .qd-date .qd-list[data-v-245766ee]{width:14.28%;text-align:center;padding:2px 8px;position:relative;margin:4px 0}.qd-calendar .qd-date .qd-list .iconfont[data-v-245766ee]{position:absolute;font-size:38px;top:50%;left:50%;text-align:center;display:inline-block;transform:translate(calc(-50% + -2px),-50%)}.qd-calendar .drop-down-date[data-v-245766ee]{color:#999;font-size:14px;text-align:center;padding:10px 0}.qd-calendar .drop-down-date .iconfont[data-v-245766ee]{vertical-align:-2px}.theme-black .drop-down-date[data-v-245766ee]{background:#212121}", ""]);

// exports


/***/ }),

/***/ 982:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(981);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(765)("f5d8f260", content, true, {});

/***/ })

});