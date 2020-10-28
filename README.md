# 微信小程序保存相册，分享朋友圈
## 开发思路
1. 获取图片的信息（wx.getImageInfo）,返回Promise对象  
2. 使用canvas画图  
3. 画图成功则使用wx.canvasToTempFilePath将当前画布指定区域的内容导出生成指定大小的图片，生成文件的临时路径  
4. 根据图片的临时路径，使用wx.saveImageToPhotosAlbum()保存到系统相册  
## 实现
