(this.webpackJsonpemployeedirectory=this.webpackJsonpemployeedirectory||[]).push([[0],{42:function(e,t,s){"use strict";s.r(t);var n=s(2),c=s.n(n),a=s(12),r=s.n(a),i=s(0);var o=function(e){return Object(i.jsx)("div",{className:"container-fluid mx-auto",style:e.style,children:e.children})},l=s(13),d=s(14),j=s(17),m=s(16),h=s(15),u=s.n(h),b={getEmployees:function(){return u.a.get("https://randomuser.me/api/?results=25&nat=us")}},x={button1:{marginRight:"10px",marginBottom:"20px"},button2:{marginBottom:"20px"}},p=function(e){Object(j.a)(s,e);var t=Object(m.a)(s);function s(){var e;Object(l.a)(this,s);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={employees:[{}],sorted:[{}]},e.sortNames=function(){var t=e.state.employees.sort((function(e,t){var s=e.last,n=t.last;return s<n?1:s>n?-1:0}));e.setState({employees:t})},e.sortNamesZ=function(){var t=e.state.employees.sort((function(e,t){var s=e.last,n=t.last;return s<n?-1:s>n?1:0}));e.setState({employees:t})},e}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=this;b.getEmployees().then((function(t){var s=t.data.results.map((function(e){return{image:e.picture.medium,first:e.name.first,last:e.name.last,email:e.email,phone:e.phone,address:e.location.street.number+" "+e.location.street.name+", "+e.location.city+", "+e.location.state+" "+e.location.postcode,age:e.dob.age,id:e.login.uuid}}));console.log(s),e.setState({employees:s})}))}},{key:"render",value:function(){return Object(i.jsxs)(o,{children:[Object(i.jsxs)("div",{className:"d-grid gap-2 d-md-flex justify-content-md-end",children:[Object(i.jsx)("button",{onClick:this.sortNamesZ,className:"btn btn-info justify-content-md-end me-md-2",style:x.button1,children:"Sort (A-Z)"}),Object(i.jsx)("button",{onClick:this.sortNames,className:"btn btn-info justify-content-md-end",style:x.button2,children:"Sort (Z-A)"})]}),Object(i.jsx)("thead",{className:"table-light text-center mx-auto",children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{className:"text-center",scope:"col",children:" "}),Object(i.jsx)("th",{className:"text-center",scope:"col",children:"First"}),Object(i.jsx)("th",{className:"text-center",scope:"col",children:"Last"}),Object(i.jsx)("th",{className:"text-center",scope:"col",children:"Email"}),Object(i.jsx)("th",{className:"text-center",scope:"col",children:"Phone"}),Object(i.jsx)("th",{className:"text-center",scope:"col",children:"Address"})]})}),Object(i.jsx)("tbody",{className:"text-center",sort:this.sortNames,children:this.state.employees.map((function(e,t){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)("img",{src:e.image,className:"rounded-circle",alt:"headshot"})}),Object(i.jsx)("td",{children:e.first}),Object(i.jsx)("td",{children:e.last}),Object(i.jsx)("td",{children:e.email}),Object(i.jsx)("td",{children:e.phone}),Object(i.jsx)("td",{children:e.address})]},e.id)}))})]})}}]),s}(c.a.Component),O={tableStyle:{marginLeft:"auto",marginRight:"auto",width:"80%",paddingLeft:"30px",paddingRight:"30px"}};var y=function(e){return Object(i.jsx)(o,{children:Object(i.jsx)("div",{className:"justify-content-center mx-auto",style:O.tableStyle,children:Object(i.jsx)("table",{className:"table table-hover table-responsive align-middle mx-auto",children:Object(i.jsx)(p,{})})})})},f={titleStyle:{width:"100%",paddingLeft:"30px",paddingRight:"30px",background:"#645865"},h1:{fontSize:"60px",color:"white",padding:"50px"}};var g=function(){return Object(i.jsx)("div",{className:"text-center bg-dark",children:Object(i.jsx)("h1",{style:f.h1,children:"Employee Directory"})})};var v=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(g,{}),Object(i.jsx)(o,{}),Object(i.jsx)(y,{})]})};s(41);r.a.render(Object(i.jsx)(v,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.47e7df54.chunk.js.map