<template>
	<div><h1>大家好我是h1</h1></div>
</template>

<script>
export default {
	onNavigationBarButtonTap(e){
		const {text} = e;
		uni.navigateBack({
		});
	},
	onNavigationBarSearchInputChanged(e){
		console.log(e);
	},
	onNavigationBarSearchInputConfirmed(e){
		console.log(e);
	}
};
</script>

<style lang="less" scoped></style>
