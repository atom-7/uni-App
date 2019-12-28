export const axios = (obj) => {
	if (!obj instanceof Object) return;
	// #ifdef APP-PLUS
	obj.url = 'http://ceshi2.dishait.cn' + obj.url;
	console.log('现在是在app环境下');
	// #endif
	


	let args = {};
	args.url = obj.url;
	args.method = obj.method || 'get';
	args.data = obj.data || {};
	args.header = obj.header || {};
	if (obj.timeout) args.timeout = obj.timeout;

	return new Promise((resolve, reject) => {
		uni.request({
			...args,
			success: (res) => {
				resolve(res);
			},
			fail: (err) => {
				reject(err)
			}
		});
	})
}
