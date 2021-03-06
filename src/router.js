import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/cash",
      name: "cash",
      component: () =>
        import(/* webpackChunkName: "about" */ "./components/pay/cash.vue")
    },
    {
      path: "/jiangli",
      name: "jiangli",
      component: () =>
        import(
          /* webpackChunkName: "about" */ "./components/active/actlist/jiangli.vue"
        )
    },
    {
      path: "/jiajiang",
      name: "jiajiang",
      component: () =>
        import(
          /* webpackChunkName: "about" */ "./components/active/actlist/mrjj.vue"
        )
    },
    {
      path: "/wechatpay",
      component: () =>
        import(
          /* webpackChunkName: "about" */ "./components/pay/wechatpay.vue"
        ),
      name: "wechatpay"
    },
    {
      path: "/aliPay",
      component: () =>
        import(/* webpackChunkName: "about" */ "./components/pay/alipay.vue"),
      name: "alipay"
    },
    {
      path: "/uniPay",
      component: () =>
        import(/* webpackChunkName: "about" */ "./components/pay/unipay.vue"),
      name: "unipay"
    },
    {
      path: "/history",
      component: () =>
        import(
          /* webpackChunkName: "about" */ "./components/history/history.vue"
        ),
      name: "history"
    },
    {
      path: "/",
      component: () =>
        import(/* webpackChunkName: "about" */ "./components/home/home.vue"),
      name: "home"
    },
    {
      path: "/active",
      component: () =>
        import(/* webpackChunkName: "about" */ "./components/active/active.vue")
    },
    {
      path: "/talks",
      component: () =>
        import(/* webpackChunkName: "about" */ "./components/talk/talk.vue")
    },
    {
      path: "/guanli",
      name:"guanli",
      component: () =>
        import(/* webpackChunkName: "about" */ "./components/mangerment/daili/item/xiaji/xiaji.vue")
    },
    {
      path: "/shuoming",
      name: "shuoming",
      component: () =>
        import(
          /* webpackChunkName: "about" */ "./components/mangerment/daili/item/shuoming/shuoming.vue"
        )
    },
    {
      path: "/how",
      name: "howplay",
      component: () =>
        import(
          /* webpackChunkName: "about" */ "./components/mangerment/how/how.vue"
        )
    },
    {
      path: "/guanyu",
      name: "guanyu",
      component: () =>
        import(
          /* webpackChunkName: "about" */ "./components/mangerment/guanyu/guanyu.vue"
        )
    },
    {
      path: "/manager",
      component: () =>
        import(
          /* webpackChunkName: "about" */ "./components/mangerment/manager.vue"
        )
    },
    {
      path: "/logoin",
      name: "logoin",
      component: () =>
        import(/* webpackChunkName: "about" */ "./components/logoin/login.vue")
    },
    {
      path: "/recharge",
      name: "recharge",
      component: () =>
        import(
          /* webpackChunkName: "about" */ "./components/recharge/recharge.vue"
        )
    },
    {
      path: "/registry",
      component: () =>
        import(
          /* webpackChunkName: "about" */ "./components/registry/registry.vue"
        )
    },
    {
      path: "*",
      redirect: "/",
      component: () =>
        import(/* webpackChunkName: "about" */ "./components/home/home.vue")
    },
    {
      name: "gassc",
      path: "/gassc",
      component: () =>
        import(/* webpackChunkName: "about" */ "./components/game/game.vue")
    },
    {
      name: "cqssc",
      path: "/cqssc",
      component: () =>
        import(/* webpackChunkName: "about" */ "./components/game/game.vue")
    },
    {
      name: "tjssc",
      path: "/tjssc",
      component: () =>
        import(/* webpackChunkName: "about" */ "./components/game/game.vue")
    },
    {
      name: "txffc",
      path: "/txffc",
      component: () =>
        import(/* webpackChunkName: "about" */ "./components/game/game.vue")
    },
    {
      name: "lol",
      path: "/lol",
      component: () =>
        import(/* webpackChunkName: "about" */ "./components/game/lol/lol.vue")
    },
    {
      name: "hongbao",
      path: "/hongbao",
      component: () =>
        import(/* webpackChunkName: "about" */ "./components/game/hongbao.vue")
    },
    {
      name: "pk",
      path: "/bjpk10",
      component: () =>
        import(/* webpackChunkName: "about" */ "./components/game/pk10/pk10")
    },
    {
      name: "qipai",
      path: "/qipai",
      component: () =>
        import(
          /* webpackChunkName: "about" */ "./components/game/qipai/qipai.vue"
        )
    },
    {
      name: "niuniu",
      path: "/niuniu",
      component: () =>
        import(
          /* webpackChunkName: "about" */ "./components/game/qipai/gamelist/niuniu.vue"
        )
    },
    // {
    //   name: "saibao",
    //   path: "/saibao",
    //   component: () =>
    //     import(
    //       /* webpackChunkName: "about" */ "./components/game/qipai/gamelist/saibao.vue"
    //     )
    // },
    // {
    //   name: "rbwar",
    //   path: "/rbwar",
    //   component: () =>
    //     import(
    //       /* webpackChunkName: "about" */ "./components/game/qipai/gamelist/rbwar.vue"
    //     )
    // },
    {
      name: "yingkui",
      path: "/yingkui",
      component: () =>
        import(
          /* webpackChunkName: "about" */ "./components/mangerment/yingkui/yingkui.vue"
        )
    },
    {
      name: "daili",
      path: "/daili",
      component: () =>
        import(
          /* webpackChunkName: "about" */ "./components/mangerment/daili/daili.vue"
        )
    },
    {
      name: "code",
      path: "/code",
      component: () =>
        import(
          /* webpackChunkName: "about" */ "./components/mangerment/daili/item/code/code.vue"
        )
    },
    {
      name: "baobiao",
      path: "/baobiao",
      component: () =>
        import(
          /* webpackChunkName: "about" */ "./components/mangerment/daili/item/baobiao.vue"
        )
    },
    // // {
    // //   name: "longhu",
    // //   path: "/longhu",
    // //   component: () =>
    // //     import(
    // //       /* webpackChunkName: "about" */ "./components/game/qipai/gamelist/longhu.vue"
    // //     )
    // // },
    // {
    //   name: "benchi",
    //   path: "/benchi",
    //   component: () =>
    //     import(
    //       /* webpackChunkName: "about" */ "./components/game/qipai/gamelist/benchi.vue"
    //     )
    // },
    {
      name: "pk10",
      path: "/wnspk10",
      component: () =>
        import(/* webpackChunkName: "about" */ "./components/game/pk10/pk10")
    },
    {
      name: "tcpl5",
      path: "/tcpl5",
      component: () =>
        import(/* webpackChunkName: "about" */ "./components/game/game.vue")
    },
    {
      name: "xjssc",
      path: "/xjssc",
      component: () =>
        import(/* webpackChunkName: "about" */ "./components/game/game.vue")
    },
    {
      name: "ynssc",
      path: "/ynssc",
      component: () =>
        import(/* webpackChunkName: "about" */ "./components/game/game.vue")
    },
    {
      name: "fc3d",
      path: "/fc3d",
      component: () =>
        import(
          /* webpackChunkName: "about" */ "./components/game/threegame/threegame.vue"
        )
    }
  ]
});
