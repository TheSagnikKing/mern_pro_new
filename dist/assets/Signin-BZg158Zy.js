import{r as a,u as v,a as L,s as h,j as e,G as w,L as I}from"./index-CA3EcmWk.js";import{u as _,a as b}from"./authApiSlice-Br-9cT0Y.js";const P=()=>{const[t,g]=a.useState(""),[i,d]=a.useState(""),[u,n]=a.useState(""),r=v(),c=L();a.useEffect(()=>{n("")},[t,i]);const[m,{isLoading:x}]=_(),p=async()=>{var s;try{const{accessToken:o}=await m({email:t,password:i}).unwrap();c(h({accessToken:o})),console.log(o),g(""),d(""),localStorage.setItem("AdminLoggedIn","true"),localStorage.setItem("BarberLoggedIn","false"),r("/admin-dashboard")}catch(o){o.status?o.status===400?n("Missing Email or Password"):o.status===401?n("Unauthorized"):n((s=o.data)==null?void 0:s.message):n("No Server Response")}},[f,{data:j,isFetching:k,isSuccess:l,isError:M,error:y}]=b();a.useEffect(()=>{l&&(c(h({accessToken:l.accessToken})),localStorage.setItem("AdminLoggedIn","true"),localStorage.setItem("BarberLoggedIn","false"),r("/admin-dashboard"))},[l,c,r]),console.log(j);const S=async s=>{console.log(s.credential),s.credential&&f({token:s.credential})},E=s=>{console.log(s)};return e.jsx("main",{className:"admin__signin__main",children:e.jsxs("div",{className:"admin__signin__div",children:[u&&e.jsx("h1",{style:{color:"#fff",background:"crimson",paddingInline:"1rem",boxShadow:"0px 0px 4px crimson",borderRadius:"0.3rem"},children:u}),e.jsx("h1",{children:"Sign In To Your Admin Account"}),e.jsxs("div",{children:[e.jsx("h1",{children:"Email"}),e.jsx("input",{type:"text",placeholder:"Enter Email",value:t,onChange:s=>g(s.target.value)})]}),e.jsxs("div",{children:[e.jsx("h1",{children:"Password"}),e.jsx("input",{type:"text",placeholder:"Enter Password",value:i,onChange:s=>d(s.target.value)})]}),x?e.jsx("button",{children:"Loader"}):e.jsx("button",{onClick:p,children:"Signin"}),e.jsx("div",{children:e.jsx(w,{onSuccess:S,onError:E,size:"large",shape:"circle",width:310,logo_alignment:"left",text:"continue_with"})}),e.jsx(I,{to:"/admin-signup",children:"Signup"})]})})};export{P as default};
