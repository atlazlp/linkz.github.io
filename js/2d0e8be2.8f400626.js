(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0e8be2"],{"8b24":function(t,i,s){"use strict";s.r(i);var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("q-page",[s("div",{staticClass:"q-pa-md"},[s("div",{staticClass:"parent q-gutter-md"},[s("div",{staticClass:"left"},[s("q-btn",{staticClass:"full-width",attrs:{color:"primary",label:"One Fusing",disable:t.clickedF},on:{keyup:function(i){return!i.type.indexOf("key")&&t._k(i.keyCode,"enter",13,i.key,"Enter")&&t._k(i.keyCode,"space",32,i.key,[" ","Spacebar"])?null:t.oneFus(i)},click:t.oneFus}}),s("q-separator",{attrs:{spaced:""}}),s("q-img",{attrs:{src:t.url,"spinner-color":"white",basic:""},on:{click:t.oneFus}}),s("q-separator",{attrs:{spaced:""}}),s("q-btn",{staticClass:"full-width",attrs:{color:"primary",label:"Multi Link",disable:t.clickedF},on:{click:t.multiLink}})],1),s("div",{staticClass:"right q-gutter-md q-pa-md"},[s("q-markup-table",{attrs:{dark:"",bordered:""}},[s("div",{staticClass:"q-pa-sm"},[s("q-input",{attrs:{filled:"",dark:"",label:"Quality (Default is 20%)","hide-hint":"",hint:"Quality of the item in % (0 ~ 70)",mask:"##",disable:t.clickedF},scopedSlots:t._u([{key:"append",fn:function(){return[s("div",{staticClass:"text-h6"},[t._v("%")])]},proxy:!0}]),model:{value:t.quality,callback:function(i){t.quality=i},expression:"quality"}}),s("q-input",{attrs:{filled:"",dark:"",label:"# of Items to Multi Link","hide-hint":"",hint:"Number of Items to 6 link (1 ~ 99999) || Warning! May take some time",mask:"#####",disable:t.clickedF},model:{value:t.numberMultilink,callback:function(i){t.numberMultilink=i},expression:"numberMultilink"}}),s("q-input",{attrs:{filled:"",dark:"",disable:t.clickedF||!t.config,label:"Chance to 5 link","hide-hint":"",hint:"Custom 5 link chance (1 / X) where (X > 1)",mask:"#####"},model:{value:t.chanceFLink,callback:function(i){t.chanceFLink=i},expression:"chanceFLink"}}),s("q-input",{attrs:{filled:"",dark:"",disable:t.clickedF||!t.config,label:"Chance to 6 link","hide-hint":"",hint:"Custom 6 link chance (1 / X) where (X > 1)",mask:"#####"},model:{value:t.chanceSLink,callback:function(i){t.chanceSLink=i},expression:"chanceSLink"}}),s("q-checkbox",{attrs:{label:"Manual 5 and 6 link chance"},model:{value:t.config,callback:function(i){t.config=i},expression:"config"}})],1)]),s("q-markup-table",{attrs:{dark:"",bordered:""}},[s("thead",[s("tr",[s("th",{staticClass:"text-left"},[t._v("Current armor")])])]),s("tbody",[s("tr",[s("td",{staticClass:"text-left"},[t._v("Current # of fusings")]),s("td",{staticClass:"text-right"},[t._v(t._s(t.currFus))])]),s("tr",[s("td",{staticClass:"text-left"},[t._v("Last 6 Link took")]),s("td",{staticClass:"text-right"},[t._v(t._s(t.lastSLink))])]),s("thead",[s("tr",[s("th",{staticClass:"text-left"},[t._v("Results")])])]),s("tr",[s("td",{staticClass:"text-left"},[t._v("# of fusings used")]),s("td",{staticClass:"text-right"},[t._v(t._s(t.totalFus))])]),s("tr",[s("td",{staticClass:"text-left"},[t._v("# of 0 Links")]),s("td",{staticClass:"text-right"},[t._v(t._s(t.totalZLink))])]),s("tr",[s("td",{staticClass:"text-left"},[t._v("# of natural 5 Links")]),s("td",{staticClass:"text-right"},[t._v(t._s(t.totalFLink))])]),s("tr",[s("td",{staticClass:"text-left"},[t._v("# of inverted 5 Links")]),s("td",{staticClass:"text-right"},[t._v(t._s(t.totalIFLink))])]),s("tr",[s("td",{staticClass:"text-left"},[t._v("# of 6 Links")]),s("td",{staticClass:"text-right"},[t._v(t._s(t.totalSLink))])]),s("tr",[s("td",{staticClass:"text-left"},[t._v("6 Links in fewer fusings")]),s("td",{staticClass:"text-right"},[t._v(t._s(t.fewerFus))])]),s("tr",[s("td",{staticClass:"text-left"},[t._v("6 Links in most fusings")]),s("td",{staticClass:"text-right"},[t._v(t._s(t.mostFus))])]),s("tr",[s("td",{staticClass:"text-left"},[t._v("Average fusings for 6 links")]),s("td",{staticClass:"text-right"},[t._v(t._s(t.avgFus))])])])])],1)])]),s("div",{staticClass:"q-pa-md q-gutter-md"},[s("q-dialog",{attrs:{persistent:"","transition-show":"flip-down","transition-hide":"flip-up"},model:{value:t.alertDialog,callback:function(i){t.alertDialog=i},expression:"alertDialog"}},[s("q-card",{staticClass:"bg-primary text-white"},[s("q-bar",[s("q-icon",{attrs:{name:"warning"}}),s("div",[t._v("Warning!")]),s("q-space"),s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[s("q-tooltip",{attrs:{"content-class":"bg-white text-primary"}},[t._v("Close")])],1)],1),s("q-card-section",[t._v("\n          The data used in Linkz is based on a 300.000 fusings study done by gvieira on /r/PathofExile, this may not reflect the real chance used in the game but since GGG won't make it public this is the best we can get."),s("br"),t._v("\n          This is a free and open source software available for Mobile, Desktop and Web on "),s("a",{staticStyle:{"text-decoration":"none",color:"white"},attrs:{href:"https://github.com/atlazlp/linkz.github.io/upload",target:"_blank"}},[t._v("github.com/AtlazLP")])])],1)],1)],1)])},a=[],l={data:function(){return{url:"statics/kaom/11111.png",currItem:[0,0,0,0,0],lastItem:[0,0,0,0,0],clickedF:!1,clickedM:!1,quality:20,numberMultilink:20,chanceFLink:0,chanceSLink:0,currFus:0,lastSLink:0,totalFus:0,totalZLink:0,totalFLink:0,totalIFLink:0,totalSLink:0,fewerFus:0,mostFus:0,avgFus:0,config:!1,alertDialog:!0}},methods:{oneFus:function(){if(!this.clickedF){this.clickedF=!0,(this.quality<0||this.quality>70)&&(alert("Invalid quality, 20% will be used"),this.quality=20),this.currItem=[2,2,2,2,2];var t=0,i=!1;while(-1!==this.currItem.indexOf(2)){for(var s=this.currItem.indexOf(2),e=5-s,a=this.roll(e),l=s;l<s+a;l++)this.currItem[l]=1;if(s===5-a)break;this.currItem[s+a]=0}if(JSON.stringify(this.currItem)===JSON.stringify(this.lastItem))return this.clickedF=!1,this.oneFus();for(var n=0;n<this.currItem.length;n++)this.currItem[n]&&t++;switch(this.lastItem=this.currItem,this.totalFus++,this.currFus++,t){case 0:this.totalZLink++;break;case 4:4===this.currItem.indexOf(0)&&this.totalFLink++,0===this.currItem.indexOf(0)&&this.totalIFLink++;break;case 5:this.totalSLink++,this.lastSLink=this.currFus,this.lastItem=[2,2,2,2,2],this.avgFus=this.totalFus/this.totalSLink,i=!0;break;default:break}i&&(this.currFus>=this.mostFus&&(this.mostFus=this.currFus),(this.currFus<=this.fewerFus||0===this.fewerFus)&&(this.fewerFus=this.currFus),this.currFus=0),this.clickedF=!1,this.url="statics/kaom/"+this.currItem.join("")+".png"}},multiLink:function(){if(!this.clickedM){this.clickedM=!0;for(var t=0;this.totalSLink<this.numberMultilink;t++)this.oneFus();this.clickedM=!1}},roll:function(t){var i=.179971504,s=.350744954,e=.271551368,a=.197732174,l=1/(-2.509812117*Math.pow(10,-3)*Math.pow(this.quality,2)-6.637529177*Math.pow(10,-1)*this.quality+135.271789),n=(3.908377091*Math.pow(this.quality,.5)+80.74901621)/1e5;this.config&&this.chanceFLink>1&&(l=1/this.chanceFLink),this.config&&this.chanceSLink>1&&(n=1/this.chanceSLink);var r=Math.random();switch(t){case 1:return r*(i+s)>i;case 2:return r*=i+s+e,r<i?0:r<i+s?1:2;case 3:return r<i?0:r<i+s?1:r<i+s+e?2:3;case 4:return r<l?4:(r=Math.random(),r<i?0:r<i+s?1:r<i+s+e?2:3);case 5:return r<n?5:(r=Math.random(),r<l?4:(r=Math.random()*(i+s+e+a),r<i?0:r<i+s?1:r<i+s+e?2:3));default:return 0}}}},n=l,r=s("2877"),c=Object(r["a"])(n,e,a,!1,null,null,null);i["default"]=c.exports}}]);