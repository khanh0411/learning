import{r,i as V,e as ve,c as n,k as m,l as pe,F as B,E as d,j as y,o as a,a as e,I as v,T,A as u,b as w,q as K,C as be,u as X,a3 as J,t as me,z as xe,cd as fe}from"./index-Cww7t7_x.js";import{u as ye}from"./question.store-D_t9fu6b.js";import{u as ge}from"./studentCourse.store-CyibdJ0b.js";const he={class:"max-w-6xl mx-auto p-6"},_e={class:"mb-6"},we={class:"flex justify-between items-center"},ke={key:0,class:"relative w-64"},Ce={class:"mb-6"},Se={class:"flex justify-between items-center"},Ve={class:"flex space-x-2"},Te=["disabled"],De={key:0,class:"mb-4 p-4 bg-red-100 text-red-700 rounded-lg flex justify-between items-center"},Ae={class:"flex items-center"},je={key:1,class:"bg-white rounded-lg shadow-lg p-6"},Le={class:"flex justify-between items-center mb-6"},Ue={class:"relative w-64"},Ge={key:0,class:"py-8 text-center"},Ie={key:1,class:"overflow-x-auto"},$e={class:"min-w-full"},Be={class:"bg-white divide-y divide-gray-200"},Qe={class:"px-6 py-4 font-medium"},Fe={class:"px-6 py-4"},Me={class:"px-6 py-4"},Ne={class:"px-6 py-4"},qe={class:"flex items-center"},ze={class:"w-full bg-gray-200 rounded-full h-2.5"},Ee={class:"ml-2 text-sm text-gray-600"},Oe={class:"px-6 py-4"},He={class:"px-6 py-4"},Re={class:"flex space-x-2"},Ke=["onClick","disabled"],Xe={key:2,class:"bg-white rounded-lg shadow-lg p-6"},Je={class:"text-2xl font-semibold mb-6"},Pe={class:"space-y-6"},We={class:"flex space-x-4"},Ye=["disabled"],Ze={key:0,class:"flex items-center justify-center"},et={key:1},tt=["disabled"],st={key:0,class:"flex items-center justify-center"},lt={key:1},ot=["disabled"],nt={key:3,class:"bg-white rounded-lg shadow-lg p-6"},at={key:0,class:"py-8 text-center"},rt={key:1,class:"space-y-4"},it={class:"flex justify-between items-start"},ut={class:"flex-grow"},dt={class:"flex items-center space-x-2 mb-2"},ct={class:"font-medium"},vt={class:"text-sm text-gray-500"},pt={class:"text-gray-800 mb-2"},bt=["onClick"],mt={key:2,class:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"},xt={class:"bg-white rounded-lg p-6 w-full max-w-lg"},ft={class:"mb-4"},yt={class:"text-gray-600 mb-2"},gt={class:"text-gray-800 p-3 bg-gray-50 rounded"},ht={class:"mb-4"},_t={class:"flex justify-end space-x-3"},wt=["disabled"],kt={key:0,class:"flex items-center justify-center"},Ct={key:1},jt={__name:"InstructorUser",setup(St){const P=ye(),b=ge(),D=r(null),A=r(null),g=r(null),p=r(null),Q=r(null),j=r(""),x=r(""),i=r("list"),k=r([]),L=r([]),F=r([]),U=r([]),h=r(!1),o=r(!1),_=r(!1),C=r(!1),c=r({email:"",course:""}),M=V(()=>Array.isArray(k.value)?k.value.filter(s=>s.user.full_name.toLowerCase().includes(j.value.toLowerCase())):[]),N=V(()=>Array.isArray(L.value)?L.value.filter(s=>p.value?s.course_id===p.value:!0):[]),q=V(()=>c.value.email.trim()!==""&&c.value.course.trim()!==""),z=V(()=>x.value.trim().length>0);function S(s){o.value||(i.value=s),i.value==="list"&&(p.value="",f()),i.value==="questions"&&G(),i.value==="form"&&ae()}async function G(){o.value=!0;const s=p.value,t=await b.handleTeacherGetQuestions(s);o.value=!1,t.error?d({text:t.errors,type:"error"}):L.value=t.data}function W(s){g.value=s,C.value=!0,x.value=""}async function Y(s){if(!z.value)return;o.value=!0;const t=await b.handleTeacherReply({id_message:g.value._id,message:s});o.value=!1,t.error?d({text:t.errors,type:"error"}):(d({text:"Đã trả lời câu hỏi thành công",type:"success"}),C.value=!1,g.value=null,x.value="",G())}function Z(s){_.value=!0,A.value=s}async function ee(){o.value=!0;const s=await b.handleDeleteStudentInCourse(A.value.id);o.value=!1,s.errors?d({text:s.errors,type:"error"}):(_.value=!1,d({text:"Delete success   ",type:"success"}),f())}function te(){_.value=!1,A.value=null}function I(){c.value={email:"",course:""},h.value=!1,Q.value=null,i.value="list"}async function se(){o.value=!0;const s=await b.handleUpdateStudent({...c.value,student_id:Q.value});o.value=!1,s.errors?d({text:s.errors,type:"error"}):(d({text:"Update Success",type:"success"}),I(),f())}async function le(){o.value=!0;const s={course_id:c.value.course,query:c.value.email},t=await b.handleAddStudentByCourse(s);o.value=!1,t.errors?d({text:t.errors,type:"error"}):(d({text:"Create Success",type:"success"}),I(),f())}async function oe(){o.value=!0;const s=await P.handleGetCourseById();o.value=!1,s.errors?d({text:s.errors,type:"error"}):U.value=s}function ne(s){p.value=s,i.value==="list"&&f(),i.value==="questions"&&G()}async function f(){o.value=!0;const s=await b.handleGetListStudentCourse(p.value);o.value=!1,s.errors?d({text:s.errors,type:"error"}):k.value=s.data}async function ae(){o.value=!0;const s=await b.handleGetListUser();o.value=!1,k.value=s,s.errors?d({text:s.errors,type:"error"}):F.value=s.map(t=>new fe(t.user_id,t.email))}return ve(()=>{f(),oe()}),(s,t)=>{const E=y("GenericSelect"),re=y("GenericInput"),ie=y("MultipleSelect"),ue=y("ConfirmDialog"),de=y("InstructorLayout"),ce=y("FullScreenLoading");return a(),n(B,null,[m(de,null,{default:pe(()=>{var O,H,R;return[e("div",he,[e("div",_e,[e("div",we,[i.value==="list"||i.value==="questions"?(a(),n("div",ke,[t[13]||(t[13]=e("label",{for:"course",class:"block text-sm font-medium text-gray-700 mb-1"},"Chọn khóa học",-1)),m(E,{id:"course",modelValue:p.value,"onUpdate:modelValue":t[0]||(t[0]=l=>p.value=l),onChange:ne,options:U.value,class:"w-full border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",disabled:o.value},null,8,["modelValue","options","disabled"])])):v("",!0)])]),e("div",Ce,[e("div",Se,[e("div",Ve,[e("button",{onClick:t[1]||(t[1]=l=>S("list")),class:T(["px-4 py-2 rounded-lg transition-colors",i.value==="list"?"bg-blue-500 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"])}," Danh sách học viên ",2),e("button",{onClick:t[2]||(t[2]=l=>S("questions")),class:T(["px-4 py-2 rounded-lg transition-colors",i.value==="questions"?"bg-blue-500 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"])}," Câu hỏi của học viên ",2),e("button",{onClick:t[3]||(t[3]=l=>S("form")),class:T(["px-4 py-2 rounded-lg transition-colors",i.value==="form"?"bg-blue-500 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"])},u(h.value?"Chỉnh sửa học viên":"Thêm học viên mới"),3)]),i.value==="list"?(a(),n("button",{key:0,onClick:t[4]||(t[4]=l=>S("form")),class:"flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors",disabled:o.value},t[14]||(t[14]=[e("i",{class:"bi bi-plus text-lg mr-2"},null,-1),w(" Thêm học viên ")]),8,Te)):v("",!0)])]),D.value?(a(),n("div",De,[e("div",Ae,[t[15]||(t[15]=e("i",{class:"bi bi-exclamation-circle mr-2"},null,-1)),w(" "+u(D.value),1)]),e("button",{onClick:t[5]||(t[5]=l=>D.value=null),class:"text-red-700 hover:text-red-900"},t[16]||(t[16]=[e("i",{class:"bi bi-x-lg"},null,-1)]))])):v("",!0),i.value==="list"?(a(),n("div",je,[e("div",Le,[t[18]||(t[18]=e("h2",{class:"text-2xl font-semibold"},"Danh sách học viên",-1)),e("div",Ue,[t[17]||(t[17]=e("i",{class:"bi bi-search absolute left-3 top-2.5 text-gray-500"},null,-1)),m(re,{modelValue:j.value,"onUpdate:modelValue":t[6]||(t[6]=l=>j.value=l),type:"text",placeholder:"Tìm kiếm học viên...",class:"w-full pl-10 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"},null,8,["modelValue"])])]),(O=M.value)!=null&&O.length?(a(),n("div",Ie,[e("table",$e,[t[21]||(t[21]=e("thead",{class:"bg-gray-50"},[e("tr",null,[e("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Mã học viên "),e("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Tên học viên "),e("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Tên khóa học "),e("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Tiến độ"),e("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Tham gia"),e("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Thao tác")])],-1)),e("tbody",Be,[(a(!0),n(B,null,K(M.value,l=>{var $;return a(),n("tr",{key:l.user._id,class:"hover:bg-gray-50"},[e("td",Qe,u(l.user.code),1),e("td",Fe,u(l.user.full_name),1),e("td",Me,u(($=l.course[0])==null?void 0:$.name),1),e("td",Ne,[e("div",qe,[e("div",ze,[e("div",{class:"bg-blue-600 h-2.5 rounded-full",style:be({width:`${l.progress}%`})},null,4)]),e("span",Ee,u(l.progress)+"%",1)])]),e("td",Oe,u(X(J)(l.joinAt)),1),e("td",He,[e("div",Re,[e("button",{onClick:Vt=>Z(l),class:"p-2 ml-5 text-red-600 hover:bg-red-100 rounded-lg transition-colors",disabled:o.value},t[20]||(t[20]=[e("i",{class:"bi bi-trash"},null,-1)]),8,Ke)])])])}),128))])])])):(a(),n("div",Ge,t[19]||(t[19]=[e("i",{class:"bi bi-inbox text-4xl text-gray-400"},null,-1),e("p",{class:"mt-2 text-gray-600"},"Chưa có học viên nào",-1)])))])):v("",!0),i.value==="form"?(a(),n("div",Xe,[e("h2",Je,u(h.value?"Chỉnh sửa học viên":"Thêm học viên mới"),1),e("div",Pe,[e("div",null,[t[22]||(t[22]=e("label",{class:"block text-sm font-medium text-gray-700 mb-1"},"Email học viên",-1)),m(ie,{modelValue:c.value.email,"onUpdate:modelValue":t[7]||(t[7]=l=>c.value.email=l),options:F.value},null,8,["modelValue","options"])]),e("div",null,[t[23]||(t[23]=e("label",{class:"block text-sm font-medium text-gray-700 mb-1"},"Khóa học",-1)),m(E,{modelValue:c.value.course,"onUpdate:modelValue":t[8]||(t[8]=l=>c.value.course=l),options:U.value,class:"w-full",required:"",disabled:o.value},null,8,["modelValue","options","disabled"])]),e("div",We,[h.value?v("",!0):(a(),n("button",{key:0,onClick:le,type:"submit",class:"flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50",disabled:o.value||!q.value},[o.value?(a(),n("span",Ze,t[24]||(t[24]=[e("div",{class:"animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"},null,-1),w(" Đang xử lý... ")]))):(a(),n("span",et,"Thêm học viên"))],8,Ye)),h.value?(a(),n("button",{key:1,onClick:se,type:"submit",class:"flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50",disabled:o.value||!q.value},[o.value?(a(),n("span",st,t[25]||(t[25]=[e("div",{class:"animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"},null,-1),w(" Đang xử lý... ")]))):(a(),n("span",lt,"Cập nhật"))],8,tt)):v("",!0),e("button",{type:"button",onClick:I,class:"flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors",disabled:o.value}," Hủy ",8,ot)])])])):v("",!0),i.value==="questions"?(a(),n("div",nt,[t[30]||(t[30]=e("h2",{class:"text-2xl font-semibold mb-6"},"Câu hỏi của học viên",-1)),N.value.length?(a(),n("div",rt,[(a(!0),n(B,null,K(N.value,l=>(a(),n("div",{key:l.id,class:"border rounded-lg p-4 hover:bg-gray-50"},[e("div",it,[e("div",ut,[e("div",dt,[e("span",ct,u(l.sender.full_name),1),e("span",vt,u(X(J)(l.timestamp)),1),e("span",{class:T(["px-2 py-1 text-xs rounded-full",l.isAnswered?"bg-green-100 text-green-800":"bg-yellow-100 text-yellow-800"])},u(l.isAnswered?"Đã trả lời":"Chưa trả lời"),3)]),e("p",pt,u(l.message),1)]),l.answer?v("",!0):(a(),n("button",{key:0,onClick:$=>W(l),class:"px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"}," Trả lời ",8,bt))])]))),128))])):(a(),n("div",at,t[26]||(t[26]=[e("i",{class:"bi bi-chat-left-dots text-4xl text-gray-400"},null,-1),e("p",{class:"mt-2 text-gray-600"},"Chưa có câu hỏi nào",-1)]))),C.value?(a(),n("div",mt,[e("div",xt,[t[29]||(t[29]=e("h3",{class:"text-xl font-semibold mb-4"},"Trả lời câu hỏi",-1)),e("div",ft,[e("p",yt,"Câu hỏi từ "+u((H=g.value)==null?void 0:H.sender.full_name)+":",1),e("p",gt,u((R=g.value)==null?void 0:R.message),1)]),e("div",ht,[t[27]||(t[27]=e("label",{class:"block text-sm font-medium text-gray-700 mb-1"},"Câu trả lời",-1)),me(e("textarea",{"onUpdate:modelValue":t[9]||(t[9]=l=>x.value=l),rows:"4",class:"w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"Nhập câu trả lời..."},null,512),[[xe,x.value]])]),e("div",_t,[e("button",{onClick:t[10]||(t[10]=l=>C.value=!1),class:"px-4 py-2 border rounded-lg hover:bg-gray-50"},"Hủy"),e("button",{onClick:t[11]||(t[11]=l=>Y(x.value)),disabled:!z.value||o.value,class:"px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"},[o.value?(a(),n("span",kt,t[28]||(t[28]=[e("div",{class:"animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"},null,-1),w(" Đang xử lý... ")]))):(a(),n("span",Ct,"Gửi câu trả lời"))],8,wt)])])])):v("",!0)])):v("",!0),m(ue,{modelValue:_.value,"onUpdate:modelValue":t[12]||(t[12]=l=>_.value=l),onAccept:ee,onDeny:te,title:"Xác nhận xóa",message:"Bạn có chắc chắn muốn xóa học viên này không?",isLoading:o.value},null,8,["modelValue","isLoading"])])]}),_:1}),m(ce,{open:o.value},null,8,["open"])],64)}}};export{jt as default};
