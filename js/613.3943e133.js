"use strict";(self["webpackChunkRoseUI"]=self["webpackChunkRoseUI"]||[]).push([[613],{3613:function(e,t,o){o.r(t),o.d(t,{default:function(){return W}});var n=o(6252),r=o(9963);const s=(0,n._)("h5",null,"Default Dropdown",-1),a=(0,n._)("p",{class:"mb-2"},[(0,n.Uk)("Use the "),(0,n._)("code",null,"rs-dropdown"),(0,n.Uk)(" to show alert.")],-1),l={class:"flex items-center mb-3"},d=(0,n.Uk)("This is custom"),u={key:0,class:"z-0"},p=(0,n._)("pre",{class:"language-html shadow-none"},[(0,n.Uk)("            "),(0,n._)("code",null,'\r\n              <template> \r\n                <rs-dropdown title="Default" :menuItems="dropdownItems"></rs-alert>\r\n                <rs-dropdown title="Custom Dropdown"><template #content>This is custom</template></rs-dropdown>\r\n              </template>\r\n\r\n              <script> \r\n                import RsDropdown from "@/components/Dropdown.vue";\r\n\r\n                export default {\r\n                  components: {\r\n                    RsDropdown,\r\n                  },\r\n                  setup() {\r\n                    return {\r\n                        dropdownItems: [\r\n                            {\r\n                              label: "Item 1 - Application",\r\n                              route: { name: "dashboard" },\r\n                            },\r\n                            {\r\n                              label: "Item 2 - Dashboard",\r\n                              route: { name: "dashboard" },\r\n                            },\r\n                            {\r\n                              label: "Item 3 - Items",\r\n                              route: { name: "dashboard" },\r\n                            },\r\n                        ],\r\n                    };\r\n                  },\r\n                };\r\n              <\/script>\r\n            '),(0,n.Uk)("\r\n          ")],-1);function m(e,t,o,m,i,c){const w=(0,n.up)("rs-breadcrumb"),h=(0,n.up)("rs-dropdown"),g=(0,n.up)("perfect-scrollbar"),b=(0,n.up)("rs-card"),f=(0,n.up)("rs-layout"),v=(0,n.Q2)("highlight");return(0,n.wg)(),(0,n.j4)(f,null,{default:(0,n.w5)((()=>[(0,n.Wm)(w),(0,n.Wm)(b,null,{header:(0,n.w5)((()=>[s])),body:(0,n.w5)((()=>[a,(0,n._)("div",l,[(0,n.Wm)(h,{title:"Default",menuItems:m.dropdownItems,class:"mb-2"},null,8,["menuItems"]),(0,n.Wm)(h,{title:"Custom Dropdown",class:"mb-2 ml-4"},{content:(0,n.w5)((()=>[d])),_:1})]),(0,n._)("button",{class:"text-sm border border-slate-200 py-1 px-3 rounded-lg",onClick:t[0]||(t[0]=e=>m.showCode?m.showCode=!1:m.showCode=!0)}," Show Code "),(0,n.Wm)(r.uT,{name:"fade"},{default:(0,n.w5)((()=>[m.showCode?(0,n.wy)(((0,n.wg)(),(0,n.iD)("div",u,[(0,n.Wm)(g,{style:{height:"300px"}},{default:(0,n.w5)((()=>[p])),_:1})])),[[v]]):(0,n.kq)("",!0)])),_:1})])),_:1})])),_:1})}var i=o(2262),c=o(3577);const w={class:"relative"},h=(0,n._)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"caret-down",class:"w-3 ml-2",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"},[(0,n._)("path",{fill:"currentColor",d:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"})],-1),g={key:0,class:"min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none"},b={key:1},f={class:"min-w-max absolute bg-white text-base z-50 float-left py-2 text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none"},v=["onClick"];function y(e,t,o,s,a,l){const d=(0,n.Q2)("click-away");return(0,n.wy)(((0,n.wg)(),(0,n.iD)("div",w,[(0,n._)("button",{onClick:t[0]||(t[0]=(...e)=>s.toggle&&s.toggle(...e)),class:"px-6 py-2.5 bg-rose-400 hover:bg-rose-500 focus:bg-rose-500 active:bg-rose-600 text-white rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg active:text-white transition duration-150 ease-in-out flex menuItems-center whitespace-nowrap",type:"button"},[(0,n.Uk)((0,c.zw)(s.props.title)+" ",1),h]),(0,n.Wm)(r.uT,{name:"fade"},{default:(0,n.w5)((()=>[(0,n.wy)((0,n._)("section",null,[s.props.menuItems&&0!==s.props.menuItems.length?((0,n.wg)(),(0,n.iD)("div",b,[(0,n._)("ul",f,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.props.menuItems,((e,t)=>((0,n.wg)(),(0,n.iD)("li",{key:t},[(0,n._)("a",{onClick:t=>s.navigateMenu(e.route),class:"cursor-pointer text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"},(0,c.zw)(e.label),9,v)])))),128))])])):((0,n.wg)(),(0,n.iD)("div",g,[(0,n.WI)(e.$slots,"content",{class:"cursor-pointer"})]))],512),[[r.F8,s.isOpen]])])),_:3})])),[[d,s.closeMenu]])}var I=o(1736),k={name:"component-dropdown",props:{title:{type:String,default:"Default"},menuItems:{type:Array,default:()=>[]}},setup(e){const t=(0,i.iH)(!1),o=()=>{t.value=!t.value},n=()=>{t.value=!1},r=e=>{try{I.Z.push(e)}catch(t){I.Z.push({name:"error-404"})}};return{props:e,toggle:o,isOpen:t,navigateMenu:r,closeMenu:n}}},x=o(3744);const D=(0,x.Z)(k,[["render",y]]);var _=D,C={name:"component-dropdown",components:{RsDropdown:_},setup(){const e=(0,i.iH)(!1);return{showCode:e,dropdownItems:[{label:"Item 1 - Application",route:{name:"dashboard"}},{label:"Item 2 - Dashboard",route:{name:"dashboard"}},{label:"Item 3 - Items",route:{name:"dashboard"}}]}}};const U=(0,x.Z)(C,[["render",m]]);var W=U}}]);
//# sourceMappingURL=613.3943e133.js.map