!function(e,t){for(var n in t)e[n]=t[n]}(this,function(e){var t={};function n(s){if(t[s])return t[s].exports;var i=t[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(s,i,function(t){return e[t]}.bind(null,i));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){const{getSelectedOrAllLayers:s,iterateNestedLayers:i,showMessage:l}=n(1);e.exports=function({type:e,label:t}){return function(){let n=!1;i(s(),function(t){if(t.type==e)return t.selected=!0,void(n=!0);t.selected=!1}),l(n?`Selected ${t}`:`No ${t} selected`)}}},function(e,t,n){e.exports={openUserInputDialog:n(8),getSavedUserInput:n(3),saveUserInput:n(19),...n(22),...n(5)}},function(e,t,n){e.exports={CHECK_BOX:n(12),DROP_DOWN:n(13),RADIO_BUTTONS:n(14),TEXT_BOX:n(15)}},function(e,t,n){const s=n(4),{packageJsonConfigKey:i}=n(16),l=n(17);e.exports=function(){const{defaults:e}=l()[i];return Object.keys(e).reduce(function(t,n){const i=s.settingForKey(n);return t[n]=void 0!==i?i:e[n],t},{})}},function(e,t){e.exports=require("sketch/settings")},function(e,t,n){const s=n(20),i=n(21);function l(){return s.getSelectedDocument().selectedPage.layers}function r(){return s.getSelectedDocument().selectedLayers.layers}e.exports={getAllArtboards:function(){return l().filter(function(e){return"Artboard"==e.type})},getAllLayers:l,getPage:function(){return s.getSelectedDocument().selectedPage},getSelectedLayers:r,getSelectedOrAllLayers:function(){const e=r();return 0!=e.length?e:l()},iterateNestedLayers:function e(t,n){t.forEach(function(t){n(t),"Artboard"!=t.type&&"Group"!=t.type||e(t.layers,n)})},showMessage:function(e){i.message(e)}}},function(e,t,n){e.exports={"select-by-name":n(7).default,"select-artboards":n(23).default,"select-groups":n(24).default,"select-text-layers":n(25).default,"select-shape-layers":n(26).default,"select-symbols":n(27).default,"select-slices":n(28).default,"select-hotspots":n(29).default,"select-same-name":n(30).default}},function(e,t,n){"use strict";n.r(t);const{getSelectedOrAllLayers:s,iterateNestedLayers:i,openUserInputDialog:l,saveUserInput:r,showMessage:o,TEXT_BOX:a,CHECK_BOX:c}=n(1),u={title:"Select By Name",inputs:[{key:"selectByName.layerName",label:"Layer name",type:a},{key:"selectByName.exactMatch",label:"Exact match",type:c}]};t.default=function(){const e=l(u);e&&r(e);const t=e["selectByName.layerName"],n=new RegExp("true"==e["selectByName.exactMatch"]?`^${t}$`:t);let a=!1;i(s(),function(e){if(n.test(e.name))return e.selected=!0,void(a=!0);e.selected=!1}),o(a?"Selected":"Nothing selected")}},function(e,t,n){const s=n(9),i=n(10),l=n(11),r=n(2),o=n(3),{formHeight:a,formPaddingBottom:c,labelHeight:u,labelPaddingBottom:d,width:f}=n(18);e.exports=function({title:e,inputs:t}){const n=o(),{inputs:p,views:h,stackViewHeight:y}=function({inputsConfig:e,savedUserInput:t}){const n={},s=[];let l=0;return e.forEach(function({type:e,key:o,label:p,...h}){if(p&&"CHECK_BOX"!=e){const e=i({label:p,width:f,height:u});s.push({view:e,paddingBottom:d}),l+=u+d}const y=t[o],{view:g,retrieveValue:S}=r[e]({label:p,value:y,width:f,height:a,...h});s.push({view:g,paddingBottom:c}),l+=a+c,n[o]=S}),{inputs:n,views:s,stackViewHeight:l-=c}}({inputsConfig:t,savedUserInput:n}),g=l({width:f,height:y,views:h}),S=s(e);return S.setAccessoryView(g),"1000"==S.runModal()?Object.keys(p).reduce(function(e,t){const n=p[t];return e[t]=n(),e},{}):null}},function(e,t){e.exports=function(e){const t=NSAlert.alloc().init();return t.window().setAutorecalculatesKeyViewLoop(!0),t.setMessageText(e),t.addButtonWithTitle("OK"),t.addButtonWithTitle("Cancel"),t}},function(e,t){e.exports=function({label:e,width:t,height:n}){const s=NSTextField.alloc().initWithFrame(NSMakeRect(0,0,t,n));return s.setBezeled(!1),s.setDrawsBackground(!1),s.setEditable(!1),s.setLineBreakMode(NSLineBreakByTruncatingTail),s.setSelectable(!1),s.setStringValue(e),s}},function(e,t){e.exports=function({width:e,height:t,views:n}){const s=NSStackView.alloc().initWithFrame(NSMakeRect(0,0,e,t));return s.setAlignment(NSLayoutAttributeLeft),s.setOrientation(NSUserInterfaceLayoutOrientationVertical),s.setSpacing(0),s.setTranslatesAutoresizingMaskIntoConstraints(!0),s.updateConstraintsForSubtreeIfNeeded(),n.forEach(function({view:e,paddingBottom:t}){s.addView_inGravity_(e,NSStackViewGravityTop),s.setCustomSpacing_afterView_(t,e)}),s}},function(e,t){e.exports=function({width:e,height:t,label:n,value:s}){const i=NSButton.alloc().initWithFrame(NSMakeRect(0,0,e,t));return i.setButtonType(NSSwitchButton),i.setBezelStyle(0),i.setState("true"==s?NSOnState:NSOffState),i.setTitle(n),{view:i,retrieveValue:function(){return"1"==i.stringValue()?"true":"false"}}}},function(e,t){e.exports=function({width:e,height:t,value:n,possibleValues:s}){const i=NSPopUpButton.alloc().initWithFrame(NSMakeRect(0,0,e,t));s.forEach(function(e){i.addItemWithTitle(e)});const l=s.indexOf(n);return i.selectItemAtIndex(l),{view:i,retrieveValue:function(){const e=i.indexOfSelectedItem();return s[e]}}}},function(e,t){e.exports=function({width:e,height:t,value:n,possibleValues:s}){const i=NSButtonCell.alloc().init();i.setButtonType(NSRadioButton);const l=s.length,r=NSMatrix.alloc().initWithFrame_mode_prototype_numberOfRows_numberOfColumns(NSMakeRect(0,0,e,t),NSRadioModeMatrix,i,1,l);r.setCellSize(CGSizeMake(Math.floor(e/l),t)),r.cells().forEach(function(e,t){e.setTitle(s[t])});const o=s.indexOf(n);return r.selectCellAtRow_column(0,o),{view:r,retrieveValue:function(){const e=r.cells().indexOfObject(r.selectedCell());return s[e]}}}},function(e,t){e.exports=function({width:e,height:t,value:n,placeholder:s}){const i=NSTextField.alloc().initWithFrame(NSMakeRect(0,0,e,t));return i.setStringValue(n),s&&i.setPlaceholderString(s),{view:i,retrieveValue:function(){return i.stringValue()}}}},function(e,t){e.exports={appcastFileName:"appcast.xml",bundleFileName:"plugin.js",manifestFileName:"manifest.json",packageJsonConfigKey:"sketch-plugin-helper",sourceDirectory:"./src"}},function(e,t){e.exports=function(){return JSON.parse('{\n  "private": true,\n  "version": "0.1.0",\n  "devDependencies": {\n    "sketch-plugin-helper": "/Users/yuanqing/Desktop/Git/sketch-plugin-helper"\n  },\n  "scripts": {\n    "build": "sph build",\n    "fix": "sph lint --fix",\n    "link": "sph link",\n    "lint": "sph lint",\n    "unlink": "sph unlink",\n    "version": "sph version",\n    "watch": "sph build --watch"\n  },\n  "sketch-plugin-helper": {\n    "pluginName": "Selector",\n    "pluginDescription": "A Sketch plugin for changing the selection based on type, name, and similarity",\n    "authorName": "Lim Yuan Qing",\n    "githubUserName": "yuanqing",\n    "githubRepositoryName": "sketch-selector",\n    "menu": [\n      {\n        "handler": "select-by-name",\n        "label": "Select By Name"\n      },\n      "-",\n      {\n        "handler": "select-artboards",\n        "label": "Select Artboards"\n      },\n      {\n        "handler": "select-groups",\n        "label": "Select Groups"\n      },\n      {\n        "handler": "select-text-layers",\n        "label": "Select Text Layers"\n      },\n      {\n        "handler": "select-shape-layers",\n        "label": "Select Shape Layers"\n      },\n      {\n        "handler": "select-symbols",\n        "label": "Select Symbols"\n      },\n      {\n        "handler": "select-slices",\n        "label": "Select Slices"\n      },\n      {\n        "handler": "select-hotspots",\n        "label": "Select Hotspots"\n      },\n      "-",\n      {\n        "handler": "select-same-name",\n        "label": "Select Same Name"\n      }\n    ],\n    "defaults": {\n      "selectByName.layerName": "",\n      "selectByName.exactMatch": "true"\n    }\n  }\n}\n')}},function(e,t){e.exports={formHeight:20,formPaddingBottom:12,labelHeight:20,labelPaddingBottom:6,width:300}},function(e,t,n){const s=n(4),{showMessage:i}=n(5);e.exports=function(e,t){void 0!==e&&(Object.keys(e).forEach(function(t){const n=e[t];void 0!==n&&s.setSettingForKey(t,n)}),t&&t.successMessage&&i(t.successMessage))}},function(e,t){e.exports=require("sketch/dom")},function(e,t){e.exports=require("sketch/ui")},function(e,t,n){const s=n(2),i=Object.keys(s).reduce(function(e,t){return e[t]=t,e},{});e.exports=i},function(e,t,n){"use strict";n.r(t);const s=n(0);t.default=s({type:"Artboard",label:"artboards"})},function(e,t,n){"use strict";n.r(t);const s=n(0);t.default=s({type:"Group",label:"groups"})},function(e,t,n){"use strict";n.r(t);const s=n(0);t.default=s({type:"Text",label:"text layers"})},function(e,t,n){"use strict";n.r(t);const s=n(0);t.default=s({type:"ShapePath",label:"shape layers"})},function(e,t,n){"use strict";n.r(t);const s=n(0);t.default=s({type:"SymbolInstance",label:"symbols"})},function(e,t,n){"use strict";n.r(t);const s=n(0);t.default=s({type:"Slice",label:"slices"})},function(e,t,n){"use strict";n.r(t);const s=n(0);t.default=s({type:"HotSpot",label:"hotspots"})},function(e,t,n){"use strict";n.r(t);const{getAllLayers:s,getSelectedLayers:i,iterateNestedLayers:l,showMessage:r}=n(1);t.default=function(){const e=i();if(0==e.length)return void r("Select a layer");if(e.length>1)return void r("Select only one layer");const t=e[0].name;l(s(),function(e){e.name!=t?e.selected=!1:e.selected=!0}),r("Selected")}}]));