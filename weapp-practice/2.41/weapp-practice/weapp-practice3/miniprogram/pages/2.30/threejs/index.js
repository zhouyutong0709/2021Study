// const { createScopedThreejs } = require('threejs-miniprogram')
import { createScopedThreejs } from 'threejs-miniprogram'

const { renderCube } = require('../../../lib/test-cases/cube')
const { renderCubes } = require('../../../lib/test-cases/cubes')
const { renderSphere } = require('../../../lib/test-cases/sphere')
const { renderModel } = require('../../../lib/test-cases/model')

const app = getApp()

Page({
  data: {},
  onLoad: function () {
wx.createSelectorQuery()
  .select('#webgl')
  .node()
  .exec((res) => {
    const canvas = res[0].node
    this.canvas = canvas
    const THREE = createScopedThreejs(canvas)
    
    // renderSphere(canvas, THREE)//球
    // renderCube(canvas, THREE)
    // renderCubes(canvas, THREE)
    this.fadeToAction = renderModel(canvas, THREE)//3d model
    // console.log(renderOrbit);
  })
  },
  play(e){
    let action = e.currentTarget.dataset.action
    this.fadeToAction(action)
  },
  touchStart(e) {
    this.canvas.dispatchTouchEvent({...e, type:'touchstart'})
  },
  touchMove(e) {
    this.canvas.dispatchTouchEvent({...e, type:'touchmove'})
  },
  touchEnd(e) {
    this.canvas.dispatchTouchEvent({...e, type:'touchend'})
  }
})
