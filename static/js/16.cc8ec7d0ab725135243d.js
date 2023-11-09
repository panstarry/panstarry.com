webpackJsonp([16],{

/***/ 1156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header__ = __webpack_require__(1174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(1175);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 1174:
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

/***/ 1175:
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

/***/ 1191:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(766)(false);
// imports


// module
exports.push([module.i, "[data-v-e848f6e8]{box-sizing:border-box}.qd-table[data-v-e848f6e8]{border:1px solid #e3e8ee}.qd-table .qd-table-mytbl[data-v-e848f6e8]{width:100%;overflow:auto}.qd-table .qd-table-mytbl table[data-v-e848f6e8]{table-layout:fixed;width:100%}.qd-table .qd-table-mytbl tbody tr td[data-v-e848f6e8]{background:#f6f6f6}.qd-table .qd-table-mytbl th[data-v-e848f6e8]{font-weight:700;color:#777;background:#f0f0f0}.qd-table .qd-table-mytbl td[data-v-e848f6e8],.qd-table .qd-table-mytbl th[data-v-e848f6e8]{padding:10px 10px 8px;font-size:12px;border-bottom:1px solid #e3e8ee}.qd-table .qd-table-mytbl td[data-v-e848f6e8]:last-child,.qd-table .qd-table-mytbl th[data-v-e848f6e8]:last-child{border-right:0}.qd-table .qd-table-mytbl tr[data-v-e848f6e8]:hover{background:#fafafa}.qd-table .qd-table-mytbl .ckbox[data-v-e848f6e8]{cursor:pointer}.qd-table .qd-table-mytbl .ckbox:hover .ckbox-0[data-v-e848f6e8]{color:#2e86e5}.qd-table .qd-table-mytbl .ckbox .ckbox-0[data-v-e848f6e8]{color:#ccc;font-size:14px;font-weight:400}.qd-table .qd-table-mytbl .ckbox .ckbox-1[data-v-e848f6e8]{color:#2e86e5;font-size:14px;font-weight:400}.qd-table .qd-table-mytbl .th-help[data-v-e848f6e8]{font-weight:400;color:#999;border-radius:50%;padding:0 6px;background:#ddd;font-size:11px;margin-left:3px}.qd-table-box-fixed[data-v-e848f6e8]{overflow:auto}.qd-table-border td[data-v-e848f6e8],.qd-table-border th[data-v-e848f6e8]{border-right:1px solid #e3e8ee}.qd-table-header-fixed[data-v-e848f6e8]{position:sticky;top:0;z-index:99}.qd-table-column-fixed[data-v-e848f6e8]{position:sticky;z-index:90}.qd-table-column-fixed[data-v-e848f6e8]:after{position:absolute;top:0;right:0;content:\"\";display:block;width:1px;height:100%;box-shadow:3px 0 6px 0 rgba(0,0,0,.4)}.qd-table-column-fixed[data-v-e848f6e8]:before{position:absolute;top:0;left:0;content:\"\";display:block;width:1px;height:100%;box-shadow:-3px 0 6px 0 rgba(0,0,0,.4)}.qd-table-checkbox[data-v-e848f6e8]{width:18px;height:18px;position:relative}.qd-table-checkbox input[type=checkbox][data-v-e848f6e8]{display:none}.qd-table-checkbox .disabled[data-v-e848f6e8]{display:inline-block}.qd-table-checkbox input[type=checkbox]+label[data-v-e848f6e8]{display:inline-block;position:relative;cursor:pointer;position:absolute;left:0;top:50%;transform:translateY(-50%)}.qd-table-checkbox input[type=checkbox]+label[data-v-e848f6e8]:before{content:\"\";display:inline-block;width:18px;height:18px;border-radius:2px;border:1px solid #dcdee2;background-color:#fff;vertical-align:top;text-align:center;font-size:12px;line-height:14px}.qd-table-checkbox input[type=checkbox]:checked+label[data-v-e848f6e8]:before{content:\"\\2714\";background-color:#2d8cf0;color:#fff}.qd-table-checkbox .disabled+label[data-v-e848f6e8]:before,.qd-table-checkbox input[type=checkbox][data-v-e848f6e8],.qd-table-checkbox input[type=checkbox][data-v-e848f6e8]:checked{background-color:#f3f3f3!important;color:#ccc!important;cursor:not-allowed!important}.qd-table-stripe table tbody tr:nth-of-type(odd) td[data-v-e848f6e8]{background-color:#fff}.none[data-v-e848f6e8]{text-align:center;color:#bbb;font-size:12px;margin-top:20px}", ""]);

// exports


/***/ }),

/***/ 1208:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1191);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(767)("1cc194b2", content, true, {});

