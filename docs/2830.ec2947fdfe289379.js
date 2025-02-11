"use strict";(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[2830],{2899:(y,_,r)=>{r.d(_,{V:()=>m,W:()=>f});var a=r(6895),n=r(1571);function p(c,h){if(1&c&&n._UZ(0,"span",3),2&c){const u=n.oxw();n.Q6J("ngClass",u.icon)}}const e=["*"];let m=(()=>{class c{containerClass(){return{"p-tag p-component":!0,"p-tag-info":"info"===this.severity,"p-tag-success":"success"===this.severity,"p-tag-warning":"warning"===this.severity,"p-tag-danger":"danger"===this.severity,"p-tag-rounded":this.rounded}}}return c.\u0275fac=function(u){return new(u||c)},c.\u0275cmp=n.Xpm({type:c,selectors:[["p-tag"]],hostAttrs:[1,"p-element"],inputs:{styleClass:"styleClass",style:"style",severity:"severity",value:"value",icon:"icon",rounded:"rounded"},ngContentSelectors:e,decls:5,vars:6,consts:[[3,"ngClass","ngStyle"],["class","p-tag-icon",3,"ngClass",4,"ngIf"],[1,"p-tag-value"],[1,"p-tag-icon",3,"ngClass"]],template:function(u,v){1&u&&(n.F$t(),n.TgZ(0,"span",0),n.Hsn(1),n.YNc(2,p,1,1,"span",1),n.TgZ(3,"span",2),n._uU(4),n.qZA()()),2&u&&(n.Tol(v.styleClass),n.Q6J("ngClass",v.containerClass())("ngStyle",v.style),n.xp6(2),n.Q6J("ngIf",v.icon),n.xp6(2),n.Oqu(v.value))},dependencies:[a.mk,a.O5,a.PC],styles:[".p-tag{display:inline-flex;align-items:center;justify-content:center}.p-tag-icon,.p-tag-value,.p-tag-icon.pi{line-height:1.5}.p-tag.p-tag-rounded{border-radius:10rem}\n"],encapsulation:2,changeDetection:0}),c})(),f=(()=>{class c{}return c.\u0275fac=function(u){return new(u||c)},c.\u0275mod=n.oAB({type:c}),c.\u0275inj=n.cJS({imports:[a.ez]}),c})()},6544:(y,_,r)=>{r.d(_,{N:()=>p});var a=r(1571);const n=["*"];let p=(()=>{class e{}return e.\u0275fac=function(f){return new(f||e)},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-developmentsection"]],ngContentSelectors:n,decls:4,vars:0,consts:[[1,"flex","align-items-center","line-height-3","bg-primary-600","text-white","p-3","text-lg","border-round","mb-3"],[1,"pi","pi-info-circle","text-lg","text-white","mr-2"]],template:function(f,c){1&f&&(a.F$t(),a.TgZ(0,"div",0),a._UZ(1,"i",1),a._uU(2," Accessibility guide documents the specification of this component based on WCAG guidelines, the implementation is in progress.\n"),a.qZA(),a.Hsn(3))},encapsulation:2}),e})()},2830:(y,_,r)=>{r.r(_),r.d(_,{VirtualScrollerDemoModule:()=>ve});var a=r(6895),n=r(4369),p=r(9768),e=r(1571),m=r(869),f=r(1982),c=r(485),h=r(4679);const u=["scroller"];function v(t,o){1&t&&e.GkF(0)}function S(t,o){if(1&t&&(e.TgZ(0,"div",8),e.Hsn(1),e.YNc(2,v,1,0,"ng-container",9),e.qZA()),2&t){const i=e.oxw();e.xp6(2),e.Q6J("ngTemplateOutlet",i.headerTemplate)}}function b(t,o){1&t&&e.GkF(0)}const x=function(t){return{height:t}},A=function(t,o){return{$implicit:t,options:o}};function C(t,o){if(1&t&&(e.TgZ(0,"div",10),e.YNc(1,b,1,0,"ng-container",11),e.qZA()),2&t){const i=o.$implicit,l=o.options,s=e.oxw();e.Q6J("ngStyle",e.VKq(3,x,s.itemSize+"px")),e.xp6(1),e.Q6J("ngTemplateOutlet",i?s.itemTemplate:s.loadingItemTemplate)("ngTemplateOutletContext",e.WLB(5,A,i,l))}}function q(t,o){1&t&&e.GkF(0)}function w(t,o){if(1&t&&(e.TgZ(0,"div",12),e.Hsn(1,1),e.YNc(2,q,1,0,"ng-container",9),e.qZA()),2&t){const i=e.oxw();e.xp6(2),e.Q6J("ngTemplateOutlet",i.footerTemplate)}}const D=[[["p-header"]],[["p-footer"]]],z=["p-header","p-footer"];let T=(()=>{class t{constructor(i,l){this.el=i,this.cd=l,this.delay=250,this.onLazyLoad=new e.vpe}ngAfterContentInit(){this.templates.forEach(i=>{switch(i.getType()){case"item":default:this.itemTemplate=i.template;break;case"loadingItem":this.loadingItemTemplate=i.template;break;case"header":this.headerTemplate=i.template;break;case"footer":this.footerTemplate=i.template}})}onLazyItemLoad(i){this.virtualScrollTimeout&&clearTimeout(this.virtualScrollTimeout),this.virtualScrollTimeout=setTimeout(()=>{this.onLazyLoad.emit({...i,rows:i.last-i.first,forceUpdate:()=>this.cd.detectChanges()})},this.delay)}getBlockableElement(){return this.el.nativeElement.children[0]}scrollToIndex(i,l){this.scroller?.scrollToIndex(i,l)}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(e.SBq),e.Y36(e.sBO))},t.\u0275cmp=e.Xpm({type:t,selectors:[["p-virtualScroller"]],contentQueries:function(i,l,s){if(1&i&&(e.Suo(s,m.h4,5),e.Suo(s,m.$_,5),e.Suo(s,m.jx,4)),2&i){let g;e.iGM(g=e.CRH())&&(l.header=g.first),e.iGM(g=e.CRH())&&(l.footer=g.first),e.iGM(g=e.CRH())&&(l.templates=g)}},viewQuery:function(i,l){if(1&i&&e.Gf(u,5),2&i){let s;e.iGM(s=e.CRH())&&(l.scroller=s.first)}},hostAttrs:[1,"p-element"],inputs:{value:"value",itemSize:"itemSize",style:"style",styleClass:"styleClass",scrollHeight:"scrollHeight",lazy:"lazy",options:"options",delay:"delay"},outputs:{onLazyLoad:"onLazyLoad"},ngContentSelectors:z,decls:8,vars:14,consts:[[3,"ngClass","ngStyle"],["class","p-virtualscroller-header",4,"ngIf"],[1,"p-virtualscroller-content"],["content",""],["styleClass","p-virtualscroller-list",3,"items","itemSize","lazy","options","onLazyLoad"],["scroller",""],["pTemplate","item"],["class","p-virtualscroller-footer",4,"ngIf"],[1,"p-virtualscroller-header"],[4,"ngTemplateOutlet"],[1,"p-virtualscroller-item",3,"ngStyle"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-virtualscroller-footer"]],template:function(i,l){1&i&&(e.F$t(D),e.TgZ(0,"div",0),e.YNc(1,S,3,1,"div",1),e.TgZ(2,"div",2,3)(4,"p-scroller",4,5),e.NdJ("onLazyLoad",function(g){return l.onLazyItemLoad(g)}),e.YNc(6,C,2,8,"ng-template",6),e.qZA()(),e.YNc(7,w,3,1,"div",7),e.qZA()),2&i&&(e.Tol(l.styleClass),e.Q6J("ngClass","p-virtualscroller p-component")("ngStyle",l.style),e.xp6(1),e.Q6J("ngIf",l.header||l.headerTemplate),e.xp6(3),e.Akn(e.VKq(12,x,l.scrollHeight)),e.Q6J("items",l.value)("itemSize",l.itemSize)("lazy",l.lazy)("options",l.options),e.xp6(3),e.Q6J("ngIf",l.footer||l.footerTemplate))},dependencies:[a.mk,a.O5,a.tP,a.PC,c.jx,h.T],encapsulation:2}),t})(),L=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[a.ez,m.m8,f.v,m.m8,f.v]}),t})();var Z=r(359),P=r(1928),O=r(6310),U=r(2899);let M=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[a.ez,p.a,n.V,Z.Bz,L,P.hJ,O.m,U.W,n.V]}),t})();var d=r(4802);const I=function(t){return{"surface-hover":t}};function V(t,o){if(1&t&&(e.TgZ(0,"div",5),e._uU(1),e.qZA()),2&t){const i=o.$implicit;e.Q6J("ngClass",e.VKq(2,I,i.index%2==0)),e.xp6(1),e.hij(" ",i.label," ")}}const J=function(){return{width:"200px"}};let Q=(()=>{class t{constructor(){this.items=[],this.code={basic:'\n<p-virtualScroller [value]="items" class="border-1 surface-border border-round" [style]="{\'width\': \'200px\'}" scrollHeight="200px" [itemSize]="50">\n    <ng-template pTemplate="item" let-item>\n        <div class="flex align-items-center p-2 h-full" [ngClass]="{ \'surface-hover\': item.index % 2 === 0 }">\n            {{ item.label }}\n        </div>\n    </ng-template>\n</p-virtualScroller>',html:'\n<div class="card flex justify-content-center">\n    <p-virtualScroller [value]="items" class="border-1 surface-border border-round" [style]="{\'width\': \'200px\'}" scrollHeight="200px" [itemSize]="50">\n        <ng-template pTemplate="item" let-item>\n            <div class="flex align-items-center p-2 h-full" [ngClass]="{ \'surface-hover\': item.index % 2 === 0 }">\n                {{ item.label }}\n            </div>\n        </ng-template>\n    </p-virtualScroller>\n</div>',typescript:"\nimport { Component, OnInit } from '@angular/core';\n\n@Component({\n    selector: 'virtual-scroller-basic-demo',\n    templateUrl: './virtual-scroller-basic-demo.html'\n})\nexport class VirtualScrollerBasicDemo implements OnInit {\n    items = [];\n\n    ngOnInit(): void {\n        for (let i = 0; i < 10000; i++) {\n            this.items.push({ label: 'Item #' + i, index: i });\n        }\n    }\n}"}}ngOnInit(){for(let i=0;i<1e4;i++)this.items.push({label:"Item #"+i,index:i})}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["basic-doc"]],inputs:{id:"id",title:"title"},decls:29,vars:8,consts:[[3,"title","id"],[1,"card","flex","justify-content-center"],["scrollHeight","200px",1,"border-1","surface-border","border-round",3,"value","itemSize"],["pTemplate","item"],["selector","virtual-scroller-basic-demo",3,"code"],[1,"flex","align-items-center","p-2","h-full",3,"ngClass"]],template:function(i,l){1&i&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3," VirtualScroller requires "),e.TgZ(4,"i"),e._uU(5,"value"),e.qZA(),e._uU(6," as the data to display, "),e.TgZ(7,"i"),e._uU(8,"itemSize"),e.qZA(),e._uU(9," for the dimensions of an item and "),e.TgZ(10,"i"),e._uU(11,"pTemplate"),e.qZA(),e._uU(12," to define the content per item. Size of the viewport is configured using "),e.TgZ(13,"i"),e._uU(14,"scrollWidth"),e.qZA(),e._uU(15,", "),e.TgZ(16,"i"),e._uU(17,"scrollHeight"),e.qZA(),e._uU(18," properties directly or with CSS "),e.TgZ(19,"i"),e._uU(20,"width"),e.qZA(),e._uU(21," and "),e.TgZ(22,"i"),e._uU(23,"height"),e.qZA(),e._uU(24," styles. "),e.qZA()(),e.TgZ(25,"div",1)(26,"p-virtualScroller",2),e.YNc(27,V,2,4,"ng-template",3),e.qZA()(),e._UZ(28,"app-code",4),e.qZA()),2&i&&(e.xp6(1),e.Q6J("title",l.title)("id",l.id),e.xp6(25),e.Akn(e.DdM(7,J)),e.Q6J("value",l.items)("itemSize",50),e.xp6(2),e.Q6J("code",l.code))},dependencies:[a.mk,p.h,d.c,T,c.jx],encapsulation:2}),t})();var F=r(5872);function H(t,o){1&t&&e._uU(0," List of Products ")}function N(t,o){if(1&t&&(e.TgZ(0,"div",7)(1,"div"),e._UZ(2,"img",8),e.qZA(),e.TgZ(3,"div",9)(4,"h5",10),e._uU(5),e.qZA(),e._UZ(6,"i",11),e.TgZ(7,"span",12),e._uU(8),e.qZA()(),e.TgZ(9,"div",13)(10,"h6",14),e._uU(11),e.qZA(),e._UZ(12,"p-tag",15),e.qZA()()),2&t){const i=o.$implicit,l=e.oxw();e.xp6(2),e.MGl("src","https://primefaces.org/cdn/primeng/images/demo/product/",i.image,"",e.LSH),e.Q6J("alt",i.name),e.xp6(3),e.Oqu(i.name),e.xp6(3),e.Oqu(i.category),e.xp6(3),e.Oqu("$"+i.price),e.xp6(1),e.Q6J("value",i.inventoryStatus)("severity",l.getSeverity(i.inventoryStatus))}}function k(t,o){1&t&&(e.TgZ(0,"div",16),e._UZ(1,"div",17),e.TgZ(2,"div",9),e._UZ(3,"h5",10)(4,"i",18)(5,"span",12),e.qZA(),e.TgZ(6,"div",13),e._UZ(7,"h6",14)(8,"span",19),e.qZA()())}let B=(()=>{class t{constructor(i){this.productService=i,this.code={basic:'\n<p-virtualScroller [value]="virtualProducts" scrollHeight="450px" [itemSize]="100" [lazy]="true" (onLazyLoad)="loadCarsLazy($event)">\n    <ng-template pTemplate="header"> List of Products </ng-template>\n    <ng-template let-product pTemplate="item">\n        <div class="flex align-items-center p-3 w-full flex-wrap">\n            <div>\n                <img src="https://primefaces.org/cdn/primeng/images/demo/product/{{ product.image }}" [alt]="product.name" class="mr-3 w-4rem md:w-7rem shadow-2" />\n            </div>\n            <div class="flex-1">\n                <h5 class="mb-2 text-base">{{ product.name }}</h5>\n                <i class="pi pi-tag hidden md:inline vertical-align-middle mr-2"></i>\n                <span class="hidden md:inline-flex vertical-align-middle mr-2">{{ product.category }}</span>\n            </div>\n            <div class="flex flex-column align-items-end">\n                <h6 style="width:25px; height:14px;" class="mb-2">{{ \'$\' + product.price }}</h6>\n                <p-tag [value]="product.inventoryStatus" [severity]="getSeverity(product.inventoryStatus)"></p-tag>\n            </div>\n        </div>\n    </ng-template>\n    <ng-template let-product pTemplate="loadingItem">\n        <div class="flex align-items-center p-3 w-full flex-wrap loading-item">\n            <div class="mr-3" style="width:100px; height:66px;"></div>\n            <div class="flex-1">\n                <h5 class="mb-2 text-base"></h5>\n                <i class="hidden md:inline vertical-align-middle mr-2"></i>\n                <span class="hidden md:inline-flex vertical-align-middle mr-2"></span>\n            </div>\n            <div class="flex flex-column align-items-end">\n                <h6 style="width:25px; height:14px;" class="mb-2"></h6>\n                <span class="block h-2rem" style="width:100px"></span>\n            </div>\n        </div>\n    </ng-template>\n</p-virtualScroller>',html:'\n<div class="card">\n    <p-virtualScroller [value]="virtualProducts" scrollHeight="450px" [itemSize]="100" [lazy]="true" (onLazyLoad)="loadCarsLazy($event)">\n        <ng-template pTemplate="header"> List of Products </ng-template>\n        <ng-template let-product pTemplate="item">\n            <div class="flex align-items-center p-3 w-full flex-wrap">\n                <div>\n                    <img src="https://primefaces.org/cdn/primeng/images/demo/product/{{ product.image }}" [alt]="product.name" class="mr-3 w-4rem md:w-7rem shadow-2" />\n                </div>\n                <div class="flex-1">\n                    <h5 class="mb-2 text-base">{{ product.name }}</h5>\n                    <i class="pi pi-tag hidden md:inline vertical-align-middle mr-2"></i>\n                    <span class="hidden md:inline-flex vertical-align-middle mr-2">{{ product.category }}</span>\n                </div>\n                <div class="flex flex-column align-items-end">\n                    <h6 style="width:25px; height:14px;" class="mb-2">{{ \'$\' + product.price }}</h6>\n                    <p-tag [value]="product.inventoryStatus" [severity]="getSeverity(product.inventoryStatus)"></p-tag>\n                </div>\n            </div>\n        </ng-template>\n        <ng-template let-product pTemplate="loadingItem">\n            <div class="flex align-items-center p-3 w-full flex-wrap loading-item">\n                <div class="mr-3" style="width:100px; height:66px;"></div>\n                <div class="flex-1">\n                    <h5 class="mb-2 text-base"></h5>\n                    <i class="hidden md:inline vertical-align-middle mr-2"></i>\n                    <span class="hidden md:inline-flex vertical-align-middle mr-2"></span>\n                </div>\n                <div class="flex flex-column align-items-end">\n                    <h6 style="width:25px; height:14px;" class="mb-2"></h6>\n                    <span class="block h-2rem" style="width:100px"></span>\n                </div>\n            </div>\n        </ng-template>\n    </p-virtualScroller>\n</div>',typescript:"\nimport { Component, OnInit } from '@angular/core';\nimport { LazyLoadEvent } from 'primeng/api';\nimport { Product } from '../../domain/product';\nimport { ProductService } from 'src/service/productservice';\n\n@Component({\n    selector: 'virtual-scroller-lazy-load-demo',\n    templateUrl: './virtual-scroller-lazy-load-demo.html'\n})\nexport class VirtualScrollerLazyLoadDemo implements OnInit {\n    products: Product[];\n\n    virtualProducts: Product[];\n\n    constructor(private productService: ProductService) {}\n\n    ngOnInit() {\n        this.productService.getProducts().then((products) => {\n            this.products = products;\n        });\n        this.virtualProducts = Array.from({ length: 10000 });\n    }\n\n    loadCarsLazy(event: LazyLoadEvent) {\n        setTimeout(() => {\n            let loadedProducts = this.products.slice(event.first, event.first + event.rows);\n\n            Array.prototype.splice.apply(this.virtualProducts, [...[event.first, event.rows], ...loadedProducts]);\n\n            event.forceUpdate();\n        }, 1000);\n    }\n\n    getSeverity(status: string) {\n        switch (status) {\n            case 'INSTOCK':\n                return 'success';\n            case 'LOWSTOCK':\n                return 'warning';\n            case 'OUTOFSTOCK':\n                return 'danger';\n        }\n    }\n}",data:"\n/* ProductService */        \n{\n    id: '1000',\n    code: 'f230fh0g3',\n    name: 'Bamboo Watch',\n    description: 'Product Description',\n    image: 'bamboo-watch.jpg',\n    price: 65,\n    category: 'Accessories',\n    quantity: 24,\n    inventoryStatus: 'INSTOCK',\n    rating: 5\n},\n...",service:["ProductService"]},this.extFiles=[{path:"src/domain/product.ts",content:"\nexport interface Product {\n    id?: string;\n    code?: string;\n    name?: string;\n    description?: string;\n    price?: number;\n    quantity?: number;\n    inventoryStatus?: string;\n    category?: string;\n    image?: string;\n    rating?: number;\n}"}]}ngOnInit(){this.products=Array.from({length:1e4}).map(()=>this.productService.generatePrduct()),this.virtualProducts=Array.from({length:1e4})}loadCarsLazy(i){setTimeout(()=>{let l=this.products.slice(i.first,i.first+i.rows);Array.prototype.splice.apply(this.virtualProducts,[i.first,i.rows,...l]),i.forceUpdate()},1e3)}getSeverity(i){switch(i){case"INSTOCK":return"success";case"LOWSTOCK":return"warning";case"OUTOFSTOCK":return"danger"}}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(F.M))},t.\u0275cmp=e.Xpm({type:t,selectors:[["lazy-load-doc"]],inputs:{id:"id",title:"title"},decls:16,vars:7,consts:[[3,"title","id"],[1,"card"],["scrollHeight","450px",3,"value","itemSize","lazy","onLazyLoad"],["pTemplate","header"],["pTemplate","item"],["pTemplate","loadingItem"],["selector","virtual-scroller-lazy-load-demo",3,"code","extFiles"],[1,"flex","align-items-center","p-3","w-full","flex-wrap"],[1,"mr-3","w-4rem","md:w-7rem","shadow-2",3,"src","alt"],[1,"flex-1"],[1,"mb-2","text-base"],[1,"pi","pi-tag","hidden","md:inline","vertical-align-middle","mr-2"],[1,"hidden","md:inline-flex","vertical-align-middle","mr-2"],[1,"flex","flex-column","align-items-end"],[1,"mb-2",2,"width","25px","height","14px"],[3,"value","severity"],[1,"flex","align-items-center","p-3","w-full","flex-wrap","loading-item"],[1,"mr-3",2,"width","100px","height","66px"],[1,"hidden","md:inline","vertical-align-middle","mr-2"],[1,"block","h-2rem",2,"width","100px"]],template:function(i,l){1&i&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3," Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded on demand. To implement lazy loading, enable the "),e.TgZ(4,"i"),e._uU(5,"lazy"),e.qZA(),e._uU(6," property and implement "),e.TgZ(7,"i"),e._uU(8,"onLazyLoad"),e.qZA(),e._uU(9," callback to return data. "),e.qZA()(),e.TgZ(10,"div",1)(11,"p-virtualScroller",2),e.NdJ("onLazyLoad",function(g){return l.loadCarsLazy(g)}),e.YNc(12,H,1,0,"ng-template",3),e.YNc(13,N,13,7,"ng-template",4),e.YNc(14,k,9,0,"ng-template",5),e.qZA()(),e._UZ(15,"app-code",6),e.qZA()),2&i&&(e.xp6(1),e.Q6J("title",l.title)("id",l.id),e.xp6(10),e.Q6J("value",l.virtualProducts)("itemSize",100)("lazy",!0),e.xp6(4),e.Q6J("code",l.code)("extFiles",l.extFiles))},dependencies:[p.h,d.c,T,c.jx,U.V],encapsulation:2}),t})(),j=(()=>{class t{constructor(){this.code={typescript:"import { VirtualScrollerModule } from 'primeng/virtualscroller';"}}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["import-doc"]],inputs:{id:"id",title:"title"},decls:3,vars:4,consts:[[3,"title","id"],[3,"code","hideToggleCode"]],template:function(i,l){1&i&&(e.TgZ(0,"section"),e._UZ(1,"app-docsectiontext",0)(2,"app-code",1),e.qZA()),2&i&&(e.xp6(1),e.Q6J("title",l.title)("id",l.id),e.xp6(1),e.Q6J("code",l.code)("hideToggleCode",!0))},dependencies:[p.h,d.c],encapsulation:2}),t})();const E=function(){return["/theming"]};let Y=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["style-doc"]],inputs:{id:"id",title:"title"},decls:41,vars:4,consts:[[3,"title","id"],["href","#",3,"routerLink"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(i,l){1&i&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"Following is the list of structural style classes, for theming classes visit "),e.TgZ(4,"a",1),e._uU(5,"theming"),e.qZA(),e._uU(6," page."),e.qZA()(),e.TgZ(7,"div",2)(8,"table",3)(9,"thead")(10,"tr")(11,"th"),e._uU(12,"Name"),e.qZA(),e.TgZ(13,"th"),e._uU(14,"Element"),e.qZA()()(),e.TgZ(15,"tbody")(16,"tr")(17,"td"),e._uU(18,"p-virtualscroller"),e.qZA(),e.TgZ(19,"td"),e._uU(20,"Container element."),e.qZA()(),e.TgZ(21,"tr")(22,"td"),e._uU(23,"p-virtualscroller-header"),e.qZA(),e.TgZ(24,"td"),e._uU(25,"Header section."),e.qZA()(),e.TgZ(26,"tr")(27,"td"),e._uU(28,"p-virtualscroller-footer"),e.qZA(),e.TgZ(29,"td"),e._uU(30,"Footer section."),e.qZA()(),e.TgZ(31,"tr")(32,"td"),e._uU(33,"p-virtualscroller-content"),e.qZA(),e.TgZ(34,"td"),e._uU(35,"Content section."),e.qZA()(),e.TgZ(36,"tr")(37,"td"),e._uU(38,"p-virtualscroller-list"),e.qZA(),e.TgZ(39,"td"),e._uU(40,"List element."),e.qZA()()()()()()),2&i&&(e.xp6(1),e.Q6J("title",l.title)("id",l.id),e.xp6(3),e.Q6J("routerLink",e.DdM(3,E)))},dependencies:[d.c,Z.rH],encapsulation:2}),t})();const $=function(){return["/scroller"]};let K=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["props-doc"]],inputs:{id:"id",title:"title"},decls:90,vars:4,consts:[[3,"title","id"],[1,"doc-tablewrapper"],[1,"doc-table"],["href","#",3,"routerLink"]],template:function(i,l){1&i&&(e.TgZ(0,"section"),e._UZ(1,"app-docsectiontext",0),e.TgZ(2,"div",1)(3,"table",2)(4,"thead")(5,"tr")(6,"th"),e._uU(7,"Name"),e.qZA(),e.TgZ(8,"th"),e._uU(9,"Type"),e.qZA(),e.TgZ(10,"th"),e._uU(11,"Default"),e.qZA(),e.TgZ(12,"th"),e._uU(13,"Description"),e.qZA()()(),e.TgZ(14,"tbody")(15,"tr")(16,"td"),e._uU(17,"delay"),e.qZA(),e.TgZ(18,"td"),e._uU(19,"number"),e.qZA(),e.TgZ(20,"td"),e._uU(21,"250"),e.qZA(),e.TgZ(22,"td"),e._uU(23,"Threshold in milliseconds to delay lazy loading during scrolling."),e.qZA()(),e.TgZ(24,"tr")(25,"td"),e._uU(26,"itemSize"),e.qZA(),e.TgZ(27,"td"),e._uU(28,"number"),e.qZA(),e.TgZ(29,"td"),e._uU(30,"null"),e.qZA(),e.TgZ(31,"td"),e._uU(32,"Height of an item in the list."),e.qZA()(),e.TgZ(33,"tr")(34,"td"),e._uU(35,"lazy"),e.qZA(),e.TgZ(36,"td"),e._uU(37,"boolean"),e.qZA(),e.TgZ(38,"td"),e._uU(39,"false"),e.qZA(),e.TgZ(40,"td"),e._uU(41,"Defines if data is loaded and interacted with in lazy manner."),e.qZA()(),e.TgZ(42,"tr")(43,"td"),e._uU(44,"scrollHeight"),e.qZA(),e.TgZ(45,"td"),e._uU(46,"any"),e.qZA(),e.TgZ(47,"td"),e._uU(48,"null"),e.qZA(),e.TgZ(49,"td"),e._uU(50,"Max height of the content area in inline mode."),e.qZA()(),e.TgZ(51,"tr")(52,"td"),e._uU(53,"style"),e.qZA(),e.TgZ(54,"td"),e._uU(55,"string"),e.qZA(),e.TgZ(56,"td"),e._uU(57,"null"),e.qZA(),e.TgZ(58,"td"),e._uU(59,"Inline style of the component."),e.qZA()(),e.TgZ(60,"tr")(61,"td"),e._uU(62,"styleClass"),e.qZA(),e.TgZ(63,"td"),e._uU(64,"string"),e.qZA(),e.TgZ(65,"td"),e._uU(66,"null"),e.qZA(),e.TgZ(67,"td"),e._uU(68,"Style class of the component."),e.qZA()(),e.TgZ(69,"tr")(70,"td"),e._uU(71,"value"),e.qZA(),e.TgZ(72,"td"),e._uU(73,"array"),e.qZA(),e.TgZ(74,"td"),e._uU(75,"null"),e.qZA(),e.TgZ(76,"td"),e._uU(77,"An array of objects to display."),e.qZA()(),e.TgZ(78,"tr")(79,"td"),e._uU(80,"options"),e.qZA(),e.TgZ(81,"td"),e._uU(82,"ScrollerOptions"),e.qZA(),e.TgZ(83,"td"),e._uU(84,"false"),e.qZA(),e.TgZ(85,"td"),e._uU(86,"Whether to use the scroller feature. The properties of "),e.TgZ(87,"a",3),e._uU(88,"scroller"),e.qZA(),e._uU(89," component can be used like an object in it."),e.qZA()()()()()()),2&i&&(e.xp6(1),e.Q6J("title",l.title)("id",l.id),e.xp6(86),e.Q6J("routerLink",e.DdM(3,$)))},dependencies:[d.c,Z.rH],encapsulation:2}),t})(),R=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["events-doc"]],inputs:{id:"id",title:"title"},decls:25,vars:2,consts:[[3,"title","id"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(i,l){1&i&&(e.TgZ(0,"section"),e._UZ(1,"app-docsectiontext",0),e.TgZ(2,"div",1)(3,"table",2)(4,"thead")(5,"tr")(6,"th"),e._uU(7,"Name"),e.qZA(),e.TgZ(8,"th"),e._uU(9,"Parameters"),e.qZA(),e.TgZ(10,"th"),e._uU(11,"Description"),e.qZA()()(),e.TgZ(12,"tbody")(13,"tr")(14,"td"),e._uU(15,"onLazyLoad"),e.qZA(),e.TgZ(16,"td"),e._uU(17," event.first = First row offset "),e._UZ(18,"br"),e._uU(19," event.last = Last row offset "),e._UZ(20,"br"),e._uU(21," event.rows = Number of rows per page "),e._UZ(22,"br"),e.qZA(),e.TgZ(23,"td"),e._uU(24,"Callback to invoke in lazy mode to load new data."),e.qZA()()()()()()),2&i&&(e.xp6(1),e.Q6J("title",l.title)("id",l.id))},dependencies:[d.c],encapsulation:2}),t})(),X=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["methods-doc"]],inputs:{id:"id",title:"title"},decls:22,vars:2,consts:[[3,"title","id"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(i,l){1&i&&(e.TgZ(0,"section"),e._UZ(1,"app-docsectiontext",0),e.TgZ(2,"div",1)(3,"table",2)(4,"thead")(5,"tr")(6,"th"),e._uU(7,"Name"),e.qZA(),e.TgZ(8,"th"),e._uU(9,"Parameters"),e.qZA(),e.TgZ(10,"th"),e._uU(11,"Description"),e.qZA()()(),e.TgZ(12,"tbody")(13,"tr")(14,"td"),e._uU(15,"scrollToIndex"),e.qZA(),e.TgZ(16,"td"),e._uU(17," index: Index of the item."),e._UZ(18,"br"),e._uU(19," mode: Scroll mode e.g. 'auto' or 'smooth' "),e.qZA(),e.TgZ(20,"td"),e._uU(21,"Scrolls to the item with the given index."),e.qZA()()()()()()),2&i&&(e.xp6(1),e.Q6J("title",l.title)("id",l.id))},dependencies:[d.c],encapsulation:2}),t})();const G=function(){return["/theming"]};let W=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["templates-doc"]],inputs:{id:"id",title:"title"},decls:52,vars:4,consts:[[3,"title","id"],["href","#",3,"routerLink"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(i,l){1&i&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"Following is the list of structural style classes, for theming classes visit "),e.TgZ(4,"a",1),e._uU(5,"theming"),e.qZA(),e._uU(6," page."),e.qZA()(),e.TgZ(7,"div",2)(8,"table",3)(9,"thead")(10,"tr")(11,"th"),e._uU(12,"Name"),e.qZA(),e.TgZ(13,"th"),e._uU(14,"Parameters"),e.qZA()()(),e.TgZ(15,"tbody")(16,"tr")(17,"td"),e._uU(18,"header"),e.qZA(),e.TgZ(19,"td"),e._uU(20,"-"),e.qZA()(),e.TgZ(21,"tr")(22,"td"),e._uU(23,"item"),e.qZA(),e.TgZ(24,"td"),e._uU(25," $implicit: Data of the option "),e._UZ(26,"br"),e._uU(27," index: Index of the option "),e._UZ(28,"br"),e._uU(29," count: Count of the options "),e._UZ(30,"br"),e._uU(31," first: First row offset "),e._UZ(32,"br"),e._uU(33," last: Last row offset "),e.qZA()(),e.TgZ(34,"tr")(35,"td"),e._uU(36,"loadingItem"),e.qZA(),e.TgZ(37,"td"),e._uU(38," $implicit: Data of the option "),e._UZ(39,"br"),e._uU(40," index: Index of the option "),e._UZ(41,"br"),e._uU(42," count: Count of the options "),e._UZ(43,"br"),e._uU(44," first: First row offset "),e._UZ(45,"br"),e._uU(46," last: Last row offset "),e.qZA()(),e.TgZ(47,"tr")(48,"td"),e._uU(49,"footer"),e.qZA(),e.TgZ(50,"td"),e._uU(51,"-"),e.qZA()()()()()()),2&i&&(e.xp6(1),e.Q6J("title",l.title)("id",l.id),e.xp6(3),e.Q6J("routerLink",e.DdM(3,G)))},dependencies:[d.c,Z.rH],encapsulation:2}),t})();var ee=r(2863);const te=["vs"],ie=function(t){return{"surface-hover":t}};function le(t,o){if(1&t&&(e.TgZ(0,"div",7),e._uU(1),e.qZA()),2&t){const i=o.$implicit;e.Q6J("ngClass",e.VKq(2,ie,i.index%2==0)),e.xp6(1),e.hij(" ",i.label," ")}}const oe=function(){return{width:"200px"}};let re=(()=>{class t{constructor(){this.items=[],this.code={basic:'\n<p-button label="Reset" (click)="reset()"></p-button>\n<p-virtualScroller #vs [value]="items" class="border-1 surface-border border-round" [style]="{ width: \'200px\' }" scrollHeight="200px" [itemSize]="50">\n    <ng-template pTemplate="item" let-item>\n        <div class="flex align-items-center p-2 h-full" [ngClass]="{ \'surface-hover\': item.index % 2 === 0 }">\n            {{ item.label }}\n        </div>\n    </ng-template>\n</p-virtualScroller>',html:'\n<div class="card flex flex-column align-items-center gap-3">\n    <p-button label="Reset" (click)="reset()"></p-button>\n    <p-virtualScroller #vs [value]="items" class="border-1 surface-border border-round" [style]="{ width: \'200px\' }" scrollHeight="200px" [itemSize]="50">\n        <ng-template pTemplate="item" let-item>\n            <div class="flex align-items-center p-2 h-full" [ngClass]="{ \'surface-hover\': item.index % 2 === 0 }">\n                {{ item.label }}\n            </div>\n        </ng-template>\n    </p-virtualScroller>\n</div>',typescript:"\nimport { Component, OnInit, ViewChild } from '@angular/core';\nimport { VirtualScroller } from 'primeng/virtualscroller';\n\n@Component({\n    selector: 'virtual-scroller-programmatic-scroll-demo',\n    templateUrl: './virtual-scroller-programmatic-scroll-demo.html'\n})\nexport class VirtualScrollerProgrammaticScrollDemo implements OnInit {\n    @ViewChild('vs') vs: VirtualScroller;\n\n    items = [];\n\n    ngOnInit(): void {\n        for (let i = 0; i < 10000; i++) {\n            this.items.push({ label: 'Item #' + i, index: i });\n        }\n    }\n\n    reset() {\n        this.vs.scrollToIndex(0, 'smooth');\n    }\n}"}}ngOnInit(){for(let i=0;i<1e4;i++)this.items.push({label:"Item #"+i,index:i})}reset(){this.vs.scrollToIndex(0,"smooth")}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["programmatic-scroll-doc"]],viewQuery:function(i,l){if(1&i&&e.Gf(te,5),2&i){let s;e.iGM(s=e.CRH())&&(l.vs=s.first)}},inputs:{id:"id",title:"title"},decls:13,vars:8,consts:[[3,"title","id"],[1,"card","flex","flex-column","align-items-center","gap-3"],["label","Reset",3,"click"],["scrollHeight","200px",1,"border-1","surface-border","border-round",3,"value","itemSize"],["vs",""],["pTemplate","item"],["selector","virtual-scroller-programmatic-scroll-demo",3,"code"],[1,"flex","align-items-center","p-2","h-full",3,"ngClass"]],template:function(i,l){1&i&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"Scrolling to a specific index can be done with the "),e.TgZ(4,"i"),e._uU(5,"scrollToIndex"),e.qZA(),e._uU(6," function."),e.qZA()(),e.TgZ(7,"div",1)(8,"p-button",2),e.NdJ("click",function(){return l.reset()}),e.qZA(),e.TgZ(9,"p-virtualScroller",3,4),e.YNc(11,le,2,4,"ng-template",5),e.qZA()(),e._UZ(12,"app-code",6),e.qZA()),2&i&&(e.xp6(1),e.Q6J("title",l.title)("id",l.id),e.xp6(8),e.Akn(e.DdM(7,oe)),e.Q6J("value",l.items)("itemSize",50),e.xp6(3),e.Q6J("code",l.code))},dependencies:[a.mk,p.h,d.c,T,c.jx,ee.zx],encapsulation:2}),t})();function ne(t,o){1&t&&e._uU(0,"Header Content")}const ae=function(t){return{"surface-hover":t}};function ce(t,o){if(1&t&&(e.TgZ(0,"div",7),e._uU(1),e.qZA()),2&t){const i=o.$implicit;e.Q6J("ngClass",e.VKq(2,ae,i.index%2==0)),e.xp6(1),e.hij(" ",i.label," ")}}function se(t,o){1&t&&e._uU(0,"Footer Content")}const de=function(){return{width:"200px"}};let pe=(()=>{class t{constructor(){this.items=[],this.code={basic:'\n<p-virtualScroller [value]="items" class="border-1 surface-border border-round" [style]="{ width: \'200px\' }" scrollHeight="200px" [itemSize]="50">\n    <ng-template pTemplate="header">Header Content</ng-template>\n    <ng-template pTemplate="item" let-item>\n        <div class="flex align-items-center p-2 h-full" [ngClass]="{ \'surface-hover\': item.index % 2 === 0 }">\n            {{ item.label }}\n        </div>\n    </ng-template>\n    <ng-template pTemplate="footer">Footer Content</ng-template>\n</p-virtualScroller>',html:'\n<div class="card flex justify-content-center">\n    <p-virtualScroller [value]="items" class="border-1 surface-border border-round" [style]="{ width: \'200px\' }" scrollHeight="200px" [itemSize]="50">\n        <ng-template pTemplate="header">Header Content</ng-template>\n        <ng-template pTemplate="item" let-item>\n            <div class="flex align-items-center p-2 h-full" [ngClass]="{ \'surface-hover\': item.index % 2 === 0 }">\n                {{ item.label }}\n            </div>\n        </ng-template>\n        <ng-template pTemplate="footer">Footer Content</ng-template>\n    </p-virtualScroller>\n</div>',typescript:"\nimport { Component, OnInit } from '@angular/core';\n\n@Component({\n    selector: 'virtual-scroller-template-demo',\n    templateUrl: './virtual-scroller-template-demo.html'\n})\nexport class VirtualScrollerTemplateDemo implements OnInit {\n    items = [];\n\n    ngOnInit(): void {\n        for (let i = 0; i < 10000; i++) {\n            this.items.push({ label: 'Item #' + i, index: i });\n        }\n    }\n}"}}ngOnInit(){for(let i=0;i<1e4;i++)this.items.push({label:"Item #"+i,index:i})}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["template-doc"]],inputs:{id:"id",title:"title"},decls:16,vars:8,consts:[[3,"title","id"],[1,"card","flex","justify-content-center"],["scrollHeight","200px",1,"border-1","surface-border","border-round",3,"value","itemSize"],["pTemplate","header"],["pTemplate","item"],["pTemplate","footer"],["selector","virtual-scroller-template-demo",3,"code"],[1,"flex","align-items-center","p-2","h-full",3,"ngClass"]],template:function(i,l){1&i&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"Header and Footer are the two sections that are capable of displaying custom content by using "),e.TgZ(4,"i"),e._uU(5,"header"),e.qZA(),e._uU(6," and "),e.TgZ(7,"i"),e._uU(8,"footer"),e.qZA(),e._uU(9," templates."),e.qZA()(),e.TgZ(10,"div",1)(11,"p-virtualScroller",2),e.YNc(12,ne,1,0,"ng-template",3),e.YNc(13,ce,2,4,"ng-template",4),e.YNc(14,se,1,0,"ng-template",5),e.qZA()(),e._UZ(15,"app-code",6),e.qZA()),2&i&&(e.xp6(1),e.Q6J("title",l.title)("id",l.id),e.xp6(10),e.Akn(e.DdM(7,de)),e.Q6J("value",l.items)("itemSize",50),e.xp6(4),e.Q6J("code",l.code))},dependencies:[a.mk,p.h,d.c,T,c.jx],encapsulation:2}),t})();var me=r(6544);let ue=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["accessibility-doc"]],inputs:{id:"id",title:"title"},decls:13,vars:2,consts:[[3,"title","id"]],template:function(i,l){1&i&&(e.TgZ(0,"app-developmentsection")(1,"app-docsectiontext",0)(2,"h3"),e._uU(3,"Screen Reader"),e.qZA(),e.TgZ(4,"p"),e._uU(5," VirtualScroller uses a semantic list element to list the items. No specific role is enforced, still you may use any aria role and attributes as any valid attribute is passed to the container element. List element can be also customized for accessibility using "),e.TgZ(6,"i"),e._uU(7,"listProps"),e.qZA(),e._uU(8," property. "),e.qZA(),e.TgZ(9,"h4"),e._uU(10,"Keyboard Support"),e.qZA(),e.TgZ(11,"p"),e._uU(12,"Component does not include any built-in interactive elements."),e.qZA()()()),2&i&&(e.xp6(1),e.Q6J("title",l.title)("id",l.id))},dependencies:[d.c,me.N],encapsulation:2}),t})();var ge=r(3408);let fe=(()=>{class t{constructor(){this.docs=[{id:"import",label:"Import",component:j},{id:"basic",label:"Basic",component:Q},{id:"template",label:"Template",component:pe},{id:"lazyload",label:"Lazy Load",component:B},{id:"programmatic",label:"Programmatic Scroll",component:re},{id:"style",label:"Style",component:Y},{id:"accessibility",label:"Accessibility",component:ue}],this.apiDocs=[{id:"properties",label:"Properties",component:K},{id:"events",label:"Events",component:R},{id:"methods",label:"Methods",component:X},{id:"templates",label:"Templates",component:W}]}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:1,vars:2,consts:[["title","Angular Virtual Scroller Component","header","VirtualScroller","description","VirtualScroller is a performant approach to render large amounts of data efficiently.",3,"docs","apiDocs"]],template:function(i,l){1&i&&e._UZ(0,"app-doc",0),2&i&&e.Q6J("docs",l.docs)("apiDocs",l.apiDocs)},dependencies:[ge.x],styles:[".product-item[_ngcontent-%COMP%]{display:flex;align-items:center;padding:1rem;width:100%;flex-wrap:nowrap}.product-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100px;box-shadow:0 3px 6px #00000029,0 3px 6px #0000003b;margin-right:1rem}.product-item[_ngcontent-%COMP%]   .product-list-detail[_ngcontent-%COMP%]{flex:1 1 0}.product-item[_ngcontent-%COMP%]   .product-list-action[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end}.product-item[_ngcontent-%COMP%]   .product-category-icon[_ngcontent-%COMP%]{vertical-align:middle;margin-right:.5rem}.product-item[_ngcontent-%COMP%]   .product-category[_ngcontent-%COMP%]{vertical-align:middle;line-height:1}.product-item.loading-item[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]{width:100px;height:66px;animation:pulse 1s infinite ease-in-out;margin-right:1rem}.product-item.loading-item[_ngcontent-%COMP%]   .product-list-detail[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .product-item.loading-item[_ngcontent-%COMP%]   .product-list-detail[_ngcontent-%COMP%]   .product-category[_ngcontent-%COMP%]{width:150px;height:14px;display:block;animation:pulse 1s infinite ease-in-out}.product-item.loading-item[_ngcontent-%COMP%]   .product-list-action[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{width:25px;height:14px;animation:pulse 1s infinite ease-in-out}@media screen and (max-width: 960px){.product-item[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:1rem}.product-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50px}.product-item[_ngcontent-%COMP%]   .product-category-icon[_ngcontent-%COMP%], .product-item[_ngcontent-%COMP%]   .product-category[_ngcontent-%COMP%]{display:none}}"]}),t})(),he=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[Z.Bz.forChild([{path:"",component:fe}]),Z.Bz]}),t})(),ve=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[a.ez,he,M]}),t})()}}]);