
sharePage(){//begin
    let promiseArr = this.getNetPicture()
    Promise.all(promiseArr).then(res=>{
        this.draw(res)
    }).catch(err=>{
        console.log(err)
    })
},
getNetPicture(){//获取图片信息
    let promiseArr = []
    // 图1
    let Promise1 = new Promise((resolve,reject)=>{
        wx.getImageInfo({
          src:image1,
          success(res){
              resolve(res)
          },
          fail(err){
              reject(err)
          }
        })
    })
    promiseArr.push(Promise1)
    //图2
    let Promise2 = new Promise((resolve,reject)=>{
        wx.getImageInfo({
          src:image2,
          success(res){
              resolve(res)
          },
          fail(err){
              reject(err)
          }
        })
    })
    promiseArr.push(Promise2)
   return promiseArr
},
draw(info){//canvas画图
    const canvas = wx.createCanvasContext('posters')
    //背景图
    canvas.drawImage(info[0].path,0,0,319,485)
    //头像
    canvas.save()
    canvas.arc(83,47,23,0,2*Math.PI)
    canvas.clip()
    canvas.drawImage(info[3].path,60,24,46,46)  
    canvas.restore()
    canvas.setFontSize(13)
    canvas.setFillStyle('#2f2828')
    canvas.setTextAlign('center')
    canvas.fillText(wx.getStorageSync('nickname'),121,40)
    canvas.draw(true,()=>{
        wx.canvasToTempFilePath({
          canvasId: 'posters',
          success(res){
            //res.tempFilePath临时路径
            canvasImagePath = res.tempFilePath
          }
        })
    })
},
saveCanvasImage(){//保存到相册
    wx.saveImageToPhotosAlbum({
      filePath: canvasImagePath,
      success(){},//'保存成功'
      fail(){}//'保存失败'
    })
},
catchtouchmove(){}