/***/ }),

/***/ 1224:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1208)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1156),
  /* template */
  __webpack_require__(1255),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-e848f6e8",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1255:
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

/***/ 1279:
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
  name: "test",
  components: {},
  props: {},
  data() {
    return {
      selectGroundId: 0,
      showArea: false,
      groundList: [{ name: "选项1", id: 1 }, { name: "选项2", id: 2 }, { name: "选项3", id: 3 }, { name: "选项4", id: 4 }, { name: "无", id: 0 }],
      arrList: [{
        value: 1
      }, {
        value: 2
      }, {
        value: 3
      }, {
        value: 4
      }],
      groundList2: [1, 2],
      groundValue: [1],
      custTypeName: ""
    };
  },
  computed: {},
  watch: {
    selectGroundId(newValue) {
      console.log(newValue);
    }
  },
  created() {},
  mounted() {},
  methods: {
    changeSelectFun(e) {
      console.log(e);
    },
    optionFun(e) {
      // console.log(e);
    },
    selectFun(e) {
      // console.log(e);
    },
    changeFun(e) {
      console.log("change", e);
    },
    closeFun(e) {
      console.log("closeFun");
    },
    queryChange(e) {
      console.log("queryChange", e);
    },
    clear() {
      console.log("clear");
    }
  }
});

/***/ }),

/***/ 1280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_table_table_vue__ = __webpack_require__(1224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_table_table_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_table_table_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
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
    qdTable: __WEBPACK_IMPORTED_MODULE_0__components_table_table_vue___default.a
  },
  props: {},
  data() {
    return {
      columns: [
      // {
      //   type: "selection",
      //   fixed: "left",
      //   align: "center",
      //   width: 50,
      // },
      {
        title: "姓名",
        key: "name",
        width: 150,
        slotName: "name",
        fixed: "left"
        // renderHeader(h, { column }) {
        //   return h("div", {}, column.key);
        // },
      }, {
        title: "年纪",
        key: "age",
        maxWidth: 100
      }, {
        title: "地址",
        key: "address"
      }, {
        title: "时间",
        key: "date",
        width: 100
      }, {
        title: "时间",
        key: "date",
        width: 100
      }, {
        title: "时间",
        key: "date",
        width: 100
      }, {
        title: "时间",
        key: "date",
        width: 100
      }, {
        title: "操作",
        key: "handler",
        fixed: "right",
        slotName: "btn"
      }],
      data: [{
        name: "《开始》张三",
        age: 18,
        address: "北京",
        date: "2016-10-03",
        _checked: true,
        _disabled: true
      }, {
        name: "李四",
        age: 24,
        address: "上海",
        date: "2016-10-01",
        _disabled: true
      }]
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.init();
  },
  methods: {
    onSelectCancel(e) {
      console.log("取消选中时触发", e);
    },
    onSelectAll(e) {
      console.log("全选时触发", e);
    },
    onSelectionChange(e) {
      console.log("状态改变时触发", e);
    },
    onSelect(e) {
      console.log("选中时触发", e);
    },
    onSelectAllCancel(e) {
      console.log("全选取消时触发", e);
    },
    init() {
      setTimeout(() => {
        this.data = this.data.concat([{
          name: "张三",
          age: 18,
          address: "北京",
          date: "2016-10-03"
        }, {
          name: "李四",
          age: 24,
          address: "上海",
          date: "2016-10-01"
        }, {
          name: "王五",
          age: 30,
          address: "重庆",
          date: "2016-10-02"
        }, {
          name: "吴六",
          age: 26,
          address: "杭州",
          date: "2016-10-04"
        }, {
          name: "张三",
          age: 18,
          address: "北京",
          date: "2016-10-03"
        }, {
          name: "李四",
          age: 24,
          address: "上海",
          date: "2016-10-01"
        }, {
          name: "王五",
          age: 30,
          address: "重庆",
          date: "2016-10-02"
        }, {
          name: "《最后》吴六",
          age: 26,
          address: "杭州",
          date: "2016-10-04"
        }]);
      }, 2000);
    }
  }
});

