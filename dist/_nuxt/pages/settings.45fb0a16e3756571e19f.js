webpackJsonp([8],{"/ZZj":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-container",[a("div",{staticClass:"text-xs-right"},[a("v-btn",{attrs:{primary:"",outline:""},nativeOn:{click:function(e){t.restoreData(e)}}},[t._v("คืนค่าเดิม")]),a("v-btn",{attrs:{primary:""},nativeOn:{click:function(e){t.saveData(e)}}},[t._v("บันทึก")])],1),a("v-subheader",[t._v("ข้อมูลส่วนตัว")]),a("v-card",{staticClass:"ml-3 mr-3"},[a("v-card-text",[a("v-subheader",[t._v("ข้อมูลทั่วไป")]),a("v-list",[a("v-list-tile",[a("v-text-field",{attrs:{label:"ชื่อจริง"},model:{value:t.data.fname,callback:function(e){t.data.fname=e},expression:"data.fname"}})],1),a("br"),a("v-list-tile",[a("v-text-field",{attrs:{label:"นามสกุล"},model:{value:t.data.lname,callback:function(e){t.data.lname=e},expression:"data.lname"}})],1)],1),a("br")],1),a("div",{staticClass:"grey lighten-4"},[a("v-card-text",[a("v-subheader",[t._v("ช่องทางอื่นๆ")]),a("v-layout",{attrs:{row:"",fluid:""}},[a("v-flex",{attrs:{xs2:"",md1:"","text-xs-center":""}},[a("v-icon",{staticClass:"mt-1",attrs:{large:""}},[t._v("fa-facebook-official")])],1),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{staticClass:"elevation-0",attrs:{flat:"",solo:"",label:"เฟสบุ๊คลิงค์"},model:{value:t.data.facebook,callback:function(e){t.data.facebook=e},expression:"data.facebook"}})],1)],1),a("br"),a("v-layout",{attrs:{row:"",fluid:""}},[a("v-flex",{attrs:{xs2:"",md1:"","text-xs-center":""}},[a("v-icon",{staticClass:"mt-1",attrs:{large:""}},[t._v("fa-twitter-square")])],1),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{staticClass:"elevation-0",attrs:{flat:"",solo:"",label:"ทวิตเตอร์ลิงค์"},model:{value:t.data.twitter,callback:function(e){t.data.twitter=e},expression:"data.twitter"}})],1)],1),a("br"),a("v-layout",{attrs:{row:"",fluid:""}},[a("v-flex",{attrs:{xs2:"",md1:"","text-xs-center":""}},[a("v-icon",{staticClass:"mt-1",attrs:{large:""}},[t._v("fa-youtube-square")])],1),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{staticClass:"elevation-0",attrs:{flat:"",solo:"",label:"ยูทูบลิงค์"},model:{value:t.data.youtube,callback:function(e){t.data.youtube=e},expression:"data.youtube"}})],1)],1)],1)],1)],1),a("br"),a("br"),a("v-subheader",[t._v("รูปภาพ")]),a("v-card",[a("v-card-text",[a("v-layout",[a("v-flex",{staticClass:"xs-12 offset-xs3 md-12 offset-md5"},[a("base64upload",{staticStyle:{width:"150px"},attrs:{imageSrc:t.profile.user_img},on:{change:t.onChangeImage}}),a("p",[t._v("คลิ๊กที่รุปภาพเพื่อเปลี่ยนรูปภาพ")])],1)],1)],1)],1),a("br"),a("br"),a("div",{staticClass:"text-xs-right"},[a("v-btn",{attrs:{primary:"",outline:""},nativeOn:{click:function(e){t.restoreData(e)}}},[t._v("คืนค่าเดิม")]),a("v-btn",{attrs:{primary:""},nativeOn:{click:function(e){t.saveData(e)}}},[t._v("บันทึก")])],1)],1)],1)},r=[],s={render:i,staticRenderFns:r};e.a=s},"5PlU":function(t,e,a){var i=a("RY/4"),r=a("dSzd")("iterator"),s=a("/bQp");t.exports=a("FeBl").isIterable=function(t){var e=Object(t);return void 0!==e[r]||"@@iterator"in e||s.hasOwnProperty(i(e))}},"68kg":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"base64-upload"},[a("img",{style:t.imageStyle,attrs:{src:t.src}}),a("input",{attrs:{type:"file",accept:"image/*"},on:{change:t.onChange}})])},r=[],s={render:i,staticRenderFns:r};e.a=s},"7LnL":function(t,e,a){var i=a("cSVw");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("7f0c3782",i,!0)},GoTf:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("WnVB"),r=a("/ZZj"),s=a("VU/8"),n=s(i.a,r.a,null,null,null);e.default=n.exports},WnVB:function(t,e,a){"use strict";var i=a("vG6M");e.a={created:function(){this.setData()},data:function(){return{data:{fname:"",lname:"",user_img:"",facebook:"",twitter:"",youtube:""}}},methods:{setData:function(){this.data.user_id=this.profile.user_id,this.data.fname=this.profile.fname,this.data.lname=this.profile.lname,this.data.user_img=this.profile.user_img,this.data.email=this.profile.email,this.data.facebook=this.profile.facebook,this.data.twitter=this.profile.twitter,this.data.youtube=this.profile.youtube},saveData:function(){this.$store.dispatch("UPDATE_PROFILE",this.data)},restoreData:function(){this.setData()},onChangeImage:function(t){this.data.user_img="data:image/jpeg;base64,"+t.base64}},components:{base64upload:i.a},computed:{profile:function(){return this.$store.state.profile}}}},Xd32:function(t,e,a){a("+tPU"),a("zQR9"),t.exports=a("5PlU")},cSVw:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,".base64-upload[data-v-ec9891ec]{position:relative;cursor:pointer}img[data-v-ec9891ec],input[data-v-ec9891ec]{width:100%;height:100%;text-align:center}input[data-v-ec9891ec]{position:absolute;top:0;right:0;opacity:0}",""])},d7EF:function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var r=a("us/S"),s=i(r),n=a("BO1k"),o=i(n);e.default=function(){function t(t,e){var a=[],i=!0,r=!1,s=void 0;try{for(var n,l=(0,o.default)(t);!(i=(n=l.next()).done)&&(a.push(n.value),!e||a.length!==e);i=!0);}catch(t){r=!0,s=t}finally{try{!i&&l.return&&l.return()}finally{if(r)throw s}}return a}return function(e,a){if(Array.isArray(e))return e;if((0,s.default)(Object(e)))return t(e,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},"us/S":function(t,e,a){t.exports={default:a("Xd32"),__esModule:!0}},vG6M:function(t,e,a){"use strict";function i(t){a("7LnL")}var r=a("xt4T"),s=a("68kg"),n=a("VU/8"),o=i,l=n(r.a,s.a,o,"data-v-ec9891ec",null);e.a=l.exports},xt4T:function(t,e,a){"use strict";var i=a("d7EF"),r=a.n(i);e.a={props:{imageSrc:String,imageStyle:Object},data:function(){return{src:this.imageSrc}},methods:{onChange:function(t){var e=this;if(t.target.files&&t.target.files[0]){var a=t.target.files[0],i=new FileReader;i.addEventListener("load",function(t){e.src=t.target.result;var i=e.src.split(","),s=r()(i,2),n=s[1];e.$emit("change",{size:a.size,type:a.type,name:a.name,base64:n})}),i.readAsDataURL(a)}}}}}});
//# sourceMappingURL=settings.45fb0a16e3756571e19f.js.map