// 钓鱼检定
// 当前鱼篓currentFish  捉到了新鱼newFish  捕捉描述catchDesc
function anglingCheck(fishes) {
	
	if (typeof(fishes) == "undefined"||fishes.length < 1) return false;
	//TODO: 根据护理水平决定遭遇率加成，基础40%
	//TODO: 雨天加成20%遭遇率；猫化加成20%遭遇率
	//TODO: 以 (1200/prices) 作为随机抽取权重
	V.Fishing.catchDesc = "";
	var _fishIndex = fishes[V.rng % fishes.length].index;
	if (V.Fishing.fishCollections.includes(_fishIndex) || V.Fishing.currentFish.includes(_fishIndex))
	{
		V.Fishing.newFish = false;
	}
	else
	{
		V.Fishing.newFish = true;
	}
	V.Fishing.currentFish.push(_fishIndex);
	V.Fishing.catchDesc = V.Fishing.FishModel[_fishIndex].desc;
	return true;
}
window.anglingCheck = anglingCheck;
