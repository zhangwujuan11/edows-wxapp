/* 用户 */
const userInfo = {
	status: 1,
	data: {
		id: 1,
		mobile: 18888888888,
		nickname: 'Leo yo',
		portrait: 'http://img.61ef.cn/news/201409/28/2014092805595807.jpg'
	},
	msg: '提示'
}
/* 首页轮播图 */
const carouselList = [{
		src: "/static/temp/banner3.jpg",
		background: "rgb(203, 87, 60)",
	},
	{
		src: "/static/temp/banner2.jpg",
		background: "rgb(205, 215, 218)",
	},
	{
		src: "/static/temp/banner4.jpg",
		background: "rgb(183, 73, 69)",
	}
]
/* 商品列表 */
const goodsList = [{
		image: "/static/temp/goods1.jpg",
		image2: "http://pic.rmb.bdstatic.com/819a044daa66718c2c40a48c1ba971e6.jpeg",
		image3: "http://img001.hc360.cn/y5/M00/1B/45/wKhQUVYFE0uEZ7zVAAAAAMj3H1w418.jpg",
		title: "1原厂奔驰后雨刮器 S400雨原厂奔驰后雨刮器 S400雨",
		price: 179,
		sales: 61,
	},
	{
		image: "/static/temp/goods2.jpg",
		image2: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554013048&di=a3dc9fd1406dd7bad7fbb97b5489ec04&imgtype=jpg&er=1&src=http%3A%2F%2Fimg009.hc360.cn%2Fhb%2FnKo44ac2656F831c684507E3Da0E3a26841.jpg",
		image3: "http://img.zcool.cn/community/017a4e58b4eab6a801219c77084373.jpg",
		title: "2原厂奔驰后雨刮器 S400雨...",
		price: 78,
		sales: 16,
	},
	{
		image: "/static/temp/goods3.jpg",
		image2: "http://m.360buyimg.com/n12/jfs/t247/42/1078640382/162559/3628a0b/53f5ad09N0dd79894.jpg%21q70.jpg",
		image3: "http://ikids.61kids.com.cn/upload/2018-12-29/1546070626796114.jpg",
		title: "3原厂奔驰后雨刮器 S400雨...",
		price: 108.8,
		sales: 5,
	}, {
		image: "/static/temp/goods1.jpg",
		image2: "http://images.jaadee.com/images/201702/goods_img/30150_d85aed83521.jpg",
		image3: "http://img13.360buyimg.com/popWaterMark/jfs/t865/120/206320620/138889/dcc94caa/550acedcN613e2a9d.jpg",
		title: "4原厂奔驰后雨刮器 S400雨...",
		price: 265,
		sales: 88,
	}, {
		image: "/static/temp/goods2.jpg",
		image2: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553418265666&di=d4a7f7eb0ae3c859edeb921641ee1c3a&imgtype=0&src=http%3A%2F%2Fimg003.hc360.cn%2Fy3%2FM02%2FF8%2F9F%2FwKhQh1TuSkGELIlQAAAAAPuLl4M987.jpg",
		image3: "http://img.ef43.com.cn/product/2016/8/05100204b0c.jpg",
		title: "5原厂奔驰后雨刮器 S400雨...",
		price: 422,
		sales: 137,
	}, {
		image: "/static/temp/goods3.jpg",
		image2: "http://image5.suning.cn/uimg/b2c/newcatentries/0070158827-000000000622091973_2_800x800.jpg",
		image3: "http://img.61ef.cn/news/201903/20/2019032009251784.jpg",
		title: "6后雨刮器 S400雨",
		price: 179,
		sales: 95,
	},
]

