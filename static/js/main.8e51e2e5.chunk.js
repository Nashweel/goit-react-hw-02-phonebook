(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={ContactList:"ContactList_ContactList__4TvGi",ContactItem:"ContactList_ContactItem__2TMaP"}},19:function(t,e,n){},2:function(t,e,n){t.exports={ContactForm:"ContactForm_ContactForm__1zvAA",FormInput:"ContactForm_FormInput__2aqf2",FormButton:"ContactForm_FormButton__28giq"}},29:function(t,e,n){"use strict";n.r(e);var a=n(1),o=n.n(a),r=n(12),c=n.n(r),i=(n(19),n(14)),s=n(4),u=n(5),l=n(8),m=n(7),h=n(6),d=n(13),b=n.n(d),f=n(2),j=n.n(f),p=n(0),C={name:"",phone:""},v=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state=C,t.handleChangeForm=function(e){var n=e.target,a=n.name,o=n.value;t.setState(Object(h.a)({},a,o))},t.handleFromSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,o=n.phone,r=t.props.onAdd;t.validateForm()&&(r({id:b()(),name:a,phone:o}),t.resetForm())},t.validateForm=function(){var e=t.state,n=e.name,a=e.phone,o=t.props.onCheckUnique;return n&&a?o(n):(alert("Some filed is empty"),!1)},t.resetForm=function(){return t.setState(C)},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.phone;return Object(p.jsxs)("form",{onSubmit:this.handleFromSubmit,className:j.a.ContactForm,children:[Object(p.jsx)("input",{type:"text",name:"name",placeholder:"Enter name",value:e,onChange:this.handleChangeForm,className:j.a.FormInput}),Object(p.jsx)("input",{type:"tel",name:"phone",placeholder:"Enter phone number",value:n,onChange:this.handleChangeForm,className:j.a.FormInput}),Object(p.jsx)("button",{type:"submit",className:j.a.FormButton,children:"Add Contact"})]})}}]),n}(a.Component),O=n(10),F=n(11),g=n.n(F),x=function(t){var e=t.id,n=t.name,a=t.phone,o=t.onRemove;return Object(p.jsxs)("li",{className:g.a.ContactItem,children:[n,": ",a," ",Object(p.jsx)("button",{onClick:function(){return o(e)},children:"delete"})]})},_=function(t){var e=t.contacts,n=t.onRemove;return 0===e.length?null:Object(p.jsx)("ul",{className:g.a.ContactList,children:e.map((function(t){return Object(p.jsx)(x,Object(O.a)(Object(O.a)({},t),{},{onRemove:n}))}))})},y=function(t){var e=t.filter,n=t.onChange;return Object(p.jsx)("input",{type:"text",name:"name",value:e,onChange:function(t){var e=t.target;return n(e.value)},placeholder:"Enter name for search"})},k=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.handleAddContact=function(e){return t.setState((function(t){var n=t.contacts;return{contacts:[].concat(Object(i.a)(n),[e])}}))},t.handleCheckUniqueContact=function(e){var n=!!t.state.contacts.find((function(t){return t.name===e}));return n&&alert("Contact is already exist"),!n},t.handleRemoveContact=function(e){return t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.handleFilterChange=function(e){return t.setState({filter:e})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:"Phonebook"}),Object(p.jsx)(v,{onAdd:this.handleAddContact,onCheckUnique:this.handleCheckUniqueContact}),Object(p.jsx)("h2",{children:"Contacts"}),Object(p.jsx)(y,{filter:t,onChange:this.handleFilterChange}),Object(p.jsx)(_,{contacts:e,onRemove:this.handleRemoveContact})]})}}]),n}(a.Component);c.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(k,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.8e51e2e5.chunk.js.map