
// 此处的index是currentFish的index
window.donateFish = function donateFish(index) {
	let _thisFish = V.currentFish[index];
	// 持有鱼[index]加入图鉴
	V.fishCollections.push(_thisFish);
	// 持有鱼移除index
	V.currentFish.splice(index, 1);
	// 结算价钱
	let _price = V.FishModel[_thisFish].prices * 100;
	return _price;
}