/* 购物车 */
const cartList = [{
		id: 1,
		image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553005139&di=3368549edf9eee769a9bcb3fbbed2504&imgtype=jpg&er=1&src=http%3A%2F%2Fimg002.hc360.cn%2Fy3%2FM01%2F5F%2FDB%2FwKhQh1T7iceEGRdWAAAAADQvqk8733.jpg',
		attr_val: '春装款 L',
		stock: 15,
		title: 'OVBE 长袖风衣',
		price: 278.00,
		number: 1
	},
	{
		id: 3,
		image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2319343996,1107396922&fm=26&gp=0.jpg',
		attr_val: '激光导航 扫拖一体',
		stock: 3,
		title: '科沃斯 Ecovacs 扫地机器人',
		price: 1348.00,
		number: 5
	},
	{
		id: 4,
		image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2668268226,1765897385&fm=26&gp=0.jpg',
		attr_val: 'XL',
		stock: 55,
		title: '朵绒菲小西装',
		price: 175.88,
		number: 1
	},
	{
		id: 5,
		image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552410549432&di=06dd3758053fb6d6362516f30a42d055&imgtype=0&src=http%3A%2F%2Fimgcache.mysodao.com%2Fimg3%2FM0A%2F67%2F42%2FCgAPD1vNSsHNm-TnAAEy61txQb4543_400x400x2.JPG',
		attr_val: '520 #粉红色',
		stock: 15,
		title: '迪奥（Dior）烈艳唇膏',
		price: 1089.00,
		number: 1
	},
	{
		id: 6,
		image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1031875829,2994442603&fm=26&gp=0.jpg',
		attr_val: '樱花味润手霜 30ml',
		stock: 15,
		title: "欧舒丹（L'OCCITANE）乳木果",
		price: 128,
		number: 1
	},
	{
		id: 7,
		image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553007107&di=390915aa8a022cf0b03c03340881b0e7&imgtype=jpg&er=1&src=http%3A%2F%2Fimg13.360buyimg.com%2Fn0%2Fjfs%2Ft646%2F285%2F736444951%2F480473%2Faa701c97%2F548176feN10c9ed7b.jpg',
		attr_val: '特级 12个',
		stock: 7,
		title: '新疆阿克苏苹果 特级',
		price: 58.8,
		number: 10
	},
	{
		id: 8,
		image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2319343996,1107396922&fm=26&gp=0.jpg',
		attr_val: '激光导航 扫拖一体',
		stock: 15,
		title: '科沃斯 Ecovacs 扫地机器人',
		price: 1348.00,
		number: 1
	},
	{
		id: 9,
		image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2668268226,1765897385&fm=26&gp=0.jpg',
		attr_val: 'XL',
		stock: 55,
		title: '朵绒菲小西装',
		price: 175.88,
		number: 1
	},
	{
		id: 10,
		image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552410549432&di=06dd3758053fb6d6362516f30a42d055&imgtype=0&src=http%3A%2F%2Fimgcache.mysodao.com%2Fimg3%2FM0A%2F67%2F42%2FCgAPD1vNSsHNm-TnAAEy61txQb4543_400x400x2.JPG',
		attr_val: '520 #粉红色',
		stock: 15,
		title: '迪奥（Dior）烈艳唇膏',
		price: 1089.00,
		number: 1
	},
	{
		id: 11,
		image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1031875829,2994442603&fm=26&gp=0.jpg',
		attr_val: '樱花味润手霜 30ml',
		stock: 15,
		title: "欧舒丹（L'OCCITANE）乳木果",
		price: 128,
		number: 1
	},
	{
		id: 12,
		image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553007107&di=390915aa8a022cf0b03c03340881b0e7&imgtype=jpg&er=1&src=http%3A%2F%2Fimg13.360buyimg.com%2Fn0%2Fjfs%2Ft646%2F285%2F736444951%2F480473%2Faa701c97%2F548176feN10c9ed7b.jpg',
		attr_val: '特级 12个',
		stock: 7,
		title: '新疆阿克苏苹果 特级',
		price: 58.8,
		number: 10
	},
	{
		id: 13,
		image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552405266625&di=a703f2b2cdb0fe7f3f05f62dd91307ab&imgtype=0&src=http%3A%2F%2Fwww.78.cn%2Fzixun%2Fnews%2Fupload%2F20190214%2F1550114706486250.jpg',
		attr_val: '春装款/m',
		stock: 15,
		title: '女装2019春秋新款',
		price: 420.00,
		number: 1
	}
];
//详情展示页面
const detailData = {
	title: '纯种金毛幼犬活体有血统证书',
	title2: '拆家小能手 你值得拥有',
	favorite: true,
	imgList: [{
			src: 'http://img0.imgtn.bdimg.com/it/u=2396068252,4277062836&fm=26&gp=0.jpg'
		},
		{
			src: 'http://img.pconline.com.cn/images/upload/upc/tx/itbbs/1309/06/c4/25310541_1378426131583.jpg'
		},
		{
			src: 'http://img.pconline.com.cn/images/upload/upc/tx/photoblog/1610/26/c4/28926240_1477451226577_mthumb.jpg'
		},
		{
			src: 'http://picture.ik123.com/uploads/allimg/190219/12-1Z219105139.jpg'
		},
	],
	episodeList: [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24
	],
	guessList: [{
			src: 'http://img.52z.com/upload/news/image/20180530/20180530081619_31029.jpg',
			title: '猫眼指甲油',
			title2: '独树一帜的免照灯猫眼指甲'
		},
		{
			src: 'http://m.china-7.net/uploads/14778449362891.jpg',
			title: '创意屋',
			title2: '创意屋形上下双层高低床'
		},
		{
			src: 'http://www.k73.com/up/allimg/130415/22-130415093527.jpg',
			title: 'MissCandy 指甲油',
			title2: '十分适合喜欢素净的妹纸，尽显淡雅的气质'
		},
		{
			src: 'http://img0.imgtn.bdimg.com/it/u=2108933440,2194129200&fm=214&gp=0.jpg	',
			title: 'RMK 2017星空海蓝唇釉',
			title2: '唇釉质地，上唇后很滋润。少女也会心动的蓝色，透明液体形状。'
		}
	],
	evaList: [{
			src: 'http://gss0.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/77c6a7efce1b9d1663174705fbdeb48f8d546486.jpg',
			nickname: 'Ranth Allngal',
			time: '09-20 12:54',
			zan: '54',
			content: '评论不要太苛刻，不管什么产品都会有瑕疵，客服也说了可以退货并且商家承担运费，我觉得至少态度就可以给五星。'
		},
		{
			src: 'http://img0.imgtn.bdimg.com/it/u=2396068252,4277062836&fm=26&gp=0.jpg',
			nickname: 'Ranth Allngal',
			time: '09-20 12:54',
			zan: '54',
			content: '楼上说的好有道理。'
		}
	]
}
const shareList = [{
		type: 1,
		icon: 'https://img.edows.cn/wx/share_wechat.png',
		text: '微信好友'
	},
	{
		type: 2,
		icon: '/static/temp/share_moment.png',
		text: '朋友圈'
	},
	{
		type: 3,
		icon: '/static/temp/share_qq.png',
		text: 'QQ好友'
	},
	{
		type: 4,
		icon: '/static/temp/share_qqzone.png',
		text: 'QQ空间'
	}
]
const lazyLoadList = [{
		src: 'http://img0.imgtn.bdimg.com/it/u=2396068252,4277062836&fm=26&gp=0.jpg'
	},
	{
		src: 'http://img.pconline.com.cn/images/upload/upc/tx/itbbs/1309/06/c4/25310541_1378426131583.jpg'
	},
	{
		src: 'http://img.pconline.com.cn/images/upload/upc/tx/photoblog/1610/26/c4/28926240_1477451226577_mthumb.jpg'
	},
	{
		src: 'http://picture.ik123.com/uploads/allimg/190219/12-1Z219105139.jpg'
	},
	{
		src: 'http://img5.imgtn.bdimg.com/it/u=2904900134,438461613&fm=26&gp=0.jpg'
	},
	{
		src: 'http://img1.imgtn.bdimg.com/it/u=1690475408,2565370337&fm=26&gp=0.jpg'
	},
	{
		src: 'http://img.99114.com/group1/M00/7F/99/wKgGS1kVrPGAe5LmAAU2KrJmb3Q923_600_600.jpg'
	},
	{
		src: 'http://img4.imgtn.bdimg.com/it/u=261047209,372231813&fm=26&gp=0.jpg'
	},
	{
		src: 'http://i2.17173cdn.com/i7mz64/YWxqaGBf/tu17173com/20150107/eMyVMObjlbcvDEv.jpg'
	},
	{
		src: 'http://img008.hc360.cn/m4/M02/E7/87/wKhQ6FSrfU6EfUoyAAAAAITAfyc280.jpg'
	},
	{
		src: 'http://pic1.win4000.com/wallpaper/d/5991569950166.jpg'
	},
	{
		src: 'http://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/6f061d950a7b0208f9fe945e60d9f2d3572cc85e.jpg'
	},
	{
		src: 'http://pic41.nipic.com/20140429/18169759_125841756000_2.jpg'
	},
	{
		src: 'http://www.k73.com/up/allimg/130415/22-130415093527.jpg'
	},
	{
		src: 'http://img.52z.com/upload/news/image/20180530/20180530081619_31029.jpg'
	},
	{
		src: 'http://b-ssl.duitang.com/uploads/item/201410/02/20141002111638_tXAzU.jpeg'
	},
	{
		src: 'http://img2.ph.126.net/C4JW6f57QWSB21-8jh2UGQ==/1762596304262286698.jpg'
	},
	{
		src: 'http://att.bbs.duowan.com/forum/201405/17/190257nzcvkkdg6w2e8226.jpg'
	},
	{
		src: 'http://attach.bbs.miui.com/forum/201504/10/223644v3intigyvva0vgym.jpg'
	},
	{
		src: 'http://pic1.win4000.com/mobile/3/57888a298d61d.jpg'
	},
]

