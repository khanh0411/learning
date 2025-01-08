import{_ as U,r as v,s as B,l as n,j as u,o as P,a as o,k as s,u as V,m as y,R as d,b as m,A as p,W as h,cf as k}from"./index-Cww7t7_x.js";import{u as R,i as T,a as F}from"./auth.store-DqASw5e-.js";const N={class:"mx-7 text-sm font-medium"},q={class:"mt-8"},A={class:"mt-5"},G={class:"mt-5"},I={class:"mt-5"},j={__name:"SignUpView",emits:["submit"],setup(D,{emit:g}){const C=g,{notify:w}=k(),x=R(),c={full_name:"",email:"",password:"",passwordConfirmation:""},b={full_name:"",email:"",password:"",passwordConfirmation:""},l=v({...b}),a=v({...c}),f=v(!1);async function S(){let r=!0;if(a.value={...c},l.value.full_name.trim()===""&&(a.value.full_name="This field is required",r=!1),l.value.email.trim()===""?(a.value.email="This field is required",r=!1):T(l.value.email.trim())||(a.value.email="This field is not in email format",r=!1),l.value.password.trim()===""?(a.value.password="This field is required",r=!1):F(l.value.password.trim())||(a.value.password="Passwords need to be 8 characters or more and have a combination of uppercase letters, lowercase letters, numbers and symbols.",r=!1),l.value.passwordConfirmation!==l.value.password&&(a.value.passwordConfirmation="Passwords don't match",r=!1),r){f.value=!0;const e=await x.handleCreateUser(l.value);f.value=!1,e.errors?w({text:e.errors,type:"error"}):(C("submit"),w({text:" Create successfully",type:"success"}),l.value={...b})}}return(r,e)=>{const _=u("RouterLink"),i=u("SmallComponent"),E=u("FullScreenLoading"),L=u("GuestLayout");return P(),B(L,null,{default:n(()=>[o("form",{class:"form rounded-lg overflow-hidden w-auto h-auto",onSubmit:h(S,["prevent"])},[s(_,{to:V(y).signIn.path},{default:n(()=>e[4]||(e[4]=[o("button",{class:"signin-btn"},"Login",-1)])),_:1},8,["to"]),s(_,{to:V(y).signUp.path},{default:n(()=>e[5]||(e[5]=[o("button",{class:"signup-btn"},"Register",-1)])),_:1},8,["to"]),o("div",N,[o("div",q,[e[6]||(e[6]=o("label",null,"Name",-1)),s(d,{modelValue:l.value.full_name,"onUpdate:modelValue":e[0]||(e[0]=t=>l.value.full_name=t),type:"text",placeholder:"Enter your Email..",class:"mt-3 invalid:border-red-500",error:!!a.value.full_name},null,8,["modelValue","error"]),s(i,null,{default:n(()=>[m(p(a.value.full_name),1)]),_:1})]),o("div",A,[e[7]||(e[7]=o("label",null,"Email Address",-1)),s(d,{modelValue:l.value.email,"onUpdate:modelValue":e[1]||(e[1]=t=>l.value.email=t),type:"text",placeholder:"Enter your Email..",class:"mt-3 invalid:border-red-500",error:!!a.value.email},null,8,["modelValue","error"]),s(i,null,{default:n(()=>[m(p(a.value.email),1)]),_:1})]),o("div",G,[e[8]||(e[8]=o("label",null,"Password",-1)),s(d,{modelValue:l.value.password,"onUpdate:modelValue":e[2]||(e[2]=t=>l.value.password=t),type:"password",placeholder:"Enter your Password",class:"mt-3 invalid:border-red-500",error:!!a.value.password},null,8,["modelValue","error"]),s(i,null,{default:n(()=>[m(p(a.value.password),1)]),_:1})]),o("div",I,[e[9]||(e[9]=o("label",null,"Confirm Password",-1)),s(d,{modelValue:l.value.passwordConfirmation,"onUpdate:modelValue":e[3]||(e[3]=t=>l.value.passwordConfirmation=t),type:"password",placeholder:"Enter your Password",class:"mt-3 invalid:border-red-500",error:!!a.value.passwordConfirmation},null,8,["modelValue","error"]),s(i,null,{default:n(()=>[m(p(a.value.passwordConfirmation),1)]),_:1})]),e[10]||(e[10]=o("button",{class:"primary-button !w-full my-5"},"Register",-1))])],32),s(E,{open:f.value},null,8,["open"])]),_:1})}}},W=U(j,[["__scopeId","data-v-ac9ba727"]]);export{W as default};
