import{_ as m,o as _,c as f,a as t,n as b,t as l,d as p,i as g,w as a,e as r,g as i,u as c,f as u,p as x}from"./index-Ct7bBCdm.js";const h={class:"item"},v={class:"font-bold text-base leading-5 mt-2 truncate"},y={class:"font-normal text-sm mt-1 truncate"},C={class:"font-medium text-base mt-1 flex gap-1 truncate"},w={class:"text-lg flex gap-2 mt-1"},k={class:"font-bold"},$={class:"font-normal line-through"},S={__name:"ItemAllCourse",props:{name:{type:String,default:"This is name course"},title:{type:String},image:{type:String,default:"https://photo.znews.vn/w660/Uploaded/mdf_eioxrd/2021_07_06/2.jpg"},cert:{type:String},coursePrice:{type:Number},originalPrice:{type:Number}},setup(d){const s=d,e=()=>{console.log(`Thêm khóa học: ${s.name} vào giỏ hàng`)};return(n,o)=>(_(),f("div",h,[t("div",{class:"bg-center bg-no-repeat bg-cover xl:h-40 lg:h-32 md:h-28 h-20",style:b({backgroundImage:`url(${s.image})`})},null,4),t("div",v,l(s.name),1),t("p",y,l(s.title),1),t("div",C,[o[0]||(o[0]=t("i",{class:"bi bi-person-vcard"},null,-1)),t("span",null,l(s.cert),1)]),t("div",w,[t("div",k,l(s.coursePrice),1),t("div",$,l(s.originalPrice),1)]),t("button",{onClick:e,class:"mt-3 w-full flex items-center justify-center gap-2 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"},o[1]||(o[1]=[t("i",{class:"bi bi-cart-plus"},null,-1),t("span",null,"Thêm vào giỏ",-1)]))]))}},B=m(S,[["__scopeId","data-v-6925f3e5"]]),I={class:"flex justify-center flex-col items-center"},L={class:"bg-black w-full h-40 flex justify-center flex-col items-center"},N={class:"container"},A={class:"button text-white grid auto-cols-max grid-flow-col"},T={class:"w-full container mt-8"},V={__name:"CourseListView",setup(d){return(s,e)=>{const n=p("RouterLink"),o=p("MainLayout");return _(),g(o,null,{default:a(()=>[t("div",I,[t("div",L,[t("div",N,[e[4]||(e[4]=t("div",{class:"font-bold pt-10 pb-12 text-white text-4xl"},"Course List",-1)),t("div",A,[r(n,{to:c(u).allCourse.path,class:"btn px-1 pb-2"},{default:a(()=>e[0]||(e[0]=[i("All Courses")])),_:1},8,["to"]),r(n,{to:c(u).newCourses.path,class:"btn px-1 pb-2"},{default:a(()=>e[1]||(e[1]=[i("Newest Courses")])),_:1},8,["to"]),r(n,{to:c(u).hotCourses.path,class:"btn px-1 pb-2"},{default:a(()=>e[2]||(e[2]=[i("Hot Courses")])),_:1},8,["to"]),r(n,{to:c(u).recommendCourses.path,class:"btn px-1 pb-2"},{default:a(()=>e[3]||(e[3]=[i("Recommended for you")])),_:1},8,["to"])])])]),t("div",T,[x(s.$slots,"default",{},void 0,!0)])])]),_:3})}}},P=m(V,[["__scopeId","data-v-60287275"]]);export{P as A,B as I};
