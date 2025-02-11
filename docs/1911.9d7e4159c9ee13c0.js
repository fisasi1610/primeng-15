"use strict";(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[1911],{1911:(O,m,d)=>{d.r(m),d.d(m,{InputMaskDemoModule:()=>B});var Z=d(6895),l=d(433),r=d(359),_=d(5092),g=d(4369),p=d(9768),e=d(1571);let h=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[Z.ez,l.u5,l.UX,_.zz,r.Bz,p.a,g.V,g.V]}),t})();var s=d(4802),f=d(6544);let U=(()=>{class t{constructor(){this.code={basic:'<label for="date">Date</label>\n<p-inputMask id="date"></p-inputMask>\n\n<span id="phone">Phone</span>\n<p-inputMask aria-labelledby="phone"></p-inputMask>\n\n<p-inputMask aria-label="Age"></p-inputMask>'}}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["accessibility-doc"]],inputs:{id:"id",title:"title"},decls:37,vars:6,consts:[[3,"title","id"],[3,"code","hideToggleCode","hideCodeSandbox","hideStackBlitz"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(n,o){1&n&&(e.TgZ(0,"app-developmentsection")(1,"div")(2,"app-docsectiontext",0)(3,"h3"),e._uU(4,"Screen Reader"),e.qZA(),e.TgZ(5,"p"),e._uU(6," InputMask component renders a native input element that implicitly includes any passed prop. Value to describe the component can either be provided via "),e.TgZ(7,"i"),e._uU(8,"label"),e.qZA(),e._uU(9," tag combined with "),e.TgZ(10,"i"),e._uU(11,"id"),e.qZA(),e._uU(12," prop or using "),e.TgZ(13,"i"),e._uU(14,"aria-labelledby"),e.qZA(),e._uU(15,", "),e.TgZ(16,"i"),e._uU(17,"aria-label"),e.qZA(),e._uU(18," props. "),e.qZA()(),e._UZ(19,"app-code",1),e.TgZ(20,"h3"),e._uU(21,"Keyboard Support"),e.qZA(),e.TgZ(22,"div",2)(23,"table",3)(24,"thead")(25,"tr")(26,"th"),e._uU(27,"Key"),e.qZA(),e.TgZ(28,"th"),e._uU(29,"Function"),e.qZA()()(),e.TgZ(30,"tbody")(31,"tr")(32,"td")(33,"i"),e._uU(34,"tab"),e.qZA()(),e.TgZ(35,"td"),e._uU(36,"Moves focus to the input."),e.qZA()()()()()()()),2&n&&(e.xp6(2),e.Q6J("title",o.title)("id",o.id),e.xp6(17),e.Q6J("code",o.code)("hideToggleCode",!0)("hideCodeSandbox",!0)("hideStackBlitz",!0))},dependencies:[p.h,s.c,f.N],encapsulation:2}),t})();var c=d(3817);let T=(()=>{class t{constructor(){this.code={basic:'\n<p-inputMask mask="99-999999" [(ngModel)]="value" placeholder="99-999999"></p-inputMask>',html:'\n<div class="card flex justify-content-center">\n    <p-inputMask mask="99-999999" [(ngModel)]="value" placeholder="99-999999"></p-inputMask>\n</div>',typescript:"\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'input-mask-basic-demo',\n    templateUrl: './input-mask-basic-demo.html'\n})\nexport class InputMaskBasicDemo {\n    value: string;\n}"}}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["basic-doc"]],inputs:{id:"id",title:"title"},decls:10,vars:4,consts:[[3,"title","id"],[1,"card","flex","justify-content-center"],["mask","99-999999","placeholder","99-999999",3,"ngModel","ngModelChange"],["selector","input-mask-basic-demo",3,"code"]],template:function(n,o){1&n&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"InputMask is used as a controlled input with "),e.TgZ(4,"i"),e._uU(5,"ngModel"),e.qZA(),e._uU(6," properties."),e.qZA()(),e.TgZ(7,"div",1)(8,"p-inputMask",2),e.NdJ("ngModelChange",function(i){return o.value=i}),e.qZA()(),e._UZ(9,"app-code",3),e.qZA()),2&n&&(e.xp6(1),e.Q6J("title",o.title)("id",o.id),e.xp6(7),e.Q6J("ngModel",o.value),e.xp6(1),e.Q6J("code",o.code))},dependencies:[l.JJ,l.On,c.vy,p.h,s.c],encapsulation:2}),t})(),A=(()=>{class t{constructor(){this.code={basic:'\n<p-inputMask mask="999-99-9999" [(ngModel)]="value" [disabled]="true"></p-inputMask>',html:'\n<div class="card flex justify-content-center">\n    <p-inputMask mask="999-99-9999" [(ngModel)]="value" [disabled]="true"></p-inputMask>\n</div>',typescript:"\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'input-mask-disabled-demo',\n    templateUrl: './input-mask-disabled-demo.html'\n})\nexport class InputMaskDisabledDemo {\n    value: string;\n}"}}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["disabled-doc"]],inputs:{id:"id",title:"title"},decls:10,vars:5,consts:[[3,"title","id"],[1,"card","flex","justify-content-center"],["mask","999-99-9999",3,"ngModel","disabled","ngModelChange"],["selector","input-mask-disabled-demo",3,"code"]],template:function(n,o){1&n&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"When "),e.TgZ(4,"i"),e._uU(5,"disabled"),e.qZA(),e._uU(6," is present, the element cannot be edited and focused."),e.qZA()(),e.TgZ(7,"div",1)(8,"p-inputMask",2),e.NdJ("ngModelChange",function(i){return o.value=i}),e.qZA()(),e._UZ(9,"app-code",3),e.qZA()),2&n&&(e.xp6(1),e.Q6J("title",o.title)("id",o.id),e.xp6(7),e.Q6J("ngModel",o.value)("disabled",!0),e.xp6(1),e.Q6J("code",o.code))},dependencies:[l.JJ,l.On,c.vy,p.h,s.c],encapsulation:2}),t})(),k=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["events-doc"]],inputs:{id:"id",title:"title"},decls:55,vars:2,consts:[[3,"title","id"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(n,o){1&n&&(e.TgZ(0,"section"),e._UZ(1,"app-docsectiontext",0),e.TgZ(2,"div",1)(3,"table",2)(4,"thead")(5,"tr")(6,"th"),e._uU(7,"Name"),e.qZA(),e.TgZ(8,"th"),e._uU(9,"Parameters"),e.qZA(),e.TgZ(10,"th"),e._uU(11,"Description"),e.qZA()()(),e.TgZ(12,"tbody")(13,"tr")(14,"td"),e._uU(15,"onFocus"),e.qZA(),e.TgZ(16,"td"),e._uU(17,"event: Browser event"),e.qZA(),e.TgZ(18,"td"),e._uU(19,"Callback to invoke when input receives focus."),e.qZA()(),e.TgZ(20,"tr")(21,"td"),e._uU(22,"onBlur"),e.qZA(),e.TgZ(23,"td"),e._uU(24,"event: Browser event"),e.qZA(),e.TgZ(25,"td"),e._uU(26,"Callback to invoke when input loses focus."),e.qZA()(),e.TgZ(27,"tr")(28,"td"),e._uU(29,"onComplete"),e.qZA(),e.TgZ(30,"td"),e._uU(31,"-"),e.qZA(),e.TgZ(32,"td"),e._uU(33,"Callback to invoke on when user completes the mask pattern."),e.qZA()(),e.TgZ(34,"tr")(35,"td"),e._uU(36,"onInput"),e.qZA(),e.TgZ(37,"td"),e._uU(38,"-"),e.qZA(),e.TgZ(39,"td"),e._uU(40,"Callback to invoke on when the input field value is altered."),e.qZA()(),e.TgZ(41,"tr")(42,"td"),e._uU(43,"onClear"),e.qZA(),e.TgZ(44,"td"),e._uU(45,"-"),e.qZA(),e.TgZ(46,"td"),e._uU(47,"Callback to invoke when inputmask clears the value."),e.qZA()(),e.TgZ(48,"tr")(49,"td"),e._uU(50,"onKeydown"),e.qZA(),e.TgZ(51,"td"),e._uU(52,"event: KeyboardEvent"),e.qZA(),e.TgZ(53,"td"),e._uU(54,"Callback to invoke on when the input receives a keydown event."),e.qZA()()()()()()),2&n&&(e.xp6(1),e.Q6J("title",o.title)("id",o.id))},dependencies:[s.c],encapsulation:2}),t})(),M=(()=>{class t{constructor(){this.code={basic:'\n<span class="p-float-label">\n    <p-inputMask mask="999-99-9999" [(ngModel)]="value" id="ssn_input"></p-inputMask>\n    <label htmlFor="ssn_input">SSN</label>\n</span>',html:'\n<div class="card flex justify-content-center">\n    <span class="p-float-label">\n    <p-inputMask mask="999-99-9999" [(ngModel)]="value" id="ssn_input"></p-inputMask>\n    <label htmlFor="ssn_input">SSN</label>\n    </span>\n</div>',typescript:"\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'input-mask-floatlabel-demo',\n    templateUrl: './input-mask-floatlabel-demo.html'\n})\nexport class InputMaskFloatlabelDemo {\n    value: string;\n}"}}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["floatlabel-doc"]],inputs:{id:"id",title:"title"},decls:10,vars:4,consts:[[3,"title","id"],[1,"card","flex","justify-content-center"],[1,"p-float-label"],["mask","999-99-9999","id","ssn_input",3,"ngModel","ngModelChange"],["htmlFor","ssn_input"],["selector","input-mask-floatlabel-demo",3,"code"]],template:function(n,o){1&n&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"A floating label appears on top of the input field when focused."),e.qZA()(),e.TgZ(4,"div",1)(5,"span",2)(6,"p-inputMask",3),e.NdJ("ngModelChange",function(i){return o.value=i}),e.qZA(),e.TgZ(7,"label",4),e._uU(8,"SSN"),e.qZA()()(),e._UZ(9,"app-code",5),e.qZA()),2&n&&(e.xp6(1),e.Q6J("title",o.title)("id",o.id),e.xp6(5),e.Q6J("ngModel",o.value),e.xp6(3),e.Q6J("code",o.code))},dependencies:[l.JJ,l.On,c.vy,p.h,s.c],encapsulation:2}),t})(),v=(()=>{class t{constructor(){this.code={typescript:"import { InputMaskModule } from 'primeng/inputmask';"}}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["import-doc"]],inputs:{id:"id",title:"title"},decls:3,vars:4,consts:[[3,"title","id"],[3,"code","hideToggleCode"]],template:function(n,o){1&n&&(e.TgZ(0,"section"),e._UZ(1,"app-docsectiontext",0)(2,"app-code",1),e.qZA()),2&n&&(e.xp6(1),e.Q6J("title",o.title)("id",o.id),e.xp6(1),e.Q6J("code",o.code)("hideToggleCode",!0))},dependencies:[p.h,s.c],encapsulation:2}),t})(),q=(()=>{class t{constructor(){this.code={basic:'\n<p-inputMask mask="999-99-9999" [(ngModel)]="value" class="ng-invalid ng-dirty"></p-inputMask>',html:'\n<div class="card flex justify-content-center">\n    <p-inputMask mask="999-99-9999" [(ngModel)]="value" class="ng-invalid ng-dirty"></p-inputMask>\n</div>',typescript:"\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'input-mask-invalid-demo',\n    templateUrl: './input-mask-invalid-demo.html'\n})\nexport class InputMaskInvalidDemo {\n    value: string;\n}"}}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["invalid-doc"]],inputs:{id:"id",title:"title"},decls:13,vars:4,consts:[[3,"title","id"],[1,"card","flex","justify-content-center"],["mask","999-99-9999",1,"ng-invalid","ng-dirty",3,"ngModel","ngModelChange"],["selector","input-mask-invalid-demo",3,"code"]],template:function(n,o){1&n&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"Invalid state style is added using the "),e.TgZ(4,"i"),e._uU(5,"ng-invalid"),e.qZA(),e._uU(6," and "),e.TgZ(7,"i"),e._uU(8,"ng-dirty"),e.qZA(),e._uU(9," class to indicate a failed validation."),e.qZA()(),e.TgZ(10,"div",1)(11,"p-inputMask",2),e.NdJ("ngModelChange",function(i){return o.value=i}),e.qZA()(),e._UZ(12,"app-code",3),e.qZA()),2&n&&(e.xp6(1),e.Q6J("title",o.title)("id",o.id),e.xp6(10),e.Q6J("ngModel",o.value),e.xp6(1),e.Q6J("code",o.code))},dependencies:[l.JJ,l.On,c.vy,p.h,s.c],encapsulation:2}),t})(),b=(()=>{class t{constructor(){this.code={basic:'\n<span class="font-bold block mb-2">SSN</span>\n<p-inputMask mask="999-99-9999" [(ngModel)]="value1" placeholder="999-99-9999"></p-inputMask>\n\n<span class="font-bold block mb-2">Phone</span>\n<p-inputMask mask="(999) 999-9999" [(ngModel)]="value2" placeholder="(999) 999-9999"></p-inputMask>\n\n<span class="font-bold block mb-2">Serial Number</span>\n<p-inputMask mask="a*-999-a999" [(ngModel)]="value3" placeholder="a*-999-a999"></p-inputMask>',html:'\n<div class="card p-fluid flex flex-wrap gap-3">\n    <div class="flex-auto">\n        <span class="font-bold block mb-2">SSN</span>\n        <p-inputMask mask="999-99-9999" [(ngModel)]="value1" placeholder="999-99-9999"></p-inputMask>\n    </div>\n\n    <div class="flex-auto">\n        <span class="font-bold block mb-2">Phone</span>\n        <p-inputMask mask="(999) 999-9999" [(ngModel)]="value2" placeholder="(999) 999-9999"></p-inputMask>\n    </div>\n\n    <div class="flex-auto">\n        <span class="font-bold block mb-2">Serial Number</span>\n        <p-inputMask mask="a*-999-a999" [(ngModel)]="value3" placeholder="a*-999-a999"></p-inputMask>\n    </div>\n</div>',typescript:"\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'input-mask-mask-demo',\n    templateUrl: './input-mask-mask-demo.html'\n})\nexport class InputMaskMaskDemo {\n    value1: string;\n\n    value2: string;\n\n    value3: string;\n}"}}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["input-mask-mask-demo"]],inputs:{id:"id",title:"title"},decls:36,vars:6,consts:[[3,"title","id"],[1,"card","p-fluid","flex","flex-wrap","gap-3"],[1,"flex-auto"],[1,"font-bold","block","mb-2"],["mask","999-99-9999","placeholder","999-99-9999",3,"ngModel","ngModelChange"],["mask","(999) 999-9999","placeholder","(999) 999-9999",3,"ngModel","ngModelChange"],["mask","a*-999-a999","placeholder","a*-999-a999",3,"ngModel","ngModelChange"],["selector","input-mask-mask-demo",3,"code"]],template:function(n,o){1&n&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3," Mask format can be a combination of the following definitions; "),e.TgZ(4,"i"),e._uU(5,"a"),e.qZA(),e._uU(6," for alphabetic characters, "),e.TgZ(7,"i"),e._uU(8,"9"),e.qZA(),e._uU(9," for numeric characters and "),e.TgZ(10,"i"),e._uU(11,"*"),e.qZA(),e._uU(12," for alphanumberic characters. In addition, formatting characters like "),e.TgZ(13,"i"),e._uU(14,"("),e.qZA(),e._uU(15," , "),e.TgZ(16,"i"),e._uU(17,")"),e.qZA(),e._uU(18," , "),e.TgZ(19,"i"),e._uU(20,"-"),e.qZA(),e._uU(21," are also accepted. "),e.qZA()(),e.TgZ(22,"div",1)(23,"div",2)(24,"span",3),e._uU(25,"SSN"),e.qZA(),e.TgZ(26,"p-inputMask",4),e.NdJ("ngModelChange",function(i){return o.value1=i}),e.qZA()(),e.TgZ(27,"div",2)(28,"span",3),e._uU(29,"Phone"),e.qZA(),e.TgZ(30,"p-inputMask",5),e.NdJ("ngModelChange",function(i){return o.value2=i}),e.qZA()(),e.TgZ(31,"div",2)(32,"span",3),e._uU(33,"Serial Number"),e.qZA(),e.TgZ(34,"p-inputMask",6),e.NdJ("ngModelChange",function(i){return o.value3=i}),e.qZA()()(),e._UZ(35,"app-code",7),e.qZA()),2&n&&(e.xp6(1),e.Q6J("title",o.title)("id",o.id),e.xp6(25),e.Q6J("ngModel",o.value1),e.xp6(4),e.Q6J("ngModel",o.value2),e.xp6(4),e.Q6J("ngModel",o.value3),e.xp6(1),e.Q6J("code",o.code))},dependencies:[l.JJ,l.On,c.vy,p.h,s.c],encapsulation:2}),t})(),y=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["methods-doc"]],inputs:{id:"id",title:"title"},decls:20,vars:2,consts:[[3,"title","id"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(n,o){1&n&&(e.TgZ(0,"section"),e._UZ(1,"app-docsectiontext",0),e.TgZ(2,"div",1)(3,"table",2)(4,"thead")(5,"tr")(6,"th"),e._uU(7,"Name"),e.qZA(),e.TgZ(8,"th"),e._uU(9,"Parameters"),e.qZA(),e.TgZ(10,"th"),e._uU(11,"Description"),e.qZA()()(),e.TgZ(12,"tbody")(13,"tr")(14,"td"),e._uU(15,"focus"),e.qZA(),e.TgZ(16,"td"),e._uU(17,"-"),e.qZA(),e.TgZ(18,"td"),e._uU(19,"Applies focus to the input."),e.qZA()()()()()()),2&n&&(e.xp6(1),e.Q6J("title",o.title)("id",o.id))},dependencies:[s.c],encapsulation:2}),t})(),D=(()=>{class t{constructor(){this.code={basic:'\n<p-inputMask mask="(999) 999-9999? x99999" [(ngModel)]="value" placeholder="(999) 999-9999? x99999"></p-inputMask>',html:'\n<div class="card flex justify-content-center">\n    <p-inputMask mask="(999) 999-9999? x99999" [(ngModel)]="value" placeholder="(999) 999-9999? x99999"></p-inputMask>\n</div>',typescript:"\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'input-mask-optional-demo',\n    templateUrl: './input-mask-optional-demo.html'\n})\nexport class InputMaskOptionalDemo {\n    value: string;\n}"}}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["optional-doc"]],inputs:{id:"id",title:"title"},decls:13,vars:4,consts:[[3,"title","id"],[1,"card","flex","justify-content-center"],["mask","(999) 999-9999? x99999","placeholder","(999) 999-9999? x99999",3,"ngModel","ngModelChange"],["selector","input-mask-optional-demo",3,"code"]],template:function(n,o){1&n&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"When the input does not complete the mask definition, it is cleared by default. Use "),e.TgZ(4,"i"),e._uU(5,"autoClear"),e.qZA(),e._uU(6," property to control this behavior. In addition, "),e.TgZ(7,"i"),e._uU(8,"?"),e.qZA(),e._uU(9," is used to mark anything after the question mark optional."),e.qZA()(),e.TgZ(10,"div",1)(11,"p-inputMask",2),e.NdJ("ngModelChange",function(i){return o.value=i}),e.qZA()(),e._UZ(12,"app-code",3),e.qZA()),2&n&&(e.xp6(1),e.Q6J("title",o.title)("id",o.id),e.xp6(10),e.Q6J("ngModel",o.value),e.xp6(1),e.Q6J("code",o.code))},dependencies:[l.JJ,l.On,c.vy,p.h,s.c],encapsulation:2}),t})(),C=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["props-doc"]],inputs:{id:"id",title:"title"},decls:231,vars:2,consts:[[3,"title","id"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(n,o){1&n&&(e.TgZ(0,"section"),e._UZ(1,"app-docsectiontext",0),e.TgZ(2,"div",1)(3,"table",2)(4,"thead")(5,"tr")(6,"th"),e._uU(7,"Name"),e.qZA(),e.TgZ(8,"th"),e._uU(9,"Type"),e.qZA(),e.TgZ(10,"th"),e._uU(11,"Default"),e.qZA(),e.TgZ(12,"th"),e._uU(13,"Description"),e.qZA()()(),e.TgZ(14,"tbody")(15,"tr")(16,"td"),e._uU(17,"type"),e.qZA(),e.TgZ(18,"td"),e._uU(19,"string"),e.qZA(),e.TgZ(20,"td"),e._uU(21,"text"),e.qZA(),e.TgZ(22,"td"),e._uU(23,"HTML5 input type"),e.qZA()(),e.TgZ(24,"tr")(25,"td"),e._uU(26,"mask"),e.qZA(),e.TgZ(27,"td"),e._uU(28,"string"),e.qZA(),e.TgZ(29,"td"),e._uU(30,"null"),e.qZA(),e.TgZ(31,"td"),e._uU(32,"Mask pattern."),e.qZA()(),e.TgZ(33,"tr")(34,"td"),e._uU(35,"slotChar"),e.qZA(),e.TgZ(36,"td"),e._uU(37,"string"),e.qZA(),e.TgZ(38,"td"),e._uU(39,"_"),e.qZA(),e.TgZ(40,"td"),e._uU(41,"Placeholder character in mask, default is underscore."),e.qZA()(),e.TgZ(42,"tr")(43,"td"),e._uU(44,"autoClear"),e.qZA(),e.TgZ(45,"td"),e._uU(46,"boolean"),e.qZA(),e.TgZ(47,"td"),e._uU(48,"true"),e.qZA(),e.TgZ(49,"td"),e._uU(50,"Clears the incomplete value on blur."),e.qZA()(),e.TgZ(51,"tr")(52,"td"),e._uU(53,"keepBuffer"),e.qZA(),e.TgZ(54,"td"),e._uU(55,"boolean"),e.qZA(),e.TgZ(56,"td"),e._uU(57,"false"),e.qZA(),e.TgZ(58,"td"),e._uU(59,"When present, it specifies that whether to clean buffer value from model."),e.qZA()(),e.TgZ(60,"tr")(61,"td"),e._uU(62,"unmask"),e.qZA(),e.TgZ(63,"td"),e._uU(64,"boolean"),e.qZA(),e.TgZ(65,"td"),e._uU(66,"false"),e.qZA(),e.TgZ(67,"td"),e._uU(68,"Defines if ngModel sets the raw unmasked value to bound value or the formatted mask value."),e.qZA()(),e.TgZ(69,"tr")(70,"td"),e._uU(71,"style"),e.qZA(),e.TgZ(72,"td"),e._uU(73,"string"),e.qZA(),e.TgZ(74,"td"),e._uU(75,"null"),e.qZA(),e.TgZ(76,"td"),e._uU(77,"Inline style of the input field."),e.qZA()(),e.TgZ(78,"tr")(79,"td"),e._uU(80,"styleClass"),e.qZA(),e.TgZ(81,"td"),e._uU(82,"string"),e.qZA(),e.TgZ(83,"td"),e._uU(84,"null"),e.qZA(),e.TgZ(85,"td"),e._uU(86,"Style class of the input field."),e.qZA()(),e.TgZ(87,"tr")(88,"td"),e._uU(89,"placeholder"),e.qZA(),e.TgZ(90,"td"),e._uU(91,"string"),e.qZA(),e.TgZ(92,"td"),e._uU(93,"null"),e.qZA(),e.TgZ(94,"td"),e._uU(95,"Advisory information to display on input."),e.qZA()(),e.TgZ(96,"tr")(97,"td"),e._uU(98,"size"),e.qZA(),e.TgZ(99,"td"),e._uU(100,"number"),e.qZA(),e.TgZ(101,"td"),e._uU(102,"null"),e.qZA(),e.TgZ(103,"td"),e._uU(104,"Size of the input field."),e.qZA()(),e.TgZ(105,"tr")(106,"td"),e._uU(107,"maxlength"),e.qZA(),e.TgZ(108,"td"),e._uU(109,"number"),e.qZA(),e.TgZ(110,"td"),e._uU(111,"null"),e.qZA(),e.TgZ(112,"td"),e._uU(113,"Maximum number of character allows in the input field."),e.qZA()(),e.TgZ(114,"tr")(115,"td"),e._uU(116,"tabindex"),e.qZA(),e.TgZ(117,"td"),e._uU(118,"number"),e.qZA(),e.TgZ(119,"td"),e._uU(120,"null"),e.qZA(),e.TgZ(121,"td"),e._uU(122,"Specifies tab order of the element."),e.qZA()(),e.TgZ(123,"tr")(124,"td"),e._uU(125,"disabled"),e.qZA(),e.TgZ(126,"td"),e._uU(127,"boolean"),e.qZA(),e.TgZ(128,"td"),e._uU(129,"false"),e.qZA(),e.TgZ(130,"td"),e._uU(131,"When present, it specifies that the element value cannot be altered."),e.qZA()(),e.TgZ(132,"tr")(133,"td"),e._uU(134,"readonly"),e.qZA(),e.TgZ(135,"td"),e._uU(136,"boolean"),e.qZA(),e.TgZ(137,"td"),e._uU(138,"false"),e.qZA(),e.TgZ(139,"td"),e._uU(140,"When present, it specifies that an input field is read-only."),e.qZA()(),e.TgZ(141,"tr")(142,"td"),e._uU(143,"name"),e.qZA(),e.TgZ(144,"td"),e._uU(145,"string"),e.qZA(),e.TgZ(146,"td"),e._uU(147,"null"),e.qZA(),e.TgZ(148,"td"),e._uU(149,"Name of the input field."),e.qZA()(),e.TgZ(150,"tr")(151,"td"),e._uU(152,"inputId"),e.qZA(),e.TgZ(153,"td"),e._uU(154,"string"),e.qZA(),e.TgZ(155,"td"),e._uU(156,"null"),e.qZA(),e.TgZ(157,"td"),e._uU(158,"Identifier of the focus input to match a label defined for the component."),e.qZA()(),e.TgZ(159,"tr")(160,"td"),e._uU(161,"required"),e.qZA(),e.TgZ(162,"td"),e._uU(163,"boolean"),e.qZA(),e.TgZ(164,"td"),e._uU(165,"false"),e.qZA(),e.TgZ(166,"td"),e._uU(167,"When present, it specifies that an input field must be filled out before submitting the form."),e.qZA()(),e.TgZ(168,"tr")(169,"td"),e._uU(170,"characterPattern"),e.qZA(),e.TgZ(171,"td"),e._uU(172,"string"),e.qZA(),e.TgZ(173,"td"),e._uU(174,"[A-Za-z]"),e.qZA(),e.TgZ(175,"td"),e._uU(176,"Regex pattern for alpha characters"),e.qZA()(),e.TgZ(177,"tr")(178,"td"),e._uU(179,"autoFocus"),e.qZA(),e.TgZ(180,"td"),e._uU(181,"boolean"),e.qZA(),e.TgZ(182,"td"),e._uU(183,"false"),e.qZA(),e.TgZ(184,"td"),e._uU(185,"When present, the input gets a focus automatically on load."),e.qZA()(),e.TgZ(186,"tr")(187,"td"),e._uU(188,"showClear"),e.qZA(),e.TgZ(189,"td"),e._uU(190,"boolean"),e.qZA(),e.TgZ(191,"td"),e._uU(192,"false"),e.qZA(),e.TgZ(193,"td"),e._uU(194,"When enabled, a clear icon is displayed to clear the value."),e.qZA()(),e.TgZ(195,"tr")(196,"td"),e._uU(197,"autocomplete"),e.qZA(),e.TgZ(198,"td"),e._uU(199,"string"),e.qZA(),e.TgZ(200,"td"),e._uU(201,"null"),e.qZA(),e.TgZ(202,"td"),e._uU(203,"Used to define a string that autocomplete attribute the current element."),e.qZA()(),e.TgZ(204,"tr")(205,"td"),e._uU(206,"ariaLabel"),e.qZA(),e.TgZ(207,"td"),e._uU(208,"string"),e.qZA(),e.TgZ(209,"td"),e._uU(210,"null"),e.qZA(),e.TgZ(211,"td"),e._uU(212,"Used to define a string that labels the input element."),e.qZA()(),e.TgZ(213,"tr")(214,"td"),e._uU(215,"ariaRequired"),e.qZA(),e.TgZ(216,"td"),e._uU(217,"boolean"),e.qZA(),e.TgZ(218,"td"),e._uU(219,"false"),e.qZA(),e.TgZ(220,"td"),e._uU(221,"Used to indicate that user input is required on an element before a form can be submitted."),e.qZA()(),e.TgZ(222,"tr")(223,"td"),e._uU(224,"title"),e.qZA(),e.TgZ(225,"td"),e._uU(226,"string"),e.qZA(),e.TgZ(227,"td"),e._uU(228,"null"),e.qZA(),e.TgZ(229,"td"),e._uU(230,"Title text of the input text."),e.qZA()()()()()()),2&n&&(e.xp6(1),e.Q6J("title",o.title)("id",o.id))},dependencies:[s.c],encapsulation:2}),t})(),J=(()=>{class t{constructor(){this.code={basic:'\n<p-inputMask mask="99-999999" [(ngModel)]="value" placeholder="99-999999"></p-inputMask>',html:'\n<div class="card flex justify-content-center">\n    <p-inputMask mask="99-999999" [(ngModel)]="value" placeholder="99-999999"></p-inputMask>\n</div>',typescript:"\nimport { Component, OnInit } from '@angular/core';\nimport { FormControl, FormGroup } from '@angular/forms';\n\n@Component({\n    selector: 'input-mask-reactive-forms-demo',\n    templateUrl: './input-mask-reactive-forms-demo.html'\n})\nexport class InputMaskReactiveFormsDemo implements OnInit {\n    formGroup: FormGroup;\n\n    ngOnInit() {\n        this.formGroup = new FormGroup({\n            value: new FormControl<string | null>(null)\n        });\n    }\n}"}}ngOnInit(){this.formGroup=new l.cw({value:new l.NI(null)})}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["reactive-forms-doc"]],inputs:{id:"id",title:"title"},decls:11,vars:4,consts:[[3,"title","id"],[1,"card","flex","justify-content-center"],[3,"formGroup"],["mask","99-999999","formControlName","value","placeholder","99-999999"],["selector","input-mask-reactive-forms-demo",3,"code"]],template:function(n,o){1&n&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"InputMask can also be used with reactive forms. In this case, the "),e.TgZ(4,"i"),e._uU(5,"formControlName"),e.qZA(),e._uU(6," property is used to bind the component to a form control."),e.qZA()(),e.TgZ(7,"div",1)(8,"form",2),e._UZ(9,"p-inputMask",3),e.qZA()(),e._UZ(10,"app-code",4),e.qZA()),2&n&&(e.xp6(1),e.Q6J("title",o.title)("id",o.id),e.xp6(7),e.Q6J("formGroup",o.formGroup),e.xp6(2),e.Q6J("code",o.code))},dependencies:[l._Y,l.JJ,l.JL,l.sg,l.u,c.vy,p.h,s.c],encapsulation:2}),t})(),x=(()=>{class t{constructor(){this.code={basic:'\n<p-inputMask [(ngModel)]="value" mask="99/99/9999" placeholder="99/99/9999" slotChar="mm/dd/yyyy"></p-inputMask>',html:'\n<div class="card flex justify-content-center">\n    <p-inputMask [(ngModel)]="value" mask="99/99/9999" placeholder="99/99/9999" slotChar="mm/dd/yyyy"></p-inputMask>\n</div>',typescript:"\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'input-mask-slot-char-demo',\n    templateUrl: './input-mask-slot-char-demo.html'\n})\nexport class InputMaskSlotCharDemo {\n    value: string;\n}"}}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["slot-char-doc"]],inputs:{id:"id",title:"title"},decls:10,vars:4,consts:[[3,"title","id"],[1,"card","flex","justify-content-center"],["mask","99/99/9999","placeholder","99/99/9999","slotChar","mm/dd/yyyy",3,"ngModel","ngModelChange"],["selector","input-mask-slot-char-demo",3,"code"]],template:function(n,o){1&n&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"Default placeholder for a mask is underscore that can be customized using "),e.TgZ(4,"i"),e._uU(5,"slotChar"),e.qZA(),e._uU(6," property."),e.qZA()(),e.TgZ(7,"div",1)(8,"p-inputMask",2),e.NdJ("ngModelChange",function(i){return o.value=i}),e.qZA()(),e._UZ(9,"app-code",3),e.qZA()),2&n&&(e.xp6(1),e.Q6J("title",o.title)("id",o.id),e.xp6(7),e.Q6J("ngModel",o.value),e.xp6(1),e.Q6J("code",o.code))},dependencies:[l.JJ,l.On,c.vy,p.h,s.c],encapsulation:2}),t})();const I=function(){return["/inputtext"]},F=function(){return["/theming"]};let S=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["style-doc"]],inputs:{id:"id",title:"title"},decls:10,vars:6,consts:[[3,"title","id"],["href","#",3,"routerLink"]],template:function(n,o){1&n&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"Styling is same as "),e.TgZ(4,"a",1),e._uU(5,"inputtext component"),e.qZA(),e._uU(6,", for theming classes visit "),e.TgZ(7,"a",1),e._uU(8,"theming page"),e.qZA(),e._uU(9,"."),e.qZA()()()),2&n&&(e.xp6(1),e.Q6J("title",o.title)("id",o.id),e.xp6(3),e.Q6J("routerLink",e.DdM(4,I)),e.xp6(3),e.Q6J("routerLink",e.DdM(5,F)))},dependencies:[r.rH,s.c],encapsulation:2}),t})();var w=d(3408);let Q=(()=>{class t{constructor(){this.docs=[{id:"import",label:"Import",component:v},{id:"basic",label:"Basic",component:T},{id:"reactive-forms",label:"Reactive Forms",component:J},{id:"mask",label:"Mask",component:b},{id:"slotchar",label:"Slot Char",component:x},{id:"optional",label:"Optional",component:D},{id:"floatlabel",label:"FloatLabel",component:M},{id:"disabled",label:"Disabled",component:A},{id:"invalid",label:"Invalid",component:q},{id:"style",label:"Style",component:S},{id:"accessibility",label:"Accessibility",component:U}],this.apiDocs=[{id:"properties",label:"Properties",component:C},{id:"events",label:"Events",component:k},{id:"methods",label:"Methods",component:y}]}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:1,vars:2,consts:[["title","Angular InputMask Component","header","InputMask","description","InputMask component is used to enter input in a certain format such as numeric, date, currency and phone.",3,"docs","apiDocs"]],template:function(n,o){1&n&&e._UZ(0,"app-doc",0),2&n&&e.Q6J("docs",o.docs)("apiDocs",o.apiDocs)},dependencies:[w.x],encapsulation:2}),t})(),N=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[r.Bz.forChild([{path:"",component:Q}]),r.Bz]}),t})(),B=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[Z.ez,N,h]}),t})()}}]);