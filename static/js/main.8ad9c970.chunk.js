(this["webpackJsonp@navikt/ds-datepicker"]=this["webpackJsonp@navikt/ds-datepicker"]||[]).push([[0],{80:function(e,t,n){},83:function(e,t,n){},95:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),i=n(35),c=n.n(i),o=n(51),l=n.n(o),s=n(103),d=n(32),u=n(13),h=n(3);var j=function(e){return Object(h.jsx)("svg",Object(u.a)(Object(u.a)({className:"prefix__navLogo",width:90,viewBox:"0 0 269 169"},e),{},{children:Object(h.jsxs)("g",{fill:"none",fillRule:"evenodd",children:[Object(h.jsx)("path",{fill:"#C30000",d:"M125.31 168.942c-46.642 0-84.46-37.817-84.46-84.465C40.85 37.824 78.667 0 125.31 0c46.657 0 84.48 37.824 84.48 84.477 0 46.648-37.823 84.465-84.48 84.465zM0 121.359l17.265-42.73h16.589l-17.243 42.73zm213.044 0l17.044-42.73h9.044l-17.043 42.73zM246.564 121.359l17.04-42.73h4.803l-17.043 42.731z"}),Object(h.jsx)("path",{fill:"#FEFEFE",d:"M197.36 78.63h-15.016s-1.035 0-1.4.914l-8.31 25.439-8.304-25.44c-.366-.913-1.407-.913-1.407-.913h-28.872c-.625 0-1.149.522-1.149 1.143v8.639c0-6.853-7.292-9.782-11.562-9.782-9.562 0-15.963 6.298-17.956 15.873-.108-6.352-.636-8.628-2.347-10.96-.786-1.141-1.922-2.101-3.159-2.895-2.547-1.492-4.834-2.018-9.749-2.018h-5.77s-1.044 0-1.412.914l-5.25 13.013V79.773c0-.621-.52-1.143-1.145-1.143H61.198s-1.03 0-1.406.914l-5.459 13.53s-.545 1.354.701 1.354h5.133v25.784c0 .64.504 1.147 1.147 1.147h13.238c.624 0 1.144-.507 1.144-1.147V94.428h5.16c2.961 0 3.588.08 4.74.618.694.262 1.32.792 1.66 1.403.698 1.314.873 2.892.873 7.545v16.218c0 .64.514 1.147 1.15 1.147h12.687s1.434 0 2.001-1.416l2.812-6.95c3.74 5.237 9.893 8.366 17.541 8.366h1.671s1.443 0 2.014-1.416l4.897-12.128v12.397c0 .64.524 1.147 1.15 1.147h12.951s1.43 0 2.003-1.416c0 0 5.18-12.861 5.2-12.958h.008c.2-1.07-1.153-1.07-1.153-1.07h-4.623V83.847l14.545 36.096c.568 1.416 2 1.416 2 1.416h15.301s1.44 0 2.008-1.416l16.125-39.93c.558-1.383-1.057-1.383-1.057-1.383zm-64.458 27.285h-8.7c-3.463 0-6.28-2.804-6.28-6.271 0-3.461 2.817-6.283 6.28-6.283h2.433c3.454 0 6.267 2.822 6.267 6.283v6.27z"})]})}))},b=n(16),v=n(20),f=n(8),m=n.n(f),O=function e(t){return{block:t,element:function(e,n){return"".concat(t,"__").concat(e).concat(n?" ".concat(t,"__").concat(e,"--").concat(n):"")},modifier:function(e){return"".concat(t,"--").concat(e)},modifierConditional:function(e,n){return!0===n&&void 0!==e?"".concat(t,"--").concat(e):void 0},child:function(n){return e(e(t).element(n))},classNames:m.a}},p=(n(80),O("box")),g=function(e){var t,n=e.margin,a=e.padBottom,r=e.className,i=e.textAlignCenter,c=e.children,o=p.classNames(p.block,p.modifierConditional(n,void 0!==n),p.modifierConditional("bottom-".concat(a),void 0!==a),(t={},Object(v.a)(t,p.modifier("textAlignCenter"),i),Object(v.a)(t,"".concat(r),void 0!==r),t));return Object(h.jsx)("div",{className:o,children:c})},x=n(104),D=function(e){var t=e.title,n=e.children;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(g,{margin:"m",children:[Object(h.jsx)(g,{children:Object(h.jsx)(s.a,{size:"medium",level:"2",children:t})}),n&&Object(h.jsx)(g,{padBottom:"xl",children:Object(h.jsx)(x.a,{as:"div",children:n})})]})})},y=n(1),k=n(6),M=n.n(k),Y=n(100);var C=function(e){var t=Object(a.useRef)(null),n=e.active,r=e.onBlur,i=e.onKeyDown,c=e.onFocus,o=e.className,l=e.tabIndex,s=e.children,d=Object(a.useState)(!0===n),u=Object(y.a)(d,2),j=u[0],b=u[1];Object(a.useEffect)((function(){var e=function(e){var t;e&&27===e.keyCode&&(t="esc",r&&r({source:t}))};n!==j&&(!0===n?(window.addEventListener("keydown",e),b(!0)):(window.removeEventListener("keydown",e),b(!1)))}),[n,b,j,r]);return Object(h.jsx)("div",{ref:t,onBlur:function(){var e=t.current||null;null!==e&&setTimeout((function(){var t,n,a=window.document.activeElement;!(a?(t=e)===(n=a)||t.contains(n):void 0)&&r&&r({source:"blur"})}),0)},onKeyDown:function(e){i&&i(e)},onFocus:c,className:o,tabIndex:l,children:s})},S=n(52),w=n.n(S),_=n(53),N=n.n(_),F=["a[href]","select:not([disabled])","input:not([disabled])","textarea:not([disabled])","[tabindex]","button:not([disabled])"];function P(e){for(var t=[],n=e.length;n--;)t.unshift(e.item(n));return t}var z=["[tabIndex='0']"].concat(F),I=["[tabIndex]"].concat(F);function E(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(e)return P(t?e.querySelectorAll(z.join(",")):e.querySelectorAll(I.join(",")))}var V=function(e){if(e){var t=e.querySelector(".DayPicker-Caption");t&&function(e){var t=E(e);t&&t.length>0?t[0].focus():e.focus()}(t)}},W=function(e){if(e){var t=e.querySelector(".DayPicker-Caption");t&&function(e){var t=E(e);t&&t.length>0?t[t.length-1].focus():e.focus()}(t)}},B=n(54),R=n.n(B),T=n(37),A=n.n(T),L=n(55),q=n.n(L);M.a.extend(A.a),M.a.extend(q.a);var U="Invalid date",H="DD.MM.YYYY",K="YYYY-MM-DD",$=[H,"DDMMYYYY","DD/MM/YYYY","DD-MM-YYYY","DDMMYY","D.M.YY","DD.MM.YY","D.M.YYYY"],J=function(e,t){if(void 0!==e&&e.trim&&10===e.trim().length){var n=M()(e,t).utc(!0);return n.isValid()?n.toDate():void 0}},G=function(e){return e?M.a.utc(e).format(H):U},Q=function(e){var t=M.a.utc(e);return t.isValid()?t.format(K):t.toString()},X=function(e){return J(e,K)},Z=function(e){var t=J(e,K),n=t?G(t):U;return n===U?U:n},ee=["DDMMYY","D.M.YY","DD.MM.YY"],te=function(e,t){var n=function(e){return e.slice(-2)}(e);return"".concat(e.slice(0,e.length-2)).concat(t).concat(n)},ne=M()().subtract(80,"year"),ae=function(e){if(t=e,M()(t,ee,!0).isValid())return function(e){var t=["DDMMYYYY","D.M.YYYY","DD.MM.YYYY"],n=te(e,"19"),a=M()(n,t,!0).utc(!0),r=te(e,"20"),i=M()(r,t,!0).utc(!0);return a.isValid()&&i.isValid()?a.isBefore(ne)?Q(i.toDate()):Q(a.toDate()):U}(e);var t,n=M()(e,$,!0).utc(!0);return n.isValid()?Q(n.toDate()):U};M.a.extend(R.a),M.a.extend(A.a);var re={formatDay:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"nb";return M()(e).locale(t).format("DD.MM.YYYY, dddd")},formatMonthTitle:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"nb";return M()(e).locale(t).format("MMMM YYYY")},formatWeekdayLong:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"nb";return M()().locale(t).localeData().weekdays()[e]},formatWeekdayShort:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"nb";return M()().locale(t).localeData().weekdays()[e].substr(0,3)},getMonths:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"nb",t=[],n=0;n<12;)t.push(M()().locale(e).month(n).format("MMMM")),n+=1;return t},getFirstDayOfWeek:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"nb";return M()().locale(e).localeData().firstDayOfWeek()},formatDate:function(e){return G(e)||""},parseDate:function(e){return M.a.utc(e).toDate()}},ie=re,ce=n(4),oe=n(5),le=n(11),se=n(10),de=function(e){var t=function(e){switch(e){case"venstre":return"rotate(180deg)";case"opp":return"rotate(270deg)";case"ned":return"rotate(90deg)";default:return}}(e.direction),n=t?{transform:t}:void 0;return Object(h.jsxs)("svg",{style:n,width:16,height:16,viewBox:"0 0 16 24",role:"presentation","aria-hidden":"true",children:[Object(h.jsx)("title",{children:"Chevron"}),Object(h.jsx)("path",{d:"M1.5 24a1 1 0 0 1-.646-1.764L12.953 12 .853 1.764A1 1 0 1 1 2.146.236l13 11a1.005 1.005 0 0 1 0 1.528l-13 11a1.003 1.003 0 0 1-.645.236",fill:"#3e3832",fillRule:"evenodd"})]})},ue="Kalender",he="Neste m\xe5ned",je="Forrige m\xe5ned",be=n(27),ve=n(109),fe=function(e){Object(le.a)(n,e);var t=Object(se.a)(n);function n(e){var a;return Object(ce.a)(this,n),(a=t.call(this,e)).yearSelect=null,a.monthSelect=null,a.onChange=a.onChange.bind(Object(be.a)(a)),a.onYearChange=a.onYearChange.bind(Object(be.a)(a)),a.getYear=a.getYear.bind(Object(be.a)(a)),a.getMonth=a.getMonth.bind(Object(be.a)(a)),a}return Object(oe.a)(n,[{key:"getYear",value:function(){return this.yearSelect?parseInt(this.yearSelect.value,10):(this.props.minDate||this.props.maxDate||new Date).getFullYear()}},{key:"getMonth",value:function(){return this.monthSelect?parseInt(this.monthSelect.value,10):(this.props.minDate||this.props.maxDate||new Date).getMonth()}},{key:"onChange",value:function(e){e.stopPropagation(),e.preventDefault(),this.props.onChange(new Date(this.getYear(),this.getMonth()),"month")}},{key:"onYearChange",value:function(e){var t,n;e.stopPropagation(),e.preventDefault();var a=parseInt((null===(t=this.yearSelect)||void 0===t?void 0:t.value)||"",10),r=parseInt((null===(n=this.monthSelect)||void 0===n?void 0:n.value)||"",10),i=new Date(a,r);this.props.minDate&&M()(i).isBefore(this.props.minDate)?this.props.onChange(this.props.minDate,"year"):this.props.maxDate&&M()(i).isAfter(this.props.maxDate)?this.props.onChange(this.props.maxDate,"year"):this.props.onChange(i,"year")}},{key:"render",value:function(){for(var e=this,t=this.props,n=t.defaultMonth,a=t.minDate,r=void 0===a?new Date(1900,0,1):a,i=t.maxDate,c=void 0===i?M()().add(4,"year").toDate():i,o=function(e,t,n,a){for(var r=[],i=n&&t.getFullYear()===n.getFullYear()?n.getMonth():0,c=a&&t.getFullYear()===a.getFullYear()?a.getMonth():11,o=i;o<=c;)r.push({value:o,label:e[o]}),o++;return r}(t.localeUtils.getMonths(this.props.locale),n,r,c),l=[],s=Math.min(n.getFullYear(),r.getFullYear()),d=Math.max(n.getFullYear(),c.getFullYear()),u=s;u<=d;u+=1)l.push(u);var j=Object(Y.a)(),b=Object(Y.a)(),v=l.length>1;return Object(h.jsxs)("div",{className:"nav-datovelger__yearSelector",children:[v&&Object(h.jsxs)("div",{className:"selectContainer",children:[Object(h.jsx)("label",{className:"sr-only",htmlFor:b,children:"Velg \xe5r"}),Object(h.jsx)(ve.a,{label:"Velg \xe5r",hideLabel:!0,id:b,ref:function(t){return e.yearSelect=t},name:"year",onChange:this.onYearChange,value:n.getFullYear(),children:l.map((function(e){return Object(h.jsx)("option",{value:e,children:e},e)}))})]}),Object(h.jsxs)("div",{className:"selectContainer".concat(!1===v?" selectContainer--monthOnly":""),children:[Object(h.jsx)("label",{className:"sr-only",htmlFor:j,children:"Velg m\xe5ned"}),Object(h.jsx)(ve.a,{label:"Velg m\xe5ned",hideLabel:!0,id:j,ref:function(t){return e.monthSelect=t},name:"month",onChange:this.onChange,value:n.getMonth(),children:o.map((function(e){return Object(h.jsx)("option",{value:e.value,children:e.label},e.value)}))})]})]})}}]),n}(r.a.Component),me=n(105),Oe=function(e){Object(le.a)(n,e);var t=Object(se.a)(n);function n(){return Object(ce.a)(this,n),t.apply(this,arguments)}return Object(oe.a)(n,[{key:"render",value:function(){var e=this.props,t=e.month,n=e.direction,a=e.disabled,r=e.onClick,i="previousMonth"===n?je:he;return Object(h.jsx)(me.a,{type:"button",size:"small",variant:"tertiary",id:"kalender-navbarknapp-".concat(n),className:m()("nav-datovelger__navbar__knapp","nav-datovelger__navbar__knapp--".concat(n),{"nav-datovelger__navbar__knapp--disabled":a}),onClick:function(e){return a?null:r(e,t,n)},"aria-label":i,"aria-disabled":a,children:Object(h.jsx)(de,{direction:"previousMonth"===n?"venstre":"h\xf8yre"})})}}]),n}(r.a.Component),pe=function(e){return e.localeUtils.formatMonthTitle(e.defaultMonth)},ge=function(e){Object(le.a)(n,e);var t=Object(se.a)(n);function n(){return Object(ce.a)(this,n),t.apply(this,arguments)}return Object(oe.a)(n,[{key:"shouldComponentUpdate",value:function(e){return pe(e)!==pe(this.props)}},{key:"render",value:function(){var e=this.props,t=e.defaultMonth,n=e.onChangeMonth,a=e.minDate,r=e.maxDate,i=e.showYearSelector,c=e.localeUtils,o=e.allowNavigationToDisabledMonths,l=e.locale,s=M()(t).subtract(1,"month"),d=M()(t).add(1,"month"),u=!(o||!a)&&M()(a).isAfter(s.endOf("month")),j=!(o||!r)&&M()(r).isBefore(d.startOf("month")),b=function(e,t,a){e.preventDefault(),e.stopPropagation(),n(t,a)};return Object(h.jsxs)("div",{className:"DayPicker-Caption",children:[Object(h.jsx)("span",{"aria-live":"assertive",className:i?"sr-only":"",children:pe(this.props)}),i&&Object(h.jsx)("div",{className:"nav-datovelger__navbar__yearSelector",children:Object(h.jsx)(fe,{defaultMonth:t,maxDate:r,minDate:a,localeUtils:c,onChange:function(e,t){return n(e,t)},locale:l})}),Object(h.jsxs)("nav",{className:"nav-datovelger__navbar ".concat(i?"nav-datovelger__navbar--withYearSelector":""),children:[Object(h.jsx)(Oe,{month:s.toDate(),direction:"previousMonth",disabled:u,onClick:function(e,t){return b(e,t,"previousMonth")}}),Object(h.jsx)(Oe,{month:d.toDate(),direction:"nextMonth",disabled:j,onClick:function(e,t){return b(e,t,"nextMonth")}})]})]})}}]),n}(r.a.Component),xe=ge;n(81),n(82);var De=r.a.forwardRef((function(e,t){var n=Object(a.useState)(e.month),r=Object(y.a)(n,2),i=r[0],c=r[1],o=e.dateString,l=e.minDateString,s=e.maxDateString,d=e.localeUtils,j=e.showWeekNumbers,b=e.unavailableDates,v=e.showYearSelector,f=e.allowInvalidDateSelection,m=e.locale,O=e.onClose,p=e.onSelect,g=e.setFocusOnDateWhenOpened,x=e.dayPickerProps,D=e.allowNavigationToDisabledMonths,k=function(e,n){if(c(e),t){var a=t.current;n&&setTimeout((function(){!function(e,t){if(e){var n=function(e,t){var n;if(e)switch(t){case"previousMonth":case"nextMonth":n=e.querySelector(".nav-datovelger__navbar__knapp--".concat(t));break;case"year":n=e.querySelector("select[name=year]");break;case"month":n=e.querySelector("select[name=month]")}if(n&&null!==n)return n}(e,t);n&&n.focus()}}(a,n)}))}(null===x||void 0===x?void 0:x.onMonthChange)&&(null===x||void 0===x||x.onMonthChange(e))},M={localeUtils:ie,navbarElement:function(){return Object(h.jsx)("span",{})},captionElement:function(){var e=X(l),t=X(s);return Object(h.jsx)(xe,{defaultMonth:i,onChangeMonth:k,minDate:e,maxDate:t,localeUtils:Object(u.a)(Object(u.a)({},ie),d),showYearSelector:v,allowNavigationToDisabledMonths:D,locale:m})},firstDayOfWeek:1,showWeekNumbers:j},Y=Object(a.useRef)();return Object(a.useEffect)((function(){g&&Y.current&&function(e){if(e){var t=e.querySelector(".DayPicker-Day--selected")||e.querySelector(".DayPicker-Day--today")||e.querySelector('.DayPicker-Day[aria-disabled="false"]');t&&t.focus()}}(Y.current)}),[Y,g]),Object(h.jsx)("div",{ref:t,role:"dialog","aria-label":"Kalender",className:"nav-datovelger__kalender",children:Object(h.jsx)(C,{onKeyDown:function(e){"Tab"===e.key&&e.target&&((e.target.className||"").indexOf("DayPicker-Day")>=0&&(!1===e.shiftKey?V(Y.current):W(Y.current),e.stopPropagation(),e.preventDefault()))},children:Object(h.jsx)("div",{ref:Y,children:Object(h.jsx)(w.a,{active:!0,focusTrapOptions:{clickOutsideDeactivates:!0,onDeactivate:O},children:Object(h.jsx)(N.a,Object(u.a)(Object(u.a)(Object(u.a)({locale:m,fromMonth:l?X(l):void 0,toMonth:s?X(s):void 0,canChangeMonth:!1,selectedDays:o?X(o):void 0,onDayClick:function(e,t){!f&&t.disabled||p(Q(e))},onMonthChange:k,disabledDays:b},x),M),{},{month:i}))})})})})})),ye=n(106),ke=function(e){if(e&&"string"===typeof e){return null!==e.match(/^\d{2}.\d{2}.\d{4}$/)}return!1},Me=r.a.forwardRef((function(e,t){var n=e.id,r=e.dateValue,i=void 0===r?"":r,c=e.inputProps,o=e.onDateChange,l=Object(a.useState)(function(e){var t=Z(e);return t===U?e:t}(i)),s=Object(y.a)(l,2),d=s[0],j=s[1],b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=ae(e.trim());t!==U?(ke(e)||""===i||j(Z(i)),o(t)):o(e)};return Object(a.useEffect)((function(){var e=Z(i);j(e!==U?void 0===i||""===i?"":e:i)}),[i]),Object(h.jsx)(ye.a,Object(u.a)(Object(u.a)({label:"abc",hideLabel:!0,ref:t,id:n},c),{},{className:"nav-datovelger__input".concat(c&&!0===c["aria-invalid"]?" skjemaelement__input--harFeil":""),autoComplete:"off",autoCorrect:"off",type:"text",inputMode:"text",value:d,maxLength:10,onChange:function(e){j(e.target.value)},onBlur:function(e){b(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),b(e.target.value))}}))})),Ye=Me,Ce=function(){return Object(h.jsxs)("svg",{height:16,width:16,viewBox:"0 0 18 18",role:"presentation",focusable:!1,style:{pointerEvents:"none"},children:[Object(h.jsx)("title",{children:"Kalenderikon"}),Object(h.jsxs)("g",{stroke:"#0067C5",fill:"none",fillRule:"evenodd",children:[Object(h.jsx)("path",{d:"M4 2.667H1.333v14h15.334v-14H14"}),Object(h.jsx)("path",{d:"M4 1.333h2V4H4zm8 0h2V4h-2zM6 2h6M1.333 6h15.334"})]})]})},Se=function(e){Object(le.a)(n,e);var t=Object(se.a)(n);function n(){var e;Object(ce.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).button=null,e}return Object(oe.a)(n,[{key:"focus",value:function(){this.button&&this.button.focus()}},{key:"render",value:function(){var e=this,t=this.props,n=t.onClick,a=t.isOpen,r=t.disabled;return Object(h.jsxs)("button",{ref:function(t){return e.button=t},type:"button",className:"nav-datovelger__kalenderknapp",onClick:function(e){e.stopPropagation(),e.preventDefault(),n()},disabled:r,"aria-expanded":a,children:[Object(h.jsx)("span",{className:"sr-only",children:ue}),Object(h.jsx)("span",{"aria-hidden":!0,className:"nav-datovelger__kalenderknapp__icon",children:Object(h.jsx)(Ce,{})})]})}}]),n}(r.a.Component),we=Se,_e=function(e){Object(le.a)(n,e);var t=Object(se.a)(n);function n(){return Object(ce.a)(this,n),t.apply(this,arguments)}return Object(oe.a)(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.position,a=void 0===n?"responsive":n;return Object(h.jsx)("div",{className:m()("nav-datovelger__kalenderPortal","nav-datovelger__kalenderPortal--".concat(a)),children:Object(h.jsx)("div",{className:"nav-datovelger__kalenderPortal__content",children:t})})}}]),n}(r.a.Component),Ne=_e;function Fe(e){var t=Object(a.useRef)();return Object(a.useEffect)((function(){t.current=e})),t.current}var Pe=function(e){if(e&&"string"===typeof e){return null!==e.match(/^\d{4}-\d{2}-\d{2}$/)}return!1},ze=n(15),Ie=function(e){var t=[];e.invalidDateRanges&&(t=e.invalidDateRanges.map((function(e){var t=X(e.from),n=X(e.to);if(t&&n)return{from:t,to:n}})).filter((function(e){return void 0!==e})));var n=e.minDate,a=e.maxDate,r={daysOfWeek:e.weekendsNotSelectable?[0,6]:[]};return[].concat(Object(ze.a)(t),Object(ze.a)(a?[{after:M()(a,K).toDate()}]:[]),Object(ze.a)(n?[{before:M()(n,K).toDate()}]:[]),[r])},Ee=function(e,t){return M()(e).isSame(t,"day")},Ve=function(e,t,n){var a=M()(e).utc(!0).format(K);if(e&&M()(a).isValid())return M()(a).toDate();if(n&&n.initialMonth)return n.initialMonth;var r=M()().toDate();return t&&t.minDate&&M()(t.minDate).isAfter(r)?M()(t.minDate,K).toDate():r},We=(n(83),function(e){var t=e.inputId,n=void 0===t?Object(Y.a)():t,r=e.limitations,i=e.value,c=e.inputProps,o=e.calendarSettings,l=e.disabled,s=e.allowInvalidDateSelection,d=e.locale,j=void 0===d?"nb":d,b=e.showYearSelector,v=e.onChange,f=e.dayPickerProps,m=e.setFocusOnDateWhenOpened,O=e.allowNavigationToDisabledMonths,p=void 0!==O&&O,g=e.calendarDateStringFilter,x=Object(a.useState)(Ve(i,r,f)),D=Object(y.a)(x,2),k=D[0],M=D[1],S=Object(a.useState)(!1),w=Object(y.a)(S,2),_=w[0],N=w[1],F=Fe(i),P=Fe(null===f||void 0===f?void 0:f.initialMonth),z=Object(a.useRef)();Object(a.useEffect)((function(){var e=null===f||void 0===f?void 0:f.initialMonth,t=g?g(i):i;if(e!==P&&t===F){var n=Ve(t,r,f);Ee(n,k)||M(n)}if(t!==F){var a=Ve(t,r,f);Ee(a,k)||M(a)}}),[i,r,F,k,f,P,g]);var I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";N(!1),v(e,Pe(e))};return Object(h.jsx)(C,{children:Object(h.jsxs)("div",{className:"nav-datovelger",children:[Object(h.jsxs)("div",{className:"nav-datovelger__inputContainer",children:[Object(h.jsx)(Ye,{id:n,ref:null===c||void 0===c?void 0:c.inputRef,inputProps:Object(u.a)(Object(u.a)({},c),{},{disabled:l}),dateValue:i,onDateChange:I}),Object(h.jsx)(we,{disabled:l,onClick:function(){return N(!_)},isOpen:_})]}),_&&Object(h.jsx)(Ne,{position:null===o||void 0===o?void 0:o.position,children:Object(h.jsx)(De,{ref:z,locale:j,showWeekNumbers:null===o||void 0===o?void 0:o.showWeekNumbers,dateString:g?g(i):i,month:k,minDateString:r&&r.minDate,maxDateString:r&&r.maxDate,unavailableDates:r?Ie(r):void 0,onSelect:I,onClose:function(){return N(!1)},allowInvalidDateSelection:s,dayPickerProps:f,showYearSelector:b,setFocusOnDateWhenOpened:m,allowNavigationToDisabledMonths:p})})]})})}),Be=new(n(59).a)("no"),Re=function(e,t){var n=[],a=e.getFullYear(),r=t.getFullYear();if(a===r)n=Be.getHolidays(a);else for(var i=a;i<=r;)n=[].concat(Object(ze.a)(n),Object(ze.a)(Be.getHolidays(i))),i++;var c=M()(e).subtract(24,"hour"),o=M()(t).add(24,"hour");return n.filter((function(e){return"public"===e.type})).map((function(e){return Object(u.a)(Object(u.a)({},e),{},{date:e.date})})).filter((function(e){return M()(e.date).isAfter(c,"day")&&M()(e.date).isBefore(o,"day")}))}(M()().subtract(4,"year").toDate(),M()().add(4,"year").toDate()),Te=n(108),Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(""===e)return"";var t=X(e);return t?M()(t).format("DD.MM.YYYY"):"invalid date"},Le=function(e){return Re.some((function(t){return M()(t.date).isSame(e,"day")}))},qe=function(){var e=Object(a.useState)(""),t=Object(y.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(!1),c=Object(y.a)(i,2),o=c[0],l=c[1],s=Object(a.useState)(!1),d=Object(y.a)(s,2),u=d[0],j=d[1],b=Object(a.useState)(!0),v=Object(y.a)(b,2),f=v[0],m=v[1],O=Object(a.useState)(),p=Object(y.a)(O,2),x=p[0],D=p[1],k=Object(a.useState)("nb"),Y=Object(y.a)(k,2),C=Y[0],S=Y[1],w=Object(a.useState)("2000-04-03"),_=Object(y.a)(w,2),N=_[0],F=_[1],P=Object(a.useState)("2025-12-12"),z=Object(y.a)(P,2),I=z[0],E=z[1],V=Object(a.useState)(!1),W=Object(y.a)(V,2),B=W[0],R=W[1];return Object(h.jsx)("div",{children:Object(h.jsxs)(g,{margin:"xl",children:[Object(h.jsx)("label",{style:{display:"block",marginBottom:".5rem"},htmlFor:"datovelger-input",children:"Choose date (format dd.mm.yyyy)"}),Object(h.jsx)(We,{inputId:"datovelger-input",value:n,onChange:r,inputProps:{name:"dateInput","aria-invalid":""!==n&&!1===Pe(n)},setFocusOnDateWhenOpened:!0,locale:C,calendarSettings:{showWeekNumbers:u},showYearSelector:o,calendarDateStringFilter:function(e){if(function(){return/\d{1,2}.\d{1,2}.(\d{2}|\d{4})$/.test(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"")}(e))return e},limitations:{weekendsNotSelectable:!1,invalidDateRanges:[{from:"2021-04-10",to:"2021-04-11"}],minDate:N.length>0?N:void 0,maxDate:I.length>0?I:void 0},dayPickerProps:{initialMonth:x,modifiers:f?{isPublicHoliday:Le}:void 0,onMonthChange:function(e){console.log(e)}},allowNavigationToDisabledMonths:B}),Object(h.jsxs)(g,{margin:"l",children:["Chosen date: ",Ae(n)]}),Object(h.jsxs)(g,{margin:"m",children:[Object(h.jsx)(me.a,{variant:"secondary",size:"small",onClick:function(){return r(M()(new Date).format("YYYY-MM-DD"))},children:"Choose today"}),"-",Object(h.jsx)(me.a,{variant:"secondary",size:"small",onClick:function(){return r("")},children:"Unselect date"}),"-",Object(h.jsx)(me.a,{variant:"secondary",size:"small",onClick:function(){return r("abc")},children:"Set invalid formatted date"})]}),Object(h.jsxs)(g,{margin:"xl",children:["Initial month: ",x?Ae(M()(x).format("YYYY-MM-DD")):void 0]}),Object(h.jsxs)(g,{margin:"m",children:[Object(h.jsx)(me.a,{variant:"secondary",size:"small",onClick:function(){return D(new Date)},children:"Choose this month"}),"-",Object(h.jsx)(me.a,{variant:"secondary",size:"small",onClick:function(){return D(void 0)},children:"Undefined"}),"-",Object(h.jsx)(me.a,{variant:"secondary",size:"small",onClick:function(){return D(new Date(2020,0,1))},children:"2020.01.01"})]}),Object(h.jsxs)(g,{margin:"xl",children:["Locale: ",C]}),Object(h.jsxs)(g,{margin:"m",children:[Object(h.jsx)(me.a,{variant:"secondary",size:"small",onClick:function(){return S("nb")},children:"nb"}),"-",Object(h.jsx)(me.a,{variant:"secondary",size:"small",onClick:function(){return S("nn")},children:"nn"}),"-",Object(h.jsx)(me.a,{variant:"secondary",size:"small",onClick:function(){return S("en")},children:"en"})]}),Object(h.jsx)(g,{margin:"xl",children:"Restrictions"}),Object(h.jsxs)(g,{margin:"m",children:[Object(h.jsxs)("div",{style:{display:"inline-block"},children:[Object(h.jsx)("label",{htmlFor:"date-range-from",children:"First pickable date"}),Object(h.jsx)(We,{inputId:"date-range-from",onChange:function(e){return F(e)},value:N})]})," - ",Object(h.jsxs)("div",{style:{display:"inline-block"},children:[Object(h.jsx)("label",{htmlFor:"date-range-to",children:"Last pickable date"}),Object(h.jsx)(We,{inputId:"date-range-to",onChange:function(e){return E(e)},value:I})]})]}),Object(h.jsx)(g,{margin:"xl",children:Object(h.jsxs)("fieldset",{children:[Object(h.jsx)("legend",{children:"Presentation properties"}),Object(h.jsxs)("div",{style:{padding:"1rem"},children:[Object(h.jsx)(g,{margin:"none",children:Object(h.jsx)(Te.a,{checked:o,onChange:function(){return l(!o)},children:Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("code",{children:"showYearSelector"}),":"]})," ","Show dropdowns for year and month"]})})}),Object(h.jsx)(g,{margin:"l",children:Object(h.jsx)(Te.a,{checked:u,onChange:function(){return j(!u)},children:Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:Object(h.jsx)("code",{children:"calendarSettings.showWeekNumbers"})}),"Toggle visibility on week numbers in calendar view"]})})}),Object(h.jsx)(g,{margin:"l",children:Object(h.jsx)(Te.a,{checked:f,onChange:function(){return m(!f)},children:Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:Object(h.jsx)("code",{children:"Custom - show holiday"})}),"Possibility to highlight special days"]})})}),Object(h.jsx)(g,{margin:"l",children:Object(h.jsx)(Te.a,{checked:B,onChange:function(e){return R(e.target.checked)},children:Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:Object(h.jsx)("code",{children:"allowNavigationToDisabledMonths"})}),"Allow navigating outside restricted range"]})})})]})]})})]})})},Ue=n(107),He=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(D,{title:"nav-datovelger",children:[Object(h.jsx)("h2",{children:"Simple datepicker based on react-day-picker"}),Object(h.jsx)("p",{children:Object(h.jsx)(Ue.a,{href:"https://github.com/navikt/datovelger",children:"GitHub repository"})})]}),Object(h.jsx)(x.a,{style:{marginBottom:".5rem"},children:"Example:"}),Object(h.jsx)(g,{children:Object(h.jsx)(qe,{})})]})},Ke=[{path:"frontpage",title:"Frontpage",renderContent:function(){return Object(h.jsx)(He,{})}}],$e=function(e,t){return t.indexOf(e)>=0},Je=O("lenke"),Ge=function(){var e=Object(b.d)().location.pathname;return Object(h.jsx)("div",{className:"leftMenu",children:Ke.map((function(t){return Object(h.jsx)(d.b,{to:t.path,className:Je.classNames(Je.block,Je.modifierConditional("active",$e(t.path,e))),children:t.title},t.path)}))})},Qe=function(){var e=function(e){return Ke.find((function(t){return $e(t.path,e)}))}(Object(b.d)().location.pathname);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("aside",{className:"asideContent",children:Object(h.jsx)(Ge,{})}),Object(h.jsx)("article",{style:{maxWidth:"1000px"},className:"mainContent",children:e?e.renderContent():Object(h.jsx)(He,{})})]})},Xe=(n(95),function(){return Object(h.jsxs)("main",{className:"devPage",children:[Object(h.jsxs)("header",{className:"header",children:[Object(h.jsx)("span",{className:"navLogo",children:Object(h.jsx)(j,{})}),Object(h.jsx)("span",{className:"header__title",children:Object(h.jsx)(s.a,{level:"1",size:"large",children:"nav-datovelger"})})]}),Object(h.jsx)("div",{className:"contentWrapper",children:Object(h.jsx)(d.a,{children:Object(h.jsx)(Qe,{})})})]})}),Ze=(n(96),function(){return Object(h.jsx)(Xe,{})});l.a.setAppElement("#root"),c.a.render(Object(h.jsx)(Ze,{}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.8ad9c970.chunk.js.map