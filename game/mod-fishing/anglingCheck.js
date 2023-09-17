// 钓鱼检定
// 当前鱼篓currentFish  捉到了新鱼newFish  捕捉描述catchDesc
function anglingCheck(fishes, encounterBonus = 0) {

	if (typeof (fishes) == "undefined" || fishes.length < 1) return false;
	// 护理水平决定遭遇率加成，基础20%，S60%。
	var _encounter = V.tending / 25 + 20;
	// 运河、码头-20%遭遇率；钓鱼岩+20%遭遇率。
	_encounter += encounterBonus;
	//雨天加成20%遭遇率；猫化加成20%遭遇率；
	if (V.weather == 'rain') _encounter += 20;
	if (V.cat >= 6) _encounter += 20;

	// 钓鱼检定
	if (V.rng > _encounter) return false;
	
	//TODO: 以 (1200/prices) 作为随机抽取权重
	V.Fishing.catchDesc = "";
	var _fishIndex = fishes[V.rng % fishes.length].index;
	if (V.Fishing.fishCollections.includes(_fishIndex) || V.Fishing.currentFish.includes(_fishIndex)) {
		V.Fishing.newFish = false;
	}
	else {
		V.Fishing.newFish = true;
	}
	V.Fishing.currentFish.push(_fishIndex);
	V.Fishing.catchDesc = V.Fishing.FishModel[_fishIndex].desc;
	return true;
}
window.anglingCheck = anglingCheck;
