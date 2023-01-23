(this["webpackJsonpnetflix-clone"] =
  this["webpackJsonpnetflix-clone"] || []).push([
  [0],
  {
    22: function (e, t, n) {
      e.exports = n(64);
    },
    27: function (e, t, n) {},
    28: function (e, t, n) {},
    46: function (e, t, n) {},
    62: function (e, t, n) {},
    63: function (e, t, n) {},
    64: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(0),
        c = n.n(a),
        r = n(16),
        o = n.n(r),
        i = (n(27), n(28), n(4)),
        l = n.n(i),
        s = n(5),
        u = n(3),
        m = n(17),
        f = n.n(m).a.create({ baseURL: "https://api.themoviedb.org/3" }),
        d = (n(46), n(18)),
        h = n.n(d),
        v = n(19);
      var p = function (e) {
          var t = e.title,
            n = e.fetchUrl,
            r = e.isLargeRow,
            o = Object(a.useState)([]),
            i = Object(u.a)(o, 2),
            m = i[0],
            d = i[1],
            p = Object(a.useState)(""),
            g = Object(u.a)(p, 2),
            b = g[0],
            _ = g[1];
          return (
            Object(a.useEffect)(
              function () {
                function e() {
                  return (e = Object(s.a)(
                    l.a.mark(function e() {
                      var t;
                      return l.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), f.get(n);
                            case 2:
                              return (
                                (t = e.sent),
                                d(t.data.results),
                                e.abrupt("return", t)
                              );
                            case 5:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  )).apply(this, arguments);
                }
                !(function () {
                  e.apply(this, arguments);
                })();
              },
              [n]
            ),
            c.a.createElement(
              "div",
              { className: "row" },
              c.a.createElement("h2", null, t),
              c.a.createElement(
                "div",
                { className: "row__posters" },
                m.map(function (e) {
                  return c.a.createElement("img", {
                    key: e.id,
                    onClick: function () {
                      return (function (e) {
                        b
                          ? _("")
                          : h()(
                              (null === e || void 0 === e ? void 0 : e.name) ||
                                ""
                            )
                              .then(function (e) {
                                var t = new URLSearchParams(new URL(e).search);
                                console.log(e), _(t.get("v")), console.log(b);
                              })
                              .catch(function (e) {
                                return console.log(e);
                              });
                      })(e);
                    },
                    className: "row__poster ".concat(r && "row__posterLarge"),
                    src: ""
                      .concat("https://image.tmdb.org/t/p/original")
                      .concat(r ? e.poster_path : e.backdrop_path),
                    alt: e.name,
                  });
                })
              ),
              b &&
                c.a.createElement(v.a, {
                  videoId: b,
                  opts: {
                    height: "390",
                    width: "100%",
                    playerVars: { autoplay: 1 },
                  },
                })
            )
          );
        },
        g = "033114bbc9ffbeb63f3e693dc3b15999",
        b = {
          fetchTrending: "/trending/all/week?api_key=".concat(
            g,
            "&language=en-US"
          ),
          fetchNetflixOriginals: "/discover/tv?api_key=".concat(
            g,
            "&with_networks=213"
          ),
          fetchTopRated: "/movie/top_rated?api_key=".concat(
            g,
            "&language=en-US"
          ),
          fetchActionMovies: "/discover/movie?api_key=".concat(
            g,
            "&with_genres=28"
          ),
          fetchComedyMovies: "/discover/movie?api_key=".concat(
            g,
            "&with_genres=35"
          ),
          fetchHorrorMovies: "/discover/movie?api_key=".concat(
            g,
            "&with_genres=27"
          ),
          fetchRomanceMovies: "/discover/movie?api_key=".concat(
            g,
            "&with_genres=10749"
          ),
          fetchDocumentaries: "/discover/movie?api_key=".concat(
            g,
            "&with_genres=99"
          ),
        };
      n(62);
      var _ = function () {
        var e,
          t,
          n = Object(a.useState)([]),
          r = Object(u.a)(n, 2),
          o = r[0],
          i = r[1];
        return (
          Object(a.useEffect)(function () {
            function e() {
              return (e = Object(s.a)(
                l.a.mark(function e() {
                  var t;
                  return l.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), f.get(b.fetchNetflixOriginals);
                        case 2:
                          return (
                            (t = e.sent),
                            i(
                              t.data.results[
                                Math.floor(
                                  Math.random() * t.data.results.length
                                )
                              ]
                            ),
                            e.abrupt("return", t)
                          );
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )).apply(this, arguments);
            }
            !(function () {
              e.apply(this, arguments);
            })();
          }, []),
          c.a.createElement(
            "header",
            {
              className: "banner",
              style: {
                backgroundSize: "cover",
                backgroundImage: "url("
                  .concat("https://image.tmdb.org/t/p/original")
                  .concat(o.backdrop_path, ")"),
                backgroundPosition: "center center",
                minHeight: "300px",
              },
            },
            c.a.createElement(
              "div",
              { className: "banner__contents" },
              c.a.createElement(
                "h1",
                { className: "banner__title" },
                (null === o || void 0 === o ? void 0 : o.title) ||
                  (null === o || void 0 === o ? void 0 : o.name) ||
                  (null === o || void 0 === o ? void 0 : o.original_name)
              ),
              c.a.createElement(
                "div",
                { className: "banner__buttons" },
                c.a.createElement(
                  "button",
                  { className: "banner__button" },
                  "Play"
                ),
                c.a.createElement(
                  "button",
                  { className: "banner__button" },
                  "My List"
                )
              ),
              c.a.createElement(
                "h1",
                { className: "banner__description" },
                ((e = null === o || void 0 === o ? void 0 : o.overview),
                (t = 150),
                (null === e || void 0 === e ? void 0 : e.length) > t
                  ? e.substr(0, t - 1) + "..."
                  : e)
              )
            ),
            c.a.createElement("div", { className: "banner__fadeBottom" })
          )
        );
      };
      n(63);
      var w = function () {
        var e = new a.useState(!1),
          t = Object(u.a)(e, 2),
          n = t[0],
          r = t[1];
        return (
          Object(a.useEffect)(function () {
            return (
              window.addEventListener("scroll", function () {
                window.scrollY > 100 ? r(!0) : r(!1);
              }),
              function () {
                window.removeEventListener("scroll");
              }
            );
          }, []),
          c.a.createElement(
            "div",
            { className: "nav ".concat(n && "nav__black") },
            c.a.createElement("img", {
              src: "https://www.freepnglogos.com/uploads/netflix-logo-0.png",
              alt: "logo",
              className: "nav__logo",
            }),
            c.a.createElement("img", {
              src: "https://pbs.twimg.com/media/CW2i0pJW4AEYFI3.png",
              alt: "avatar",
              className: "nav__avatar",
            })
          )
        );
      };
      var E = function () {
        return c.a.createElement(
          "div",
          { className: "app" },
          c.a.createElement(w, null),
          c.a.createElement(_, null),
          c.a.createElement(p, {
            title: "Netflix Originals",
            fetchUrl: b.fetchNetflixOriginals,
            isLargeRow: !0,
          }),
          c.a.createElement(p, {
            title: "Trending Now",
            fetchUrl: b.fetchTrending,
          }),
          c.a.createElement(p, {
            title: "Top Rated",
            fetchUrl: b.fetchTopRated,
          }),
          c.a.createElement(p, {
            title: "Action",
            fetchUrl: b.fetchActionMovies,
          }),
          c.a.createElement(p, {
            title: "Comedy",
            fetchUrl: b.fetchComedyMovies,
          }),
          c.a.createElement(p, {
            title: "Horror",
            fetchUrl: b.fetchHorrorMovies,
          }),
          c.a.createElement(p, {
            title: "Romance",
            fetchUrl: b.fetchRomanceMovies,
          }),
          c.a.createElement(p, {
            title: "Documentary",
            fetchUrl: b.fetchDocumentaries,
          })
        );
      };
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      o.a.render(
        c.a.createElement(c.a.StrictMode, null, c.a.createElement(E, null)),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            });
    },
  },
  [[22, 1, 2]],
]);
//# sourceMappingURL=main.76cda012.chunk.js.map
