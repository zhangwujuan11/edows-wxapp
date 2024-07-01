require('../common/vendor.js');const city = [
	{
		"code": "150100",
		"fullName": "呼和浩特市",
		"shortName": "呼和浩特",
		"parentCode": "150000",
		"fullNameAbbrPinYin": "HHHTS",
		"type": 3,
		"carNumber": "蒙A"
	},
	{
		"code": "340700",
		"fullName": "铜陵市",
		"shortName": "铜陵",
		"parentCode": "340000",
		"fullNameAbbrPinYin": "TLS",
		"type": 3,
		"carNumber": "皖G"
	},
	{
		"code": "431200",
		"fullName": "怀化市",
		"shortName": "怀化",
		"parentCode": "430000",
		"fullNameAbbrPinYin": "HHS",
		"type": 3,
		"carNumber": "湘N"
	},
	{
		"code": "340800",
		"fullName": "安庆市",
		"shortName": "安庆",
		"parentCode": "340000",
		"fullNameAbbrPinYin": "AQS",
		"type": 3,
		"carNumber": "皖H"
	},
	{
		"code": "120100",
		"fullName": "天津市",
		"shortName": "天津",
		"parentCode": "120000",
		"fullNameAbbrPinYin": "TJCQ",
		"type": 3,
		"carNumber": null
	},
	{
		"code": "360200",
		"fullName": "景德镇市",
		"shortName": "景德镇",
		"parentCode": "360000",
		"fullNameAbbrPinYin": "JDZS",
		"type": 3,
		"carNumber": "赣H"
	},
	{
		"code": "360400",
		"fullName": "九江市",
		"shortName": "九江",
		"parentCode": "360000",
		"fullNameAbbrPinYin": "JJS",
		"type": 3,
		"carNumber": "赣G"
	},
	{
		"code": "431100",
		"fullName": "永州市",
		"shortName": "永州",
		"parentCode": "430000",
		"fullNameAbbrPinYin": "YZS",
		"type": 3,
		"carNumber": "湘M"
	},
	{
		"code": "150200",
		"fullName": "包头市",
		"shortName": "包头",
		"parentCode": "150000",
		"fullNameAbbrPinYin": "BTS",
		"type": 3,
		"carNumber": "蒙B"
	},
	{
		"code": "340600",
		"fullName": "淮北市",
		"shortName": "淮北",
		"parentCode": "340000",
		"fullNameAbbrPinYin": "HBS",
		"type": 3,
		"carNumber": "皖F"
	},
	{
		"code": "640100",
		"fullName": "银川市",
		"shortName": "银川",
		"parentCode": "640000",
		"fullNameAbbrPinYin": "YCS",
		"type": 3,
		"carNumber": "宁A"
	},
	{
		"code": "331100",
		"fullName": "丽水市",
		"shortName": "丽水",
		"parentCode": "330000",
		"fullNameAbbrPinYin": "LSS",
		"type": 3,
		"carNumber": "浙K"
	},
	{
		"code": "360300",
		"fullName": "萍乡市",
		"shortName": "萍乡",
		"parentCode": "360000",
		"fullNameAbbrPinYin": "PXS",
		"type": 3,
		"carNumber": "赣J"
	},
	{
		"code": "150300",
		"fullName": "乌海市",
		"shortName": "乌海",
		"parentCode": "150000",
		"fullNameAbbrPinYin": "WHS",
		"type": 3,
		"carNumber": "蒙C"
	},
	{
		"code": "360500",
		"fullName": "新余市",
		"shortName": "新余",
		"parentCode": "360000",
		"fullNameAbbrPinYin": "XYS",
		"type": 3,
		"carNumber": "赣K"
	},
	{
		"code": "653100",
		"fullName": "喀什地区",
		"shortName": "喀什地区",
		"parentCode": "650000",
		"fullNameAbbrPinYin": "KSDQ",
		"type": 3,
		"carNumber": "新Q"
	},
	{
		"code": "445100",
		"fullName": "潮州市",
		"shortName": "潮州",
		"parentCode": "440000",
		"fullNameAbbrPinYin": "CZS",
		"type": 3,
		"carNumber": "粤U"
	},
	{
		"code": "640200",
		"fullName": "石嘴山市",
		"shortName": "石嘴山",
		"parentCode": "640000",
		"fullNameAbbrPinYin": "SZSS",
		"type": 3,
		"carNumber": "宁B"
	},
	{
		"code": "511000",
		"fullName": "内江市",
		"shortName": "内江",
		"parentCode": "510000",
		"fullNameAbbrPinYin": "NJS",
		"type": 3,
		"carNumber": "川K"
	},
	{
		"code": "210100",
		"fullName": "沈阳市",
		"shortName": "沈阳",
		"parentCode": "210000",
		"fullNameAbbrPinYin": "SYS",
		"type": 3,
		"carNumber": "辽A"
	},
	{
		"code": "445200",
		"fullName": "揭阳市",
		"shortName": "揭阳",
		"parentCode": "440000",
		"fullNameAbbrPinYin": "JYS",
		"type": 3,
		"carNumber": "粤V"
	},
	{
		"code": "653200",
		"fullName": "和田地区",
		"shortName": "和田地区",
		"parentCode": "650000",
		"fullNameAbbrPinYin": "HTDQ",
		"type": 3,
		"carNumber": "新R"
	},
	{
		"code": "513200",
		"fullName": "阿坝藏族羌族自治州",
		"shortName": "阿坝藏族羌族自治州",
		"parentCode": "510000",
		"fullNameAbbrPinYin": "ABZZQZZZZ",
		"type": 3,
		"carNumber": "川U"
	},
	{
		"code": "331000",
		"fullName": "台州市",
		"shortName": "台州",
		"parentCode": "330000",
		"fullNameAbbrPinYin": "TZS",
		"type": 3,
		"carNumber": "浙J"
	},
	{
		"code": "360600",
		"fullName": "鹰潭市",
		"shortName": "鹰潭",
		"parentCode": "360000",
		"fullNameAbbrPinYin": "YTS",
		"type": 3,
		"carNumber": "赣L"
	},
	{
		"code": "150400",
		"fullName": "赤峰市",
		"shortName": "赤峰",
		"parentCode": "150000",
		"fullNameAbbrPinYin": "CFS",
		"type": 3,
		"carNumber": "蒙D"
	},
	{
		"code": "653000",
		"fullName": "克孜勒苏柯尔克孜自治州",
		"shortName": "克孜勒苏柯尔克孜自治州",
		"parentCode": "650000",
		"fullNameAbbrPinYin": "KZLSKEKZZZZ",
		"type": 3,
		"carNumber": "新P"
	},
	{
		"code": "640300",
		"fullName": "吴忠市",
		"shortName": "吴忠",
		"parentCode": "640000",
		"fullNameAbbrPinYin": "WZS",
		"type": 3,
		"carNumber": "宁C"
	},
	{
		"code": "431300",
		"fullName": "娄底市",
		"shortName": "娄底",
		"parentCode": "430000",
		"fullNameAbbrPinYin": "LDS",
		"type": 3,
		"carNumber": "湘K"
	},
	{
		"code": "511100",
		"fullName": "乐山市",
		"shortName": "乐山",
		"parentCode": "510000",
		"fullNameAbbrPinYin": "LSS",
		"type": 3,
		"carNumber": "川L"
	},
	{
		"code": "513300",
		"fullName": "甘孜藏族自治州",
		"shortName": "甘孜藏族自治州",
		"parentCode": "510000",
		"fullNameAbbrPinYin": "GZZZZZZ",
		"type": 3,
		"carNumber": "川V"
	},
	{
		"code": "150500",
		"fullName": "通辽市",
		"shortName": "通辽",
		"parentCode": "150000",
		"fullNameAbbrPinYin": "TLS",
		"type": 3,
		"carNumber": "蒙G"
	},
	{
		"code": "340300",
		"fullName": "蚌埠市",
		"shortName": "蚌埠",
		"parentCode": "340000",
		"fullNameAbbrPinYin": "BBS",
		"type": 3,
		"carNumber": "皖C"
	},
	{
		"code": "640400",
		"fullName": "固原市",
		"shortName": "固原",
		"parentCode": "640000",
		"fullNameAbbrPinYin": "GYS",
		"type": 3,
		"carNumber": "宁D"
	},
	{
		"code": "440100",
		"fullName": "广州市",
		"shortName": "广州",
		"parentCode": "440000",
		"fullNameAbbrPinYin": "GZS",
		"type": 3,
		"carNumber": "粤A"
	},
	{
		"code": "370900",
		"fullName": "泰安市",
		"shortName": "泰安",
		"parentCode": "370000",
		"fullNameAbbrPinYin": "TAS",
		"type": 3,
		"carNumber": "鲁J"
	},
	{
		"code": "513400",
		"fullName": "凉山彝族自治州",
		"shortName": "凉山彝族自治州",
		"parentCode": "510000",
		"fullNameAbbrPinYin": "LSYZZZZ",
		"type": 3,
		"carNumber": "川W"
	},
	{
		"code": "150600",
		"fullName": "鄂尔多斯市",
		"shortName": "鄂尔多斯",
		"parentCode": "150000",
		"fullNameAbbrPinYin": "EEDSS",
		"type": 3,
		"carNumber": "蒙K"
	},
	{
		"code": "340200",
		"fullName": "芜湖市",
		"shortName": "芜湖",
		"parentCode": "340000",
		"fullNameAbbrPinYin": "WHS",
		"type": 3,
		"carNumber": "皖B"
	},
	{
		"code": "640500",
		"fullName": "中卫市",
		"shortName": "中卫",
		"parentCode": "640000",
		"fullNameAbbrPinYin": "ZWS",
		"type": 3,
		"carNumber": "宁E"
	},
	{
		"code": "810000",
		"fullName": "香港特别行政区",
		"shortName": "香港",
		"parentCode": "1",
		"fullNameAbbrPinYin": "XGTBXZQ",
		"type": 3,
		"carNumber": null
	},
	{
		"code": "433100",
		"fullName": "湘西土家族苗族自治州",
		"shortName": "湘西土家族苗族自治州",
		"parentCode": "430000",
		"fullNameAbbrPinYin": "XXTJZMZZZZ",
		"type": 3,
		"carNumber": "湘U"
	},
	{
		"code": "150700",
		"fullName": "呼伦贝尔市",
		"shortName": "呼伦贝尔",
		"parentCode": "150000",
		"fullNameAbbrPinYin": "HLBES",
		"type": 3,
		"carNumber": "蒙E"
	},
	{
		"code": "440300",
		"fullName": "深圳市",
		"shortName": "深圳",
		"parentCode": "440000",
		"fullNameAbbrPinYin": "SZS",
		"type": 3,
		"carNumber": "粤B"
	},
	{
		"code": "431000",
		"fullName": "郴州市",
		"shortName": "郴州",
		"parentCode": "430000",
		"fullNameAbbrPinYin": "CZS",
		"type": 3,
		"carNumber": "湘L"
	},
	{
		"code": "340500",
		"fullName": "马鞍山市",
		"shortName": "马鞍山",
		"parentCode": "340000",
		"fullNameAbbrPinYin": "MASS",
		"type": 3,
		"carNumber": "皖E"
	},
	{
		"code": "152900",
		"fullName": "阿拉善盟",
		"shortName": "阿拉善盟",
		"parentCode": "150000",
		"fullNameAbbrPinYin": "ALSM",
		"type": 3,
		"carNumber": "蒙M"
	},
	{
		"code": "150800",
		"fullName": "巴彦淖尔市",
		"shortName": "巴彦淖尔",
		"parentCode": "150000",
		"fullNameAbbrPinYin": "BYNES",
		"type": 3,
		"carNumber": "蒙L"
	},
	{
		"code": "340400",
		"fullName": "淮南市",
		"shortName": "淮南",
		"parentCode": "340000",
		"fullNameAbbrPinYin": "HNS",
		"type": 3,
		"carNumber": "皖D"
	},
	{
		"code": "440200",
		"fullName": "韶关市",
		"shortName": "韶关",
		"parentCode": "440000",
		"fullNameAbbrPinYin": "SGS",
		"type": 3,
		"carNumber": "粤F"
	},
	{
		"code": "360100",
		"fullName": "南昌市",
		"shortName": "南昌",
		"parentCode": "360000",
		"fullNameAbbrPinYin": "NCS",
		"type": 3,
		"carNumber": "赣A"
	},
	{
		"code": "110100",
		"fullName": "北京市",
		"shortName": "北京",
		"parentCode": "110000",
		"fullNameAbbrPinYin": "BJCQ",
		"type": 3,
		"carNumber": null
	},
	{
		"code": "511700",
		"fullName": "达州市",
		"shortName": "达州",
		"parentCode": "510000",
		"fullNameAbbrPinYin": "DZS",
		"type": 3,
		"carNumber": "川S"
	},
	{
		"code": "231200",
		"fullName": "绥化市",
		"shortName": "绥化",
		"parentCode": "230000",
		"fullNameAbbrPinYin": "SHS",
		"type": 3,
		"carNumber": "黑M"
	},
	{
		"code": "533400",
		"fullName": "迪庆藏族自治州",
		"shortName": "迪庆藏族自治州",
		"parentCode": "530000",
		"fullNameAbbrPinYin": "DQZZZZZ",
		"type": 3,
		"carNumber": "云R"
	},
	{
		"code": "131000",
		"fullName": "廊坊市",
		"shortName": "廊坊",
		"parentCode": "130000",
		"fullNameAbbrPinYin": "LFS",
		"type": 3,
		"carNumber": "冀R"
	},
	{
		"code": "540100",
		"fullName": "拉萨市",
		"shortName": "拉萨",
		"parentCode": "540000",
		"fullNameAbbrPinYin": "LSS",
		"type": 3,
		"carNumber": "藏A"
	},
	{
		"code": "370500",
		"fullName": "东营市",
		"shortName": "东营",
		"parentCode": "370000",
		"fullNameAbbrPinYin": "DYS",
		"type": 3,
		"carNumber": "鲁E"
	},
	{
		"code": "440500",
		"fullName": "汕头市",
		"shortName": "汕头",
		"parentCode": "440000",
		"fullNameAbbrPinYin": "STS",
		"type": 3,
		"carNumber": "粤D"
	},
	{
		"code": "152200",
		"fullName": "兴安盟",
		"shortName": "兴安盟",
		"parentCode": "150000",
		"fullNameAbbrPinYin": "XAM",
		"type": 3,
		"carNumber": "蒙F"
	},
	{
		"code": "321000",
		"fullName": "扬州市",
		"shortName": "扬州",
		"parentCode": "320000",
		"fullNameAbbrPinYin": "YZS",
		"type": 3,
		"carNumber": "苏K"
	},
	{
		"code": "210700",
		"fullName": "锦州市",
		"shortName": "锦州",
		"parentCode": "210000",
		"fullNameAbbrPinYin": "JZS",
		"type": 3,
		"carNumber": "辽G"
	},
	{
		"code": "511800",
		"fullName": "雅安市",
		"shortName": "雅安",
		"parentCode": "510000",
		"fullNameAbbrPinYin": "YAS",
		"type": 3,
		"carNumber": "川T"
	},
	{
		"code": "231100",
		"fullName": "黑河市",
		"shortName": "黑河",
		"parentCode": "230000",
		"fullNameAbbrPinYin": "HHS",
		"type": 3,
		"carNumber": "黑N"
	},
	{
		"code": "533300",
		"fullName": "怒江傈僳族自治州",
		"shortName": "怒江傈僳族自治州",
		"parentCode": "530000",
		"fullNameAbbrPinYin": "NJLSZZZZ",
		"type": 3,
		"carNumber": "云Q"
	},
	{
		"code": "370600",
		"fullName": "烟台市",
		"shortName": "烟台",
		"parentCode": "370000",
		"fullNameAbbrPinYin": "YTS",
		"type": 3,
		"carNumber": "鲁F"
	},
	{
		"code": "411700",
		"fullName": "驻马店市",
		"shortName": "驻马店",
		"parentCode": "410000",
		"fullNameAbbrPinYin": "ZMDS",
		"type": 3,
		"carNumber": "豫Q"
	},
	{
		"code": "440400",
		"fullName": "珠海市",
		"shortName": "珠海",
		"parentCode": "440000",
		"fullNameAbbrPinYin": "ZHS",
		"type": 3,
		"carNumber": "粤C"
	},
	{
		"code": "210600",
		"fullName": "丹东市",
		"shortName": "丹东",
		"parentCode": "210000",
		"fullNameAbbrPinYin": "DDS",
		"type": 3,
		"carNumber": "辽F"
	},
	{
		"code": "370700",
		"fullName": "潍坊市",
		"shortName": "潍坊",
		"parentCode": "370000",
		"fullNameAbbrPinYin": "WFS",
		"type": 3,
		"carNumber": "鲁G"
	},
	{
		"code": "511900",
		"fullName": "巴中市",
		"shortName": "巴中",
		"parentCode": "510000",
		"fullNameAbbrPinYin": "BZS",
		"type": 3,
		"carNumber": "川Y"
	},
	{
		"code": "152500",
		"fullName": "锡林郭勒盟",
		"shortName": "锡林郭勒盟",
		"parentCode": "150000",
		"fullNameAbbrPinYin": "XLGLM",
		"type": 3,
		"carNumber": "蒙H"
	},
	{
		"code": "411600",
		"fullName": "周口市",
		"shortName": "周口",
		"parentCode": "410000",
		"fullNameAbbrPinYin": "ZKS",
		"type": 3,
		"carNumber": "豫P"
	},
	{
		"code": "210900",
		"fullName": "阜新市",
		"shortName": "阜新",
		"parentCode": "210000",
		"fullNameAbbrPinYin": "FXS",
		"type": 3,
		"carNumber": "辽J"
	},
	{
		"code": "440700",
		"fullName": "江门市",
		"shortName": "江门",
		"parentCode": "440000",
		"fullNameAbbrPinYin": "JMS",
		"type": 3,
		"carNumber": "粤J"
	},
	{
		"code": "533100",
		"fullName": "德宏傣族景颇族自治州",
		"shortName": "德宏傣族景颇族自治州",
		"parentCode": "530000",
		"fullNameAbbrPinYin": "DHDZJPZZZZ",
		"type": 3,
		"carNumber": "云N"
	},
	{
		"code": "411500",
		"fullName": "信阳市",
		"shortName": "信阳",
		"parentCode": "410000",
		"fullNameAbbrPinYin": "XYS",
		"type": 3,
		"carNumber": "豫S"
	},
	{
		"code": "131100",
		"fullName": "衡水市",
		"shortName": "衡水",
		"parentCode": "130000",
		"fullNameAbbrPinYin": "HSS",
		"type": 3,
		"carNumber": "冀T"
	},
	{
		"code": "370800",
		"fullName": "济宁市",
		"shortName": "济宁",
		"parentCode": "370000",
		"fullNameAbbrPinYin": "JNS",
		"type": 3,
		"carNumber": "鲁H"
	},
	{
		"code": "440600",
		"fullName": "佛山市",
		"shortName": "佛山",
		"parentCode": "440000",
		"fullNameAbbrPinYin": "FSS",
		"type": 3,
		"carNumber": "粤E"
	},
	{
		"code": "210800",
		"fullName": "营口市",
		"shortName": "营口",
		"parentCode": "210000",
		"fullNameAbbrPinYin": "YKS",
		"type": 3,
		"carNumber": "辽H"
	},
	{
		"code": "450100",
		"fullName": "南宁市",
		"shortName": "南宁",
		"parentCode": "450000",
		"fullNameAbbrPinYin": "NNS",
		"type": 3,
		"carNumber": "桂A"
	},
	{
		"code": "411400",
		"fullName": "商丘市",
		"shortName": "商丘",
		"parentCode": "410000",
		"fullNameAbbrPinYin": "SQS",
		"type": 3,
		"carNumber": "豫N"
	},
	{
		"code": "210300",
		"fullName": "鞍山市",
		"shortName": "鞍山",
		"parentCode": "210000",
		"fullNameAbbrPinYin": "ASS",
		"type": 3,
		"carNumber": "辽C"
	},
	{
		"code": "440900",
		"fullName": "茂名市",
		"shortName": "茂名",
		"parentCode": "440000",
		"fullNameAbbrPinYin": "MMS",
		"type": 3,
		"carNumber": "粤K"
	},
	{
		"code": "450200",
		"fullName": "柳州市",
		"shortName": "柳州",
		"parentCode": "450000",
		"fullNameAbbrPinYin": "LZS",
		"type": 3,
		"carNumber": "桂B"
	},
	{
		"code": "540500",
		"fullName": "山南市",
		"shortName": "山南",
		"parentCode": "540000",
		"fullNameAbbrPinYin": "SNS",
		"type": 3,
		"carNumber": "藏C"
	},
	{
		"code": "370200",
		"fullName": "青岛市",
		"shortName": "青岛",
		"parentCode": "370000",
		"fullNameAbbrPinYin": "QDS",
		"type": 3,
		"carNumber": "鲁B"
	},
	{
		"code": "445300",
		"fullName": "云浮市",
		"shortName": "云浮",
		"parentCode": "440000",
		"fullNameAbbrPinYin": "YFS",
		"type": 3,
		"carNumber": "粤W"
	},
	{
		"code": "540400",
		"fullName": "林芝市",
		"shortName": "林芝",
		"parentCode": "540000",
		"fullNameAbbrPinYin": "LZS",
		"type": 3,
		"carNumber": "藏G"
	},
	{
		"code": "411300",
		"fullName": "南阳市",
		"shortName": "南阳",
		"parentCode": "410000",
		"fullNameAbbrPinYin": "NYS",
		"type": 3,
		"carNumber": "豫R"
	},
	{
		"code": "210200",
		"fullName": "大连市",
		"shortName": "大连",
		"parentCode": "210000",
		"fullNameAbbrPinYin": "DLS",
		"type": 3,
		"carNumber": "辽B"
	},
	{
		"code": "511400",
		"fullName": "眉山市",
		"shortName": "眉山",
		"parentCode": "510000",
		"fullNameAbbrPinYin": "MSS",
		"type": 3,
		"carNumber": "川Z"
	},
	{
		"code": "511300",
		"fullName": "南充市",
		"shortName": "南充",
		"parentCode": "510000",
		"fullNameAbbrPinYin": "NCS",
		"type": 3,
		"carNumber": "川R"
	},
	{
		"code": "450300",
		"fullName": "桂林市",
		"shortName": "桂林",
		"parentCode": "450000",
		"fullNameAbbrPinYin": "GLS",
		"type": 3,
		"carNumber": "桂C"
	},
	{
		"code": "440800",
		"fullName": "湛江市",
		"shortName": "湛江",
		"parentCode": "440000",
		"fullNameAbbrPinYin": "ZJS",
		"type": 3,
		"carNumber": "粤G"
	},
	{
		"code": "370100",
		"fullName": "济南市",
		"shortName": "济南",
		"parentCode": "370000",
		"fullNameAbbrPinYin": "JNS",
		"type": 3,
		"carNumber": "鲁A"
	},
	{
		"code": "370300",
		"fullName": "淄博市",
		"shortName": "淄博",
		"parentCode": "370000",
		"fullNameAbbrPinYin": "ZBS",
		"type": 3,
		"carNumber": "鲁C"
	},
	{
		"code": "540300",
		"fullName": "昌都市",
		"shortName": "昌都",
		"parentCode": "540000",
		"fullNameAbbrPinYin": "CDS",
		"type": 3,
		"carNumber": "藏B"
	},
	{
		"code": "511500",
		"fullName": "宜宾市",
		"shortName": "宜宾",
		"parentCode": "510000",
		"fullNameAbbrPinYin": "YBS",
		"type": 3,
		"carNumber": "川Q"
	},
	{
		"code": "411200",
		"fullName": "三门峡市",
		"shortName": "三门峡",
		"parentCode": "410000",
		"fullNameAbbrPinYin": "SMXS",
		"type": 3,
		"carNumber": "豫M"
	},
	{
		"code": "411100",
		"fullName": "漯河市",
		"shortName": "漯河",
		"parentCode": "410000",
		"fullNameAbbrPinYin": "LHS",
		"type": 3,
		"carNumber": "豫L"
	},
	{
		"code": "450400",
		"fullName": "梧州市",
		"shortName": "梧州",
		"parentCode": "450000",
		"fullNameAbbrPinYin": "WZS",
		"type": 3,
		"carNumber": "桂D"
	},
	{
		"code": "210500",
		"fullName": "本溪市",
		"shortName": "本溪",
		"parentCode": "210000",
		"fullNameAbbrPinYin": "BXS",
		"type": 3,
		"carNumber": "辽E"
	},
	{
		"code": "542500",
		"fullName": "阿里地区",
		"shortName": "阿里地区",
		"parentCode": "540000",
		"fullNameAbbrPinYin": "ALDQ",
		"type": 3,
		"carNumber": "藏F"
	},
	{
		"code": "231000",
		"fullName": "牡丹江市",
		"shortName": "牡丹江",
		"parentCode": "230000",
		"fullNameAbbrPinYin": "MDJS",
		"type": 3,
		"carNumber": "黑C"
	},
	{
		"code": "141000",
		"fullName": "临汾市",
		"shortName": "临汾",
		"parentCode": "140000",
		"fullNameAbbrPinYin": "LFS",
		"type": 3,
		"carNumber": "晋L"
	},
	{
		"code": "370400",
		"fullName": "枣庄市",
		"shortName": "枣庄",
		"parentCode": "370000",
		"fullNameAbbrPinYin": "ZZS",
		"type": 3,
		"carNumber": "鲁D"
	},
	{
		"code": "540200",
		"fullName": "日喀则市",
		"shortName": "日喀则",
		"parentCode": "540000",
		"fullNameAbbrPinYin": "RKZS",
		"type": 3,
		"carNumber": "藏D"
	},
	{
		"code": "511600",
		"fullName": "广安市",
		"shortName": "广安",
		"parentCode": "510000",
		"fullNameAbbrPinYin": "GAS",
		"type": 3,
		"carNumber": "川X"
	},
	{
		"code": "411000",
		"fullName": "许昌市",
		"shortName": "许昌",
		"parentCode": "410000",
		"fullNameAbbrPinYin": "XCS",
		"type": 3,
		"carNumber": "豫K"
	},
	{
		"code": "210400",
		"fullName": "抚顺市",
		"shortName": "抚顺",
		"parentCode": "210000",
		"fullNameAbbrPinYin": "FSS",
		"type": 3,
		"carNumber": "辽D"
	},
	{
		"code": "450500",
		"fullName": "北海市",
		"shortName": "北海",
		"parentCode": "450000",
		"fullNameAbbrPinYin": "BHS",
		"type": 3,
		"carNumber": "桂E"
	},
	{
		"code": "542400",
		"fullName": "那曲市",
		"shortName": "那曲市",
		"parentCode": "540000",
		"fullNameAbbrPinYin": "NQS",
		"type": 3,
		"carNumber": "藏E"
	},
	{
		"code": "610400",
		"fullName": "咸阳市",
		"shortName": "咸阳",
		"parentCode": "610000",
		"fullNameAbbrPinYin": "XYS",
		"type": 3,
		"carNumber": "陕D"
	},
	{
		"code": "532800",
		"fullName": "西双版纳傣族自治州",
		"shortName": "西双版纳傣族自治州",
		"parentCode": "530000",
		"fullNameAbbrPinYin": "XSBNDZZZZ",
		"type": 3,
		"carNumber": "云K"
	},
	{
		"code": "460100",
		"fullName": "海口市",
		"shortName": "海口",
		"parentCode": "460000",
		"fullNameAbbrPinYin": "HKS",
		"type": 3,
		"carNumber": "琼A"
	},
	{
		"code": "711900",
		"fullName": "嘉义县",
		"shortName": "嘉义",
		"parentCode": "710000",
		"fullNameAbbrPinYin": "JYX",
		"type": 3,
		"carNumber": null
	},
	{
		"code": "141100",
		"fullName": "吕梁市",
		"shortName": "吕梁",
		"parentCode": "140000",
		"fullNameAbbrPinYin": "LLS",
		"type": 3,
		"carNumber": "晋J"
	},
	{
		"code": "622900",
		"fullName": "临夏回族自治州",
		"shortName": "临夏回族自治州",
		"parentCode": "620000",
		"fullNameAbbrPinYin": "LXHZZZZ",
		"type": 3,
		"carNumber": "甘N"
	},
	{
		"code": "610300",
		"fullName": "宝鸡市",
		"shortName": "宝鸡",
		"parentCode": "610000",
		"fullNameAbbrPinYin": "BJS",
		"type": 3,
		"carNumber": "陕C"
	},
	{
		"code": "532900",
		"fullName": "大理白族自治州",
		"shortName": "大理白族自治州",
		"parentCode": "530000",
		"fullNameAbbrPinYin": "DLBZZZZ",
		"type": 3,
		"carNumber": "云L"
	},
	{
		"code": "460300",
		"fullName": "三沙市",
		"shortName": "三沙",
		"parentCode": "460000",
		"fullNameAbbrPinYin": "SSS",
		"type": 3,
		"carNumber": null
	},
	{
		"code": "610200",
		"fullName": "铜川市",
		"shortName": "铜川",
		"parentCode": "610000",
		"fullNameAbbrPinYin": "TCS",
		"type": 3,
		"carNumber": "陕B"
	},
	{
		"code": "532600",
		"fullName": "文山壮族苗族自治州",
		"shortName": "文山壮族苗族自治州",
		"parentCode": "530000",
		"fullNameAbbrPinYin": "WSZZMZZZZ",
		"type": 3,
		"carNumber": "云H"
	},
	{
		"code": "222400",
		"fullName": "延边朝鲜族自治州",
		"shortName": "延边朝鲜族自治州",
		"parentCode": "220000",
		"fullNameAbbrPinYin": "YBCXZZZZ",
		"type": 3,
		"carNumber": "吉H"
	},
	{
		"code": "711700",
		"fullName": "彰化县",
		"shortName": "彰化",
		"parentCode": "710000",
		"fullNameAbbrPinYin": "ZHX",
		"type": 3,
		"carNumber": null
	},
	{
		"code": "610100",
		"fullName": "西安市",
		"shortName": "西安",
		"parentCode": "610000",
		"fullNameAbbrPinYin": "XAS",
		"type": 3,
		"carNumber": "陕A"
	},
	{
		"code": "460200",
		"fullName": "三亚市",
		"shortName": "三亚",
		"parentCode": "460000",
		"fullNameAbbrPinYin": "SYS",
		"type": 3,
		"carNumber": "琼B"
	},
	{
		"code": "230100",
		"fullName": "哈尔滨市",
		"shortName": "哈尔滨",
		"parentCode": "230000",
		"fullNameAbbrPinYin": "HEBS",
		"type": 3,
		"carNumber": "黑A"
	},
	{
		"code": "610900",
		"fullName": "安康市",
		"shortName": "安康",
		"parentCode": "610000",
		"fullNameAbbrPinYin": "AKS",
		"type": 3,
		"carNumber": "陕G"
	},
	{
		"code": "321300",
		"fullName": "宿迁市",
		"shortName": "宿迁",
		"parentCode": "320000",
		"fullNameAbbrPinYin": "SQS",
		"type": 3,
		"carNumber": "苏N"
	},
	{
		"code": "421300",
		"fullName": "随州市",
		"shortName": "随州",
		"parentCode": "420000",
		"fullNameAbbrPinYin": "SZS",
		"type": 3,
		"carNumber": "鄂S"
	},
	{
		"code": "510900",
		"fullName": "遂宁市",
		"shortName": "遂宁",
		"parentCode": "510000",
		"fullNameAbbrPinYin": "SNS",
		"type": 3,
		"carNumber": "川J"
	},
	{
		"code": "230200",
		"fullName": "齐齐哈尔市",
		"shortName": "齐齐哈尔",
		"parentCode": "230000",
		"fullNameAbbrPinYin": "QQHES",
		"type": 3,
		"carNumber": "黑B"
	},
	{
		"code": "620100",
		"fullName": "兰州市",
		"shortName": "兰州",
		"parentCode": "620000",
		"fullNameAbbrPinYin": "LZS",
		"type": 3,
		"carNumber": "甘A"
	},
	{
		"code": "652800",
		"fullName": "巴音郭楞蒙古自治州",
		"shortName": "巴音郭楞蒙古自治州",
		"parentCode": "650000",
		"fullNameAbbrPinYin": "BYGLMGZZZ",
		"type": 3,
		"carNumber": "新M"
	},
	{
		"code": "652900",
		"fullName": "阿克苏地区",
		"shortName": "阿克苏地区",
		"parentCode": "650000",
		"fullNameAbbrPinYin": "AKSDQ",
		"type": 3,
		"carNumber": "新N"
	},
	{
		"code": "620300",
		"fullName": "金昌市",
		"shortName": "金昌",
		"parentCode": "620000",
		"fullNameAbbrPinYin": "JCS",
		"type": 3,
		"carNumber": "甘C"
	},
	{
		"code": "610800",
		"fullName": "榆林市",
		"shortName": "榆林",
		"parentCode": "610000",
		"fullNameAbbrPinYin": "YLS",
		"type": 3,
		"carNumber": "陕K"
	},
	{
		"code": "530300",
		"fullName": "曲靖市",
		"shortName": "曲靖",
		"parentCode": "530000",
		"fullNameAbbrPinYin": "QJS",
		"type": 3,
		"carNumber": "云D"
	},
	{
		"code": "510800",
		"fullName": "广元市",
		"shortName": "广元",
		"parentCode": "510000",
		"fullNameAbbrPinYin": "GYS",
		"type": 3,
		"carNumber": "川H"
	},
	{
		"code": "230300",
		"fullName": "鸡西市",
		"shortName": "鸡西",
		"parentCode": "230000",
		"fullNameAbbrPinYin": "JXS",
		"type": 3,
		"carNumber": "黑G"
	},
	{
		"code": "620200",
		"fullName": "嘉峪关市",
		"shortName": "嘉峪关",
		"parentCode": "620000",
		"fullNameAbbrPinYin": "JYGS",
		"type": 3,
		"carNumber": "甘B"
	},
	{
		"code": "460400",
		"fullName": "儋州市",
		"shortName": "儋州",
		"parentCode": "460000",
		"fullNameAbbrPinYin": "DZS",
		"type": 3,
		"carNumber": "琼F"
	},
	{
		"code": "532500",
		"fullName": "红河哈尼族彝族自治州",
		"shortName": "红河哈尼族彝族自治州",
		"parentCode": "530000",
		"fullNameAbbrPinYin": "HHHNZYZZZZ",
		"type": 3,
		"carNumber": "云G"
	},
	{
		"code": "330800",
		"fullName": "衢州市",
		"shortName": "衢州",
		"parentCode": "330000",
		"fullNameAbbrPinYin": "QZS",
		"type": 3,
		"carNumber": "浙H"
	},
	{
		"code": "610700",
		"fullName": "汉中市",
		"shortName": "汉中",
		"parentCode": "610000",
		"fullNameAbbrPinYin": "HZS",
		"type": 3,
		"carNumber": "陕F"
	},
	{
		"code": "321100",
		"fullName": "镇江市",
		"shortName": "镇江",
		"parentCode": "320000",
		"fullNameAbbrPinYin": "ZJS",
		"type": 3,
		"carNumber": "苏L"
	},
	{
		"code": "230400",
		"fullName": "鹤岗市",
		"shortName": "鹤岗",
		"parentCode": "230000",
		"fullNameAbbrPinYin": "HGS",
		"type": 3,
		"carNumber": "黑H"
	},
	{
		"code": "530100",
		"fullName": "昆明市",
		"shortName": "昆明",
		"parentCode": "530000",
		"fullNameAbbrPinYin": "KMS",
		"type": 3,
		"carNumber": "云A"
	},
	{
		"code": "330900",
		"fullName": "舟山市",
		"shortName": "舟山",
		"parentCode": "330000",
		"fullNameAbbrPinYin": "ZSS",
		"type": 3,
		"carNumber": "浙L"
	},
	{
		"code": "610600",
		"fullName": "延安市",
		"shortName": "延安",
		"parentCode": "610000",
		"fullNameAbbrPinYin": "YAS",
		"type": 3,
		"carNumber": "陕J"
	},
	{
		"code": "321200",
		"fullName": "泰州市",
		"shortName": "泰州",
		"parentCode": "320000",
		"fullNameAbbrPinYin": "TZS",
		"type": 3,
		"carNumber": "苏M"
	},
	{
		"code": "310100",
		"fullName": "上海市",
		"shortName": "上海",
		"parentCode": "310000",
		"fullNameAbbrPinYin": "SHCQ",
		"type": 3,
		"carNumber": null
	},
	{
		"code": "610500",
		"fullName": "渭南市",
		"shortName": "渭南",
		"parentCode": "610000",
		"fullNameAbbrPinYin": "WNS",
		"type": 3,
		"carNumber": "陕E"
	},
	{
		"code": "532300",
		"fullName": "楚雄彝族自治州",
		"shortName": "楚雄彝族自治州",
		"parentCode": "530000",
		"fullNameAbbrPinYin": "CXYZZZZ",
		"type": 3,
		"carNumber": "云E"
	},
	{
		"code": "230500",
		"fullName": "双鸭山市",
		"shortName": "双鸭山",
		"parentCode": "230000",
		"fullNameAbbrPinYin": "SYSS",
		"type": 3,
		"carNumber": "黑J"
	},
	{
		"code": "341100",
		"fullName": "滁州市",
		"shortName": "滁州",
		"parentCode": "340000",
		"fullNameAbbrPinYin": "CZS",
		"type": 3,
		"carNumber": "皖M"
	},
	{
		"code": "230600",
		"fullName": "大庆市",
		"shortName": "大庆",
		"parentCode": "230000",
		"fullNameAbbrPinYin": "DQS",
		"type": 3,
		"carNumber": "黑E"
	},
	{
		"code": "522600",
		"fullName": "黔东南苗族侗族自治州",
		"shortName": "黔东南苗族侗族自治州",
		"parentCode": "520000",
		"fullNameAbbrPinYin": "QDNMZDZZZZ",
		"type": 3,
		"carNumber": "贵H"
	},
	{
		"code": "530600",
		"fullName": "昭通市",
		"shortName": "昭通",
		"parentCode": "530000",
		"fullNameAbbrPinYin": "ZTS",
		"type": 3,
		"carNumber": "云C"
	},
	{
		"code": "620600",
		"fullName": "武威市",
		"shortName": "武威",
		"parentCode": "620000",
		"fullNameAbbrPinYin": "WWS",
		"type": 3,
		"carNumber": "甘H"
	},
	{
		"code": "230700",
		"fullName": "伊春市",
		"shortName": "伊春",
		"parentCode": "230000",
		"fullNameAbbrPinYin": "YCS",
		"type": 3,
		"carNumber": "黑F"
	},
	{
		"code": "530700",
		"fullName": "丽江市",
		"shortName": "丽江",
		"parentCode": "530000",
		"fullNameAbbrPinYin": "LJS",
		"type": 3,
		"carNumber": "云P"
	},
	{
		"code": "711100",
		"fullName": "新北市",
		"shortName": "新北",
		"parentCode": "710000",
		"fullNameAbbrPinYin": "XBS",
		"type": 3,
		"carNumber": null
	},
	{
		"code": "421000",
		"fullName": "荆州市",
		"shortName": "荆州",
		"parentCode": "420000",
		"fullNameAbbrPinYin": "JZS",
		"type": 3,
		"carNumber": "鄂D"
	},
	{
		"code": "522700",
		"fullName": "黔南布依族苗族自治州",
		"shortName": "黔南布依族苗族自治州",
		"parentCode": "520000",
		"fullNameAbbrPinYin": "QNBYZMZZZZ",
		"type": 3,
		"carNumber": "贵J"
	},
	{
		"code": "230800",
		"fullName": "佳木斯市",
		"shortName": "佳木斯",
		"parentCode": "230000",
		"fullNameAbbrPinYin": "JMSS",
		"type": 3,
		"carNumber": "黑D"
	},
	{
		"code": "620700",
		"fullName": "张掖市",
		"shortName": "张掖",
		"parentCode": "620000",
		"fullNameAbbrPinYin": "ZYS",
		"type": 3,
		"carNumber": "甘G"
	},
	{
		"code": "341200",
		"fullName": "阜阳市",
		"shortName": "阜阳",
		"parentCode": "340000",
		"fullNameAbbrPinYin": "FYS",
		"type": 3,
		"carNumber": "皖K"
	},
	{
		"code": "220100",
		"fullName": "长春市",
		"shortName": "长春",
		"parentCode": "220000",
		"fullNameAbbrPinYin": "CCS",
		"type": 3,
		"carNumber": "吉A"
	},
	{
		"code": "220200",
		"fullName": "吉林市",
		"shortName": "吉林",
		"parentCode": "220000",
		"fullNameAbbrPinYin": "JLS",
		"type": 3,
		"carNumber": "吉B"
	},
	{
		"code": "522300",
		"fullName": "黔西南布依族苗族自治州",
		"shortName": "黔西南布依族苗族自治州",
		"parentCode": "520000",
		"fullNameAbbrPinYin": "QXNBYZMZZZZ",
		"type": 3,
		"carNumber": "贵E"
	},
	{
		"code": "421100",
		"fullName": "黄冈市",
		"shortName": "黄冈",
		"parentCode": "420000",
		"fullNameAbbrPinYin": "HGS",
		"type": 3,
		"carNumber": "鄂J"
	},
	{
		"code": "530400",
		"fullName": "玉溪市",
		"shortName": "玉溪",
		"parentCode": "530000",
		"fullNameAbbrPinYin": "YXS",
		"type": 3,
		"carNumber": "云F"
	},
	{
		"code": "341300",
		"fullName": "宿州市",
		"shortName": "宿州",
		"parentCode": "340000",
		"fullNameAbbrPinYin": "SZS",
		"type": 3,
		"carNumber": "皖L"
	},
	{
		"code": "620400",
		"fullName": "白银市",
		"shortName": "白银",
		"parentCode": "620000",
		"fullNameAbbrPinYin": "BYS",
		"type": 3,
		"carNumber": "甘D"
	},
	{
		"code": "230900",
		"fullName": "七台河市",
		"shortName": "七台河",
		"parentCode": "230000",
		"fullNameAbbrPinYin": "QTHS",
		"type": 3,
		"carNumber": "黑K"
	},
	{
		"code": "652700",
		"fullName": "博尔塔拉蒙古自治州",
		"shortName": "博尔塔拉蒙古自治州",
		"parentCode": "650000",
		"fullNameAbbrPinYin": "BETLMGZZZ",
		"type": 3,
		"carNumber": "新E"
	},
	{
		"code": "220300",
		"fullName": "四平市",
		"shortName": "四平",
		"parentCode": "220000",
		"fullNameAbbrPinYin": "SPS",
		"type": 3,
		"carNumber": "吉C"
	},
	{
		"code": "421200",
		"fullName": "咸宁市",
		"shortName": "咸宁",
		"parentCode": "420000",
		"fullNameAbbrPinYin": "XNS",
		"type": 3,
		"carNumber": "鄂L"
	},
	{
		"code": "530500",
		"fullName": "保山市",
		"shortName": "保山",
		"parentCode": "530000",
		"fullNameAbbrPinYin": "BSS",
		"type": 3,
		"carNumber": "云M"
	},
	{
		"code": "820000",
		"fullName": "澳门特别行政区",
		"shortName": "澳门",
		"parentCode": "1",
		"fullNameAbbrPinYin": "AMTBXZQ",
		"type": 3,
		"carNumber": null
	},
	{
		"code": "620500",
		"fullName": "天水市",
		"shortName": "天水",
		"parentCode": "620000",
		"fullNameAbbrPinYin": "TSS",
		"type": 3,
		"carNumber": "甘E"
	},
	{
		"code": "711400",
		"fullName": "桃园县",
		"shortName": "桃园",
		"parentCode": "710000",
		"fullNameAbbrPinYin": "TYX",
		"type": 3,
		"carNumber": null
	},
	{
		"code": "360800",
		"fullName": "吉安市",
		"shortName": "吉安",
		"parentCode": "360000",
		"fullNameAbbrPinYin": "JAS",
		"type": 3,
		"carNumber": "赣D"
	},
	{
		"code": "711500",
		"fullName": "苗栗县",
		"shortName": "苗栗",
		"parentCode": "710000",
		"fullNameAbbrPinYin": "MLX",
		"type": 3,
		"carNumber": null
	},
	{
		"code": "360700",
		"fullName": "赣州市",
		"shortName": "赣州",
		"parentCode": "360000",
		"fullNameAbbrPinYin": "GZS",
		"type": 3,
		"carNumber": "赣B"
	},
	{
		"code": "711200",
		"fullName": "宜兰县",
		"shortName": "宜兰",
		"parentCode": "710000",
		"fullNameAbbrPinYin": "YLX",
		"type": 3,
		"carNumber": null
	},
	{
		"code": "530800",
		"fullName": "普洱市",
		"shortName": "普洱",
		"parentCode": "530000",
		"fullNameAbbrPinYin": "PES",
		"type": 3,
		"carNumber": "云J"
	},
	{
		"code": "620800",
		"fullName": "平凉市",
		"shortName": "平凉",
		"parentCode": "620000",
		"fullNameAbbrPinYin": "PLS",
		"type": 3,
		"carNumber": "甘L"
	},
	{
		"code": "652300",
		"fullName": "昌吉回族自治州",
		"shortName": "昌吉回族自治州",
		"parentCode": "650000",
		"fullNameAbbrPinYin": "CJHZZZZ",
		"type": 3,
		"carNumber": "新B"
	},
	{
		"code": "530900",
		"fullName": "临沧市",
		"shortName": "临沧",
		"parentCode": "530000",
		"fullNameAbbrPinYin": "LCS",
		"type": 3,
		"carNumber": "云S"
	},
	{
		"code": "711300",
		"fullName": "新竹县",
		"shortName": "新竹",
		"parentCode": "710000",
		"fullNameAbbrPinYin": "XZX",
		"type": 3,
		"carNumber": null
	},
	{
		"code": "341000",
		"fullName": "黄山市",
		"shortName": "黄山",
		"parentCode": "340000",
		"fullNameAbbrPinYin": "HSS",
		"type": 3,
		"carNumber": "皖J"
	},
	{
		"code": "360900",
		"fullName": "宜春市",
		"shortName": "宜春",
		"parentCode": "360000",
		"fullNameAbbrPinYin": "YCS",
		"type": 3,
		"carNumber": "赣C"
	},
	{
		"code": "620900",
		"fullName": "酒泉市",
		"shortName": "酒泉",
		"parentCode": "620000",
		"fullNameAbbrPinYin": "JQS",
		"type": 3,
		"carNumber": "甘F"
	},
	{
		"code": "430100",
		"fullName": "长沙市",
		"shortName": "长沙",
		"parentCode": "430000",
		"fullNameAbbrPinYin": "CSS",
		"type": 3,
		"carNumber": "湘A"
	},
	{
		"code": "341800",
		"fullName": "宣城市",
		"shortName": "宣城",
		"parentCode": "340000",
		"fullNameAbbrPinYin": "XCS",
		"type": 3,
		"carNumber": "皖P"
	},
	{
		"code": "510300",
		"fullName": "自贡市",
		"shortName": "自贡",
		"parentCode": "510000",
		"fullNameAbbrPinYin": "ZGS",
		"type": 3,
		"carNumber": "川C"
	},
	{
		"code": "441200",
		"fullName": "肇庆市",
		"shortName": "肇庆",
		"parentCode": "440000",
		"fullNameAbbrPinYin": "ZQS",
		"type": 3,
		"carNumber": "粤H"
	},
	{
		"code": "211400",
		"fullName": "葫芦岛市",
		"shortName": "葫芦岛",
		"parentCode": "210000",
		"fullNameAbbrPinYin": "HLDS",
		"type": 3,
		"carNumber": "辽P"
	},
	{
		"code": "710200",
		"fullName": "高雄市",
		"shortName": "高雄",
		"parentCode": "710000",
		"fullNameAbbrPinYin": "GXS",
		"type": 3,
		"carNumber": null
	},
	{
		"code": "650100",
		"fullName": "乌鲁木齐市",
		"shortName": "乌鲁木齐",
		"parentCode": "650000",
		"fullNameAbbrPinYin": "WLMQS",
		"type": 3,
		"carNumber": "新A"
	},
	{
		"code": "520600",
		"fullName": "铜仁市",
		"shortName": "铜仁",
		"parentCode": "520000",
		"fullNameAbbrPinYin": "TRS",
		"type": 3,
		"carNumber": "贵D"
	},
	{
		"code": "510100",
		"fullName": "成都市",
		"shortName": "成都",
		"parentCode": "510000",
		"fullNameAbbrPinYin": "CDS",
		"type": 3,
		"carNumber": "川A"
	},
	{
		"code": "341700",
		"fullName": "池州市",
		"shortName": "池州",
		"parentCode": "340000",
		"fullNameAbbrPinYin": "CZS",
		"type": 3,
		"carNumber": "皖R"
	},
	{
		"code": "211300",
		"fullName": "朝阳市",
		"shortName": "朝阳",
		"parentCode": "210000",
		"fullNameAbbrPinYin": "CYS",
		"type": 3,
		"carNumber": "辽N"
	},
	{
		"code": "710100",
		"fullName": "台北市",
		"shortName": "台北",
		"parentCode": "710000",
		"fullNameAbbrPinYin": "TBS",
		"type": 3,
		"carNumber": null
	},
	{
		"code": "361100",
		"fullName": "上饶市",
		"shortName": "上饶",
		"parentCode": "360000",
		"fullNameAbbrPinYin": "SRS",
		"type": 3,
		"carNumber": "赣E"
	},
	{
		"code": "520100",
		"fullName": "贵阳市",
		"shortName": "贵阳",
		"parentCode": "520000",
		"fullNameAbbrPinYin": "GYS",
		"type": 3,
		"carNumber": "贵A"
	},
	{
		"code": "654200",
		"fullName": "塔城地区",
		"shortName": "塔城地区",
		"parentCode": "650000",
		"fullNameAbbrPinYin": "TCDQ",
		"type": 3,
		"carNumber": "新G"
	},
	{
		"code": "341600",
		"fullName": "亳州市",
		"shortName": "亳州",
		"parentCode": "340000",
		"fullNameAbbrPinYin": "BZS",
		"type": 3,
		"carNumber": "皖S"
	},
	{
		"code": "654300",
		"fullName": "阿勒泰地区",
		"shortName": "阿勒泰地区",
		"parentCode": "650000",
		"fullNameAbbrPinYin": "ALTDQ",
		"type": 3,
		"carNumber": "新H"
	},
	{
		"code": "211200",
		"fullName": "铁岭市",
		"shortName": "铁岭",
		"parentCode": "210000",
		"fullNameAbbrPinYin": "TLS",
		"type": 3,
		"carNumber": "辽M"
	},
	{
		"code": "220800",
		"fullName": "白城市",
		"shortName": "白城",
		"parentCode": "220000",
		"fullNameAbbrPinYin": "BCS",
		"type": 3,
		"carNumber": "吉G"
	},
	{
		"code": "211100",
		"fullName": "盘锦市",
		"shortName": "盘锦",
		"parentCode": "210000",
		"fullNameAbbrPinYin": "PJS",
		"type": 3,
		"carNumber": "辽L"
	},
	{
		"code": "341500",
		"fullName": "六安市",
		"shortName": "六安",
		"parentCode": "340000",
		"fullNameAbbrPinYin": "LAS",
		"type": 3,
		"carNumber": "皖N"
	},
	{
		"code": "654000",
		"fullName": "伊犁哈萨克自治州",
		"shortName": "伊犁哈萨克自治州",
		"parentCode": "650000",
		"fullNameAbbrPinYin": "YLHSKZZZ",
		"type": 3,
		"carNumber": "新F"
	},
	{
		"code": "441600",
		"fullName": "河源市",
		"shortName": "河源",
		"parentCode": "440000",
		"fullNameAbbrPinYin": "HYS",
		"type": 3,
		"carNumber": "粤P"
	},
	{
		"code": "520300",
		"fullName": "遵义市",
		"shortName": "遵义",
		"parentCode": "520000",
		"fullNameAbbrPinYin": "ZYS",
		"type": 3,
		"carNumber": "贵C"
	},
	{
		"code": "623000",
		"fullName": "甘南藏族自治州",
		"shortName": "甘南藏族自治州",
		"parentCode": "620000",
		"fullNameAbbrPinYin": "GNZZZZZ",
		"type": 3,
		"carNumber": "甘P"
	},
	{
		"code": "510700",
		"fullName": "绵阳市",
		"shortName": "绵阳",
		"parentCode": "510000",
		"fullNameAbbrPinYin": "MYS",
		"type": 3,
		"carNumber": "川B"
	},
	{
		"code": "211000",
		"fullName": "辽阳市",
		"shortName": "辽阳",
		"parentCode": "210000",
		"fullNameAbbrPinYin": "LYS",
		"type": 3,
		"carNumber": "辽K"
	},
	{
		"code": "410700",
		"fullName": "新乡市",
		"shortName": "新乡",
		"parentCode": "410000",
		"fullNameAbbrPinYin": "XXS",
		"type": 3,
		"carNumber": "豫G"
	},
	{
		"code": "220700",
		"fullName": "松原市",
		"shortName": "松原",
		"parentCode": "220000",
		"fullNameAbbrPinYin": "SYS",
		"type": 3,
		"carNumber": "吉J"
	},
	{
		"code": "441500",
		"fullName": "汕尾市",
		"shortName": "汕尾",
		"parentCode": "440000",
		"fullNameAbbrPinYin": "SWS",
		"type": 3,
		"carNumber": "粤N"
	},
	{
		"code": "520200",
		"fullName": "六盘水市",
		"shortName": "六盘水",
		"parentCode": "520000",
		"fullNameAbbrPinYin": "LPSS",
		"type": 3,
		"carNumber": "贵B"
	},
	{
		"code": "512000",
		"fullName": "资阳市",
		"shortName": "资阳",
		"parentCode": "510000",
		"fullNameAbbrPinYin": "ZYS",
		"type": 3,
		"carNumber": "川M"
	},
	{
		"code": "451000",
		"fullName": "百色市",
		"shortName": "百色",
		"parentCode": "450000",
		"fullNameAbbrPinYin": "BSS",
		"type": 3,
		"carNumber": "桂L"
	},
	{
		"code": "220600",
		"fullName": "白山市",
		"shortName": "白山",
		"parentCode": "220000",
		"fullNameAbbrPinYin": "BSS",
		"type": 3,
		"carNumber": "吉F"
	},
	{
		"code": "410600",
		"fullName": "鹤壁市",
		"shortName": "鹤壁",
		"parentCode": "410000",
		"fullNameAbbrPinYin": "HBS",
		"type": 3,
		"carNumber": "豫F"
	},
	{
		"code": "510600",
		"fullName": "德阳市",
		"shortName": "德阳",
		"parentCode": "510000",
		"fullNameAbbrPinYin": "DYS",
		"type": 3,
		"carNumber": "川F"
	},
	{
		"code": "410900",
		"fullName": "濮阳市",
		"shortName": "濮阳",
		"parentCode": "410000",
		"fullNameAbbrPinYin": "PYS",
		"type": 3,
		"carNumber": "豫J"
	},
	{
		"code": "441400",
		"fullName": "梅州市",
		"shortName": "梅州",
		"parentCode": "440000",
		"fullNameAbbrPinYin": "MZS",
		"type": 3,
		"carNumber": "粤M"
	},
	{
		"code": "520500",
		"fullName": "毕节市",
		"shortName": "毕节",
		"parentCode": "520000",
		"fullNameAbbrPinYin": "BJS",
		"type": 3,
		"carNumber": "贵F"
	},
	{
		"code": "220500",
		"fullName": "通化市",
		"shortName": "通化",
		"parentCode": "220000",
		"fullNameAbbrPinYin": "THS",
		"type": 3,
		"carNumber": "吉E"
	},
	{
		"code": "510500",
		"fullName": "泸州市",
		"shortName": "泸州",
		"parentCode": "510000",
		"fullNameAbbrPinYin": "LZS",
		"type": 3,
		"carNumber": "川E"
	},
	{
		"code": "520400",
		"fullName": "安顺市",
		"shortName": "安顺",
		"parentCode": "520000",
		"fullNameAbbrPinYin": "ASS",
		"type": 3,
		"carNumber": "贵G"
	},
	{
		"code": "220400",
		"fullName": "辽源市",
		"shortName": "辽源",
		"parentCode": "220000",
		"fullNameAbbrPinYin": "LYS",
		"type": 3,
		"carNumber": "吉D"
	},
	{
		"code": "441300",
		"fullName": "惠州市",
		"shortName": "惠州",
		"parentCode": "440000",
		"fullNameAbbrPinYin": "HZS",
		"type": 3,
		"carNumber": "粤L"
	},
	{
		"code": "410800",
		"fullName": "焦作市",
		"shortName": "焦作",
		"parentCode": "410000",
		"fullNameAbbrPinYin": "JZS",
		"type": 3,
		"carNumber": "豫H"
	},
	{
		"code": "510400",
		"fullName": "攀枝花市",
		"shortName": "攀枝花",
		"parentCode": "510000",
		"fullNameAbbrPinYin": "PZHS",
		"type": 3,
		"carNumber": "川D"
	},
	{
		"code": "232700",
		"fullName": "大兴安岭地区",
		"shortName": "大兴安岭地区",
		"parentCode": "230000",
		"fullNameAbbrPinYin": "DXALDQ",
		"type": 3,
		"carNumber": "黑P"
	},
	{
		"code": "410300",
		"fullName": "洛阳市",
		"shortName": "洛阳",
		"parentCode": "410000",
		"fullNameAbbrPinYin": "LYS",
		"type": 3,
		"carNumber": "豫C"
	},
	{
		"code": "451300",
		"fullName": "来宾市",
		"shortName": "来宾",
		"parentCode": "450000",
		"fullNameAbbrPinYin": "LBS",
		"type": 3,
		"carNumber": "桂G"
	},
	{
		"code": "611000",
		"fullName": "商洛市",
		"shortName": "商洛",
		"parentCode": "610000",
		"fullNameAbbrPinYin": "SLS",
		"type": 3,
		"carNumber": "陕H"
	},
	{
		"code": "330500",
		"fullName": "湖州市",
		"shortName": "湖州",
		"parentCode": "330000",
		"fullNameAbbrPinYin": "HZS",
		"type": 3,
		"carNumber": "浙E"
	},
	{
		"code": "130300",
		"fullName": "秦皇岛市",
		"shortName": "秦皇岛",
		"parentCode": "130000",
		"fullNameAbbrPinYin": "QHDS",
		"type": 3,
		"carNumber": "冀C"
	},
	{
		"code": "371600",
		"fullName": "滨州市",
		"shortName": "滨州",
		"parentCode": "370000",
		"fullNameAbbrPinYin": "BZS",
		"type": 3,
		"carNumber": "鲁M"
	},
	{
		"code": "410200",
		"fullName": "开封市",
		"shortName": "开封",
		"parentCode": "410000",
		"fullNameAbbrPinYin": "KFS",
		"type": 3,
		"carNumber": "豫B"
	},
	{
		"code": "441900",
		"fullName": "东莞市",
		"shortName": "东莞",
		"parentCode": "440000",
		"fullNameAbbrPinYin": "DGS",
		"type": 3,
		"carNumber": "粤S"
	},
	{
		"code": "451400",
		"fullName": "崇左市",
		"shortName": "崇左",
		"parentCode": "450000",
		"fullNameAbbrPinYin": "CZS",
		"type": 3,
		"carNumber": "桂F"
	},
	{
		"code": "130200",
		"fullName": "唐山市",
		"shortName": "唐山",
		"parentCode": "130000",
		"fullNameAbbrPinYin": "TSS",
		"type": 3,
		"carNumber": "冀B"
	},
	{
		"code": "330400",
		"fullName": "嘉兴市",
		"shortName": "嘉兴",
		"parentCode": "330000",
		"fullNameAbbrPinYin": "JXS",
		"type": 3,
		"carNumber": "浙F"
	},
	{
		"code": "371700",
		"fullName": "菏泽市",
		"shortName": "菏泽",
		"parentCode": "370000",
		"fullNameAbbrPinYin": "HZS",
		"type": 3,
		"carNumber": "鲁R"
	},
	{
		"code": "371300",
		"fullName": "临沂市",
		"shortName": "临沂",
		"parentCode": "370000",
		"fullNameAbbrPinYin": "LYS",
		"type": 3,
		"carNumber": "鲁Q"
	},
	{
		"code": "410500",
		"fullName": "安阳市",
		"shortName": "安阳",
		"parentCode": "410000",
		"fullNameAbbrPinYin": "AYS",
		"type": 3,
		"carNumber": "豫E"
	},
	{
		"code": "451100",
		"fullName": "贺州市",
		"shortName": "贺州",
		"parentCode": "450000",
		"fullNameAbbrPinYin": "HZS",
		"type": 3,
		"carNumber": "桂J"
	},
	{
		"code": "330700",
		"fullName": "金华市",
		"shortName": "金华",
		"parentCode": "330000",
		"fullNameAbbrPinYin": "JHS",
		"type": 3,
		"carNumber": "浙G"
	},
	{
		"code": "441800",
		"fullName": "清远市",
		"shortName": "清远",
		"parentCode": "440000",
		"fullNameAbbrPinYin": "QYS",
		"type": 3,
		"carNumber": "粤R"
	},
	{
		"code": "710900",
		"fullName": "嘉义市",
		"shortName": "嘉义",
		"parentCode": "710000",
		"fullNameAbbrPinYin": "JYS",
		"type": 3,
		"carNumber": null
	},
	{
		"code": "130100",
		"fullName": "石家庄市",
		"shortName": "石家庄",
		"parentCode": "130000",
		"fullNameAbbrPinYin": "SJZS",
		"type": 3,
		"carNumber": "冀A"
	},
	{
		"code": "371400",
		"fullName": "德州市",
		"shortName": "德州",
		"parentCode": "370000",
		"fullNameAbbrPinYin": "DZS",
		"type": 3,
		"carNumber": "鲁N"
	},
	{
		"code": "710700",
		"fullName": "基隆市",
		"shortName": "基隆",
		"parentCode": "710000",
		"fullNameAbbrPinYin": "JLS",
		"type": 3,
		"carNumber": null
	},
	{
		"code": "422800",
		"fullName": "恩施土家族苗族自治州",
		"shortName": "恩施土家族苗族自治州",
		"parentCode": "420000",
		"fullNameAbbrPinYin": "ESTJZMZZZZ",
		"type": 3,
		"carNumber": "鄂Q"
	},
	{
		"code": "410400",
		"fullName": "平顶山市",
		"shortName": "平顶山",
		"parentCode": "410000",
		"fullNameAbbrPinYin": "PDSS",
		"type": 3,
		"carNumber": "豫D"
	},
	{
		"code": "330600",
		"fullName": "绍兴市",
		"shortName": "绍兴",
		"parentCode": "330000",
		"fullNameAbbrPinYin": "SXS",
		"type": 3,
		"carNumber": "浙D"
	},
	{
		"code": "451200",
		"fullName": "河池市",
		"shortName": "河池",
		"parentCode": "450000",
		"fullNameAbbrPinYin": "HCS",
		"type": 3,
		"carNumber": "桂M"
	},
	{
		"code": "441700",
		"fullName": "阳江市",
		"shortName": "阳江",
		"parentCode": "440000",
		"fullNameAbbrPinYin": "YJS",
		"type": 3,
		"carNumber": "粤Q"
	},
	{
		"code": "710800",
		"fullName": "新竹市",
		"shortName": "新竹",
		"parentCode": "710000",
		"fullNameAbbrPinYin": "XZS",
		"type": 3,
		"carNumber": null
	},
	{
		"code": "371500",
		"fullName": "聊城市",
		"shortName": "聊城",
		"parentCode": "370000",
		"fullNameAbbrPinYin": "LCS",
		"type": 3,
		"carNumber": "鲁P"
	},
	{
		"code": "710600",
		"fullName": "南投县",
		"shortName": "南投",
		"parentCode": "710000",
		"fullNameAbbrPinYin": "NTX",
		"type": 3,
		"carNumber": null
	},
	{
		"code": "330100",
		"fullName": "杭州市",
		"shortName": "杭州",
		"parentCode": "330000",
		"fullNameAbbrPinYin": "HZS",
		"type": 3,
		"carNumber": "浙A"
	},
	{
		"code": "650500",
		"fullName": "哈密市",
		"shortName": "哈密",
		"parentCode": "650000",
		"fullNameAbbrPinYin": "HMS",
		"type": 3,
		"carNumber": "新L"
	},
	{
		"code": "442100",
		"fullName": "东沙群岛",
		"shortName": "东沙群岛",
		"parentCode": "440000",
		"fullNameAbbrPinYin": "DSQD",
		"type": 3,
		"carNumber": null
	},
	{
		"code": "650400",
		"fullName": "吐鲁番市",
		"shortName": "吐鲁番",
		"parentCode": "650000",
		"fullNameAbbrPinYin": "TLFS",
		"type": 3,
		"carNumber": "新K"
	},
	{
		"code": "710500",
		"fullName": "金门县",
		"shortName": "金门",
		"parentCode": "710000",
		"fullNameAbbrPinYin": "JMX",
		"type": 3,
		"carNumber": null
	},
	{
		"code": "442000",
		"fullName": "中山市",
		"shortName": "中山",
		"parentCode": "440000",
		"fullNameAbbrPinYin": "ZSS",
		"type": 3,
		"carNumber": "粤T"
	},
	{
		"code": "361000",
		"fullName": "抚州市",
		"shortName": "抚州",
		"parentCode": "360000",
		"fullNameAbbrPinYin": "FZS",
		"type": 3,
		"carNumber": "赣F"
	},
	{
		"code": "410100",
		"fullName": "郑州市",
		"shortName": "郑州",
		"parentCode": "410000",
		"fullNameAbbrPinYin": "ZZS",
		"type": 3,
		"carNumber": "豫A"
	},
	{
		"code": "710400",
		"fullName": "台中市",
		"shortName": "台中",
		"parentCode": "710000",
		"fullNameAbbrPinYin": "TZS",
		"type": 3,
		"carNumber": null
	},
	{
		"code": "330300",
		"fullName": "温州市",
		"shortName": "温州",
		"parentCode": "330000",
		"fullNameAbbrPinYin": "WZS",
		"type": 3,
		"carNumber": "浙C"
	},
	{
		"code": "420900",
		"fullName": "孝感市",
		"shortName": "孝感",
		"parentCode": "420000",
		"fullNameAbbrPinYin": "XGS",
		"type": 3,
		"carNumber": "鄂K"
	},
	{
		"code": "500100",
		"fullName": "重庆市",
		"shortName": "重庆",
		"parentCode": "500000",
		"fullNameAbbrPinYin": "CQCQ",
		"type": 3,
		"carNumber": null
	},
	{
		"code": "710300",
		"fullName": "台南市",
		"shortName": "台南",
		"parentCode": "710000",
		"fullNameAbbrPinYin": "TNS",
		"type": 3,
		"carNumber": null
	},
	{
		"code": "650200",
		"fullName": "克拉玛依市",
		"shortName": "克拉玛依",
		"parentCode": "650000",
		"fullNameAbbrPinYin": "KLMYS",
		"type": 3,
		"carNumber": "新J"
	},
	{
		"code": "330200",
		"fullName": "宁波市",
		"shortName": "宁波",
		"parentCode": "330000",
		"fullNameAbbrPinYin": "NBS",
		"type": 3,
		"carNumber": "浙B"
	},
	{
		"code": "420800",
		"fullName": "荆门市",
		"shortName": "荆门",
		"parentCode": "420000",
		"fullNameAbbrPinYin": "JMS",
		"type": 3,
		"carNumber": "鄂H"
	},
	{
		"code": "500200",
		"fullName": "重庆郊县",
		"shortName": "重庆郊县",
		"parentCode": "500000",
		"fullNameAbbrPinYin": "CQJX",
		"type": 3,
		"carNumber": null
	},
	{
		"code": "621200",
		"fullName": "陇南市",
		"shortName": "陇南",
		"parentCode": "620000",
		"fullNameAbbrPinYin": "LNS",
		"type": 3,
		"carNumber": "甘K"
	},
	{
		"code": "350800",
		"fullName": "龙岩市",
		"shortName": "龙岩",
		"parentCode": "350000",
		"fullNameAbbrPinYin": "LYS",
		"type": 3,
		"carNumber": "闽F"
	},
	{
		"code": "320200",
		"fullName": "无锡市",
		"shortName": "无锡",
		"parentCode": "320000",
		"fullNameAbbrPinYin": "WXS",
		"type": 3,
		"carNumber": "苏B"
	},
	{
		"code": "140600",
		"fullName": "朔州市",
		"shortName": "朔州",
		"parentCode": "140000",
		"fullNameAbbrPinYin": "SZS",
		"type": 3,
		"carNumber": "晋F"
	},
	{
		"code": "420600",
		"fullName": "襄阳市",
		"shortName": "襄阳",
		"parentCode": "420000",
		"fullNameAbbrPinYin": "XYS",
		"type": 3,
		"carNumber": "鄂F"
	},
	{
		"code": "420700",
		"fullName": "鄂州市",
		"shortName": "鄂州",
		"parentCode": "420000",
		"fullNameAbbrPinYin": "EZS",
		"type": 3,
		"carNumber": "鄂G"
	},
	{
		"code": "350700",
		"fullName": "南平市",
		"shortName": "南平",
		"parentCode": "350000",
		"fullNameAbbrPinYin": "NPS",
		"type": 3,
		"carNumber": "闽H"
	},
	{
		"code": "320300",
		"fullName": "徐州市",
		"shortName": "徐州",
		"parentCode": "320000",
		"fullNameAbbrPinYin": "XZS",
		"type": 3,
		"carNumber": "苏C"
	},
	{
		"code": "450800",
		"fullName": "贵港市",
		"shortName": "贵港",
		"parentCode": "450000",
		"fullNameAbbrPinYin": "GGS",
		"type": 3,
		"carNumber": "桂R"
	},
	{
		"code": "450900",
		"fullName": "玉林市",
		"shortName": "玉林",
		"parentCode": "450000",
		"fullNameAbbrPinYin": "YLS",
		"type": 3,
		"carNumber": "桂K"
	},
	{
		"code": "140500",
		"fullName": "晋城市",
		"shortName": "晋城",
		"parentCode": "140000",
		"fullNameAbbrPinYin": "JCS",
		"type": 3,
		"carNumber": "晋E"
	},
	{
		"code": "350600",
		"fullName": "漳州市",
		"shortName": "漳州",
		"parentCode": "350000",
		"fullNameAbbrPinYin": "ZZS",
		"type": 3,
		"carNumber": "闽E"
	},
	{
		"code": "450700",
		"fullName": "钦州市",
		"shortName": "钦州",
		"parentCode": "450000",
		"fullNameAbbrPinYin": "QZS",
		"type": 3,
		"carNumber": "桂N"
	},
	{
		"code": "320400",
		"fullName": "常州市",
		"shortName": "常州",
		"parentCode": "320000",
		"fullNameAbbrPinYin": "CZS",
		"type": 3,
		"carNumber": "苏D"
	},
	{
		"code": "140400",
		"fullName": "长治市",
		"shortName": "长治",
		"parentCode": "140000",
		"fullNameAbbrPinYin": "CZS",
		"type": 3,
		"carNumber": "晋D"
	},
	{
		"code": "350500",
		"fullName": "泉州市",
		"shortName": "泉州",
		"parentCode": "350000",
		"fullNameAbbrPinYin": "QZS",
		"type": 3,
		"carNumber": "闽C"
	},
	{
		"code": "130900",
		"fullName": "沧州市",
		"shortName": "沧州",
		"parentCode": "130000",
		"fullNameAbbrPinYin": "CZS",
		"type": 3,
		"carNumber": "冀J"
	},
	{
		"code": "140200",
		"fullName": "大同市",
		"shortName": "大同",
		"parentCode": "140000",
		"fullNameAbbrPinYin": "DTS",
		"type": 3,
		"carNumber": "晋B"
	},
	{
		"code": "450600",
		"fullName": "防城港市",
		"shortName": "防城港",
		"parentCode": "450000",
		"fullNameAbbrPinYin": "FCGS",
		"type": 3,
		"carNumber": "桂P"
	},
	{
		"code": "320500",
		"fullName": "苏州市",
		"shortName": "苏州",
		"parentCode": "320000",
		"fullNameAbbrPinYin": "SZS",
		"type": 3,
		"carNumber": "苏E"
	},
	{
		"code": "140300",
		"fullName": "阳泉市",
		"shortName": "阳泉",
		"parentCode": "140000",
		"fullNameAbbrPinYin": "YQS",
		"type": 3,
		"carNumber": "晋C"
	},
	{
		"code": "350400",
		"fullName": "三明市",
		"shortName": "三明",
		"parentCode": "350000",
		"fullNameAbbrPinYin": "SMS",
		"type": 3,
		"carNumber": "闽G"
	},
	{
		"code": "420500",
		"fullName": "宜昌市",
		"shortName": "宜昌",
		"parentCode": "420000",
		"fullNameAbbrPinYin": "YCS",
		"type": 3,
		"carNumber": "鄂E"
	},
	{
		"code": "140100",
		"fullName": "太原市",
		"shortName": "太原",
		"parentCode": "140000",
		"fullNameAbbrPinYin": "TYS",
		"type": 3,
		"carNumber": "晋A"
	},
	{
		"code": "130700",
		"fullName": "张家口市",
		"shortName": "张家口",
		"parentCode": "130000",
		"fullNameAbbrPinYin": "ZJKS",
		"type": 3,
		"carNumber": "冀G"
	},
	{
		"code": "371200",
		"fullName": "莱芜市",
		"shortName": "莱芜",
		"parentCode": "370000",
		"fullNameAbbrPinYin": "LWS",
		"type": 3,
		"carNumber": null
	},
	{
		"code": "420200",
		"fullName": "黄石市",
		"shortName": "黄石",
		"parentCode": "420000",
		"fullNameAbbrPinYin": "HSS",
		"type": 3,
		"carNumber": "鄂B"
	},
	{
		"code": "420300",
		"fullName": "十堰市",
		"shortName": "十堰",
		"parentCode": "420000",
		"fullNameAbbrPinYin": "SYS",
		"type": 3,
		"carNumber": "鄂C"
	},
	{
		"code": "130800",
		"fullName": "承德市",
		"shortName": "承德",
		"parentCode": "130000",
		"fullNameAbbrPinYin": "CDS",
		"type": 3,
		"carNumber": "冀H"
	},
	{
		"code": "371100",
		"fullName": "日照市",
		"shortName": "日照",
		"parentCode": "370000",
		"fullNameAbbrPinYin": "RZS",
		"type": 3,
		"carNumber": "鲁L"
	},
	{
		"code": "632200",
		"fullName": "海北藏族自治州",
		"shortName": "海北藏族自治州",
		"parentCode": "630000",
		"fullNameAbbrPinYin": "HBZZZZZ",
		"type": 3,
		"carNumber": "青C"
	},
	{
		"code": "621000",
		"fullName": "庆阳市",
		"shortName": "庆阳",
		"parentCode": "620000",
		"fullNameAbbrPinYin": "QYS",
		"type": 3,
		"carNumber": "甘M"
	},
	{
		"code": "130400",
		"fullName": "邯郸市",
		"shortName": "邯郸",
		"parentCode": "130000",
		"fullNameAbbrPinYin": "HDS",
		"type": 3,
		"carNumber": "冀D"
	},
	{
		"code": "130500",
		"fullName": "邢台市",
		"shortName": "邢台",
		"parentCode": "130000",
		"fullNameAbbrPinYin": "XTS",
		"type": 3,
		"carNumber": "冀E"
	},
	{
		"code": "371000",
		"fullName": "威海市",
		"shortName": "威海",
		"parentCode": "370000",
		"fullNameAbbrPinYin": "WHS",
		"type": 3,
		"carNumber": "鲁K"
	},
	{
		"code": "320100",
		"fullName": "南京市",
		"shortName": "南京",
		"parentCode": "320000",
		"fullNameAbbrPinYin": "NJS",
		"type": 3,
		"carNumber": "苏A"
	},
	{
		"code": "350900",
		"fullName": "宁德市",
		"shortName": "宁德",
		"parentCode": "350000",
		"fullNameAbbrPinYin": "NDS",
		"type": 3,
		"carNumber": "闽J"
	},
	{
		"code": "621100",
		"fullName": "定西市",
		"shortName": "定西",
		"parentCode": "620000",
		"fullNameAbbrPinYin": "DXS",
		"type": 3,
		"carNumber": "甘J"
	},
	{
		"code": "130600",
		"fullName": "保定市",
		"shortName": "保定",
		"parentCode": "130000",
		"fullNameAbbrPinYin": "BDS",
		"type": 3,
		"carNumber": "冀F"
	},
	{
		"code": "420100",
		"fullName": "武汉市",
		"shortName": "武汉",
		"parentCode": "420000",
		"fullNameAbbrPinYin": "WHS",
		"type": 3,
		"carNumber": "鄂A"
	},
	{
		"code": "430800",
		"fullName": "张家界市",
		"shortName": "张家界",
		"parentCode": "430000",
		"fullNameAbbrPinYin": "ZJJS",
		"type": 3,
		"carNumber": "湘G"
	},
	{
		"code": "632600",
		"fullName": "果洛藏族自治州",
		"shortName": "果洛藏族自治州",
		"parentCode": "630000",
		"fullNameAbbrPinYin": "GLZZZZZ",
		"type": 3,
		"carNumber": "青F"
	},
	{
		"code": "712100",
		"fullName": "云林县",
		"shortName": "云林",
		"parentCode": "710000",
		"fullNameAbbrPinYin": "YLX",
		"type": 3,
		"carNumber": null
	},
	{
		"code": "430900",
		"fullName": "益阳市",
		"shortName": "益阳",
		"parentCode": "430000",
		"fullNameAbbrPinYin": "YYS",
		"type": 3,
		"carNumber": "湘H"
	},
	{
		"code": "340100",
		"fullName": "合肥市",
		"shortName": "合肥",
		"parentCode": "340000",
		"fullNameAbbrPinYin": "HFS",
		"type": 3,
		"carNumber": "皖A"
	},
	{
		"code": "632700",
		"fullName": "玉树藏族自治州",
		"shortName": "玉树藏族自治州",
		"parentCode": "630000",
		"fullNameAbbrPinYin": "YSZZZZZ",
		"type": 3,
		"carNumber": "青G"
	},
	{
		"code": "632300",
		"fullName": "黄南藏族自治州",
		"shortName": "黄南藏族自治州",
		"parentCode": "630000",
		"fullNameAbbrPinYin": "HNZZZZZ",
		"type": 3,
		"carNumber": "青D"
	},
	{
		"code": "630200",
		"fullName": "海东市",
		"shortName": "海东",
		"parentCode": "630000",
		"fullNameAbbrPinYin": "HDS",
		"type": 3,
		"carNumber": "青B"
	},
	{
		"code": "430600",
		"fullName": "岳阳市",
		"shortName": "岳阳",
		"parentCode": "430000",
		"fullNameAbbrPinYin": "YYS",
		"type": 3,
		"carNumber": "湘F"
	},
	{
		"code": "712400",
		"fullName": "屏东县",
		"shortName": "屏东",
		"parentCode": "710000",
		"fullNameAbbrPinYin": "PDX",
		"type": 3,
		"carNumber": null
	},
	{
		"code": "430700",
		"fullName": "常德市",
		"shortName": "常德",
		"parentCode": "430000",
		"fullNameAbbrPinYin": "CDS",
		"type": 3,
		"carNumber": "湘J"
	},
	{
		"code": "632500",
		"fullName": "海南藏族自治州",
		"shortName": "海南藏族自治州",
		"parentCode": "630000",
		"fullNameAbbrPinYin": "HNZZZZZ",
		"type": 3,
		"carNumber": "青E"
	},
	{
		"code": "350300",
		"fullName": "莆田市",
		"shortName": "莆田",
		"parentCode": "350000",
		"fullNameAbbrPinYin": "PTS",
		"type": 3,
		"carNumber": "闽B"
	},
	{
		"code": "320600",
		"fullName": "南通市",
		"shortName": "南通",
		"parentCode": "320000",
		"fullNameAbbrPinYin": "NTS",
		"type": 3,
		"carNumber": "苏F"
	},
	{
		"code": "712500",
		"fullName": "台东县",
		"shortName": "台东",
		"parentCode": "710000",
		"fullNameAbbrPinYin": "TDX",
		"type": 3,
		"carNumber": null
	},
	{
		"code": "430400",
		"fullName": "衡阳市",
		"shortName": "衡阳",
		"parentCode": "430000",
		"fullNameAbbrPinYin": "HYS",
		"type": 3,
		"carNumber": "湘D"
	},
	{
		"code": "350200",
		"fullName": "厦门市",
		"shortName": "厦门",
		"parentCode": "350000",
		"fullNameAbbrPinYin": "XMS",
		"type": 3,
		"carNumber": "闽D"
	},
	{
		"code": "430500",
		"fullName": "邵阳市",
		"shortName": "邵阳",
		"parentCode": "430000",
		"fullNameAbbrPinYin": "SYS",
		"type": 3,
		"carNumber": "湘E"
	},
	{
		"code": "630100",
		"fullName": "西宁市",
		"shortName": "西宁",
		"parentCode": "630000",
		"fullNameAbbrPinYin": "XNS",
		"type": 3,
		"carNumber": "青A"
	},
	{
		"code": "140900",
		"fullName": "忻州市",
		"shortName": "忻州",
		"parentCode": "140000",
		"fullNameAbbrPinYin": "XZS",
		"type": 3,
		"carNumber": "晋H"
	},
	{
		"code": "320700",
		"fullName": "连云港市",
		"shortName": "连云港",
		"parentCode": "320000",
		"fullNameAbbrPinYin": "LYGS",
		"type": 3,
		"carNumber": "苏G"
	},
	{
		"code": "712600",
		"fullName": "花莲县",
		"shortName": "花莲",
		"parentCode": "710000",
		"fullNameAbbrPinYin": "HLX",
		"type": 3,
		"carNumber": null
	},
	{
		"code": "320800",
		"fullName": "淮安市",
		"shortName": "淮安",
		"parentCode": "320000",
		"fullNameAbbrPinYin": "HAS",
		"type": 3,
		"carNumber": "苏H"
	},
	{
		"code": "712700",
		"fullName": "澎湖县",
		"shortName": "澎湖",
		"parentCode": "710000",
		"fullNameAbbrPinYin": "PHX",
		"type": 3,
		"carNumber": null
	},
	{
		"code": "350100",
		"fullName": "福州市",
		"shortName": "福州",
		"parentCode": "350000",
		"fullNameAbbrPinYin": "FZS",
		"type": 3,
		"carNumber": "闽A"
	},
	{
		"code": "140800",
		"fullName": "运城市",
		"shortName": "运城",
		"parentCode": "140000",
		"fullNameAbbrPinYin": "YCS",
		"type": 3,
		"carNumber": "晋M"
	},
	{
		"code": "632800",
		"fullName": "海西蒙古族藏族自治州",
		"shortName": "海西蒙古族藏族自治州",
		"parentCode": "630000",
		"fullNameAbbrPinYin": "HXMGZZZZZZ",
		"type": 3,
		"carNumber": "青H"
	},
	{
		"code": "430200",
		"fullName": "株洲市",
		"shortName": "株洲",
		"parentCode": "430000",
		"fullNameAbbrPinYin": "ZZS",
		"type": 3,
		"carNumber": "湘B"
	},
	{
		"code": "320900",
		"fullName": "盐城市",
		"shortName": "盐城",
		"parentCode": "320000",
		"fullNameAbbrPinYin": "YCS",
		"type": 3,
		"carNumber": "苏J"
	},
	{
		"code": "712800",
		"fullName": "连江县",
		"shortName": "连江",
		"parentCode": "710000",
		"fullNameAbbrPinYin": "LJX",
		"type": 3,
		"carNumber": null
	},
	{
		"code": "140700",
		"fullName": "晋中市",
		"shortName": "晋中",
		"parentCode": "140000",
		"fullNameAbbrPinYin": "JZS",
		"type": 3,
		"carNumber": "晋K"
	},
	{
		"code": "150900",
		"fullName": "乌兰察布市",
		"shortName": "乌兰察布",
		"parentCode": "150000",
		"fullNameAbbrPinYin": "WLCBS",
		"type": 3,
		"carNumber": "蒙J"
	},
	{
		"code": "430300",
		"fullName": "湘潭市",
		"shortName": "湘潭",
		"parentCode": "430000",
		"fullNameAbbrPinYin": "XTS",
		"type": 3,
		"carNumber": "湘C"
	},
	{
		"code": "460500",
		"fullName": "琼北",
		"shortName": "琼北",
		"parentCode": "460000",
		"fullNameAbbrPinYin": "QB",
		"type": 3,
		"carNumber": "琼C"
	},
	{
		"code": "460600",
		"fullName": "琼南",
		"shortName": "琼南",
		"parentCode": "460000",
		"fullNameAbbrPinYin": "QN",
		"type": 3,
		"carNumber": "琼D"
	}
]

//可以按照字母排序
function compare(key) {
	return function(value1, value2) {
		var val1 = value1[key];
		var val2 = value2[key];
		return (val1 < val2) ? -1 : (val1 > val2) ? 1 : 0;
	}
}
const letter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U',
	'V', 'W', 'X', 'Y', 'Z'
];
// 通过字母排序
city.sort(compare('fullNameAbbrPinYin'));
// 带字母的城市列表
const obj = letter.map((item, index) => {
	return {
		letter: item,
		data: []
	}
})
// 通过字母分开城市
obj.map((item, index) => {
	city.map((val, num) => {
		if (item.letter == val.fullNameAbbrPinYin.split('')[0]) {
			return item.data.push(val);
		}
	})
})
// 保存字母有的城市
const newdata = [];
const newlist = [];
obj.map((item, index) => {
	if (item.data.length != 0) {
		newdata.push(item)
		newlist.push(letter[index])
	}
})
export default {
	city,
	newdata,
	newlist
}