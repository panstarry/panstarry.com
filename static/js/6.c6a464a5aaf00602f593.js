webpackJsonp([6],{

/***/ 1000:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1777)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1366),
  /* template */
  __webpack_require__(2119),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-0a096d46",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1001:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1774)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1367),
  /* template */
  __webpack_require__(2116),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-094bfb00",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1002:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1877)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1368),
  /* template */
  __webpack_require__(2223),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-475e598c",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1003:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1941)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1369),
  /* template */
  __webpack_require__(2287),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-69c5348a",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1004:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1767)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1370),
  /* template */
  __webpack_require__(2109),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-046cc725",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1005:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1813)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1371),
  /* template */
  __webpack_require__(2158),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-1f920790",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1093:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1098)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1096),
  /* template */
  __webpack_require__(1099),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-30ba68e5",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1094:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1102)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1100),
  /* template */
  __webpack_require__(1103),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-6c86f0c9",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1096:
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

/* harmony default export */ __webpack_exports__["default"] = ({
	props: {
		title: {
			type: String,
			required: false
		},
		menuList: {
			type: Array,
			default() {
				return [];
			}
		}
	},

	data() {
		return {};
	},

	created() {},

	methods: {}
});

/***/ }),

/***/ 1097:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(862)(false);
// imports


// module
exports.push([module.i, ".-sub-tit[data-v-30ba68e5]{display:inline-block}.-sub-tit .-icon[data-v-30ba68e5]{font-weight:400;padding:0 7px;color:#aaa}.-sub-tit .-name[data-v-30ba68e5]{color:#e20;padding-left:25px}.back[data-v-30ba68e5]{display:inline-block;color:gray}.back[data-v-30ba68e5]:hover{color:red}", ""]);

// exports


/***/ }),

/***/ 1098:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1097);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(863)("0b308ec4", content, true, {});

/***/ }),

/***/ 1099:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page-header"
  }, [_c('ul', {
    staticClass: "menus"
  }, [_vm._m(0), _vm._v(" "), (_vm.title) ? _c('li', {
    staticClass: "tit"
  }, [_vm._v(_vm._s(_vm.title) + " "), _c('i', {
    staticClass: "iconfont icon-arrow-r"
  })]) : _vm._e(), _vm._v(" "), _vm._l((_vm.menuList), function(m, index) {
    return _c('li', {
      class: {
        'on': m.active
      }
    }, [_c('a', {
      key: index,
      on: {
        "click": function($event) {
          return _vm.$router.push('/' + m.path)
        }
      }
    }, [_vm._v(_vm._s(m.name))])])
  }), _vm._v(" "), _c('li', [_vm._t("default")], 2)], 2)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_c('a', {
    staticClass: "back",
    attrs: {
      "href": "javascript: history.go(-1);",
      "title": "返回"
    }
  }, [_c('i', {
    staticClass: "iconfont icon-arrow-l-1"
  })])])
}]}

/***/ }),

/***/ 1100:
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
		afterSelect: {
			type: Function,
			default() {
				return {};
			}
		},

		showLatestMember: {
			type: Boolean,
			default: true,
			required: false
		}
	},

	data() {
		return {
			g: window.$,
			memberQueryStr: null,
			memberCandidates: [],
			memberFlag: null,
			queryMemberList: [],
			latestMemberList: [],
			cardNo: null,
			queryType: 1,
			memberName: null
		};
	},

	created() {
		if (this.showLatestMember) {
			this.queryLatestMembers();
		}
	},

	methods: {
		handleSearchMember(value) {
			if (!value) {
				this.memberCandidates = [];
				return;
			}
			let args = { queryStr: value };
			$.Req.service($.SvName.MEMBER_QUERY_FOR_AUTO_COMPLETE, args, ret => {
				this.memberCandidates = ret.memberInfoList;
			});
		},

		quickQuery() {
			if (this.memberFlag) {
				let args = { nameOrPhone: this.memberFlag };
				$.Req.service($.SvName.MEMBER_ADV_QUERY, args, ret => {
					if (ret.memberList && ret.memberList.length) {
						if (ret.memberList && ret.memberList.length === 1) {
							this.selectMember(ret.memberList[0]);
							return;
						}
						this.queryMemberList = ret.memberList;
					} else {
						this.queryMemberList = [];
						$.Msg.info('未查到符合条件的会员');
					}
				});
			} else {
				$.Msg.error('请输入会员姓名或手机号');
			}
		},

		queryMemberByName() {
			if (!this.memberName) {
				$.Msg.error('请输入会员姓名');
				return;
			}

			let args = { fuzzyName: this.memberName };
			$.Req.service($.SvName.MEMBER_ADV_QUERY, args, ret => {
				if (ret.memberList && ret.memberList.length) {
					if (ret.memberList && ret.memberList.length === 1) {
						this.selectMember(ret.memberList[0]);
						return;
					}
					this.queryMemberList = ret.memberList;
				} else {
					this.queryMemberList = [];
					$.Msg.info('未查到符合条件的会员');
				}
			});
		},

		queryMemberByCard() {
			if (this.cardNo) {
				let args = { cardNo: this.cardNo };
				$.Req.service($.SvName.MEMBER_ADV_QUERY, args, ret => {
					if (ret.memberList && ret.memberList.length) {
						if (ret.memberList && ret.memberList.length === 1) {
							this.selectMember(ret.memberList[0]);
							return;
						}
						this.queryMemberList = ret.memberList;
					} else {
						this.queryMemberList = [];
						$.Msg.info('未查到符合条件的会员');
					}
				});
			} else {
				$.Msg.error('请输入会员卡号');
			}
		},

		queryLatestMembers() {
			let args = { page: 1 };
			$.Req.service($.SvName.MEMBER_ADV_QUERY, args, ret => {
				this.latestMemberList = ret.memberList;
			});
		},

		selectMember(m) {
			if (this.afterSelect) {
				this.afterSelect(m);
			}
		},

		selectMemberCandidate(val) {
			if (!val) return;
			let items = val.split('|');
			this.memberFlag = items[0].trim();
			this.quickQuery();
		}
	}
});

/***/ }),

/***/ 1101:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(862)(false);
// imports


// module
exports.push([module.i, ".input[data-v-6c86f0c9]{font-size:14px;font-weight:700;display:block}.member-list[data-v-6c86f0c9]{border:1px solid #dddee1;padding:10px;margin-top:20px;clear:both}.member-list li[data-v-6c86f0c9]{padding:5px 10px;margin:5px;background:#eee;display:inline-block;cursor:pointer;width:150px;text-align:center;max-height:28px;overflow:hidden}.member-list li[data-v-6c86f0c9]:hover{background:#ddd;color:#ff4500}.latest-members[data-v-6c86f0c9]{border:1px solid #9ed18b;margin-top:25px}.latest-members .-tit[data-v-6c86f0c9]{margin-bottom:10px;font-weight:700;font-size:13px;padding-left:5px}.latest-members ul[data-v-6c86f0c9]{padding-top:15px}", ""]);

// exports


/***/ }),

/***/ 1102:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1101);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(863)("1adbe95f", content, true, {});

/***/ }),

/***/ 1103:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticStyle: {
      "margin-bottom": "12px"
    }
  }, [_c('radio-group', {
    model: {
      value: (_vm.queryType),
      callback: function($$v) {
        _vm.queryType = $$v
      },
      expression: "queryType"
    }
  }, [_c('radio', {
    attrs: {
      "label": 1
    }
  }, [_vm._v("根据姓名和手机号联想查询")]), _vm._v(" "), _c('radio', {
    attrs: {
      "label": 2
    }
  }, [_vm._v("根据姓名模糊查询")]), _vm._v(" "), _c('radio', {
    attrs: {
      "label": 3
    }
  }, [_vm._v("根据会员卡号查询")])], 1)], 1), _vm._v(" "), (_vm.queryType == 1) ? [_c('AutoComplete', {
    staticStyle: {
      "width": "360px"
    },
    attrs: {
      "data": _vm.memberCandidates,
      "icon": "ios-search",
      "clearable": true,
      "placeholder": "请输入姓名或手机号"
    },
    on: {
      "on-select": _vm.selectMemberCandidate,
      "on-search": _vm.handleSearchMember
    },
    model: {
      value: (_vm.memberQueryStr),
      callback: function($$v) {
        _vm.memberQueryStr = (typeof $$v === 'string' ? $$v.trim() : $$v)
      },
      expression: "memberQueryStr"
    }
  })] : _vm._e(), _vm._v(" "), (_vm.queryType == 2) ? [_c('i-input', {
    staticStyle: {
      "width": "360px"
    },
    attrs: {
      "placeholder": "请输入姓名后按回车查询"
    },
    on: {
      "on-enter": _vm.queryMemberByName
    },
    model: {
      value: (_vm.memberName),
      callback: function($$v) {
        _vm.memberName = (typeof $$v === 'string' ? $$v.trim() : $$v)
      },
      expression: "memberName"
    }
  }), _vm._v(" "), _c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.queryMemberByName
    }
  }, [_vm._v("查询")])] : _vm._e(), _vm._v(" "), (_vm.queryType == 3) ? [_c('input-int', {
    staticStyle: {
      "width": "360px"
    },
    attrs: {
      "placeholder": "请刷卡或输入卡号后按回车"
    },
    on: {
      "enter": _vm.queryMemberByCard
    },
    model: {
      value: (_vm.cardNo),
      callback: function($$v) {
        _vm.cardNo = $$v
      },
      expression: "cardNo"
    }
  }), _vm._v(" "), _c('i-button', {
    staticStyle: {
      "position": "relative",
      "top": "-1px"
    },
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.queryMemberByCard
    }
  }, [_vm._v("查询")])] : _vm._e(), _vm._v(" "), (_vm.queryMemberList && _vm.queryMemberList.length > 0) ? _c('div', {
    staticClass: "member-list"
  }, [_c('ul', _vm._l((_vm.queryMemberList), function(m) {
    return _c('li', {
      attrs: {
        "title": m.name
      },
      on: {
        "click": function($event) {
          return _vm.selectMember(m)
        }
      }
    }, [_vm._v(_vm._s(m.name) + "（" + _vm._s(_vm.g.Dict.Sex[m.sex]) + "）")])
  }), 0)]) : _vm._e(), _vm._v(" "), (_vm.showLatestMember && _vm.latestMemberList && _vm.latestMemberList.length > 0) ? _c('div', {
    staticClass: "member-list latest-members"
  }, [_c('span', {
    staticClass: "-tit"
  }, [_vm._v("最近新建的会员")]), _c('span', {
    staticClass: "gray l10"
  }, [_vm._v("（点击可选择会员）")]), _vm._v(" "), _c('ul', _vm._l((_vm.latestMemberList), function(m, idx) {
    return (idx < 15) ? _c('li', {
      on: {
        "click": function($event) {
          return _vm.selectMember(m)
        }
      }
    }, [_vm._v(_vm._s(m.name) + "（" + _vm._s(_vm.g.Dict.Sex[m.sex]) + "）")]) : _vm._e()
  }), 0)]) : _vm._e()], 2)
},staticRenderFns: []}

/***/ }),

/***/ 1116:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1122)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1118),
  /* template */
  __webpack_require__(1127),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-747e1cab",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ajax_js__ = __webpack_require__(407);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "VideoUpload",
  props: {
    uploadTitle: {
      type: String,
      default: '点击上传视频'
    },
    fileList: {
      type: Array,
      default: []
    },
    maxCount: {
      type: Number,
      default: 5
    }
  },
  data() {
    return {
      g: $,
      videoVisible: false,
      removeable: false,
      previewUrl: "",
      percent: 0,
      loading: false,
      progressStatus: "active",
      accept: 'video/*',
      headers: { "Content-Type": "multipart/form-data" }
    };
  },
  methods: {
    delVideo(obj) {
      let list = this.fileList.filter(v => v.name != obj.name);
      this.$emit("handleVideoList", list);
    },
    previewVideo(item) {
      this.videoVisible = true;
      this.previewUrl = item.url;
      this.$nextTick(() => {
        this.$refs.video.play();
      });
    },
    handleProgress(event, file) {
      this.loading = true;
      event.target.onprogress = event => {
        let uploadPercent = (event.loaded / event.total * 100).toFixed(1);
        this.percent = Number(uploadPercent);
      };
    },
    handleSuccess(response, file) {
      this.progressStatus = "success";
      setTimeout(() => {
        this.loading = false;
        this.percent = 0;
      }, 100);
      this.loading = false;
      if (response.status !== 0) {
        $.Msg.error(response.msg);
        return;
      }
      let list = this.fileList;
      list.push(response.data);
      this.$emit("handleVideoList", list);
    },
    handleError(error, file) {
      this.progressStatus = "wrong";
      setTimeout(() => {
        this.loading = false;
        this.percent = 0;
      }, 1000);
    },
    beforeUpload(file) {
      this.progressStatus = "active";
      this.loading = true;
      if (this.fileList.length >= this.maxCount) {
        this.percent = 0;
        this.loading = false;
        $.Dlg.error("您最多可上传{0}个视频".format(this.maxCount));
        return false;
      }
      if (file.size > 30 * 1000 * 1024) {
        this.percent = 0;
        this.loading = false;
        $.Dlg.error("上传文件不得大于30M");
        return false;
      }
    }
  }
});

/***/ }),

/***/ 1120:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(862)(false);
// imports


// module
exports.push([module.i, ".preview[data-v-747e1cab]{display:block;margin:auto;max-width:648px;max-height:700px}.video-box[data-v-747e1cab]{display:flex;margin-top:15px}.video-box .video-item[data-v-747e1cab]{position:relative;cursor:pointer;width:120px;height:84px;background-color:#000;margin-right:15px}.video-box .video-item .del-icon[data-v-747e1cab]{display:none;position:absolute;right:-16px;top:-18px;z-index:77}.video-box .video-item .del-icon .del[data-v-747e1cab]{margin:8px;width:20px;height:20px}.video-box .video-item .del-icon[data-v-747e1cab]:hover{cursor:pointer}.video-box .video-item .mask[data-v-747e1cab]{position:absolute;left:0;right:0;top:0;bottom:0;z-index:66;text-align:center;line-height:94px}.video-box .video-item .mask .icon[data-v-747e1cab]{width:24px;height:24px}.video-box .video-item video[data-v-747e1cab]{width:100%;height:100%}.video-box .video-item:hover .del-icon[data-v-747e1cab]{display:block}", ""]);

// exports


/***/ }),

/***/ 1122:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1120);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(863)("00aaed8e", content, true, {});

/***/ }),

/***/ 1124:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1159)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1138),
  /* template */
  __webpack_require__(1177),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-999feef0",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1127:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "img-upload"
  }, [_c('div', [_c('Upload', {
    staticStyle: {
      "display": "inline-block"
    },
    attrs: {
      "action": _vm.g.Conf.VIDEO_UPLOAD,
      "accept": _vm.accept,
      "show-upload-list": false,
      "on-progress": _vm.handleProgress,
      "with-credentials": true,
      "before-upload": _vm.beforeUpload,
      "default-file-list": _vm.fileList,
      "on-success": _vm.handleSuccess,
      "on-error": _vm.handleError
    }
  }, [_c('i-button', {
    attrs: {
      "type": "ghost",
      "icon": "ios-cloud-upload-outline"
    }
  }, [_vm._v(_vm._s(_vm.uploadTitle))])], 1), _vm._v(" "), _vm._t("default")], 2), _vm._v(" "), (_vm.loading) ? _c('Progress', {
    attrs: {
      "stroke-width": 5,
      "status": _vm.progressStatus,
      "percent": _vm.percent
    }
  }) : _vm._e(), _vm._v(" "), (_vm.fileList && _vm.fileList.length) ? _c('div', {
    staticClass: "video-box"
  }, _vm._l((_vm.fileList), function(item, idx) {
    return _c('div', {
      key: idx,
      staticClass: "video-item"
    }, [_c('div', {
      staticClass: "mask",
      on: {
        "click": function($event) {
          return _vm.previewVideo(item)
        }
      }
    }, [_c('svg', {
      staticClass: "icon",
      attrs: {
        "t": "1630550755860",
        "viewBox": "0 0 1024 1024",
        "version": "1.1",
        "xmlns": "http://www.w3.org/2000/svg",
        "p-id": "6440",
        "width": "200",
        "height": "200"
      }
    }, [_c('path', {
      attrs: {
        "d": "M1006.08 512c0 270.848-219.648 490.496-490.496 490.496S24.576 783.36 24.576 512s220.16-490.496 491.008-490.496 490.496 219.648 490.496 490.496z",
        "p-id": "6441"
      }
    }), _vm._v(" "), _c('path', {
      attrs: {
        "d": "M705.024 534.016l-289.28 166.912c-16.896 9.728-37.888-2.56-37.888-22.016V345.088c0-19.456 20.992-31.744 37.888-22.016l289.28 166.912c16.384 10.24 16.384 34.304 0 44.032z",
        "fill": "#FFFFFF",
        "p-id": "6442"
      }
    }), _vm._v(" "), _c('path', {
      attrs: {
        "d": "M518.144 1017.856h-4.608c-129.024-1.024-250.368-47.104-341.504-129.024-102.4-92.16-159.232-222.208-164.352-376.32v-1.024c7.68-158.208 66.56-290.304 168.96-381.44C267.776 49.152 388.608 5.632 517.632 6.656c129.024 1.024 250.368 47.104 341.504 129.024 102.4 92.16 159.232 222.208 164.352 376.32v1.024c-8.192 158.208-66.56 290.304-169.472 381.44-90.112 79.872-208.896 123.392-335.872 123.392zM33.28 512.512c11.264 327.168 257.024 478.208 480.768 480.256h4.608c227.328 0 462.848-147.968 479.744-480.256-11.776-327.68-257.536-478.72-481.28-480.256h-4.096c-227.328 0-462.848 147.968-479.744 480.256z",
        "fill": "#FFFFFF",
        "p-id": "6443"
      }
    })])]), _vm._v(" "), _c('video', {
      attrs: {
        "src": item.url
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "del-icon",
      on: {
        "click": function($event) {
          return _vm.delVideo(item)
        }
      }
    }, [_c('svg', {
      staticClass: "del",
      attrs: {
        "t": "1630567187975",
        "viewBox": "0 0 1024 1024",
        "version": "1.1",
        "xmlns": "http://www.w3.org/2000/svg",
        "p-id": "6510",
        "width": "200",
        "height": "200"
      }
    }, [_c('path', {
      attrs: {
        "d": "M512 74.752c-247.296 0-448 200.704-448 448s200.704 448 448 448 448-200.704 448-448-200.704-448-448-448z",
        "fill": "#666666",
        "p-id": "6511"
      }
    }), _vm._v(" "), _c('path', {
      attrs: {
        "d": "M693.76 661.504c11.776 11.776 11.776 31.232 0 43.008-11.776 11.776-31.232 11.776-43.008 0L512 565.76l-138.752 138.752c-11.776 11.776-31.232 11.776-43.008 0-11.776-11.776-11.776-31.232 0-43.008l138.752-138.752L330.24 384c-11.776-11.776-11.776-31.232 0-43.008 11.776-11.776 31.232-11.776 43.008 0L512 479.744l138.752-138.752c11.776-11.776 31.232-11.776 43.008 0 11.776 11.776 11.776 31.232 0 43.008l-138.752 138.752 138.752 138.752z",
        "fill": "#FFFFFF",
        "p-id": "6512"
      }
    })])])])
  }), 0) : _vm._e(), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "视频预览",
      "width": "700",
      "styles": {
        top: '0'
      }
    },
    model: {
      value: (_vm.videoVisible),
      callback: function($$v) {
        _vm.videoVisible = $$v
      },
      expression: "videoVisible"
    }
  }, [_c('video', {
    ref: "video",
    staticClass: "preview",
    attrs: {
      "src": _vm.previewUrl,
      "controls": ""
    }
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "display": "none"
    },
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 1138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_member_member_base_info_vue__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_member_member_base_info_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__pages_member_member_base_info_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	components: { MemberBaseInfo: __WEBPACK_IMPORTED_MODULE_0__pages_member_member_base_info_vue___default.a },
	props: ["value"],
	data() {
		return {
			g: $,
			queryNo: null,
			member: {},
			memberList: [],
			viewMemberDlg: false,
			selectMemberId: null
		};
	},

	methods: {
		updateVal: function (val) {
			this.$emit('input', val ? val.trim() : null);
		},

		handleBlur(event) {
			this.queryMember(() => {
				this.$emit('afterQuery', this.member);
			});
		},

		queryMember(callback) {
			//if (this.memberList && this.memberList.length > 1) return;

			this.queryNo = this.value ? this.value.trim() : null;
			if (!this.queryNo) {
				if (!this.memberList.length) {
					$.Msg.warning($.Lang.NO_INPUT);
				}
				return;
			}

			let args = {};
			if ($.Util.validatePhoneNo(this.queryNo)) {
				this.queryNoType = 'phone';
				args = { nameOrPhone: this.queryNo };
			} else {
				if (!$.Util.isInteger(this.queryNo)) {
					args = { fuzzyName: this.queryNo };
				} else {
					this.queryNoType = 'card';
					if (!$.Util.validateCardNo(this.queryNo)) {
						$.Msg.error($.Lang.CARD_NO_TOO_LONG);
						return;
					}
					args = { cardNo: this.queryNo };
				}
			}
			args.page = 1;

			$.Req.service($.SvName.MEMBER_ADV_QUERY, args, ret => {
				this.member = null;
				let queryError = null;
				if (!ret || !ret.memberList || ret.memberList.length === 0) {
					if (this.queryNoType === 'phone') {
						queryError = "不存在手机号为【{0}】的会员".format(this.queryNo);
					} else if (!$.Util.isInteger(this.queryNo)) {
						queryError = "不存在姓名为【{0}】的会员".format(this.queryNo);
					} else {
						queryError = "不存在卡号为【{0}】的会员".format(this.queryNo);
					}
					$.Msg.error(queryError);
					return;
				}
				this.queryError = null;
				if (ret.memberList.length === 1) {
					this.memberList = null;
					this.member = ret.memberList[0];
				} else {
					this.memberList = ret.memberList;
				}

				if (callback) callback();
			}, true);
		},

		selectMember(m) {
			this.member = m;
			this.queryNo = m.name;
			this.$emit('input', m.name);
			this.$emit('afterQuery', this.member);
		},

		viewMebmerInfo(memberId) {
			this.selectMemberId = memberId;
			this.viewMemberDlg = true;
		}
	}
});

/***/ }),

/***/ 1149:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(862)(false);
// imports


// module
exports.push([module.i, ".memb-list[data-v-999feef0]{padding:10px;margin:10px 0;border:1px solid #eee}.memb-list .tit[data-v-999feef0]{padding-bottom:10px;color:orange}.memb-list .name[data-v-999feef0]{font-size:14px;color:#444}.memb-list li[data-v-999feef0]{display:inline-block;margin:3px;line-height:1;padding:10px;background:#eee;cursor:pointer;font-size:12px;color:#aaa}.memb-list li[data-v-999feef0]:hover{background:#ddd}.query-input[data-v-999feef0]{height:32px;line-height:32px;border:1px solid #d7dde4;width:160px;padding:0 10px;background:#fff}", ""]);

// exports


/***/ }),

/***/ 1159:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1149);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(863)("2d08b482", content, true, {});

/***/ }),

/***/ 1177:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('input', {
    staticClass: "query-input",
    attrs: {
      "type": "text",
      "title": "",
      "placeholder": "手机号  |  姓名  |  刷卡"
    },
    domProps: {
      "value": _vm.value
    },
    on: {
      "mousewheel": function($event) {
        $event.preventDefault();
      },
      "input": function($event) {
        return _vm.updateVal($event.target.value)
      },
      "blur": _vm.handleBlur,
      "keyup": function($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) { return null; }
        return _vm.handleBlur.apply(null, arguments)
      }
    }
  }), _vm._v(" "), (_vm.member && _vm.member.name) ? _c('a', {
    staticClass: "l10",
    on: {
      "click": function($event) {
        return _vm.viewMebmerInfo(_vm.member.memberId)
      }
    }
  }, [_vm._v(_vm._s(_vm.member.name))]) : _vm._e(), _vm._v(" "), (_vm.memberList && _vm.memberList.length > 1) ? _c('div', {
    staticClass: "memb-list"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("请选择一个会员：")]), _vm._v(" "), _c('ul', _vm._l((_vm.memberList), function(m) {
    return _c('li', {
      on: {
        "click": function($event) {
          return _vm.selectMember(m)
        }
      }
    }, [_c('span', {
      staticClass: "name"
    }, [_vm._v(_vm._s(m.name))]), _vm._v("（" + _vm._s(_vm.g.Dict.Sex[m.sex]) + "）\n\t\t\t")])
  }), 0)]) : _vm._e(), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "会员基本信息",
      "width": "800",
      "styles": {
        top: '10px'
      },
      "ok-text": "关闭",
      "cancel-text": "按Esc键或点击其它地方可关闭"
    },
    model: {
      value: (_vm.viewMemberDlg),
      callback: function($$v) {
        _vm.viewMemberDlg = $$v
      },
      expression: "viewMemberDlg"
    }
  }, [(_vm.viewMemberDlg) ? _c('member-base-info', {
    attrs: {
      "member-id": _vm.selectMemberId
    }
  }) : _vm._e()], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 1346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_member_member_base_info_vue__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_member_member_base_info_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__pages_member_member_base_info_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_sys_time_select__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_sys_time_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_sys_time_select__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	components: { TimeSelect: __WEBPACK_IMPORTED_MODULE_1__components_sys_time_select___default.a, MemberBaseInfo: __WEBPACK_IMPORTED_MODULE_0__pages_member_member_base_info_vue___default.a },
	props: {
		machId: {
			type: Number,
			required: true
		}
	},
	data() {
		return {
			g: window.$,
			logList: null,
			logCount: null,
			optionTypes: ['存件', '取件', '开柜', '管理员操作'],
			machList: null,
			lockerList: null,
			query: {
				beginDate: null,
				endDate: null,
				machId: null,
				amlId: null,
				phoneNo: null
			},
			viewMemberDlg: null,
			selectMemberId: null
		};
	},

	created() {
		this.query.machId = this.machId;
		this.queryAiMachList();
		this.queryAiMachLockerLogList();
	},

	methods: {
		queryAiMachList() {
			$.Req.service($.SvName.AI_MACH_QUERY, { machType: 9 }, ret => {
				this.machList = ret.aiMachList;
				this.queryAiMachLockerList(this.machId);
			}, true);
		},

		queryAiMachLockerList(machId) {
			if (!machId) {
				this.lockerList = null;
				this.query.amlId = null;
				return;
			}
			let args = { machId: machId };
			$.Req.service($.SvName.AI_MACH_LOCKER_QUERY, args, ret => {
				this.lockerList = ret.lockerList;
				this.query.amlId = null;
			}, false);
		},

		queryAiMachLockerLogList(page = null) {
			if (this.query.beginDate && !this.query.endDate || !this.query.beginDate && this.query.endDate) {
				$.Msg.error('请输入有效的日期');
				return;
			}
			if (this.query.phoneNo && !$.Util.validatePhoneNo(this.query.phoneNo)) {
				$.Msg.error('请输入有效的手机号');
				return;
			}

			let args = {
				machId: this.query.machId,
				beginDate: this.query.beginDate,
				endDate: this.query.endDate,
				amlId: this.query.amlId,
				userPhoneNo: this.query.phoneNo,
				page: page
			};
			$.Req.service($.SvName.AI_MACH_LOCKER_LOG_QUERY, args, res => {
				this.logList = res.logList;
				if (!page) {
					this.logCount = res.count;
				}
			});
		},

		viewMebmerInfo(memberId) {
			this.selectMemberId = memberId;
			this.viewMemberDlg = true;
		}
	}
});

/***/ }),

/***/ 1348:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  props: {},
  data() {
    return {
      g: $
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
});

/***/ }),

/***/ 1349:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import html2canvas from "html2canvas";
const lineDataMap = {
  man: {
    height: {
      P97: [104.1, 111.8, 119.6, 126.6, 133.7, 140.4, 146.5, 152, 158.1, 166, 174.2, 179.4, 182, 183.2, 183.7, 183.9],
      P75: [99.4, 106.9, 114.2, 120.9, 127.4, 133.7, 139.3, 144.4, 149.9, 157, 164.8, 170.7, 174.2, 175.8, 176.4, 176.7],
      P50: [96.8, 104.1, 111.3, 117.7, 124, 130, 135.4, 140.2, 145.3, 151.9, 159.5, 165.9, 169.8, 171.6, 172.3, 172.7],
      P25: [94.2, 101.4, 108.4, 114.6, 120.6, 126.3, 131.4, 136, 140.8, 147, 154.3, 161, 165.4, 167.4, 168.2, 168.6],
      P3: [89.7, 96.7, 103.3, 109.1, 114.6, 119.9, 124.6, 128.7, 132.9, 138.1, 145, 152.3, 157.5, 159.9, 160.9, 161.3]
    },
    weight: {
      P97: [18.12, 20.71, 24, 27.55, 32.41, 38.49, 44.35, 50.01, 56.07, 63.04, 70.83, 77.2, 80.6, 82.05, 82.7, 83],
      P75: [15.8, 17.98, 20.61, 23.26, 26.66, 30.71, 34.61, 38.61, 43.27, 48.86, 55.21, 60.83, 64.4, 66.4, 67.51, 68.11],
      P50: [14.65, 16.64, 18.98, 21.26, 24.06, 27.33, 30.46, 33.74, 37.69, 42.49, 48.08, 53.37, 57.08, 59.35, 60.68, 61.4],
      P25: [13.6, 15.43, 17.52, 19.49, 21.81, 24.46, 26.98, 29.66, 32.37, 37.03, 41.9, 46.9, 50.75, 53.26, 54.77, 55.6],
      P3: [11.94, 13.52, 15.26, 16.8, 18.48, 20.32, 22.04, 23.89, 26.21, 29.09, 32.82, 37.36, 41.43, 44.28, 46.04, 47.01]
    }
  },
  woman: {
    height: {
      P97: [102.9, 110.6, 118.4, 125.4, 132.1, 138.7, 145.1, 152, 159.2, 164.5, 167.6, 169.3, 170.1, 170.3, 170.5, 170.7],
      P75: [98.2, 105.7, 113.1, 119.7, 125.9, 132.1, 138, 144.4, 151.1, 156.7, 160.3, 162.4, 163.5, 163.8, 164, 164.2],
      P50: [95.6, 103.1, 110.2, 116.6, 122.5, 128.5, 134.1, 140.1, 146.6, 152.4, 156.3, 158.6, 159.8, 160.1, 160.3, 160.6],
      P25: [93.1, 100.4, 107.3, 113.5, 119.2, 124.9, 130.2, 135.9, 142.2, 148, 152.2, 154.8, 156.1, 156.4, 156.7, 157],
      P3: [88.6, 95.8, 102.3, 108.1, 113.3, 118.5, 123.3, 128.3, 134.2, 140.2, 145, 147.9, 149.5, 149.8, 150.1, 150.4]
    },
    weight: {
      P97: [17.55, 20.24, 23.14, 26.3, 29.89, 34.23, 39.41, 45.97, 53.33, 59.64, 63.45, 65.36, 66.3, 66.69, 66.82, 66.89],
      P75: [15.25, 17.5, 19.83, 22.27, 24.94, 28.05, 31.63, 36.05, 41.24, 46.42, 50.45, 53.23, 54.96, 55.79, 56.11, 56.28],
      P50: [14.13, 16.17, 18.26, 20.37, 22.64, 25.25, 28.19, 31.76, 36.1, 40.77, 44.79, 47.83, 49.82, 50.81, 51.2, 51.41],
      P25: [13.11, 14.97, 16.84, 18.68, 20.62, 22.81, 25.23, 28.15, 31.81, 36.04, 40, 43.19, 45.36, 46.47, 46.9, 47.14],
      P3: [11.5, 13.1, 14.64, 16.1, 17.58, 19.2, 20.93, 22.98, 25.74, 29.33, 33.09, 36.38, 38.73, 39.96, 40.44, 40.71]
    }
  },
  colorMap: {
    P97: "#3363FF",
    P75: "#F95E6A",
    P50: "#34C27D",
    P25: "#3AACFF",
    P3: "#ED589D"
  },
  healthColorMap: {
    weight: {
      lineColor: "#3363FF",
      bgColor: "rgba(51,99,255,0.2)"
    },
    fat: {
      lineColor: "#F95E6A",
      bgColor: "rgba(249,94,106,0.2)"
    },
    skmuscle: {
      lineColor: "#34C27D",
      bgColor: "rgba(52,194,125,0.2)"
    }
  }
};
const bodyType = {
  "": 0,
  隐形肥胖型: 1,
  运动不足型: 2,
  偏瘦型: 3,
  标准型: 4,
  偏瘦肌肉型: 5,
  肥胖型: 6,
  偏胖型: 7,
  标准肌肉型: 8,
  非常肌肉型: 9
};
const bodySortList = [2, 6, 1, 7, 4, 3, 5, 8, 9]; // 展示顺序
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  props: {
    btId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      g: $,
      isDownload: true,
      isBody: false, // 是否查询到数据
      styleType: ["偏低", "优秀", "偏高", "需努力"],
      fateType: ["低", "正常", "高"],
      arrowType: ["↓", "", "↑"],
      sportsAbilityType: ["需努力", "合格", "优秀"],
      sportsAbilityType2: ["很差", "较差", "一般", "良好", "很好"],
      activeNames: [],
      bodyImgList: [1, 2, 3],
      bodyTest: {
        memberAvatarPathname: null,
        machName: null,
        phoneNo: "15812345678",
        userName: null,
        sex: null,
        age: null,
        testTime: new Date(),
        createTime: null,
        height: null,
        weight: 100,
        weightLimit: null,
        headyawangle: null,
        headyawlevel: null,
        headforwardangle: null,
        headforwalevel: null,
        score: 45.91,
        bodyAge: 21,
        bodyShape: "标准型",
        bmi: 34.2,
        bodyfat: 88.6,
        weightControl: -26.2
      },
      lastTestList: [],
      bodyType: 1,
      bodyComponent: {
        height: {
          name: "身高",
          value: 0,
          limit: []
        },
        weight: {
          name: "体重",
          value: 0,
          limit: []
        },
        bmi: {
          name: "BMI",
          value: 0,
          limit: []
        },
        bodyfat: {
          name: "体脂率",
          value: 0,
          limit: []
        },
        visfat: {
          name: "内脏脂肪",
          value: 0,
          limit: []
        },
        subfat: {
          name: "皮下脂肪",
          value: 0,
          limit: []
        },
        skmuscle: {
          name: "骨骼肌",
          value: 0,
          limit: []
        },
        waterContent: {
          name: "体水分",
          value: 0,
          limit: []
        },
        bone: {
          name: "骨量",
          value: 0,
          limit: []
        },
        protein: {
          name: "蛋白质",
          value: 0,
          limit: []
        },
        salt: {
          name: "无机盐",
          value: 0,
          limit: []
        },
        metabolism: {
          name: "基础代谢",
          value: 0,
          limit: []
        }
      },
      bodyPostureEvaluation: {
        headforwardangle: {
          name: "头部前倾",
          levelKey: "headforwalevel",
          angle: 0,
          level: 0
        },
        highLowShoulderangle: {
          name: "高低肩",
          levelKey: "highLowShoulderlevel",
          angle: 0,
          level: 0
        },
        headyawangle: {
          name: "头部侧倾",
          levelKey: "headyawlevel",
          angle: 0,
          level: 0
        },
        xoLegangle: {
          name: "xo形腿",
          levelKey: "xoLeglevel",
          angle: 0,
          level: 0
        },
        hipforwardangle: {
          name: "盆骨前倾",
          levelKey: "hipforwardlevel",
          angle: 0,
          level: 0
        }
      },
      sportsAbilityMap: {
        balance: {
          name: "平衡能力",
          value: 0,
          flag: false,
          level: 0,
          msg: "平衡能力是一切运动的基础，良好的平衡能力才会有更好的运动表现。",
          type: 2
        },
        vitalcapacity: {
          name: "肺活量",
          value: 0,
          flag: false,
          level: 0,
          msg: "肺活量直接反应了肺部的摄氧能力，良好的肺活量可为人体提供充足的氧气支持，提升儿童运动强度和而力。"
        },
        reactiontime: {
          name: "敏捷反应",
          value: 0,
          flag: false,
          level: 0,
          msg: "敏捷反应能力是指人体面对外部环境变化快速响应的能力，良好敏捷反应能力有助于儿童快速适应新的环境，提升运动表现。"
        },
        skip: {
          name: "一分钟跳绳",
          value: 198,
          flag: false,
          level: 2,
          msg: "一分钟跳绳反应运动耐力、弹跳力、灵敏性协调性等综合身体素质。"
        },
        coord: {
          name: "协调能力",
          value: null,
          flag: false,
          level: 2,
          msg: "",
          type: 2
        },
        endurance: {
          name: "肌肉耐力",
          value: null,
          flag: false,
          level: 2,
          msg: "",
          type: 2
        },
        function: {
          name: "运动机能",
          value: null,
          flag: false,
          level: 2,
          msg: "",
          type: 2
        }
      },
      weightProposeMap: {
        weightControl: {
          name: "体重控制",
          value: -26.2
        },
        muscleControl: {
          name: "肌肉控制",
          value: 0
        },
        fatControl: {
          name: "脂肪控制",
          value: -26.2
        }
      },
      option: {
        title: {
          text: "",
          show: true
        },
        tooltip: {
          trigger: "axis",
          show: false
        },
        legend: {
          data: ["P97", "P75", "P50", "P25", "P3"]
        },
        grid: {
          show: true,
          left: 0,
          right: 6,
          top: 33,
          bottom: 0,
          containLabel: true,
          z: 1,
          borderWidth: 1,
          borderColor: "#BDBDBD"
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
          axisTick: {
            show: false
          },
          axisLabel: {
            color: "#4F4F4F"
          },
          axisLine: {
            show: false
          },
          splitLine: {
            show: true,
            lineStyle: {
              show: true,
              type: "dashed"
            }
          },
          lineStyle: {
            z: 0
          }
        },
        yAxis: {
          type: "value",
          name: "身高",
          min: 80,
          max: 200,
          nameLocation: "end",
          nameTextStyle: {
            padding: [0, 35, 0, 0],
            margin: [0, 30, 0, 0]
          },
          axisLabel: {
            color: "#4F4F4F"
          },
          axisLine: {
            show: false
          },
          splitLine: {
            lineStyle: {
              show: true,
              type: "dashed"
            }
          },
          axisTick: {
            show: false
          },
          lineStyle: {
            z: 0
          }
        },
        series: [{
          name: "P3",
          type: "line",
          stack: "Total",
          data: [89.7, 96.7, 103.3, 109.1, 114.6, 119.9, 124.6, 128.7, 132.9, 138.1, 145, 152.3, 157.5, 159.9, 160.9, 161.3]
        }]
      },
      healthOption: {
        title: {
          text: "",
          show: true
        },
        grid: {
          show: false,
          left: 22,
          right: 22,
          top: 18,
          bottom: 0,
          containLabel: true,
          z: 1
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: []
        },
        yAxis: {
          show: true,
          type: "value",
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: true,
            lineStyle: {
              show: true,
              type: "dashed"
            }
          }
        },
        series: [{
          data: [],
          type: "line",
          smooth: true,
          symbol: "circle",
          areaStyle: {},
          label: {
            show: true,
            position: "top" // 标签显示折线图顶部
          },
          lineStyle: {
            normal: {
              color: "#3363FF"
            }
          },
          itemStyle: {
            color: "#3363FF" // 设置线上点的颜色为红色
          },
          areaStyle: {
            color: "rgba(51,99,255,0.2)" // 设置阴影颜色
          }
        }]
      }
    };
  },
  computed: {
    bodyfatCom() {
      return this.compStyleFun(this.bodyComponent.bodyfat);
    },
    bmiCom() {
      return this.compStyleFun(this.bodyComponent.bmi);
    },
    targetWeight() {
      return this.bodyTest.weight - this.bodyTest.weightControl;
    },
    heightOptions() {
      return this.returnOptions("height", "身高", 80, 200);
    },
    weightOptions() {
      return this.returnOptions("weight", "体重", 0, 100);
    },
    healthWeightOptions() {
      return this.returnHealthOptions("weight");
    },
    healthFatOptions() {
      return this.returnHealthOptions("fat");
    },
    healthSkmuscleOptions() {
      return this.returnHealthOptions("skmuscle");
    },
    getSportsAbilityMap() {
      return this.returnSportsAbilityMap(this.bodyTest);
    },
    getBodyComponent() {
      return this.returnBodyComponent(this.bodyTest);
    },
    getBodyPostureEvaluation() {
      return this.returnBodyPostureEvaluation(this.bodyTest);
    }
  },
  watch: {},
  created() {
    if (this.btId === undefined) return this.$router.back();
    this.$set(this.bodyTest, "memberAvatarPathname", $.Util.getAvatarUrl());
    this.getBodyTest();
  },
  mounted() {},
  methods: {
    initData() {},

    getBodyTest() {
      const args = {
        btId: this.btId
      };
      $.Req.service($.SvName.BODY_TEST_QUERY, args, ret => {
        this.isBody = true;
        if (!ret.bodyTest || ret.bodyTest === {}) {
          this.isBody = false;
          alert("查无此人");
          return this.$router.push("/staff-home");
        }

        this.bodyTest = ret.bodyTest;
        // this.bodyTest = Object.assign(ret.bodyTest, {
        //   endurancelevel: 3,
        //   functionlevel: 4,
        // });
        this.lastTestList = ret.lastTestList;

        this.bodyImgList = [];
        let list = [];
        let idx = bodyType[ret.bodyTest.bodyShape];
        if (idx > 0) {
          const indx = bodySortList.findIndex(item => item === idx);
          if (indx === 0) {
            list = [bodySortList[9], bodySortList[0], bodySortList[1]];
          } else if (indx === 9) {
            list = [bodySortList[8], bodySortList[9], bodySortList[1]];
          } else {
            list = [bodySortList[indx - 1], bodySortList[indx], bodySortList[indx + 1]];
          }
        }
        this.bodyImgList = list;
      }, true);
    },
    addUnitFun(key) {
      const unitList = ["cm", "Kg", "%", "kcal", "ml", "ms"];
      const cm = ["height"];
      const Kg = ["weight", "bone", "salt", "weightControl", "muscleControl", "fatControl"];
      const bfh = ["bodyfat", "subfat", "waterContent", "protein", "balance"];
      const kcal = ["metabolism"];
      const ml = ["vitalcapacity"];
      const ms = ["reactiontime"];
      const list = [cm, Kg, bfh, kcal, ml, ms];
      const indx = list.findIndex(item => item.includes(key));
      return indx !== -1 ? unitList[indx] : "";
    },
    compStyleFun(i, key) {
      const { value, limit } = i;
      if (value > limit[1]) {
        return 3;
      }
      if (value >= limit[0] && value <= limit[1]) {
        return 2;
      }
      if (value < limit[0] && key === "height") {
        return 4;
      } else {
        return 1;
      }
    },
    deepCopy(data) {
      const t = this.typeOf(data);
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
          o.push(this.deepCopy(data[i]));
        }
      } else if (t === "object") {
        for (let i in data) {
          o[i] = this.deepCopy(data[i]);
        }
      }
      return o;
    },
    typeOf(obj) {
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
    },
    returnOptions(type, name, min, max) {
      let options = this.deepCopy(this.option);
      let sex = this.bodyTest.sex; // true 男， false 女
      const { man, woman, colorMap } = lineDataMap;
      let data = sex ? man : woman;
      options.series = [];
      options.yAxis.name = name;
      options.yAxis.min = min;
      options.yAxis.max = max;
      for (let key in data[type]) {
        let series = {
          name: key,
          type: "line",
          data: data[type][key],
          symbol: "none",
          lineStyle: {
            normal: {
              color: colorMap[key]
            }
          },
          itemStyle: {
            normal: {
              color: colorMap[key]
            }
          }
        };
        options.series.push(series);
      }
      return options;
    },
    returnHealthOptions(type) {
      let options = this.deepCopy(this.healthOption);
      const color = lineDataMap.healthColorMap[type];
      options.series[0].lineStyle.normal.color = color.lineColor;
      options.series[0].itemStyle.color = color.lineColor;
      options.series[0].areaStyle.color = color.bgColor;
      if (!this.lastTestList.length) return options;
      options.xAxis.data = [];
      options.series[0].data = [];
      const le = this.lastTestList.length - 1;
      for (let i = le; i >= 0; i--) {
        const item = this.lastTestList[i];
        const { bodyfat, weight, testTime, skmuscle } = item;
        options.xAxis.data.push(new Date(testTime).format("yyMMdd"));
        if (type === "fat") {
          options.series[0].data.push(bodyfat);
        }
        if (type === "skmuscle") {
          options.series[0].data.push(skmuscle);
        }
        if (type === "weight") {
          options.series[0].data.push(weight);
        }
      }
      return options;
    },

    returnBodyComponent(bodyTest) {
      const {
        height,
        weight,
        bmi,
        bodyfat,
        visfat,
        subfat,
        skmuscle,
        waterContent,
        bone,
        protein,
        salt,
        metabolism,
        sex,
        age
      } = bodyTest;
      const bodyTestMap = {
        height,
        weight,
        bmi,
        bodyfat,
        visfat,
        subfat,
        skmuscle,
        waterContent,
        bone,
        protein,
        salt,
        metabolism
      };
      // 根据 年龄和性别 查表
      let heightLimit = [];
      if (sex || height) {
        heightLimit[0] = lineDataMap.man.height.P50[(age >= 18 && 18) - 3];
        heightLimit[1] = lineDataMap.man.height.P75[(age >= 18 && 18) - 3];
      }
      let map = new Map();
      for (let key in bodyTestMap) {
        const value = bodyTestMap[key];
        if (value === undefined || value === null || value === "") continue;
        let limit = [160, 180];
        if (key === "height") {
          limit = heightLimit;
        } else if (bodyTest[`${key}Limit`] !== undefined) {
          limit = bodyTest[`${key}Limit`].split("~");
        }

        this.bodyComponent[key].value = value;
        this.bodyComponent[key].limit = limit;

        map.set(key, this.bodyComponent[key]);
      }

      return map;
    },

    returnSportsAbilityMap(bodyTest) {
      const {
        balance,
        vitalcapacity,
        reactiontime,
        skip,
        coordlevel,
        endurancelevel,
        functionlevel
      } = bodyTest;
      const bodyTestMap = {
        balance,
        vitalcapacity,
        reactiontime,
        skip,
        // 新增
        coordlevel,
        endurancelevel,
        functionlevel
      };
      let map = new Map();
      for (let key in bodyTestMap) {
        if (key.includes("level")) {
          // 新增
          let key2 = key.replace("level", "");
          let value = bodyTestMap[key];
          if (value === undefined || value === null || value === "") continue;
          let level = 1;
          console.log(bodyTest[key]);
          if (bodyTest[key] !== undefined) {
            level = bodyTest[key];
          }
          this.sportsAbilityMap[key2].level = level;
          map.set(key2, this.sportsAbilityMap[key2]);
        } else {
          const value = bodyTestMap[key];
          if (value === undefined || value === null || value === "") continue;
          let level = 1;
          if (bodyTest[`${key}level`] !== undefined) {
            level = bodyTest[`${key}level`];
          }
          this.sportsAbilityMap[key].value = value;
          this.sportsAbilityMap[key].level = level;
          this.sportsAbilityMap[key].flag = false;
          map.set(key, this.sportsAbilityMap[key]);
        }
      }
      return map;
    },

    returnBodyPostureEvaluation(bodyTest) {
      const {
        headforwardangle,
        highLowShoulderangle,
        headyawangle,
        xoLegangle,
        hipforwardangle
      } = bodyTest;
      const bodyTestMap = {
        headforwardangle,
        highLowShoulderangle,
        headyawangle,
        xoLegangle,
        hipforwardangle
      };
      const map = new Map();
      for (let key in bodyTestMap) {
        const angle = bodyTestMap[key];
        if (angle === undefined || angle === null || angle === "") continue;
        const levelKey = this.bodyPostureEvaluation[key].levelKey;
        let level = 1;
        if (bodyTest[`${levelKey}`] !== undefined) {
          level = bodyTest[`${levelKey}`];
        }
        this.bodyPostureEvaluation[key].angle = angle;
        this.bodyPostureEvaluation[key].level = level;
        map.set(key, this.bodyPostureEvaluation[key]);
      }
      return map;
    },
    download() {
      this.isDownload = false;
      const _this = this;
      this.$nextTick(() => {
        html2canvas(this.$refs.healthReportRef, {
          scale: window.devicePixelRatio, // 设置缩放比例，保证清晰度
          useCORS: true, // 使用跨域资源共享，避免跨域问题
          logging: false // 关闭日志输出
        }).then(function (canvas) {
          var link = document.createElement("a");
          link.download = "健康报告.png";
          link.href = canvas.toDataURL();
          link.click();
          _this.isDownload = true;
        });
      });
    },

    openFun(key) {
      this.sportsAbilityMap[key].flag = !this.sportsAbilityMap[key].flag;
    }
  }
});

/***/ }),

/***/ 1356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__ = __webpack_require__(1093);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__health_report_vue__ = __webpack_require__(2078);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__health_report_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__health_report_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "ai-mach-body-test",
  components: { PageHeader: __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default.a, HealthReport: __WEBPACK_IMPORTED_MODULE_1__health_report_vue___default.a },
  props: {},
  data() {
    return {
      g: $,
      editable: $.Util.hasRoleFunc($.Dict.RoleFunc.AI_MACH_CONF.value),
      enableBodyTest: false,
      healthReportDlg: false,
      menuList: $.PageMenus.MachConf("ai-mach-body-test"),
      aiMach: {},
      aiMachList: [],
      selectMachIdx: null,
      bodyTestList: [],
      mbtCount: null,
      aiMachDlg: false,
      aiMachRule: {},
      mackType: "I",
      btId: 3
    };
  },
  computed: {},
  watch: {},
  created() {
    this.queryShopArg();
    this.queryAiMachList();
  },
  mounted() {},
  methods: {
    queryShopArg() {
      $.Req.service($.SvName.SHOP_ARG_QUERY, { typeId: 2105 }, ret => {
        this.enableBodyTest = ret.value === "true";
      });
    },
    queryBodyTestList(page = null) {
      let mach = this.aiMachList[this.selectMachIdx];
      if (!mach.machId) return;
      const args = {
        machId: mach.machId,
        isNeedMachNo: true, // true 返回设备编号
        page
      };
      $.Req.service($.SvName.BODY_TEST_QUERY, args, ret => {
        this.bodyTestList = ret.bodyTestList;
        this.mbtCount = ret.count;
      });
    },

    queryAiMachList() {
      const args = {
        machBrand: 3
      };
      $.Req.service($.SvName.BODY_TEST_MACH_QUERY, args, ret => {
        this.aiMachList = ret.bodyTestMachList;
        this.selectMachIdx = 0;
        if (ret.bodyTestMachList && ret.bodyTestMachList.length) {
          this.queryBodyTestList();
        }
      });
    },

    openNewAiMach() {
      if (!this.enableBodyTest) {
        $.Dlg.warning("贵场馆尚未开通体测系统，如果已购买健总管体测系统，请尽快联系我们售后。", null, false);
        return;
      }
      this.mackType = "I";
      this.aiMach = {
        machNo: null,
        machName: null,
        machBrand: 3
      };
      this.aiMachDlg = true;
    },

    editAiMach(m) {
      this.mackType = "U";
      const { machNo, machId, machName, machBrand, remark } = m;
      this.aiMach = {
        machNo: machNo,
        machId: machId,
        machName: machName,
        machBrand: machBrand,
        remark
      };
      this.aiMachDlg = true;
    },
    delAiMach(idx) {
      let msg = "删除设备配置后会影响设备使用，您确定删除吗？";
      $.Dlg.confirm(msg, yes => {
        let args = { actionType: "D", deleteId: this.aiMachList[idx].machId };
        $.Req.service($.SvName.BODY_TEST_MACH_SAVE, args, ret => {
          $.Msg.success($.Lang.SAVE_SUCCESS);
          this.queryAiMachList();
        });
      });
    },

    changeMach() {
      this.queryBodyTestList();
    },

    submitAiMach() {
      this.$refs.aiMach.validate(valid => {
        if (!valid) return false;

        let actionType = this.mackType;
        if (actionType === "I") {
          if (!confirm("您确定要创建一个智能设备配置吗？")) {
            return false;
          }
        } else {
          if (!confirm("修改设备配置可能会影响到心率系统，您确定提交吗？")) {
            return false;
          }
        }

        let args = {
          actionType: actionType,
          bodyTestMach: this.aiMach
        };
        $.Req.service($.SvName.BODY_TEST_MACH_SAVE, args, ret => {
          $.Msg.success($.Lang.SAVE_SUCCESS);
          this.queryAiMachList();
          this.aiMachDlg = false;
        });
      });
    },
    enterDetails(btId) {
      this.btId = btId;
      this.healthReportDlg = true;
    }
  }
});

/***/ }),

/***/ 1357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__ = __webpack_require__(1093);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_help_vue__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_help_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_help_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	components: { Help: __WEBPACK_IMPORTED_MODULE_1__components_help_vue___default.a, PageHeader: __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default.a },
	data() {
		return {
			g: $,
			menuList: $.PageMenus.MachConf('ai-mach-entrance'),
			editable: $.Util.hasRoleFunc($.Dict.RoleFunc.AI_MACH_CONF.value),
			aiMachList: [],
			aiMachDlg: false,
			aiMach: {
				machBrand: 1,
				machNo: null,
				machType: null,
				allowMoreEntry: 1,
				bathroomType: 0
			},
			requiredFields: ['machName', 'machType', 'machBrand', 'machNo'],
			aiMachRule: {},
			aiMachCardDlg: false,
			aiMachCard: {
				paymentType: null
			},
			cardList: [],
			aiMachCardList: [],
			faceBindDel: {
				dlg: false,
				phoneNo: null,
				userId: null,
				userName: null,
				machNo: null
			},
			enableEntryMach: false,
			enableQrcodeMach: null,
			hasLocker: false,
			bathroomList: [],
			bathroomLogList: null,
			bathroomDlg: false,
			selectMachNo: null,
			staffEntryLog: {
				dlg: null,
				logList: null,
				count: null,
				query: {
					dates: [new Date(), new Date()],
					staffId: null
				}
			},
			staffList: null,
			exportDlg: null,
			exportFileUrl: null,
			queryPage: null,
			enableGlCheckout: null,
			qrcodeMachConfDlg: null,
			qrcodeTimes: null,
			showMoreEntryConf: null
		};
	},

	created() {
		if (this.requiredFields) {
			$.Util.addRequiredFieldsRules(this.aiMachRule, this.requiredFields);
		}
		this.queryAiMachList();
		this.queryCardList();
		this.queryShopArgs();
	},

	methods: {
		queryAiMachList() {
			$.Req.service($.SvName.AI_MACH_QUERY, {}, ret => {
				this.aiMachList = ret.aiMachList;
				this.hasLocker = false;
				for (let m of ret.aiMachList) {
					if (m.machType === 9) {
						this.hasLocker = true;
						break;
					}
				}
			}, true);
		},

		openNewAiMach(machType = null) {
			this.aiMach = {
				machNo: null, machName: null, machBrand: 1, machType: machType, allowMoreEntry: 1,
				bathroomType: 0
			};
			this.aiMachCardList = [];
			this.bathroomList = [];
			this.aiMachDlg = true;
		},

		editAiMach(idx) {
			$.Util.copyAttributes(this.aiMachList[idx], this.aiMach);

			if ($.Util.isEmpty(this.aiMach.allowMoreEntry)) this.aiMach.allowMoreEntry = 1;else if (this.aiMach.allowMoreEntry) this.aiMach.allowMoreEntry = 1;else this.aiMach.allowMoreEntry = 0;

			if (this.aiMach.machType < 4 || this.aiMach.machType === 12 || this.aiMach.machType === 14) {
				this.queryAiMachCardList(this.aiMachList[idx].machId);
			}
			if (this.aiMach.machType === 11) {
				this.queryBathroomList();
			} else {
				this.bathroomList = [];
			}
			if (this.aiMach.allowMoreEntry && this.aiMach.moreEntryLimitMin && this.aiMach.moreEntryLimitTimes) {
				this.showMoreEntryConf = true;
			} else {
				this.showMoreEntryConf = false;
			}
			this.aiMachDlg = true;
		},

		delAiMach(idx) {
			let msg = '删除设备配置后会影响会员签到签出，您确定删除吗？';
			$.Dlg.confirm(msg, yes => {
				let args = { actionType: 'D', deleteId: this.aiMachList[idx].machId };
				$.Req.service($.SvName.AI_MACH_SAVE, args, ret => {
					$.Msg.success($.Lang.SAVE_SUCCESS);
					this.queryAiMachList();
				});
			});
		},

		openNewAiMachCard() {
			this.aiMachCard = {
				cardId: null,
				paymentType: null
			};
			this.aiMachCardDlg = true;
		},

		queryCardList() {
			$.Req.service($.SvName.CARD_QUERY, { status: 0 }, ret => {
				this.cardList = ret.cardList;
			});
		},

		changeCard(cardId) {
			if (!cardId) return;

			for (let c of this.cardList) {
				if (parseInt(c.cardId) === parseInt(cardId)) {
					this.aiMachCard.cardName = c.cardName;
					this.aiMachCard.cardType = c.cardType;
					break;
				}
			}
		},

		submitAiMachCard() {
			// check
			if (!this.aiMachCard.cardId) {
				$.Msg.error('请选择会员卡');
				return;
			}
			if (this.aiMachCard.cardType !== 1) {
				if (!this.aiMachCard.paymentType) {
					$.Msg.error('请选择计费方式');
					return;
				}
				if (!this.aiMachCard.payment) {
					$.Msg.error('请选择计费额');
					return;
				}
			}
			if (!this.aiMachCard.orderNo && this.aiMachCard.orderNo !== 0) {
				$.Msg.error('请输入排序号');
				return;
			}
			if (this.aiMachCard.orderNo > 3000) {
				$.Dlg.error('排序号仅仅是个序号，不能大于3000');
				return;
			}

			if (this.aiMach.machId) {
				this.aiMachCard.machId = this.aiMach.machId;
				let args = {
					aiMachCard: this.aiMachCard,
					actionType: this.aiMachCard.amcId ? 'U' : 'I'
				};
				$.Req.service($.SvName.AI_MACH_CARD_SAVE, args, ret => {
					$.Msg.success($.Lang.SAVE_SUCCESS);
					this.queryAiMachCardList(this.aiMach.machId);
					this.aiMachCardDlg = false;
				});
			} else {
				this.aiMachCardDlg = false;
				let obj = {};
				$.Util.copyAttributes(this.aiMachCard, obj);
				this.aiMachCardList.push(obj);
			}
		},

		submitAiMach() {
			this.$refs.aiMach.validate(valid => {
				if (!valid) return false;

				if (this.aiMach.machType < 4) {
					if (!this.aiMachCardList || !this.aiMachCardList.length) {
						$.Msg.error('请设置会员卡计费');
						return;
					}
				}

				let actionType = this.aiMach.machId ? 'U' : 'I';
				if (actionType === 'I') {
					if (!confirm('您确定要创建一个智能设备配置吗？')) {
						return false;
					}
				} else {
					if (!confirm('修改设备配置可能会影响到会员入场签到签出，您确定提交吗？')) {
						return false;
					}
				}

				let args = {
					actionType: actionType,
					aiMach: this.aiMach
				};
				if (this.aiMach.machType < 4) {
					args.aiMachCardList = this.aiMachCardList;
				}
				if (this.aiMach.machType == 11 && this.aiMach.bathroomType === 0) {
					if (!this.aiMach.bathroomNum || this.aiMach.bathroomNum < 1) {
						$.Msg.error('请输入正确的淋浴间数量');
						return;
					}
					for (let i = 0; i < this.aiMach.bathroomNum; i++) {
						if (!this.bathroomList[i].roomNo) {
							$.Msg.error('请输入第' + (i + 1) + '个淋浴间编号');
							return;
						}
					}
					args.bathroomList = this.bathroomList;
				}
				$.Req.service($.SvName.AI_MACH_SAVE, args, ret => {
					$.Msg.success($.Lang.SAVE_SUCCESS);
					this.queryAiMachList();
					this.aiMachDlg = false;
				});
			});
		},

		queryAiMachCardList(machId) {
			$.Req.service($.SvName.AI_MACH_CARD_QUERY, { machId: machId }, ret => {
				this.aiMachCardList = ret.aiMachCardList;
			}, true);
		},

		editAiMachCard(idx) {
			$.Util.copyAttributes(this.aiMachCardList[idx], this.aiMachCard);
			this.aiMachCardDlg = true;
		},

		delAiMachCard(idx) {
			let msg = '删除设备配置后可能会影响会员签到签出，您确定删除吗？';
			$.Dlg.confirm(msg, yes => {
				let args = { actionType: 'D', deleteId: this.aiMachCardList[idx].amcId };
				$.Req.service($.SvName.AI_MACH_CARD_SAVE, args, ret => {
					$.Msg.success($.Lang.SAVE_SUCCESS);
					this.queryAiMachCardList(this.aiMachCardList[idx].machId);
				});
			});
		},

		openFaceBindDelDlg(machNo) {
			this.faceBindDel.phoneNo = null;
			this.faceBindDel.userName = null;
			this.faceBindDel.userId = null;
			this.faceBindDel.dlg = true;
			this.faceBindDel.machNo = machNo;
		},

		queryUserForDelFace() {
			if (!this.faceBindDel.phoneNo) return;
			if (!$.Util.validatePhoneNo(this.faceBindDel.phoneNo)) {
				$.Msg.error('手机号格式有误');
				return;
			}

			this.faceBindDel.userId = null;
			this.faceBindDel.userName = null;
			let args = { phoneNo: this.faceBindDel.phoneNo };
			$.Req.service($.SvName.STAFF_QUERY, args, ret => {
				if (ret.staffBase) {
					this.faceBindDel.userId = ret.staffBase.uid;
					this.faceBindDel.userName = ret.staffBase.name;
				} else {
					$.Req.service($.SvName.MEMBER_BASE_QUERY, args, ret => {
						if (ret.member) {
							this.faceBindDel.userId = ret.member.uid;
							this.faceBindDel.userName = ret.member.name;
						} else {
							$.Msg.error('系统中未注册此手机号');
						}
					});
				}
			});
		},

		handleDelFaceBind() {
			if (!this.faceBindDel.userId) return;

			let args = { userId: this.faceBindDel.userId, machNo: this.faceBindDel.machNo };
			$.Req.service($.SvName.AI_MACH_FACE_BIND_DELETE, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.faceBindDel.dlg = false;
			});
		},

		queryShopArgs() {
			let args = {
				typeIdList: [$.Dict.ShopArg.ENABLE_ZHIQI_ENTRY_MACH, 2087, 2077, 2089]
			};
			$.Req.service($.SvName.SHOP_ARG_QUERY, args, ret => {
				if ($.Util.hasRoleFunc($.Dict.RoleFunc.MEMBER_AGENT.value)) {
					for (let t of ret.argList) {
						if (t.typeId === $.Dict.ShopArg.ENABLE_ZHIQI_ENTRY_MACH) {
							this.enableEntryMach = t.typeValue === 'true';
						} else if (t.typeId === 2087) {
							this.enableGlCheckout = t.typeValue === 'true';
						} else if (t.typeId === 2077) {
							this.enableQrcodeMach = t.typeValue === 'true';
						} else if (t.typeId === 2089) {
							this.qrcodeTimes = t.typeValue ? parseInt(t.typeValue) : null;
						}
					}
				}
			});
		},

		openDoor(machNo) {
			let args = { deviceId: machNo };
			$.Req.service($.SvName.LOGIN_CALL_FOR_IMSTLIFE, args, ret => {
				if (ret.status === 0) {
					$.Msg.success('已发开门指令');
				} else {
					$.Dlg.error(ret.msg);
				}
			}, true);
		},

		queryBathroomList() {
			if (!this.aiMach.machId) {
				this.bathroomList = [];
				return;
			}

			let args = { machId: this.aiMach.machId };
			$.Req.service($.SvName.AI_MACH_QUERY, args, ret => {
				this.bathroomList = ret.bathroomList;
			});
		},

		changeBathroomNum() {
			for (let i = this.bathroomList.length; i < this.aiMach.bathroomNum; i++) {
				this.bathroomList.push({
					machId: this.aiMach.machId,
					roomNo: null,
					status: 0
				});
			}
		},

		viewBathroomDetail(machNo) {
			this.selectMachNo = machNo;
			this.queryBathroom(machNo);
			this.bathroomDlg = true;
		},

		queryBathroom(machNo) {
			let args = {
				machNo: machNo
			};
			$.Req.service($.SvName.AI_MACH_BATHROOM_QUERY, args, ret => {
				this.bathroomList = ret.bathroomList;
				this.bathroomLogList = ret.bathroomLogList;
				this.bathroomDlg = true;
			}, true);
		},

		updateRoomStatus(ambId, newStatus) {
			if (!confirm('您确定更新状态吗？')) {
				return;
			}

			let args = {
				ambId: ambId,
				newStatus: newStatus
			};
			$.Req.service($.SvName.AI_MACH_BATHROOM_STATUS_UPATE, args, ret => {
				this.queryBathroom(this.selectMachNo);
			}, true);
		},

		queryStaffList() {
			$.Req.service($.SvName.STAFF_QUERY, { status: 0, needBaseInfo: true }, ret => {
				this.staffList = ret.staffList;
			});
		},

		openStaffEntryLog() {
			if (!this.staffList) {
				this.queryStaffList();
			}
			this.queryStafEntryLogList();
			this.staffEntryLog.dlg = true;
		},

		queryStafEntryLogList(page = null, isExport = null) {
			if (!page) this.staffEntryLog.count = null;
			let args = {
				staffId: this.staffEntryLog.query.staffId
			};
			if (this.staffEntryLog.query.dates && this.staffEntryLog.query.dates.length > 1) {
				args.beginDate = this.staffEntryLog.query.dates[0];
				args.endDate = this.staffEntryLog.query.dates[1];
			}
			if (!args.staffId && !args.beginDate && !args.endDate) {
				$.Dlg.warning('请选择日期范围或员工');
				return;
			}
			if ($.Util.calcDateDiffDays(args.endDate, args.beginDate) > 365) {
				$.Dlg.warning('日期范围不能超过365天');
				return;
			}
			if (isExport) {
				args.isExport = true;
				this.exportFileUrl = null;
				this.exportDlg = true;
			}
			this.queryPage = page;
			$.Req.service($.SvName.STAFF_ENTRY_LOG_QUERY, args, ret => {
				if (isExport) {
					this.exportFileUrl = ret.fileurl;
				} else {
					if (!page) this.staffEntryLog.count = ret.count;
					this.staffEntryLog.logList = ret.logList;
				}
			}, true);
		},

		exportStaffEntryLog() {
			this.queryStafEntryLogList(this.queryPage, true);
		}
	}
});

/***/ }),

/***/ 1358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__ = __webpack_require__(1093);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_member_member_select_vue__ = __webpack_require__(1094);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_member_member_select_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__pages_member_member_select_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_member_member_query_input_vue__ = __webpack_require__(1124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_member_member_query_input_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__pages_member_member_query_input_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_member_member_base_info_vue__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_member_member_base_info_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__pages_member_member_base_info_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_help_vue__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_help_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_help_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_cust_cust_detail_vue__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_cust_cust_detail_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__pages_cust_cust_detail_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    Help: __WEBPACK_IMPORTED_MODULE_4__components_help_vue___default.a,
    PageHeader: __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default.a,
    MemberQueryInput: __WEBPACK_IMPORTED_MODULE_2__pages_member_member_query_input_vue___default.a,
    MemberSelect: __WEBPACK_IMPORTED_MODULE_1__pages_member_member_select_vue___default.a,
    MemberBaseInfo: __WEBPACK_IMPORTED_MODULE_3__pages_member_member_base_info_vue___default.a,
    CustDetail: __WEBPACK_IMPORTED_MODULE_5__pages_cust_cust_detail_vue___default.a
  },
  data() {
    return {
      g: $,
      menuList: $.PageMenus.MachConf("ai-mach-hrs"),
      editable: $.Util.hasRoleFunc($.Dict.RoleFunc.AI_MACH_CONF.value),
      enableHrs: false,
      aiMachList: [],
      aiMachDlg: false,
      aiMach: {
        machBrand: 1,
        machNo: null,
        machType: null,
        allowMoreEntry: 1
      },
      interval: 10,
      requiredFields: ["machName", "machType", "machBrand", "machNo"],
      aiMachRule: {},
      aiMachBindDlg: null,
      aiMachBind: {
        memberId: null,
        memberAge: null,
        memberWeight: null,
        wdNo: null // 手环编号
      },
      selectMachIdx: null,
      memberName: null,
      memberSelectDlg: null,
      memberFlag: null,
      viewMemberDlg: null,
      selectMemberId: null,
      mhrList: null,
      mhrCount: null,
      heartRateDetailDlg: null,
      heartRateChartData: null,
      hrsShareDlg: null,
      shareQrcodeUrl: null,
      shareUserName: null,
      selectMember: null,
      wdBindQrcodeDlg: null,
      wdBindQrcodeUrl: null,
      shopId: null,
      pieArr: [{ name: "激活放松" }, { name: "心肺训练" }, { name: "糖分消耗" }, { name: "燃烧脂肪" }, { name: "动态热身" }, { name: "峰值锻炼" }],
      sportRates: null,
      duration: 0,
      paramSetting: {},
      paramSettingDlg: false,
      allowSetting: null,
      custDlgTitle: null,
      custDlgView: null,
      selectCustId: null
    };
  },

  computed: {
    pieChartOption() {
      return {
        title: {
          text: "心率区间",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{b}{c}min"
        },
        legend: {
          orient: "vertical",
          bottom: "22",
          right: "0",
          itemGap: 1,
          data: this.pieArr,
          selectedMode: false,
          formatter: name => {
            let data = this.pieArr;
            let target;
            for (let i = 0, l = data.length; i < l; i++) {
              if (data[i].name == name) {
                target = data[i].value == "--" ? 0 : data[i].value;
              }
            }
            let arr = ["{a|" + target + "min}", "{b|" + name + "}"];
            return arr.join("\n");
          }
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: {
              show: true,
              type: ["pie", "funnel"],
              option: {
                funnel: {
                  x: "25%",
                  width: "50%",
                  funnelAlign: "left",
                  max: 1548
                }
              }
            },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        textStyle: {
          align: "left",
          rich: {
            a: {
              fontSize: 12,
              color: "#1c2438"
            },
            b: {
              fontSize: 12,
              align: "center",
              padding: [20, 10, 10, 0],
              lineHeight: 28,
              color: "#1c2438"
            }
          }
        },
        series: [{
          name: "心率区间",
          type: "pie",
          radius: ["50%", "78%"],
          center: ["50%", "55%"],
          data: this.pieArr,
          avoidLabelOverlap: true, //是否启用防止标签重叠策略
          label: {
            normal: {
              formatter: "{d}%"
            }
          }
        }]
      };
    },
    // 心率曲线（bpm）
    heartRateChartOption() {
      return {
        title: {
          text: "心率曲线（bpm）",
          x: "center"
        },
        grid: { x: 45, y: 50, x2: 30, y2: 30 },
        tooltip: {
          trigger: "axis",
          formatter: "第{b}秒心率值：{c}"
        },
        calculable: false,
        xAxis: [{
          name: "秒", //坐标名字
          nameLocation: "end",
          type: "category",
          boundaryGap: false,
          data: this.heartRateChartData.xdata
        }],
        yAxis: [{
          type: "value",
          axisLabel: {
            formatter: "{value}"
          }
        }],
        series: [{
          name: "心率值",
          type: "line",
          data: this.heartRateChartData.ydata,
          itemStyle: {
            normal: {
              color: "orange",
              label: { show: true }
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
    // 运动强度
    heartRatePercentsChartOption() {
      let _this = this;
      return {
        grid: { x: 45, y: 50, x2: 30, y2: 30 },
        title: {
          text: "运动强度(%)",
          x: "center"
        },
        // legend: {
        //   data: ["运动强度"],
        // },
        tooltip: {
          trigger: "axis",
          formatter: function (item) {
            return "第" + item[0].name + "秒运动强度：" + item[0].data.toFixed(2) + "%";
          }
          //   formatter: "第{b}秒运动强度：{c}%",
        },
        calculable: false,
        xAxis: [{
          name: "秒", //坐标名字
          nameLocation: "end",
          type: "category",
          data: this.heartRateChartData.sportxdata
        }],
        yAxis: [{
          type: "value",
          min: 0,
          max: 100,
          interval: Math.ceil(100 / 5),
          axisLabel: {
            formatter: "{value}"
          }
        }],
        series: [{
          name: "运动强度",
          type: "bar",
          data: this.sportRates,
          itemStyle: {
            normal: {
              barBorderRadius: [5, 5, 0, 0],
              color: function (params) {
                params.belongs = _this.judgeLevel(params.value);
                //自定义颜色
                var colorList = ["#c23531", "#2f4554", "#61a0a8", "#d48265", "#91c7ae", "#749f83"];
                return colorList[params.belongs];
              }
            }
          }
        }]
      };
    }
  },

  created() {
    if (this.requiredFields) {
      $.Util.addRequiredFieldsRules(this.aiMachRule, this.requiredFields);
    }
    this.queryShopId();
    this.queryShopArg();
    this.queryAiMachList();
  },

  methods: {
    queryShopArg() {
      $.Req.service($.SvName.SHOP_ARG_QUERY, { typeId: 2031 }, ret => {
        this.enableHrs = ret.value === "true";
      });
    },

    queryAiMachList() {
      let args = { machType: 10 };
      $.Req.service($.SvName.AI_MACH_QUERY, args, ret => {
        this.aiMachList = ret.aiMachList;
        if (this.aiMachList.some(m => m.machBrand == 2)) {
          this.allowSetting = true;
        } else {
          this.allowSetting = false;
        }
        if (this.aiMachList.length) {
          this.selectMachIdx = 0;
          this.queryMemberHeartRate();
        }
      }, true);
    },

    openNewAiMach(machType = null) {
      if (!this.enableHrs) {
        $.Dlg.warning("贵场馆尚未开通心率系统，如果已购买健总管心率系统，请尽快联系我们售后。", null, false);
        return;
      }

      this.aiMach = {
        machNo: null,
        machName: null,
        machBrand: 1,
        machType: machType,
        allowMoreEntry: 1
      };
      this.aiMachCardList = [];
      this.aiMachDlg = true;
    },

    editAiMach(idx) {
      $.Util.copyAttributes(this.aiMachList[idx], this.aiMach);
      this.aiMachDlg = true;
    },

    delAiMach(idx) {
      let msg = "删除设备配置后会影响设备使用，您确定删除吗？";
      $.Dlg.confirm(msg, yes => {
        let args = { actionType: "D", deleteId: this.aiMachList[idx].machId };
        $.Req.service($.SvName.AI_MACH_SAVE, args, ret => {
          $.Msg.success($.Lang.SAVE_SUCCESS);
          this.queryAiMachList();
        });
      });
    },

    submitAiMach() {
      this.$refs.aiMach.validate(valid => {
        if (!valid) return false;

        let actionType = this.aiMach.machId ? "U" : "I";
        if (actionType === "I") {
          if (!confirm("您确定要创建一个智能设备配置吗？")) {
            return false;
          }
        } else {
          if (!confirm("修改设备配置可能会影响到心率系统，您确定提交吗？")) {
            return false;
          }
        }

        let args = {
          actionType: actionType,
          aiMach: this.aiMach
        };
        $.Req.service($.SvName.AI_MACH_SAVE, args, ret => {
          $.Msg.success($.Lang.SAVE_SUCCESS);
          this.queryAiMachList();
          this.aiMachDlg = false;
        });
      });
    },

    openBindDlg() {
      this.memberName = null;
      this.aiMachBind.memberId = null;
      this.aiMachBind.memberAge = null;
      this.aiMachBind.wdNo = null;
      this.aiMachBindDlg = true;
    },

    afterQueryMember(member) {
      this.selectMember = member;
      this.memberSelectDlg = false;
      if (member && member.memberId) {
        this.aiMachBind.memberId = member.memberId;
        this.memberName = member.name;
        if (member.birthdayYear) {
          this.aiMachBind.memberAge = new Date().getFullYear() - member.birthdayYear;
        }
      } else {
        this.aiMachBind.memberId = null;
      }
    },

    viewMebmerInfo(memberId) {
      this.selectMemberId = memberId;
      this.viewMemberDlg = true;
    },

    queryMemberHeartRate(page = null) {
      if (!page) {
        this.mhrCount = null;
      }
      let mach = this.aiMachList[this.selectMachIdx];
      let args = { machNo: mach.machNo, machBrand: mach.machBrand, page: page };
      $.Req.service($.SvName.MEMBER_HEART_RATE_QUERY, args, ret => {
        this.mhrList = ret.mhrList;
        if (!page) {
          this.mhrCount = ret.count;
        }
      }, true);
    },

    changeMach() {
      this.queryMemberHeartRate();
    },

    submitBind() {
      // check
      if (!this.aiMachBind.memberId) {
        $.Msg.error("请选择会员");
        return;
      }
      if (!this.aiMachBind.wdNo) {
        $.Msg.error("请填写手环编号");
        return;
      }
      if (!this.aiMachBind.memberAge) {
        $.Msg.error("请填写会员年龄");
        return;
      }
      if (!this.aiMachBind.memberWeight) {
        $.Msg.error("请填写会员体重");
        return;
      }

      let mach = this.aiMachList[this.selectMachIdx];
      let args = {
        machNo: mach.machNo,
        memberId: this.aiMachBind.memberId,
        memberAge: this.aiMachBind.memberAge,
        weight: this.aiMachBind.memberWeight,
        wdNo: this.aiMachBind.wdNo,
        machBrand: mach.machBrand
      };
      if (!this.selectMember.avatarPathname) {
        if (this.selectMember.sex) {
          args.headImgUrl = $.Conf.IMG_LIB_URL + "/avatar/m1.jpg";
        } else {
          args.headImgUrl = $.Conf.IMG_LIB_URL + "/avatar/w1.png";
        }
      }

      $.Req.service($.SvName.MEMBER_HEART_RATE_CREATE, args, ret => {
        $.Msg.success($.Lang.OPT_SUCCESS);
        this.queryMemberHeartRate();
        this.aiMachBindDlg = false;
      }, true);
    },

    viewHeartRateDetail(mhr) {
      this.selectMhr = mhr;
      let xdata = [];
      let ydata = [];
      let sportxdata = [];
      let args = {
        mhrId: mhr.mhrId,
        interval: this.interval
      };
      $.Req.service($.SvName.MEMBER_HEART_RATE_STAT, args, res => {
        let list = res.mhrList;
        if (list && list.length > 0) {
          let obj = list[0];
          this.duration = obj.duration;
          let hearts = obj.hearts.split(",");
          this.sportRates = obj.exercise ? obj.exercise.split(",").map(v => v * 100) : null;
          for (let i = 0; i < hearts.length; i++) {
            xdata.push((i + 1) * this.interval);
            ydata.push(hearts[i]);
          }
          for (let k = 1; k <= this.sportRates.length; k++) {
            sportxdata.push(k * this.interval);
          }
          if (obj.exerciseStat && obj.exerciseStat.length > 0) {
            obj.exerciseStat.forEach((ele, ix) => {
              this.$set(this.pieArr[ix], "value", ele == 0 ? "--" : ele);
              this.$set(this.pieArr[ix], "label", { show: ele != 0 });
              this.$set(this.pieArr[ix], "labelLine", { show: ele != 0 });
            });
          }
          this.heartRateChartData = {
            xdata: xdata,
            ydata: ydata,
            sportxdata: sportxdata
          };
          this.heartRateDetailDlg = true;
        }
      }, true);
    },

    unbind(mhr) {
      let args = {
        machNo: mhr.machNo,
        encodeUid: mhr.encodeUid,
        machBrand: mhr.brand,
        wdNo: mhr.wdNo
      };
      $.Req.service($.SvName.HEART_RATE_SYSTEM_UNBIND, args, ret => {
        $.Msg.success($.Lang.OPT_SUCCESS);
        this.queryMemberHeartRate();
      }, true);
    },

    queryShopId() {
      $.Req.service($.SvName.SHOP_ID_QUERY_FOR_MSITE, {}, ret => {
        this.shopId = ret.shopId;
      });
    },

    openShareDlg(mhr) {
      let hrsShareUrl = "https://app.jzongguan.com/run.html#/user-hrs-for-share?encodeTid={0}&mhrId={1}&encodeUid={2}&shopId={3}".format(encodeURIComponent($.data.tenant.encTid), mhr.mhrId, mhr.encodeUid, this.shopId);
      this.shareQrcodeUrl = $.Conf.QR_CODE_URL + encodeURIComponent(hrsShareUrl);
      this.shareUserName = mhr.memberName ? mhr.memberName : mhr.custName;
      this.hrsShareDlg = true;
    },

    openWdBindDlg(mach) {
      let url = "https://app.jzongguan.com/run.html#/hrs-bind-for-imstlife?t={0}&encSid={1}&machNo={2}&machBrand={3}".format(encodeURIComponent($.data.tenant.encTid), encodeURIComponent($.data.shop.encSid), mach.machNo, mach.machBrand);
      this.wdBindQrcodeUrl = $.Conf.QR_CODE_URL + encodeURIComponent(url);
      this.wdBindQrcodeDlg = true;
    },

    delMemberHeartRate(mhr) {
      let userName = mhr.memberId ? mhr.memberName : mhr.custName;
      if (!confirm("确定要删除{0}的这条心率数据吗？".format(userName))) {
        return;
      }

      let args = { mhrId: mhr.mhrId };
      $.Req.service($.SvName.MEMBER_HEART_RATE_DEL, args, ret => {
        $.Msg.success($.Lang.OPT_SUCCESS);
        this.queryMemberHeartRate();
      }, true);
    },

    submitParamSetting() {
      if (!this.paramSetting.hsId) {
        $.Msg.warning("请输入ID");
        return;
      }
      if (!this.paramSetting.hsId) {
        $.Msg.warning("请输入Key");
        return;
      }
      let arg = {
        hsId: this.paramSetting.hsId,
        hsKey: this.paramSetting.hsKey
      };
      $.Req.service($.SvName.SHOP_HEART_SYS_CONF_SAVE, arg, res => {
        $.Msg.success($.Lang.SAVE_SUCCESS);
        this.paramSettingDlg = false;
      }, true);
    },

    openParamSetting() {
      $.Req.service($.SvName.SHOP_HEART_SYS_CONF_QUERY, {}, res => {
        if (res.shopHeartSysConf) {
          let result = res.shopHeartSysConf;
          this.paramSetting.hsId = result.hsId;
          this.paramSetting.hsKey = result.hsKey;
        }
        this.paramSettingDlg = true;
      }, true);
    },

    judgeLevel(val) {
      let level = 0;
      if (val < 40) {
        level = 0;
      } else if (val < 55) {
        level = 1;
      } else if (val < 70) {
        level = 2;
      } else if (val < 80) {
        level = 3;
      } else if (val < 90) {
        level = 4;
      } else {
        level = 5;
      }
      return level;
    },

    viewCust(custId, custName) {
      this.selectCustId = custId;
      this.custDlgTitle = "客户详情 - {0}".format(custName);
      this.custDlgView = true;
    }
  }
});

/***/ }),

/***/ 1359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_help_vue__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_help_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_help_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_page_header_vue__ = __webpack_require__(1093);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_page_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_page_header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ai_mach_locker_log__ = __webpack_require__(2075);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ai_mach_locker_log___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__ai_mach_locker_log__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	components: { AiMachLockerLog: __WEBPACK_IMPORTED_MODULE_2__ai_mach_locker_log___default.a, Help: __WEBPACK_IMPORTED_MODULE_0__components_help_vue___default.a, PageHeader: __WEBPACK_IMPORTED_MODULE_1__components_page_header_vue___default.a },
	data() {
		return {
			g: window.$,
			menuList: $.PageMenus.MachConf('ai-mach-locker'),
			editable: $.Util.hasRoleFunc($.Dict.RoleFunc.AI_MACH_CONF.value),
			machLockerOptPermit: $.Util.hasRoleFunc($.Dict.RoleFunc.AI_MACH_LOCKER_OPT.value),
			aiMachList: null,
			selectMachIdx: 0,
			selectMach: null,
			lockerList: null,
			lockerCreateDlg: false,
			newLockerNames: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
			curLockerNum: 1,
			selectLocker: null,
			lockerDlg: false,
			lockerStat: {},
			member: {
				memberId: null,
				name: null,
				sex: null,
				phoneNo: null
			},
			memberCards: null,
			selectMcId: null,
			showTempLocker: null,
			showHireLocker: null,
			selectLockerFeeCancel: null,
			selectLockerFeeCancelRemark: null,
			feeCanceDlg: null,
			aiMachLockerlogDlg: null
		};
	},

	created() {
		this.queryAiMachList(this.queryAiMachLocker);
	},

	methods: {
		queryAiMachList(callack) {
			$.Req.service($.SvName.AI_MACH_QUERY, { machType: 9 }, ret => {
				this.aiMachList = ret.aiMachList;
				this.selectMach = ret.aiMachList[0];
				if (callack) {
					if (this.aiMachList.length) {
						callack();
					}
				}
			});
		},

		selectAiMach(idx) {
			this.selectMachIdx = idx;
			this.selectMach = this.aiMachList[this.selectMachIdx];
			this.queryAiMachLocker();
		},

		queryAiMachLocker() {
			let machId = this.aiMachList[this.selectMachIdx].machId;
			$.Req.service($.SvName.AI_MACH_LOCKER_QUERY, { machId: machId }, ret => {
				for (let l of ret.lockerList) {
					if (l.isOutdate) l.state = 9;
				}
				this.lockerList = ret.lockerList;
				this.lockerStat = ret;
				if (this.lockerList.length) {
					this.curLockerNum = this.lockerList[this.lockerList.length - 1].lockerNum;
				} else {
					this.curLockerNum = 0;
				}
			}, true);
		},

		openNewLockerDlg() {
			for (let i = 0, len = this.newLockerNames.length; i < len; i++) {
				this.$set(this.newLockerNames, i, null);
			}
			this.lockerCreateDlg = true;
		},

		genLockerNames() {
			let no = this.curLockerNum + 1;
			for (let i = 0, len = this.newLockerNames.length; i < len; i++) {
				let name = '{0}号柜'.format(no + i + 1);
				this.$set(this.newLockerNames, i, name);
			}
		},

		createLockers() {
			let lockerList = [];
			let machId = this.aiMachList[this.selectMachIdx].machId;
			let endIdx = this.newLockerNames.length - 1;
			for (let i = this.newLockerNames.length - 1; i >= 0; i--) {
				if (!this.newLockerNames[i]) endIdx--;else break;
			}
			let startIdx = this.curLockerNum;
			for (let i = 0; i <= endIdx; i++) {
				if (!this.newLockerNames[i]) {
					$.Msg.error('请输入#{0}的柜名'.format(startIdx + i + 1));
					return;
				}
				let locker = {
					machId: machId,
					lockerNum: startIdx + i + 1,
					lockerName: this.newLockerNames[i],
					lockerType: 0
				};
				lockerList.push(locker);
			}
			if (lockerList.length === 0) {
				$.Msg.error('尚未输入柜名');
				return;
			}
			let args = { lockerList: lockerList };
			$.Req.service($.SvName.AI_MACH_LOCKER_CREATE, args, ret => {
				this.lockerCreateDlg = false;
				this.queryAiMachLocker();
			});
		},

		openLockerDlg(idx) {
			this.selectLocker = {};
			this.member.phoneNo = null;
			this.member.memberId = null;
			this.member.name = null;
			$.Util.copyAttributes(this.lockerList[idx], this.selectLocker);
			if (this.selectLocker.lockerType === 1 && this.selectLocker.state === 0) {
				this.selectLocker.beginDate = null;
				this.selectLocker.endDate = null;
				this.selectLocker.paymentAmount = null;
				this.selectLocker.hireId = null;
			}
			this.selectLockerFeeCancel = null;
			if (this.selectLocker.userType === 0) {
				this.calcLockerOutdateFee(this.selectLocker, () => {
					this.lockerDlg = true;
				});
			} else {
				this.lockerDlg = true;
			}
		},

		updateLockerName() {
			if (!this.selectLocker.lockerName) {
				$.Msg.error('柜名不能为空');
				return;
			}
			let args = {
				actionType: 'U',
				amlId: this.selectLocker.amlId,
				newLockerName: this.selectLocker.lockerName
			};
			$.Req.service($.SvName.AI_MACH_LOCKER_UPDATE, args, ret => {
				$.Msg.success($.Lang.SAVE_SUCCESS);
				this.queryAiMachLocker();
				this.lockerDlg = false;
			});
		},

		updateLockerType() {
			let args = {
				actionType: 'U',
				amlId: this.selectLocker.amlId,
				newLockerType: this.selectLocker.lockerType
			};
			$.Req.service($.SvName.AI_MACH_LOCKER_UPDATE, args, ret => {
				$.Msg.success($.Lang.SAVE_SUCCESS);
				this.queryAiMachLocker();
			});
		},

		updateLockerSate(state) {
			let args = {
				actionType: 'U',
				amlId: this.selectLocker.amlId,
				newState: state
			};
			$.Req.service($.SvName.AI_MACH_LOCKER_UPDATE, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.queryAiMachLocker();
				this.lockerDlg = false;
			});
		},

		deleteLocker() {
			let msg = '确定要删除该柜号吗？';
			$.Dlg.confirm(msg, yes => {
				let args = {
					actionType: 'D',
					amlId: this.selectLocker.amlId
				};
				$.Req.service($.SvName.AI_MACH_LOCKER_UPDATE, args, ret => {
					$.Msg.success($.Lang.OPT_SUCCESS);
					this.queryAiMachLocker();
					this.lockerDlg = false;
				});
			});
		},

		queryMember() {
			if (!this.member.phoneNo) {
				this.member = {};
				return;
			}

			if (!$.Util.validatePhoneNo(this.member.phoneNo)) {
				$.Msg.error($.Lang.PHONE_NO_ERR);
				return;
			}
			let args = { phoneNo: this.member.phoneNo };
			$.Req.service($.SvName.MEMBER_BASE_QUERY, args, ret => {
				if (ret.member && ret.member.memberId) {
					this.member = ret.member;
					this.member.phoneNo = args.phoneNo;

					$.Req.service($.SvName.MEMBER_VALUE_CARD_QUERY, args, (ret, systime) => {
						let now = Date.new(systime);
						for (let mc of ret.memberCards) {
							if (mc.currentAmount > 0 && mc.status === 0 && (!mc.endDate || mc.endDate && Date.new(mc.endDate).compareDatePart(now) >= 0)) {
								mc.isValid = true;
							} else {
								mc.isValid = false;
							}
						}
						this.memberCards = ret.memberCards;
					});
				} else {
					this.member = {};
					this.memberCards = null;
					$.Msg.error($.Lang.MEMBER_PHONE_NO_NOT_EXIST);
				}
			});
		},

		saveLockerHire() {
			if (this.selectLocker.state !== 0) {
				$.Msg.error('非空闲柜');
				return;
			}
			if (!this.member.memberId) {
				$.Msg.error('请选择会员');
				return;
			}
			if (!this.selectLocker.beginDate || !this.selectLocker.endDate) {
				$.Msg.error('请输入有效的租用期限');
				return;
			}
			if (this.selectLocker.paymentAmount && $.Util.isEmpty(this.selectLocker.paymentChannel)) {
				$.Msg.error('请选择支付方式');
				return;
			}
			if (this.selectLocker.paymentChannel === 0) {
				if (!this.selectMcId) {
					$.Msg.error('请选择一张储值卡');
					return;
				}
			}

			let args = {
				actionType: this.selectLocker.hireId ? 'U' : 'I',
				lockerHire: {
					amlId: this.selectLocker.amlId,
					memberId: this.member.memberId,
					beginDate: this.selectLocker.beginDate,
					endDate: this.selectLocker.endDate,
					status: 0,
					paymentAmount: this.selectLocker.paymentAmount,
					paymentChannel: this.selectLocker.paymentChannel,
					remark: this.selectLocker.remark
				},
				costMcId: this.selectMcId
			};
			$.Req.service($.SvName.AI_MACH_LOCKER_HIRE_SAVE, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.queryAiMachLocker();
				this.lockerDlg = false;
			}, true);
		},

		returnLockerHire() {
			if (!confirm('您确定还柜吗？')) {
				return;
			}

			let args = {
				hireId: this.selectLocker.hireId
			};
			$.Req.service($.SvName.AI_MACH_LOCKER_HIRE_RETURN, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.queryAiMachLocker();
				this.lockerDlg = false;
			}, true);
		},

		delLockerHire() {
			if (!confirm('您确定取消租用吗？')) {
				return;
			}

			let args = {
				actionType: 'D',
				deleteId: this.selectLocker.hireId
			};
			$.Req.service($.SvName.AI_MACH_LOCKER_HIRE_SAVE, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.queryAiMachLocker();
				this.lockerDlg = false;
			}, true);
		},

		calcLockerOutdateFee(locker, callback) {
			locker.lockerFee = null;
			let mach = this.aiMachList[this.selectMachIdx];
			if (!mach.lockerFeeConf) {
				if (callback) callback();
				return;
			}
			let outdateDays = $.Util.calcDateDiffDays(new Date(), Date.new(locker.optionTime));
			if (outdateDays < 1) {
				if (callback) callback();
				return;
			}
			if (!locker.userId) {
				if (callback) callback();
				return;
			}

			let args = {
				amlId: locker.amlId,
				userId: locker.userId,
				optionTime: locker.optionTime
			};
			$.Req.service($.SvName.AI_MACH_LOCKER_FEE_CANCEL_QUERY, args, ret => {
				this.selectLockerFeeCancel = ret.feeCancel;
				if (!ret.feeCancel) {
					let confList = mach.lockerFeeConf.split(';');
					for (let i = confList.length - 1; i >= 0; i--) {
						let items = confList[i].split(',');
						let fee = parseFloat(items[1]);
						let days = parseInt(items[0]);
						if (days <= outdateDays) {
							locker.lockerFee = fee;
							break;
						}
					}
				}
				if (callback) callback();
			}, true);
		},

		openAiMachFeeCancelDlg() {
			this.selectLockerFeeCancelRemark = null;
			this.feeCanceDlg = true;
		},

		createAiMachFeeCancel() {
			let args = {
				amlId: this.selectLocker.amlId,
				userId: this.selectLocker.userId,
				optionTime: this.selectLocker.optionTime,
				remark: this.selectLockerFeeCancelRemark
			};
			$.Req.service($.SvName.AI_MACH_LOCKER_FEE_CANCEL_CREATE, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.feeCanceDlg = false;
				this.calcLockerOutdateFee(this.selectLocker);
			});
		}
	}
});

/***/ }),

/***/ 1360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__ = __webpack_require__(1093);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_help_vue__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_help_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_help_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	components: { Help: __WEBPACK_IMPORTED_MODULE_1__components_help_vue___default.a, PageHeader: __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default.a },
	data() {
		return {
			g: $,
			menuList: $.PageMenus.MachConf('ai-mach-locker'),
			editable: $.Util.hasRoleFunc($.Dict.RoleFunc.AI_MACH_CONF.value),
			machLockerOptPermit: $.Util.hasRoleFunc($.Dict.RoleFunc.AI_MACH_LOCKER_OPT.value),
			aiMachNoList: [],
			aiMachList: [],
			aiMachDlg: false,
			aiMach: {
				machName: null,
				machBrand: 1,
				machNo: null,
				machType: 9,
				allowMoreEntry: 1
			},
			aiMachRule: {},
			requiredFields: ['machName', 'machType', 'machBrand', 'machNo'],
			enableEntryMach: false,
			lockerFeeList: [],
			memberLimit: {
				etryCheckin: null, gl: null, pl: null
			}
		};
	},

	created() {
		if (this.requiredFields) {
			$.Util.addRequiredFieldsRules(this.aiMachRule, this.requiredFields);
		}
		this.queryAiMachList();
		this.queryAiMachNoList();
	},

	methods: {
		initLockerFeeList() {
			this.lockerFeeList = [[1, null], [2, null], [3, null]];
		},
		queryAiMachList() {
			$.Req.service($.SvName.AI_MACH_QUERY, { machType: 9 }, ret => {
				for (let m of ret.aiMachList) {
					if (m.lockerFeeConf) {
						let confList = [];
						for (let conf of m.lockerFeeConf.split(';')) {
							let items = conf.split(',');
							confList.push('{0}天扣{1}元'.format(items[0], items[1]));
						}
						m.lockerFeeConfDesc = confList.join('、');
					}
				}
				this.aiMachList = ret.aiMachList;
			}, true);
		},

		queryAiMachNoList() {
			$.Req.service($.SvName.SHOP_ARG_QUERY, { typeId: $.Dict.ShopArg.AI_MACH_NO }, ret => {
				if (ret.value) {
					let items = ret.value.split(',');
					for (let i = 0, len = items.length; i < len; i++) {
						this.aiMachNoList.push(parseInt(items[i]));
					}
				} else {
					this.aiMachNoList = [];
				}
			});
		},

		openNewAiMach(machType = null) {
			this.initLockerFeeList();
			this.aiMach = {
				machNo: null, machName: null, machBrand: 1, machType: machType, allowMoreEntry: 1
			};
			this.aiMachDlg = true;
		},

		editAiMach(idx) {
			this.aiMach = {};
			$.Util.copyAttributes(this.aiMachList[idx], this.aiMach);
			if (this.aiMach.lockerFeeConf) {
				this.lockerFeeList = [];
				for (let conf of this.aiMach.lockerFeeConf.split(';')) {
					let items = conf.split(',');
					let days = parseInt(items[0]);
					let fee = parseFloat(items[1]);
					this.lockerFeeList.push([days, fee]);
				}
			} else {
				this.initLockerFeeList();
			}
			if (this.aiMach.lockerUserLimit) {
				let confArr = this.aiMach.lockerUserLimit.split('');
				this.memberLimit.etryCheckin = confArr[0] === '1';
				this.memberLimit.gl = confArr[1] === '1';
				this.memberLimit.pl = confArr[2] === '1';
			} else {
				this.memberLimit.etryCheckin = null;
				this.memberLimit.gl = null;
				this.memberLimit.pl = null;
			}
			this.aiMachDlg = true;
		},

		delAiMach(idx) {
			let msg = '删除设备配置后会影响设备使用，您确定删除吗？';
			$.Dlg.confirm(msg, yes => {
				let args = { actionType: 'D', deleteId: this.aiMachList[idx].machId };
				$.Req.service($.SvName.AI_MACH_SAVE, args, ret => {
					$.Msg.success($.Lang.SAVE_SUCCESS);
					this.queryAiMachList();
				});
			});
		},

		submitAiMach() {
			this.$refs.aiMach.validate(valid => {
				if (!valid) return false;

				let actionType = this.aiMach.machId ? 'U' : 'I';
				if (actionType === 'I') {
					if (!confirm('您确定要创建一个智能设备配置吗？')) {
						return false;
					}
				} else {
					if (!confirm('修改设备配置可能会影响到租柜使用，您确定提交吗？')) {
						return false;
					}
				}
				// gen locker_fee_conf
				let confList = [];
				for (let conf of this.lockerFeeList) {
					let days = parseInt(conf[0]);
					let fee = parseFloat(conf[1]);
					if (days && fee) {
						confList.push('{0},{1}'.format(days, fee));
					}
				}
				if (confList.length) this.aiMach.lockerFeeConf = confList.join(';');else this.aiMach.lockerFeeConf = null;

				if (this.memberLimit.etryCheckin || this.memberLimit.gl || this.memberLimit.pl) {
					let limitConfArr = [0, 0, 0];
					if (this.memberLimit.etryCheckin) limitConfArr[0] = 1;
					if (this.memberLimit.gl) limitConfArr[1] = 1;
					if (this.memberLimit.pl) limitConfArr[2] = 1;
					this.aiMach.lockerUserLimit = limitConfArr.join('');
				} else {
					this.aiMach.lockerUserLimit = null;
				}

				let args = {
					actionType: actionType,
					aiMach: this.aiMach
				};
				$.Req.service($.SvName.AI_MACH_SAVE, args, ret => {
					$.Msg.success($.Lang.SAVE_SUCCESS);
					this.queryAiMachList();
					this.aiMachDlg = false;
				});
			});
		},

		queryEntryMachPermit() {
			let args = { typeId: $.Dict.ShopArg.ENABLE_ZHIQI_ENTRY_MACH };
			$.Req.service($.SvName.SHOP_ARG_QUERY, args, ret => {
				if ($.Util.hasRoleFunc($.Dict.RoleFunc.MEMBER_AGENT.value)) {
					this.enableEntryMach = ret.value === 'true';
				}
			});
		},

		appendLockerFeeConf() {
			this.lockerFeeList.push([null, null]);
		}
	}
});

/***/ }),

/***/ 1361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__ = __webpack_require__(1093);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_member_member_select_vue__ = __webpack_require__(1094);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_member_member_select_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__pages_member_member_select_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_member_member_query_input_vue__ = __webpack_require__(1124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_member_member_query_input_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__pages_member_member_query_input_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_member_member_base_info_vue__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_member_member_base_info_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__pages_member_member_base_info_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_help_vue__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_help_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_help_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_echarts_lib_echarts__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_echarts_lib_echarts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_echarts_lib_echarts__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    Help: __WEBPACK_IMPORTED_MODULE_4__components_help_vue___default.a,
    PageHeader: __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default.a,
    MemberQueryInput: __WEBPACK_IMPORTED_MODULE_2__pages_member_member_query_input_vue___default.a,
    MemberSelect: __WEBPACK_IMPORTED_MODULE_1__pages_member_member_select_vue___default.a,
    MemberBaseInfo: __WEBPACK_IMPORTED_MODULE_3__pages_member_member_base_info_vue___default.a
  },
  data() {
    return {
      g: $,
      menuList: $.PageMenus.MachConf("ai-mach-run"),
      editable: $.Util.hasRoleFunc($.Dict.RoleFunc.AI_MACH_CONF.value),
      enableRun: false,
      aiMachList: [],
      aiMachDlg: false,
      aiMach: {
        machBrand: 1,
        machNo: null,
        machType: 13,
        allowMoreEntry: 1
      },
      interval: 10,
      requiredFields: ["machName", "machType", "machBrand", "machNo"],
      aiMachRule: {},
      aiMachBindDlg: null,
      aiMachBind: {
        memberId: null,
        memberAge: null,
        memberSex: 1,
        memberHeight: null,
        memberWeight: null,
        machShow: '',
        machNo: null // 手环编号
      },
      selectMachIdx: null,
      memberName: null,
      memberSelectDlg: null,
      memberFlag: null,
      viewMemberDlg: null,
      selectMemberId: null,
      mhrList: null,
      mhrCount: null,
      heartRateDetailDlg: null,
      heartRateChartData: null,
      hrsShareDlg: null,
      shareQrcodeUrl: null,
      shareUserName: null,
      selectMember: null,
      wdBindQrcodeDlg: null,
      wdBindQrcodeUrl: null,
      shopId: null,
      pieArr: [{ name: "激活放松" }, { name: "心肺训练" }, { name: "糖分消耗" }, { name: "燃烧脂肪" }, { name: "动态热身" }, { name: "峰值锻炼" }],
      sportRates: null,
      duration: 0
    };
  },

  computed: {
    speedChartOption() {
      return {
        title: {
          text: "时速（km/h)",
          x: "center"
        },
        tooltip: {
          trigger: "axis",
          formatter: function (params) {
            var result = "";
            params.forEach(function (item) {
              result += "时速" + " : " + item.value + "km/h";
            });
            return result;
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [{
          name: "秒", //坐标名字
          nameLocation: "end",
          type: "category",
          boundaryGap: false,
          data: this.heartRateChartData.speedX
        }],
        yAxis: [{
          type: "value",
          splitLine: {
            show: true,
            lineStyle: {
              color: ["rgba(0, 222, 212, .05)"],
              width: 1
            }
          }
        }],
        series: [{
          type: "line",
          smooth: true,
          lineStyle: {
            width: 0
          },
          symbol: "none",
          itemStyle: {
            normal: {
              lineStyle: {
                color: "rgba(253, 53, 101, 1)"
              }
            }
          },
          areaStyle: {
            normal: {
              color: new __WEBPACK_IMPORTED_MODULE_5_echarts_lib_echarts___default.a.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: "rgba(253, 53, 101, 1)"
              }, {
                offset: 1,
                color: "rgba(170, 37, 51, 0.1)"
              }])
            }
          },
          emphasis: {
            focus: "series"
          },
          data: this.heartRateChartData.speedY
        }]
      };
    },
    gradeChartOption() {
      return {
        title: {
          text: "坡度",
          x: "center"
        },
        tooltip: {
          trigger: "axis",
          formatter: function (params) {
            var result = "";
            params.forEach(function (item) {
              result += "坡度" + " : " + item.value;
            });
            return result;
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [{
          name: "秒", //坐标名字
          nameLocation: "end",
          boundaryGap: false,
          type: "category",
          data: this.heartRateChartData.gradeX
        }],
        yAxis: [{
          type: "value",
          splitLine: {
            show: true,
            lineStyle: {
              color: ["rgba(0, 222, 212, .05)"],
              width: 1
            }
          }
        }],
        series: [{
          type: "line",
          smooth: true,
          lineStyle: {
            width: 0
          },
          symbol: "none",
          itemStyle: {
            normal: {
              lineStyle: {
                color: "#61a0a8"
              }
            }
          },
          areaStyle: {
            normal: {
              color: new __WEBPACK_IMPORTED_MODULE_5_echarts_lib_echarts___default.a.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: "#61a0a8"
              }, {
                offset: 1,
                color: "rgba(6, 228, 255, 0.1)"
              }])
            }
          },
          emphasis: {
            focus: "series"
          },
          data: this.heartRateChartData.gradeY
        }]
      };
    },
    pieChartOption() {
      return {
        title: {
          text: "心率区间",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{b}{c}min"
        },
        legend: {
          orient: "vertical",
          bottom: "22",
          right: "0",
          itemGap: 1,
          data: this.pieArr,
          selectedMode: false,
          formatter: name => {
            let data = this.pieArr;
            let target;
            for (let i = 0, l = data.length; i < l; i++) {
              if (data[i].name == name) {
                target = data[i].value == "--" ? 0 : data[i].value;
              }
            }
            let arr = ["{a|" + target + "min}", "{b|" + name + "}"];
            return arr.join("\n");
          }
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: {
              show: true,
              type: ["pie", "funnel"],
              option: {
                funnel: {
                  x: "25%",
                  width: "50%",
                  funnelAlign: "left",
                  max: 1548
                }
              }
            },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        textStyle: {
          align: "left",
          rich: {
            a: {
              fontSize: 12,
              color: "#1c2438"
            },
            b: {
              fontSize: 12,
              align: "center",
              padding: [20, 10, 10, 0],
              lineHeight: 28,
              color: "#1c2438"
            }
          }
        },
        series: [{
          name: "心率区间",
          type: "pie",
          radius: ["50%", "78%"],
          center: ["50%", "55%"],
          data: this.pieArr,
          avoidLabelOverlap: true, //是否启用防止标签重叠策略
          label: {
            normal: {
              formatter: "{d}%"
            }
          }
        }]
      };
    },
    // 心率曲线（bpm）
    heartRateChartOption() {
      return {
        title: {
          text: "心率曲线（bpm）",
          x: "center"
        },
        grid: { x: 45, y: 50, x2: 30, y2: 30 },
        tooltip: {
          trigger: "axis",
          formatter: "第{b}秒心率值：{c}"
        },
        calculable: false,
        xAxis: [{
          name: "秒", //坐标名字
          nameLocation: "end",
          type: "category",
          boundaryGap: false,
          data: this.heartRateChartData.xdata
        }],
        yAxis: [{
          type: "value",
          axisLabel: {
            formatter: "{value}"
          }
        }],
        series: [{
          name: "心率值",
          type: "line",
          data: this.heartRateChartData.ydata,
          itemStyle: {
            normal: {
              color: "orange",
              label: { show: true }
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
    // 运动强度
    heartRatePercentsChartOption() {
      let _this = this;
      return {
        grid: { x: 45, y: 50, x2: 30, y2: 30 },
        title: {
          text: "运动强度(%)",
          x: "center"
        },
        // legend: {
        //   data: ["运动强度"],
        // },
        tooltip: {
          trigger: "axis",
          formatter: function (item) {
            return "第" + item[0].name + "秒运动强度：" + item[0].data.toFixed(2) + "%";
          }
          //   formatter: "第{b}秒运动强度：{c}%",
        },
        calculable: false,
        xAxis: [{
          name: "秒", //坐标名字
          nameLocation: "end",
          type: "category",
          data: this.heartRateChartData.sportxdata
        }],
        yAxis: [{
          type: "value",
          min: 0,
          max: 100,
          interval: Math.ceil(100 / 5),
          axisLabel: {
            formatter: "{value}"
          }
        }],
        series: [{
          name: "运动强度",
          type: "bar",
          data: this.sportRates,
          itemStyle: {
            normal: {
              barBorderRadius: [5, 5, 0, 0],
              color: function (params) {
                params.belongs = _this.judgeLevel(params.value);
                //自定义颜色
                var colorList = ["#c23531", "#2f4554", "#61a0a8", "#d48265", "#91c7ae", "#749f83"];
                return colorList[params.belongs];
              }
            }
          }
        }]
      };
    }
  },

  created() {
    if (this.requiredFields) {
      $.Util.addRequiredFieldsRules(this.aiMachRule, this.requiredFields);
    }
    this.queryShopArg();
    this.queryAiMachList();
    this.queryShopId();
  },

  methods: {
    judgeLevel(val) {
      let level = 0;
      if (val < 40) {
        level = 0;
      } else if (val < 55) {
        level = 1;
      } else if (val < 70) {
        level = 2;
      } else if (val < 80) {
        level = 3;
      } else if (val < 90) {
        level = 4;
      } else {
        level = 5;
      }
      return level;
    },

    queryShopArg() {
      $.Req.service($.SvName.SHOP_ARG_QUERY, { typeId: 2055 }, ret => {
        this.enableRun = ret.value === "true";
      });
    },

    queryAiMachList() {
      let args = { machType: 13 };
      $.Req.service($.SvName.AI_MACH_QUERY, args, ret => {
        this.aiMachList = ret.aiMachList;
        if (this.aiMachList.length) {
          this.selectMachIdx = 0;
          this.queryMemberHeartRate();
        }
      }, true);
    },

    openNewAiMach(machType = null) {
      if (!this.enableRun) {
        $.Dlg.warning("贵场馆尚未开通心率系统，如果已购买健总管心率系统，请尽快联系我们售后。", null, false);
        return;
      }

      this.aiMach = {
        machNo: null,
        machName: null,
        machBrand: 1,
        machType: machType,
        allowMoreEntry: 1
      };
      this.aiMachCardList = [];
      this.aiMachDlg = true;
    },

    editAiMach(idx) {
      $.Util.copyAttributes(this.aiMachList[idx], this.aiMach);
      this.aiMachDlg = true;
    },

    delAiMach(idx) {
      let msg = "删除设备配置后会影响设备使用，您确定删除吗？";
      $.Dlg.confirm(msg, yes => {
        let args = { actionType: "D", deleteId: this.aiMachList[idx].machId };
        $.Req.service($.SvName.AI_MACH_SAVE, args, ret => {
          $.Msg.success($.Lang.SAVE_SUCCESS);
          this.queryAiMachList();
        });
      });
    },

    submitAiMach() {
      this.$refs.aiMach.validate(valid => {
        if (!valid) return false;

        let actionType = this.aiMach.machId ? "U" : "I";
        if (actionType === "I") {
          if (!confirm("您确定要创建一个智能设备配置吗？")) {
            return false;
          }
        } else {
          if (!confirm("修改设备配置可能会影响到心率系统，您确定提交吗？")) {
            return false;
          }
        }

        let args = {
          actionType: actionType,
          aiMach: this.aiMach
        };
        $.Req.service($.SvName.AI_MACH_SAVE, args, ret => {
          $.Msg.success($.Lang.SAVE_SUCCESS);
          this.queryAiMachList();
          this.aiMachDlg = false;
        });
      });
    },

    openBindDlg() {
      this.memberName = null;
      this.aiMachBind.memberId = null;
      this.aiMachBind.memberAge = null;
      //
      let el = this.aiMachList[this.selectMachIdx];
      this.aiMachBind.machShow = el.machNo + '（' + el.machName + '）';
      //
      this.aiMachBind.memberSex = 1;
      this.aiMachBind.memberHeight = null;
      this.aiMachBind.memberWeight = null;
      this.aiMachBindDlg = true;
    },

    afterQueryMember(member) {
      this.selectMember = member;
      this.memberSelectDlg = false;
      if (member && member.memberId) {
        this.aiMachBind.memberId = member.memberId;
        this.memberName = member.name;
        if (member.birthdayYear) {
          this.aiMachBind.memberAge = new Date().getFullYear() - member.birthdayYear;
        }
      } else {
        this.aiMachBind.memberId = null;
      }
    },

    viewMebmerInfo(memberId) {
      this.selectMemberId = memberId;
      this.viewMemberDlg = true;
    },

    queryMemberHeartRate(page = null) {
      if (!page) {
        this.mhrCount = null;
      }
      let mach = this.aiMachList[this.selectMachIdx];
      let args = { machNo: mach.machNo, machBrand: mach.machBrand, page: page };
      $.Req.service($.SvName.MACH_RUN_LOG_QUERY, args, ret => {
        this.mhrList = ret.mrlList;
        if (!page) {
          this.mhrCount = ret.count;
        }
      }, true);
    },

    changeMach() {
      this.queryMemberHeartRate();
    },

    submitBind() {
      // check
      if (!this.aiMachBind.memberId) {
        $.Msg.error("请选择会员");
        return;
      }
      // if (!this.aiMachBind.machNo) {
      //   $.Msg.error("请填写设备编号");
      //   return;
      // }
      if (!this.aiMachBind.memberAge) {
        $.Msg.error("请填写会员年龄");
        return;
      }
      if (!this.aiMachBind.memberWeight) {
        $.Msg.error("请填写会员体重");
        return;
      }

      let mach = this.aiMachList[this.selectMachIdx];
      let args = {
        encodeTid: $.data.tenant.encTid,
        encodeSid: $.data.shop.encSid,
        machNo: mach.machNo,
        memberId: this.aiMachBind.memberId,
        name: this.memberName,
        age: this.aiMachBind.memberAge,
        sex: this.aiMachBind.memberSex,
        weight: this.aiMachBind.memberWeight,
        height: this.aiMachBind.memberHeight,
        machBrand: mach.machBrand
      };
      if (!this.selectMember.avatarPathname) {
        if (this.selectMember.sex) {
          args.headImgUrl = $.Conf.IMG_LIB_URL + "/avatar/m1.jpg";
        } else {
          args.headImgUrl = $.Conf.IMG_LIB_URL + "/avatar/w1.png";
        }
      }

      $.Req.service($.SvName.MACH_RUN_BIND, args, ret => {
        $.Msg.success($.Lang.OPT_SUCCESS);
        this.queryMemberHeartRate();
        this.aiMachBindDlg = false;
      }, true);
    },

    viewHeartRateDetail(mhr) {
      this.selectMhr = mhr;
      let xdata = [];
      let ydata = [];
      let sportxdata = [];
      let speedX = [];
      let speedY = [];
      let gradeX = [];
      let gradeY = [];
      let args = {
        logId: mhr.logId,
        interval: this.interval
      };
      $.Req.service($.SvName.MACH_RUN_LOG_STAT, args, res => {
        let list = res.mrlList;
        if (list && list.length > 0) {
          let obj = list[0];
          this.duration = Math.ceil(obj.runTime / 60);
          let hearts = obj.hearts.split(",");
          this.sportRates = obj.exercise ? obj.exercise.split(",").map(v => v * 100) : null;
          //
          let speedArr = obj.speeds.split(",");
          let gradesArr = obj.grades.split(",");
          for (let a = 0; a < speedArr.length; a++) {
            let cur = speedArr[a];
            speedX.push(cur.substring(0, cur.indexOf("-")));
            speedY.push(cur.substring(cur.indexOf("-") + 1, cur.length));
          }
          for (let b = 0; b < gradesArr.length; b++) {
            let cur = gradesArr[b];
            gradeX.push(cur.substring(0, cur.indexOf("-")));
            gradeY.push(cur.substring(cur.indexOf("-") + 1, cur.length));
          }
          for (let i = 0; i < hearts.length; i++) {
            xdata.push((i + 1) * this.interval);
            ydata.push(hearts[i]);
          }
          for (let k = 1; k <= this.sportRates.length; k++) {
            sportxdata.push(k * this.interval);
          }
          if (obj.exerciseStat && obj.exerciseStat.length > 0) {
            obj.exerciseStat.forEach((ele, ix) => {
              this.$set(this.pieArr[ix], "value", ele == 0 ? "--" : ele);
              this.$set(this.pieArr[ix], "label", { show: ele != 0 });
              this.$set(this.pieArr[ix], "labelLine", { show: ele != 0 });
            });
          }
          this.heartRateChartData = {
            xdata: xdata,
            ydata: ydata,
            sportxdata: sportxdata,
            speedX: speedX,
            speedY: speedY,
            gradeX: gradeX,
            gradeY: gradeY
          };
          this.heartRateDetailDlg = true;
        }
      }, true);
    },

    // 有氧设备无解绑
    unbind(mhr) {
      let args = {
        machNo: mhr.machNo,
        encodeUid: mhr.encodeUid,
        machBrand: mhr.brand,
        wdNo: mhr.wcNo
      };
      $.Req.service($.SvName.HEART_RATE_SYSTEM_UNBIND, args, ret => {
        $.Msg.success($.Lang.OPT_SUCCESS);
        this.queryMemberHeartRate();
      }, true);
    },

    queryShopId() {
      $.Req.service($.SvName.SHOP_ID_QUERY_FOR_MSITE, {}, ret => {
        this.shopId = ret.shopId;
      });
    },

    openShareDlg(mhr) {
      let hrsShareUrl = "https://app.jzongguan.com/run.html#/user-run-for-share?encodeTid={0}&mhrId={1}&encodeUid={2}&shopId={3}".format(encodeURIComponent($.data.tenant.encTid), mhr.logId, mhr.encodeUid, this.shopId);
      this.shareQrcodeUrl = $.Conf.QR_CODE_URL + encodeURIComponent(hrsShareUrl);
      this.shareUserName = mhr.memberName ? mhr.memberName : mhr.custName;
      this.hrsShareDlg = true;
    },

    openWdBindDlg(mach) {
      let url = "https://app.jzongguan.com/run.html#/run-bind-for-imstlife?t={0}&encSid={1}&machNo={2}&machBrand={3}".format(encodeURIComponent($.data.tenant.encTid), encodeURIComponent($.data.shop.encSid), mach.machNo, mach.machBrand);
      this.wdBindQrcodeUrl = $.Conf.QR_CODE_URL + encodeURIComponent(url);
      this.wdBindQrcodeDlg = true;
    },

    delMemberHeartRate(mhr) {
      let userName = mhr.memberId ? mhr.memberName : mhr.custName;
      if (!confirm("确定要删除{0}的这条心率数据吗？".format(userName))) {
        return;
      }

      let args = { logId: mhr.logId };
      $.Req.service($.SvName.MACH_RUN_LOG_DEL, args, ret => {
        $.Msg.success($.Lang.OPT_SUCCESS);
        this.queryMemberHeartRate();
      }, true);
    }
  }
});

/***/ }),

/***/ 1362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__ = __webpack_require__(1093);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_help_vue__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_help_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_help_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dy_help_vue__ = __webpack_require__(2077);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dy_help_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__dy_help_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { PageHeader: __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default.a, Help: __WEBPACK_IMPORTED_MODULE_1__components_help_vue___default.a, DyHelp: __WEBPACK_IMPORTED_MODULE_2__dy_help_vue___default.a },
  props: {},
  data() {
    return {
      g: $,
      menuList: $.PageMenus.DyVerifyConf("dy-platform-bind"),
      dyProductRole: $.Util.hasRoleFunc($.Dict.RoleFunc.POI_PRODUCT_GET.value),
      dyPowerRole: $.Util.hasRoleFunc(),
      poicList: [],
      productTypeMap: {
        1: "团购",
        11: "代金券",
        15: "次卡"
      },
      totalCount: null,
      dyAppRoleShow: false,
      dyShow: false,
      dyConf: {},
      dyConfList: [],
      dyGoodsBindCard: {
        poicId: null,
        productName: null,
        cardId: null,
        cardDays: null,
        cardTimes: null,
        cardAmount: null
      },
      dyGoodsBindCardRule: {},
      dyGoodsBindCardFileds: ["cardId", "cardDays", "cardTimes", "cardAmount"],
      cardListShow: false,
      cardList: [],
      selectCard: null,
      accountId: "",
      dyHelpShow: false
    };
  },
  computed: {},
  watch: {
    cardListShow(newVal) {
      if (!newVal) {
        this.dyGoodsBindCard.poicId = null;
        this.dyGoodsBindCard.cardId = null;
      }
    }
  },
  created() {
    this.dyAppConfQuery(() => {
      if (this.dyConf) {
        this.cardQuery();
        this.dyGoodsQuery(1);
      }
    });
  },
  mounted() {},
  methods: {
    jumpChick() {
      this.dyAppRoleShow = false;
      this.dyHelpShow = true;
    },
    dyAppConfQuery(callback) {
      $.Req.service($.SvName.POI_APP_CONF_QUERY, {}, ret => {
        this.dyConf = ret.conf;
        if (callback) {
          callback();
        }
      });
    },
    doubleHandleFun() {
      $.Dlg.confirm("是否确定重新授权？", () => {
        this.dyAppRoleShow = true;
      });
    },
    dyGoodsQuery(page = null, callback = null) {
      const args = {
        page,
        type: 1
      };
      $.Req.service($.SvName.POI_APP_CARD_QUERY, args, ret => {
        this.poicList = ret.poicList;
        this.totalCount = ret.count;
        if (callback) {
          callback();
        }
      }, true);
    },

    cardQuery() {
      $.Req.service($.SvName.CARD_QUERY, { queryType: 2, status: 0 }, ret => {
        this.cardList = ret.cardList;
      });
    },
    dyAppAuchorizeFun() {
      if (!this.accountId) return $.Dlg.error("请输入抖音商户id");
      const args = {
        accountId: this.accountId
      };
      $.Req.service($.SvName.POI_APP_AUTHORIZE, args, ret => {
        if (ret.confList && ret.confList.length) {
          this.dyConfList = ret.confList;
          this.dyShow = true;
        }
        if (ret.conf) {
          $.Msg.success("授权成功！");
          this.dyAppRoleShow = false;
          this.accountId = "";
          this.dyConf = ret.conf;
        }
      }, true);
    },
    cardSynchronousFun() {
      $.Req.service($.SvName.POI_APP_CARD_SYNCHRONISE, {}, () => {
        this.dyGoodsQuery(1, () => {
          $.Msg.success("同步成功！");
        });
      }, true);
    },

    selectShopFun(conf) {
      const args = {
        conf
      };
      $.Req.service($.SvName.POI_APP_AUTHORIZE_SELECT, args, ret => {
        if (ret.conf.accountId) {
          $.Msg.success("授权成功！");
          this.dyAppRoleShow = false;
          this.accountId = "";
          this.dyConf = ret.conf;
          this.dyShow = false;
        }
      });
    },
    selectCardFun(m) {
      this.selectCard = m;
      this.cardListShow = true;
      const { poicId, productName, cardId, cardDays, cardTimes, cardAmount } = m;
      this.dyGoodsBindCard = {
        productName,
        poicId,
        cardId,
        cardDays,
        cardTimes,
        cardAmount
      };
    },
    changeCardFun(c) {
      this.selectCard = this.cardList.find(item => item.cardId === this.dyGoodsBindCard.cardId);
    },
    cancelCardFun(m) {
      $.Dlg.confirm("是否确定取消？", () => {
        let args = { poicId: m.poicId };
        $.Req.service($.SvName.POI_APP_CARD_UPDATE, args, ret => {
          $.Msg.success("取消绑定成功！");
          this.dyGoodsQuery();
        });
      });
    },
    selectMtGoodsBindCardFun() {
      const card = this.selectCard;
      if (!card.cardId) {
        return $.Dlg.info("请选择绑定会员卡");
      }
      const args = {
        poicId: this.dyGoodsBindCard.poicId,
        cardId: this.dyGoodsBindCard.cardId,
        cardDays: this.dyGoodsBindCard.cardDays,
        cardTimes: this.dyGoodsBindCard.cardTimes,
        cardAmount: this.dyGoodsBindCard.cardAmount
      };
      if (card.cardType === 1 && !args.cardDays) {
        return $.Dlg.info("您所选是期限卡，有效期为必填");
      }
      if ((card.cardType === 2 || card.cardType === 4) && !args.cardTimes) {
        return $.Dlg.info("您所选是次卡/计时卡，使用次数/分钟数为必填");
      }
      if (card.cardType === 3 && !args.cardAmount) {
        return $.Dlg.info("您所选是储值卡，充值金额为必填");
      }
      $.Req.service($.SvName.POI_APP_CARD_UPDATE, args, ret => {
        $.Msg.success("绑定成功！");
        this.cardListShow = false;
        this.dyGoodsQuery(1);
      });
    }
  }
});

/***/ }),

/***/ 1363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cust_cust_detail_vue__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cust_cust_detail_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__cust_cust_detail_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_member_member_base_info_vue__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_member_member_base_info_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__pages_member_member_base_info_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_page_header_vue__ = __webpack_require__(1093);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_page_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_page_header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_help_vue__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_help_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_help_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    PageHeader: __WEBPACK_IMPORTED_MODULE_2__components_page_header_vue___default.a,
    MemberBaseInfo: __WEBPACK_IMPORTED_MODULE_1__pages_member_member_base_info_vue___default.a,
    Help: __WEBPACK_IMPORTED_MODULE_3__components_help_vue___default.a,
    CustDetail: __WEBPACK_IMPORTED_MODULE_0__cust_cust_detail_vue___default.a
  },
  props: {},
  data() {
    return {
      g: $,
      menuList: $.PageMenus.DyVerifyConf("dy-verify-coupon"),
      query: {
        memberPhoneNo: null,
        memberName: null,
        title: null,
        status: null,
        beginDate: null,
        endDate: null,
        page: 0,
        grouponType: null
      },
      grouponType: {
        1: "团购券",
        2: "代金券",
        3: "次卡"
      },
      viewMemberId: null,
      viewMemberDlg: null,
      detailsShow: false,
      buyCouponShow: false,
      couponShow: false,
      dateList: [],
      totalCount: 1,
      orderList: [],
      orderMap: {
        title: ""
      },
      couponInfo: {
        memberPhoneNo: null,
        memberName: null,
        code: null,
        memberSex: 1,
        count: null,
        isTrial: 0
      },
      couponRule: {},
      status: {
        1: "核销成功",
        2: "已撤销",
        3: "部分撤销"
      },
      isVerify: false,
      dyConsumeRole: $.Util.hasRoleFunc($.Dict.RoleFunc.POI_CONSUME.value),
      dyReverseConsumeRole: $.Util.hasRoleFunc($.Dict.RoleFunc.POI_REVERSE_CONSUME.value),
      buyCouponList: [],
      order: {
        poipId: null
      },
      custDlgTitle: null,
      custDlgView: false
    };
  },
  computed: {},
  watch: {
    detailsShow(newVal) {
      if (!newVal) {
        this.isVerify = false;
      }
    }
  },
  created() {},
  mounted() {
    this.queryVerify();
  },
  methods: {
    queryVerify(page = null) {
      this.query.page = page || 1;
      const args = Object.assign({}, this.query);
      args.page = page;
      $.Req.service($.SvName.POI_APP_ORDER_QUERY, args, ret => {
        this.orderList = ret.orderList;
        this.totalCount = ret.count;
      }, true);
    },
    changeDateFun(data) {
      this.query.beginDate = data[0];
      this.query.endDate = data[1];
    },
    resetQuery() {
      this.query = {};
    },

    details(order) {
      this.orderMap = order;
      this.detailsShow = true;
    },
    revokeBtn(order) {
      this.order = {
        poipId: null
      };
      const { count, productList } = Object.assign({}, order);
      if (count === 1) {
        this.order.poipId = productList[0].poipId;
        this.revokeVerifyFun();
      }
      if (count > 1) {
        this.buyCouponShow = true;
        let buyCouponList = [];
        let newReceiptCodes = productList;
        newReceiptCodes.forEach(bItem => {
          const obj = {
            code: bItem.originCode,
            poipId: bItem.poipId,
            isVerify: bItem.isCancel
          };
          buyCouponList.push(obj);
        });
        this.buyCouponList = buyCouponList;
      }
    },
    revokeVerifyFun() {
      if (!this.order.poipId) {
        return $.Dlg.info("请选择券码");
      }
      $.Dlg.confirm("是否要撤销操作？", () => {
        const args = {
          poipId: this.order.poipId
        };

        $.Req.service($.SvName.POI_APP_ORDER_CANCEL, args, ret => {
          this.order = {
            poipId: null
          };
          this.buyCouponShow = false;
          this.$nextTick(() => {
            $.Msg.success("撤销成功！");
          });
          this.queryVerify();
        }, true, err => {
          this.order = {
            poipId: null
          };
          this.buyCouponShow = false;
          alert(err);
        });
      });
    },
    couponQuery() {
      const { memberPhoneNo, code } = this.couponInfo;
      if (!memberPhoneNo) {
        return $.Dlg.info("请输入【手机号】");
      }
      if (!$.Util.validatePhoneNo(memberPhoneNo)) {
        return $.Msg.info("请输入正确的【手机号】");
      }
      if (!code) {
        return $.Dlg.info("请输入【券号】");
      }
      const args = {
        memberPhoneNo,
        code
      };
      $.Req.service($.SvName.POI_APP_ORDER_CHECK, args, ret => {
        if (ret.order) {
          this.orderMap = ret.order;
          this.couponInfo.memberName = ret.order.memberName;
          this.couponInfo.memberSex = ret.order.memberSex ? 1 : 0;
          // this.couponInfo.count = ret.order.count;
          this.isVerify = true;
          this.detailsShow = true;
          if (!ret.order.cardId) {
            this.couponInfo.isTrial = 1;
          }
        }
      }, true);
    },
    verifyCoupon() {
      const { memberPhoneNo, memberName, code, memberSex, count, isTrial } = this.couponInfo;
      if (!this.couponInfo.memberName) {
        return $.Dlg.info("请输入姓名");
      }
      if (!count && this.orderMap.count > 1) {
        return $.Msg.info("请输入【本次核销数量】");
      }
      $.Dlg.confirm("是否确定此操作？", () => {
        if (this.orderMap.count < count) {
          this.couponInfo.count = null;
          return $.Dlg.info("核销数量大于剩余的商品数量请重新输入");
        }
        const args = {
          memberPhoneNo,
          memberSex,
          memberName,
          code,
          count
        };
        if (isTrial) {
          args.isTrial = true;
        } else {
          args.isTrial = false;
        }
        $.Req.service($.SvName.POI_APP_ORDER_CREATE, args, ret => {
          this.couponInfo = {
            memberSex: 1,
            memberName: null,
            memberPhoneNo: null,
            code: null,
            count: null,
            isTrial: args.isTrial ? 1 : 0
          };
          this.detailsShow = false;
          $.Msg.success("操作成功！");
          this.resetQuery();
          this.queryVerify();
        }, true, msg => {
          $.Dlg.info(msg);
          this.detailsShow = false;
        });
      });
    },
    viewMemberBase(o) {
      const { memberPhoneNo } = o;
      const args = {
        nameOrPhone: memberPhoneNo
      };
      $.Req.service($.SvName.MEMBER_ADV_QUERY, args, ret => {
        if (ret.srcMember) {
          this.viewMemberId = ret.srcMember.memberId;
          this.viewMemberDlg = true;
        } else {
          this.custQuery(memberPhoneNo);
        }
      }, true);
    },
    viewCust(c) {
      this.selectCustId = c.custId;
      this.custDlgTitle = "客户详情 - {0}（手机号：{1}）".format(c.name, $.Util.formatPhone(c.phoneNo));
      this.custDlgView = true;
    },
    custQuery(phoneNo) {
      const args = {
        phoneNo
      };
      $.Req.service($.SvName.CUST_QUERY, args, ret => {
        if (ret.cust) {
          this.viewCust(ret.cust);
        }
      });
    }
  }
});

/***/ }),

/***/ 1364:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
			editable: $.Util.hasRoleFunc($.Dict.RoleFunc.LOCKER_EDIT.value),
			viewPermit: $.Util.hasRoleFunc($.Dict.RoleFunc.LOCKER_QUERY.value),
			lockerAreaList: [],
			lockerArea: {
				laId: null,
				areaName: null
			},
			newLockerNoList: ['', '', '', '', '', '', '', '', '', ''],
			dlgView: {
				locker: false,
				lockerArea: false,
				lockerCreate: false,
				lockerUpdate: false,
				lockerList: false,
				lockeHireCreate: false,
				lockeHireUpdate: false,
				noticeConf: false
			},
			selectAreaIdx: null,
			selectAreaName: null,
			lockerList: [],
			selectLockerIdx: null,
			selectLockerAreaName: null,
			editLockerIdx: null,
			editLockerNo: null,
			lockerHireList: [],
			lockerHireStat: { hiring: 0, returned: 0, outdate: 0 },
			member: {
				memberId: null,
				name: null,
				sex: null,
				phoneNo: null
			},
			memberCards: null,
			selectMcId: null,
			lockerHire: {
				memberId: null,
				beginDate: new Date(),
				endDate: null,
				laId: null,
				lockerId: null,
				fee: null,
				paymentChannel: null
			},
			lockerHireQuery: {
				status: 1,
				memberPhoneNo: null,
				page: null
			},
			lockerHireCount: null,
			noticeArg: {
				smsEnable: false,
				days: new Array(3)
			}
		};
	},

	created() {
		if (this.viewPermit || this.editable) {
			this.queryLockerArea();
			this.statLockerHireCount();
			this.queryLockerHire();
		}
	},

	methods: {
		queryLockerArea() {
			$.Req.service($.SvName.LOCKER_AREA_QUERY, {}, ret => {
				this.lockerAreaList = ret.lockerAreaList;
			});
		},

		openLockerAreaDlg() {
			this.lockerArea = {
				laId: null,
				areaName: null,
				lockerNum: null,
				usableLockerNum: null
			};
			this.dlgView.lockerArea = true;
		},

		openLockerAreaDlgForEdit(idx) {
			$.Util.copyAttributes(this.lockerAreaList[idx], this.lockerArea);
			this.dlgView.lockerArea = true;
		},

		saveLockerArea() {
			if (!this.lockerArea.areaName) {
				$.Msg.error('请输入区域名称');
				return;
			}

			let args = {
				actionType: this.lockerArea.laId ? 'U' : 'I',
				lockerArea: this.lockerArea
			};
			$.Req.service($.SvName.LOCKER_AREA_SAVE, args, ret => {
				$.Msg.success($.Lang.SAVE_SUCCESS);
				this.dlgView.lockerArea = false;
				this.queryLockerArea();
			});
		},

		deleteLockerArea(idx) {
			let area = this.lockerAreaList[idx];
			let msg = '确定要删除【{0}】吗？ 删除后，区域下的租柜将自动全部删除。'.format(area.areaName);
			$.Dlg.confirm(msg, yes => {
				let args = { actionType: 'D', deleteId: area.laId };
				$.Req.service($.SvName.LOCKER_AREA_SAVE, args, ret => {
					$.Msg.success($.Lang.OPT_SUCCESS);
					this.queryLockerArea();
				});
			});
		},

		openLockerCreateDlg(idx) {
			this.selectAreaIdx = idx;
			let area = this.lockerAreaList[this.selectAreaIdx];
			this.selectAreaName = area.areaName;
			this.selectAreaId = area.laId;
			for (let i = 0, len = this.newLockerNoList.length; i < len; i++) {
				this.$set(this.newLockerNoList, i, null);
			}
			this.dlgView.lockerCreate = true;
		},

		genLockerNos() {
			if (!this.newLockerNoList[0]) {
				$.Msg.info('请输入第一个柜号（数字类型）');
				return;
			}
			if (!$.Util.isInteger(this.newLockerNoList[0])) {
				$.Msg.info('请输入数字类型的柜号' + this.newLockerNoList[0]);
				return;
			}

			let firstNo = parseInt(this.newLockerNoList[0]);
			for (let i = 1, len = this.newLockerNoList.length; i < len; i++) {
				this.$set(this.newLockerNoList, i, firstNo + i);
			}
		},

		createLocker() {
			let lockerNoList = [];
			for (let no of this.newLockerNoList) {
				if (no) {
					lockerNoList.push(no);
				}
			}
			if (lockerNoList.length > 0) {
				let args = { areaId: this.lockerAreaList[this.selectAreaIdx].laId, lockerNoList: lockerNoList };
				$.Req.service($.SvName.LOCKER_CREATE, args, ret => {
					$.Msg.success($.Lang.SAVE_SUCCESS);
					this.dlgView.lockerCreate = false;
					this.queryLockerArea();
				});
			} else {
				$.Msg.info($.Lang.NO_INPUT);
			}
		},

		viewLockerList(areaIdx) {
			this.selectAreaIdx = areaIdx;
			let area = this.lockerAreaList[areaIdx];
			this.selectAreaName = area.areaName;
			this.queryLocerListByArea(area.laId, ret => {
				this.lockerList = ret.lockerList;
				if (this.lockerList.length > 0) {
					this.dlgView.lockerList = true;
					this.selectLockerIdx = null;
					this.editLockerIdx = null;
					this.editLockerNo = null;
				} else {
					$.Msg.info('该区域尚未添加租柜');
				}
			});
		},

		queryLocerListByArea(areaId, callback) {
			let args = { areaId: areaId };
			$.Req.service($.SvName.LOCKER_QUERY, args, ret => {
				callback(ret);
			}, true);
		},

		selectLocker(idx) {
			this.selectLockerIdx = idx;
			if (this.editLockerIdx !== null) {
				this.editLockerIdx = idx;
				this.editLockerNo = this.lockerList[this.editLockerIdx].lockerNo;
			}
		},

		handleEditLocker() {
			if ($.Util.isEmpty(this.selectLockerIdx)) {
				$.Msg.warning('请选择需编辑的租柜');
				return;
			}
			this.editLockerIdx = this.selectLockerIdx;
			this.editLockerNo = this.lockerList[this.editLockerIdx].lockerNo;
		},

		updateLocker() {
			if (!this.editLockerNo) {
				$.Msg.error('请输入租柜号');
				return;
			}
			let args = {
				actionType: 'U',
				lockerId: this.lockerList[this.editLockerIdx].lockerId,
				lockerNo: this.editLockerNo
			};
			let areaId = this.lockerAreaList[this.selectAreaIdx].laId;
			$.Req.service($.SvName.LOCKER_UPDATE, args, ret => {
				this.queryLocerListByArea(areaId, r => {
					this.lockerList = r.lockerList;
					$.Msg.success($.Lang.SAVE_SUCCESS);
				});
			});
		},

		delLocker() {
			if (this.selectLockerIdx === null) {
				$.Msg.error('请选择一个租柜号');
				return;
			}

			let locker = this.lockerList[this.selectLockerIdx];
			let msg = '你确定要删除租柜【{0}】吗？'.format(locker.lockerNo);
			$.Dlg.confirm(msg, yes => {
				let areaId = this.lockerAreaList[this.selectAreaIdx].laId;
				let args = { actionType: 'D', lockerId: locker.lockerId, areaId: areaId };
				$.Req.service($.SvName.LOCKER_UPDATE, args, ret => {
					this.queryLocerListByArea(areaId, r => {
						this.lockerList = r.lockerList;
						$.Msg.success($.Lang.SAVE_SUCCESS);
					});
					let area = this.lockerAreaList[this.selectAreaIdx];
					area.lockerNum -= 1;
					this.$set(this.lockerAreaList, this.selectAreaIdx, area);
				});
			});
		},

		openLockerHireCreateDlg() {
			this.member = {};
			this.lockerHire.laId = null;
			this.lockerHire.endDate = null;
			this.lockerHire.fee = null;
			this.lockerHire.createTime = null;
			this.lockerList = [];
			this.selectMcId = null;
			this.memberCards = null;
			this.dlgView.lockeHireCreate = true;
			this.selectLockerIdx = null;
		},

		changeLockerArea(laId) {
			this.lockerHire.laId = laId;
			this.selectLockerIdx = null;
			for (let la of this.lockerAreaList) {
				if (laId === la.laId) {
					this.selectLockerAreaName = la.areaName;
					break;
				}
			}
			this.queryLocerListByArea(laId, ret => {
				this.lockerList = ret.lockerList;
			});
		},

		selectLockerForHire(lockerIdx) {
			if (this.lockerList[lockerIdx].status === 1) {
				$.Msg.warning('此租柜已出租');
				return;
			}
			this.selectLockerIdx = lockerIdx;
		},

		queryMember() {
			if (!this.member.phoneNo) {
				this.member = {};
				return;
			}

			if (!$.Util.validatePhoneNo(this.member.phoneNo)) {
				$.Msg.error($.Lang.PHONE_NO_ERR);
				return;
			}
			let args = { phoneNo: this.member.phoneNo };
			$.Req.service($.SvName.MEMBER_BASE_QUERY, args, ret => {
				if (ret.member && ret.member.memberId) {
					this.member = ret.member;
					this.member.phoneNo = args.phoneNo;

					$.Req.service($.SvName.MEMBER_VALUE_CARD_QUERY, args, ret => {
						/*if (ret.member && ret.needPassword) {
      	let passwd = window.prompt("会员未授权直接使用储值卡消费，请输入会员登录密码");
      	if (passwd) {
      		this.memberQuery.passwd = passwd;
      		this.queryMemberValueCard(false);
      	}
      	return;
      }*/
						this.memberCards = ret.memberCards;
					});
				} else {
					this.member = {};
					this.memberCards = null;
					$.Msg.error($.Lang.MEMBER_PHONE_NO_NOT_EXIST);
				}
			});
		},

		createLockerHire() {
			if (!this.member.memberId) {
				$.Msg.error('请输入有效的会员手机号');
				return;
			}
			if (!this.lockerHire.beginDate || !this.lockerHire.endDate) {
				$.Msg.error('请输入有效的租用期限');
				return;
			}
			if (this.selectLockerIdx === null) {
				$.Msg.error('请选择一个租柜');
				return;
			}
			if (this.lockerHire.fee && $.Util.isEmpty(this.lockerHire.paymentChannel)) {
				$.Msg.error('请输入支付方式');
				return;
			}
			if (this.lockerHire.paymentChannel === 0) {
				if (!this.selectMcId) {
					$.Msg.error('请选择一张储值卡');
					return;
				}
			}

			this.lockerHire.lockerId = this.lockerList[this.selectLockerIdx].lockerId;
			this.lockerHire.memberId = this.member.memberId;

			let args = {
				actionType: 'I',
				lockerHire: this.lockerHire
			};
			if (this.selectMcId) {
				args.costMcId = this.selectMcId;
			}
			$.Req.service($.SvName.LOCKER_HIRE_SAVE, args, ret => {
				$.Dlg.success($.Lang.SAVE_SUCCESS);
				this.queryLockerHire();
				this.statLockerHireCount();
				this.queryLockerArea();
				this.dlgView.lockeHireCreate = false;
			});
		},

		openLockerHireUpdateDlg(idx) {
			this.selectMcId = null;
			this.memberCards = null;
			this.lockerHire = {};
			$.Util.copyAttributes(this.lockerHireList[idx], this.lockerHire);
			this.member.phoneNo = this.lockerHire.memberPhoneNo;
			this.queryMember();
			this.dlgView.lockeHireUpdate = true;
		},

		updateLockerHire() {
			if (!this.lockerHire.beginDate || !this.lockerHire.endDate) {
				$.Msg.error('请输入有效的租用期限');
				return;
			}
			if (this.lockerHire.fee && $.Util.isEmpty(this.lockerHire.paymentChannel)) {
				$.Msg.error('请输入支付方式');
				return;
			}
			if (this.lockerHire.paymentChannel === 0) {
				if (!this.selectMcId) {
					$.Msg.error('请选择一张储值卡');
					return;
				}
			}

			let args = {
				actionType: 'U',
				lockerHire: this.lockerHire
			};
			if (this.selectMcId) {
				args.costMcId = this.selectMcId;
			}
			$.Req.service($.SvName.LOCKER_HIRE_SAVE, args, ret => {
				$.Msg.success($.Lang.SAVE_SUCCESS);
				this.queryLockerHire();
				this.dlgView.lockeHireUpdate = false;
			});
		},

		deleteLockerHire(idx) {
			let lockerHire = this.lockerHireList[idx];
			let msg = '您确定要删除该租柜【{0}】的出租记录吗？<p></p>如果录入了出租费，删除租柜出租记录后，系统会自动删除对应的出租费用。'.format(lockerHire.lockerNo);
			$.Dlg.confirm(msg, yes => {
				let args = {
					actionType: 'D',
					deleteId: lockerHire.lhId
				};
				$.Req.service($.SvName.LOCKER_HIRE_SAVE, args, ret => {
					$.Msg.success($.Lang.SAVE_SUCCESS);
					this.queryLockerHire();
					this.statLockerHireCount();
					this.queryLockerArea();
				});
			});
		},

		returnLockerHire(idx) {
			let lockerHire = this.lockerHireList[idx];
			if (!lockerHire) {
				$.Msg.warning('请选择需要归还的租柜');
				return;
			}
			let msg = '确定要归还该租柜【{0}】吗？'.format(lockerHire.lockerNo);
			$.Dlg.confirm(msg, yes => {
				let args = {
					lhId: lockerHire.lhId
				};
				$.Req.service($.SvName.LOCKER_HIRE_RETURN, args, ret => {
					$.Msg.success($.Lang.SAVE_SUCCESS);
					this.queryLockerHire();
					this.statLockerHireCount();
					this.queryLockerArea();
				});
			});
		},

		statLockerHireCount() {
			$.Req.service($.SvName.LOCKER_HIRE_COUNT_STAT, {}, ret => {
				this.lockerHireStat.hiring = ret.hiring;
				this.lockerHireStat.outdate = ret.outdate;
				this.lockerHireStat.returned = ret.returned;
			});
		},

		queryLockerHire(page = null) {
			let args = {};
			if (this.lockerHireQuery.status === -1) {
				args.isOutdate = true;
			} else {
				args.status = this.lockerHireQuery.status;
			}
			args.page = page ? page : this.lockerHireQuery.page;
			$.Req.service($.SvName.LOCKER_HIRE_QUERY, args, ret => {
				for (let lh of ret.lockerHireList) {
					let beginDate = Date.new(lh.beginDate);
					let endDate = Date.new(lh.endDate);
					let today = new Date();
					lh.leftDays = 1 + (beginDate < today) ? endDate.subtract(today) : endDate.subtract(beginDate);
				}
				this.lockerHireList = ret.lockerHireList;
				if (!page) {
					this.lockerHireCount = ret.count;
				}
				if ($.Util.isEmptyArray(this.lockerHireList)) {
					$.Msg.info('查不到符合条件的记录');
				}
			});
		},

		queryByLockerHireStatus() {
			this.queryLockerHire(null);
		},

		queryLockerHireByMemberPhone() {
			if (!this.lockerHireQuery.memberPhoneNo) {
				$.Msg.info($.Lang.NO_INPUT);
				return;
			}
			if (!$.Util.validatePhoneNo(this.lockerHireQuery.memberPhoneNo)) {
				$.Msg.error($.Lang.PHONE_NO_ERR);
				return;
			}

			let args = { memberPhoneNo: this.lockerHireQuery.memberPhoneNo };
			this.lockerHireQuery.status = null;
			$.Req.service($.SvName.LOCKER_HIRE_QUERY, args, ret => {
				for (let lh of ret.lockerHireList) {
					let beginDate = Date.new(lh.beginDate);
					let endDate = Date.new(lh.endDate);
					let today = new Date();
					lh.leftDays = 1 + (beginDate < today) ? endDate.subtract(today) : endDate.subtract(beginDate);
				}
				this.lockerHireList = ret.lockerHireList;
				if (ret.count) {
					this.lockerHireCount = ret.count;
				}
			});
		},

		changePageNo(page) {
			this.queryLockerHire(page);
		},

		closeLockerEditDlg() {
			this.dlgView.lockerList = false;
			this.queryLockerArea();
		},

		openLockerNotice() {
			this.queryLockerNotice(() => {
				this.dlgView.noticeConf = true;
			});
		},

		queryLockerNotice(callback) {
			let args = { typeId: 2008 };
			$.Req.service($.SvName.SHOP_ARG_QUERY, args, ret => {
				let val = ret.value;
				if (val) {
					let items = val.split(';');
					this.noticeArg.smsEnable = items[0] === '1';
					this.noticeArg.days = items[1].split(',');
				} else {
					this.noticeArg.smsEnable = false;
					this.noticeArg.days = [null, null, null];
				}
				if (callback) callback();
			}, true);
		},

		saveLockerNotice() {
			let val = '';
			if (this.noticeArg.smsEnable) {
				if (!this.noticeArg.days[0] && !this.noticeArg.days[1] && !this.noticeArg.days[2]) {
					$.Msg.error('请设置剩余天数');
					return;
				}
				val = '1;' + this.noticeArg.days.join(',');
			}
			let args = { typeId: 2008, typeValue: val };
			$.Req.service($.SvName.SHOP_ARG_UPDATE, args, ret => {
				$.Msg.success($.Lang.SAVE_SUCCESS);
				this.dlgView.noticeConf = false;
			});
		},

		printLockerHire(id) {
			let shopName = $.data.tenant.tenantName === $.data.shop.shopName ? $.data.shop.shopName : $.data.tenant.tenantName + '<br>' + $.data.shop.shopName;
			$.Util.printForPos(id, shopName);
		}
	}
});

/***/ }),

/***/ 1365:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data() {
    return {
      g: window.$,
      shopId: null,
      qrcodeUrl: null
    };
  },

  created() {},

  methods: {
    queryShopId() {
      $.Req.service($.SvName.SHOP_ID_QUERY_FOR_MSITE, {}, ret => {
        this.shopId = ret.shopId;
      });
    },

    showWaitTips() {
      $.Msg.info($.Lang.TO_DO_PUBLIC);
    },

    test() {
      let args = { machNo: "51CFF01FB083BD2A", machUserNo: "01409821" };
      $.Req.service("mach/localMachCheckin", args, ret => {
        console.log(ret);
      });
    }
  }
});

/***/ }),

/***/ 1366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__ = __webpack_require__(1093);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_help_vue__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_help_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_help_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { PageHeader: __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default.a, Help: __WEBPACK_IMPORTED_MODULE_1__components_help_vue___default.a },
  props: {},
  data() {
    return {
      mtProductRole: $.Util.hasRoleFunc($.Dict.RoleFunc.MT_PRODUCT_GET.value),
      mtPowerRole: $.Util.hasRoleFunc(),
      g: $,
      menuList: $.PageMenus.MtVerifyConf("mt-platform-bind"),
      mtcList: [],
      mtocList: [],
      saleStatusMap: {
        1: "未开始售卖",
        2: "售卖中",
        3: "售卖结束"
      },
      dealTypeMap: {
        1: "团购套餐",
        2: "代金券"
      },
      mtOcType: {
        500: "款式一口价",
        723: "运动健身拼团",
        722: "足疗按摩拼团",
        792: "洗浴拼团",
        793: "密室拼团",
        795: "体检拼团",
        850: "医美预付",
        922: "丽人拼团",
        923: "生活服务拼团",
        924: "教育培训拼团",
        926: "K歌拼团",
        1081: "次卡",
        1359: "结婚代金券",
        2000: "医美预付拼团"
      },
      totalGroupCount: null,
      totalNonGroupCount: null,
      mtAppRoleShow: false,
      mtShow: false,
      mt: {
        expireDate: null
      },
      mtConf: {},
      mtGoodsBindCard: {
        mtcId: null,
        title: null,
        cardId: null,
        cardDays: null,
        cardTimes: null,
        cardAmount: null
      },
      mtGoodsBindCardRule: {},
      mtGoodsBindCardFileds: ["cardId", "cardDays", "cardTimes", "cardAmount"],
      cardListShow: false,
      cardList: [],
      selectCard: null,
      isGroup: true
    };
  },
  computed: {
    expireCom() {
      // 第一次无返回要授权
      if (!this.mtConf) return true;
      const { expireDate, remainRefreshCount } = this.mtConf;
      const expireTime = new Date(expireDate).getTime();
      const newTime = new Date().getTime();
      // 过期要授权
      if (newTime > expireTime && remainRefreshCount === 0) {
        return true;
      }
      return false;
    }
  },
  watch: {
    cardListShow(newVal) {
      if (!newVal) {
        this.mtGoodsBindCard.mtcId = null;
        this.mtGoodsBindCard.cardId = null;
      }
    }
  },
  created() {
    window.addEventListener("message", event => {
      // 确保消息来源是您的授权页面的域名或回调URL
      if (event.origin === "https://e.dianping.com") {
        const data = event.data; // 获取消息数据
        if (data.message === "open_sdk_auth_success") {
          //   $.Msg.success("授权成功！");
          this.mtAppRoleShow = false;
          this.mtAppAuchorizeFun(data.auth_code);
        }
      }
    });
    this.mtAppConfQuery(() => {
      if (!this.expireCom) {
        this.cardQuery();
        this.mtGroupGoodsQuery(1);
        this.mtNonGroupGoodsQuery(1);
      }
    });
  },
  mounted() {},
  methods: {
    doubleHandleFun() {
      $.Dlg.confirm("是否确定重新授权？", () => {
        this.mtAppRoleShow = true;
      });
    },
    mtGroupGoodsQuery(page = null, callback = null) {
      const args = {
        page,
        type: 1
      };
      $.Req.service($.SvName.MT_APP_CARD_QUERY, args, ret => {
        this.mtcList = ret.mtcList;
        this.totalGroupCount = ret.count;
        if (callback) {
          callback();
        }
      }, true);
    },
    mtNonGroupGoodsQuery(page = null, callback = null) {
      const args = {
        page,
        type: 2
      };
      $.Req.service($.SvName.MT_APP_CARD_QUERY, args, ret => {
        this.mtocList = ret.mtocList;
        this.totalNonGroupCount = ret.count;
        if (callback) {
          callback();
        }
      }, true);
    },
    cardQuery() {
      $.Req.service($.SvName.CARD_QUERY, { queryType: 2, status: 0 }, ret => {
        this.cardList = ret.cardList;
      });
    },
    mtAppAuchorizeFun(authCode) {
      const args = {
        authCode
      };
      $.Req.service($.SvName.MT_APP_AUTHORIZE, args, ret => {
        if (ret.conf.openShopUuid) {
          $.Msg.success("授权成功！");
          this.mtShow = false;
          this.mtConf = ret.conf;
          return;
        } else {
          if (ret.conf.scoreList && ret.conf.scoreList.length) {
            debugger;
            this.mtConf = ret.conf;
            this.mtShow = true;
          }
        }
      }, true);
    },
    cardSynchronousFun(type) {
      $.Req.service($.SvName.MT_APP_CARD_SYNCHRONISE, { type: type }, () => {
        if (type === 1) {
          this.mtGroupGoodsQuery(1, () => {
            $.Msg.success("同步成功！");
          });
        }
        if (type === 2) {
          this.mtNonGroupGoodsQuery(1, () => {
            $.Msg.success("同步成功！");
          });
        }
      }, true);
    },

    mtAppConfQuery(callback) {
      $.Req.service($.SvName.MT_APP_CONF_QUERY, {}, ret => {
        this.mtConf = ret.conf;
        if (callback) {
          callback();
        }
      });
    },

    selectShopFun(open_shop_uuid) {
      const args = {
        conf: Object.assign({}, this.mtConf)
      };
      args.conf.openShopUuid = open_shop_uuid;
      $.Req.service($.SvName.MT_APP_AUTHORIZE_SELECT, args, ret => {
        this.mtConf = ret.conf;
        $.Msg.success("授权成功！");
        this.mtShow = false;
      });
    },
    selectCardFun(type, m) {
      this.isGroup = type === 1 ? true : false;
      this.selectCard = m;
      this.cardListShow = true;
      const {
        mtcId,
        mtocId,
        title,
        cardId,
        cardDays,
        cardTimes,
        cardAmount,
        name
      } = m;
      this.mtGoodsBindCard = {
        title,
        name,
        mtcId,
        mtocId,
        cardId,
        cardDays,
        cardTimes,
        cardAmount
      };
    },
    changeCardFun(c) {
      this.selectCard = this.cardList.find(item => item.cardId === this.mtGoodsBindCard.cardId);
    },
    cancelCardFun(type, m) {
      $.Dlg.confirm("是否确定取消？", () => {
        let args = {};
        if (type === 1) {
          args = { mtcId: m.mtcId };
        }
        if (type === 2) {
          args = { mtocId: m.mtocId };
        }
        $.Req.service($.SvName.MT_APP_CARD_UPDATE, args, ret => {
          $.Msg.success("取消绑定成功！");
          if (type === 1) {
            this.mtGroupGoodsQuery();
          }
          if (type === 2) {
            this.mtNonGroupGoodsQuery();
          }
        });
      });
    },
    selectMtGoodsBindCardFun() {
      const card = this.selectCard;
      if (!card) {
        return $.Dlg.info("请选择绑定会员卡");
      }
      const args = {
        mtcId: this.mtGoodsBindCard.mtcId,
        mtocId: this.mtGoodsBindCard.mtocId,
        cardId: this.mtGoodsBindCard.cardId,
        cardDays: this.mtGoodsBindCard.cardDays,
        cardTimes: this.mtGoodsBindCard.cardTimes,
        cardAmount: this.mtGoodsBindCard.cardAmount
      };
      if (this.isGroup) {
        delete args.mtocId;
      } else {
        delete args.mtcId;
      }
      if (card.cardType === 1 && !args.cardDays) {
        return $.Dlg.info("您所选是期限卡，有效期为必填");
      }
      if ((card.cardType === 2 || card.cardType === 4) && !args.cardTimes) {
        return $.Dlg.info("您所选是次卡/计时卡，使用次数/分钟数为必填");
      }
      if (card.cardType === 3 && !args.cardAmount) {
        return $.Dlg.info("您所选是储值卡，充值金额为必填");
      }
      $.Req.service($.SvName.MT_APP_CARD_UPDATE, args, ret => {
        $.Msg.success("绑定成功！");
        this.cardListShow = false;
        if (this.isGroup) {
          this.mtGroupGoodsQuery(1);
        } else {
          this.mtNonGroupGoodsQuery(1);
        }
      });
    }
  }
});

/***/ }),

/***/ 1367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cust_cust_detail_vue__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cust_cust_detail_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__cust_cust_detail_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_member_member_base_info_vue__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_member_member_base_info_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__pages_member_member_base_info_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_page_header_vue__ = __webpack_require__(1093);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_page_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_page_header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_help_vue__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_help_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_help_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    PageHeader: __WEBPACK_IMPORTED_MODULE_2__components_page_header_vue___default.a,
    MemberBaseInfo: __WEBPACK_IMPORTED_MODULE_1__pages_member_member_base_info_vue___default.a,
    Help: __WEBPACK_IMPORTED_MODULE_3__components_help_vue___default.a,
    CustDetail: __WEBPACK_IMPORTED_MODULE_0__cust_cust_detail_vue___default.a
  },
  props: {},
  data() {
    return {
      g: $,
      menuList: $.PageMenus.MtVerifyConf("mt-verify-coupon"),
      query: {
        memberPhoneNo: null,
        memberName: null,
        dealTitle: null,
        status: null,
        beginDate: null,
        endDate: null,
        page: 0,
        isGroup: null
      },
      bizType: {
        0: "普通团购",
        203: "拼团",
        205: "次卡",
        217: "通兑标品"
      },
      viewMemberId: null,
      viewMemberDlg: null,
      detailsShow: false,
      buyCouponShow: false,
      couponShow: false,
      dateList: [],
      totalCount: 1,
      orderList: [],
      orderMap: {
        dealTitle: ""
      },
      couponInfo: {
        memberPhoneNo: null,
        memberName: null,
        receiptCode: null,
        memberSex: 1,
        count: null,
        isTrial: 0
      },
      couponRule: {},
      status: {
        1: "核销成功",
        2: "已撤销",
        3: "部分撤销"
      },
      isVerify: false,
      mtConsumeRole: $.Util.hasRoleFunc($.Dict.RoleFunc.MT_CONSUME.value),
      mtReverseConsumeRole: $.Util.hasRoleFunc($.Dict.RoleFunc.MT_REVERSE_CONSUME.value),
      buyCouponList: [],
      order: {
        mtoId: null,
        cancelCode: null
      },
      cancelCode: null,
      custDlgTitle: null,
      custDlgView: false
    };
  },
  computed: {},
  watch: {
    detailsShow(newVal) {
      if (!newVal) {
        this.isVerify = false;
      }
    },
    cancelCode(newVal) {
      this.order.cancelCode = newVal;
    },
    buyCouponShow(newVal) {
      if (!newVal) {
        this.cancelCode = null;
      }
    }
  },
  created() {},
  mounted() {
    this.queryVerify();
  },
  methods: {
    queryVerify(page = null) {
      this.query.page = page || 1;
      const args = Object.assign({}, this.query);
      args.page = page;
      if (args.isGroup === 1) {
        args.isGroup = true;
      }
      if (args.isGroup === 0) {
        args.isGroup = false;
      }
      $.Req.service($.SvName.MT_APP_ORDER_QUERY, args, ret => {
        this.orderList = ret.orderList;
        this.totalCount = ret.count;
      }, true);
    },
    changeDateFun(data) {
      this.query.beginDate = data[0];
      this.query.endDate = data[1];
    },
    resetQuery() {
      this.query = {};
    },

    details(order) {
      this.orderMap = order;
      this.detailsShow = true;
    },
    revokeBtn(order) {
      this.order = {
        mtoId: null,
        cancelCode: null
      };
      const { count, cancelList, receiptCodes } = Object.assign({}, order);
      this.order.mtoId = order.mtoId;
      if (count === 1) {
        this.order.cancelCode = receiptCodes;
        this.revokeVerifyFun();
      }
      if (count > 1) {
        this.buyCouponShow = true;
        let buyCouponList = [];
        let newReceiptCodes = receiptCodes.split(",");
        newReceiptCodes.forEach(bItem => {
          const obj = {
            code: bItem,
            isVerify: false
          };
          buyCouponList.push(obj);
        });
        if (cancelList && cancelList.length) {
          cancelList.forEach(cItem => {
            for (let i = 0; i < buyCouponList.length; i++) {
              if (buyCouponList[i].code == cItem.receiptCode) {
                buyCouponList[i].isVerify = true;
                break;
              }
            }
          });
        }
        this.buyCouponList = buyCouponList;
      }
    },
    revokeVerifyFun() {
      if (!this.order.cancelCode) {
        return $.Dlg.info("请选择券码");
      }
      $.Dlg.confirm("是否要撤销操作？", () => {
        const args = {
          mtoId: this.order.mtoId,
          receiptCode: this.order.cancelCode
        };

        $.Req.service($.SvName.MT_APP_ORDER_CANCEL, args, ret => {
          this.order = {
            mtoId: null,
            cancelCode: null
          };
          this.cancelCode = null;
          this.buyCouponShow = false;
          this.$nextTick(() => {
            $.Msg.success("撤销成功！");
          });
          this.queryVerify();
        }, true, err => {
          this.order = {
            mtoId: null,
            cancelCode: null
          };
          this.cancelCode = null;
          this.buyCouponShow = false;
          alert(err);
        });
      });
    },
    couponQuery() {
      const { memberPhoneNo, receiptCode } = this.couponInfo;
      if (!memberPhoneNo) {
        return $.Dlg.info("请输入【手机号】");
      }
      if (!$.Util.validatePhoneNo(memberPhoneNo)) {
        return $.Msg.info("请输入正确的【手机号】");
      }
      if (!receiptCode) {
        return $.Dlg.info("请输入【券号】");
      }
      const args = {
        memberPhoneNo,
        receiptCode
      };
      $.Req.service($.SvName.MT_APP_ORDER_CHECK, args, ret => {
        if (ret.order) {
          this.orderMap = ret.order;
          this.couponInfo.memberName = ret.order.memberName;
          this.couponInfo.memberSex = ret.order.memberSex ? 1 : 0;
          // this.couponInfo.count = ret.order.count;
          this.isVerify = true;
          this.detailsShow = true;
          if (!ret.order.cardId) {
            this.couponInfo.isTrial = 1;
          }
        }
      }, true);
    },
    verifyCoupon() {
      const {
        memberPhoneNo,
        memberName,
        receiptCode,
        memberSex,
        count,
        isTrial
      } = this.couponInfo;
      if (!this.couponInfo.memberName) {
        return $.Dlg.info("请输入姓名");
      }
      if (!count && this.orderMap.count > 1) {
        return $.Msg.info("请输入【本次核销数量】");
      }
      $.Dlg.confirm("是否确定此操作？", () => {
        if (this.orderMap.count < count) {
          this.couponInfo.count = null;
          return $.Dlg.info("核销数量大于剩余的商品数量请重新输入");
        }
        const args = {
          memberPhoneNo,
          memberSex,
          memberName,
          receiptCode,
          count
        };
        if (isTrial) {
          args.isTrial = true;
        } else {
          args.isTrial = false;
        }
        $.Req.service($.SvName.MT_APP_ORDER_CREATE, args, ret => {
          this.couponInfo = {
            memberSex: 1,
            memberName: null,
            memberPhoneNo: null,
            receiptCode: null,
            count: null,
            isTrial: args.isTrial ? 1 : 0
          };
          this.detailsShow = false;
          $.Msg.success("操作成功！");
          this.resetQuery();
          this.queryVerify();
        }, true, msg => {
          $.Dlg.info(msg);
          this.detailsShow = false;
        });
      });
    },
    viewMemberBase(o) {
      const { memberPhoneNo } = o;
      const args = {
        nameOrPhone: memberPhoneNo
      };
      $.Req.service($.SvName.MEMBER_ADV_QUERY, args, ret => {
        if (ret.srcMember) {
          this.viewMemberId = ret.srcMember.memberId;
          this.viewMemberDlg = true;
        } else {
          this.custQuery(memberPhoneNo);
        }
      }, true);
    },
    viewCust(c) {
      this.selectCustId = c.custId;
      this.custDlgTitle = "客户详情 - {0}（手机号：{1}）".format(c.name, $.Util.formatPhone(c.phoneNo));
      this.custDlgView = true;
    },
    custQuery(phoneNo) {
      const args = {
        phoneNo
      };
      $.Req.service($.SvName.CUST_QUERY, args, ret => {
        if (ret.cust) {
          this.viewCust(ret.cust);
        }
      });
    }
  }
});

/***/ }),

/***/ 1368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_sys_video_upload_vue__ = __webpack_require__(1116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_sys_video_upload_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_sys_video_upload_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_sys_img_upload_vue__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_sys_img_upload_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_sys_img_upload_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_help_vue__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_help_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_help_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_js_data_js__ = __webpack_require__(1480);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "",
  components: {
    Help: __WEBPACK_IMPORTED_MODULE_2__components_help_vue___default.a,
    VideoUpload: __WEBPACK_IMPORTED_MODULE_0__components_sys_video_upload_vue___default.a,
    ImgUpload: __WEBPACK_IMPORTED_MODULE_1__components_sys_img_upload_vue___default.a
  },
  props: {},
  data() {
    return {
      g: window.$,
      collapseList: [0, 1, 2, 3, 4, 5],
      applyId: this.$route.params.applyId,
      applyRole: $.Util.hasRoleFunc(),
      imgUpload: {
        action: $.Conf.IMG_UPLOAD_URL,
        imgMaxWidth: 1024,
        maxSize: 2048,
        defaultList: [],
        defaultLogo: [],
        contactIdDocCopy: [],
        contactIdDocCopyBack: [],
        businessAuthorizationLetter: [],
        licenseCopy: [],
        certCopy: [],
        certificateLetterCopy: [],
        financeLicensePics: [],
        authorizeLetterCopy: [],
        idCardCopy: [],
        idCardNational: [],
        idDocCopy: [],
        idDocCopyBack: [],
        uboInfoList: [],
        storeEntrancePic: [],
        indoorPic: [],
        mpPics: [],
        miniProgramPics: [],
        webAuthorisation: [],
        appPics: [],
        weworkPics: [],
        qualifications: [],
        legalPersonCommitment: [],
        businessAdditionPics: []
      },

      // 超级管理员
      contactInfo: {
        contactType: null,
        contactName: null,
        contactIdDocType: null,
        contactIdNumber: null,
        contactIdDocCopy: null,
        contactIdDocCopyBack: null,
        contactPeriodBegin: null,
        contactPeriodEnd: null,
        businessAuthorizationLetter: null,
        openid: null,
        mobilePhone: null,
        contactEmail: null
      },
      editWxMchIdApply: {},
      // 主体
      subjectInfo: {
        subjectType: null,
        financeInstitution: false,
        licenseCopy: null,
        licenseNumber: null,
        merchantName: null,
        legalPerson: null,
        licenseAddress: null,
        periodBegin: null,
        periodEnd: null,
        certCopy: null,
        certType: null,
        certNumber: null,
        companyAddress: null,
        certMerchantName: null,
        certLegalPerson: null,
        certPeriodBegin: null,
        certPeriodEnd: null,
        certificateLetterCopy: null,
        financeType: null,
        financeLicensePics: null,
        idHolderType: null,
        idDocType: null,
        authorizeLetterCopy: null,
        owner: false,

        idCardCopy: null,
        idCardNational: null,
        idCardName: null,
        idCardNumber: null,
        idCardAddress: null,
        cardPeriodBegin: null,
        cardPeriodEnd: null,

        idDocCopy: null,
        idDocCopyBack: null,
        idDocName: null,
        idDocNumber: null,
        idDocAddress: null,
        docPeriodBegin: null,
        docPeriodEnd: null,

        uboInfoList: []
      },

      // 经营资料
      businessInfo: {
        merchantShortname: null,
        servicePhone: null,
        salesScenesType: [],

        bizStoreName: null,
        bizAddressCode: null,
        bizStoreAddress: null,
        storeEntrancePic: null,
        indoorPic: null,
        bizSubAppid: null,

        mpAppid: null,
        mpSubAppid: null,
        mpPics: null,
        switchMpType: null,

        miniProgramAppid: null,
        miniProgramSubAppid: null,
        miniProgramPics: null,
        switchMiniType: null,

        appAppid: null,
        appSubAppid: null,
        appPics: null,
        switchAppType: null,

        domain: null,
        webAuthorisation: null,
        webAppid: null,

        subCorpId: null,
        weworkPics: null
      },

      // 结算规则
      settlementInfo: {
        settlementId: null,
        qualificationType: "休闲娱乐/旅游服务",
        qualifications: null
      },

      //  结算银行
      bankAccountInfo: {
        bankAccountType: null,
        accountName: null,
        accountBank: null,
        bankAddressCode: null,
        bankBranchId: null,
        bankName: null,
        accountNumber: null,
        switchBankType: null
      },

      // 补充材料
      additionInfo: {
        legalPersonCommitment: null,
        legalPersonVideo: null,
        businessAdditionPics: null,
        businessAdditionMsg: null
      },

      contactInfoFields: ["contactType", "contactName", "contactIdDocType", "contactIdNumber", "contactIdDocCopy", "contactIdDocCopyBack", "contactPeriodEnd", "businessAuthorizationLetter", "mobilePhone", "contactEmail"],
      contactInfoRule: {
        contactEmail: [{
          type: "email",
          message: "邮箱格式有误，请重新输入",
          trigger: "blur"
        }],
        mobilePhone: [{
          validator: (rule, value, callback) => {
            const flag = $.Util.validatePhoneNo(value);
            if (!flag) {
              callback(new Error("手机号格式有误，请重新输入"));
            } else {
              callback();
            }
          },
          trigger: "blur"
        }],
        contactIdNumber: [{
          validator: (rule, value, callback) => {
            const flag = $.Util.validateCardNumberOrAlphabetNo(value);
            if (!flag) {
              callback(new Error("证件号格式有误，请重新输入"));
            } else {
              callback();
            }
          },
          trigger: "blur"
        }]
      },
      subjectInfoFields: ["subjectType", "licenseCopy", "licenseNumber", "legalPerson", "merchantName", "certCopy", "certType", "certNumber", "certMerchantName", "companyAddress", "legalPerson", "certPeriodEnd", "financeType", "financeLicensePics", "authorizeLetterCopy", "idDocType", "idCardCopy", "idCardNational", "idCardName", "idCardNumber", "idCardAddress", "cardPeriodEnd", "idDocCopy", "idDocCopyBack", "idDocName", "idDocNumber", "idDocAddress", "cardPeriodEnd",

      // 受益人校验
      "uboInfoList[0].uboIdDocType", "uboInfoList[1].uboIdDocType", "uboInfoList[2].uboIdDocType", "uboInfoList[3].uboIdDocType", "uboInfoList[0].uboIdDocCopy", "uboInfoList[1].uboIdDocCopy", "uboInfoList[2].uboIdDocCopy", "uboInfoList[3].uboIdDocCopy", "uboInfoList[0].uboIdDocCopyBack", "uboInfoList[1].uboIdDocCopyBack", "uboInfoList[2].uboIdDocCopyBack", "uboInfoList[3].uboIdDocCopyBack", "uboInfoList[0].uboIdDocName", "uboInfoList[1].uboIdDocName", "uboInfoList[2].uboIdDocName", "uboInfoList[3].uboIdDocName", "uboInfoList[0].uboIdDocNumber", "uboInfoList[1].uboIdDocNumber", "uboInfoList[2].uboIdDocNumber", "uboInfoList[3].uboIdDocNumber", "uboInfoList[0].uboIdDocAddress", "uboInfoList[1].uboIdDocAddress", "uboInfoList[2].uboIdDocAddress", "uboInfoList[3].uboIdDocAddress", "uboInfoList[0].uboPeriodEnd", "uboInfoList[1].uboPeriodEnd", "uboInfoList[2].uboPeriodEnd", "uboInfoList[3].uboPeriodEnd"],
      subjectInfoRule: {
        licenseNumber: [{
          validator: (rule, value, callback) => {
            const flag = $.Util.validateBusinessNo(value);
            if (!flag) {
              callback(new Error("格式有误，请重新输入"));
            } else {
              callback();
            }
          },
          trigger: "blur"
        }],
        idCardNumber: [{
          validator: (rule, value, callback) => {
            const flag = $.Util.validateCardNumberOrAlphabetNo(value);
            if (!flag) {
              callback(new Error("证件号格式有误，请重新输入"));
            } else {
              callback();
            }
          },
          trigger: "blur"
        }],
        idDocNumber: [{
          validator: (rule, value, callback) => {
            const flag = $.Util.validateCardNumberOrAlphabetNo(value);
            if (!flag) {
              callback(new Error("证件号格式有误，请重新输入"));
            } else {
              callback();
            }
          },
          trigger: "blur"
        }],
        "uboInfoList[0].uboIdDocNumber": [{
          validator: (rule, value, callback) => {
            const flag = $.Util.validateCardNumberOrAlphabetNo(value);
            if (!flag) {
              callback(new Error("证件号格式有误，请重新输入"));
            } else {
              callback();
            }
          },
          trigger: "blur"
        }],
        "uboInfoList[1].uboIdDocNumber": [{
          validator: (rule, value, callback) => {
            const flag = $.Util.validateCardNumberOrAlphabetNo(value);
            if (!flag) {
              callback(new Error("证件号格式有误，请重新输入"));
            } else {
              callback();
            }
          },
          trigger: "blur"
        }],
        "uboInfoList[2].uboIdDocNumber": [{
          validator: (rule, value, callback) => {
            const flag = $.Util.validateCardNumberOrAlphabetNo(value);
            if (!flag) {
              callback(new Error("证件号格式有误，请重新输入"));
            } else {
              callback();
            }
          },
          trigger: "blur"
        }],
        "uboInfoList[3].uboIdDocNumber": [{
          validator: (rule, value, callback) => {
            const flag = $.Util.validateCardNumberOrAlphabetNo(value);
            if (!flag) {
              callback(new Error("证件号格式有误，请重新输入"));
            } else {
              callback();
            }
          },
          trigger: "blur"
        }]
      },
      futureDateOption: {
        disabledDate(date) {
          return date && date.valueOf() < Date.now() - 86400000;
        },
        shortcuts: [{
          text: "长期",
          value() {
            return;
          },
          onClick: p => {
            const { picker, idx } = p.$el.offsetParent.offsetParent.children[1].dataset;
            this.handlerDate(picker, idx);
          }
        }]
      },
      businessInfoRule: {
        domain: [{
          validator: (rule, value, callback) => {
            const flag = $.Util.validateDomain(value);
            if (!flag) {
              callback(new Error("格式有误，请重新输入"));
            } else {
              callback();
            }
          },
          trigger: "blur"
        }]
      },
      businessInfoFields: ["merchantShortname", "servicePhone", "salesScenesType", "bizStoreName", "bizAddressCode", "bizStoreAddress", "storeEntrancePic", "indoorPic", "mpAppid", "mpSubAppid", "mpPics", "miniProgramAppid", "miniProgramSubAppid", "miniProgramPics", "appAppid", "appSubAppid", "appPics", "domain", "subCorpId", "weworkPics", "switchMpType", "switchMiniType", "switchAppType"],
      settlementInfoRule: {},
      settlementInfoFields: ["settlementId", "qualificationType"],
      bankAccountInfoRule: {},
      bankAccountInfoFields: ["bankAccountType", "accountName", "accountBank", "bankAddressCode", "bankBranchId", "bankName", "accountNumber", "switchBankType"],
      additionInfoRule: {},
      additionInfoFields: [],
      defaultVideos: [],
      businessCode: null,
      auditDetailList: [],

      addressArr: [],
      bankAddressCode: [],
      bizAddressCode: []
    };
  },
  computed: {
    addUboInfoCom() {
      let flag = true;
      if (this.subjectInfo.owner) {
        if (this.subjectInfo.uboInfoList.length >= 3) {
          flag = false;
        }
      } else {
        if (this.subjectInfo.uboInfoList.length >= 4) {
          flag = false;
        }
      }
      return flag;
    }
  },
  watch: {},
  created() {
    if (!this.applyRole) return;

    $.Util.addRequiredFieldsRules(this.contactInfoRule, this.contactInfoFields);
    $.Util.addRequiredFieldsRules(this.subjectInfoRule, this.subjectInfoFields);
    $.Util.addRequiredFieldsRules(this.businessInfoRule, this.businessInfoFields);
    $.Util.addRequiredFieldsRules(this.settlementInfoRule, this.settlementInfoFields);
    $.Util.addRequiredFieldsRules(this.bankAccountInfoRule, this.bankAccountInfoFields);
    $.Util.addRequiredFieldsRules(this.additionInfoRule, this.additionInfoFields);
    this.addressArr = this.processData(__WEBPACK_IMPORTED_MODULE_3__assets_js_data_js__["a" /* addressList */]);

    if (this.applyId) {
      this.queryApply();
    }
  },
  mounted() {},
  methods: {
    submitTo() {
      const validArr = [1, 1, 1, 1, 1];
      const collapseArr = this.collapseList;
      const refsList = [this.$refs.contactInfoRefs, this.$refs.subjectInfoRefs, this.$refs.businessInfoRefs, this.$refs.settlementInfoRefs, this.$refs.bankAccountInfoRefs];
      refsList.forEach((item, idx) => {
        item.validate(valid => {
          if (!valid) {
            if (collapseArr.indexOf(idx.toString()) === -1) {
              collapseArr.push(idx.toString());
            }
            validArr[idx] = 0;
          }
        });
      });
      return validArr;
    },

    subjectInfoChange(e) {
      if (e === 1 || e === 2 || e === 5) {
        this.subjectInfo.idHolderType = 1;
      } else {
        this.subjectInfo.idHolderType = null;
      }
      if (e === 1) {
        this.settlementInfo.settlementId = 719;
      }
      if (e === 2) {
        this.settlementInfo.settlementId = 716;
      }
    },

    addUboInfoFun() {
      const len = this.subjectInfo.uboInfoList.length;
      if (this.subjectInfo.owner && len >= 3) {
        return alert("您只能添加三个受益人");
      } else if (!this.subjectInfo.owner && len >= 4) {
        return alert("您只能添加四个受益人");
      }
      const obj = {
        uboIdDocType: null,
        uboIdDocCopy: null,
        uboIdDocCopyBack: null,
        uboIdDocName: null,
        uboIdDocNumber: null,
        uboIdDocAddress: null,
        uboPeriodBegin: null,
        uboPeriodEnd: null
      };
      this.imgUpload.uboInfoList.push({
        uboIdDocCopyBack: [],
        uboIdDocCopy: []
      });
      this.subjectInfo.uboInfoList.push(obj);
    },

    deleteUboFun(idx) {
      this.subjectInfo.uboInfoList.splice(idx, 1);
    },

    uploadSuccess(res, file, arr, key = null, idx = null) {
      file.url = res.data.url;
      file.name = res.data.name;
      if (idx !== null) {
        arr[idx][key] = res.data.name;
      } else {
        arr[key] = res.data.name;
      }
    },

    uploadListSuccess(res, file, arr, field) {
      file.url = res.data.url;
      file.name = res.data.name;
      var picArr = arr[field] ? arr[field].split(",") : [];
      if (!picArr) {
        picArr = [];
      }
      picArr.push(res.data.name);
      arr[field] = picArr.join(",");
      this.imgUpload[field].push(file);
    },

    removePic(file, fileList, picInfo, picKey) {
      var picRomArr = picInfo[picKey] ? picInfo[picKey].split(",") : [];
      if (!picRomArr) {
        picRomArr = [];
      }
      picRomArr.splice(picRomArr.indexOf(file.name), 1);
      picInfo[picKey] = picRomArr.length ? picRomArr.join(",") : null;
      this.imgUpload[picKey].splice(this.imgUpload[picKey].findIndex(item => item.name === file.name), 1);
    },

    processImgUpload(nameStr, imgType) {
      if (nameStr) {
        const nameArr = nameStr.split(",");
        this.imgUpload[imgType] = [];
        nameArr.forEach(item => {
          this.imgUpload[imgType].push({
            name: item,
            url: $.Util.getImgUrl(item)
          });
        });
      }
    },

    businessAuthorizationLetterSuccess(res, file) {
      this.uploadSuccess(res, file, this.contactInfo, "businessAuthorizationLetter");
    },

    contactIdDocCopySuccess(res, file) {
      this.uploadSuccess(res, file, this.contactInfo, "contactIdDocCopy");
    },

    contactIdDocCopyBackSuccess(res, file) {
      this.uploadSuccess(res, file, this.contactInfo, "contactIdDocCopyBack");
    },

    licenseCopySuccess(res, file) {
      this.uploadSuccess(res, file, this.subjectInfo, "licenseCopy");
    },

    certCopySuccess(res, file) {
      this.uploadSuccess(res, file, this.subjectInfo, "certCopy");
    },

    certificateInfoSuccess(res, file) {
      this.uploadSuccess(res, file, this.subjectInfo, "subjectInfo");
    },

    authorizeLetterCopySuccess(res, file) {
      this.uploadSuccess(res, file, this.subjectInfo, "authorizeLetterCopy");
    },

    idCardCopySuccess(res, file) {
      this.uploadSuccess(res, file, this.subjectInfo, "idCardCopy");
    },

    idDocCopySuccess(res, file) {
      this.uploadSuccess(res, file, this.subjectInfo, "idDocCopy");
    },

    idDocCopyBackSuccess(res, file) {
      this.uploadSuccess(res, file, this.subjectInfo, "idDocCopyBack");
    },

    idCardNationalSuccess(res, file) {
      this.uploadSuccess(res, file, this.subjectInfo, "idCardNational");
    },

    uboIdDocCopySuccess(res, file, fileList, idx) {
      this.uploadSuccess(res, file, this.subjectInfo.uboInfoList, "uboIdDocCopy", idx);
    },

    uboIdDocCopyBackSuccess(res, file, fileList, idx) {
      this.uploadSuccess(res, file, this.subjectInfo.uboInfoList, "uboIdDocCopyBack", idx);
    },

    webAuthorisationSuccess(res, file, fileList, idx) {
      this.uploadSuccess(res, file, this.businessInfo, "webAuthorisation");
    },

    legalPersonCommitmentSuccess(res, file, fileList, idx) {
      this.uploadSuccess(res, file, this.additionInfo, "legalPersonCommitment");
    },

    storeEntrancePicSuccess(res, file) {
      this.uploadListSuccess(res, file, this.businessInfo, "storeEntrancePic");
    },

    storeEntrancePicRemove(file, fileList) {
      this.removePic(file, fileList, this.businessInfo, "storeEntrancePic");
    },

    indoorPicSuccess(res, file) {
      this.uploadListSuccess(res, file, this.businessInfo, "indoorPic");
    },

    indoorPicRemove(file, fileList) {
      this.removePic(file, fileList, this.businessInfo, "indoorPic");
    },

    mpPicsSuccess(res, file) {
      this.uploadListSuccess(res, file, this.businessInfo, "mpPics");
    },

    mpPicsRemove(file, fileList) {
      this.removePic(file, file, this.businessInfo, "mpPics");
    },

    financeLicensePicsSuccess(res, file) {
      this.uploadListSuccess(res, file, this.subjectInfo, "financeLicensePics");
    },

    financeLicensePicsRemove(file, fileList) {
      this.removePic(file, file, this.subjectInfo, "financeLicensePics");
    },

    miniProgramPicsSuccess(res, file) {
      this.uploadListSuccess(res, file, this.businessInfo, "miniProgramPics");
    },

    miniProgramPicsRemove(file, fileList) {
      this.removePic(file, file, this.businessInfo, "miniProgramPics");
    },

    appPicsSuccess(res, file) {
      this.uploadListSuccess(res, file, this.businessInfo, "appPics");
    },

    appPicsRemove(file, fileList) {
      this.removePic(file, file, this.businessInfo, "appPics");
    },

    weworkPicsSuccess(res, file) {
      this.uploadListSuccess(res, file, this.businessInfo, "weworkPics");
    },

    weworkPicsRemove(file, fileList) {
      this.removePic(file, file, this.businessInfo, "weworkPics");
    },

    qualificationsSuccess(res, file) {
      this.uploadListSuccess(res, file, this.settlementInfo, "qualifications");
    },

    qualificationsRemove(file, fileList) {
      this.removePic(file, file, this.settlementInfo, "qualifications");
    },

    businessAdditionPicsSuccess(res, file) {
      this.uploadListSuccess(res, file, this.additionInfo, "businessAdditionPics");
    },

    businessAdditionPicsRemove(file, fileList) {
      this.removePic(file, file, this.additionInfo, "businessAdditionPics");
    },

    handleVideoList(list) {
      this.defaultVideos = list;
      this.additionInfo.legalPersonVideo = list.map(m => m.name).join(",");
    },

    saveApplyDraftFun() {
      this.saveApplyFun(true);
    },
    ifEditHandlerFun() {
      const { applymentState } = this.editWxMchIdApply;
      if (!applymentState) return true;
      let flag = false;
      const stateArr = ["APPLYMENT_STATE_EDITTING", "APPLYMENT_STATE_REJECTED"];
      if (stateArr.indexOf(applymentState) !== -1) {
        flag = true;
      }
      return flag;
    },
    saveApplyFun(flag = false) {
      if (!flag) {
        // flag 是否是草稿 true 是草稿， false 是提交
        const validArr = this.submitTo();
        if (validArr.indexOf(0) !== -1) {
          $.Msg.error($.Lang.SUBMIT_ERR);
          return;
        } else {
          if (this.businessInfo.appPics && this.businessInfo.appPics.split(",").length < 4) {
            return $.Dlg.error("APP截图请提供首页截图、尾页截图、应用内截图、支付页截图各1张（共4张）");
          }
        }
      }
      let {
        contactInfo,
        subjectInfo,
        businessInfo,
        settlementInfo,
        bankAccountInfo,
        additionInfo
      } = JSON.parse(JSON.stringify({
        contactInfo: this.contactInfo,
        subjectInfo: this.subjectInfo,
        businessInfo: this.businessInfo,
        settlementInfo: this.settlementInfo,
        bankAccountInfo: this.bankAccountInfo,
        additionInfo: this.additionInfo
      }));
      const {
        WxSubjectType,
        WxContactType,
        WxContactIdDocType,
        WxFinanceType,
        WxCertType,
        WxSalesScenesType,
        WxBankAccountType,
        WxAccountBank
      } = $.Dict;

      // 处理选中类型
      if (contactInfo.contactType) {
        contactInfo.contactType = WxContactType[contactInfo.contactType].value;
      }
      if (contactInfo.contactIdDocType) {
        contactInfo.contactIdDocType = WxContactIdDocType[contactInfo.contactIdDocType].value;
      }
      if (subjectInfo.subjectType) {
        subjectInfo.subjectType = WxSubjectType[subjectInfo.subjectType].value;
      }
      if (subjectInfo.certType) {
        subjectInfo.certType = WxCertType[subjectInfo.certType].value;
      }
      if (subjectInfo.financeType) {
        subjectInfo.financeType = WxFinanceType[subjectInfo.financeType].value;
      }
      if (subjectInfo.idHolderType) {
        subjectInfo.idHolderType = WxContactType[subjectInfo.idHolderType].value;
      }
      if (subjectInfo.idDocType) {
        subjectInfo.idDocType = WxContactIdDocType[subjectInfo.idDocType].value;
      }
      if (subjectInfo.uboInfoList.length) {
        subjectInfo.uboInfoList.forEach((item, idx, arr) => {
          if (item.uboIdDocType) {
            arr[idx].uboIdDocType = WxContactIdDocType[arr[idx].uboIdDocType].value;
          }
        });
      }
      if (businessInfo.salesScenesType.length) {
        businessInfo.salesScenesType = businessInfo.salesScenesType.map(item => WxSalesScenesType[item].value);
      }
      if (bankAccountInfo.bankAccountType) {
        bankAccountInfo.bankAccountType = WxBankAccountType[bankAccountInfo.bankAccountType].value;
      }
      if (bankAccountInfo.accountBank) {
        bankAccountInfo.accountBank = WxAccountBank[bankAccountInfo.accountBank].value;
      }
      // 场景类型转字符串
      if (businessInfo.salesScenesType.length) {
        businessInfo.salesScenesType = businessInfo.salesScenesType.join(",");
      } else {
        businessInfo.salesScenesType = null;
      }
      if (bankAccountInfo.bankAddressCode) {
        bankAccountInfo.bankAddressCode = +bankAccountInfo.bankAddressCode;
      }
      if (businessInfo.bizAddressCode) {
        businessInfo.bizAddressCode = +businessInfo.bizAddressCode;
      }

      var args = {
        actionType: this.applyId ? "U" : "I",
        wxMchIdApply: Object.assign({}, this.editWxMchIdApply, {
          applyId: this.applyId,
          businessCode: this.businessCode
        }),
        uboInfoList: subjectInfo.uboInfoList
      };
      Object.assign(args.wxMchIdApply, contactInfo);
      Object.assign(args.wxMchIdApply, subjectInfo);
      Object.assign(args.wxMchIdApply, businessInfo);
      Object.assign(args.wxMchIdApply, settlementInfo);
      Object.assign(args.wxMchIdApply, bankAccountInfo);
      Object.assign(args.wxMchIdApply, additionInfo);
      delete args.wxMchIdApply.uboInfoList;

      // 处理二选一
      if (businessInfo.switchMpType === 1) {
        delete args.wxMchIdApply.mpSubAppid;
      } else if (businessInfo.switchMpType === 2) {
        delete args.wxMchIdApply.mpAppid;
      }

      if (businessInfo.switchMiniType === 1) {
        delete args.wxMchIdApply.miniProgramSubAppid;
      } else if (businessInfo.switchMiniType === 2) {
        delete args.wxMchIdApply.miniProgramAppid;
      }

      if (businessInfo.switchAppType === 1) {
        delete args.wxMchIdApply.appSubAppid;
      } else if (businessInfo.switchAppType === 2) {
        delete args.wxMchIdApply.appAppid;
      }

      if (bankAccountInfo.switchBankType === 1) {
        delete args.wxMchIdApply.bankBranchId;
      } else if (bankAccountInfo.switchBankType === 2) {
        delete args.wxMchIdApply.bankName;
      }

      delete args.wxMchIdApply.switchMpType;
      delete args.wxMchIdApply.switchMiniType;
      delete args.wxMchIdApply.switchAppType;
      delete args.wxMchIdApply.switchBankType;

      // 处理日期格式
      const {
        contactPeriodBegin,
        contactPeriodEnd,
        periodBegin,
        periodEnd,
        certPeriodBegin,
        certPeriodEnd,
        cardPeriodBegin,
        cardPeriodEnd,
        docPeriodBegin,
        docPeriodEnd
      } = args.wxMchIdApply;

      const dateArr = {
        contactPeriodBegin,
        contactPeriodEnd,
        periodBegin,
        periodEnd,
        certPeriodBegin,
        certPeriodEnd,
        cardPeriodBegin,
        cardPeriodEnd,
        docPeriodBegin,
        docPeriodEnd
      };
      for (let key in dateArr) {
        const item = dateArr[key];
        if (item !== "长期" && item) {
          if ($.Util.isDate(item)) {
            args.wxMchIdApply[key] = $.dayjs(item).format("YYYY-MM-DD");
          } else {
            args.wxMchIdApply[key] = null;
          }
        }
      }
      const uboArr = [];
      if (args.uboInfoList.length) {
        args.uboInfoList.forEach((uboItem, idx) => {
          const { uboPeriodBegin, uboPeriodEnd, uboIdDocName } = uboItem;
          if (uboIdDocName) {
            uboArr.push(uboItem);
            if (uboPeriodBegin) {
              uboItem.uboPeriodBegin = $.dayjs(uboPeriodBegin).format("YYYY-MM-DD");
            } else {
              uboItem.uboPeriodEnd = null;
              return;
            }
            if (uboPeriodEnd !== "长期" && uboPeriodEnd) {
              uboItem.uboPeriodEnd = $.dayjs(uboPeriodEnd).format("YYYY-MM-DD");
            }
          }
        });
        args.uboInfoList = uboArr;
      }
      for (let key in args.wxMchIdApply) {
        if (args.wxMchIdApply[key] === null) {
          delete args.wxMchIdApply[key];
        }
      }
      if (JSON.stringify(args.wxMchIdApply) === "{}") {
        return $.Msg.info("请至少选填一项！");
      }
      $.Req.service($.SvName.WX_MCH_ID_APPLY_SAVE, args, ret => {
        if (!flag) {
          $.Req.service($.SvName.WX_MCH_ID_APPLY_SUBMIT, { applyId: ret.applyId }, ret => {
            $.Msg.success("操作成功！");
            this.$router.back();
          }, true, e => {
            alert(e);
          });
        } else {
          $.Msg.success("操作成功！");
          this.$router.back();
        }
      });
    },

    toCamelCase(str) {
      return str.replace(/_(\w)/g, function (match, p1) {
        return p1.toUpperCase();
      });
    },

    queryApply() {
      const _this = this;
      const args = {
        applyId: this.applyId
      };
      $.Req.service($.SvName.WX_MCH_ID_APPLY_QUERY, args, ret => {
        const { wxMchIdApply, uboInfoList } = ret;
        this.editWxMchIdApply = wxMchIdApply;
        this.businessCode = wxMchIdApply && wxMchIdApply.businessCode;
        if (wxMchIdApply && wxMchIdApply.auditDetailList && wxMchIdApply.auditDetailList.length) {
          this.auditDetailList = wxMchIdApply.auditDetailList.map(function (item) {
            item.field = _this.toCamelCase(item.field);
            return item;
          });
        }
        const {
          contactInfo,
          subjectInfo,
          businessInfo,
          settlementInfo,
          bankAccountInfo,
          additionInfo
        } = this;

        const arr = [contactInfo, subjectInfo, businessInfo, settlementInfo, bankAccountInfo, additionInfo];

        for (let key in wxMchIdApply) {
          arr.forEach(item => {
            for (let arrKey in item) {
              if (key === arrKey) {
                item[arrKey] = wxMchIdApply[key];
              }
            }
          });
        }
        this.subjectInfo.uboInfoList = uboInfoList;
        const {
          WxSubjectType,
          WxContactType,
          WxContactIdDocType,
          WxFinanceType,
          WxCertType,
          WxSalesScenesType,
          WxBankAccountType,
          WxAccountBank
        } = $.Dict;

        const newArr = [WxSubjectType, WxContactType, WxContactIdDocType, WxFinanceType, WxCertType, WxSalesScenesType, WxBankAccountType, WxAccountBank];

        let newMap = new Map();

        newArr.forEach(item => {
          for (let key in item) {
            newMap.set(item[key].value, key);
          }
        });

        this.contactInfo = contactInfo;
        this.subjectInfo = subjectInfo;
        this.businessInfo = businessInfo;
        this.settlementInfo = settlementInfo;
        this.bankAccountInfo = bankAccountInfo;
        this.additionInfo = additionInfo;

        // 对类型做处理
        if (contactInfo.contactType) {
          contactInfo.contactType = +newMap.get(contactInfo.contactType);
        }
        if (contactInfo.contactIdDocType) {
          contactInfo.contactIdDocType = +newMap.get(contactInfo.contactIdDocType);
        }
        if (subjectInfo.subjectType) {
          subjectInfo.subjectType = +newMap.get(subjectInfo.subjectType);
        }
        if (subjectInfo.certType) {
          subjectInfo.certType = +newMap.get(subjectInfo.certType);
        }
        if (subjectInfo.financeType) {
          subjectInfo.financeType = +newMap.get(subjectInfo.financeType);
        }
        if (subjectInfo.idHolderType) {
          subjectInfo.idHolderType = +newMap.get(subjectInfo.idHolderType);
        }
        if (subjectInfo.idDocType) {
          subjectInfo.idDocType = +newMap.get(subjectInfo.idDocType);
        }
        if (subjectInfo.uboInfoList.length) {
          const newArr = [];
          subjectInfo.uboInfoList.forEach((item, idx, arr) => {
            if (item.uboIdDocType) {
              const obj = Object.assign({}, item, {
                uboIdDocType: +newMap.get(arr[idx].uboIdDocType)
              });
              newArr.push(obj);
            }
            this.imgUpload.uboInfoList.push({
              uboIdDocCopyBack: [],
              uboIdDocCopy: []
            });
          });
          subjectInfo.uboInfoList = newArr;
        }
        // 场景值
        if (businessInfo.salesScenesType.length) {
          const nameArr = businessInfo.salesScenesType.split(",");
          businessInfo.salesScenesType = nameArr;
        } else {
          businessInfo.salesScenesType = [];
        }
        if (businessInfo.salesScenesType.length) {
          businessInfo.salesScenesType = businessInfo.salesScenesType.map(item => +newMap.get(item));
        }
        if (bankAccountInfo.bankAccountType) {
          bankAccountInfo.bankAccountType = +newMap.get(bankAccountInfo.bankAccountType);
        }
        if (bankAccountInfo.accountBank) {
          bankAccountInfo.accountBank = +newMap.get(bankAccountInfo.accountBank);
        }

        // 对地址编码做类型转换
        if (bankAccountInfo.bankAddressCode) {
          bankAccountInfo.bankAddressCode = bankAccountInfo.bankAddressCode.toString();
          const code = bankAccountInfo.bankAddressCode;
          const code1 = code.slice(0, 2) + "0000";
          const code2 = code.slice(0, 4) + "00";
          const code3 = code;
          if (code === code1) {
            this.bankAddressCode = [code1];
          }
          if (code === code2) {
            this.bankAddressCode = [code1, code2];
          }
          if (code === code3) {
            this.bankAddressCode = [code1, code2, code3];
          }
        }
        if (businessInfo.bizAddressCode) {
          businessInfo.bizAddressCode = businessInfo.bizAddressCode.toString();
          const code = businessInfo.bizAddressCode;
          const code1 = code.slice(0, 2) + "0000";
          const code2 = code.slice(0, 4) + "00";
          const code3 = code;
          if (code === code1) {
            this.bizAddressCode = [code1];
          }
          if (code === code2) {
            this.bizAddressCode = [code1, code2];
          }
          if (code === code3) {
            this.bizAddressCode = [code1, code2, code3];
          }
        }

        this.$nextTick(() => {
          if (businessInfo.mpAppid) {
            businessInfo.switchMpType = 1;
          } else {
            businessInfo.switchMpType = 2;
          }
          if (businessInfo.miniProgramAppid) {
            businessInfo.switchMiniType = 1;
          } else {
            businessInfo.switchMiniType = 2;
          }

          if (businessInfo.appAppid) {
            businessInfo.switchAppType = 1;
          } else {
            businessInfo.switchAppType = 2;
          }
          if (bankAccountInfo.bankName) {
            bankAccountInfo.switchBankType = 1;
          } else {
            bankAccountInfo.switchBankType = 2;
          }
          // 对照片做处理

          const imgList = [{ name: contactInfo.contactIdDocCopy, key: "contactIdDocCopy" }, {
            name: contactInfo.contactIdDocCopyBack,
            key: "contactIdDocCopyBack"
          }, {
            name: contactInfo.businessAuthorizationLetter,
            key: "businessAuthorizationLetter"
          }, {
            name: contactInfo.businessAuthorizationLetter,
            key: "businessAuthorizationLetter"
          }, { name: subjectInfo.licenseCopy, key: "licenseCopy" }, { name: subjectInfo.certCopy, key: "certCopy" }, {
            name: subjectInfo.certificateLetterCopy,
            key: "certificateLetterCopy"
          }, {
            name: subjectInfo.financeLicensePics,
            key: "financeLicensePics"
          }, {
            name: subjectInfo.authorizeLetterCopy,
            key: "authorizeLetterCopy"
          }, { name: subjectInfo.idCardCopy, key: "idCardCopy" }, { name: subjectInfo.idCardNational, key: "idCardNational" }, { name: subjectInfo.idDocCopy, key: "idDocCopy" }, { name: subjectInfo.idDocCopyBack, key: "idDocCopyBack" }, { name: subjectInfo.idDocCopy, key: "idDocCopy" }, { name: businessInfo.storeEntrancePic, key: "storeEntrancePic" }, { name: businessInfo.indoorPic, key: "indoorPic" }, { name: businessInfo.mpPics, key: "mpPics" }, { name: businessInfo.miniProgramPics, key: "miniProgramPics" }, { name: businessInfo.webAuthorisation, key: "webAuthorisation" }, { name: businessInfo.appPics, key: "appPics" }, { name: businessInfo.weworkPics, key: "weworkPics" }, { name: settlementInfo.qualifications, key: "qualifications" }, {
            name: additionInfo.legalPersonCommitment,
            key: "legalPersonCommitment"
          }, {
            name: additionInfo.businessAdditionPics,
            key: "businessAdditionPics"
          }];

          imgList.forEach(item => {
            this.processImgUpload(item.name, item.key);
          });

          // 受益人数组处理
          if (subjectInfo.uboInfoList.length) {
            this.imgUpload.uboInfoList = subjectInfo.uboInfoList.map(sub => {
              const uboInfo = {};
              if (sub.uboIdDocCopy) {
                const nameArr = sub.uboIdDocCopy.split(",");
                uboInfo.uboIdDocCopy = nameArr.map(item => ({
                  name: item,
                  url: $.Util.getImgUrl(item)
                }));
              }
              if (sub.uboIdDocCopyBack) {
                const nameArr = sub.uboIdDocCopyBack.split(",");
                uboInfo.uboIdDocCopyBack = nameArr.map(item => ({
                  name: item,
                  url: $.Util.getImgUrl(item)
                }));
              }
              return uboInfo;
            });
          }

          // 处理视频
          if (additionInfo.legalPersonVideo) {
            const nameArr = additionInfo.legalPersonVideo.split(",");
            this.defaultVideos = [];
            nameArr.forEach(item => {
              this.defaultVideos.push({
                name: item,
                url: $.Util.getVideoUrl(item)
              });
            });
          }
        });
      }, true);
    },

    handlerDate(key, idx) {
      switch (key) {
        case "contactInfo.contactPeriodEnd":
          this.contactInfo.contactPeriodEnd = "长期";
          break;
        case "subjectInfo.periodEnd":
          this.subjectInfo.periodEnd = "长期";
          break;
        case "subjectInfo.certPeriodEnd":
          this.subjectInfo.certPeriodEnd = "长期";
          break;
        case "subjectInfo.cardPeriodEnd":
          this.subjectInfo.cardPeriodEnd = "长期";
          break;
        case "subjectInfo.docPeriodEnd":
          this.subjectInfo.docPeriodEnd = "长期";
          break;
        case "subjectInfo.uboInfoList":
          this.subjectInfo.uboInfoList[idx].uboPeriodEnd = "9999-09-09"; // 解决bug
          this.$nextTick(() => {
            this.subjectInfo.uboInfoList[idx].uboPeriodEnd = "长期";
          });
          break;
      }
    },

    ownerChangeFun(e) {
      if (e) {
        if (this.subjectInfo.uboInfoList.length >= 4) {
          $.Dlg.warning("当选择“是”，受益人不能超过3个");
          this.$nextTick(() => {
            this.subjectInfo.owner = false;
          });
        }
      }
    },

    jumpClick(id) {
      const elem = document.getElementById(id);
      elem.scrollIntoView({ behavior: "smooth", block: "start" });
      elem.classList.add("error");
    },

    processData(data) {
      let result = [];

      for (let i = 0; i < data.length; i++) {
        let [uid, country, province, city, district] = data[i];

        if (uid.endsWith("0000")) {
          // province level
          result.push({
            value: uid,
            label: province || city,
            children: []
          });
        } else if (uid.endsWith("00")) {
          // city level
          let provinceMap = result.findIndex(item => item.value === uid.slice(0, 2) + "0000");
          if (provinceMap !== -1) {
            result[provinceMap].children.push({
              value: uid,
              label: city,
              children: []
            });
          }
        } else {
          // district level
          let provinceMap = result.findIndex(item => item.value === uid.slice(0, 2) + "0000");
          if (provinceMap !== -1) {
            let cityMap = result[provinceMap].children.findIndex(item => item.value === uid.slice(0, 4) + "00");
            if (cityMap !== -1) {
              result[provinceMap].children[cityMap].children.push({
                value: uid,
                label: district
              });
            } else {
              result[provinceMap].children.push({
                value: uid,
                label: district
              });
            }
          }
        }
      }
      return result;
    },

    changeBank(value) {
      const len = value.length;
      this.bankAccountInfo.bankAddressCode = value[len - 1];
    },

    changeBiz(value) {
      const len = value.length;
      this.businessInfo.bizAddressCode = value[len - 1];
    }
  }
});

/***/ }),

/***/ 1369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_help_vue__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_help_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_help_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    Help: __WEBPACK_IMPORTED_MODULE_0__components_help_vue___default.a
  },
  data() {
    return {
      g: window.$,
      applyRole: $.Util.hasRoleFunc(),
      wxMchIdApplyList: [],
      applymentState: new Map(),
      auditDetailShowFlag: false,
      auditDetailList: [],
      urlShowFlag: false,
      codeUrl: null
    };
  },

  created() {
    if (!this.applyRole) return;
    for (let key in $.Dict.WxApplymentState) {
      const item = $.Dict.WxApplymentState[key];
      this.applymentState.set(item.value, item.name);
    }
    this.queryApplyList();
  },

  methods: {
    queryApplyList() {
      $.Req.service($.SvName.WX_MCH_ID_APPLY_QUERY, {}, ret => {
        this.wxMchIdApplyList = ret.wxMchIdApplyList;
      });
    },

    deleteApply(id) {
      $.Dlg.confirm("您确定要删除吗？", yes => {
        $.Req.service($.SvName.WX_MCH_ID_APPLY_SAVE, {
          actionType: "D",
          deleteId: id
        }, ret => {
          this.queryApplyList();
          $.Msg.success("删除成功！");
        });
      });
    },

    ifEditHandlerFun(idx) {
      const { applymentState } = this.wxMchIdApplyList[idx];
      let flag = true;
      const stateArr = ["APPLYMENT_STATE_AUDITING", "APPLYMENT_STATE_TO_BE_CONFIRMED", "APPLYMENT_STATE_TO_BE_SIGNED", "APPLYMENT_STATE_SIGNING", "APPLYMENT_STATE_FINISHED", "APPLYMENT_STATE_CANCELED"];
      if (stateArr.indexOf(applymentState) !== -1) {
        flag = false;
      }
      return flag;
    },
    ifDeleteHandlerFun(idx) {
      const { applymentState } = this.wxMchIdApplyList[idx];
      let flag = false;
      if (!applymentState) return true;
      const stateArr = ["APPLYMENT_STATE_EDITTING",
      // "APPLYMENT_STATE_FINISHED",
      "APPLYMENT_STATE_CANCELED", "APPLYMENT_STATE_REJECTED"];
      if (stateArr.indexOf(applymentState) !== -1) {
        flag = true;
      }
      return flag;
    },
    openOnlinePayApplyFun(applyId) {
      const args = {
        applyId
      };
      $.Req.service($.SvName.WX_MCH_ID_UPDATE, args, ret => {
        $.Msg.success("已经开通成功！");
        this.queryApplyList();
      });
    },
    resetFun(applyId) {
      $.Req.service($.SvName.WX_MCH_ID_APPLY_MENT_STATE_UPDATE, {
        applyId
      }, ret => {
        this.queryApplyList();
        $.Msg.success("刷新成功！");
      });
    },

    stateClsFun(a) {
      const { applymentState } = a;
      let className = "apply-state-default";
      switch (applymentState) {
        case "APPLYMENT_STATE_EDITTING":
          className = "apply-state-auditing";
          break;
        case "APPLYMENT_STATE_AUDITING":
          className = "apply-state-auditing";
          break;
        case "APPLYMENT_STATE_REJECTED":
          className = "apply-state-canceled";
          break;
        case "APPLYMENT_STATE_TO_BE_CONFIRMED":
          className = "apply-state-auditing";
          break;
        case "APPLYMENT_STATE_TO_BE_SIGNED":
          className = "apply-state-auditing";
          break;
        case "APPLYMENT_STATE_SIGNING":
          className = "apply-state-auditing";
          break;
        case "APPLYMENT_STATE_FINISHED":
          className = "apply-state-finished";
          break;
        case "APPLYMENT_STATE_CANCELED":
          className = "apply-state-canceled";
          break;
      }
      return className;
    },

    auditDetailShowFun(a) {
      if (a) {
        this.auditDetailShowFlag = true;
        this.auditDetailList = a;
      }
    },

    resetStateFun(key) {
      let flag = false;
      const stateArr = ["APPLYMENT_STATE_AUDITING", "APPLYMENT_STATE_TO_BE_CONFIRMED", "APPLYMENT_STATE_TO_BE_SIGNED", "APPLYMENT_STATE_SIGNING"];
      if (stateArr.indexOf(key) !== -1) {
        flag = true;
      }
      return flag;
    },

    urlShowFun(url) {
      this.urlShowFlag = true;
      this.codeUrl = url;
    }
  }
});

/***/ }),

/***/ 1370:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
			today: new Date(),
			smsSignList: null,
			smsTaskList: null,
			smsTaskCount: null,
			hasCheckedSign: false,
			signDlg: false,
			taskDlg: false,
			signName: null,
			selectSignId: null,
			smsTask: {
				content: ''
			},
			smsCnts: {
				sends: null,
				buys: null,
				remnant: null
			},
			smsSendDateOpt: {
				disabledDate(date) {
					return date && date.valueOf() < Date.now();
				}
			},
			selectTaskId: null,
			smsSignNameMap: {},
			submitBtnLoading: false,
			smgSignName: '',
			cardList: null,
			receiverLimitCardArr: [],
			cardNameMap: {}
		};
	},

	created() {
		this.queryCards(() => {
			this.querySmsSignList(false, () => {
				this.querySmsTaskList(null, false);
			});
		});

		this.querySmsCounts();
	},

	methods: {
		querySmsCounts() {
			$.Req.service($.SvName.SMS_COUNTS_QUERY, {}, ret => {
				this.smsCnts.sends = ret.sends;
				this.smsCnts.buys = ret.buys;
				this.smsCnts.remnant = ret.remnant;
			}, true);
		},

		querySmsSignList(isfresh = false, callback = null) {
			$.Req.service($.SvName.SMS_SIGN_QUERY, {}, (ret, systime) => {
				this.today = Date.new(systime);
				this.smsSignList = ret.smsSignList;
				this.hasCheckedSign = false;
				for (let s of ret.smsSignList) {
					if (s.checkStatus === 2) {
						this.hasCheckedSign = true;
					}
					this.smsSignNameMap[s.signId] = s.signName;
				}
				if (isfresh) $.Msg.info($.Lang.REFRESH_DONE);
				if (callback) callback();
			});
		},

		querySmsTaskList(page = null, isfresh = false) {
			if (!page) this.smsTaskCount = null;
			let args = {
				page: page
			};
			$.Req.service($.SvName.SMS_TASK_QUERY, args, ret => {
				for (let t of ret.smsTaskList) {
					if (t.receiverLimitCards) {
						let cardNameArr = [];
						for (let cardId of t.receiverLimitCards.split(',')) {
							cardNameArr.push(this.cardNameMap[cardId]);
						}
						t.cardNameArr = cardNameArr;
					}
				}
				this.smsTaskList = ret.smsTaskList;
				if (!page) {
					this.smsTaskCount = ret.count;
				}
				if (isfresh) $.Msg.info($.Lang.REFRESH_DONE);
			}, true);
		},

		openCreateTaskDlg() {
			if (!this.hasCheckedSign) {
				$.Dlg.info('尚无审核通过的短信签名。<br/><br/>请先新增短信签名，审核通过后再新增短信群发任务。', null, false);
				return;
			}
			this.smsTask = {
				content: ''
			};
			this.receiverLimitCardArr = [];
			this.taskDlg = true;
		},

		openCreateSignDlg() {
			this.signName = null;
			this.selectSignId = null;
			this.signDlg = true;
		},

		openEditSignDlg(sign) {
			this.signName = sign.signName;
			this.selectSignId = sign.signId;
			this.signDlg = true;
		},

		saveSmsSign() {
			// check sign name
			let signName = this.signName;
			if (!signName) {
				$.Msg.error('请输入短信签名');
				return;
			}
			if (signName.length < 3) {
				$.Msg.error('短信签名不能少于3个字');
				return;
			}
			if (signName.length > 8) {
				$.Msg.error('短信签名不能多于8个字');
				return;
			}
			let regEn = /[ `~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im;
			let regCn = /[▪•·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im;
			if (regEn.test(signName) || regCn.test(signName)) {
				$.Msg.error("短信签名不能包含特殊字符");
				return;
			}

			let args = {
				actionType: this.selectSignId ? 'U' : 'I',
				smsSign: {
					signId: this.selectSignId,
					signName: this.signName
				}
			};
			$.Req.service($.SvName.SMS_SIGN_SAVE, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.querySmsSignList();
				this.signDlg = false;
			});
		},

		saveSmsTask() {
			// check
			if (!this.smsTask.signId) {
				$.Msg.error('请选择短信签名');
				return;
			}
			if (!this.smsTask.sendDate) {
				$.Msg.error('请输入短信发送日期');
				return;
			}
			if (Date.new(this.smsTask.sendDate).compareDatePart(this.today) <= 0) {
				$.Msg.error('短信发送日期必须大于今日');
				return;
			}
			if (!this.smsTask.sendTime) {
				$.Msg.error('请输入短信发送时间');
				return;
			}
			if ($.Util.isEmpty(this.smsTask.receiverType)) {
				$.Msg.error('请选择短信发送对象');
				return;
			}
			if (!this.smsTask.content) {
				$.Msg.error('请输入短信内容');
				return;
			}
			let regCn = /[▪•【】]/im;
			if (regCn.test(this.smsTask.content)) {
				$.Msg.error("短信内容不能包含特殊符号“【】▪•”");
				return;
			}
			if (this.smsTask.content.length > 400) {
				$.Msg.error('短信内容不能超过400字');
				return;
			}
			if (this.smsTask.content.indexOf("\n") >= 0) {
				$.Msg.error('短信内容不要有换行');
				return;
			}
			if (this.receiverLimitCardArr) {
				this.smsTask.receiverLimitCards = this.receiverLimitCardArr.join(',');
			} else {
				this.smsTask.receiverLimitCards = null;
			}
			let args = {
				actionType: this.smsTask.stId ? 'U' : 'I',
				smsTask: this.smsTask
			};
			if (this.smsTask.sendTime.indexOf(' ') > 0) {
				args.smsTask.sendTime = this.smsTask.sendTime.substr(this.smsTask.sendTime.indexOf(' ') + 1);
			}
			if (args.smsTask.sendTime < '07:00:00') {
				$.Msg.error('短信发送时间不能早于【07:00:00】');
				return;
			}
			if (args.smsTask.sendTime > '21:00:00') {
				$.Msg.error('短信发送时间不能晚于【21:00:00】');
				return;
			}

			this.submitBtnLoading = true;
			$.Req.service($.SvName.SMS_TASK_SAVE, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.querySmsTaskList();
				this.taskDlg = false;
				this.submitBtnLoading = false;
			}, true, err => {
				$.Dlg.error(err);
				this.submitBtnLoading = false;
			});
		},

		delSmsSign(signId) {

			$.Dlg.confirm('确定删除该短信签名吗？', yes => {
				let args = {
					actionType: 'D',
					deleteId: signId
				};
				$.Req.service($.SvName.SMS_SIGN_SAVE, args, ret => {
					$.Msg.success($.Lang.OPT_SUCCESS);
					this.querySmsSignList();
				});
			});
		},

		editSmsTask(task) {
			$.Util.copyAttributes(task, this.smsTask);
			this.smsTask.sendTime = $.Util.formatTimeObject(Date.new(task.sendTime));
			this.changeSmsSign();
			this.receiverLimitCardArr = [];
			if (this.smsTask.receiverLimitCards) {
				for (let cardId of this.smsTask.receiverLimitCards.split(',')) {
					this.receiverLimitCardArr.push(parseInt(cardId));
				}
			}
			this.taskDlg = true;
		},

		delSmsTask(taskId) {
			$.Dlg.confirm('确定删除该短信群发任务吗？', yes => {
				let args = {
					actionType: 'D',
					deleteId: taskId
				};
				$.Req.service($.SvName.SMS_TASK_SAVE, args, ret => {
					$.Msg.success($.Lang.OPT_SUCCESS);
					this.querySmsTaskList(null, false);
				});
			});
		},

		changeSmsSign() {
			for (let s of this.smsSignList) {
				if (s.signId === this.smsTask.signId) {
					this.smgSignName = s.signName;
					break;
				}
			}
		},

		queryCards(callback = null) {
			let args = { isBaseInfo: true, status: 0 };
			$.Req.service($.SvName.CARD_QUERY, args, ret => {
				this.cardList = ret.cardList;
				for (let c of ret.cardList) {
					this.cardNameMap[c.cardId] = c.cardName;
				}
				if (callback) callback();
			});
		}
	}
});

/***/ }),

/***/ 1371:
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

/* harmony default export */ __webpack_exports__["default"] = ({
		components: {},
		data() {
				return {
						g: window.$,
						queryPermit: $.Util.hasRoleFunc($.Dict.RoleFunc.TICKET_QUERY.value),
						editPermit: $.Util.hasRoleFunc($.Dict.RoleFunc.TICKET_EDIT.value),
						checkinPermit: $.Util.hasRoleFunc($.Dict.RoleFunc.TICKET_CHECKIN.value),
						query: {
								ticketNo: null,
								isCheckin: null,
								isOutdate: null,
								checkinDates: [],
								createDate: null
						},
						createTicketDlg: false,
						ticketNos: null,
						editTicketDlg: false,
						ticketList: null,
						ticketCount: 0,
						findTicketByNo: null,
						ticketBeginDate: null,
						ticketEndDate: null,
						isSelectAll: false,
						ticketCkList: new Array(30),
						ticketExpDateUpdateDlg: null,
						checkedTicketIdList: null
				};
		},

		created() {
				if (this.queryPermit) {
						this.queryTicketList();
				}
		},

		methods: {
				opencreateTicketDlg() {
						this.ticketNos = null;
						this.createTicketDlg = true;
				},

				createTickets() {
						if (!this.ticketNos) {
								$.Msg.error('请输入入场券编号');
								return;
						}

						let ticketNoList = [];
						for (let ticketNo of this.ticketNos.split('\n')) {
								let no = ticketNo.trim();
								if (no) {
										ticketNoList.push(no);
								}
						}
						if (ticketNoList.length > 500) {
								$.Dlg.error('每次提交最多支持500个编号，您提交了{0}个编号'.format(this.ticketNoList.length));
								return;
						}
						if (this.ticketBeginDate && !this.ticketEndDate) {
								$.Msg.error('请选择有效期的结束日期');
								return;
						}
						if (!this.ticketBeginDate && this.ticketEndDate) {
								$.Msg.error('请选择有效期的开始日期');
								return;
						}

						if (!confirm('您确定提交吗？')) {
								return;
						}
						let args = { actionType: 'I', newTicketNoList: ticketNoList };
						if (this.ticketBeginDate && this.ticketEndDate) {
								args.ticketBeginDate = this.ticketBeginDate;
								args.ticketEndDate = this.ticketEndDate;
						}
						$.Req.service($.SvName.TICKET_SAVE, args, ret => {
								$.Msg.success('此次新添加 {0} 张入场券'.format(ret.affectedCnt));
								this.ticketNos = null;
								this.queryTicketList();
						});
				},

				queryTicketByNo() {
						if (!this.query.ticketNo) {
								$.Msg.warning('请输入券编号');
								return;
						}
						let args = { ticketNo: this.query.ticketNo };
						$.Req.service($.SvName.TICKET_QUERY, args, ret => {
								this.ticketList = ret.ticketList;
								this.ticketCount = $.Util.isEmptyArray(this.ticketList) ? 0 : 1;
								if (this.ticketCount) {
										this.findTicketByNo = true;
								} else {
										$.Msg.warning('未查询到该编号的入场券');
										this.findTicketByNo = false;
								}
						}, true);
				},

				queryTicketList(page = null) {
						this.findTicketByNo = false;
						if (!page) this.ticketCount = null;

						let args = {
								page: page,
								isCheckin: this.query.isCheckin,
								createDate: this.query.createDate,
								isOutdate: this.query.isOutdate
						};
						if (args.isCheckin && !$.Util.isEmptyArray(this.query.checkinDates)) {
								args.checkinDateBegin = this.query.checkinDates[0];
								args.checkinDateEnd = this.query.checkinDates[1];
						}
						$.Req.service($.SvName.TICKET_QUERY, args, ret => {
								this.ticketList = ret.ticketList;
								if (!page) {
										this.ticketCount = ret.count;
								}
						}, true);
				},

				checkinTicket() {
						if ($.Util.isEmptyArray(this.ticketList)) {
								$.Msg.error('未查到入场券');
								return;
						}
						let ticket = this.ticketList[0];
						if (ticket.checkinTime) {
								$.Msg.warning('该入场券已签到');
								return;
						}

						let args = { ticketId: ticket.ticketId };
						$.Req.service($.SvName.TICKET_CHECKIN, args, ret => {
								$.Msg.success($.Lang.OPT_SUCCESS);
								ticket.checkinTime = $.Util.formatDateTime(new Date());
								ticket.checkinStaffName = $.data.user.uname;
								this.$set(this.ticketList, 0, ticket);
								this.query.ticketNo = null;
								window.scrollTo(0, 0);
						}, true);
				},

				updateTicket(idx) {
						let ticketNo = prompt('请输入新的券编号');
						if (!ticketNo) {
								return;
						}
						let ticket = this.ticketList[idx];
						let args = { ticketId: ticket.ticketId, newTicketNo: ticketNo, actionType: 'U' };
						$.Req.service($.SvName.TICKET_SAVE, args, ret => {
								ticket.ticketNo = ticketNo;
								this.$set(this.ticketList, 0, ticket);
								$.Msg.success($.Lang.SAVE_SUCCESS);
						}, true);
				},

				deleteTicket(idx, ticketId) {
						if (!confirm('您确定要删除该单次入场券吗？')) {
								return;
						}

						let args = { ticketId: ticketId, actionType: 'D' };
						$.Req.service($.SvName.TICKET_SAVE, args, ret => {
								$.Msg.success($.Lang.SAVE_SUCCESS);
								this.ticketList.splice(idx, 1);
						}, true);
				},

				selectAll() {
						this.isSelectAll = !this.isSelectAll;
						for (let i = 0, len = this.ticketCkList.length; i < len; i++) {
								this.$set(this.ticketCkList, i, this.isSelectAll);
						}
				},

				unselectAll() {
						this.isSelectAll = false;
						for (let i = 0, len = this.ticketCkList.length; i < len; i++) {
								this.$set(this.ticketCkList, i, this.isSelectAll);
						}
				},

				selectTicket(idx) {
						this.$set(this.ticketCkList, idx, !this.ticketCkList[idx]);
				},

				openExpDateDlg() {
						let checkedTicketIdList = [];
						for (let i = 0, len = this.ticketCkList.length; i < len && i < this.ticketList.length; i++) {
								if (this.ticketCkList[i] && !this.ticketList[i].checkinTime) {
										checkedTicketIdList.push(this.ticketList[i].ticketId);
								}
						}
						if (checkedTicketIdList.length === 0) {
								$.Dlg.warning('请先选择入场券');
								return;
						}
						this.ticketExpDateUpdateDlg = true;
						this.checkedTicketIdList = checkedTicketIdList;
				},

				updateTicketExpDate() {
						if (this.ticketBeginDate && !this.ticketEndDate) {
								$.Msg.error('请选择有效期的结束日期');
								return;
						}
						if (!this.ticketBeginDate && this.ticketEndDate) {
								$.Msg.error('请选择有效期的开始日期');
								return;
						}

						let args = {
								ticketIdList: this.checkedTicketIdList,
								beginDate: this.ticketBeginDate,
								endDate: this.ticketEndDate
						};
						$.Req.service($.SvName.TICKET_EXP_DATE_UPDATE, args, ret => {
								for (let i = 0, len = this.ticketCkList.length; i < len && i < this.ticketList.length; i++) {
										if (this.ticketCkList[i]) {
												let ticket = this.ticketList[i];
												ticket.beginDate = $.Util.formatDate(this.ticketBeginDate);
												ticket.endDate = $.Util.formatDate(this.ticketEndDate);
												this.$set(this.ticketList, i, ticket);
										}
								}
								this.unselectAll();
								$.Msg.success($.Lang.SAVE_SUCCESS);
								this.ticketExpDateUpdateDlg = false;
						}, true);
				},

				cancelCheckin(idx) {
						if (!confirm('您确定要取消此单次入场券的签到吗？')) {
								return;
						}
						let ticket = this.ticketList[idx];
						let args = { ticketId: ticket.ticketId };
						$.Req.service($.SvName.TICKET_CHECKIN_CANCEL, args, ret => {
								ticket.checkinTime = null;
								ticket.checkinStaffId = null;
								ticket.checkinStaffName = null;
								this.$set(this.ticketList, idx, ticket);
						}, true);
				}
		}
});

/***/ }),

/***/ 1480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addressList; });
const addressList = [["110000", "中国", "", "北京市"], ["110101", "中国", "", "北京市", "东城区"], ["110102", "中国", "", "北京市", "西城区"], ["110105", "中国", "", "北京市", "朝阳区"], ["110106", "中国", "", "北京市", "丰台区"], ["110107", "中国", "", "北京市", "石景山区"], ["110108", "中国", "", "北京市", "海淀区"], ["110109", "中国", "", "北京市", "门头沟区"], ["110111", "中国", "", "北京市", "房山区"], ["110112", "中国", "", "北京市", "通州区"], ["110113", "中国", "", "北京市", "顺义区"], ["110114", "中国", "", "北京市", "昌平区"], ["110115", "中国", "", "北京市", "大兴区"], ["110116", "中国", "", "北京市", "怀柔区"], ["110117", "中国", "", "北京市", "平谷区"], ["110118", "中国", "", "北京市", "密云区"], ["110119", "中国", "", "北京市", "延庆区"], ["120000", "中国", "", "天津市"], ["120101", "中国", "", "天津市", "和平区"], ["120102", "中国", "", "天津市", "河东区"], ["120103", "中国", "", "天津市", "河西区"], ["120104", "中国", "", "天津市", "南开区"], ["120105", "中国", "", "天津市", "河北区"], ["120106", "中国", "", "天津市", "红桥区"], ["120110", "中国", "", "天津市", "东丽区"], ["120111", "中国", "", "天津市", "西青区"], ["120112", "中国", "", "天津市", "津南区"], ["120113", "中国", "", "天津市", "北辰区"], ["120114", "中国", "", "天津市", "武清区"], ["120115", "中国", "", "天津市", "宝坻区"], ["120116", "中国", "", "天津市", "滨海新区"], ["120117", "中国", "", "天津市", "宁河区"], ["120118", "中国", "", "天津市", "静海区"], ["120119", "中国", "", "天津市", "蓟州区"], ["130000", "中国", "河北省"], ["130100", "中国", "河北省", "石家庄市"], ["130102", "中国", "河北省", "石家庄市", "长安区"], ["130104", "中国", "河北省", "石家庄市", "桥西区"], ["130105", "中国", "河北省", "石家庄市", "新华区"], ["130107", "中国", "河北省", "石家庄市", "井陉矿区"], ["130108", "中国", "河北省", "石家庄市", "裕华区"], ["130109", "中国", "河北省", "石家庄市", "藁城区"], ["130110", "中国", "河北省", "石家庄市", "鹿泉区"], ["130111", "中国", "河北省", "石家庄市", "栾城区"], ["130121", "中国", "河北省", "石家庄市", "井陉县"], ["130123", "中国", "河北省", "石家庄市", "正定县"], ["130125", "中国", "河北省", "石家庄市", "行唐县"], ["130126", "中国", "河北省", "石家庄市", "灵寿县"], ["130127", "中国", "河北省", "石家庄市", "高邑县"], ["130128", "中国", "河北省", "石家庄市", "深泽县"], ["130129", "中国", "河北省", "石家庄市", "赞皇县"], ["130130", "中国", "河北省", "石家庄市", "无极县"], ["130131", "中国", "河北省", "石家庄市", "平山县"], ["130132", "中国", "河北省", "石家庄市", "元氏县"], ["130133", "中国", "河北省", "石家庄市", "赵县"], ["130183", "中国", "河北省", "石家庄市", "晋州市"], ["130184", "中国", "河北省", "石家庄市", "新乐市"], ["130200", "中国", "河北省", "唐山市"], ["130202", "中国", "河北省", "唐山市", "路南区"], ["130203", "中国", "河北省", "唐山市", "路北区"], ["130204", "中国", "河北省", "唐山市", "古冶区"], ["130205", "中国", "河北省", "唐山市", "开平区"], ["130207", "中国", "河北省", "唐山市", "丰南区"], ["130208", "中国", "河北省", "唐山市", "丰润区"], ["130209", "中国", "河北省", "唐山市", "曹妃甸区"], ["130223", "中国", "河北省", "唐山市", "滦县"], ["130224", "中国", "河北省", "唐山市", "滦南县"], ["130225", "中国", "河北省", "唐山市", "乐亭县"], ["130227", "中国", "河北省", "唐山市", "迁西县"], ["130229", "中国", "河北省", "唐山市", "玉田县"], ["130281", "中国", "河北省", "唐山市", "遵化市"], ["130283", "中国", "河北省", "唐山市", "迁安市"], ["130300", "中国", "河北省", "秦皇岛市"], ["130302", "中国", "河北省", "秦皇岛市", "海港区"], ["130303", "中国", "河北省", "秦皇岛市", "山海关区"], ["130304", "中国", "河北省", "秦皇岛市", "北戴河区"], ["130306", "中国", "河北省", "秦皇岛市", "抚宁区"], ["130321", "中国", "河北省", "秦皇岛市", "青龙满族自治县"], ["130322", "中国", "河北省", "秦皇岛市", "昌黎县"], ["130324", "中国", "河北省", "秦皇岛市", "卢龙县"], ["130400", "中国", "河北省", "邯郸市"], ["130402", "中国", "河北省", "邯郸市", "邯山区"], ["130403", "中国", "河北省", "邯郸市", "丛台区"], ["130404", "中国", "河北省", "邯郸市", "复兴区"], ["130406", "中国", "河北省", "邯郸市", "峰峰矿区"], ["130407", "中国", "河北省", "邯郸市", "肥乡区"], ["130408", "中国", "河北省", "邯郸市", "永年区"], ["130423", "中国", "河北省", "邯郸市", "临漳县"], ["130424", "中国", "河北省", "邯郸市", "成安县"], ["130425", "中国", "河北省", "邯郸市", "大名县"], ["130426", "中国", "河北省", "邯郸市", "涉县"], ["130427", "中国", "河北省", "邯郸市", "磁县"], ["130430", "中国", "河北省", "邯郸市", "邱县"], ["130431", "中国", "河北省", "邯郸市", "鸡泽县"], ["130432", "中国", "河北省", "邯郸市", "广平县"], ["130433", "中国", "河北省", "邯郸市", "馆陶县"], ["130434", "中国", "河北省", "邯郸市", "魏县"], ["130435", "中国", "河北省", "邯郸市", "曲周县"], ["130481", "中国", "河北省", "邯郸市", "武安市"], ["130500", "中国", "河北省", "邢台市"], ["130502", "中国", "河北省", "邢台市", "桥东区"], ["130503", "中国", "河北省", "邢台市", "桥西区"], ["130521", "中国", "河北省", "邢台市", "邢台县"], ["130522", "中国", "河北省", "邢台市", "临城县"], ["130523", "中国", "河北省", "邢台市", "内丘县"], ["130524", "中国", "河北省", "邢台市", "柏乡县"], ["130525", "中国", "河北省", "邢台市", "隆尧县"], ["130526", "中国", "河北省", "邢台市", "任县"], ["130527", "中国", "河北省", "邢台市", "南和县"], ["130528", "中国", "河北省", "邢台市", "宁晋县"], ["130529", "中国", "河北省", "邢台市", "巨鹿县"], ["130530", "中国", "河北省", "邢台市", "新河县"], ["130531", "中国", "河北省", "邢台市", "广宗县"], ["130532", "中国", "河北省", "邢台市", "平乡县"], ["130533", "中国", "河北省", "邢台市", "威县"], ["130534", "中国", "河北省", "邢台市", "清河县"], ["130535", "中国", "河北省", "邢台市", "临西县"], ["130581", "中国", "河北省", "邢台市", "南宫市"], ["130582", "中国", "河北省", "邢台市", "沙河市"], ["130600", "中国", "河北省", "保定市"], ["130602", "中国", "河北省", "保定市", "竞秀区"], ["130606", "中国", "河北省", "保定市", "莲池区"], ["130607", "中国", "河北省", "保定市", "满城区"], ["130608", "中国", "河北省", "保定市", "清苑区"], ["130609", "中国", "河北省", "保定市", "徐水区"], ["130623", "中国", "河北省", "保定市", "涞水县"], ["130624", "中国", "河北省", "保定市", "阜平县"], ["130626", "中国", "河北省", "保定市", "定兴县"], ["130627", "中国", "河北省", "保定市", "唐县"], ["130628", "中国", "河北省", "保定市", "高阳县"], ["130629", "中国", "河北省", "保定市", "容城县"], ["130630", "中国", "河北省", "保定市", "涞源县"], ["130631", "中国", "河北省", "保定市", "望都县"], ["130632", "中国", "河北省", "保定市", "安新县"], ["130633", "中国", "河北省", "保定市", "易县"], ["130634", "中国", "河北省", "保定市", "曲阳县"], ["130635", "中国", "河北省", "保定市", "蠡县"], ["130636", "中国", "河北省", "保定市", "顺平县"], ["130637", "中国", "河北省", "保定市", "博野县"], ["130638", "中国", "河北省", "保定市", "雄县"], ["130681", "中国", "河北省", "保定市", "涿州市"], ["130683", "中国", "河北省", "保定市", "安国市"], ["130684", "中国", "河北省", "保定市", "高碑店市"], ["130700", "中国", "河北省", "张家口市"], ["130702", "中国", "河北省", "张家口市", "桥东区"], ["130703", "中国", "河北省", "张家口市", "桥西区"], ["130705", "中国", "河北省", "张家口市", "宣化区"], ["130706", "中国", "河北省", "张家口市", "下花园区"], ["130708", "中国", "河北省", "张家口市", "万全区"], ["130709", "中国", "河北省", "张家口市", "崇礼区"], ["130722", "中国", "河北省", "张家口市", "张北县"], ["130723", "中国", "河北省", "张家口市", "康保县"], ["130724", "中国", "河北省", "张家口市", "沽源县"], ["130725", "中国", "河北省", "张家口市", "尚义县"], ["130726", "中国", "河北省", "张家口市", "蔚县"], ["130727", "中国", "河北省", "张家口市", "阳原县"], ["130728", "中国", "河北省", "张家口市", "怀安县"], ["130730", "中国", "河北省", "张家口市", "怀来县"], ["130731", "中国", "河北省", "张家口市", "涿鹿县"], ["130732", "中国", "河北省", "张家口市", "赤城县"], ["130800", "中国", "河北省", "承德市"], ["130802", "中国", "河北省", "承德市", "双桥区"], ["130803", "中国", "河北省", "承德市", "双滦区"], ["130804", "中国", "河北省", "承德市", "鹰手营子矿区"], ["130821", "中国", "河北省", "承德市", "承德县"], ["130822", "中国", "河北省", "承德市", "兴隆县"], ["130824", "中国", "河北省", "承德市", "滦平县"], ["130825", "中国", "河北省", "承德市", "隆化县"], ["130826", "中国", "河北省", "承德市", "丰宁满族自治县"], ["130827", "中国", "河北省", "承德市", "宽城满族自治县"], ["130828", "中国", "河北省", "承德市", "围场满族蒙古族自治县"], ["130881", "中国", "河北省", "承德市", "平泉市"], ["130900", "中国", "河北省", "沧州市"], ["130902", "中国", "河北省", "沧州市", "新华区"], ["130903", "中国", "河北省", "沧州市", "运河区"], ["130921", "中国", "河北省", "沧州市", "沧县"], ["130922", "中国", "河北省", "沧州市", "青县"], ["130923", "中国", "河北省", "沧州市", "东光县"], ["130924", "中国", "河北省", "沧州市", "海兴县"], ["130925", "中国", "河北省", "沧州市", "盐山县"], ["130926", "中国", "河北省", "沧州市", "肃宁县"], ["130927", "中国", "河北省", "沧州市", "南皮县"], ["130928", "中国", "河北省", "沧州市", "吴桥县"], ["130929", "中国", "河北省", "沧州市", "献县"], ["130930", "中国", "河北省", "沧州市", "孟村回族自治县"], ["130981", "中国", "河北省", "沧州市", "泊头市"], ["130982", "中国", "河北省", "沧州市", "任丘市"], ["130983", "中国", "河北省", "沧州市", "黄骅市"], ["130984", "中国", "河北省", "沧州市", "河间市"], ["131000", "中国", "河北省", "廊坊市"], ["131002", "中国", "河北省", "廊坊市", "安次区"], ["131003", "中国", "河北省", "廊坊市", "广阳区"], ["131022", "中国", "河北省", "廊坊市", "固安县"], ["131023", "中国", "河北省", "廊坊市", "永清县"], ["131024", "中国", "河北省", "廊坊市", "香河县"], ["131025", "中国", "河北省", "廊坊市", "大城县"], ["131026", "中国", "河北省", "廊坊市", "文安县"], ["131028", "中国", "河北省", "廊坊市", "大厂回族自治县"], ["131081", "中国", "河北省", "廊坊市", "霸州市"], ["131082", "中国", "河北省", "廊坊市", "三河市"], ["131100", "中国", "河北省", "衡水市"], ["131102", "中国", "河北省", "衡水市", "桃城区"], ["131103", "中国", "河北省", "衡水市", "冀州区"], ["131121", "中国", "河北省", "衡水市", "枣强县"], ["131122", "中国", "河北省", "衡水市", "武邑县"], ["131123", "中国", "河北省", "衡水市", "武强县"], ["131124", "中国", "河北省", "衡水市", "饶阳县"], ["131125", "中国", "河北省", "衡水市", "安平县"], ["131126", "中国", "河北省", "衡水市", "故城县"], ["131127", "中国", "河北省", "衡水市", "景县"], ["131128", "中国", "河北省", "衡水市", "阜城县"], ["131182", "中国", "河北省", "衡水市", "深州市"], ["139001", "中国", "河北省", "定州市", "定州市"], ["139002", "中国", "河北省", "辛集市", "辛集市"], ["140000", "中国", "山西省"], ["140100", "中国", "山西省", "太原市"], ["140105", "中国", "山西省", "太原市", "小店区"], ["140106", "中国", "山西省", "太原市", "迎泽区"], ["140107", "中国", "山西省", "太原市", "杏花岭区"], ["140108", "中国", "山西省", "太原市", "尖草坪区"], ["140109", "中国", "山西省", "太原市", "万柏林区"], ["140110", "中国", "山西省", "太原市", "晋源区"], ["140121", "中国", "山西省", "太原市", "清徐县"], ["140122", "中国", "山西省", "太原市", "阳曲县"], ["140123", "中国", "山西省", "太原市", "娄烦县"], ["140181", "中国", "山西省", "太原市", "古交市"], ["140200", "中国", "山西省", "大同市"], ["140202", "中国", "山西省", "大同市", "城区"], ["140203", "中国", "山西省", "大同市", "矿区"], ["140211", "中国", "山西省", "大同市", "南郊区"], ["140212", "中国", "山西省", "大同市", "新荣区"], ["140221", "中国", "山西省", "大同市", "阳高县"], ["140222", "中国", "山西省", "大同市", "天镇县"], ["140223", "中国", "山西省", "大同市", "广灵县"], ["140224", "中国", "山西省", "大同市", "灵丘县"], ["140225", "中国", "山西省", "大同市", "浑源县"], ["140226", "中国", "山西省", "大同市", "左云县"], ["140227", "中国", "山西省", "大同市", "大同县"], ["140300", "中国", "山西省", "阳泉市"], ["140302", "中国", "山西省", "阳泉市", "城区"], ["140303", "中国", "山西省", "阳泉市", "矿区"], ["140311", "中国", "山西省", "阳泉市", "郊区"], ["140321", "中国", "山西省", "阳泉市", "平定县"], ["140322", "中国", "山西省", "阳泉市", "盂县"], ["140400", "中国", "山西省", "长治市"], ["140402", "中国", "山西省", "长治市", "城区"], ["140411", "中国", "山西省", "长治市", "郊区"], ["140421", "中国", "山西省", "长治市", "长治县"], ["140423", "中国", "山西省", "长治市", "襄垣县"], ["140424", "中国", "山西省", "长治市", "屯留县"], ["140425", "中国", "山西省", "长治市", "平顺县"], ["140426", "中国", "山西省", "长治市", "黎城县"], ["140427", "中国", "山西省", "长治市", "壶关县"], ["140428", "中国", "山西省", "长治市", "长子县"], ["140429", "中国", "山西省", "长治市", "武乡县"], ["140430", "中国", "山西省", "长治市", "沁县"], ["140431", "中国", "山西省", "长治市", "沁源县"], ["140481", "中国", "山西省", "长治市", "潞城市"], ["140500", "中国", "山西省", "晋城市"], ["140502", "中国", "山西省", "晋城市", "城区"], ["140521", "中国", "山西省", "晋城市", "沁水县"], ["140522", "中国", "山西省", "晋城市", "阳城县"], ["140524", "中国", "山西省", "晋城市", "陵川县"], ["140525", "中国", "山西省", "晋城市", "泽州县"], ["140581", "中国", "山西省", "晋城市", "高平市"], ["140600", "中国", "山西省", "朔州市"], ["140602", "中国", "山西省", "朔州市", "朔城区"], ["140603", "中国", "山西省", "朔州市", "平鲁区"], ["140621", "中国", "山西省", "朔州市", "山阴县"], ["140622", "中国", "山西省", "朔州市", "应县"], ["140623", "中国", "山西省", "朔州市", "右玉县"], ["140624", "中国", "山西省", "朔州市", "怀仁县"], ["140700", "中国", "山西省", "晋中市"], ["140702", "中国", "山西省", "晋中市", "榆次区"], ["140721", "中国", "山西省", "晋中市", "榆社县"], ["140722", "中国", "山西省", "晋中市", "左权县"], ["140723", "中国", "山西省", "晋中市", "和顺县"], ["140724", "中国", "山西省", "晋中市", "昔阳县"], ["140725", "中国", "山西省", "晋中市", "寿阳县"], ["140726", "中国", "山西省", "晋中市", "太谷县"], ["140727", "中国", "山西省", "晋中市", "祁县"], ["140728", "中国", "山西省", "晋中市", "平遥县"], ["140729", "中国", "山西省", "晋中市", "灵石县"], ["140781", "中国", "山西省", "晋中市", "介休市"], ["140800", "中国", "山西省", "运城市"], ["140802", "中国", "山西省", "运城市", "盐湖区"], ["140821", "中国", "山西省", "运城市", "临猗县"], ["140822", "中国", "山西省", "运城市", "万荣县"], ["140823", "中国", "山西省", "运城市", "闻喜县"], ["140824", "中国", "山西省", "运城市", "稷山县"], ["140825", "中国", "山西省", "运城市", "新绛县"], ["140826", "中国", "山西省", "运城市", "绛县"], ["140827", "中国", "山西省", "运城市", "垣曲县"], ["140828", "中国", "山西省", "运城市", "夏县"], ["140829", "中国", "山西省", "运城市", "平陆县"], ["140830", "中国", "山西省", "运城市", "芮城县"], ["140881", "中国", "山西省", "运城市", "永济市"], ["140882", "中国", "山西省", "运城市", "河津市"], ["140900", "中国", "山西省", "忻州市"], ["140902", "中国", "山西省", "忻州市", "忻府区"], ["140921", "中国", "山西省", "忻州市", "定襄县"], ["140922", "中国", "山西省", "忻州市", "五台县"], ["140923", "中国", "山西省", "忻州市", "代县"], ["140924", "中国", "山西省", "忻州市", "繁峙县"], ["140925", "中国", "山西省", "忻州市", "宁武县"], ["140926", "中国", "山西省", "忻州市", "静乐县"], ["140927", "中国", "山西省", "忻州市", "神池县"], ["140928", "中国", "山西省", "忻州市", "五寨县"], ["140929", "中国", "山西省", "忻州市", "岢岚县"], ["140930", "中国", "山西省", "忻州市", "河曲县"], ["140931", "中国", "山西省", "忻州市", "保德县"], ["140932", "中国", "山西省", "忻州市", "偏关县"], ["140981", "中国", "山西省", "忻州市", "原平市"], ["141000", "中国", "山西省", "临汾市"], ["141002", "中国", "山西省", "临汾市", "尧都区"], ["141021", "中国", "山西省", "临汾市", "曲沃县"], ["141022", "中国", "山西省", "临汾市", "翼城县"], ["141023", "中国", "山西省", "临汾市", "襄汾县"], ["141024", "中国", "山西省", "临汾市", "洪洞县"], ["141025", "中国", "山西省", "临汾市", "古县"], ["141026", "中国", "山西省", "临汾市", "安泽县"], ["141027", "中国", "山西省", "临汾市", "浮山县"], ["141028", "中国", "山西省", "临汾市", "吉县"], ["141029", "中国", "山西省", "临汾市", "乡宁县"], ["141030", "中国", "山西省", "临汾市", "大宁县"], ["141031", "中国", "山西省", "临汾市", "隰县"], ["141032", "中国", "山西省", "临汾市", "永和县"], ["141033", "中国", "山西省", "临汾市", "蒲县"], ["141034", "中国", "山西省", "临汾市", "汾西县"], ["141081", "中国", "山西省", "临汾市", "侯马市"], ["141082", "中国", "山西省", "临汾市", "霍州市"], ["141100", "中国", "山西省", "吕梁市"], ["141102", "中国", "山西省", "吕梁市", "离石区"], ["141121", "中国", "山西省", "吕梁市", "文水县"], ["141122", "中国", "山西省", "吕梁市", "交城县"], ["141123", "中国", "山西省", "吕梁市", "兴县"], ["141124", "中国", "山西省", "吕梁市", "临县"], ["141125", "中国", "山西省", "吕梁市", "柳林县"], ["141126", "中国", "山西省", "吕梁市", "石楼县"], ["141127", "中国", "山西省", "吕梁市", "岚县"], ["141128", "中国", "山西省", "吕梁市", "方山县"], ["141129", "中国", "山西省", "吕梁市", "中阳县"], ["141130", "中国", "山西省", "吕梁市", "交口县"], ["141181", "中国", "山西省", "吕梁市", "孝义市"], ["141182", "中国", "山西省", "吕梁市", "汾阳市"], ["150000", "中国", "内蒙古自治区"], ["150100", "中国", "内蒙古自治区", "呼和浩特市"], ["150102", "中国", "内蒙古自治区", "呼和浩特市", "新城区"], ["150103", "中国", "内蒙古自治区", "呼和浩特市", "回民区"], ["150104", "中国", "内蒙古自治区", "呼和浩特市", "玉泉区"], ["150105", "中国", "内蒙古自治区", "呼和浩特市", "赛罕区"], ["150121", "中国", "内蒙古自治区", "呼和浩特市", "土默特左旗"], ["150122", "中国", "内蒙古自治区", "呼和浩特市", "托克托县"], ["150123", "中国", "内蒙古自治区", "呼和浩特市", "和林格尔县"], ["150124", "中国", "内蒙古自治区", "呼和浩特市", "清水河县"], ["150125", "中国", "内蒙古自治区", "呼和浩特市", "武川县"], ["150200", "中国", "内蒙古自治区", "包头市"], ["150202", "中国", "内蒙古自治区", "包头市", "东河区"], ["150203", "中国", "内蒙古自治区", "包头市", "昆都仑区"], ["150204", "中国", "内蒙古自治区", "包头市", "青山区"], ["150205", "中国", "内蒙古自治区", "包头市", "石拐区"], ["150206", "中国", "内蒙古自治区", "包头市", "白云鄂博矿区"], ["150207", "中国", "内蒙古自治区", "包头市", "九原区"], ["150221", "中国", "内蒙古自治区", "包头市", "土默特右旗"], ["150222", "中国", "内蒙古自治区", "包头市", "固阳县"], ["150223", "中国", "内蒙古自治区", "包头市", "达尔罕茂明安联合旗"], ["150300", "中国", "内蒙古自治区", "乌海市"], ["150302", "中国", "内蒙古自治区", "乌海市", "海勃湾区"], ["150303", "中国", "内蒙古自治区", "乌海市", "海南区"], ["150304", "中国", "内蒙古自治区", "乌海市", "乌达区"], ["150400", "中国", "内蒙古自治区", "赤峰市"], ["150402", "中国", "内蒙古自治区", "赤峰市", "红山区"], ["150403", "中国", "内蒙古自治区", "赤峰市", "元宝山区"], ["150404", "中国", "内蒙古自治区", "赤峰市", "松山区"], ["150421", "中国", "内蒙古自治区", "赤峰市", "阿鲁科尔沁旗"], ["150422", "中国", "内蒙古自治区", "赤峰市", "巴林左旗"], ["150423", "中国", "内蒙古自治区", "赤峰市", "巴林右旗"], ["150424", "中国", "内蒙古自治区", "赤峰市", "林西县"], ["150425", "中国", "内蒙古自治区", "赤峰市", "克什克腾旗"], ["150426", "中国", "内蒙古自治区", "赤峰市", "翁牛特旗"], ["150428", "中国", "内蒙古自治区", "赤峰市", "喀喇沁旗"], ["150429", "中国", "内蒙古自治区", "赤峰市", "宁城县"], ["150430", "中国", "内蒙古自治区", "赤峰市", "敖汉旗"], ["150500", "中国", "内蒙古自治区", "通辽市"], ["150502", "中国", "内蒙古自治区", "通辽市", "科尔沁区"], ["150521", "中国", "内蒙古自治区", "通辽市", "科尔沁左翼中旗"], ["150522", "中国", "内蒙古自治区", "通辽市", "科尔沁左翼后旗"], ["150523", "中国", "内蒙古自治区", "通辽市", "开鲁县"], ["150524", "中国", "内蒙古自治区", "通辽市", "库伦旗"], ["150525", "中国", "内蒙古自治区", "通辽市", "奈曼旗"], ["150526", "中国", "内蒙古自治区", "通辽市", "扎鲁特旗"], ["150581", "中国", "内蒙古自治区", "通辽市", "霍林郭勒市"], ["150600", "中国", "内蒙古自治区", "鄂尔多斯市"], ["150602", "中国", "内蒙古自治区", "鄂尔多斯市", "东胜区"], ["150603", "中国", "内蒙古自治区", "鄂尔多斯市", "康巴什区"], ["150621", "中国", "内蒙古自治区", "鄂尔多斯市", "达拉特旗"], ["150622", "中国", "内蒙古自治区", "鄂尔多斯市", "准格尔旗"], ["150623", "中国", "内蒙古自治区", "鄂尔多斯市", "鄂托克前旗"], ["150624", "中国", "内蒙古自治区", "鄂尔多斯市", "鄂托克旗"], ["150625", "中国", "内蒙古自治区", "鄂尔多斯市", "杭锦旗"], ["150626", "中国", "内蒙古自治区", "鄂尔多斯市", "乌审旗"], ["150627", "中国", "内蒙古自治区", "鄂尔多斯市", "伊金霍洛旗"], ["150700", "中国", "内蒙古自治区", "呼伦贝尔市"], ["150702", "中国", "内蒙古自治区", "呼伦贝尔市", "海拉尔区"], ["150703", "中国", "内蒙古自治区", "呼伦贝尔市", "扎赉诺尔区"], ["150721", "中国", "内蒙古自治区", "呼伦贝尔市", "阿荣旗"], ["150722", "中国", "内蒙古自治区", "呼伦贝尔市", "莫力达瓦达斡尔族自治旗"], ["150723", "中国", "内蒙古自治区", "呼伦贝尔市", "鄂伦春自治旗"], ["150724", "中国", "内蒙古自治区", "呼伦贝尔市", "鄂温克族自治旗"], ["150725", "中国", "内蒙古自治区", "呼伦贝尔市", "陈巴尔虎旗"], ["150726", "中国", "内蒙古自治区", "呼伦贝尔市", "新巴尔虎左旗"], ["150727", "中国", "内蒙古自治区", "呼伦贝尔市", "新巴尔虎右旗"], ["150781", "中国", "内蒙古自治区", "呼伦贝尔市", "满洲里市"], ["150782", "中国", "内蒙古自治区", "呼伦贝尔市", "牙克石市"], ["150783", "中国", "内蒙古自治区", "呼伦贝尔市", "扎兰屯市"], ["150784", "中国", "内蒙古自治区", "呼伦贝尔市", "额尔古纳市"], ["150785", "中国", "内蒙古自治区", "呼伦贝尔市", "根河市"], ["150800", "中国", "内蒙古自治区", "巴彦淖尔市"], ["150802", "中国", "内蒙古自治区", "巴彦淖尔市", "临河区"], ["150821", "中国", "内蒙古自治区", "巴彦淖尔市", "五原县"], ["150822", "中国", "内蒙古自治区", "巴彦淖尔市", "磴口县"], ["150823", "中国", "内蒙古自治区", "巴彦淖尔市", "乌拉特前旗"], ["150824", "中国", "内蒙古自治区", "巴彦淖尔市", "乌拉特中旗"], ["150825", "中国", "内蒙古自治区", "巴彦淖尔市", "乌拉特后旗"], ["150826", "中国", "内蒙古自治区", "巴彦淖尔市", "杭锦后旗"], ["150900", "中国", "内蒙古自治区", "乌兰察布市"], ["150902", "中国", "内蒙古自治区", "乌兰察布市", "集宁区"], ["150921", "中国", "内蒙古自治区", "乌兰察布市", "卓资县"], ["150922", "中国", "内蒙古自治区", "乌兰察布市", "化德县"], ["150923", "中国", "内蒙古自治区", "乌兰察布市", "商都县"], ["150924", "中国", "内蒙古自治区", "乌兰察布市", "兴和县"], ["150925", "中国", "内蒙古自治区", "乌兰察布市", "凉城县"], ["150926", "中国", "内蒙古自治区", "乌兰察布市", "察哈尔右翼前旗"], ["150927", "中国", "内蒙古自治区", "乌兰察布市", "察哈尔右翼中旗"], ["150928", "中国", "内蒙古自治区", "乌兰察布市", "察哈尔右翼后旗"], ["150929", "中国", "内蒙古自治区", "乌兰察布市", "四子王旗"], ["150981", "中国", "内蒙古自治区", "乌兰察布市", "丰镇市"], ["152200", "中国", "内蒙古自治区", "兴安盟"], ["152201", "中国", "内蒙古自治区", "兴安盟", "乌兰浩特市"], ["152202", "中国", "内蒙古自治区", "兴安盟", "阿尔山市"], ["152221", "中国", "内蒙古自治区", "兴安盟", "科尔沁右翼前旗"], ["152222", "中国", "内蒙古自治区", "兴安盟", "科尔沁右翼中旗"], ["152223", "中国", "内蒙古自治区", "兴安盟", "扎赉特旗"], ["152224", "中国", "内蒙古自治区", "兴安盟", "突泉县"], ["152500", "中国", "内蒙古自治区", "锡林郭勒盟"], ["152501", "中国", "内蒙古自治区", "锡林郭勒盟", "二连浩特市"], ["152502", "中国", "内蒙古自治区", "锡林郭勒盟", "锡林浩特市"], ["152522", "中国", "内蒙古自治区", "锡林郭勒盟", "阿巴嘎旗"], ["152523", "中国", "内蒙古自治区", "锡林郭勒盟", "苏尼特左旗"], ["152524", "中国", "内蒙古自治区", "锡林郭勒盟", "苏尼特右旗"], ["152525", "中国", "内蒙古自治区", "锡林郭勒盟", "东乌珠穆沁旗"], ["152526", "中国", "内蒙古自治区", "锡林郭勒盟", "西乌珠穆沁旗"], ["152527", "中国", "内蒙古自治区", "锡林郭勒盟", "太仆寺旗"], ["152528", "中国", "内蒙古自治区", "锡林郭勒盟", "镶黄旗"], ["152529", "中国", "内蒙古自治区", "锡林郭勒盟", "正镶白旗"], ["152530", "中国", "内蒙古自治区", "锡林郭勒盟", "正蓝旗"], ["152531", "中国", "内蒙古自治区", "锡林郭勒盟", "多伦县"], ["152900", "中国", "内蒙古自治区", "阿拉善盟"], ["152921", "中国", "内蒙古自治区", "阿拉善盟", "阿拉善左旗"], ["152922", "中国", "内蒙古自治区", "阿拉善盟", "阿拉善右旗"], ["152923", "中国", "内蒙古自治区", "阿拉善盟", "额济纳旗"], ["210000", "中国", "辽宁省"], ["210100", "中国", "辽宁省", "沈阳市"], ["210102", "中国", "辽宁省", "沈阳市", "和平区"], ["210103", "中国", "辽宁省", "沈阳市", "沈河区"], ["210104", "中国", "辽宁省", "沈阳市", "大东区"], ["210105", "中国", "辽宁省", "沈阳市", "皇姑区"], ["210106", "中国", "辽宁省", "沈阳市", "铁西区"], ["210111", "中国", "辽宁省", "沈阳市", "苏家屯区"], ["210112", "中国", "辽宁省", "沈阳市", "浑南区"], ["210113", "中国", "辽宁省", "沈阳市", "沈北新区"], ["210114", "中国", "辽宁省", "沈阳市", "于洪区"], ["210115", "中国", "辽宁省", "沈阳市", "辽中区"], ["210123", "中国", "辽宁省", "沈阳市", "康平县"], ["210124", "中国", "辽宁省", "沈阳市", "法库县"], ["210181", "中国", "辽宁省", "沈阳市", "新民市"], ["210200", "中国", "辽宁省", "大连市"], ["210202", "中国", "辽宁省", "大连市", "中山区"], ["210203", "中国", "辽宁省", "大连市", "西岗区"], ["210204", "中国", "辽宁省", "大连市", "沙河口区"], ["210211", "中国", "辽宁省", "大连市", "甘井子区"], ["210212", "中国", "辽宁省", "大连市", "旅顺口区"], ["210213", "中国", "辽宁省", "大连市", "金州区"], ["210214", "中国", "辽宁省", "大连市", "普兰店区"], ["210224", "中国", "辽宁省", "大连市", "长海县"], ["210281", "中国", "辽宁省", "大连市", "瓦房店市"], ["210283", "中国", "辽宁省", "大连市", "庄河市"], ["210300", "中国", "辽宁省", "鞍山市"], ["210302", "中国", "辽宁省", "鞍山市", "铁东区"], ["210303", "中国", "辽宁省", "鞍山市", "铁西区"], ["210304", "中国", "辽宁省", "鞍山市", "立山区"], ["210311", "中国", "辽宁省", "鞍山市", "千山区"], ["210321", "中国", "辽宁省", "鞍山市", "台安县"], ["210323", "中国", "辽宁省", "鞍山市", "岫岩满族自治县"], ["210381", "中国", "辽宁省", "鞍山市", "海城市"], ["210400", "中国", "辽宁省", "抚顺市"], ["210402", "中国", "辽宁省", "抚顺市", "新抚区"], ["210403", "中国", "辽宁省", "抚顺市", "东洲区"], ["210404", "中国", "辽宁省", "抚顺市", "望花区"], ["210411", "中国", "辽宁省", "抚顺市", "顺城区"], ["210421", "中国", "辽宁省", "抚顺市", "抚顺县"], ["210422", "中国", "辽宁省", "抚顺市", "新宾满族自治县"], ["210423", "中国", "辽宁省", "抚顺市", "清原满族自治县"], ["210500", "中国", "辽宁省", "本溪市"], ["210502", "中国", "辽宁省", "本溪市", "平山区"], ["210503", "中国", "辽宁省", "本溪市", "溪湖区"], ["210504", "中国", "辽宁省", "本溪市", "明山区"], ["210505", "中国", "辽宁省", "本溪市", "南芬区"], ["210521", "中国", "辽宁省", "本溪市", "本溪满族自治县"], ["210522", "中国", "辽宁省", "本溪市", "桓仁满族自治县"], ["210600", "中国", "辽宁省", "丹东市"], ["210602", "中国", "辽宁省", "丹东市", "元宝区"], ["210603", "中国", "辽宁省", "丹东市", "振兴区"], ["210604", "中国", "辽宁省", "丹东市", "振安区"], ["210624", "中国", "辽宁省", "丹东市", "宽甸满族自治县"], ["210681", "中国", "辽宁省", "丹东市", "东港市"], ["210682", "中国", "辽宁省", "丹东市", "凤城市"], ["210700", "中国", "辽宁省", "锦州市"], ["210702", "中国", "辽宁省", "锦州市", "古塔区"], ["210703", "中国", "辽宁省", "锦州市", "凌河区"], ["210711", "中国", "辽宁省", "锦州市", "太和区"], ["210726", "中国", "辽宁省", "锦州市", "黑山县"], ["210727", "中国", "辽宁省", "锦州市", "义县"], ["210781", "中国", "辽宁省", "锦州市", "凌海市"], ["210782", "中国", "辽宁省", "锦州市", "北镇市"], ["210800", "中国", "辽宁省", "营口市"], ["210802", "中国", "辽宁省", "营口市", "站前区"], ["210803", "中国", "辽宁省", "营口市", "西市区"], ["210804", "中国", "辽宁省", "营口市", "鲅鱼圈区"], ["210811", "中国", "辽宁省", "营口市", "老边区"], ["210881", "中国", "辽宁省", "营口市", "盖州市"], ["210882", "中国", "辽宁省", "营口市", "大石桥市"], ["210900", "中国", "辽宁省", "阜新市"], ["210902", "中国", "辽宁省", "阜新市", "海州区"], ["210903", "中国", "辽宁省", "阜新市", "新邱区"], ["210904", "中国", "辽宁省", "阜新市", "太平区"], ["210905", "中国", "辽宁省", "阜新市", "清河门区"], ["210911", "中国", "辽宁省", "阜新市", "细河区"], ["210921", "中国", "辽宁省", "阜新市", "阜新蒙古族自治县"], ["210922", "中国", "辽宁省", "阜新市", "彰武县"], ["211000", "中国", "辽宁省", "辽阳市"], ["211002", "中国", "辽宁省", "辽阳市", "白塔区"], ["211003", "中国", "辽宁省", "辽阳市", "文圣区"], ["211004", "中国", "辽宁省", "辽阳市", "宏伟区"], ["211005", "中国", "辽宁省", "辽阳市", "弓长岭区"], ["211011", "中国", "辽宁省", "辽阳市", "太子河区"], ["211021", "中国", "辽宁省", "辽阳市", "辽阳县"], ["211081", "中国", "辽宁省", "辽阳市", "灯塔市"], ["211100", "中国", "辽宁省", "盘锦市"], ["211102", "中国", "辽宁省", "盘锦市", "双台子区"], ["211103", "中国", "辽宁省", "盘锦市", "兴隆台区"], ["211104", "中国", "辽宁省", "盘锦市", "大洼区"], ["211122", "中国", "辽宁省", "盘锦市", "盘山县"], ["211200", "中国", "辽宁省", "铁岭市"], ["211202", "中国", "辽宁省", "铁岭市", "银州区"], ["211204", "中国", "辽宁省", "铁岭市", "清河区"], ["211221", "中国", "辽宁省", "铁岭市", "铁岭县"], ["211223", "中国", "辽宁省", "铁岭市", "西丰县"], ["211224", "中国", "辽宁省", "铁岭市", "昌图县"], ["211281", "中国", "辽宁省", "铁岭市", "调兵山市"], ["211282", "中国", "辽宁省", "铁岭市", "开原市"], ["211300", "中国", "辽宁省", "朝阳市"], ["211302", "中国", "辽宁省", "朝阳市", "双塔区"], ["211303", "中国", "辽宁省", "朝阳市", "龙城区"], ["211321", "中国", "辽宁省", "朝阳市", "朝阳县"], ["211322", "中国", "辽宁省", "朝阳市", "建平县"], ["211324", "中国", "辽宁省", "朝阳市", "喀喇沁左翼蒙古族自治县"], ["211381", "中国", "辽宁省", "朝阳市", "北票市"], ["211382", "中国", "辽宁省", "朝阳市", "凌源市"], ["211400", "中国", "辽宁省", "葫芦岛市"], ["211402", "中国", "辽宁省", "葫芦岛市", "连山区"], ["211403", "中国", "辽宁省", "葫芦岛市", "龙港区"], ["211404", "中国", "辽宁省", "葫芦岛市", "南票区"], ["211421", "中国", "辽宁省", "葫芦岛市", "绥中县"], ["211422", "中国", "辽宁省", "葫芦岛市", "建昌县"], ["211481", "中国", "辽宁省", "葫芦岛市", "兴城市"], ["220000", "中国", "吉林省"], ["220100", "中国", "吉林省", "长春市"], ["220102", "中国", "吉林省", "长春市", "南关区"], ["220103", "中国", "吉林省", "长春市", "宽城区"], ["220104", "中国", "吉林省", "长春市", "朝阳区"], ["220105", "中国", "吉林省", "长春市", "二道区"], ["220106", "中国", "吉林省", "长春市", "绿园区"], ["220112", "中国", "吉林省", "长春市", "双阳区"], ["220113", "中国", "吉林省", "长春市", "九台区"], ["220122", "中国", "吉林省", "长春市", "农安县"], ["220182", "中国", "吉林省", "长春市", "榆树市"], ["220183", "中国", "吉林省", "长春市", "德惠市"], ["220200", "中国", "吉林省", "吉林市"], ["220202", "中国", "吉林省", "吉林市", "昌邑区"], ["220203", "中国", "吉林省", "吉林市", "龙潭区"], ["220204", "中国", "吉林省", "吉林市", "船营区"], ["220211", "中国", "吉林省", "吉林市", "丰满区"], ["220221", "中国", "吉林省", "吉林市", "永吉县"], ["220281", "中国", "吉林省", "吉林市", "蛟河市"], ["220282", "中国", "吉林省", "吉林市", "桦甸市"], ["220283", "中国", "吉林省", "吉林市", "舒兰市"], ["220284", "中国", "吉林省", "吉林市", "磐石市"], ["220300", "中国", "吉林省", "四平市"], ["220302", "中国", "吉林省", "四平市", "铁西区"], ["220303", "中国", "吉林省", "四平市", "铁东区"], ["220322", "中国", "吉林省", "四平市", "梨树县"], ["220323", "中国", "吉林省", "四平市", "伊通满族自治县"], ["220381", "中国", "吉林省", "四平市", "公主岭市"], ["220382", "中国", "吉林省", "四平市", "双辽市"], ["220400", "中国", "吉林省", "辽源市"], ["220402", "中国", "吉林省", "辽源市", "龙山区"], ["220403", "中国", "吉林省", "辽源市", "西安区"], ["220421", "中国", "吉林省", "辽源市", "东丰县"], ["220422", "中国", "吉林省", "辽源市", "东辽县"], ["220500", "中国", "吉林省", "通化市"], ["220502", "中国", "吉林省", "通化市", "东昌区"], ["220503", "中国", "吉林省", "通化市", "二道江区"], ["220521", "中国", "吉林省", "通化市", "通化县"], ["220523", "中国", "吉林省", "通化市", "辉南县"], ["220524", "中国", "吉林省", "通化市", "柳河县"], ["220581", "中国", "吉林省", "通化市", "梅河口市"], ["220582", "中国", "吉林省", "通化市", "集安市"], ["220600", "中国", "吉林省", "白山市"], ["220602", "中国", "吉林省", "白山市", "浑江区"], ["220605", "中国", "吉林省", "白山市", "江源区"], ["220621", "中国", "吉林省", "白山市", "抚松县"], ["220622", "中国", "吉林省", "白山市", "靖宇县"], ["220623", "中国", "吉林省", "白山市", "长白朝鲜族自治县"], ["220681", "中国", "吉林省", "白山市", "临江市"], ["220700", "中国", "吉林省", "松原市"], ["220702", "中国", "吉林省", "松原市", "宁江区"], ["220721", "中国", "吉林省", "松原市", "前郭尔罗斯蒙古族自治县"], ["220722", "中国", "吉林省", "松原市", "长岭县"], ["220723", "中国", "吉林省", "松原市", "乾安县"], ["220781", "中国", "吉林省", "松原市", "扶余市"], ["220800", "中国", "吉林省", "白城市"], ["220802", "中国", "吉林省", "白城市", "洮北区"], ["220821", "中国", "吉林省", "白城市", "镇赉县"], ["220822", "中国", "吉林省", "白城市", "通榆县"], ["220881", "中国", "吉林省", "白城市", "洮南市"], ["220882", "中国", "吉林省", "白城市", "大安市"], ["222400", "中国", "吉林省", "延边朝鲜族自治州"], ["222401", "中国", "吉林省", "延边朝鲜族自治州", "延吉市"], ["222402", "中国", "吉林省", "延边朝鲜族自治州", "图们市"], ["222403", "中国", "吉林省", "延边朝鲜族自治州", "敦化市"], ["222404", "中国", "吉林省", "延边朝鲜族自治州", "珲春市"], ["222405", "中国", "吉林省", "延边朝鲜族自治州", "龙井市"], ["222406", "中国", "吉林省", "延边朝鲜族自治州", "和龙市"], ["222424", "中国", "吉林省", "延边朝鲜族自治州", "汪清县"], ["222426", "中国", "吉林省", "延边朝鲜族自治州", "安图县"], ["230000", "中国", "黑龙江省"], ["230100", "中国", "黑龙江省", "哈尔滨市"], ["230102", "中国", "黑龙江省", "哈尔滨市", "道里区"], ["230103", "中国", "黑龙江省", "哈尔滨市", "南岗区"], ["230104", "中国", "黑龙江省", "哈尔滨市", "道外区"], ["230108", "中国", "黑龙江省", "哈尔滨市", "平房区"], ["230109", "中国", "黑龙江省", "哈尔滨市", "松北区"], ["230110", "中国", "黑龙江省", "哈尔滨市", "香坊区"], ["230111", "中国", "黑龙江省", "哈尔滨市", "呼兰区"], ["230112", "中国", "黑龙江省", "哈尔滨市", "阿城区"], ["230113", "中国", "黑龙江省", "哈尔滨市", "双城区"], ["230123", "中国", "黑龙江省", "哈尔滨市", "依兰县"], ["230124", "中国", "黑龙江省", "哈尔滨市", "方正县"], ["230125", "中国", "黑龙江省", "哈尔滨市", "宾县"], ["230126", "中国", "黑龙江省", "哈尔滨市", "巴彦县"], ["230127", "中国", "黑龙江省", "哈尔滨市", "木兰县"], ["230128", "中国", "黑龙江省", "哈尔滨市", "通河县"], ["230129", "中国", "黑龙江省", "哈尔滨市", "延寿县"], ["230183", "中国", "黑龙江省", "哈尔滨市", "尚志市"], ["230184", "中国", "黑龙江省", "哈尔滨市", "五常市"], ["230200", "中国", "黑龙江省", "齐齐哈尔市"], ["230202", "中国", "黑龙江省", "齐齐哈尔市", "龙沙区"], ["230203", "中国", "黑龙江省", "齐齐哈尔市", "建华区"], ["230204", "中国", "黑龙江省", "齐齐哈尔市", "铁锋区"], ["230205", "中国", "黑龙江省", "齐齐哈尔市", "昂昂溪区"], ["230206", "中国", "黑龙江省", "齐齐哈尔市", "富拉尔基区"], ["230207", "中国", "黑龙江省", "齐齐哈尔市", "碾子山区"], ["230208", "中国", "黑龙江省", "齐齐哈尔市", "梅里斯达斡尔族区"], ["230221", "中国", "黑龙江省", "齐齐哈尔市", "龙江县"], ["230223", "中国", "黑龙江省", "齐齐哈尔市", "依安县"], ["230224", "中国", "黑龙江省", "齐齐哈尔市", "泰来县"], ["230225", "中国", "黑龙江省", "齐齐哈尔市", "甘南县"], ["230227", "中国", "黑龙江省", "齐齐哈尔市", "富裕县"], ["230229", "中国", "黑龙江省", "齐齐哈尔市", "克山县"], ["230230", "中国", "黑龙江省", "齐齐哈尔市", "克东县"], ["230231", "中国", "黑龙江省", "齐齐哈尔市", "拜泉县"], ["230281", "中国", "黑龙江省", "齐齐哈尔市", "讷河市"], ["230300", "中国", "黑龙江省", "鸡西市"], ["230302", "中国", "黑龙江省", "鸡西市", "鸡冠区"], ["230303", "中国", "黑龙江省", "鸡西市", "恒山区"], ["230304", "中国", "黑龙江省", "鸡西市", "滴道区"], ["230305", "中国", "黑龙江省", "鸡西市", "梨树区"], ["230306", "中国", "黑龙江省", "鸡西市", "城子河区"], ["230307", "中国", "黑龙江省", "鸡西市", "麻山区"], ["230321", "中国", "黑龙江省", "鸡西市", "鸡东县"], ["230381", "中国", "黑龙江省", "鸡西市", "虎林市"], ["230382", "中国", "黑龙江省", "鸡西市", "密山市"], ["230400", "中国", "黑龙江省", "鹤岗市"], ["230402", "中国", "黑龙江省", "鹤岗市", "向阳区"], ["230403", "中国", "黑龙江省", "鹤岗市", "工农区"], ["230404", "中国", "黑龙江省", "鹤岗市", "南山区"], ["230405", "中国", "黑龙江省", "鹤岗市", "兴安区"], ["230406", "中国", "黑龙江省", "鹤岗市", "东山区"], ["230407", "中国", "黑龙江省", "鹤岗市", "兴山区"], ["230421", "中国", "黑龙江省", "鹤岗市", "萝北县"], ["230422", "中国", "黑龙江省", "鹤岗市", "绥滨县"], ["230500", "中国", "黑龙江省", "双鸭山市"], ["230502", "中国", "黑龙江省", "双鸭山市", "尖山区"], ["230503", "中国", "黑龙江省", "双鸭山市", "岭东区"], ["230505", "中国", "黑龙江省", "双鸭山市", "四方台区"], ["230506", "中国", "黑龙江省", "双鸭山市", "宝山区"], ["230521", "中国", "黑龙江省", "双鸭山市", "集贤县"], ["230522", "中国", "黑龙江省", "双鸭山市", "友谊县"], ["230523", "中国", "黑龙江省", "双鸭山市", "宝清县"], ["230524", "中国", "黑龙江省", "双鸭山市", "饶河县"], ["230600", "中国", "黑龙江省", "大庆市"], ["230602", "中国", "黑龙江省", "大庆市", "萨尔图区"], ["230603", "中国", "黑龙江省", "大庆市", "龙凤区"], ["230604", "中国", "黑龙江省", "大庆市", "让胡路区"], ["230605", "中国", "黑龙江省", "大庆市", "红岗区"], ["230606", "中国", "黑龙江省", "大庆市", "大同区"], ["230621", "中国", "黑龙江省", "大庆市", "肇州县"], ["230622", "中国", "黑龙江省", "大庆市", "肇源县"], ["230623", "中国", "黑龙江省", "大庆市", "林甸县"], ["230624", "中国", "黑龙江省", "大庆市", "杜尔伯特蒙古族自治县"], ["230700", "中国", "黑龙江省", "伊春市"], ["230702", "中国", "黑龙江省", "伊春市", "伊春区"], ["230703", "中国", "黑龙江省", "伊春市", "南岔区"], ["230704", "中国", "黑龙江省", "伊春市", "友好区"], ["230705", "中国", "黑龙江省", "伊春市", "西林区"], ["230706", "中国", "黑龙江省", "伊春市", "翠峦区"], ["230707", "中国", "黑龙江省", "伊春市", "新青区"], ["230708", "中国", "黑龙江省", "伊春市", "美溪区"], ["230709", "中国", "黑龙江省", "伊春市", "金山屯区"], ["230710", "中国", "黑龙江省", "伊春市", "五营区"], ["230711", "中国", "黑龙江省", "伊春市", "乌马河区"], ["230712", "中国", "黑龙江省", "伊春市", "汤旺河区"], ["230713", "中国", "黑龙江省", "伊春市", "带岭区"], ["230714", "中国", "黑龙江省", "伊春市", "乌伊岭区"], ["230715", "中国", "黑龙江省", "伊春市", "红星区"], ["230716", "中国", "黑龙江省", "伊春市", "上甘岭区"], ["230722", "中国", "黑龙江省", "伊春市", "嘉荫县"], ["230781", "中国", "黑龙江省", "伊春市", "铁力市"], ["230800", "中国", "黑龙江省", "佳木斯市"], ["230803", "中国", "黑龙江省", "佳木斯市", "向阳区"], ["230804", "中国", "黑龙江省", "佳木斯市", "前进区"], ["230805", "中国", "黑龙江省", "佳木斯市", "东风区"], ["230811", "中国", "黑龙江省", "佳木斯市", "郊区"], ["230822", "中国", "黑龙江省", "佳木斯市", "桦南县"], ["230826", "中国", "黑龙江省", "佳木斯市", "桦川县"], ["230828", "中国", "黑龙江省", "佳木斯市", "汤原县"], ["230881", "中国", "黑龙江省", "佳木斯市", "同江市"], ["230882", "中国", "黑龙江省", "佳木斯市", "富锦市"], ["230883", "中国", "黑龙江省", "佳木斯市", "抚远市"], ["230900", "中国", "黑龙江省", "七台河市"], ["230902", "中国", "黑龙江省", "七台河市", "新兴区"], ["230903", "中国", "黑龙江省", "七台河市", "桃山区"], ["230904", "中国", "黑龙江省", "七台河市", "茄子河区"], ["230921", "中国", "黑龙江省", "七台河市", "勃利县"], ["231000", "中国", "黑龙江省", "牡丹江市"], ["231002", "中国", "黑龙江省", "牡丹江市", "东安区"], ["231003", "中国", "黑龙江省", "牡丹江市", "阳明区"], ["231004", "中国", "黑龙江省", "牡丹江市", "爱民区"], ["231005", "中国", "黑龙江省", "牡丹江市", "西安区"], ["231025", "中国", "黑龙江省", "牡丹江市", "林口县"], ["231081", "中国", "黑龙江省", "牡丹江市", "绥芬河市"], ["231083", "中国", "黑龙江省", "牡丹江市", "海林市"], ["231084", "中国", "黑龙江省", "牡丹江市", "宁安市"], ["231085", "中国", "黑龙江省", "牡丹江市", "穆棱市"], ["231086", "中国", "黑龙江省", "牡丹江市", "东宁市"], ["231100", "中国", "黑龙江省", "黑河市"], ["231102", "中国", "黑龙江省", "黑河市", "爱辉区"], ["231121", "中国", "黑龙江省", "黑河市", "嫩江县"], ["231123", "中国", "黑龙江省", "黑河市", "逊克县"], ["231124", "中国", "黑龙江省", "黑河市", "孙吴县"], ["231181", "中国", "黑龙江省", "黑河市", "北安市"], ["231182", "中国", "黑龙江省", "黑河市", "五大连池市"], ["231200", "中国", "黑龙江省", "绥化市"], ["231202", "中国", "黑龙江省", "绥化市", "北林区"], ["231221", "中国", "黑龙江省", "绥化市", "望奎县"], ["231222", "中国", "黑龙江省", "绥化市", "兰西县"], ["231223", "中国", "黑龙江省", "绥化市", "青冈县"], ["231224", "中国", "黑龙江省", "绥化市", "庆安县"], ["231225", "中国", "黑龙江省", "绥化市", "明水县"], ["231226", "中国", "黑龙江省", "绥化市", "绥棱县"], ["231281", "中国", "黑龙江省", "绥化市", "安达市"], ["231282", "中国", "黑龙江省", "绥化市", "肇东市"], ["231283", "中国", "黑龙江省", "绥化市", "海伦市"], ["232700", "中国", "黑龙江省", "大兴安岭地区"], ["232701", "中国", "黑龙江省", "大兴安岭地区", "加格达奇区"], ["232721", "中国", "黑龙江省", "大兴安岭地区", "呼玛县"], ["232722", "中国", "黑龙江省", "大兴安岭地区", "塔河县"], ["232723", "中国", "黑龙江省", "大兴安岭地区", "漠河县"], ["310000", "中国", "", "上海市"], ["310101", "中国", "", "上海市", "黄浦区"], ["310104", "中国", "", "上海市", "徐汇区"], ["310105", "中国", "", "上海市", "长宁区"], ["310106", "中国", "", "上海市", "静安区"], ["310107", "中国", "", "上海市", "普陀区"], ["310109", "中国", "", "上海市", "虹口区"], ["310110", "中国", "", "上海市", "杨浦区"], ["310112", "中国", "", "上海市", "闵行区"], ["310113", "中国", "", "上海市", "宝山区"], ["310114", "中国", "", "上海市", "嘉定区"], ["310115", "中国", "", "上海市", "浦东新区"], ["310116", "中国", "", "上海市", "金山区"], ["310117", "中国", "", "上海市", "松江区"], ["310118", "中国", "", "上海市", "青浦区"], ["310120", "中国", "", "上海市", "奉贤区"], ["310151", "中国", "", "上海市", "崇明区"], ["320000", "中国", "江苏省"], ["320100", "中国", "江苏省", "南京市"], ["320102", "中国", "江苏省", "南京市", "玄武区"], ["320104", "中国", "江苏省", "南京市", "秦淮区"], ["320105", "中国", "江苏省", "南京市", "建邺区"], ["320106", "中国", "江苏省", "南京市", "鼓楼区"], ["320111", "中国", "江苏省", "南京市", "浦口区"], ["320113", "中国", "江苏省", "南京市", "栖霞区"], ["320114", "中国", "江苏省", "南京市", "雨花台区"], ["320115", "中国", "江苏省", "南京市", "江宁区"], ["320116", "中国", "江苏省", "南京市", "六合区"], ["320117", "中国", "江苏省", "南京市", "溧水区"], ["320118", "中国", "江苏省", "南京市", "高淳区"], ["320200", "中国", "江苏省", "无锡市"], ["320205", "中国", "江苏省", "无锡市", "锡山区"], ["320206", "中国", "江苏省", "无锡市", "惠山区"], ["320211", "中国", "江苏省", "无锡市", "滨湖区"], ["320213", "中国", "江苏省", "无锡市", "梁溪区"], ["320214", "中国", "江苏省", "无锡市", "新吴区"], ["320281", "中国", "江苏省", "无锡市", "江阴市"], ["320282", "中国", "江苏省", "无锡市", "宜兴市"], ["320300", "中国", "江苏省", "徐州市"], ["320302", "中国", "江苏省", "徐州市", "鼓楼区"], ["320303", "中国", "江苏省", "徐州市", "云龙区"], ["320305", "中国", "江苏省", "徐州市", "贾汪区"], ["320311", "中国", "江苏省", "徐州市", "泉山区"], ["320312", "中国", "江苏省", "徐州市", "铜山区"], ["320321", "中国", "江苏省", "徐州市", "丰县"], ["320322", "中国", "江苏省", "徐州市", "沛县"], ["320324", "中国", "江苏省", "徐州市", "睢宁县"], ["320381", "中国", "江苏省", "徐州市", "新沂市"], ["320382", "中国", "江苏省", "徐州市", "邳州市"], ["320400", "中国", "江苏省", "常州市"], ["320402", "中国", "江苏省", "常州市", "天宁区"], ["320404", "中国", "江苏省", "常州市", "钟楼区"], ["320411", "中国", "江苏省", "常州市", "新北区"], ["320412", "中国", "江苏省", "常州市", "武进区"], ["320413", "中国", "江苏省", "常州市", "金坛区"], ["320481", "中国", "江苏省", "常州市", "溧阳市"], ["320500", "中国", "江苏省", "苏州市"], ["320505", "中国", "江苏省", "苏州市", "虎丘区"], ["320506", "中国", "江苏省", "苏州市", "吴中区"], ["320507", "中国", "江苏省", "苏州市", "相城区"], ["320508", "中国", "江苏省", "苏州市", "姑苏区"], ["320509", "中国", "江苏省", "苏州市", "吴江区"], ["320581", "中国", "江苏省", "苏州市", "常熟市"], ["320582", "中国", "江苏省", "苏州市", "张家港市"], ["320583", "中国", "江苏省", "苏州市", "昆山市"], ["320585", "中国", "江苏省", "苏州市", "太仓市"], ["320600", "中国", "江苏省", "南通市"], ["320602", "中国", "江苏省", "南通市", "崇川区"], ["320611", "中国", "江苏省", "南通市", "港闸区"], ["320612", "中国", "江苏省", "南通市", "通州区"], ["320621", "中国", "江苏省", "南通市", "海安县"], ["320623", "中国", "江苏省", "南通市", "如东县"], ["320681", "中国", "江苏省", "南通市", "启东市"], ["320682", "中国", "江苏省", "南通市", "如皋市"], ["320684", "中国", "江苏省", "南通市", "海门市"], ["320700", "中国", "江苏省", "连云港市"], ["320703", "中国", "江苏省", "连云港市", "连云区"], ["320706", "中国", "江苏省", "连云港市", "海州区"], ["320707", "中国", "江苏省", "连云港市", "赣榆区"], ["320722", "中国", "江苏省", "连云港市", "东海县"], ["320723", "中国", "江苏省", "连云港市", "灌云县"], ["320724", "中国", "江苏省", "连云港市", "灌南县"], ["320800", "中国", "江苏省", "淮安市"], ["320803", "中国", "江苏省", "淮安市", "淮安区"], ["320804", "中国", "江苏省", "淮安市", "淮阴区"], ["320812", "中国", "江苏省", "淮安市", "清江浦区"], ["320813", "中国", "江苏省", "淮安市", "洪泽区"], ["320826", "中国", "江苏省", "淮安市", "涟水县"], ["320830", "中国", "江苏省", "淮安市", "盱眙县"], ["320831", "中国", "江苏省", "淮安市", "金湖县"], ["320900", "中国", "江苏省", "盐城市"], ["320902", "中国", "江苏省", "盐城市", "亭湖区"], ["320903", "中国", "江苏省", "盐城市", "盐都区"], ["320904", "中国", "江苏省", "盐城市", "大丰区"], ["320921", "中国", "江苏省", "盐城市", "响水县"], ["320922", "中国", "江苏省", "盐城市", "滨海县"], ["320923", "中国", "江苏省", "盐城市", "阜宁县"], ["320924", "中国", "江苏省", "盐城市", "射阳县"], ["320925", "中国", "江苏省", "盐城市", "建湖县"], ["320981", "中国", "江苏省", "盐城市", "东台市"], ["321000", "中国", "江苏省", "扬州市"], ["321002", "中国", "江苏省", "扬州市", "广陵区"], ["321003", "中国", "江苏省", "扬州市", "邗江区"], ["321012", "中国", "江苏省", "扬州市", "江都区"], ["321023", "中国", "江苏省", "扬州市", "宝应县"], ["321081", "中国", "江苏省", "扬州市", "仪征市"], ["321084", "中国", "江苏省", "扬州市", "高邮市"], ["321100", "中国", "江苏省", "镇江市"], ["321102", "中国", "江苏省", "镇江市", "京口区"], ["321111", "中国", "江苏省", "镇江市", "润州区"], ["321112", "中国", "江苏省", "镇江市", "丹徒区"], ["321181", "中国", "江苏省", "镇江市", "丹阳市"], ["321182", "中国", "江苏省", "镇江市", "扬中市"], ["321183", "中国", "江苏省", "镇江市", "句容市"], ["321200", "中国", "江苏省", "泰州市"], ["321202", "中国", "江苏省", "泰州市", "海陵区"], ["321203", "中国", "江苏省", "泰州市", "高港区"], ["321204", "中国", "江苏省", "泰州市", "姜堰区"], ["321281", "中国", "江苏省", "泰州市", "兴化市"], ["321282", "中国", "江苏省", "泰州市", "靖江市"], ["321283", "中国", "江苏省", "泰州市", "泰兴市"], ["321300", "中国", "江苏省", "宿迁市"], ["321302", "中国", "江苏省", "宿迁市", "宿城区"], ["321311", "中国", "江苏省", "宿迁市", "宿豫区"], ["321322", "中国", "江苏省", "宿迁市", "沭阳县"], ["321323", "中国", "江苏省", "宿迁市", "泗阳县"], ["321324", "中国", "江苏省", "宿迁市", "泗洪县"], ["330000", "中国", "浙江省"], ["330100", "中国", "浙江省", "杭州市"], ["330102", "中国", "浙江省", "杭州市", "上城区"], ["330103", "中国", "浙江省", "杭州市", "下城区"], ["330104", "中国", "浙江省", "杭州市", "江干区"], ["330105", "中国", "浙江省", "杭州市", "拱墅区"], ["330106", "中国", "浙江省", "杭州市", "西湖区"], ["330108", "中国", "浙江省", "杭州市", "滨江区"], ["330109", "中国", "浙江省", "杭州市", "萧山区"], ["330110", "中国", "浙江省", "杭州市", "余杭区"], ["330111", "中国", "浙江省", "杭州市", "富阳区"], ["330122", "中国", "浙江省", "杭州市", "桐庐县"], ["330127", "中国", "浙江省", "杭州市", "淳安县"], ["330182", "中国", "浙江省", "杭州市", "建德市"], ["330185", "中国", "浙江省", "杭州市", "临安市"], ["330200", "中国", "浙江省", "宁波市"], ["330203", "中国", "浙江省", "宁波市", "海曙区"], ["330205", "中国", "浙江省", "宁波市", "江北区"], ["330206", "中国", "浙江省", "宁波市", "北仑区"], ["330211", "中国", "浙江省", "宁波市", "镇海区"], ["330212", "中国", "浙江省", "宁波市", "鄞州区"], ["330213", "中国", "浙江省", "宁波市", "奉化区"], ["330225", "中国", "浙江省", "宁波市", "象山县"], ["330226", "中国", "浙江省", "宁波市", "宁海县"], ["330281", "中国", "浙江省", "宁波市", "余姚市"], ["330282", "中国", "浙江省", "宁波市", "慈溪市"], ["330300", "中国", "浙江省", "温州市"], ["330302", "中国", "浙江省", "温州市", "鹿城区"], ["330303", "中国", "浙江省", "温州市", "龙湾区"], ["330304", "中国", "浙江省", "温州市", "瓯海区"], ["330305", "中国", "浙江省", "温州市", "洞头区"], ["330324", "中国", "浙江省", "温州市", "永嘉县"], ["330326", "中国", "浙江省", "温州市", "平阳县"], ["330327", "中国", "浙江省", "温州市", "苍南县"], ["330328", "中国", "浙江省", "温州市", "文成县"], ["330329", "中国", "浙江省", "温州市", "泰顺县"], ["330381", "中国", "浙江省", "温州市", "瑞安市"], ["330382", "中国", "浙江省", "温州市", "乐清市"], ["330400", "中国", "浙江省", "嘉兴市"], ["330402", "中国", "浙江省", "嘉兴市", "南湖区"], ["330411", "中国", "浙江省", "嘉兴市", "秀洲区"], ["330421", "中国", "浙江省", "嘉兴市", "嘉善县"], ["330424", "中国", "浙江省", "嘉兴市", "海盐县"], ["330481", "中国", "浙江省", "嘉兴市", "海宁市"], ["330482", "中国", "浙江省", "嘉兴市", "平湖市"], ["330483", "中国", "浙江省", "嘉兴市", "桐乡市"], ["330500", "中国", "浙江省", "湖州市"], ["330502", "中国", "浙江省", "湖州市", "吴兴区"], ["330503", "中国", "浙江省", "湖州市", "南浔区"], ["330521", "中国", "浙江省", "湖州市", "德清县"], ["330522", "中国", "浙江省", "湖州市", "长兴县"], ["330523", "中国", "浙江省", "湖州市", "安吉县"], ["330600", "中国", "浙江省", "绍兴市"], ["330602", "中国", "浙江省", "绍兴市", "越城区"], ["330603", "中国", "浙江省", "绍兴市", "柯桥区"], ["330604", "中国", "浙江省", "绍兴市", "上虞区"], ["330624", "中国", "浙江省", "绍兴市", "新昌县"], ["330681", "中国", "浙江省", "绍兴市", "诸暨市"], ["330683", "中国", "浙江省", "绍兴市", "嵊州市"], ["330700", "中国", "浙江省", "金华市"], ["330702", "中国", "浙江省", "金华市", "婺城区"], ["330703", "中国", "浙江省", "金华市", "金东区"], ["330723", "中国", "浙江省", "金华市", "武义县"], ["330726", "中国", "浙江省", "金华市", "浦江县"], ["330727", "中国", "浙江省", "金华市", "磐安县"], ["330781", "中国", "浙江省", "金华市", "兰溪市"], ["330782", "中国", "浙江省", "金华市", "义乌市"], ["330783", "中国", "浙江省", "金华市", "东阳市"], ["330784", "中国", "浙江省", "金华市", "永康市"], ["330800", "中国", "浙江省", "衢州市"], ["330802", "中国", "浙江省", "衢州市", "柯城区"], ["330803", "中国", "浙江省", "衢州市", "衢江区"], ["330822", "中国", "浙江省", "衢州市", "常山县"], ["330824", "中国", "浙江省", "衢州市", "开化县"], ["330825", "中国", "浙江省", "衢州市", "龙游县"], ["330881", "中国", "浙江省", "衢州市", "江山市"], ["330900", "中国", "浙江省", "舟山市"], ["330902", "中国", "浙江省", "舟山市", "定海区"], ["330903", "中国", "浙江省", "舟山市", "普陀区"], ["330921", "中国", "浙江省", "舟山市", "岱山县"], ["330922", "中国", "浙江省", "舟山市", "嵊泗县"], ["331000", "中国", "浙江省", "台州市"], ["331002", "中国", "浙江省", "台州市", "椒江区"], ["331003", "中国", "浙江省", "台州市", "黄岩区"], ["331004", "中国", "浙江省", "台州市", "路桥区"], ["331022", "中国", "浙江省", "台州市", "三门县"], ["331023", "中国", "浙江省", "台州市", "天台县"], ["331024", "中国", "浙江省", "台州市", "仙居县"], ["331081", "中国", "浙江省", "台州市", "温岭市"], ["331082", "中国", "浙江省", "台州市", "临海市"], ["331083", "中国", "浙江省", "台州市", "玉环市"], ["331100", "中国", "浙江省", "丽水市"], ["331102", "中国", "浙江省", "丽水市", "莲都区"], ["331121", "中国", "浙江省", "丽水市", "青田县"], ["331122", "中国", "浙江省", "丽水市", "缙云县"], ["331123", "中国", "浙江省", "丽水市", "遂昌县"], ["331124", "中国", "浙江省", "丽水市", "松阳县"], ["331125", "中国", "浙江省", "丽水市", "云和县"], ["331126", "中国", "浙江省", "丽水市", "庆元县"], ["331127", "中国", "浙江省", "丽水市", "景宁畲族自治县"], ["331181", "中国", "浙江省", "丽水市", "龙泉市"], ["340000", "中国", "安徽省"], ["340100", "中国", "安徽省", "合肥市"], ["340102", "中国", "安徽省", "合肥市", "瑶海区"], ["340103", "中国", "安徽省", "合肥市", "庐阳区"], ["340104", "中国", "安徽省", "合肥市", "蜀山区"], ["340111", "中国", "安徽省", "合肥市", "包河区"], ["340121", "中国", "安徽省", "合肥市", "长丰县"], ["340122", "中国", "安徽省", "合肥市", "肥东县"], ["340123", "中国", "安徽省", "合肥市", "肥西县"], ["340124", "中国", "安徽省", "合肥市", "庐江县"], ["340181", "中国", "安徽省", "合肥市", "巢湖市"], ["340200", "中国", "安徽省", "芜湖市"], ["340202", "中国", "安徽省", "芜湖市", "镜湖区"], ["340203", "中国", "安徽省", "芜湖市", "弋江区"], ["340207", "中国", "安徽省", "芜湖市", "鸠江区"], ["340208", "中国", "安徽省", "芜湖市", "三山区"], ["340221", "中国", "安徽省", "芜湖市", "芜湖县"], ["340222", "中国", "安徽省", "芜湖市", "繁昌县"], ["340223", "中国", "安徽省", "芜湖市", "南陵县"], ["340225", "中国", "安徽省", "芜湖市", "无为县"], ["340300", "中国", "安徽省", "蚌埠市"], ["340302", "中国", "安徽省", "蚌埠市", "龙子湖区"], ["340303", "中国", "安徽省", "蚌埠市", "蚌山区"], ["340304", "中国", "安徽省", "蚌埠市", "禹会区"], ["340311", "中国", "安徽省", "蚌埠市", "淮上区"], ["340321", "中国", "安徽省", "蚌埠市", "怀远县"], ["340322", "中国", "安徽省", "蚌埠市", "五河县"], ["340323", "中国", "安徽省", "蚌埠市", "固镇县"], ["340400", "中国", "安徽省", "淮南市"], ["340402", "中国", "安徽省", "淮南市", "大通区"], ["340403", "中国", "安徽省", "淮南市", "田家庵区"], ["340404", "中国", "安徽省", "淮南市", "谢家集区"], ["340405", "中国", "安徽省", "淮南市", "八公山区"], ["340406", "中国", "安徽省", "淮南市", "潘集区"], ["340421", "中国", "安徽省", "淮南市", "凤台县"], ["340422", "中国", "安徽省", "淮南市", "寿县"], ["340500", "中国", "安徽省", "马鞍山市"], ["340503", "中国", "安徽省", "马鞍山市", "花山区"], ["340504", "中国", "安徽省", "马鞍山市", "雨山区"], ["340506", "中国", "安徽省", "马鞍山市", "博望区"], ["340521", "中国", "安徽省", "马鞍山市", "当涂县"], ["340522", "中国", "安徽省", "马鞍山市", "含山县"], ["340523", "中国", "安徽省", "马鞍山市", "和县"], ["340600", "中国", "安徽省", "淮北市"], ["340602", "中国", "安徽省", "淮北市", "杜集区"], ["340603", "中国", "安徽省", "淮北市", "相山区"], ["340604", "中国", "安徽省", "淮北市", "烈山区"], ["340621", "中国", "安徽省", "淮北市", "濉溪县"], ["340700", "中国", "安徽省", "铜陵市"], ["340705", "中国", "安徽省", "铜陵市", "铜官区"], ["340706", "中国", "安徽省", "铜陵市", "义安区"], ["340711", "中国", "安徽省", "铜陵市", "郊区"], ["340722", "中国", "安徽省", "铜陵市", "枞阳县"], ["340800", "中国", "安徽省", "安庆市"], ["340802", "中国", "安徽省", "安庆市", "迎江区"], ["340803", "中国", "安徽省", "安庆市", "大观区"], ["340811", "中国", "安徽省", "安庆市", "宜秀区"], ["340822", "中国", "安徽省", "安庆市", "怀宁县"], ["340824", "中国", "安徽省", "安庆市", "潜山县"], ["340825", "中国", "安徽省", "安庆市", "太湖县"], ["340826", "中国", "安徽省", "安庆市", "宿松县"], ["340827", "中国", "安徽省", "安庆市", "望江县"], ["340828", "中国", "安徽省", "安庆市", "岳西县"], ["340881", "中国", "安徽省", "安庆市", "桐城市"], ["341000", "中国", "安徽省", "黄山市"], ["341002", "中国", "安徽省", "黄山市", "屯溪区"], ["341003", "中国", "安徽省", "黄山市", "黄山区"], ["341004", "中国", "安徽省", "黄山市", "徽州区"], ["341021", "中国", "安徽省", "黄山市", "歙县"], ["341022", "中国", "安徽省", "黄山市", "休宁县"], ["341023", "中国", "安徽省", "黄山市", "黟县"], ["341024", "中国", "安徽省", "黄山市", "祁门县"], ["341100", "中国", "安徽省", "滁州市"], ["341102", "中国", "安徽省", "滁州市", "琅琊区"], ["341103", "中国", "安徽省", "滁州市", "南谯区"], ["341122", "中国", "安徽省", "滁州市", "来安县"], ["341124", "中国", "安徽省", "滁州市", "全椒县"], ["341125", "中国", "安徽省", "滁州市", "定远县"], ["341126", "中国", "安徽省", "滁州市", "凤阳县"], ["341181", "中国", "安徽省", "滁州市", "天长市"], ["341182", "中国", "安徽省", "滁州市", "明光市"], ["341200", "中国", "安徽省", "阜阳市"], ["341202", "中国", "安徽省", "阜阳市", "颍州区"], ["341203", "中国", "安徽省", "阜阳市", "颍东区"], ["341204", "中国", "安徽省", "阜阳市", "颍泉区"], ["341221", "中国", "安徽省", "阜阳市", "临泉县"], ["341222", "中国", "安徽省", "阜阳市", "太和县"], ["341225", "中国", "安徽省", "阜阳市", "阜南县"], ["341226", "中国", "安徽省", "阜阳市", "颍上县"], ["341282", "中国", "安徽省", "阜阳市", "界首市"], ["341300", "中国", "安徽省", "宿州市"], ["341302", "中国", "安徽省", "宿州市", "埇桥区"], ["341321", "中国", "安徽省", "宿州市", "砀山县"], ["341322", "中国", "安徽省", "宿州市", "萧县"], ["341323", "中国", "安徽省", "宿州市", "灵璧县"], ["341324", "中国", "安徽省", "宿州市", "泗县"], ["341500", "中国", "安徽省", "六安市"], ["341502", "中国", "安徽省", "六安市", "金安区"], ["341503", "中国", "安徽省", "六安市", "裕安区"], ["341504", "中国", "安徽省", "六安市", "叶集区"], ["341522", "中国", "安徽省", "六安市", "霍邱县"], ["341523", "中国", "安徽省", "六安市", "舒城县"], ["341524", "中国", "安徽省", "六安市", "金寨县"], ["341525", "中国", "安徽省", "六安市", "霍山县"], ["341600", "中国", "安徽省", "亳州市"], ["341602", "中国", "安徽省", "亳州市", "谯城区"], ["341621", "中国", "安徽省", "亳州市", "涡阳县"], ["341622", "中国", "安徽省", "亳州市", "蒙城县"], ["341623", "中国", "安徽省", "亳州市", "利辛县"], ["341700", "中国", "安徽省", "池州市"], ["341702", "中国", "安徽省", "池州市", "贵池区"], ["341721", "中国", "安徽省", "池州市", "东至县"], ["341722", "中国", "安徽省", "池州市", "石台县"], ["341723", "中国", "安徽省", "池州市", "青阳县"], ["341800", "中国", "安徽省", "宣城市"], ["341802", "中国", "安徽省", "宣城市", "宣州区"], ["341821", "中国", "安徽省", "宣城市", "郎溪县"], ["341822", "中国", "安徽省", "宣城市", "广德县"], ["341823", "中国", "安徽省", "宣城市", "泾县"], ["341824", "中国", "安徽省", "宣城市", "绩溪县"], ["341825", "中国", "安徽省", "宣城市", "旌德县"], ["341881", "中国", "安徽省", "宣城市", "宁国市"], ["350000", "中国", "福建省"], ["350100", "中国", "福建省", "福州市"], ["350102", "中国", "福建省", "福州市", "鼓楼区"], ["350103", "中国", "福建省", "福州市", "台江区"], ["350104", "中国", "福建省", "福州市", "仓山区"], ["350105", "中国", "福建省", "福州市", "马尾区"], ["350111", "中国", "福建省", "福州市", "晋安区"], ["350121", "中国", "福建省", "福州市", "闽侯县"], ["350122", "中国", "福建省", "福州市", "连江县"], ["350123", "中国", "福建省", "福州市", "罗源县"], ["350124", "中国", "福建省", "福州市", "闽清县"], ["350125", "中国", "福建省", "福州市", "永泰县"], ["350128", "中国", "福建省", "福州市", "平潭县"], ["350181", "中国", "福建省", "福州市", "福清市"], ["350182", "中国", "福建省", "福州市", "长乐市"], ["350200", "中国", "福建省", "厦门市"], ["350203", "中国", "福建省", "厦门市", "思明区"], ["350205", "中国", "福建省", "厦门市", "海沧区"], ["350206", "中国", "福建省", "厦门市", "湖里区"], ["350211", "中国", "福建省", "厦门市", "集美区"], ["350212", "中国", "福建省", "厦门市", "同安区"], ["350213", "中国", "福建省", "厦门市", "翔安区"], ["350300", "中国", "福建省", "莆田市"], ["350302", "中国", "福建省", "莆田市", "城厢区"], ["350303", "中国", "福建省", "莆田市", "涵江区"], ["350304", "中国", "福建省", "莆田市", "荔城区"], ["350305", "中国", "福建省", "莆田市", "秀屿区"], ["350322", "中国", "福建省", "莆田市", "仙游县"], ["350400", "中国", "福建省", "三明市"], ["350402", "中国", "福建省", "三明市", "梅列区"], ["350403", "中国", "福建省", "三明市", "三元区"], ["350421", "中国", "福建省", "三明市", "明溪县"], ["350423", "中国", "福建省", "三明市", "清流县"], ["350424", "中国", "福建省", "三明市", "宁化县"], ["350425", "中国", "福建省", "三明市", "大田县"], ["350426", "中国", "福建省", "三明市", "尤溪县"], ["350427", "中国", "福建省", "三明市", "沙县"], ["350428", "中国", "福建省", "三明市", "将乐县"], ["350429", "中国", "福建省", "三明市", "泰宁县"], ["350430", "中国", "福建省", "三明市", "建宁县"], ["350481", "中国", "福建省", "三明市", "永安市"], ["350500", "中国", "福建省", "泉州市"], ["350502", "中国", "福建省", "泉州市", "鲤城区"], ["350503", "中国", "福建省", "泉州市", "丰泽区"], ["350504", "中国", "福建省", "泉州市", "洛江区"], ["350505", "中国", "福建省", "泉州市", "泉港区"], ["350521", "中国", "福建省", "泉州市", "惠安县"], ["350524", "中国", "福建省", "泉州市", "安溪县"], ["350525", "中国", "福建省", "泉州市", "永春县"], ["350526", "中国", "福建省", "泉州市", "德化县"], ["350527", "中国", "福建省", "泉州市", "金门县"], ["350581", "中国", "福建省", "泉州市", "石狮市"], ["350582", "中国", "福建省", "泉州市", "晋江市"], ["350583", "中国", "福建省", "泉州市", "南安市"], ["350600", "中国", "福建省", "漳州市"], ["350602", "中国", "福建省", "漳州市", "芗城区"], ["350603", "中国", "福建省", "漳州市", "龙文区"], ["350622", "中国", "福建省", "漳州市", "云霄县"], ["350623", "中国", "福建省", "漳州市", "漳浦县"], ["350624", "中国", "福建省", "漳州市", "诏安县"], ["350625", "中国", "福建省", "漳州市", "长泰县"], ["350626", "中国", "福建省", "漳州市", "东山县"], ["350627", "中国", "福建省", "漳州市", "南靖县"], ["350628", "中国", "福建省", "漳州市", "平和县"], ["350629", "中国", "福建省", "漳州市", "华安县"], ["350681", "中国", "福建省", "漳州市", "龙海市"], ["350700", "中国", "福建省", "南平市"], ["350702", "中国", "福建省", "南平市", "延平区"], ["350703", "中国", "福建省", "南平市", "建阳区"], ["350721", "中国", "福建省", "南平市", "顺昌县"], ["350722", "中国", "福建省", "南平市", "浦城县"], ["350723", "中国", "福建省", "南平市", "光泽县"], ["350724", "中国", "福建省", "南平市", "松溪县"], ["350725", "中国", "福建省", "南平市", "政和县"], ["350781", "中国", "福建省", "南平市", "邵武市"], ["350782", "中国", "福建省", "南平市", "武夷山市"], ["350783", "中国", "福建省", "南平市", "建瓯市"], ["350800", "中国", "福建省", "龙岩市"], ["350802", "中国", "福建省", "龙岩市", "新罗区"], ["350803", "中国", "福建省", "龙岩市", "永定区"], ["350821", "中国", "福建省", "龙岩市", "长汀县"], ["350823", "中国", "福建省", "龙岩市", "上杭县"], ["350824", "中国", "福建省", "龙岩市", "武平县"], ["350825", "中国", "福建省", "龙岩市", "连城县"], ["350881", "中国", "福建省", "龙岩市", "漳平市"], ["350900", "中国", "福建省", "宁德市"], ["350902", "中国", "福建省", "宁德市", "蕉城区"], ["350921", "中国", "福建省", "宁德市", "霞浦县"], ["350922", "中国", "福建省", "宁德市", "古田县"], ["350923", "中国", "福建省", "宁德市", "屏南县"], ["350924", "中国", "福建省", "宁德市", "寿宁县"], ["350925", "中国", "福建省", "宁德市", "周宁县"], ["350926", "中国", "福建省", "宁德市", "柘荣县"], ["350981", "中国", "福建省", "宁德市", "福安市"], ["350982", "中国", "福建省", "宁德市", "福鼎市"], ["360000", "中国", "江西省"], ["360100", "中国", "江西省", "南昌市"], ["360102", "中国", "江西省", "南昌市", "东湖区"], ["360103", "中国", "江西省", "南昌市", "西湖区"], ["360104", "中国", "江西省", "南昌市", "青云谱区"], ["360105", "中国", "江西省", "南昌市", "湾里区"], ["360111", "中国", "江西省", "南昌市", "青山湖区"], ["360112", "中国", "江西省", "南昌市", "新建区"], ["360121", "中国", "江西省", "南昌市", "南昌县"], ["360123", "中国", "江西省", "南昌市", "安义县"], ["360124", "中国", "江西省", "南昌市", "进贤县"], ["360200", "中国", "江西省", "景德镇市"], ["360202", "中国", "江西省", "景德镇市", "昌江区"], ["360203", "中国", "江西省", "景德镇市", "珠山区"], ["360222", "中国", "江西省", "景德镇市", "浮梁县"], ["360281", "中国", "江西省", "景德镇市", "乐平市"], ["360300", "中国", "江西省", "萍乡市"], ["360302", "中国", "江西省", "萍乡市", "安源区"], ["360313", "中国", "江西省", "萍乡市", "湘东区"], ["360321", "中国", "江西省", "萍乡市", "莲花县"], ["360322", "中国", "江西省", "萍乡市", "上栗县"], ["360323", "中国", "江西省", "萍乡市", "芦溪县"], ["360400", "中国", "江西省", "九江市"], ["360402", "中国", "江西省", "九江市", "濂溪区"], ["360403", "中国", "江西省", "九江市", "浔阳区"], ["360421", "中国", "江西省", "九江市", "九江县"], ["360423", "中国", "江西省", "九江市", "武宁县"], ["360424", "中国", "江西省", "九江市", "修水县"], ["360425", "中国", "江西省", "九江市", "永修县"], ["360426", "中国", "江西省", "九江市", "德安县"], ["360428", "中国", "江西省", "九江市", "都昌县"], ["360429", "中国", "江西省", "九江市", "湖口县"], ["360430", "中国", "江西省", "九江市", "彭泽县"], ["360481", "中国", "江西省", "九江市", "瑞昌市"], ["360482", "中国", "江西省", "九江市", "共青城市"], ["360483", "中国", "江西省", "九江市", "庐山市"], ["360500", "中国", "江西省", "新余市"], ["360502", "中国", "江西省", "新余市", "渝水区"], ["360521", "中国", "江西省", "新余市", "分宜县"], ["360600", "中国", "江西省", "鹰潭市"], ["360602", "中国", "江西省", "鹰潭市", "月湖区"], ["360622", "中国", "江西省", "鹰潭市", "余江县"], ["360681", "中国", "江西省", "鹰潭市", "贵溪市"], ["360700", "中国", "江西省", "赣州市"], ["360702", "中国", "江西省", "赣州市", "章贡区"], ["360703", "中国", "江西省", "赣州市", "南康区"], ["360704", "中国", "江西省", "赣州市", "赣县区"], ["360722", "中国", "江西省", "赣州市", "信丰县"], ["360723", "中国", "江西省", "赣州市", "大余县"], ["360724", "中国", "江西省", "赣州市", "上犹县"], ["360725", "中国", "江西省", "赣州市", "崇义县"], ["360726", "中国", "江西省", "赣州市", "安远县"], ["360727", "中国", "江西省", "赣州市", "龙南县"], ["360728", "中国", "江西省", "赣州市", "定南县"], ["360729", "中国", "江西省", "赣州市", "全南县"], ["360730", "中国", "江西省", "赣州市", "宁都县"], ["360731", "中国", "江西省", "赣州市", "于都县"], ["360732", "中国", "江西省", "赣州市", "兴国县"], ["360733", "中国", "江西省", "赣州市", "会昌县"], ["360734", "中国", "江西省", "赣州市", "寻乌县"], ["360735", "中国", "江西省", "赣州市", "石城县"], ["360781", "中国", "江西省", "赣州市", "瑞金市"], ["360800", "中国", "江西省", "吉安市"], ["360802", "中国", "江西省", "吉安市", "吉州区"], ["360803", "中国", "江西省", "吉安市", "青原区"], ["360821", "中国", "江西省", "吉安市", "吉安县"], ["360822", "中国", "江西省", "吉安市", "吉水县"], ["360823", "中国", "江西省", "吉安市", "峡江县"], ["360824", "中国", "江西省", "吉安市", "新干县"], ["360825", "中国", "江西省", "吉安市", "永丰县"], ["360826", "中国", "江西省", "吉安市", "泰和县"], ["360827", "中国", "江西省", "吉安市", "遂川县"], ["360828", "中国", "江西省", "吉安市", "万安县"], ["360829", "中国", "江西省", "吉安市", "安福县"], ["360830", "中国", "江西省", "吉安市", "永新县"], ["360881", "中国", "江西省", "吉安市", "井冈山市"], ["360900", "中国", "江西省", "宜春市"], ["360902", "中国", "江西省", "宜春市", "袁州区"], ["360921", "中国", "江西省", "宜春市", "奉新县"], ["360922", "中国", "江西省", "宜春市", "万载县"], ["360923", "中国", "江西省", "宜春市", "上高县"], ["360924", "中国", "江西省", "宜春市", "宜丰县"], ["360925", "中国", "江西省", "宜春市", "靖安县"], ["360926", "中国", "江西省", "宜春市", "铜鼓县"], ["360981", "中国", "江西省", "宜春市", "丰城市"], ["360982", "中国", "江西省", "宜春市", "樟树市"], ["360983", "中国", "江西省", "宜春市", "高安市"], ["361000", "中国", "江西省", "抚州市"], ["361002", "中国", "江西省", "抚州市", "临川区"], ["361003", "中国", "江西省", "抚州市", "东乡区"], ["361021", "中国", "江西省", "抚州市", "南城县"], ["361022", "中国", "江西省", "抚州市", "黎川县"], ["361023", "中国", "江西省", "抚州市", "南丰县"], ["361024", "中国", "江西省", "抚州市", "崇仁县"], ["361025", "中国", "江西省", "抚州市", "乐安县"], ["361026", "中国", "江西省", "抚州市", "宜黄县"], ["361027", "中国", "江西省", "抚州市", "金溪县"], ["361028", "中国", "江西省", "抚州市", "资溪县"], ["361030", "中国", "江西省", "抚州市", "广昌县"], ["361100", "中国", "江西省", "上饶市"], ["361102", "中国", "江西省", "上饶市", "信州区"], ["361103", "中国", "江西省", "上饶市", "广丰区"], ["361121", "中国", "江西省", "上饶市", "上饶县"], ["361123", "中国", "江西省", "上饶市", "玉山县"], ["361124", "中国", "江西省", "上饶市", "铅山县"], ["361125", "中国", "江西省", "上饶市", "横峰县"], ["361126", "中国", "江西省", "上饶市", "弋阳县"], ["361127", "中国", "江西省", "上饶市", "余干县"], ["361128", "中国", "江西省", "上饶市", "鄱阳县"], ["361129", "中国", "江西省", "上饶市", "万年县"], ["361130", "中国", "江西省", "上饶市", "婺源县"], ["361181", "中国", "江西省", "上饶市", "德兴市"], ["370000", "中国", "山东省"], ["370100", "中国", "山东省", "济南市"], ["370102", "中国", "山东省", "济南市", "历下区"], ["370103", "中国", "山东省", "济南市", "市中区"], ["370104", "中国", "山东省", "济南市", "槐荫区"], ["370105", "中国", "山东省", "济南市", "天桥区"], ["370112", "中国", "山东省", "济南市", "历城区"], ["370113", "中国", "山东省", "济南市", "长清区"], ["370114", "中国", "山东省", "济南市", "章丘区"], ["370124", "中国", "山东省", "济南市", "平阴县"], ["370125", "中国", "山东省", "济南市", "济阳县"], ["370126", "中国", "山东省", "济南市", "商河县"], ["370200", "中国", "山东省", "青岛市"], ["370202", "中国", "山东省", "青岛市", "市南区"], ["370203", "中国", "山东省", "青岛市", "市北区"], ["370211", "中国", "山东省", "青岛市", "黄岛区"], ["370212", "中国", "山东省", "青岛市", "崂山区"], ["370213", "中国", "山东省", "青岛市", "李沧区"], ["370214", "中国", "山东省", "青岛市", "城阳区"], ["370281", "中国", "山东省", "青岛市", "胶州市"], ["370282", "中国", "山东省", "青岛市", "即墨市"], ["370283", "中国", "山东省", "青岛市", "平度市"], ["370285", "中国", "山东省", "青岛市", "莱西市"], ["370300", "中国", "山东省", "淄博市"], ["370302", "中国", "山东省", "淄博市", "淄川区"], ["370303", "中国", "山东省", "淄博市", "张店区"], ["370304", "中国", "山东省", "淄博市", "博山区"], ["370305", "中国", "山东省", "淄博市", "临淄区"], ["370306", "中国", "山东省", "淄博市", "周村区"], ["370321", "中国", "山东省", "淄博市", "桓台县"], ["370322", "中国", "山东省", "淄博市", "高青县"], ["370323", "中国", "山东省", "淄博市", "沂源县"], ["370400", "中国", "山东省", "枣庄市"], ["370402", "中国", "山东省", "枣庄市", "市中区"], ["370403", "中国", "山东省", "枣庄市", "薛城区"], ["370404", "中国", "山东省", "枣庄市", "峄城区"], ["370405", "中国", "山东省", "枣庄市", "台儿庄区"], ["370406", "中国", "山东省", "枣庄市", "山亭区"], ["370481", "中国", "山东省", "枣庄市", "滕州市"], ["370500", "中国", "山东省", "东营市"], ["370502", "中国", "山东省", "东营市", "东营区"], ["370503", "中国", "山东省", "东营市", "河口区"], ["370505", "中国", "山东省", "东营市", "垦利区"], ["370522", "中国", "山东省", "东营市", "利津县"], ["370523", "中国", "山东省", "东营市", "广饶县"], ["370600", "中国", "山东省", "烟台市"], ["370602", "中国", "山东省", "烟台市", "芝罘区"], ["370611", "中国", "山东省", "烟台市", "福山区"], ["370612", "中国", "山东省", "烟台市", "牟平区"], ["370613", "中国", "山东省", "烟台市", "莱山区"], ["370634", "中国", "山东省", "烟台市", "长岛县"], ["370681", "中国", "山东省", "烟台市", "龙口市"], ["370682", "中国", "山东省", "烟台市", "莱阳市"], ["370683", "中国", "山东省", "烟台市", "莱州市"], ["370684", "中国", "山东省", "烟台市", "蓬莱市"], ["370685", "中国", "山东省", "烟台市", "招远市"], ["370686", "中国", "山东省", "烟台市", "栖霞市"], ["370687", "中国", "山东省", "烟台市", "海阳市"], ["370700", "中国", "山东省", "潍坊市"], ["370702", "中国", "山东省", "潍坊市", "潍城区"], ["370703", "中国", "山东省", "潍坊市", "寒亭区"], ["370704", "中国", "山东省", "潍坊市", "坊子区"], ["370705", "中国", "山东省", "潍坊市", "奎文区"], ["370724", "中国", "山东省", "潍坊市", "临朐县"], ["370725", "中国", "山东省", "潍坊市", "昌乐县"], ["370781", "中国", "山东省", "潍坊市", "青州市"], ["370782", "中国", "山东省", "潍坊市", "诸城市"], ["370783", "中国", "山东省", "潍坊市", "寿光市"], ["370784", "中国", "山东省", "潍坊市", "安丘市"], ["370785", "中国", "山东省", "潍坊市", "高密市"], ["370786", "中国", "山东省", "潍坊市", "昌邑市"], ["370800", "中国", "山东省", "济宁市"], ["370811", "中国", "山东省", "济宁市", "任城区"], ["370812", "中国", "山东省", "济宁市", "兖州区"], ["370826", "中国", "山东省", "济宁市", "微山县"], ["370827", "中国", "山东省", "济宁市", "鱼台县"], ["370828", "中国", "山东省", "济宁市", "金乡县"], ["370829", "中国", "山东省", "济宁市", "嘉祥县"], ["370830", "中国", "山东省", "济宁市", "汶上县"], ["370831", "中国", "山东省", "济宁市", "泗水县"], ["370832", "中国", "山东省", "济宁市", "梁山县"], ["370881", "中国", "山东省", "济宁市", "曲阜市"], ["370883", "中国", "山东省", "济宁市", "邹城市"], ["370900", "中国", "山东省", "泰安市"], ["370902", "中国", "山东省", "泰安市", "泰山区"], ["370911", "中国", "山东省", "泰安市", "岱岳区"], ["370921", "中国", "山东省", "泰安市", "宁阳县"], ["370923", "中国", "山东省", "泰安市", "东平县"], ["370982", "中国", "山东省", "泰安市", "新泰市"], ["370983", "中国", "山东省", "泰安市", "肥城市"], ["371000", "中国", "山东省", "威海市"], ["371002", "中国", "山东省", "威海市", "环翠区"], ["371003", "中国", "山东省", "威海市", "文登区"], ["371082", "中国", "山东省", "威海市", "荣成市"], ["371083", "中国", "山东省", "威海市", "乳山市"], ["371100", "中国", "山东省", "日照市"], ["371102", "中国", "山东省", "日照市", "东港区"], ["371103", "中国", "山东省", "日照市", "岚山区"], ["371121", "中国", "山东省", "日照市", "五莲县"], ["371122", "中国", "山东省", "日照市", "莒县"], ["371200", "中国", "山东省", "莱芜市"], ["371202", "中国", "山东省", "莱芜市", "莱城区"], ["371203", "中国", "山东省", "莱芜市", "钢城区"], ["371300", "中国", "山东省", "临沂市"], ["371302", "中国", "山东省", "临沂市", "兰山区"], ["371311", "中国", "山东省", "临沂市", "罗庄区"], ["371312", "中国", "山东省", "临沂市", "河东区"], ["371321", "中国", "山东省", "临沂市", "沂南县"], ["371322", "中国", "山东省", "临沂市", "郯城县"], ["371323", "中国", "山东省", "临沂市", "沂水县"], ["371324", "中国", "山东省", "临沂市", "兰陵县"], ["371325", "中国", "山东省", "临沂市", "费县"], ["371326", "中国", "山东省", "临沂市", "平邑县"], ["371327", "中国", "山东省", "临沂市", "莒南县"], ["371328", "中国", "山东省", "临沂市", "蒙阴县"], ["371329", "中国", "山东省", "临沂市", "临沭县"], ["371400", "中国", "山东省", "德州市"], ["371402", "中国", "山东省", "德州市", "德城区"], ["371403", "中国", "山东省", "德州市", "陵城区"], ["371422", "中国", "山东省", "德州市", "宁津县"], ["371423", "中国", "山东省", "德州市", "庆云县"], ["371424", "中国", "山东省", "德州市", "临邑县"], ["371425", "中国", "山东省", "德州市", "齐河县"], ["371426", "中国", "山东省", "德州市", "平原县"], ["371427", "中国", "山东省", "德州市", "夏津县"], ["371428", "中国", "山东省", "德州市", "武城县"], ["371481", "中国", "山东省", "德州市", "乐陵市"], ["371482", "中国", "山东省", "德州市", "禹城市"], ["371500", "中国", "山东省", "聊城市"], ["371502", "中国", "山东省", "聊城市", "东昌府区"], ["371521", "中国", "山东省", "聊城市", "阳谷县"], ["371522", "中国", "山东省", "聊城市", "莘县"], ["371523", "中国", "山东省", "聊城市", "茌平县"], ["371524", "中国", "山东省", "聊城市", "东阿县"], ["371525", "中国", "山东省", "聊城市", "冠县"], ["371526", "中国", "山东省", "聊城市", "高唐县"], ["371581", "中国", "山东省", "聊城市", "临清市"], ["371600", "中国", "山东省", "滨州市"], ["371602", "中国", "山东省", "滨州市", "滨城区"], ["371603", "中国", "山东省", "滨州市", "沾化区"], ["371621", "中国", "山东省", "滨州市", "惠民县"], ["371622", "中国", "山东省", "滨州市", "阳信县"], ["371623", "中国", "山东省", "滨州市", "无棣县"], ["371625", "中国", "山东省", "滨州市", "博兴县"], ["371626", "中国", "山东省", "滨州市", "邹平县"], ["371700", "中国", "山东省", "菏泽市"], ["371702", "中国", "山东省", "菏泽市", "牡丹区"], ["371703", "中国", "山东省", "菏泽市", "定陶区"], ["371721", "中国", "山东省", "菏泽市", "曹县"], ["371722", "中国", "山东省", "菏泽市", "单县"], ["371723", "中国", "山东省", "菏泽市", "成武县"], ["371724", "中国", "山东省", "菏泽市", "巨野县"], ["371725", "中国", "山东省", "菏泽市", "郓城县"], ["371726", "中国", "山东省", "菏泽市", "鄄城县"], ["371728", "中国", "山东省", "菏泽市", "东明县"], ["410000", "中国", "河南省"], ["410100", "中国", "河南省", "郑州市"], ["410102", "中国", "河南省", "郑州市", "中原区"], ["410103", "中国", "河南省", "郑州市", "二七区"], ["410104", "中国", "河南省", "郑州市", "管城回族区"], ["410105", "中国", "河南省", "郑州市", "金水区"], ["410106", "中国", "河南省", "郑州市", "上街区"], ["410108", "中国", "河南省", "郑州市", "惠济区"], ["410122", "中国", "河南省", "郑州市", "中牟县"], ["410181", "中国", "河南省", "郑州市", "巩义市"], ["410182", "中国", "河南省", "郑州市", "荥阳市"], ["410183", "中国", "河南省", "郑州市", "新密市"], ["410184", "中国", "河南省", "郑州市", "新郑市"], ["410185", "中国", "河南省", "郑州市", "登封市"], ["410200", "中国", "河南省", "开封市"], ["410202", "中国", "河南省", "开封市", "龙亭区"], ["410203", "中国", "河南省", "开封市", "顺河回族区"], ["410204", "中国", "河南省", "开封市", "鼓楼区"], ["410205", "中国", "河南省", "开封市", "禹王台区"], ["410212", "中国", "河南省", "开封市", "祥符区"], ["410221", "中国", "河南省", "开封市", "杞县"], ["410222", "中国", "河南省", "开封市", "通许县"], ["410223", "中国", "河南省", "开封市", "尉氏县"], ["410225", "中国", "河南省", "开封市", "兰考县"], ["410300", "中国", "河南省", "洛阳市"], ["410302", "中国", "河南省", "洛阳市", "老城区"], ["410303", "中国", "河南省", "洛阳市", "西工区"], ["410304", "中国", "河南省", "洛阳市", "瀍河回族区"], ["410305", "中国", "河南省", "洛阳市", "涧西区"], ["410306", "中国", "河南省", "洛阳市", "吉利区"], ["410311", "中国", "河南省", "洛阳市", "洛龙区"], ["410322", "中国", "河南省", "洛阳市", "孟津县"], ["410323", "中国", "河南省", "洛阳市", "新安县"], ["410324", "中国", "河南省", "洛阳市", "栾川县"], ["410325", "中国", "河南省", "洛阳市", "嵩县"], ["410326", "中国", "河南省", "洛阳市", "汝阳县"], ["410327", "中国", "河南省", "洛阳市", "宜阳县"], ["410328", "中国", "河南省", "洛阳市", "洛宁县"], ["410329", "中国", "河南省", "洛阳市", "伊川县"], ["410381", "中国", "河南省", "洛阳市", "偃师市"], ["410400", "中国", "河南省", "平顶山市"], ["410402", "中国", "河南省", "平顶山市", "新华区"], ["410403", "中国", "河南省", "平顶山市", "卫东区"], ["410404", "中国", "河南省", "平顶山市", "石龙区"], ["410411", "中国", "河南省", "平顶山市", "湛河区"], ["410421", "中国", "河南省", "平顶山市", "宝丰县"], ["410422", "中国", "河南省", "平顶山市", "叶县"], ["410423", "中国", "河南省", "平顶山市", "鲁山县"], ["410425", "中国", "河南省", "平顶山市", "郏县"], ["410481", "中国", "河南省", "平顶山市", "舞钢市"], ["410482", "中国", "河南省", "平顶山市", "汝州市"], ["410500", "中国", "河南省", "安阳市"], ["410502", "中国", "河南省", "安阳市", "文峰区"], ["410503", "中国", "河南省", "安阳市", "北关区"], ["410505", "中国", "河南省", "安阳市", "殷都区"], ["410506", "中国", "河南省", "安阳市", "龙安区"], ["410522", "中国", "河南省", "安阳市", "安阳县"], ["410523", "中国", "河南省", "安阳市", "汤阴县"], ["410526", "中国", "河南省", "安阳市", "滑县"], ["410527", "中国", "河南省", "安阳市", "内黄县"], ["410581", "中国", "河南省", "安阳市", "林州市"], ["410600", "中国", "河南省", "鹤壁市"], ["410602", "中国", "河南省", "鹤壁市", "鹤山区"], ["410603", "中国", "河南省", "鹤壁市", "山城区"], ["410611", "中国", "河南省", "鹤壁市", "淇滨区"], ["410621", "中国", "河南省", "鹤壁市", "浚县"], ["410622", "中国", "河南省", "鹤壁市", "淇县"], ["410700", "中国", "河南省", "新乡市"], ["410702", "中国", "河南省", "新乡市", "红旗区"], ["410703", "中国", "河南省", "新乡市", "卫滨区"], ["410704", "中国", "河南省", "新乡市", "凤泉区"], ["410711", "中国", "河南省", "新乡市", "牧野区"], ["410721", "中国", "河南省", "新乡市", "新乡县"], ["410724", "中国", "河南省", "新乡市", "获嘉县"], ["410725", "中国", "河南省", "新乡市", "原阳县"], ["410726", "中国", "河南省", "新乡市", "延津县"], ["410727", "中国", "河南省", "新乡市", "封丘县"], ["410728", "中国", "河南省", "新乡市", "长垣县"], ["410781", "中国", "河南省", "新乡市", "卫辉市"], ["410782", "中国", "河南省", "新乡市", "辉县市"], ["410800", "中国", "河南省", "焦作市"], ["410802", "中国", "河南省", "焦作市", "解放区"], ["410803", "中国", "河南省", "焦作市", "中站区"], ["410804", "中国", "河南省", "焦作市", "马村区"], ["410811", "中国", "河南省", "焦作市", "山阳区"], ["410821", "中国", "河南省", "焦作市", "修武县"], ["410822", "中国", "河南省", "焦作市", "博爱县"], ["410823", "中国", "河南省", "焦作市", "武陟县"], ["410825", "中国", "河南省", "焦作市", "温县"], ["410882", "中国", "河南省", "焦作市", "沁阳市"], ["410883", "中国", "河南省", "焦作市", "孟州市"], ["410900", "中国", "河南省", "濮阳市"], ["410902", "中国", "河南省", "濮阳市", "华龙区"], ["410922", "中国", "河南省", "濮阳市", "清丰县"], ["410923", "中国", "河南省", "濮阳市", "南乐县"], ["410926", "中国", "河南省", "濮阳市", "范县"], ["410927", "中国", "河南省", "濮阳市", "台前县"], ["410928", "中国", "河南省", "濮阳市", "濮阳县"], ["411000", "中国", "河南省", "许昌市"], ["411002", "中国", "河南省", "许昌市", "魏都区"], ["411003", "中国", "河南省", "许昌市", "建安区"], ["411024", "中国", "河南省", "许昌市", "鄢陵县"], ["411025", "中国", "河南省", "许昌市", "襄城县"], ["411081", "中国", "河南省", "许昌市", "禹州市"], ["411082", "中国", "河南省", "许昌市", "长葛市"], ["411100", "中国", "河南省", "漯河市"], ["411102", "中国", "河南省", "漯河市", "源汇区"], ["411103", "中国", "河南省", "漯河市", "郾城区"], ["411104", "中国", "河南省", "漯河市", "召陵区"], ["411121", "中国", "河南省", "漯河市", "舞阳县"], ["411122", "中国", "河南省", "漯河市", "临颍县"], ["411200", "中国", "河南省", "三门峡市"], ["411202", "中国", "河南省", "三门峡市", "湖滨区"], ["411203", "中国", "河南省", "三门峡市", "陕州区"], ["411221", "中国", "河南省", "三门峡市", "渑池县"], ["411224", "中国", "河南省", "三门峡市", "卢氏县"], ["411281", "中国", "河南省", "三门峡市", "义马市"], ["411282", "中国", "河南省", "三门峡市", "灵宝市"], ["411300", "中国", "河南省", "南阳市"], ["411302", "中国", "河南省", "南阳市", "宛城区"], ["411303", "中国", "河南省", "南阳市", "卧龙区"], ["411321", "中国", "河南省", "南阳市", "南召县"], ["411322", "中国", "河南省", "南阳市", "方城县"], ["411323", "中国", "河南省", "南阳市", "西峡县"], ["411324", "中国", "河南省", "南阳市", "镇平县"], ["411325", "中国", "河南省", "南阳市", "内乡县"], ["411326", "中国", "河南省", "南阳市", "淅川县"], ["411327", "中国", "河南省", "南阳市", "社旗县"], ["411328", "中国", "河南省", "南阳市", "唐河县"], ["411329", "中国", "河南省", "南阳市", "新野县"], ["411330", "中国", "河南省", "南阳市", "桐柏县"], ["411381", "中国", "河南省", "南阳市", "邓州市"], ["411400", "中国", "河南省", "商丘市"], ["411402", "中国", "河南省", "商丘市", "梁园区"], ["411403", "中国", "河南省", "商丘市", "睢阳区"], ["411421", "中国", "河南省", "商丘市", "民权县"], ["411422", "中国", "河南省", "商丘市", "睢县"], ["411423", "中国", "河南省", "商丘市", "宁陵县"], ["411424", "中国", "河南省", "商丘市", "柘城县"], ["411425", "中国", "河南省", "商丘市", "虞城县"], ["411426", "中国", "河南省", "商丘市", "夏邑县"], ["411481", "中国", "河南省", "商丘市", "永城市"], ["411500", "中国", "河南省", "信阳市"], ["411502", "中国", "河南省", "信阳市", "浉河区"], ["411503", "中国", "河南省", "信阳市", "平桥区"], ["411521", "中国", "河南省", "信阳市", "罗山县"], ["411522", "中国", "河南省", "信阳市", "光山县"], ["411523", "中国", "河南省", "信阳市", "新县"], ["411524", "中国", "河南省", "信阳市", "商城县"], ["411525", "中国", "河南省", "信阳市", "固始县"], ["411526", "中国", "河南省", "信阳市", "潢川县"], ["411527", "中国", "河南省", "信阳市", "淮滨县"], ["411528", "中国", "河南省", "信阳市", "息县"], ["411600", "中国", "河南省", "周口市"], ["411602", "中国", "河南省", "周口市", "川汇区"], ["411621", "中国", "河南省", "周口市", "扶沟县"], ["411622", "中国", "河南省", "周口市", "西华县"], ["411623", "中国", "河南省", "周口市", "商水县"], ["411624", "中国", "河南省", "周口市", "沈丘县"], ["411625", "中国", "河南省", "周口市", "郸城县"], ["411626", "中国", "河南省", "周口市", "淮阳县"], ["411627", "中国", "河南省", "周口市", "太康县"], ["411628", "中国", "河南省", "周口市", "鹿邑县"], ["411681", "中国", "河南省", "周口市", "项城市"], ["411700", "中国", "河南省", "驻马店市"], ["411702", "中国", "河南省", "驻马店市", "驿城区"], ["411721", "中国", "河南省", "驻马店市", "西平县"], ["411722", "中国", "河南省", "驻马店市", "上蔡县"], ["411723", "中国", "河南省", "驻马店市", "平舆县"], ["411724", "中国", "河南省", "驻马店市", "正阳县"], ["411725", "中国", "河南省", "驻马店市", "确山县"], ["411726", "中国", "河南省", "驻马店市", "泌阳县"], ["411727", "中国", "河南省", "驻马店市", "汝南县"], ["411728", "中国", "河南省", "驻马店市", "遂平县"], ["411729", "中国", "河南省", "驻马店市", "新蔡县"], ["419001", "中国", "河南省", "济源市", "济源市"], ["420000", "中国", "湖北省"], ["420100", "中国", "湖北省", "武汉市"], ["420102", "中国", "湖北省", "武汉市", "江岸区"], ["420103", "中国", "湖北省", "武汉市", "江汉区"], ["420104", "中国", "湖北省", "武汉市", "硚口区"], ["420105", "中国", "湖北省", "武汉市", "汉阳区"], ["420106", "中国", "湖北省", "武汉市", "武昌区"], ["420107", "中国", "湖北省", "武汉市", "青山区"], ["420111", "中国", "湖北省", "武汉市", "洪山区"], ["420112", "中国", "湖北省", "武汉市", "东西湖区"], ["420113", "中国", "湖北省", "武汉市", "汉南区"], ["420114", "中国", "湖北省", "武汉市", "蔡甸区"], ["420115", "中国", "湖北省", "武汉市", "江夏区"], ["420116", "中国", "湖北省", "武汉市", "黄陂区"], ["420117", "中国", "湖北省", "武汉市", "新洲区"], ["420200", "中国", "湖北省", "黄石市"], ["420202", "中国", "湖北省", "黄石市", "黄石港区"], ["420203", "中国", "湖北省", "黄石市", "西塞山区"], ["420204", "中国", "湖北省", "黄石市", "下陆区"], ["420205", "中国", "湖北省", "黄石市", "铁山区"], ["420222", "中国", "湖北省", "黄石市", "阳新县"], ["420281", "中国", "湖北省", "黄石市", "大冶市"], ["420300", "中国", "湖北省", "十堰市"], ["420302", "中国", "湖北省", "十堰市", "茅箭区"], ["420303", "中国", "湖北省", "十堰市", "张湾区"], ["420304", "中国", "湖北省", "十堰市", "郧阳区"], ["420322", "中国", "湖北省", "十堰市", "郧西县"], ["420323", "中国", "湖北省", "十堰市", "竹山县"], ["420324", "中国", "湖北省", "十堰市", "竹溪县"], ["420325", "中国", "湖北省", "十堰市", "房县"], ["420381", "中国", "湖北省", "十堰市", "丹江口市"], ["420500", "中国", "湖北省", "宜昌市"], ["420502", "中国", "湖北省", "宜昌市", "西陵区"], ["420503", "中国", "湖北省", "宜昌市", "伍家岗区"], ["420504", "中国", "湖北省", "宜昌市", "点军区"], ["420505", "中国", "湖北省", "宜昌市", "猇亭区"], ["420506", "中国", "湖北省", "宜昌市", "夷陵区"], ["420525", "中国", "湖北省", "宜昌市", "远安县"], ["420526", "中国", "湖北省", "宜昌市", "兴山县"], ["420527", "中国", "湖北省", "宜昌市", "秭归县"], ["420528", "中国", "湖北省", "宜昌市", "长阳土家族自治县"], ["420529", "中国", "湖北省", "宜昌市", "五峰土家族自治县"], ["420581", "中国", "湖北省", "宜昌市", "宜都市"], ["420582", "中国", "湖北省", "宜昌市", "当阳市"], ["420583", "中国", "湖北省", "宜昌市", "枝江市"], ["420600", "中国", "湖北省", "襄阳市"], ["420602", "中国", "湖北省", "襄阳市", "襄城区"], ["420606", "中国", "湖北省", "襄阳市", "樊城区"], ["420607", "中国", "湖北省", "襄阳市", "襄州区"], ["420624", "中国", "湖北省", "襄阳市", "南漳县"], ["420625", "中国", "湖北省", "襄阳市", "谷城县"], ["420626", "中国", "湖北省", "襄阳市", "保康县"], ["420682", "中国", "湖北省", "襄阳市", "老河口市"], ["420683", "中国", "湖北省", "襄阳市", "枣阳市"], ["420684", "中国", "湖北省", "襄阳市", "宜城市"], ["420700", "中国", "湖北省", "鄂州市"], ["420702", "中国", "湖北省", "鄂州市", "梁子湖区"], ["420703", "中国", "湖北省", "鄂州市", "华容区"], ["420704", "中国", "湖北省", "鄂州市", "鄂城区"], ["420800", "中国", "湖北省", "荆门市"], ["420802", "中国", "湖北省", "荆门市", "东宝区"], ["420804", "中国", "湖北省", "荆门市", "掇刀区"], ["420821", "中国", "湖北省", "荆门市", "京山县"], ["420822", "中国", "湖北省", "荆门市", "沙洋县"], ["420881", "中国", "湖北省", "荆门市", "钟祥市"], ["420900", "中国", "湖北省", "孝感市"], ["420902", "中国", "湖北省", "孝感市", "孝南区"], ["420921", "中国", "湖北省", "孝感市", "孝昌县"], ["420922", "中国", "湖北省", "孝感市", "大悟县"], ["420923", "中国", "湖北省", "孝感市", "云梦县"], ["420981", "中国", "湖北省", "孝感市", "应城市"], ["420982", "中国", "湖北省", "孝感市", "安陆市"], ["420984", "中国", "湖北省", "孝感市", "汉川市"], ["421000", "中国", "湖北省", "荆州市"], ["421002", "中国", "湖北省", "荆州市", "沙市区"], ["421003", "中国", "湖北省", "荆州市", "荆州区"], ["421022", "中国", "湖北省", "荆州市", "公安县"], ["421023", "中国", "湖北省", "荆州市", "监利县"], ["421024", "中国", "湖北省", "荆州市", "江陵县"], ["421081", "中国", "湖北省", "荆州市", "石首市"], ["421083", "中国", "湖北省", "荆州市", "洪湖市"], ["421087", "中国", "湖北省", "荆州市", "松滋市"], ["421100", "中国", "湖北省", "黄冈市"], ["421102", "中国", "湖北省", "黄冈市", "黄州区"], ["421121", "中国", "湖北省", "黄冈市", "团风县"], ["421122", "中国", "湖北省", "黄冈市", "红安县"], ["421123", "中国", "湖北省", "黄冈市", "罗田县"], ["421124", "中国", "湖北省", "黄冈市", "英山县"], ["421125", "中国", "湖北省", "黄冈市", "浠水县"], ["421126", "中国", "湖北省", "黄冈市", "蕲春县"], ["421127", "中国", "湖北省", "黄冈市", "黄梅县"], ["421181", "中国", "湖北省", "黄冈市", "麻城市"], ["421182", "中国", "湖北省", "黄冈市", "武穴市"], ["421200", "中国", "湖北省", "咸宁市"], ["421202", "中国", "湖北省", "咸宁市", "咸安区"], ["421221", "中国", "湖北省", "咸宁市", "嘉鱼县"], ["421222", "中国", "湖北省", "咸宁市", "通城县"], ["421223", "中国", "湖北省", "咸宁市", "崇阳县"], ["421224", "中国", "湖北省", "咸宁市", "通山县"], ["421281", "中国", "湖北省", "咸宁市", "赤壁市"], ["421300", "中国", "湖北省", "随州市"], ["421303", "中国", "湖北省", "随州市", "曾都区"], ["421321", "中国", "湖北省", "随州市", "随县"], ["421381", "中国", "湖北省", "随州市", "广水市"], ["422800", "中国", "湖北省", "恩施土家族苗族自治州"], ["422801", "中国", "湖北省", "恩施土家族苗族自治州", "恩施市"], ["422802", "中国", "湖北省", "恩施土家族苗族自治州", "利川市"], ["422822", "中国", "湖北省", "恩施土家族苗族自治州", "建始县"], ["422823", "中国", "湖北省", "恩施土家族苗族自治州", "巴东县"], ["422825", "中国", "湖北省", "恩施土家族苗族自治州", "宣恩县"], ["422826", "中国", "湖北省", "恩施土家族苗族自治州", "咸丰县"], ["422827", "中国", "湖北省", "恩施土家族苗族自治州", "来凤县"], ["422828", "中国", "湖北省", "恩施土家族苗族自治州", "鹤峰县"], ["429004", "中国", "湖北省", "仙桃市", "仙桃市"], ["429005", "中国", "湖北省", "潜江市", "潜江市"], ["429006", "中国", "湖北省", "天门市", "天门市"], ["429021", "中国", "湖北省", "神农架林区", "神农架林区"], ["430000", "中国", "湖南省"], ["430100", "中国", "湖南省", "长沙市"], ["430102", "中国", "湖南省", "长沙市", "芙蓉区"], ["430103", "中国", "湖南省", "长沙市", "天心区"], ["430104", "中国", "湖南省", "长沙市", "岳麓区"], ["430105", "中国", "湖南省", "长沙市", "开福区"], ["430111", "中国", "湖南省", "长沙市", "雨花区"], ["430112", "中国", "湖南省", "长沙市", "望城区"], ["430121", "中国", "湖南省", "长沙市", "长沙县"], ["430181", "中国", "湖南省", "长沙市", "浏阳市"], ["430182", "中国", "湖南省", "长沙市", "宁乡市"], ["430200", "中国", "湖南省", "株洲市"], ["430202", "中国", "湖南省", "株洲市", "荷塘区"], ["430203", "中国", "湖南省", "株洲市", "芦淞区"], ["430204", "中国", "湖南省", "株洲市", "石峰区"], ["430211", "中国", "湖南省", "株洲市", "天元区"], ["430221", "中国", "湖南省", "株洲市", "株洲县"], ["430223", "中国", "湖南省", "株洲市", "攸县"], ["430224", "中国", "湖南省", "株洲市", "茶陵县"], ["430225", "中国", "湖南省", "株洲市", "炎陵县"], ["430281", "中国", "湖南省", "株洲市", "醴陵市"], ["430300", "中国", "湖南省", "湘潭市"], ["430302", "中国", "湖南省", "湘潭市", "雨湖区"], ["430304", "中国", "湖南省", "湘潭市", "岳塘区"], ["430321", "中国", "湖南省", "湘潭市", "湘潭县"], ["430381", "中国", "湖南省", "湘潭市", "湘乡市"], ["430382", "中国", "湖南省", "湘潭市", "韶山市"], ["430400", "中国", "湖南省", "衡阳市"], ["430405", "中国", "湖南省", "衡阳市", "珠晖区"], ["430406", "中国", "湖南省", "衡阳市", "雁峰区"], ["430407", "中国", "湖南省", "衡阳市", "石鼓区"], ["430408", "中国", "湖南省", "衡阳市", "蒸湘区"], ["430412", "中国", "湖南省", "衡阳市", "南岳区"], ["430421", "中国", "湖南省", "衡阳市", "衡阳县"], ["430422", "中国", "湖南省", "衡阳市", "衡南县"], ["430423", "中国", "湖南省", "衡阳市", "衡山县"], ["430424", "中国", "湖南省", "衡阳市", "衡东县"], ["430426", "中国", "湖南省", "衡阳市", "祁东县"], ["430481", "中国", "湖南省", "衡阳市", "耒阳市"], ["430482", "中国", "湖南省", "衡阳市", "常宁市"], ["430500", "中国", "湖南省", "邵阳市"], ["430502", "中国", "湖南省", "邵阳市", "双清区"], ["430503", "中国", "湖南省", "邵阳市", "大祥区"], ["430511", "中国", "湖南省", "邵阳市", "北塔区"], ["430521", "中国", "湖南省", "邵阳市", "邵东县"], ["430522", "中国", "湖南省", "邵阳市", "新邵县"], ["430523", "中国", "湖南省", "邵阳市", "邵阳县"], ["430524", "中国", "湖南省", "邵阳市", "隆回县"], ["430525", "中国", "湖南省", "邵阳市", "洞口县"], ["430527", "中国", "湖南省", "邵阳市", "绥宁县"], ["430528", "中国", "湖南省", "邵阳市", "新宁县"], ["430529", "中国", "湖南省", "邵阳市", "城步苗族自治县"], ["430581", "中国", "湖南省", "邵阳市", "武冈市"], ["430600", "中国", "湖南省", "岳阳市"], ["430602", "中国", "湖南省", "岳阳市", "岳阳楼区"], ["430603", "中国", "湖南省", "岳阳市", "云溪区"], ["430611", "中国", "湖南省", "岳阳市", "君山区"], ["430621", "中国", "湖南省", "岳阳市", "岳阳县"], ["430623", "中国", "湖南省", "岳阳市", "华容县"], ["430624", "中国", "湖南省", "岳阳市", "湘阴县"], ["430626", "中国", "湖南省", "岳阳市", "平江县"], ["430681", "中国", "湖南省", "岳阳市", "汨罗市"], ["430682", "中国", "湖南省", "岳阳市", "临湘市"], ["430700", "中国", "湖南省", "常德市"], ["430702", "中国", "湖南省", "常德市", "武陵区"], ["430703", "中国", "湖南省", "常德市", "鼎城区"], ["430721", "中国", "湖南省", "常德市", "安乡县"], ["430722", "中国", "湖南省", "常德市", "汉寿县"], ["430723", "中国", "湖南省", "常德市", "澧县"], ["430724", "中国", "湖南省", "常德市", "临澧县"], ["430725", "中国", "湖南省", "常德市", "桃源县"], ["430726", "中国", "湖南省", "常德市", "石门县"], ["430781", "中国", "湖南省", "常德市", "津市市"], ["430800", "中国", "湖南省", "张家界市"], ["430802", "中国", "湖南省", "张家界市", "永定区"], ["430811", "中国", "湖南省", "张家界市", "武陵源区"], ["430821", "中国", "湖南省", "张家界市", "慈利县"], ["430822", "中国", "湖南省", "张家界市", "桑植县"], ["430900", "中国", "湖南省", "益阳市"], ["430902", "中国", "湖南省", "益阳市", "资阳区"], ["430903", "中国", "湖南省", "益阳市", "赫山区"], ["430921", "中国", "湖南省", "益阳市", "南县"], ["430922", "中国", "湖南省", "益阳市", "桃江县"], ["430923", "中国", "湖南省", "益阳市", "安化县"], ["430981", "中国", "湖南省", "益阳市", "沅江市"], ["431000", "中国", "湖南省", "郴州市"], ["431002", "中国", "湖南省", "郴州市", "北湖区"], ["431003", "中国", "湖南省", "郴州市", "苏仙区"], ["431021", "中国", "湖南省", "郴州市", "桂阳县"], ["431022", "中国", "湖南省", "郴州市", "宜章县"], ["431023", "中国", "湖南省", "郴州市", "永兴县"], ["431024", "中国", "湖南省", "郴州市", "嘉禾县"], ["431025", "中国", "湖南省", "郴州市", "临武县"], ["431026", "中国", "湖南省", "郴州市", "汝城县"], ["431027", "中国", "湖南省", "郴州市", "桂东县"], ["431028", "中国", "湖南省", "郴州市", "安仁县"], ["431081", "中国", "湖南省", "郴州市", "资兴市"], ["431100", "中国", "湖南省", "永州市"], ["431102", "中国", "湖南省", "永州市", "零陵区"], ["431103", "中国", "湖南省", "永州市", "冷水滩区"], ["431121", "中国", "湖南省", "永州市", "祁阳县"], ["431122", "中国", "湖南省", "永州市", "东安县"], ["431123", "中国", "湖南省", "永州市", "双牌县"], ["431124", "中国", "湖南省", "永州市", "道县"], ["431125", "中国", "湖南省", "永州市", "江永县"], ["431126", "中国", "湖南省", "永州市", "宁远县"], ["431127", "中国", "湖南省", "永州市", "蓝山县"], ["431128", "中国", "湖南省", "永州市", "新田县"], ["431129", "中国", "湖南省", "永州市", "江华瑶族自治县"], ["431200", "中国", "湖南省", "怀化市"], ["431202", "中国", "湖南省", "怀化市", "鹤城区"], ["431221", "中国", "湖南省", "怀化市", "中方县"], ["431222", "中国", "湖南省", "怀化市", "沅陵县"], ["431223", "中国", "湖南省", "怀化市", "辰溪县"], ["431224", "中国", "湖南省", "怀化市", "溆浦县"], ["431225", "中国", "湖南省", "怀化市", "会同县"], ["431226", "中国", "湖南省", "怀化市", "麻阳苗族自治县"], ["431227", "中国", "湖南省", "怀化市", "新晃侗族自治县"], ["431228", "中国", "湖南省", "怀化市", "芷江侗族自治县"], ["431229", "中国", "湖南省", "怀化市", "靖州苗族侗族自治县"], ["431230", "中国", "湖南省", "怀化市", "通道侗族自治县"], ["431281", "中国", "湖南省", "怀化市", "洪江市"], ["431300", "中国", "湖南省", "娄底市"], ["431302", "中国", "湖南省", "娄底市", "娄星区"], ["431321", "中国", "湖南省", "娄底市", "双峰县"], ["431322", "中国", "湖南省", "娄底市", "新化县"], ["431381", "中国", "湖南省", "娄底市", "冷水江市"], ["431382", "中国", "湖南省", "娄底市", "涟源市"], ["433100", "中国", "湖南省", "湘西土家族苗族自治州"], ["433101", "中国", "湖南省", "湘西土家族苗族自治州", "吉首市"], ["433122", "中国", "湖南省", "湘西土家族苗族自治州", "泸溪县"], ["433123", "中国", "湖南省", "湘西土家族苗族自治州", "凤凰县"], ["433124", "中国", "湖南省", "湘西土家族苗族自治州", "花垣县"], ["433125", "中国", "湖南省", "湘西土家族苗族自治州", "保靖县"], ["433126", "中国", "湖南省", "湘西土家族苗族自治州", "古丈县"], ["433127", "中国", "湖南省", "湘西土家族苗族自治州", "永顺县"], ["433130", "中国", "湖南省", "湘西土家族苗族自治州", "龙山县"], ["440000", "中国", "广东省"], ["440100", "中国", "广东省", "广州市"], ["440103", "中国", "广东省", "广州市", "荔湾区"], ["440104", "中国", "广东省", "广州市", "越秀区"], ["440105", "中国", "广东省", "广州市", "海珠区"], ["440106", "中国", "广东省", "广州市", "天河区"], ["440111", "中国", "广东省", "广州市", "白云区"], ["440112", "中国", "广东省", "广州市", "黄埔区"], ["440113", "中国", "广东省", "广州市", "番禺区"], ["440114", "中国", "广东省", "广州市", "花都区"], ["440115", "中国", "广东省", "广州市", "南沙区"], ["440117", "中国", "广东省", "广州市", "从化区"], ["440118", "中国", "广东省", "广州市", "增城区"], ["440200", "中国", "广东省", "韶关市"], ["440203", "中国", "广东省", "韶关市", "武江区"], ["440204", "中国", "广东省", "韶关市", "浈江区"], ["440205", "中国", "广东省", "韶关市", "曲江区"], ["440222", "中国", "广东省", "韶关市", "始兴县"], ["440224", "中国", "广东省", "韶关市", "仁化县"], ["440229", "中国", "广东省", "韶关市", "翁源县"], ["440232", "中国", "广东省", "韶关市", "乳源瑶族自治县"], ["440233", "中国", "广东省", "韶关市", "新丰县"], ["440281", "中国", "广东省", "韶关市", "乐昌市"], ["440282", "中国", "广东省", "韶关市", "南雄市"], ["440300", "中国", "广东省", "深圳市"], ["440303", "中国", "广东省", "深圳市", "罗湖区"], ["440304", "中国", "广东省", "深圳市", "福田区"], ["440305", "中国", "广东省", "深圳市", "南山区"], ["440306", "中国", "广东省", "深圳市", "宝安区"], ["440307", "中国", "广东省", "深圳市", "龙岗区"], ["440308", "中国", "广东省", "深圳市", "盐田区"], ["440309", "中国", "广东省", "深圳市", "龙华区"], ["440310", "中国", "广东省", "深圳市", "坪山区"], ["440400", "中国", "广东省", "珠海市"], ["440402", "中国", "广东省", "珠海市", "香洲区"], ["440403", "中国", "广东省", "珠海市", "斗门区"], ["440404", "中国", "广东省", "珠海市", "金湾区"], ["440499", "中国", "广东省", "珠海市", "香洲区(由澳门特别行政区实施管辖)"], ["440500", "中国", "广东省", "汕头市"], ["440507", "中国", "广东省", "汕头市", "龙湖区"], ["440511", "中国", "广东省", "汕头市", "金平区"], ["440512", "中国", "广东省", "汕头市", "濠江区"], ["440513", "中国", "广东省", "汕头市", "潮阳区"], ["440514", "中国", "广东省", "汕头市", "潮南区"], ["440515", "中国", "广东省", "汕头市", "澄海区"], ["440523", "中国", "广东省", "汕头市", "南澳县"], ["440600", "中国", "广东省", "佛山市"], ["440604", "中国", "广东省", "佛山市", "禅城区"], ["440605", "中国", "广东省", "佛山市", "南海区"], ["440606", "中国", "广东省", "佛山市", "顺德区"], ["440607", "中国", "广东省", "佛山市", "三水区"], ["440608", "中国", "广东省", "佛山市", "高明区"], ["440700", "中国", "广东省", "江门市"], ["440703", "中国", "广东省", "江门市", "蓬江区"], ["440704", "中国", "广东省", "江门市", "江海区"], ["440705", "中国", "广东省", "江门市", "新会区"], ["440781", "中国", "广东省", "江门市", "台山市"], ["440783", "中国", "广东省", "江门市", "开平市"], ["440784", "中国", "广东省", "江门市", "鹤山市"], ["440785", "中国", "广东省", "江门市", "恩平市"], ["440800", "中国", "广东省", "湛江市"], ["440802", "中国", "广东省", "湛江市", "赤坎区"], ["440803", "中国", "广东省", "湛江市", "霞山区"], ["440804", "中国", "广东省", "湛江市", "坡头区"], ["440811", "中国", "广东省", "湛江市", "麻章区"], ["440823", "中国", "广东省", "湛江市", "遂溪县"], ["440825", "中国", "广东省", "湛江市", "徐闻县"], ["440881", "中国", "广东省", "湛江市", "廉江市"], ["440882", "中国", "广东省", "湛江市", "雷州市"], ["440883", "中国", "广东省", "湛江市", "吴川市"], ["440900", "中国", "广东省", "茂名市"], ["440902", "中国", "广东省", "茂名市", "茂南区"], ["440904", "中国", "广东省", "茂名市", "电白区"], ["440981", "中国", "广东省", "茂名市", "高州市"], ["440982", "中国", "广东省", "茂名市", "化州市"], ["440983", "中国", "广东省", "茂名市", "信宜市"], ["441200", "中国", "广东省", "肇庆市"], ["441202", "中国", "广东省", "肇庆市", "端州区"], ["441203", "中国", "广东省", "肇庆市", "鼎湖区"], ["441204", "中国", "广东省", "肇庆市", "高要区"], ["441223", "中国", "广东省", "肇庆市", "广宁县"], ["441224", "中国", "广东省", "肇庆市", "怀集县"], ["441225", "中国", "广东省", "肇庆市", "封开县"], ["441226", "中国", "广东省", "肇庆市", "德庆县"], ["441284", "中国", "广东省", "肇庆市", "四会市"], ["441300", "中国", "广东省", "惠州市"], ["441302", "中国", "广东省", "惠州市", "惠城区"], ["441303", "中国", "广东省", "惠州市", "惠阳区"], ["441322", "中国", "广东省", "惠州市", "博罗县"], ["441323", "中国", "广东省", "惠州市", "惠东县"], ["441324", "中国", "广东省", "惠州市", "龙门县"], ["441400", "中国", "广东省", "梅州市"], ["441402", "中国", "广东省", "梅州市", "梅江区"], ["441403", "中国", "广东省", "梅州市", "梅县区"], ["441422", "中国", "广东省", "梅州市", "大埔县"], ["441423", "中国", "广东省", "梅州市", "丰顺县"], ["441424", "中国", "广东省", "梅州市", "五华县"], ["441426", "中国", "广东省", "梅州市", "平远县"], ["441427", "中国", "广东省", "梅州市", "蕉岭县"], ["441481", "中国", "广东省", "梅州市", "兴宁市"], ["441500", "中国", "广东省", "汕尾市"], ["441502", "中国", "广东省", "汕尾市", "城区"], ["441521", "中国", "广东省", "汕尾市", "海丰县"], ["441523", "中国", "广东省", "汕尾市", "陆河县"], ["441581", "中国", "广东省", "汕尾市", "陆丰市"], ["441600", "中国", "广东省", "河源市"], ["441602", "中国", "广东省", "河源市", "源城区"], ["441621", "中国", "广东省", "河源市", "紫金县"], ["441622", "中国", "广东省", "河源市", "龙川县"], ["441623", "中国", "广东省", "河源市", "连平县"], ["441624", "中国", "广东省", "河源市", "和平县"], ["441625", "中国", "广东省", "河源市", "东源县"], ["441700", "中国", "广东省", "阳江市"], ["441702", "中国", "广东省", "阳江市", "江城区"], ["441704", "中国", "广东省", "阳江市", "阳东区"], ["441721", "中国", "广东省", "阳江市", "阳西县"], ["441781", "中国", "广东省", "阳江市", "阳春市"], ["441800", "中国", "广东省", "清远市"], ["441802", "中国", "广东省", "清远市", "清城区"], ["441803", "中国", "广东省", "清远市", "清新区"], ["441821", "中国", "广东省", "清远市", "佛冈县"], ["441823", "中国", "广东省", "清远市", "阳山县"], ["441825", "中国", "广东省", "清远市", "连山壮族瑶族自治县"], ["441826", "中国", "广东省", "清远市", "连南瑶族自治县"], ["441881", "中国", "广东省", "清远市", "英德市"], ["441882", "中国", "广东省", "清远市", "连州市"], ["441900", "中国", "广东省", "东莞市"], ["442000", "中国", "广东省", "中山市"], ["445100", "中国", "广东省", "潮州市"], ["445102", "中国", "广东省", "潮州市", "湘桥区"], ["445103", "中国", "广东省", "潮州市", "潮安区"], ["445122", "中国", "广东省", "潮州市", "饶平县"], ["445200", "中国", "广东省", "揭阳市"], ["445202", "中国", "广东省", "揭阳市", "榕城区"], ["445203", "中国", "广东省", "揭阳市", "揭东区"], ["445222", "中国", "广东省", "揭阳市", "揭西县"], ["445224", "中国", "广东省", "揭阳市", "惠来县"], ["445281", "中国", "广东省", "揭阳市", "普宁市"], ["445300", "中国", "广东省", "云浮市"], ["445302", "中国", "广东省", "云浮市", "云城区"], ["445303", "中国", "广东省", "云浮市", "云安区"], ["445321", "中国", "广东省", "云浮市", "新兴县"], ["445322", "中国", "广东省", "云浮市", "郁南县"], ["445381", "中国", "广东省", "云浮市", "罗定市"], ["450000", "中国", "广西壮族自治区"], ["450100", "中国", "广西壮族自治区", "南宁市"], ["450102", "中国", "广西壮族自治区", "南宁市", "兴宁区"], ["450103", "中国", "广西壮族自治区", "南宁市", "青秀区"], ["450105", "中国", "广西壮族自治区", "南宁市", "江南区"], ["450107", "中国", "广西壮族自治区", "南宁市", "西乡塘区"], ["450108", "中国", "广西壮族自治区", "南宁市", "良庆区"], ["450109", "中国", "广西壮族自治区", "南宁市", "邕宁区"], ["450110", "中国", "广西壮族自治区", "南宁市", "武鸣区"], ["450123", "中国", "广西壮族自治区", "南宁市", "隆安县"], ["450124", "中国", "广西壮族自治区", "南宁市", "马山县"], ["450125", "中国", "广西壮族自治区", "南宁市", "上林县"], ["450126", "中国", "广西壮族自治区", "南宁市", "宾阳县"], ["450127", "中国", "广西壮族自治区", "南宁市", "横县"], ["450200", "中国", "广西壮族自治区", "柳州市"], ["450202", "中国", "广西壮族自治区", "柳州市", "城中区"], ["450203", "中国", "广西壮族自治区", "柳州市", "鱼峰区"], ["450204", "中国", "广西壮族自治区", "柳州市", "柳南区"], ["450205", "中国", "广西壮族自治区", "柳州市", "柳北区"], ["450206", "中国", "广西壮族自治区", "柳州市", "柳江区"], ["450222", "中国", "广西壮族自治区", "柳州市", "柳城县"], ["450223", "中国", "广西壮族自治区", "柳州市", "鹿寨县"], ["450224", "中国", "广西壮族自治区", "柳州市", "融安县"], ["450225", "中国", "广西壮族自治区", "柳州市", "融水苗族自治县"], ["450226", "中国", "广西壮族自治区", "柳州市", "三江侗族自治县"], ["450300", "中国", "广西壮族自治区", "桂林市"], ["450302", "中国", "广西壮族自治区", "桂林市", "秀峰区"], ["450303", "中国", "广西壮族自治区", "桂林市", "叠彩区"], ["450304", "中国", "广西壮族自治区", "桂林市", "象山区"], ["450305", "中国", "广西壮族自治区", "桂林市", "七星区"], ["450311", "中国", "广西壮族自治区", "桂林市", "雁山区"], ["450312", "中国", "广西壮族自治区", "桂林市", "临桂区"], ["450321", "中国", "广西壮族自治区", "桂林市", "阳朔县"], ["450323", "中国", "广西壮族自治区", "桂林市", "灵川县"], ["450324", "中国", "广西壮族自治区", "桂林市", "全州县"], ["450325", "中国", "广西壮族自治区", "桂林市", "兴安县"], ["450326", "中国", "广西壮族自治区", "桂林市", "永福县"], ["450327", "中国", "广西壮族自治区", "桂林市", "灌阳县"], ["450328", "中国", "广西壮族自治区", "桂林市", "龙胜各族自治县"], ["450329", "中国", "广西壮族自治区", "桂林市", "资源县"], ["450330", "中国", "广西壮族自治区", "桂林市", "平乐县"], ["450331", "中国", "广西壮族自治区", "桂林市", "荔浦县"], ["450332", "中国", "广西壮族自治区", "桂林市", "恭城瑶族自治县"], ["450400", "中国", "广西壮族自治区", "梧州市"], ["450403", "中国", "广西壮族自治区", "梧州市", "万秀区"], ["450405", "中国", "广西壮族自治区", "梧州市", "长洲区"], ["450406", "中国", "广西壮族自治区", "梧州市", "龙圩区"], ["450421", "中国", "广西壮族自治区", "梧州市", "苍梧县"], ["450422", "中国", "广西壮族自治区", "梧州市", "藤县"], ["450423", "中国", "广西壮族自治区", "梧州市", "蒙山县"], ["450481", "中国", "广西壮族自治区", "梧州市", "岑溪市"], ["450500", "中国", "广西壮族自治区", "北海市"], ["450502", "中国", "广西壮族自治区", "北海市", "海城区"], ["450503", "中国", "广西壮族自治区", "北海市", "银海区"], ["450512", "中国", "广西壮族自治区", "北海市", "铁山港区"], ["450521", "中国", "广西壮族自治区", "北海市", "合浦县"], ["450600", "中国", "广西壮族自治区", "防城港市"], ["450602", "中国", "广西壮族自治区", "防城港市", "港口区"], ["450603", "中国", "广西壮族自治区", "防城港市", "防城区"], ["450621", "中国", "广西壮族自治区", "防城港市", "上思县"], ["450681", "中国", "广西壮族自治区", "防城港市", "东兴市"], ["450700", "中国", "广西壮族自治区", "钦州市"], ["450702", "中国", "广西壮族自治区", "钦州市", "钦南区"], ["450703", "中国", "广西壮族自治区", "钦州市", "钦北区"], ["450721", "中国", "广西壮族自治区", "钦州市", "灵山县"], ["450722", "中国", "广西壮族自治区", "钦州市", "浦北县"], ["450800", "中国", "广西壮族自治区", "贵港市"], ["450802", "中国", "广西壮族自治区", "贵港市", "港北区"], ["450803", "中国", "广西壮族自治区", "贵港市", "港南区"], ["450804", "中国", "广西壮族自治区", "贵港市", "覃塘区"], ["450821", "中国", "广西壮族自治区", "贵港市", "平南县"], ["450881", "中国", "广西壮族自治区", "贵港市", "桂平市"], ["450900", "中国", "广西壮族自治区", "玉林市"], ["450902", "中国", "广西壮族自治区", "玉林市", "玉州区"], ["450903", "中国", "广西壮族自治区", "玉林市", "福绵区"], ["450921", "中国", "广西壮族自治区", "玉林市", "容县"], ["450922", "中国", "广西壮族自治区", "玉林市", "陆川县"], ["450923", "中国", "广西壮族自治区", "玉林市", "博白县"], ["450924", "中国", "广西壮族自治区", "玉林市", "兴业县"], ["450981", "中国", "广西壮族自治区", "玉林市", "北流市"], ["451000", "中国", "广西壮族自治区", "百色市"], ["451002", "中国", "广西壮族自治区", "百色市", "右江区"], ["451021", "中国", "广西壮族自治区", "百色市", "田阳县"], ["451022", "中国", "广西壮族自治区", "百色市", "田东县"], ["451023", "中国", "广西壮族自治区", "百色市", "平果县"], ["451024", "中国", "广西壮族自治区", "百色市", "德保县"], ["451026", "中国", "广西壮族自治区", "百色市", "那坡县"], ["451027", "中国", "广西壮族自治区", "百色市", "凌云县"], ["451028", "中国", "广西壮族自治区", "百色市", "乐业县"], ["451029", "中国", "广西壮族自治区", "百色市", "田林县"], ["451030", "中国", "广西壮族自治区", "百色市", "西林县"], ["451031", "中国", "广西壮族自治区", "百色市", "隆林各族自治县"], ["451081", "中国", "广西壮族自治区", "百色市", "靖西市"], ["451100", "中国", "广西壮族自治区", "贺州市"], ["451102", "中国", "广西壮族自治区", "贺州市", "八步区"], ["451103", "中国", "广西壮族自治区", "贺州市", "平桂区"], ["451121", "中国", "广西壮族自治区", "贺州市", "昭平县"], ["451122", "中国", "广西壮族自治区", "贺州市", "钟山县"], ["451123", "中国", "广西壮族自治区", "贺州市", "富川瑶族自治县"], ["451200", "中国", "广西壮族自治区", "河池市"], ["451202", "中国", "广西壮族自治区", "河池市", "金城江区"], ["451203", "中国", "广西壮族自治区", "河池市", "宜州区"], ["451221", "中国", "广西壮族自治区", "河池市", "南丹县"], ["451222", "中国", "广西壮族自治区", "河池市", "天峨县"], ["451223", "中国", "广西壮族自治区", "河池市", "凤山县"], ["451224", "中国", "广西壮族自治区", "河池市", "东兰县"], ["451225", "中国", "广西壮族自治区", "河池市", "罗城仫佬族自治县"], ["451226", "中国", "广西壮族自治区", "河池市", "环江毛南族自治县"], ["451227", "中国", "广西壮族自治区", "河池市", "巴马瑶族自治县"], ["451228", "中国", "广西壮族自治区", "河池市", "都安瑶族自治县"], ["451229", "中国", "广西壮族自治区", "河池市", "大化瑶族自治县"], ["451300", "中国", "广西壮族自治区", "来宾市"], ["451302", "中国", "广西壮族自治区", "来宾市", "兴宾区"], ["451321", "中国", "广西壮族自治区", "来宾市", "忻城县"], ["451322", "中国", "广西壮族自治区", "来宾市", "象州县"], ["451323", "中国", "广西壮族自治区", "来宾市", "武宣县"], ["451324", "中国", "广西壮族自治区", "来宾市", "金秀瑶族自治县"], ["451381", "中国", "广西壮族自治区", "来宾市", "合山市"], ["451400", "中国", "广西壮族自治区", "崇左市"], ["451402", "中国", "广西壮族自治区", "崇左市", "江州区"], ["451421", "中国", "广西壮族自治区", "崇左市", "扶绥县"], ["451422", "中国", "广西壮族自治区", "崇左市", "宁明县"], ["451423", "中国", "广西壮族自治区", "崇左市", "龙州县"], ["451424", "中国", "广西壮族自治区", "崇左市", "大新县"], ["451425", "中国", "广西壮族自治区", "崇左市", "天等县"], ["451481", "中国", "广西壮族自治区", "崇左市", "凭祥市"], ["460000", "中国", "海南省"], ["460100", "中国", "海南省", "海口市"], ["460105", "中国", "海南省", "海口市", "秀英区"], ["460106", "中国", "海南省", "海口市", "龙华区"], ["460107", "中国", "海南省", "海口市", "琼山区"], ["460108", "中国", "海南省", "海口市", "美兰区"], ["460200", "中国", "海南省", "三亚市"], ["460202", "中国", "海南省", "三亚市", "海棠区"], ["460203", "中国", "海南省", "三亚市", "吉阳区"], ["460204", "中国", "海南省", "三亚市", "天涯区"], ["460205", "中国", "海南省", "三亚市", "崖州区"], ["460300", "中国", "海南省", "三沙市"], ["460321", "中国", "海南省", "三沙市", "西沙群岛"], ["460322", "中国", "海南省", "三沙市", "南沙群岛"], ["460323", "中国", "海南省", "三沙市", "中沙群岛的岛礁及其海域"], ["460400", "中国", "海南省", "儋州市"], ["469001", "中国", "海南省", "五指山市", "五指山市"], ["469002", "中国", "海南省", "琼海市", "琼海市"], ["469005", "中国", "海南省", "文昌市", "文昌市"], ["469006", "中国", "海南省", "万宁市", "万宁市"], ["469007", "中国", "海南省", "东方市", "东方市"], ["469021", "中国", "海南省", "定安县", "定安县"], ["469022", "中国", "海南省", "屯昌县", "屯昌县"], ["469023", "中国", "海南省", "澄迈县", "澄迈县"], ["469024", "中国", "海南省", "临高县", "临高县"], ["469025", "中国", "海南省", "白沙黎族自治县", "白沙黎族自治县"], ["469026", "中国", "海南省", "昌江黎族自治县", "昌江黎族自治县"], ["469027", "中国", "海南省", "乐东黎族自治县", "乐东黎族自治县"], ["469028", "中国", "海南省", "陵水黎族自治县", "陵水黎族自治县"], ["469029", "中国", "海南省", "保亭黎族苗族自治县", "保亭黎族苗族自治县"], ["469030", "中国", "海南省", "琼中黎族苗族自治县", "琼中黎族苗族自治县"], ["500000", "中国", "", "重庆市"], ["500101", "中国", "", "重庆市", "万州区"], ["500102", "中国", "", "重庆市", "涪陵区"], ["500103", "中国", "", "重庆市", "渝中区"], ["500104", "中国", "", "重庆市", "大渡口区"], ["500105", "中国", "", "重庆市", "江北区"], ["500106", "中国", "", "重庆市", "沙坪坝区"], ["500107", "中国", "", "重庆市", "九龙坡区"], ["500108", "中国", "", "重庆市", "南岸区"], ["500109", "中国", "", "重庆市", "北碚区"], ["500110", "中国", "", "重庆市", "綦江区"], ["500111", "中国", "", "重庆市", "大足区"], ["500112", "中国", "", "重庆市", "渝北区"], ["500113", "中国", "", "重庆市", "巴南区"], ["500114", "中国", "", "重庆市", "黔江区"], ["500115", "中国", "", "重庆市", "长寿区"], ["500116", "中国", "", "重庆市", "江津区"], ["500117", "中国", "", "重庆市", "合川区"], ["500118", "中国", "", "重庆市", "永川区"], ["500119", "中国", "", "重庆市", "南川区"], ["500120", "中国", "", "重庆市", "璧山区"], ["500151", "中国", "", "重庆市", "铜梁区"], ["500152", "中国", "", "重庆市", "潼南区"], ["500153", "中国", "", "重庆市", "荣昌区"], ["500154", "中国", "", "重庆市", "开州区"], ["500155", "中国", "", "重庆市", "梁平区"], ["500156", "中国", "", "重庆市", "武隆区"], ["500229", "中国", "", "重庆市", "城口县"], ["500230", "中国", "", "重庆市", "丰都县"], ["500231", "中国", "", "重庆市", "垫江县"], ["500233", "中国", "", "重庆市", "忠县"], ["500235", "中国", "", "重庆市", "云阳县"], ["500236", "中国", "", "重庆市", "奉节县"], ["500237", "中国", "", "重庆市", "巫山县"], ["500238", "中国", "", "重庆市", "巫溪县"], ["500240", "中国", "", "重庆市", "石柱土家族自治县"], ["500241", "中国", "", "重庆市", "秀山土家族苗族自治县"], ["500242", "中国", "", "重庆市", "酉阳土家族苗族自治县"], ["500243", "中国", "", "重庆市", "彭水苗族土家族自治县"], ["510000", "中国", "四川省"], ["510100", "中国", "四川省", "成都市"], ["510104", "中国", "四川省", "成都市", "锦江区"], ["510105", "中国", "四川省", "成都市", "青羊区"], ["510106", "中国", "四川省", "成都市", "金牛区"], ["510107", "中国", "四川省", "成都市", "武侯区"], ["510108", "中国", "四川省", "成都市", "成华区"], ["510112", "中国", "四川省", "成都市", "龙泉驿区"], ["510113", "中国", "四川省", "成都市", "青白江区"], ["510114", "中国", "四川省", "成都市", "新都区"], ["510115", "中国", "四川省", "成都市", "温江区"], ["510116", "中国", "四川省", "成都市", "双流区"], ["510117", "中国", "四川省", "成都市", "郫都区"], ["510121", "中国", "四川省", "成都市", "金堂县"], ["510129", "中国", "四川省", "成都市", "大邑县"], ["510131", "中国", "四川省", "成都市", "蒲江县"], ["510132", "中国", "四川省", "成都市", "新津县"], ["510181", "中国", "四川省", "成都市", "都江堰市"], ["510182", "中国", "四川省", "成都市", "彭州市"], ["510183", "中国", "四川省", "成都市", "邛崃市"], ["510184", "中国", "四川省", "成都市", "崇州市"], ["510185", "中国", "四川省", "成都市", "简阳市"], ["510300", "中国", "四川省", "自贡市"], ["510302", "中国", "四川省", "自贡市", "自流井区"], ["510303", "中国", "四川省", "自贡市", "贡井区"], ["510304", "中国", "四川省", "自贡市", "大安区"], ["510311", "中国", "四川省", "自贡市", "沿滩区"], ["510321", "中国", "四川省", "自贡市", "荣县"], ["510322", "中国", "四川省", "自贡市", "富顺县"], ["510400", "中国", "四川省", "攀枝花市"], ["510402", "中国", "四川省", "攀枝花市", "东区"], ["510403", "中国", "四川省", "攀枝花市", "西区"], ["510411", "中国", "四川省", "攀枝花市", "仁和区"], ["510421", "中国", "四川省", "攀枝花市", "米易县"], ["510422", "中国", "四川省", "攀枝花市", "盐边县"], ["510500", "中国", "四川省", "泸州市"], ["510502", "中国", "四川省", "泸州市", "江阳区"], ["510503", "中国", "四川省", "泸州市", "纳溪区"], ["510504", "中国", "四川省", "泸州市", "龙马潭区"], ["510521", "中国", "四川省", "泸州市", "泸县"], ["510522", "中国", "四川省", "泸州市", "合江县"], ["510524", "中国", "四川省", "泸州市", "叙永县"], ["510525", "中国", "四川省", "泸州市", "古蔺县"], ["510600", "中国", "四川省", "德阳市"], ["510603", "中国", "四川省", "德阳市", "旌阳区"], ["510623", "中国", "四川省", "德阳市", "中江县"], ["510626", "中国", "四川省", "德阳市", "罗江县"], ["510681", "中国", "四川省", "德阳市", "广汉市"], ["510682", "中国", "四川省", "德阳市", "什邡市"], ["510683", "中国", "四川省", "德阳市", "绵竹市"], ["510700", "中国", "四川省", "绵阳市"], ["510703", "中国", "四川省", "绵阳市", "涪城区"], ["510704", "中国", "四川省", "绵阳市", "游仙区"], ["510705", "中国", "四川省", "绵阳市", "安州区"], ["510722", "中国", "四川省", "绵阳市", "三台县"], ["510723", "中国", "四川省", "绵阳市", "盐亭县"], ["510725", "中国", "四川省", "绵阳市", "梓潼县"], ["510726", "中国", "四川省", "绵阳市", "北川羌族自治县"], ["510727", "中国", "四川省", "绵阳市", "平武县"], ["510781", "中国", "四川省", "绵阳市", "江油市"], ["510800", "中国", "四川省", "广元市"], ["510802", "中国", "四川省", "广元市", "利州区"], ["510811", "中国", "四川省", "广元市", "昭化区"], ["510812", "中国", "四川省", "广元市", "朝天区"], ["510821", "中国", "四川省", "广元市", "旺苍县"], ["510822", "中国", "四川省", "广元市", "青川县"], ["510823", "中国", "四川省", "广元市", "剑阁县"], ["510824", "中国", "四川省", "广元市", "苍溪县"], ["510900", "中国", "四川省", "遂宁市"], ["510903", "中国", "四川省", "遂宁市", "船山区"], ["510904", "中国", "四川省", "遂宁市", "安居区"], ["510921", "中国", "四川省", "遂宁市", "蓬溪县"], ["510922", "中国", "四川省", "遂宁市", "射洪县"], ["510923", "中国", "四川省", "遂宁市", "大英县"], ["511000", "中国", "四川省", "内江市"], ["511002", "中国", "四川省", "内江市", "市中区"], ["511011", "中国", "四川省", "内江市", "东兴区"], ["511024", "中国", "四川省", "内江市", "威远县"], ["511025", "中国", "四川省", "内江市", "资中县"], ["511083", "中国", "四川省", "内江市", "隆昌市"], ["511100", "中国", "四川省", "乐山市"], ["511102", "中国", "四川省", "乐山市", "市中区"], ["511111", "中国", "四川省", "乐山市", "沙湾区"], ["511112", "中国", "四川省", "乐山市", "五通桥区"], ["511113", "中国", "四川省", "乐山市", "金口河区"], ["511123", "中国", "四川省", "乐山市", "犍为县"], ["511124", "中国", "四川省", "乐山市", "井研县"], ["511126", "中国", "四川省", "乐山市", "夹江县"], ["511129", "中国", "四川省", "乐山市", "沐川县"], ["511132", "中国", "四川省", "乐山市", "峨边彝族自治县"], ["511133", "中国", "四川省", "乐山市", "马边彝族自治县"], ["511181", "中国", "四川省", "乐山市", "峨眉山市"], ["511300", "中国", "四川省", "南充市"], ["511302", "中国", "四川省", "南充市", "顺庆区"], ["511303", "中国", "四川省", "南充市", "高坪区"], ["511304", "中国", "四川省", "南充市", "嘉陵区"], ["511321", "中国", "四川省", "南充市", "南部县"], ["511322", "中国", "四川省", "南充市", "营山县"], ["511323", "中国", "四川省", "南充市", "蓬安县"], ["511324", "中国", "四川省", "南充市", "仪陇县"], ["511325", "中国", "四川省", "南充市", "西充县"], ["511381", "中国", "四川省", "南充市", "阆中市"], ["511400", "中国", "四川省", "眉山市"], ["511402", "中国", "四川省", "眉山市", "东坡区"], ["511403", "中国", "四川省", "眉山市", "彭山区"], ["511421", "中国", "四川省", "眉山市", "仁寿县"], ["511423", "中国", "四川省", "眉山市", "洪雅县"], ["511424", "中国", "四川省", "眉山市", "丹棱县"], ["511425", "中国", "四川省", "眉山市", "青神县"], ["511500", "中国", "四川省", "宜宾市"], ["511502", "中国", "四川省", "宜宾市", "翠屏区"], ["511503", "中国", "四川省", "宜宾市", "南溪区"], ["511521", "中国", "四川省", "宜宾市", "宜宾县"], ["511523", "中国", "四川省", "宜宾市", "江安县"], ["511524", "中国", "四川省", "宜宾市", "长宁县"], ["511525", "中国", "四川省", "宜宾市", "高县"], ["511526", "中国", "四川省", "宜宾市", "珙县"], ["511527", "中国", "四川省", "宜宾市", "筠连县"], ["511528", "中国", "四川省", "宜宾市", "兴文县"], ["511529", "中国", "四川省", "宜宾市", "屏山县"], ["511600", "中国", "四川省", "广安市"], ["511602", "中国", "四川省", "广安市", "广安区"], ["511603", "中国", "四川省", "广安市", "前锋区"], ["511621", "中国", "四川省", "广安市", "岳池县"], ["511622", "中国", "四川省", "广安市", "武胜县"], ["511623", "中国", "四川省", "广安市", "邻水县"], ["511681", "中国", "四川省", "广安市", "华蓥市"], ["511700", "中国", "四川省", "达州市"], ["511702", "中国", "四川省", "达州市", "通川区"], ["511703", "中国", "四川省", "达州市", "达川区"], ["511722", "中国", "四川省", "达州市", "宣汉县"], ["511723", "中国", "四川省", "达州市", "开江县"], ["511724", "中国", "四川省", "达州市", "大竹县"], ["511725", "中国", "四川省", "达州市", "渠县"], ["511781", "中国", "四川省", "达州市", "万源市"], ["511800", "中国", "四川省", "雅安市"], ["511802", "中国", "四川省", "雅安市", "雨城区"], ["511803", "中国", "四川省", "雅安市", "名山区"], ["511822", "中国", "四川省", "雅安市", "荥经县"], ["511823", "中国", "四川省", "雅安市", "汉源县"], ["511824", "中国", "四川省", "雅安市", "石棉县"], ["511825", "中国", "四川省", "雅安市", "天全县"], ["511826", "中国", "四川省", "雅安市", "芦山县"], ["511827", "中国", "四川省", "雅安市", "宝兴县"], ["511900", "中国", "四川省", "巴中市"], ["511902", "中国", "四川省", "巴中市", "巴州区"], ["511903", "中国", "四川省", "巴中市", "恩阳区"], ["511921", "中国", "四川省", "巴中市", "通江县"], ["511922", "中国", "四川省", "巴中市", "南江县"], ["511923", "中国", "四川省", "巴中市", "平昌县"], ["512000", "中国", "四川省", "资阳市"], ["512002", "中国", "四川省", "资阳市", "雁江区"], ["512021", "中国", "四川省", "资阳市", "安岳县"], ["512022", "中国", "四川省", "资阳市", "乐至县"], ["513200", "中国", "四川省", "阿坝藏族羌族自治州"], ["513201", "中国", "四川省", "阿坝藏族羌族自治州", "马尔康市"], ["513221", "中国", "四川省", "阿坝藏族羌族自治州", "汶川县"], ["513222", "中国", "四川省", "阿坝藏族羌族自治州", "理县"], ["513223", "中国", "四川省", "阿坝藏族羌族自治州", "茂县"], ["513224", "中国", "四川省", "阿坝藏族羌族自治州", "松潘县"], ["513225", "中国", "四川省", "阿坝藏族羌族自治州", "九寨沟县"], ["513226", "中国", "四川省", "阿坝藏族羌族自治州", "金川县"], ["513227", "中国", "四川省", "阿坝藏族羌族自治州", "小金县"], ["513228", "中国", "四川省", "阿坝藏族羌族自治州", "黑水县"], ["513230", "中国", "四川省", "阿坝藏族羌族自治州", "壤塘县"], ["513231", "中国", "四川省", "阿坝藏族羌族自治州", "阿坝县"], ["513232", "中国", "四川省", "阿坝藏族羌族自治州", "若尔盖县"], ["513233", "中国", "四川省", "阿坝藏族羌族自治州", "红原县"], ["513300", "中国", "四川省", "甘孜藏族自治州"], ["513301", "中国", "四川省", "甘孜藏族自治州", "康定市"], ["513322", "中国", "四川省", "甘孜藏族自治州", "泸定县"], ["513323", "中国", "四川省", "甘孜藏族自治州", "丹巴县"], ["513324", "中国", "四川省", "甘孜藏族自治州", "九龙县"], ["513325", "中国", "四川省", "甘孜藏族自治州", "雅江县"], ["513326", "中国", "四川省", "甘孜藏族自治州", "道孚县"], ["513327", "中国", "四川省", "甘孜藏族自治州", "炉霍县"], ["513328", "中国", "四川省", "甘孜藏族自治州", "甘孜县"], ["513329", "中国", "四川省", "甘孜藏族自治州", "新龙县"], ["513330", "中国", "四川省", "甘孜藏族自治州", "德格县"], ["513331", "中国", "四川省", "甘孜藏族自治州", "白玉县"], ["513332", "中国", "四川省", "甘孜藏族自治州", "石渠县"], ["513333", "中国", "四川省", "甘孜藏族自治州", "色达县"], ["513334", "中国", "四川省", "甘孜藏族自治州", "理塘县"], ["513335", "中国", "四川省", "甘孜藏族自治州", "巴塘县"], ["513336", "中国", "四川省", "甘孜藏族自治州", "乡城县"], ["513337", "中国", "四川省", "甘孜藏族自治州", "稻城县"], ["513338", "中国", "四川省", "甘孜藏族自治州", "得荣县"], ["513400", "中国", "四川省", "凉山彝族自治州"], ["513401", "中国", "四川省", "凉山彝族自治州", "西昌市"], ["513422", "中国", "四川省", "凉山彝族自治州", "木里藏族自治县"], ["513423", "中国", "四川省", "凉山彝族自治州", "盐源县"], ["513424", "中国", "四川省", "凉山彝族自治州", "德昌县"], ["513425", "中国", "四川省", "凉山彝族自治州", "会理县"], ["513426", "中国", "四川省", "凉山彝族自治州", "会东县"], ["513427", "中国", "四川省", "凉山彝族自治州", "宁南县"], ["513428", "中国", "四川省", "凉山彝族自治州", "普格县"], ["513429", "中国", "四川省", "凉山彝族自治州", "布拖县"], ["513430", "中国", "四川省", "凉山彝族自治州", "金阳县"], ["513431", "中国", "四川省", "凉山彝族自治州", "昭觉县"], ["513432", "中国", "四川省", "凉山彝族自治州", "喜德县"], ["513433", "中国", "四川省", "凉山彝族自治州", "冕宁县"], ["513434", "中国", "四川省", "凉山彝族自治州", "越西县"], ["513435", "中国", "四川省", "凉山彝族自治州", "甘洛县"], ["513436", "中国", "四川省", "凉山彝族自治州", "美姑县"], ["513437", "中国", "四川省", "凉山彝族自治州", "雷波县"], ["520000", "中国", "贵州省"], ["520100", "中国", "贵州省", "贵阳市"], ["520102", "中国", "贵州省", "贵阳市", "南明区"], ["520103", "中国", "贵州省", "贵阳市", "云岩区"], ["520111", "中国", "贵州省", "贵阳市", "花溪区"], ["520112", "中国", "贵州省", "贵阳市", "乌当区"], ["520113", "中国", "贵州省", "贵阳市", "白云区"], ["520115", "中国", "贵州省", "贵阳市", "观山湖区"], ["520121", "中国", "贵州省", "贵阳市", "开阳县"], ["520122", "中国", "贵州省", "贵阳市", "息烽县"], ["520123", "中国", "贵州省", "贵阳市", "修文县"], ["520181", "中国", "贵州省", "贵阳市", "清镇市"], ["520200", "中国", "贵州省", "六盘水市"], ["520201", "中国", "贵州省", "六盘水市", "钟山区"], ["520203", "中国", "贵州省", "六盘水市", "六枝特区"], ["520221", "中国", "贵州省", "六盘水市", "水城县"], ["520281", "中国", "贵州省", "六盘水市", "盘州市"], ["520300", "中国", "贵州省", "遵义市"], ["520302", "中国", "贵州省", "遵义市", "红花岗区"], ["520303", "中国", "贵州省", "遵义市", "汇川区"], ["520304", "中国", "贵州省", "遵义市", "播州区"], ["520322", "中国", "贵州省", "遵义市", "桐梓县"], ["520323", "中国", "贵州省", "遵义市", "绥阳县"], ["520324", "中国", "贵州省", "遵义市", "正安县"], ["520325", "中国", "贵州省", "遵义市", "道真仡佬族苗族自治县"], ["520326", "中国", "贵州省", "遵义市", "务川仡佬族苗族自治县"], ["520327", "中国", "贵州省", "遵义市", "凤冈县"], ["520328", "中国", "贵州省", "遵义市", "湄潭县"], ["520329", "中国", "贵州省", "遵义市", "余庆县"], ["520330", "中国", "贵州省", "遵义市", "习水县"], ["520381", "中国", "贵州省", "遵义市", "赤水市"], ["520382", "中国", "贵州省", "遵义市", "仁怀市"], ["520400", "中国", "贵州省", "安顺市"], ["520402", "中国", "贵州省", "安顺市", "西秀区"], ["520403", "中国", "贵州省", "安顺市", "平坝区"], ["520422", "中国", "贵州省", "安顺市", "普定县"], ["520423", "中国", "贵州省", "安顺市", "镇宁布依族苗族自治县"], ["520424", "中国", "贵州省", "安顺市", "关岭布依族苗族自治县"], ["520425", "中国", "贵州省", "安顺市", "紫云苗族布依族自治县"], ["520500", "中国", "贵州省", "毕节市"], ["520502", "中国", "贵州省", "毕节市", "七星关区"], ["520521", "中国", "贵州省", "毕节市", "大方县"], ["520522", "中国", "贵州省", "毕节市", "黔西县"], ["520523", "中国", "贵州省", "毕节市", "金沙县"], ["520524", "中国", "贵州省", "毕节市", "织金县"], ["520525", "中国", "贵州省", "毕节市", "纳雍县"], ["520526", "中国", "贵州省", "毕节市", "威宁彝族回族苗族自治县"], ["520527", "中国", "贵州省", "毕节市", "赫章县"], ["520600", "中国", "贵州省", "铜仁市"], ["520602", "中国", "贵州省", "铜仁市", "碧江区"], ["520603", "中国", "贵州省", "铜仁市", "万山区"], ["520621", "中国", "贵州省", "铜仁市", "江口县"], ["520622", "中国", "贵州省", "铜仁市", "玉屏侗族自治县"], ["520623", "中国", "贵州省", "铜仁市", "石阡县"], ["520624", "中国", "贵州省", "铜仁市", "思南县"], ["520625", "中国", "贵州省", "铜仁市", "印江土家族苗族自治县"], ["520626", "中国", "贵州省", "铜仁市", "德江县"], ["520627", "中国", "贵州省", "铜仁市", "沿河土家族自治县"], ["520628", "中国", "贵州省", "铜仁市", "松桃苗族自治县"], ["522300", "中国", "贵州省", "黔西南布依族苗族自治州"], ["522301", "中国", "贵州省", "黔西南布依族苗族自治州", "兴义市"], ["522322", "中国", "贵州省", "黔西南布依族苗族自治州", "兴仁县"], ["522323", "中国", "贵州省", "黔西南布依族苗族自治州", "普安县"], ["522324", "中国", "贵州省", "黔西南布依族苗族自治州", "晴隆县"], ["522325", "中国", "贵州省", "黔西南布依族苗族自治州", "贞丰县"], ["522326", "中国", "贵州省", "黔西南布依族苗族自治州", "望谟县"], ["522327", "中国", "贵州省", "黔西南布依族苗族自治州", "册亨县"], ["522328", "中国", "贵州省", "黔西南布依族苗族自治州", "安龙县"], ["522600", "中国", "贵州省", "黔东南苗族侗族自治州"], ["522601", "中国", "贵州省", "黔东南苗族侗族自治州", "凯里市"], ["522622", "中国", "贵州省", "黔东南苗族侗族自治州", "黄平县"], ["522623", "中国", "贵州省", "黔东南苗族侗族自治州", "施秉县"], ["522624", "中国", "贵州省", "黔东南苗族侗族自治州", "三穗县"], ["522625", "中国", "贵州省", "黔东南苗族侗族自治州", "镇远县"], ["522626", "中国", "贵州省", "黔东南苗族侗族自治州", "岑巩县"], ["522627", "中国", "贵州省", "黔东南苗族侗族自治州", "天柱县"], ["522628", "中国", "贵州省", "黔东南苗族侗族自治州", "锦屏县"], ["522629", "中国", "贵州省", "黔东南苗族侗族自治州", "剑河县"], ["522630", "中国", "贵州省", "黔东南苗族侗族自治州", "台江县"], ["522631", "中国", "贵州省", "黔东南苗族侗族自治州", "黎平县"], ["522632", "中国", "贵州省", "黔东南苗族侗族自治州", "榕江县"], ["522633", "中国", "贵州省", "黔东南苗族侗族自治州", "从江县"], ["522634", "中国", "贵州省", "黔东南苗族侗族自治州", "雷山县"], ["522635", "中国", "贵州省", "黔东南苗族侗族自治州", "麻江县"], ["522636", "中国", "贵州省", "黔东南苗族侗族自治州", "丹寨县"], ["522700", "中国", "贵州省", "黔南布依族苗族自治州"], ["522701", "中国", "贵州省", "黔南布依族苗族自治州", "都匀市"], ["522702", "中国", "贵州省", "黔南布依族苗族自治州", "福泉市"], ["522722", "中国", "贵州省", "黔南布依族苗族自治州", "荔波县"], ["522723", "中国", "贵州省", "黔南布依族苗族自治州", "贵定县"], ["522725", "中国", "贵州省", "黔南布依族苗族自治州", "瓮安县"], ["522726", "中国", "贵州省", "黔南布依族苗族自治州", "独山县"], ["522727", "中国", "贵州省", "黔南布依族苗族自治州", "平塘县"], ["522728", "中国", "贵州省", "黔南布依族苗族自治州", "罗甸县"], ["522729", "中国", "贵州省", "黔南布依族苗族自治州", "长顺县"], ["522730", "中国", "贵州省", "黔南布依族苗族自治州", "龙里县"], ["522731", "中国", "贵州省", "黔南布依族苗族自治州", "惠水县"], ["522732", "中国", "贵州省", "黔南布依族苗族自治州", "三都水族自治县"], ["530000", "中国", "云南省"], ["530100", "中国", "云南省", "昆明市"], ["530102", "中国", "云南省", "昆明市", "五华区"], ["530103", "中国", "云南省", "昆明市", "盘龙区"], ["530111", "中国", "云南省", "昆明市", "官渡区"], ["530112", "中国", "云南省", "昆明市", "西山区"], ["530113", "中国", "云南省", "昆明市", "东川区"], ["530114", "中国", "云南省", "昆明市", "呈贡区"], ["530115", "中国", "云南省", "昆明市", "晋宁区"], ["530124", "中国", "云南省", "昆明市", "富民县"], ["530125", "中国", "云南省", "昆明市", "宜良县"], ["530126", "中国", "云南省", "昆明市", "石林彝族自治县"], ["530127", "中国", "云南省", "昆明市", "嵩明县"], ["530128", "中国", "云南省", "昆明市", "禄劝彝族苗族自治县"], ["530129", "中国", "云南省", "昆明市", "寻甸回族彝族自治县"], ["530181", "中国", "云南省", "昆明市", "安宁市"], ["530300", "中国", "云南省", "曲靖市"], ["530302", "中国", "云南省", "曲靖市", "麒麟区"], ["530303", "中国", "云南省", "曲靖市", "沾益区"], ["530321", "中国", "云南省", "曲靖市", "马龙县"], ["530322", "中国", "云南省", "曲靖市", "陆良县"], ["530323", "中国", "云南省", "曲靖市", "师宗县"], ["530324", "中国", "云南省", "曲靖市", "罗平县"], ["530325", "中国", "云南省", "曲靖市", "富源县"], ["530326", "中国", "云南省", "曲靖市", "会泽县"], ["530381", "中国", "云南省", "曲靖市", "宣威市"], ["530400", "中国", "云南省", "玉溪市"], ["530402", "中国", "云南省", "玉溪市", "红塔区"], ["530403", "中国", "云南省", "玉溪市", "江川区"], ["530422", "中国", "云南省", "玉溪市", "澄江县"], ["530423", "中国", "云南省", "玉溪市", "通海县"], ["530424", "中国", "云南省", "玉溪市", "华宁县"], ["530425", "中国", "云南省", "玉溪市", "易门县"], ["530426", "中国", "云南省", "玉溪市", "峨山彝族自治县"], ["530427", "中国", "云南省", "玉溪市", "新平彝族傣族自治县"], ["530428", "中国", "云南省", "玉溪市", "元江哈尼族彝族傣族自治县"], ["530500", "中国", "云南省", "保山市"], ["530502", "中国", "云南省", "保山市", "隆阳区"], ["530521", "中国", "云南省", "保山市", "施甸县"], ["530523", "中国", "云南省", "保山市", "龙陵县"], ["530524", "中国", "云南省", "保山市", "昌宁县"], ["530581", "中国", "云南省", "保山市", "腾冲市"], ["530600", "中国", "云南省", "昭通市"], ["530602", "中国", "云南省", "昭通市", "昭阳区"], ["530621", "中国", "云南省", "昭通市", "鲁甸县"], ["530622", "中国", "云南省", "昭通市", "巧家县"], ["530623", "中国", "云南省", "昭通市", "盐津县"], ["530624", "中国", "云南省", "昭通市", "大关县"], ["530625", "中国", "云南省", "昭通市", "永善县"], ["530626", "中国", "云南省", "昭通市", "绥江县"], ["530627", "中国", "云南省", "昭通市", "镇雄县"], ["530628", "中国", "云南省", "昭通市", "彝良县"], ["530629", "中国", "云南省", "昭通市", "威信县"], ["530630", "中国", "云南省", "昭通市", "水富县"], ["530700", "中国", "云南省", "丽江市"], ["530702", "中国", "云南省", "丽江市", "古城区"], ["530721", "中国", "云南省", "丽江市", "玉龙纳西族自治县"], ["530722", "中国", "云南省", "丽江市", "永胜县"], ["530723", "中国", "云南省", "丽江市", "华坪县"], ["530724", "中国", "云南省", "丽江市", "宁蒗彝族自治县"], ["530800", "中国", "云南省", "普洱市"], ["530802", "中国", "云南省", "普洱市", "思茅区"], ["530821", "中国", "云南省", "普洱市", "宁洱哈尼族彝族自治县"], ["530822", "中国", "云南省", "普洱市", "墨江哈尼族自治县"], ["530823", "中国", "云南省", "普洱市", "景东彝族自治县"], ["530824", "中国", "云南省", "普洱市", "景谷傣族彝族自治县"], ["530825", "中国", "云南省", "普洱市", "镇沅彝族哈尼族拉祜族自治县"], ["530826", "中国", "云南省", "普洱市", "江城哈尼族彝族自治县"], ["530827", "中国", "云南省", "普洱市", "孟连傣族拉祜族佤族自治县"], ["530828", "中国", "云南省", "普洱市", "澜沧拉祜族自治县"], ["530829", "中国", "云南省", "普洱市", "西盟佤族自治县"], ["530900", "中国", "云南省", "临沧市"], ["530902", "中国", "云南省", "临沧市", "临翔区"], ["530921", "中国", "云南省", "临沧市", "凤庆县"], ["530922", "中国", "云南省", "临沧市", "云县"], ["530923", "中国", "云南省", "临沧市", "永德县"], ["530924", "中国", "云南省", "临沧市", "镇康县"], ["530925", "中国", "云南省", "临沧市", "双江拉祜族佤族布朗族傣族自治县"], ["530926", "中国", "云南省", "临沧市", "耿马傣族佤族自治县"], ["530927", "中国", "云南省", "临沧市", "沧源佤族自治县"], ["532300", "中国", "云南省", "楚雄彝族自治州"], ["532301", "中国", "云南省", "楚雄彝族自治州", "楚雄市"], ["532322", "中国", "云南省", "楚雄彝族自治州", "双柏县"], ["532323", "中国", "云南省", "楚雄彝族自治州", "牟定县"], ["532324", "中国", "云南省", "楚雄彝族自治州", "南华县"], ["532325", "中国", "云南省", "楚雄彝族自治州", "姚安县"], ["532326", "中国", "云南省", "楚雄彝族自治州", "大姚县"], ["532327", "中国", "云南省", "楚雄彝族自治州", "永仁县"], ["532328", "中国", "云南省", "楚雄彝族自治州", "元谋县"], ["532329", "中国", "云南省", "楚雄彝族自治州", "武定县"], ["532331", "中国", "云南省", "楚雄彝族自治州", "禄丰县"], ["532500", "中国", "云南省", "红河哈尼族彝族自治州"], ["532501", "中国", "云南省", "红河哈尼族彝族自治州", "个旧市"], ["532502", "中国", "云南省", "红河哈尼族彝族自治州", "开远市"], ["532503", "中国", "云南省", "红河哈尼族彝族自治州", "蒙自市"], ["532504", "中国", "云南省", "红河哈尼族彝族自治州", "弥勒市"], ["532523", "中国", "云南省", "红河哈尼族彝族自治州", "屏边苗族自治县"], ["532524", "中国", "云南省", "红河哈尼族彝族自治州", "建水县"], ["532525", "中国", "云南省", "红河哈尼族彝族自治州", "石屏县"], ["532527", "中国", "云南省", "红河哈尼族彝族自治州", "泸西县"], ["532528", "中国", "云南省", "红河哈尼族彝族自治州", "元阳县"], ["532529", "中国", "云南省", "红河哈尼族彝族自治州", "红河县"], ["532530", "中国", "云南省", "红河哈尼族彝族自治州", "金平苗族瑶族傣族自治县"], ["532531", "中国", "云南省", "红河哈尼族彝族自治州", "绿春县"], ["532532", "中国", "云南省", "红河哈尼族彝族自治州", "河口瑶族自治县"], ["532600", "中国", "云南省", "文山壮族苗族自治州"], ["532601", "中国", "云南省", "文山壮族苗族自治州", "文山市"], ["532622", "中国", "云南省", "文山壮族苗族自治州", "砚山县"], ["532623", "中国", "云南省", "文山壮族苗族自治州", "西畴县"], ["532624", "中国", "云南省", "文山壮族苗族自治州", "麻栗坡县"], ["532625", "中国", "云南省", "文山壮族苗族自治州", "马关县"], ["532626", "中国", "云南省", "文山壮族苗族自治州", "丘北县"], ["532627", "中国", "云南省", "文山壮族苗族自治州", "广南县"], ["532628", "中国", "云南省", "文山壮族苗族自治州", "富宁县"], ["532800", "中国", "云南省", "西双版纳傣族自治州"], ["532801", "中国", "云南省", "西双版纳傣族自治州", "景洪市"], ["532822", "中国", "云南省", "西双版纳傣族自治州", "勐海县"], ["532823", "中国", "云南省", "西双版纳傣族自治州", "勐腊县"], ["532900", "中国", "云南省", "大理白族自治州"], ["532901", "中国", "云南省", "大理白族自治州", "大理市"], ["532922", "中国", "云南省", "大理白族自治州", "漾濞彝族自治县"], ["532923", "中国", "云南省", "大理白族自治州", "祥云县"], ["532924", "中国", "云南省", "大理白族自治州", "宾川县"], ["532925", "中国", "云南省", "大理白族自治州", "弥渡县"], ["532926", "中国", "云南省", "大理白族自治州", "南涧彝族自治县"], ["532927", "中国", "云南省", "大理白族自治州", "巍山彝族回族自治县"], ["532928", "中国", "云南省", "大理白族自治州", "永平县"], ["532929", "中国", "云南省", "大理白族自治州", "云龙县"], ["532930", "中国", "云南省", "大理白族自治州", "洱源县"], ["532931", "中国", "云南省", "大理白族自治州", "剑川县"], ["532932", "中国", "云南省", "大理白族自治州", "鹤庆县"], ["533100", "中国", "云南省", "德宏傣族景颇族自治州"], ["533102", "中国", "云南省", "德宏傣族景颇族自治州", "瑞丽市"], ["533103", "中国", "云南省", "德宏傣族景颇族自治州", "芒市"], ["533122", "中国", "云南省", "德宏傣族景颇族自治州", "梁河县"], ["533123", "中国", "云南省", "德宏傣族景颇族自治州", "盈江县"], ["533124", "中国", "云南省", "德宏傣族景颇族自治州", "陇川县"], ["533300", "中国", "云南省", "怒江傈僳族自治州"], ["533301", "中国", "云南省", "怒江傈僳族自治州", "泸水市"], ["533323", "中国", "云南省", "怒江傈僳族自治州", "福贡县"], ["533324", "中国", "云南省", "怒江傈僳族自治州", "贡山独龙族怒族自治县"], ["533325", "中国", "云南省", "怒江傈僳族自治州", "兰坪白族普米族自治县"], ["533400", "中国", "云南省", "迪庆藏族自治州"], ["533401", "中国", "云南省", "迪庆藏族自治州", "香格里拉市"], ["533422", "中国", "云南省", "迪庆藏族自治州", "德钦县"], ["533423", "中国", "云南省", "迪庆藏族自治州", "维西傈僳族自治县"], ["540000", "中国", "西藏自治区"], ["540100", "中国", "西藏自治区", "拉萨市"], ["540102", "中国", "西藏自治区", "拉萨市", "城关区"], ["540103", "中国", "西藏自治区", "拉萨市", "堆龙德庆区"], ["540121", "中国", "西藏自治区", "拉萨市", "林周县"], ["540122", "中国", "西藏自治区", "拉萨市", "当雄县"], ["540123", "中国", "西藏自治区", "拉萨市", "尼木县"], ["540124", "中国", "西藏自治区", "拉萨市", "曲水县"], ["540126", "中国", "西藏自治区", "拉萨市", "达孜县"], ["540127", "中国", "西藏自治区", "拉萨市", "墨竹工卡县"], ["540200", "中国", "西藏自治区", "日喀则市"], ["540202", "中国", "西藏自治区", "日喀则市", "桑珠孜区"], ["540221", "中国", "西藏自治区", "日喀则市", "南木林县"], ["540222", "中国", "西藏自治区", "日喀则市", "江孜县"], ["540223", "中国", "西藏自治区", "日喀则市", "定日县"], ["540224", "中国", "西藏自治区", "日喀则市", "萨迦县"], ["540225", "中国", "西藏自治区", "日喀则市", "拉孜县"], ["540226", "中国", "西藏自治区", "日喀则市", "昂仁县"], ["540227", "中国", "西藏自治区", "日喀则市", "谢通门县"], ["540228", "中国", "西藏自治区", "日喀则市", "白朗县"], ["540229", "中国", "西藏自治区", "日喀则市", "仁布县"], ["540230", "中国", "西藏自治区", "日喀则市", "康马县"], ["540231", "中国", "西藏自治区", "日喀则市", "定结县"], ["540232", "中国", "西藏自治区", "日喀则市", "仲巴县"], ["540233", "中国", "西藏自治区", "日喀则市", "亚东县"], ["540234", "中国", "西藏自治区", "日喀则市", "吉隆县"], ["540235", "中国", "西藏自治区", "日喀则市", "聂拉木县"], ["540236", "中国", "西藏自治区", "日喀则市", "萨嘎县"], ["540237", "中国", "西藏自治区", "日喀则市", "岗巴县"], ["540300", "中国", "西藏自治区", "昌都市"], ["540302", "中国", "西藏自治区", "昌都市", "卡若区"], ["540321", "中国", "西藏自治区", "昌都市", "江达县"], ["540322", "中国", "西藏自治区", "昌都市", "贡觉县"], ["540323", "中国", "西藏自治区", "昌都市", "类乌齐县"], ["540324", "中国", "西藏自治区", "昌都市", "丁青县"], ["540325", "中国", "西藏自治区", "昌都市", "察雅县"], ["540326", "中国", "西藏自治区", "昌都市", "八宿县"], ["540327", "中国", "西藏自治区", "昌都市", "左贡县"], ["540328", "中国", "西藏自治区", "昌都市", "芒康县"], ["540329", "中国", "西藏自治区", "昌都市", "洛隆县"], ["540330", "中国", "西藏自治区", "昌都市", "边坝县"], ["540400", "中国", "西藏自治区", "林芝市"], ["540402", "中国", "西藏自治区", "林芝市", "巴宜区"], ["540421", "中国", "西藏自治区", "林芝市", "工布江达县"], ["540422", "中国", "西藏自治区", "林芝市", "米林县"], ["540423", "中国", "西藏自治区", "林芝市", "墨脱县"], ["540424", "中国", "西藏自治区", "林芝市", "波密县"], ["540425", "中国", "西藏自治区", "林芝市", "察隅县"], ["540426", "中国", "西藏自治区", "林芝市", "朗县"], ["540500", "中国", "西藏自治区", "山南市"], ["540502", "中国", "西藏自治区", "山南市", "乃东区"], ["540521", "中国", "西藏自治区", "山南市", "扎囊县"], ["540522", "中国", "西藏自治区", "山南市", "贡嘎县"], ["540523", "中国", "西藏自治区", "山南市", "桑日县"], ["540524", "中国", "西藏自治区", "山南市", "琼结县"], ["540525", "中国", "西藏自治区", "山南市", "曲松县"], ["540526", "中国", "西藏自治区", "山南市", "措美县"], ["540527", "中国", "西藏自治区", "山南市", "洛扎县"], ["540528", "中国", "西藏自治区", "山南市", "加查县"], ["540529", "中国", "西藏自治区", "山南市", "隆子县"], ["540530", "中国", "西藏自治区", "山南市", "错那县"], ["540531", "中国", "西藏自治区", "山南市", "浪卡子县"], ["542400", "中国", "西藏自治区", "那曲地区"], ["542421", "中国", "西藏自治区", "那曲地区", "那曲县"], ["542422", "中国", "西藏自治区", "那曲地区", "嘉黎县"], ["542423", "中国", "西藏自治区", "那曲地区", "比如县"], ["542424", "中国", "西藏自治区", "那曲地区", "聂荣县"], ["542425", "中国", "西藏自治区", "那曲地区", "安多县"], ["542426", "中国", "西藏自治区", "那曲地区", "申扎县"], ["542427", "中国", "西藏自治区", "那曲地区", "索县"], ["542428", "中国", "西藏自治区", "那曲地区", "班戈县"], ["542429", "中国", "西藏自治区", "那曲地区", "巴青县"], ["542430", "中国", "西藏自治区", "那曲地区", "尼玛县"], ["542431", "中国", "西藏自治区", "那曲地区", "双湖县"], ["542500", "中国", "西藏自治区", "阿里地区"], ["542521", "中国", "西藏自治区", "阿里地区", "普兰县"], ["542522", "中国", "西藏自治区", "阿里地区", "札达县"], ["542523", "中国", "西藏自治区", "阿里地区", "噶尔县"], ["542524", "中国", "西藏自治区", "阿里地区", "日土县"], ["542525", "中国", "西藏自治区", "阿里地区", "革吉县"], ["542526", "中国", "西藏自治区", "阿里地区", "改则县"], ["542527", "中国", "西藏自治区", "阿里地区", "措勤县"], ["610000", "中国", "陕西省"], ["610100", "中国", "陕西省", "西安市"], ["610102", "中国", "陕西省", "西安市", "新城区"], ["610103", "中国", "陕西省", "西安市", "碑林区"], ["610104", "中国", "陕西省", "西安市", "莲湖区"], ["610111", "中国", "陕西省", "西安市", "灞桥区"], ["610112", "中国", "陕西省", "西安市", "未央区"], ["610113", "中国", "陕西省", "西安市", "雁塔区"], ["610114", "中国", "陕西省", "西安市", "阎良区"], ["610115", "中国", "陕西省", "西安市", "临潼区"], ["610116", "中国", "陕西省", "西安市", "长安区"], ["610117", "中国", "陕西省", "西安市", "高陵区"], ["610118", "中国", "陕西省", "西安市", "鄠邑区"], ["610122", "中国", "陕西省", "西安市", "蓝田县"], ["610124", "中国", "陕西省", "西安市", "周至县"], ["610200", "中国", "陕西省", "铜川市"], ["610202", "中国", "陕西省", "铜川市", "王益区"], ["610203", "中国", "陕西省", "铜川市", "印台区"], ["610204", "中国", "陕西省", "铜川市", "耀州区"], ["610222", "中国", "陕西省", "铜川市", "宜君县"], ["610300", "中国", "陕西省", "宝鸡市"], ["610302", "中国", "陕西省", "宝鸡市", "渭滨区"], ["610303", "中国", "陕西省", "宝鸡市", "金台区"], ["610304", "中国", "陕西省", "宝鸡市", "陈仓区"], ["610322", "中国", "陕西省", "宝鸡市", "凤翔县"], ["610323", "中国", "陕西省", "宝鸡市", "岐山县"], ["610324", "中国", "陕西省", "宝鸡市", "扶风县"], ["610326", "中国", "陕西省", "宝鸡市", "眉县"], ["610327", "中国", "陕西省", "宝鸡市", "陇县"], ["610328", "中国", "陕西省", "宝鸡市", "千阳县"], ["610329", "中国", "陕西省", "宝鸡市", "麟游县"], ["610330", "中国", "陕西省", "宝鸡市", "凤县"], ["610331", "中国", "陕西省", "宝鸡市", "太白县"], ["610400", "中国", "陕西省", "咸阳市"], ["610402", "中国", "陕西省", "咸阳市", "秦都区"], ["610403", "中国", "陕西省", "咸阳市", "杨陵区"], ["610404", "中国", "陕西省", "咸阳市", "渭城区"], ["610422", "中国", "陕西省", "咸阳市", "三原县"], ["610423", "中国", "陕西省", "咸阳市", "泾阳县"], ["610424", "中国", "陕西省", "咸阳市", "乾县"], ["610425", "中国", "陕西省", "咸阳市", "礼泉县"], ["610426", "中国", "陕西省", "咸阳市", "永寿县"], ["610427", "中国", "陕西省", "咸阳市", "彬县"], ["610428", "中国", "陕西省", "咸阳市", "长武县"], ["610429", "中国", "陕西省", "咸阳市", "旬邑县"], ["610430", "中国", "陕西省", "咸阳市", "淳化县"], ["610431", "中国", "陕西省", "咸阳市", "武功县"], ["610481", "中国", "陕西省", "咸阳市", "兴平市"], ["610500", "中国", "陕西省", "渭南市"], ["610502", "中国", "陕西省", "渭南市", "临渭区"], ["610503", "中国", "陕西省", "渭南市", "华州区"], ["610522", "中国", "陕西省", "渭南市", "潼关县"], ["610523", "中国", "陕西省", "渭南市", "大荔县"], ["610524", "中国", "陕西省", "渭南市", "合阳县"], ["610525", "中国", "陕西省", "渭南市", "澄城县"], ["610526", "中国", "陕西省", "渭南市", "蒲城县"], ["610527", "中国", "陕西省", "渭南市", "白水县"], ["610528", "中国", "陕西省", "渭南市", "富平县"], ["610581", "中国", "陕西省", "渭南市", "韩城市"], ["610582", "中国", "陕西省", "渭南市", "华阴市"], ["610600", "中国", "陕西省", "延安市"], ["610602", "中国", "陕西省", "延安市", "宝塔区"], ["610603", "中国", "陕西省", "延安市", "安塞区"], ["610621", "中国", "陕西省", "延安市", "延长县"], ["610622", "中国", "陕西省", "延安市", "延川县"], ["610623", "中国", "陕西省", "延安市", "子长县"], ["610625", "中国", "陕西省", "延安市", "志丹县"], ["610626", "中国", "陕西省", "延安市", "吴起县"], ["610627", "中国", "陕西省", "延安市", "甘泉县"], ["610628", "中国", "陕西省", "延安市", "富县"], ["610629", "中国", "陕西省", "延安市", "洛川县"], ["610630", "中国", "陕西省", "延安市", "宜川县"], ["610631", "中国", "陕西省", "延安市", "黄龙县"], ["610632", "中国", "陕西省", "延安市", "黄陵县"], ["610700", "中国", "陕西省", "汉中市"], ["610702", "中国", "陕西省", "汉中市", "汉台区"], ["610721", "中国", "陕西省", "汉中市", "南郑县"], ["610722", "中国", "陕西省", "汉中市", "城固县"], ["610723", "中国", "陕西省", "汉中市", "洋县"], ["610724", "中国", "陕西省", "汉中市", "西乡县"], ["610725", "中国", "陕西省", "汉中市", "勉县"], ["610726", "中国", "陕西省", "汉中市", "宁强县"], ["610727", "中国", "陕西省", "汉中市", "略阳县"], ["610728", "中国", "陕西省", "汉中市", "镇巴县"], ["610729", "中国", "陕西省", "汉中市", "留坝县"], ["610730", "中国", "陕西省", "汉中市", "佛坪县"], ["610800", "中国", "陕西省", "榆林市"], ["610802", "中国", "陕西省", "榆林市", "榆阳区"], ["610803", "中国", "陕西省", "榆林市", "横山区"], ["610822", "中国", "陕西省", "榆林市", "府谷县"], ["610824", "中国", "陕西省", "榆林市", "靖边县"], ["610825", "中国", "陕西省", "榆林市", "定边县"], ["610826", "中国", "陕西省", "榆林市", "绥德县"], ["610827", "中国", "陕西省", "榆林市", "米脂县"], ["610828", "中国", "陕西省", "榆林市", "佳县"], ["610829", "中国", "陕西省", "榆林市", "吴堡县"], ["610830", "中国", "陕西省", "榆林市", "清涧县"], ["610831", "中国", "陕西省", "榆林市", "子洲县"], ["610881", "中国", "陕西省", "榆林市", "神木市"], ["610900", "中国", "陕西省", "安康市"], ["610902", "中国", "陕西省", "安康市", "汉滨区"], ["610921", "中国", "陕西省", "安康市", "汉阴县"], ["610922", "中国", "陕西省", "安康市", "石泉县"], ["610923", "中国", "陕西省", "安康市", "宁陕县"], ["610924", "中国", "陕西省", "安康市", "紫阳县"], ["610925", "中国", "陕西省", "安康市", "岚皋县"], ["610926", "中国", "陕西省", "安康市", "平利县"], ["610927", "中国", "陕西省", "安康市", "镇坪县"], ["610928", "中国", "陕西省", "安康市", "旬阳县"], ["610929", "中国", "陕西省", "安康市", "白河县"], ["611000", "中国", "陕西省", "商洛市"], ["611002", "中国", "陕西省", "商洛市", "商州区"], ["611021", "中国", "陕西省", "商洛市", "洛南县"], ["611022", "中国", "陕西省", "商洛市", "丹凤县"], ["611023", "中国", "陕西省", "商洛市", "商南县"], ["611024", "中国", "陕西省", "商洛市", "山阳县"], ["611025", "中国", "陕西省", "商洛市", "镇安县"], ["611026", "中国", "陕西省", "商洛市", "柞水县"], ["620000", "中国", "甘肃省"], ["620100", "中国", "甘肃省", "兰州市"], ["620102", "中国", "甘肃省", "兰州市", "城关区"], ["620103", "中国", "甘肃省", "兰州市", "七里河区"], ["620104", "中国", "甘肃省", "兰州市", "西固区"], ["620105", "中国", "甘肃省", "兰州市", "安宁区"], ["620111", "中国", "甘肃省", "兰州市", "红古区"], ["620121", "中国", "甘肃省", "兰州市", "永登县"], ["620122", "中国", "甘肃省", "兰州市", "皋兰县"], ["620123", "中国", "甘肃省", "兰州市", "榆中县"], ["620200", "中国", "甘肃省", "嘉峪关市"], ["620201", "中国", "甘肃省", "嘉峪关市", "嘉峪关市"], ["620300", "中国", "甘肃省", "金昌市"], ["620302", "中国", "甘肃省", "金昌市", "金川区"], ["620321", "中国", "甘肃省", "金昌市", "永昌县"], ["620400", "中国", "甘肃省", "白银市"], ["620402", "中国", "甘肃省", "白银市", "白银区"], ["620403", "中国", "甘肃省", "白银市", "平川区"], ["620421", "中国", "甘肃省", "白银市", "靖远县"], ["620422", "中国", "甘肃省", "白银市", "会宁县"], ["620423", "中国", "甘肃省", "白银市", "景泰县"], ["620500", "中国", "甘肃省", "天水市"], ["620502", "中国", "甘肃省", "天水市", "秦州区"], ["620503", "中国", "甘肃省", "天水市", "麦积区"], ["620521", "中国", "甘肃省", "天水市", "清水县"], ["620522", "中国", "甘肃省", "天水市", "秦安县"], ["620523", "中国", "甘肃省", "天水市", "甘谷县"], ["620524", "中国", "甘肃省", "天水市", "武山县"], ["620525", "中国", "甘肃省", "天水市", "张家川回族自治县"], ["620600", "中国", "甘肃省", "武威市"], ["620602", "中国", "甘肃省", "武威市", "凉州区"], ["620621", "中国", "甘肃省", "武威市", "民勤县"], ["620622", "中国", "甘肃省", "武威市", "古浪县"], ["620623", "中国", "甘肃省", "武威市", "天祝藏族自治县"], ["620700", "中国", "甘肃省", "张掖市"], ["620702", "中国", "甘肃省", "张掖市", "甘州区"], ["620721", "中国", "甘肃省", "张掖市", "肃南裕固族自治县"], ["620722", "中国", "甘肃省", "张掖市", "民乐县"], ["620723", "中国", "甘肃省", "张掖市", "临泽县"], ["620724", "中国", "甘肃省", "张掖市", "高台县"], ["620725", "中国", "甘肃省", "张掖市", "山丹县"], ["620800", "中国", "甘肃省", "平凉市"], ["620802", "中国", "甘肃省", "平凉市", "崆峒区"], ["620821", "中国", "甘肃省", "平凉市", "泾川县"], ["620822", "中国", "甘肃省", "平凉市", "灵台县"], ["620823", "中国", "甘肃省", "平凉市", "崇信县"], ["620824", "中国", "甘肃省", "平凉市", "华亭县"], ["620825", "中国", "甘肃省", "平凉市", "庄浪县"], ["620826", "中国", "甘肃省", "平凉市", "静宁县"], ["620900", "中国", "甘肃省", "酒泉市"], ["620902", "中国", "甘肃省", "酒泉市", "肃州区"], ["620921", "中国", "甘肃省", "酒泉市", "金塔县"], ["620922", "中国", "甘肃省", "酒泉市", "瓜州县"], ["620923", "中国", "甘肃省", "酒泉市", "肃北蒙古族自治县"], ["620924", "中国", "甘肃省", "酒泉市", "阿克塞哈萨克族自治县"], ["620981", "中国", "甘肃省", "酒泉市", "玉门市"], ["620982", "中国", "甘肃省", "酒泉市", "敦煌市"], ["621000", "中国", "甘肃省", "庆阳市"], ["621002", "中国", "甘肃省", "庆阳市", "西峰区"], ["621021", "中国", "甘肃省", "庆阳市", "庆城县"], ["621022", "中国", "甘肃省", "庆阳市", "环县"], ["621023", "中国", "甘肃省", "庆阳市", "华池县"], ["621024", "中国", "甘肃省", "庆阳市", "合水县"], ["621025", "中国", "甘肃省", "庆阳市", "正宁县"], ["621026", "中国", "甘肃省", "庆阳市", "宁县"], ["621027", "中国", "甘肃省", "庆阳市", "镇原县"], ["621100", "中国", "甘肃省", "定西市"], ["621102", "中国", "甘肃省", "定西市", "安定区"], ["621121", "中国", "甘肃省", "定西市", "通渭县"], ["621122", "中国", "甘肃省", "定西市", "陇西县"], ["621123", "中国", "甘肃省", "定西市", "渭源县"], ["621124", "中国", "甘肃省", "定西市", "临洮县"], ["621125", "中国", "甘肃省", "定西市", "漳县"], ["621126", "中国", "甘肃省", "定西市", "岷县"], ["621200", "中国", "甘肃省", "陇南市"], ["621202", "中国", "甘肃省", "陇南市", "武都区"], ["621221", "中国", "甘肃省", "陇南市", "成县"], ["621222", "中国", "甘肃省", "陇南市", "文县"], ["621223", "中国", "甘肃省", "陇南市", "宕昌县"], ["621224", "中国", "甘肃省", "陇南市", "康县"], ["621225", "中国", "甘肃省", "陇南市", "西和县"], ["621226", "中国", "甘肃省", "陇南市", "礼县"], ["621227", "中国", "甘肃省", "陇南市", "徽县"], ["621228", "中国", "甘肃省", "陇南市", "两当县"], ["622900", "中国", "甘肃省", "临夏回族自治州"], ["622901", "中国", "甘肃省", "临夏回族自治州", "临夏市"], ["622921", "中国", "甘肃省", "临夏回族自治州", "临夏县"], ["622922", "中国", "甘肃省", "临夏回族自治州", "康乐县"], ["622923", "中国", "甘肃省", "临夏回族自治州", "永靖县"], ["622924", "中国", "甘肃省", "临夏回族自治州", "广河县"], ["622925", "中国", "甘肃省", "临夏回族自治州", "和政县"], ["622926", "中国", "甘肃省", "临夏回族自治州", "东乡族自治县"], ["622927", "中国", "甘肃省", "临夏回族自治州", "积石山保安族东乡族撒拉族自治县"], ["623000", "中国", "甘肃省", "甘南藏族自治州"], ["623001", "中国", "甘肃省", "甘南藏族自治州", "合作市"], ["623021", "中国", "甘肃省", "甘南藏族自治州", "临潭县"], ["623022", "中国", "甘肃省", "甘南藏族自治州", "卓尼县"], ["623023", "中国", "甘肃省", "甘南藏族自治州", "舟曲县"], ["623024", "中国", "甘肃省", "甘南藏族自治州", "迭部县"], ["623025", "中国", "甘肃省", "甘南藏族自治州", "玛曲县"], ["623026", "中国", "甘肃省", "甘南藏族自治州", "碌曲县"], ["623027", "中国", "甘肃省", "甘南藏族自治州", "夏河县"], ["630000", "中国", "青海省"], ["630100", "中国", "青海省", "西宁市"], ["630102", "中国", "青海省", "西宁市", "城东区"], ["630103", "中国", "青海省", "西宁市", "城中区"], ["630104", "中国", "青海省", "西宁市", "城西区"], ["630105", "中国", "青海省", "西宁市", "城北区"], ["630121", "中国", "青海省", "西宁市", "大通回族土族自治县"], ["630122", "中国", "青海省", "西宁市", "湟中县"], ["630123", "中国", "青海省", "西宁市", "湟源县"], ["630200", "中国", "青海省", "海东市"], ["630202", "中国", "青海省", "海东市", "乐都区"], ["630203", "中国", "青海省", "海东市", "平安区"], ["630222", "中国", "青海省", "海东市", "民和回族土族自治县"], ["630223", "中国", "青海省", "海东市", "互助土族自治县"], ["630224", "中国", "青海省", "海东市", "化隆回族自治县"], ["630225", "中国", "青海省", "海东市", "循化撒拉族自治县"], ["632200", "中国", "青海省", "海北藏族自治州"], ["632221", "中国", "青海省", "海北藏族自治州", "门源回族自治县"], ["632222", "中国", "青海省", "海北藏族自治州", "祁连县"], ["632223", "中国", "青海省", "海北藏族自治州", "海晏县"], ["632224", "中国", "青海省", "海北藏族自治州", "刚察县"], ["632300", "中国", "青海省", "黄南藏族自治州"], ["632321", "中国", "青海省", "黄南藏族自治州", "同仁县"], ["632322", "中国", "青海省", "黄南藏族自治州", "尖扎县"], ["632323", "中国", "青海省", "黄南藏族自治州", "泽库县"], ["632324", "中国", "青海省", "黄南藏族自治州", "河南蒙古族自治县"], ["632500", "中国", "青海省", "海南藏族自治州"], ["632521", "中国", "青海省", "海南藏族自治州", "共和县"], ["632522", "中国", "青海省", "海南藏族自治州", "同德县"], ["632523", "中国", "青海省", "海南藏族自治州", "贵德县"], ["632524", "中国", "青海省", "海南藏族自治州", "兴海县"], ["632525", "中国", "青海省", "海南藏族自治州", "贵南县"], ["632600", "中国", "青海省", "果洛藏族自治州"], ["632621", "中国", "青海省", "果洛藏族自治州", "玛沁县"], ["632622", "中国", "青海省", "果洛藏族自治州", "班玛县"], ["632623", "中国", "青海省", "果洛藏族自治州", "甘德县"], ["632624", "中国", "青海省", "果洛藏族自治州", "达日县"], ["632625", "中国", "青海省", "果洛藏族自治州", "久治县"], ["632626", "中国", "青海省", "果洛藏族自治州", "玛多县"], ["632700", "中国", "青海省", "玉树藏族自治州"], ["632701", "中国", "青海省", "玉树藏族自治州", "玉树市"], ["632722", "中国", "青海省", "玉树藏族自治州", "杂多县"], ["632723", "中国", "青海省", "玉树藏族自治州", "称多县"], ["632724", "中国", "青海省", "玉树藏族自治州", "治多县"], ["632725", "中国", "青海省", "玉树藏族自治州", "囊谦县"], ["632726", "中国", "青海省", "玉树藏族自治州", "曲麻莱县"], ["632800", "中国", "青海省", "海西蒙古族藏族自治州"], ["632801", "中国", "青海省", "海西蒙古族藏族自治州", "格尔木市"], ["632802", "中国", "青海省", "海西蒙古族藏族自治州", "德令哈市"], ["632821", "中国", "青海省", "海西蒙古族藏族自治州", "乌兰县"], ["632822", "中国", "青海省", "海西蒙古族藏族自治州", "都兰县"], ["632823", "中国", "青海省", "海西蒙古族藏族自治州", "天峻县"], ["632824", "中国", "青海省", "海西蒙古族藏族自治州", "冷湖行政区"], ["632825", "中国", "青海省", "海西蒙古族藏族自治州", "大柴旦行政区"], ["632826", "中国", "青海省", "海西蒙古族藏族自治州", "茫崖行政区"], ["640000", "中国", "宁夏回族自治区"], ["640100", "中国", "宁夏回族自治区", "银川市"], ["640104", "中国", "宁夏回族自治区", "银川市", "兴庆区"], ["640105", "中国", "宁夏回族自治区", "银川市", "西夏区"], ["640106", "中国", "宁夏回族自治区", "银川市", "金凤区"], ["640121", "中国", "宁夏回族自治区", "银川市", "永宁县"], ["640122", "中国", "宁夏回族自治区", "银川市", "贺兰县"], ["640181", "中国", "宁夏回族自治区", "银川市", "灵武市"], ["640200", "中国", "宁夏回族自治区", "石嘴山市"], ["640202", "中国", "宁夏回族自治区", "石嘴山市", "大武口区"], ["640205", "中国", "宁夏回族自治区", "石嘴山市", "惠农区"], ["640221", "中国", "宁夏回族自治区", "石嘴山市", "平罗县"], ["640300", "中国", "宁夏回族自治区", "吴忠市"], ["640302", "中国", "宁夏回族自治区", "吴忠市", "利通区"], ["640303", "中国", "宁夏回族自治区", "吴忠市", "红寺堡区"], ["640323", "中国", "宁夏回族自治区", "吴忠市", "盐池县"], ["640324", "中国", "宁夏回族自治区", "吴忠市", "同心县"], ["640381", "中国", "宁夏回族自治区", "吴忠市", "青铜峡市"], ["640400", "中国", "宁夏回族自治区", "固原市"], ["640402", "中国", "宁夏回族自治区", "固原市", "原州区"], ["640422", "中国", "宁夏回族自治区", "固原市", "西吉县"], ["640423", "中国", "宁夏回族自治区", "固原市", "隆德县"], ["640424", "中国", "宁夏回族自治区", "固原市", "泾源县"], ["640425", "中国", "宁夏回族自治区", "固原市", "彭阳县"], ["640500", "中国", "宁夏回族自治区", "中卫市"], ["640502", "中国", "宁夏回族自治区", "中卫市", "沙坡头区"], ["640521", "中国", "宁夏回族自治区", "中卫市", "中宁县"], ["640522", "中国", "宁夏回族自治区", "中卫市", "海原县"], ["650000", "中国", "新疆维吾尔自治区"], ["650100", "中国", "新疆维吾尔自治区", "乌鲁木齐市"], ["650102", "中国", "新疆维吾尔自治区", "乌鲁木齐市", "天山区"], ["650103", "中国", "新疆维吾尔自治区", "乌鲁木齐市", "沙依巴克区"], ["650104", "中国", "新疆维吾尔自治区", "乌鲁木齐市", "新市区"], ["650105", "中国", "新疆维吾尔自治区", "乌鲁木齐市", "水磨沟区"], ["650106", "中国", "新疆维吾尔自治区", "乌鲁木齐市", "头屯河区"], ["650107", "中国", "新疆维吾尔自治区", "乌鲁木齐市", "达坂城区"], ["650109", "中国", "新疆维吾尔自治区", "乌鲁木齐市", "米东区"], ["650121", "中国", "新疆维吾尔自治区", "乌鲁木齐市", "乌鲁木齐县"], ["650200", "中国", "新疆维吾尔自治区", "克拉玛依市"], ["650202", "中国", "新疆维吾尔自治区", "克拉玛依市", "独山子区"], ["650203", "中国", "新疆维吾尔自治区", "克拉玛依市", "克拉玛依区"], ["650204", "中国", "新疆维吾尔自治区", "克拉玛依市", "白碱滩区"], ["650205", "中国", "新疆维吾尔自治区", "克拉玛依市", "乌尔禾区"], ["650400", "中国", "新疆维吾尔自治区", "吐鲁番市"], ["650402", "中国", "新疆维吾尔自治区", "吐鲁番市", "高昌区"], ["650421", "中国", "新疆维吾尔自治区", "吐鲁番市", "鄯善县"], ["650422", "中国", "新疆维吾尔自治区", "吐鲁番市", "托克逊县"], ["650500", "中国", "新疆维吾尔自治区", "哈密市"], ["650502", "中国", "新疆维吾尔自治区", "哈密市", "伊州区"], ["650521", "中国", "新疆维吾尔自治区", "哈密市", "巴里坤哈萨克自治县"], ["650522", "中国", "新疆维吾尔自治区", "哈密市", "伊吾县"], ["652300", "中国", "新疆维吾尔自治区", "昌吉回族自治州"], ["652301", "中国", "新疆维吾尔自治区", "昌吉回族自治州", "昌吉市"], ["652302", "中国", "新疆维吾尔自治区", "昌吉回族自治州", "阜康市"], ["652323", "中国", "新疆维吾尔自治区", "昌吉回族自治州", "呼图壁县"], ["652324", "中国", "新疆维吾尔自治区", "昌吉回族自治州", "玛纳斯县"], ["652325", "中国", "新疆维吾尔自治区", "昌吉回族自治州", "奇台县"], ["652327", "中国", "新疆维吾尔自治区", "昌吉回族自治州", "吉木萨尔县"], ["652328", "中国", "新疆维吾尔自治区", "昌吉回族自治州", "木垒哈萨克自治县"], ["652700", "中国", "新疆维吾尔自治区", "博尔塔拉蒙古自治州"], ["652701", "中国", "新疆维吾尔自治区", "博尔塔拉蒙古自治州", "博乐市"], ["652702", "中国", "新疆维吾尔自治区", "博尔塔拉蒙古自治州", "阿拉山口市"], ["652722", "中国", "新疆维吾尔自治区", "博尔塔拉蒙古自治州", "精河县"], ["652723", "中国", "新疆维吾尔自治区", "博尔塔拉蒙古自治州", "温泉县"], ["652800", "中国", "新疆维吾尔自治区", "巴音郭楞蒙古自治州"], ["652801", "中国", "新疆维吾尔自治区", "巴音郭楞蒙古自治州", "库尔勒市"], ["652822", "中国", "新疆维吾尔自治区", "巴音郭楞蒙古自治州", "轮台县"], ["652823", "中国", "新疆维吾尔自治区", "巴音郭楞蒙古自治州", "尉犁县"], ["652824", "中国", "新疆维吾尔自治区", "巴音郭楞蒙古自治州", "若羌县"], ["652825", "中国", "新疆维吾尔自治区", "巴音郭楞蒙古自治州", "且末县"], ["652826", "中国", "新疆维吾尔自治区", "巴音郭楞蒙古自治州", "焉耆回族自治县"], ["652827", "中国", "新疆维吾尔自治区", "巴音郭楞蒙古自治州", "和静县"], ["652828", "中国", "新疆维吾尔自治区", "巴音郭楞蒙古自治州", "和硕县"], ["652829", "中国", "新疆维吾尔自治区", "巴音郭楞蒙古自治州", "博湖县"], ["652900", "中国", "新疆维吾尔自治区", "阿克苏地区"], ["652901", "中国", "新疆维吾尔自治区", "阿克苏地区", "阿克苏市"], ["652922", "中国", "新疆维吾尔自治区", "阿克苏地区", "温宿县"], ["652923", "中国", "新疆维吾尔自治区", "阿克苏地区", "库车县"], ["652924", "中国", "新疆维吾尔自治区", "阿克苏地区", "沙雅县"], ["652925", "中国", "新疆维吾尔自治区", "阿克苏地区", "新和县"], ["652926", "中国", "新疆维吾尔自治区", "阿克苏地区", "拜城县"], ["652927", "中国", "新疆维吾尔自治区", "阿克苏地区", "乌什县"], ["652928", "中国", "新疆维吾尔自治区", "阿克苏地区", "阿瓦提县"], ["652929", "中国", "新疆维吾尔自治区", "阿克苏地区", "柯坪县"], ["653000", "中国", "新疆维吾尔自治区", "克孜勒苏柯尔克孜自治州"], ["653001", "中国", "新疆维吾尔自治区", "克孜勒苏柯尔克孜自治州", "阿图什市"], ["653022", "中国", "新疆维吾尔自治区", "克孜勒苏柯尔克孜自治州", "阿克陶县"], ["653023", "中国", "新疆维吾尔自治区", "克孜勒苏柯尔克孜自治州", "阿合奇县"], ["653024", "中国", "新疆维吾尔自治区", "克孜勒苏柯尔克孜自治州", "乌恰县"], ["653100", "中国", "新疆维吾尔自治区", "喀什地区"], ["653101", "中国", "新疆维吾尔自治区", "喀什地区", "喀什市"], ["653121", "中国", "新疆维吾尔自治区", "喀什地区", "疏附县"], ["653122", "中国", "新疆维吾尔自治区", "喀什地区", "疏勒县"], ["653123", "中国", "新疆维吾尔自治区", "喀什地区", "英吉沙县"], ["653124", "中国", "新疆维吾尔自治区", "喀什地区", "泽普县"], ["653125", "中国", "新疆维吾尔自治区", "喀什地区", "莎车县"], ["653126", "中国", "新疆维吾尔自治区", "喀什地区", "叶城县"], ["653127", "中国", "新疆维吾尔自治区", "喀什地区", "麦盖提县"], ["653128", "中国", "新疆维吾尔自治区", "喀什地区", "岳普湖县"], ["653129", "中国", "新疆维吾尔自治区", "喀什地区", "伽师县"], ["653130", "中国", "新疆维吾尔自治区", "喀什地区", "巴楚县"], ["653131", "中国", "新疆维吾尔自治区", "喀什地区", "塔什库尔干塔吉克自治县"], ["653200", "中国", "新疆维吾尔自治区", "和田地区"], ["653201", "中国", "新疆维吾尔自治区", "和田地区", "和田市"], ["653221", "中国", "新疆维吾尔自治区", "和田地区", "和田县"], ["653222", "中国", "新疆维吾尔自治区", "和田地区", "墨玉县"], ["653223", "中国", "新疆维吾尔自治区", "和田地区", "皮山县"], ["653224", "中国", "新疆维吾尔自治区", "和田地区", "洛浦县"], ["653225", "中国", "新疆维吾尔自治区", "和田地区", "策勒县"], ["653226", "中国", "新疆维吾尔自治区", "和田地区", "于田县"], ["653227", "中国", "新疆维吾尔自治区", "和田地区", "民丰县"], ["654000", "中国", "新疆维吾尔自治区", "伊犁哈萨克自治州"], ["654002", "中国", "新疆维吾尔自治区", "伊犁哈萨克自治州", "伊宁市"], ["654003", "中国", "新疆维吾尔自治区", "伊犁哈萨克自治州", "奎屯市"], ["654004", "中国", "新疆维吾尔自治区", "伊犁哈萨克自治州", "霍尔果斯市"], ["654021", "中国", "新疆维吾尔自治区", "伊犁哈萨克自治州", "伊宁县"], ["654022", "中国", "新疆维吾尔自治区", "伊犁哈萨克自治州", "察布查尔锡伯自治县"], ["654023", "中国", "新疆维吾尔自治区", "伊犁哈萨克自治州", "霍城县"], ["654024", "中国", "新疆维吾尔自治区", "伊犁哈萨克自治州", "巩留县"], ["654025", "中国", "新疆维吾尔自治区", "伊犁哈萨克自治州", "新源县"], ["654026", "中国", "新疆维吾尔自治区", "伊犁哈萨克自治州", "昭苏县"], ["654027", "中国", "新疆维吾尔自治区", "伊犁哈萨克自治州", "特克斯县"], ["654028", "中国", "新疆维吾尔自治区", "伊犁哈萨克自治州", "尼勒克县"], ["654200", "中国", "新疆维吾尔自治区", "塔城地区"], ["654201", "中国", "新疆维吾尔自治区", "塔城地区", "塔城市"], ["654202", "中国", "新疆维吾尔自治区", "塔城地区", "乌苏市"], ["654221", "中国", "新疆维吾尔自治区", "塔城地区", "额敏县"], ["654223", "中国", "新疆维吾尔自治区", "塔城地区", "沙湾县"], ["654224", "中国", "新疆维吾尔自治区", "塔城地区", "托里县"], ["654225", "中国", "新疆维吾尔自治区", "塔城地区", "裕民县"], ["654226", "中国", "新疆维吾尔自治区", "塔城地区", "和布克赛尔蒙古自治县"], ["654300", "中国", "新疆维吾尔自治区", "阿勒泰地区"], ["654301", "中国", "新疆维吾尔自治区", "阿勒泰地区", "阿勒泰市"], ["654321", "中国", "新疆维吾尔自治区", "阿勒泰地区", "布尔津县"], ["654322", "中国", "新疆维吾尔自治区", "阿勒泰地区", "富蕴县"], ["654323", "中国", "新疆维吾尔自治区", "阿勒泰地区", "福海县"], ["654324", "中国", "新疆维吾尔自治区", "阿勒泰地区", "哈巴河县"], ["654325", "中国", "新疆维吾尔自治区", "阿勒泰地区", "青河县"], ["654326", "中国", "新疆维吾尔自治区", "阿勒泰地区", "吉木乃县"], ["659001", "中国", "新疆维吾尔自治区", "石河子市", "石河子市"], ["659002", "中国", "新疆维吾尔自治区", "阿拉尔市", "阿拉尔市"], ["659003", "中国", "新疆维吾尔自治区", "图木舒克市", "图木舒克市"], ["659004", "中国", "新疆维吾尔自治区", "五家渠市", "五家渠市"], ["659005", "中国", "新疆维吾尔自治区", "北屯市", "北屯市"], ["659006", "中国", "新疆维吾尔自治区", "铁门关市", "铁门关市"], ["659007", "中国", "新疆维吾尔自治区", "双河市", "双河市"], ["659008", "中国", "新疆维吾尔自治区", "可克达拉市", "可克达拉市"], ["659009", "中国", "新疆维吾尔自治区", "昆玉市", "昆玉市"], ["710000", "中国", "台湾省"], ["710100", "中国", "台湾省", "台北市"], ["710101", "中国", "台湾省", "台北市", "中正区"], ["710102", "中国", "台湾省", "台北市", "大同区"], ["710103", "中国", "台湾省", "台北市", "中山区"], ["710104", "中国", "台湾省", "台北市", "松山区"], ["710105", "中国", "台湾省", "台北市", "大安区"], ["710106", "中国", "台湾省", "台北市", "万华区"], ["710107", "中国", "台湾省", "台北市", "信义区"], ["710108", "中国", "台湾省", "台北市", "士林区"], ["710109", "中国", "台湾省", "台北市", "北投区"], ["710110", "中国", "台湾省", "台北市", "内湖区"], ["710111", "中国", "台湾省", "台北市", "南港区"], ["710112", "中国", "台湾省", "台北市", "文山区"], ["710200", "中国", "台湾省", "高雄市"], ["710201", "中国", "台湾省", "高雄市", "新兴区"], ["710202", "中国", "台湾省", "高雄市", "前金区"], ["710203", "中国", "台湾省", "高雄市", "苓雅区"], ["710204", "中国", "台湾省", "高雄市", "盐埕区"], ["710205", "中国", "台湾省", "高雄市", "鼓山区"], ["710206", "中国", "台湾省", "高雄市", "旗津区"], ["710207", "中国", "台湾省", "高雄市", "前镇区"], ["710208", "中国", "台湾省", "高雄市", "三民区"], ["710209", "中国", "台湾省", "高雄市", "左营区"], ["710210", "中国", "台湾省", "高雄市", "楠梓区"], ["710211", "中国", "台湾省", "高雄市", "小港区"], ["710242", "中国", "台湾省", "高雄市", "仁武区"], ["710243", "中国", "台湾省", "高雄市", "大社区"], ["710244", "中国", "台湾省", "高雄市", "冈山区"], ["710245", "中国", "台湾省", "高雄市", "路竹区"], ["710246", "中国", "台湾省", "高雄市", "阿莲区"], ["710247", "中国", "台湾省", "高雄市", "田寮区"], ["710248", "中国", "台湾省", "高雄市", "燕巢区"], ["710249", "中国", "台湾省", "高雄市", "桥头区"], ["710250", "中国", "台湾省", "高雄市", "梓官区"], ["710251", "中国", "台湾省", "高雄市", "弥陀区"], ["710252", "中国", "台湾省", "高雄市", "永安区"], ["710253", "中国", "台湾省", "高雄市", "湖内区"], ["710254", "中国", "台湾省", "高雄市", "凤山区"], ["710255", "中国", "台湾省", "高雄市", "大寮区"], ["710256", "中国", "台湾省", "高雄市", "林园区"], ["710257", "中国", "台湾省", "高雄市", "鸟松区"], ["710258", "中国", "台湾省", "高雄市", "大树区"], ["710259", "中国", "台湾省", "高雄市", "旗山区"], ["710260", "中国", "台湾省", "高雄市", "美浓区"], ["710261", "中国", "台湾省", "高雄市", "六龟区"], ["710262", "中国", "台湾省", "高雄市", "内门区"], ["710263", "中国", "台湾省", "高雄市", "杉林区"], ["710264", "中国", "台湾省", "高雄市", "甲仙区"], ["710265", "中国", "台湾省", "高雄市", "桃源区"], ["710266", "中国", "台湾省", "高雄市", "那玛夏区"], ["710267", "中国", "台湾省", "高雄市", "茂林区"], ["710268", "中国", "台湾省", "高雄市", "茄萣区"], ["710300", "中国", "台湾省", "台南市"], ["710301", "中国", "台湾省", "台南市", "中西区"], ["710302", "中国", "台湾省", "台南市", "东区"], ["710303", "中国", "台湾省", "台南市", "南区"], ["710304", "中国", "台湾省", "台南市", "北区"], ["710305", "中国", "台湾省", "台南市", "安平区"], ["710306", "中国", "台湾省", "台南市", "安南区"], ["710339", "中国", "台湾省", "台南市", "永康区"], ["710340", "中国", "台湾省", "台南市", "归仁区"], ["710341", "中国", "台湾省", "台南市", "新化区"], ["710342", "中国", "台湾省", "台南市", "左镇区"], ["710343", "中国", "台湾省", "台南市", "玉井区"], ["710344", "中国", "台湾省", "台南市", "楠西区"], ["710345", "中国", "台湾省", "台南市", "南化区"], ["710346", "中国", "台湾省", "台南市", "仁德区"], ["710347", "中国", "台湾省", "台南市", "关庙区"], ["710348", "中国", "台湾省", "台南市", "龙崎区"], ["710349", "中国", "台湾省", "台南市", "官田区"], ["710350", "中国", "台湾省", "台南市", "麻豆区"], ["710351", "中国", "台湾省", "台南市", "佳里区"], ["710352", "中国", "台湾省", "台南市", "西港区"], ["710353", "中国", "台湾省", "台南市", "七股区"], ["710354", "中国", "台湾省", "台南市", "将军区"], ["710355", "中国", "台湾省", "台南市", "学甲区"], ["710356", "中国", "台湾省", "台南市", "北门区"], ["710357", "中国", "台湾省", "台南市", "新营区"], ["710358", "中国", "台湾省", "台南市", "后壁区"], ["710359", "中国", "台湾省", "台南市", "白河区"], ["710360", "中国", "台湾省", "台南市", "东山区"], ["710361", "中国", "台湾省", "台南市", "六甲区"], ["710362", "中国", "台湾省", "台南市", "下营区"], ["710363", "中国", "台湾省", "台南市", "柳营区"], ["710364", "中国", "台湾省", "台南市", "盐水区"], ["710365", "中国", "台湾省", "台南市", "善化区"], ["710366", "中国", "台湾省", "台南市", "大内区"], ["710367", "中国", "台湾省", "台南市", "山上区"], ["710368", "中国", "台湾省", "台南市", "新市区"], ["710369", "中国", "台湾省", "台南市", "安定区"], ["710400", "中国", "台湾省", "台中市"], ["710401", "中国", "台湾省", "台中市", "中区"], ["710402", "中国", "台湾省", "台中市", "东区"], ["710403", "中国", "台湾省", "台中市", "南区"], ["710404", "中国", "台湾省", "台中市", "西区"], ["710405", "中国", "台湾省", "台中市", "北区"], ["710406", "中国", "台湾省", "台中市", "北屯区"], ["710407", "中国", "台湾省", "台中市", "西屯区"], ["710408", "中国", "台湾省", "台中市", "南屯区"], ["710431", "中国", "台湾省", "台中市", "太平区"], ["710432", "中国", "台湾省", "台中市", "大里区"], ["710433", "中国", "台湾省", "台中市", "雾峰区"], ["710434", "中国", "台湾省", "台中市", "乌日区"], ["710435", "中国", "台湾省", "台中市", "丰原区"], ["710436", "中国", "台湾省", "台中市", "后里区"], ["710437", "中国", "台湾省", "台中市", "石冈区"], ["710438", "中国", "台湾省", "台中市", "东势区"], ["710439", "中国", "台湾省", "台中市", "和平区"], ["710440", "中国", "台湾省", "台中市", "新社区"], ["710441", "中国", "台湾省", "台中市", "潭子区"], ["710442", "中国", "台湾省", "台中市", "大雅区"], ["710443", "中国", "台湾省", "台中市", "神冈区"], ["710444", "中国", "台湾省", "台中市", "大肚区"], ["710445", "中国", "台湾省", "台中市", "沙鹿区"], ["710446", "中国", "台湾省", "台中市", "龙井区"], ["710447", "中国", "台湾省", "台中市", "梧栖区"], ["710448", "中国", "台湾省", "台中市", "清水区"], ["710449", "中国", "台湾省", "台中市", "大甲区"], ["710450", "中国", "台湾省", "台中市", "外埔区"], ["710451", "中国", "台湾省", "台中市", "大安区"], ["710600", "中国", "台湾省", "南投县"], ["710614", "中国", "台湾省", "南投县", "南投市"], ["710615", "中国", "台湾省", "南投县", "中寮乡"], ["710616", "中国", "台湾省", "南投县", "草屯镇"], ["710617", "中国", "台湾省", "南投县", "国姓乡"], ["710618", "中国", "台湾省", "南投县", "埔里镇"], ["710619", "中国", "台湾省", "南投县", "仁爱乡"], ["710620", "中国", "台湾省", "南投县", "名间乡"], ["710621", "中国", "台湾省", "南投县", "集集镇"], ["710622", "中国", "台湾省", "南投县", "水里乡"], ["710623", "中国", "台湾省", "南投县", "鱼池乡"], ["710624", "中国", "台湾省", "南投县", "信义乡"], ["710625", "中国", "台湾省", "南投县", "竹山镇"], ["710626", "中国", "台湾省", "南投县", "鹿谷乡"], ["710700", "中国", "台湾省", "基隆市"], ["710701", "中国", "台湾省", "基隆市", "仁爱区"], ["710702", "中国", "台湾省", "基隆市", "信义区"], ["710703", "中国", "台湾省", "基隆市", "中正区"], ["710704", "中国", "台湾省", "基隆市", "中山区"], ["710705", "中国", "台湾省", "基隆市", "安乐区"], ["710706", "中国", "台湾省", "基隆市", "暖暖区"], ["710707", "中国", "台湾省", "基隆市", "七堵区"], ["710800", "中国", "台湾省", "新竹市"], ["710801", "中国", "台湾省", "新竹市", "东区"], ["710802", "中国", "台湾省", "新竹市", "北区"], ["710803", "中国", "台湾省", "新竹市", "香山区"], ["710900", "中国", "台湾省", "嘉义市"], ["710901", "中国", "台湾省", "嘉义市", "东区"], ["710902", "中国", "台湾省", "嘉义市", "西区"], ["711100", "中国", "台湾省", "新北市"], ["711130", "中国", "台湾省", "新北市", "万里区"], ["711131", "中国", "台湾省", "新北市", "金山区"], ["711132", "中国", "台湾省", "新北市", "板桥区"], ["711133", "中国", "台湾省", "新北市", "汐止区"], ["711134", "中国", "台湾省", "新北市", "深坑区"], ["711135", "中国", "台湾省", "新北市", "石碇区"], ["711136", "中国", "台湾省", "新北市", "瑞芳区"], ["711137", "中国", "台湾省", "新北市", "平溪区"], ["711138", "中国", "台湾省", "新北市", "双溪区"], ["711139", "中国", "台湾省", "新北市", "贡寮区"], ["711140", "中国", "台湾省", "新北市", "新店区"], ["711141", "中国", "台湾省", "新北市", "坪林区"], ["711142", "中国", "台湾省", "新北市", "乌来区"], ["711143", "中国", "台湾省", "新北市", "永和区"], ["711144", "中国", "台湾省", "新北市", "中和区"], ["711145", "中国", "台湾省", "新北市", "土城区"], ["711146", "中国", "台湾省", "新北市", "三峡区"], ["711147", "中国", "台湾省", "新北市", "树林区"], ["711148", "中国", "台湾省", "新北市", "莺歌区"], ["711149", "中国", "台湾省", "新北市", "三重区"], ["711150", "中国", "台湾省", "新北市", "新庄区"], ["711151", "中国", "台湾省", "新北市", "泰山区"], ["711152", "中国", "台湾省", "新北市", "林口区"], ["711153", "中国", "台湾省", "新北市", "芦洲区"], ["711154", "中国", "台湾省", "新北市", "五股区"], ["711155", "中国", "台湾省", "新北市", "八里区"], ["711156", "中国", "台湾省", "新北市", "淡水区"], ["711157", "中国", "台湾省", "新北市", "三芝区"], ["711158", "中国", "台湾省", "新北市", "石门区"], ["711200", "中国", "台湾省", "宜兰县"], ["711214", "中国", "台湾省", "宜兰县", "宜兰市"], ["711215", "中国", "台湾省", "宜兰县", "头城镇"], ["711216", "中国", "台湾省", "宜兰县", "礁溪乡"], ["711217", "中国", "台湾省", "宜兰县", "壮围乡"], ["711218", "中国", "台湾省", "宜兰县", "员山乡"], ["711219", "中国", "台湾省", "宜兰县", "罗东镇"], ["711220", "中国", "台湾省", "宜兰县", "三星乡"], ["711221", "中国", "台湾省", "宜兰县", "大同乡"], ["711222", "中国", "台湾省", "宜兰县", "五结乡"], ["711223", "中国", "台湾省", "宜兰县", "冬山乡"], ["711224", "中国", "台湾省", "宜兰县", "苏澳镇"], ["711225", "中国", "台湾省", "宜兰县", "南澳乡"], ["711300", "中国", "台湾省", "新竹县"], ["711314", "中国", "台湾省", "新竹县", "竹北市"], ["711315", "中国", "台湾省", "新竹县", "湖口乡"], ["711316", "中国", "台湾省", "新竹县", "新丰乡"], ["711317", "中国", "台湾省", "新竹县", "新埔镇"], ["711318", "中国", "台湾省", "新竹县", "关西镇"], ["711319", "中国", "台湾省", "新竹县", "芎林乡"], ["711320", "中国", "台湾省", "新竹县", "宝山乡"], ["711321", "中国", "台湾省", "新竹县", "竹东镇"], ["711322", "中国", "台湾省", "新竹县", "五峰乡"], ["711323", "中国", "台湾省", "新竹县", "横山乡"], ["711324", "中国", "台湾省", "新竹县", "尖石乡"], ["711325", "中国", "台湾省", "新竹县", "北埔乡"], ["711326", "中国", "台湾省", "新竹县", "峨眉乡"], ["711400", "中国", "台湾省", "桃园市"], ["711414", "中国", "台湾省", "桃园市", "中坜区"], ["711415", "中国", "台湾省", "桃园市", "平镇区"], ["711416", "中国", "台湾省", "桃园市", "龙潭区"], ["711417", "中国", "台湾省", "桃园市", "杨梅区"], ["711418", "中国", "台湾省", "桃园市", "新屋区"], ["711419", "中国", "台湾省", "桃园市", "观音区"], ["711420", "中国", "台湾省", "桃园市", "桃园区"], ["711421", "中国", "台湾省", "桃园市", "龟山区"], ["711422", "中国", "台湾省", "桃园市", "八德区"], ["711423", "中国", "台湾省", "桃园市", "大溪区"], ["711424", "中国", "台湾省", "桃园市", "复兴区"], ["711425", "中国", "台湾省", "桃园市", "大园区"], ["711426", "中国", "台湾省", "桃园市", "芦竹区"], ["711500", "中国", "台湾省", "苗栗县"], ["711519", "中国", "台湾省", "苗栗县", "竹南镇"], ["711520", "中国", "台湾省", "苗栗县", "头份市"], ["711521", "中国", "台湾省", "苗栗县", "三湾乡"], ["711522", "中国", "台湾省", "苗栗县", "南庄乡"], ["711523", "中国", "台湾省", "苗栗县", "狮潭乡"], ["711524", "中国", "台湾省", "苗栗县", "后龙镇"], ["711525", "中国", "台湾省", "苗栗县", "通霄镇"], ["711526", "中国", "台湾省", "苗栗县", "苑里镇"], ["711527", "中国", "台湾省", "苗栗县", "苗栗市"], ["711528", "中国", "台湾省", "苗栗县", "造桥乡"], ["711529", "中国", "台湾省", "苗栗县", "头屋乡"], ["711530", "中国", "台湾省", "苗栗县", "公馆乡"], ["711531", "中国", "台湾省", "苗栗县", "大湖乡"], ["711532", "中国", "台湾省", "苗栗县", "泰安乡"], ["711533", "中国", "台湾省", "苗栗县", "铜锣乡"], ["711534", "中国", "台湾省", "苗栗县", "三义乡"], ["711535", "中国", "台湾省", "苗栗县", "西湖乡"], ["711536", "中国", "台湾省", "苗栗县", "卓兰镇"], ["711700", "中国", "台湾省", "彰化县"], ["711727", "中国", "台湾省", "彰化县", "彰化市"], ["711728", "中国", "台湾省", "彰化县", "芬园乡"], ["711729", "中国", "台湾省", "彰化县", "花坛乡"], ["711730", "中国", "台湾省", "彰化县", "秀水乡"], ["711731", "中国", "台湾省", "彰化县", "鹿港镇"], ["711732", "中国", "台湾省", "彰化县", "福兴乡"], ["711733", "中国", "台湾省", "彰化县", "线西乡"], ["711734", "中国", "台湾省", "彰化县", "和美镇"], ["711735", "中国", "台湾省", "彰化县", "伸港乡"], ["711736", "中国", "台湾省", "彰化县", "员林市"], ["711737", "中国", "台湾省", "彰化县", "社头乡"], ["711738", "中国", "台湾省", "彰化县", "永靖乡"], ["711739", "中国", "台湾省", "彰化县", "埔心乡"], ["711740", "中国", "台湾省", "彰化县", "溪湖镇"], ["711741", "中国", "台湾省", "彰化县", "大村乡"], ["711742", "中国", "台湾省", "彰化县", "埔盐乡"], ["711743", "中国", "台湾省", "彰化县", "田中镇"], ["711744", "中国", "台湾省", "彰化县", "北斗镇"], ["711745", "中国", "台湾省", "彰化县", "田尾乡"], ["711746", "中国", "台湾省", "彰化县", "埤头乡"], ["711747", "中国", "台湾省", "彰化县", "溪州乡"], ["711748", "中国", "台湾省", "彰化县", "竹塘乡"], ["711749", "中国", "台湾省", "彰化县", "二林镇"], ["711750", "中国", "台湾省", "彰化县", "大城乡"], ["711751", "中国", "台湾省", "彰化县", "芳苑乡"], ["711752", "中国", "台湾省", "彰化县", "二水乡"], ["711900", "中国", "台湾省", "嘉义县"], ["711919", "中国", "台湾省", "嘉义县", "番路乡"], ["711920", "中国", "台湾省", "嘉义县", "梅山乡"], ["711921", "中国", "台湾省", "嘉义县", "竹崎乡"], ["711922", "中国", "台湾省", "嘉义县", "阿里山乡"], ["711923", "中国", "台湾省", "嘉义县", "中埔乡"], ["711924", "中国", "台湾省", "嘉义县", "大埔乡"], ["711925", "中国", "台湾省", "嘉义县", "水上乡"], ["711926", "中国", "台湾省", "嘉义县", "鹿草乡"], ["711927", "中国", "台湾省", "嘉义县", "太保市"], ["711928", "中国", "台湾省", "嘉义县", "朴子市"], ["711929", "中国", "台湾省", "嘉义县", "东石乡"], ["711930", "中国", "台湾省", "嘉义县", "六脚乡"], ["711931", "中国", "台湾省", "嘉义县", "新港乡"], ["711932", "中国", "台湾省", "嘉义县", "民雄乡"], ["711933", "中国", "台湾省", "嘉义县", "大林镇"], ["711934", "中国", "台湾省", "嘉义县", "溪口乡"], ["711935", "中国", "台湾省", "嘉义县", "义竹乡"], ["711936", "中国", "台湾省", "嘉义县", "布袋镇"], ["712100", "中国", "台湾省", "云林县"], ["712121", "中国", "台湾省", "云林县", "斗南镇"], ["712122", "中国", "台湾省", "云林县", "大埤乡"], ["712123", "中国", "台湾省", "云林县", "虎尾镇"], ["712124", "中国", "台湾省", "云林县", "土库镇"], ["712125", "中国", "台湾省", "云林县", "褒忠乡"], ["712126", "中国", "台湾省", "云林县", "东势乡"], ["712127", "中国", "台湾省", "云林县", "台西乡"], ["712128", "中国", "台湾省", "云林县", "仑背乡"], ["712129", "中国", "台湾省", "云林县", "麦寮乡"], ["712130", "中国", "台湾省", "云林县", "斗六市"], ["712131", "中国", "台湾省", "云林县", "林内乡"], ["712132", "中国", "台湾省", "云林县", "古坑乡"], ["712133", "中国", "台湾省", "云林县", "莿桐乡"], ["712134", "中国", "台湾省", "云林县", "西螺镇"], ["712135", "中国", "台湾省", "云林县", "二仑乡"], ["712136", "中国", "台湾省", "云林县", "北港镇"], ["712137", "中国", "台湾省", "云林县", "水林乡"], ["712138", "中国", "台湾省", "云林县", "口湖乡"], ["712139", "中国", "台湾省", "云林县", "四湖乡"], ["712140", "中国", "台湾省", "云林县", "元长乡"], ["712400", "中国", "台湾省", "屏东县"], ["712434", "中国", "台湾省", "屏东县", "屏东市"], ["712435", "中国", "台湾省", "屏东县", "三地门乡"], ["712436", "中国", "台湾省", "屏东县", "雾台乡"], ["712437", "中国", "台湾省", "屏东县", "玛家乡"], ["712438", "中国", "台湾省", "屏东县", "九如乡"], ["712439", "中国", "台湾省", "屏东县", "里港乡"], ["712440", "中国", "台湾省", "屏东县", "高树乡"], ["712441", "中国", "台湾省", "屏东县", "盐埔乡"], ["712442", "中国", "台湾省", "屏东县", "长治乡"], ["712443", "中国", "台湾省", "屏东县", "麟洛乡"], ["712444", "中国", "台湾省", "屏东县", "竹田乡"], ["712445", "中国", "台湾省", "屏东县", "内埔乡"], ["712446", "中国", "台湾省", "屏东县", "万丹乡"], ["712447", "中国", "台湾省", "屏东县", "潮州镇"], ["712448", "中国", "台湾省", "屏东县", "泰武乡"], ["712449", "中国", "台湾省", "屏东县", "来义乡"], ["712450", "中国", "台湾省", "屏东县", "万峦乡"], ["712451", "中国", "台湾省", "屏东县", "崁顶乡"], ["712452", "中国", "台湾省", "屏东县", "新埤乡"], ["712453", "中国", "台湾省", "屏东县", "南州乡"], ["712454", "中国", "台湾省", "屏东县", "林边乡"], ["712455", "中国", "台湾省", "屏东县", "东港镇"], ["712456", "中国", "台湾省", "屏东县", "琉球乡"], ["712457", "中国", "台湾省", "屏东县", "佳冬乡"], ["712458", "中国", "台湾省", "屏东县", "新园乡"], ["712459", "中国", "台湾省", "屏东县", "枋寮乡"], ["712460", "中国", "台湾省", "屏东县", "枋山乡"], ["712461", "中国", "台湾省", "屏东县", "春日乡"], ["712462", "中国", "台湾省", "屏东县", "狮子乡"], ["712463", "中国", "台湾省", "屏东县", "车城乡"], ["712464", "中国", "台湾省", "屏东县", "牡丹乡"], ["712465", "中国", "台湾省", "屏东县", "恒春镇"], ["712466", "中国", "台湾省", "屏东县", "满州乡"], ["712500", "中国", "台湾省", "台东县"], ["712517", "中国", "台湾省", "台东县", "台东市"], ["712518", "中国", "台湾省", "台东县", "绿岛乡"], ["712519", "中国", "台湾省", "台东县", "兰屿乡"], ["712520", "中国", "台湾省", "台东县", "延平乡"], ["712521", "中国", "台湾省", "台东县", "卑南乡"], ["712522", "中国", "台湾省", "台东县", "鹿野乡"], ["712523", "中国", "台湾省", "台东县", "关山镇"], ["712524", "中国", "台湾省", "台东县", "海端乡"], ["712525", "中国", "台湾省", "台东县", "池上乡"], ["712526", "中国", "台湾省", "台东县", "东河乡"], ["712527", "中国", "台湾省", "台东县", "成功镇"], ["712528", "中国", "台湾省", "台东县", "长滨乡"], ["712529", "中国", "台湾省", "台东县", "金峰乡"], ["712530", "中国", "台湾省", "台东县", "大武乡"], ["712531", "中国", "台湾省", "台东县", "达仁乡"], ["712532", "中国", "台湾省", "台东县", "太麻里乡"], ["712600", "中国", "台湾省", "花莲县"], ["712615", "中国", "台湾省", "花莲县", "花莲市"], ["712616", "中国", "台湾省", "花莲县", "新城乡"], ["712618", "中国", "台湾省", "花莲县", "秀林乡"], ["712619", "中国", "台湾省", "花莲县", "吉安乡"], ["712620", "中国", "台湾省", "花莲县", "寿丰乡"], ["712621", "中国", "台湾省", "花莲县", "凤林镇"], ["712622", "中国", "台湾省", "花莲县", "光复乡"], ["712623", "中国", "台湾省", "花莲县", "丰滨乡"], ["712624", "中国", "台湾省", "花莲县", "瑞穗乡"], ["712625", "中国", "台湾省", "花莲县", "万荣乡"], ["712626", "中国", "台湾省", "花莲县", "玉里镇"], ["712627", "中国", "台湾省", "花莲县", "卓溪乡"], ["712628", "中国", "台湾省", "花莲县", "富里乡"], ["712700", "中国", "台湾省", "澎湖县"], ["712707", "中国", "台湾省", "澎湖县", "马公市"], ["712708", "中国", "台湾省", "澎湖县", "西屿乡"], ["712709", "中国", "台湾省", "澎湖县", "望安乡"], ["712710", "中国", "台湾省", "澎湖县", "七美乡"], ["712711", "中国", "台湾省", "澎湖县", "白沙乡"], ["712712", "中国", "台湾省", "澎湖县", "湖西乡"], ["810000", "中国", "香港特别行政区", "香港特别行政区"], ["810101", "中国", "香港特别行政区", "香港特别行政区", "中西区"], ["810102", "中国", "香港特别行政区", "香港特别行政区", "东区"], ["810103", "中国", "香港特别行政区", "香港特别行政区", "九龙城区"], ["810104", "中国", "香港特别行政区", "香港特别行政区", "观塘区"], ["810105", "中国", "香港特别行政区", "香港特别行政区", "南区"], ["810106", "中国", "香港特别行政区", "香港特别行政区", "深水埗区"], ["810107", "中国", "香港特别行政区", "香港特别行政区", "湾仔区"], ["810108", "中国", "香港特别行政区", "香港特别行政区", "黄大仙区"], ["810109", "中国", "香港特别行政区", "香港特别行政区", "油尖旺区"], ["810110", "中国", "香港特别行政区", "香港特别行政区", "离岛区"], ["810111", "中国", "香港特别行政区", "香港特别行政区", "葵青区"], ["810112", "中国", "香港特别行政区", "香港特别行政区", "北区"], ["810113", "中国", "香港特别行政区", "香港特别行政区", "西贡区"], ["810114", "中国", "香港特别行政区", "香港特别行政区", "沙田区"], ["810115", "中国", "香港特别行政区", "香港特别行政区", "屯门区"], ["810116", "中国", "香港特别行政区", "香港特别行政区", "大埔区"], ["810117", "中国", "香港特别行政区", "香港特别行政区", "荃湾区"], ["810118", "中国", "香港特别行政区", "香港特别行政区", "元朗区"], ["820000", "中国", "澳门特别行政区", "澳门特别行政区"], ["820101", "中国", "澳门特别行政区", "澳门特别行政区", "澳门半岛"], ["820102", "中国", "澳门特别行政区", "澳门特别行政区", "凼仔"], ["820103", "中国", "澳门特别行政区", "澳门特别行政区", "路凼城"], ["820104", "中国", "澳门特别行政区", "澳门特别行政区", "路环"]];



/***/ }),

/***/ 1489:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(862)(false);
// imports


// module
exports.push([module.i, ".warning[data-v-046cc725]{line-height:1.85}.remark li[data-v-046cc725]{font-size:13px}.sign-remark[data-v-046cc725]{background:#f5f5f5;margin:20px 0;padding:10px}.cnts[data-v-046cc725]{height:62px;line-height:62px;padding:0 15px}.cnts i[data-v-046cc725]{padding:0 15px;color:#bbb}.rcv-tips[data-v-046cc725]{margin-top:15px;padding:10px 10px 10px 25px;background:#f4f4f4;border-radius:5px}.rcv-tips li[data-v-046cc725]{list-style:disc;line-height:180%;padding-bottom:5px}.rcv-tips li[data-v-046cc725]:last-child{padding-bottom:0}.cnt-tips[data-v-046cc725]{padding:15px 10px 15px 20px;background:#f5f5f5;border:1px dashed #ff4500;margin:15px 0 -20px}.cnt-tips .more-tips[data-v-046cc725]{margin-top:20px;padding-top:15px;border-top:1px solid #ccc}", ""]);

// exports


/***/ }),

/***/ 1496:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(862)(false);
// imports


// module
exports.push([module.i, ".code-warp[data-v-094bfb00]{word-break:break-all}.query-section[data-v-094bfb00]{display:flex;align-items:center}.gary[data-v-094bfb00]{color:gray;margin-left:10px}.gary[data-v-094bfb00]:hover{color:red;cursor:pointer}td[data-v-094bfb00]{min-width:50px}.mt-verify-coupon .mytbl[data-v-094bfb00] .mytips em{bottom:-70px;left:-230px}.mt-verify-coupon .mytbl[data-v-094bfb00] .mytips em:after{bottom:none;top:-18px;left:416px;border-top:10px solid transparent;border-bottom:10px solid #333}.note .item[data-v-094bfb00]{list-style-type:square;padding-left:20px}", ""]);

// exports


/***/ }),

/***/ 1499:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(862)(false);
// imports


// module
exports.push([module.i, "iframe[data-v-0a096d46]{width:100%}.mt-shop[data-v-0a096d46]{display:flex;flex-wrap:wrap}.mt-shop li[data-v-0a096d46]{width:222px;padding:20px;margin:10px;border-radius:4px;border:1px solid #ddd;cursor:pointer}.mt-shop li[data-v-0a096d46]:hover{box-shadow:4px 4px 3px #ddd}.mt-shop .mt-item[data-v-0a096d46]{padding:3px 0}.mt-shop .mt-item .bold[data-v-0a096d46]{font-weight:700;font-size:14px}.mt-select-card .form-submit[data-v-0a096d46]{padding-left:110px}.note .item[data-v-0a096d46]{list-style-type:square;padding-left:20px}", ""]);

// exports


/***/ }),

/***/ 1513:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(862)(false);
// imports


// module
exports.push([module.i, ".pie[data-v-138e3b5e]{position:relative}.pie .duration[data-v-138e3b5e]{position:absolute;top:50%;left:50%;transform:translateX(-50%);font-size:15px}.pie .duration span[data-v-138e3b5e]{font-size:20px}.chart[data-v-138e3b5e]{width:100%;height:300px;margin-bottom:30px}.qrcode[data-v-138e3b5e]{text-align:center}.qrcode img[data-v-138e3b5e]{width:250px}", ""]);

// exports


/***/ }),

/***/ 1535:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(862)(false);
// imports


// module
exports.push([module.i, ".daterange[data-v-1f920790]{width:200px}.ticket-dates[data-v-1f920790]{margin-top:15px;padding:12px;border:1px solid #ddd}.create-ticket[data-v-1f920790]{padding:0 10px}", ""]);

// exports


/***/ }),

/***/ 1537:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(862)(false);
// imports


// module
exports.push([module.i, ".page-tbl .machs .tit[data-v-20adb6ca]{text-align:center;font-weight:700;line-height:55px;background:#f8f8f8;font-size:13px;color:#666}.page-tbl .machs ul[data-v-20adb6ca]{min-height:500px;padding:0 12px}.page-tbl .machs li[data-v-20adb6ca]{display:block;line-height:1.5;padding:14px 0 12px;border-bottom:1px solid #f0f0f0;cursor:pointer}.page-tbl .machs li.on[data-v-20adb6ca]{color:#ff4500}.page-tbl .machs li[data-v-20adb6ca]:hover{font-weight:700}.page-tbl .lockers[data-v-20adb6ca],.page-tbl .machs[data-v-20adb6ca]{background:#fff}.page-tbl .lockers .-hd[data-v-20adb6ca]{height:55px;line-height:55px;padding:0 15px;background:#f8f8f8}.page-tbl .lockers .-hd .states li[data-v-20adb6ca]{display:inline;padding-right:15px}.page-tbl .lockers .-hd .states li .state[data-v-20adb6ca]{padding:1px 12px;margin-right:8px;border-radius:2px;font-size:11px}.page-tbl .lockers .state-0[data-v-20adb6ca]{border:1px solid #349dff;background:#fff;color:#349dff}.page-tbl .lockers .state-1[data-v-20adb6ca]{border:1px solid #39f;background:#39f;color:#fff}.page-tbl .lockers .state-2[data-v-20adb6ca]{border:1px solid #0fbf55;background:#0fbf55;color:#fff}.page-tbl .lockers .state-9[data-v-20adb6ca]{border:1px solid orange;background:orange;color:#fff}.page-tbl .lockers .state-3[data-v-20adb6ca]{border:1px solid #aaa;background:#aaa;color:#fafafa}.page-tbl .lockers .detail[data-v-20adb6ca]{padding:10px}.page-tbl .lockers .detail .none[data-v-20adb6ca]{text-align:center;padding:50px 0;background:#fafafa;color:#aaa;font-size:14px;margin:10px}.page-tbl .lockers .detail li[data-v-20adb6ca]{text-align:center;margin:10px;display:inline-block}.page-tbl .lockers .detail li .box[data-v-20adb6ca]{text-align:center;height:50px;line-height:50px;width:120px;border-radius:1px;cursor:pointer;overflow:hidden;padding:0 10px}.page-tbl .lockers .detail li .box[data-v-20adb6ca]:hover{box-shadow:3px 3px 3px #bbb}.locker-add li[data-v-20adb6ca]{display:inline-block;margin:8px}.locker-add li .no[data-v-20adb6ca]{padding:0 5px;background:#ddd;display:inline-block;line-height:32px;width:40px;text-align:center}.locker-add li .in[data-v-20adb6ca]{width:120px;display:inline-block;position:relative;top:-2px;margin-left:-1px}.tblform .input[data-v-20adb6ca]{display:inline-block;width:150px}.tblform .form-submit[data-v-20adb6ca]{text-align:center;margin-bottom:-20px}.tblform td[data-v-20adb6ca],.tblform th[data-v-20adb6ca]{padding:8px}.input-s[data-v-20adb6ca]{width:120px}.member-cards[data-v-20adb6ca]{margin-top:10px;background:#fdfdfd;border:1px solid #eee;border-radius:2px}.member-cards .card-list[data-v-20adb6ca]{padding:5px 10px}.member-cards .err[data-v-20adb6ca]{padding:15px 0;text-align:center;color:#ff4500}.memb-info[data-v-20adb6ca]{display:inline-block;margin-left:10px;color:green}", ""]);

// exports


/***/ }),

/***/ 1546:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(862)(false);
// imports


// module
exports.push([module.i, ".pie[data-v-2964a040]{position:relative}.pie .duration[data-v-2964a040]{position:absolute;top:50%;left:50%;transform:translateX(-50%);font-size:15px}.pie .duration span[data-v-2964a040]{font-size:20px}.chart[data-v-2964a040]{width:100%;height:300px;margin-bottom:30px}.qrcode[data-v-2964a040]{text-align:center}.qrcode img[data-v-2964a040]{width:250px}", ""]);

// exports


/***/ }),

/***/ 1570:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(862)(false);
// imports


// module
exports.push([module.i, ".date[data-v-36745caf]{width:120px}", ""]);

// exports


/***/ }),

/***/ 1582:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(862)(false);
// imports


// module
exports.push([module.i, ".warning[data-v-39cd5bd1]{color:#ff4500;line-height:1.7;margin-bottom:20px}.card-pay table[data-v-39cd5bd1]{margin-top:15px}.card-pay .tips[data-v-39cd5bd1]{margin-left:20px;color:#bbb}.card-pay .tips[data-v-39cd5bd1]:hover{color:#ff4500}.card-form[data-v-39cd5bd1]{width:100%}.card-form td[data-v-39cd5bd1],.card-form th[data-v-39cd5bd1]{padding:10px 0}.card-form th[data-v-39cd5bd1]{text-align:right;font-weight:400;color:#888}.card-form td[data-v-39cd5bd1]{padding-left:15px}.charge-by-hour-conf[data-v-39cd5bd1]{margin-top:10px;border:1px dashed #ddd;padding:10px}.charge-by-hour-conf ul[data-v-39cd5bd1]{padding-top:10px}.charge-by-hour-conf li[data-v-39cd5bd1]{display:block;padding:5px 0}.charge-by-hour-conf li .input-s[data-v-39cd5bd1]{width:80px;margin:0 5px}.phone-no[data-v-39cd5bd1]{font-size:16px;font-weight:700;width:200px}.input-roomno[data-v-39cd5bd1]{width:100px;margin-right:10px;margin-bottom:10px}.more-chare-conf[data-v-39cd5bd1]{background:#f5f5f5;margin:10px 0 0;padding:10px}.more-chare-conf input[data-v-39cd5bd1]{width:80px;margin:0 10px;text-align:center;font-weight:700}.more-entry-conf[data-v-39cd5bd1]{padding-top:5px}.more-entry-conf input[data-v-39cd5bd1]{width:70px;text-align:center;border:0;border-bottom:1px solid #888;border-radius:0;outline:none;padding:2px 0;height:25px;font-weight:700;font-size:13px}", ""]);

// exports


/***/ }),

/***/ 1599:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(862)(false);
// imports


// module
exports.push([module.i, ".online-pay-apply-edit .myform[data-v-475e598c]{width:1050px;display:flex;flex-direction:column}.online-pay-apply-edit .myform[data-v-475e598c] .ivu-form-item{width:760px}.online-pay-apply-edit .myform .mytbl[data-v-475e598c]{padding-bottom:15px;overflow:visible}.online-pay-apply-edit .myform .mytbl th[data-v-475e598c]{text-align:center}.online-pay-apply-edit .myform .mytbl td[data-v-475e598c] .ivu-form-item{width:630px;display:block}.online-pay-apply-edit .myform .mytbl td[data-v-475e598c] .ivu-form-item .ivu-form-item-label{width:100px!important}.online-pay-apply-edit .myform .mytbl td[data-v-475e598c] .ivu-form-item .ivu-form-item-content{margin-left:100px!important}.online-pay-apply-edit .myform .mytbl td[data-v-475e598c]:first-of-type{border-right:0}.online-pay-apply-edit .fixed[data-v-475e598c]{width:400px;position:fixed;top:158px;right:50px;background:#fff;z-index:11;overflow:initial;box-shadow:0 5px 6px rgba(0,0,0,.5)}.online-pay-apply-edit .fixed th[data-v-475e598c]{background:#fff}.online-pay-apply-edit .fixed td[data-v-475e598c]{cursor:pointer}.online-pay-apply-edit .fixed .title th[data-v-475e598c]{text-align:center;font-size:14px;background:#f0f0f0}.online-pay-apply-edit .fixed .title th[data-v-475e598c] .mytips>em:before{border:none}.online-pay-apply-edit[data-v-475e598c] .ivu-form .ivu-form-item{margin-bottom:0;padding-top:8px;padding-bottom:8px}.online-pay-apply-edit[data-v-475e598c] .ivu-form .ivu-form-item .ivu-form-item-content{display:flex}.online-pay-apply-edit[data-v-475e598c] .ivu-form .ivu-cascader-label{font-size:12px}.online-pay-apply-edit .gray[data-v-475e598c]{margin-left:20px}.online-pay-apply-edit .gray[data-v-475e598c]:hover{color:red}.online-pay-apply-edit .form-submit-bottom[data-v-475e598c]{padding-left:387px}em[data-v-475e598c]{z-index:11}.mytips[data-v-475e598c]{top:0}.error[data-v-475e598c]{position:relative}.error[data-v-475e598c] .ivu-form-item-content:after{content:\"\\8BF7\\4FEE\\6539\\FF01\";display:inline-block;z-index:7;color:red;margin-left:20px}[data-v-475e598c].ivu-collapse .ivu-collapse-header{padding-left:20px}[data-v-475e598c].ivu-collapse .ivu-icon-arrow-right-b{margin-right:18px}", ""]);

// exports


/***/ }),

/***/ 1605:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(862)(false);
// imports


// module
exports.push([module.i, ".code-warp[data-v-4a053c24]{word-break:break-all}.query-section[data-v-4a053c24]{display:flex;align-items:center}.gary[data-v-4a053c24]{color:gray;margin-left:10px}.gary[data-v-4a053c24]:hover{color:red;cursor:pointer}td[data-v-4a053c24]{min-width:50px}.dy-verify-coupon .mytbl[data-v-4a053c24] .mytips em{bottom:-70px;left:-230px}.dy-verify-coupon .mytbl[data-v-4a053c24] .mytips em:after{bottom:none;top:-18px;left:416px;border-top:10px solid transparent;border-bottom:10px solid #333}.note .item[data-v-4a053c24]{list-style-type:square;padding-left:20px}", ""]);

// exports


/***/ }),

/***/ 1608:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(862)(false);
// imports


// module
exports.push([module.i, "iframe[data-v-4ac2ae6a]{width:100%}.dy-shop-title[data-v-4ac2ae6a]{font-size:14px;margin-left:12px}.dy-shop[data-v-4ac2ae6a]{display:flex;flex-wrap:wrap}.dy-shop li[data-v-4ac2ae6a]{width:222px;padding:20px;margin:10px;border-radius:4px;border:1px solid #ddd;cursor:pointer}.dy-shop li[data-v-4ac2ae6a]:hover{box-shadow:4px 4px 3px #ddd}.dy-shop .dy-item[data-v-4ac2ae6a]{padding:3px 0}.dy-shop .dy-item .bold[data-v-4ac2ae6a]{font-weight:700;font-size:14px}.dy-select-card .form-submit[data-v-4ac2ae6a]{padding-left:110px}.note .item[data-v-4ac2ae6a]{list-style-type:square;padding-left:20px}.row[data-v-4ac2ae6a]{display:flex}.btns button[data-v-4ac2ae6a]{margin-left:10px}.dy-10[data-v-4ac2ae6a]{margin-top:10px}.dy-none[data-v-4ac2ae6a]{color:#999}", ""]);

// exports


/***/ }),

/***/ 1623:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(862)(false);
// imports


// module
exports.push([module.i, ".article[data-v-50e748d8]{line-height:2;width:100%}.article img[data-v-50e748d8]{width:100%;display:block;background:#eee;padding:6px;border-radius:2px}.step[data-v-50e748d8]{margin:10px 0 15px;padding:8px 10px;line-height:1;background:#f5f5f5}.step i[data-v-50e748d8]{color:orange;font-size:20px;padding-right:5px}.row[data-v-50e748d8]{width:1100px;display:flex}.row ul[data-v-50e748d8]{padding:100px 0 0 50px}.-dy-help>ul>li:first-of-type .step[data-v-50e748d8]{margin-top:0}", ""]);

// exports


/***/ }),

/***/ 1637:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(862)(false);
// imports


// module
exports.push([module.i, "[data-v-567b15e4].van-overlay{display:flex;justify-content:center;align-items:center}[data-v-567b15e4].van-overlay .van-loading__spinner,[data-v-567b15e4].van-overlay .van-loading__text{color:#fff}.head[data-v-567b15e4]{margin:20px 0 30px}.head .tit[data-v-567b15e4]{font-size:26px}.head .subtit[data-v-567b15e4]{padding-top:10px;font-size:16px}.head .photo[data-v-567b15e4]{width:60px;height:60px;line-height:60px;display:inline-block;border-radius:50%}.health-report[data-v-567b15e4]{position:relative}.health-report .bottom-img[data-v-567b15e4]{position:absolute;bottom:-10px;width:100%;background:#dce6ff;padding:20px 16px}.health-report .bottom-img .bottom[data-v-567b15e4]{display:block;background:#0f90f9;border-radius:44px;height:44px;text-align:center;line-height:44px;color:#fff;font-size:16px}.health-report .top-right[data-v-567b15e4]{position:absolute;top:72px;right:16px;width:84px;height:27px;text-align:center;line-height:24px;border-radius:27px;font-size:16px;border:1px solid #12152e}.health-report-box[data-v-567b15e4]{background:#dce6ff;padding:16px}.health-report-box .info[data-v-567b15e4]{display:flex;height:40px;margin-bottom:10px}.health-report-box .info .img-hd[data-v-567b15e4]{margin-right:12px;border-radius:50%;background:#fff;overflow:hidden}.health-report-box .info .img-hd img[data-v-567b15e4]{width:40px;height:40px}.health-report-box .info .information .phone-no[data-v-567b15e4]{font-size:16px;font-weight:700}.health-report-box .content .hd-title[data-v-567b15e4]{font-size:18px;font-weight:700;margin:14px 0}.health-report-box .content .h-r-box[data-v-567b15e4]{width:100%;background-color:#fff;border-radius:20px;overflow:hidden;margin-bottom:30px}.health-report-box .content .h-r-box .h-r-title[data-v-567b15e4]{width:100%;background:#12152e;color:#fff;padding:12px 15px;text-align:center}.health-report-box .content .h-r-box .h-r-title span[data-v-567b15e4]{font-size:18px;font-weight:700;opacity:1}.health-report-box .content .user-info .u-i-content[data-v-567b15e4]{background-color:#faf8f8;padding-bottom:25px}.health-report-box .content .user-info .u-i-content .u-i-data[data-v-567b15e4]{display:flex;padding:30px;justify-content:space-between}.health-report-box .content .user-info .u-i-content .u-i-data .item .u-i-count[data-v-567b15e4]{font-size:36px;text-align:center}.health-report-box .content .user-info .u-i-content .u-i-data .item .u-i-name[data-v-567b15e4]{font-size:18px;text-align:center}.health-report-box .content .user-info .u-i-content .u-i-data .w-75[data-v-567b15e4]{width:100px}.health-report-box .content .user-info .u-i-content .u-i-data .u-i-b[data-v-567b15e4]{border-right:1px solid #6883e8}.health-report-box .content .user-info .u-i-content .u-i-body[data-v-567b15e4]{color:#12152e}.health-report-box .content .user-info .u-i-content .u-i-body ul[data-v-567b15e4]{width:100%;display:flex;height:290px;align-items:center}.health-report-box .content .user-info .u-i-content .u-i-body ul li[data-v-567b15e4]{flex:1;height:125px;text-align:center}.health-report-box .content .user-info .u-i-content .u-i-body ul li img[data-v-567b15e4]{height:100%;overflow:auto}.health-report-box .content .user-info .u-i-content .u-i-body ul .u-i-center[data-v-567b15e4]{flex:none;height:100%;width:150px;padding-top:30px;border-radius:20px;background-color:#fff;position:relative;box-shadow:0 15px 33px 0 hsla(29,22%,51%,.1);z-index:1}.health-report-box .content .user-info .u-i-content .u-i-body ul .u-i-center[data-v-567b15e4]:before{position:absolute;bottom:53px;left:50%;transform:translateX(-50%);display:block;content:\"\";width:90px;height:20px;background:#12152e;z-index:-1;border-radius:50%}.health-report-box .content .user-info .u-i-content .u-i-body ul .u-i-center img[data-v-567b15e4]{height:200px;z-index:2}.health-report-box .content .user-info .u-i-content .u-i-body ul .u-i-center span[data-v-567b15e4]{width:100%;position:absolute;bottom:15px;left:50%;transform:translateX(-50%);font-size:18px;color:#12152e;margin-top:10px}.health-report-box .content .b-component .b-c-content[data-v-567b15e4]{background-color:hsla(0,0%,85%,.2)}.health-report-box .content .b-component .b-c-content ul li[data-v-567b15e4]{width:100%;height:45px;line-height:45px;padding:0 15px;display:flex;justify-content:space-between;padding-right:23px}.health-report-box .content .b-component .b-c-content ul li[data-v-567b15e4]:nth-of-type(odd){background:#fff}.health-report-box .content .b-component .b-c-content ul li .b-c-title[data-v-567b15e4]{width:100px;font-size:15px;color:#12152e}.health-report-box .content .b-component .b-c-content ul li .b-c-count[data-v-567b15e4]{font-size:15px;color:#12152e}.health-report-box .content .b-component .b-c-content ul li .b-c-count .b-c-type[data-v-567b15e4]{display:inline-block;width:50px;height:22px;line-height:22px;text-align:center;font-size:12px;border-radius:37px;color:#fff;margin-left:10px}.health-report-box .content .b-component .b-c-content ul li .b-c-count .b-c-type-1[data-v-567b15e4],.health-report-box .content .b-component .b-c-content ul li .b-c-count .b-c-type-4[data-v-567b15e4]{background:#fca201}.health-report-box .content .b-component .b-c-content ul li .b-c-count .b-c-type-2[data-v-567b15e4]{background:#34c27d}.health-report-box .content .b-component .b-c-content ul li .b-c-count .b-c-type-3[data-v-567b15e4]{background:#f95e6a}.health-report-box .content .b-c-type[data-v-567b15e4],.health-report-box .content .s-a-type[data-v-567b15e4]{display:inline-block;width:50px;height:22px;line-height:22px;text-align:center;font-size:12px;border-radius:37px;color:#fff;margin-left:10px}.health-report-box .content .b-c-type-1[data-v-567b15e4],.health-report-box .content .b-c-type-4[data-v-567b15e4],.health-report-box .content .s-a-type2-2[data-v-567b15e4],.health-report-box .content .s-a-type-1[data-v-567b15e4]{background:#fca201}.health-report-box .content .b-c-type-2[data-v-567b15e4],.health-report-box .content .s-a-type2-3[data-v-567b15e4],.health-report-box .content .s-a-type2-4[data-v-567b15e4],.health-report-box .content .s-a-type-2[data-v-567b15e4]{background:#34c27d}.health-report-box .content .b-c-type-3[data-v-567b15e4],.health-report-box .content .s-a-type2-0[data-v-567b15e4],.health-report-box .content .s-a-type2-1[data-v-567b15e4],.health-report-box .content .s-a-type-0[data-v-567b15e4]{background:#f95e6a}.health-report-box .content .fat-analysis .f-n-content ul[data-v-567b15e4]{display:flex;padding:15px}.health-report-box .content .fat-analysis .f-n-content ul li[data-v-567b15e4]{flex:1;padding:17px 0 15px;background:#fff;box-shadow:0 4px 10px 0 rgba(0,0,0,.1);border-radius:5px;text-align:center}.health-report-box .content .fat-analysis .f-n-content ul li .f-n-name[data-v-567b15e4]{font-size:16px}.health-report-box .content .fat-analysis .f-n-content ul li .f-n-count[data-v-567b15e4]{font-size:15px}.health-report-box .content .fat-analysis .f-n-content ul .f-n-type-1[data-v-567b15e4]{color:#fca201}.health-report-box .content .fat-analysis .f-n-content ul .f-n-type-2[data-v-567b15e4]{color:#34c27d}.health-report-box .content .fat-analysis .f-n-content ul .f-n-type-3[data-v-567b15e4]{color:#f95e6a}.health-report-box .content .fat-analysis .f-n-content ul .m-r-15[data-v-567b15e4]{margin-right:12px}.health-report-box .content .body-posture .b-p-content ul[data-v-567b15e4]{padding:15px}.health-report-box .content .body-posture .b-p-content ul li[data-v-567b15e4]{display:flex;width:100%;height:80px;border-radius:20px;border:1px solid rgba(0,0,0,.3);overflow:hidden;margin-bottom:15px}.health-report-box .content .body-posture .b-p-content ul li[data-v-567b15e4]:last-child{margin-bottom:0}.health-report-box .content .body-posture .b-p-content ul li .b-p-img[data-v-567b15e4]{width:100px;background:#eff3f0;display:flex;align-items:center;justify-content:center}.health-report-box .content .body-posture .b-p-content ul li .b-p-img img[data-v-567b15e4]{width:75px;height:44px}.health-report-box .content .body-posture .b-p-content ul li .b-p-count[data-v-567b15e4]{flex:1;padding:10px 15px}.health-report-box .content .body-posture .b-p-content ul li .b-p-count .b-p-top[data-v-567b15e4]{display:flex;justify-content:space-between}.health-report-box .content .body-posture .b-p-content ul li .b-p-count .b-p-top .b-p-name[data-v-567b15e4]{font-size:15px;font-weight:400}.health-report-box .content .body-posture .b-p-content ul li .b-p-count .b-p-top .b-p-angle[data-v-567b15e4]{font-size:12px}.health-report-box .content .body-posture .b-p-content ul li .b-p-count .b-p-bottom[data-v-567b15e4]{display:flex;justify-content:space-between}.health-report-box .content .body-posture .b-p-content ul li .b-p-count .b-p-bottom .item[data-v-567b15e4]{text-align:center}.health-report-box .content .body-posture .b-p-content ul li .b-p-count .b-p-bottom .item span[data-v-567b15e4]{font-size:12px}.health-report-box .content .body-posture .b-p-content ul li .b-p-count .b-p-bottom .item .tag[data-v-567b15e4]{display:block;width:45px;height:5px;border-radius:45px;background:hsla(0,0%,85%,.2);margin:9px 0 5px}.health-report-box .content .body-posture .b-p-content ul li .b-p-count .b-p-bottom .item .tag-0[data-v-567b15e4]{background:#34c27d}.health-report-box .content .body-posture .b-p-content ul li .b-p-count .b-p-bottom .item .tag-1[data-v-567b15e4]{background:#fca201}.health-report-box .content .body-posture .b-p-content ul li .b-p-count .b-p-bottom .item .tag-2[data-v-567b15e4]{background:#f95e6a}.health-report-box .content .sports-ability .s-a-content ul li:nth-of-type(2n) .s-a-item-title[data-v-567b15e4]{background:hsla(0,0%,85%,.2)}.health-report-box .content .sports-ability .s-a-content ul li .s-a-item-title[data-v-567b15e4]{display:flex;justify-content:space-between;cursor:pointer;padding:10px 16px}.health-report-box .content .sports-ability .s-a-content ul li .s-a-item-title .s-a-title[data-v-567b15e4]{font-weight:700;font-size:15px}.health-report-box .content .sports-ability .s-a-content ul li .s-a-item-title .s-a-count[data-v-567b15e4]{font-size:15px}.health-report-box .content .sports-ability .s-a-content ul li .s-a-item-content[data-v-567b15e4]{font-size:15px;padding:10px 16px}.health-report-box .content .eyes .e-content ul li[data-v-567b15e4]{height:45px;line-height:45px;display:flex;justify-content:space-around}.health-report-box .content .eyes .e-content ul li[data-v-567b15e4]:nth-of-type(2n){background:hsla(0,0%,85%,.2)}.health-report-box .content .eyes .e-content ul .e-title[data-v-567b15e4]{height:60px;line-height:60px;text-align:center;font-size:15px}.health-report-box .content .eyes .e-content ul .e-count[data-v-567b15e4],.health-report-box .content .eyes .e-content ul .e-name[data-v-567b15e4]{font-weight:700}.health-report-box .content .eyes .e-content ul .e-count div[data-v-567b15e4],.health-report-box .content .eyes .e-content ul .e-name div[data-v-567b15e4]{font-size:15px}.health-report-box .content .eyes .e-content ul .e-count[data-v-567b15e4]{font-weight:400}.health-report-box .content .weight-propose .w-p-content ul li[data-v-567b15e4]{display:flex;height:45px;line-height:45px;padding:0 24px 0 15px;justify-content:space-between}.health-report-box .content .weight-propose .w-p-content ul li[data-v-567b15e4]:nth-of-type(2n){background:hsla(0,0%,85%,.2)}.health-report-box .content .weight-propose .w-p-content ul li .w-p-title[data-v-567b15e4]{font-weight:700}.health-report-box .content .weight-propose .w-p-content ul li .no-w-color[data-v-567b15e4]{color:#f95e6a;font-weight:700}.health-report-box .content .weight-propose .w-p-content ul li div[data-v-567b15e4]{font-size:15px}.health-report-box .content .four-limbs .f-l-content ul li[data-v-567b15e4]{display:flex;align-items:center;padding:30px 0 24px;flex-direction:column}.health-report-box .content .four-limbs .f-l-content ul li .f-l-count[data-v-567b15e4]{width:100%;height:250px;background:url(\"http://jzongguan.com/imglib/health-report/four-limbs.png\");background-size:196px 250px;background-repeat:no-repeat;background-position:50%;display:flex;align-items:center;flex-direction:column}.health-report-box .content .four-limbs .f-l-content ul li .f-l-count span[data-v-567b15e4]{font-size:15px}.health-report-box .content .four-limbs .f-l-content ul li .f-l-count .f-l-center[data-v-567b15e4]{width:210px;font-weight:700;display:flex;justify-content:space-between;padding:40px 0}.health-report-box .content .four-limbs .f-l-content ul li .f-l-count .f-l-footer[data-v-567b15e4],.health-report-box .content .four-limbs .f-l-content ul li .f-l-count .f-l-top[data-v-567b15e4]{display:flex;justify-content:space-between;padding-top:35px;position:relative;width:250px}.health-report-box .content .four-limbs .f-l-content ul li .f-l-count .f-l-footer[data-v-567b15e4]{padding-top:10px}.health-report-box .content .four-limbs .f-l-content ul li .f-l-count .f-l-ftunk[data-v-567b15e4]{position:absolute;bottom:-12px;left:50%;transform:translateX(-50%)}.health-report-box .content .four-limbs .f-l-content ul li .f-l-name[data-v-567b15e4]{font-size:18px;font-weight:700;margin-top:13px}.health-report-box .content .charts .e-content .chart[data-v-567b15e4]{width:100%;height:200px}.health-report-box .content .charts .e-name[data-v-567b15e4]{display:inline-block;margin-top:5px;font-size:16px;font-weight:700}.health-report-box .content .charts .e-height[data-v-567b15e4],.health-report-box .content .charts .e-weight[data-v-567b15e4]{text-align:center;padding:20px 5px 30px 10px}.health-report-box .content .charts .e-weight[data-v-567b15e4]{padding-top:0}.health-report-box .content .health-charts[data-v-567b15e4]{margin-bottom:0}.health-report-box .content .health-charts .h-c-content ul li[data-v-567b15e4]{padding-bottom:15px}.health-report-box .content .health-charts .h-c-content .h-c-title[data-v-567b15e4]{font-weight:700;font-size:16px;margin:25px 0 0 15px}.health-report-box .content .health-charts .h-c-content .chart[data-v-567b15e4]{width:100%;height:180px}", ""]);

// exports


/***/ }),

/***/ 1663:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(862)(false);
// imports


// module
exports.push([module.i, ".pointer[data-v-69c5348a]{display:block;width:100px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.apply-state-default[data-v-69c5348a]{color:#80848f}.apply-state-finished[data-v-69c5348a]{color:#4bc923}.apply-state-auditing[data-v-69c5348a]{color:#fd9821}.apply-state-canceled[data-v-69c5348a]{color:#d11e38}.mytbl[data-v-69c5348a]{overflow:initial}.mytbl .tab-state .mytips[data-v-69c5348a]{top:0}.note .item[data-v-69c5348a]{list-style-type:square;padding-left:20px}.code_img[data-v-69c5348a]{width:430px}.notice[data-v-69c5348a]{width:100%;text-align:center;margin-bottom:20px}", ""]);

// exports


/***/ }),

/***/ 1671:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(862)(false);
// imports


// module
exports.push([module.i, ".warning[data-v-6ee6f01a]{color:#ff4500;line-height:1.7;margin-bottom:20px}.locker-fee-conf[data-v-6ee6f01a]{width:350px;margin-top:10px}.locker-fee-conf th[data-v-6ee6f01a]{padding-top:5px;padding-bottom:5px;text-align:center}.locker-fee-conf input[data-v-6ee6f01a]{text-align:center}", ""]);

// exports


/***/ }),

/***/ 1675:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(862)(false);
// imports


// module
exports.push([module.i, ".area-list li.item[data-v-712c4378]{display:inline-block;width:255px;border:1px solid #ddd;margin:10px;box-shadow:3px 3px 3px #ddd}.area-list li.item[data-v-712c4378]:hover{box-shadow:3px 3px 3px #bcd6f0}.area-list li.item .area-name[data-v-712c4378]{font-size:14px;text-align:center;line-height:40px;background:#f4f4f4}.area-list li.item .detail[data-v-712c4378]{margin:25px;line-height:1;text-align:center;font-size:13px;padding:15px;border:1px dashed #ddd;border-radius:2px;cursor:pointer}.area-list li.item .detail[data-v-712c4378]:hover{border:1px solid #39f}.area-list li.item .detail .spt[data-v-712c4378]{margin:0;border-top:1px dashed #e4e4e4;padding-top:12px;margin-top:12px}.area-list li.item .detail .usable[data-v-712c4378]{color:orange;font-size:18px;padding:0 3px}.area-list li.item .opt[data-v-712c4378]{border-top:1px solid #eee}.area-list li.item .opt .spt[data-v-712c4378]{padding:0 10px;color:#e4e4e4}.area-list li.item .opt .opt-list li[data-v-712c4378]{float:left;margin:7px 0;width:50%;text-align:center;height:20px;line-height:20px;border-color:#eee}.query-zone[data-v-712c4378]{margin:20px 0 15px}.query-zone .ivu-radio-group[data-v-712c4378]{top:0}.query-zone td[data-v-712c4378]{padding-right:15px}.locker-add li[data-v-712c4378]{display:inline-block;width:82px;margin:5px;text-align:center}.locker-opt[data-v-712c4378]{margin-bottom:10px}.locker-opt button[data-v-712c4378]{margin-right:10px;height:24px}.locker-opt .input-s[data-v-712c4378]{display:inline-block;width:80px}.locker-list[data-v-712c4378]{background:#f4f4f4;padding:5px}.locker-list li[data-v-712c4378]{display:inline-block;background:#fff;text-align:center;padding:5px 0;width:60px;margin:5px;border:1px solid #ddd;border-radius:2px;cursor:pointer}.locker-list li[data-v-712c4378]:hover{border-color:#bbb}.locker-list li.on[data-v-712c4378]{border-color:#999}.locker-hire th[data-v-712c4378]{min-width:70px}.locker-hire .input-s[data-v-712c4378]{display:inline-block;width:132px}.locker-hire .-memb-info[data-v-712c4378]{display:inline-block;margin-left:10px;color:green}.locker-hire .locker-list[data-v-712c4378]{margin-top:10px}.locker-hire li.on[data-v-712c4378]{border-color:orange}.locker-hire li.disable[data-v-712c4378]{background:#eee}.notice-conf[data-v-712c4378]{font-size:13px}.notice-conf label[data-v-712c4378]{display:inline-block;width:120px}.notice-conf .days-conf[data-v-712c4378]{margin:20px 0 0}.notice-conf .tips[data-v-712c4378]{padding:30px 0 0;color:#aaa;font-size:12px}.notice-conf .input-s[data-v-712c4378]{display:inline-block;width:80px;margin:0 3px 0 0;text-align:center;font-weight:700}.notice-conf .submit[data-v-712c4378]{text-align:center;padding-top:20px;margin-top:20px;border-top:1px solid #eee;margin-bottom:-15px}.notice-conf .submit button[data-v-712c4378]{margin:0 5px}.member-cards[data-v-712c4378]{margin-top:10px;background:#fdfdfd;border:1px solid #eee;border-radius:2px}.member-cards .card-list[data-v-712c4378]{padding:5px 10px}.member-cards .err[data-v-712c4378]{padding:15px 0;text-align:center;color:#ff4500}", ""]);

// exports


/***/ }),

/***/ 1679:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(862)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 1740:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(862)(false);
// imports


// module
exports.push([module.i, ".pannel-tools li[data-v-d266ade2]{display:inline-block;width:140px;text-align:center;padding:22px 5px;border-radius:4px;border:1px solid #eee;background:#fff;font-size:13px;margin:8px;cursor:pointer}.pannel-tools li[data-v-d266ade2]:hover{box-shadow:3px 3px 5px #b8d5ee}.pannel-tools li img[data-v-d266ade2]{width:80px;height:80px}.pannel-tools li .t[data-v-d266ade2]{padding-top:15px;line-height:1;font-size:14px}.pannel-tools li .tips[data-v-d266ade2]{font-size:12px;color:#999}", ""]);

// exports


/***/ }),

/***/ 1767:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1489);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(863)("e09ce356", content, true, {});

/***/ }),

/***/ 1774:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1496);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(863)("b4ea29c0", content, true, {});

/***/ }),

/***/ 1777:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1499);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(863)("12807883", content, true, {});

/***/ }),

/***/ 1791:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1513);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(863)("8844833a", content, true, {});

/***/ }),

/***/ 1813:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1535);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(863)("40291cd7", content, true, {});

/***/ }),

/***/ 1815:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1537);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(863)("2edea984", content, true, {});

/***/ }),

/***/ 1824:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1546);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(863)("40669261", content, true, {});

/***/ }),

/***/ 1848:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1570);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(863)("2070561e", content, true, {});

/***/ }),

/***/ 1860:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1582);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(863)("e9d36c58", content, true, {});

/***/ }),

/***/ 1877:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1599);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(863)("4152caef", content, true, {});

/***/ }),

/***/ 1883:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1605);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(863)("040f82cb", content, true, {});

/***/ }),

/***/ 1886:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1608);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(863)("7d7d99fe", content, true, {});

/***/ }),

/***/ 1901:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1623);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(863)("cb6a50c4", content, true, {});

/***/ }),

/***/ 1915:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1637);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(863)("c59ac048", content, true, {});

/***/ }),

/***/ 1941:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1663);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(863)("bbf2c7ec", content, true, {});

/***/ }),

/***/ 1949:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1671);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(863)("fd0283c2", content, true, {});

/***/ }),

/***/ 1953:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1675);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(863)("42d62630", content, true, {});

/***/ }),

/***/ 1957:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1679);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(863)("d43e3df4", content, true, {});

/***/ }),

/***/ 2018:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1740);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(863)("4ecc4d73", content, true, {});

/***/ }),

/***/ 2037:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABRCAYAAACqj0o2AAAACXBIWXMAAAsSAAALEgHS3X78AAAF3UlEQVR4nO2dPVAbRxTHXxhKGKeFJk6DSusF9RKtCQqlgwtTOBOXZAa3xnLNTKCzJp4JFCK4iiKCW0QvZnFpKrkRbRjoybydd5o76XR7p9vd++I3c2OPEXd7f799+97bD31zf38PaQARHwMAXWUA+FbRpD5fl0KI/5JufmIiIuI6ANRYtGqMW92QmADQBYC2EOJSYzNDYU1ERCTrWufrJ4OPIlHbLGjb4HOGGBeRu+lbFu+R0YeN8xUADugSQvRNPcSYiIhYY/HidFWdHFJ7TIipXUS2vD3DXTYODWqfzgFJq4iISJa3o+2G5iC/uanLZ2oRERHL7HueGHttM/zDYsayypm4TUPELQAQGRQQ2OX02X9PTSwREZGs73ctr5McFDGcsTFMxVTdmWO+bkatL4hDIcRm1F+KbIk5FpB4wb0rEpFEzLmADpGFDC1iQQR0iCRkFEtsF0RAhxcc9yoJJSIi7qUofbPJDlebAlGOznyTv3MkTFQouykH5dyBlsh5cOTRKmc8Ylc2EVV3PkigfJVGngT5x4ndGREp6PwzLS9Ur9dhcWHR92e9ix70ej0bzfjer1vP+n2Sw5k9G60KS32tDsvLy/6fboItEQ94SsPDpO68laVuvLjob6EGqPoVK8ZEZCucOhlPglKpZPOpY77RzxIzZYXE0tJSotY4ScTM8Xzjuc0me6zRIyKPyJkMaTY2Nmx26yrH0JJRS4xcS0sT7xrvYH5+3laLhj12KCIrm+n8mHzjx+OPtixymFPP+P1jlllYWIDjv46lVa6srJh8k+94gs4TbOdCRIe1tTV5EdfX1zAYDKBz0oFOp6PzMaTZpdsSc1vqIuukbGdS2hgDGepIEeNOGRaYKrh84oOIU0IG6IhYzlzr00PZGVhUK1ONQ2GJO8aLUpU5OjqSf1LAnQCPHRGtDyqU61KqVqlUZHw3Cv6Aoe91e3sL75vvoXXUgle/vpKhzdzcnLnGeyn71hNNQuJRDDexNhgDCmPe7LyR69JIyNJSSf4nOQyuB0bebNYJGG1A1enX26+tWMnZ2Zm8qGBrmOqsLX9IAjbeNmw8yjqxl9aFIc8Cgg0RyQdSF84zxkW05QOTxOjoTFZYq4VLhq6urmRsSOGKxVK/FkhEY9u6KGZTcXFxIWM8S1OeRpgxuY1LVc87OTmBl7+8zLSAAHBuzCdSGhfkC6nGJwPjHOCIeK77VSrLlcCft1qtXAjoLspq94uqCaMvV190PzIp+o6I2v1i1kbYGAwtsav7zhSqBKHq7qNYXioSGiFEV4pIf9F9c5WIlAqGhT6b0oD9M4xkLFoHF5XPo8mjMEs/yLeq4k1TJa4QyBW0bhG17lIPE/ttb28HWiQJ+OGPD1LwuM8yhFkRqTtTMK2CqjtUpHUXT8n/kfV9Ov3kW/V2Q8+gYmwCfHUSFc9yY0S81LlXhUbo039Pjb7e6o+rSYm4L4SQ63FGMxatS4zp5XZ3d3Xe0kOz2UxKQHBrNSpim/dtaIMmj8J066jQPalwkRDn7gXwHhF5B7r2Be+UIzvTmroETDjv9izyHNuCwWu2+yYWe1JVhwaRODEfdeEELRDYCoOXG5uyRuAZuKerT6UQd3d3kX6X6o7Pfn6WtIDgt/DddzOQSWt0oBiQ9qZQnBgUxnS7XelXU1JzHLNCSMuOKhKUYkN3Pk0ZjzNdkCJ8d1QF7jJFxG5Bt+j60RBC+O7vU1W2N3WHPBnl8yQBlSKy6WZ6R4EGblQaKOdY+Cio/RS9lG22VJN5oc/FKah/HObHQUSZ7Vt3ipAF4TCMgBBFRA7CawURMtJJTZHmnQsiZOSjriJP3udcSDtnhYFXSDpiNC/8No2AoOMQSj4yL8vH/1EcuB5nxrPoJ3mes4CxVoAU+UxZCqK1HJxk6nTjgxQH5vt8VHQ6Tzd283DOtkbYX24ldOL7DVfps3ni+ygP3z2gGRa0ZuBbMLomFmepSNP3sTjfwzL6fSwkNA0C7nKU830sfZPdNBQA8D/umlr3TC+IWAAAAABJRU5ErkJggg=="

/***/ }),

/***/ 2053:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABRCAYAAACqj0o2AAAACXBIWXMAAAsSAAALEgHS3X78AAAGv0lEQVR4nO2dQWwbRRSGn+24NWpUpyJKBKoUKxXiFNIr5UA4gK8JZ6DprXDBEnBuOMMhnMqtCXBvckw5NLnAkZg9oYqqlhCQqlKTKpG2SWyjN35jdte765ndeWN7k0+yZMeZnfHvN/PevJkd59rtNgwjrlNdCGnWfmlua3fYmjtQEV2nWgEAFOs6PfD1jGLxOooKANsAgMJul+a29pmbHIp1EV2nuggAiySeqmCq1EnUNZsWa0VE16mildVIvDJ7hR0aKCYJ+oSzIlYRXae6DAD4eJetEjXWScxtjouziEhOYRUA5o1fPB07+KWatkyjIpKjWBsCy+vHdwCwYsoRGRPRdaorNO7ZGvPSckBWuZH2QqlFdJ3qBABsjID1RYHjZS2NVaYSkca+jRGyvigwNFpMOlbmk9ZKnvdhBgQEcoC7FIppk0hE16ni2HfP6McYPGgM22QcWmh3Z9epove9mTEBg9wqzW2tqf6zliWSB866gMg9mp4qoWyJZOZZ68JxYAi0oDIHVxKRvPBD5kYPIyhkpV/407c7e+LAs0iZskKxqIyJWYgD0zDvOtXVuPKx3ZkcyR2u1uUvvdV93jr6Xblc7sI05IrT3ddt9zG0m4fG2xfgvagsUKSIlEzYNW2FhSsfwNjkEuRKs76/t0+ewunfd6H54pf4stMfQ6441fMeCnm692Ns+ZRgfvJ62PgY153XTAqYK4zDhdlvoHj1ix4BxfvFKSjO3BFChVG8+mWnbIiAonxpVpTH/2NihhIsvXWHWSKHN774xt1Q8cI4fvQZtNw/u++g9Y1NfaRcV/P5z3Dy17cmmh3kgKzRN8eOskTlaF0F0QUVBUTGXr/tf/3qklZ9hSvv+8Zbg2DPXAlerkdECqqNLiDpioACoPNACpdvABQu6dc5+aF2GUVukr/4v70h5bQn4HHkS9eSiUDCJ7Wo/OW3kzZZBd/Y6BORUkFGk6u5V64lKpcvv5OqPMgvkIdlmoR06glUEep90iC7pS7ohVGEVGNbgh6gSJmWfwVBEZUzFzZAB5GG9skeZyu7BtcVkVI/xqd37ePkH0R26UHUrcC8dDBeS2Sxwvbxv4nLRgXWKuhMI1MgNl15RQzbhZUanI4NAksiCsMTIpJZmt5cJMDEwCCEbB2wzaG9+CyRxQolrcM65+V7wGSGd9rISBnDQilioqVCVSx1rS6WvzQ7Ior0VPOIswofLb50WBgVKWJFr5w+jHm+QdO1RBan4qX57L61zyryiq/dVvhPI0zkvXNATsRAb7FLFyaXOjnMwjh3VaI7s46HXmw7GJntZmYm8YamJFgKO3xgAgOTwqx1sF49gO14UYJLC0mzSSpYFdHmmBhEN7uuQ+a7syRtRij22mxXjmJA1ogZIS5Pnee6tyMKFWvkCsx1Vhw1aNi3xD5gGHTS+BpePvrUxtYQEzyRIjasVdmnO8skrtgW8s/3VutOyL4UkfXeNy/9ujNuI5HdTu5kCLNITP2fPrsPzecPlC2WybHtjtGT7WG6DwX37Lz84xNhOSgkjpEYNOPqX7t1JOJNb6K3ODPeWeSPofXiV67mdkUcqhux0YtefPMHMTaKqWLzSIgQJgSK209AEFb9gKm1QyoieHaRoYiiyx7viefY1fE9YZnlG0oL9OIaPB6/gZubhIj4xHWqDRspMV2EWCkW8LHbo0UzIcJDb4iTuX3ZKODx4684Q6Vsi3j69CcbsabQrCsizVzsxYsckDdHz45bj5nZlFuPxwL1oLKfj5JuYnn0sC4Wpyyv43Q3wgZFXB0lEXG8s50tJxrem819c2fai7w5iFaNGL7t2GEJiNgbX84Rm999GvWISA5m51yrSFaD97JEpcKM75jtVsi3BdgGPVYIUSLS7anrHI0a5BKBAUIP3IhLytZI+XM67ETdjd/vBkncxGhv/8fwEnonlSR2eYBiIZZuPWKsxB33orLGUqNzY84q66W5rdiwr6+INJAun9Hxsa4SqegcpIEbn34z0bIRQen8B9BZvKew59YZEA88J5EonR+mte5MLj7rQiof5SLRXrz3CJnFMVJbQEhzah2NkTjPzspJJXWdLuwl8TYS+rZQyCyEP+tJBQRTJ3nSuTEjlREnDiiQTpX+M3kc6gIlK4du2TUCY4f0mj6Yd4KCU/bd5ik4oGyMscNCuI6IrtCpHcN0TKDMBfYkVdPCfVi5FNPmSe9B5MnvxsWT2Do2f4KErFk8wHyTTnln35QwiB9wqHh+wGHBoIU2KG7Fx4bNX8QY+O+xUNAuf0ZE3neNr6PERbHQo6JIGKuKB/ePNEQCAP8B2Pyv05iigowAAAAASUVORK5CYII="

/***/ }),

/***/ 2075:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1848)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1346),
  /* template */
  __webpack_require__(2194),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-36745caf",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 2077:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1901)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1348),
  /* template */
  __webpack_require__(2247),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-50e748d8",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 2078:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1915)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1349),
  /* template */
  __webpack_require__(2261),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-567b15e4",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 2109:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "more-tools"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "more-tools",
      "page": "sms-task"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('section', {
    staticClass: "cnts"
  }, [_c('div', {
    staticClass: "l"
  }, [_vm._v("\n\t\t\t\t共购买短信数： "), _c('b', {
    staticClass: "green big"
  }, [_vm._v(_vm._s(_vm.smsCnts.buys))]), _vm._v(" "), _c('i', [_vm._v("|")]), _vm._v("\n\t\t\t\t已发送短信数： "), _c('b', {
    staticClass: "big"
  }, [_vm._v(_vm._s(_vm.smsCnts.sends))]), _vm._v(" "), _c('i', [_vm._v("|")]), _vm._v("\n\t\t\t\t剩余短信数： "), _c('b', {
    staticClass: "orangered big"
  }, [_vm._v(_vm._s(_vm.smsCnts.remnant))])]), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [_c('a', {
    on: {
      "click": function($event) {
        return _vm.$router.push('/sms-log')
      }
    }
  }, [_vm._v("查看短信记录")]), _vm._v(" "), _c('span', {
    staticClass: "spt"
  }, [_vm._v(" | ")]), _vm._v(" "), _c('a', {
    on: {
      "click": function($event) {
        return _vm.$router.push('/recharge')
      }
    }
  }, [_vm._v("充值短信数 →")])])]), _vm._v(" "), _c('section', [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("短信群发任务")]), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [_c('i-button', {
    attrs: {
      "icon": "android-refresh"
    },
    on: {
      "click": function($event) {
        return _vm.querySmsTaskList(null, true)
      }
    }
  }, [_vm._v("刷新")]), _vm._v("\n\t\t\t\t\t \n\t\t\t\t\t"), _c('i-button', {
    attrs: {
      "type": "primary",
      "icon": "plus"
    },
    on: {
      "click": _vm.openCreateTaskDlg
    }
  }, [_vm._v("新增短信任务")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_vm._m(0), _vm._v(" "), _vm._l((_vm.smsTaskList), function(t) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(t.taskName))]), _vm._v(" "), _c('td', [(t.sendDate) ? [_vm._v(_vm._s(_vm.g.Util.formatDate(t.sendDate)))] : _vm._e(), _vm._v("\n\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t" + _vm._s(_vm.g.Util.formatTimeObject(t.sendTime)) + "\n\t\t\t\t\t\t")], 2), _vm._v(" "), _c('td', [(t.sendStatus === 0) ? _c('span', [_vm._v("未提交")]) : (t.sendStatus === 1) ? _c('span', {
      staticClass: "green"
    }, [_vm._v("已提交")]) : _vm._e()]), _vm._v(" "), _c('td', [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.g.Dict.SmsTaskReceiverTypes[t.receiverType]) + "\n\t\t\t\t\t\t\t"), (t.receiverLimitCards) ? _c('ul', [_c('li', {
      staticClass: "orange p10"
    }, [_vm._v("限定会员卡：")]), _vm._v(" "), _vm._l((t.cardNameArr), function(cardName) {
      return _c('li', [_vm._v(_vm._s(cardName))])
    })], 2) : _vm._e()]), _vm._v(" "), _c('td', [(t.sendStatus === 1) ? [_vm._v(_vm._s(t.signName))] : [_vm._v(_vm._s(_vm.smsSignNameMap[t.signId]))]], 2), _vm._v(" "), _c('td', [_vm._v(_vm._s(t.content))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(t.sentCount))]), _vm._v(" "), _c('td', [(t.checkStatus === 0) ? _c('span', {
      staticClass: "darkred"
    }, [_vm._v("待审核")]) : (t.checkStatus === 1) ? _c('span', {
      staticClass: "orangered"
    }, [_vm._v("审核不通过： " + _vm._s(t.checkRemark))]) : (t.checkStatus === 2) ? _c('span', {
      staticClass: "green"
    }, [_vm._v("审核通过")]) : _vm._e()]), _vm._v(" "), _c('td', [(t.sendStatus === 0) ? _c('ul', {
      staticClass: "opt-list"
    }, [_c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.editSmsTask(t)
        }
      }
    }, [_vm._v("编辑")])]), _vm._v(" "), _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.delSmsTask(t.stId)
        }
      }
    }, [_vm._v("删除")])])]) : _vm._e()])])
  })], 2), _vm._v(" "), (_vm.smsTaskList && !_vm.smsTaskList.length) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("暂无数据")]) : _vm._e()])]), _vm._v(" "), _c('section', [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("短信签名")]), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [_c('i-button', {
    attrs: {
      "icon": "android-refresh"
    },
    on: {
      "click": function($event) {
        return _vm.querySmsSignList(true)
      }
    }
  }, [_vm._v("刷新")]), _vm._v("\n\t\t\t\t\t \n\t\t\t\t\t"), _c('i-button', {
    attrs: {
      "type": "primary",
      "icon": "plus"
    },
    on: {
      "click": _vm.openCreateSignDlg
    }
  }, [_vm._v("新增短信签名")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_vm._m(1), _vm._v(" "), _vm._l((_vm.smsSignList), function(s) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(s.signName))]), _vm._v(" "), _c('td', [(s.checkStatus === 0) ? _c('span', {
      staticClass: "darkred"
    }, [_vm._v("待审核")]) : (s.checkStatus === 1) ? _c('span', {
      staticClass: "orangered"
    }, [_vm._v("审核不通过： " + _vm._s(s.checkRemark))]) : (s.checkStatus === 2) ? _c('span', {
      staticClass: "green"
    }, [_vm._v("审核通过")]) : _vm._e()]), _vm._v(" "), _c('td', [_vm._v(_vm._s(s.updateUname))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(s.updateTime))]), _vm._v(" "), _c('td', [_c('ul', {
      staticClass: "opt-list"
    }, [_c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.openEditSignDlg(s)
        }
      }
    }, [_vm._v("编辑")])]), _vm._v(" "), _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.delSmsSign(s.signId)
        }
      }
    }, [_vm._v("删除")])])])])])
  })], 2), _vm._v(" "), (_vm.smsSignList && !_vm.smsSignList.length) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("暂无数据")]) : _vm._e()])]), _vm._v(" "), _c('section', [_vm._m(2), _vm._v(" "), _c('div', {
    staticClass: "bd remark"
  }, [_c('ol', [_vm._m(3), _vm._v(" "), _c('li', [_vm._v("短信群发的内容可自定义，但是我们需提交审核（"), _c('b', [_vm._v("约1~3日")]), _vm._v("），不符合"), _c('a', {
    attrs: {
      "target": "_blank",
      "href": _vm.g.Conf.IMG_LIB_URL + '/jzg-pc/sms-check.jpg'
    }
  }, [_vm._v("国家规定")]), _vm._v("的短信，将不会发送")]), _vm._v(" "), _c('li', [_vm._v("短信群发状态【未提交】表示还未提交给短信平台发送，【已提交】表示已经提交给短信平台按时发送，此时短信任务不能编辑或删除。")]), _vm._v(" "), _c('li', [_vm._v("对于营销类短信（具体由短信平台决定），短信运营商强制在短信末尾自动加“退订回T”（占4个字），这也算在短信字数内；")]), _vm._v(" "), _vm._m(4)])])])]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "短信签名",
      "width": "600",
      "styles": {
        top: '10px'
      },
      "mask-closable": false
    },
    model: {
      value: (_vm.signDlg),
      callback: function($$v) {
        _vm.signDlg = $$v
      },
      expression: "signDlg"
    }
  }, [_c('p'), _vm._v(" "), _c('i-input', {
    staticStyle: {
      "width": "300px"
    },
    attrs: {
      "placeholder": "请输入合法的短信签名"
    },
    model: {
      value: (_vm.signName),
      callback: function($$v) {
        _vm.signName = (typeof $$v === 'string' ? $$v.trim() : $$v)
      },
      expression: "signName"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "l10"
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.saveSmsSign
    }
  }, [_vm._v("提交")]), _vm._v("\n\t\t\t \n\t\t\t"), _c('i-button', {
    on: {
      "click": function($event) {
        _vm.signDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1), _vm._v(" "), _c('div', {
    staticClass: "sign-remark"
  }, [_c('b', {
    staticClass: "orangered"
  }, [_vm._v("运营商与短信平台对短信签名的规定：")]), _vm._v(" "), _c('p'), _vm._v("3~8个汉字或字母，不支持其它符号（含空格），且必须与本场馆名称、品牌名或营业执照名称相关，否则不予审核通过。\n\t\t")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "短信群发任务",
      "width": "830",
      "styles": {
        top: '10px'
      },
      "mask-closable": false
    },
    model: {
      value: (_vm.taskDlg),
      callback: function($$v) {
        _vm.taskDlg = $$v
      },
      expression: "taskDlg"
    }
  }, [_c('div', {
    staticClass: "tblform"
  }, [_c('table', {
    attrs: {
      "width": "630"
    }
  }, [_c('tr', [_c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("任务名称")]), _vm._v(" "), _c('td', [_c('i-input', {
    attrs: {
      "type": "text"
    },
    model: {
      value: (_vm.smsTask.taskName),
      callback: function($$v) {
        _vm.$set(_vm.smsTask, "taskName", $$v)
      },
      expression: "smsTask.taskName"
    }
  })], 1)]), _vm._v(" "), _c('tr', [_c('th', {
    staticClass: "required"
  }, [_vm._v("短信签名")]), _vm._v(" "), _c('td', [_c('i-select', {
    staticStyle: {
      "width": "270px"
    },
    on: {
      "on-change": _vm.changeSmsSign
    },
    model: {
      value: (_vm.smsTask.signId),
      callback: function($$v) {
        _vm.$set(_vm.smsTask, "signId", $$v)
      },
      expression: "smsTask.signId"
    }
  }, _vm._l((_vm.smsSignList), function(s) {
    return (s.checkStatus === 2) ? _c('i-option', {
      key: s.signId,
      attrs: {
        "value": s.signId
      }
    }, [_vm._v(_vm._s(s.signName))]) : _vm._e()
  }), 1)], 1)]), _vm._v(" "), _c('tr', [_c('th', {
    staticClass: "required"
  }, [_vm._v("计划发送时间")]), _vm._v(" "), _c('td', [_c('DatePicker', {
    staticStyle: {
      "width": "130px"
    },
    attrs: {
      "type": "date",
      "options": _vm.smsSendDateOpt,
      "placeholder": "设置发送日期"
    },
    model: {
      value: (_vm.smsTask.sendDate),
      callback: function($$v) {
        _vm.$set(_vm.smsTask, "sendDate", $$v)
      },
      expression: "smsTask.sendDate"
    }
  }), _vm._v("\n\t\t\t\t\t\t \n\t\t\t\t\t\t"), _c('TimePicker', {
    staticStyle: {
      "width": "130px"
    },
    attrs: {
      "type": "time",
      "format": "HH:mm:ss",
      "placeholder": "设置发送时间",
      "disabled-hours": [0, 1, 2, 3, 4, 5, 6, 7, 8, 19, 20, 21, 22, 23]
    },
    model: {
      value: (_vm.smsTask.sendTime),
      callback: function($$v) {
        _vm.$set(_vm.smsTask, "sendTime", $$v)
      },
      expression: "smsTask.sendTime"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "l10 orange"
  }, [_c('i', {
    staticClass: "iconfont icon-svginfor big"
  }), _vm._v(" 具体发送时间以审核通过后的时间为准")])], 1)]), _vm._v(" "), _c('tr', [_c('th', {
    attrs: {
      "valign": "top"
    }
  }, [_c('div', {
    staticClass: "required",
    staticStyle: {
      "padding-top": "9px"
    }
  }, [_vm._v("短信发送对象")])]), _vm._v(" "), _c('td', {
    staticStyle: {
      "padding-top": "8px",
      "padding-bottom": "15px"
    }
  }, [_c('i-select', {
    model: {
      value: (_vm.smsTask.receiverType),
      callback: function($$v) {
        _vm.$set(_vm.smsTask, "receiverType", _vm._n($$v))
      },
      expression: "smsTask.receiverType"
    }
  }, [_c('i-option', {
    attrs: {
      "value": 0
    }
  }, [_vm._v("所有会员")]), _vm._v(" "), _c('i-option', {
    attrs: {
      "value": 1
    }
  }, [_vm._v("有效会员")]), _vm._v(" "), _c('i-option', {
    attrs: {
      "value": 2
    }
  }, [_vm._v("无效会员")]), _vm._v(" "), _c('i-option', {
    attrs: {
      "value": 3
    }
  }, [_vm._v("未开卡会员")]), _vm._v(" "), _c('i-option', {
    attrs: {
      "value": 4
    }
  }, [_vm._v("所有私教会员")]), _vm._v(" "), _c('i-option', {
    attrs: {
      "value": 5
    }
  }, [_vm._v("有效私教会员")]), _vm._v(" "), _c('i-option', {
    attrs: {
      "value": 6
    }
  }, [_vm._v("无效私教会员")]), _vm._v(" "), _c('i-option', {
    attrs: {
      "value": 7
    }
  }, [_vm._v("未入场锻炼的会籍卡会员")])], 1), _vm._v(" "), _c('ul', {
    staticClass: "rcv-tips"
  }, [_c('li', [_vm._v("有效会员是指，会员至少有一张有效的会员卡")]), _vm._v(" "), _c('li', [_vm._v("无效会员是指，会员的所有会员卡都过期或无剩余额")]), _vm._v(" "), _c('li', [_vm._v("私教会员是指，办理了私教类别的会员卡的会员")])])], 1)]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("限制会员卡")]), _vm._v(" "), _c('td', [_c('i-select', {
    attrs: {
      "multiple": true,
      "filterable": "",
      "placeholder": "即只发送给拥有选定会员卡的会员（可选）"
    },
    model: {
      value: (_vm.receiverLimitCardArr),
      callback: function($$v) {
        _vm.receiverLimitCardArr = $$v
      },
      expression: "receiverLimitCardArr"
    }
  }, _vm._l((_vm.cardList), function(c) {
    return _c('i-option', {
      key: c.cardId,
      attrs: {
        "value": c.cardId
      }
    }, [_vm._v(_vm._s(c.cardName))])
  }), 1)], 1)]), _vm._v(" "), _c('tr', [_c('th', {
    attrs: {
      "valign": "top"
    }
  }, [_c('div', {
    staticClass: "required p10"
  }, [_vm._v("短信内容")])]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "p10"
  }, [_c('i-input', {
    attrs: {
      "type": "textarea",
      "placeholder": "请输入短信内容",
      "rows": 6,
      "disabled": _vm.smsTask.checkStatus === 2
    },
    model: {
      value: (_vm.smsTask.content),
      callback: function($$v) {
        _vm.$set(_vm.smsTask, "content", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "smsTask.content"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "line-height": "40px",
      "height": "40px"
    }
  }, [_c('div', {
    staticClass: "l orangered"
  }, [_c('i', {
    staticClass: "iconfont icon-svginfor big"
  }), _vm._v("\n\t\t\t\t\t\t\t\t短信内容不能换行，短信最多字数为400字。\n\t\t\t\t\t\t\t")]), _vm._v(" "), _c('div', {
    staticClass: "r gray"
  }, [(_vm.smsTask.content) ? [_vm._v(_vm._s(_vm.smsTask.content.length) + " 字")] : _vm._e()], 2)]), _vm._v(" "), _c('div', {
    staticClass: "cnt-tips"
  }, [_c('b', [_vm._v("短信字数计算：")]), _vm._v(" "), _c('ol', {
    staticClass: "p10"
  }, [_c('li', [_vm._v("短信签名：系统自动添加，包括前后的“【”和“】”， 占 " + _vm._s(2 + _vm.smgSignName.length) + " 个字")]), _vm._v(" "), _c('li', [_vm._v("短信内容：占 " + _vm._s(_vm.smsTask.content.length) + " 个字")]), _vm._v(" "), _c('li', [_vm._v("退订回T：系统自动添加，占 4 个字")])]), _vm._v(" "), _c('div', {
    staticClass: "p10"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t共占 "), _c('b', [_vm._v(_vm._s(6 + _vm.smgSignName.length + _vm.smsTask.content.length))]), _vm._v(" 个字\n\t\t\t\t\t\t\t")]), _vm._v(" "), _c('div', {
    staticClass: "more-tips"
  }, [_c('b', [_vm._v("短信计费规则：")]), _vm._v(" "), _c('ol', {
    staticClass: "p10"
  }, [_c('li', [_vm._v("总字数不超过70字，按1条短信计费")]), _vm._v(" "), _c('li', [_vm._v("总字数超过70字，按67字/条计费")]), _vm._v(" "), _c('li', [_vm._v("短信字数包括中文、英文、数字、空格、各种符号等")])])]), _vm._v(" "), _c('div', {
    staticClass: "more-tips orangered"
  }, [_c('i', {
    staticClass: "iconfont icon-svginfor big"
  }), _vm._v(" 提交前，请确保此次群发的短信总数大于剩余短信数，否则不予提交。\n\t\t\t\t\t\t\t")])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-submit center",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('i-button', {
    attrs: {
      "type": "primary",
      "loading": _vm.submitBtnLoading
    },
    on: {
      "click": _vm.saveSmsTask
    }
  }, [_vm._v("提交")]), _vm._v("\n\t\t\t \n\t\t\t"), _c('i-button', {
    on: {
      "click": function($event) {
        _vm.taskDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    staticStyle: {
      "min-width": "100px"
    }
  }, [_vm._v("任务名称")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("短信发送时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "65"
    }
  }, [_vm._v("状态")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "120"
    }
  }, [_vm._v("发送对象")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("短信签名")]), _vm._v(" "), _c('th', [_vm._v("短信内容")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("已发人数")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("审核结果")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "92"
    }
  }, [_vm._v("操作")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("签名")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "400"
    }
  }, [_vm._v("审核结果")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("更新人")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("更新时间")]), _vm._v(" "), _c('th', [_vm._v("操作")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit-help"
  }, [_vm._v("短信群发必读")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_vm._v("短信群发可自定义短信签名（例如：【健总管】），但是我们需提交审核，不符合以下规定的，短信将不会发送\n\t\t\t\t\t\t"), _c('div', {
    staticClass: "p10 green"
  }, [_vm._v("运营商与短信平台对短信签名的规定：3~8个汉字或字母，必须与本场馆名称或营业执照名称相关，不得使用人名")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_vm._v("\n\t\t\t\t\t\t短信内容（包含短信签名和前后括号）的计费条数规则（国家统一规定）："), _c('p'), _vm._v("\n\t\t\t\t\t\t总字数不超过70字，按1条计费；超过70字，按67字/条计费；\n\t\t\t\t\t\t包括中文、英文、数字、空格、各种符号等。总字数不能超过400字。\n\t\t\t\t\t")])
}]}

/***/ }),

/***/ 2116:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "mt-verify-coupon"
  }, [_c('shop-nav', {
    attrs: {
      "menu": "more-tools"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "more-tools",
      "page": "mt-verify-coupon"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main staff-query"
  }, [_c('page-header', {
    attrs: {
      "menu-list": _vm.menuList,
      "include-back": true
    }
  }, [_c('help', [_vm._v("\n        把用户所购买的商品兑换成会员卡，新用户自动创建会员并且买卡，老用户自动买卡或续卡\n      ")])], 1), _vm._v(" "), _c('section', {
    staticClass: "query-section"
  }, [_c('table', {
    attrs: {
      "width": "100%"
    }
  }, [_c('tr', [_c('td', [_c('ul', {
    staticClass: "query-cond-inline"
  }, [_c('li', {
    staticClass: "item spt"
  }, [_c('i-input', {
    staticStyle: {
      "width": "150px"
    },
    attrs: {
      "type": "text",
      "icon": "ios-search",
      "placeholder": "根据手机号查询"
    },
    on: {
      "on-enter": function($event) {
        return _vm.queryVerify()
      },
      "on-click": function($event) {
        return _vm.queryVerify()
      }
    },
    model: {
      value: (_vm.query.memberPhoneNo),
      callback: function($$v) {
        _vm.$set(_vm.query, "memberPhoneNo", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "query.memberPhoneNo"
    }
  })], 1), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('i-select', {
    staticStyle: {
      "width": "100px"
    },
    attrs: {
      "placeholder": "核销状态"
    },
    model: {
      value: (_vm.query.status),
      callback: function($$v) {
        _vm.$set(_vm.query, "status", _vm._n($$v))
      },
      expression: "query.status"
    }
  }, [_c('i-option', {
    attrs: {
      "value": ""
    }
  }, [_c('i', {
    staticClass: "gray"
  }, [_vm._v("所有状态")])]), _vm._v(" "), _c('i-option', {
    attrs: {
      "value": 1,
      "label": "核销成功"
    }
  }), _vm._v(" "), _c('i-option', {
    attrs: {
      "value": 2,
      "label": "已撤销"
    }
  }), _vm._v(" "), _c('i-option', {
    attrs: {
      "value": 3,
      "label": "部分撤销"
    }
  })], 1)], 1), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('i-input', {
    staticStyle: {
      "width": "150px"
    },
    attrs: {
      "type": "text",
      "placeholder": "会员姓名模糊查询"
    },
    model: {
      value: (_vm.query.memberName),
      callback: function($$v) {
        _vm.$set(_vm.query, "memberName", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "query.memberName"
    }
  })], 1), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('i-input', {
    staticStyle: {
      "width": "150px"
    },
    attrs: {
      "type": "text",
      "placeholder": "美团商品模糊查询"
    },
    model: {
      value: (_vm.query.dealTitle),
      callback: function($$v) {
        _vm.$set(_vm.query, "dealTitle", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "query.dealTitle"
    }
  })], 1), _vm._v(" "), _c('li', {
    staticClass: "item spt"
  }, [_c('DatePicker', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "type": "datetimerange",
      "format": "yyyy-MM-dd",
      "placeholder": "核销日期查询"
    },
    on: {
      "on-change": _vm.changeDateFun
    },
    model: {
      value: (_vm.dateList),
      callback: function($$v) {
        _vm.dateList = $$v
      },
      expression: "dateList"
    }
  })], 1), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('i-button', {
    staticStyle: {
      "margin-right": "10px",
      "width": "100px"
    },
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.queryVerify()
      }
    }
  }, [_vm._v("查询")]), _vm._v(" "), _c('i-button', {
    on: {
      "click": _vm.resetQuery
    }
  }, [_vm._v("重置")])], 1)])])])]), _vm._v(" "), (_vm.mtConsumeRole) ? _c('div', {
    staticClass: "right"
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.couponShow = true;
      }
    }
  }, [_vm._v("美团核销")])], 1) : _vm._e()]), _vm._v(" "), _c('section', [_c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_c('tr', [_c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("商品名称")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("姓名")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("手机号")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("商品数量")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("商品类型")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("商品单价")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("核销总金额")]), _vm._v(" "), _c('th', {
    staticStyle: {
      "min-width": "150px"
    }
  }, [_vm._v("购卡名称")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("使用次数")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("使用时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("购卡期限")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("充值金额")]), _vm._v(" "), _c('th', {
    staticStyle: {
      "min-width": "110px"
    }
  }, [_vm._v("操作时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("操作人")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("操作\n              "), _c('Help', [_vm._v("\n                核销成功的商品可进行撤销，只可撤销当天核销且未超过10分钟的团购商品，非团购商品无法撤销\n              ")])], 1)]), _vm._v(" "), _vm._l((_vm.orderList), function(o, idx) {
    return _c('tr', {
      key: idx
    }, [_c('td', [_vm._v(_vm._s(o.dealTitle))]), _vm._v(" "), _c('td', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.viewMemberBase(o)
        }
      }
    }, [_vm._v(_vm._s(o.memberName))])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(o.memberPhoneNo))]), _vm._v(" "), _c('td', [_c('span', {
      class: o.status === 1 ? 'green' : 'none'
    }, [_vm._v(_vm._s(_vm.status[o.status]))])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(o.count))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.bizType[o.bizType]))]), _vm._v(" "), _c('td', [_vm._v("￥" + _vm._s(o.dealPrice.toFixed(2) || 0))]), _vm._v(" "), _c('td', [_vm._v("￥" + _vm._s((o.dealPrice * o.count).toFixed(1) || 0) + " ")]), _vm._v(" "), _c('td', [(o.cardId) ? _c('span', [_vm._v(_vm._s(o.cardName))]) : _vm._e()]), _vm._v(" "), _c('td', [(o.cardTimes && o.cardType === 2) ? _c('span', [_vm._v("\n                " + _vm._s(o.cardTimes * o.count) + " 次\n              ")]) : _vm._e()]), _vm._v(" "), _c('td', [(o.cardTimes && o.cardType === 4) ? _c('span', [_vm._v("\n                " + _vm._s(o.cardTimes * o.count) + " 分钟\n              ")]) : _vm._e()]), _vm._v(" "), _c('td', [(o.cardDays) ? _c('span', [_vm._v(_vm._s(o.cardDays * o.count) + " 天")]) : _vm._e()]), _vm._v(" "), _c('td', [(o.cardAmount) ? _c('span', [_vm._v("￥" + _vm._s((o.cardAmount * o.count).toFixed(2) || 0))]) : _vm._e()]), _vm._v(" "), _c('td', [_vm._v(_vm._s(o.updateTime))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(o.updateUname))]), _vm._v(" "), _c('td', [_c('ul', {
      staticClass: "opt-list"
    }, [_c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.details(o)
        }
      }
    }, [_vm._v("详情")])]), _vm._v(" "), (_vm.mtReverseConsumeRole) ? [(o.bizType === 0 && (o.status === 1 || o.status === 3) && new Date(o.cancelTime).getTime() > new Date().getTime()) ? _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.revokeBtn(o)
        }
      }
    }, [_vm._v("撤销")])]) : _vm._e()] : _vm._e()], 2)])])
  })], 2), _vm._v(" "), (!_vm.orderList.length) ? _c('div', {
    staticClass: "no-data"
  }, [_c('i', {
    staticClass: "gray"
  }, [_vm._v("暂无数据")])]) : _vm._e(), _vm._v(" "), (_vm.totalCount && _vm.totalCount > 30) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "current": _vm.query.page,
      "total": _vm.totalCount,
      "page-size": 30,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.queryVerify
    }
  })], 1) : _vm._e()])]), _vm._v(" "), _vm._m(1)], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "mask-closable": false,
      "title": "美团核销",
      "width": "700",
      "styles": {
        top: '20px'
      },
      "footer-hide": ""
    },
    model: {
      value: (_vm.couponShow),
      callback: function($$v) {
        _vm.couponShow = $$v
      },
      expression: "couponShow"
    }
  }, [_c('div', {
    staticClass: "info-view"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("填写信息")])]), _vm._v(" "), _c('i-form', {
    ref: "couponRef",
    staticClass: "myform",
    staticStyle: {
      "width": "420px"
    },
    attrs: {
      "model": _vm.couponInfo,
      "rules": _vm.couponRule,
      "label-width": 110
    }
  }, [_c('form-item', {
    attrs: {
      "prop": "memberPhoneNo",
      "label": "手机号",
      "required": ""
    }
  }, [_c('i-input', {
    attrs: {
      "placeholder": "请输入手机号"
    },
    model: {
      value: (_vm.couponInfo.memberPhoneNo),
      callback: function($$v) {
        _vm.$set(_vm.couponInfo, "memberPhoneNo", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "couponInfo.memberPhoneNo"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "receiptCode",
      "label": "券号",
      "required": ""
    }
  }, [_c('i-input', {
    attrs: {
      "placeholder": "请输入需要核销的券号"
    },
    model: {
      value: (_vm.couponInfo.receiptCode),
      callback: function($$v) {
        _vm.$set(_vm.couponInfo, "receiptCode", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "couponInfo.receiptCode"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "form-submit",
    staticStyle: {
      "padding-left": "110px"
    }
  }, [(_vm.mtConsumeRole) ? _c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.couponQuery
    }
  }, [_vm._v("查券")]) : _vm._e(), _vm._v(" "), _c('i-button', {
    on: {
      "click": function($event) {
        _vm.couponShow = false
      }
    }
  }, [_vm._v("取消")])], 1)], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "mask-closable": false,
      "title": ("核销商品-" + (_vm.orderMap.dealTitle) + (_vm.isVerify ? '' : '（' + _vm.status[_vm.orderMap.status] + '）')),
      "width": "700",
      "styles": {
        top: '20px'
      },
      "footer-hide": ""
    },
    model: {
      value: (_vm.detailsShow),
      callback: function($$v) {
        _vm.detailsShow = $$v
      },
      expression: "detailsShow"
    }
  }, [(_vm.detailsShow) ? _c('div', {
    staticClass: "info-view"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("基本信息")]), _vm._v(" "), _c('table', [_c('tr', [_c('th', {
    class: (_vm.isVerify && !_vm.orderMap.isMember) ? 'required' : '',
    attrs: {
      "width": "110"
    }
  }, [_vm._v("姓名")]), _vm._v(" "), _c('td', [(!_vm.isVerify) ? _c('a', {
    on: {
      "click": function($event) {
        return _vm.viewMemberBase(_vm.orderMap)
      }
    }
  }, [_vm._v(_vm._s(_vm.orderMap.memberName))]) : [(_vm.orderMap.isMember) ? _c('a', {
    on: {
      "click": function($event) {
        return _vm.viewMemberBase(_vm.orderMap)
      }
    }
  }, [_vm._v(_vm._s(_vm.orderMap.memberName))]) : _c('i-input', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "placeholder": "请输入姓名"
    },
    model: {
      value: (_vm.couponInfo.memberName),
      callback: function($$v) {
        _vm.$set(_vm.couponInfo, "memberName", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "couponInfo.memberName"
    }
  })], _vm._v(" "), (_vm.isVerify) ? _c('span', {
    staticClass: "red"
  }, [(_vm.orderMap.isMember) ? [_vm._v("（会员）")] : (_vm.orderMap.memberName) ? [_vm._v("（客户）")] : [_vm._v("（新用户）")]], 2) : _vm._e()], 2)]), _vm._v(" "), _c('tr', [_c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("手机号")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.orderMap.memberPhoneNo))])]), _vm._v(" "), _c('tr', [_c('th', {
    class: (_vm.isVerify && !_vm.orderMap.isMember) ? 'required' : '',
    attrs: {
      "width": "110"
    }
  }, [_vm._v("性别")]), _vm._v(" "), _c('td', [_c('span', [(!_vm.isVerify) ? _c('span', [_vm._v("\n                " + _vm._s(_vm.orderMap.memberSex ? '男' : '女') + "\n              ")]) : [(_vm.orderMap.isMember) ? _c('span', [_vm._v("\n                  " + _vm._s(_vm.orderMap.memberSex ? '男' : '女') + "\n                ")]) : _c('RadioGroup', {
    model: {
      value: (_vm.couponInfo.memberSex),
      callback: function($$v) {
        _vm.$set(_vm.couponInfo, "memberSex", $$v)
      },
      expression: "couponInfo.memberSex"
    }
  }, [_c('Radio', {
    attrs: {
      "label": 1
    }
  }, [_vm._v("男")]), _vm._v(" "), _c('Radio', {
    attrs: {
      "label": 0
    }
  }, [_vm._v("女")])], 1)]], 2)])]), _vm._v(" "), (_vm.orderMap.receiptCodes) ? _c('tr', [_c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("券码")]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "code-warp"
  }, [_vm._v("\n              " + _vm._s(_vm.orderMap.receiptCodes) + "\n            ")])])]) : _vm._e(), _vm._v(" "), (_vm.orderMap.count && _vm.isVerify) ? _c('tr', [_c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("可核销数量")]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "code-warp"
  }, [_vm._v("\n              " + _vm._s(_vm.orderMap.count) + "\n            ")])])]) : _vm._e(), _vm._v(" "), (_vm.isVerify && _vm.orderMap.count > 1) ? _c('tr', [_c('th', {
    staticClass: "required",
    attrs: {
      "width": "110"
    }
  }, [_vm._v("本次核销数量")]), _vm._v(" "), _c('td', [(!_vm.isVerify) ? _c('span', [_vm._v(_vm._s(_vm.orderMap.count))]) : [_c('input-int', {
    attrs: {
      "max": _vm.orderMap.count,
      "min": "1",
      "placeholder": "请输入数量"
    },
    model: {
      value: (_vm.couponInfo.count),
      callback: function($$v) {
        _vm.$set(_vm.couponInfo, "count", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "couponInfo.count"
    }
  })]], 2)]) : _vm._e(), _vm._v(" "), (!_vm.isVerify && _vm.orderMap.count) ? _c('tr', [_c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("本次核销数量")]), _vm._v(" "), _c('td', [_vm._v("\n            " + _vm._s(_vm.orderMap.count) + "\n          ")])]) : _vm._e(), _vm._v(" "), _c('tr', [_c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("商品类型")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.bizType[_vm.orderMap.bizType]))])]), _vm._v(" "), _c('tr', [_c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("商品单价")]), _vm._v(" "), _c('td', [_vm._v("￥" + _vm._s(_vm.orderMap.dealPrice.toFixed(2)))])]), _vm._v(" "), _c('tr', [_c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("商品原价")]), _vm._v(" "), _c('td', [_vm._v("￥" + _vm._s(_vm.orderMap.dealMarketprice.toFixed(2)))])]), _vm._v(" "), _c('tr', [_c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("核销总金额")]), _vm._v(" "), _c('td', [_vm._v("￥" + _vm._s((_vm.orderMap.dealPrice * (_vm.couponInfo.count || _vm.orderMap.count)).toFixed(1)))])]), _vm._v(" "), _c('tr', [_c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("券过期时间")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.orderMap.receiptEndDate))])]), _vm._v(" "), (_vm.orderMap.cardName) ? _c('tr', [_c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("购卡名称")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.orderMap.cardName) + "（" + _vm._s(_vm.g.Dict.CardType[_vm.orderMap.cardType]) + "）")])]) : _vm._e(), _vm._v(" "), (_vm.orderMap.cardDays && _vm.orderMap.cardType === 1) ? _c('tr', [_c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("使用天数")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.orderMap.cardDays * (_vm.couponInfo.count || _vm.orderMap.count)) + " 天")])]) : _vm._e(), _vm._v(" "), (_vm.orderMap.cardTimes && _vm.orderMap.cardType === 2) ? _c('tr', [_c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("使用次数")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.orderMap.cardTimes * (_vm.couponInfo.count || _vm.orderMap.count)) + " 次")])]) : _vm._e(), _vm._v(" "), (_vm.orderMap.cardTimes && _vm.orderMap.cardType === 4) ? _c('tr', [_c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("使用时间")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.orderMap.cardTimes * (_vm.couponInfo.count || _vm.orderMap.count)) + " 分钟")])]) : _vm._e(), _vm._v(" "), (_vm.orderMap.cardAmount) ? _c('tr', [_c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("充值金额")]), _vm._v(" "), _c('td', [_vm._v("￥" + _vm._s((_vm.orderMap.cardAmount * (_vm.couponInfo.count || _vm.orderMap.count)).toFixed(2)))])]) : _vm._e(), _vm._v(" "), (_vm.orderMap.updateUname) ? _c('tr', [_c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("操作人")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.orderMap.updateUname))])]) : _vm._e(), _vm._v(" "), (_vm.orderMap.updateTime) ? _c('tr', [_c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("操作时间")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.orderMap.updateTime))])]) : _vm._e(), _vm._v(" "), (_vm.orderMap.cancelTime) ? _c('tr', [_c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("可撤销期限")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.orderMap.cancelTime))])]) : _vm._e(), _vm._v(" "), _c('tr', [_c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("是否创建会员卡")]), _vm._v(" "), _c('td', [(_vm.isVerify) ? _c('RadioGroup', {
    model: {
      value: (_vm.couponInfo.isTrial),
      callback: function($$v) {
        _vm.$set(_vm.couponInfo, "isTrial", $$v)
      },
      expression: "couponInfo.isTrial"
    }
  }, [(_vm.orderMap.cardId) ? _c('Radio', {
    attrs: {
      "disabled": !_vm.orderMap.cardName,
      "label": 0
    }
  }, [_vm._v("是")]) : _vm._e(), _vm._v(" "), _c('Radio', {
    attrs: {
      "label": 1
    }
  }, [_vm._v("否"), (!_vm.orderMap.cardId) ? _c('span', {
    staticClass: "none"
  }, [_vm._v("（未关联会员卡）")]) : _vm._e()])], 1) : _c('span', [_vm._v("\n              " + _vm._s(_vm.orderMap.isTrial ? '否' : "是") + "\n            ")])], 1)])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "none"
  }, [(_vm.isVerify) ? _c('i-button', {
    staticStyle: {
      "margin-right": "10px",
      "width": "150px"
    },
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.verifyCoupon
    }
  }, [_vm._v("核销（数量：" + _vm._s(_vm.couponInfo.count || _vm.orderMap.count) + "）")]) : _vm._e(), _vm._v(" "), _c('i-button', {
    staticStyle: {
      "width": "100px"
    },
    on: {
      "click": function($event) {
        _vm.detailsShow = false
      }
    }
  }, [_vm._v("关闭")])], 1)]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "会员基本信息",
      "width": "800",
      "styles": {
        top: '10px'
      },
      "ok-text": "关闭",
      "cancel-text": "按Esc键或点击其它地方可关闭"
    },
    model: {
      value: (_vm.viewMemberDlg),
      callback: function($$v) {
        _vm.viewMemberDlg = $$v
      },
      expression: "viewMemberDlg"
    }
  }, [(_vm.viewMemberDlg) ? _c('member-base-info', {
    attrs: {
      "member-id": _vm.viewMemberId
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "选择需要撤销的券码",
      "width": "400",
      "ok-text": "关闭",
      "footer-hide": "",
      "cancel-text": "按Esc键或点击其它地方可关闭"
    },
    model: {
      value: (_vm.buyCouponShow),
      callback: function($$v) {
        _vm.buyCouponShow = $$v
      },
      expression: "buyCouponShow"
    }
  }, [(_vm.buyCouponList && _vm.buyCouponList.length) ? _c('div', [_c('i-select', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "placeholder": "请选择需要撤销的券码"
    },
    model: {
      value: (_vm.cancelCode),
      callback: function($$v) {
        _vm.cancelCode = $$v
      },
      expression: "cancelCode"
    }
  }, _vm._l((_vm.buyCouponList), function(item) {
    return _c('i-option', {
      key: item.code,
      attrs: {
        "disabled": item.isVerify,
        "value": item.code
      }
    }, [_vm._v(_vm._s(item.code) + " "), (item.isVerify) ? _c('span', [_vm._v("(已撤销)")]) : _vm._e()])
  }), 1), _vm._v("\n       \n       \n      "), _c('i-button', {
    staticStyle: {
      "width": "100px"
    },
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.revokeVerifyFun
    }
  }, [_vm._v("确定")])], 1) : _vm._e()]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": _vm.custDlgTitle,
      "width": "850",
      "styles": {
        top: '10px'
      }
    },
    model: {
      value: (_vm.custDlgView),
      callback: function($$v) {
        _vm.custDlgView = $$v
      },
      expression: "custDlgView"
    }
  }, [(_vm.custDlgView) ? _c('cust-detail', {
    attrs: {
      "cust-id": _vm.selectCustId,
      "can-create": false
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "dlg-foot",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('i-button', {
    on: {
      "click": function($event) {
        _vm.custDlgView = false
      }
    }
  }, [_vm._v("关闭")])], 1)], 1)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_c('span', [_vm._v("核销状态")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "note"
  }, [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("核销说明")])]), _vm._v(" "), _c('ol', [_c('li', [_vm._v("\n          贵店如需使用美团核销功能，需通过美团授权绑定页面进行授权操作\n        ")]), _vm._v(" "), _c('li', [_vm._v("美团核销：把用户购买的商品兑换成会员卡，新用户自动创建会员并且买卡，老用户自动买卡或续卡")]), _vm._v(" "), _c('li', [_vm._v("商品名称：是核销用户所购买的商品名称")]), _vm._v(" "), _c('li', [_vm._v("姓名：核销时所填写的核销用户姓名")]), _vm._v(" "), _c('li', [_vm._v("核销状态：\n          "), _c('ul', {
    staticClass: "item"
  }, [_c('li', [_vm._v("核销成功：说明核销商品已经核销成功")]), _vm._v(" "), _c('li', [_vm._v("部分撤销：说明该商品已经核销成功，之后又进行了撤销操作，但是没有全部撤销")]), _vm._v(" "), _c('li', [_vm._v("已撤销：说明该商品已经核销成功，之后又进行了撤销操作，并且全部撤销成功")])])]), _vm._v(" "), _c('li', [_vm._v("商品数量：核销时所填写的数量，核销时默认是\"全部核销\"")]), _vm._v(" "), _c('li', [_vm._v("商品类型：用户所购买商品的类型，分为普通团购、拼团、次卡、通兑标品")]), _vm._v(" "), _c('li', [_vm._v("核销总金额 = 商品数量 x 商品单价")]), _vm._v(" "), _c('li', [_vm._v("购卡名称：核销的商品所绑定会员卡的名称")]), _vm._v(" "), _c('li', [_vm._v("使用次数：核销的商品所绑定会员卡可使用的次数")]), _vm._v(" "), _c('li', [_vm._v("使用时间：核销的商品所绑定会员卡可使用的分钟数")]), _vm._v(" "), _c('li', [_vm._v("购卡期限：核销的商品所绑定会员卡可使用的期限（单位：天）")]), _vm._v(" "), _c('li', [_vm._v("充值金额：核销的商品所绑定会员卡可使用的金额")]), _vm._v(" "), _c('li', [_vm._v("操作说明：\n          "), _c('ul', {
    staticClass: "item"
  }, [_c('li', [_vm._v("详情：可查看核销订单的详细内容")]), _vm._v(" "), _c('li', [_vm._v("撤销：状态是\"核销成功\"或\"部分撤销\"并且是当天核销且未超过10分钟的团购商品可进行操作，非团购商品无法撤销")])])])])])
}]}

/***/ }),

/***/ 2119:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "mt-platform-bind"
  }, [_c('shop-nav', {
    attrs: {
      "menu": "more-tools"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "more-tools",
      "page": "mt-verify-coupon"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('page-header', {
    attrs: {
      "menu-list": _vm.menuList,
      "include-back": true
    }
  }, [_c('help', [_vm._v("\n        让门店与美团进行授权，然后同步美团店铺的商品之后可以绑定门店的会员卡\n      ")])], 1), _vm._v(" "), _c('section', [_c('div', {
    staticClass: "hd"
  }, [(!_vm.expireCom) ? [(_vm.mtProductRole) ? _c('i-button', {
    attrs: {
      "type": "primary",
      "icon": "refresh"
    },
    on: {
      "click": function($event) {
        return _vm.cardSynchronousFun(1)
      }
    }
  }, [_vm._v("同步最新团购商品")]) : _vm._e(), _vm._v(" "), (_vm.mtPowerRole) ? [_vm._v("\n             \n            "), _c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.doubleHandleFun
    }
  }, [_vm._v("重新授权")]), _vm._v(" "), _c('help', {
    attrs: {
      "title": "提示"
    }
  }, [_vm._v("\n              1. 授权时选择了错误的美团门店，可点击\"重新授权\"\n              "), _c('br'), _vm._v("\n              2. 想要切换授权的美团门店，可点击\"重新授权\"\n              "), _c('br'), _vm._v("\n              注意：切换授权的美团门店会导致同步的商品被清空\n            ")])] : _vm._e()] : [(_vm.mtPowerRole) ? _c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.mtAppRoleShow = true
      }
    }
  }, [_vm._v("美团·点评授权绑定")]) : _vm._e()]], 2), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_vm._m(0), _vm._v(" "), _c('tbody', _vm._l((_vm.mtcList), function(m) {
    return _c('tr', {
      key: m.mtcId
    }, [_c('td', [_vm._v(_vm._s(m.title))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.saleStatusMap[m.saleStatus]))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.dealTypeMap[m.dealType]))]), _vm._v(" "), _c('td', [_vm._v("\n                " + _vm._s(m.beginDate) + " ~ " + _vm._s(m.endDate) + "\n              ")]), _vm._v(" "), _c('td', [_vm._v("\n                " + _vm._s(m.receiptBeginDate) + " ~ " + _vm._s(m.receiptEndDate) + "\n              ")]), _vm._v(" "), _c('td', [(m.price) ? _c('span', [_vm._v("\n                  ￥\n                  " + _vm._s(m.price) + "\n                ")]) : _vm._e()]), _vm._v(" "), _c('td', [(m.marketprice) ? _c('span', [_vm._v("\n                  ￥\n                  " + _vm._s(m.marketprice) + "\n                ")]) : _vm._e()]), _vm._v(" "), _c('td', [(m.cardName) ? _c('span', [_vm._v("\n                  " + _vm._s(m.cardName) + "【" + _vm._s(_vm.g.Dict.CardType[m.cardType]) + "】\n                ")]) : _c('span', {
      staticClass: "gray"
    }, [_vm._v("未绑卡")])]), _vm._v(" "), _c('td', [_c('ul', {
      staticClass: "opt-list"
    }, [_c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.selectCardFun(1, m)
        }
      }
    }, [_vm._v("关联会员卡")])]), _vm._v(" "), (m.cardId) ? _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.cancelCardFun(1, m)
        }
      }
    }, [_vm._v("取消关联")])]) : _vm._e()])])])
  }), 0)]), _vm._v(" "), (!_vm.mtcList || !_vm.mtcList.length) ? _c('div', {
    staticClass: "none p15"
  }, [_vm._v("暂无团购商品")]) : _vm._e()]), _vm._v(" "), (_vm.totalGroupCount > 10) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.totalGroupCount,
      "page-size": 10,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.mtGroupGoodsQuery
    }
  })], 1) : _vm._e()]), _vm._v(" "), _c('section', [_c('div', {
    staticClass: "hd"
  }, [(!_vm.expireCom) ? _c('i-button', {
    attrs: {
      "type": "primary",
      "icon": "refresh"
    },
    on: {
      "click": function($event) {
        return _vm.cardSynchronousFun(2)
      }
    }
  }, [_vm._v("同步最新非团购商品")]) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_vm._m(1), _vm._v(" "), _c('tbody', _vm._l((_vm.mtocList), function(m) {
    return _c('tr', {
      key: m.mtocId
    }, [_c('td', [_vm._v(_vm._s(m.name))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.mtOcType[m.type]))]), _vm._v(" "), _c('td', [(m.price) ? _c('span', [_vm._v("\n                  ￥\n                  " + _vm._s(m.price) + "\n                ")]) : _vm._e()]), _vm._v(" "), _c('td', [(m.marketprice) ? _c('span', [_vm._v("\n                  ￥\n                  " + _vm._s(m.marketprice) + "\n                ")]) : _vm._e()]), _vm._v(" "), _c('td', [(m.cardName) ? _c('span', [_vm._v("\n                  " + _vm._s(m.cardName) + "【" + _vm._s(_vm.g.Dict.CardType[m.cardType]) + "】\n                ")]) : _c('span', {
      staticClass: "gray"
    }, [_vm._v("未绑卡")])]), _vm._v(" "), _c('td', [_c('ul', {
      staticClass: "opt-list"
    }, [_c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.selectCardFun(2, m)
        }
      }
    }, [_vm._v("关联会员卡")])]), _vm._v(" "), (m.cardId) ? _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.cancelCardFun(2, m)
        }
      }
    }, [_vm._v("取消关联")])]) : _vm._e()])])])
  }), 0)]), _vm._v(" "), (!_vm.mtocList || !_vm.mtocList.length) ? _c('div', {
    staticClass: "none p15"
  }, [_vm._v("暂无非团购商品")]) : _vm._e()]), _vm._v(" "), (_vm.totalNonGroupCount > 10) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.totalNonGroupCount,
      "page-size": 10,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.mtNonGroupGoodsQuery
    }
  })], 1) : _vm._e()]), _vm._v(" "), _vm._m(2)], 1), _vm._v(" "), _c('Modal', {
    attrs: {
      "width": "800",
      "title": "美团授权",
      "footer-hide": "",
      "mask-closable": false
    },
    model: {
      value: (_vm.mtAppRoleShow),
      callback: function($$v) {
        _vm.mtAppRoleShow = $$v
      },
      expression: "mtAppRoleShow"
    }
  }, [(_vm.mtAppRoleShow) ? [_c('iframe', {
    attrs: {
      "height": "650",
      "src": 'https://e.dianping.com/dz-open/merchant/auth?app_key={0}&state=teststate&scope=[%22tuangou%22]'.format(_vm.g.Conf.MEI_TUAN_APP_KEY)
    }
  })] : _vm._e()], 2), _vm._v(" "), _c('Modal', {
    attrs: {
      "width": "760",
      "title": "选择授权门店",
      "footer-hide": "",
      "mask-closable": false
    },
    model: {
      value: (_vm.mtShow),
      callback: function($$v) {
        _vm.mtShow = $$v
      },
      expression: "mtShow"
    }
  }, [(_vm.mtConf) ? _c('ul', {
    staticClass: "mt-shop"
  }, _vm._l((_vm.mtConf.scoreList), function(s, idx) {
    return _c('li', {
      key: idx,
      on: {
        "click": function($event) {
          return _vm.selectShopFun(s.open_shop_uuid)
        }
      }
    }, [_c('div', {
      staticClass: "mt-item"
    }, [_vm._v("\n          门店名称："), _c('span', {
      staticClass: "bold"
    }, [_vm._v(_vm._s(s.shopname))])]), _vm._v(" "), _c('div', {
      staticClass: "mt-item"
    }, [_vm._v("\n          分店名称：" + _vm._s(s.branchname) + "\n        ")]), _vm._v(" "), _c('div', {
      staticClass: "mt-item"
    }, [_vm._v("\n          所在城市：" + _vm._s(s.cityname) + "\n        ")]), _vm._v(" "), _c('div', {
      staticClass: "mt-item"
    }, [_vm._v("\n          门店地址：" + _vm._s(s.shopaddress) + "\n        ")])])
  }), 0) : _vm._e()]), _vm._v(" "), _c('Modal', {
    attrs: {
      "width": "450",
      "title": '卡券绑定-{0}'.format(_vm.mtGoodsBindCard.title || _vm.mtGoodsBindCard.name),
      "footer-hide": "",
      "mask-closable": false
    },
    model: {
      value: (_vm.cardListShow),
      callback: function($$v) {
        _vm.cardListShow = $$v
      },
      expression: "cardListShow"
    }
  }, [(_vm.cardListShow) ? _c('div', {
    staticClass: "mt-select-card"
  }, [_c('i-form', {
    ref: "mtGoodsRef",
    staticClass: "myform",
    staticStyle: {
      "width": "350px"
    },
    attrs: {
      "model": _vm.mtGoodsBindCard,
      "rules": _vm.mtGoodsBindCardRule,
      "label-width": 110
    }
  }, [_c('form-item', {
    attrs: {
      "prop": "cardId",
      "label": "绑定会员卡：",
      "required": ""
    }
  }, [_c('Select', {
    attrs: {
      "filterable": "",
      "clearable": ""
    },
    on: {
      "on-change": _vm.changeCardFun
    },
    model: {
      value: (_vm.mtGoodsBindCard.cardId),
      callback: function($$v) {
        _vm.$set(_vm.mtGoodsBindCard, "cardId", $$v)
      },
      expression: "mtGoodsBindCard.cardId"
    }
  }, _vm._l((_vm.cardList), function(item) {
    return _c('Option', {
      key: item.cardId,
      attrs: {
        "value": item.cardId
      }
    }, [_vm._v(_vm._s(item.cardName))])
  }), 1)], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "cardDays",
      "label": "使用天数：",
      "required": _vm.selectCard && _vm.selectCard.cardType === 1
    }
  }, [_c('i-input', {
    staticStyle: {
      "width": "100px"
    },
    attrs: {
      "type": "text"
    },
    model: {
      value: (_vm.mtGoodsBindCard.cardDays),
      callback: function($$v) {
        _vm.$set(_vm.mtGoodsBindCard, "cardDays", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "mtGoodsBindCard.cardDays"
    }
  }), _vm._v(" 天\n        ")], 1), _vm._v(" "), (_vm.selectCard && _vm.selectCard.cardType === 2) ? _c('form-item', {
    attrs: {
      "prop": "cardTimes",
      "label": "使用次数：",
      "required": _vm.selectCard && _vm.selectCard.cardType === 2
    }
  }, [_c('i-input', {
    staticStyle: {
      "width": "100px"
    },
    attrs: {
      "type": "text"
    },
    model: {
      value: (_vm.mtGoodsBindCard.cardTimes),
      callback: function($$v) {
        _vm.$set(_vm.mtGoodsBindCard, "cardTimes", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "mtGoodsBindCard.cardTimes"
    }
  }), _vm._v(" 次\n        ")], 1) : _vm._e(), _vm._v(" "), (_vm.selectCard && _vm.selectCard.cardType === 4) ? _c('form-item', {
    attrs: {
      "prop": "cardTimes",
      "label": "使用时间：",
      "required": _vm.selectCard && _vm.selectCard.cardType === 4
    }
  }, [_c('i-input', {
    staticStyle: {
      "width": "100px"
    },
    attrs: {
      "type": "text"
    },
    model: {
      value: (_vm.mtGoodsBindCard.cardTimes),
      callback: function($$v) {
        _vm.$set(_vm.mtGoodsBindCard, "cardTimes", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "mtGoodsBindCard.cardTimes"
    }
  }), _vm._v(" 分钟\n        ")], 1) : _vm._e(), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "cardAmount",
      "label": "充值金额：",
      "required": _vm.selectCard && _vm.selectCard.cardType === 3
    }
  }, [_c('i-input', {
    staticStyle: {
      "width": "100px"
    },
    attrs: {
      "type": "text"
    },
    model: {
      value: (_vm.mtGoodsBindCard.cardAmount),
      callback: function($$v) {
        _vm.$set(_vm.mtGoodsBindCard, "cardAmount", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "mtGoodsBindCard.cardAmount"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "form-submit"
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.selectMtGoodsBindCardFun
    }
  }, [_vm._v("确定")]), _vm._v(" "), _c('i-button', {
    on: {
      "click": function($event) {
        _vm.cardListShow = false
      }
    }
  }, [_vm._v("关闭")])], 1)], 1) : _vm._e()])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', [_c('th', {
    attrs: {
      "width": "240"
    }
  }, [_vm._v("商品")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("状态")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("类型")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "300"
    }
  }, [_vm._v("商品售卖时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "300"
    }
  }, [_vm._v("商品使用时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("商品价格")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("商品原价")]), _vm._v(" "), _c('th', {
    staticStyle: {
      "min-width": "100px"
    }
  }, [_vm._v("关联的会员卡")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "170"
    }
  }, [_vm._v("操作")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', [_c('th', {
    attrs: {
      "width": "240"
    }
  }, [_vm._v("商品")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("类型")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("商品价格")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("商品原价")]), _vm._v(" "), _c('th', {
    staticStyle: {
      "min-width": "100px"
    }
  }, [_vm._v("关联的会员卡")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "170"
    }
  }, [_vm._v("操作")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "note"
  }, [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("授权绑卡说明")])]), _vm._v(" "), _c('ol', [_c('li', [_vm._v("贵店如需使用美团核销功能，需通过本页面授权美团之后绑定会员卡（如有疑惑请联系健总管工作人员）")]), _vm._v(" "), _c('li', [_vm._v("美团点评授权：\n          "), _c('ul', {
    staticClass: "item"
  }, [_c('li', [_vm._v("点击该按钮可使本门店与美团门店进行绑定授权，如有多个美团门店还需从弹出框中选择其中一个门店进行绑定")]), _vm._v(" "), _c('li', [_vm._v("授权成功之后该按钮隐藏，授权到期需重新授权该按钮自动显示，请忽重复授权")])])]), _vm._v(" "), _c('li', [_vm._v("重新授权：请忽重复授权\n          "), _c('ul', {
    staticClass: "item"
  }, [_c('li', [_vm._v("授权时选择了错误的美团门店，可点击\"重新授权\"")]), _vm._v(" "), _c('li', [_vm._v("想要切换授权的美团门店，可点击\"重新授权\"")]), _vm._v(" "), _c('li', [_vm._v("注意：切换授权的美团门店会导致同步的商品被清空")])])]), _vm._v(" "), _c('li', [_vm._v("同步团购商品：把美团店铺的团购商品和代金券都同步到本门店\n          "), _c('ul', {
    staticClass: "item"
  }, [_c('li', [_vm._v("商品：美团店铺商品的名称")]), _vm._v(" "), _c('li', [_vm._v("状态：未开始售卖、售卖中、售卖结束")]), _vm._v(" "), _c('li', [_vm._v("类型：团购套餐、代金券")]), _vm._v(" "), _c('li', [_vm._v("商品售卖时间：该商品可以购买的时间范围（其它时间无法购买）")]), _vm._v(" "), _c('li', [_vm._v("商品使用时间：购买的商品可以核销的时间范围（其它时间无法核销）")]), _vm._v(" "), _c('li', [_vm._v("关联的会员卡：美团商品所绑定本门店的会员卡")]), _vm._v(" "), _c('li', [_vm._v("操作：\n              "), _c('ol', [_c('li', [_vm._v("关联会员卡：把美团商品和会员卡进行绑定\n                  "), _c('ul', {
    staticClass: "item"
  }, [_c('li', [_vm._v("使用天数：期限卡必填，该会员卡可使用的期限（单位：天）")]), _vm._v(" "), _c('li', [_vm._v("使用次数：次数卡必填，该会员卡可使用的次数")]), _vm._v(" "), _c('li', [_vm._v("使用时间：计时卡必填，该会员卡可使用的时间（单位：分钟）")]), _vm._v(" "), _c('li', [_vm._v("充值金额：储值卡必填，其它选填，该会员卡充值的金额")])])]), _vm._v(" "), _c('li', [_vm._v("取消关联：绑定会员卡后显示，取消和美团商品绑定的会员卡")])])])])]), _vm._v(" "), _c('li', [_vm._v("同步非团购商品：把美团店铺的非团购商品都同步到本门店")])])])
}]}

/***/ }),

/***/ 2134:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "more-tools"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "more-tools",
      "page": "ai-mach-conf"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('page-header', {
    attrs: {
      "menu-list": _vm.menuList,
      "include-back": true
    }
  }), _vm._v(" "), _c('section', [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("心率盒")]), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [(_vm.editable && _vm.allowSetting) ? _c('i-button', {
    staticStyle: {
      "margin-left": "6px"
    },
    on: {
      "click": _vm.openParamSetting
    }
  }, [_c('i', {
    staticClass: "iconfont icon-shezhi",
    staticStyle: {
      "font-size": "13px"
    }
  }), _vm._v(" 接口参数配置")]) : _vm._e(), _vm._v(" "), (_vm.editable) ? _c('i-button', {
    staticStyle: {
      "margin-left": "6px"
    },
    attrs: {
      "icon": "plus"
    },
    on: {
      "click": function($event) {
        return _vm.openNewAiMach(10)
      }
    }
  }, [_vm._v("添加设备")]) : _vm._e()], 1)]), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_vm._m(0), _vm._v(" "), _vm._l((_vm.aiMachList), function(m, idx) {
    return (m.machType === 10) ? _c('tr', [_c('td', [_c('b', {
      staticClass: "big"
    }, [_vm._v(_vm._s(m.machNo))])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(m.machName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(m.updateTime))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(m.remark))]), _vm._v(" "), _c('td', [(_vm.editable) ? _c('ul', {
      staticClass: "opt-list"
    }, [_c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.editAiMach(idx)
        }
      }
    }, [_vm._v("编辑")])]), _vm._v(" "), _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.openWdBindDlg(m)
        }
      }
    }, [_vm._v("二维码")])]), _vm._v(" "), _c('li', [_c('a', {
      attrs: {
        "title": "删除"
      },
      on: {
        "click": function($event) {
          return _vm.delAiMach(idx)
        }
      }
    }, [_c('i', {
      staticClass: "iconfont icon-delete normal"
    })])])]) : _vm._e()])]) : _vm._e()
  })], 2), _vm._v(" "), (_vm.aiMachList && !_vm.aiMachList.length) ? _c('div', {
    staticClass: "none p15"
  }, [_vm._v("暂无数据")]) : _vm._e()])]), _vm._v(" "), _c('section', [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("心率数据")]), _vm._v(" "), (_vm.aiMachList && _vm.aiMachList.length) ? _c('div', {
    staticClass: "r"
  }, [_c('a', {
    staticClass: "gray",
    on: {
      "click": function($event) {
        return _vm.queryMemberHeartRate()
      }
    }
  }, [_c('icon', {
    attrs: {
      "type": "refresh",
      "size": "14"
    }
  }), _vm._v(" 刷新\n          ")], 1), _vm._v("\n           \n          "), _c('i-select', {
    staticStyle: {
      "width": "300px"
    },
    on: {
      "on-change": _vm.changeMach
    },
    model: {
      value: (_vm.selectMachIdx),
      callback: function($$v) {
        _vm.selectMachIdx = $$v
      },
      expression: "selectMachIdx"
    }
  }, _vm._l((_vm.aiMachList), function(mach, idx) {
    return _c('i-option', {
      key: idx,
      attrs: {
        "value": idx,
        "label": mach.machNo + '（' + mach.machName + '）'
      }
    }, [_vm._v(_vm._s(mach.machNo) + "（" + _vm._s(mach.machName) + "）")])
  }), 1), _vm._v("\n           \n          "), (_vm.enableHrs) ? _c('i-button', {
    attrs: {
      "type": "primary",
      "icon": "plus"
    },
    on: {
      "click": _vm.openBindDlg
    }
  }, [_vm._v("绑定手环")]) : _vm._e()], 1) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_vm._m(1), _vm._v(" "), _vm._l((_vm.mhrList), function(m) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(m.wdNo))]), _vm._v(" "), _c('td', [(m.memberId) ? _c('a', {
      staticClass: "block",
      on: {
        "click": function($event) {
          return _vm.viewMebmerInfo(m.memberId)
        }
      }
    }, [_vm._v(_vm._s(m.memberName))]) : (m.custId) ? _c('a', {
      on: {
        "click": function($event) {
          return _vm.viewCust(m.custId, m.custName)
        }
      }
    }, [_c('span', {
      staticClass: "custflag"
    }, [_vm._v("客")]), _vm._v(_vm._s(m.custName))]) : _vm._e()]), _vm._v(" "), _c('td', [_vm._v(_vm._s(m.age))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(m.createTime))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(m.startTime))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(m.endTime))]), _vm._v(" "), _c('td', [(m.endTime) ? [_vm._v(_vm._s(m.duration || 0) + " 分钟")] : _vm._e()], 2), _vm._v(" "), _c('td', [(_vm.g.Util.isNotEmpty(m.cal)) ? [_vm._v(_vm._s(m.cal) + " 千卡")] : _vm._e()], 2), _vm._v(" "), _c('td', [_c('ul', {
      staticClass: "opt-list"
    }, [(m.endTime) ? [(m.cal) ? _c('li', [_c('a', {
      staticClass: "block",
      on: {
        "click": function($event) {
          return _vm.viewHeartRateDetail(m)
        }
      }
    }, [_vm._v("心率数据")])]) : _vm._e(), _vm._v(" "), (m.cal) ? _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.openShareDlg(m)
        }
      }
    }, [_vm._v("分享")])]) : _vm._e()] : _vm._e(), _vm._v(" "), _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.delMemberHeartRate(m)
        }
      }
    }, [_vm._v("删除")])]), _vm._v(" "), (!m.endTime) ? _c('li', [_c('a', {
      staticClass: "block",
      on: {
        "click": function($event) {
          return _vm.unbind(m)
        }
      }
    }, [_vm._v("解除绑定")])]) : _vm._e()], 2)])])
  })], 2), _vm._v(" "), (_vm.mhrCount && _vm.mhrCount > 30) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.mhrCount,
      "page-size": 30,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.queryMemberHeartRate
    }
  })], 1) : _vm._e()])])], 1), _vm._v(" "), _c('Modal', {
    attrs: {
      "title": "智能设备配置",
      "width": "850",
      "styles": {
        'top': '10px'
      },
      "closable": true,
      "mask-closable": false
    },
    model: {
      value: (_vm.aiMachDlg),
      callback: function($$v) {
        _vm.aiMachDlg = $$v
      },
      expression: "aiMachDlg"
    }
  }, [(_vm.aiMachDlg && _vm.editable) ? _c('i-form', {
    ref: "aiMach",
    staticClass: "myform",
    staticStyle: {
      "width": "600px",
      "margin-top": "10px"
    },
    attrs: {
      "model": _vm.aiMach,
      "rules": _vm.aiMachRule,
      "label-width": 120
    }
  }, [_c('form-item', {
    attrs: {
      "prop": "machName",
      "label": "名称"
    }
  }, [_c('i-input', {
    staticClass: "input",
    attrs: {
      "type": "text",
      "placeholder": "请设置设备名称，可随意设置，仅作为系统助记用"
    },
    model: {
      value: (_vm.aiMach.machName),
      callback: function($$v) {
        _vm.$set(_vm.aiMach, "machName", $$v)
      },
      expression: "aiMach.machName"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "machBrand",
      "label": "设备品牌"
    }
  }, [_c('i-select', {
    model: {
      value: (_vm.aiMach.machBrand),
      callback: function($$v) {
        _vm.$set(_vm.aiMach, "machBrand", $$v)
      },
      expression: "aiMach.machBrand"
    }
  }, [_c('i-option', {
    attrs: {
      "value": 1
    }
  }, [_vm._v("智奇")]), _vm._v(" "), _c('i-option', {
    attrs: {
      "value": 2
    }
  }, [_vm._v("Take")])], 1)], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "machNo",
      "label": "设备编号"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "text",
      "placeholder": "请正确输入设备上的编号"
    },
    model: {
      value: (_vm.aiMach.machNo),
      callback: function($$v) {
        _vm.$set(_vm.aiMach, "machNo", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "aiMach.machNo"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "remark",
      "label": "备注"
    }
  }, [_c('i-input', {
    staticClass: "input",
    attrs: {
      "type": "textarea",
      "rows": 3
    },
    model: {
      value: (_vm.aiMach.remark),
      callback: function($$v) {
        _vm.$set(_vm.aiMach, "remark", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "aiMach.remark"
    }
  })], 1)], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "form-submit",
    staticStyle: {
      "margin-bottom": "-20px",
      "padding-left": "100px"
    }
  }, [(_vm.editable) ? _c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.submitAiMach()
      }
    }
  }, [_vm._v("提交")]) : _vm._e(), _vm._v(" "), _c('i-button', {
    attrs: {
      "type": "ghost"
    },
    on: {
      "click": function($event) {
        _vm.aiMachDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "心率手环绑定",
      "width": "800",
      "styles": {
        'top': '10px'
      },
      "ok-text": "关闭",
      "cancel-text": "",
      "mask-closable": false
    },
    model: {
      value: (_vm.aiMachBindDlg),
      callback: function($$v) {
        _vm.aiMachBindDlg = $$v
      },
      expression: "aiMachBindDlg"
    }
  }, [_c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_c('tr', [_c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("会员选择")]), _vm._v(" "), _c('td', [_c('i-button', {
    on: {
      "click": function($event) {
        _vm.memberSelectDlg = true
      }
    }
  }, [_vm._v("点击查询会员")]), _vm._v(" "), (_vm.memberName) ? _c('a', {
    staticClass: "l10",
    on: {
      "click": function($event) {
        return _vm.viewMebmerInfo(_vm.aiMachBind.memberId)
      }
    }
  }, [_vm._v(_vm._s(_vm.memberName))]) : _vm._e()], 1)]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("会员年龄")]), _vm._v(" "), _c('td', [_c('input-int', {
    staticStyle: {
      "width": "105px"
    },
    attrs: {
      "min": 1,
      "max": 100
    },
    model: {
      value: (_vm.aiMachBind.memberAge),
      callback: function($$v) {
        _vm.$set(_vm.aiMachBind, "memberAge", $$v)
      },
      expression: "aiMachBind.memberAge"
    }
  }), _vm._v("  岁")], 1)]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("会员体重")]), _vm._v(" "), _c('td', [_c('input-int', {
    staticStyle: {
      "width": "105px"
    },
    attrs: {
      "min": 20,
      "max": 200
    },
    model: {
      value: (_vm.aiMachBind.memberWeight),
      callback: function($$v) {
        _vm.$set(_vm.aiMachBind, "memberWeight", $$v)
      },
      expression: "aiMachBind.memberWeight"
    }
  }), _vm._v("  KG")], 1)]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("手环编号")]), _vm._v(" "), _c('td', [_c('i-input', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "type": "text"
    },
    model: {
      value: (_vm.aiMachBind.wdNo),
      callback: function($$v) {
        _vm.$set(_vm.aiMachBind, "wdNo", $$v)
      },
      expression: "aiMachBind.wdNo"
    }
  })], 1)])])]), _vm._v(" "), _c('div', {
    staticClass: "mt20 center p15"
  }, [_c('i-button', {
    staticClass: "long-btn",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.submitBind
    }
  }, [_vm._v("提交")])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "会员查询与选择",
      "width": "700",
      "styles": {
        'top': '10px'
      },
      "ok-text": "关闭",
      "cancel-text": "按Esc键或点击其它地方可关闭"
    },
    model: {
      value: (_vm.memberSelectDlg),
      callback: function($$v) {
        _vm.memberSelectDlg = $$v
      },
      expression: "memberSelectDlg"
    }
  }, [(_vm.memberSelectDlg) ? _c('member-select', {
    attrs: {
      "after-select": _vm.afterQueryMember
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "会员基本信息",
      "width": "800",
      "styles": {
        top: '10px'
      },
      "ok-text": "关闭",
      "cancel-text": "按Esc键或点击其它地方可关闭"
    },
    model: {
      value: (_vm.viewMemberDlg),
      callback: function($$v) {
        _vm.viewMemberDlg = $$v
      },
      expression: "viewMemberDlg"
    }
  }, [(_vm.viewMemberDlg) ? _c('member-base-info', {
    attrs: {
      "member-id": _vm.selectMemberId
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "会员心率数据详细",
      "width": "1000",
      "styles": {
        top: '10px'
      },
      "ok-text": "关闭",
      "cancel-text": ""
    },
    model: {
      value: (_vm.heartRateDetailDlg),
      callback: function($$v) {
        _vm.heartRateDetailDlg = $$v
      },
      expression: "heartRateDetailDlg"
    }
  }, [(_vm.heartRateDetailDlg) ? [_c('div', {
    staticClass: "pie"
  }, [_c('chart', {
    staticClass: "chart",
    attrs: {
      "options": _vm.pieChartOption
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "duration"
  }, [_vm._v("时长 "), _c('span', [_vm._v(_vm._s(_vm.duration))]), _vm._v(" 分钟")])], 1), _vm._v(" "), (_vm.heartRateChartData && !_vm.g.Util.isEmptyArray(_vm.heartRateChartData.sportxdata)) ? [_c('chart', {
    staticClass: "chart",
    attrs: {
      "options": _vm.heartRatePercentsChartOption
    }
  })] : _vm._e(), _vm._v(" "), _c('chart', {
    staticClass: "chart",
    attrs: {
      "options": _vm.heartRateChartOption
    }
  })] : _vm._e(), _vm._v(" "), _c('div', {
    staticStyle: {
      "line-height": "50px",
      "height": "50px"
    },
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('div', {
    staticClass: "r"
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.heartRateDetailDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)])], 2), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "心率数据分享二维码",
      "width": "500",
      "styles": {
        top: '10px'
      },
      "ok-text": "关闭",
      "cancel-text": ""
    },
    model: {
      value: (_vm.hrsShareDlg),
      callback: function($$v) {
        _vm.hrsShareDlg = $$v
      },
      expression: "hrsShareDlg"
    }
  }, [(_vm.hrsShareDlg) ? _c('div', {
    staticClass: "qrcode"
  }, [_c('img', {
    attrs: {
      "src": _vm.shareQrcodeUrl
    }
  }), _vm._v(" "), _c('p', {
    attrs: {
      "align": "center"
    }
  }, [_vm._v("使用微信扫码后可进入【" + _vm._s(_vm.shareUserName) + "】的本次心率数据页面去分享")])]) : _vm._e()]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "手环绑定二维码",
      "width": "500",
      "styles": {
        top: '10px'
      },
      "ok-text": "关闭",
      "cancel-text": ""
    },
    model: {
      value: (_vm.wdBindQrcodeDlg),
      callback: function($$v) {
        _vm.wdBindQrcodeDlg = $$v
      },
      expression: "wdBindQrcodeDlg"
    }
  }, [(_vm.wdBindQrcodeDlg) ? _c('div', {
    staticClass: "qrcode"
  }, [_c('img', {
    attrs: {
      "src": _vm.wdBindQrcodeUrl
    }
  }), _vm._v(" "), _c('p', {
    attrs: {
      "align": "center"
    }
  }, [_vm._v("会员或客户微信扫码进入手环绑定页面")])]) : _vm._e()]), _vm._v(" "), _c('Modal', {
    attrs: {
      "title": "接口参数配置",
      "width": "550",
      "styles": {
        'top': '10px'
      },
      "closable": true,
      "mask-closable": false
    },
    model: {
      value: (_vm.paramSettingDlg),
      callback: function($$v) {
        _vm.paramSettingDlg = $$v
      },
      expression: "paramSettingDlg"
    }
  }, [(_vm.paramSettingDlg && _vm.editable) ? _c('i-form', {
    staticClass: "myform",
    staticStyle: {
      "width": "400px",
      "margin-top": "10px"
    },
    attrs: {
      "model": _vm.paramSetting,
      "label-width": 120
    }
  }, [_c('form-item', {
    attrs: {
      "prop": "machNo",
      "label": "ID"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "text",
      "placeholder": ""
    },
    model: {
      value: (_vm.paramSetting.hsId),
      callback: function($$v) {
        _vm.$set(_vm.paramSetting, "hsId", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "paramSetting.hsId"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "machNo",
      "label": "Key"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "text",
      "placeholder": ""
    },
    model: {
      value: (_vm.paramSetting.hsKey),
      callback: function($$v) {
        _vm.$set(_vm.paramSetting, "hsKey", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "paramSetting.hsKey"
    }
  })], 1)], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "form-submit center",
    staticStyle: {
      "margin-bottom": "-20px"
    }
  }, [(_vm.editable) ? _c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.submitParamSetting()
      }
    }
  }, [_vm._v("提交")]) : _vm._e(), _vm._v(" "), _c('i-button', {
    attrs: {
      "type": "ghost"
    },
    on: {
      "click": function($event) {
        _vm.paramSettingDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": _vm.custDlgTitle,
      "width": "850",
      "styles": {
        top: '10px'
      }
    },
    model: {
      value: (_vm.custDlgView),
      callback: function($$v) {
        _vm.custDlgView = $$v
      },
      expression: "custDlgView"
    }
  }, [(_vm.custDlgView) ? _c('cust-detail', {
    attrs: {
      "cust-id": _vm.selectCustId,
      "can-create": false
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "dlg-foot",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('i-button', {
    on: {
      "click": function($event) {
        _vm.custDlgView = false
      }
    }
  }, [_vm._v("关闭")])], 1)], 1)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    attrs: {
      "width": "120"
    }
  }, [_vm._v("心率盒编号")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "200"
    }
  }, [_vm._v("名称")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "160"
    }
  }, [_vm._v("更新时间")]), _vm._v(" "), _c('th', [_vm._v("备注")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("操作")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("手环编号")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("姓名")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "50"
    }
  }, [_vm._v("年龄")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "145"
    }
  }, [_vm._v("手环绑定时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "145"
    }
  }, [_vm._v("运动开始时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "145"
    }
  }, [_vm._v("运动结束时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("运动时长")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("燃脂热量")]), _vm._v(" "), _c('th', [_vm._v("操作")])])
}]}

/***/ }),

/***/ 2158:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "more-tools"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "more-tools",
      "page": "ticket"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('section', [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("单次入场券")]), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [_c('i-input', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "type": "text",
      "icon": "ios-search",
      "placeholder": "请输入券编号后按回车查询"
    },
    on: {
      "on-enter": _vm.queryTicketByNo,
      "on-click": _vm.queryTicketByNo
    },
    model: {
      value: (_vm.query.ticketNo),
      callback: function($$v) {
        _vm.$set(_vm.query, "ticketNo", $$v)
      },
      expression: "query.ticketNo"
    }
  }), _vm._v(" "), (_vm.checkinPermit) ? _c('i-button', {
    attrs: {
      "type": "primary",
      "disabled": !(_vm.query.ticketNo && _vm.findTicketByNo)
    },
    on: {
      "click": _vm.checkinTicket
    }
  }, [_vm._v("签到")]) : _vm._e(), _vm._v("\n\t\t\t\t\t \n\t\t\t\t\t"), (_vm.editPermit) ? _c('i-button', {
    attrs: {
      "icon": "plus"
    },
    on: {
      "click": _vm.opencreateTicketDlg
    }
  }, [_vm._v("添加入场券")]) : _vm._e()], 1)]), _vm._v(" "), (_vm.queryPermit) ? _c('table', {
    attrs: {
      "width": "100%"
    }
  }, [_c('tr', [_c('td', [_c('div', {
    staticClass: "query-section"
  }, [_c('ul', {
    staticClass: "query-cond-inline"
  }, [_c('li', {
    staticClass: "item"
  }, [_c('i-select', {
    staticStyle: {
      "width": "100px"
    },
    attrs: {
      "placeholder": "是否签到"
    },
    model: {
      value: (_vm.query.isCheckin),
      callback: function($$v) {
        _vm.$set(_vm.query, "isCheckin", $$v)
      },
      expression: "query.isCheckin"
    }
  }, [_c('i-option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("[不限]")]), _vm._v(" "), _c('i-option', {
    attrs: {
      "value": 1
    }
  }, [_vm._v("已签到")]), _vm._v(" "), _c('i-option', {
    attrs: {
      "value": 0
    }
  }, [_vm._v("未签到")])], 1)], 1), _vm._v(" "), (_vm.query.isCheckin) ? _c('li', {
    staticClass: "item"
  }, [_c('date-picker', {
    staticClass: "daterange",
    attrs: {
      "type": "daterange",
      "format": "yyyy-MM-dd",
      "placement": "bottom-start",
      "placeholder": "选择签到日期范围"
    },
    model: {
      value: (_vm.query.checkinDates),
      callback: function($$v) {
        _vm.$set(_vm.query, "checkinDates", $$v)
      },
      expression: "query.checkinDates"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('i-select', {
    staticStyle: {
      "width": "100px"
    },
    attrs: {
      "placeholder": "是否过期"
    },
    model: {
      value: (_vm.query.isOutdate),
      callback: function($$v) {
        _vm.$set(_vm.query, "isOutdate", $$v)
      },
      expression: "query.isOutdate"
    }
  }, [_c('i-option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("[不限]")]), _vm._v(" "), _c('i-option', {
    attrs: {
      "value": 1
    }
  }, [_vm._v("已过期")]), _vm._v(" "), _c('i-option', {
    attrs: {
      "value": 0
    }
  }, [_vm._v("未过期")])], 1)], 1), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('date-picker', {
    attrs: {
      "type": "date",
      "format": "yyyy-MM-dd",
      "placement": "bottom-end",
      "placeholder": "选择创建日期"
    },
    model: {
      value: (_vm.query.createDate),
      callback: function($$v) {
        _vm.$set(_vm.query, "createDate", $$v)
      },
      expression: "query.createDate"
    }
  })], 1), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.queryTicketList(null)
      }
    }
  }, [_vm._v("查询")])], 1), _vm._v(" "), (_vm.editPermit) ? _c('li', {
    staticClass: "item"
  }, [_c('i-button', {
    on: {
      "click": _vm.openExpDateDlg
    }
  }, [_vm._v("修改有效期")])], 1) : _vm._e()])])]), _vm._v(" "), _c('td', {
    attrs: {
      "align": "right"
    }
  }, [_vm._v("\n\t\t\t\t\t\t查询到 "), _c('b', {
    staticClass: "big"
  }, [_vm._v(_vm._s(_vm.ticketCount))]), _vm._v(" 条记录\n\t\t\t\t\t")])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "mytbl p15"
  }, [_c('table', [_c('tr', [(_vm.editPermit) ? _c('th', {
    staticClass: "ckbox",
    attrs: {
      "width": "40"
    },
    on: {
      "click": function($event) {
        return _vm.selectAll()
      }
    }
  }, [(_vm.isSelectAll) ? _c('i', {
    staticClass: "iconfont icon-checkbox-checked ckbox-1",
    staticStyle: {
      "font-weight": "normal"
    }
  }) : _c('i', {
    staticClass: "iconfont icon-checkbox-empty ckbox-0",
    staticStyle: {
      "font-weight": "normal"
    }
  })]) : _vm._e(), _vm._v(" "), _c('th', {
    attrs: {
      "width": "200"
    }
  }, [_vm._v("券编号")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "200"
    }
  }, [_vm._v("有效期")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "160"
    }
  }, [_vm._v("签到时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("签到操作人")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "160"
    }
  }, [_vm._v("创建时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("创建人")]), _vm._v(" "), _c('th', [_vm._v("操作")])]), _vm._v(" "), _vm._l((_vm.ticketList), function(t, idx) {
    return _c('tr', [(_vm.editPermit) ? _c('td', {
      staticClass: "ckbox",
      on: {
        "click": function($event) {
          return _vm.selectTicket(idx)
        }
      }
    }, [(!t.checkinTime) ? [(!_vm.ticketCkList[idx]) ? _c('i', {
      staticClass: "iconfont icon-checkbox-empty ckbox-0"
    }) : _c('i', {
      staticClass: "iconfont icon-checkbox-checked ckbox-1"
    })] : _vm._e()], 2) : _vm._e(), _vm._v(" "), _c('td', [_vm._v(_vm._s(t.ticketNo))]), _vm._v(" "), _c('td', [(t.beginDate && t.endDate) ? [_vm._v("\n\t\t\t\t\t\t\t\t" + _vm._s(_vm.g.Util.formatDate(t.beginDate)) + " ~ " + _vm._s(_vm.g.Util.formatDate(t.endDate)) + "\n\t\t\t\t\t\t\t")] : _vm._e()], 2), _vm._v(" "), _c('td', [_vm._v(_vm._s(t.checkinTime))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(t.checkinStaffName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(t.createTime))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(t.createUname))]), _vm._v(" "), _c('td', [(!t.checkinTime && _vm.editPermit) ? _c('ul', {
      staticClass: "opt-list"
    }, [_c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.updateTicket(idx)
        }
      }
    }, [_vm._v("编辑")])]), _vm._v(" "), _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.deleteTicket(idx, t.ticketId)
        }
      }
    }, [_vm._v("删除")])])]) : _vm._e(), _vm._v(" "), (_vm.g.data.user.isShopOwner && t.checkinTime) ? _c('a', {
      on: {
        "click": function($event) {
          return _vm.cancelCheckin(idx)
        }
      }
    }, [_vm._v("取消签到")]) : _vm._e()])])
  })], 2), _vm._v(" "), (_vm.ticketList && _vm.ticketList.length) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.ticketCount,
      "page-size": 30,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.queryTicketList
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.ticketList && _vm.ticketList.length === 0) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("\n\t\t\t\t\t未查询到符合条件的单次入场券记录\n\t\t\t\t")]) : _vm._e()])])]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "批量添加入场券",
      "width": "650",
      "styles": {
        'top': '10px'
      },
      "ok-text": "关闭",
      "cancel-text": "",
      "mask-closable": false
    },
    model: {
      value: (_vm.createTicketDlg),
      callback: function($$v) {
        _vm.createTicketDlg = $$v
      },
      expression: "createTicketDlg"
    }
  }, [_c('div', {
    staticClass: "create-ticket"
  }, [_c('div', {
    staticClass: "big"
  }, [_vm._v("\n\t\t\t\t请输入单次入场券编号，每行一个编号，每次最多支持500个编号，重复的编号将会自动忽略\n\t\t\t")]), _vm._v(" "), _c('div', {
    staticClass: "p15"
  }, [_c('i-input', {
    attrs: {
      "type": "textarea",
      "rows": 20
    },
    model: {
      value: (_vm.ticketNos),
      callback: function($$v) {
        _vm.ticketNos = $$v
      },
      expression: "ticketNos"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "ticket-dates"
  }, [_vm._v("\n\t\t\t\t有效期：\n\t\t\t\t"), _c('date-picker', {
    staticClass: "query-date",
    attrs: {
      "type": "date",
      "placeholder": "开始日期"
    },
    model: {
      value: (_vm.ticketBeginDate),
      callback: function($$v) {
        _vm.ticketBeginDate = $$v
      },
      expression: "ticketBeginDate"
    }
  }), _vm._v("\n\t\t\t\t~\n\t\t\t\t"), _c('date-picker', {
    staticClass: "query-date",
    attrs: {
      "type": "date",
      "placeholder": "结束日期"
    },
    model: {
      value: (_vm.ticketEndDate),
      callback: function($$v) {
        _vm.ticketEndDate = $$v
      },
      expression: "ticketEndDate"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "center",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('i-button', {
    staticClass: "long-btn",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.createTickets
    }
  }, [_vm._v("提交")]), _vm._v(" "), _c('i-button', {
    on: {
      "click": function($event) {
        _vm.createTicketDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "批量修改入场券有效期",
      "width": "550",
      "styles": {
        'top': '10px'
      },
      "ok-text": "关闭",
      "cancel-text": "",
      "mask-closable": false
    },
    model: {
      value: (_vm.ticketExpDateUpdateDlg),
      callback: function($$v) {
        _vm.ticketExpDateUpdateDlg = $$v
      },
      expression: "ticketExpDateUpdateDlg"
    }
  }, [_c('div', {
    staticClass: "center p15"
  }, [_vm._v("\n\t\t\t有效期：\n\t\t\t"), _c('date-picker', {
    staticClass: "query-date",
    attrs: {
      "type": "date",
      "placeholder": "开始日期"
    },
    model: {
      value: (_vm.ticketBeginDate),
      callback: function($$v) {
        _vm.ticketBeginDate = $$v
      },
      expression: "ticketBeginDate"
    }
  }), _vm._v("\n\t\t\t~\n\t\t\t"), _c('date-picker', {
    staticClass: "query-date",
    attrs: {
      "type": "date",
      "placeholder": "结束日期"
    },
    model: {
      value: (_vm.ticketEndDate),
      callback: function($$v) {
        _vm.ticketEndDate = $$v
      },
      expression: "ticketEndDate"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-submit center",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.updateTicketExpDate
    }
  }, [_vm._v("提交")]), _vm._v(" "), _c('i-button', {
    on: {
      "click": function($event) {
        _vm.ticketExpDateUpdateDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2160:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "more-tools"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "more-tools",
      "page": "ai-mach-locker"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('page-header', {
    attrs: {
      "menu-list": _vm.menuList,
      "include-back": true
    }
  }), _vm._v(" "), _c('table', {
    staticClass: "page-tbl",
    attrs: {
      "width": "100%"
    }
  }, [_c('tr', [_c('td', {
    staticClass: "machs",
    attrs: {
      "valign": "top",
      "width": "230"
    }
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("租柜列表")]), _vm._v(" "), _c('ul', _vm._l((_vm.aiMachList), function(m, idx) {
    return _c('li', {
      class: {
        on: _vm.selectMachIdx === idx
      },
      on: {
        "click": function($event) {
          return _vm.selectAiMach(idx)
        }
      }
    }, [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(m.machName) + "\n\t\t\t\t\t\t\t"), (_vm.selectMachIdx === idx) ? _c('Icon', {
      staticClass: "l5",
      attrs: {
        "type": "arrow-right-b"
      }
    }) : _vm._e()], 1)
  }), 0)]), _vm._v(" "), _c('td', {
    attrs: {
      "width": "15"
    }
  }, [_vm._v(" ")]), _vm._v(" "), (_vm.selectMach) ? _c('td', {
    staticClass: "lockers",
    attrs: {
      "valign": "top"
    }
  }, [_c('div', {
    staticClass: "-hd"
  }, [_c('div', {
    staticClass: "l"
  }, [_c('ul', {
    staticClass: "states"
  }, [(_vm.lockerStat.emptyCnt) ? _c('li', [_c('span', {
    staticClass: "state state-0"
  }, [_vm._v(" ")]), _vm._v("空闲（" + _vm._s(_vm.lockerStat.emptyCnt) + "）\n\t\t\t\t\t\t\t\t")]) : _vm._e(), _vm._v(" "), (_vm.lockerStat.hiredCnt) ? _c('li', [_c('span', {
    staticClass: "state state-2"
  }, [_vm._v(" ")]), _vm._v("长租中（" + _vm._s(_vm.lockerStat.hiredCnt) + "）"), _c('help', [_vm._v("此统计数包括未过期和已过期的。")])], 1) : _vm._e(), _vm._v(" "), (_vm.lockerStat.hireOutdateCnt) ? _c('li', [_c('span', {
    staticClass: "state state-9"
  }, [_vm._v(" ")]), _vm._v("过期未还（" + _vm._s(_vm.lockerStat.hireOutdateCnt) + "）\n\t\t\t\t\t\t\t\t")]) : _vm._e(), _vm._v(" "), (_vm.lockerStat.usingCnt) ? _c('li', [_c('span', {
    staticClass: "state state-1"
  }, [_vm._v(" ")]), _vm._v("占用（" + _vm._s(_vm.lockerStat.usingCnt) + "）\n\t\t\t\t\t\t\t\t")]) : _vm._e(), _vm._v(" "), (_vm.lockerStat.pausedCnt) ? _c('li', [_c('span', {
    staticClass: "state state-3"
  }, [_vm._v(" ")]), _vm._v("停用（" + _vm._s(_vm.lockerStat.pausedCnt) + "）\n\t\t\t\t\t\t\t\t")]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [_c('checkbox', {
    model: {
      value: (_vm.showTempLocker),
      callback: function($$v) {
        _vm.showTempLocker = $$v
      },
      expression: "showTempLocker"
    }
  }, [_vm._v("临时柜")]), _vm._v(" "), _c('checkbox', {
    model: {
      value: (_vm.showHireLocker),
      callback: function($$v) {
        _vm.showHireLocker = $$v
      },
      expression: "showHireLocker"
    }
  }, [_vm._v("长租柜")]), _vm._v(" "), _c('i-button', {
    attrs: {
      "icon": "android-refresh"
    },
    on: {
      "click": _vm.queryAiMachLocker
    }
  }), _vm._v(" "), (_vm.editable) ? _c('i-button', {
    staticStyle: {
      "margin-left": "5px"
    },
    attrs: {
      "icon": "plus"
    },
    on: {
      "click": _vm.openNewLockerDlg
    }
  }, [_vm._v("添加柜号")]) : _vm._e(), _vm._v(" "), (_vm.lockerList && _vm.lockerList.length) ? _c('i-button', {
    staticStyle: {
      "margin-left": "5px"
    },
    on: {
      "click": function($event) {
        _vm.aiMachLockerlogDlg = true
      }
    }
  }, [_vm._v("租柜使用日志")]) : _vm._e()], 1)]), _vm._v(" "), _c('div', {
    staticClass: "detail"
  }, [(_vm.lockerList && !_vm.lockerList.length) ? _c('div', {
    staticClass: "none"
  }, [_vm._v("尚未添加柜子详细")]) : _c('ul', _vm._l((_vm.lockerList), function(l, idx) {
    return ((_vm.showTempLocker && l.lockerType === 0) || (_vm.showHireLocker && l.lockerType === 1) || (!_vm.showTempLocker && !_vm.showHireLocker)) ? _c('li', [_c('div', {
      class: 'box state-' + l.state,
      on: {
        "click": function($event) {
          return _vm.openLockerDlg(idx)
        }
      }
    }, [_vm._v(_vm._s(l.lockerName))])]) : _vm._e()
  }), 0)])]) : _vm._e()])])], 1), _vm._v(" "), _c('Modal', {
    attrs: {
      "title": "批量添加柜号",
      "width": "740",
      "closable": false,
      "mask-closable": false
    },
    model: {
      value: (_vm.lockerCreateDlg),
      callback: function($$v) {
        _vm.lockerCreateDlg = $$v
      },
      expression: "lockerCreateDlg"
    }
  }, [_c('ul', {
    staticClass: "locker-add"
  }, _vm._l((_vm.newLockerNames), function(name, idx) {
    return _c('li', [_c('span', {
      staticClass: "no"
    }, [_vm._v(_vm._s(_vm.curLockerNum + idx + 1))]), _c('i-input', {
      staticClass: "in",
      attrs: {
        "placeholder": "输入柜名"
      },
      model: {
        value: (_vm.newLockerNames[idx]),
        callback: function($$v) {
          _vm.$set(_vm.newLockerNames, idx, (typeof $$v === 'string' ? $$v.trim() : $$v))
        },
        expression: "newLockerNames[idx]"
      }
    })], 1)
  }), 0), _vm._v(" "), _c('div', {
    staticClass: "form-submit center"
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.createLockers
    }
  }, [_vm._v("提交")]), _vm._v(" "), _c('i-button', {
    on: {
      "click": function($event) {
        _vm.lockerCreateDlg = false
      }
    }
  }, [_vm._v("关闭")]), _vm._v(" "), _c('i-button', {
    attrs: {
      "type": "text"
    },
    on: {
      "click": _vm.genLockerNames
    }
  }, [_vm._v("批量生成柜名")])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })]), _vm._v(" "), _c('Modal', {
    attrs: {
      "title": "柜号详细",
      "width": "650",
      "styles": {
        'top': '10px'
      }
    },
    model: {
      value: (_vm.lockerDlg),
      callback: function($$v) {
        _vm.lockerDlg = $$v
      },
      expression: "lockerDlg"
    }
  }, [(_vm.selectLocker && _vm.selectMach) ? _c('div', {
    staticClass: "tblform"
  }, [_c('table', [_c('tr', [_c('th', [_vm._v("编号")]), _c('td', [_vm._v("#" + _vm._s(_vm.selectLocker.lockerNum))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("名称")]), _vm._v(" "), _c('td', [(_vm.editable) ? [_c('i-input', {
    staticClass: "input",
    attrs: {
      "type": "text"
    },
    model: {
      value: (_vm.selectLocker.lockerName),
      callback: function($$v) {
        _vm.$set(_vm.selectLocker, "lockerName", $$v)
      },
      expression: "selectLocker.lockerName"
    }
  }), _vm._v(" "), _c('i-button', {
    attrs: {
      "size": "small"
    },
    on: {
      "click": _vm.updateLockerName
    }
  }, [_vm._v("更改")])] : [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.selectLocker.lockerName) + "\n\t\t\t\t\t\t")]], 2)]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("租柜类型")]), _vm._v(" "), _c('td', [(!_vm.selectLocker.hireId) ? _c('radio-group', {
    on: {
      "on-change": _vm.updateLockerType
    },
    model: {
      value: (_vm.selectLocker.lockerType),
      callback: function($$v) {
        _vm.$set(_vm.selectLocker, "lockerType", $$v)
      },
      expression: "selectLocker.lockerType"
    }
  }, [_c('radio', {
    attrs: {
      "label": 0
    }
  }, [_vm._v("临时租用柜 "), _c('help', [_vm._v("适用于当天临时租用，一般情况，下班后场馆会检查和清柜")])], 1), _vm._v(" "), _c('radio', {
    attrs: {
      "label": 1
    }
  }, [_vm._v("长期租用柜 "), _c('help', [_vm._v("适用于长期租给会员使用，场馆可收费或不收费")])], 1)], 1) : _c('span', [_vm._v("长期租用柜")])], 1)]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("状态")]), _vm._v(" "), _c('td', [(_vm.selectLocker.state === 9) ? _c('b', [_vm._v("长租过期")]) : _vm._e(), _c('b', [_vm._v(_vm._s(_vm.g.Dict.LockerStates[_vm.selectLocker.state]))])])]), _vm._v(" "), (_vm.selectLocker.lockerType === 1 && _vm.selectLocker.state === 0) ? [_c('tr', [_c('th', {
    staticClass: "required"
  }, [_vm._v("租用会员")]), _vm._v(" "), _c('td', [_c('input-int', {
    staticClass: "input-s",
    attrs: {
      "placeholder": "手机号（按回车查）"
    },
    on: {
      "enter": _vm.queryMember
    },
    model: {
      value: (_vm.member.phoneNo),
      callback: function($$v) {
        _vm.$set(_vm.member, "phoneNo", $$v)
      },
      expression: "member.phoneNo"
    }
  }), _vm._v(" "), (_vm.member && _vm.member.memberId) ? _c('span', {
    staticClass: "memb-info"
  }, [_c('i', {
    staticClass: "iconfont icon-check big"
  }), _vm._v(" "), (_vm.member.name) ? _c('span', [_vm._v(_vm._s(_vm.member.name))]) : _vm._e(), _vm._v(" "), (_vm.member.sex !== null) ? _c('span', [_vm._v("（" + _vm._s(_vm.g.Dict.Sex[_vm.member.sex]) + "）")]) : _vm._e()]) : _vm._e()], 1)]), _vm._v(" "), _c('tr', [_c('th', {
    staticClass: "required"
  }, [_vm._v("租用期限")]), _vm._v(" "), _c('td', [_c('DatePicker', {
    staticClass: "input-s",
    attrs: {
      "type": "date",
      "placeholder": "开始日期"
    },
    model: {
      value: (_vm.selectLocker.beginDate),
      callback: function($$v) {
        _vm.$set(_vm.selectLocker, "beginDate", $$v)
      },
      expression: "selectLocker.beginDate"
    }
  }), _vm._v("\n\t\t\t\t\t\t\t~\n\t\t\t\t\t\t\t"), _c('DatePicker', {
    staticClass: "input-s",
    attrs: {
      "type": "date",
      "placeholder": "结束日期"
    },
    model: {
      value: (_vm.selectLocker.endDate),
      callback: function($$v) {
        _vm.$set(_vm.selectLocker, "endDate", $$v)
      },
      expression: "selectLocker.endDate"
    }
  }), _vm._v(" "), (_vm.selectLocker.beginDate && _vm.selectLocker.endDate) ? _c('span', {
    staticClass: "l10 gray"
  }, [_vm._v(_vm._s(_vm.selectLocker.endDate.subtract(_vm.selectLocker.beginDate)) + " 天")]) : _vm._e()], 1)]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("租用费用")]), _vm._v(" "), _c('td', [_c('input-num', {
    staticClass: "input-s",
    model: {
      value: (_vm.selectLocker.paymentAmount),
      callback: function($$v) {
        _vm.$set(_vm.selectLocker, "paymentAmount", $$v)
      },
      expression: "selectLocker.paymentAmount"
    }
  }), _vm._v("  元\n\t\t\t\t\t\t\t"), _c('span', {
    staticClass: "orange l10"
  }, [_vm._v("（此费用将自动记账为当日应收款）")])], 1)]), _vm._v(" "), _c('tr', [_c('th', {
    attrs: {
      "valign": "top"
    }
  }, [_vm._v("支付方式")]), _vm._v(" "), _c('td', [_c('radio-group', {
    model: {
      value: (_vm.selectLocker.paymentChannel),
      callback: function($$v) {
        _vm.$set(_vm.selectLocker, "paymentChannel", $$v)
      },
      expression: "selectLocker.paymentChannel"
    }
  }, [_c('radio', {
    key: 0,
    attrs: {
      "label": 0
    }
  }, [_vm._v("储值卡")]), _vm._v(" "), _vm._l((_vm.g.Dict.CardPaymentChannel), function(name, key) {
    return _c('radio', {
      key: parseInt(key),
      attrs: {
        "label": key
      }
    }, [_vm._v(_vm._s(name))])
  })], 2), _vm._v(" "), (_vm.selectLocker.paymentChannel === 0) ? _c('div', {
    staticClass: "member-cards"
  }, [(!_vm.member || !_vm.member.name) ? _c('div', {
    staticClass: "err"
  }, [_vm._v("请先设置租用会员")]) : (!_vm.memberCards || !_vm.memberCards.length) ? _c('div', {
    staticClass: "err"
  }, [_vm._v("该会员无储值卡")]) : _c('div', {
    staticClass: "card-list"
  }, [_c('radio-group', {
    attrs: {
      "vertical": ""
    },
    model: {
      value: (_vm.selectMcId),
      callback: function($$v) {
        _vm.selectMcId = $$v
      },
      expression: "selectMcId"
    }
  }, _vm._l((_vm.memberCards), function(mc) {
    return _c('radio', {
      key: mc.mcId,
      attrs: {
        "label": mc.mcId,
        "disabled": !mc.isValid
      }
    }, [_c('b', [_vm._v(_vm._s(mc.cardName))]), _vm._v("： 余额"), _c('span', [_vm._v("￥" + _vm._s(mc.currentAmount))]), _vm._v(" "), (mc.status !== 0) ? _c('span', {
      staticClass: "red"
    }, [_vm._v("（" + _vm._s(_vm.g.Dict.MemberCardStatus[mc.status]) + "）")]) : _vm._e(), _vm._v(" "), (mc.beginDate) ? _c('span', [_vm._v("，使用期限 " + _vm._s(_vm.g.Util.formatDate(mc.beginDate)) + " ~ " + _vm._s(_vm.g.Util.formatDate(mc.endDate)))]) : _vm._e()])
  }), 1)], 1)]) : _vm._e()], 1)]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("备注")]), _vm._v(" "), _c('td', [_c('i-input', {
    attrs: {
      "type": "textarea",
      "rows": 3
    },
    model: {
      value: (_vm.selectLocker.remark),
      callback: function($$v) {
        _vm.$set(_vm.selectLocker, "remark", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "selectLocker.remark"
    }
  })], 1)])] : _vm._e(), _vm._v(" "), (_vm.selectLocker.lockerType === 1 && _vm.selectLocker.hireId) ? [_c('tr', [_c('th', [_vm._v("租用期限")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Util.formatDate(_vm.selectLocker.beginDate)) + " ~ "), _c('b', [_vm._v(_vm._s(_vm.g.Util.formatDate(_vm.selectLocker.endDate)))])])])] : _vm._e(), _vm._v(" "), (_vm.selectLocker.userId) ? _c('tr', [_c('th', [_vm._v("使用人")]), _vm._v(" "), _c('td', [_c('span', {
    staticClass: "orange"
  }, [_vm._v("[" + _vm._s(_vm.selectLocker.userType === 0 ? '会员' : '员工') + "]")]), _vm._v("  " + _vm._s(_vm.selectLocker.userName) + " （" + _vm._s(_vm.selectLocker.userPhone) + "）")])]) : _vm._e(), _vm._v(" "), (_vm.selectLocker.userId) ? _c('tr', [_c('th', [_vm._v("操作时间")]), _vm._v(" "), _c('td', [_vm._v("\n\t\t\t\t\t\t" + _vm._s(_vm.selectLocker.optionTime) + "\n\t\t\t\t\t\t"), (Date.new(_vm.selectLocker.optionTime).compareDatePart(new Date()) < 0) ? _c('span', [_c('b', [_vm._v("\n\t\t\t\t\t\t\t\t（ 过期 " + _vm._s(_vm.g.Util.calcDateDiffDays(new Date(), Date.new(_vm.selectLocker.optionTime))) + " 天\n\t\t\t\t\t\t\t\t\t"), (_vm.selectLocker.lockerFee && !_vm.selectLocker.hireId) ? _c('span', {
    staticClass: "red"
  }, [_vm._v("，扣费 " + _vm._s(_vm.selectLocker.lockerFee) + " 元")]) : _vm._e(), _vm._v("\n\t\t\t\t\t\t\t\t）\n\t\t\t\t\t\t\t")])]) : _vm._e()])]) : _vm._e(), _vm._v(" "), (_vm.selectLockerFeeCancel) ? _c('tr', [_c('th', [_vm._v("扣费取消时间")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.selectLockerFeeCancel.createTime))])]) : _vm._e(), _vm._v(" "), (_vm.selectLockerFeeCancel) ? _c('tr', [_c('th', [_vm._v("扣费取消人")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.selectLockerFeeCancel.createUname))])]) : _vm._e(), _vm._v(" "), (_vm.selectLockerFeeCancel && _vm.selectLockerFeeCancel.remark) ? _c('tr', [_c('th', [_vm._v("扣费取消备注")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.selectLockerFeeCancel.remark))])]) : _vm._e()], 2), _vm._v(" "), _c('div', {
    staticClass: "form-submit"
  }, [(_vm.editable || _vm.machLockerOptPermit) ? [(_vm.selectLocker.lockerType === 1 && _vm.selectLocker.state === 0) ? _c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.saveLockerHire
    }
  }, [_vm._v("租用登记")]) : _vm._e(), _vm._v(" "), (_vm.selectLocker.lockerType === 1 && (_vm.selectLocker.state === 2 || _vm.selectLocker.state === 9)) ? [_c('i-button', {
    on: {
      "click": _vm.returnLockerHire
    }
  }, [_vm._v("还柜")]), _vm._v(" "), _c('i-button', {
    on: {
      "click": _vm.delLockerHire
    }
  }, [_vm._v("取消租用")])] : _vm._e()] : _vm._e(), _vm._v(" "), (_vm.editable || _vm.machLockerOptPermit) ? [(_vm.selectLocker.state === 1) ? _c('i-button', {
    attrs: {
      "icon": "document"
    },
    on: {
      "click": function($event) {
        return _vm.updateLockerSate(0)
      }
    }
  }, [_vm._v("清除占用状态")]) : _vm._e()] : _vm._e(), _vm._v(" "), (_vm.editable) ? [(_vm.selectLocker.state === 0) ? _c('i-button', {
    attrs: {
      "icon": "minus-circled"
    },
    on: {
      "click": function($event) {
        return _vm.updateLockerSate(3)
      }
    }
  }, [_vm._v("停用")]) : _vm._e(), _vm._v(" "), (_vm.selectLocker.state === 3) ? _c('i-button', {
    attrs: {
      "icon": "arrow-return-left"
    },
    on: {
      "click": function($event) {
        return _vm.updateLockerSate(0)
      }
    }
  }, [_vm._v("恢复")]) : _vm._e()] : _vm._e(), _vm._v(" "), (_vm.editable) ? [(_vm.editable && _vm.selectLocker.state === 0) ? _c('i-button', {
    attrs: {
      "icon": "ios-trash-outline"
    },
    on: {
      "click": _vm.deleteLocker
    }
  }, [_vm._v("删除此柜")]) : _vm._e()] : _vm._e(), _vm._v(" "), (_vm.editable || _vm.machLockerOptPermit) ? [(_vm.selectLocker.lockerFee && _vm.selectLocker.lockerType === 0) ? _c('i-button', {
    on: {
      "click": _vm.openAiMachFeeCancelDlg
    }
  }, [_vm._v("取消扣费")]) : _vm._e()] : _vm._e(), _vm._v(" "), _c('i-button', {
    on: {
      "click": function($event) {
        _vm.lockerDlg = false
      }
    }
  }, [_vm._v("关闭")])], 2)]) : _vm._e(), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })]), _vm._v(" "), _c('Modal', {
    attrs: {
      "title": "租柜扣费取消",
      "width": "500",
      "styles": {
        'top': '10px'
      }
    },
    model: {
      value: (_vm.feeCanceDlg),
      callback: function($$v) {
        _vm.feeCanceDlg = $$v
      },
      expression: "feeCanceDlg"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "textarea",
      "rows": 4,
      "placeholder": "请输入扣费取消备注"
    },
    model: {
      value: (_vm.selectLockerFeeCancelRemark),
      callback: function($$v) {
        _vm.selectLockerFeeCancelRemark = $$v
      },
      expression: "selectLockerFeeCancelRemark"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "center",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.createAiMachFeeCancel
    }
  }, [_vm._v("提交")]), _vm._v(" "), _c('i-button', {
    on: {
      "click": function($event) {
        _vm.feeCanceDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)], 1), _vm._v(" "), _c('Modal', {
    attrs: {
      "title": "租柜使用日志",
      "width": "1000",
      "styles": {
        'top': '10px'
      }
    },
    model: {
      value: (_vm.aiMachLockerlogDlg),
      callback: function($$v) {
        _vm.aiMachLockerlogDlg = $$v
      },
      expression: "aiMachLockerlogDlg"
    }
  }, [(_vm.aiMachLockerlogDlg && _vm.selectMach) ? [_c('ai-mach-locker-log', {
    attrs: {
      "mach-id": _vm.selectMach.machId
    }
  })] : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "center",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })], 2)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2170:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "more-tools"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "more-tools",
      "page": "ai-mach-conf"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('page-header', {
    attrs: {
      "menu-list": _vm.menuList,
      "include-back": true
    }
  }), _vm._v(" "), _c('section', [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("有氧设备")]), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [(_vm.editable && _vm.enableRun) ? _c('i-button', {
    staticStyle: {
      "margin-left": "6px"
    },
    attrs: {
      "icon": "plus"
    },
    on: {
      "click": function($event) {
        return _vm.openNewAiMach(13)
      }
    }
  }, [_vm._v("添加设备")]) : _vm._e()], 1)]), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_vm._m(0), _vm._v(" "), _vm._l((_vm.aiMachList), function(m, idx) {
    return [(m.machType === 13) ? _c('tr', {
      key: idx
    }, [_c('td', [_c('b', {
      staticClass: "big"
    }, [_vm._v(_vm._s(m.machNo))])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(m.machName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(m.updateTime))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(m.remark))]), _vm._v(" "), _c('td', [(_vm.editable) ? _c('ul', {
      staticClass: "opt-list"
    }, [_c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.editAiMach(idx)
        }
      }
    }, [_vm._v("编辑")])]), _vm._v(" "), _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.openWdBindDlg(m)
        }
      }
    }, [_vm._v("二维码")])]), _vm._v(" "), _c('li', [_c('a', {
      attrs: {
        "title": "删除"
      },
      on: {
        "click": function($event) {
          return _vm.delAiMach(idx)
        }
      }
    }, [_c('i', {
      staticClass: "iconfont icon-delete normal"
    })])])]) : _vm._e()])]) : _vm._e()]
  })], 2), _vm._v(" "), (_vm.aiMachList && !_vm.aiMachList.length) ? _c('div', {
    staticClass: "none p15"
  }, [_vm._v("暂无数据")]) : _vm._e()])]), _vm._v(" "), _c('section', [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("运动数据")]), _vm._v(" "), (_vm.aiMachList && _vm.aiMachList.length) ? _c('div', {
    staticClass: "r"
  }, [_c('a', {
    staticClass: "gray",
    on: {
      "click": function($event) {
        return _vm.queryMemberHeartRate()
      }
    }
  }, [_c('icon', {
    attrs: {
      "type": "refresh",
      "size": "14"
    }
  }), _vm._v(" 刷新\n          ")], 1), _vm._v("\n           \n          "), _c('i-select', {
    staticStyle: {
      "width": "300px"
    },
    on: {
      "on-change": _vm.changeMach
    },
    model: {
      value: (_vm.selectMachIdx),
      callback: function($$v) {
        _vm.selectMachIdx = $$v
      },
      expression: "selectMachIdx"
    }
  }, _vm._l((_vm.aiMachList), function(mach, idx) {
    return _c('i-option', {
      key: idx,
      attrs: {
        "value": idx,
        "label": mach.machNo + '（' + mach.machName + '）'
      }
    }, [_vm._v(_vm._s(mach.machNo) + "（" + _vm._s(mach.machName) + "）")])
  }), 1), _vm._v("\n           \n          "), (_vm.enableRun) ? _c('i-button', {
    attrs: {
      "type": "primary",
      "icon": "plus"
    },
    on: {
      "click": _vm.openBindDlg
    }
  }, [_vm._v("绑定设备")]) : _vm._e()], 1) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_vm._m(1), _vm._v(" "), _vm._l((_vm.mhrList), function(m, i) {
    return _c('tr', {
      key: i
    }, [_c('td', [_vm._v(_vm._s(m.machNo))]), _vm._v(" "), _c('td', [(m.memberId) ? _c('a', {
      staticClass: "block",
      on: {
        "click": function($event) {
          return _vm.viewMebmerInfo(m.memberId)
        }
      }
    }, [_vm._v(_vm._s(m.memberName))]) : [_vm._v(_vm._s(m.custName))]], 2), _vm._v(" "), _c('td', [_vm._v(_vm._s(m.age))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(m.createTime))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(m.startTime))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(m.endTime))]), _vm._v(" "), _c('td', [(m.runTime) ? [_vm._v(_vm._s(Math.ceil(m.runTime / 60)) + " 分钟")] : _vm._e()], 2), _vm._v(" "), _c('td', [(m.cal) ? [_vm._v(_vm._s(m.cal) + " 千卡")] : _vm._e()], 2), _vm._v(" "), _c('td', [_c('ul', {
      staticClass: "opt-list"
    }, [(m.endTime && m.cal) ? [_c('li', [_c('a', {
      staticClass: "block",
      on: {
        "click": function($event) {
          return _vm.viewHeartRateDetail(m)
        }
      }
    }, [_vm._v("运动数据")])]), _vm._v(" "), _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.openShareDlg(m)
        }
      }
    }, [_vm._v("分享")])]), _vm._v(" "), _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.delMemberHeartRate(m)
        }
      }
    }, [_vm._v("删除")])])] : _vm._e()], 2)])])
  })], 2), _vm._v(" "), (_vm.mhrCount && _vm.mhrCount > 30) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.mhrCount,
      "page-size": 30,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.queryMemberHeartRate
    }
  })], 1) : _vm._e()])])], 1), _vm._v(" "), _c('Modal', {
    attrs: {
      "title": "智能设备配置",
      "width": "850",
      "styles": {
        'top': '10px'
      },
      "closable": true,
      "mask-closable": false
    },
    model: {
      value: (_vm.aiMachDlg),
      callback: function($$v) {
        _vm.aiMachDlg = $$v
      },
      expression: "aiMachDlg"
    }
  }, [(_vm.aiMachDlg && _vm.editable) ? _c('i-form', {
    ref: "aiMach",
    staticClass: "myform",
    staticStyle: {
      "width": "600px",
      "margin-top": "10px"
    },
    attrs: {
      "model": _vm.aiMach,
      "rules": _vm.aiMachRule,
      "label-width": 120
    }
  }, [_c('form-item', {
    attrs: {
      "prop": "machName",
      "label": "名称"
    }
  }, [_c('i-input', {
    staticClass: "input",
    attrs: {
      "type": "text",
      "placeholder": "请设置设备名称，可随意设置，仅作为系统助记用"
    },
    model: {
      value: (_vm.aiMach.machName),
      callback: function($$v) {
        _vm.$set(_vm.aiMach, "machName", $$v)
      },
      expression: "aiMach.machName"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "machBrand",
      "label": "设备品牌"
    }
  }, [_c('i-select', {
    model: {
      value: (_vm.aiMach.machBrand),
      callback: function($$v) {
        _vm.$set(_vm.aiMach, "machBrand", $$v)
      },
      expression: "aiMach.machBrand"
    }
  }, [_c('i-option', {
    attrs: {
      "value": 1
    }
  }, [_vm._v("智奇")])], 1)], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "machNo",
      "label": "设备编号"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "text",
      "placeholder": "请正确输入设备上的编号"
    },
    model: {
      value: (_vm.aiMach.machNo),
      callback: function($$v) {
        _vm.$set(_vm.aiMach, "machNo", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "aiMach.machNo"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "remark",
      "label": "备注"
    }
  }, [_c('i-input', {
    staticClass: "input",
    attrs: {
      "type": "textarea",
      "rows": 3
    },
    model: {
      value: (_vm.aiMach.remark),
      callback: function($$v) {
        _vm.$set(_vm.aiMach, "remark", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "aiMach.remark"
    }
  })], 1)], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "form-submit",
    staticStyle: {
      "margin-bottom": "-20px",
      "padding-left": "100px"
    }
  }, [(_vm.editable) ? _c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.submitAiMach()
      }
    }
  }, [_vm._v("提交")]) : _vm._e(), _vm._v(" "), _c('i-button', {
    attrs: {
      "type": "ghost"
    },
    on: {
      "click": function($event) {
        _vm.aiMachDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "有氧设备绑定",
      "width": "800",
      "styles": {
        'top': '10px'
      },
      "ok-text": "关闭",
      "cancel-text": "",
      "mask-closable": false
    },
    model: {
      value: (_vm.aiMachBindDlg),
      callback: function($$v) {
        _vm.aiMachBindDlg = $$v
      },
      expression: "aiMachBindDlg"
    }
  }, [_c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_c('tr', [_c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("会员选择")]), _vm._v(" "), _c('td', [_c('i-button', {
    on: {
      "click": function($event) {
        _vm.memberSelectDlg = true
      }
    }
  }, [_vm._v("点击查询会员")]), _vm._v(" "), (_vm.memberName) ? _c('a', {
    staticClass: "l10",
    on: {
      "click": function($event) {
        return _vm.viewMebmerInfo(_vm.aiMachBind.memberId)
      }
    }
  }, [_vm._v(_vm._s(_vm.memberName))]) : _vm._e()], 1)]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("会员年龄")]), _vm._v(" "), _c('td', [_c('input-int', {
    staticStyle: {
      "width": "105px"
    },
    attrs: {
      "min": 1,
      "max": 100
    },
    model: {
      value: (_vm.aiMachBind.memberAge),
      callback: function($$v) {
        _vm.$set(_vm.aiMachBind, "memberAge", $$v)
      },
      expression: "aiMachBind.memberAge"
    }
  }), _vm._v("  岁\n          ")], 1)]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("会员性别")]), _vm._v(" "), _c('td', [_c('i-select', {
    staticStyle: {
      "width": "105px"
    },
    model: {
      value: (_vm.aiMachBind.memberSex),
      callback: function($$v) {
        _vm.$set(_vm.aiMachBind, "memberSex", $$v)
      },
      expression: "aiMachBind.memberSex"
    }
  }, [_c('i-option', {
    attrs: {
      "value": 1
    }
  }, [_vm._v("男")]), _vm._v(" "), _c('i-option', {
    attrs: {
      "value": 2
    }
  }, [_vm._v("女")])], 1)], 1)]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("会员身高")]), _vm._v(" "), _c('td', [_c('input-num', {
    staticStyle: {
      "width": "105px"
    },
    attrs: {
      "min": 1,
      "max": 300
    },
    model: {
      value: (_vm.aiMachBind.memberHeight),
      callback: function($$v) {
        _vm.$set(_vm.aiMachBind, "memberHeight", $$v)
      },
      expression: "aiMachBind.memberHeight"
    }
  }), _vm._v("  CM\n          ")], 1)]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("会员体重")]), _vm._v(" "), _c('td', [_c('input-num', {
    staticStyle: {
      "width": "105px"
    },
    attrs: {
      "min": 20,
      "max": 200
    },
    model: {
      value: (_vm.aiMachBind.memberWeight),
      callback: function($$v) {
        _vm.$set(_vm.aiMachBind, "memberWeight", $$v)
      },
      expression: "aiMachBind.memberWeight"
    }
  }), _vm._v("  KG\n          ")], 1)]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("设备编号")]), _vm._v(" "), _c('td', [_c('i-input', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "type": "text",
      "disabled": ""
    },
    model: {
      value: (_vm.aiMachBind.machShow),
      callback: function($$v) {
        _vm.$set(_vm.aiMachBind, "machShow", $$v)
      },
      expression: "aiMachBind.machShow"
    }
  })], 1)])])]), _vm._v(" "), _c('div', {
    staticClass: "mt20 center p15"
  }, [_c('i-button', {
    staticClass: "long-btn",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.submitBind
    }
  }, [_vm._v("提交")])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "会员查询与选择",
      "width": "700",
      "styles": {
        'top': '10px'
      },
      "ok-text": "关闭",
      "cancel-text": "按Esc键或点击其它地方可关闭"
    },
    model: {
      value: (_vm.memberSelectDlg),
      callback: function($$v) {
        _vm.memberSelectDlg = $$v
      },
      expression: "memberSelectDlg"
    }
  }, [(_vm.memberSelectDlg) ? _c('member-select', {
    attrs: {
      "after-select": _vm.afterQueryMember
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "会员基本信息",
      "width": "800",
      "styles": {
        top: '10px'
      },
      "ok-text": "关闭",
      "cancel-text": "按Esc键或点击其它地方可关闭"
    },
    model: {
      value: (_vm.viewMemberDlg),
      callback: function($$v) {
        _vm.viewMemberDlg = $$v
      },
      expression: "viewMemberDlg"
    }
  }, [(_vm.viewMemberDlg) ? _c('member-base-info', {
    attrs: {
      "member-id": _vm.selectMemberId
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "会员心率数据详细",
      "width": "1000",
      "styles": {
        top: '10px'
      },
      "ok-text": "关闭",
      "cancel-text": ""
    },
    model: {
      value: (_vm.heartRateDetailDlg),
      callback: function($$v) {
        _vm.heartRateDetailDlg = $$v
      },
      expression: "heartRateDetailDlg"
    }
  }, [(_vm.heartRateDetailDlg) ? [_c('chart', {
    staticClass: "chart",
    attrs: {
      "options": _vm.speedChartOption
    }
  }), _vm._v(" "), _c('chart', {
    staticClass: "chart",
    attrs: {
      "options": _vm.gradeChartOption
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "pie"
  }, [_c('chart', {
    staticClass: "chart",
    attrs: {
      "options": _vm.pieChartOption
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "duration"
  }, [_vm._v("时长 "), _c('span', [_vm._v(_vm._s(_vm.duration))]), _vm._v(" 分钟")])], 1), _vm._v(" "), (_vm.heartRateChartData && !_vm.g.Util.isEmptyArray(_vm.heartRateChartData.sportxdata)) ? [_c('chart', {
    staticClass: "chart",
    attrs: {
      "options": _vm.heartRatePercentsChartOption
    }
  })] : _vm._e(), _vm._v(" "), _c('chart', {
    staticClass: "chart",
    attrs: {
      "options": _vm.heartRateChartOption
    }
  })] : _vm._e(), _vm._v(" "), _c('div', {
    staticStyle: {
      "line-height": "50px",
      "height": "50px"
    },
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('div', {
    staticClass: "r"
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.heartRateDetailDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)])], 2), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "心率数据分享二维码",
      "width": "500",
      "styles": {
        top: '10px'
      },
      "ok-text": "关闭",
      "cancel-text": ""
    },
    model: {
      value: (_vm.hrsShareDlg),
      callback: function($$v) {
        _vm.hrsShareDlg = $$v
      },
      expression: "hrsShareDlg"
    }
  }, [(_vm.hrsShareDlg) ? _c('div', {
    staticClass: "qrcode"
  }, [_c('img', {
    attrs: {
      "src": _vm.shareQrcodeUrl
    }
  }), _vm._v(" "), _c('p', {
    attrs: {
      "align": "center"
    }
  }, [_vm._v("使用微信扫码后可进入【" + _vm._s(_vm.shareUserName) + "】的本次心率数据页面去分享")])]) : _vm._e()]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "设备绑定二维码",
      "width": "500",
      "styles": {
        top: '10px'
      },
      "ok-text": "关闭",
      "cancel-text": ""
    },
    model: {
      value: (_vm.wdBindQrcodeDlg),
      callback: function($$v) {
        _vm.wdBindQrcodeDlg = $$v
      },
      expression: "wdBindQrcodeDlg"
    }
  }, [(_vm.wdBindQrcodeDlg) ? _c('div', {
    staticClass: "qrcode"
  }, [_c('img', {
    attrs: {
      "src": _vm.wdBindQrcodeUrl
    }
  }), _vm._v(" "), _c('p', {
    attrs: {
      "align": "center"
    }
  }, [_vm._v("会员或客户微信扫码进入设备绑定页面")])]) : _vm._e()])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    attrs: {
      "width": "120"
    }
  }, [_vm._v("设备编号")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "200"
    }
  }, [_vm._v("名称")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "160"
    }
  }, [_vm._v("更新时间")]), _vm._v(" "), _c('th', [_vm._v("备注")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("操作")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("设备编号")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("姓名")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "50"
    }
  }, [_vm._v("年龄")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "145"
    }
  }, [_vm._v("设备绑定时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "145"
    }
  }, [_vm._v("运动开始时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "145"
    }
  }, [_vm._v("运动结束时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("运动时长")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("燃脂热量")]), _vm._v(" "), _c('th', [_vm._v("操作")])])
}]}

/***/ }),

/***/ 2194:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', [_c('DatePicker', {
    staticClass: "date",
    attrs: {
      "type": "date",
      "format": "yyyy-MM-dd",
      "placeholder": "使用开始日期"
    },
    model: {
      value: (_vm.query.beginDate),
      callback: function($$v) {
        _vm.$set(_vm.query, "beginDate", $$v)
      },
      expression: "query.beginDate"
    }
  }), _vm._v(" ~\n\t\t"), _c('DatePicker', {
    staticClass: "date",
    attrs: {
      "type": "date",
      "format": "yyyy-MM-dd",
      "placeholder": "使用结束日期"
    },
    model: {
      value: (_vm.query.endDate),
      callback: function($$v) {
        _vm.$set(_vm.query, "endDate", $$v)
      },
      expression: "query.endDate"
    }
  }), _vm._v("\n\t\t \n\t\t"), _c('i-select', {
    staticStyle: {
      "width": "100px"
    },
    attrs: {
      "placeholder": "选择柜名"
    },
    on: {
      "on-change": _vm.queryAiMachLockerList
    },
    model: {
      value: (_vm.query.machId),
      callback: function($$v) {
        _vm.$set(_vm.query, "machId", $$v)
      },
      expression: "query.machId"
    }
  }, _vm._l((_vm.machList), function(m) {
    return _c('i-option', {
      key: m.machId,
      attrs: {
        "value": m.machId
      }
    }, [_vm._v(_vm._s(m.machName))])
  }), 1), _vm._v("\n\t\t \n\t\t"), _c('i-select', {
    staticStyle: {
      "width": "90px"
    },
    attrs: {
      "placeholder": "选择柜号",
      "clearable": ""
    },
    model: {
      value: (_vm.query.amlId),
      callback: function($$v) {
        _vm.$set(_vm.query, "amlId", $$v)
      },
      expression: "query.amlId"
    }
  }, _vm._l((_vm.lockerList), function(l) {
    return _c('i-option', {
      key: l.amlId,
      attrs: {
        "value": l.amlId
      }
    }, [_vm._v(_vm._s(l.lockerName))])
  }), 1), _vm._v("\n\t\t \n\t\t"), _c('input-int', {
    staticStyle: {
      "width": "120px",
      "position": "relative",
      "top": "2px"
    },
    attrs: {
      "placeholder": "使用者手机号"
    },
    model: {
      value: (_vm.query.phoneNo),
      callback: function($$v) {
        _vm.$set(_vm.query, "phoneNo", $$v)
      },
      expression: "query.phoneNo"
    }
  }), _vm._v("\n\t\t \n\t\t"), _c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.queryAiMachLockerLogList(null)
      }
    }
  }, [_vm._v("查询")])], 1), _vm._v(" "), _c('div', {
    staticClass: "mytbl mt15"
  }, [_c('table', [_vm._m(0), _vm._v(" "), _vm._l((_vm.logList), function(l, idx) {
    return _c('tr', [_c('td', {
      attrs: {
        "width": "50"
      }
    }, [(l.userType === 0) ? [_vm._v("会员")] : _vm._e(), (l.userType === 1) ? [_vm._v("员工")] : _vm._e()], 2), _vm._v(" "), _c('td', {
      attrs: {
        "width": "100"
      }
    }, [(l.userType === 0) ? _c('a', {
      on: {
        "click": function($event) {
          return _vm.viewMebmerInfo(l.memberId)
        }
      }
    }, [_vm._v(_vm._s(l.memberName))]) : (l.userType === 1) ? [_vm._v(_vm._s(l.staffName))] : _vm._e()], 2), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.createTime))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.machName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.lockerName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.optionTypes[l.optionType]))]), _vm._v(" "), _c('td', [(l.lockerType === 0) ? [_vm._v("临时柜")] : (l.lockerType === 1) ? [_vm._v("\n\t\t\t\t\t\t长租柜\n\t\t\t\t\t\t"), (l.hireBeginDate) ? [_vm._v("\n\t\t\t\t\t\t\t（" + _vm._s(_vm.g.Util.formatDate(l.hireBeginDate)) + " ~ " + _vm._s(_vm.g.Util.formatDate(l.hireEndDate)) + " ）\n\t\t\t\t\t\t\t"), (l.hireStatus === 1) ? _c('span', {
      staticClass: "orange"
    }, [_vm._v("租用中")]) : (l.hireStatus === 9) ? _c('span', {
      staticClass: "green"
    }, [_vm._v("已归还")]) : _vm._e()] : _vm._e()] : _vm._e()], 2)])
  })], 2), _vm._v(" "), (_vm.logCount) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.logCount,
      "page-size": 30,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.queryAiMachLockerLogList
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.logList && !_vm.logList.length) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("暂无数据")]) : _vm._e()]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "会员基本信息",
      "width": "800",
      "styles": {
        top: '10px'
      },
      "ok-text": "关闭",
      "cancel-text": "按Esc键或点击其它地方可关闭"
    },
    model: {
      value: (_vm.viewMemberDlg),
      callback: function($$v) {
        _vm.viewMemberDlg = $$v
      },
      expression: "viewMemberDlg"
    }
  }, [(_vm.viewMemberDlg) ? _c('member-base-info', {
    attrs: {
      "member-id": _vm.selectMemberId
    }
  }) : _vm._e()], 1)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    attrs: {
      "width": "150",
      "colspan": "2"
    }
  }, [_vm._v("使用人")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "160"
    }
  }, [_vm._v("使用时间 ↓")]), _vm._v(" "), _c('th', [_vm._v("租柜")]), _vm._v(" "), _c('th', [_vm._v("柜号")]), _vm._v(" "), _c('th', [_vm._v("操作类型")]), _vm._v(" "), _c('th', [_vm._v("租柜方式")])])
}]}

/***/ }),

/***/ 2206:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "more-tools"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "more-tools",
      "page": "ai-mach-conf"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('page-header', {
    attrs: {
      "menu-list": _vm.menuList,
      "include-back": true
    }
  }), _vm._v(" "), _c('section', [(_vm.editable) ? _c('div', {
    staticClass: "tbl-header"
  }, [_c('table', {
    attrs: {
      "width": "100%"
    }
  }, [_c('tr', [_c('td', [_c('i-button', {
    attrs: {
      "icon": "plus"
    },
    on: {
      "click": function($event) {
        return _vm.openNewAiMach(null)
      }
    }
  }, [_vm._v("添加设备")]), _vm._v(" "), (_vm.enableQrcodeMach) ? [_c('i-button', {
    on: {
      "click": function($event) {
        _vm.qrcodeMachConfDlg = true
      }
    }
  }, [_vm._v("二维码设备设置")])] : _vm._e()], 2), _vm._v(" "), _c('td', {
    attrs: {
      "align": "right"
    }
  }, [_c('i-button', {
    on: {
      "click": _vm.openStaffEntryLog
    }
  }, [_vm._v("员工签到日志")])], 1)])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_vm._m(0), _vm._v(" "), _vm._l((_vm.aiMachList), function(m, idx) {
    return (m.machType < 9 || m.machType === 11 || m.machType === 12 || m.machType === 14 || m.machType === 15 || m.machType === 16) ? _c('tr', [_c('td', [_c('b', {
      staticClass: "big"
    }, [_vm._v(_vm._s(m.machNo))])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(m.machName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Dict.AiMachType[m.machType]) + "\n\t\t\t\t\t\t\t\t"), (m.machType === 11) ? _c('div', [(m.bathroomType === 1) ? _c('span', {
      staticClass: "orange"
    }, [_vm._v("[女性专用]")]) : _vm._e(), _vm._v(" "), (m.bathroomType === 2) ? _c('span', {
      staticClass: "green"
    }, [_vm._v("[男性专用]")]) : _vm._e(), _vm._v(" "), (m.bathroomType === 3) ? _c('span', {
      staticClass: "gray"
    }, [_vm._v("[性别不限]")]) : _vm._e()]) : _vm._e()]), _vm._v(" "), _c('td', [(m.machType < 4) ? _c('a', {
      on: {
        "click": function($event) {
          return _vm.editAiMach(idx)
        }
      }
    }, [_vm._v("点击查看")]) : _vm._e()]), _vm._v(" "), _c('td', [_vm._v(_vm._s(m.updateTime))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(m.remark))]), _vm._v(" "), _c('td', [_c('ul', {
      staticClass: "opt-list"
    }, [(_vm.editable) ? _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.editAiMach(idx)
        }
      }
    }, [_vm._v("编辑")])]) : _vm._e(), _vm._v(" "), (_vm.enableEntryMach) ? _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.openDoor(m.machNo)
        }
      }
    }, [_vm._v("开门")])]) : _vm._e(), _vm._v(" "), (_vm.editable) ? _c('li', [(m.machType !== 11) ? _c('a', {
      attrs: {
        "title": "从门禁中解除指定人员的人脸绑定"
      },
      on: {
        "click": function($event) {
          return _vm.openFaceBindDelDlg(m.machNo)
        }
      }
    }, [_vm._v("解除人脸")]) : (m.bathroomType === 0) ? _c('a', {
      on: {
        "click": function($event) {
          return _vm.viewBathroomDetail(m.machNo)
        }
      }
    }, [_vm._v("淋浴间详细")]) : _vm._e()]) : _vm._e(), _vm._v(" "), (_vm.editable) ? _c('li', [_c('a', {
      attrs: {
        "title": "删除"
      },
      on: {
        "click": function($event) {
          return _vm.delAiMach(idx)
        }
      }
    }, [_c('i', {
      staticClass: "iconfont icon-delete normal"
    })])]) : _vm._e()])])]) : _vm._e()
  })], 2), _vm._v(" "), (_vm.aiMachList && !_vm.aiMachList.length) ? _c('div', {
    staticClass: "none p15"
  }, [_vm._v("暂无数据")]) : _vm._e()])])], 1), _vm._v(" "), _c('Modal', {
    attrs: {
      "title": "智能设备配置",
      "width": "900",
      "styles": {
        'top': '10px'
      },
      "closable": true,
      "mask-closable": false
    },
    model: {
      value: (_vm.aiMachDlg),
      callback: function($$v) {
        _vm.aiMachDlg = $$v
      },
      expression: "aiMachDlg"
    }
  }, [(_vm.editable && _vm.aiMach.machId) ? _c('div', {
    staticClass: "warning"
  }, [_c('i', {
    staticClass: "iconfont icon-alert"
  }), _vm._v("\n\t\t\t\t修改【设备编号、用途、会员卡计费】会立即影响到会员签到签出，请慎重修改！\n      ")]) : _vm._e(), _vm._v(" "), (_vm.aiMachDlg && _vm.editable) ? _c('i-form', {
    ref: "aiMach",
    staticClass: "myform",
    staticStyle: {
      "width": "600px",
      "margin-top": "10px"
    },
    attrs: {
      "model": _vm.aiMach,
      "rules": _vm.aiMachRule,
      "label-width": 120
    }
  }, [_c('form-item', {
    attrs: {
      "prop": "machName",
      "label": "名称"
    }
  }, [_c('i-input', {
    staticClass: "input",
    attrs: {
      "type": "text",
      "placeholder": "请设置设备名称，可随意设置，仅作为系统助记用"
    },
    model: {
      value: (_vm.aiMach.machName),
      callback: function($$v) {
        _vm.$set(_vm.aiMach, "machName", $$v)
      },
      expression: "aiMach.machName"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "machNo",
      "label": "设备编号"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "text",
      "placeholder": "请正确输入设备上的编号"
    },
    model: {
      value: (_vm.aiMach.machNo),
      callback: function($$v) {
        _vm.$set(_vm.aiMach, "machNo", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "aiMach.machNo"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "machType",
      "label": "用途"
    }
  }, [_c('i-select', {
    staticStyle: {
      "width": "280px"
    },
    model: {
      value: (_vm.aiMach.machType),
      callback: function($$v) {
        _vm.$set(_vm.aiMach, "machType", $$v)
      },
      expression: "aiMach.machType"
    }
  }, [_c('i-option', {
    attrs: {
      "value": 1
    }
  }, [_vm._v("入场签到")]), _vm._v(" "), _c('i-option', {
    attrs: {
      "value": 2
    }
  }, [_vm._v("出场签出")]), _vm._v(" "), _c('i-option', {
    attrs: {
      "value": 3
    }
  }, [_vm._v("入场签到 + 出场签出")]), _vm._v(" "), _c('i-option', {
    attrs: {
      "value": 4
    }
  }, [_vm._v("团课签到")]), _vm._v(" "), (_vm.enableGlCheckout) ? _c('i-option', {
    attrs: {
      "value": 15
    }
  }, [_vm._v("团课签出")]) : _vm._e(), _vm._v(" "), _c('i-option', {
    attrs: {
      "value": 5
    }
  }, [_vm._v("私教课签到")]), _vm._v(" "), _c('i-option', {
    attrs: {
      "value": 6
    }
  }, [_vm._v("团课签到 + 私教课签到")]), _vm._v(" "), _c('i-option', {
    attrs: {
      "value": 12
    }
  }, [_vm._v("入场签到 + 私教课签到")]), _vm._v(" "), _c('i-option', {
    attrs: {
      "value": 14
    }
  }, [_vm._v("入场签到 + 团课签到")]), _vm._v(" "), _c('i-option', {
    attrs: {
      "value": 16
    }
  }, [_vm._v("场地预约签到")]), _vm._v(" "), _c('i-option', {
    attrs: {
      "value": 11
    }
  }, [_vm._v("淋浴室门禁")])], 1), _vm._v("  \n\t\t\t\t\t"), (_vm.aiMach.machType === 12) ? _c('help', [_vm._v("\n\t\t\t\t\t\t如果会员当天有预约私教课，则会自动签到私教课；"), _c('p'), _vm._v("否则，自动做入场签到\n\t\t\t\t\t")]) : _vm._e(), _vm._v(" "), (_vm.aiMach.machType === 14) ? _c('help', [_vm._v("\n\t\t\t\t\t\t如果会员当天有预约团课或有固定班级课，则会自动签到团课；"), _c('p'), _vm._v("否则，自动做入场签到\n\t\t\t\t\t")]) : _vm._e()], 1), _vm._v(" "), (_vm.aiMach.machType === 1 || _vm.aiMach.machType === 12 || _vm.aiMach.machType === 14) ? _c('form-item', {
    attrs: {
      "prop": "allowMoreEntry",
      "label": "入场限制"
    }
  }, [_c('RadioGroup', {
    model: {
      value: (_vm.aiMach.allowMoreEntry),
      callback: function($$v) {
        _vm.$set(_vm.aiMach, "allowMoreEntry", $$v)
      },
      expression: "aiMach.allowMoreEntry"
    }
  }, [_c('Radio', {
    attrs: {
      "label": 1
    }
  }, [_vm._v("签到后允许多次入场")]), _vm._v(" "), _c('Radio', {
    attrs: {
      "label": 0
    }
  }, [_vm._v("签到后只允许入场一次")])], 1), _vm._v(" "), _c('help', [_vm._v("\n\t\t\t\t\t\t如果允许多次入场，签到一次后，再次入场签到时，系统不做签到处理，签到设备会放行；否则不予放行。\n\t\t\t\t\t")]), _vm._v(" "), (_vm.aiMach.allowMoreEntry) ? _c('span', {
    staticClass: "l15 gray small"
  }, [_vm._v(" "), _c('checkbox', {
    model: {
      value: (_vm.showMoreEntryConf),
      callback: function($$v) {
        _vm.showMoreEntryConf = $$v
      },
      expression: "showMoreEntryConf"
    }
  }, [_vm._v("更多设置")])], 1) : _vm._e(), _vm._v(" "), (_vm.aiMach.allowMoreEntry && _vm.showMoreEntryConf) ? _c('div', {
    staticClass: "more-entry-conf",
    staticStyle: {
      "width": "550px"
    }
  }, [_vm._v("\n\t\t\t\t\t\t入场签到后 "), _c('input-int', {
    attrs: {
      "min": 1
    },
    model: {
      value: (_vm.aiMach.moreEntryLimitMin),
      callback: function($$v) {
        _vm.$set(_vm.aiMach, "moreEntryLimitMin", $$v)
      },
      expression: "aiMach.moreEntryLimitMin"
    }
  }), _vm._v(" 分钟内会员可再入场 "), _c('input-int', {
    attrs: {
      "min": 1
    },
    model: {
      value: (_vm.aiMach.moreEntryLimitTimes),
      callback: function($$v) {
        _vm.$set(_vm.aiMach, "moreEntryLimitTimes", $$v)
      },
      expression: "aiMach.moreEntryLimitTimes"
    }
  }), _vm._v(" 次\n\t\t\t\t\t\t"), _c('span', {
    staticClass: "l10 orange"
  }, [_vm._v("（ 如不设置则不限制时间和次数 ）")])], 1) : _vm._e()], 1) : _vm._e(), _vm._v(" "), (_vm.aiMach.machType === 1 || _vm.aiMach.machType === 3 || _vm.aiMach.machType === 12 || _vm.aiMach.machType === 14) ? _c('form-item', {
    attrs: {
      "prop": "isOpenForBooking",
      "label": "约课会员入场"
    }
  }, [(_vm.aiMach.machType !== 12) ? _c('checkbox', {
    model: {
      value: (_vm.aiMach.isOpenForPlBooking),
      callback: function($$v) {
        _vm.$set(_vm.aiMach, "isOpenForPlBooking", $$v)
      },
      expression: "aiMach.isOpenForPlBooking"
    }
  }, [_vm._v("允许当天私教课预约会员入场")]) : _vm._e(), _vm._v(" "), (_vm.aiMach.machType !== 14) ? _c('checkbox', {
    model: {
      value: (_vm.aiMach.isOpenForGlBooking),
      callback: function($$v) {
        _vm.$set(_vm.aiMach, "isOpenForGlBooking", $$v)
      },
      expression: "aiMach.isOpenForGlBooking"
    }
  }, [_vm._v("允许当天团课预约会员入场")]) : _vm._e(), _vm._v(" "), _c('help', [_vm._v("\n\t\t\t\t\t\t如果勾选，则允许当天有约课或固定班级课的会员入场（开门或开闸机），但是系统不做上课签到。\n\t\t\t\t\t\t"), _c('p', [_vm._v("备注：此设置仅针对当天有约课或固定班级课，但未签到的会员")])])], 1) : _vm._e(), _vm._v(" "), (_vm.hasLocker && (_vm.aiMach.machType === 2 || _vm.aiMach.machType === 3)) ? _c('form-item', {
    attrs: {
      "prop": "isCheckLocker",
      "label": "租柜检查"
    }
  }, [_c('checkbox', {
    model: {
      value: (_vm.aiMach.isCheckLocker),
      callback: function($$v) {
        _vm.$set(_vm.aiMach, "isCheckLocker", $$v)
      },
      expression: "aiMach.isCheckLocker"
    }
  }, [_vm._v("还柜后才可签出")]), _vm._v(" "), _c('help', [_vm._v("\n\t\t\t\t\t\t如果勾选此选项，会员在此设备上签出时，系统将自动检查该会员在使用智能租柜时是否还柜了。如果未还柜，将无法签出（门禁或闸机也不会开启）。\n\t\t\t\t\t")])], 1) : _vm._e(), _vm._v(" "), (_vm.aiMach.machType === 11) ? _c('form-item', {
    attrs: {
      "prop": "bathroomType",
      "label": "淋浴门禁类型",
      "required": ""
    }
  }, [_c('RadioGroup', {
    model: {
      value: (_vm.aiMach.bathroomType),
      callback: function($$v) {
        _vm.$set(_vm.aiMach, "bathroomType", _vm._n($$v))
      },
      expression: "aiMach.bathroomType"
    }
  }, [_c('Radio', {
    attrs: {
      "label": 0
    }
  }, [_vm._v("系统自动控制性别")]), _vm._v(" "), _c('Radio', {
    attrs: {
      "label": 1
    }
  }, [_vm._v("女性专用")]), _vm._v(" "), _c('Radio', {
    attrs: {
      "label": 2
    }
  }, [_vm._v("男性专用")]), _vm._v(" "), _c('Radio', {
    attrs: {
      "label": 3
    }
  }, [_vm._v("性别不限")])], 1)], 1) : _vm._e(), _vm._v(" "), (_vm.aiMach.machType === 11 && _vm.aiMach.bathroomType === 0) ? _c('form-item', {
    attrs: {
      "prop": "bathroomNum",
      "label": "淋浴间数量",
      "required": ""
    }
  }, [_c('input-int', {
    staticStyle: {
      "width": "100px"
    },
    on: {
      "blur": _vm.changeBathroomNum
    },
    model: {
      value: (_vm.aiMach.bathroomNum),
      callback: function($$v) {
        _vm.$set(_vm.aiMach, "bathroomNum", $$v)
      },
      expression: "aiMach.bathroomNum"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("间")])], 1) : _vm._e(), _vm._v(" "), (_vm.aiMach.machType === 11 && _vm.aiMach.bathroomNum && _vm.aiMach.bathroomType === 0) ? _c('form-item', {
    attrs: {
      "label": "淋浴间编号",
      "required": ""
    }
  }, _vm._l((_vm.bathroomList), function(b, idx) {
    return (idx < _vm.aiMach.bathroomNum) ? _c('i-input', {
      key: idx,
      staticClass: "input-roomno",
      attrs: {
        "type": "text",
        "placeholder": '第' + (idx + 1) + '间编号'
      },
      model: {
        value: (b.roomNo),
        callback: function($$v) {
          _vm.$set(b, "roomNo", $$v)
        },
        expression: "b.roomNo"
      }
    }) : _vm._e()
  }), 1) : _vm._e(), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "remark",
      "label": "备注"
    }
  }, [_c('i-input', {
    staticClass: "input",
    attrs: {
      "type": "textarea",
      "rows": 3
    },
    model: {
      value: (_vm.aiMach.remark),
      callback: function($$v) {
        _vm.$set(_vm.aiMach, "remark", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "aiMach.remark"
    }
  })], 1)], 1) : _vm._e(), _vm._v(" "), (_vm.aiMach.machType < 4 || _vm.aiMach.machType === 12 || _vm.aiMach.machType === 14) ? _c('table', {
    attrs: {
      "width": "100%"
    }
  }, [_c('tr', [_c('td', {
    staticClass: "required",
    staticStyle: {
      "padding-right": "0"
    },
    attrs: {
      "width": "100",
      "align": "right",
      "valign": "top"
    }
  }, [_vm._v("会员卡计费")]), _vm._v(" "), _c('td', {
    staticClass: "card-pay",
    staticStyle: {
      "padding-left": "18px"
    },
    attrs: {
      "valign": "top"
    }
  }, [(_vm.editable) ? _c('i-button', {
    attrs: {
      "icon": "plus"
    },
    on: {
      "click": _vm.openNewAiMachCard
    }
  }, [_vm._v("添加")]) : _vm._e(), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_c('i', {
    staticClass: "iconfont icon-svginfor"
  }), _vm._v(" 可添加多个计费会员卡，结算时系统自动按“排序号”选择会员首张有效会员卡计费")]), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_c('tr', [_c('th', {
    attrs: {
      "width": "60"
    }
  }, [_vm._v("排序号")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "200"
    }
  }, [_vm._v("会员卡")]), _vm._v(" "), _c('th', [_vm._v("计费详细")]), _vm._v(" "), _c('th', [_vm._v("创建时间")]), _vm._v(" "), _c('th', [_vm._v("更新时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("操作")])]), _vm._v(" "), _vm._l((_vm.aiMachCardList), function(c, idx) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(c.orderNo))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(c.cardName))]), _vm._v(" "), _c('td', [(c.cardType === 1) ? _c('span', {
      staticClass: "gray"
    }, [_vm._v("期限卡不计费")]) : [(c.paymentType === 1) ? [_vm._v("每次计费 "), _c('b', [_vm._v(_vm._s(c.payment))])] : (c.paymentType === 2) ? [_vm._v("每小时计费 "), _c('b', [_vm._v(_vm._s(c.payment))])] : _vm._e(), _vm._v(" "), (c.cardType === 2) ? [_vm._v("次")] : (c.cardType === 3) ? [_vm._v("元")] : _vm._e()], _vm._v(" "), (c.paymentType === 2 && c.cardType !== 1) ? [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t，不足一小时的计费方式：\n\t\t\t\t\t\t\t\t\t\t\t"), (c.halfHourBegin && c.halfHourEnd) ? _c('div', {
      staticClass: "p5"
    }, [_c('i', {
      staticClass: "iconfont icon-arrow-r-2 small"
    }), _vm._v(" " + _vm._s(c.halfHourBegin) + " ~ " + _vm._s(c.halfHourEnd) + " 分钟，按半小时计费\n\t\t\t\t\t\t\t\t\t\t\t")]) : _vm._e(), _vm._v(" "), (c.oneHourBegin && c.oneHourEnd) ? _c('div', {
      staticClass: "p5"
    }, [_c('i', {
      staticClass: "iconfont icon-arrow-r-2 small"
    }), _vm._v(" " + _vm._s(c.oneHourBegin) + " ~ " + _vm._s(c.oneHourEnd) + " 分钟，按一小时计费\n\t\t\t\t\t\t\t\t\t\t\t")]) : _vm._e()] : _vm._e()], 2), _vm._v(" "), _c('td', [_vm._v("\n\t\t\t\t\t\t\t\t\t\t" + _vm._s(c.createTime) + "\n\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('td', [_vm._v("\n\t\t\t\t\t\t\t\t\t\t" + _vm._s(c.updateTime) + "\n\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('td', [(_vm.editable) ? _c('ul', {
      staticClass: "opt-list"
    }, [_c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.editAiMachCard(idx)
        }
      }
    }, [_vm._v("编辑")])]), _vm._v(" "), _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.delAiMachCard(idx)
        }
      }
    }, [_vm._v("删除")])])]) : _vm._e()])])
  })], 2)])], 1)])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "form-submit",
    staticStyle: {
      "margin-bottom": "-20px",
      "padding-left": "120px"
    }
  }, [(_vm.editable && (_vm.enableEntryMach || _vm.enableQrcodeMach)) ? _c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.submitAiMach()
      }
    }
  }, [_vm._v("提交")]) : _vm._e(), _vm._v(" "), _c('i-button', {
    attrs: {
      "type": "ghost"
    },
    on: {
      "click": function($event) {
        _vm.aiMachDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })], 1), _vm._v(" "), _c('Modal', {
    attrs: {
      "title": "智能设备会员卡计费设置",
      "width": "650",
      "styles": {
        'top': '10px'
      },
      "closable": false,
      "mask-closable": false
    },
    model: {
      value: (_vm.aiMachCardDlg),
      callback: function($$v) {
        _vm.aiMachCardDlg = $$v
      },
      expression: "aiMachCardDlg"
    }
  }, [(_vm.aiMachCardDlg) ? _c('table', {
    staticClass: "card-form"
  }, [_c('tr', [_c('th', {
    staticClass: "required",
    attrs: {
      "width": "80"
    }
  }, [_vm._v("会员卡")]), _vm._v(" "), _c('td', [_c('i-select', {
    staticStyle: {
      "width": "300px"
    },
    attrs: {
      "filterable": ""
    },
    on: {
      "on-change": _vm.changeCard
    },
    model: {
      value: (_vm.aiMachCard.cardId),
      callback: function($$v) {
        _vm.$set(_vm.aiMachCard, "cardId", $$v)
      },
      expression: "aiMachCard.cardId"
    }
  }, _vm._l((_vm.cardList), function(c) {
    return _c('i-option', {
      key: c.cardId,
      attrs: {
        "value": c.cardId
      }
    }, [_vm._v(_vm._s(c.cardName))])
  }), 1)], 1)]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("计费方式")]), _vm._v(" "), _c('td', [(_vm.aiMachCard.cardType === 1) ? _c('span', {
    staticClass: "gray"
  }, [_vm._v("按天消费")]) : _c('RadioGroup', {
    model: {
      value: (_vm.aiMachCard.paymentType),
      callback: function($$v) {
        _vm.$set(_vm.aiMachCard, "paymentType", _vm._n($$v))
      },
      expression: "aiMachCard.paymentType"
    }
  }, [_c('Radio', {
    attrs: {
      "label": 1
    }
  }, [_vm._v("按次收费")]), _vm._v(" "), _c('Radio', {
    attrs: {
      "label": 2
    }
  }, [_vm._v("按小时收费")])], 1)], 1)]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("计费额")]), _vm._v(" "), _c('td', [(_vm.aiMachCard.cardType === 1) ? _c('span', {
    staticClass: "gray"
  }, [_vm._v("期限卡不计费")]) : [_c('input-num', {
    model: {
      value: (_vm.aiMachCard.payment),
      callback: function($$v) {
        _vm.$set(_vm.aiMachCard, "payment", $$v)
      },
      expression: "aiMachCard.payment"
    }
  }), _vm._v("  \n\t\t\t\t\t\t\t"), (_vm.aiMachCard.cardType === 2) ? _c('span', {
    staticClass: "gray"
  }, [_vm._v("次")]) : (_vm.aiMachCard.cardType === 3) ? _c('span', {
    staticClass: "gray"
  }, [_vm._v("元")]) : _vm._e(), _vm._v(" "), (_vm.aiMachCard.paymentType === 2) ? _c('span', {
    staticClass: "gray"
  }, [_vm._v("/ 小时")]) : _vm._e()]], 2)]), _vm._v(" "), (_vm.aiMachCard.paymentType === 2 && _vm.aiMachCard.cardType !== 1) ? _c('tr', [_c('th', [_vm._v("额外计费")]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "charge-by-hour-conf"
  }, [_c('span', {
    staticClass: "orange"
  }, [_vm._v("不足一小时的计费方式：")]), _vm._v(" "), _c('ul', [_c('li', [_c('Icon', {
    attrs: {
      "type": "ios-time-outline",
      "size": "18"
    }
  }), _vm._v(" "), _c('input-int', {
    staticClass: "input-s",
    model: {
      value: (_vm.aiMachCard.halfHourBegin),
      callback: function($$v) {
        _vm.$set(_vm.aiMachCard, "halfHourBegin", $$v)
      },
      expression: "aiMachCard.halfHourBegin"
    }
  }), _vm._v(" 分钟\n\t\t\t\t\t\t\t\t~ "), _c('input-int', {
    staticClass: "input-s",
    model: {
      value: (_vm.aiMachCard.halfHourEnd),
      callback: function($$v) {
        _vm.$set(_vm.aiMachCard, "halfHourEnd", $$v)
      },
      expression: "aiMachCard.halfHourEnd"
    }
  }), _vm._v(" 分钟，按半小时计费")], 1), _vm._v(" "), _c('li', [_c('Icon', {
    attrs: {
      "type": "ios-clock-outline",
      "size": "18"
    }
  }), _vm._v(" "), _c('input-int', {
    staticClass: "input-s",
    model: {
      value: (_vm.aiMachCard.oneHourBegin),
      callback: function($$v) {
        _vm.$set(_vm.aiMachCard, "oneHourBegin", $$v)
      },
      expression: "aiMachCard.oneHourBegin"
    }
  }), _vm._v(" 分钟\n\t\t\t\t\t\t\t\t~ "), _c('input-int', {
    staticClass: "input-s",
    model: {
      value: (_vm.aiMachCard.oneHourEnd),
      callback: function($$v) {
        _vm.$set(_vm.aiMachCard, "oneHourEnd", $$v)
      },
      expression: "aiMachCard.oneHourEnd"
    }
  }), _vm._v(" 分钟，按一小时计费")], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "more-chare-conf"
  }, [_vm._v("\n\t\t\t\t\t\t\t入场签到"), _c('input-int', {
    staticClass: "input-s",
    model: {
      value: (_vm.aiMachCard.chargeByHourBegin),
      callback: function($$v) {
        _vm.$set(_vm.aiMachCard, "chargeByHourBegin", $$v)
      },
      expression: "aiMachCard.chargeByHourBegin"
    }
  }), _vm._v("分钟后开始计时（计费）\n\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t"), _c('help', [_vm._v("\n\t\t\t\t\t\t\t\t设置此时间后，系统在计费时将先扣除此时间，然后再根据剩余的时间计费。\n\t\t\t\t\t\t\t")])], 1)])]) : _vm._e(), _vm._v(" "), _c('tr', [_c('th', {
    staticClass: "required"
  }, [_vm._v("排序号")]), _vm._v(" "), _c('td', [_c('input-int', {
    model: {
      value: (_vm.aiMachCard.orderNo),
      callback: function($$v) {
        _vm.$set(_vm.aiMachCard, "orderNo", $$v)
      },
      expression: "aiMachCard.orderNo"
    }
  })], 1)])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "form-submit",
    staticStyle: {
      "padding-left": "95px"
    }
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.submitAiMachCard
    }
  }, [_vm._v("提交")]), _vm._v("  \n\t\t\t\t"), _c('i-button', {
    attrs: {
      "type": "ghost"
    },
    on: {
      "click": function($event) {
        _vm.aiMachCardDlg = false;
      }
    }
  }, [_vm._v("关闭")])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })]), _vm._v(" "), _c('Modal', {
    attrs: {
      "title": "解除人脸绑定",
      "width": "600",
      "styles": {
        'top': '10px'
      },
      "closable": false,
      "mask-closable": false
    },
    model: {
      value: (_vm.faceBindDel.dlg),
      callback: function($$v) {
        _vm.$set(_vm.faceBindDel, "dlg", $$v)
      },
      expression: "faceBindDel.dlg"
    }
  }, [_vm._v("\n\t\t\t请输入员工或会员手机号，然点击【解除】，可解除人脸绑定\n\t\t\t"), _c('div', {
    staticClass: "p15"
  }, [_c('table', [_c('tr', [_c('td', [_c('input-int', {
    staticClass: "phone-no",
    on: {
      "enter": _vm.queryUserForDelFace,
      "blur": _vm.queryUserForDelFace
    },
    model: {
      value: (_vm.faceBindDel.phoneNo),
      callback: function($$v) {
        _vm.$set(_vm.faceBindDel, "phoneNo", $$v)
      },
      expression: "faceBindDel.phoneNo"
    }
  })], 1), _vm._v(" "), _c('td', [(_vm.faceBindDel.userName) ? _c('span', {
    staticClass: "orangered",
    staticStyle: {
      "background": "#fafafa",
      "padding": "8px"
    }
  }, [_vm._v(_vm._s(_vm.faceBindDel.userName))]) : _vm._e()]), _vm._v(" "), _c('td', {
    attrs: {
      "valign": "middle"
    }
  }, [(_vm.faceBindDel.userId) ? _c('div', {
    staticClass: "l15"
  }, [_c('i-button', {
    on: {
      "click": _vm.handleDelFaceBind
    }
  }, [_vm._v("解除")])], 1) : _vm._e()])])])]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('p', {
    attrs: {
      "align": "right"
    }
  }, [_c('i-button', {
    on: {
      "click": function($event) {
        _vm.faceBindDel.dlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)])]), _vm._v(" "), _c('Modal', {
    attrs: {
      "title": "淋浴间详细",
      "width": "600",
      "styles": {
        'top': '10px'
      },
      "closable": false,
      "mask-closable": false
    },
    model: {
      value: (_vm.bathroomDlg),
      callback: function($$v) {
        _vm.bathroomDlg = $$v
      },
      expression: "bathroomDlg"
    }
  }, [_c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_c('tr', [_c('th', [_vm._v("淋浴间编号")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("状态")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("操作")])]), _vm._v(" "), _vm._l((_vm.bathroomList), function(r) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(r.roomNo))]), _vm._v(" "), _c('td', [(r.status === 0) ? [_vm._v("空闲")] : (r.status === 1) ? [_vm._v("男士占用")] : (r.status === 2) ? [_vm._v("女士占用")] : (r.status === 3) ? [_vm._v("停用")] : _vm._e()], 2), _vm._v(" "), _c('td', [(r.status === 0) ? _c('a', {
      on: {
        "click": function($event) {
          return _vm.updateRoomStatus(r.ambId, 3)
        }
      }
    }, [_vm._v("停用")]) : (r.status === 3) ? _c('a', {
      on: {
        "click": function($event) {
          return _vm.updateRoomStatus(r.ambId, 0)
        }
      }
    }, [_vm._v("恢复")]) : _c('a', {
      on: {
        "click": function($event) {
          return _vm.updateRoomStatus(r.ambId, 0)
        }
      }
    }, [_vm._v("清除占用")])])])
  })], 2)]), _vm._v(" "), _c('div', {
    staticClass: "mytbl mt20"
  }, [_c('table', [_c('tr', [_c('th', [_vm._v("淋浴间编号")]), _vm._v(" "), _c('th', [_vm._v("使用人")]), _vm._v(" "), _c('th', [_vm._v("开门时间")]), _vm._v(" "), _c('th', [_vm._v("签出时间")])]), _vm._v(" "), _vm._l((_vm.bathroomLogList), function(l) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(l.roomNo))]), _vm._v(" "), _c('td', [(l.memberId) ? [_vm._v("会员/" + _vm._s(l.memberName) + "（" + _vm._s(_vm.g.Dict.Sex[l.memberSex]) + "）")] : [_vm._v("员工/" + _vm._s(l.staffName) + "（" + _vm._s(_vm.g.Dict.Sex[l.staffSex]) + "）")]], 2), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.createTime))]), _vm._v(" "), _c('td', [(!l.checkoutTime) ? _c('b', {
      staticClass: "red"
    }, [_vm._v("尚未操作签出")]) : [_vm._v(_vm._s(l.checkoutTime))]], 2)])
  })], 2)]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('p', {
    attrs: {
      "align": "right"
    }
  }, [_c('i-button', {
    on: {
      "click": function($event) {
        _vm.bathroomDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)])]), _vm._v(" "), _c('Modal', {
    attrs: {
      "title": "员工签到日志",
      "width": "800",
      "styles": {
        'top': '10px'
      }
    },
    model: {
      value: (_vm.staffEntryLog.dlg),
      callback: function($$v) {
        _vm.$set(_vm.staffEntryLog, "dlg", $$v)
      },
      expression: "staffEntryLog.dlg"
    }
  }, [_c('div', [_c('date-picker', {
    staticClass: "daterange",
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "type": "daterange",
      "format": "yyyy-MM-dd",
      "placeholder": "请选择查询日期",
      "placement": "bottom-end"
    },
    model: {
      value: (_vm.staffEntryLog.query.dates),
      callback: function($$v) {
        _vm.$set(_vm.staffEntryLog.query, "dates", $$v)
      },
      expression: "staffEntryLog.query.dates"
    }
  }), _vm._v("\n\t\t\t\t \n\t\t\t\t"), _c('i-select', {
    staticStyle: {
      "width": "120px"
    },
    attrs: {
      "placeholder": "选择员工",
      "clearable": ""
    },
    model: {
      value: (_vm.staffEntryLog.query.staffId),
      callback: function($$v) {
        _vm.$set(_vm.staffEntryLog.query, "staffId", _vm._n($$v))
      },
      expression: "staffEntryLog.query.staffId"
    }
  }, _vm._l((_vm.staffList), function(s, idx) {
    return _c('i-option', {
      key: s.staffId,
      attrs: {
        "value": s.staffId
      }
    }, [_vm._v(_vm._s(s.name))])
  }), 1), _vm._v("\n\t\t\t\t \n\t\t\t\t"), _c('i-button', {
    on: {
      "click": function($event) {
        return _vm.queryStafEntryLogList(null)
      }
    }
  }, [_vm._v("查询")]), _vm._v("\n\t\t\t\t \n\t\t\t\t"), _c('i-button', {
    attrs: {
      "icon": "ios-cloud-download-outline"
    },
    on: {
      "click": _vm.exportStaffEntryLog
    }
  }, [_vm._v("导出")])], 1), _vm._v(" "), _c('div', {
    staticClass: "mytbl mt15"
  }, [_c('table', [_c('tr', [_c('th', [_vm._v("签到设备")]), _vm._v(" "), _c('th', [_vm._v("员工")]), _vm._v(" "), _c('th', [_vm._v("签到日期")]), _vm._v(" "), _c('th', [_vm._v("首次签到时间")]), _vm._v(" "), _c('th', [_vm._v("最后签到时间")]), _vm._v(" "), _c('th', [_vm._v("时长")])]), _vm._v(" "), _vm._l((_vm.staffEntryLog.logList), function(log) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(log.machName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(log.staffName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Util.formatDate(log.createTime)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(Date.new(log.createTime).format('hh:mm:ss')))]), _vm._v(" "), _c('td', [(log.lastEntryTime) ? [_vm._v(_vm._s(Date.new(log.lastEntryTime).format('hh:mm:ss')))] : _vm._e()], 2), _vm._v(" "), _c('td', [(log.lastEntryTime) ? [_vm._v(_vm._s(Date.new(log.lastEntryTime).diffMins(Date.new(log.createTime))) + " 分钟")] : _vm._e()], 2)])
  })], 2)]), _vm._v(" "), (_vm.staffEntryLog.count && _vm.staffEntryLog.count > 30) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.staffEntryLog.count,
      "page-size": 30,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.queryStafEntryLogList
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.staffEntryLog.logList && _vm.staffEntryLog.logList.length === 0) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("暂无数据")]) : _vm._e(), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "导出文件下载",
      "width": "500",
      "ok-text": "关闭",
      "cancel-text": ""
    },
    model: {
      value: (_vm.exportDlg),
      callback: function($$v) {
        _vm.exportDlg = $$v
      },
      expression: "exportDlg"
    }
  }, [_c('div', {
    staticClass: "export-xls"
  }, [(_vm.exportFileUrl) ? [(_vm.exportFileUrl) ? _c('a', {
    attrs: {
      "href": _vm.exportFileUrl,
      "target": "_blank"
    }
  }, [_vm._v("下载导出文件（xls）")]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "remark"
  }, [_c('b', {
    staticClass: "red"
  }, [_vm._v("提示")]), _vm._v("：每次最多导出 600 条记录 "), _c('br'), _vm._v("如要导出下一个600条，请将当前页数增加20页后再导出")])] : _c('span', [_vm._v("正在查询并导出，请稍候...")])], 2)]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "二维码设备设置",
      "width": "500",
      "ok-text": "关闭",
      "cancel-text": ""
    },
    model: {
      value: (_vm.qrcodeMachConfDlg),
      callback: function($$v) {
        _vm.qrcodeMachConfDlg = $$v
      },
      expression: "qrcodeMachConfDlg"
    }
  }, [_c('div', {
    staticClass: "p10"
  }, [_vm._v("\n\t\t\t\t二维码有效期："), _c('input-int', {
    staticStyle: {
      "width": "100px"
    },
    model: {
      value: (_vm.qrcodeTimes),
      callback: function($$v) {
        _vm.qrcodeTimes = $$v
      },
      expression: "qrcodeTimes"
    }
  }), _vm._v("   秒 "), _c('span', {
    staticClass: "l15 orange"
  }, [_vm._v("（不填写时默认180秒）")])], 1), _vm._v(" "), _c('div', {
    staticClass: "form-submit center",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.g.Req.updateShopArg(2089, _vm.qrcodeTimes)
      }
    }
  }, [_vm._v("确定")]), _vm._v(" "), _c('i-button', {
    on: {
      "click": function($event) {
        _vm.qrcodeMachConfDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    attrs: {
      "width": "120"
    }
  }, [_vm._v("设备编号")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "180"
    }
  }, [_vm._v("名称")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "120"
    }
  }, [_vm._v("用途")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("会员卡计费")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "160"
    }
  }, [_vm._v("更新时间")]), _vm._v(" "), _c('th', [_vm._v("备注")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "205"
    }
  }, [_vm._v("操作")])])
}]}

/***/ }),

/***/ 2223:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "online-pay-apply-edit"
  }, [_c('shop-nav', {
    attrs: {
      "menu": "more-tools"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "more-tools",
      "page": "online-pay-apply"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [(!_vm.applyRole) ? _c('section', {
    staticClass: "no-permit"
  }, [_c('i', {
    staticClass: "iconfont icon-alert2 big"
  }), _vm._v(" 此功能只能店长或超管可操作\n    ")]) : [_c('section', [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v(_vm._s(_vm.applyId ? '修改' : '创建') + "在线支付申请")]), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _c('Collapse', {
    model: {
      value: (_vm.collapseList),
      callback: function($$v) {
        _vm.collapseList = $$v
      },
      expression: "collapseList"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "0"
    },
    scopedSlots: _vm._u([{
      key: "content",
      fn: function() {
        return [_c('Form', {
          ref: "contactInfoRefs",
          staticClass: "myform",
          attrs: {
            "model": _vm.contactInfo,
            "rules": _vm.contactInfoRule,
            "inline": "",
            "label-width": 170
          }
        }, [_c('FormItem', {
          attrs: {
            "id": "contactType",
            "prop": "contactType",
            "label": "超级管理员类型"
          }
        }, [_c('i-select', {
          staticStyle: {
            "width": "200px"
          },
          attrs: {
            "placeholder": "请选择超级管理员类型"
          },
          model: {
            value: (_vm.contactInfo.contactType),
            callback: function($$v) {
              _vm.$set(_vm.contactInfo, "contactType", $$v)
            },
            expression: "contactInfo.contactType"
          }
        }, _vm._l((_vm.g.Dict.WxContactType), function(s) {
          return _c('i-option', {
            key: s.id,
            attrs: {
              "value": s.id
            }
          }, [_vm._v(_vm._s(s.name))])
        }), 1), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                    主体为“个体工商户/企业/政府机关/事业单位/社会组织”，可选择：经营者/法人，经办人 。（经办人：经商户授权办理微信支付业务的人员）。\n                  ")])], 1), _vm._v(" "), _c('FormItem', {
          attrs: {
            "id": "contactName",
            "prop": "contactName",
            "label": "超级管理员姓名"
          }
        }, [_c('i-input', {
          staticStyle: {
            "width": "400px"
          },
          attrs: {
            "placeholder": "请输入超级管理员姓名"
          },
          model: {
            value: (_vm.contactInfo.contactName),
            callback: function($$v) {
              _vm.$set(_vm.contactInfo, "contactName", $$v)
            },
            expression: "contactInfo.contactName"
          }
        })], 1), _vm._v(" "), (_vm.contactInfo.contactType === 2) ? [_c('FormItem', {
          attrs: {
            "id": "contactIdDocType",
            "prop": "contactIdDocType",
            "label": "超级管理员证件类型"
          }
        }, [_c('i-select', {
          staticStyle: {
            "width": "200px"
          },
          attrs: {
            "placeholder": "请选择超级管理员证件类型"
          },
          model: {
            value: (_vm.contactInfo.contactIdDocType),
            callback: function($$v) {
              _vm.$set(_vm.contactInfo, "contactIdDocType", $$v)
            },
            expression: "contactInfo.contactIdDocType"
          }
        }, _vm._l((_vm.g.Dict.WxContactIdDocType), function(s) {
          return _c('i-option', {
            key: s.id,
            attrs: {
              "value": s.id
            }
          }, [_vm._v(_vm._s(s.name))])
        }), 1), _vm._v(" "), _c('span', {
          staticClass: "gray"
        }, [_vm._v("（当超级管理员类型是经办人时，必填）")])], 1), _vm._v(" "), _c('FormItem', {
          attrs: {
            "id": "contactIdNumber",
            "prop": "contactIdNumber",
            "label": "超级管理员证件号码"
          }
        }, [_c('i-input', {
          staticStyle: {
            "width": "400px"
          },
          attrs: {
            "placeholder": "请输入超级管理员证件号码"
          },
          model: {
            value: (_vm.contactInfo.contactIdNumber),
            callback: function($$v) {
              _vm.$set(_vm.contactInfo, "contactIdNumber", $$v)
            },
            expression: "contactInfo.contactIdNumber"
          }
        }), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                      1、当超级管理员类型是经办人时，请上传超级管理员证件号码\n                      "), _c('br'), _vm._v("\n                      2、可传身份证、来往内地通行证、来往大陆通行证、护照等证件号码。\n                    ")])], 1), _vm._v(" "), _c('FormItem', {
          attrs: {
            "id": "contactIdDocCopy",
            "prop": "contactIdDocCopy",
            "label": "超级管理员证件正面照片"
          }
        }, [_c('img-upload', {
          attrs: {
            "action": _vm.imgUpload.action,
            "img-max-width": _vm.imgUpload.imgMaxWidth,
            "on-success": _vm.contactIdDocCopySuccess,
            "max-size": _vm.imgUpload.maxSize,
            "default-file-list": _vm.imgUpload.contactIdDocCopy
          }
        }, [_c('i-button', {
          attrs: {
            "icon": "ios-cloud-upload-outline"
          }
        }, [_vm._v("点击上传证件正面照片")]), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                        1、当超级管理员类型是经办人时，请上传超级管理员证件的正面照片。\n                        "), _c('br'), _vm._v("\n                        2、若证件类型为身份证，请上传人像面照片。\n                        "), _c('br'), _vm._v("\n                        3、请上传彩色照片or彩色扫描件or复印件（需加盖公章鲜章），可添加“微信支付”相关水印（如微信支付认证）。\n                      ")])], 1)], 1), _vm._v(" "), (_vm.contactInfo.contactIdDocType !== 2) ? _c('FormItem', {
          attrs: {
            "id": "contactIdDocCopyBack",
            "prop": "contactIdDocCopyBack",
            "label": "超级管理员证件反面照片"
          }
        }, [_c('img-upload', {
          attrs: {
            "action": _vm.imgUpload.action,
            "img-max-width": _vm.imgUpload.imgMaxWidth,
            "on-success": _vm.contactIdDocCopyBackSuccess,
            "max-size": _vm.imgUpload.maxSize,
            "default-file-list": _vm.imgUpload.contactIdDocCopyBack
          }
        }, [_c('i-button', {
          attrs: {
            "icon": "ios-cloud-upload-outline"
          }
        }, [_vm._v("点击上传证件反面照片")]), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                        1、当超级管理员类型是经办人时，请上传超级管理员证件的反面照片。\n                        "), _c('br'), _vm._v("\n                        2、若证件类型为护照，无需上传反面照片。\n                        "), _c('br'), _vm._v("\n                        3、请上传彩色照片or彩色扫描件or复印件（需加盖公章鲜章），可添加“微信支付”相关水印（如微信支付认证）。\n                      ")])], 1)], 1) : _vm._e(), _vm._v(" "), _c('FormItem', {
          attrs: {
            "id": "contactPeriodBegin/contactPeriodEnd",
            "prop": "contactPeriodEnd",
            "label": "超级管理员证件有效期"
          }
        }, [_c('DatePicker', {
          staticStyle: {
            "width": "150px"
          },
          attrs: {
            "clearable": false,
            "type": "date",
            "placeholder": "开始时间"
          },
          model: {
            value: (_vm.contactInfo.contactPeriodBegin),
            callback: function($$v) {
              _vm.$set(_vm.contactInfo, "contactPeriodBegin", $$v)
            },
            expression: "contactInfo.contactPeriodBegin"
          }
        }), _vm._v(" \n                    "), (_vm.contactInfo.contactPeriodBegin && _vm.contactInfo.contactPeriodEnd !== '长期') ? _c('DatePicker', {
          staticStyle: {
            "width": "150px"
          },
          attrs: {
            "clearable": false,
            "options": _vm.futureDateOption,
            "type": "date",
            "data-picker": "contactInfo.contactPeriodEnd",
            "placeholder": "结束时间"
          },
          model: {
            value: (_vm.contactInfo.contactPeriodEnd),
            callback: function($$v) {
              _vm.$set(_vm.contactInfo, "contactPeriodEnd", $$v)
            },
            expression: "contactInfo.contactPeriodEnd"
          }
        }) : _vm._e(), _vm._v(" "), (_vm.contactInfo.contactPeriodEnd === '长期') ? _c('i-input', {
          staticStyle: {
            "width": "150px"
          },
          attrs: {
            "clearable": ""
          },
          model: {
            value: (_vm.contactInfo.contactPeriodEnd),
            callback: function($$v) {
              _vm.$set(_vm.contactInfo, "contactPeriodEnd", $$v)
            },
            expression: "contactInfo.contactPeriodEnd"
          }
        }) : _vm._e(), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                      1、当超级管理员类型是经办人时，请上传证件有效期开始时间。\n                      "), _c('br'), _vm._v("\n                      2、请按照示例值填写，若证件有效期为长期，请选择：长期。\n                      "), _c('br'), _vm._v("\n                      3、结束时间大于开始时间。\n                      "), _c('br'), _vm._v("\n                      示例值：2019-06-06\n                    ")])], 1), _vm._v(" "), _c('FormItem', {
          attrs: {
            "id": "businessAuthorizationLetter",
            "prop": "businessAuthorizationLetter",
            "label": "业务办理授权函"
          }
        }, [_c('img-upload', {
          attrs: {
            "action": _vm.imgUpload.action,
            "img-max-width": _vm.imgUpload.imgMaxWidth,
            "on-success": _vm.businessAuthorizationLetterSuccess,
            "max-size": _vm.imgUpload.maxSize,
            "default-file-list": _vm.imgUpload.businessAuthorizationLetter
          }
        }, [_c('i-button', {
          attrs: {
            "icon": "ios-cloud-upload-outline"
          }
        }, [_vm._v("点击上传业务办理授权函")]), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                        1、当超级管理员类型是经办人时，请上传业务办理授权函。\n                        "), _c('br'), _vm._v("\n                        2、请参照"), _c('a', {
          attrs: {
            "href": "https://kf.qq.com/faq/220509Y3Yvym220509fQvYR7.html",
            "target": "_blank"
          }
        }, [_vm._v("[示例图]")]), _vm._v("打印业务办理授权函，全部信息需打印，不支持手写商户信息，并加盖公章。\n                      ")])], 1)], 1)] : _vm._e(), _vm._v(" "), _c('FormItem', {
          attrs: {
            "id": "openid",
            "prop": "openid",
            "label": "超级管理员微信OpenID"
          }
        }, [_c('i-input', {
          staticStyle: {
            "width": "400px"
          },
          attrs: {
            "placeholder": "请输入超级管理员微信OpenID"
          },
          model: {
            value: (_vm.contactInfo.openid),
            callback: function($$v) {
              _vm.$set(_vm.contactInfo, "openid", $$v)
            },
            expression: "contactInfo.openid"
          }
        }), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                    若上传则超级管理员签约时，会校验微信号是否与该微信OpenID一致\n                  ")])], 1), _vm._v(" "), _c('FormItem', {
          attrs: {
            "id": "mobilePhone",
            "prop": "mobilePhone",
            "label": "联系手机"
          }
        }, [_c('i-input', {
          staticStyle: {
            "width": "400px"
          },
          attrs: {
            "placeholder": "请输入联系手机"
          },
          model: {
            value: (_vm.contactInfo.mobilePhone),
            callback: function($$v) {
              _vm.$set(_vm.contactInfo, "mobilePhone", _vm._n($$v))
            },
            expression: "contactInfo.mobilePhone"
          }
        }), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                    1、输入11位数字；\n                    "), _c('br'), _vm._v("\n                    2、用于接收微信支付的重要管理信息及日常操作验证码\n                  ")])], 1), _vm._v(" "), _c('FormItem', {
          attrs: {
            "id": "contactEmail",
            "prop": "contactEmail",
            "label": "联系邮箱"
          }
        }, [_c('i-input', {
          staticStyle: {
            "width": "400px"
          },
          attrs: {
            "placeholder": "请输入联系邮箱"
          },
          model: {
            value: (_vm.contactInfo.contactEmail),
            callback: function($$v) {
              _vm.$set(_vm.contactInfo, "contactEmail", $$v)
            },
            expression: "contactInfo.contactEmail"
          }
        }), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                    用于接收微信支付的开户邮件及日常业务通知；\n                  ")])], 1)], 2)]
      },
      proxy: true
    }])
  }, [_vm._v("\n            超级管理员信息\n            "), _c('help', {
    attrs: {
      "title": "说明"
    }
  }, [_vm._v("\n              超级管理员需在开户后进行签约，并可接收日常重要管理信息和进行资金操作，请确定其为商户法定代表人或负责人。\n            ")])], 1), _vm._v(" "), _c('Panel', {
    attrs: {
      "name": "1"
    },
    scopedSlots: _vm._u([{
      key: "content",
      fn: function() {
        return [_c('Form', {
          ref: "subjectInfoRefs",
          staticClass: "myform",
          attrs: {
            "model": _vm.subjectInfo,
            "rules": _vm.subjectInfoRule,
            "inline": "",
            "label-width": 170
          }
        }, [_c('FormItem', {
          attrs: {
            "id": "subjectType",
            "prop": "subjectType",
            "label": "主体类型"
          }
        }, [_c('i-select', {
          staticStyle: {
            "width": "200px"
          },
          attrs: {
            "placeholder": "请选择主体类型"
          },
          on: {
            "on-change": _vm.subjectInfoChange
          },
          model: {
            value: (_vm.subjectInfo.subjectType),
            callback: function($$v) {
              _vm.$set(_vm.subjectInfo, "subjectType", $$v)
            },
            expression: "subjectInfo.subjectType"
          }
        }, _vm._l((_vm.g.Dict.WxSubjectType), function(s) {
          return _c('i-option', {
            key: s.id,
            attrs: {
              "value": s.id
            }
          }, [_vm._v(_vm._s(s.name))])
        }), 1), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                    主体类型需与营业执照/登记证书上一致，可参考选择"), _c('a', {
          attrs: {
            "href": "https://kf.qq.com/faq/180910IBZVnQ180910naQ77b.html",
            "target": "_black"
          }
        }, [_vm._v("主体指引")]), _vm._v("。\n                    "), _c('br'), _vm._v("\n                    1.（个体户）：营业执照上的主体类型一般为个体户、个体工商户、个体经营；\n                    "), _c('br'), _vm._v("\n                    2.（企业）：营业执照上的主体类型一般为有限公司、有限责任公司；\n                    "), _c('br'), _vm._v("\n                    3.（政府机关）：包括各级、各类政府机关，如机关党委、税务、民政、人社、工商、商务、市监等；\n                    "), _c('br'), _vm._v("\n                    4.（事业单位）：包括国内各类事业单位，如：医疗、教育、学校等单位；\n                    "), _c('br'), _vm._v("\n                    5.（社会组织）： 包括社会团体、民办非企业、基金会、基层群众性自治组织、农村集体经济组织等组织。\n                  ")])], 1), _vm._v(" "), _c('FormItem', {
          attrs: {
            "id": "financeInstitution",
            "prop": "financeInstitution",
            "label": "是否是金融机构"
          }
        }, [_c('i-switch', {
          attrs: {
            "size": "large"
          },
          model: {
            value: (_vm.subjectInfo.financeInstitution),
            callback: function($$v) {
              _vm.$set(_vm.subjectInfo, "financeInstitution", $$v)
            },
            expression: "subjectInfo.financeInstitution"
          }
        }, [_c('span', {
          attrs: {
            "slot": "open"
          },
          slot: "open"
        }, [_vm._v("是")]), _vm._v(" "), _c('span', {
          attrs: {
            "slot": "close"
          },
          slot: "close"
        }, [_vm._v("否")])]), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                    选填，请根据申请主体的实际情况选择，可参考选择"), _c('a', {
          attrs: {
            "href": "https://kf.qq.com/faq/220215IrMRZ3220215n6buiU.html",
            "target": "_black"
          }
        }, [_vm._v("金融机构指引")]), _vm._v("：\n                    "), _c('br'), _vm._v("\n                    1、若商户主体是金融机构，则选择：是。\n                    "), _c('br'), _vm._v("\n                    2、若商户主体不是金融机构，则选择：否。\n                    "), _c('br'), _vm._v("\n                    默认选择：否。\n                  ")])], 1), _vm._v(" "), (_vm.subjectInfo.subjectType < 3) ? [_c('FormItem', {
          attrs: {
            "id": "licenseCopy",
            "prop": "licenseCopy",
            "label": "营业执照照片"
          }
        }, [_c('img-upload', {
          attrs: {
            "action": _vm.imgUpload.action,
            "img-max-width": _vm.imgUpload.imgMaxWidth,
            "on-success": _vm.licenseCopySuccess,
            "max-size": _vm.imgUpload.maxSize,
            "default-file-list": _vm.imgUpload.licenseCopy
          }
        }, [_c('i-button', {
          attrs: {
            "icon": "ios-cloud-upload-outline"
          }
        }, [_vm._v("点击上传营业执照照片")]), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                        1、主体为个体户/企业，必填\n                        "), _c('br'), _vm._v("\n                        2、请上传“营业执照”，需年检章齐全，当年注册除外\n                      ")])], 1)], 1), _vm._v(" "), _c('FormItem', {
          attrs: {
            "id": "licenseNumber",
            "prop": "licenseNumber",
            "label": "注册号/统一社会信用代码"
          }
        }, [_c('i-input', {
          staticStyle: {
            "width": "400px"
          },
          attrs: {
            "placeholder": "请输入注册号/统一社会信用代码"
          },
          model: {
            value: (_vm.subjectInfo.licenseNumber),
            callback: function($$v) {
              _vm.$set(_vm.subjectInfo, "licenseNumber", $$v)
            },
            expression: "subjectInfo.licenseNumber"
          }
        }), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                      请填写营业执照上的营业执照注册号，注册号格式须为18位数字|大写字母。\n                    ")])], 1), _vm._v(" "), _c('FormItem', {
          attrs: {
            "id": "merchantName",
            "prop": "merchantName",
            "label": "商户名称"
          }
        }, [_c('i-input', {
          staticStyle: {
            "width": "400px"
          },
          attrs: {
            "placeholder": "请输入商户名称"
          },
          model: {
            value: (_vm.subjectInfo.merchantName),
            callback: function($$v) {
              _vm.$set(_vm.subjectInfo, "merchantName", $$v)
            },
            expression: "subjectInfo.merchantName"
          }
        }), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                      1、请填写营业执照上的商户名称，2~110个字符，支持括号\n                      "), _c('br'), _vm._v("\n                      2、个体户，不能以“公司”结尾\n                      "), _c('br'), _vm._v("\n                      3、个体户，若营业执照上商户名称为空或为“无”，请填写\"个体户+经营者姓名\"，如“个体户张三”\n                    ")])], 1), _vm._v(" "), _c('FormItem', {
          attrs: {
            "id": "legalPerson",
            "prop": "legalPerson",
            "label": "经营者/法人姓名"
          }
        }, [_c('i-input', {
          staticStyle: {
            "width": "400px"
          },
          attrs: {
            "placeholder": "请输入经营者/法人姓名"
          },
          model: {
            value: (_vm.subjectInfo.legalPerson),
            callback: function($$v) {
              _vm.$set(_vm.subjectInfo, "legalPerson", $$v)
            },
            expression: "subjectInfo.legalPerson"
          }
        }), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                      请填写营业执照的经营者/法定代表人姓名\n                    ")])], 1), _vm._v(" "), _c('FormItem', {
          attrs: {
            "id": "licenseAddress",
            "prop": "licenseAddress",
            "label": "注册地址"
          }
        }, [_c('i-input', {
          staticStyle: {
            "width": "400px"
          },
          attrs: {
            "placeholder": "请输入注册地址"
          },
          model: {
            value: (_vm.subjectInfo.licenseAddress),
            callback: function($$v) {
              _vm.$set(_vm.subjectInfo, "licenseAddress", $$v)
            },
            expression: "subjectInfo.licenseAddress"
          }
        }), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                      建议填写营业执照的注册地址，若该字段未填写，系统将会查询国家工商信息填入。需注意若工商信息查询不到，则会被审核驳回。\n                      "), _c('br'), _vm._v("\n                      示例值：广东省深圳市南山区xx路xx号\n                    ")])], 1), _vm._v(" "), _c('FormItem', {
          attrs: {
            "id": "periodBegin/periodEnd",
            "prop": "periodEnd",
            "label": "有效期限"
          }
        }, [_c('DatePicker', {
          staticStyle: {
            "width": "150px"
          },
          attrs: {
            "clearable": false,
            "type": "date",
            "placeholder": "开始时间"
          },
          model: {
            value: (_vm.subjectInfo.periodBegin),
            callback: function($$v) {
              _vm.$set(_vm.subjectInfo, "periodBegin", $$v)
            },
            expression: "subjectInfo.periodBegin"
          }
        }), _vm._v(" \n                    "), (_vm.subjectInfo.periodBegin && _vm.subjectInfo.periodEnd !== '长期') ? _c('DatePicker', {
          staticStyle: {
            "width": "150px"
          },
          attrs: {
            "clearable": false,
            "options": _vm.futureDateOption,
            "type": "date",
            "data-picker": "subjectInfo.periodEnd",
            "placeholder": "结束时间"
          },
          model: {
            value: (_vm.subjectInfo.periodEnd),
            callback: function($$v) {
              _vm.$set(_vm.subjectInfo, "periodEnd", $$v)
            },
            expression: "subjectInfo.periodEnd"
          }
        }) : _vm._e(), _vm._v(" "), (_vm.subjectInfo.periodEnd === '长期') ? _c('i-input', {
          staticStyle: {
            "width": "150px"
          },
          attrs: {
            "clearable": ""
          },
          model: {
            value: (_vm.subjectInfo.periodEnd),
            callback: function($$v) {
              _vm.$set(_vm.subjectInfo, "periodEnd", $$v)
            },
            expression: "subjectInfo.periodEnd"
          }
        }) : _vm._e(), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                      1、建议填写营业执照的有效期限开始时间，若该字段未填写，系统将会查询国家工商信息填入。需注意若工商信息查询不到，则会被审核驳回。\n                      "), _c('br'), _vm._v("\n                      2、请按照示例值填写，若证件有效期为长期，请选择：长期。\n                      "), _c('br'), _vm._v("\n                      3、结束时间大于开始时间。\n                      "), _c('br'), _vm._v("\n                      示例值：2019-08-01\n                    ")])], 1)] : _vm._e(), _vm._v(" "), (_vm.subjectInfo.subjectType > 2) ? [_c('FormItem', {
          attrs: {
            "id": "certCopy",
            "prop": "certCopy",
            "label": "登记证书照片"
          }
        }, [_c('img-upload', {
          attrs: {
            "action": _vm.imgUpload.action,
            "img-max-width": _vm.imgUpload.imgMaxWidth,
            "on-success": _vm.certCopySuccess,
            "max-size": _vm.imgUpload.maxSize,
            "default-file-list": _vm.imgUpload.certCopy
          }
        }, [_c('i-button', {
          attrs: {
            "icon": "ios-cloud-upload-outline"
          }
        }, [_vm._v("点击上传登记证书照片")])], 1)], 1), _vm._v(" "), _c('FormItem', {
          attrs: {
            "id": "certType",
            "prop": "certType",
            "label": "登记证书类型"
          }
        }, [(_vm.subjectInfo.subjectType === 4) ? [_c('i-select', {
          staticStyle: {
            "width": "200px"
          },
          attrs: {
            "placeholder": "请选择登记证书类型"
          },
          model: {
            value: (_vm.subjectInfo.certType),
            callback: function($$v) {
              _vm.$set(_vm.subjectInfo, "certType", $$v)
            },
            expression: "subjectInfo.certType"
          }
        }, [_c('i-option', {
          attrs: {
            "value": 1
          }
        }, [_vm._v("事业单位法人证书")])], 1)] : _vm._e(), _vm._v(" "), (_vm.subjectInfo.subjectType === 3) ? [_c('i-select', {
          staticStyle: {
            "width": "200px"
          },
          attrs: {
            "placeholder": "请选择登记证书类型"
          },
          model: {
            value: (_vm.subjectInfo.certType),
            callback: function($$v) {
              _vm.$set(_vm.subjectInfo, "certType", $$v)
            },
            expression: "subjectInfo.certType"
          }
        }, [_c('i-option', {
          attrs: {
            "value": 2
          }
        }, [_vm._v("统一社会信用代码证书")])], 1)] : _vm._e(), _vm._v(" "), (_vm.subjectInfo.subjectType === 5) ? [_c('i-select', {
          staticStyle: {
            "width": "200px"
          },
          attrs: {
            "placeholder": "请选择登记证书类型"
          },
          model: {
            value: (_vm.subjectInfo.certType),
            callback: function($$v) {
              _vm.$set(_vm.subjectInfo, "certType", $$v)
            },
            expression: "subjectInfo.certType"
          }
        }, [_vm._l((_vm.g.Dict.WxCertType), function(s, sIdx) {
          return [(s.id > 2) ? _c('i-option', {
            key: sIdx,
            attrs: {
              "value": s.id
            }
          }, [_vm._v(_vm._s(s.name))]) : _vm._e()]
        })], 2)] : _vm._e()], 2), _vm._v(" "), _c('FormItem', {
          attrs: {
            "id": "certNumber",
            "prop": "certNumber",
            "label": "证书号"
          }
        }, [_c('i-input', {
          staticStyle: {
            "width": "400px"
          },
          attrs: {
            "placeholder": "请输入证书号"
          },
          model: {
            value: (_vm.subjectInfo.certNumber),
            callback: function($$v) {
              _vm.$set(_vm.subjectInfo, "certNumber", $$v)
            },
            expression: "subjectInfo.certNumber"
          }
        }), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                      请填写登记证书上的证书编号\n                    ")])], 1), _vm._v(" "), _c('FormItem', {
          attrs: {
            "id": "certMerchantName",
            "prop": "certMerchantName",
            "label": "商户名称"
          }
        }, [_c('i-input', {
          staticStyle: {
            "width": "400px"
          },
          attrs: {
            "placeholder": "请输入商户名称"
          },
          model: {
            value: (_vm.subjectInfo.certMerchantName),
            callback: function($$v) {
              _vm.$set(_vm.subjectInfo, "certMerchantName", $$v)
            },
            expression: "subjectInfo.certMerchantName"
          }
        }), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                      请填写登记证书上的商户名称\n                    ")])], 1), _vm._v(" "), _c('FormItem', {
          attrs: {
            "id": "companyAddress",
            "prop": "companyAddress",
            "label": "注册地址"
          }
        }, [_c('i-input', {
          staticStyle: {
            "width": "400px"
          },
          attrs: {
            "placeholder": "请输入注册地址"
          },
          model: {
            value: (_vm.subjectInfo.companyAddress),
            callback: function($$v) {
              _vm.$set(_vm.subjectInfo, "companyAddress", $$v)
            },
            expression: "subjectInfo.companyAddress"
          }
        }), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                      请填写登记证书的注册地址\n                    ")])], 1), _vm._v(" "), _c('FormItem', {
          attrs: {
            "id": "certLegalPerson",
            "prop": "certLegalPerson",
            "label": "法定代表人"
          }
        }, [_c('i-input', {
          staticStyle: {
            "width": "400px"
          },
          attrs: {
            "placeholder": "请输入法定代表人"
          },
          model: {
            value: (_vm.subjectInfo.certLegalPerson),
            callback: function($$v) {
              _vm.$set(_vm.subjectInfo, "certLegalPerson", $$v)
            },
            expression: "subjectInfo.certLegalPerson"
          }
        }), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                      1、只能由中文字符、英文字符、可见符号组成\n                      "), _c('br'), _vm._v("\n                      2、请填写登记证书上的法定代表人姓名\n                    ")])], 1), _vm._v(" "), _c('FormItem', {
          attrs: {
            "id": "certPeriodBegin/certPeriodEnd",
            "prop": "certPeriodEnd",
            "label": "有效期限"
          }
        }, [_c('DatePicker', {
          staticStyle: {
            "width": "150px"
          },
          attrs: {
            "clearable": false,
            "type": "date",
            "placeholder": "开始时间"
          },
          model: {
            value: (_vm.subjectInfo.certPeriodBegin),
            callback: function($$v) {
              _vm.$set(_vm.subjectInfo, "certPeriodBegin", $$v)
            },
            expression: "subjectInfo.certPeriodBegin"
          }
        }), _vm._v(" \n                    "), (_vm.subjectInfo.certPeriodBegin && _vm.subjectInfo.certPeriodEnd !== '长期') ? _c('DatePicker', {
          staticStyle: {
            "width": "150px"
          },
          attrs: {
            "clearable": false,
            "options": _vm.futureDateOption,
            "type": "date",
            "placeholder": "结束时间",
            "data-picker": "subjectInfo.certPeriodEnd"
          },
          model: {
            value: (_vm.subjectInfo.certPeriodEnd),
            callback: function($$v) {
              _vm.$set(_vm.subjectInfo, "certPeriodEnd", $$v)
            },
            expression: "subjectInfo.certPeriodEnd"
          }
        }) : _vm._e(), _vm._v(" "), (_vm.subjectInfo.certPeriodEnd === '长期') ? _c('i-input', {
          staticStyle: {
            "width": "150px"
          },
          attrs: {
            "clearable": ""
          },
          model: {
            value: (_vm.subjectInfo.certPeriodEnd),
            callback: function($$v) {
              _vm.$set(_vm.subjectInfo, "certPeriodEnd", $$v)
            },
            expression: "subjectInfo.certPeriodEnd"
          }
        }) : _vm._e(), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                      1、必填，请参考示例值填写；\n                      "), _c('br'), _vm._v("\n                      2、请按照示例值填写，若证件有效期为长期，请选择：长期。\n                      "), _c('br'), _vm._v("\n                      3、结束时间大于开始时间。\n                      "), _c('br'), _vm._v("\n                      示例值：2019-08-01\n                    ")])], 1)] : _vm._e(), _vm._v(" "), (_vm.subjectInfo.subjectType === 3 || _vm.subjectInfo.subjectType === 4) ? [_c('FormItem', {
          attrs: {
            "id": "certificateLetterCopy",
            "prop": "certificateLetterCopy",
            "label": "单位证明函照片"
          }
        }, [_c('img-upload', {
          attrs: {
            "action": _vm.imgUpload.action,
            "img-max-width": _vm.imgUpload.imgMaxWidth,
            "on-success": _vm.certificateInfoSuccess,
            "max-size": _vm.imgUpload.maxSize,
            "default-file-list": _vm.imgUpload.certificateLetterCopy
          }
        }, [_c('i-button', {
          attrs: {
            "icon": "ios-cloud-upload-outline"
          }
        }, [_vm._v("点击上传单位证明函照片")]), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                        1、主体类型为政府机关、事业单位选传：\n                        "), _c('br'), _vm._v("\n                        （1）若上传，则审核通过后即可签约，无需汇款验证。\n                        "), _c('br'), _vm._v("\n                        （2）若未上传，则审核通过后，需汇款验证。\n                        "), _c('br'), _vm._v("\n                        2、主体为个体户、企业、其他组织等，不需要上传本字段。\n                        "), _c('br'), _vm._v("\n                        3、请参照"), _c('a', {
          attrs: {
            "href": "https://kf.qq.com/faq/200114u2y2yQ200114uEz26z.html",
            "target": "_black"
          }
        }, [_vm._v("示例图")]), _vm._v("打印单位证明函，全部信息需打印，不支持手写商户信息，并加盖公章。\n                      ")])], 1)], 1)] : _vm._e(), _vm._v(" "), (_vm.subjectInfo.financeInstitution) ? [_c('FormItem', {
          attrs: {
            "id": "financeType",
            "prop": "financeType",
            "label": "金融机构类型"
          }
        }, [_c('i-select', {
          staticStyle: {
            "width": "200px"
          },
          attrs: {
            "placeholder": "请选择金融机构类型"
          },
          model: {
            value: (_vm.subjectInfo.financeType),
            callback: function($$v) {
              _vm.$set(_vm.subjectInfo, "financeType", $$v)
            },
            expression: "subjectInfo.financeType"
          }
        }, _vm._l((_vm.g.Dict.WxFinanceType), function(s) {
          return _c('i-option', {
            key: s.id,
            attrs: {
              "value": s.id
            }
          }, [_vm._v(_vm._s(s.name))])
        }), 1), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                      金融机构类型需与营业执照/登记证书上一致，可参考选择金融机构指引。\n                      "), _c('br'), _vm._v("\n                      1.（银行业）：适用于商业银行、政策性银行、农村合作银行、村镇银行、开发性金融机构等\n                      "), _c('br'), _vm._v("\n                      2.（支付机构）：适用于非银行类支付机构\n                      "), _c('br'), _vm._v("\n                      3.（保险业）：适用于保险、保险中介、保险代理、保险经纪等保险类业务\n                      "), _c('br'), _vm._v("\n                      4.（交易及结算类金融机构）：适用于交易所、登记结算类机构、银行卡清算机构、资金清算中心等\n                      "), _c('br'), _vm._v("\n                      5.（其他金融机构）：适用于财务公司、信托公司、金融资产管理公司、金融租赁公司、汽车金融公司、贷款公司、货币经纪公司、消费金融公司、证券业、金融控股公司、股票、期货、货币兑换、小额贷款公司、金融资产管理、担保公司、商业保理公司、典当行、融资租赁公司、财经咨询等其他金融业务\n                    ")])], 1), _vm._v(" "), _c('FormItem', {
          attrs: {
            "id": "financeLicensePics",
            "prop": "financeLicensePics",
            "label": "金融机构许可证图片"
          }
        }, [_c('img-upload', {
          attrs: {
            "multiple": true,
            "removeable": true,
            "max-count": 5,
            "action": _vm.imgUpload.action,
            "img-max-width": _vm.imgUpload.imgMaxWidth,
            "on-success": _vm.financeLicensePicsSuccess,
            "on-remove": _vm.financeLicensePicsRemove,
            "max-size": _vm.imgUpload.maxSize,
            "default-file-list": _vm.imgUpload.financeLicensePics
          }
        }, [_c('i-button', {
          attrs: {
            "icon": "ios-cloud-upload-outline"
          }
        }, [_vm._v("点击上传更多金融机构许可证图片")]), _vm._v("\n                       \n                      "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                        1、根据所属金融机构类型的许可证要求提供，详情查看"), _c('a', {
          attrs: {
            "href": "https://kf.qq.com/faq/220215IrMRZ3220215n6buiU.html",
            "target": "_black"
          }
        }, [_vm._v("金融机构指引")]), _vm._v("。\n                        "), _c('br'), _vm._v("\n                        2、请提供为“申请商家主体”所属的许可证，可授权使用总公司/分公司的特殊资质。\n                        "), _c('br'), _vm._v("\n                        3、最多可上传5张照片，请填写通过\n                      ")])], 1)], 1)] : _vm._e(), _vm._v(" "), (_vm.subjectInfo.subjectType === 3 || _vm.subjectInfo.subjectType === 4) ? [_c('FormItem', {
          attrs: {
            "id": "idHolderType",
            "prop": "idHolderType",
            "label": "证件持有人类型"
          }
        }, [_c('i-select', {
          staticStyle: {
            "width": "200px"
          },
          attrs: {
            "placeholder": "请选择证件持有人类型"
          },
          model: {
            value: (_vm.subjectInfo.idHolderType),
            callback: function($$v) {
              _vm.$set(_vm.subjectInfo, "idHolderType", $$v)
            },
            expression: "subjectInfo.idHolderType"
          }
        }, _vm._l((_vm.g.Dict.WxContactType), function(s) {
          return _c('i-option', {
            key: s.id,
            attrs: {
              "value": s.id
            }
          }, [_vm._v(_vm._s(s.name))])
        }), 1), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                      1. 主体类型为政府机关、事业单位时选传：\n                      "), _c('br'), _vm._v("\n                      （1）若上传的是法人证件，则不需要上传该字段\n                      "), _c('br'), _vm._v("\n                      （2）若因特殊情况，无法提供法人证件时，可上传经办人。 （经办人：经商户授权办理微信支付业务的人员，授权范围包括但不限于签约，入驻过程需完成账户验证）。\n                      "), _c('br'), _vm._v("\n                      2. 主体类型为企业、个体户、社会组织时，默认为经营者/法人，不需要上传该字段。\n                    ")])], 1)] : _vm._e(), _vm._v(" "), (_vm.subjectInfo.idHolderType === 1) ? [_c('FormItem', {
          attrs: {
            "id": "idDocType",
            "prop": "idDocType",
            "label": "证件类型"
          }
        }, [(_vm.subjectInfo.subjectType === 3) ? [_c('i-select', {
          staticStyle: {
            "width": "200px"
          },
          attrs: {
            "placeholder": "请选择证件类型"
          },
          model: {
            value: (_vm.subjectInfo.idDocType),
            callback: function($$v) {
              _vm.$set(_vm.subjectInfo, "idDocType", $$v)
            },
            expression: "subjectInfo.idDocType"
          }
        }, [_c('i-option', {
          attrs: {
            "value": 1
          }
        }, [_vm._v("中国大陆居民-身份证类型")])], 1)] : [_c('i-select', {
          staticStyle: {
            "width": "200px"
          },
          attrs: {
            "placeholder": "请选择证件类型"
          },
          model: {
            value: (_vm.subjectInfo.idDocType),
            callback: function($$v) {
              _vm.$set(_vm.subjectInfo, "idDocType", $$v)
            },
            expression: "subjectInfo.idDocType"
          }
        }, _vm._l((_vm.g.Dict.WxContactIdDocType), function(s) {
          return _c('i-option', {
            key: s.id,
            attrs: {
              "value": s.id
            }
          }, [_vm._v(_vm._s(s.name))])
        }), 1)], _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                      1、当证件持有人类型为法人时，填写。\n                      "), _c('br'), _vm._v("\n                      2、个体户/企业/事业单位/社会组织：可选择任一证件类型，政府机关仅支持中国大陆居民-身份证类型。\n                    ")])], 2)] : _vm._e(), _vm._v(" "), (_vm.subjectInfo.idHolderType === 2) ? _c('FormItem', {
          attrs: {
            "id": "authorizeLetterCopy",
            "prop": "authorizeLetterCopy",
            "label": "法定代表人说明函"
          }
        }, [_c('img-upload', {
          attrs: {
            "action": _vm.imgUpload.action,
            "img-max-width": _vm.imgUpload.imgMaxWidth,
            "on-success": _vm.authorizeLetterCopySuccess,
            "max-size": _vm.imgUpload.maxSize,
            "default-file-list": _vm.imgUpload.authorizeLetterCopy
          }
        }, [_c('i-button', {
          attrs: {
            "icon": "ios-cloud-upload-outline"
          }
        }, [_vm._v("点击上传法定代表人说明函")]), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                      1、个体户：请上传经营者的身份证件。\n                      "), _c('br'), _vm._v("\n                      2、企业/社会组织：请上传法人的身份证件。\n                      "), _c('br'), _vm._v("\n                      3、政府机关/事业单位：请上传法人/经办人的身份证件。\n                      "), _c('br'), _vm._v("\n                      4、当证件持有人类型为经办人时，必须上传。其他情况，无需上传。\n                      "), _c('br'), _vm._v("\n                      5、若因特殊情况，无法提供法定代表人证件时，请参照"), _c('a', {
          attrs: {
            "href": "https://kf.qq.com/faq/220127aUzAju220127UfiuQr.html",
            "target": "_black"
          }
        }, [_vm._v("示例图")]), _vm._v("打印法定代表人说明函，全部信息需打印，不支持手写商户信息，并加盖公章。\n                    ")])], 1)], 1) : _vm._e(), _vm._v(" "), (_vm.subjectInfo.idDocType === 1 && _vm.subjectInfo.idHolderType === 1) ? [_c('FormItem', {
          attrs: {
            "id": "idCardCopy",
            "prop": "idCardCopy",
            "label": "身份证人像面照片"
          }
        }, [_c('img-upload', {
          attrs: {
            "action": _vm.imgUpload.action,
            "img-max-width": _vm.imgUpload.imgMaxWidth,
            "on-success": _vm.idCardCopySuccess,
            "max-size": _vm.imgUpload.maxSize,
            "default-file-list": _vm.imgUpload.idCardCopy
          }
        }, [_c('i-button', {
          attrs: {
            "icon": "ios-cloud-upload-outline"
          }
        }, [_vm._v("点击上传身份证人像面照片")]), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                        1、请上传个体户经营者/法人的身份证人像面照片\n                        "), _c('br'), _vm._v("\n                        2、请上传彩色照片or彩色扫描件or复印件（需加盖公章鲜章），可添加“微信支付”相关水印（如微信支付认证）。\n                      ")])], 1)], 1), _vm._v(" "), _c('FormItem', {
          attrs: {
            "id": "idCardNational",
            "prop": "idCardNational",
            "label": "身份证国徽面照片"
          }
        }, [_c('img-upload', {
          attrs: {
            "action": _vm.imgUpload.action,
            "img-max-width": _vm.imgUpload.imgMaxWidth,
            "on-success": _vm.idCardNationalSuccess,
            "max-size": _vm.imgUpload.maxSize,
            "default-file-list": _vm.imgUpload.idCardNational
          }
        }, [_c('i-button', {
          attrs: {
            "icon": "ios-cloud-upload-outline"
          }
        }, [_vm._v("点击上传身份证国徽面照片")]), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                        1、请上传个体户经营者/法人的身份证国徽面照片\n                        "), _c('br'), _vm._v("\n                        2、请上传彩色照片or彩色扫描件or复印件（需加盖公章鲜章），可添加“微信支付”相关水印（如微信支付认证）。\n                      ")])], 1)], 1), _vm._v(" "), _c('FormItem', {
          attrs: {
            "id": "idCardName",
            "prop": "idCardName",
            "label": "身份证姓名"
          }
        }, [_c('i-input', {
          staticStyle: {
            "width": "400px"
          },
          attrs: {
            "placeholder": "请输入身份证姓名"
          },
          model: {
            value: (_vm.subjectInfo.idCardName),
            callback: function($$v) {
              _vm.$set(_vm.subjectInfo, "idCardName", $$v)
            },
            expression: "subjectInfo.idCardName"
          }
        }), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                      请填写个体户经营者/法定代表人对应身份证的姓名，2~30个中文字符、英文字符、符号\n                    ")])], 1), _vm._v(" "), _c('FormItem', {
          attrs: {
            "id": "idCardNumber",
            "prop": "idCardNumber",
            "label": "身份证号码"
          }
        }, [_c('i-input', {
          staticStyle: {
            "width": "400px"
          },
          attrs: {
            "placeholder": "请输入身份证号码"
          },
          model: {
            value: (_vm.subjectInfo.idCardNumber),
            callback: function($$v) {
              _vm.$set(_vm.subjectInfo, "idCardNumber", $$v)
            },
            expression: "subjectInfo.idCardNumber"
          }
        }), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                      请填写个体户经营者/法定代表人对应身份证的号码\n                    ")])], 1), _vm._v(" "), (_vm.subjectInfo.subjectType === 2) ? _c('FormItem', {
          attrs: {
            "id": "idCardAddress",
            "prop": "idCardAddress",
            "label": "身份证居住地址"
          }
        }, [_c('i-input', {
          staticStyle: {
            "width": "400px"
          },
          attrs: {
            "placeholder": "请输入身份证居住地址"
          },
          model: {
            value: (_vm.subjectInfo.idCardAddress),
            callback: function($$v) {
              _vm.$set(_vm.subjectInfo, "idCardAddress", $$v)
            },
            expression: "subjectInfo.idCardAddress"
          }
        }), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                      1、主体类型为企业时，需要填写。其他主体类型，无需上传。\n                      "), _c('br'), _vm._v("\n                      2、请按照身份证住址填写，如广东省深圳市南山区xx路xx号xx室\n                    ")])], 1) : _vm._e(), _vm._v(" "), _c('FormItem', {
          attrs: {
            "id": "cardPeriodBegin/cardPeriodEnd",
            "prop": "cardPeriodEnd",
            "label": "身份证有效期"
          }
        }, [_c('DatePicker', {
          staticStyle: {
            "width": "150px"
          },
          attrs: {
            "clearable": false,
            "type": "date",
            "placeholder": "开始时间"
          },
          model: {
            value: (_vm.subjectInfo.cardPeriodBegin),
            callback: function($$v) {
              _vm.$set(_vm.subjectInfo, "cardPeriodBegin", $$v)
            },
            expression: "subjectInfo.cardPeriodBegin"
          }
        }), _vm._v(" \n                    "), (_vm.subjectInfo.cardPeriodBegin && _vm.subjectInfo.cardPeriodEnd !== '长期') ? _c('DatePicker', {
          staticStyle: {
            "width": "150px"
          },
          attrs: {
            "clearable": false,
            "options": _vm.futureDateOption,
            "type": "date",
            "placeholder": "结束时间",
            "data-picker": "subjectInfo.cardPeriodEnd"
          },
          model: {
            value: (_vm.subjectInfo.cardPeriodEnd),
            callback: function($$v) {
              _vm.$set(_vm.subjectInfo, "cardPeriodEnd", $$v)
            },
            expression: "subjectInfo.cardPeriodEnd"
          }
        }) : _vm._e(), _vm._v(" "), (_vm.subjectInfo.cardPeriodEnd === '长期') ? _c('i-input', {
          staticStyle: {
            "width": "150px"
          },
          attrs: {
            "clearable": ""
          },
          model: {
            value: (_vm.subjectInfo.cardPeriodEnd),
            callback: function($$v) {
              _vm.$set(_vm.subjectInfo, "cardPeriodEnd", $$v)
            },
            expression: "subjectInfo.cardPeriodEnd"
          }
        }) : _vm._e(), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                      1、必填，请按照示例值填写。\n                      "), _c('br'), _vm._v("\n                      2、请按照示例值填写，若证件有效期为长期，请选择：长期。\n                      "), _c('br'), _vm._v("\n                      3、结束时间大于开始时间。\n                      "), _c('br'), _vm._v("\n                      示例值：2026-06-06\n                    ")])], 1)] : _vm._e(), _vm._v(" "), (_vm.subjectInfo.idDocType > 1 && _vm.subjectInfo.idHolderType === 1) ? [_c('FormItem', {
          attrs: {
            "id": "idDocCopy",
            "prop": "idDocCopy",
            "label": "证件正面照片"
          }
        }, [_c('img-upload', {
          attrs: {
            "action": _vm.imgUpload.action,
            "img-max-width": _vm.imgUpload.imgMaxWidth,
            "on-success": _vm.idDocCopySuccess,
            "max-size": _vm.imgUpload.maxSize,
            "default-file-list": _vm.imgUpload.idDocCopy
          }
        }, [_c('i-button', {
          attrs: {
            "icon": "ios-cloud-upload-outline"
          }
        }, [_vm._v("点击上传证件正面照片")]), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                        1、证件类型不为“身份证”\"时，上传证件正面照片。\n                        "), _c('br'), _vm._v("\n                        2、请上传彩色照片or彩色扫描件or复印件（需加盖公章鲜章），可添加“微信支付”相关水印（如微信支付认证）。\n                      ")])], 1)], 1), _vm._v(" "), (_vm.subjectInfo.idDocType !== 2) ? _c('FormItem', {
          attrs: {
            "id": "idDocCopyBack",
            "prop": "idDocCopyBack",
            "label": "证件反面照片"
          }
        }, [_c('img-upload', {
          attrs: {
            "action": _vm.imgUpload.action,
            "img-max-width": _vm.imgUpload.imgMaxWidth,
            "on-success": _vm.idDocCopyBackSuccess,
            "max-size": _vm.imgUpload.maxSize,
            "default-file-list": _vm.imgUpload.idDocCopyBack
          }
        }, [_c('i-button', {
          attrs: {
            "icon": "ios-cloud-upload-outline"
          }
        }, [_vm._v("点击上传证件反面照片")]), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                        1、若证件类型为往来通行证、外国人居留证、港澳居住证、台湾居住证时，上传证件反面照片。\n                        "), _c('br'), _vm._v("\n                        2、若证件类型为护照，无需上传反面照片\n                        "), _c('br'), _vm._v("\n                        3、请上传彩色照片or彩色扫描件or复印件（需加盖公章鲜章），可添加“微信支付”相关水印（如微信支付认证）。\n                      ")])], 1)], 1) : _vm._e(), _vm._v(" "), _c('FormItem', {
          attrs: {
            "id": "idDocName",
            "prop": "idDocName",
            "label": "证件姓名"
          }
        }, [_c('i-input', {
          staticStyle: {
            "width": "400px"
          },
          attrs: {
            "placeholder": "请输入证件姓名"
          },
          model: {
            value: (_vm.subjectInfo.idDocName),
            callback: function($$v) {
              _vm.$set(_vm.subjectInfo, "idDocName", $$v)
            },
            expression: "subjectInfo.idDocName"
          }
        }), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                      请填写经营者/法定代表人的证件姓名，2~30个中文字符、英文字符、符号\n                    ")])], 1), _vm._v(" "), _c('FormItem', {
          attrs: {
            "id": "idDocNumber",
            "prop": "idDocNumber",
            "label": "证件号码"
          }
        }, [_c('i-input', {
          staticStyle: {
            "width": "400px"
          },
          attrs: {
            "placeholder": "请输入证件号码"
          },
          model: {
            value: (_vm.subjectInfo.idDocNumber),
            callback: function($$v) {
              _vm.$set(_vm.subjectInfo, "idDocNumber", $$v)
            },
            expression: "subjectInfo.idDocNumber"
          }
        }), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                      请填写经营者/法定代表人的证件号码\n                    ")])], 1), _vm._v(" "), (_vm.subjectInfo.subjectType === 2) ? _c('FormItem', {
          attrs: {
            "id": "idDocAddress",
            "prop": "idDocAddress",
            "label": "证件居住地址"
          }
        }, [_c('i-input', {
          staticStyle: {
            "width": "400px"
          },
          attrs: {
            "placeholder": "请输入证件居住地址"
          },
          model: {
            value: (_vm.subjectInfo.idDocAddress),
            callback: function($$v) {
              _vm.$set(_vm.subjectInfo, "idDocAddress", $$v)
            },
            expression: "subjectInfo.idDocAddress"
          }
        }), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                      1、主体类型为企业时，需要填写。其他主体类型，无需上传。\n                      "), _c('br'), _vm._v("\n                      2、请按照证件上住址填写，若证件上无住址则按照实际住址填写，如广东省深圳市南山区xx路xx号xx室。\n                    ")])], 1) : _vm._e(), _vm._v(" "), _c('FormItem', {
          attrs: {
            "id": "docPeriodBegin/docPeriodEnd",
            "prop": "docPeriodEnd",
            "label": "证件有效期"
          }
        }, [_c('DatePicker', {
          staticStyle: {
            "width": "150px"
          },
          attrs: {
            "clearable": false,
            "type": "date",
            "placeholder": "开始时间"
          },
          model: {
            value: (_vm.subjectInfo.docPeriodBegin),
            callback: function($$v) {
              _vm.$set(_vm.subjectInfo, "docPeriodBegin", $$v)
            },
            expression: "subjectInfo.docPeriodBegin"
          }
        }), _vm._v(" \n                    "), (_vm.subjectInfo.docPeriodBegin && _vm.subjectInfo.docPeriodEnd !== '长期') ? _c('DatePicker', {
          staticStyle: {
            "width": "150px"
          },
          attrs: {
            "clearable": false,
            "options": _vm.futureDateOption,
            "type": "date",
            "placeholder": "结束时间",
            "data-picker": "subjectInfo.docPeriodEnd"
          },
          model: {
            value: (_vm.subjectInfo.docPeriodEnd),
            callback: function($$v) {
              _vm.$set(_vm.subjectInfo, "docPeriodEnd", $$v)
            },
            expression: "subjectInfo.docPeriodEnd"
          }
        }) : _vm._e(), _vm._v(" "), (_vm.subjectInfo.docPeriodEnd === '长期') ? _c('i-input', {
          staticStyle: {
            "width": "150px"
          },
          attrs: {
            "clearable": ""
          },
          model: {
            value: (_vm.subjectInfo.docPeriodEnd),
            callback: function($$v) {
              _vm.$set(_vm.subjectInfo, "docPeriodEnd", $$v)
            },
            expression: "subjectInfo.docPeriodEnd"
          }
        }) : _vm._e(), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                      1、必填，请按照示例值填写。\n                      "), _c('br'), _vm._v("\n                      2、请按照示例值填写，若证件有效期为长期，请选择：长期。\n                      "), _c('br'), _vm._v("\n                      3、结束时间大于开始时间。\n                      "), _c('br'), _vm._v("\n                      示例值：2026-06-06\n                    ")])], 1)] : _vm._e(), _vm._v(" "), (_vm.subjectInfo.subjectType === 2) ? [_c('FormItem', {
          attrs: {
            "id": "owner",
            "prop": "owner",
            "label": "经营者/法人是否为受益人"
          }
        }, [_c('i-switch', {
          attrs: {
            "size": "large"
          },
          on: {
            "on-change": _vm.ownerChangeFun
          },
          model: {
            value: (_vm.subjectInfo.owner),
            callback: function($$v) {
              _vm.$set(_vm.subjectInfo, "owner", $$v)
            },
            expression: "subjectInfo.owner"
          }
        }, [_c('span', {
          attrs: {
            "slot": "open"
          },
          slot: "open"
        }, [_vm._v("是")]), _vm._v(" "), _c('span', {
          attrs: {
            "slot": "close"
          },
          slot: "close"
        }, [_vm._v("关")])]), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                      1、若经营者/法人是最终受益人，则选择：是。\n                      "), _c('br'), _vm._v("\n                      2、若经营者/法人不是最终受益人，则选择：否。\n                    ")])], 1), _vm._v(" "), _c('div', {
          staticClass: "tit"
        }, [_c('span', [_vm._v("最终受益人信息列表")]), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                      若经营者/法人不是最终受益所有人，则需补充受益所有人信息，最多上传4个。\n                      "), _c('br'), _vm._v("\n                      若经营者/法人是最终受益所有人之一，可在此添加其他受益所有人信息，最多上传3个。\n                      "), _c('br'), _vm._v("\n                      根据国家相关法律法规，需要提供公司受益所有人信息，受益所有人需符合至少以下条件之一：\n                      "), _c('br'), _vm._v("\n                      1、直接或者间接拥有超过25%公司股权或者表决权的自然人。\n                      "), _c('br'), _vm._v("\n                      2、通过人事、财务等其他方式对公司进行控制的自然人。\n                      "), _c('br'), _vm._v("\n                      3、公司的高级管理人员，包括公司的经理、副经理、财务负责人、上市公司董事会秘书和公司章程规定的其他人员。\n                    ")])], 1), _vm._v(" "), _vm._l((_vm.subjectInfo.uboInfoList), function(u, idx) {
          return [_c('div', {
            key: idx,
            staticClass: "mytbl"
          }, [_c('table', [_c('tr', [_c('th', {
            attrs: {
              "width": "120"
            }
          }, [_vm._v("第" + _vm._s(idx + 1) + "位受益人")]), _vm._v(" "), _c('td', [_c('FormItem', {
            attrs: {
              "id": 'uboIdDocType' + (idx + 1),
              "prop": 'uboInfoList[' + idx + '].uboIdDocType',
              "label": "证件类型"
            }
          }, [_c('i-select', {
            staticStyle: {
              "width": "200px"
            },
            attrs: {
              "placeholder": "请选择证件类型"
            },
            model: {
              value: (_vm.subjectInfo.uboInfoList[idx].uboIdDocType),
              callback: function($$v) {
                _vm.$set(_vm.subjectInfo.uboInfoList[idx], "uboIdDocType", $$v)
              },
              expression: "subjectInfo.uboInfoList[idx].uboIdDocType"
            }
          }, _vm._l((_vm.g.Dict.WxContactIdDocType), function(s) {
            return _c('i-option', {
              key: s.id,
              attrs: {
                "value": s.id
              }
            }, [_vm._v(_vm._s(s.name))])
          }), 1), _vm._v(" "), _c('help', {
            attrs: {
              "title": "提示"
            },
            on: {
              "click": function($event) {
                $event.stopPropagation();
              }
            }
          }, [_vm._v("\n                                请填写受益人的证件类型。\n                              ")])], 1), _vm._v(" "), _c('FormItem', {
            attrs: {
              "id": 'uboIdDocCopy' + (idx + 1),
              "prop": 'uboInfoList[' + idx + '].uboIdDocCopy',
              "label": "证件正面照片"
            }
          }, [_c('img-upload', {
            attrs: {
              "action": _vm.imgUpload.action,
              "img-max-width": _vm.imgUpload.imgMaxWidth,
              "successValue": idx,
              "on-success": _vm.uboIdDocCopySuccess,
              "max-size": _vm.imgUpload.maxSize,
              "default-file-list": _vm.imgUpload.uboInfoList[idx].uboIdDocCopy
            }
          }, [_c('i-button', {
            attrs: {
              "icon": "ios-cloud-upload-outline"
            }
          }, [_vm._v("点击上传证件正面照片")]), _vm._v(" "), _c('help', {
            attrs: {
              "title": "提示"
            },
            on: {
              "click": function($event) {
                $event.stopPropagation();
              }
            }
          }, [_vm._v("\n                                  1、请上传受益人证件的正面照片。\n                                  "), _c('br'), _vm._v("\n                                  2、若证件类型为身份证，请上传人像面照片。\n                                  "), _c('br'), _vm._v("\n                                  3、请上传彩色照片or彩色扫描件or复印件（需加盖公章鲜章），可添加“微信支付”相关水印（如微信支付认证）。\n                                ")])], 1)], 1), _vm._v(" "), (_vm.subjectInfo.uboInfoList[idx].uboIdDocType !== 2) ? _c('FormItem', {
            attrs: {
              "id": 'uboIdDocCopyBack' + (idx + 1),
              "prop": 'uboInfoList[' + idx + '].uboIdDocCopyBack',
              "label": "证件反面照片"
            }
          }, [_c('img-upload', {
            attrs: {
              "action": _vm.imgUpload.action,
              "img-max-width": _vm.imgUpload.imgMaxWidth,
              "successValue": idx,
              "on-success": _vm.uboIdDocCopyBackSuccess,
              "max-size": _vm.imgUpload.maxSize,
              "default-file-list": _vm.imgUpload.uboInfoList[idx].uboIdDocCopyBack
            }
          }, [_c('i-button', {
            attrs: {
              "icon": "ios-cloud-upload-outline"
            }
          }, [_vm._v("点击上传证件反面照片")]), _vm._v(" "), _c('help', {
            attrs: {
              "title": "提示"
            },
            on: {
              "click": function($event) {
                $event.stopPropagation();
              }
            }
          }, [_vm._v("\n                                  1、请上传受益人证件的反面照片。\n                                  "), _c('br'), _vm._v("\n                                  2、若证件类型为身份证，请上传国徽面照片。\n                                  "), _c('br'), _vm._v("\n                                  3、若证件类型为护照，无需上传反面照片。\n                                ")])], 1)], 1) : _vm._e(), _vm._v(" "), _c('FormItem', {
            attrs: {
              "id": 'uboIdDocName' + (idx + 1),
              "prop": 'uboInfoList[' + idx + '].uboIdDocName',
              "label": "证件姓名"
            }
          }, [_c('i-input', {
            staticStyle: {
              "width": "400px"
            },
            attrs: {
              "placeholder": "请输入证件姓名"
            },
            model: {
              value: (_vm.subjectInfo.uboInfoList[idx].uboIdDocName),
              callback: function($$v) {
                _vm.$set(_vm.subjectInfo.uboInfoList[idx], "uboIdDocName", $$v)
              },
              expression: "subjectInfo.uboInfoList[idx].uboIdDocName"
            }
          })], 1), _vm._v(" "), _c('FormItem', {
            attrs: {
              "id": 'uboIdDocNumber' + (idx + 1),
              "prop": 'uboInfoList[' + idx + '].uboIdDocNumber',
              "label": "证件号码"
            }
          }, [_c('i-input', {
            staticStyle: {
              "width": "400px"
            },
            attrs: {
              "placeholder": "请输入证件号码"
            },
            model: {
              value: (_vm.subjectInfo.uboInfoList[idx].uboIdDocNumber),
              callback: function($$v) {
                _vm.$set(_vm.subjectInfo.uboInfoList[idx], "uboIdDocNumber", $$v)
              },
              expression: "subjectInfo.uboInfoList[idx].uboIdDocNumber"
            }
          })], 1), _vm._v(" "), _c('FormItem', {
            attrs: {
              "id": 'uboIdDocAddress' + (idx + 1),
              "prop": 'uboInfoList[' + idx + '].uboIdDocAddress',
              "label": "证件居住地址"
            }
          }, [_c('i-input', {
            staticStyle: {
              "width": "400px"
            },
            attrs: {
              "placeholder": "请输入证件居住地址"
            },
            model: {
              value: (_vm.subjectInfo.uboInfoList[idx].uboIdDocAddress),
              callback: function($$v) {
                _vm.$set(_vm.subjectInfo.uboInfoList[idx], "uboIdDocAddress", $$v)
              },
              expression: "subjectInfo.uboInfoList[idx].uboIdDocAddress"
            }
          }), _vm._v(" "), _c('help', {
            attrs: {
              "title": "提示"
            },
            on: {
              "click": function($event) {
                $event.stopPropagation();
              }
            }
          }, [_vm._v("\n                                请按照证件上住址填写，若证件上无住址则按照实际住址填写，如广东省深圳市南山区xx路xx号xx室。\n                              ")])], 1), _vm._v(" "), _c('FormItem', {
            attrs: {
              "id": 'uboPeriodBegin/uboPeriodEnd' + (idx + 1),
              "prop": 'uboInfoList[' + idx + '].uboPeriodEnd',
              "label": "证件有效期"
            }
          }, [_c('DatePicker', {
            staticStyle: {
              "width": "150px"
            },
            attrs: {
              "clearable": false,
              "type": "date",
              "placeholder": "开始时间"
            },
            model: {
              value: (_vm.subjectInfo.uboInfoList[idx].uboPeriodBegin),
              callback: function($$v) {
                _vm.$set(_vm.subjectInfo.uboInfoList[idx], "uboPeriodBegin", $$v)
              },
              expression: "subjectInfo.uboInfoList[idx].uboPeriodBegin"
            }
          }), _vm._v(" \n                              "), (_vm.subjectInfo.uboInfoList[idx].uboPeriodBegin && _vm.subjectInfo.uboInfoList[idx].uboPeriodEnd !== '长期') ? _c('DatePicker', {
            staticStyle: {
              "width": "150px"
            },
            attrs: {
              "clearable": false,
              "options": _vm.futureDateOption,
              "type": "date",
              "placeholder": "结束时间",
              "data-picker": "subjectInfo.uboInfoList",
              "data-idx": idx
            },
            model: {
              value: (_vm.subjectInfo.uboInfoList[idx].uboPeriodEnd),
              callback: function($$v) {
                _vm.$set(_vm.subjectInfo.uboInfoList[idx], "uboPeriodEnd", $$v)
              },
              expression: "subjectInfo.uboInfoList[idx].uboPeriodEnd"
            }
          }) : _vm._e(), _vm._v(" "), (_vm.subjectInfo.uboInfoList[idx].uboPeriodEnd === '长期') ? _c('i-input', {
            staticStyle: {
              "width": "150px"
            },
            attrs: {
              "clearable": ""
            },
            model: {
              value: (_vm.subjectInfo.uboInfoList[idx].uboPeriodEnd),
              callback: function($$v) {
                _vm.$set(_vm.subjectInfo.uboInfoList[idx], "uboPeriodEnd", $$v)
              },
              expression: "subjectInfo.uboInfoList[idx].uboPeriodEnd"
            }
          }) : _vm._e(), _vm._v(" "), _c('help', {
            attrs: {
              "title": "提示"
            },
            on: {
              "click": function($event) {
                $event.stopPropagation();
              }
            }
          }, [_vm._v("\n                                1、必填，请按照示例值填写。\n                                "), _c('br'), _vm._v("\n                                2、请按照示例值填写，若证件有效期为长期，请选择：长期。\n                                "), _c('br'), _vm._v("\n                                3、结束时间大于开始时间。\n                                "), _c('br'), _vm._v("\n                                示例值：2026-06-06\n                              ")])], 1)], 1), _vm._v(" "), _c('th', [_c('a', {
            on: {
              "click": function($event) {
                return _vm.deleteUboFun(idx)
              }
            }
          }, [_c('i', {
            staticClass: "iconfont icon-delete"
          })])])])])])]
        }), _vm._v(" "), (_vm.addUboInfoCom) ? _c('i-button', {
          attrs: {
            "icon": "md-add"
          },
          on: {
            "click": _vm.addUboInfoFun
          }
        }, [_vm._v("添加受益人")]) : _vm._e()] : _vm._e()], 2)]
      },
      proxy: true
    }])
  }, [_vm._v("\n            主体资料\n            "), _c('help', {
    attrs: {
      "title": "说明"
    }
  }, [_vm._v("\n              请填写商家的营业执照/登记证书、经营者/法人的证件等信息\n            ")])], 1), _vm._v(" "), _c('Panel', {
    attrs: {
      "name": "2"
    },
    scopedSlots: _vm._u([{
      key: "content",
      fn: function() {
        return [_c('Form', {
          ref: "businessInfoRefs",
          staticClass: "myform",
          attrs: {
            "model": _vm.businessInfo,
            "rules": _vm.businessInfoRule,
            "inline": "",
            "label-width": 170
          }
        }, [_c('FormItem', {
          attrs: {
            "id": "merchantShortname",
            "prop": "merchantShortname",
            "label": "商户简称"
          }
        }, [_c('i-input', {
          staticStyle: {
            "width": "400px"
          },
          attrs: {
            "placeholder": "请输入商户简称"
          },
          model: {
            value: (_vm.businessInfo.merchantShortname),
            callback: function($$v) {
              _vm.$set(_vm.businessInfo, "merchantShortname", $$v)
            },
            expression: "businessInfo.merchantShortname"
          }
        }), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                    1、请输入2-30个字符，支持中文/字母/数字/特殊符号\n                    "), _c('br'), _vm._v("\n                    2、在支付完成页向买家展示，需与微信经营类目相关；\n                    "), _c('br'), _vm._v("\n                    3、简称要求\n                    "), _c('br'), _vm._v("\n                    （1）不支持单纯以人名来命名，若为个体户经营，可用“个体户+经营者名称”或“经营者名称+业务”命名，如“个体户张三”或“张三餐饮店”；\n                    "), _c('br'), _vm._v("\n                    （2）不支持无实际意义的文案，如“XX特约商户”、“800”、“XX客服电话XXX”；\n                    "), _c('br'), _vm._v("\n                    示例值：张三餐饮店\n                  ")])], 1), _vm._v(" "), _c('FormItem', {
          attrs: {
            "id": "servicePhone",
            "prop": "servicePhone",
            "label": "客服电话"
          }
        }, [_c('i-input', {
          staticStyle: {
            "width": "400px"
          },
          attrs: {
            "placeholder": "请输入客服电话"
          },
          model: {
            value: (_vm.businessInfo.servicePhone),
            callback: function($$v) {
              _vm.$set(_vm.businessInfo, "servicePhone", $$v)
            },
            expression: "businessInfo.servicePhone"
          }
        }), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                    将在交易记录中向买家展示，请确保电话畅通以便平台回拨确认\n                    "), _c('br'), _vm._v("\n                    示例值：0758XXXXX\n                  ")])], 1), _vm._v(" "), _c('FormItem', {
          attrs: {
            "id": "salesScenesType",
            "prop": "salesScenesType",
            "label": "经营场景类型"
          }
        }, [_c('i-select', {
          staticStyle: {
            "width": "400px"
          },
          attrs: {
            "multiple": "",
            "placeholder": "请选择经营场景类型"
          },
          model: {
            value: (_vm.businessInfo.salesScenesType),
            callback: function($$v) {
              _vm.$set(_vm.businessInfo, "salesScenesType", $$v)
            },
            expression: "businessInfo.salesScenesType"
          }
        }, _vm._l((_vm.g.Dict.WxSalesScenesType), function(s) {
          return _c('i-option', {
            key: s.id,
            attrs: {
              "value": s.id
            }
          }, [_vm._v(_vm._s(s.name))])
        }), 1), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                    1、请勾选实际售卖商品/提供服务场景（至少一项），以便为你开通需要的支付权限。\n                    "), _c('br'), _vm._v("\n                    2、建议只勾选目前必须的场景，以便尽快通过入驻审核，其他支付权限可在入驻后再根据实际需要发起申请。\n                  ")])], 1), _vm._v(" "), (_vm.businessInfo.salesScenesType.indexOf(1) != -1) ? [_c('div', {
          staticClass: "tit"
        }, [_c('span', [_vm._v("线下场所场景")]), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                      选择了线下场所就必填，审核通过后，服务商可帮商户发起付款码支付、JSAPI支付。\n                    ")])], 1), _vm._v(" "), _c('FormItem', {
          attrs: {
            "id": "bizStoreName",
            "prop": "bizStoreName",
            "label": "线下场所名称"
          }
        }, [_c('i-input', {
          staticStyle: {
            "width": "400px"
          },
          attrs: {
            "placeholder": "请输入线下场所名称"
          },
          model: {
            value: (_vm.businessInfo.bizStoreName),
            callback: function($$v) {
              _vm.$set(_vm.businessInfo, "bizStoreName", $$v)
            },
            expression: "businessInfo.bizStoreName"
          }
        }), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                      请填写门店名称\n                    ")])], 1), _vm._v(" "), _c('FormItem', {
          attrs: {
            "id": "bizAddressCode",
            "prop": "bizAddressCode",
            "label": "线下城市"
          }
        }, [_c('Cascader', {
          staticStyle: {
            "width": "400px"
          },
          attrs: {
            "filterable": "",
            "change-on-select": "",
            "data": _vm.addressArr
          },
          on: {
            "on-change": _vm.changeBiz
          },
          model: {
            value: (_vm.bizAddressCode),
            callback: function($$v) {
              _vm.bizAddressCode = $$v
            },
            expression: "bizAddressCode"
          }
        })], 1), _vm._v(" "), _c('FormItem', {
          attrs: {
            "id": "bizStoreAddress",
            "prop": "bizStoreAddress",
            "label": "线下场所地址"
          }
        }, [_c('i-input', {
          staticStyle: {
            "width": "400px"
          },
          attrs: {
            "placeholder": "请输入线下场所地址"
          },
          model: {
            value: (_vm.businessInfo.bizStoreAddress),
            callback: function($$v) {
              _vm.$set(_vm.businessInfo, "bizStoreAddress", $$v)
            },
            expression: "businessInfo.bizStoreAddress"
          }
        }), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                      请填写详细的经营场所信息，如有多个场所，选择一个主要场所填写即可。\n                    ")])], 1), _vm._v(" "), _c('FormItem', {
          attrs: {
            "id": "storeEntrancePic",
            "prop": "storeEntrancePic",
            "label": "线下场所门头照片"
          }
        }, [_c('img-upload', {
          attrs: {
            "multiple": true,
            "removeable": true,
            "max-count": 3,
            "action": _vm.imgUpload.action,
            "img-max-width": _vm.imgUpload.imgMaxWidth,
            "on-success": _vm.storeEntrancePicSuccess,
            "on-remove": _vm.storeEntrancePicRemove,
            "max-size": _vm.imgUpload.maxSize,
            "default-file-list": _vm.imgUpload.storeEntrancePic
          }
        }, [_c('i-button', {
          attrs: {
            "icon": "ios-cloud-upload-outline"
          }
        }, [_vm._v("点击上传线下场所门头照片")]), _vm._v("\n                       \n                      "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                        请上传门店照片（要求门店招牌清晰可见，最多3张）。若为停车场、售卖机等无固定门头照片 的经营场所，请提供真实的经营现场照片即可；\n                      ")])], 1)], 1), _vm._v(" "), _c('FormItem', {
          attrs: {
            "id": "indoorPic",
            "prop": "indoorPic",
            "label": "线下场所内部照片"
          }
        }, [_c('img-upload', {
          attrs: {
            "multiple": true,
            "removeable": true,
            "max-count": 3,
            "action": _vm.imgUpload.action,
            "img-max-width": _vm.imgUpload.imgMaxWidth,
            "on-success": _vm.indoorPicSuccess,
            "on-remove": _vm.indoorPicRemove,
            "max-size": _vm.imgUpload.maxSize,
            "default-file-list": _vm.imgUpload.indoorPic
          }
        }, [_c('i-button', {
          attrs: {
            "icon": "ios-cloud-upload-outline"
          }
        }, [_vm._v("点击上传线下场所内部照片")]), _vm._v("\n                       \n                      "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                        请上传门店内部环境照片（最多3张）。若为停车场、售卖机等无固定门头照片的经营场所，请提 供真实的经营现场照片即可；\n                      ")])], 1)], 1), _vm._v(" "), _c('FormItem', {
          attrs: {
            "id": "bizSubAppid",
            "prop": "bizSubAppid",
            "label": "线下场所对应的商家AppID"
          }
        }, [_c('i-input', {
          staticStyle: {
            "width": "400px"
          },
          attrs: {
            "placeholder": "请输入线下场所对应的商家AppID"
          },
          model: {
            value: (_vm.businessInfo.bizSubAppid),
            callback: function($$v) {
              _vm.$set(_vm.businessInfo, "bizSubAppid", $$v)
            },
            expression: "businessInfo.bizSubAppid"
          }
        }), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                      1、可填写与商家主体一致且已认证的公众号、小程序、APP的AppID，其中公众号AppID需是已认证的服务号、政府或媒体类型的订阅号；\n                      "), _c('br'), _vm._v("\n                      2、审核通过后，系统将额外为商家开通付款码支付、JSAPI支付的自有交易权限，并完成商家商户号与该AppID的绑定；\n                      "), _c('br'), _vm._v("\n                      示例值：wx1234567890123456\n                    ")])], 1)] : _vm._e(), _vm._v(" "), (_vm.businessInfo.salesScenesType.indexOf(2) != -1) ? [_c('div', {
          staticClass: "tit"
        }, [_c('span', [_vm._v("公众号场景")]), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                      选择了公众号就必填，审核通过后，服务商可帮商户发起付款码支付、JSAPI支付。\n                    ")])], 1), _vm._v(" "), _c('FormItem', {
          attrs: {
            "id": "switchMpType",
            "prop": "switchMpType",
            "label": "二选一必填"
          }
        }, [_c('i-select', {
          staticStyle: {
            "width": "200px"
          },
          attrs: {
            "filterable": "",
            "placeholder": "请选择"
          },
          model: {
            value: (_vm.businessInfo.switchMpType),
            callback: function($$v) {
              _vm.$set(_vm.businessInfo, "switchMpType", $$v)
            },
            expression: "businessInfo.switchMpType"
          }
        }, [_c('i-option', {
          attrs: {
            "value": 1
          }
        }, [_vm._v("服务商公众号AppID")]), _vm._v(" "), _c('i-option', {
          attrs: {
            "value": 2
          }
        }, [_vm._v("商家公众号AppID")])], 1), _vm._v(" "), _c('span', {
          staticClass: "gray"
        }, [_vm._v("（服务商公众号APPID与商家公众号APPID，二选一必填。）")])], 1), _vm._v(" "), (_vm.businessInfo.switchMpType === 1) ? _c('FormItem', {
          attrs: {
            "id": "mpAppid",
            "prop": "mpAppid",
            "label": "服务商公众号AppID"
          }
        }, [_c('i-input', {
          staticStyle: {
            "width": "400px"
          },
          attrs: {
            "placeholder": "请输入服务商公众号AppID"
          },
          model: {
            value: (_vm.businessInfo.mpAppid),
            callback: function($$v) {
              _vm.$set(_vm.businessInfo, "mpAppid", $$v)
            },
            expression: "businessInfo.mpAppid"
          }
        }), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                      可填写当前服务商商户号已绑定的公众号APPID。\n                      "), _c('br'), _vm._v("\n                      示例值：wx1234567890123456\n                    ")])], 1) : _vm._e(), _vm._v(" "), (_vm.businessInfo.switchMpType === 2) ? _c('FormItem', {
          attrs: {
            "id": "mpSubAppid",
            "prop": "mpSubAppid",
            "label": "商家公众号AppID"
          }
        }, [_c('i-input', {
          staticStyle: {
            "width": "400px"
          },
          attrs: {
            "placeholder": "请输入商家公众号AppID"
          },
          model: {
            value: (_vm.businessInfo.mpSubAppid),
            callback: function($$v) {
              _vm.$set(_vm.businessInfo, "mpSubAppid", $$v)
            },
            expression: "businessInfo.mpSubAppid"
          }
        }), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                      1、可填写与商家主体一致且已认证的公众号APPID，需是已认证的服务号、政府或媒体类型的订阅号。\n                      "), _c('br'), _vm._v("\n                      2、审核通过后，系统将发起特约商家商户号与该AppID的绑定（即配置为\n                      "), _c('br'), _vm._v("sub_appid），服务商随后可在发起支付时选择传入该appid，以完成支付，并获取sub_openid用于数据统计，营销等业务场景 。\n                      "), _c('br'), _vm._v("\n                      示例值：wx1234567890123456\n                    ")])], 1) : _vm._e(), _vm._v(" "), _c('FormItem', {
          attrs: {
            "id": "mpPics",
            "prop": "mpPics",
            "label": "公众号页面截图"
          }
        }, [_c('img-upload', {
          attrs: {
            "multiple": true,
            "removeable": true,
            "max-count": 5,
            "action": _vm.imgUpload.action,
            "img-max-width": _vm.imgUpload.imgMaxWidth,
            "on-success": _vm.mpPicsSuccess,
            "on-remove": _vm.mpPicsRemove,
            "max-size": _vm.imgUpload.maxSize,
            "default-file-list": _vm.imgUpload.mpPics
          }
        }, [_c('i-button', {
          attrs: {
            "icon": "ios-cloud-upload-outline"
          }
        }, [_vm._v("点击上传公众号页面截图")]), _vm._v("\n                       \n                      "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                        请提供展示商品/服务的页面截图/设计稿（最多5张），若公众号未建设完善或未上线请务必提供。\n                      ")])], 1)], 1)] : _vm._e(), _vm._v(" "), (_vm.businessInfo.salesScenesType.indexOf(3) != -1) ? [_c('div', {
          staticClass: "tit"
        }, [_c('span', [_vm._v("小程序场景")]), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                      选择了小程序就必填，审核通过后，服务商可帮商户发起付款码支付、JSAPI支付。\n                    ")])], 1), _vm._v(" "), _c('FormItem', {
          attrs: {
            "id": "switchMiniType",
            "prop": "switchMiniType",
            "label": "二选一必填"
          }
        }, [_c('i-select', {
          staticStyle: {
            "width": "200px"
          },
          attrs: {
            "filterable": "",
            "placeholder": "请选择"
          },
          model: {
            value: (_vm.businessInfo.switchMiniType),
            callback: function($$v) {
              _vm.$set(_vm.businessInfo, "switchMiniType", $$v)
            },
            expression: "businessInfo.switchMiniType"
          }
        }, [_c('i-option', {
          attrs: {
            "value": 1
          }
        }, [_vm._v("服务商小程序APPID")]), _vm._v(" "), _c('i-option', {
          attrs: {
            "value": 2
          }
        }, [_vm._v("商家小程序APPID")])], 1), _vm._v(" "), _c('span', {
          staticClass: "gray"
        }, [_vm._v("（服务商小程序APPID与商家小程序APPID，二选一必填。）")])], 1), _vm._v(" "), (_vm.businessInfo.switchMiniType === 1) ? _c('FormItem', {
          attrs: {
            "id": "miniProgramAppid",
            "prop": "miniProgramAppid",
            "label": "服务商小程序APPID"
          }
        }, [_c('i-input', {
          staticStyle: {
            "width": "400px"
          },
          attrs: {
            "placeholder": "请输入服务商小程序APPID"
          },
          model: {
            value: (_vm.businessInfo.miniProgramAppid),
            callback: function($$v) {
              _vm.$set(_vm.businessInfo, "miniProgramAppid", $$v)
            },
            expression: "businessInfo.miniProgramAppid"
          }
        }), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                      可填写当前服务商商户号已绑定的小程序APPID。\n                      "), _c('br'), _vm._v("\n                      示例值：wx1234567890123456\n                    ")])], 1) : _vm._e(), _vm._v(" "), (_vm.businessInfo.switchMiniType === 2) ? _c('FormItem', {
          attrs: {
            "id": "miniProgramSubAppid",
            "prop": "miniProgramSubAppid",
            "label": "商家小程序APPID"
          }
        }, [_c('i-input', {
          staticStyle: {
            "width": "400px"
          },
          attrs: {
            "placeholder": "请输入商家小程序APPID"
          },
          model: {
            value: (_vm.businessInfo.miniProgramSubAppid),
            callback: function($$v) {
              _vm.$set(_vm.businessInfo, "miniProgramSubAppid", $$v)
            },
            expression: "businessInfo.miniProgramSubAppid"
          }
        }), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                      1、请填写已认证的小程序APPID；\n                      "), _c('br'), _vm._v("\n                      2、完成进件后，系统发起特约商户号与该AppID的绑定（即配置为sub_appid可在发起支付时传入）\n                      "), _c('br'), _vm._v("\n                      （1）若APPID主体与商家主体/服务商主体一致，则直接完成绑定；\n                      "), _c('br'), _vm._v("\n                      （2）若APPID主体与商家主体/服务商主体不一致，则商户签约时显示《联合营运承诺函》，并且AppID的管理员需登录公众平台确认绑定意愿；\n                      "), _c('br'), _vm._v("\n                      示例值：wx1234567890123456\n                    ")])], 1) : _vm._e(), _vm._v(" "), _c('FormItem', {
          attrs: {
            "id": "miniProgramPics",
            "prop": "miniProgramPics",
            "label": "小程序截图"
          }
        }, [_c('img-upload', {
          attrs: {
            "multiple": true,
            "removeable": true,
            "max-count": 5,
            "action": _vm.imgUpload.action,
            "img-max-width": _vm.imgUpload.imgMaxWidth,
            "on-success": _vm.miniProgramPicsSuccess,
            "on-remove": _vm.miniProgramPicsRemove,
            "max-size": _vm.imgUpload.maxSize,
            "default-file-list": _vm.imgUpload.miniProgramPics
          }
        }, [_c('i-button', {
          attrs: {
            "icon": "ios-cloud-upload-outline"
          }
        }, [_vm._v("点击上传小程序截图")]), _vm._v("\n                       \n                      "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                        请提供展示商品/服务的页面截图/设计稿（最多5张），若小程序未建设完善或未上线 请务必提供；\n                      ")])], 1)], 1)] : _vm._e(), _vm._v(" "), (_vm.businessInfo.salesScenesType.indexOf(4) != -1) ? [_c('div', {
          staticClass: "tit"
        }, [_c('span', [_vm._v("互联网网站场景")]), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                      选择了互联网网站就必填，审核通过后，服务商可帮商户发起付款码支付、JSAPI支付。\n                    ")])], 1), _vm._v(" "), _c('FormItem', {
          attrs: {
            "id": "domain",
            "prop": "domain",
            "label": "互联网网站域名"
          }
        }, [_c('i-input', {
          staticStyle: {
            "width": "400px"
          },
          attrs: {
            "placeholder": "请输入互联网网站域名"
          },
          model: {
            value: (_vm.businessInfo.domain),
            callback: function($$v) {
              _vm.$set(_vm.businessInfo, "domain", $$v)
            },
            expression: "businessInfo.domain"
          }
        }), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                      1、如为PC端商城、智能终端等场景，可上传官网链接。\n                      "), _c('br'), _vm._v("\n                      2、网站域名需ICP备案，若备案主体与申请主体不同，请上传加盖公章的网站授权函。\n                      "), _c('br'), _vm._v("\n                      示例值：http://www.qq.com\n                    ")])], 1), _vm._v(" "), _c('FormItem', {
          attrs: {
            "id": "webAuthorisation",
            "prop": "webAuthorisation",
            "label": "网站授权函"
          }
        }, [_c('img-upload', {
          attrs: {
            "action": _vm.imgUpload.action,
            "img-max-width": _vm.imgUpload.imgMaxWidth,
            "on-success": _vm.webAuthorisationSuccess,
            "max-size": _vm.imgUpload.maxSize,
            "default-file-list": _vm.imgUpload.webAuthorisation
          }
        }, [_c('i-button', {
          attrs: {
            "icon": "ios-cloud-upload-outline"
          }
        }, [_vm._v("点击上传网站授权函")]), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                        若备案主体与申请主体不同，请务必上传加盖公章的"), _c('a', {
          attrs: {
            "href": "https://wx.gtimg.com/mch/img/icp.doc",
            "target": "_black"
          }
        }, [_vm._v("网站授权函")]), _vm._v("。\n                      ")])], 1)], 1), _vm._v(" "), _c('FormItem', {
          attrs: {
            "id": "webAppid",
            "prop": "webAppid",
            "label": "网站对应的商家APPID"
          }
        }, [_c('i-input', {
          staticStyle: {
            "width": "400px"
          },
          attrs: {
            "placeholder": "请输入互联网网站对应的商家APPID"
          },
          model: {
            value: (_vm.businessInfo.webAppid),
            callback: function($$v) {
              _vm.$set(_vm.businessInfo, "webAppid", $$v)
            },
            expression: "businessInfo.webAppid"
          }
        }), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                      1、可填写已认证的公众号、小程序、应用的APPID，其中公众号APPID需是已认证的服务 号、政府或媒体类型的订阅号；\n                      "), _c('br'), _vm._v("\n                      2、完成进件后，系统发起特约商户号与该AppID的绑定（即配置为sub_appid，可在发起支付时传入）\n                      "), _c('br'), _vm._v("\n                      （1）若APPID主体与商家主体一致，则直接完成绑定；\n                      "), _c('br'), _vm._v("\n                      （2）若APPID主体与商家主体不一致，则商户签约时显示《联合营运承诺函》，并且 AppID的管理员需登录公众平台确认绑定意愿；（ 暂不支持绑定异主体的应用APPID）。\n                      "), _c('br'), _vm._v("\n                      示例值：wx1234567890123456\n                    ")])], 1)] : _vm._e(), _vm._v(" "), (_vm.businessInfo.salesScenesType.indexOf(5) != -1) ? [_c('div', {
          staticClass: "tit"
        }, [_c('span', [_vm._v("App场景")]), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                      选择了App就必填，审核通过后，服务商可帮商户发起付款码支付、JSAPI支付。\n                    ")])], 1), _vm._v(" "), _c('FormItem', {
          attrs: {
            "id": "switchAppType",
            "prop": "switchAppType",
            "label": "二选一必填"
          }
        }, [_c('i-select', {
          staticStyle: {
            "width": "200px"
          },
          attrs: {
            "filterable": "",
            "placeholder": "请选择"
          },
          model: {
            value: (_vm.businessInfo.switchAppType),
            callback: function($$v) {
              _vm.$set(_vm.businessInfo, "switchAppType", $$v)
            },
            expression: "businessInfo.switchAppType"
          }
        }, [_c('i-option', {
          attrs: {
            "value": 1
          }
        }, [_vm._v("服务商应用APPID")]), _vm._v(" "), _c('i-option', {
          attrs: {
            "value": 2
          }
        }, [_vm._v("商家应用APPID")])], 1), _vm._v(" "), _c('span', {
          staticClass: "gray"
        }, [_vm._v("（服务商应用APPID与商家应用APPID，二选一必填。）")])], 1), _vm._v(" "), (_vm.businessInfo.switchAppType === 1) ? _c('FormItem', {
          attrs: {
            "id": "appAppid",
            "prop": "appAppid",
            "label": "服务商应用APPID"
          }
        }, [_c('i-input', {
          staticStyle: {
            "width": "400px"
          },
          attrs: {
            "placeholder": "请输入服务商应用APPID"
          },
          model: {
            value: (_vm.businessInfo.appAppid),
            callback: function($$v) {
              _vm.$set(_vm.businessInfo, "appAppid", $$v)
            },
            expression: "businessInfo.appAppid"
          }
        }), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                      可填写当前服务商商户号已绑定的应用APPID。\n                      "), _c('br'), _vm._v("\n                      示例值：wx1234567890123456\n                    ")])], 1) : _vm._e(), _vm._v(" "), (_vm.businessInfo.switchAppType === 2) ? _c('FormItem', {
          attrs: {
            "id": "appSubAppid",
            "prop": "appSubAppid",
            "label": "商家应用APPID"
          }
        }, [_c('i-input', {
          staticStyle: {
            "width": "400px"
          },
          attrs: {
            "placeholder": "请输入商家应用APPID"
          },
          model: {
            value: (_vm.businessInfo.appSubAppid),
            callback: function($$v) {
              _vm.$set(_vm.businessInfo, "appSubAppid", $$v)
            },
            expression: "businessInfo.appSubAppid"
          }
        }), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                      1、可填写与商家主体一致且已认证的应用APPID，需是已认证的APP。\n                      "), _c('br'), _vm._v("\n                      2、审核通过后，系统将发起特约商家商户号与该AppID的绑定（即配置为\n                      "), _c('br'), _vm._v("sub_appid），服务商随后可在发起支付时选择传入该appid，以完成支付，并获取sub_openid用于数据统计，营销等业务场景。\n                      "), _c('br'), _vm._v("\n                      示例值：wx1234567890123456\n                    ")])], 1) : _vm._e(), _vm._v(" "), _c('FormItem', {
          attrs: {
            "id": "appPics",
            "prop": "appPics",
            "label": "APP截图"
          }
        }, [_c('img-upload', {
          attrs: {
            "multiple": true,
            "removeable": true,
            "max-count": 4,
            "action": _vm.imgUpload.action,
            "img-max-width": _vm.imgUpload.imgMaxWidth,
            "on-success": _vm.appPicsSuccess,
            "on-remove": _vm.appPicsRemove,
            "max-size": _vm.imgUpload.maxSize,
            "default-file-list": _vm.imgUpload.appPics
          }
        }, [_c('i-button', {
          attrs: {
            "icon": "ios-cloud-upload-outline"
          }
        }, [_vm._v("点击上传APP截图")]), _vm._v("\n                       \n                      "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                        请提供APP首页截图、尾页截图、应用内截图、支付页截图各1张（共4张）。\n                      ")])], 1)], 1)] : _vm._e(), _vm._v(" "), (_vm.businessInfo.salesScenesType.indexOf(6) != -1) ? [_c('div', {
          staticClass: "tit"
        }, [_c('span', [_vm._v("企业微信场景")]), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                      选择了企业微信就必填，审核通过后，服务商可帮商户发起付款码支付、JSAPI支付。\n                    ")])], 1), _vm._v(" "), _c('FormItem', {
          attrs: {
            "id": "subCorpId",
            "prop": "subCorpId",
            "label": "商家企业微信CorpID"
          }
        }, [_c('i-input', {
          staticStyle: {
            "width": "400px"
          },
          attrs: {
            "placeholder": "请输入商家企业微信CorpID"
          },
          model: {
            value: (_vm.businessInfo.subCorpId),
            callback: function($$v) {
              _vm.$set(_vm.businessInfo, "subCorpId", $$v)
            },
            expression: "businessInfo.subCorpId"
          }
        }), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                      1、可填写与商家主体一致且已认证的企业微信CorpID。\n                      "), _c('br'), _vm._v("\n                      2、审核通过后，系统将为商家开通企业微信专区的自有交易权限，并完成商家商户号与该APPID的绑定，商家可自行发起交易。\n                      "), _c('br'), _vm._v("\n                      示例值：wx1234567890123456\n                    ")])], 1), _vm._v(" "), _c('FormItem', {
          attrs: {
            "id": "weworkPics",
            "prop": "weworkPics",
            "label": "企业微信页面截图"
          }
        }, [_c('img-upload', {
          attrs: {
            "multiple": true,
            "removeable": true,
            "max-count": 5,
            "action": _vm.imgUpload.action,
            "img-max-width": _vm.imgUpload.imgMaxWidth,
            "on-success": _vm.weworkPicsSuccess,
            "on-remove": _vm.weworkPicsRemove,
            "max-size": _vm.imgUpload.maxSize,
            "default-file-list": _vm.imgUpload.weworkPics
          }
        }, [_c('i-button', {
          attrs: {
            "icon": "ios-cloud-upload-outline"
          }
        }, [_vm._v("点击上传企业微信页面截图")]), _vm._v("\n                       \n                      "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                        最多可上传5张照片\n                      ")])], 1)], 1)] : _vm._e()], 2)]
      },
      proxy: true
    }])
  }, [_vm._v("\n            经营资料\n            "), _c('help', {
    attrs: {
      "title": "说明"
    }
  }, [_vm._v("\n              请填写商家的经营业务信息、售卖商品/提供服务场景信息\n            ")])], 1), _vm._v(" "), _c('Panel', {
    attrs: {
      "name": "3"
    },
    scopedSlots: _vm._u([{
      key: "content",
      fn: function() {
        return [_c('Form', {
          ref: "settlementInfoRefs",
          staticClass: "myform",
          attrs: {
            "model": _vm.settlementInfo,
            "rules": _vm.settlementInfoRule,
            "inline": "",
            "label-width": 170
          }
        }, [_c('FormItem', {
          attrs: {
            "id": "settlementId",
            "prop": "settlementId",
            "label": "入驻结算规则ID"
          }
        }, [_c('i-input', {
          staticStyle: {
            "width": "400px"
          },
          attrs: {
            "placeholder": "请输入入驻结算规则ID"
          },
          model: {
            value: (_vm.settlementInfo.settlementId),
            callback: function($$v) {
              _vm.$set(_vm.settlementInfo, "settlementId", _vm._n($$v))
            },
            expression: "settlementInfo.settlementId"
          }
        }), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                    请选择结算规则ID，详细参见"), _c('a', {
          attrs: {
            "href": "https://kf.qq.com/faq/220228IJb2UV220228uEjU3Q.html",
            "target": "_black"
          }
        }, [_vm._v("费率结算规则对照表")]), _vm._v(" "), _c('br'), _vm._v("\n                    例如，个体户（健身运动馆）填写903，企业（健身运动馆）填写904，个体户（休闲娱乐）填写 719，企业（休闲娱乐）填写716\n                  ")])], 1), _vm._v(" "), _c('FormItem', {
          attrs: {
            "id": "qualificationType",
            "prop": "qualificationType",
            "label": "所属行业"
          }
        }, [_c('i-input', {
          staticStyle: {
            "width": "400px"
          },
          attrs: {
            "placeholder": "请输入所属行业"
          },
          model: {
            value: (_vm.settlementInfo.qualificationType),
            callback: function($$v) {
              _vm.$set(_vm.settlementInfo, "qualificationType", $$v)
            },
            expression: "settlementInfo.qualificationType"
          }
        }), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                    填写指定行业名称，详细参见"), _c('a', {
          attrs: {
            "href": "https://kf.qq.com/faq/220228IJb2UV220228uEjU3Q.html",
            "target": "_black"
          }
        }, [_vm._v("费率结算规则对照表")]), _vm._v(" "), _c('br'), _vm._v("\n                    示例值：餐饮\n                  ")])], 1), _vm._v(" "), _c('FormItem', {
          attrs: {
            "id": "qualifications",
            "prop": "qualifications",
            "label": "特殊资质图片"
          }
        }, [_c('img-upload', {
          attrs: {
            "multiple": true,
            "removeable": true,
            "max-count": 5,
            "action": _vm.imgUpload.action,
            "img-max-width": _vm.imgUpload.imgMaxWidth,
            "on-success": _vm.qualificationsSuccess,
            "on-remove": _vm.qualificationsRemove,
            "max-size": _vm.imgUpload.maxSize,
            "default-file-list": _vm.imgUpload.qualifications
          }
        }, [_c('i-button', {
          attrs: {
            "icon": "ios-cloud-upload-outline"
          }
        }, [_vm._v("点击上传特殊资质图片")]), _vm._v("\n                     \n                    "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                      1、根据所属行业的特殊资质要求提供，详情查看"), _c('a', {
          attrs: {
            "href": "https://kf.qq.com/faq/220228IJb2UV220228uEjU3Q.html",
            "target": "_black"
          }
        }, [_vm._v("费率结算规则对照表")]), _vm._v(" "), _c('br'), _vm._v("\n                      2、最多可上传5张照片，请填写通过图片\n                    ")])], 1)], 1)], 1)]
      },
      proxy: true
    }])
  }, [_vm._v("\n            结算规则\n            "), _c('help', {
    attrs: {
      "title": "说明"
    }
  }, [_vm._v("\n              请填写商家的结算费率规则、特殊资质等信息\n            ")])], 1), _vm._v(" "), _c('Panel', {
    attrs: {
      "name": "4"
    },
    scopedSlots: _vm._u([{
      key: "content",
      fn: function() {
        return [_c('Form', {
          ref: "bankAccountInfoRefs",
          staticClass: "myform",
          attrs: {
            "model": _vm.bankAccountInfo,
            "rules": _vm.bankAccountInfoRule,
            "inline": "",
            "label-width": 170
          }
        }, [_c('FormItem', {
          attrs: {
            "id": "bankAccountType",
            "prop": "bankAccountType",
            "label": "账户类型"
          }
        }, [(_vm.subjectInfo.subjectType > 1) ? [_c('i-select', {
          staticStyle: {
            "width": "200px"
          },
          attrs: {
            "placeholder": "请选择账户类型"
          },
          model: {
            value: (_vm.bankAccountInfo.bankAccountType),
            callback: function($$v) {
              _vm.$set(_vm.bankAccountInfo, "bankAccountType", $$v)
            },
            expression: "bankAccountInfo.bankAccountType"
          }
        }, [_c('i-option', {
          attrs: {
            "value": 1
          }
        }, [_vm._v("对公银行账户")])], 1)] : [_c('i-select', {
          staticStyle: {
            "width": "200px"
          },
          attrs: {
            "placeholder": "请选择账户类型"
          },
          model: {
            value: (_vm.bankAccountInfo.bankAccountType),
            callback: function($$v) {
              _vm.$set(_vm.bankAccountInfo, "bankAccountType", $$v)
            },
            expression: "bankAccountInfo.bankAccountType"
          }
        }, _vm._l((_vm.g.Dict.WxBankAccountType), function(s) {
          return _c('i-option', {
            key: s.id,
            attrs: {
              "value": s.id
            }
          }, [_vm._v(_vm._s(s.name))])
        }), 1)], _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                    1、若主体为企业/政府机关/事业单位/社会组织，可填写：对公银行账户。\n                    "), _c('br'), _vm._v("\n                    2、若主体为个体户，可选择填写：对公银行账户或经营者个人银行卡。\n                  ")])], 2), _vm._v(" "), _c('FormItem', {
          attrs: {
            "id": "accountName",
            "prop": "accountName",
            "label": "开户名称"
          }
        }, [_c('i-input', {
          staticStyle: {
            "width": "400px"
          },
          attrs: {
            "placeholder": "请输入开户名称"
          },
          model: {
            value: (_vm.bankAccountInfo.accountName),
            callback: function($$v) {
              _vm.$set(_vm.bankAccountInfo, "accountName", $$v)
            },
            expression: "bankAccountInfo.accountName"
          }
        }), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                    1、选择“经营者个人银行卡”时，开户名称必须与“经营者证件姓名”一致，\n                    "), _c('br'), _vm._v("\n                    2、选择“对公银行账户”时，开户名称必须与营业执照上的“商户名称”一致\n                  ")])], 1), _vm._v(" "), _c('FormItem', {
          attrs: {
            "id": "accountBank",
            "prop": "accountBank",
            "label": "开户银行"
          }
        }, [_c('i-select', {
          staticStyle: {
            "width": "200px"
          },
          attrs: {
            "filterable": "",
            "placeholder": "请选择开户银行"
          },
          model: {
            value: (_vm.bankAccountInfo.accountBank),
            callback: function($$v) {
              _vm.$set(_vm.bankAccountInfo, "accountBank", $$v)
            },
            expression: "bankAccountInfo.accountBank"
          }
        }, _vm._l((_vm.g.Dict.WxAccountBank), function(s) {
          return _c('i-option', {
            key: s.id,
            attrs: {
              "value": s.id
            }
          }, [_vm._v(_vm._s(s.name))])
        }), 1)], 1), _vm._v(" "), _c('FormItem', {
          attrs: {
            "id": "bankAddressCode",
            "prop": "bankAddressCode",
            "label": "开户银行省市"
          }
        }, [_c('Cascader', {
          staticStyle: {
            "width": "400px"
          },
          attrs: {
            "filterable": "",
            "change-on-select": "",
            "data": _vm.addressArr
          },
          on: {
            "on-change": _vm.changeBank
          },
          model: {
            value: (_vm.bankAddressCode),
            callback: function($$v) {
              _vm.bankAddressCode = $$v
            },
            expression: "bankAddressCode"
          }
        }), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                    注：\n                    当选项中无对应的省市区时，可向上取该银行对应市级或省级。\n                  ")])], 1), _vm._v(" "), (_vm.bankAccountInfo.accountBank === 18) ? [_c('FormItem', {
          attrs: {
            "id": "switchBankType",
            "prop": "switchBankType",
            "label": "二选一必填"
          }
        }, [_c('i-select', {
          staticStyle: {
            "width": "200px"
          },
          attrs: {
            "filterable": "",
            "placeholder": "请选择"
          },
          model: {
            value: (_vm.bankAccountInfo.switchBankType),
            callback: function($$v) {
              _vm.$set(_vm.bankAccountInfo, "switchBankType", $$v)
            },
            expression: "bankAccountInfo.switchBankType"
          }
        }, [_c('i-option', {
          attrs: {
            "value": 1
          }
        }, [_vm._v("开户银行全称（含支行）")]), _vm._v(" "), _c('i-option', {
          attrs: {
            "value": 2
          }
        }, [_vm._v("开户银行联行号")])], 1), _vm._v(" "), _c('span', {
          staticClass: "gray"
        }, [_vm._v("（则开户银行全称（含支行）和开户银行联行号二选一。）")])], 1), _vm._v(" "), (_vm.bankAccountInfo.switchBankType === 1) ? _c('FormItem', {
          attrs: {
            "id": "bankName",
            "prop": "bankName",
            "label": "开户银行全称（含支行）"
          }
        }, [_c('i-input', {
          staticStyle: {
            "width": "400px"
          },
          attrs: {
            "placeholder": "请输入开户银行全称（含支行）"
          },
          model: {
            value: (_vm.bankAccountInfo.bankName),
            callback: function($$v) {
              _vm.$set(_vm.bankAccountInfo, "bankName", $$v)
            },
            expression: "bankAccountInfo.bankName"
          }
        }), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                      1、电话查询: 用户可拨打银行卡对应的客服热线，选择人工服务来查询开户行全称;\n                      "), _c('br'), _vm._v("\n                      2、银行柜台查询: 用户也可以带上个人的身份证件和银行卡去所在的银行网点柜台处查询开户行信息;\n                      "), _c('br'), _vm._v("\n                      3、公众号查询: 用户可在银行卡相关的公众号上查询;\n                      "), _c('br'), _vm._v("\n                      4、网银查询: 用户可登录网银或手机银行，再查询开户行全名的信息;\n                      "), _c('br'), _vm._v("\n                      示例值：施秉县农村信用合作联社城关信用社\n                      "), _c('br')])], 1) : _vm._e(), _vm._v(" "), (_vm.bankAccountInfo.switchBankType === 2) ? _c('FormItem', {
          attrs: {
            "id": "bankBranchId",
            "prop": "bankBranchId",
            "label": "开户银行联行号"
          }
        }, [_c('i-input', {
          staticStyle: {
            "width": "400px"
          },
          attrs: {
            "placeholder": "请输入开户银行联行号"
          },
          model: {
            value: (_vm.bankAccountInfo.bankBranchId),
            callback: function($$v) {
              _vm.$set(_vm.bankAccountInfo, "bankBranchId", $$v)
            },
            expression: "bankAccountInfo.bankBranchId"
          }
        }), _vm._v(" "), _c('span', {
          staticClass: "gray"
        }, [_vm._v("（示例值：402713354941）")])], 1) : _vm._e()] : _vm._e(), _vm._v(" "), _c('FormItem', {
          attrs: {
            "id": "accountNumber",
            "prop": "accountNumber",
            "label": "银行账号"
          }
        }, [_c('i-input', {
          staticStyle: {
            "width": "400px"
          },
          attrs: {
            "placeholder": "请输入银行账号"
          },
          model: {
            value: (_vm.bankAccountInfo.accountNumber),
            callback: function($$v) {
              _vm.$set(_vm.bankAccountInfo, "accountNumber", $$v)
            },
            expression: "bankAccountInfo.accountNumber"
          }
        })], 1)], 2)]
      },
      proxy: true
    }])
  }, [_vm._v("\n            结算银行账户\n            "), _c('help', {
    attrs: {
      "title": "说明"
    }
  }, [_vm._v("\n              请填写商家提现收款的银行账户信息\n            ")])], 1), _vm._v(" "), _c('Panel', {
    attrs: {
      "name": "5"
    },
    scopedSlots: _vm._u([{
      key: "content",
      fn: function() {
        return [_c('Form', {
          ref: "additionInfoRefs",
          staticClass: "myform",
          attrs: {
            "model": _vm.additionInfo,
            "rules": _vm.additionInfoRule,
            "inline": "",
            "label-width": 170
          }
        }, [_c('FormItem', {
          attrs: {
            "id": "legalPersonCommitment",
            "prop": "legalPersonCommitment",
            "label": "法人开户承诺函"
          }
        }, [_c('img-upload', {
          attrs: {
            "action": _vm.imgUpload.action,
            "img-max-width": _vm.imgUpload.imgMaxWidth,
            "on-success": _vm.legalPersonCommitmentSuccess,
            "max-size": _vm.imgUpload.maxSize,
            "default-file-list": _vm.imgUpload.legalPersonCommitment
          }
        }, [_c('i-button', {
          attrs: {
            "icon": "ios-cloud-upload-outline"
          }
        }, [_vm._v("点击上传法人开户承诺函")]), _vm._v(" "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                      请上传法定代表人或负责人亲笔签署的开户承诺函扫描件（"), _c('a', {
          attrs: {
            "href": "https://kf.qq.com/faq/191018yUFjEj191018Vfmaei.html",
            "target": "_black"
          }
        }, [_vm._v("下载模板")]), _vm._v("）。亲笔签名承诺函内容清晰可见，不得有涂污，破损，字迹不清晰现象。\n                    ")])], 1)], 1), _vm._v(" "), _c('FormItem', {
          attrs: {
            "id": "legalPersonVideo",
            "prop": "legalPersonVideo",
            "label": "法人开户意愿视频"
          }
        }, [_c('VideoUpload', {
          attrs: {
            "maxCount": 1,
            "maxSize": 5,
            "fileList": _vm.defaultVideos,
            "uploadTitle": "点击上传法人开户意愿视频"
          },
          on: {
            "handleVideoList": _vm.handleVideoList
          }
        }, [_c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                      1、建议法人按如下话术录制“法人开户意愿视频”：\n                      "), _c('br'), _vm._v("\n                      我是#公司全称#的法定代表人（或负责人），特此证明本公司申请的商户号为我司真实意愿开立且用于XX业务（或XX服务）。我司现有业务符合法律法规及腾讯的相关规定。\n                      "), _c('br'), _vm._v("\n                      2、支持上传5M内的视频，格式可为avi、wmv、mpeg、mp4、mov、mkv、flv、f4v、m4v、rmvb；\n                    ")])], 1)], 1), _vm._v(" "), _c('FormItem', {
          attrs: {
            "id": "businessAdditionPics",
            "prop": "businessAdditionPics",
            "label": "补充材料"
          }
        }, [_c('img-upload', {
          attrs: {
            "multiple": true,
            "removeable": true,
            "max-count": 5,
            "action": _vm.imgUpload.action,
            "img-max-width": _vm.imgUpload.imgMaxWidth,
            "on-success": _vm.businessAdditionPicsSuccess,
            "on-remove": _vm.businessAdditionPicsRemove,
            "max-size": _vm.imgUpload.maxSize,
            "default-file-list": _vm.imgUpload.businessAdditionPics
          }
        }, [_c('i-button', {
          attrs: {
            "icon": "ios-cloud-upload-outline"
          }
        }, [_vm._v("点击上传补充材料")]), _vm._v("\n                     \n                    "), _c('help', {
          attrs: {
            "title": "提示"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
            }
          }
        }, [_vm._v("\n                      最多可上传5张照片\n                    ")])], 1)], 1), _vm._v(" "), _c('FormItem', {
          attrs: {
            "id": "businessAdditionMsg",
            "prop": "businessAdditionMsg",
            "label": "补充说明"
          }
        }, [_c('i-input', {
          attrs: {
            "type": "textarea",
            "rows": 5,
            "placeholder": "输入补充说明（512字以内）"
          },
          model: {
            value: (_vm.additionInfo.businessAdditionMsg),
            callback: function($$v) {
              _vm.$set(_vm.additionInfo, "businessAdditionMsg", (typeof $$v === 'string' ? $$v.trim() : $$v))
            },
            expression: "additionInfo.businessAdditionMsg"
          }
        })], 1)], 1)]
      },
      proxy: true
    }])
  }, [_vm._v("\n            补充材料\n            "), _c('help', {
    attrs: {
      "title": "说明"
    }
  }, [_vm._v("\n              根据实际审核情况，会额外要求商家提供指定的补充资料\n            ")])], 1)], 1), _vm._v(" "), (_vm.ifEditHandlerFun()) ? _c('div', {
    staticClass: "form-submit-bottom"
  }, [_c('i-button', {
    attrs: {
      "type": "success"
    },
    on: {
      "click": _vm.saveApplyDraftFun
    }
  }, [_vm._v("保存为草稿")]), _vm._v("\n           \n          "), _c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.saveApplyFun(false)
      }
    }
  }, [_vm._v("提交审核")])], 1) : _vm._e()], 1)]], 2), _vm._v(" "), (_vm.auditDetailList.length) ? _c('div', {
    staticClass: "fixed mytbl"
  }, [_c('table', [_c('tr', {
    staticClass: "title"
  }, [_c('th', {
    attrs: {
      "align": "center",
      "colspan": "3"
    }
  }, [_vm._v("驳回详情\n          "), _c('help', {
    attrs: {
      "title": "提示"
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
      }
    }
  }, [_vm._v("\n            点击错误行自动跳转到错误位置。\n          ")])], 1)]), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._l((_vm.auditDetailList), function(a, idx) {
    return _c('tr', {
      key: idx,
      on: {
        "click": function($event) {
          return _vm.jumpClick(a.field)
        }
      }
    }, [_c('td', {
      attrs: {
        "align": "center"
      }
    }, [_vm._v(_vm._s(idx + 1))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(a.rejectReason))])])
  })], 2)]) : _vm._e()], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "r green"
  }, [_c('i', {
    staticClass: "iconfont icon-check3"
  }), _vm._v(" 帮你快速打通线上支付功能")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    attrs: {
      "width": "50"
    }
  }, [_vm._v("序号")]), _vm._v(" "), _c('th', [_vm._v("错误说明")])])
}]}

/***/ }),

/***/ 2229:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "dy-verify-coupon"
  }, [_c('shop-nav', {
    attrs: {
      "menu": "more-tools"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "more-tools",
      "page": "dy-verify-coupon"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main staff-query"
  }, [_c('page-header', {
    attrs: {
      "menu-list": _vm.menuList,
      "include-back": true
    }
  }, [_c('help', [_vm._v("\n        把用户所购买的商品兑换成会员卡，新用户自动创建会员并且买卡，老用户自动买卡或续卡\n      ")])], 1), _vm._v(" "), _c('section', {
    staticClass: "query-section"
  }, [_c('table', {
    attrs: {
      "width": "100%"
    }
  }, [_c('tr', [_c('td', [_c('ul', {
    staticClass: "query-cond-inline"
  }, [_c('li', {
    staticClass: "item spt"
  }, [_c('i-input', {
    staticStyle: {
      "width": "150px"
    },
    attrs: {
      "type": "text",
      "icon": "ios-search",
      "placeholder": "根据手机号查询"
    },
    on: {
      "on-enter": function($event) {
        return _vm.queryVerify()
      },
      "on-click": function($event) {
        return _vm.queryVerify()
      }
    },
    model: {
      value: (_vm.query.memberPhoneNo),
      callback: function($$v) {
        _vm.$set(_vm.query, "memberPhoneNo", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "query.memberPhoneNo"
    }
  })], 1), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('i-select', {
    staticStyle: {
      "width": "100px"
    },
    attrs: {
      "placeholder": "核销状态"
    },
    model: {
      value: (_vm.query.status),
      callback: function($$v) {
        _vm.$set(_vm.query, "status", _vm._n($$v))
      },
      expression: "query.status"
    }
  }, [_c('i-option', {
    attrs: {
      "value": ""
    }
  }, [_c('i', {
    staticClass: "gray"
  }, [_vm._v("所有状态")])]), _vm._v(" "), _c('i-option', {
    attrs: {
      "value": 1,
      "label": "核销成功"
    }
  }), _vm._v(" "), _c('i-option', {
    attrs: {
      "value": 2,
      "label": "已撤销"
    }
  }), _vm._v(" "), _c('i-option', {
    attrs: {
      "value": 3,
      "label": "部分撤销"
    }
  })], 1)], 1), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('i-select', {
    staticStyle: {
      "width": "100px"
    },
    attrs: {
      "placeholder": "商品类型"
    },
    model: {
      value: (_vm.query.grouponType),
      callback: function($$v) {
        _vm.$set(_vm.query, "grouponType", _vm._n($$v))
      },
      expression: "query.grouponType"
    }
  }, [_c('i-option', {
    attrs: {
      "value": ""
    }
  }, [_c('i', {
    staticClass: "gray"
  }, [_vm._v("所有类型")])]), _vm._v(" "), _c('i-option', {
    attrs: {
      "value": 1,
      "label": "团购券"
    }
  }), _vm._v(" "), _c('i-option', {
    attrs: {
      "value": 2,
      "label": "代金券"
    }
  }), _vm._v(" "), _c('i-option', {
    attrs: {
      "value": 3,
      "label": "次卡"
    }
  })], 1)], 1), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('i-input', {
    staticStyle: {
      "width": "150px"
    },
    attrs: {
      "type": "text",
      "placeholder": "会员姓名模糊查询"
    },
    model: {
      value: (_vm.query.memberName),
      callback: function($$v) {
        _vm.$set(_vm.query, "memberName", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "query.memberName"
    }
  })], 1), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('i-input', {
    staticStyle: {
      "width": "150px"
    },
    attrs: {
      "type": "text",
      "placeholder": "抖音商品模糊查询"
    },
    model: {
      value: (_vm.query.title),
      callback: function($$v) {
        _vm.$set(_vm.query, "title", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "query.title"
    }
  })], 1), _vm._v(" "), _c('li', {
    staticClass: "item spt"
  }, [_c('DatePicker', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "type": "datetimerange",
      "format": "yyyy-MM-dd",
      "placeholder": "核销日期查询"
    },
    on: {
      "on-change": _vm.changeDateFun
    },
    model: {
      value: (_vm.dateList),
      callback: function($$v) {
        _vm.dateList = $$v
      },
      expression: "dateList"
    }
  })], 1), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('i-button', {
    staticStyle: {
      "margin-right": "10px",
      "width": "100px"
    },
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.queryVerify()
      }
    }
  }, [_vm._v("查询")]), _vm._v(" "), _c('i-button', {
    on: {
      "click": _vm.resetQuery
    }
  }, [_vm._v("重置")])], 1)])])])]), _vm._v(" "), (_vm.dyConsumeRole) ? _c('div', {
    staticClass: "right"
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.couponShow = true;
      }
    }
  }, [_vm._v("抖音核销")])], 1) : _vm._e()]), _vm._v(" "), _c('section', [_c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_c('tr', [_c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("商品名称")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("姓名")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("手机号")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("核销数量")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("商品类型")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("商品单价")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("核销总金额")]), _vm._v(" "), _c('th', {
    staticStyle: {
      "min-width": "150px"
    }
  }, [_vm._v("购卡名称")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("使用次数")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("使用时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("使用天数")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("充值金额")]), _vm._v(" "), _c('th', {
    staticStyle: {
      "min-width": "110px"
    }
  }, [_vm._v("操作时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("操作人")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("操作\n              "), _c('Help', [_vm._v("\n                核销成功的商品可进行撤销，只可撤销当天核销且未超过60分钟的商品\n              ")])], 1)]), _vm._v(" "), _vm._l((_vm.orderList), function(o, idx) {
    return _c('tr', {
      key: idx
    }, [_c('td', [_vm._v(_vm._s(o.title))]), _vm._v(" "), _c('td', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.viewMemberBase(o)
        }
      }
    }, [_vm._v(_vm._s(o.memberName))])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(o.memberPhoneNo))]), _vm._v(" "), _c('td', [_c('span', {
      class: o.status === 1 ? 'green' : 'none'
    }, [_vm._v(_vm._s(_vm.status[o.status]))])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(o.count))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.grouponType[o.grouponType]))]), _vm._v(" "), _c('td', [_vm._v("￥" + _vm._s(o.originalAmount.toFixed(2) || 0))]), _vm._v(" "), _c('td', [_vm._v("￥" + _vm._s((o.originalAmount * o.count).toFixed(1) || 0) + " ")]), _vm._v(" "), _c('td', [(o.cardId) ? _c('span', [_vm._v(_vm._s(o.cardName))]) : _vm._e()]), _vm._v(" "), _c('td', [(o.cardTimes && o.cardType === 2) ? _c('span', [_vm._v("\n                " + _vm._s(o.cardTimes * o.count) + " 次\n              ")]) : _vm._e()]), _vm._v(" "), _c('td', [(o.cardTimes && o.cardType === 4) ? _c('span', [_vm._v("\n                " + _vm._s(o.cardTimes * o.count) + " 分钟\n              ")]) : _vm._e()]), _vm._v(" "), _c('td', [(o.cardDays) ? _c('span', [_vm._v(_vm._s(o.cardDays * o.count) + " 天")]) : _vm._e()]), _vm._v(" "), _c('td', [(o.cardAmount) ? _c('span', [_vm._v("￥" + _vm._s((o.cardAmount * o.count).toFixed(2) || 0))]) : _vm._e()]), _vm._v(" "), _c('td', [_vm._v(_vm._s(o.updateTime))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(o.updateUname))]), _vm._v(" "), _c('td', [_c('ul', {
      staticClass: "opt-list"
    }, [_c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.details(o)
        }
      }
    }, [_vm._v("详情")])]), _vm._v(" "), (_vm.dyReverseConsumeRole) ? [(o.status !== 2 && new Date(o.cancelTime).getTime() > new Date().getTime()) ? _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.revokeBtn(o)
        }
      }
    }, [_vm._v("撤销")])]) : _vm._e()] : _vm._e()], 2)])])
  })], 2), _vm._v(" "), (!_vm.orderList.length) ? _c('div', {
    staticClass: "no-data"
  }, [_c('i', {
    staticClass: "gray"
  }, [_vm._v("暂无数据")])]) : _vm._e(), _vm._v(" "), (_vm.totalCount && _vm.totalCount > 30) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "current": _vm.query.page,
      "total": _vm.totalCount,
      "page-size": 30,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.queryVerify
    }
  })], 1) : _vm._e()])]), _vm._v(" "), _vm._m(1)], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "mask-closable": false,
      "title": "抖音核销",
      "width": "700",
      "styles": {
        top: '20px'
      },
      "footer-hide": ""
    },
    model: {
      value: (_vm.couponShow),
      callback: function($$v) {
        _vm.couponShow = $$v
      },
      expression: "couponShow"
    }
  }, [_c('div', {
    staticClass: "info-view"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("填写信息")])]), _vm._v(" "), _c('i-form', {
    ref: "couponRef",
    staticClass: "myform",
    staticStyle: {
      "width": "420px"
    },
    attrs: {
      "model": _vm.couponInfo,
      "rules": _vm.couponRule,
      "label-width": 110
    }
  }, [_c('form-item', {
    attrs: {
      "prop": "memberPhoneNo",
      "label": "手机号",
      "required": ""
    }
  }, [_c('i-input', {
    attrs: {
      "placeholder": "请输入手机号"
    },
    model: {
      value: (_vm.couponInfo.memberPhoneNo),
      callback: function($$v) {
        _vm.$set(_vm.couponInfo, "memberPhoneNo", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "couponInfo.memberPhoneNo"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "code",
      "label": "券号",
      "required": ""
    }
  }, [_c('i-input', {
    attrs: {
      "placeholder": "请输入需要核销的券号"
    },
    model: {
      value: (_vm.couponInfo.code),
      callback: function($$v) {
        _vm.$set(_vm.couponInfo, "code", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "couponInfo.code"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "form-submit",
    staticStyle: {
      "padding-left": "110px"
    }
  }, [(_vm.dyConsumeRole) ? _c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.couponQuery
    }
  }, [_vm._v("查券")]) : _vm._e(), _vm._v(" "), _c('i-button', {
    on: {
      "click": function($event) {
        _vm.couponShow = false
      }
    }
  }, [_vm._v("取消")])], 1)], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "mask-closable": false,
      "title": ("核销商品-" + (_vm.orderMap.title) + (_vm.isVerify ? '' : '（' + _vm.status[_vm.orderMap.status] + '）')),
      "width": "700",
      "styles": {
        top: '20px'
      },
      "footer-hide": ""
    },
    model: {
      value: (_vm.detailsShow),
      callback: function($$v) {
        _vm.detailsShow = $$v
      },
      expression: "detailsShow"
    }
  }, [(_vm.detailsShow) ? _c('div', {
    staticClass: "info-view"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("基本信息")]), _vm._v(" "), _c('table', [_c('tr', [_c('th', {
    class: (_vm.isVerify && !_vm.orderMap.isMember) ? 'required' : '',
    attrs: {
      "width": "110"
    }
  }, [_vm._v("姓名")]), _vm._v(" "), _c('td', [(!_vm.isVerify) ? _c('a', {
    on: {
      "click": function($event) {
        return _vm.viewMemberBase(_vm.orderMap)
      }
    }
  }, [_vm._v(_vm._s(_vm.orderMap.memberName))]) : [(_vm.orderMap.isMember) ? _c('a', {
    on: {
      "click": function($event) {
        return _vm.viewMemberBase(_vm.orderMap)
      }
    }
  }, [_vm._v(_vm._s(_vm.orderMap.memberName))]) : _c('i-input', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "placeholder": "请输入姓名"
    },
    model: {
      value: (_vm.couponInfo.memberName),
      callback: function($$v) {
        _vm.$set(_vm.couponInfo, "memberName", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "couponInfo.memberName"
    }
  })], _vm._v(" "), (_vm.isVerify) ? _c('span', {
    staticClass: "red"
  }, [(_vm.orderMap.isMember) ? [_vm._v("（会员）")] : (_vm.orderMap.memberName) ? [_vm._v("（客户）")] : [_vm._v("（新用户）")]], 2) : _vm._e()], 2)]), _vm._v(" "), _c('tr', [_c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("手机号")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.orderMap.memberPhoneNo))])]), _vm._v(" "), _c('tr', [_c('th', {
    class: (_vm.isVerify && !_vm.orderMap.isMember) ? 'required' : '',
    attrs: {
      "width": "110"
    }
  }, [_vm._v("性别")]), _vm._v(" "), _c('td', [_c('span', [(!_vm.isVerify) ? _c('span', [_vm._v("\n                " + _vm._s(_vm.orderMap.memberSex ? '男' : '女') + "\n              ")]) : [(_vm.orderMap.isMember) ? _c('span', [_vm._v("\n                  " + _vm._s(_vm.orderMap.memberSex ? '男' : '女') + "\n                ")]) : _c('RadioGroup', {
    model: {
      value: (_vm.couponInfo.memberSex),
      callback: function($$v) {
        _vm.$set(_vm.couponInfo, "memberSex", $$v)
      },
      expression: "couponInfo.memberSex"
    }
  }, [_c('Radio', {
    attrs: {
      "label": 1
    }
  }, [_vm._v("男")]), _vm._v(" "), _c('Radio', {
    attrs: {
      "label": 0
    }
  }, [_vm._v("女")])], 1)]], 2)])]), _vm._v(" "), (!_vm.isVerify) ? _c('tr', [_c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("券码")]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "code-warp"
  }, [_vm._l((_vm.orderMap.productList), function(item, idx) {
    return [_vm._v("\n                " + _vm._s(idx > 0 ? ',' : '') + _vm._s(item.originCode) + "\n              ")]
  })], 2)])]) : _vm._e(), _vm._v(" "), (_vm.orderMap.count && _vm.isVerify) ? _c('tr', [_c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("可核销数量")]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "code-warp"
  }, [_vm._v("\n              " + _vm._s(_vm.orderMap.count) + "\n            ")])])]) : _vm._e(), _vm._v(" "), (_vm.isVerify && _vm.orderMap.count > 1) ? _c('tr', [_c('th', {
    staticClass: "required",
    attrs: {
      "width": "110"
    }
  }, [_vm._v("本次核销数量")]), _vm._v(" "), _c('td', [(!_vm.isVerify) ? _c('span', [_vm._v(_vm._s(_vm.orderMap.count))]) : [_c('input-int', {
    attrs: {
      "max": _vm.orderMap.count,
      "min": "1",
      "placeholder": "请输入数量"
    },
    model: {
      value: (_vm.couponInfo.count),
      callback: function($$v) {
        _vm.$set(_vm.couponInfo, "count", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "couponInfo.count"
    }
  })]], 2)]) : _vm._e(), _vm._v(" "), (!_vm.isVerify) ? _c('tr', [_c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("本次核销数量")]), _vm._v(" "), _c('td', [_vm._v("\n            " + _vm._s(_vm.orderMap.count) + "\n          ")])]) : _vm._e(), _vm._v(" "), _c('tr', [_c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("商品类型")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.grouponType[_vm.orderMap.grouponType]))])]), _vm._v(" "), _c('tr', [_c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("商品单价")]), _vm._v(" "), _c('td', [_vm._v("￥" + _vm._s(_vm.orderMap.originalAmount.toFixed(2)))])]), _vm._v(" "), _c('tr', [_c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("商品原价")]), _vm._v(" "), _c('td', [_vm._v("￥" + _vm._s(_vm.orderMap.listMarketAmount.toFixed(2)))])]), _vm._v(" "), _c('tr', [_c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("核销总金额")]), _vm._v(" "), _c('td', [_vm._v("￥" + _vm._s((_vm.orderMap.originalAmount * (_vm.couponInfo.count || _vm.orderMap.count)).toFixed(1)))])]), _vm._v(" "), _c('tr', [_c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("券有效期")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.orderMap.startTime) + " ~ " + _vm._s(_vm.orderMap.expireTime))])]), _vm._v(" "), (_vm.orderMap.cardName) ? _c('tr', [_c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("购卡名称")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.orderMap.cardName) + "（" + _vm._s(_vm.g.Dict.CardType[_vm.orderMap.cardType]) + "）")])]) : _vm._e(), _vm._v(" "), (_vm.orderMap.cardDays && _vm.orderMap.cardType === 1) ? _c('tr', [_c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("使用天数")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.orderMap.cardDays * (_vm.couponInfo.count || _vm.orderMap.count)) + " 天")])]) : _vm._e(), _vm._v(" "), (_vm.orderMap.cardTimes && _vm.orderMap.cardType === 2) ? _c('tr', [_c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("使用次数")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.orderMap.cardTimes * (_vm.couponInfo.count || _vm.orderMap.count)) + " 次")])]) : _vm._e(), _vm._v(" "), (_vm.orderMap.cardTimes && _vm.orderMap.cardType === 4) ? _c('tr', [_c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("使用时间")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.orderMap.cardTimes * (_vm.couponInfo.count || _vm.orderMap.count)) + " 分钟")])]) : _vm._e(), _vm._v(" "), (_vm.orderMap.cardAmount) ? _c('tr', [_c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("充值金额")]), _vm._v(" "), _c('td', [_vm._v("￥" + _vm._s((_vm.orderMap.cardAmount * (_vm.couponInfo.count || _vm.orderMap.count)).toFixed(2)))])]) : _vm._e(), _vm._v(" "), (_vm.orderMap.updateUname) ? _c('tr', [_c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("操作人")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.orderMap.updateUname))])]) : _vm._e(), _vm._v(" "), (_vm.orderMap.updateTime) ? _c('tr', [_c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("操作时间")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.orderMap.updateTime))])]) : _vm._e(), _vm._v(" "), (_vm.orderMap.cancelTime) ? _c('tr', [_c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("可撤销期限")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.orderMap.cancelTime))])]) : _vm._e(), _vm._v(" "), _c('tr', [_c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("是否创建会员卡")]), _vm._v(" "), _c('td', [(_vm.isVerify) ? _c('RadioGroup', {
    model: {
      value: (_vm.couponInfo.isTrial),
      callback: function($$v) {
        _vm.$set(_vm.couponInfo, "isTrial", $$v)
      },
      expression: "couponInfo.isTrial"
    }
  }, [(_vm.orderMap.cardId) ? _c('Radio', {
    attrs: {
      "disabled": !_vm.orderMap.cardName,
      "label": 0
    }
  }, [_vm._v("是")]) : _vm._e(), _vm._v(" "), _c('Radio', {
    attrs: {
      "label": 1
    }
  }, [_vm._v("否"), (!_vm.orderMap.cardId) ? _c('span', {
    staticClass: "none"
  }, [_vm._v("（未关联会员卡）")]) : _vm._e()])], 1) : _c('span', [_vm._v("\n              " + _vm._s(_vm.orderMap.isTrial ? '否' : "是") + "\n            ")])], 1)])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "none"
  }, [(_vm.isVerify) ? _c('i-button', {
    staticStyle: {
      "margin-right": "10px",
      "width": "150px"
    },
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.verifyCoupon
    }
  }, [_vm._v("核销（数量：" + _vm._s(_vm.couponInfo.count || _vm.orderMap.count) + "）")]) : _vm._e(), _vm._v(" "), _c('i-button', {
    staticStyle: {
      "width": "100px"
    },
    on: {
      "click": function($event) {
        _vm.detailsShow = false
      }
    }
  }, [_vm._v("关闭")])], 1)]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "会员基本信息",
      "width": "800",
      "styles": {
        top: '10px'
      },
      "ok-text": "关闭",
      "cancel-text": "按Esc键或点击其它地方可关闭"
    },
    model: {
      value: (_vm.viewMemberDlg),
      callback: function($$v) {
        _vm.viewMemberDlg = $$v
      },
      expression: "viewMemberDlg"
    }
  }, [(_vm.viewMemberDlg) ? _c('member-base-info', {
    attrs: {
      "member-id": _vm.viewMemberId
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "选择需要撤销的券码",
      "width": "400",
      "ok-text": "关闭",
      "footer-hide": "",
      "cancel-text": "按Esc键或点击其它地方可关闭"
    },
    model: {
      value: (_vm.buyCouponShow),
      callback: function($$v) {
        _vm.buyCouponShow = $$v
      },
      expression: "buyCouponShow"
    }
  }, [(_vm.buyCouponList && _vm.buyCouponList.length) ? _c('div', [_c('i-select', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "placeholder": "请选择需要撤销的券码"
    },
    model: {
      value: (_vm.order.poipId),
      callback: function($$v) {
        _vm.$set(_vm.order, "poipId", $$v)
      },
      expression: "order.poipId"
    }
  }, _vm._l((_vm.buyCouponList), function(item) {
    return _c('i-option', {
      key: item.code,
      attrs: {
        "disabled": item.isVerify,
        "value": item.poipId
      }
    }, [_vm._v(_vm._s(item.code) + " "), (item.isVerify) ? _c('span', [_vm._v("(已撤销)")]) : _vm._e()])
  }), 1), _vm._v("\n       \n       \n      "), _c('i-button', {
    staticStyle: {
      "width": "100px"
    },
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.revokeVerifyFun
    }
  }, [_vm._v("确定")])], 1) : _vm._e()]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": _vm.custDlgTitle,
      "width": "850",
      "styles": {
        top: '10px'
      }
    },
    model: {
      value: (_vm.custDlgView),
      callback: function($$v) {
        _vm.custDlgView = $$v
      },
      expression: "custDlgView"
    }
  }, [(_vm.custDlgView) ? _c('cust-detail', {
    attrs: {
      "cust-id": _vm.selectCustId,
      "can-create": false
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "dlg-foot",
    attrs: {
      "slot": "center"
    },
    slot: "center"
  }, [_c('i-button', {
    on: {
      "click": function($event) {
        _vm.custDlgView = false
      }
    }
  }, [_vm._v("关闭")])], 1)], 1)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_c('span', [_vm._v("核销状态")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "note"
  }, [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("核销说明")])]), _vm._v(" "), _c('ol', [_c('li', [_vm._v("\n          贵店如需使用抖音核销功能，需通过抖音授权绑定页面进行授权操作\n        ")]), _vm._v(" "), _c('li', [_vm._v("抖音核销：把用户购买的商品兑换成会员卡，新用户自动创建会员并且买卡，老用户自动买卡或续卡")]), _vm._v(" "), _c('li', [_vm._v("商品名称：是核销用户所购买的商品名称")]), _vm._v(" "), _c('li', [_vm._v("姓名：核销时所填写的核销用户姓名")]), _vm._v(" "), _c('li', [_vm._v("核销状态：\n          "), _c('ul', {
    staticClass: "item"
  }, [_c('li', [_vm._v("核销成功：说明核销商品已经核销成功")]), _vm._v(" "), _c('li', [_vm._v("部分撤销：说明该商品已经核销成功，之后又进行了撤销操作，但是没有全部撤销")]), _vm._v(" "), _c('li', [_vm._v("已撤销：说明该商品已经核销成功，之后又进行了撤销操作，并且全部撤销成功")])])]), _vm._v(" "), _c('li', [_vm._v("商品数量：核销时所填写的数量\n          "), _c('ul', {
    staticClass: "item"
  }, [_c('li', [_vm._v("券码：不可修改核销数量，默认核销一个，次卡除外")]), _vm._v(" "), _c('li', [_vm._v("扫码：可修改核销数量，默认全部核销（剩余商品数量）")])])]), _vm._v(" "), _c('li', [_vm._v("商品类型：用户所购买商品的类型，分为团购、次卡、代金券")]), _vm._v(" "), _c('li', [_vm._v("核销总金额 = 商品数量 x 商品单价")]), _vm._v(" "), _c('li', [_vm._v("购卡名称：核销的商品所绑定会员卡的名称")]), _vm._v(" "), _c('li', [_vm._v("使用次数：核销的商品所绑定会员卡可使用的次数")]), _vm._v(" "), _c('li', [_vm._v("使用时间：核销的商品所绑定会员卡可使用的分钟数")]), _vm._v(" "), _c('li', [_vm._v("购卡期限：核销的商品所绑定会员卡可使用的期限（单位：天）")]), _vm._v(" "), _c('li', [_vm._v("充值金额：核销的商品所绑定会员卡可使用的金额")]), _vm._v(" "), _c('li', [_vm._v("操作说明：\n          "), _c('ul', {
    staticClass: "item"
  }, [_c('li', [_vm._v("详情：可查看核销订单的详细内容")]), _vm._v(" "), _c('li', [_vm._v("撤销：状态是\"核销成功\"或\"部分撤销\"并且是当天核销且未超过60分钟的商品可进行操作")])])])])])
}]}

/***/ }),

/***/ 2232:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "dy-platform-bind"
  }, [_c('shop-nav', {
    attrs: {
      "menu": "more-tools"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "more-tools",
      "page": "dy-verify-coupon"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('page-header', {
    attrs: {
      "menu-list": _vm.menuList,
      "include-back": true
    }
  }, [_c('help', [_vm._v("\n        让门店与抖音进行授权，然后同步抖音店铺的商品之后可以绑定门店的会员卡\n      ")])], 1), _vm._v(" "), _c('section', [_c('div', {
    staticClass: "hd"
  }, [(_vm.dyConf && _vm.dyConf.accountId) ? [(_vm.dyProductRole) ? _c('i-button', {
    attrs: {
      "type": "primary",
      "icon": "refresh"
    },
    on: {
      "click": _vm.cardSynchronousFun
    }
  }, [_vm._v("同步最新商品")]) : _vm._e(), _vm._v(" "), (_vm.dyPowerRole) ? [_vm._v("\n             \n            "), _c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.doubleHandleFun
    }
  }, [_vm._v("重新授权")]), _vm._v(" "), _c('help', {
    attrs: {
      "title": "提示"
    }
  }, [_vm._v("\n              1. 授权时选择了错误的抖音门店，可点击\"重新授权\"\n              "), _c('br'), _vm._v("\n              2. 想要切换授权的抖音门店，可点击\"重新授权\"\n              "), _c('br'), _vm._v("\n              注意：切换授权的抖音门店会导致同步的商品被清空\n            ")])] : _vm._e()] : [(_vm.dyPowerRole) ? _c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.dyAppRoleShow = true
      }
    }
  }, [_vm._v("抖音授权绑定")]) : _vm._e()]], 2), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_vm._m(0), _vm._v(" "), _c('tbody', _vm._l((_vm.poicList), function(m) {
    return _c('tr', {
      key: m.poicId
    }, [_c('td', [_vm._v(_vm._s(m.productName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.productTypeMap[m.productType]))]), _vm._v(" "), _c('td', [_vm._v("\n                " + _vm._s(m.soldStartTime) + " ~ " + _vm._s(m.soldEndTime) + "\n              ")]), _vm._v(" "), _c('td', [(m.actualAmount) ? _c('span', [_vm._v("\n                  ￥\n                  " + _vm._s(m.actualAmount) + "\n                ")]) : _vm._e()]), _vm._v(" "), _c('td', [(m.originAmount) ? _c('span', [_vm._v("\n                  ￥\n                  " + _vm._s(m.originAmount) + "\n                ")]) : _vm._e()]), _vm._v(" "), _c('td', [(m.cardName) ? _c('span', [_vm._v("\n                  " + _vm._s(m.cardName) + "【" + _vm._s(_vm.g.Dict.CardType[m.cardType]) + "】\n                ")]) : _c('span', {
      staticClass: "gray"
    }, [_vm._v("未绑卡")])]), _vm._v(" "), _c('td', [_c('ul', {
      staticClass: "opt-list"
    }, [_c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.selectCardFun(m)
        }
      }
    }, [_vm._v("关联会员卡")])]), _vm._v(" "), (m.cardId) ? _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.cancelCardFun(m)
        }
      }
    }, [_vm._v("取消关联")])]) : _vm._e()])])])
  }), 0)]), _vm._v(" "), (!_vm.poicList || !_vm.poicList.length) ? _c('div', {
    staticClass: "none p15"
  }, [_vm._v("暂无商品")]) : _vm._e()]), _vm._v(" "), (_vm.totalCount > 30) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.totalCount,
      "page-size": 30,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.dyGoodsQuery
    }
  })], 1) : _vm._e()]), _vm._v(" "), _c('section', {
    staticClass: "note"
  }, [_vm._m(1), _vm._v(" "), _c('ol', [_c('li', [_vm._v("贵店如需使用抖音核销功能，需先看 "), _c('a', {
    on: {
      "click": _vm.jumpChick
    }
  }, [_vm._v("这里")])]), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._m(3), _vm._v(" "), _vm._m(4)])])], 1), _vm._v(" "), _c('Modal', {
    attrs: {
      "width": "1200",
      "styles": {
        top: '10px'
      },
      "title": "抖音来客授权说明",
      "footer-hide": "",
      "mask-closable": false
    },
    model: {
      value: (_vm.dyHelpShow),
      callback: function($$v) {
        _vm.dyHelpShow = $$v
      },
      expression: "dyHelpShow"
    }
  }, [_c('dy-help'), _vm._v(" "), _c('div', {
    staticClass: "center"
  }, [_c('p', [_c('i-button', {
    on: {
      "click": function($event) {
        _vm.dyHelpShow = false
      }
    }
  }, [_vm._v("关闭")])], 1)])], 1), _vm._v(" "), _c('Modal', {
    attrs: {
      "width": "450",
      "title": "抖音授权",
      "footer-hide": "",
      "mask-closable": false
    },
    model: {
      value: (_vm.dyAppRoleShow),
      callback: function($$v) {
        _vm.dyAppRoleShow = $$v
      },
      expression: "dyAppRoleShow"
    }
  }, [_c('div', {
    staticClass: "row"
  }, [_c('i-input', {
    attrs: {
      "type": "text",
      "placeholder": "请输入抖音来客账户ID"
    },
    model: {
      value: (_vm.accountId),
      callback: function($$v) {
        _vm.accountId = (typeof $$v === 'string' ? $$v.trim() : $$v)
      },
      expression: "accountId"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "row btns"
  }, [_c('i-button', {
    staticStyle: {
      "width": "100px"
    },
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.dyAppAuchorizeFun
    }
  }, [_c('span', [_vm._v("确定")])])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "dy-none dy-10"
  }, [_c('p', [_vm._v("注意：要先在\"抖音来客\"授权我们之后才能填\"账户ID\"进行绑定，如何在\"抖音来客\"授权我们？请看 "), _c('a', {
    on: {
      "click": _vm.jumpChick
    }
  }, [_vm._v("这里")])])])]), _vm._v(" "), _c('Modal', {
    attrs: {
      "width": "760",
      "title": "选择授权门店",
      "footer-hide": "",
      "mask-closable": false
    },
    model: {
      value: (_vm.dyShow),
      callback: function($$v) {
        _vm.dyShow = $$v
      },
      expression: "dyShow"
    }
  }, [(_vm.dyConfList && _vm.dyConfList.length) ? [_c('div', {
    staticClass: "dy-shop-title bold"
  }, [_vm._v("商家账户：" + _vm._s(_vm.dyConfList[0].accountName))]), _vm._v(" "), (_vm.dyConfList && _vm.dyConfList.length) ? _c('ul', {
    staticClass: "dy-shop"
  }, _vm._l((_vm.dyConfList), function(s, idx) {
    return _c('li', {
      key: idx,
      on: {
        "click": function($event) {
          return _vm.selectShopFun(s)
        }
      }
    }, [_c('div', {
      staticClass: "dy-item"
    }, [_vm._v("\n            抖音门店名称："), _c('span', {
      staticClass: "bold"
    }, [_vm._v(_vm._s(s.poiName))])]), _vm._v(" "), _c('div', {
      staticClass: "dy-item"
    }, [_vm._v("\n            门店地址：" + _vm._s(s.address) + "\n          ")])])
  }), 0) : _vm._e()] : _vm._e()], 2), _vm._v(" "), _c('Modal', {
    attrs: {
      "width": "450",
      "title": '卡券绑定-{0}'.format(_vm.dyGoodsBindCard.productName),
      "footer-hide": "",
      "mask-closable": false
    },
    model: {
      value: (_vm.cardListShow),
      callback: function($$v) {
        _vm.cardListShow = $$v
      },
      expression: "cardListShow"
    }
  }, [(_vm.cardListShow) ? _c('div', {
    staticClass: "dy-select-card"
  }, [_c('i-form', {
    ref: "dyGoodsRef",
    staticClass: "myform",
    staticStyle: {
      "width": "350px"
    },
    attrs: {
      "model": _vm.dyGoodsBindCard,
      "rules": _vm.dyGoodsBindCardRule,
      "label-width": 110
    }
  }, [_c('form-item', {
    attrs: {
      "prop": "cardId",
      "label": "绑定会员卡：",
      "required": ""
    }
  }, [_c('Select', {
    attrs: {
      "filterable": "",
      "clearable": ""
    },
    on: {
      "on-change": _vm.changeCardFun
    },
    model: {
      value: (_vm.dyGoodsBindCard.cardId),
      callback: function($$v) {
        _vm.$set(_vm.dyGoodsBindCard, "cardId", $$v)
      },
      expression: "dyGoodsBindCard.cardId"
    }
  }, _vm._l((_vm.cardList), function(item) {
    return _c('Option', {
      key: item.cardId,
      attrs: {
        "value": item.cardId
      }
    }, [_vm._v(_vm._s(item.cardName))])
  }), 1)], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "cardDays",
      "label": "使用天数：",
      "required": _vm.selectCard && _vm.selectCard.cardType === 1
    }
  }, [_c('i-input', {
    staticStyle: {
      "width": "100px"
    },
    attrs: {
      "type": "text"
    },
    model: {
      value: (_vm.dyGoodsBindCard.cardDays),
      callback: function($$v) {
        _vm.$set(_vm.dyGoodsBindCard, "cardDays", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "dyGoodsBindCard.cardDays"
    }
  }), _vm._v(" 天\n        ")], 1), _vm._v(" "), (_vm.selectCard && _vm.selectCard.cardType === 2) ? _c('form-item', {
    attrs: {
      "prop": "cardTimes",
      "label": "使用次数：",
      "required": _vm.selectCard && _vm.selectCard.cardType === 2
    }
  }, [_c('i-input', {
    staticStyle: {
      "width": "100px"
    },
    attrs: {
      "type": "text"
    },
    model: {
      value: (_vm.dyGoodsBindCard.cardTimes),
      callback: function($$v) {
        _vm.$set(_vm.dyGoodsBindCard, "cardTimes", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "dyGoodsBindCard.cardTimes"
    }
  }), _vm._v(" 次\n        ")], 1) : _vm._e(), _vm._v(" "), (_vm.selectCard && _vm.selectCard.cardType === 4) ? _c('form-item', {
    attrs: {
      "prop": "cardTimes",
      "label": "使用时间：",
      "required": _vm.selectCard && _vm.selectCard.cardType === 4
    }
  }, [_c('i-input', {
    staticStyle: {
      "width": "100px"
    },
    attrs: {
      "type": "text"
    },
    model: {
      value: (_vm.dyGoodsBindCard.cardTimes),
      callback: function($$v) {
        _vm.$set(_vm.dyGoodsBindCard, "cardTimes", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "dyGoodsBindCard.cardTimes"
    }
  }), _vm._v(" 分钟\n        ")], 1) : _vm._e(), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "cardAmount",
      "label": "充值金额：",
      "required": _vm.selectCard && _vm.selectCard.cardType === 3
    }
  }, [_c('i-input', {
    staticStyle: {
      "width": "100px"
    },
    attrs: {
      "type": "text"
    },
    model: {
      value: (_vm.dyGoodsBindCard.cardAmount),
      callback: function($$v) {
        _vm.$set(_vm.dyGoodsBindCard, "cardAmount", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "dyGoodsBindCard.cardAmount"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "form-submit"
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.selectMtGoodsBindCardFun
    }
  }, [_vm._v("确定")]), _vm._v(" "), _c('i-button', {
    on: {
      "click": function($event) {
        _vm.cardListShow = false
      }
    }
  }, [_vm._v("关闭")])], 1)], 1) : _vm._e()])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', [_c('th', {
    attrs: {
      "width": "240"
    }
  }, [_vm._v("商品")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("类型")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "300"
    }
  }, [_vm._v("商品售卖时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("商品价格")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("商品原价")]), _vm._v(" "), _c('th', {
    staticStyle: {
      "min-width": "100px"
    }
  }, [_vm._v("关联的会员卡")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "170"
    }
  }, [_vm._v("操作")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("授权绑卡说明")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_vm._v("抖音授权：PC抖音来客右上角获得\"账户ID\"，APP抖音来客-我-置顶个人信息获得\"账户ID\"\n          "), _c('ul', {
    staticClass: "item"
  }, [_c('li', [_vm._v("点击该按钮可使本门店与抖音门店进行绑定授权，如有多个抖音门店还需从弹出框中选择其中一个门店进行绑定")]), _vm._v(" "), _c('li', [_vm._v("授权成功之后该按钮隐藏，授权到期需重新授权该按钮自动显示，请忽重复授权")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_vm._v("重新授权：请忽重复授权\n          "), _c('ul', {
    staticClass: "item"
  }, [_c('li', [_vm._v("授权时选择了错误的抖音门店，可点击\"重新授权\"")]), _vm._v(" "), _c('li', [_vm._v("想要切换授权的抖音门店，可点击\"重新授权\"")]), _vm._v(" "), _c('li', [_vm._v("注意：切换授权的抖音门店会导致同步的商品被清空")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_vm._v("同步商品：把抖音店铺的商品同步到本门店\n          "), _c('ul', {
    staticClass: "item"
  }, [_c('li', [_vm._v("商品：抖音店铺商品的名称")]), _vm._v(" "), _c('li', [_vm._v("类型：团购、代金券、次卡")]), _vm._v(" "), _c('li', [_vm._v("商品售卖时间：该商品可以购买的时间范围（其它时间无法购买）")]), _vm._v(" "), _c('li', [_vm._v("关联的会员卡：抖音商品所绑定本门店的会员卡")]), _vm._v(" "), _c('li', [_vm._v("操作：\n              "), _c('ol', [_c('li', [_vm._v("关联会员卡：把抖音商品和会员卡进行绑定\n                  "), _c('ul', {
    staticClass: "item"
  }, [_c('li', [_vm._v("使用天数：期限卡必填，该会员卡可使用的期限（单位：天）")]), _vm._v(" "), _c('li', [_vm._v("使用次数：次数卡必填，该会员卡可使用的次数")]), _vm._v(" "), _c('li', [_vm._v("使用时间：计时卡必填，该会员卡可使用的时间（单位：分钟）")]), _vm._v(" "), _c('li', [_vm._v("充值金额：储值卡必填，其它选填，该会员卡充值的金额")])])]), _vm._v(" "), _c('li', [_vm._v("取消关联：绑定会员卡后显示，取消和抖音商品绑定的会员卡")])])])])])
}]}

/***/ }),

/***/ 2247:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "-dy-help article"
  }, [_c('ul', [_c('li', [_c('div', {
    staticClass: "step"
  }, [_c('b', [_c('Icon', {
    attrs: {
      "type": "ios-flag",
      "size": "20"
    }
  }), _vm._v(" 步骤 1：\n        ")], 1), _vm._v("\n        商家登录抖音来客并发起授权申请\n      ")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('img', {
    attrs: {
      "src": _vm.g.Conf.IMG_LIB_URL + '/dy-help/dy-help-1.png'
    }
  }), _vm._v(" "), _c('p', [_vm._v("\n        在新增授权弹窗中，选择要授权的服务商及要授权的解决方案及能力\n      ")]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('img', {
    staticStyle: {
      "width": "700px"
    },
    attrs: {
      "src": _vm.g.Conf.IMG_LIB_URL + '/dy-help/dy-help-2.png'
    }
  }), _vm._v(" "), _vm._m(1)])]), _vm._v(" "), _c('li', [_c('div', {
    staticClass: "step"
  }, [_c('b', [_c('Icon', {
    attrs: {
      "type": "ios-flag",
      "size": "20"
    }
  }), _vm._v(" 步骤 2：\n        ")], 1), _vm._v("\n        等待我方确认与抖音来客商户的授权关系（本次操作由我们服务商操作，通过之后才进行下一步操作）\n      ")]), _vm._v(" "), _c('p', [_vm._v("\n        路径：「服务商平台」-「授权管理」，在页面上确认授权请求，操作成功后即可建立授权关系。\n      ")]), _vm._v(" "), _c('img', {
    attrs: {
      "src": _vm.g.Conf.IMG_LIB_URL + '/dy-help/dy-help-3.png'
    }
  })]), _vm._v(" "), _c('li', [_c('div', {
    staticClass: "step"
  }, [_c('b', [_c('Icon', {
    attrs: {
      "type": "ios-flag",
      "size": "20"
    }
  }), _vm._v(" 步骤 3：\n        ")], 1), _vm._v("\n        授权绑定门店（获取到\"账户ID\"之后可在本页左上角点击\"抖音授权\"按钮进行绑定）\n      ")]), _vm._v(" "), _c('p', [_vm._v("电脑端获取“账户ID”方法：")]), _vm._v(" "), _c('img', {
    attrs: {
      "src": _vm.g.Conf.IMG_LIB_URL + '/dy-help/dy-help-4.png'
    }
  }), _vm._v(" "), _c('p', [_vm._v("手机端获取“账户ID”方法：")]), _vm._v(" "), _c('img', {
    attrs: {
      "src": _vm.g.Conf.IMG_LIB_URL + '/dy-help/dy-help-5.png'
    }
  })])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("\n        路径：「商家登录抖音来客」>「店铺管理」>「第三方应用授权」>「新增授权」。"), _c('span', {
    staticClass: "red"
  }, [_vm._v("（管理员账号才能看到“第三方应用授权”）")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', [_c('b', [_vm._v("填写内容：")]), _vm._v(" "), _c('li', [_vm._v("服务商名称：南京强点信息技术有限公司")]), _vm._v(" "), _c('li', [_vm._v("授权应用：健总管抖音券码核销")]), _vm._v(" "), _c('li', [_vm._v("授权业务：到综行业解决方案")])])
}]}

/***/ }),

/***/ 2261:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.isBody) ? _c('div', {
    staticClass: "health-report"
  }, [_c('div', {
    ref: "healthReportRef",
    staticClass: "health-report-box"
  }, [_c('div', {
    staticClass: "info"
  }, [(_vm.isDownload) ? _c('div', {
    staticClass: "img-hd"
  }, [_c('img', {
    ref: "headImgRefs",
    attrs: {
      "src": _vm.g.Util.getAvatarUrl(_vm.bodyTest.memberAvatarPathname, 200, 200, '#fff', _vm.bodyTest.sex),
      "alt": "头像"
    }
  })]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "information"
  }, [_c('div', {
    staticClass: "phone-no"
  }, [_vm._v("\n          " + _vm._s(_vm.bodyTest.userName) + "\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "date"
  }, [_vm._v("\n          " + _vm._s(_vm.bodyTest.testTime.format('yyyy-MM-dd hh:mm:ss')) + "\n        ")])])]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "user-info h-r-box"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "u-i-content h-r-content"
  }, [_c('div', {
    staticClass: "u-i-data"
  }, [_c('div', {
    staticClass: "item data-l w-75"
  }, [_c('div', {
    staticClass: "u-i-count"
  }, [_vm._v(_vm._s(_vm.bodyTest.score))]), _vm._v(" "), _c('div', {
    staticClass: "u-i-name"
  }, [_vm._v("综合评分")])]), _vm._v(" "), _c('div', {
    staticClass: "u-i-b"
  }), _vm._v(" "), _c('div', {
    staticClass: "item data-r w-75"
  }, [_c('div', {
    staticClass: "u-i-count"
  }, [_vm._v(_vm._s(_vm.bodyTest.bodyAge))]), _vm._v(" "), _c('div', {
    staticClass: "u-i-name"
  }, [_vm._v("身体年龄")])])]), _vm._v(" "), _c('div', {
    staticClass: "u-i-body"
  }, [_c('ul', [_vm._l((_vm.bodyImgList), function(i, idx) {
    return [_c('li', {
      key: i,
      class: _vm.bodyType === i ? 'u-i-center' : ''
    }, [_c('img', {
      attrs: {
        "src": 'http://jzongguan.com/imglib/health-report/body-type/{0}/{1}-{2}.{3}'.format(_vm.bodyTest.sex ? 1 : 0, idx === 1 ? 'light' : 'dark', i, 'png'),
        "alt": ""
      }
    }), _vm._v(" "), (_vm.bodyType === i) ? _c('span', [_vm._v(_vm._s(_vm.bodyTest.bodyShape))]) : _vm._e()])]
  })], 2)])])]), _vm._v(" "), (_vm.getBodyComponent.size) ? _c('div', {
    staticClass: "h-r-box b-component"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "h-r-content b-c-content"
  }, [_c('ul', _vm._l((_vm.getBodyComponent), function(ref) {
    var key = ref[0];
    var b = ref[1];

    return _c('li', {
      key: key
    }, [_c('div', {
      staticClass: "b-c-title"
    }, [_vm._v("\n                " + _vm._s(b.name) + ":\n              ")]), _vm._v(" "), _c('div', {
      staticClass: "b-c-count"
    }, [_c('span', [_vm._v(_vm._s(b.value) + _vm._s(_vm.addUnitFun(key)))]), _vm._v(" "), _c('span', {
      class: 'b-c-type b-c-type-{0}'.format(_vm.compStyleFun(b, key))
    }, [_vm._v("\n                  " + _vm._s(_vm.styleType[_vm.compStyleFun(b, key) - 1]) + "\n                ")])])])
  }), 0)])]) : _vm._e(), _vm._v(" "), (_vm.bodyTest.bmi && _vm.bodyTest.bodyfat) ? _c('div', {
    staticClass: "h-r-box fat-analysis"
  }, [_vm._m(2), _vm._v(" "), _c('div', {
    staticClass: "h-r-content f-n-content"
  }, [_c('ul', [_c('li', {
    staticClass: "m-r-15"
  }, [_c('div', {
    class: 'f-n-count f-n-type-{0}'.format(_vm.bmiCom)
  }, [_vm._v("\n                " + _vm._s(_vm.bodyTest.bmi) + " (kg/m²) " + _vm._s(_vm.arrowType[_vm.bmiCom - 1]) + _vm._s(_vm.fateType[_vm.bmiCom - 1]) + "\n              ")]), _vm._v(" "), _c('div', {
    staticClass: "f-n-name"
  }, [_vm._v("身体质量指数(BMI)")])]), _vm._v(" "), _c('li', [_c('div', {
    class: 'f-n-count f-n-type-{0}'.format(_vm.bodyfatCom)
  }, [_vm._v(_vm._s(_vm.bodyTest.bodyfat) + "% " + _vm._s(_vm.arrowType[_vm.bodyfatCom - 1]) + _vm._s(_vm.fateType[_vm.bodyfatCom - 1]))]), _vm._v(" "), _c('div', {
    staticClass: "f-n-name"
  }, [_vm._v("体脂率(PBF)")])])])])]) : _vm._e(), _vm._v(" "), (_vm.getBodyPostureEvaluation.size) ? _c('div', {
    staticClass: "h-r-box body-posture"
  }, [_vm._m(3), _vm._v(" "), _c('div', {
    staticClass: "h-r-content b-p-content"
  }, [_c('ul', _vm._l((_vm.getBodyPostureEvaluation), function(ref) {
    var key = ref[0];
    var i = ref[1];

    return _c('li', {
      key: key
    }, [_c('div', {
      staticClass: "b-p-img"
    }, [_c('img', {
      attrs: {
        "src": ("http://jzongguan.com/imglib/health-report/" + key + "-" + (i.level) + ".png"),
        "alt": i.name
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "b-p-count"
    }, [_c('div', {
      staticClass: "b-p-top"
    }, [_c('span', {
      staticClass: "b-p-name"
    }, [_vm._v(_vm._s(i.name))]), _vm._v(" "), _c('span', {
      staticClass: "b-p-angle"
    }, [_vm._v(_vm._s(i.angle || 0) + "°")])]), _vm._v(" "), _c('div', {
      staticClass: "b-p-bottom"
    }, [_c('div', {
      staticClass: "item"
    }, [_c('span', {
      class: i.level === 0 ? 'tag tag-0' : 'tag'
    }), _vm._v(" "), _c('span', [_vm._v("低")])]), _vm._v(" "), _c('div', {
      staticClass: "item"
    }, [_c('span', {
      class: i.level === 1 ? 'tag tag-1' : 'tag'
    }), _vm._v(" "), _c('span', [_vm._v("中")])]), _vm._v(" "), _c('div', {
      staticClass: "item"
    }, [_c('span', {
      class: i.level === 2 ? 'tag tag-2' : 'tag'
    }), _vm._v(" "), _c('span', [_vm._v("高")])])])])])
  }), 0)])]) : _vm._e(), _vm._v(" "), (_vm.getSportsAbilityMap.size) ? _c('div', {
    staticClass: "h-r-box sports-ability"
  }, [_vm._m(4), _vm._v(" "), _c('div', {
    staticClass: "h-r-content s-a-content"
  }, [_c('ul', _vm._l((_vm.getSportsAbilityMap), function(ref) {
    var key = ref[0];
    var value = ref[1];

    return _c('li', {
      key: key
    }, [_c('div', {
      staticClass: "s-a-item-title",
      on: {
        "click": function($event) {
          return _vm.openFun(key)
        }
      }
    }, [_c('div', {
      staticClass: "s-a-title"
    }, [_vm._v(_vm._s(value.name) + ":")]), _vm._v(" "), _c('div', {
      staticClass: "s-a-count"
    }, [_c('span', [_vm._v(_vm._s(value.value) + _vm._s(_vm.addUnitFun(key)))]), _vm._v(" "), (value.type == 2) ? _c('span', {
      class: 's-a-type s-a-type2-{0}'.format(value.level)
    }, [_vm._v("\n                    " + _vm._s(_vm.sportsAbilityType2[value.level]) + "\n                  ")]) : _c('span', {
      class: 's-a-type s-a-type-{0}'.format(value.level)
    }, [_vm._v("\n                    " + _vm._s(_vm.sportsAbilityType[value.level]) + "\n                  ")]), _vm._v(" "), (_vm.sportsAbilityMap[key].msg) ? [(_vm.sportsAbilityMap[key].flag) ? _c('Icon', {
      attrs: {
        "type": "ios-arrow-down"
      }
    }) : _c('Icon', {
      attrs: {
        "type": "ios-arrow-up"
      }
    })] : _vm._e()], 2)]), _vm._v(" "), (_vm.sportsAbilityMap[key].flag) ? _c('div', {
      staticClass: "s-a-item-content"
    }, [_vm._v("\n                " + _vm._s(value.msg) + "\n              ")]) : _vm._e()])
  }), 0)])]) : _vm._e(), _vm._v(" "), (_vm.bodyTest.leftvision && _vm.bodyTest.leftvision) ? _c('div', {
    staticClass: "h-r-box eyes"
  }, [_vm._m(5), _vm._v(" "), _c('div', {
    staticClass: "h-r-content e-content"
  }, [_c('ul', [_c('li', {
    staticClass: "e-title"
  }, [_vm._v("\n              您的双眼检查结果为\n            ")]), _vm._v(" "), _vm._m(6), _vm._v(" "), _c('li', {
    staticClass: "e-count"
  }, [_c('div', {
    staticClass: "e-count-l"
  }, [_vm._v(_vm._s(_vm.bodyTest.leftvision))]), _vm._v(" "), _c('div', {
    staticClass: "e-count-r"
  }, [_vm._v(_vm._s(_vm.bodyTest.rightvision))])])])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "h-r-box four-limbs"
  }, [_vm._m(7), _vm._v(" "), _c('div', {
    staticClass: "h-r-content f-l-content"
  }, [_c('ul', [_c('li', [_c('div', {
    staticClass: "f-l-count"
  }, [_c('div', {
    staticClass: "f-l-top"
  }, [_c('span', [_vm._v(_vm._s(_vm.bodyTest.lamuscle || 0) + "Kg")]), _vm._v(" "), _c('span', {
    staticClass: "f-l-ftunk"
  }, [_vm._v(_vm._s(_vm.bodyTest.trunkmuscle || 0) + "Kg")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.bodyTest.ramuscle || 0) + "Kg")])]), _vm._v(" "), _vm._m(8), _vm._v(" "), _c('div', {
    staticClass: "f-l-footer"
  }, [_c('span', [_vm._v(_vm._s(_vm.bodyTest.llmuscle || 0) + "Kg")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.bodyTest.rlmuscle || 0) + "Kg")])])]), _vm._v(" "), _c('div', {
    staticClass: "f-l-name"
  }, [_vm._v("肌肉均衡")])]), _vm._v(" "), _c('li', [_c('div', {
    staticClass: "f-l-count"
  }, [_c('div', {
    staticClass: "f-l-top"
  }, [_c('span', [_vm._v(_vm._s(_vm.bodyTest.lafat || 0) + "Kg")]), _vm._v(" "), _c('span', {
    staticClass: "f-l-ftunk"
  }, [_vm._v(_vm._s(_vm.bodyTest.trunkfat || 0) + "Kg")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.bodyTest.rafat || 0) + "Kg")])]), _vm._v(" "), _vm._m(9), _vm._v(" "), _c('div', {
    staticClass: "f-l-footer"
  }, [_c('span', [_vm._v(_vm._s(_vm.bodyTest.llfat || 0) + "Kg")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.bodyTest.rlfat || 0) + "Kg")])])]), _vm._v(" "), _c('div', {
    staticClass: "f-l-name"
  }, [_vm._v("脂肪均衡")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "h-r-box weight-propose"
  }, [_vm._m(10), _vm._v(" "), _c('div', {
    staticClass: "h-r-content w-p-content"
  }, [_c('ul', [_c('li', [_c('div', {
    staticClass: "w-p-title"
  }, [_vm._v("体重控制：")]), _vm._v(" "), _c('div', {
    class: _vm.bodyTest.weightControl < 0 ? 'w-p-count no-w-color' : 'w-p-count'
  }, [_vm._v(_vm._s(_vm.bodyTest.weightControl >= 0 ? '+' : '') + _vm._s(_vm.bodyTest.weightControl || 0) + "Kg")])]), _vm._v(" "), _c('li', [_c('div', {
    staticClass: "w-p-title"
  }, [_vm._v("肌肉控制：")]), _vm._v(" "), _c('div', {
    class: _vm.bodyTest.muscleControl < 0 ? 'w-p-count no-w-color' : 'w-p-count'
  }, [_vm._v(_vm._s(_vm.bodyTest.muscleControl >= 0 ? '+' : '') + _vm._s(_vm.bodyTest.muscleControl || 0) + "Kg")])]), _vm._v(" "), _c('li', [_c('div', {
    staticClass: "w-p-title"
  }, [_vm._v("脂肪控制：")]), _vm._v(" "), _c('div', {
    class: _vm.bodyTest.fatControl < 0 ? 'w-p-count no-w-color' : 'w-p-count'
  }, [_vm._v(_vm._s(_vm.bodyTest.fatControl >= 0 ? '+' : '') + _vm._s(_vm.bodyTest.fatControl || 0) + "Kg")])]), _vm._v(" "), _c('li', [_c('div', {
    staticClass: "w-p-title"
  }, [_vm._v("目标体重：")]), _vm._v(" "), _c('div', {
    staticClass: "w-p-count"
  }, [_vm._v(_vm._s(_vm.targetWeight || 0) + "Kg")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "h-r-box charts"
  }, [_vm._m(11), _vm._v(" "), _c('div', {
    staticClass: "h-r-content e-content"
  }, [_c('div', {
    staticClass: "e-height"
  }, [_c('chart', {
    staticClass: "chart",
    attrs: {
      "options": _vm.heightOptions,
      "auto-resize": true
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "e-name"
  }, [_vm._v("身高年龄百分位曲线")])], 1), _vm._v(" "), _c('div', {
    staticClass: "e-weight"
  }, [_c('chart', {
    staticClass: "chart",
    attrs: {
      "options": _vm.weightOptions,
      "auto-resize": true
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "e-name"
  }, [_vm._v("体重年龄百分位曲线")])], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "h-r-box health-charts"
  }, [_vm._m(12), _vm._v(" "), _c('div', {
    staticClass: "h-r-content h-c-content"
  }, [_c('ul', [_c('li', [_c('div', {
    staticClass: "h-c-title"
  }, [_vm._v("\n                体重变化趋势（Kg）\n              ")]), _vm._v(" "), _c('div', {
    staticClass: "h-c-chart"
  }, [_c('chart', {
    staticClass: "chart",
    attrs: {
      "options": _vm.healthWeightOptions,
      "auto-resize": true
    }
  })], 1)]), _vm._v(" "), _c('li', [_c('div', {
    staticClass: "h-c-title"
  }, [_vm._v("\n                体脂率变化趋势（%）\n              ")]), _vm._v(" "), _c('div', {
    staticClass: "h-c-chart"
  }, [_c('chart', {
    staticClass: "chart",
    attrs: {
      "options": _vm.healthFatOptions,
      "auto-resize": true
    }
  })], 1)]), _vm._v(" "), _c('li', [_c('div', {
    staticClass: "h-c-title"
  }, [_vm._v("\n                骨骼肌肉变化趋势（%）\n              ")]), _vm._v(" "), _c('div', {
    staticClass: "h-c-chart"
  }, [_c('chart', {
    staticClass: "chart",
    attrs: {
      "options": _vm.healthSkmuscleOptions,
      "auto-resize": true
    }
  })], 1)])])])])])])]) : _vm._e()
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "u-i-title h-r-title"
  }, [_c('span', [_vm._v("基本信息")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "h-r-title"
  }, [_c('span', [_vm._v("基本体成分")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "h-r-title"
  }, [_c('span', [_vm._v("肥胖分析")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "h-r-title"
  }, [_c('span', [_vm._v("体态评估")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "h-r-title"
  }, [_c('span', [_vm._v("运动能力评估")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "h-r-title"
  }, [_c('span', [_vm._v("视力评估")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    staticClass: "e-name"
  }, [_c('div', {
    staticClass: "e-name-l"
  }, [_vm._v("左眼")]), _vm._v(" "), _c('div', {
    staticClass: "e-name-r"
  }, [_vm._v("右眼")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "h-r-title"
  }, [_c('span', [_vm._v("节段评估")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "f-l-center"
  }, [_c('span', {
    staticClass: "f-l-left"
  }, [_vm._v("左")]), _vm._v(" "), _c('span', {
    staticClass: "f-l-right"
  }, [_vm._v("右")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "f-l-center"
  }, [_c('span', {
    staticClass: "f-l-left"
  }, [_vm._v("左")]), _vm._v(" "), _c('span', {
    staticClass: "f-l-right"
  }, [_vm._v("右")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "h-r-title"
  }, [_c('span', [_vm._v("体重控制建议")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "h-r-title"
  }, [_c('span', [_vm._v("成长趋势分析")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "h-r-title"
  }, [_c('span', [_vm._v("健康趋势")])])
}]}

/***/ }),

/***/ 2287:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "more-tools"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "more-tools",
      "page": "online-pay-apply"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [(!_vm.applyRole) ? _c('section', {
    staticClass: "no-permit"
  }, [_c('i', {
    staticClass: "iconfont icon-alert2 big"
  }), _vm._v(" 此功能只能店长或超管可操作\n    ")]) : [_c('section', [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "l"
  }, [_c('i-button', {
    attrs: {
      "type": "primary",
      "icon": "md-add"
    },
    on: {
      "click": function($event) {
        return _vm.$router.push('/online-pay-apply-create')
      }
    }
  }, [_vm._v("微信在线支付申请")])], 1), _vm._v(" "), _c('div', {
    staticClass: "r"
  })]), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', {
    staticClass: "inner-tbl"
  }, [_c('tr', [_c('th', {
    staticStyle: {
      "min-width": "100px"
    },
    attrs: {
      "width": "180"
    }
  }, [_vm._v("业务申请编号")]), _vm._v(" "), _c('th', {
    staticStyle: {
      "min-width": "100px"
    },
    attrs: {
      "width": "130"
    }
  }, [_vm._v("微信支付申请单号")]), _vm._v(" "), _c('th', {
    staticStyle: {
      "min-width": "100px"
    },
    attrs: {
      "width": "100"
    }
  }, [_vm._v("特约商户号")]), _vm._v(" "), _c('th', {
    staticStyle: {
      "min-width": "100px"
    }
  }, [_vm._v("签约链接")]), _vm._v(" "), _c('th', {
    staticClass: "tab-state",
    staticStyle: {
      "min-width": "120px"
    }
  }, [_c('span', [_vm._v("\n                  状态\n                ")]), _vm._v(" "), _c('help', {
    attrs: {
      "title": "提示"
    }
  }, [_vm._v("\n                  最新状态需要手动刷新\n                ")])], 1), _vm._v(" "), _c('th', {
    staticStyle: {
      "min-width": "200px"
    }
  }, [_vm._v("状态描述")]), _vm._v(" "), _c('th', {
    staticStyle: {
      "min-width": "110px"
    },
    attrs: {
      "width": "150"
    }
  }, [_vm._v("操作")])]), _vm._v(" "), _vm._l((_vm.wxMchIdApplyList), function(a, idx) {
    return _c('tr', {
      key: idx
    }, [_c('td', [_vm._v(_vm._s(a.businessCode))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(a.applymentId))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(a.subMchid))]), _vm._v(" "), _c('td', [(a.applymentId && a.signUrl) ? _c('span', [_vm._v("\n                  ["), _c('a', {
      on: {
        "click": function($event) {
          return _vm.urlShowFun(a.signUrl)
        }
      }
    }, [_vm._v("查看")]), _vm._v("]\n                ")]) : _vm._e()]), _vm._v(" "), _c('td', [(a.applymentId) ? [_c('span', {
      class: _vm.stateClsFun(a)
    }, [_vm._v("\n                    " + _vm._s(_vm.applymentState.get(a.applymentState)) + "\n                  ")]), _vm._v(" "), (_vm.resetStateFun(a.applymentState)) ? _c('span', [_vm._v("\n                     \n                    ["), _c('a', {
      on: {
        "click": function($event) {
          return _vm.resetFun(a.applyId)
        }
      }
    }, [_vm._v("刷新")]), _vm._v("]\n                  ")]) : _vm._e(), _vm._v(" "), (a.applymentState == 'APPLYMENT_STATE_REJECTED') ? _c('span', [_vm._v("\n                    ["), _c('a', {
      on: {
        "click": function($event) {
          return _vm.auditDetailShowFun(a.auditDetailList)
        }
      }
    }, [_vm._v("驳回详情")]), _vm._v("]\n                  ")]) : _vm._e(), _vm._v(" "), (a.applymentState == 'APPLYMENT_STATE_FINISHED') ? _c('span', [(!a.isOpen) ? [_vm._v("\n                      ["), _c('a', {
      on: {
        "click": function($event) {
          return _vm.openOnlinePayApplyFun(a.applyId)
        }
      }
    }, [_vm._v("开通")]), _vm._v("]\n                    ")] : [_c('span', {
      staticClass: "none"
    }, [_vm._v(" [已开通]")])]], 2) : _vm._e()] : _c('span', {
      staticClass: "apply-state-default"
    }, [_vm._v("\n                  草稿\n                ")])], 2), _vm._v(" "), _c('td', [_vm._v(_vm._s(a.applymentStateMsg))]), _vm._v(" "), _c('td', [_c('ul', {
      staticClass: "opt-list"
    }, [(_vm.ifEditHandlerFun(idx)) ? _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.$router.push('/online-pay-apply-edit/' + +a.applyId)
        }
      }
    }, [_vm._v("编辑")])]) : _vm._e(), _vm._v(" "), (_vm.ifDeleteHandlerFun(idx)) ? _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.deleteApply(a.applyId)
        }
      }
    }, [_vm._v("删除")])]) : _vm._e(), _vm._v(" "), (a.applymentState === 'APPLYMENT_STATE_FINISHED') ? _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.$router.push('/online-pay-apply-edit/' + +a.applyId)
        }
      }
    }, [_vm._v("详情")])]) : _vm._e()])])])
  })], 2)]), _vm._v(" "), (_vm.wxMchIdApplyList) ? _c('div', {
    staticClass: "tbl-footer center"
  }, [_vm._v("共 " + _vm._s(_vm.wxMchIdApplyList.length) + " 条记录")]) : _vm._e()]), _vm._v(" "), _vm._m(0)]], 2), _vm._v(" "), _c('Modal', {
    attrs: {
      "width": "700",
      "draggable": "",
      "sticky": "",
      "reset-drag-position": "",
      "title": "驳回详情",
      "ok-text": "关闭",
      "footer-hide": ""
    },
    model: {
      value: (_vm.auditDetailShowFlag),
      callback: function($$v) {
        _vm.auditDetailShowFlag = $$v
      },
      expression: "auditDetailShowFlag"
    }
  }, [_c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_c('tr', [_c('th', {
    attrs: {
      "width": "50"
    }
  }, [_vm._v("序号")]), _vm._v(" "), _c('th', [_vm._v("错误说明")])]), _vm._v(" "), _vm._l((_vm.auditDetailList), function(a, idx) {
    return _c('tr', {
      key: idx
    }, [_c('td', {
      attrs: {
        "align": "center"
      }
    }, [_vm._v(_vm._s(idx + 1))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(a.rejectReason))])])
  })], 2)])]), _vm._v(" "), _c('Modal', {
    attrs: {
      "width": "460",
      "draggable": "",
      "sticky": "",
      "reset-drag-position": "",
      "title": "签约二维码",
      "ok-text": "关闭",
      "footer-hide": ""
    },
    model: {
      value: (_vm.urlShowFlag),
      callback: function($$v) {
        _vm.urlShowFlag = $$v
      },
      expression: "urlShowFlag"
    }
  }, [_c('img', {
    staticClass: "code_img",
    attrs: {
      "src": _vm.codeUrl,
      "alt": "签约二维码"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "notice"
  }, [_vm._v("\n      请使用微信扫码签约\n    ")])])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "note"
  }, [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit-notice"
  }, [_vm._v("必读说明")])]), _vm._v(" "), _c('ol', [_c('li', [_vm._v("\n            贵店如需使用系统在线支付功能，需通过本页面提交微信支付申请，待腾讯公司审核通过后即可使用系统在线支付功能。\n          ")]), _vm._v(" "), _c('li', [_vm._v("\n            客户微信支付的钱将直接进入贵店微信支付商户内（腾讯公司提供），提现时间为 T+1，即下一个工作日自动提现到贵司银行账号。\n          ")]), _vm._v(" "), _c('li', [_vm._v("\n            特约商户号：当申请单状态为（已完成）才返回。\n          ")]), _vm._v(" "), _c('li', [_vm._v("\n            业务申请编号：若申请单被驳回，可填写相同的“业务申请编号”，即可覆盖修改原申请单信息。\n          ")]), _vm._v(" "), _c('li', [_vm._v("超级管理员签约链接：使用微信扫码进行签约操作。")]), _vm._v(" "), _c('li', [_vm._v("状态说明：想要查看最新状态需手动点击状态刷新\n            "), _c('ul', {
    staticClass: "item"
  }, [_c('li', [_vm._v("\n                申请错误：提交申请发生错误导致，请尝试重新提交。\n              ")]), _vm._v(" "), _c('li', [_vm._v("\n                审核中：申请单正在审核中，超级管理员用微信打开“签约链接”，完成绑定微信号后，申请单进度将通过微信公众号通知超级管理员，引导完成后续步骤。\n              ")]), _vm._v(" "), _c('li', [_vm._v("\n                已驳回：请按照驳回原因修改申请资料，超级管理员用微信打开“签约链接”，完成绑定微信号，后续申请单进度将通过微信公众号通知超级管理员。\n              ")]), _vm._v(" "), _c('li', [_vm._v("\n                待账户验证：请超级管理员使用微信打开返回的“签约链接”，根据页面指引完成账户验证。\n              ")]), _vm._v(" "), _c('li', [_vm._v("\n                待签约：请超级管理员使用微信打开返回的“签约链接”，根据页面指引完成签约。\n              ")]), _vm._v(" "), _c('li', [_vm._v("\n                开通权限中：系统开通相关权限中，请耐心等待。\n              ")]), _vm._v(" "), _c('li', [_vm._v("\n                已完成：商户入驻申请已完成。\n              ")]), _vm._v(" "), _c('li', [_vm._v("\n                已作废：申请单已被撤销。\n              ")]), _vm._v(" "), _c('li', [_vm._v("\n                草稿：保存的草稿。\n              ")])])]), _vm._v(" "), _c('li', [_vm._v("操作说明：\n            "), _c('ul', {
    staticClass: "item"
  }, [_c('li', [_vm._v("状态为：草稿、申请错误、已驳回可进行编辑重新提交")]), _vm._v(" "), _c('li', [_vm._v("状态为：草稿、申请错误、已驳回、已作废、已完成可进行删除")])])])])])
}]}

/***/ }),

/***/ 2295:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "more-tools"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "more-tools",
      "page": "ai-mach-locker"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('page-header', {
    attrs: {
      "menu-list": _vm.menuList,
      "include-back": true
    }
  }), _vm._v(" "), _c('section', [(_vm.machLockerOptPermit || _vm.editable) ? _c('div', {
    staticClass: "tbl-header"
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.$router.push('/ai-mach-locker-detail')
      }
    }
  }, [_vm._v("租柜详细")]), _vm._v(" "), (_vm.editable) ? _c('i-button', {
    staticStyle: {
      "margin-left": "6px"
    },
    attrs: {
      "icon": "plus"
    },
    on: {
      "click": function($event) {
        return _vm.openNewAiMach(9)
      }
    }
  }, [_vm._v("添加设备")]) : _vm._e()], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_c('tr', [_c('th', {
    attrs: {
      "width": "120"
    }
  }, [_vm._v("设备编号")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "200"
    }
  }, [_vm._v("名称")]), _vm._v(" "), _c('th', [_vm._v("租柜过期扣费设置")]), _vm._v(" "), _c('th', [_vm._v("备注")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "160"
    }
  }, [_vm._v("更新时间")]), _vm._v(" "), (_vm.editable) ? _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("操作")]) : _vm._e()]), _vm._v(" "), _vm._l((_vm.aiMachList), function(m, idx) {
    return (m.machType === 9) ? _c('tr', [_c('td', [_c('b', {
      staticClass: "big"
    }, [_vm._v(_vm._s(m.machNo))])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(m.machName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(m.lockerFeeConfDesc))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(m.remark))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(m.updateTime))]), _vm._v(" "), (_vm.editable) ? _c('td', [_c('ul', {
      staticClass: "opt-list"
    }, [_c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.editAiMach(idx)
        }
      }
    }, [_vm._v("编辑")])]), _vm._v(" "), _c('li', [_c('a', {
      attrs: {
        "title": "删除"
      },
      on: {
        "click": function($event) {
          return _vm.delAiMach(idx)
        }
      }
    }, [_c('i', {
      staticClass: "iconfont icon-delete normal"
    })])])])]) : _vm._e()]) : _vm._e()
  })], 2), _vm._v(" "), (_vm.aiMachList && !_vm.aiMachList.length) ? _c('div', {
    staticClass: "none p15"
  }, [_vm._v("暂无数据")]) : _vm._e()])])], 1), _vm._v(" "), _c('Modal', {
    attrs: {
      "title": "智能租柜配置",
      "width": "850",
      "styles": {
        'top': '10px'
      },
      "closable": true,
      "mask-closable": false
    },
    model: {
      value: (_vm.aiMachDlg),
      callback: function($$v) {
        _vm.aiMachDlg = $$v
      },
      expression: "aiMachDlg"
    }
  }, [(_vm.editable && _vm.aiMach.machId) ? _c('div', {
    staticClass: "warning"
  }, [_c('i', {
    staticClass: "iconfont icon-alert"
  }), _vm._v("\n\t\t\t\t修改【设备编号】会立即影响到租柜使用，请慎重修改！\n      ")]) : _vm._e(), _vm._v(" "), (_vm.aiMachDlg && _vm.editable) ? _c('i-form', {
    ref: "aiMach",
    staticClass: "myform",
    staticStyle: {
      "width": "600px",
      "margin-top": "10px"
    },
    attrs: {
      "model": _vm.aiMach,
      "rules": _vm.aiMachRule,
      "label-width": 120
    }
  }, [_c('form-item', {
    attrs: {
      "prop": "machName",
      "label": "名称"
    }
  }, [_c('i-input', {
    staticClass: "input",
    attrs: {
      "type": "text",
      "placeholder": "请设置设备名称，可随意设置，仅作为系统助记用"
    },
    model: {
      value: (_vm.aiMach.machName),
      callback: function($$v) {
        _vm.$set(_vm.aiMach, "machName", $$v)
      },
      expression: "aiMach.machName"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "machNo",
      "label": "设备编号"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "text",
      "placeholder": "请正确输入设备上的编号"
    },
    model: {
      value: (_vm.aiMach.machNo),
      callback: function($$v) {
        _vm.$set(_vm.aiMach, "machNo", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "aiMach.machNo"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "lockerFeeConf",
      "label": "过期扣费设置"
    }
  }, [_c('help', {
    attrs: {
      "title": "查看详细说明"
    }
  }, [_vm._v("\n\t\t\t\t\t\t设置此扣费方案后，当会员使用的临时柜过期时，会员需在线支付扣费金额后才可开柜。\n\t\t\t\t\t\t"), _c('p'), _vm._v("\n\t\t\t\t\t\t例如，设置过期 1 天扣费 1 元，过期 2 天扣费 2 元，过期 3 天扣费 3 元。\n\t\t\t\t\t\t"), _c('br'), _vm._v("如果会员 2020-12-1 使用租柜，在 2020-12-2 开柜或还柜，则视为过期 1 天，需要支付 1 元才能继续使用；如果在 2020-12-5 才开柜或还柜，则视为过期 4 天，\n\t\t\t\t\t\t按照配置中的过期 3 天扣费 3 元。\n\t\t\t\t\t")]), _vm._v(" "), _c('div', {
    staticClass: "mytbl locker-fee-conf"
  }, [_c('table', [_c('tr', [_c('th', {
    attrs: {
      "width": "50"
    }
  }, [_vm._v("过期天数")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "50"
    }
  }, [_vm._v("扣费金额（元）")])]), _vm._v(" "), _vm._l((_vm.lockerFeeList), function(items) {
    return _c('tr', [_c('td', [_c('input-int', {
      attrs: {
        "min": "1"
      },
      model: {
        value: (items[0]),
        callback: function($$v) {
          _vm.$set(items, 0, $$v)
        },
        expression: "items[0]"
      }
    })], 1), _vm._v(" "), _c('td', [_c('input-num', {
      attrs: {
        "min": "0.01"
      },
      model: {
        value: (items[1]),
        callback: function($$v) {
          _vm.$set(items, 1, $$v)
        },
        expression: "items[1]"
      }
    })], 1)])
  })], 2), _vm._v(" "), _c('p', {
    attrs: {
      "align": "center"
    }
  }, [_c('i-button', {
    staticStyle: {
      "width": "100%"
    },
    on: {
      "click": _vm.appendLockerFeeConf
    }
  }, [_c('i', {
    staticClass: "iconfont icon-plus small"
  }), _vm._v(" 追加配置")])], 1)])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "label": "会员使用条件"
    }
  }, [_c('checkbox', {
    model: {
      value: (_vm.memberLimit.etryCheckin),
      callback: function($$v) {
        _vm.$set(_vm.memberLimit, "etryCheckin", $$v)
      },
      expression: "memberLimit.etryCheckin"
    }
  }, [_vm._v("当日有未签出的入场签到")]), _vm._v(" "), _c('checkbox', {
    model: {
      value: (_vm.memberLimit.gl),
      callback: function($$v) {
        _vm.$set(_vm.memberLimit, "gl", $$v)
      },
      expression: "memberLimit.gl"
    }
  }, [_vm._v("当日有团课")]), _vm._v(" "), _c('checkbox', {
    model: {
      value: (_vm.memberLimit.pl),
      callback: function($$v) {
        _vm.$set(_vm.memberLimit, "pl", $$v)
      },
      expression: "memberLimit.pl"
    }
  }, [_vm._v("当日有私教课")]), _vm._v(" "), _c('help', {
    attrs: {
      "title": "必读提示"
    }
  }, [_vm._v("\n\t\t\t\t\t\t只要会员符合勾选项之一即可使用。\n\t\t\t\t\t\t例如，勾选“当日有团课”和“当日有私教课”，表示会员当日有团课或私教课，都可使用租柜；否则，不可使用。\n\t\t\t\t\t\t"), _c('p', [_vm._v("如果都不勾选，表示不限制，即只要是会员都可使用租柜。")]), _vm._v(" "), _c('p', [_vm._v("如果一个会员需使用多个租柜，则需要当日有多人次的未签出的入场签到。")])])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "remark",
      "label": "备注"
    }
  }, [_c('i-input', {
    staticClass: "input",
    attrs: {
      "type": "textarea",
      "rows": 3
    },
    model: {
      value: (_vm.aiMach.remark),
      callback: function($$v) {
        _vm.$set(_vm.aiMach, "remark", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "aiMach.remark"
    }
  })], 1)], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "form-submit",
    staticStyle: {
      "margin-bottom": "-20px",
      "padding-left": "120px"
    }
  }, [(_vm.editable) ? _c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.submitAiMach()
      }
    }
  }, [_vm._v("提交")]) : _vm._e(), _vm._v(" "), _c('i-button', {
    attrs: {
      "type": "ghost"
    },
    on: {
      "click": function($event) {
        _vm.aiMachDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2299:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "more-tools"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "more-tools",
      "page": "locker"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [(!_vm.editable && !_vm.viewPermit) ? _c('section', {
    staticClass: "warning"
  }, [_vm._v("您无【租柜管理】和【租柜查看】权限")]) : _vm._e(), _vm._v(" "), (_vm.editable || _vm.viewPermit) ? _c('section', [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit l"
  }, [_vm._v("租柜区域")]), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [(_vm.editable) ? _c('i-button', {
    attrs: {
      "icon": "plus",
      "type": "primary",
      "size": "small"
    },
    on: {
      "click": function($event) {
        return _vm.openLockerAreaDlg()
      }
    }
  }, [_vm._v("添加租户区域")]) : _vm._e()], 1)]), _vm._v(" "), (!_vm.lockerAreaList || _vm.lockerAreaList.length === 0) ? _c('div', {
    staticClass: "none"
  }, [_vm._v("\n\t\t\t\t尚未添加租柜区域\n\t\t\t")]) : _vm._e(), _vm._v(" "), _c('ul', {
    staticClass: "area-list"
  }, _vm._l((_vm.lockerAreaList), function(la, idx) {
    return _c('li', {
      staticClass: "item"
    }, [_c('div', {
      staticClass: "area-name"
    }, [_vm._v(_vm._s(la.areaName))]), _vm._v(" "), _c('div', {
      staticClass: "detail",
      on: {
        "click": function($event) {
          return _vm.viewLockerList(idx)
        }
      }
    }, [_vm._v("\n\t\t\t\t\t\t\t共有 "), (la.lockerNum) ? _c('b', [_vm._v(_vm._s(la.lockerNum ? la.lockerNum : 0))]) : _c('span', {
      staticClass: "gray"
    }, [_vm._v("0")]), _vm._v(" 个租柜\n\t\t\t\t\t\t\t"), _c('div', {
      staticClass: "spt"
    }), _vm._v("\n\t\t\t\t\t\t\t有 "), (la.usableLockerNum) ? _c('b', {
      staticClass: "usable"
    }, [_vm._v(_vm._s(la.usableLockerNum))]) : _c('span', {
      staticClass: "gray"
    }, [_vm._v("0")]), _vm._v(" 个租柜可用\n\t\t\t\t\t")]), _vm._v(" "), _c('div', {
      staticClass: "opt"
    }, [_c('ul', {
      staticClass: "opt-list"
    }, [(_vm.editable) ? _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.openLockerAreaDlgForEdit(idx)
        }
      }
    }, [_vm._v("编辑")]), _vm._v(" "), _c('span', {
      staticClass: "spt"
    }, [_vm._v("/")]), _vm._v(" "), _c('a', {
      on: {
        "click": function($event) {
          return _vm.deleteLockerArea(idx)
        }
      }
    }, [_vm._v("删除")])]) : _vm._e(), _vm._v(" "), (_vm.editable) ? _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.openLockerCreateDlg(idx)
        }
      }
    }, [_c('i', {
      staticClass: "iconfont icon-plus"
    }), _vm._v(" 添加租柜")])]) : _vm._e()])])])
  }), 0)]) : _vm._e(), _vm._v(" "), (_vm.editable || _vm.viewPermit) ? _c('section', [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit l"
  }, [_vm._v("租柜租用")]), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [(_vm.editable) ? [_c('i-button', {
    attrs: {
      "icon": "ios-bell-outline"
    },
    on: {
      "click": _vm.openLockerNotice
    }
  }, [_vm._v("设置提醒")]), _vm._v("  \n\t\t\t\t\t\t"), _c('i-button', {
    attrs: {
      "icon": "plus",
      "type": "primary",
      "size": "small"
    },
    on: {
      "click": _vm.openLockerHireCreateDlg
    }
  }, [_vm._v("租柜租用登记")])] : _vm._e()], 2)]), _vm._v(" "), _c('table', {
    staticClass: "query-zone"
  }, [_c('tr', [_c('td', [_c('radio-group', {
    attrs: {
      "type": "button"
    },
    on: {
      "on-change": _vm.queryByLockerHireStatus
    },
    model: {
      value: (_vm.lockerHireQuery.status),
      callback: function($$v) {
        _vm.$set(_vm.lockerHireQuery, "status", _vm._n($$v))
      },
      expression: "lockerHireQuery.status"
    }
  }, [_c('radio', {
    attrs: {
      "label": 1
    }
  }, [_vm._v("在租用（" + _vm._s(_vm.lockerHireStat.hiring) + "）")]), _vm._v(" "), _c('radio', {
    attrs: {
      "label": -1
    }
  }, [_vm._v("已过期（" + _vm._s(_vm.lockerHireStat.outdate) + "）")]), _vm._v(" "), _c('radio', {
    attrs: {
      "label": 9
    }
  }, [_vm._v("已归还（" + _vm._s(_vm.lockerHireStat.returned) + "）")])], 1), _vm._v(" \n\t\t\t\t\t")], 1), _vm._v(" "), _c('td', [_c('i-input', {
    attrs: {
      "icon": "ios-search",
      "placeholder": "根据手机号查询会员"
    },
    on: {
      "on-enter": _vm.queryLockerHireByMemberPhone,
      "on-click": _vm.queryLockerHireByMemberPhone
    },
    model: {
      value: (_vm.lockerHireQuery.memberPhoneNo),
      callback: function($$v) {
        _vm.$set(_vm.lockerHireQuery, "memberPhoneNo", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "lockerHireQuery.memberPhoneNo"
    }
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_c('tr', [_c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("会员姓名")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "120"
    }
  }, [_vm._v("会员手机号")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("租柜号")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("租柜区域")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "180"
    }
  }, [_vm._v("租用期限")]), _vm._v(" "), (_vm.lockerHireQuery.status === 1 || _vm.lockerHireQuery.status === null) ? _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("剩余天数")]) : _vm._e(), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("操作员")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("操作时间")]), _vm._v(" "), _c('th', [_vm._v("操作")])]), _vm._v(" "), _vm._l((_vm.lockerHireList), function(lh, idx) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(lh.memberName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(lh.memberPhoneNo))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(lh.lockerNo))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(lh.areaName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Util.formatDate(lh.beginDate)) + " ~ " + _vm._s(_vm.g.Util.formatDate(lh.endDate)))]), _vm._v(" "), (_vm.lockerHireQuery.status === 1 || _vm.lockerHireQuery.status === null) ? _c('td', [_vm._v(_vm._s(lh.leftDays) + " 天")]) : _vm._e(), _vm._v(" "), _c('td', [_vm._v(_vm._s(lh.createUname))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(lh.createTime))]), _vm._v(" "), _c('td', [(_vm.editable && lh.status !== 9) ? _c('ul', {
      staticClass: "opt-list"
    }, [_c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.returnLockerHire(idx)
        }
      }
    }, [_vm._v("归还")])]), _vm._v(" "), _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.openLockerHireUpdateDlg(idx)
        }
      }
    }, [_vm._v("续租")])]), _vm._v(" "), _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.deleteLockerHire(idx)
        }
      }
    }, [_vm._v("删除")])])]) : _vm._e()])])
  })], 2), _vm._v(" "), (_vm.lockerHireCount && _vm.lockerHireCount > 0) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.lockerHireCount,
      "page-size": 30,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.changePageNo
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.g.Util.isEmptyArray(_vm.lockerHireList)) ? _c('div', {
    staticClass: "none p15"
  }, [_vm._v("无租用记录")]) : _vm._e()])]) : _vm._e()]), _vm._v(" "), _c('Modal', {
    attrs: {
      "title": "租柜区域",
      "width": "500"
    },
    model: {
      value: (_vm.dlgView.lockerArea),
      callback: function($$v) {
        _vm.$set(_vm.dlgView, "lockerArea", $$v)
      },
      expression: "dlgView.lockerArea"
    }
  }, [_c('table', {
    staticClass: "tblform"
  }, [_c('tr', [_c('td', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("区域名称：")]), _c('td', [_c('i-input', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "type": "text"
    },
    model: {
      value: (_vm.lockerArea.areaName),
      callback: function($$v) {
        _vm.$set(_vm.lockerArea, "areaName", $$v)
      },
      expression: "lockerArea.areaName"
    }
  })], 1)]), _vm._v(" "), _c('tr', [_c('td'), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "submit"
  }, [_c('i-button', {
    staticClass: "primary",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.saveLockerArea
    }
  }, [_vm._v("提交")])], 1)])])]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })]), _vm._v(" "), _c('Modal', {
    attrs: {
      "title": '添加租柜 - ' + _vm.selectAreaName,
      "width": "500"
    },
    model: {
      value: (_vm.dlgView.lockerCreate),
      callback: function($$v) {
        _vm.$set(_vm.dlgView, "lockerCreate", $$v)
      },
      expression: "dlgView.lockerCreate"
    }
  }, [_c('ul', {
    staticClass: "locker-add"
  }, _vm._l((_vm.newLockerNoList), function(val, idx) {
    return _c('li', [_c('i-input', {
      model: {
        value: (_vm.newLockerNoList[idx]),
        callback: function($$v) {
          _vm.$set(_vm.newLockerNoList, idx, (typeof $$v === 'string' ? $$v.trim() : $$v))
        },
        expression: "newLockerNoList[idx]"
      }
    })], 1)
  }), 0), _vm._v(" "), _c('div', {
    staticClass: "form-submit"
  }, [_c('table', {
    attrs: {
      "width": "100%"
    }
  }, [_c('tr', [_c('td', [_c('i-button', {
    attrs: {
      "type": "text"
    },
    on: {
      "click": _vm.genLockerNos
    }
  }, [_vm._v("批量生成租柜号")])], 1), _vm._v(" "), _c('td', {
    attrs: {
      "align": "right"
    }
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.createLocker
    }
  }, [_vm._v("提交")])], 1)])])]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })]), _vm._v(" "), _c('Modal', {
    attrs: {
      "title": _vm.selectAreaName + ' - 租柜详细',
      "width": "700"
    },
    on: {
      "on-cancel": _vm.closeLockerEditDlg
    },
    model: {
      value: (_vm.dlgView.lockerList),
      callback: function($$v) {
        _vm.$set(_vm.dlgView, "lockerList", $$v)
      },
      expression: "dlgView.lockerList"
    }
  }, [(_vm.editable) ? _c('div', {
    staticClass: "locker-opt"
  }, [_c('table', [_c('tr', [_c('td', [_c('a', {
    on: {
      "click": _vm.handleEditLocker
    }
  }, [_vm._v("编辑")]), _vm._v(" "), (_vm.editLockerIdx !== null) ? _c('span', {
    staticClass: "l10"
  }, [_c('i-input', {
    staticClass: "input-s",
    attrs: {
      "size": "small"
    },
    model: {
      value: (_vm.editLockerNo),
      callback: function($$v) {
        _vm.editLockerNo = $$v
      },
      expression: "editLockerNo"
    }
  }), _vm._v(" "), _c('i-button', {
    attrs: {
      "size": "small"
    },
    on: {
      "click": _vm.updateLocker
    }
  }, [_vm._v("确定")])], 1) : _vm._e()]), _vm._v(" "), _c('td', [_c('span', {
    staticClass: "spt"
  }, [_vm._v(" |")]), _vm._v(" "), _c('a', {
    on: {
      "click": _vm.delLocker
    }
  }, [_vm._v("删除")])])])])]) : _vm._e(), _vm._v(" "), _c('ul', {
    staticClass: "locker-list"
  }, _vm._l((_vm.lockerList), function(l, idx) {
    return _c('li', {
      class: {
        on: _vm.selectLockerIdx === idx
      },
      on: {
        "click": function($event) {
          return _vm.selectLocker(idx)
        }
      }
    }, [_vm._v("\n\t\t\t\t" + _vm._s(l.lockerNo) + "\n\t\t\t")])
  }), 0), _vm._v(" "), _c('div', {
    staticClass: "center",
    staticStyle: {
      "margin": "20px 0 -10px 0"
    }
  }, [_c('i-button', {
    on: {
      "click": _vm.closeLockerEditDlg
    }
  }, [_vm._v("关闭")])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })]), _vm._v(" "), _c('Modal', {
    attrs: {
      "title": "租柜出租登记",
      "width": "700",
      "styles": {
        'top': '10px'
      }
    },
    model: {
      value: (_vm.dlgView.lockeHireCreate),
      callback: function($$v) {
        _vm.$set(_vm.dlgView, "lockeHireCreate", $$v)
      },
      expression: "dlgView.lockeHireCreate"
    }
  }, [(_vm.dlgView.lockeHireCreate) ? _c('table', {
    staticClass: "tblform locker-hire"
  }, [_c('tr', [_c('th', {
    staticClass: "required",
    attrs: {
      "width": "50"
    }
  }, [_vm._v("会员")]), _vm._v(" "), _c('td', [_c('input-int', {
    staticClass: "input-s",
    attrs: {
      "placeholder": "请输入会员手机号"
    },
    on: {
      "blur": _vm.queryMember
    },
    model: {
      value: (_vm.member.phoneNo),
      callback: function($$v) {
        _vm.$set(_vm.member, "phoneNo", $$v)
      },
      expression: "member.phoneNo"
    }
  }), _vm._v(" "), (_vm.member && _vm.member.memberId) ? _c('div', {
    staticClass: "-memb-info"
  }, [_c('i', {
    staticClass: "iconfont icon-check big"
  }), _vm._v(" "), (_vm.member.name) ? _c('span', [_vm._v(_vm._s(_vm.member.name))]) : _vm._e(), _vm._v(" "), (_vm.member.sex !== null) ? _c('span', {
    staticClass: "gray"
  }, [_vm._v("  " + _vm._s(_vm.g.Dict.SexDesc[_vm.member.sex]))]) : _vm._e()]) : _vm._e()], 1)]), _vm._v(" "), _c('tr', [_c('th', {
    staticClass: "required"
  }, [_vm._v("租用期限")]), _vm._v(" "), _c('td', [_c('DatePicker', {
    staticClass: "input-s",
    attrs: {
      "type": "date",
      "placeholder": "开始日期"
    },
    model: {
      value: (_vm.lockerHire.beginDate),
      callback: function($$v) {
        _vm.$set(_vm.lockerHire, "beginDate", $$v)
      },
      expression: "lockerHire.beginDate"
    }
  }), _vm._v("\n\t\t\t\t\t~\n\t\t\t\t\t"), _c('DatePicker', {
    staticClass: "input-s",
    attrs: {
      "type": "date",
      "placeholder": "结束日期"
    },
    model: {
      value: (_vm.lockerHire.endDate),
      callback: function($$v) {
        _vm.$set(_vm.lockerHire, "endDate", $$v)
      },
      expression: "lockerHire.endDate"
    }
  }), _vm._v(" "), (_vm.lockerHire.beginDate && _vm.lockerHire.endDate) ? _c('span', {
    staticClass: "l10 gray"
  }, [_vm._v(_vm._s(_vm.lockerHire.endDate.subtract(_vm.lockerHire.beginDate)) + " 天")]) : _vm._e()], 1)]), _vm._v(" "), _c('tr', [_c('th', {
    staticClass: "required",
    attrs: {
      "valign": "top"
    }
  }, [_vm._v("租柜选择")]), _vm._v(" "), _c('td', [_c('i-select', {
    staticStyle: {
      "width": "280px"
    },
    attrs: {
      "filterable": ""
    },
    on: {
      "on-change": _vm.changeLockerArea
    },
    model: {
      value: (_vm.lockerHire.laId),
      callback: function($$v) {
        _vm.$set(_vm.lockerHire, "laId", $$v)
      },
      expression: "lockerHire.laId"
    }
  }, _vm._l((_vm.lockerAreaList), function(a) {
    return (a.usableLockerNum > 0) ? _c('i-option', {
      key: a.laId,
      attrs: {
        "value": a.laId
      }
    }, [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(a.areaName) + " (共有" + _vm._s(a.lockerNum) + "个租柜，还有" + _vm._s(a.usableLockerNum) + " 个租柜)\n\t\t\t\t\t\t")]) : _vm._e()
  }), 1), _vm._v(" "), (_vm.lockerList.length > 0) ? _c('div', {
    staticClass: "locker-list"
  }, [_c('ul', _vm._l((_vm.lockerList), function(l, idx) {
    return _c('li', {
      class: {
        'disable': l.status === 1,
        'on': _vm.selectLockerIdx === idx
      },
      on: {
        "click": function($event) {
          return _vm.selectLockerForHire(idx)
        }
      }
    }, [_vm._v("\n\t\t\t\t\t\t\t\t" + _vm._s(l.lockerNo) + "\n\t\t\t\t\t\t\t")])
  }), 0)]) : _vm._e()], 1)]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("租柜费用")]), _vm._v(" "), _c('td', [_c('input-num', {
    model: {
      value: (_vm.lockerHire.fee),
      callback: function($$v) {
        _vm.$set(_vm.lockerHire, "fee", $$v)
      },
      expression: "lockerHire.fee"
    }
  }), _vm._v("  元\n\t\t\t\t\t"), _c('span', {
    staticClass: "orange l10"
  }, [_vm._v("\n\t\t\t\t\t\t（此费用将自动记账为当日应收款）\n\t\t\t\t\t")])], 1)]), _vm._v(" "), _c('tr', [_c('th', {
    attrs: {
      "valign": "top"
    }
  }, [_vm._v("支付方式")]), _vm._v(" "), _c('td', [_c('radio-group', {
    model: {
      value: (_vm.lockerHire.paymentChannel),
      callback: function($$v) {
        _vm.$set(_vm.lockerHire, "paymentChannel", $$v)
      },
      expression: "lockerHire.paymentChannel"
    }
  }, [_c('radio', {
    key: 0,
    attrs: {
      "label": 0
    }
  }, [_vm._v("储值卡")]), _vm._v(" "), _vm._l((_vm.g.Dict.CardPaymentChannel), function(name, key) {
    return _c('radio', {
      key: parseInt(key),
      attrs: {
        "label": key
      }
    }, [_vm._v(_vm._s(name))])
  })], 2), _vm._v(" "), (_vm.lockerHire.paymentChannel === 0) ? _c('div', {
    staticClass: "member-cards"
  }, [(!_vm.member || !_vm.member.name) ? _c('div', {
    staticClass: "err"
  }, [_vm._v("请先设置租用会员")]) : (!_vm.memberCards || !_vm.memberCards.length) ? _c('div', {
    staticClass: "err"
  }, [_vm._v("该会员无储值卡")]) : _c('div', {
    staticClass: "card-list"
  }, [_c('radio-group', {
    attrs: {
      "vertical": ""
    },
    model: {
      value: (_vm.selectMcId),
      callback: function($$v) {
        _vm.selectMcId = $$v
      },
      expression: "selectMcId"
    }
  }, _vm._l((_vm.memberCards), function(mc) {
    return _c('radio', {
      key: mc.mcId,
      attrs: {
        "label": mc.mcId,
        "disabled": mc.currentAmount <= 0 || (mc.endDate && Date.new(mc.endDate).compareDatePart(new Date()) < 0)
      }
    }, [_c('b', [_vm._v(_vm._s(mc.cardName))]), _vm._v("： 余额"), _c('span', [_vm._v("￥" + _vm._s(mc.currentAmount))]), _vm._v(" "), (mc.beginDate) ? _c('span', [_vm._v("，使用期限 " + _vm._s(_vm.g.Util.formatDate(mc.beginDate)) + " ~ " + _vm._s(_vm.g.Util.formatDate(mc.endDate)))]) : _vm._e()])
  }), 1)], 1)]) : _vm._e()], 1)])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "form-submit center"
  }, [_c('i-button', {
    staticClass: "primary",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.createLockerHire
    }
  }, [_vm._v("提交")]), _vm._v("\n\t\t\t \n\t\t\t"), (_vm.member && _vm.member.memberId && _vm.lockerHire.fee && _vm.lockerHire.beginDate && _vm.lockerHire.endDate) ? [_c('i-button', {
    on: {
      "click": function($event) {
        return _vm.printLockerHire('hireLokcerBill')
      }
    }
  }, [_vm._v("打印小票")])] : _vm._e()], 2), _vm._v(" "), (_vm.dlgView.lockeHireCreate) ? _c('div', {
    staticStyle: {
      "display": "none"
    },
    attrs: {
      "id": "hireLokcerBill"
    }
  }, [_c('table', [_c('tr', [_c('td', {
    attrs: {
      "colspan": "2",
      "align": "center"
    }
  }, [_vm._v("【租柜出租小票】")])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("会员姓名")]), _c('td', [(_vm.member.name) ? _c('span', [_vm._v(_vm._s(_vm.member.name))]) : _vm._e()])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("租用期限")]), _vm._v(" "), _c('td', [(_vm.lockerHire.beginDate && _vm.lockerHire.endDate) ? [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.g.Util.formatDate(_vm.lockerHire.beginDate)) + "\n\t\t\t\t\t\t\t"), _c('br'), _vm._v("至"), _c('br'), _vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.g.Util.formatDate(_vm.lockerHire.endDate)) + "\n\t\t\t\t\t\t")] : _vm._e()], 2)]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("所选租柜")]), _vm._v(" "), _c('td', [(_vm.lockerList && _vm.lockerList.length && !_vm.g.Util.isEmpty(_vm.selectLockerIdx)) ? [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.selectLockerAreaName) + " / " + _vm._s(_vm.lockerList[_vm.selectLockerIdx].lockerNo) + "\n\t\t\t\t\t\t")] : _vm._e()], 2)]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("租柜费用")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.lockerHire.fee) + " 元")])])])]) : _vm._e(), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })]), _vm._v(" "), _c('Modal', {
    attrs: {
      "title": "租柜续租",
      "width": "600"
    },
    model: {
      value: (_vm.dlgView.lockeHireUpdate),
      callback: function($$v) {
        _vm.$set(_vm.dlgView, "lockeHireUpdate", $$v)
      },
      expression: "dlgView.lockeHireUpdate"
    }
  }, [(_vm.dlgView.lockeHireUpdate) ? _c('table', {
    staticClass: "tblform locker-hire"
  }, [_c('tr', [_c('th', {
    attrs: {
      "width": "50"
    }
  }, [_vm._v("会员")]), _vm._v(" "), _c('td', [_vm._v("\n\t\t\t\t\t" + _vm._s(_vm.lockerHire.memberName) + "\n\t\t\t\t")])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("租柜")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.lockerHire.areaName) + " - " + _vm._s(_vm.lockerHire.lockerNo))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("租用期限")]), _vm._v(" "), _c('td', [_c('DatePicker', {
    staticClass: "input-s",
    attrs: {
      "type": "date",
      "disabled": "",
      "placeholder": "开始日期"
    },
    model: {
      value: (_vm.lockerHire.beginDate),
      callback: function($$v) {
        _vm.$set(_vm.lockerHire, "beginDate", $$v)
      },
      expression: "lockerHire.beginDate"
    }
  }), _vm._v("\n\t\t\t\t\t~\n\t\t\t\t\t"), _c('DatePicker', {
    staticClass: "input-s",
    attrs: {
      "type": "date",
      "placeholder": "结束日期-"
    },
    model: {
      value: (_vm.lockerHire.endDate),
      callback: function($$v) {
        _vm.$set(_vm.lockerHire, "endDate", $$v)
      },
      expression: "lockerHire.endDate"
    }
  })], 1)]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("租柜费用")]), _vm._v(" "), _c('td', [_c('input-num', {
    model: {
      value: (_vm.lockerHire.fee),
      callback: function($$v) {
        _vm.$set(_vm.lockerHire, "fee", $$v)
      },
      expression: "lockerHire.fee"
    }
  }), _vm._v("  元\n\t\t\t\t\t"), _c('span', {
    staticClass: "orange l10"
  }, [_vm._v("\n\t\t\t\t\t\t（此费用将自动记账为当日应收款）\n\t\t\t\t\t")])], 1)]), _vm._v(" "), _c('tr', [_c('th', {
    attrs: {
      "valign": "top"
    }
  }, [_vm._v("支付方式")]), _vm._v(" "), _c('td', [_c('radio-group', {
    model: {
      value: (_vm.lockerHire.paymentChannel),
      callback: function($$v) {
        _vm.$set(_vm.lockerHire, "paymentChannel", $$v)
      },
      expression: "lockerHire.paymentChannel"
    }
  }, [_c('radio', {
    key: 0,
    attrs: {
      "label": 0
    }
  }, [_vm._v("储值卡")]), _vm._v(" "), _vm._l((_vm.g.Dict.CardPaymentChannel), function(name, key) {
    return _c('radio', {
      key: parseInt(key),
      attrs: {
        "label": key
      }
    }, [_vm._v(_vm._s(name))])
  })], 2), _vm._v(" "), (_vm.lockerHire.paymentChannel === 0) ? _c('div', {
    staticClass: "member-cards"
  }, [(!_vm.member || !_vm.member.name) ? _c('div', {
    staticClass: "err"
  }, [_vm._v("请先设置租用会员")]) : (!_vm.memberCards || !_vm.memberCards.length) ? _c('div', {
    staticClass: "err"
  }, [_vm._v("该会员无储值卡")]) : _c('div', {
    staticClass: "card-list"
  }, [_c('radio-group', {
    attrs: {
      "vertical": ""
    },
    model: {
      value: (_vm.selectMcId),
      callback: function($$v) {
        _vm.selectMcId = $$v
      },
      expression: "selectMcId"
    }
  }, _vm._l((_vm.memberCards), function(mc) {
    return _c('radio', {
      key: mc.mcId,
      attrs: {
        "label": mc.mcId,
        "disabled": mc.currentAmount <= 0 || (mc.endDate && Date.new(mc.endDate).compareDatePart(new Date()) < 0)
      }
    }, [_c('b', [_vm._v(_vm._s(mc.cardName))]), _vm._v("： 余额"), _c('span', [_vm._v("￥" + _vm._s(mc.currentAmount))]), _vm._v(" "), (mc.beginDate) ? _c('span', [_vm._v("，使用期限 " + _vm._s(_vm.g.Util.formatDate(mc.beginDate)) + " ~ " + _vm._s(_vm.g.Util.formatDate(mc.endDate)))]) : _vm._e()])
  }), 1)], 1)]) : _vm._e()], 1)])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "form-submit center"
  }, [_c('i-button', {
    staticClass: "primary",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.updateLockerHire
    }
  }, [_vm._v("提交")])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })]), _vm._v(" "), _c('Modal', {
    attrs: {
      "title": "租柜提醒设置",
      "width": "550"
    },
    model: {
      value: (_vm.dlgView.noticeConf),
      callback: function($$v) {
        _vm.$set(_vm.dlgView, "noticeConf", $$v)
      },
      expression: "dlgView.noticeConf"
    }
  }, [_c('div', {
    staticClass: "notice-conf"
  }, [_c('label', [_vm._v("设置短信提醒：")]), _vm._v(" "), _c('i-switch', {
    attrs: {
      "size": "large"
    },
    model: {
      value: (_vm.noticeArg.smsEnable),
      callback: function($$v) {
        _vm.$set(_vm.noticeArg, "smsEnable", $$v)
      },
      expression: "noticeArg.smsEnable"
    }
  }, [_c('span', {
    attrs: {
      "slot": "open"
    },
    slot: "open"
  }, [_vm._v("开")]), _vm._v(" "), _c('span', {
    attrs: {
      "slot": "close"
    },
    slot: "close"
  }, [_vm._v("关")])]), _vm._v(" "), (_vm.noticeArg.smsEnable) ? _c('div', {
    staticClass: "days-conf"
  }, [_c('label', [_vm._v("需提醒的剩余天数：")]), _vm._v(" "), _c('input-int', {
    staticClass: "input-s",
    model: {
      value: (_vm.noticeArg.days[0]),
      callback: function($$v) {
        _vm.$set(_vm.noticeArg.days, 0, $$v)
      },
      expression: "noticeArg.days[0]"
    }
  }), _vm._v(" 天  \n\t\t\t\t"), _c('input-int', {
    staticClass: "input-s",
    model: {
      value: (_vm.noticeArg.days[1]),
      callback: function($$v) {
        _vm.$set(_vm.noticeArg.days, 1, $$v)
      },
      expression: "noticeArg.days[1]"
    }
  }), _vm._v(" 天  \n\t\t\t\t"), _c('input-int', {
    staticClass: "input-s",
    model: {
      value: (_vm.noticeArg.days[2]),
      callback: function($$v) {
        _vm.$set(_vm.noticeArg.days, 2, $$v)
      },
      expression: "noticeArg.days[2]"
    }
  }), _vm._v(" 天\n\t\t\t")], 1) : _vm._e(), _vm._v(" "), (_vm.noticeArg.smsEnable) ? _c('div', {
    staticClass: "tips"
  }, [_c('span', {
    staticClass: "orange"
  }, [_vm._v("备注： ")]), _vm._v("设置提醒后，系统会每天8:00检查并提醒会员")]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "submit"
  }, [_c('i-button', {
    staticClass: "primary-btn",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.saveLockerNotice
    }
  }, [_vm._v("提交")]), _vm._v(" "), _c('i-button', {
    on: {
      "click": function($event) {
        _vm.dlgView.noticeConf = false
      }
    }
  }, [_vm._v("关闭")])], 1)], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2303:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ai-mach-body-test"
  }, [_c('shop-nav', {
    attrs: {
      "menu": "more-tools"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "more-tools",
      "page": "ai-mach-conf"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('page-header', {
    attrs: {
      "menu-list": _vm.menuList,
      "include-back": true
    }
  }), _vm._v(" "), _c('section', [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("体测仪")]), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [(_vm.editable) ? _c('i-button', {
    staticStyle: {
      "margin-left": "6px"
    },
    attrs: {
      "icon": "plus"
    },
    on: {
      "click": function($event) {
        return _vm.openNewAiMach()
      }
    }
  }, [_vm._v("添加设备")]) : _vm._e()], 1)]), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_vm._m(0), _vm._v(" "), _vm._l((_vm.aiMachList), function(m, idx) {
    return _c('tr', [_c('td', [_c('b', {
      staticClass: "big"
    }, [_vm._v(_vm._s(m.machNo))])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(m.machName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(m.updateTime))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(m.remark))]), _vm._v(" "), _c('td', [(_vm.editable) ? _c('ul', {
      staticClass: "opt-list"
    }, [_c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.editAiMach(m)
        }
      }
    }, [_vm._v("编辑")])]), _vm._v(" "), _c('li', [_c('a', {
      attrs: {
        "title": "删除"
      },
      on: {
        "click": function($event) {
          return _vm.delAiMach(idx)
        }
      }
    }, [_c('i', {
      staticClass: "iconfont icon-delete normal"
    })])])]) : _vm._e()])])
  })], 2), _vm._v(" "), (_vm.aiMachList && !_vm.aiMachList.length) ? _c('div', {
    staticClass: "none p15"
  }, [_vm._v("暂无数据")]) : _vm._e()])]), _vm._v(" "), _c('section', [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("体测数据")]), _vm._v(" "), (_vm.aiMachList && _vm.aiMachList.length) ? _c('div', {
    staticClass: "r"
  }, [_c('a', {
    staticClass: "gray",
    on: {
      "click": function($event) {
        return _vm.queryBodyTestList()
      }
    }
  }, [_c('icon', {
    attrs: {
      "type": "refresh",
      "size": "14"
    }
  }), _vm._v(" 刷新\n          ")], 1), _vm._v("\n           \n          "), _c('i-select', {
    staticStyle: {
      "width": "300px"
    },
    on: {
      "on-change": _vm.changeMach
    },
    model: {
      value: (_vm.selectMachIdx),
      callback: function($$v) {
        _vm.selectMachIdx = $$v
      },
      expression: "selectMachIdx"
    }
  }, _vm._l((_vm.aiMachList), function(mach, idx) {
    return _c('i-option', {
      key: idx,
      attrs: {
        "value": idx,
        "label": mach.machNo + '（' + mach.machName + '）'
      }
    }, [_vm._v(_vm._s(mach.machNo) + "（" + _vm._s(mach.machName) + "）")])
  }), 1)], 1) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_vm._m(1), _vm._v(" "), _vm._l((_vm.bodyTestList), function(m) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(m.machNo))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(m.userName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(m.weight) + "Kg")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(m.bmi))]), _vm._v(" "), _c('td', [(m.bodyfat) ? _c('span', [_vm._v(_vm._s(m.bodyfat) + "%")]) : _c('span')]), _vm._v(" "), _c('td', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.enterDetails(m.btId)
        }
      }
    }, [_vm._v("详情")])])])
  })], 2), _vm._v(" "), (_vm.bodyTestList && !_vm.bodyTestList.length) ? _c('div', {
    staticClass: "none p15"
  }, [_vm._v("暂无数据")]) : _vm._e(), _vm._v(" "), (_vm.mbtCount && _vm.mbtCount > 30) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.mbtCount,
      "page-size": 30,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.queryBodyTestList
    }
  })], 1) : _vm._e()])])], 1), _vm._v(" "), _c('Modal', {
    attrs: {
      "title": "智能设备配置",
      "width": "850",
      "styles": {
        'top': '10px'
      },
      "closable": true,
      "mask-closable": false
    },
    model: {
      value: (_vm.aiMachDlg),
      callback: function($$v) {
        _vm.aiMachDlg = $$v
      },
      expression: "aiMachDlg"
    }
  }, [(_vm.aiMachDlg && _vm.editable) ? _c('i-form', {
    ref: "aiMach",
    staticClass: "myform",
    staticStyle: {
      "width": "600px",
      "margin-top": "10px"
    },
    attrs: {
      "model": _vm.aiMach,
      "rules": _vm.aiMachRule,
      "label-width": 120
    }
  }, [_c('form-item', {
    attrs: {
      "prop": "machName",
      "label": "名称"
    }
  }, [_c('i-input', {
    staticClass: "input",
    attrs: {
      "type": "text",
      "placeholder": "请设置设备名称，可随意设置，仅作为系统助记用"
    },
    model: {
      value: (_vm.aiMach.machName),
      callback: function($$v) {
        _vm.$set(_vm.aiMach, "machName", $$v)
      },
      expression: "aiMach.machName"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "machBrand",
      "label": "设备品牌"
    }
  }, [_c('i-select', {
    model: {
      value: (_vm.aiMach.machBrand),
      callback: function($$v) {
        _vm.$set(_vm.aiMach, "machBrand", $$v)
      },
      expression: "aiMach.machBrand"
    }
  }, [_c('i-option', {
    attrs: {
      "value": 3
    }
  }, [_vm._v("力网")])], 1)], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "machNo",
      "label": "设备编号"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "text",
      "placeholder": "请正确输入设备上的编号"
    },
    model: {
      value: (_vm.aiMach.machNo),
      callback: function($$v) {
        _vm.$set(_vm.aiMach, "machNo", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "aiMach.machNo"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "remark",
      "label": "备注"
    }
  }, [_c('i-input', {
    staticClass: "input",
    attrs: {
      "type": "textarea",
      "rows": 3
    },
    model: {
      value: (_vm.aiMach.remark),
      callback: function($$v) {
        _vm.$set(_vm.aiMach, "remark", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "aiMach.remark"
    }
  })], 1)], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "form-submit",
    staticStyle: {
      "margin-bottom": "-20px",
      "padding-left": "120px"
    }
  }, [(_vm.editable) ? _c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.submitAiMach()
      }
    }
  }, [_vm._v("提交")]) : _vm._e(), _vm._v(" "), _c('i-button', {
    attrs: {
      "type": "ghost"
    },
    on: {
      "click": function($event) {
        _vm.aiMachDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })], 1), _vm._v(" "), _c('Modal', {
    attrs: {
      "footer-hide": "",
      "title": "体测详情",
      "width": "400",
      "styles": {
        'top': '10px'
      },
      "closable": true
    },
    model: {
      value: (_vm.healthReportDlg),
      callback: function($$v) {
        _vm.healthReportDlg = $$v
      },
      expression: "healthReportDlg"
    }
  }, [(_vm.healthReportDlg) ? _c('HealthReport', {
    attrs: {
      "btId": _vm.btId
    }
  }) : _vm._e()], 1)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    attrs: {
      "width": "120"
    }
  }, [_vm._v("体测仪编号")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "200"
    }
  }, [_vm._v("名称")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "160"
    }
  }, [_vm._v("更新时间")]), _vm._v(" "), _c('th', [_vm._v("备注")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("操作")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    attrs: {
      "width": "120"
    }
  }, [_vm._v("体测仪编号")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("姓名")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "200"
    }
  }, [_vm._v("体重")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "200"
    }
  }, [_vm._v("BMI")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "200"
    }
  }, [_vm._v("体脂率")]), _vm._v(" "), _c('th', [_vm._v("操作")])])
}]}

/***/ }),

/***/ 2366:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "more-tools"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "more-tools",
      "page": "more-tools"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('div', [_c('ul', {
    staticClass: "pannel-tools"
  }, [_c('li', {
    on: {
      "click": function($event) {
        return _vm.$router.push('/online-pay-apply')
      }
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.g.Conf.IMG_LIB_URL + '/jzg-pc/online-pay.png'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "t"
  }, [_vm._v("在线支付申请")])]), _vm._v(" "), _c('li', {
    on: {
      "click": function($event) {
        return _vm.$router.push('/sms-task')
      }
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.g.Conf.IMG_LIB_URL + '/jzg-pc/sms-sends.png'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "t"
  }, [_vm._v("短信群发")])]), _vm._v(" "), _c('li', {
    on: {
      "click": function($event) {
        return _vm.$router.push('/locker')
      }
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.g.Conf.IMG_LIB_URL + '/jzg-pc/locker.png'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "t"
  }, [_vm._v("租柜管理")])]), _vm._v(" "), _c('li', {
    on: {
      "click": function($event) {
        return _vm.$router.push('/local-mach-conf')
      }
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.g.Conf.IMG_LIB_URL + '/jzg-pc/ic-mach.png'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "t"
  }, [_vm._v("签到消费机管理")])]), _vm._v(" "), _c('li', {
    on: {
      "click": function($event) {
        return _vm.$router.push('/ai-mach-conf')
      }
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.g.Conf.IMG_LIB_URL + '/jzg-pc/ai-mach.png'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "t"
  }, [_vm._v("智能设备管理")])]), _vm._v(" "), (_vm.g.data.shop.hasVenueBooking) ? _c('li', {
    on: {
      "click": function($event) {
        return _vm.$router.push('/venue-booking')
      }
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.g.Conf.IMG_LIB_URL + '/jzg-pc/ground-booking.png'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "t"
  }, [_vm._v("场地预约")])]) : _vm._e(), _vm._v(" "), _c('li', {
    on: {
      "click": function($event) {
        return _vm.$router.push('/venue-checkin')
      }
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.g.Conf.IMG_LIB_URL + '/jzg-pc/venu-checkin.png'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "t"
  }, [_vm._v("场地计时")])]), _vm._v(" "), _c('li', {
    on: {
      "click": function($event) {
        return _vm.$router.push('/mt-verify-coupon')
      }
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(2053)
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "t"
  }, [_vm._v("美团核销")])]), _vm._v(" "), _c('li', {
    on: {
      "click": function($event) {
        return _vm.$router.push('/dy-verify-coupon')
      }
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(2037)
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "t"
  }, [_vm._v("抖音核销")])])])])])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 990:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1957)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1356),
  /* template */
  __webpack_require__(2303),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-728824d2",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 991:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1860)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1357),
  /* template */
  __webpack_require__(2206),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-39cd5bd1",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 992:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1791)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1358),
  /* template */
  __webpack_require__(2134),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-138e3b5e",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 993:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1815)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1359),
  /* template */
  __webpack_require__(2160),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-20adb6ca",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 994:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1949)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1360),
  /* template */
  __webpack_require__(2295),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-6ee6f01a",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 995:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1824)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1361),
  /* template */
  __webpack_require__(2170),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-2964a040",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 996:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1886)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1362),
  /* template */
  __webpack_require__(2232),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-4ac2ae6a",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 997:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1883)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1363),
  /* template */
  __webpack_require__(2229),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-4a053c24",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 998:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1953)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1364),
  /* template */
  __webpack_require__(2299),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-712c4378",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 999:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2018)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1365),
  /* template */
  __webpack_require__(2366),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-d266ade2",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ })

});