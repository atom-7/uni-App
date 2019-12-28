import Mock from 'mockjs';


export default {
	getIndexData:Mock.mock('getHomeData', 'get', {
			'data|6': [
				// 这里是tab栏的数据
				{
					isLoading:'加载更多...',// 有三个状态: 1. 加载更多  2.加载中  3. 没有更多
					'list|3-8': [// 这里是每个数据列表
						{
							avatar: '../../static/bgimg/1.jpg',
							username: '@cname',
							'isFollow|1-2': false,
							title: '@csentence(5, 10)',
							cover_img: '../../static/demo/datapic/1.jpg',
							type: '@pick(["img","video"])',
							play_count: '@natural(20, 100)' + 'w',
							time: '2:47',
							like: {
								'status|1-2': false,
								number: '@integer(60, 1000)'
							},
			
							hate: {
								'status|1-2': false,
								number: '@integer(60, 1000)'
							},
							comments: '@integer(60, 1000)',
							share: '@integer(60, 1000)'
						}
					]
				}
			]
		})
} 
