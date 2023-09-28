webpackJsonp([19],{

/***/ 1690:
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

/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			g: window.$,
			csStaff: null
		};
	},

	created() {
		this.queryTenantCsStaff();
	},

	methods: {
		queryTenantCsStaff() {
			$.Req.service($.SvName.TENANT_CS_STAFF_QUERY, {}, ret => {
				this.csStaff = {
					name: ret.name,
					phoneNo: ret.phoneNo
				};
			});
		}
	}

});

/***/ }),

/***/ 1692:
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

/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			// 1 span 2下拉
			g: $,
			menuList: [{ title: "菜单1", type: 1, val: "首页" }, { title: "菜单2", type: 2, val: "" }, { title: "菜单3", type: 2, val: "" }, { title: "菜单4", type: 2, val: "" }, { title: "菜单5", type: 1, val: "更多" }],
			staffDefineMenuList: $.Dict.staffDefineMenuList,
			staffMobileMenusArr: []
		};
	},
	mounted() {
		this.initOptions();
	},
	methods: {
		initOptions() {
			let options = $.data.user.staffMobileMenus || "";
			if (options) {
				let arr = options.split(",");
				this.$nextTick(() => {
					this.$refs.bottomnav.resetBottomMenu(arr);
				});
				for (let i = 0; i < arr.length; i++) {
					this.menuList[i + 1].val = arr[i];
				}
			}
		},

		submitMenu() {
			let arr = this.menuList.filter(v => v.type === 2 && v.val).map(m => Number(m.val));
			let unique = [...new Set(arr)];
			let fil = arr.filter(v => v !== v);
			if (fil.length < 2 && arr.length !== unique.length) {
				alert("不可选择重复菜单");
				return;
			}

			if (fil.length === 3) {
				alert("您未设置自定义菜单，系统将按照默认菜单显示。");
			}
			const args = { mobileMenuIds: arr.join() };
			$.Req.service($.SvName.STAFF_FAV_MENU_SAVE, args, res => {
				$.Msg.success("保存成功");
				this.refreshData();
			}, true);
		},

		refreshData() {
			if ($.Util.cookie.get($.Conf.Keys.LOGIN_FLAG)) {
				$.Req.service($.SvName.INIT_DATA_LOAD, { clientType: 1 }, ret => {
					// console.log("refresh:", ret);
					if (ret.user.staffId && ret.user.memberId) {
						let loginAs = $.Util.cookie.get($.Conf.CookieKeys.LOGIN_AS);
						if (loginAs === "member") {
							ret.user.staffId = null;
							ret.user.isTenantOwner = false;
							ret.user.isShopOwner = false;
						} else {
							ret.user.memberId = null;
						}
					}
					this.$set($.data.user, "staffMobileMenus", ret.user.staffMobileMenus);
					// $.data.user.staffMobileMenus = ret.user.staffMobileMenus;
					let r = ret.user.staffMobileMenus || "";
					if (r) {
						let arr = r.split(",");
						this.$nextTick(() => {
							this.$refs.bottomnav.resetBottomMenu(arr);
						});
					}
				}, false);
			}
		}

	}
});

/***/ }),

/***/ 1706:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(763)(false);
// imports


// module
exports.push([module.i, ".logo-img[data-v-007aae83]{min-height:180px}.logo-img img[data-v-007aae83]{width:100%;max-height:200px;display:block}section .article[data-v-007aae83]{padding:15px 16px;font-size:14px;margin:0}section .article ul[data-v-007aae83]{padding-left:20px;margin-top:10px}section .article li[data-v-007aae83]{list-style-type:square;padding:3px 0}.footer[data-v-007aae83]{padding-bottom:15px;margin-bottom:0}", ""]);

// exports


/***/ }),

/***/ 1737:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(763)(false);
// imports


// module
exports.push([module.i, ".flex-center[data-v-1d482907]{display:flex;align-items:center}.submit[data-v-1d482907]{margin:25px 0 0;background-color:#dbb76b;height:44px;line-height:44px;text-align:center;color:#fff;border-radius:3px;font-size:15px}.settings[data-v-1d482907]{padding:0 16px;box-sizing:border-box}.settings .setting-item[data-v-1d482907]{background-color:#fff;padding:0 15px;height:60px;margin-top:10px;border-radius:5px}.settings .setting-item .menu-name[data-v-1d482907]{width:110px;color:#666;font-size:14px}.settings .setting-item .menu-content[data-v-1d482907]{flex:1}.settings .setting-item .menu-content>span[data-v-1d482907]{color:#333;font-size:14px;padding-left:15px}.settings .setting-item .menu-content .date-nav[data-v-1d482907]{width:100%;height:40px;background-color:#f6f6f6;position:relative}.settings .setting-item .menu-content .date-nav i[data-v-1d482907]{width:30px}.settings .setting-item .menu-content .date-nav select[data-v-1d482907]{flex:1;height:100%;position:relative;z-index:6;padding-left:15px;outline:none}.settings .setting-item .menu-content .date-nav .place[data-v-1d482907]{position:absolute;left:15px;top:50%;transform:translateY(-50%);color:#c5c5c5}.theme-pink .submit[data-v-1d482907]{background-color:#f199bc}.theme-black .settings .setting-item[data-v-1d482907]{background-color:#2c2c2c}.theme-black .settings .setting-item .menu-name[data-v-1d482907]{color:hsla(0,0%,100%,.7)}.theme-black .settings .setting-item .menu-content>span[data-v-1d482907]{color:#fff}.theme-black .settings .setting-item .menu-content .date-nav[data-v-1d482907]{background-color:#111}.theme-black .settings .setting-item .menu-content .date-nav .place[data-v-1d482907]{color:hsla(0,0%,100%,.3)}", ""]);

