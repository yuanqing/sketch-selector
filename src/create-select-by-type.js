/* eslint-disable eqeqeq */

const {
  getSelectedOrAllLayers,
  iterateNestedLayers,
  showMessage
} = require('sketch-plugin-helper')

function createSelectByType ({ type, label }) {
  return function () {
    let hasSelection = false
    iterateNestedLayers(getSelectedOrAllLayers(), function (layer) {
      console.log(layer)
      if (layer.type == type) {
        layer.selected = true
        hasSelection = true
        return
      }
      layer.selected = false
    })
    showMessage(hasSelection ? `Selected ${label}` : `No ${label} selected`)
  }
}

module.exports = createSelectByType
