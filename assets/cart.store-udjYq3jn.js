import{K as u,L as t,M as a}from"./index-Cww7t7_x.js";const m=u("cart",()=>{async function o(){var s;try{return await t.post("/api/cart/getCart")}catch(r){return r instanceof a?{errors:((s=r.response.data)==null?void 0:s.message)||[]}:{errors:["Something wrong, please try later"]}}}async function n(s){var r;try{const e=await t.post("/api/cart/addToCart",s);return console.log(e),e}catch(e){return e instanceof a?{errors:((r=e.response.data)==null?void 0:r.message)||[]}:{errors:["Something wrong, please try later"]}}}async function c(s){var r;try{const e=await t.post("/api/cart/removeFromCart",{cartDetail_id:s});return console.log(e),e}catch(e){return e instanceof a?{errors:((r=e.response.data)==null?void 0:r.message)||[]}:{errors:["Something wrong, please try later"]}}}async function i(){var s;try{return await t.post("/api/student_course/joinCoursesInCart")}catch(r){return r instanceof a?{errors:((s=r.response.data)==null?void 0:s.message)||[]}:{errors:["Something wrong, please try later"]}}}return{handleGetAllCart:o,handleAddToCart:n,handleremoveFromCart:c,handleJoinCoursesInCart:i}});export{m as u};
