webpackJsonp([3], {
    802 : function(t, e, n) {
        function a(t) {
            n(827)
        }
        var o = n(82)(n(814), n(842), a, "data-v-3a858508", null);
        t.exports = o.exports
    },
    814 : function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.
    default = {
            data: function() {
                return {
                    renderedMarkdown: ""
                }
            },
            methods: {
                getReadme: function() {
                    var t = this;
                    this.$gitHubApi.getReadme(this).then(function(e) {
                        e.data && (t.renderedMarkdown = t.$marked(e.data))
                    })
                }
            },
            mounted: function() {
                var t = this;
                this.$nextTick(function() {
                    t.getReadme()
                })
            }
        }
    },
    819 : function(t, e, n) {
        e = t.exports = n(799)(!1),
        e.push([t.i, ".about-me[data-v-3a858508]{width:calc(100% - 260px);-ms-flex-positive:1;flex-grow:1;padding:30px;overflow-y:auto}", ""])
    },
    827 : function(t, e, n) {
        var a = n(819);
        "string" == typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        n(800)("37d54b16", a, !0, {})
    },
    842 : function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                e = t.$createElement,
                n = t._self._c || e;
                return n("div", {
                    staticClass: "about-me bga-back-top"
                },
                [n("article", {
                    staticClass: "markdown-body",
                    domProps: {
                        innerHTML: t._s(t.renderedMarkdown)
                    }
                })])
            },
            staticRenderFns: []
        }
    }
});