/***/ }),

/***/ 1603:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(766)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 1654:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(766)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 1836:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1603);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(767)("f147f5c6", content, true, {});

/***/ }),

/***/ 1887:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1654);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(767)("180d85de", content, true, {});

/***/ }),

/***/ 2146:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "test"
  }, [_c('div', {
    staticClass: "tblform"
  }, [_c('ul', _vm._l((_vm.arrList), function(item, idx) {
    return _c('li', {
      key: idx
    }, [_c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "infor-name must-fill"
    }, [_vm._v("测试")]), _vm._v(" "), _c('div', {
      staticClass: "infor-detail"
    }, [_c('qd-select', {
      attrs: {
        "title": "课程",
        "multiple": "",
        "placeholder": "请选择课程"
      },
      on: {
        "on-change": _vm.changeSelectFun
      },
      model: {
        value: (_vm.arrList[idx].value),
        callback: function($$v) {
          _vm.$set(_vm.arrList[idx], "value", $$v)
        },
        expression: "arrList[idx].value"
      }
    }, _vm._l((_vm.groundList), function(s) {
      return _c('qd-option', {
        key: s.id,
        attrs: {
          "value": s.id,
          "label": s.name
        }
      }, [_vm._v("\n                " + _vm._s(s.name) + "\n              ")])
    }), 1)], 1)])])
  }), 0), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "infor-name must-fill"
  }, [_vm._v("测试")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_c('qd-select', {
    attrs: {
      "filterable": "",
      "title": "课程",
      "clearable": "",
      "placeholder": "请选择课程"
    },
    on: {
      "on-clear": _vm.clear,
      "on-query-change": _vm.queryChange,
      "on-close": _vm.closeFun,
      "on-change": _vm.changeFun
    },
    model: {
      value: (_vm.groundValue),
      callback: function($$v) {
        _vm.groundValue = $$v
      },
      expression: "groundValue"
    }
  }, _vm._l((_vm.groundList), function(s) {
    return _c('qd-option', {
      key: s.id,
      attrs: {
        "value": s.id,
        "label": s.name
      }
    }, [_vm._v("\n            " + _vm._s(s.name) + "\n          ")])
  }), 1)], 1)]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.number",
      value: (_vm.groundValue),
      expression: "groundValue",
      modifiers: {
        "number": true
      }
    }],
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.groundValue)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.groundValue = _vm._n($event.target.value)
      },
      "blur": function($event) {
        return _vm.$forceUpdate()
      }
    }
  })])])
},staticRenderFns: []}

/***/ }),

/***/ 2195:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "test-table"
  }, [_c('qd-table', {
    attrs: {
      "columns": _vm.columns,
      "data": _vm.data
    }
  }), _vm._v(" "), _c('qd-table', {
    attrs: {
      "stripe": "",
      "border": "",
      "height": 300,
      "columns": _vm.columns,
      "data": _vm.data
    },
    on: {
      "onSelect": _vm.onSelect,
      "onSelectionChange": _vm.onSelectionChange
    },
    scopedSlots: _vm._u([{
      key: "header",
      fn: function(ref) {
        var row = ref.row;
        var index = ref.index;

        return [_c('div', [_vm._v(_vm._s(row.key))])]
      }
    }, {
      key: "name",
      fn: function(ref) {
        var row = ref.row;
        var idx = ref.idx;

        return [_c('a', [_vm._v(_vm._s(row.name))])]
      }
    }, {
      key: "btn",
      fn: function(ref) {
        var row = ref.row;
        var idx = ref.idx;

        return [_c('a', [_vm._v(_vm._s(row.name))])]
      }
    }])
  })], 1)
},staticRenderFns: []}

/***/ }),

/***/ 771:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1836)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1279),
  /* template */
  __webpack_require__(2146),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-47b10ad6",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 772:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1887)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1280),
  /* template */
  __webpack_require__(2195),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-71498a85",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ })

});