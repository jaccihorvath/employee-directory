(this.webpackJsonpemployeedirectory=this.webpackJsonpemployeedirectory||[]).push([[0],{42:function(t,e,n){"use strict";n.r(e);var s=n(2),c=n.n(s),r=n(12),a=n.n(r),o=n(0);var l=function(t){return Object(o.jsx)("div",{className:"container-fluid mx-auto",style:t.style,children:t.children})},i=n(13),d=n(14),m=n(17),u=n(16),j=n(15),b=n.n(j),h={getEmployees:function(){return b.a.get("https://randomuser.me/api/?results=25&nat=us,fr,gb,au")}},x={button1:{marginRight:"10px",marginBottom:"20px"},button2:{marginBottom:"20px"}},p=function(t){Object(m.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var s=arguments.length,c=new Array(s),r=0;r<s;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={employees:[{}],sorted:[{}],unsorted:[{}]},t.sortNames=function(){var e=t.state.employees.sort((function(t,e){var n=t.last,s=e.last;return n<s?1:n>s?-1:0}));t.setState({employees:e})},t.sortNamesZ=function(){var e=t.state.employees.sort((function(t,e){var n=t.last,s=e.last;return n<s?-1:n>s?1:0}));t.setState({employees:e})},t.usOnly=function(){var e=t.state.employees.filter((function(t){return"United States"===t.country}));console.log(e),t.setState({employees:e})},t.clearFilters=function(){var e=t.state.unsorted;t.setState({employees:e})},t}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=this;h.getEmployees().then((function(e){var n=e.data.results.map((function(t){return{image:t.picture.medium,first:t.name.first,last:t.name.last,email:t.email,phone:t.phone,address:t.location.street.number+" "+t.location.street.name+", "+t.location.city+", "+t.location.state+" "+t.location.postcode,age:t.dob.age,id:t.login.uuid,country:t.location.country,gender:t.gender}}));console.log(e.data.results),console.log(n),t.setState({employees:n,unsorted:n})}))}},{key:"render",value:function(){return Object(o.jsxs)(l,{children:[Object(o.jsxs)("div",{className:"d-grid gap-2 d-md-flex justify-content-md-end",children:[Object(o.jsx)("button",{onClick:this.usOnly,className:"btn btn-sm btn-info justify-content-md-end me-md-2",style:x.button1,children:"US only"}),Object(o.jsx)("button",{onClick:this.sortNamesZ,className:"btn btn-sm btn-info justify-content-md-end me-md-2",style:x.button1,children:"Sort (A-Z)"}),Object(o.jsx)("button",{onClick:this.sortNames,className:"btn btn-sm btn-info justify-content-md-end",style:x.button1,children:"Sort (Z-A)"}),Object(o.jsx)("button",{onClick:this.clearFilters,className:"btn btn-sm btn-success justify-content-md-end me-md-2",style:x.button2,children:"Reset"})]}),Object(o.jsx)("thead",{className:"table-light text-center mx-auto",children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{className:"text-center",scope:"col",children:" "}),Object(o.jsx)("th",{className:"text-center",scope:"col",children:"First"}),Object(o.jsx)("th",{className:"text-center",scope:"col",children:"Last"}),Object(o.jsx)("th",{className:"text-center",scope:"col",children:"Email"}),Object(o.jsx)("th",{className:"text-center",scope:"col",children:"Phone"}),Object(o.jsx)("th",{className:"text-center",scope:"col",children:"Address"})]})}),Object(o.jsx)("tbody",{className:"text-center",sort:this.sortNames,children:this.state.employees.map((function(t,e){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:Object(o.jsx)("img",{src:t.image,className:"rounded-circle",alt:"headshot"})}),Object(o.jsx)("td",{children:t.first}),Object(o.jsx)("td",{children:t.last}),Object(o.jsx)("td",{children:t.email}),Object(o.jsx)("td",{children:t.phone}),Object(o.jsx)("td",{children:t.address})]},t.id)}))})]})}}]),n}(c.a.Component),y={tableStyle:{marginLeft:"auto",marginRight:"auto",width:"80%",paddingLeft:"30px",paddingRight:"30px"}};var f=function(t){return Object(o.jsx)(l,{children:Object(o.jsx)("div",{className:"justify-content-center mx-auto",style:y.tableStyle,children:Object(o.jsx)("table",{className:"table table-hover table-responsive align-middle mx-auto",children:Object(o.jsx)(p,{})})})})},O={titleStyle:{width:"100%",paddingLeft:"30px",paddingRight:"30px",background:"#645865"},h1:{fontSize:"60px",color:"white",padding:"50px"}};var g=function(){return Object(o.jsx)("div",{className:"text-center bg-dark",children:Object(o.jsx)("h1",{style:O.h1,children:"Employee Directory"})})};var v=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(g,{}),Object(o.jsx)(l,{}),Object(o.jsx)(f,{})]})};n(41);a.a.render(Object(o.jsx)(v,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.d44624be.chunk.js.map