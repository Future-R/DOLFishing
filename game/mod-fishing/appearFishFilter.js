// 根据string【地点】和当前【月份】【时间】筛选出目前水域出没的鱼
window.appearFishFilter = function appearFishFilter(locate)
{
	// 地点
	var _fishArray = V.Fishing.FishModel.filter(x => x.location.includes(locate));
	// 月与时
	var _CM = Time.month + 1;
	var _CH = Time.hour;
	if (_CH == 0) _CH = 24;
	_fishArray = _fishArray.filter(x => x.month.includes(_CM) && x.hour.includes(_CH));
	console.log(_fishArray);
	return _fishArray;
}
