import{a as T,b as E,c as j,d as x,e as _,f as D,g as N,o as P}from"./chunk-6CF4QVOF.js";import"./chunk-G6IPGEOF.js";import{b as K}from"./chunk-4PJBVILJ.js";import"./chunk-YPDUCIS6.js";import"./chunk-7A4NIGQY.js";import{a as I}from"./chunk-2YXIXTHU.js";import{$a as A,B as w,F as c,H as R,I as b,Qa as y,Ra as M,X as d,Y as u,ab as k,ca as S,cb as G,d as v,da as f,f as C,ia as g,ja as h,ka as n,la as s,ma as p,w as m,x as l}from"./chunk-PGRBZLYU.js";function U(e,t){e&1&&(s(0),n(1,"prappdb-respon-success-modal"),p())}function L(e,t){e&1&&(s(0),n(1,"prappdb-modal-konfirmasi-registrasi"),p())}function W(e,t){e&1&&(s(0),n(1,"prappdb-modal-allow-geolokasi-registrasi"),p())}var O=(()=>{let t=class t{constructor(i,o){this.stateKonfirmasi=i,this.stateGeo=o,this.view=!1,this.viewKonfirm=!1,this.viewAllow=!0,this.destroy=new C}ngOnInit(){this.konfirmRegister(),this.successRegister(),this.allowGeo()}konfirmRegister(){this.stateKonfirmasi.getProsesRegister.pipe(l(i=>{this.view=i}),m(this.destroy)).subscribe()}successRegister(){this.stateKonfirmasi.getSuccessRegister.pipe(l(i=>{this.viewKonfirm=i}),m(this.destroy)).subscribe()}allowGeo(){this.stateGeo.getAlloeGeoLocation.pipe(l(i=>{this.viewAllow=i}),m(this.destroy)).subscribe()}ngOnDestroy(){this.destroy.next(),this.destroy.complete()}};t.\u0275fac=function(o){return new(o||t)(u(T),u(E))},t.\u0275cmp=R({type:t,selectors:[["prappdb-registrasi"]],decls:10,vars:3,consts:[[1,"grid","md:grid-cols-5","lg:grid-cols-4","grid-row-2","pt-20","px-6","gap-5"],[1,"md:col-span-2","lg:col-span-1"],[1,"row-span-1","md:col-span-3","lg:col-span-3"],[4,"ngIf"]],template:function(o,r){o&1&&(g(0,"div",0)(1,"div",1),n(2,"prappdb-tahapan-registrasi-utama"),h(),g(3,"div",2),n(4,"router-outlet"),h(),s(5),n(6,"prappdb-respon-toast"),p(),S(7,U,2,0,"ng-container",3)(8,L,2,0,"ng-container",3)(9,W,2,0,"ng-container",3),h()),o&2&&(d(7),f("ngIf",r.viewKonfirm),d(),f("ngIf",r.view),d(),f("ngIf",r.viewAllow))},dependencies:[y,j,x,_,D,N,A]});let e=t;return e})();var a=(e,t)=>v(void 0,null,function*(){let z=c(K),i=c(I),o=c(k),r=yield i.get("halaman-registrasi");return t.url==="/"+r||t.url==="/registrasi/tambah-prestasi"&&r==="registrasi/prestasi"?!0:(o.navigate([r]),!1)});var q=[{path:"",component:O,children:[{path:"data-siswa",loadChildren:()=>import("./chunk-U6YI5KIS.js").then(e=>e.DataSiswaModule),canActivate:[a]},{path:"nilai-rapor",loadChildren:()=>import("./chunk-NEP5IFZP.js").then(e=>e.NilaiRaporModule),canActivate:[a]},{path:"prestasi",loadChildren:()=>import("./chunk-BMIJOEMO.js").then(e=>e.PrestasiModule),canActivate:[a]},{path:"tambah-prestasi",loadChildren:()=>import("./chunk-L2CHAEU7.js").then(e=>e.TambahPrestasiModule),canActivate:[a]},{path:"afirmasi-disabilitas",loadChildren:()=>import("./chunk-U2OQBQI3.js").then(e=>e.AfirmasiModule),canActivate:[a]},{path:"anak-guru",loadChildren:()=>import("./chunk-TH4ZARMS.js").then(e=>e.AnakGuruModule),canActivate:[a]},{path:"pindah-wali",loadChildren:()=>import("./chunk-WWJ7FWLE.js").then(e=>e.PindahWaliModule),canActivate:[a]},{path:"konfirmasi",loadChildren:()=>import("./chunk-TYKKFXN7.js").then(e=>e.KonfirmasiModule),canActivate:[a]}]}],fe=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=b({type:t}),t.\u0275inj=w({imports:[M,P,G.forChild(q)]});let e=t;return e})();export{fe as RegistrasiModule};