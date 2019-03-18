!function(e,t){for(var n in t)e[n]=t[n]}(this,function(e){var t={};function n(s){if(t[s])return t[s].exports;var l=t[s]={i:s,l:!1,exports:{}};return e[s].call(l.exports,l,l.exports,n),l.l=!0,l.exports}return n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(s,l,function(t){return e[t]}.bind(null,l));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t,n){const{getSelectedOrAllLayers:s,iterateNestedLayers:l,showMessage:o}=n(1);e.exports=function({key:e,value:t,label:n}){return function(){let a=!1;l(s(),function(n){if(n[e]==t)return n.selected=!0,void(a=!0);n.selected=!1}),o(a?`Selected ${n}`:`No ${n} selected`)}}},function(e,t,n){e.exports={openUserInputDialog:n(9),getSavedUserInput:n(4),saveUserInput:n(20),...n(23),...n(6)}},function(e,t,n){const{getAllLayers:s,getSelectedLayers:l,iterateNestedLayers:o,showMessage:a}=n(1);e.exports=function({shouldSelectLayer:e,validateLayer:t,invalidLayerMessage:n}){return function(){const r=l();if(0==r.length)return void a("Select a layer");if(r.length>1)return void a("Select only one layer");const c=r[0];!t||t(c)?(o(s(),function(n){t&&t(n)&&e(c,n)?n.selected=!0:n.selected=!1}),a("Selected")):a(n)}}},function(e,t,n){e.exports={CHECK_BOX:n(13),DROP_DOWN:n(14),RADIO_BUTTONS:n(15),TEXT_BOX:n(16)}},function(e,t,n){const s=n(5),{packageJsonConfigKey:l}=n(17),o=n(18);e.exports=function(){const{defaults:e}=o()[l];return Object.keys(e).reduce(function(t,n){const l=s.settingForKey(n);return t[n]=void 0!==l?l:e[n],t},{})}},function(e,t){e.exports=require("sketch/settings")},function(e,t,n){const s=n(21),l=n(22);function o(){return s.getSelectedDocument().selectedPage.layers}function a(){return s.getSelectedDocument().selectedLayers.layers}function r(e,t){l.message(t&&t.symbol?`${t.symbol} ${e}`:e)}e.exports={addLayersToPage:function(e){return s.getSelectedDocument().selectedPage.sketchObject.addLayers(e)},getAllArtboards:function(){return o().filter(function(e){return"Artboard"==e.type})},getAllLayers:o,getSelectedLayers:a,getSelectedOrAllLayers:function(){const e=a();return 0!=e.length?e:o()},iterateNestedLayers:function e(t,n){t.forEach(function(t){n(t);const s=t.type;"Artboard"!=s&&"Group"!=s||e(t.layers,n)})},showErrorMessage:function(e){r(e,{symbol:"🔴"})},showMessage:r,showSuccessMessage:function(e){r(e,{symbol:"✅"})},showWarningMessage:function(e){r(e,{symbol:"⚠️"})}}},function(e,t,n){e.exports={"select-by-name":n(8),"select-by-type/select-artboards":n(24),"select-by-type/select-groups":n(25),"select-by-type/select-text-layers":n(26),"select-by-type/select-shape-layers":n(27),"select-by-type/select-symbol-instances":n(28),"select-by-type/select-images":n(29),"select-by-type/select-slices":n(30),"select-by-type/select-hotspots":n(31),"select-by-type/select-hidden-layers":n(32),"select-same/select-same-name":n(33),"select-same/select-same-style":n(34),"select-same/select-same-symbol-instance":n(35)}},function(e,t,n){const{getSelectedOrAllLayers:s,iterateNestedLayers:l,openUserInputDialog:o,saveUserInput:a,showMessage:r,CHECK_BOX:c,DROP_DOWN:i,TEXT_BOX:u}=n(1),y={Artboard:"Artboard",Group:"Group","Text Layer":"Text","Shape Layer":"ShapePath","Symbol Instance":"SymbolInstance",Image:"Image",Slice:"Slice",Hotspot:"HotSpot"},d={title:"Select By Name",inputs:[{key:"selectByName.layerName",label:"Layer name",type:u},{key:"selectByName.exactMatch",label:"Exact match",type:c},{key:"selectByName.type",label:"Type",type:i,possibleValues:["Any",...Object.keys(y),"Hidden"]}]};e.exports=function(){const e=o(d);if(!e)return;a(e);const t=e["selectByName.layerName"],n=new RegExp("true"==e["selectByName.exactMatch"]?`^${t}$`:t),c=e["selectByName.type"];let i=!1;l(s(),function(e){if(!("Hidden"==c&&0==e.hidden||"All"!=c&&e.type!=y[c]))return n.test(e.name)?(e.selected=!0,void(i=!0)):void(e.selected=!1)}),r(i?"Selected":"Nothing selected")}},function(e,t,n){const s=n(10),l=n(11),o=n(12),a=n(3),r=n(4),{formHeight:c,formPaddingBottom:i,labelHeight:u,labelPaddingBottom:y,width:d}=n(19);e.exports=function({title:e,inputs:t}){const n=r(),{inputs:p,views:f,stackViewHeight:h}=function({inputsConfig:e,savedUserInput:t}){const n={},s=[];let o=0;return e.forEach(function({type:e,key:r,label:p,...f}){if(p&&"CHECK_BOX"!=e){const e=l({label:p,width:d,height:u});s.push({view:e,paddingBottom:y}),o+=u+y}const h=t[r],{view:m,retrieveValue:b}=a[e]({label:p,value:h,width:d,height:c,...f});s.push({view:m,paddingBottom:i}),o+=c+i,n[r]=b}),{inputs:n,views:s,stackViewHeight:o-=i}}({inputsConfig:t,savedUserInput:n}),m=o({width:d,height:h,views:f}),b=s(e);return b.setAccessoryView(m),"1000"==b.runModal()?Object.keys(p).reduce(function(e,t){const n=p[t];return e[t]=n(),e},{}):null}},function(e,t){e.exports=function(e){const t=NSAlert.alloc().init();return t.window().setAutorecalculatesKeyViewLoop(!0),t.setMessageText(e),t.addButtonWithTitle("OK"),t.addButtonWithTitle("Cancel"),t}},function(e,t){e.exports=function({label:e,width:t,height:n}){const s=NSTextField.alloc().initWithFrame(NSMakeRect(0,0,t,n));return s.setBezeled(!1),s.setDrawsBackground(!1),s.setEditable(!1),s.setLineBreakMode(NSLineBreakByTruncatingTail),s.setSelectable(!1),s.setStringValue(e),s}},function(e,t){e.exports=function({width:e,height:t,views:n}){const s=NSStackView.alloc().initWithFrame(NSMakeRect(0,0,e,t));return s.setAlignment(NSLayoutAttributeLeft),s.setOrientation(NSUserInterfaceLayoutOrientationVertical),s.setSpacing(0),s.setTranslatesAutoresizingMaskIntoConstraints(!0),s.updateConstraintsForSubtreeIfNeeded(),n.forEach(function({view:e,paddingBottom:t}){s.addView_inGravity_(e,NSStackViewGravityTop),s.setCustomSpacing_afterView_(t,e)}),s}},function(e,t){e.exports=function({width:e,height:t,label:n,value:s}){const l=NSButton.alloc().initWithFrame(NSMakeRect(0,0,e,t));return l.setButtonType(NSSwitchButton),l.setBezelStyle(0),l.setState("true"==s?NSOnState:NSOffState),l.setTitle(n),{view:l,retrieveValue:function(){return"1"==l.stringValue()?"true":"false"}}}},function(e,t){e.exports=function({width:e,height:t,value:n,possibleValues:s}){const l=NSPopUpButton.alloc().initWithFrame(NSMakeRect(0,0,e,t));s.forEach(function(e){l.addItemWithTitle(e)});const o=s.indexOf(n);return l.selectItemAtIndex(o),{view:l,retrieveValue:function(){const e=l.indexOfSelectedItem();return s[e]}}}},function(e,t){e.exports=function({width:e,height:t,value:n,possibleValues:s}){const l=NSButtonCell.alloc().init();l.setButtonType(NSRadioButton);const o=s.length,a=NSMatrix.alloc().initWithFrame_mode_prototype_numberOfRows_numberOfColumns(NSMakeRect(0,0,e,t),NSRadioModeMatrix,l,1,o);a.setCellSize(CGSizeMake(Math.floor(e/o),t)),a.cells().forEach(function(e,t){e.setTitle(s[t])});const r=s.indexOf(n);return a.selectCellAtRow_column(0,r),{view:a,retrieveValue:function(){const e=a.cells().indexOfObject(a.selectedCell());return s[e]}}}},function(e,t){e.exports=function({width:e,height:t,value:n,placeholder:s}){const l=NSTextField.alloc().initWithFrame(NSMakeRect(0,0,e,t));return l.setStringValue(n),s&&l.setPlaceholderString(s),{view:l,retrieveValue:function(){return l.stringValue()}}}},function(e,t){e.exports={appcastFileName:"appcast.xml",bundleFileName:"plugin.js",manifestFileName:"manifest.json",packageJsonConfigKey:"sketch-plugin-helper",sourceDirectory:"./src"}},function(e,t){e.exports=function(){return JSON.parse('{\n  "private": true,\n  "version": "0.1.2",\n  "devDependencies": {\n    "sketch-plugin-helper": "*"\n  },\n  "scripts": {\n    "build": "sph build",\n    "fix": "sph lint --fix",\n    "lint": "sph lint",\n    "symlink": "sph symlink",\n    "unlink": "sph symlink --delete",\n    "version": "sph version",\n    "watch": "sph build --watch"\n  },\n  "sketch-plugin-helper": {\n    "pluginName": "Selector",\n    "pluginDescription": "A Sketch plugin for manipulating the selection based on name, type, and similarity",\n    "authorName": "Lim Yuan Qing",\n    "githubUserName": "yuanqing",\n    "githubRepositoryName": "sketch-selector",\n    "menu": [\n      {\n        "handler": "select-by-name",\n        "label": "Select By Name"\n      },\n      "-",\n      {\n        "handler": "select-by-type/select-artboards",\n        "label": "Select Artboards"\n      },\n      {\n        "handler": "select-by-type/select-groups",\n        "label": "Select Groups"\n      },\n      {\n        "handler": "select-by-type/select-text-layers",\n        "label": "Select Text Layers"\n      },\n      {\n        "handler": "select-by-type/select-shape-layers",\n        "label": "Select Shape Layers"\n      },\n      {\n        "handler": "select-by-type/select-symbol-instances",\n        "label": "Select Symbol Instances"\n      },\n      {\n        "handler": "select-by-type/select-images",\n        "label": "Select Images"\n      },\n      {\n        "handler": "select-by-type/select-slices",\n        "label": "Select Slices"\n      },\n      {\n        "handler": "select-by-type/select-hotspots",\n        "label": "Select Hotspots"\n      },\n      {\n        "handler": "select-by-type/select-hidden-layers",\n        "label": "Select Hidden Layers"\n      },\n      "-",\n      {\n        "handler": "select-same/select-same-name",\n        "label": "Select Same Name"\n      },\n      {\n        "handler": "select-same/select-same-style",\n        "label": "Select Same Style"\n      },\n      {\n        "handler": "select-same/select-same-symbol-instance",\n        "label": "Select Same Symbol Instance"\n      }\n    ],\n    "defaults": {\n      "selectByName.layerName": "",\n      "selectByName.exactMatch": "true",\n      "selectByName.type": "Any"\n    }\n  }\n}\n')}},function(e,t){e.exports={formHeight:20,formPaddingBottom:12,labelHeight:20,labelPaddingBottom:6,width:300}},function(e,t,n){const s=n(5),{showMessage:l}=n(6);e.exports=function(e,t){void 0!==e&&(Object.keys(e).forEach(function(t){const n=e[t];void 0!==n&&s.setSettingForKey(t,n)}),t&&t.successMessage&&l(t.successMessage))}},function(e,t){e.exports=require("sketch/dom")},function(e,t){e.exports=require("sketch/ui")},function(e,t,n){const s=n(3),l=Object.keys(s).reduce(function(e,t){return e[t]=t,e},{});e.exports=l},function(e,t,n){const s=n(0);e.exports=s({key:"type",value:"Artboard",label:"artboards"})},function(e,t,n){const s=n(0);e.exports=s({key:"type",value:"Group",label:"groups"})},function(e,t,n){const s=n(0);e.exports=s({key:"type",value:"Text",label:"text layers"})},function(e,t,n){const s=n(0);e.exports=s({key:"type",value:"ShapePath",label:"shape layers"})},function(e,t,n){const s=n(0);e.exports=s({key:"type",value:"SymbolInstance",label:"symbols"})},function(e,t,n){const s=n(0);e.exports=s({key:"type",value:"Image",label:"images"})},function(e,t,n){const s=n(0);e.exports=s({key:"type",value:"Slice",label:"slices"})},function(e,t,n){const s=n(0);e.exports=s({key:"type",value:"HotSpot",label:"hotspots"})},function(e,t,n){const s=n(0);e.exports=s({key:"hidden",value:!0,label:"hidden layers"})},function(e,t,n){const s=n(2);e.exports=s({shouldSelectLayer:function(e,t){return e.name==t.name}})},function(e,t,n){const s=n(2);e.exports=s({shouldSelectLayer:function(e,t){return e.sharedStyleId==t.sharedStyleId},validateLayer:function(e){const t=e.type;return("Text"==t||"ShapePath"==t)&&void 0!==e.sharedStyleId},invalidLayerMessage:"Select a layer with a Text or Layer Style"})},function(e,t,n){const s=n(2);e.exports=s({shouldSelectLayer:function(e,t){return e.symbolId==t.symbolId},validateLayer:function(e){return"SymbolInstance"==e.type},invalidLayerMessage:"Select a symbol"})}]));