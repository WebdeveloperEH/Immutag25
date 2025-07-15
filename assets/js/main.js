! function(e) {
    "use strict";
    if (e(window).on("load", (function() {
            e(".preloader").fadeOut(), e(".swiper-fade").addClass("fade-ani")
        })), e(".preloader").length > 0 && e(".preloaderCls").each((function() {
            e(this).on("click", (function(t) {
                t.preventDefault(), e(".preloader").css("display", "none")
            }))
        })), e.fn.otmobilemenu = function(t) {
            var a = e.extend({
                menuToggleBtn: ".ot-menu-toggle",
                bodyToggleClass: "ot-body-visible",
                subMenuClass: "ot-submenu",
                subMenuParent: "ot-item-has-children",
                subMenuParentToggle: "ot-active",
                meanExpandClass: "ot-mean-expand",
                appendElement: '<span class="ot-mean-expand"></span>',
                subMenuToggleClass: "ot-open",
                toggleSpeed: 400
            }, t);
            return this.each((function() {
                var t = e(this);

                function s() {
                    t.toggleClass(a.bodyToggleClass);
                    var s = "." + a.subMenuClass;
                    e(s).each((function() {
                        e(this).hasClass(a.subMenuToggleClass) && (e(this).removeClass(a.subMenuToggleClass), e(this).css("display", "none"), e(this).parent().removeClass(a.subMenuParentToggle))
                    }))
                }
                t.find("li").each((function() {
                    var t = e(this).find("ul");
                    t.addClass(a.subMenuClass), t.css("display", "none"), t.parent().addClass(a.subMenuParent), t.prev("a").append(a.appendElement), t.next("a").append(a.appendElement)
                }));
                var n = "." + a.meanExpandClass;
                e(n).each((function() {
                    e(this).on("click", (function(t) {
                        var s;
                        t.preventDefault(), s = e(this).parent(), e(s).next("ul").length > 0 ? (e(s).parent().toggleClass(a.subMenuParentToggle), e(s).next("ul").slideToggle(a.toggleSpeed), e(s).next("ul").toggleClass(a.subMenuToggleClass)) : e(s).prev("ul").length > 0 && (e(s).parent().toggleClass(a.subMenuParentToggle), e(s).prev("ul").slideToggle(a.toggleSpeed), e(s).prev("ul").toggleClass(a.subMenuToggleClass))
                    }))
                })), e(a.menuToggleBtn).each((function() {
                    e(this).on("click", (function() {
                        s()
                    }))
                })), t.on("click", (function(e) {
                    e.stopPropagation(), s()
                })), t.find("div").on("click", (function(e) {
                    e.stopPropagation()
                }))
            }))
        }, e(".ot-menu-wrapper").otmobilemenu(), e(window).scroll((function() {
            e(this).scrollTop() > 500 ? (e(".sticky-wrapper").addClass("sticky"), e(".category-menu").addClass("close-category")) : (e(".sticky-wrapper").removeClass("sticky"), e(".category-menu").removeClass("close-category"))
        })), e(".menu-expand").each((function() {
            e(this).on("click", (function(t) {
                t.preventDefault(), e(".category-menu").toggleClass("open-category")
            }))
        })), e(".scroll-top").length > 0) {
        var t = document.querySelector(".scroll-top"),
            a = document.querySelector(".scroll-top path"),
            s = a.getTotalLength();
        a.style.transition = a.style.WebkitTransition = "none", a.style.strokeDasharray = s + " " + s, a.style.strokeDashoffset = s, a.getBoundingClientRect(), a.style.transition = a.style.WebkitTransition = "stroke-dashoffset 10ms linear";
        var n = function() {
            var t = e(window).scrollTop(),
                n = e(document).height() - e(window).height(),
                o = s - t * s / n;
            a.style.strokeDashoffset = o
        };
        n(), e(window).scroll(n);
        jQuery(window).on("scroll", (function() {
            jQuery(this).scrollTop() > 50 ? jQuery(t).addClass("show") : jQuery(t).removeClass("show")
        })), jQuery(t).on("click", (function(e) {
            return e.preventDefault(), jQuery("html, body").animate({
                scrollTop: 0
            }, 750), !1
        }))
    }
    e("[data-bg-src]").length > 0 && e("[data-bg-src]").each((function() {
        var t = e(this).attr("data-bg-src");
        e(this).css("background-image", "url(" + t + ")"), e(this).removeAttr("data-bg-src").addClass("background-image")
    })), e("[data-bg-color]").length > 0 && e("[data-bg-color]").each((function() {
        var t = e(this).attr("data-bg-color");
        e(this).css("background-color", t), e(this).removeAttr("data-bg-color")
    })), e("[data-mask-src]").length > 0 && e("[data-mask-src]").each((function() {
        var t = e(this).attr("data-mask-src");
        e(this).css({
            "mask-image": "url(" + t + ")",
            "-webkit-mask-image": "url(" + t + ")"
        }), e(this).addClass("bg-mask"), e(this).removeAttr("data-mask-src")
    })), e("[data-theme-color]").length > 0 && e("[data-theme-color]").each((function() {
        var t = e(this).attr("data-theme-color");
        e(this).get(0).style.setProperty("--theme-color", t), e(this).removeAttr("data-theme-color")
    })), e(".ot-slider").each((function() {
        var t = e(this),
            a = e(this).data("slider-options"),
            s = t.find(".slider-prev"),
            n = t.find(".slider-next"),
            o = t.find(".slider-pagination"),
            i = a.autoplay,
            l = {
                slidesPerView: 1,
                spaceBetween: a.spaceBetween ? a.spaceBetween : 30,
                loop: 0 != a.loop,
                speed: a.speed ? a.speed : 1e3,
                autoplay: i || {
                    delay: 6e3,
                    disableOnInteraction: !1
                },
                navigation: {
                    nextEl: n.get(0),
                    prevEl: s.get(0)
                },
                pagination: {
                    el: o.get(0),
                    clickable: !0,
                    renderBullet: function(e, t) {
                        return '<span class="' + t + '" aria-label="Go to Slide ' + (e + 1) + '"></span>'
                    }
                }
            },
            r = JSON.parse(t.attr("data-slider-options"));
        r = e.extend({}, l, r);
        new Swiper(t.get(0), r);
        if (e(".slider-area").length > 0 && e(".slider-area").closest(".container").parent().addClass("arrow-wrap"), t.hasClass("slider-tab")) var c = new Swiper(t.get(0), r);
        else if (t.hasClass("tab-view")) var d = new Swiper(t.get(0), r);
        else new Swiper(t.get(0), r);
        d & c && (d.controller.control = c, c.controller.control = d)
    })), e("[data-ani]").each((function() {
        var t = e(this).data("ani");
        e(this).addClass(t)
    })), e("[data-ani-delay]").each((function() {
        var t = e(this).data("ani-delay");
        e(this).css("animation-delay", t)
    })), e("[data-slider-prev], [data-slider-next]").on("click", (function() {
        var t = e(this).data("slider-prev") || e(this).data("slider-next"),
            a = e(t);
        if (a.length) {
            var s = a[0].swiper;
            s && (e(this).data("slider-prev") ? s.slidePrev() : (navigator, s.slideNext()))
        }
    })), e.fn.activateSliderThumbs = function(t) {
        var a = e.extend({
            sliderTab: !1,
            tabButton: ".tab-btn"
        }, t);
        return this.each((function() {
            var t = e(this),
                s = t.find(a.tabButton),
                n = e('<span class="indicator"></span>').appendTo(t),
                o = t.data("slider-tab"),
                i = e(o)[0].swiper;
            if (s.on("click", (function(t) {
                    t.preventDefault();
                    var s = e(this);
                    if (s.addClass("active").siblings().removeClass("active"), c(s), s.prevAll(a.tabButton).addClass("list-active"), s.nextAll(a.tabButton).removeClass("list-active"), a.sliderTab) {
                        var n = s.index();
                        i.slideTo(n)
                    }
                })), a.sliderTab) {
                i.on("slideChange", (function() {
                    var e = i.realIndex,
                        t = s.eq(e);
                    t.addClass("active").siblings().removeClass("active"), c(t), t.prevAll(a.tabButton).addClass("list-active"), t.nextAll(a.tabButton).removeClass("list-active")
                }));
                var l = i.activeIndex,
                    r = s.eq(l);
                r.addClass("active").siblings().removeClass("active"), c(r), r.prevAll(a.tabButton).addClass("list-active"), r.nextAll(a.tabButton).removeClass("list-active")
            }

            function c(e) {
                var t = e.position(),
                    a = parseInt(e.css("margin-top"), 10) || 0,
                    s = parseInt(e.css("margin-left"), 10) || 0;
                n.css("--height-set", e.outerHeight() + "px"), n.css("--width-set", e.outerWidth() + "px"), n.css("--pos-y", t.top + a + "px"), n.css("--pos-x", t.left + s + "px")
            }
        }))
    }, e(".hero-thumb").length && e(".hero-thumb").activateSliderThumbs({
        sliderTab: !0,
        tabButton: ".tab-btn"
    });
    var o = ".ajax-contact",
        i = '[name="email"]',
        l = e(".form-messages");

    function r() {
        var t = e(o).serialize();
        (function() {
            var t, a = !0;

            function s(s) {
                s = s.split(",");
                for (var n = 0; n < s.length; n++) t = o + " " + s[n], e(t).val() ? (e(t).removeClass("is-invalid"), a = !0) : (e(t).addClass("is-invalid"), a = !1)
            }
            s('[name="name"],[name="email"],[name="subject"],[name="number"],[name="message"]'), e(i).val() && e(i).val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/) ? (e(i).removeClass("is-invalid"), a = !0) : (e(i).addClass("is-invalid"), a = !1);
            return a
        })() && jQuery.ajax({
            url: e(o).attr("action"),
            data: t,
            type: "POST"
        }).done((function(t) {
            l.removeClass("error"), l.addClass("success"), l.text(t), e(o + ' input:not([type="submit"]),' + o + " textarea").val("")
        })).fail((function(e) {
            l.removeClass("success"), l.addClass("error"), "" !== e.responseText ? l.html(e.responseText) : l.html("Oops! An error occured and your message could not be sent.")
        }))
    }

    function c(t, a, s, n) {
        e(a).on("click", (function(a) {
            a.preventDefault(), e(t).addClass(n)
        })), e(t).on("click", (function(a) {
            a.stopPropagation(), e(t).removeClass(n)
        })), e(t + " > div").on("click", (function(a) {
            a.stopPropagation(), e(t).addClass(n)
        })), e(s).on("click", (function(a) {
            a.preventDefault(), a.stopPropagation(), e(t).removeClass(n)
        }))
    }

    function d(e) {
        return parseInt(e, 10)
    }
    e(o).on("submit", (function(e) {
        e.preventDefault(), r()
    })), c(".sidemenu-info", ".sideMenuInfo", ".sideMenuCls", "show"), c(".sidemenu-cart", ".sideMenuCart", ".sideMenuCls", "show"), c(".popup-search-box", ".searchBoxToggler", ".searchClose", "show"), e(".popup-image").magnificPopup({
        type: "image",
        mainClass: "mfp-zoom-in",
        removalDelay: 260,
        gallery: {
            enabled: !0
        }
    }), e(".popup-video").magnificPopup({
        type: "iframe",
        mainClass: "mfp-zoom-in",
        removalDelay: 260
    }), e(".popup-content").magnificPopup({
        type: "inline",
        midClick: !0,
        mainClass: "mfp-zoom-in",
        removalDelay: 260
    }), e(".filter-active").imagesLoaded((function() {
        if (e(".filter-active").length > 0) {
            var t = e(".filter-active").isotope({
                itemSelector: ".filter-item",
                filter: "*",
                masonry: {
                    columnWidth: 1
                }
            });
            e(".filter-menu-active").on("click", "button", (function() {
                var a = e(this).attr("data-filter");
                t.isotope({
                    filter: a
                })
            })), e(".filter-menu-active").on("click", "button", (function(t) {
                t.preventDefault(), e(this).addClass("active"), e(this).siblings(".active").removeClass("active")
            }))
        }
    })), e(".masonary-active, .woocommerce-Reviews .comment-list").imagesLoaded((function() {
        var t = ".masonary-active, .woocommerce-Reviews .comment-list";
        e(t).length > 0 && e(t).isotope({
            itemSelector: ".filter-item, .woocommerce-Reviews .comment-list li",
            filter: "*",
            masonry: {
                columnWidth: 1
            }
        }), e('[data-bs-toggle="tab"]').on("shown.bs.tab", (function(a) {
            e(t).isotope({
                filter: "*"
            })
        }))
    })), e(".counter-number").counterUp({
        delay: 10,
        time: 1e3
    }), e(".counter-number2").counterUp({
        delay: 25,
        time: 1600
    }), e.fn.shapeMockup = function() {
        e(this).each((function() {
            var t = e(this),
                a = t.data("top"),
                s = t.data("right"),
                n = t.data("bottom"),
                o = t.data("left");
            t.css({
                top: a,
                right: s,
                bottom: n,
                left: o
            }).removeAttr("data-top").removeAttr("data-right").removeAttr("data-bottom").removeAttr("data-left").parent().addClass("shape-mockup-wrap")
        }))
    }, e(".shape-mockup") && e(".shape-mockup").shapeMockup(), e(".progress-bar").waypoint((function() {
        e(".progress-bar").css({
            animation: "animate-positive 2.6s",
            opacity: "1"
        })
    }), {
        offset: "75%"
    }), e.fn.countdown = function() {
        e(this).each((function() {
            var t = e(this),
                a = new Date(t.data("offer-date")).getTime();

            function s(e) {
                return t.find(e)
            }
            var n = setInterval((function() {
                var e = (new Date).getTime(),
                    o = a - e,
                    i = Math.floor(o / 864e5),
                    l = Math.floor(o % 864e5 / 36e5),
                    r = Math.floor(o % 36e5 / 6e4),
                    c = Math.floor(o % 6e4 / 1e3);
                i < 10 && (i = "0" + i), l < 10 && (l = "0" + l), r < 10 && (r = "0" + r), c < 10 && (c = "0" + c), o < 0 ? (clearInterval(n), t.addClass("expired"), t.find(".message").css("display", "block")) : (s(".day").html(i), s(".hour").html(l), s(".minute").html(r), s(".seconds").html(c))
            }), 1e3)
        }))
    }, e(".counter-list").length && e(".counter-list").countdown(), e.fn.sectionPosition = function(t, a) {
        e(this).each((function() {
            var s, n, o, i, l, r = e(this);
            s = Math.floor(r.height() / 2), n = r.attr(t), o = r.attr(a), i = d(e(o).css("padding-top")), l = d(e(o).css("padding-bottom")), "top-half" === n ? (e(o).css("padding-bottom", l + s + "px"), r.css("margin-top", "-" + s + "px")) : "bottom-half" === n && (e(o).css("padding-top", i + s + "px"), r.css("margin-bottom", "-" + s + "px"))
        }))
    };

    function u(t, a, s, n) {
        var o = t.text().split(a),
            i = "";
        o.length && (e(o).each((function(e, t) {
            i += '<span class="' + s + (e + 1) + '">' + t + "</span>" + n
        })), t.empty().append(i))
    }
    e("[data-sec-pos]").length && e("[data-sec-pos]").imagesLoaded((function() {
        e("[data-sec-pos]").sectionPosition("data-sec-pos", "data-pos-for")
    }));
    var p = {
        init: function() {
            return this.each((function() {
                u(e(this), "", "char", "")
            }))
        },
        words: function() {
            return this.each((function() {
                u(e(this), " ", "word", " ")
            }))
        },
        lines: function() {
            return this.each((function() {
                var t = "eefec303079ad17405c889e092e105b0";
                u(e(this).children("br").replaceWith(t).end(), t, "line", "")
            }))
        }
    };
    e.fn.lettering = function(t) {
        return t && p[t] ? p[t].apply(this, [].slice.call(arguments, 1)) : "letters" !== t && t ? (e.error("Method " + t + " does not exist on jQuery.lettering"), this) : p.init.apply(this, [].slice.call(arguments, 0))
    }, e(".circle-title-anime").lettering(), e(".product-size a, .product-color a, .widget-size-wrap a").on("click", (function(t) {
        t.preventDefault(), e(this).siblings().removeClass("active"), e(this).toggleClass("active")
    })), e("#ship-to-different-address-checkbox").on("change", (function() {
        e(this).is(":checked") ? e("#ship-to-different-address").next(".shipping_address").slideDown() : e("#ship-to-different-address").next(".shipping_address").slideUp()
    })), e(".woocommerce-form-login-toggle a").on("click", (function(t) {
        t.preventDefault(), e(".woocommerce-form-login").slideToggle()
    })), e(".woocommerce-form-coupon-toggle a").on("click", (function(t) {
        t.preventDefault(), e(".woocommerce-form-coupon").slideToggle()
    })), e(".shipping-calculator-button").on("click", (function(t) {
        t.preventDefault(), e(this).next(".shipping-calculator-form").slideToggle()
    })), e('.wc_payment_methods input[type="radio"]:checked').siblings(".payment_box").show(), e('.wc_payment_methods input[type="radio"]').each((function() {
        e(this).on("change", (function() {
            e(".payment_box").slideUp(), e(this).siblings(".payment_box").slideDown()
        }))
    })), e(".rating-select .stars a").each((function() {
        e(this).on("click", (function(t) {
            t.preventDefault(), e(this).siblings().removeClass("active"), e(this).parent().parent().addClass("selected"), e(this).addClass("active")
        }))
    })), e(".quantity-plus").each((function() {
        e(this).on("click", (function(t) {
            t.preventDefault();
            var a = e(this).siblings(".qty-input"),
                s = parseInt(a.val(), 10);
            isNaN(s) || a.val(s + 1)
        }))
    })), e(".quantity-minus").each((function() {
        e(this).on("click", (function(t) {
            t.preventDefault();
            var a = e(this).siblings(".qty-input"),
                s = parseInt(a.val(), 10);
            !isNaN(s) && s > 1 && a.val(s - 1)
        }))
    })), e(document).on("mouseover", ".hover-item", (function() {
        e(this).addClass("item-active"), e(".hover-item").removeClass("item-active"), e(this).addClass("item-active")
    })), e(document).ready((function() {
        e(".work-process-list li").on("mouseenter", (function() {
            var t = e(this).index();
            e(".work-process-list li").each((function(a) {
                a <= t && e(this).addClass("dot-active")
            }))
        })), e(".work-process-list li").on("mouseleave", (function() {
            e(".work-process-list li").removeClass("dot-active")
        }))
    }))
}(jQuery), scrollCue.init({
    percentage: .99,
    duration: 900
});