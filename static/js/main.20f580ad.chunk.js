(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={container:"App_container__30ZWv"}},14:function(t,e,n){t.exports={FilterInput:"Filter_FilterInput__1l4C0"}},2:function(t,e,n){t.exports={ContactList:"ContactList_ContactList__cidCU",ContactItem:"ContactList_ContactItem__1iK9e",ContactItemText:"ContactList_ContactItemText__1WwAq",ContactItemSpan:"ContactList_ContactItemSpan__XOebI"}},20:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(11),o=n.n(r),i=(n(20),n(15)),s=n(4),u=n(5),l=n(8),m=n(7),b=n(12),d=n.n(b),p=n(13),h=n(9),j=n.n(h),f=n(6),C=n.n(f),O=n(0),x=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.onInputChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(p.a)({},a,c))},t.onSubmit=function(e){e.preventDefault();var n={id:C.a.generate(),name:t.state.name,number:t.state.number};t.props.onSubmit(n),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("form",{className:j.a.form,onSubmit:this.onSubmit,children:[Object(O.jsxs)("label",{children:["Name",Object(O.jsx)("input",{onChange:this.onInputChange,value:this.state.name,className:j.a.inputNameLabel,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(O.jsxs)("label",{children:["Phone",Object(O.jsx)("input",{value:this.state.number,className:j.a.inputNameLabel,onChange:this.onInputChange,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(O.jsx)("button",{type:"submit",children:"Add contacts"})]})}}]),n}(a.Component),v=n(2),_=n.n(v),g=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(O.jsx)("ul",{className:_.a.ContactList,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(O.jsxs)("li",{className:_.a.ContactItem,children:[Object(O.jsxs)("p",{className:_.a.ContactItemText,children:[a,Object(O.jsx)("span",{className:_.a.ContactItemSpan,children:c})]}),Object(O.jsx)("button",{type:"button",onClick:function(){return n(e)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},e)}))})},I=n(14),S=n.n(I),y=function(t){var e=t.value,n=t.onChange;return Object(O.jsxs)("label",{children:["Filter by name",Object(O.jsx)("input",{className:S.a.FilterInput,type:"text",value:e,onChange:n})]})},N=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.formId=function(){C.a.generate()},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.formSubmitHandler=function(e){t.state.contacts.forEach((function(t){if(t.name===e.name)return e=-1,alert("contact is already in the directory")})),-1!==e&&t.setState((function(t){var n=t.contacts;return{contacts:[e].concat(Object(i.a)(n))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleTodos=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:d.a.container,children:[Object(O.jsx)(x,{onSubmit:this.formSubmitHandler}),Object(O.jsx)(y,{value:this.state.filter,onChange:this.changeFilter}),Object(O.jsx)(g,{contacts:this.getVisibleTodos(),onDeleteContact:this.deleteContact})]})}}]),n}(a.Component);o.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(N,{})}),document.getElementById("root"))},9:function(t,e,n){t.exports={inputNameLabel:"Form_inputNameLabel__2U7Yg",form:"Form_form__PEGV9"}}},[[30,1,2]]]);
//# sourceMappingURL=main.20f580ad.chunk.js.map