// exports


/***/ }),

/***/ 1935:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1706);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(764)("2a95d7b8", content, true, {});

/***/ }),

/***/ 1966:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1737);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(764)("006adbc0", content, true, {});

/***/ }),

/***/ 2242:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('page-head', {
    attrs: {
      "title": "欢迎联系我们"
    }
  }), _vm._v(" "), _c('section', [_c('div', {
    staticClass: "article theme-border-bottom"
  }, [_vm._v("\n        如果您有场馆业务问题，请咨询贵馆负责人。如果您有软硬件问题或建议，欢迎随时反馈给我们。\n        "), _c('ul', [(_vm.csStaff && _vm.csStaff.phoneNo) ? _c('li', [_vm._v("专属售后： " + _vm._s(_vm.csStaff.name) + " / "), _c('a', {
    staticClass: "theme-font-color",
    attrs: {
      "href": 'tel:' + _vm.csStaff.phoneNo
    }
  }, [_vm._v(_vm._s(_vm.csStaff.phoneNo))])]) : _vm._e(), _vm._v(" "), _c('li', [_vm._v("咨询时间： 9:00 ~ 21:00")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('li', [_vm._v("公司邮箱： support@jzongguan.com")])])]), _vm._v(" "), _c('div', {
    staticClass: "footer"
  }, [_vm._v("\n        © " + _vm._s(Date.new().getFullYear()) + " 南京强点信息技术有限公司\n      ")])]), _vm._v(" "), _c('bottom-nav')], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_vm._v("公司电话： "), _c('a', {
    staticClass: "theme-font-color",
    attrs: {
      "href": "tel:025-66045495"
    }
  }, [_vm._v("025-66045495")])])
}]}

/***/ }),

/***/ 2273:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('page-head', {
    attrs: {
      "title": "菜单栏设置"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "settings"
  }, [_vm._l((_vm.menuList), function(item, idx) {
    return _c('div', {
      key: idx,
      staticClass: "setting-item flex-center"
    }, [_c('div', {
      staticClass: "menu-name"
    }, [_vm._v("\n\t\t\t\t" + _vm._s(item.title) + "\n\t\t\t")]), _vm._v(" "), _c('div', {
      staticClass: "menu-content"
    }, [(item.type == 1) ? _c('span', [_vm._v(_vm._s(item.val))]) : _c('div', {
      staticClass: "date-nav flex-center"
    }, [_c('select', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (item.val),
        expression: "item.val"
      }],
      staticStyle: {
        "border": "0"
      },
      attrs: {
        "size": "1"
      },
      on: {
        "change": function($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
            return o.selected
          }).map(function(o) {
            var val = "_value" in o ? o._value : o.value;
            return val
          });
          _vm.$set(item, "val", $event.target.multiple ? $$selectedVal : $$selectedVal[0])
        }
      }
    }, _vm._l((_vm.staffDefineMenuList), function(c, i) {
      return _c('option', {
        key: i,
        domProps: {
          "value": c.id
        }
      }, [_vm._v(_vm._s(c.name))])
    }), 0), _vm._v(" "), (!item.val && (typeof item.val != 'undefined')) ? _c('span', {
      staticClass: "place"
    }, [_vm._v("请选择菜单栏")]) : _vm._e(), _vm._v(" "), _c('i', {
      staticClass: "iconfont iconarrow-down-1",
      staticStyle: {
        "font-size": "12px",
        "margin-top": "3px"
      }
    })])])])
  }), _vm._v(" "), _c('div', {
    staticClass: "submit",
    on: {
      "click": function($event) {
        return _vm.submitMenu()
      }
    }
  }, [_vm._v("提交")])], 2), _vm._v(" "), _c('bottom-nav', {
    ref: "bottomnav"
  })], 1)
},staticRenderFns: []}

/***/ }),

/***/ 937:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1935)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1690),
  /* template */
  __webpack_require__(2242),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-007aae83",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 939:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1966)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1692),
  /* template */
  __webpack_require__(2273),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-1d482907",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ })

});