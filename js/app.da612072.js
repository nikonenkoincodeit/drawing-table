(function(A){function e(e){for(var n,r,a=e[0],c=e[1],Q=e[2],u=0,g=[];u<a.length;u++)r=a[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&g.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(A[n]=c[n]);i&&i(e);while(g.length)g.shift()();return I.push.apply(I,Q||[]),t()}function t(){for(var A,e=0;e<I.length;e++){for(var t=I[e],n=!0,a=1;a<t.length;a++){var c=t[a];0!==o[c]&&(n=!1)}n&&(I.splice(e--,1),A=r(r.s=t[0]))}return A}var n={},o={app:0},I=[];function r(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return A[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=A,r.c=n,r.d=function(A,e,t){r.o(A,e)||Object.defineProperty(A,e,{enumerable:!0,get:t})},r.r=function(A){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},r.t=function(A,e){if(1&e&&(A=r(A)),8&e)return A;if(4&e&&"object"===typeof A&&A&&A.__esModule)return A;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:A}),2&e&&"string"!=typeof A)for(var n in A)r.d(t,n,function(e){return A[e]}.bind(null,n));return t},r.n=function(A){var e=A&&A.__esModule?function(){return A["default"]}:function(){return A};return r.d(e,"a",e),e},r.o=function(A,e){return Object.prototype.hasOwnProperty.call(A,e)},r.p="/drawing-table/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var Q=0;Q<a.length;Q++)e(a[Q]);var i=c;I.push([0,"chunk-vendors"]),t()})({0:function(A,e,t){A.exports=t("56d7")},"0012":function(A,e,t){},"0061":function(A,e,t){"use strict";t("c3ef")},"1eaf":function(A,e,t){},"1ec0":function(A,e,t){"use strict";t("1eaf")},2017:function(A,e,t){},"26a4":function(A,e,t){"use strict";t("0012")},3521:function(A,e,t){"use strict";t("2017")},"37f9":function(A,e){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAArkSURBVHic7d09r2V1HYbh5xwm0cpoQ/wG8tZgLIhCoERrjfENY2doiF/BUEunhYWFFmJhjI1WGoIkFoCRDBJbCzU2YoyNYRiLPSNkwvCmZ29m7utKTnHW3mfnd6p1r//aa62zvTf3bvvsts9su3vbnds+9h4/AwD43/1929+2/WHbc9t+ue3ld/vHZ+/iPZe2fWnbt7bd/z4GBACO48VtT2378bbX3u6N7xQAD2/73g5H+wDAreHytse3PXuzN9zxNtuf3Pb9HZb5AYBbx53bvr7DKv4z267e+Ia3WgH40LYfbfv8hY4GABzDT7Z9bdu/37zxxgA43+G8wReONBQAcPF+tsOB/ZXrG248BfDktm8ecyIA4MLdtcNB/6+vb3jzCsDD2361wyoAAHB7eX3bI7v2xcDrAXBp2++33XOamQCAI7i8wyX9r10/2v/y7PwB4HZ337Yvbm+sALw4N/kBgIIXtn3qbIfb+14+8TAAwPHce77tc6eeAgA4qkfPt3361FMAAEf14Pnc5x8Aau462/aPbR859SQAwNG8erbD4wJv9lAgAOD2c+Vsb/GEIADg9ua2vwAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABF069QDX/GDbb089BAAcwQPbvnHqIbbt6gfg57EL/y8B4IPhsZ1+v3vVKQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAg6NKpB7jmkW0fPvUQAHAED5x6gG0723b11EMAAMflFAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEHn266ceggA4KiunG/716mnAACO6p/n2/5y6ikAgKP68/m2V049BQBwVH883/bcqacAAI7qN2fb7t12+dSTAABHc8/5tpe3vXjqSQCAo3h+2yvX7wPw1CknAQCO5jvbdnbtl0vbfrftvpONAwBctJe2fXLX7gOwba9te3zb6ycbCQC4SFd22Ndf2bY73vTCn3ZYCXj4BEMBABfr29t+eP2XO2548Zltd+9wZQAAcHt4etsT265e33BjAFzd9vNtn5gIAIDbwdPbHtvhdP9/3RgA2+HcwE93eFDQQ3vji4IAwK3jyg7L/k/shp3/9s4794e2fXeuDgCAW8lLO3zh76Z3+z2/2QvXPLvt/m1f3fbC/28uAOACPL/tKztc6ve2t/p/r8v792x7dNuD2+7a9vFtH30fnwMAvH9Xt7267a87PNTvuW2/2Ht4wN9/AKfzpXLcm230AAAAAElFTkSuQmCC"},4131:function(A,e,t){},"45fb":function(A,e,t){"use strict";t("4131")},"51b8":function(A,e,t){},"56d7":function(A,e,t){"use strict";t.r(e);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("7a23");function o(A,e,t,o,I,r){var a=Object(n["w"])("Header"),c=Object(n["w"])("router-view"),Q=Object(n["w"])("ModalForm");return Object(n["r"])(),Object(n["d"])(n["a"],null,[Object(n["f"])(a),Object(n["f"])(c),Object(n["f"])(Q)],64)}var I={class:"header"},r={class:"container"},a={class:"title"};function c(A,e,t,o,c,Q){return Object(n["r"])(),Object(n["d"])("header",I,[Object(n["e"])("div",r,[Object(n["e"])("div",null,[Object(n["e"])("p",null,"Кімната "+Object(n["y"])(o.room),1),Object(n["e"])("h1",a,Object(n["y"])(o.title),1)]),Object(n["e"])("button",{type:"button",class:"btn-auth",onClick:e[0]||(e[0]=function(){return o.toggleRole&&o.toggleRole.apply(o,arguments)})},Object(n["y"])(o.textBtn),1)])])}var Q=t("5502"),i=(t("d9e2"),t("260b")),u=t("ea7b"),g={apiKey:"AIzaSyCLmFPwuGDKDD2I_Yhi7A4CIqZdlRHKDpY",authDomain:"drawing-ba0e2.firebaseapp.com",databaseURL:"https://drawing-ba0e2-default-rtdb.europe-west1.firebasedatabase.app",projectId:"drawing-ba0e2",storageBucket:"drawing-ba0e2.appspot.com",messagingSenderId:"784399442719",appId:"1:784399442719:web:d146fa4158bb1dd7a4c62a"};Object(i["a"])(g);var E=Object(u["a"])(),s=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=A.email,t=A.password;return Object(u["c"])(E,e,t).then((function(A){var e=A.user;return console.log("user :>> ",e),e})).catch((function(A){throw new Error(A)}))},l=function(){Object(u["d"])(E).then((function(){})).catch((function(){}))},C=(t("d3b7"),t("3ca3"),t("ddb0"),t("2b3d"),t("9861"),t("ac1f"),t("841c"),t("1276"),function(A){return new Promise((function(e){var t=new FileReader;t.onload=function(A){e(A.target.result)},t.readAsDataURL(A)}))}),d=function(){var A=new URL(location.href),e=1;return A.search&&(e=A.search.split("=")[1]),e},b=null,B=null,f=function(A){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:300;b||(b=document.querySelector(".canvas")),b&&!B&&(B=b.getContext("2d"));var n=new Image;n.src=A,n.onload=function(){B.drawImage(n,0,0,e,t)}},p=function(){B.clearRect(0,0,b.width,b.height)},v={name:"Header",setup:function(){var A=Object(Q["b"])(),e=Object(n["u"])(null);e=d();var t=Object(n["b"])((function(){return A.getters.GET_USER})),o=Object(n["b"])((function(){return t.value?"Викладач":"Студент"})),I=Object(n["b"])((function(){return t.value?"Вийти":"Увійти"})),r=function(){t.value?l():A.dispatch("TOGGLE_SHOW_FORM",!1)};return A.dispatch("GET_USER"),{toggleRole:r,title:o,textBtn:I,room:e}}},S=(t("defc"),t("6b0d")),O=t.n(S);const m=O()(v,[["render",c]]);var j=m,k=Object(n["e"])("button",{type:"submit",class:"send-btn"},"send",-1);function h(A,e,t,o,I,r){return Object(n["r"])(),Object(n["d"])("div",{class:Object(n["l"])(["wrapper",{"is-hidden":o.isShowForm}])},[Object(n["e"])("form",{class:"form",onSubmit:e[3]||(e[3]=Object(n["E"])((function(){return o.getData&&o.getData.apply(o,arguments)}),["prevent"]))},[Object(n["e"])("button",{type:"button",class:"close-btn",onClick:e[0]||(e[0]=function(){return o.hiddenForm&&o.hiddenForm.apply(o,arguments)})}," ✖ "),Object(n["e"])("div",null,[Object(n["D"])(Object(n["e"])("input",{type:"email",required:"",name:"email",placeholder:"Email",class:"input-elem","onUpdate:modelValue":e[1]||(e[1]=function(A){return o.email=A})},null,512),[[n["A"],o.email,void 0,{trim:!0}]])]),Object(n["e"])("div",null,[Object(n["D"])(Object(n["e"])("input",{type:"password",required:"",name:"password",placeholder:"password",class:"input-elem","onUpdate:modelValue":e[2]||(e[2]=function(A){return o.password=A})},null,512),[[n["A"],o.password,void 0,{trim:!0}]])]),k],32)],2)}var T=t("1117"),J=t.n(T),w={name:"ModalForm",setup:function(){var A=Object(Q["b"])(),e=Object(n["u"])(""),t=Object(n["u"])(""),o=function(){A.dispatch("TOGGLE_SHOW_FORM",!0),t.value="",e.value=""},I=function(){A.dispatch("VALIDATE_USER",{password:t.value,email:e.value}).then((function(){J.a.Notify.success("Привіт, викладач!")})).catch((function(){J.a.Notify.warning("Упс! Щось пішло не так...")})).finally((function(){o()}))},r=Object(n["b"])((function(){return A.state.showForm}));return{hiddenForm:o,getData:I,email:e,password:t,isShowForm:r}}};t("45fb");const D=O()(w,[["render",h]]);var y=D,_={components:{Header:j,ModalForm:y},setup:function(){}};t("26a4");const R=O()(_,[["render",o]]);var N=R,x=t("6c02"),F={class:"section"},G={class:"container"},P={class:"row"};function H(A,e,t,o,I,r){var a=Object(n["w"])("DrawingTools"),c=Object(n["w"])("Canvas");return Object(n["r"])(),Object(n["d"])("main",null,[Object(n["e"])("section",F,[Object(n["e"])("div",G,[Object(n["e"])("div",P,[Object(n["f"])(a,{options:o.options,resetClass:o.resetClass},null,8,["options","resetClass"]),Object(n["f"])(c,{resetClass:o.resetClass},null,8,["resetClass"])])])])])}t("d81d");var L={class:"canvas",width:"1095",height:"600",ref:"canvas"};function U(A,e,t,o,I,r){var a=Object(n["w"])("EditorBox");return Object(n["r"])(),Object(n["d"])("div",{class:"wrapper-canvas",onMousemove:e[0]||(e[0]=function(){return o.moveElement&&o.moveElement.apply(o,arguments)}),onMouseup:e[1]||(e[1]=function(){return o.stopDragAndDrop&&o.stopDragAndDrop.apply(o,arguments)})},[Object(n["f"])(a,{posX:o.posX,posY:o.posY,clearCanvas:o.clearCanvas,updatePos:o.updatePos,addTextToCanvas:o.addTextToCanvas,addImageToCanvas:o.addImageToCanvas,onResetClass:o.onResetClass},null,8,["posX","posY","clearCanvas","updatePos","addTextToCanvas","addImageToCanvas","onResetClass"]),Object(n["e"])("canvas",L,null,512)],32)}var X={class:"d-flex edit-list"},M={class:"save-item"},Y={class:"close-item"},z={class:"box-figure"},V=["src"];function K(A,e,t,o,I,r){return Object(n["D"])((Object(n["r"])(),Object(n["d"])("div",{class:"input-box",style:Object(n["m"])({transform:"translate("+o.position.x+"px,"+o.position.y+"px)"})},[Object(n["e"])("ul",X,[Object(n["e"])("li",null,[Object(n["e"])("button",{type:"button",class:"circle-btn move-btn",onMousedown:e[0]||(e[0]=function(){return o.startDragAndDrop&&o.startDragAndDrop.apply(o,arguments)})},null,32)]),Object(n["e"])("li",M,[Object(n["e"])("button",{type:"button",class:"circle-btn",onClick:e[1]||(e[1]=function(){return o.addShapeToCanvas&&o.addShapeToCanvas.apply(o,arguments)})}," ✔ ")]),Object(n["e"])("li",Y,[Object(n["e"])("button",{type:"button",class:"circle-btn",onClick:e[2]||(e[2]=function(){return o.closeEditor&&o.closeEditor.apply(o,arguments)})}," ✖ ")])]),Object(n["D"])(Object(n["e"])("input",{type:"text",class:"input-elem","onUpdate:modelValue":e[3]||(e[3]=function(A){return o.value=A})},null,512),[[n["B"],"text"===o.type],[n["A"],o.value]]),Object(n["D"])(Object(n["e"])("div",z,[Object(n["e"])("img",{src:o.addImage,alt:"figure"},null,8,V)],512),[[n["B"],o.typeFigure||o.userImg]]),Object(n["e"])("input",{type:"file",class:"file",ref:"file",onChange:e[4]||(e[4]=function(){return o.loadImg&&o.loadImg.apply(o,arguments)})},null,544)],4)),[[n["B"],o.showEditor]])}t("a9e3"),t("99af"),t("caad"),t("2532");var W={name:"EditorBox",props:{posX:Number,posY:Number,updatePos:Function,onResetClass:Function,addTextToCanvas:Function,addImageToCanvas:Function},setup:function(A){var e=Object(Q["b"])(),o=Object(n["u"])(""),I=Object(n["u"])(null),r=Object(n["u"])(null),a=["square","triangle","circle"],c=[].concat(a,["text"]),i=Object(n["b"])((function(){return{x:A.posX,y:A.posY}})),u=Object(n["b"])((function(){return e.getters.GET_EDITOR_SETTINGS.type})),g=Object(n["b"])((function(){return a.includes(u.value)})),E=Object(n["b"])((function(){return c.includes(u.value)||r.value})),s=function(A){var t=A.offsetX,n=A.offsetY;e.dispatch("SET_DRAG_AND_DROP",!0),e.dispatch("SET_OFFSET_ELEMENT",{x:t,y:n})},l=function(){e.dispatch("SET_EDITOR_SETTINGS",""),A.onResetClass(),A.updatePos(),r.value=null},d=Object(n["b"])((function(){return g.value?t("e078")("./"+u.value+".png"):r.value})),b=function(){var e=A.posX+5,t=A.posY+30;g.value&&A.addImageToCanvas(d.value,e,t),"text"===u.value&&(o.value&&A.addTextToCanvas(o.value,e+15,t+25),o.value=""),"img"===u.value&&A.addImageToCanvas(r.value,e,t),l()},B=function(){C(I.value.files[0]).then((function(A){r.value=A}))};return Object(n["C"])(u,(function(A){"img"===A&&I.value.click()})),{addShapeToCanvas:b,startDragAndDrop:s,closeEditor:l,typeFigure:g,showEditor:E,userImg:r,loadImg:B,addImage:d,position:i,value:o,file:I,type:u}}};t("7ec7");const Z=O()(W,[["render",K]]);var q=Z,$=t("66ce");Object(i["a"])(g);var AA=Object($["b"])(),eA=function(A){return Object($["a"])(Object($["d"])(AA,"room_"+A)).then((function(A){return A.exists()?A.val():null})).catch((function(A){console.error(A)}))},tA=function(A){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{Object($["e"])(Object($["d"])(AA,"room_"+A),e)}catch(t){throw new Error(t)}},nA=d(),oA=function(){Object($["c"])(Object($["d"])(AA,"room_"+nA),(function(A){var e=A.val();if(e){var t=e.image,n=e.width,o=e.height;f(t,n,o)}else p()}))},IA={name:"Canvas",components:{EditorBox:q},props:{resetClass:Function},setup:function(A){var e=Object(Q["b"])(),t=Object(n["u"])(0),o=Object(n["u"])(0),I=Object(n["u"])(null),r=Object(n["u"])(null),a=Object(n["u"])(1);a=d();var c=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;t.value=A,o.value=e},i=Object(n["b"])((function(){return e.getters.GET_EDITOR_SETTINGS.type})),u=function(A){if(e.getters.GET_DRAG_AND_DROP){var t=A.layerX,n=A.layerY,o=e.getters.GET_OFFSET_ELEMENT,I=o.x,r=o.y;c(t-I,n-r)}},g=function(){e.dispatch("SET_DRAG_AND_DROP",!1)},E=function(A){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;r.value.font="18px Roboto",r.value.fillText(A,e,t),s()};eA(a).then((function(A){if(A){var e=A.image,t=A.width,n=A.height;l(e,0,0,t,n,!1)}}));var s=function(){tA(a,{image:B(),id:Date.now(),width:I.value.width,height:I.value.height})},l=function(A){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:300,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:300,I=!(arguments.length>5&&void 0!==arguments[5])||arguments[5],a=new Image;a.src=A,a.onload=function(){r.value.drawImage(a,e,t,n,o),I&&s()}},C=function(){r.value.clearRect(0,0,I.value.width,I.value.height),tA(a,null)},b=function(){A.resetClass()},B=function(){return I.value.toDataURL("image/png")},f=function(){var A=document.createElement("a");A.href=B(),A.download="my-image.png",A.click()};return Object(n["C"])(i,(function(A){return"delete"===A?(b(),C()):"download"===A?(b(),f()):void 0})),Object(n["p"])((function(){r.value=I.value.getContext("2d"),oA()})),{addTextToCanvas:E,clearCanvas:C,onResetClass:b,addImageToCanvas:l,moveElement:u,stopDragAndDrop:g,updatePos:c,posX:t,posY:o,canvas:I}}};t("3521");const rA=O()(IA,[["render",U]]);var aA=rA,cA={class:"list-icon"},QA=["onClick","disabled"],iA=["src"];function uA(A,e,t,o,I,r){return Object(n["r"])(),Object(n["d"])("ul",cA,[(Object(n["r"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(t.options,(function(A){return Object(n["r"])(),Object(n["d"])("li",{class:"list-item",key:A.icon},[Object(n["e"])("button",{type:"button",class:Object(n["l"])(["list-btn",{current:A.current&&o.editorSettings.type}]),onClick:function(e){return o.updateDrawing(A)},disabled:A.disabled&&!o.isUser},[Object(n["e"])("img",{src:o.addImage(A.icon),alt:"images",width:"40"},null,8,iA)],10,QA)])})),128))])}var gA={name:"DrawingTools",props:{options:Array,resetClass:Function},setup:function(A){var e=Object(Q["b"])(),o=Object(n["b"])((function(){return e.getters.GET_USER})),I=Object(n["b"])((function(){return A.options})),r=Object(n["b"])((function(){return e.getters.GET_EDITOR_SETTINGS})),a=function(A){return t("7584")("./"+A)},c=function(t){A.resetClass(t.icon),t.current=!t.current;var n=t.current?t.type:"";e.dispatch("SET_EDITOR_SETTINGS",n)};return{updateDrawing:c,addImage:a,editorSettings:r,option:I,isUser:o}}};t("0061");const EA=O()(gA,[["render",uA]]);var sA=EA,lA={name:"Home",components:{Canvas:aA,DrawingTools:sA},setup:function(){var A=Object(n["t"])([{icon:"font.png",type:"text",current:!1,disabled:!0},{icon:"picture-icon.png",type:"img",current:!1,disabled:!0},{icon:"square.png",type:"square",current:!1,disabled:!0},{icon:"triangle.png",type:"triangle",current:!1,disabled:!0},{icon:"circle.png",type:"circle",current:!1,disabled:!0},{icon:"bin.png",type:"delete",current:!1,disabled:!0},{icon:"download.png",type:"download",current:!1,disabled:!1}]),e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";A=A.map((function(A){return A.icon!==e&&(A.current=!1),A}))};return{options:A,resetClass:e}}};t("1ec0");const CA=O()(lA,[["render",H]]);var dA=CA,bA=[{path:"/",name:"Home",component:dA}],BA=Object(x["a"])({history:Object(x["b"])("/drawing-table/"),routes:bA}),fA=BA,pA=t("5530");Object(i["a"])(g);var vA=Object(u["a"])(),SA=Object(Q["a"])({state:{offsetX:0,offsetY:0,showForm:!0,user:null,dragAndDropElement:!1,editorSettings:{type:""}},getters:{GET_USER:function(A){return A.user},GET_OFFSET_ELEMENT:function(A){return{x:A.offsetX,y:A.offsetY}},GET_DRAG_AND_DROP:function(A){return A.dragAndDropElement},GET_EDITOR_SETTINGS:function(A){return A.editorSettings}},mutations:{TOGGLE_SHOW_FORM:function(A,e){A.showForm=e},SET_USER:function(A,e){A.user=e},SET_DRAG_AND_DROP:function(A,e){A.dragAndDropElement=e},SET_OFFSET_ELEMENT:function(A,e){A.offsetX=e.x,A.offsetY=e.y},SET_EDITOR_SETTINGS:function(A,e){A.editorSettings=Object(pA["a"])(Object(pA["a"])({},A.editorSettings),{},{type:e})}},actions:{SET_EDITOR_SETTINGS:function(A,e){var t=A.commit;t("SET_EDITOR_SETTINGS",e)},TOGGLE_SHOW_FORM:function(A,e){var t=A.commit;t("TOGGLE_SHOW_FORM",e)},VALIDATE_USER:function(A,e){return s(e).then((function(A){return A})).catch((function(A){throw new Error(A)}))},GET_USER:function(A){var e=A.commit;Object(u["b"])(vA,(function(A){e("SET_USER",A||null)}))},SET_DRAG_AND_DROP:function(A,e){var t=A.commit;t("SET_DRAG_AND_DROP",e)},SET_OFFSET_ELEMENT:function(A,e){var t=A.commit;t("SET_OFFSET_ELEMENT",e)}}});Object(n["c"])(N).use(SA).use(fA).mount("#app")},6370:function(A,e,t){},7584:function(A,e,t){var n={"./bin.png":"834a","./circle.png":"ad57","./download.png":"96fc","./font.png":"d8a7","./picture-icon.png":"bbcd","./square.png":"37f9","./triangle.png":"c8e8"};function o(A){var e=I(A);return t(e)}function I(A){if(!t.o(n,A)){var e=new Error("Cannot find module '"+A+"'");throw e.code="MODULE_NOT_FOUND",e}return n[A]}o.keys=function(){return Object.keys(n)},o.resolve=I,A.exports=o,o.id="7584"},"7ec7":function(A,e,t){"use strict";t("51b8")},"834a":function(A,e,t){A.exports=t.p+"img/bin.2a2d1d40.png"},"96fc":function(A,e,t){A.exports=t.p+"img/download.77ce065c.png"},ad57:function(A,e,t){A.exports=t.p+"img/circle.90482ab0.png"},bbcd:function(A,e,t){A.exports=t.p+"img/picture-icon.f419d0da.png"},c3ef:function(A,e,t){},c8e8:function(A,e,t){A.exports=t.p+"img/triangle.693b4266.png"},d8a7:function(A,e){A.exports="data:image/png;base64,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"},defc:function(A,e,t){"use strict";t("6370")},e078:function(A,e,t){var n={"./bin.png":"834a","./circle.png":"ad57","./download.png":"96fc","./font.png":"d8a7","./picture-icon.png":"bbcd","./square.png":"37f9","./triangle.png":"c8e8"};function o(A){var e=I(A);return t(e)}function I(A){if(!t.o(n,A)){var e=new Error("Cannot find module '"+A+"'");throw e.code="MODULE_NOT_FOUND",e}return n[A]}o.keys=function(){return Object.keys(n)},o.resolve=I,A.exports=o,o.id="e078"}});
//# sourceMappingURL=app.da612072.js.map