"use strict";(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[524],{6544:(T,r,a)=>{a.d(r,{N:()=>g});var c=a(1571);const u=["*"];let g=(()=>{class d{}return d.\u0275fac=function(p){return new(p||d)},d.\u0275cmp=c.Xpm({type:d,selectors:[["app-developmentsection"]],ngContentSelectors:u,decls:4,vars:0,consts:[[1,"flex","align-items-center","line-height-3","bg-primary-600","text-white","p-3","text-lg","border-round","mb-3"],[1,"pi","pi-info-circle","text-lg","text-white","mr-2"]],template:function(p,s){1&p&&(c.F$t(),c.TgZ(0,"div",0),c._UZ(1,"i",1),c._uU(2," Accessibility guide documents the specification of this component based on WCAG guidelines, the implementation is in progress.\n"),c.qZA(),c.Hsn(3))},encapsulation:2}),d})()},524:(T,r,a)=>{a.r(r),a.d(r,{TabMenuDemoModule:()=>N});var c=a(6895),u=a(359),g=a(5726),d=a(1928),Z=a(3421),p=a(4369),s=a(9768),e=a(1571);let b=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.ez,s.a,u.Bz,g.i,d.hJ,Z.T,p.V,p.V]}),t})();var m=a(7248),A=a(2863),U=a(4174),l=a(4802);let h=(()=>{class t{constructor(){this.code={basic:'\n<button type="button" pButton pRipple label="Activate Last" (click)="activateLast()" class="mb-3"></button>\n<p-tabMenu [model]="items" [activeItem]="activeItem" (activeItemChange)="onActiveItemChange($event)"></p-tabMenu>',html:'\n<div class="card">\n    <button type="button" pButton pRipple label="Activate Last" (click)="activateLast()" class="mb-3"></button>\n    <p-tabMenu [model]="items" [activeItem]="activeItem" (activeItemChange)="onActiveItemChange($event)"></p-tabMenu>\n</div>',typescript:"\nimport { Component, OnInit } from '@angular/core';\nimport { MenuItem } from 'primeng/api';\n\n@Component({\n    selector: 'tab-menu-controlled-demo',\n    templateUrl: './tab-menu-controlled-demo.html'\n})\nexport class TabMenuControlledDemo implements OnInit {\n    items: MenuItem[];\n\n    activeItem: MenuItem;\n\n    ngOnInit() {\n        this.items = [\n            { label: 'Home', icon: 'pi pi-fw pi-home' },\n            { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },\n            { label: 'Edit', icon: 'pi pi-fw pi-pencil' },\n            { label: 'Documentation', icon: 'pi pi-fw pi-file' },\n            { label: 'Settings', icon: 'pi pi-fw pi-cog' }\n        ];\n\n        this.activeItem = this.items[0];\n    }\n\n    onActiveItemChange(event){\n        this.activeItem = event;\n    }\n\n    activateLast() {\n        this.activeItem = this.items[this.items.length - 1];\n    }\n}",module:"\nimport { CommonModule } from '@angular/common';\nimport { NgModule } from '@angular/core';\nimport { TabMenuModule } from 'primeng/tabmenu';\nimport { TabMenuModule } from 'primeng/tabmenu';\nimport { ButtonModule } from 'primeng/button';\nimport { RippleModule } from 'primeng/ripple';\nimport { TabMenuDemo } from './tabmenudemo';\n\n@NgModule({\n    imports: [CommonModule, TabMenuModule, ButtonModule, RippleModule],\n    declarations: [TabMenuDemo]\n})\nexport class TabMenuDemoModule {}"}}ngOnInit(){this.items=[{label:"Home",icon:"pi pi-fw pi-home"},{label:"Calendar",icon:"pi pi-fw pi-calendar"},{label:"Edit",icon:"pi pi-fw pi-pencil"},{label:"Documentation",icon:"pi pi-fw pi-file"},{label:"Settings",icon:"pi pi-fw pi-cog"}],this.activeItem=this.items[0]}onActiveItemChange(i){this.activeItem=i}activateLast(){this.activeItem=this.items[this.items.length-1]}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["controlled-doc"]],inputs:{id:"id",title:"title"},decls:14,vars:5,consts:[[3,"title","id"],[1,"card"],["type","button","pButton","","pRipple","","label","Activate Last",1,"mb-3",3,"click"],[3,"model","activeItem","activeItemChange"],["selector","tab-menu-controlled-demo",3,"code"]],template:function(i,o){1&i&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"For controlled mode, use "),e.TgZ(4,"i"),e._uU(5,"activeItem"),e.qZA(),e._uU(6," property along with "),e.TgZ(7,"i"),e._uU(8,"activeItemChange"),e.qZA(),e._uU(9," event are needed to manage the active item."),e.qZA()(),e.TgZ(10,"div",1)(11,"button",2),e.NdJ("click",function(){return o.activateLast()}),e.qZA(),e.TgZ(12,"p-tabMenu",3),e.NdJ("activeItemChange",function(P){return o.onActiveItemChange(P)}),e.qZA()(),e._UZ(13,"app-code",4),e.qZA()),2&i&&(e.xp6(1),e.Q6J("title",o.title)("id",o.id),e.xp6(11),e.Q6J("model",o.items)("activeItem",o.activeItem),e.xp6(1),e.Q6J("code",o.code))},dependencies:[s.h,m.d,A.Hq,U.H,l.c],encapsulation:2}),t})(),_=(()=>{class t{constructor(){this.code={basic:'\n<p-tabMenu [model]="items" [activeItem]="activeItem"></p-tabMenu>',html:'\n<div class="card">\n    <p-tabMenu [model]="items" [activeItem]="activeItem"></p-tabMenu>\n</div>',typescript:"\nimport { Component, OnInit } from '@angular/core';\nimport { MenuItem } from 'primeng/api';\n\n@Component({\n    selector: 'tab-menu-active-demo',\n    templateUrl: './tab-menu-active-demo.html'\n})\nexport class TabMenuActiveDemo implements OnInit {\n    items: MenuItem[];\n\n    activeItem: MenuItem;\n\n    ngOnInit() {\n        this.items = [\n            { label: 'Home', icon: 'pi pi-fw pi-home' },\n            { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },\n            { label: 'Edit', icon: 'pi pi-fw pi-pencil' },\n            { label: 'Documentation', icon: 'pi pi-fw pi-file' },\n            { label: 'Settings', icon: 'pi pi-fw pi-cog' }\n        ];\n\n        this.activeItem = this.items[0];\n    }\n}"}}ngOnInit(){this.items=[{label:"Home",icon:"pi pi-fw pi-home"},{label:"Calendar",icon:"pi pi-fw pi-calendar"},{label:"Edit",icon:"pi pi-fw pi-pencil"},{label:"Documentation",icon:"pi pi-fw pi-file"},{label:"Settings",icon:"pi pi-fw pi-cog"}],this.activeItem=this.items[0]}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["active-doc"]],inputs:{id:"id",title:"title"},decls:10,vars:5,consts:[[3,"title","id"],[1,"card"],[3,"model","activeItem"],["selector","tab-menu-active-demo",3,"code"]],template:function(i,o){1&i&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"By default item that matches the active route is highlighted, alternatively "),e.TgZ(4,"i"),e._uU(5,"activeItem"),e.qZA(),e._uU(6," property can be used choose the initial active item."),e.qZA()(),e.TgZ(7,"div",1),e._UZ(8,"p-tabMenu",2),e.qZA(),e._UZ(9,"app-code",3),e.qZA()),2&i&&(e.xp6(1),e.Q6J("title",o.title)("id",o.id),e.xp6(7),e.Q6J("model",o.items)("activeItem",o.activeItem),e.xp6(1),e.Q6J("code",o.code))},dependencies:[s.h,m.d,l.c],encapsulation:2}),t})(),f=(()=>{class t{constructor(){this.code={basic:'\n<p-tabMenu [model]="items"></p-tabMenu>',html:'\n<div class="card">\n    <p-tabMenu [model]="items"></p-tabMenu>\n</div>',typescript:"\nimport { Component, OnInit } from '@angular/core';\nimport { MenuItem } from 'primeng/api';\n\n@Component({\n    selector: 'tab-menu-basic-demo',\n    templateUrl: './tab-menu-basic-demo.html'\n})\nexport class TabMenuBasicDemo implements OnInit {\n    items: MenuItem[];\n\n    ngOnInit() {\n        this.items = [\n            { label: 'Home', icon: 'pi pi-fw pi-home' },\n            { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },\n            { label: 'Edit', icon: 'pi pi-fw pi-pencil' },\n            { label: 'Documentation', icon: 'pi pi-fw pi-file' },\n            { label: 'Settings', icon: 'pi pi-fw pi-cog' }\n        ];\n    }\n}"}}ngOnInit(){this.items=[{label:"Home",icon:"pi pi-fw pi-home"},{label:"Calendar",icon:"pi pi-fw pi-calendar"},{label:"Edit",icon:"pi pi-fw pi-pencil"},{label:"Documentation",icon:"pi pi-fw pi-file"},{label:"Settings",icon:"pi pi-fw pi-cog"}]}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["basic-doc"]],inputs:{id:"id",title:"title"},decls:7,vars:4,consts:[[3,"title","id"],[1,"card"],[3,"model"],["selector","tab-menu-basic-demo",3,"code"]],template:function(i,o){1&i&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"TabMenu requires a collection of menuitems as its model."),e.qZA()(),e.TgZ(4,"div",1),e._UZ(5,"p-tabMenu",2),e.qZA(),e._UZ(6,"app-code",3),e.qZA()),2&i&&(e.xp6(1),e.Q6J("title",o.title)("id",o.id),e.xp6(4),e.Q6J("model",o.items),e.xp6(1),e.Q6J("code",o.code))},dependencies:[s.h,m.d,l.c],encapsulation:2}),t})();const q=function(){return["/theming"]};let v=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["events-doc"]],inputs:{id:"id",title:"title"},decls:25,vars:4,consts:[[3,"title","id"],["href","#",3,"routerLink"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(i,o){1&i&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"Following is the list of structural style classes, for theming classes visit "),e.TgZ(4,"a",1),e._uU(5,"theming"),e.qZA(),e._uU(6," page."),e.qZA()(),e.TgZ(7,"div",2)(8,"table",3)(9,"thead")(10,"tr")(11,"th"),e._uU(12,"Name"),e.qZA(),e.TgZ(13,"th"),e._uU(14,"Parameters"),e.qZA(),e.TgZ(15,"th"),e._uU(16,"Description"),e.qZA()()(),e.TgZ(17,"tbody")(18,"tr")(19,"td"),e._uU(20,"activeItemChange"),e.qZA(),e.TgZ(21,"td"),e._uU(22,"item: Newly selected MenuItem"),e.qZA(),e.TgZ(23,"td"),e._uU(24,"Event fired when a tab is selected."),e.qZA()()()()()()),2&i&&(e.xp6(1),e.Q6J("title",o.title)("id",o.id),e.xp6(3),e.Q6J("routerLink",e.DdM(3,q)))},dependencies:[u.rH,l.c],encapsulation:2}),t})(),M=(()=>{class t{constructor(){this.code={typescript:"import { TabMenuModule } from 'primeng/tabmenu';"}}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["import-doc"]],inputs:{id:"id",title:"title"},decls:3,vars:4,consts:[[3,"title","id"],[3,"code","hideToggleCode"]],template:function(i,o){1&i&&(e.TgZ(0,"section"),e._UZ(1,"app-docsectiontext",0)(2,"app-code",1),e.qZA()),2&i&&(e.xp6(1),e.Q6J("title",o.title)("id",o.id),e.xp6(1),e.Q6J("code",o.code)("hideToggleCode",!0))},dependencies:[s.h,l.c],encapsulation:2}),t})(),I=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["menuitem-doc"]],inputs:{id:"id",title:"title"},decls:292,vars:2,consts:[[3,"title","id"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(i,o){1&i&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"MenuItem provides the following properties. Note that not all of them may be utilized by the tabmenu component."),e.qZA()(),e.TgZ(4,"div",1)(5,"table",2)(6,"thead")(7,"tr")(8,"th"),e._uU(9,"Name"),e.qZA(),e.TgZ(10,"th"),e._uU(11,"Type"),e.qZA(),e.TgZ(12,"th"),e._uU(13,"Default"),e.qZA(),e.TgZ(14,"th"),e._uU(15,"Description"),e.qZA()()(),e.TgZ(16,"tbody")(17,"tr")(18,"td"),e._uU(19,"id"),e.qZA(),e.TgZ(20,"td"),e._uU(21,"string"),e.qZA(),e.TgZ(22,"td"),e._uU(23,"null"),e.qZA(),e.TgZ(24,"td"),e._uU(25,"Identifier of the element."),e.qZA()(),e.TgZ(26,"tr")(27,"td"),e._uU(28,"label"),e.qZA(),e.TgZ(29,"td"),e._uU(30,"string"),e.qZA(),e.TgZ(31,"td"),e._uU(32,"null"),e.qZA(),e.TgZ(33,"td"),e._uU(34,"Text of the item."),e.qZA()(),e.TgZ(35,"tr")(36,"td"),e._uU(37,"icon"),e.qZA(),e.TgZ(38,"td"),e._uU(39,"string"),e.qZA(),e.TgZ(40,"td"),e._uU(41,"null"),e.qZA(),e.TgZ(42,"td"),e._uU(43,"Icon of the item."),e.qZA()(),e.TgZ(44,"tr")(45,"td"),e._uU(46,"iconStyle"),e.qZA(),e.TgZ(47,"td"),e._uU(48,"object"),e.qZA(),e.TgZ(49,"td"),e._uU(50,"null"),e.qZA(),e.TgZ(51,"td"),e._uU(52,"Inline style of the item's icon."),e.qZA()(),e.TgZ(53,"tr")(54,"td"),e._uU(55,"command"),e.qZA(),e.TgZ(56,"td"),e._uU(57,"function"),e.qZA(),e.TgZ(58,"td"),e._uU(59,"null"),e.qZA(),e.TgZ(60,"td"),e._uU(61,"Callback to execute when item is clicked."),e.qZA()(),e.TgZ(62,"tr")(63,"td"),e._uU(64,"url"),e.qZA(),e.TgZ(65,"td"),e._uU(66,"string"),e.qZA(),e.TgZ(67,"td"),e._uU(68,"null"),e.qZA(),e.TgZ(69,"td"),e._uU(70,"External link to navigate when item is clicked."),e.qZA()(),e.TgZ(71,"tr")(72,"td"),e._uU(73,"routerLink"),e.qZA(),e.TgZ(74,"td"),e._uU(75,"array"),e.qZA(),e.TgZ(76,"td"),e._uU(77,"null"),e.qZA(),e.TgZ(78,"td"),e._uU(79,"RouterLink definition for internal navigation."),e.qZA()(),e.TgZ(80,"tr")(81,"td"),e._uU(82,"routerLinkActiveOptions"),e.qZA(),e.TgZ(83,"td"),e._uU(84,"object"),e.qZA(),e.TgZ(85,"td"),e._uU(86,"null"),e.qZA(),e.TgZ(87,"td"),e._uU(88,"Configuration for active router link."),e.qZA()(),e.TgZ(89,"tr")(90,"td"),e._uU(91,"queryParams"),e.qZA(),e.TgZ(92,"td"),e._uU(93,"object"),e.qZA(),e.TgZ(94,"td"),e._uU(95,"null"),e.qZA(),e.TgZ(96,"td"),e._uU(97,"Query parameters for internal navigation via routerLink."),e.qZA()(),e.TgZ(98,"tr")(99,"td"),e._uU(100,"fragment"),e.qZA(),e.TgZ(101,"td"),e._uU(102,"string"),e.qZA(),e.TgZ(103,"td"),e._uU(104,"null"),e.qZA(),e.TgZ(105,"td"),e._uU(106,"Sets the hash fragment for the URL."),e.qZA()(),e.TgZ(107,"tr")(108,"td"),e._uU(109,"queryParamsHandling"),e.qZA(),e.TgZ(110,"td"),e._uU(111,"QueryParamsHandling"),e.qZA(),e.TgZ(112,"td"),e._uU(113,"null"),e.qZA(),e.TgZ(114,"td"),e._uU(115," How to handle query parameters in the router link for the next navigation. One of:"),e._UZ(116,"br")(117,"br"),e._uU(118," merge : Merge new with current parameters."),e._UZ(119,"br"),e._uU(120," preserve : Preserve current parameters.k. "),e.qZA()(),e.TgZ(121,"tr")(122,"td"),e._uU(123,"preserveFragment"),e.qZA(),e.TgZ(124,"td"),e._uU(125,"boolean"),e.qZA(),e.TgZ(126,"td"),e._uU(127,"false"),e.qZA(),e.TgZ(128,"td"),e._uU(129,"When true, preserves the URL fragment for the next navigation."),e.qZA()(),e.TgZ(130,"tr")(131,"td"),e._uU(132,"skipLocationChange"),e.qZA(),e.TgZ(133,"td"),e._uU(134,"boolean"),e.qZA(),e.TgZ(135,"td"),e._uU(136,"null"),e.qZA(),e.TgZ(137,"td"),e._uU(138,"When true, navigates without pushing a new state into history."),e.qZA()(),e.TgZ(139,"tr")(140,"td"),e._uU(141,"replaceUrl"),e.qZA(),e.TgZ(142,"td"),e._uU(143,"boolean"),e.qZA(),e.TgZ(144,"td"),e._uU(145,"null"),e.qZA(),e.TgZ(146,"td"),e._uU(147,"When true, navigates while replacing the current state in history."),e.qZA()(),e.TgZ(148,"tr")(149,"td"),e._uU(150,"state"),e.qZA(),e.TgZ(151,"td"),e._uU(152,"object"),e.qZA(),e.TgZ(153,"td"),e._uU(154,"null"),e.qZA(),e.TgZ(155,"td"),e._uU(156,"Developer-defined state that can be passed to any navigation."),e.qZA()(),e.TgZ(157,"tr")(158,"td"),e._uU(159,"items"),e.qZA(),e.TgZ(160,"td"),e._uU(161,"array"),e.qZA(),e.TgZ(162,"td"),e._uU(163,"null"),e.qZA(),e.TgZ(164,"td"),e._uU(165,"An array of children menuitems."),e.qZA()(),e.TgZ(166,"tr")(167,"td"),e._uU(168,"expanded"),e.qZA(),e.TgZ(169,"td"),e._uU(170,"boolean"),e.qZA(),e.TgZ(171,"td"),e._uU(172,"false"),e.qZA(),e.TgZ(173,"td"),e._uU(174,"Visibility of submenu."),e.qZA()(),e.TgZ(175,"tr")(176,"td"),e._uU(177,"disabled"),e.qZA(),e.TgZ(178,"td"),e._uU(179,"boolean"),e.qZA(),e.TgZ(180,"td"),e._uU(181,"false"),e.qZA(),e.TgZ(182,"td"),e._uU(183,"When set as true, disables the menuitem."),e.qZA()(),e.TgZ(184,"tr")(185,"td"),e._uU(186,"visible"),e.qZA(),e.TgZ(187,"td"),e._uU(188,"boolean"),e.qZA(),e.TgZ(189,"td"),e._uU(190,"true"),e.qZA(),e.TgZ(191,"td"),e._uU(192,"Whether the dom element of menuitem is created or not."),e.qZA()(),e.TgZ(193,"tr")(194,"td"),e._uU(195,"target"),e.qZA(),e.TgZ(196,"td"),e._uU(197,"string"),e.qZA(),e.TgZ(198,"td"),e._uU(199,"null"),e.qZA(),e.TgZ(200,"td"),e._uU(201,"Specifies where to open the linked document."),e.qZA()(),e.TgZ(202,"tr")(203,"td"),e._uU(204,"escape"),e.qZA(),e.TgZ(205,"td"),e._uU(206,"boolean"),e.qZA(),e.TgZ(207,"td"),e._uU(208,"true"),e.qZA(),e.TgZ(209,"td"),e._uU(210,"Whether to escape the label or not. Set to false to display html content."),e.qZA()(),e.TgZ(211,"tr")(212,"td"),e._uU(213,"separator"),e.qZA(),e.TgZ(214,"td"),e._uU(215,"boolean"),e.qZA(),e.TgZ(216,"td"),e._uU(217,"false"),e.qZA(),e.TgZ(218,"td"),e._uU(219,"Defines the item as a separator."),e.qZA()(),e.TgZ(220,"tr")(221,"td"),e._uU(222,"style"),e.qZA(),e.TgZ(223,"td"),e._uU(224,"object"),e.qZA(),e.TgZ(225,"td"),e._uU(226,"null"),e.qZA(),e.TgZ(227,"td"),e._uU(228,"Inline style of the menuitem."),e.qZA()(),e.TgZ(229,"tr")(230,"td"),e._uU(231,"styleClass"),e.qZA(),e.TgZ(232,"td"),e._uU(233,"string"),e.qZA(),e.TgZ(234,"td"),e._uU(235,"null"),e.qZA(),e.TgZ(236,"td"),e._uU(237,"Style class of the menuitem."),e.qZA()(),e.TgZ(238,"tr")(239,"td"),e._uU(240,"badge"),e.qZA(),e.TgZ(241,"td"),e._uU(242,"string"),e.qZA(),e.TgZ(243,"td"),e._uU(244,"null"),e.qZA(),e.TgZ(245,"td"),e._uU(246,"Value of the badge."),e.qZA()(),e.TgZ(247,"tr")(248,"td"),e._uU(249,"badgeStyleClass"),e.qZA(),e.TgZ(250,"td"),e._uU(251,"string"),e.qZA(),e.TgZ(252,"td"),e._uU(253,"null"),e.qZA(),e.TgZ(254,"td"),e._uU(255,"Style class of the badge."),e.qZA()(),e.TgZ(256,"tr")(257,"td"),e._uU(258,"title"),e.qZA(),e.TgZ(259,"td"),e._uU(260,"string"),e.qZA(),e.TgZ(261,"td"),e._uU(262,"null"),e.qZA(),e.TgZ(263,"td"),e._uU(264,"Tooltip text of the item."),e.qZA()(),e.TgZ(265,"tr")(266,"td"),e._uU(267,"automationId"),e.qZA(),e.TgZ(268,"td"),e._uU(269,"any"),e.qZA(),e.TgZ(270,"td"),e._uU(271,"null"),e.qZA(),e.TgZ(272,"td"),e._uU(273,"Value of HTML data-* attribute."),e.qZA()(),e.TgZ(274,"tr")(275,"td"),e._uU(276,"tabindex"),e.qZA(),e.TgZ(277,"td"),e._uU(278,"string"),e.qZA(),e.TgZ(279,"td"),e._uU(280,"0"),e.qZA(),e.TgZ(281,"td"),e._uU(282,"Specifies tab order of the item."),e.qZA()(),e.TgZ(283,"tr")(284,"td"),e._uU(285,"tooltipOptions"),e.qZA(),e.TgZ(286,"td"),e._uU(287,"TooltipOptions"),e.qZA(),e.TgZ(288,"td"),e._uU(289,"-"),e.qZA(),e.TgZ(290,"td"),e._uU(291,"Options of the item's tooltip."),e.qZA()()()()()()),2&i&&(e.xp6(1),e.Q6J("title",o.title)("id",o.id))},dependencies:[l.c],encapsulation:2}),t})(),y=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["props-doc"]],inputs:{id:"id",title:"title"},decls:60,vars:2,consts:[[3,"title","id"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(i,o){1&i&&(e.TgZ(0,"section"),e._UZ(1,"app-docsectiontext",0),e.TgZ(2,"div",1)(3,"table",2)(4,"thead")(5,"tr")(6,"th"),e._uU(7,"Name"),e.qZA(),e.TgZ(8,"th"),e._uU(9,"Type"),e.qZA(),e.TgZ(10,"th"),e._uU(11,"Default"),e.qZA(),e.TgZ(12,"th"),e._uU(13,"Description"),e.qZA()()(),e.TgZ(14,"tbody")(15,"tr")(16,"td"),e._uU(17,"model"),e.qZA(),e.TgZ(18,"td"),e._uU(19,"array"),e.qZA(),e.TgZ(20,"td"),e._uU(21,"null"),e.qZA(),e.TgZ(22,"td"),e._uU(23,"An array of menuitems."),e.qZA()(),e.TgZ(24,"tr")(25,"td"),e._uU(26,"activeItem"),e.qZA(),e.TgZ(27,"td"),e._uU(28,"MenuItem"),e.qZA(),e.TgZ(29,"td"),e._uU(30,"null"),e.qZA(),e.TgZ(31,"td"),e._uU(32,"Defines the default active menuitem"),e.qZA()(),e.TgZ(33,"tr")(34,"td"),e._uU(35,"style"),e.qZA(),e.TgZ(36,"td"),e._uU(37,"string"),e.qZA(),e.TgZ(38,"td"),e._uU(39,"null"),e.qZA(),e.TgZ(40,"td"),e._uU(41,"Inline style of the component."),e.qZA()(),e.TgZ(42,"tr")(43,"td"),e._uU(44,"styleClass"),e.qZA(),e.TgZ(45,"td"),e._uU(46,"string"),e.qZA(),e.TgZ(47,"td"),e._uU(48,"null"),e.qZA(),e.TgZ(49,"td"),e._uU(50,"Style class of the component."),e.qZA()(),e.TgZ(51,"tr")(52,"td"),e._uU(53,"scrollable"),e.qZA(),e.TgZ(54,"td"),e._uU(55,"boolean"),e.qZA(),e.TgZ(56,"td"),e._uU(57,"false"),e.qZA(),e.TgZ(58,"td"),e._uU(59,"When enabled displays buttons at each side of the tab headers to scroll the tab list."),e.qZA()()()()()()),2&i&&(e.xp6(1),e.Q6J("title",o.title)("id",o.id))},dependencies:[l.c],encapsulation:2}),t})();const D=function(){return["/theming"]};let w=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["style-doc"]],inputs:{id:"id",title:"title"},decls:46,vars:4,consts:[[3,"title","id"],["href","#",3,"routerLink"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(i,o){1&i&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"Following is the list of structural style classes, for theming classes visit "),e.TgZ(4,"a",1),e._uU(5,"theming"),e.qZA(),e._uU(6," page."),e.qZA()(),e.TgZ(7,"div",2)(8,"table",3)(9,"thead")(10,"tr")(11,"th"),e._uU(12,"Name"),e.qZA(),e.TgZ(13,"th"),e._uU(14,"Element"),e.qZA()()(),e.TgZ(15,"tbody")(16,"tr")(17,"td"),e._uU(18,"p-tabmenu"),e.qZA(),e.TgZ(19,"td"),e._uU(20,"Container element."),e.qZA()(),e.TgZ(21,"tr")(22,"td"),e._uU(23,"p-tabmenu-nav"),e.qZA(),e.TgZ(24,"td"),e._uU(25,"List element of headers."),e.qZA()(),e.TgZ(26,"tr")(27,"td"),e._uU(28,"p-tabmenuitem"),e.qZA(),e.TgZ(29,"td"),e._uU(30,"Menuitem element."),e.qZA()(),e.TgZ(31,"tr")(32,"td"),e._uU(33,"p-menuitem-link"),e.qZA(),e.TgZ(34,"td"),e._uU(35,"Link inside a menuitem."),e.qZA()(),e.TgZ(36,"tr")(37,"td"),e._uU(38,"p-menuitem-text"),e.qZA(),e.TgZ(39,"td"),e._uU(40,"Label of a menuitem."),e.qZA()(),e.TgZ(41,"tr")(42,"td"),e._uU(43,"p-menuitem-icon"),e.qZA(),e.TgZ(44,"td"),e._uU(45,"Icon of a menuitem."),e.qZA()()()()()()),2&i&&(e.xp6(1),e.Q6J("title",o.title)("id",o.id),e.xp6(3),e.Q6J("routerLink",e.DdM(3,D)))},dependencies:[u.rH,l.c],encapsulation:2}),t})(),C=(()=>{class t{constructor(){this.code={basic:'\n<p-tabMenu [scrollable]="true" [model]="items" [activeItem]="activeItem"></p-tabMenu>',html:'\n<div class="card">\n    <p-tabMenu [scrollable]="true" [model]="items" [activeItem]="activeItem"></p-tabMenu>\n</div>',typescript:"\nimport { Component, OnInit } from '@angular/core';\nimport { MenuItem } from 'primeng/api';\n\n@Component({\n    selector: 'tab-menu-scrollable-demo',\n    templateUrl: './tab-menu-scrollable-demo.html'\n})\nexport class TabMenuScrollableDemo implements OnInit {\n    items: MenuItem[];\n\n    activeItem: MenuItem;\n\n    ngOnInit() {\n        this.items = Array.from({ length: 50 }, (_, i) => ({ label: `Tab ${i + 1}`}));\n        this.activeItem = this.items[0];\n    }\n}",module:"\nimport { CommonModule } from '@angular/common';\nimport { NgModule } from '@angular/core';\nimport { TabMenuModule } from 'primeng/tabmenu';\nimport { TabMenuDemo } from './tabmenudemo';\n\n@NgModule({\n    imports: [CommonModule, TabMenuModule],\n    declarations: [TabMenuDemo]\n})\nexport class TabMenuDemoModule {}"}}ngOnInit(){this.items=Array.from({length:50},(i,o)=>({label:`Tab ${o+1}`})),this.activeItem=this.items[0]}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["scrollable-doc"]],inputs:{id:"id",title:"title"},decls:13,vars:6,consts:[[3,"title","id"],[1,"card"],[3,"scrollable","model","activeItem"],["selector","tab-menu-scrollable-demo",3,"code"]],template:function(i,o){1&i&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"Setting "),e.TgZ(4,"i"),e._uU(5,"scrollable"),e.qZA(),e._uU(6," property to "),e.TgZ(7,"i"),e._uU(8,"true"),e.qZA(),e._uU(9," enables scrolling if content overflows."),e.qZA()(),e.TgZ(10,"div",1),e._UZ(11,"p-tabMenu",2),e.qZA(),e._UZ(12,"app-code",3),e.qZA()),2&i&&(e.xp6(1),e.Q6J("title",o.title)("id",o.id),e.xp6(10),e.Q6J("scrollable",!0)("model",o.items)("activeItem",o.activeItem),e.xp6(1),e.Q6J("code",o.code))},dependencies:[s.h,m.d,l.c],encapsulation:2}),t})();var x=a(485);function S(t,n){1&t&&e._uU(0),2&t&&e.AsE(" ",n.index," - Custom ",n.$implicit.label," ")}let J=(()=>{class t{constructor(){this.code={basic:'\n<p-tabMenu [model]="items" [activeItem]="activeItem">\n    <ng-template pTemplate="item" let-item let-i="index">\n        {{i}} - Custom {{item.label}}\n    </ng-template>\n</p-tabMenu>',html:'\n<div class="card">\n    <p-tabMenu [model]="items" [activeItem]="activeItem">\n        <ng-template pTemplate="item" let-item let-i="index">\n            {{i}} - Custom {{item.label}}\n        </ng-template>\n    </p-tabMenu>\n</div>',typescript:"\nimport { Component, OnInit } from '@angular/core';\nimport { MenuItem } from 'primeng/api';\n\n@Component({\n    selector: 'tab-menu-template-demo',\n    templateUrl: './tab-menu-template-demo.html'\n})\nexport class TabMenuTemplateDemo implements OnInit {\n    items: MenuItem[];\n\n    activeItem: MenuItem;\n\n    ngOnInit() {\n        this.items = [\n            { label: 'Home', icon: 'pi pi-fw pi-home' },\n            { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },\n            { label: 'Edit', icon: 'pi pi-fw pi-pencil' },\n            { label: 'Documentation', icon: 'pi pi-fw pi-file' },\n            { label: 'Settings', icon: 'pi pi-fw pi-cog' }\n        ];\n\n        this.activeItem = this.items[0];\n    }\n}",module:"\nimport { CommonModule } from '@angular/common';\nimport { NgModule } from '@angular/core';\nimport { TabMenuModule } from 'primeng/tabmenu';\nimport { TabMenuDemo } from './tabmenudemo';\n\n@NgModule({\n    imports: [CommonModule, TabMenuModule],\n    declarations: [TabMenuDemo]\n})\nexport class TabMenuDemoModule {}"}}ngOnInit(){this.items=[{label:"Home",icon:"pi pi-fw pi-home"},{label:"Calendar",icon:"pi pi-fw pi-calendar"},{label:"Edit",icon:"pi pi-fw pi-pencil"},{label:"Documentation",icon:"pi pi-fw pi-file"},{label:"Settings",icon:"pi pi-fw pi-cog"}],this.activeItem=this.items[0]}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["tab-menu-template-demo"]],inputs:{id:"id",title:"title"},decls:11,vars:5,consts:[[3,"title","id"],[1,"card"],[3,"model","activeItem"],["pTemplate","item"],["selector","tab-menu-template-demo",3,"code"]],template:function(i,o){1&i&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"TabMenu supports templating via the "),e.TgZ(4,"i"),e._uU(5,"item"),e.qZA(),e._uU(6," template which gets the menuitem instance and the index."),e.qZA()(),e.TgZ(7,"div",1)(8,"p-tabMenu",2),e.YNc(9,S,1,2,"ng-template",3),e.qZA()(),e._UZ(10,"app-code",4),e.qZA()),2&i&&(e.xp6(1),e.Q6J("title",o.title)("id",o.id),e.xp6(7),e.Q6J("model",o.items)("activeItem",o.activeItem),e.xp6(2),e.Q6J("code",o.code))},dependencies:[s.h,m.d,x.jx,l.c],encapsulation:2}),t})();const Q=function(){return["/theming"]};let O=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["templates-doc"]],inputs:{id:"id",title:"title"},decls:23,vars:4,consts:[[3,"title","id"],["href","#",3,"routerLink"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(i,o){1&i&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"Following is the list of structural style classes, for theming classes visit "),e.TgZ(4,"a",1),e._uU(5,"theming"),e.qZA(),e._uU(6," page."),e.qZA()(),e.TgZ(7,"div",2)(8,"table",3)(9,"thead")(10,"tr")(11,"th"),e._uU(12,"Name"),e.qZA(),e.TgZ(13,"th"),e._uU(14,"Parameters"),e.qZA()()(),e.TgZ(15,"tbody")(16,"tr")(17,"td"),e._uU(18,"item"),e.qZA(),e.TgZ(19,"td"),e._uU(20," $implicit: Data of the menu item "),e._UZ(21,"br"),e._uU(22," index: Index of the option "),e.qZA()()()()()()),2&i&&(e.xp6(1),e.Q6J("title",o.title)("id",o.id),e.xp6(3),e.Q6J("routerLink",e.DdM(3,Q)))},dependencies:[u.rH,l.c],encapsulation:2}),t})();var L=a(6544);let F=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["accessibility-doc"]],inputs:{id:"id",title:"title"},decls:81,vars:2,consts:[[3,"title","id"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(i,o){1&i&&(e.TgZ(0,"app-developmentsection")(1,"div")(2,"app-docsectiontext",0)(3,"h3"),e._uU(4,"Screen Reader"),e.qZA(),e.TgZ(5,"p"),e._uU(6," TabMenu component uses the "),e.TgZ(7,"i"),e._uU(8,"menubar"),e.qZA(),e._uU(9," role and the value to describe the menu can either be provided with "),e.TgZ(10,"i"),e._uU(11,"aria-labelledby"),e.qZA(),e._uU(12," or "),e.TgZ(13,"i"),e._uU(14,"aria-label"),e.qZA(),e._uU(15," props. Each list item has a "),e.TgZ(16,"i"),e._uU(17,"presentation"),e.qZA(),e._uU(18," role whereas anchor elements have a "),e.TgZ(19,"i"),e._uU(20,"menuitem"),e.qZA(),e._uU(21," role with "),e.TgZ(22,"i"),e._uU(23,"aria-label"),e.qZA(),e._uU(24," referring to the label of the item and "),e.TgZ(25,"i"),e._uU(26,"aria-disabled"),e.qZA(),e._uU(27," defined if the item is disabled. "),e.qZA(),e.TgZ(28,"h3"),e._uU(29,"Keyboard Support"),e.qZA(),e.TgZ(30,"div",1)(31,"table",2)(32,"thead")(33,"tr")(34,"th"),e._uU(35,"Key"),e.qZA(),e.TgZ(36,"th"),e._uU(37,"Function"),e.qZA()()(),e.TgZ(38,"tbody")(39,"tr")(40,"td")(41,"i"),e._uU(42,"tab"),e.qZA()(),e.TgZ(43,"td"),e._uU(44,"Adds focus to the active tab header when focus moves in to the component, if there is already a focused tab header moves the focus out of the component based on the page tab sequence."),e.qZA()(),e.TgZ(45,"tr")(46,"td")(47,"i"),e._uU(48,"enter"),e.qZA()(),e.TgZ(49,"td"),e._uU(50,"Activates the focused tab header."),e.qZA()(),e.TgZ(51,"tr")(52,"td")(53,"i"),e._uU(54,"space"),e.qZA()(),e.TgZ(55,"td"),e._uU(56,"Activates the focused tab header."),e.qZA()(),e.TgZ(57,"tr")(58,"td")(59,"i"),e._uU(60,"right arrow"),e.qZA()(),e.TgZ(61,"td"),e._uU(62,"Moves focus to the next header."),e.qZA()(),e.TgZ(63,"tr")(64,"td")(65,"i"),e._uU(66,"left arrow"),e.qZA()(),e.TgZ(67,"td"),e._uU(68,"Moves focus to the previous header."),e.qZA()(),e.TgZ(69,"tr")(70,"td")(71,"i"),e._uU(72,"home"),e.qZA()(),e.TgZ(73,"td"),e._uU(74,"Moves focus to the first header."),e.qZA()(),e.TgZ(75,"tr")(76,"td")(77,"i"),e._uU(78,"end"),e.qZA()(),e.TgZ(79,"td"),e._uU(80,"Moves focus to the last header."),e.qZA()()()()()()()()),2&i&&(e.xp6(2),e.Q6J("title",o.title)("id",o.id))},dependencies:[l.c,L.N],encapsulation:2}),t})();var E=a(3408);let B=(()=>{class t{constructor(){this.docs=[{id:"import",label:"Import",component:M},{id:"basic",label:"Basic",component:f},{id:"active",label:"Active Item",component:_},{id:"controlled",label:"Controlled",component:h},{id:"scrollable",label:"Scrollable",component:C},{id:"template",label:"Template",component:J},{id:"style",label:"Style",component:w},{id:"accessibility",label:"Accessibility",component:F}],this.apiDocs=[{id:"props",label:"Properties",component:y},{id:"templates",label:"Templates",component:O},{id:"events",label:"Events",component:v},{id:"menuitem",label:"MenuItem API",component:I}]}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:1,vars:2,consts:[["title","Angular TabMenu Component","header","TabMenu","description","TabMenu is a navigation component that displays items as tab headers. Example below uses nested routes with TabMenu.",3,"docs","apiDocs"]],template:function(i,o){1&i&&e._UZ(0,"app-doc",0),2&i&&e.Q6J("docs",o.docs)("apiDocs",o.apiDocs)},dependencies:[E.x],encapsulation:2}),t})(),H=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.Bz.forChild([{path:"",component:B}]),u.Bz]}),t})(),N=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.ez,H,b]}),t})()}}]);