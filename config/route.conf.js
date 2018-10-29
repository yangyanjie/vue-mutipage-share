/**
 * Author: yangyang
 * Create Date: 2018-3-1
 * Description: 接口配置转发
 */

// version:     接口版本
// routepath:   请求接口
// description: 接口描述
// proxyTarget: 转发地址

'use strict'
module.exports = [
    {
        proxyTarget: "http://10.10.2.101:7205",
        description: "省市区选择",
        routepath: "/diamondConfig/getDiamondConfigListByPage"
    }

];
