import{d as x}from"./index.15a69904.js";import{l as a,q as o,A as r,C as s,G as n,y as d,x as c,F as _,Q as f,P as g,H as p,t as k}from"./element-plus.06a878fd.js";const m={props:["id"],created(){x.post("/news/detail/",{id:this.id}).then(t=>{this.detail=t.data})},data(){return{detail:null}},methods:{jsonify(t){return JSON.parse(t)},viewCommentDetail(t,i){localStorage.setItem("text",t.trim()),this.$router.push({name:"AnalyseList",params:{subject:i}})}}},w={key:0,style:{padding:"30px"}},C={class:"main-title"},N={class:"desc"},b=_("\u5185\u5BB9\u5206\u6790 "),j={title:"\u70B9\u51FB\u7387"},B={key:0},L=["innerHTML"];function V(t,i,D,H,e,u){const y=a("el-button"),v=a("svg-icon"),h=a("el-tag");return e.detail?(o(),r("div",w,[s("h1",C,n(e.detail.title),1),s("div",N,[d(y,{onClick:i[0]||(i[0]=l=>u.viewCommentDetail(e.detail.text,e.detail.subject)),type:"primary",size:"mini"},{default:c(()=>[b]),_:1}),s("span",j,[d(v,{"class-name":"svg-icon","icon-class":"svg-eye-open",style:{display:"inline"}}),_(" "+n(e.detail.view_count),1)]),s("span",null,n(e.detail.intime),1),s("span",null,n(e.detail.media_name),1),e.detail.keywords?(o(),r("span",B,[(o(!0),r(f,null,g(e.detail.keywords.split(","),l=>(o(),k(h,{key:l,type:"info",style:{margin:"0 5px 5px 0",cursor:"pointer"},effect:"plain"},{default:c(()=>[_(n(l),1)]),_:2},1024))),128))])):p("",!0)]),s("div",{innerHTML:e.detail.html},null,8,L)])):p("",!0)}m.render=V;m.__scopeId="data-v-79be5af7";export{m as default};
