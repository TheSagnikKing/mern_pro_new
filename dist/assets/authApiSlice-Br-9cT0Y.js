import{c as s,l as g,s as i}from"./index-CA3EcmWk.js";console.log(s);const r=s.injectEndpoints({endpoints:e=>({login:e.mutation({query:t=>({url:"/auth/signin",method:"POST",body:{...t}})}),googleLogin:e.mutation({query:t=>({url:`/auth/googlesignin?token=${t.token}`,method:"POST"})}),register:e.mutation({query:t=>({url:"/auth/signup",method:"POST",body:t})}),googleregister:e.mutation({query:t=>({url:`auth/googlesignup?token=${t.token}`,method:"POST"})}),updateAdmin:e.mutation({query:t=>({url:"/auth/update",method:"PATCH",body:t})}),sendLogout:e.mutation({query:()=>({url:"/auth/logout",method:"POST"}),async onQueryStarted(t,{dispatch:n,queryFulfilled:a}){try{const{data:o}=await a;console.log("I am logout slice ",o==null?void 0:o.message),n(g()),setTimeout(()=>{n(s.util.resetApiState())},1e3)}catch(o){console.log(o)}}}),refresh:e.mutation({query:()=>({url:"/auth/refresh",method:"GET"}),async onQueryStarted(t,{dispatch:n,queryFulfilled:a}){try{const{data:o}=await a;console.log(o);const{accessToken:u}=o;n(i({accessToken:u}))}catch(o){console.log(o)}}}),adminLoggedIn:e.query({query:()=>({url:"/auth/adminloggedin",method:"GET"}),providesTags:["Admin"]})})}),{useLoginMutation:m,useGoogleLoginMutation:d,useSendLogoutMutation:c,useRefreshMutation:h,useRegisterMutation:y,useGoogleregisterMutation:p,useUpdateAdminMutation:S,useAdminLoggedInQuery:T}=r;export{d as a,y as b,p as c,S as d,c as e,h as f,T as g,m as u};
