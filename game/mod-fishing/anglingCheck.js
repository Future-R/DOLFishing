// 钓鱼检定
// 当前鱼篓currentFish  捉到了新鱼newFish  捕捉描述catchDesc
function anglingCheck() {
	//TODO: 根据护理水平决定遭遇率加成，基础40%
	//TODO: 雨天加成20%遭遇率；猫化加成20%遭遇率
	//TODO: 根据【区域】、【月份】和【时间】筛选
	//TODO: 以 (1200/prices) 作为随机抽取权重
	V.catchDesc = "";
	const _rngNum = V.rng % V.FishModel.length;
	if (V.fishCollections.includes(_rngNum) || V.currentFish.includes(_rngNum))
	{
		V.newFish = false;
	}
	else
	{
		V.newFish = true;
	}
	V.currentFish.push(_rngNum);
	V.catchDesc = V.FishModel[_rngNum].desc;
}
window.anglingCheck = anglingCheck;
