/* 
根据用户的id值创建token的函数
*/

var jwt = require('jsonwebtoken')

module.exports = function (id) {
	// 根据用户的id值生成token
	// 为方便测试，有效期设置为 10s 进行监测，普通生产情况下可以设置为更长的时间 
	const token = jwt.sign({ id }, 'secret', { expiresIn: '7 days' })
	return token;
}
