import config from './config'
//发送ajax请求
export default(url,data={},method='GET') =>{
  return new Promise((resolve,reject)=>{
    wx.request({
      url: config.host + url,
      data,
      method,
      success: (res)=>{
        resolve(res.data); //修改promise的状态为成功状态
      },
      fail: (err)=>{
        reject(err); //修改promise的状态为失败状态
      }
    })
  })
}