import{P as S}from"./ProfileView-BKnhe619.js";import{_ as j,r as _,V as p,c as r,k as v,l as T,F as g,j as E,o as c,a as e,T as d,q as f,A as h,I as V}from"./index-Cww7t7_x.js";const $={class:"container mx-auto px-4 py-8"},O={class:"bg-white shadow-md rounded-lg p-6 mb-6"},R={class:"flex justify-between items-center"},L={class:"flex items-center cursor-pointer"},P={class:"relative"},q=["checked"],B={class:"bg-white shadow-md rounded-lg p-6 mb-6"},F={class:"space-y-4"},I={class:"font-medium capitalize"},K={class:"text-gray-500 text-sm"},M={class:"flex items-center cursor-pointer"},z={class:"relative"},A=["checked","onChange","disabled"],D={class:"bg-white shadow-md rounded-lg p-6"},Q={class:"space-y-6"},G={class:"flex justify-between items-center mb-3"},H={class:"font-medium"},J={class:"text-gray-500 text-sm"},U={class:"flex items-center cursor-pointer"},W={class:"relative"},X=["checked","onChange","disabled"],Y={key:0,class:"grid grid-cols-3 gap-4 mt-2"},Z=["id","checked","onChange","disabled"],ee=["for"],se={__name:"NotificationsSettingsView",setup(te){const x=_(!1),i=p({email:!0,sms:!1,app:!0}),l=p({scheduleChanges:{enabled:!0,channels:{email:!0,sms:!1,app:!0}},testResults:{enabled:!0,channels:{email:!0,sms:!1,app:!0}},courseProgress:{enabled:!1,channels:{email:!1,sms:!1,app:!1}},newCourseRecommendations:{enabled:!1,channels:{email:!1,sms:!1,app:!1}}}),n=_(!0),w=()=>{n.value=!n.value,n.value?(i.email=!0,i.app=!0):(Object.keys(i).forEach(s=>{i[s]=!1}),Object.keys(l).forEach(s=>{l[s].enabled=!1,Object.keys(l[s].channels).forEach(t=>{l[s].channels[t]=!1})}))},k=s=>{i[s]=!i[s],Object.values(i).some(t=>t)||(n.value=!1)},C=s=>{l[s].enabled=!l[s].enabled,l[s].enabled?(l[s].channels.email=!0,l[s].channels.app=!0):Object.keys(l[s].channels).forEach(t=>{l[s].channels[t]=!1})},y=(s,t)=>{l[s].channels[t]=!l[s].channels[t],Object.values(l[s].channels).some(b=>b)||(l[s].enabled=!1)},N=()=>{alert("Đã lưu cài đặt thông báo")};return(s,t)=>{const b=E("FullScreenLoading");return c(),r(g,null,[v(S,null,{default:T(()=>[e("div",$,[t[3]||(t[3]=e("h1",{class:"text-2xl font-bold mb-6 text-gray-800"},"Cài đặt Thông báo",-1)),e("div",O,[e("div",R,[t[0]||(t[0]=e("div",null,[e("h2",{class:"text-xl font-semibold text-gray-700"},"Tất cả thông báo"),e("p",{class:"text-gray-500"},"Tắt hoặc bật tất cả các loại thông báo")],-1)),e("label",L,[e("div",P,[e("input",{type:"checkbox",class:"sr-only",checked:n.value,onChange:w},null,40,q),e("div",{class:d(["w-10 h-4 bg-gray-400 rounded-full shadow-inner transition",n.value?"bg-green-400":"bg-red-400"])},null,2),e("div",{class:d(["dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition",n.value?"transform translate-x-full bg-green-500":"bg-red-500"])},null,2)])])])]),e("div",B,[t[1]||(t[1]=e("h2",{class:"text-xl font-semibold mb-4 text-gray-700"},"Kênh Thông báo",-1)),e("div",F,[(c(!0),r(g,null,f(i,(o,a)=>(c(),r("div",{key:a,class:"flex justify-between items-center"},[e("div",null,[e("h3",I,h({email:"Email",sms:"SMS",app:"Ứng dụng"}[a]),1),e("p",K," Nhận thông báo qua "+h({email:"email",sms:"tin nhắn SMS",app:"ứng dụng"}[a]),1)]),e("label",M,[e("div",z,[e("input",{type:"checkbox",class:"sr-only",checked:o,onChange:m=>k(a),disabled:!n.value},null,40,A),e("div",{class:d(["w-10 h-4 bg-gray-400 rounded-full shadow-inner transition",o?"bg-green-400":"bg-red-400"])},null,2),e("div",{class:d(["dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition",o?"transform translate-x-full bg-green-500":"bg-red-500"])},null,2)])])]))),128))])]),e("div",D,[t[2]||(t[2]=e("h2",{class:"text-xl font-semibold mb-4 text-gray-700"},"Thông Báo Quan Trọng",-1)),e("div",Q,[(c(!0),r(g,null,f(l,(o,a)=>(c(),r("div",{key:a,class:"border-b pb-4 last:border-b-0"},[e("div",G,[e("div",null,[e("h3",H,h({scheduleChanges:"Thay đổi lịch học",testResults:"Kết quả bài kiểm tra",courseProgress:"Tiến độ khóa học",newCourseRecommendations:"Khóa học đề xuất"}[a]),1),e("p",J,h({scheduleChanges:"Thông báo thay đổi lịch học",testResults:"Thông báo kết quả bài kiểm tra",courseProgress:"Cập nhật tiến độ học tập",newCourseRecommendations:"Đề xuất khóa học mới"}[a]),1)]),e("label",U,[e("div",W,[e("input",{type:"checkbox",class:"sr-only",checked:o.enabled,onChange:m=>C(a),disabled:!n.value},null,40,X),e("div",{class:d(["w-10 h-4 bg-gray-400 rounded-full shadow-inner transition",o.enabled?"bg-green-400":"bg-red-400"])},null,2),e("div",{class:d(["dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition",o.enabled?"transform translate-x-full bg-green-500":"bg-red-500"])},null,2)])])]),o.enabled?(c(),r("div",Y,[(c(!0),r(g,null,f(o.channels,(m,u)=>(c(),r("div",{key:u,class:"flex items-center"},[e("input",{type:"checkbox",id:`${a}-${u}`,class:"mr-2",checked:m,onChange:le=>y(a,u),disabled:!n.value},null,40,Z),e("label",{for:`${a}-${u}`,class:"text-gray-700"},h({email:"Email",sms:"SMS",app:"Ứng dụng"}[u]),9,ee)]))),128))])):V("",!0)]))),128))])]),e("div",{class:"mt-6 text-right"},[e("button",{onClick:N,class:"bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"}," Lưu Cài Đặt ")])])]),_:1}),v(b,{open:x.value},null,8,["open"])],64)}}},oe=j(se,[["__scopeId","data-v-c5871e0b"]]);export{oe as default};
