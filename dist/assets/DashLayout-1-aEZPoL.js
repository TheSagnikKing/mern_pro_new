import{R as m,b as u,j as e,L as x,d as b,h as j,u as g,r as v,O as f}from"./index-CA3EcmWk.js";import{G as h,F as d,I as p,R as L}from"./index-6KXwCiWL.js";import{a as l}from"./barberauthApiSlice-B5SzINdS.js";function _(s){return h({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M4 4h16v12H5.17L4 17.17V4m0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm2 10h12v2H6v-2zm0-3h12v2H6V9zm0-3h12v2H6V6z"},child:[]}]})(s)}function y(s){return h({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zM76 256c0-48.1 18.7-93.3 52.7-127.3S207.9 76 256 76c48.1 0 93.3 18.7 127.3 52.7 32.2 32.2 50.7 74.5 52.6 119.7-8.8-10.3-24.2-24-43.8-24-27.5 0-41.7 25.7-51 42.7-1.4 2.5-2.7 4.9-3.9 7-11.4 19.2-27.3 30-42.5 28.9-13.4-.9-24.8-11.2-32.2-28.8-9.2-22.1-29.1-45.8-52.9-49.2-11.3-1.6-28.1.8-44.7 21.4-3.2 4-6.9 9.4-11.1 15.6-10.4 15.5-26.2 38.8-38.1 40.8-17.3 2.8-30.9-7.5-36.4-12.3-2.2-11.2-3.3-22.8-3.3-34.5z"},child:[]}]})(s)}const S=m.memo(({open:s,setOpen:n})=>{const a=[{id:1,url:"/barber-dashboard",icon:e.jsx(p,{}),name:"Dashboard"},{id:2,url:"/barber-dashboard/salon",icon:e.jsx(L,{}),name:"Salon"},{id:3,url:"/barber-dashboard/barber",icon:e.jsx(_,{}),name:"Barbers"},{id:4,url:"/barber-dashboard/customer",icon:e.jsx(y,{}),name:"Customers"}],o=u(),r=()=>{n(!s)},c=s?"sidebar":"sidebar-hide";return e.jsx("div",{className:"main-container",children:e.jsxs("div",{className:c,children:[s===!0?e.jsxs("div",{children:[e.jsx("h1",{children:"IQB Barber"}),e.jsx("div",{onClick:r,className:"menu-container-icon",children:e.jsx(d,{})})]}):e.jsx("div",{children:e.jsx("div",{onClick:r,className:"menu-container-icon",children:e.jsx(d,{})})}),e.jsx("div",{className:"sidebar-menu-content",children:a==null?void 0:a.map(t=>e.jsx(x,{to:t.url,children:e.jsxs("div",{className:o.pathname===t.url?"active":"navlink",children:[e.jsx("div",{style:{fontSize:"1.8rem",marginLeft:"3px"},children:t.icon}),s&&e.jsx("div",{children:t.name})]})},t.id))})]})})}),I=()=>e.jsx("main",{className:"footer__main",children:e.jsx("p",{children:"Barber Made by @sagniknandy "})}),M=()=>{const[s,{isFetching:n}]=l();b(j),console.log("useSendLogoutMutation ",l());const a=g(),o=()=>{a("/barber-dashboard/editprofile")},r=async()=>{try{await s().unwrap(),localStorage.setItem("AdminLoggedIn","false"),localStorage.setItem("BarberLoggedIn","false"),a("/barber-signin")}catch(i){console.log(i==null?void 0:i.data)}};return e.jsxs("main",{className:"admin__header__main",children:[e.jsx("h1",{children:"Barber Header"}),e.jsxs("div",{children:[e.jsx("div",{style:{width:"4.5rem",height:"4.5rem",borderRadius:"50%",background:"red"},children:e.jsx("img",{style:{width:"100%",height:"100%",borderRadius:"50%"},src:"",alt:""})}),e.jsx("h2",{children:"User:   "}),e.jsx("button",{onClick:o,children:"Edit Profile"}),n?e.jsx("h1",{style:{color:"#fff"},children:"Loader"}):e.jsx("button",{onClick:r,children:"Logout"})]})]})},C=()=>{const[s,n]=v.useState(!1);console.log("Open menu from dashLayout ",s);const a=s?"dashlayout__container_open":"dashlayout__container_close";return e.jsxs("div",{children:[e.jsx(S,{open:s,setOpen:n}),e.jsxs("main",{className:a,children:[e.jsx(M,{}),e.jsx("main",{className:"outlet__container",children:e.jsx(f,{})}),e.jsx(I,{})]})]})};export{C as default};