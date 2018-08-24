// iCheck v0.7, http://git.io/uhUPMA
(function(b) {
	function m(a, b, d, c) {
		var e = a[0],
		l = a.parent(),
		j = /disable|enable/.test(d) ? "disabled": "checked",
		f = "update" == d ? {
			checked: e.checked,
			disabled: e.disabled
		}: e[j];
		if (/^check|disable/.test(d) && !f) n(a, !0, l, j);
		else if (/uncheck|enable/.test(d) && f) p(a, !0, l, j);
		else if ("update" == d) for (j in f) f[j] ? n(a, !1, l, j, c) : p(a, !1, l, j, c);
		else b || (!0 == d && !e.disabled && a.trigger("is.Clicked"), f ? n(a, !0, l, j) : p(a, !0, l, j))
	}
	function n(a, k, d, c, e) {
		k && (a[0][c] = !0); ! 0 !== d.data(c) && ("checked" == c && ("radio" == a[0].type && a[0].name) && b("input[name=" + a[0].name + "]").each(function() {
			this !== a[0] && b(this).data("icheck") && p(b(this), !0, b(this).parent(), c)
		}), (k || e) && a.trigger("is.Changed"), k && a.trigger("is." + c.replace("di", "Di").replace("ch", "Ch")), d.data(c, !0).addClass(r(a, c)))
	}
	function p(a, b, d, c, e) {
		var l = "disabled" == c ? "Enabled": "Unchecked";
		b && (a[0][c] = !1); ! 1 !== d.data(c) && ((b || e) && a.trigger("is.Changed"), b && a.trigger("is." + l), d.data(c, !1).removeClass(r(a, c)))
	}
	function u(a, k) {
		if (a.data("icheck")) {
			var d = a[0].id,
			c = b("label[for=" + d + "]");
			a.parent().html(a.attr("style", a.data("icheck").style || "").trigger(k || ""));
			a.removeData("icheck").unbind(".df").unwrap();
			d && c.length && c.unbind(".df")
		}
	}
	function r(a, b) {
		if (a.data("icheck")) return a.data("icheck").options[b + "Class"]
	}
	b.fn.iCheck = function(a) {
		if (/^(check|uncheck|disable|enable|update|destroy)$/.test(a)) return this.each(function() { / destroy / .test(a) ? u(b(this), "is.Destroyed") : m(b(this), !0, a)
		});
		if ("object" == typeof a || !a) {
			var k = navigator.userAgent,
			d = b.extend({},
			{
				checkboxClass: "icheckbox",
				radioClass: "iradio",
				checkedClass: "checked",
				disabledClass: "disabled",
				hoverClass: "hover",
				focusClass: "focus",
				activeClass: "active",
				labelHover: !0,
				labelHoverClass: "hover"
			},
			a),
			c = /^(checkbox|radio)$/.test(d.handle) ? ":" + d.handle: ":checkbox, :radio",
			e = ("" + d.increaseArea).replace("%", "") | 0; - 50 > e && (e = -50);
			return this.each(function() { (b(this).is(c) ? b(this) : b(this).find(c)).each(function() {
					u(b(this));
					var a = this,
					c = a.id,
					f = {
						position: "absolute",
						top: -e + "%",
						left: -e + "%",
						display: "block",
						width: 100 + 2 * e + "%",
						height: 100 + 2 * e + "%",
						margin: 0,
						padding: 0,
						background: "#fff",
						border: 0,
						opacity: 0
					},
					r = /ipad|iphone|ipod|android|blackberry|windows phone|opera mini/i.test(k) ? {
						position: "absolute",
						visibility: "hidden"
					}: e | 0 ? f: {
						position: "absolute",
						opacity: 0
					},
					w = "checkbox" == a.type ? d.checkboxClass: d.radioClass,
					h = b(this).data("icheck", {
						style: b(this).attr("style"),
						options: d
					}).css(r),
					q = b("label[for=" + c + "]"),
					g = h.wrap('<div class="' + w + '"/>').trigger("is.Created").parent().append(d.insert),
					f = b("<ins/>").css(f).appendTo(g).click(function() {
						h.click();
						m(h, !1, !0)
					}),
					s = d.hoverClass,
					t = d.labelHoverClass,
					v; ! 0 == d.cursor && f.css("cursor", "pointer"); ! 0 == d.inheritClass && g.addClass(a.className); ! 0 == d.inheritID && c && g.attr("id", "icheck-" + c);
					"static" == g.css("position") && g.css("position", "relative");
					m(h, !0, "update");
					c && q.length && q.bind("click.df mouseenter.df mouseleave.df touchbegin.df touchend.df",
					function(c) {
						var e = c.type,
						f = b(this);
						"click" == e ? (c.preventDefault(), h.click(), m(h, !1, !0)) : !0 == d.labelHover && !a.disabled && (/mouseenter|touchbegin/.test(e) ? (g.addClass(s), f.addClass(t)) : (g.removeClass(s), f.removeClass(t)))
					});
					h.bind("focus.df blur.df keyup.df keydown.df keypress.df",
					function(c) {
						var b = c.type,
						e = c.keyCode || c.charCode || c.which;
						c = /MSIE [5-8]/.test(k) ? "keyup" == b && "keypress" !== v: "keyup" == b;
						e = "keypress" == b && 32 == e;
						/focus|blur/.test(b) ? "focus" == b ? g.addClass(d.focusClass) : g.removeClass(d.focusClass) : "radio" == a.type ? (c ? m(h, !0, "update", !0) : e && !a.checked && n(h, !1, g, "checked", !0), v = b) : "checkbox" == a.type && e && (a.checked ? p(h, !1, g, "checked", !0) : n(h, !1, g, "checked", !0))
					});
					f.bind("mousedown mouseup mouseout mouseenter mouseleave touchbegin touchend",
					function(b) {
						b = b.type;
						var e = /mousedown|mouseup|mouseout/.test(b) ? d.activeClass: s;
						a.disabled || (/mousedown|mouseenter|touchbegin/.test(b) ? g.addClass(e) : g.removeClass(e), c && (q.length && !0 == d.labelHover && e == s) && (/mouseleave|touchend/.test(b) ? q.removeClass(t) : q.addClass(t)))
					})
				})
			})
		}
		return this
	}
})(jQuery);