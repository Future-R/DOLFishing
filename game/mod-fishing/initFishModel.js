// 初始化鱼类模板
function initFishModel() {
	// 如果模板没初始化，那么把currentFish、fishCollections、newFish也一起初始化
	if (typeof (V.FishModel) == "undefined") {
		V.FishModel = [
			{
				index: 0,
				name: "鲤鱼",
				location: ["湖泊"],
				month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
				hour: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
				size: "稍大",
				prices: 3,
				desc: "钓到鲤鱼了。真是太帅了！",
				detail: "鲤鱼啊……想钓的时候就怎么都钓不到，是很不可思议的鱼……这个先不说，你见过鲤鱼的牙齿吗？虽然位于喉咙的位置，却非常强悍，连贝壳那样坚硬的东西也能嘎吱嘎吱的嚼碎！如果不小心把手指伸进去，说不定会被咬断哦。"
			},
			{
				index: 1,
				name: "锦鲤",
				location: ["湖泊"],
				month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
				hour: [16, 17, 18, 19, 20, 21, 22, 23, 24, 1, 2, 3, 4, 5, 6, 7, 8, 9],
				size: "稍大",
				prices: 40,
				desc: "钓到锦鲤了！应、应该很贵吧！",
				detail: "说到锦鲤啊，那是人工培育的鲤鱼的变种。因为出乎意料的强健，所以到处都有饲养。但实际上也有比它卖得更贵的鱼……但它仍然是高价鱼的代名词哦。嗯，因为颜色很喜庆，看一眼就很容易理解价值，可能就是这么回事吧。"
			},
			{
				index: 2,
				name: "金鱼",
				location: ["湖泊"],
				month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
				hour: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
				size: "特小",
				prices: 13,
				desc: "钓到金鱼了！全身都是红色的！",
				detail: "摇曳生资又可爱的金鱼……究竟能长到多大呢，你知道吗？最大竟然有……30厘米！嗯因为会根据水槽的尺寸停止生长，所以这是一个大致的数据哦。在博物馆的大水槽里到底会长到什么地步呢?我正偷偷地期待着。"
			},
			{
				index: 3,
				name: "稻田鱼",
				location: ["湖泊"],
				month: [4, 5, 6, 7, 8],
				hour: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
				size: "特小",
				prices: 3,
				desc: "钓到稻田鱼了！看来还是小学生啊。",
				detail: "稻田鱼有着金色的小巧身体，成群结队有用的样子非常可爱哦。身体透明，很容易看清里面的组织，所以会用来做观察。从吃下去的食物直到变成粪便的过程，非常有趣，我有信心可以观察一整天！"
			},
			{
				index: 4,
				name: "黑鱼",
				location: ["湖泊"],
				month: [6, 7, 8],
				hour: [9, 10, 11, 12, 13, 14, 15, 16],
				size: "稍大",
				prices: 2,
				desc: "钓到黑鱼了！它有个别名叫蛇头鱼哦！",
				detail: "黑鱼啊，据说即使天上劈雷也不会放开猎物，会全部都吃掉，是一种凶猛的鱼。它身上的花纹也非常配这个名字，感觉非常狂野呢～！啊！但因为怕冷，冬天会在泥里冬眠！可能夏天太闹腾，疲劳过度了……感觉是让人讨厌不起来的鱼呢。"
			},
			{
				index: 5,
				name: "鲫鱼",
				location: ["河流"],
				month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
				hour: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
				size: "稍小",
				prices: 1.6,
				desc: "鲫鱼！鲫鱼！",
				detail: "时不时听到人们说起，分辨不出鲫鱼和鲤鱼……要说它们最大的不同，就是“胡须”！鲫鱼是没有胡须的。和蓄着漂亮胡须的鲤鱼相比，鲫鱼总有点平民的感觉呢。"
			},
			{
				index: 6,
				name: "雅罗鱼",
				location: ["河流"],
				month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
				hour: [16, 17, 18, 19, 20, 21, 22, 23, 24, 1, 2, 3, 4, 5, 6, 7, 8, 9],
				size: "中等",
				prices: 2.4,
				desc: "钓到雅罗鱼了！好像是个很小众的品种吧。",
				detail: "说到雅罗鱼，真的是到处都有。对于垂钓者来说，经常会有又是这种鱼的感觉......到了产卵的时期，身体上会出现时髦的橙色条纹。看来雅罗鱼们是用自己的方式在感受生命的阶段，并且努力生存下去……"
			},
			{
				index: 7,
				name: "泥鳅",
				location: ["河流"],
				month: [3, 4, 5],
				hour: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
				size: "稍小",
				prices: 4,
				desc: "钓到泥鳅了！哎呀，好滑呀～！",
				detail: "泥鳅啊，那扭来扭去的样子看起来很恶心，但实际上是贡献很多的鱼。做成炖汤或是油炸都很好吃，而且从古代起就被用作是解毒的药物……所以说无论是人还是鱼，都不能光看外表来评判哦。"
			},
			{
				index: 8,
				name: "孔雀鱼",
				location: ["河流"],
				month: [4, 5, 6, 7, 8, 9, 10, 11],
				hour: [9, 10, 11, 12, 13, 14, 15, 16],
				size: "特小",
				prices: 13,
				desc: "钓到孔雀鱼了！好漂亮啊！",
				detail: "孔雀鱼啊，因观赏性而为人熟知，是色彩鲜艳的热带鱼。它有着极为少见的特性，那就是每一条的颜色和鳍的形状都不同。它们对于彼此的颜色和形状会有什么想法呢……我很想采访一下。"
			},
			{
				index: 9,
				name: "西太公鱼",
				location: ["河流"],
				month: [12, 1, 2],
				hour: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
				size: "稍小",
				prices: 4,
				desc: "钓到西太公鱼了！就算不去冰上垂钓，也能钓到！",
				detail: "要说西太公鱼，最有名的就是在冰冻的河川和湖泊上进行的冰钓了！在冰上凿开一个圆圆的洞，垂下钓鱼线后静静地等待……我很怕冷，所以不会去冰钓呢……"
			}
		];
		V.currentFish = [];
		V.fishCollections = [];
		V.newFish = false;
	}
}
window.initFishModel = initFishModel;
