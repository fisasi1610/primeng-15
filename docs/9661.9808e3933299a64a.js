"use strict";(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[9661],{2899:(Z,m,c)=>{c.d(m,{V:()=>d,W:()=>r});var l=c(6895),o=c(1571);function y(e,u){if(1&e&&o._UZ(0,"span",3),2&e){const s=o.oxw();o.Q6J("ngClass",s.icon)}}const p=["*"];let d=(()=>{class e{containerClass(){return{"p-tag p-component":!0,"p-tag-info":"info"===this.severity,"p-tag-success":"success"===this.severity,"p-tag-warning":"warning"===this.severity,"p-tag-danger":"danger"===this.severity,"p-tag-rounded":this.rounded}}}return e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["p-tag"]],hostAttrs:[1,"p-element"],inputs:{styleClass:"styleClass",style:"style",severity:"severity",value:"value",icon:"icon",rounded:"rounded"},ngContentSelectors:p,decls:5,vars:6,consts:[[3,"ngClass","ngStyle"],["class","p-tag-icon",3,"ngClass",4,"ngIf"],[1,"p-tag-value"],[1,"p-tag-icon",3,"ngClass"]],template:function(s,g){1&s&&(o.F$t(),o.TgZ(0,"span",0),o.Hsn(1),o.YNc(2,y,1,1,"span",1),o.TgZ(3,"span",2),o._uU(4),o.qZA()()),2&s&&(o.Tol(g.styleClass),o.Q6J("ngClass",g.containerClass())("ngStyle",g.style),o.xp6(2),o.Q6J("ngIf",g.icon),o.xp6(2),o.Oqu(g.value))},dependencies:[l.mk,l.O5,l.PC],styles:[".p-tag{display:inline-flex;align-items:center;justify-content:center}.p-tag-icon,.p-tag-value,.p-tag-icon.pi{line-height:1.5}.p-tag.p-tag-rounded{border-radius:10rem}\n"],encapsulation:2,changeDetection:0}),e})(),r=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[l.ez]}),e})()},6544:(Z,m,c)=>{c.d(m,{N:()=>y});var l=c(1571);const o=["*"];let y=(()=>{class p{}return p.\u0275fac=function(r){return new(r||p)},p.\u0275cmp=l.Xpm({type:p,selectors:[["app-developmentsection"]],ngContentSelectors:o,decls:4,vars:0,consts:[[1,"flex","align-items-center","line-height-3","bg-primary-600","text-white","p-3","text-lg","border-round","mb-3"],[1,"pi","pi-info-circle","text-lg","text-white","mr-2"]],template:function(r,e){1&r&&(l.F$t(),l.TgZ(0,"div",0),l._UZ(1,"i",1),l._uU(2," Accessibility guide documents the specification of this component based on WCAG guidelines, the implementation is in progress.\n"),l.qZA(),l.Hsn(3))},encapsulation:2}),p})()},9661:(Z,m,c)=>{c.r(m),c.d(m,{TagDemoModule:()=>J});var l=c(6895),o=c(359),y=c(1928),p=c(2899),d=c(4369),r=c(9768),e=c(1571);let u=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[l.ez,o.Bz,r.a,d.V,p.W,y.hJ,d.V]}),t})();var s=c(4802);let g=(()=>{class t{constructor(){this.code={basic:'\n<p-tag icon="pi pi-user" value="Primary"></p-tag>',html:'\n<div class="card flex justify-content-center gap-2">\n    <p-tag icon="pi pi-user" value="Primary"></p-tag>\n    <p-tag icon="pi pi-check" severity="success" value="Success"></p-tag>\n    <p-tag icon="pi pi-info-circle" severity="info" value="Info"></p-tag>\n    <p-tag icon="pi pi-exclamation-triangle" severity="warning" value="Warning"></p-tag>\n    <p-tag icon="pi pi-times" severity="danger" value="Danger"></p-tag>\n</div>',typescript:"\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'tag-icon-demo',\n    templateUrl: './tag-icon-demo.html'\n})\nexport class TagIconDemo {}"}}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["icon-doc"]],inputs:{id:"id",title:"title"},decls:14,vars:3,consts:[[3,"title","id"],[1,"card","flex","justify-content-center","gap-2"],["icon","pi pi-user","value","Primary"],["icon","pi pi-check","severity","success","value","Success"],["icon","pi pi-info-circle","severity","info","value","Info"],["icon","pi pi-exclamation-triangle","severity","warning","value","Warning"],["icon","pi pi-times","severity","danger","value","Danger"],["selector","tag-icon-demo",3,"code"]],template:function(a,i){1&a&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"A font icon next to the value can be displayed with the "),e.TgZ(4,"i"),e._uU(5,"icon"),e.qZA(),e._uU(6," property."),e.qZA()(),e.TgZ(7,"div",1),e._UZ(8,"p-tag",2)(9,"p-tag",3)(10,"p-tag",4)(11,"p-tag",5)(12,"p-tag",6),e.qZA(),e._UZ(13,"app-code",7),e.qZA()),2&a&&(e.xp6(1),e.Q6J("title",i.title)("id",i.id),e.xp6(12),e.Q6J("code",i.code))},dependencies:[r.h,s.c,p.V],encapsulation:2}),t})(),f=(()=>{class t{constructor(){this.code={typescript:"import { TagModule } from 'primeng/tag';"}}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["import-doc"]],inputs:{id:"id",title:"title"},decls:3,vars:4,consts:[[3,"title","id"],[3,"code","hideToggleCode"]],template:function(a,i){1&a&&(e.TgZ(0,"section"),e._UZ(1,"app-docsectiontext",0)(2,"app-code",1),e.qZA()),2&a&&(e.xp6(1),e.Q6J("title",i.title)("id",i.id),e.xp6(1),e.Q6J("code",i.code)("hideToggleCode",!0))},dependencies:[r.h,s.c],encapsulation:2}),t})(),v=(()=>{class t{constructor(){this.code={basic:'\n<p-tag severity="success" value="Success"></p-tag>',html:'\n<div class="card flex justify-content-center gap-2">\n    <p-tag value="Primary"></p-tag>\n    <p-tag severity="success" value="Success"></p-tag>\n    <p-tag severity="info" value="Info"></p-tag>\n    <p-tag severity="warning" value="Warning"></p-tag>\n    <p-tag severity="danger" value="Danger"></p-tag>\n</div>',typescript:"\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'tag-severity-demo',\n    templateUrl: './tag-severity-demo.html'\n})\nexport class TagSeverityDemo {}"}}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["severity-doc"]],inputs:{id:"id",title:"title"},decls:23,vars:3,consts:[[3,"title","id"],[1,"card","flex","justify-content-center","gap-2"],["value","Primary"],["severity","success","value","Success"],["severity","info","value","Info"],["severity","warning","value","Warning"],["severity","danger","value","Danger"],["selector","tag-severity-demo",3,"code"]],template:function(a,i){1&a&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"Severity defines the color of the tag, possible values are "),e.TgZ(4,"i"),e._uU(5,"success"),e.qZA(),e._uU(6,", "),e.TgZ(7,"i"),e._uU(8,"info"),e.qZA(),e._uU(9,", "),e.TgZ(10,"i"),e._uU(11,"warning"),e.qZA(),e._uU(12," and "),e.TgZ(13,"i"),e._uU(14,"danger"),e.qZA(),e._uU(15," in addition to the default theme color."),e.qZA()(),e.TgZ(16,"div",1),e._UZ(17,"p-tag",2)(18,"p-tag",3)(19,"p-tag",4)(20,"p-tag",5)(21,"p-tag",6),e.qZA(),e._UZ(22,"app-code",7),e.qZA()),2&a&&(e.xp6(1),e.Q6J("title",i.title)("id",i.id),e.xp6(21),e.Q6J("code",i.code))},dependencies:[r.h,s.c,p.V],encapsulation:2}),t})(),T=(()=>{class t{constructor(){this.code={basic:'\n<p-tag value="New"></p-tag>',html:'\n<div class="card flex justify-content-center">\n    <p-tag value="New"></p-tag>\n</div>',typescript:"\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'tag-basic-demo',\n    templateUrl: './tag-basic-demo.html'\n})\nexport class TagBasicDemo {}"}}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["basic-doc"]],inputs:{id:"id",title:"title"},decls:10,vars:3,consts:[[3,"title","id"],[1,"card","flex","justify-content-center"],["value","New"],["selector","tag-basic-demo",3,"code"]],template:function(a,i){1&a&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"Label of the tag is defined with the "),e.TgZ(4,"i"),e._uU(5,"value"),e.qZA(),e._uU(6," property."),e.qZA()(),e.TgZ(7,"div",1),e._UZ(8,"p-tag",2),e.qZA(),e._UZ(9,"app-code",3),e.qZA()),2&a&&(e.xp6(1),e.Q6J("title",i.title)("id",i.id),e.xp6(8),e.Q6J("code",i.code))},dependencies:[r.h,s.c,p.V],encapsulation:2}),t})(),h=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["props-doc"]],inputs:{id:"id",title:"title"},decls:69,vars:2,consts:[[3,"title","id"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(a,i){1&a&&(e.TgZ(0,"section"),e._UZ(1,"app-docsectiontext",0),e.TgZ(2,"div",1)(3,"table",2)(4,"thead")(5,"tr")(6,"th"),e._uU(7,"Name"),e.qZA(),e.TgZ(8,"th"),e._uU(9,"Type"),e.qZA(),e.TgZ(10,"th"),e._uU(11,"Default"),e.qZA(),e.TgZ(12,"th"),e._uU(13,"Description"),e.qZA()()(),e.TgZ(14,"tbody")(15,"tr")(16,"td"),e._uU(17,"value"),e.qZA(),e.TgZ(18,"td"),e._uU(19,"any"),e.qZA(),e.TgZ(20,"td"),e._uU(21,"null"),e.qZA(),e.TgZ(22,"td"),e._uU(23,"Value to display inside the tag."),e.qZA()(),e.TgZ(24,"tr")(25,"td"),e._uU(26,"severity"),e.qZA(),e.TgZ(27,"td"),e._uU(28,"string"),e.qZA(),e.TgZ(29,"td"),e._uU(30,"null"),e.qZA(),e.TgZ(31,"td"),e._uU(32,"Severity type of the tag."),e.qZA()(),e.TgZ(33,"tr")(34,"td"),e._uU(35,"rounded"),e.qZA(),e.TgZ(36,"td"),e._uU(37,"boolean"),e.qZA(),e.TgZ(38,"td"),e._uU(39,"false"),e.qZA(),e.TgZ(40,"td"),e._uU(41,"Whether the corners of the tag are rounded."),e.qZA()(),e.TgZ(42,"tr")(43,"td"),e._uU(44,"icon"),e.qZA(),e.TgZ(45,"td"),e._uU(46,"string"),e.qZA(),e.TgZ(47,"td"),e._uU(48,"null"),e.qZA(),e.TgZ(49,"td"),e._uU(50,"Icon of the tag to display next to the value."),e.qZA()(),e.TgZ(51,"tr")(52,"td"),e._uU(53,"style"),e.qZA(),e.TgZ(54,"td"),e._uU(55,"object"),e.qZA(),e.TgZ(56,"td"),e._uU(57,"null"),e.qZA(),e.TgZ(58,"td"),e._uU(59,"Inline style of the component."),e.qZA()(),e.TgZ(60,"tr")(61,"td"),e._uU(62,"styleClass"),e.qZA(),e.TgZ(63,"td"),e._uU(64,"string"),e.qZA(),e.TgZ(65,"td"),e._uU(66,"null"),e.qZA(),e.TgZ(67,"td"),e._uU(68,"Style class of the component."),e.qZA()()()()()()),2&a&&(e.xp6(1),e.Q6J("title",i.title)("id",i.id))},dependencies:[s.c],encapsulation:2}),t})();const _=function(){return["/theming"]};let A=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["style-doc"]],inputs:{id:"id",title:"title"},decls:36,vars:4,consts:[[3,"title","id"],["href","#",3,"routerLink"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(a,i){1&a&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"Following is the list of structural style classes, for theming classes visit "),e.TgZ(4,"a",1),e._uU(5,"theming"),e.qZA(),e._uU(6," page."),e.qZA()(),e.TgZ(7,"div",2)(8,"table",3)(9,"thead")(10,"tr")(11,"th"),e._uU(12,"Name"),e.qZA(),e.TgZ(13,"th"),e._uU(14,"Element"),e.qZA()()(),e.TgZ(15,"tbody")(16,"tr")(17,"td"),e._uU(18,"p-tag"),e.qZA(),e.TgZ(19,"td"),e._uU(20,"Tag element"),e.qZA()(),e.TgZ(21,"tr")(22,"td"),e._uU(23,"p-tag-rounded"),e.qZA(),e.TgZ(24,"td"),e._uU(25,"Rounded element"),e.qZA()(),e.TgZ(26,"tr")(27,"td"),e._uU(28,"p-tag-icon"),e.qZA(),e.TgZ(29,"td"),e._uU(30,"Icon of the tag"),e.qZA()(),e.TgZ(31,"tr")(32,"td"),e._uU(33,"p-tag-value"),e.qZA(),e.TgZ(34,"td"),e._uU(35,"Value of the tag"),e.qZA()()()()()()),2&a&&(e.xp6(1),e.Q6J("title",i.title)("id",i.id),e.xp6(3),e.Q6J("routerLink",e.DdM(3,_)))},dependencies:[o.rH,s.c],encapsulation:2}),t})(),U=(()=>{class t{constructor(){this.code={basic:'\n<p-tag value="Primary" [rounded]="true"></p-tag>',html:'\n<div class="card flex justify-content-center gap-2">\n    <p-tag value="Primary" [rounded]="true"></p-tag>\n    <p-tag severity="success" value="Success" [rounded]="true"></p-tag>\n    <p-tag severity="info" value="Info" [rounded]="true"></p-tag>\n    <p-tag severity="warning" value="Warning" [rounded]="true"></p-tag>\n    <p-tag severity="danger" value="Danger" [rounded]="true"></p-tag>\n</div>',typescript:"\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'tag-pill-demo',\n    templateUrl: './tag-pill-demo.html'\n})\nexport class TagPillDemo {}"}}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["pill-doc"]],inputs:{id:"id",title:"title"},decls:14,vars:8,consts:[[3,"title","id"],[1,"card","flex","justify-content-center","gap-2"],["value","Primary",3,"rounded"],["severity","success","value","Success",3,"rounded"],["severity","info","value","Info",3,"rounded"],["severity","warning","value","Warning",3,"rounded"],["severity","danger","value","Danger",3,"rounded"],["selector","tag-pill-demo",3,"code"]],template:function(a,i){1&a&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"Enabling "),e.TgZ(4,"i"),e._uU(5,"rounded"),e.qZA(),e._uU(6,", displays a tag as a pill."),e.qZA()(),e.TgZ(7,"div",1),e._UZ(8,"p-tag",2)(9,"p-tag",3)(10,"p-tag",4)(11,"p-tag",5)(12,"p-tag",6),e.qZA(),e._UZ(13,"app-code",7),e.qZA()),2&a&&(e.xp6(1),e.Q6J("title",i.title)("id",i.id),e.xp6(7),e.Q6J("rounded",!0),e.xp6(1),e.Q6J("rounded",!0),e.xp6(1),e.Q6J("rounded",!0),e.xp6(1),e.Q6J("rounded",!0),e.xp6(1),e.Q6J("rounded",!0),e.xp6(1),e.Q6J("code",i.code))},dependencies:[r.h,s.c,p.V],encapsulation:2}),t})();const q=function(){return{background:"linear-gradient(-225deg,#AC32E4 0%,#7918F2 48%,#4801FF 100%)"}};let x=(()=>{class t{constructor(){this.code={basic:'\n<p-tag [style]="{ \'background\': \'linear-gradient(-225deg,#AC32E4 0%,#7918F2 48%,#4801FF 100%)\'}">\n    <div class="flex align-items-center gap-2">\n        <img alt="Country" src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" class="flag flag-it" style="width: \'18px\'" />\n        <span class="text-base">Italia</span>\n        <i class="pi pi-times text-xs"></i>\n    </div>\n</p-tag>',html:'\n<div class="card flex justify-content-center">\n    <p-tag [style]="{ \'background\': \'linear-gradient(-225deg,#AC32E4 0%,#7918F2 48%,#4801FF 100%)\'}">\n        <div class="flex align-items-center gap-2">\n            <img alt="Country" src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" class="flag flag-it" style="width: \'18px\'" />\n            <span class="text-base">Italia</span>\n            <i class="pi pi-times text-xs"></i>\n        </div>\n    </p-tag>\n</div>',typescript:"\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'tag-template-demo',\n    templateUrl: './tag-template-demo.html'\n})\nexport class TagTemplateDemo {}"}}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["tag-template-demo"]],inputs:{id:"id",title:"title"},decls:12,vars:6,consts:[[3,"title","id"],[1,"card","flex","justify-content-center"],[1,"flex","align-items-center","gap-2"],["alt","Country","src","https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png",1,"flag","flag-it",2,"width","18px"],[1,"text-base"],[1,"pi","pi-times","text-xs"],["selector","tag-template-demo",3,"code"]],template:function(a,i){1&a&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"Children of the component are passed as the content for templating."),e.qZA()(),e.TgZ(4,"div",1)(5,"p-tag")(6,"div",2),e._UZ(7,"img",3),e.TgZ(8,"span",4),e._uU(9,"Italia"),e.qZA(),e._UZ(10,"i",5),e.qZA()()(),e._UZ(11,"app-code",6),e.qZA()),2&a&&(e.xp6(1),e.Q6J("title",i.title)("id",i.id),e.xp6(4),e.Akn(e.DdM(5,q)),e.xp6(6),e.Q6J("code",i.code))},dependencies:[r.h,s.c,p.V],encapsulation:2}),t})();var b=c(6544);let C=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["accessibility-doc"]],inputs:{id:"id",title:"title"},decls:17,vars:2,consts:[[3,"title","id"]],template:function(a,i){1&a&&(e.TgZ(0,"app-developmentsection")(1,"div")(2,"app-docsectiontext",0)(3,"h3"),e._uU(4,"Screen Reader"),e.qZA(),e.TgZ(5,"p"),e._uU(6," Tag does not include any roles and attributes by default, any attribute is passed to the root element so aria roles and attributes can be added if required. If the tags are dynamic,"),e.TgZ(7,"i"),e._uU(8,"aria-live"),e.qZA(),e._uU(9," may be utilized as well. In case badges need to be tabbable, "),e.TgZ(10,"i"),e._uU(11,"tabIndex"),e.qZA(),e._uU(12," can be added to implement custom key handlers. "),e.qZA(),e.TgZ(13,"h3"),e._uU(14,"Keyboard Support"),e.qZA(),e.TgZ(15,"p"),e._uU(16,"Component does not include any interactive elements."),e.qZA()()()()),2&a&&(e.xp6(2),e.Q6J("title",i.title)("id",i.id))},dependencies:[s.c,b.N],encapsulation:2}),t})();var S=c(3408);let I=(()=>{class t{constructor(){this.docs=[{id:"import",label:"Import",component:f},{id:"basic",label:"Basic",component:T},{id:"severity",label:"Severity",component:v},{id:"pill",label:"Pill",component:U},{id:"icon",label:"Icon",component:g},{id:"template",label:"Template",component:x},{id:"style",label:"Style",component:A},{id:"accessibility",label:"Accessibility",component:C}],this.apiDocs=[{id:"props",label:"Properties",component:h}]}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:1,vars:2,consts:[["title","Angular Tag Component","header","Tag","description","Tag component is used to categorize content.",3,"docs","apiDocs"]],template:function(a,i){1&a&&e._UZ(0,"app-doc",0),2&a&&e.Q6J("docs",i.docs)("apiDocs",i.apiDocs)},dependencies:[S.x],encapsulation:2}),t})(),w=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[o.Bz.forChild([{path:"",component:I}]),o.Bz]}),t})(),J=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[l.ez,w,u]}),t})()}}]);