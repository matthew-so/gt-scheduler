(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,n,t){e.exports=t(54)},25:function(e,n,t){},46:function(e,n,t){},48:function(e,n,t){},50:function(e,n,t){},52:function(e,n,t){},54:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),s=t(18),c=t.n(s),i=(t(25),t(8)),o=t(1),u=t(9),d=t(3),l=t(4),m=t(6),p=t(5),v=t(7),f=t(19),C=t.n(f),h=(t(46),function(e){var n=/(\d{1,2}):(\d{2}) (a|p)m/.exec(e),t=Object(i.a)(n,4),a=t[1],r=t[2];return 60*(("p"===t[3]?12:0)+Number.parseInt(a%12))+Number.parseInt(r)}),y=function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=e/60|0,a=e%60;return"".concat(t>12?t-12:t,":").concat(a<10?"0"+a:a).concat(n?" ".concat(t<12?"a":"p","m"):"")},b=function(e){return e?"".concat(y(e.start,!1)," - ").concat(y(e.end)):"TBA"},E=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter(function(e){return e}).join(" ")},g=(t(48),function(e){function n(e){var t;return Object(d.a)(this,n),(t=Object(m.a)(this,Object(p.a)(n).call(this,e))).state={expanded:!1},t}return Object(v.a)(n,e),Object(l.a)(n,[{key:"handleToggleExpanded",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!this.state.expanded;this.setState({expanded:e})}},{key:"render",value:function(){var e=this,n=this.props,t=n.course,a=n.expandable,s=n.onClick,c=n.onRemove,i=n.onTogglePinned,o=n.onToggleExcluded,u=n.onSetOverlayCrns,d=n.pinnedCrns,l=n.excludedCrns,m=this.state.expanded;return r.a.createElement("div",{className:"Course",style:{backgroundColor:t.color},key:t.id,onClick:s},r.a.createElement("div",{className:"course-header",onClick:a?function(){return e.handleToggleExpanded()}:void 0},r.a.createElement("div",{className:"row"},r.a.createElement("span",{className:"course_id"},t.id),r.a.createElement("span",{className:"section_ids"},Object.values(t.sections).filter(function(e){return d.includes(e.crn)}).map(function(e){return e.id}).join(", "))),r.a.createElement("div",{className:"row"},r.a.createElement("span",{className:"course_title"},t.title),a&&r.a.createElement("span",{className:"toggle"},m?"-":"+"))),m&&r.a.createElement("div",{className:"sections"},Object.values(t.sections).map(function(e){var n=l.includes(e.crn),t=d.includes(e.crn);return r.a.createElement("div",{className:E("section",n&&"excluded",t&&"pinned"),key:e.id,onClick:function(){return i(e)},onMouseEnter:function(){return u([e.crn])},onMouseLeave:function(){return u([])}},r.a.createElement("div",{className:"section-header"},r.a.createElement("span",{className:"section_id"},e.id),r.a.createElement("span",{className:"instructors"},e.instructors.join(", "))),!n&&r.a.createElement("div",{className:"meetings"},e.meetings.map(function(e,n){return r.a.createElement("div",{className:"meeting",key:n},r.a.createElement("span",{className:"days"},e.days.join("")),r.a.createElement("span",{className:"period"},b(e.period)))})),r.a.createElement("div",{className:"actions"},r.a.createElement("div",{className:"exclude",onClick:function(n){n.stopPropagation(),o(e)}},n?"Include":"Exclude")))})),m&&r.a.createElement("div",{className:"actions section-actions"},r.a.createElement("div",{className:"dim",onClick:function(){return c(t)}},"Remove")))}}]),n}(a.Component)),O=(t(50),t(52),function(e){function n(){return Object(d.a)(this,n),Object(m.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(v.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props,n=e.section,t=e.overlay,a=e.preview;return r.a.createElement("div",{className:E("Section",t&&"overlay")},n.meetings.map(function(e,n){return e.period&&e.days.map(function(t){return r.a.createElement("div",{className:"meeting ".concat(t),key:[n,t].join("-"),style:{top:(e.period.start-480)/720*100+"%",height:(e.period.end-e.period.start)/720*100+"%",backgroundColor:e.course.color}},!a&&r.a.createElement("div",{className:"meeting-wrapper"},r.a.createElement("span",{className:"course_id"},e.course.id," ",e.section.id),r.a.createElement("span",{className:"period"},b(e.period)),r.a.createElement("span",{className:"where"},e.where),r.a.createElement("span",{className:"instructors"},e.instructors.join(", "))))})}))}}]),n}(a.Component)),N=function(e){function n(){return Object(d.a)(this,n),Object(m.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(v.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props,n=e.className,t=e.pinnedCrns,a=e.overlayCrns,s=e.crns,c=e.preview;return r.a.createElement("div",{className:E("Calendar",c&&"preview",n)},!c&&r.a.createElement("div",{className:"times"},new Array(12).fill(0).map(function(e,n){var t=480+60*n;return r.a.createElement("div",{className:"time",key:t},r.a.createElement("span",{className:"label"},y(t)))})),!c&&r.a.createElement("div",{className:"days"},["M","T","W","R","F"].map(function(e){return r.a.createElement("div",{className:"day",key:e},r.a.createElement("span",{className:"label"},e))})),r.a.createElement("div",{className:"meetings"},t.map(function(e){return r.a.createElement(O,{key:e,section:s[e],preview:c})}),a.filter(function(e){return!t.includes(e)}).map(function(e){return r.a.createElement(O,{key:e,section:s[e],overlay:!0,preview:c})})))}}]),n}(a.Component),j=t(11),k=t.n(j),x=function(e){function n(e){var t;return Object(d.a)(this,n),(t=Object(m.a)(this,Object(p.a)(n).call(this,e))).courses={},t.crns={},t.state=Object(u.a)({},t.loadData(),{combinations:[],overlayCrns:[],keyword:"",loaded:!1}),t}return Object(v.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;C.a.get("./courses.json").then(function(n){var t={},a=n.data;Object.keys(a).forEach(function(e){var n=a[e];n.id=e,n.color=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:256,t="#",a=0;a<3;a++){var r=(Math.random()*(n-e)+e|0).toString(16);t+=(1===r.length?"0":"")+r}return t}(32,160),n.sectionGroups={},Object.keys(n.sections).forEach(function(e){var a=n.sections[e];a.id=e,a.course=n;var r=[];a.meetings.forEach(function(e){return r.push.apply(r,Object(o.a)(e.instructors))}),a.instructors=Object(o.a)(new Set(r)),t[a.crn]=a,a.meetings.forEach(function(e){e.course=n,e.section=a;var t=e.days,r=e.period;if(e.days="&nbsp;"===t?[]:Object(o.a)(t),"TBA"===r)e.period=void 0;else{var s=r.split(" - "),c=Object(i.a)(s,2),u=c[0],d=c[1];e.period={start:h(u),end:h(d)}}});var s=a.meetings.map(function(e){return{days:e.days,period:e.period}}),c=JSON.stringify(s),u=n.sectionGroups[c];u?u.sections.push(a):n.sectionGroups[c]={hash:c,meetings:s,sections:[a]}})}),e.courses=a,e.crns=t,e.updateCombinations({loaded:!0})})}},{key:"saveData",value:function(e){var n=e.desiredCourses,t=void 0===n?[]:n,a=e.pinnedCrns,r=void 0===a?[]:a,s=e.excludedCrns,c=void 0===s?[]:s;k.a.set("data",JSON.stringify({desiredCourses:t,pinnedCrns:r,excludedCrns:c}))}},{key:"loadData",value:function(){var e=null;try{e=JSON.parse(k.a.get("data"))}catch(i){e={}}var n=e,t=n.desiredCourses,a=void 0===t?[]:t,r=n.pinnedCrns,s=void 0===r?[]:r,c=n.excludedCrns;return{desiredCourses:a,pinnedCrns:s,excludedCrns:void 0===c?[]:c}}},{key:"updateCombinations",value:function(e){var n=this;this.setState(function(t){var a="function"===typeof e?e(t):e,r=Object(u.a)({},t,a),s=r.desiredCourses,c=r.pinnedCrns,i=r.excludedCrns;n.saveData(r);var d=[];return function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(t!==s.length){var r=n.courses[s[t]];Object.values(r.sections).some(function(e){return c.includes(e.crn)})?e(t+1,a):Object.values(r.sectionGroups).forEach(function(r){var s=r.sections.find(function(e){return!i.includes(e.crn)});s&&(Object(o.a)(c).concat(Object(o.a)(a)).map(function(e){return n.crns[e]}).some(function(e){return n=s,e.meetings.some(function(e){return n.meetings.some(function(n){return e.period&&n.period&&["M","T","W","R","F"].some(function(t){return e.days.includes(t)&&n.days.includes(t)})&&e.period.start<n.period.end&&n.period.start<e.period.end})});var n})||e(t+1,Object(o.a)(a).concat([s.crn])))})}else a.length&&d.push(a)}(),Object(u.a)({},a,{combinations:d})})}},{key:"handleRemoveCourse",value:function(e){this.updateCombinations(function(n){return{pinnedCrns:n.pinnedCrns.filter(function(n){return!Object.values(e.sections).some(function(e){return e.crn===n})}),desiredCourses:n.desiredCourses.filter(function(n){return n!==e.id})}})}},{key:"handleAddCourse",value:function(e){this.updateCombinations(function(n){var t=n.desiredCourses;return t.includes(e.id)?{keyword:""}:{keyword:"",desiredCourses:Object(o.a)(t).concat([e.id])}})}},{key:"handleTogglePinned",value:function(e){this.updateCombinations(function(n){var t=n.pinnedCrns,a=n.excludedCrns;return t.includes(e.crn)?{pinnedCrns:t.filter(function(n){return n!==e.crn})}:{pinnedCrns:Object(o.a)(t).concat([e.crn]),excludedCrns:a.filter(function(n){return n!==e.crn})}})}},{key:"handleToggleExcluded",value:function(e){this.updateCombinations(function(n){var t=n.pinnedCrns,a=n.excludedCrns;return a.includes(e.crn)?{excludedCrns:a.filter(function(n){return n!==e.crn})}:{excludedCrns:Object(o.a)(a).concat([e.crn]),pinnedCrns:t.filter(function(n){return n!==e.crn})}})}},{key:"handleChangeKeyword",value:function(e){var n=e.target.value;this.setState({keyword:n})}},{key:"handleSetPinnedCrns",value:function(e){this.updateCombinations({pinnedCrns:e})}},{key:"handleSetOverlayCrns",value:function(e){this.setState({overlayCrns:e})}},{key:"render",value:function(){var e=this;console.log("render");var n=this.state,t=n.pinnedCrns,a=n.excludedCrns,s=n.desiredCourses,c=n.combinations,i=n.overlayCrns,u=n.keyword;return n.loaded&&r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement(N,{pinnedCrns:t,overlayCrns:i,crns:this.crns})),r.a.createElement("div",{className:"sidebar"},r.a.createElement("div",{className:"title"},"Spring 2019"),s.map(function(n){var s=e.courses[n];return r.a.createElement(g,{course:s,expandable:!0,key:s.id,onRemove:function(n){return e.handleRemoveCourse(n)},onTogglePinned:function(n){return e.handleTogglePinned(n)},onToggleExcluded:function(n){return e.handleToggleExcluded(n)},onSetOverlayCrns:function(n){return e.handleSetOverlayCrns(n)},pinnedCrns:t,excludedCrns:a})}),r.a.createElement("div",{className:"course-add"},r.a.createElement("input",{type:"text",value:u,onChange:function(n){return e.handleChangeKeyword(n)},className:"keyword",placeholder:"XX 0000"}),r.a.createElement("div",{className:"courses"},u&&Object.values(this.courses).filter(function(e){return e.id.startsWith(u.toUpperCase())}).slice(0,10).map(function(n){return r.a.createElement(g,{course:n,onClick:function(){return e.handleAddCourse(n)},key:n.id,pinnedCrns:t})}))),r.a.createElement("div",{className:"title"},"Auto Select"),r.a.createElement("div",{className:"combinations"},c.map(function(n,a){return r.a.createElement("div",{className:"combination",onMouseEnter:function(){return e.handleSetOverlayCrns(n)},onMouseLeave:function(){return e.handleSetOverlayCrns([])},onClick:function(){return e.handleSetPinnedCrns(Object(o.a)(t).concat(Object(o.a)(n)))}},r.a.createElement("div",{className:"number"},a+1),r.a.createElement(N,{className:"preview",pinnedCrns:Object(o.a)(t).concat(Object(o.a)(n)),overlayCrns:[],crns:e.crns,key:a,preview:!0}))}))))}}]),n}(a.Component);c.a.render(r.a.createElement(x,null),document.getElementById("root"))}},[[20,2,1]]]);
//# sourceMappingURL=main.bf2c445f.chunk.js.map