const orderList = [{
		time: '2019-04-06 11:37',
		orderId:'201909030001',
		state: 1,
		goodsList: [{
				title: '古黛妃 短袖t恤女 春夏装2019新款韩版宽松',
				price: 179.5,
				image: 'https://img13.360buyimg.com/n8/jfs/t1/30343/20/1029/481370/5c449438Ecb46a15b/2b2adccb6dc742fd.jpg',
				number: 1,
				attr: '珊瑚粉 M'
			},
			{
				title: '古黛妃 短袖t恤女 春夏装2019新款韩版宽松',
				price: 179.5,
				image: 'https://img13.360buyimg.com/n8/jfs/t1/30343/20/1029/481370/5c449438Ecb46a15b/2b2adccb6dc742fd.jpg',
				number: 1,
				attr: '珊瑚粉 M'
			},
			{
				title: '古黛妃 短袖t恤女 春夏装2019新款韩版宽松',
				price: 179.5,
				image: 'https://img13.360buyimg.com/n8/jfs/t1/30343/20/1029/481370/5c449438Ecb46a15b/2b2adccb6dc742fd.jpg',
				number: 1,
				attr: '珊瑚粉 M'
			},
			{
				title: '古黛妃 短袖t恤女 春夏装2019新款韩版宽松',
				price: 179.5,
				image: 'https://img13.360buyimg.com/n8/jfs/t1/30343/20/1029/481370/5c449438Ecb46a15b/2b2adccb6dc742fd.jpg',
				number: 1,
				attr: '珊瑚粉 M'
			}
		]
	},
	{
		time: '2019-04-06 11:37',
		orderId:'201909030002',
		state: 9,
		goodsList: [{
			title: '古黛妃 短袖t恤女 春夏装2019新款韩版宽松',
			price: 179.5,
			image: 'https://img13.360buyimg.com/n8/jfs/t1/30343/20/1029/481370/5c449438Ecb46a15b/2b2adccb6dc742fd.jpg',
			number: 1,
			attr: '珊瑚粉 M'
		}]
	},
	{
		time: '2019-04-06 11:37',
		orderId:'201909030003',
		state: 1,
		goodsList: [{
				title: '古黛妃 短袖t恤女 春夏装2019新款韩版宽松',
				price: 179.5,
				image: 'https://img13.360buyimg.com/n8/jfs/t1/30343/20/1029/481370/5c449438Ecb46a15b/2b2adccb6dc742fd.jpg',
				number: 1,
				attr: '珊瑚粉 M'
			},
			{
				title: '古黛妃 短袖t恤女 春夏装2019新款韩版宽松',
				price: 179.5,
				image: 'https://img13.360buyimg.com/n8/jfs/t1/30343/20/1029/481370/5c449438Ecb46a15b/2b2adccb6dc742fd.jpg',
				number: 1,
				attr: '珊瑚粉 M'
			},
			{
				title: '古黛妃 短袖t恤女 春夏装2019新款韩版宽松',
				price: 179.5,
				image: 'https://img13.360buyimg.com/n8/jfs/t1/30343/20/1029/481370/5c449438Ecb46a15b/2b2adccb6dc742fd.jpg',
				number: 1,
				attr: '珊瑚粉 M'
			},
			{
				title: '古黛妃 短袖t恤女 春夏装2019新款韩版宽松',
				price: 179.5,
				image: 'https://img13.360buyimg.com/n8/jfs/t1/30343/20/1029/481370/5c449438Ecb46a15b/2b2adccb6dc742fd.jpg',
				number: 1,
				attr: '珊瑚粉 M'
			}
		]
	},
	{
		time: '2019-04-06 11:37',
		orderId:'201909030004',
		state: 1,
		goodsList: [{
			title: '回力女鞋高帮帆布鞋女学生韩版鞋子女2019潮鞋女鞋新款春季板鞋女',
			price: 69,
			image: 'https://img.alicdn.com/imgextra/i3/2128794607/TB2gzzoc41YBuNjy1zcXXbNcXXa_!!2128794607.jpg_430x430q90.jpg',
			number: 1,
			attr: '白色-高帮 39'
		}]
	},
	{
		time: '2019-04-06 11:37',
		orderId:'201909030005',
		state: 1,
		goodsList: [{
				title: '古黛妃 短袖t恤女 春夏装2019新款韩版宽松',
				price: 179.5,
				image: 'https://img13.360buyimg.com/n8/jfs/t1/30343/20/1029/481370/5c449438Ecb46a15b/2b2adccb6dc742fd.jpg',
				number: 1,
				attr: '珊瑚粉 M'
			},
			{
				title: '古黛妃 短袖t恤女 春夏装2019新款韩版宽松',
				price: 179.5,
				image: 'https://img13.360buyimg.com/n8/jfs/t1/30343/20/1029/481370/5c449438Ecb46a15b/2b2adccb6dc742fd.jpg',
				number: 1,
				attr: '珊瑚粉 M'
			},
			{
				title: '古黛妃 短袖t恤女 春夏装2019新款韩版宽松',
				price: 179.5,
				image: 'https://img13.360buyimg.com/n8/jfs/t1/30343/20/1029/481370/5c449438Ecb46a15b/2b2adccb6dc742fd.jpg',
				number: 1,
				attr: '珊瑚粉 M'
			},
			{
				title: '古黛妃 短袖t恤女 春夏装2019新款韩版宽松',
				price: 179.5,
				image: 'https://img13.360buyimg.com/n8/jfs/t1/30343/20/1029/481370/5c449438Ecb46a15b/2b2adccb6dc742fd.jpg',
				number: 1,
				attr: '珊瑚粉 M'
			}
		]
	},
	{
		time: '2019-04-06 11:37',
		orderId:'201909030006',
		state: 1,
		goodsList: [{
				title: '古黛妃 短袖t恤女 春夏装2019新款韩版宽松',
				price: 179.5,
				image: 'https://img13.360buyimg.com/n8/jfs/t1/30343/20/1029/481370/5c449438Ecb46a15b/2b2adccb6dc742fd.jpg',
				number: 1,
				attr: '珊瑚粉 M'
			},
			{
				title: '古黛妃 短袖t恤女 春夏装2019新款韩版宽松',
				price: 179.5,
				image: 'https://img13.360buyimg.com/n8/jfs/t1/30343/20/1029/481370/5c449438Ecb46a15b/2b2adccb6dc742fd.jpg',
				number: 1,
				attr: '珊瑚粉 M'
			},
			{
				title: '古黛妃 短袖t恤女 春夏装2019新款韩版宽松',
				price: 179.5,
				image: 'https://img13.360buyimg.com/n8/jfs/t1/30343/20/1029/481370/5c449438Ecb46a15b/2b2adccb6dc742fd.jpg',
				number: 1,
				attr: '珊瑚粉 M'
			},
			{
				title: '古黛妃 短袖t恤女 春夏装2019新款韩版宽松',
				price: 179.5,
				image: 'https://img13.360buyimg.com/n8/jfs/t1/30343/20/1029/481370/5c449438Ecb46a15b/2b2adccb6dc742fd.jpg',
				number: 1,
				attr: '珊瑚粉 M'
			}
		]
	}

]
const cateList = [{
		id: 1,
		name: '车载电器'
	},
	{
		id: 2,
		name: '改装用品'
	},
	{
		id: 3,
		name: '保养用品'
	},
	{
		id: 4,
		name: '汽车玻璃'
	},
	{
		id: 5,
		name: '空调养护'
	},
	{
		id: 6,
		name: '减震动力'
	},
	{
		id: 7,
		pid: 1,
		name: '车载电器'
	},
	{
		id: 8,
		pid: 7,
		name: '行车记录仪',
		picture: '/static/temp/cate1.jpg'
	},
	{
		id: 9,
		pid: 7,
		name: '倒车影像',
		picture: '/static/temp/cate2.jpg'
	},
	{
		id: 10,
		pid: 7,
		name: '车载冰箱',
		picture: '/static/temp/cate3.jpg'
	},
	{
		id: 11,
		pid: 7,
		name: '车载吸尘器',
		picture: '/static/temp/cate4.jpg'
	},
	{
		id: 80,
		pid: 7,
		name: '行车记录仪',
		picture: '/static/temp/cate1.jpg'
	},
	{
		id: 90,
		pid: 7,
		name: '倒车影像',
		picture: '/static/temp/cate2.jpg'
	},
	{
		id: 100,
		pid: 7,
		name: '车载冰箱',
		picture: '/static/temp/cate3.jpg'
	},
	{
		id: 110,
		pid: 7,
		name: '车载吸尘器',
		picture: '/static/temp/cate4.jpg'
	},
	{
		id: 17,
		pid: 2,
		name: '改装用品',
	},

	{
		id: 19,
		pid: 17,
		name: '冬菇头',
		picture: '/static/temp/cate5.jpg'
	},
	{
		id: 20,
		pid: 17,
		name: '排气系统',
		picture: '/static/temp/cate6.jpg'
	},
	{
		id: 21,
		pid: 17,
		name: '车载冰箱',
		picture: '/static/temp/cate3.jpg'
	},
	{
		id: 22,
		pid: 17,
		name: '车载吸尘器',
		picture: '/static/temp/cate4.jpg'
	},

	{
		id: 25,
		pid: 3,
		name: '保养用品'
	},

	{
		id: 27,
		pid: 25,
		name: '男士行车记录仪',
		picture: '/static/temp/cate1.jpg'
	},
	{
		id: 28,
		pid: 25,
		name: '倒车影像',
		picture: '/static/temp/cate2.jpg'
	},
	{
		id: 29,
		pid: 25,
		name: '车载冰箱',
		picture: '/static/temp/cate3.jpg'
	},
	{
		id: 30,
		pid: 25,
		name: '车载吸尘器',
		picture: '/static/temp/cate4.jpg'
	},

	{
		id: 31,
		pid: 4,
		name: '汽车玻璃'
	},

	{
		id: 32,
		pid: 31,
		name: '行车记录仪',
		picture: '/static/temp/cate1.jpg'
	},
	{
		id: 33,
		pid: 31,
		name: '倒车影像',
		picture: '/static/temp/cate2.jpg'
	},
	{
		id: 34,
		pid: 31,
		name: '车载冰箱',
		picture: '/static/temp/cate3.jpg'
	},
	{
		id: 35,
		pid: 31,
		name: '车载吸尘器',
		picture: '/static/temp/cate4.jpg'
	},

	{
		id: 36,
		pid: 5,
		name: '空调养护'
	},

	{
		id: 37,
		pid: 36,
		name: '行车记录仪',
		picture: '/static/temp/cate1.jpg'
	},
	{
		id: 38,
		pid: 36,
		name: '倒车影像',
		picture: '/static/temp/cate2.jpg'
	},
	{
		id: 39,
		pid: 36,
		name: '车载冰箱',
		picture: '/static/temp/cate3.jpg'
	},
	{
		id: 40,
		pid: 36,
		name: '车载吸尘器',
		picture: '/static/temp/cate4.jpg'
	},

	{
		id: 41,
		pid: 6,
		name: '减震动力'
	},

	{
		id: 42,
		pid: 41,
		name: '行车记录仪',
		picture: '/static/temp/cate1.jpg'
	},
	{
		id: 43,
		pid: 41,
		name: '倒车影像',
		picture: '/static/temp/cate2.jpg'
	},
	{
		id: 44,
		pid: 41,
		name: '车载冰箱',
		picture: '/static/temp/cate3.jpg'
	},
	{
		id: 45,
		pid: 41,
		name: '车载吸尘器',
		picture: '/static/temp/cate4.jpg'
	},

	{
		id: 420,
		pid: 41,
		name: '行车记录仪',
		picture: '/static/temp/cate1.jpg'
	},
	{
		id: 430,
		pid: 41,
		name: '倒车影像',
		picture: '/static/temp/cate2.jpg'
	},
	{
		id: 440,
		pid: 41,
		name: '车载冰箱',
		picture: '/static/temp/cate3.jpg'
	},
	{
		id: 450,
		pid: 41,
		name: '车载吸尘器',
		picture: '/static/temp/cate4.jpg'
	}


]

export default {
	carouselList,
	cartList,
	detailData,
	lazyLoadList,
	userInfo,
	shareList,
	goodsList,
	orderList,
	cateList
}
