import{b as F}from"./chunk-P4IB7WUJ.js";import{b as K,f as G,h as H,p as P}from"./chunk-LFLMX4KY.js";import{a as B}from"./chunk-ECMUYLIN.js";import{b as Z,c as C}from"./chunk-X4AFOLDU.js";import{d as A}from"./chunk-IFURFOTJ.js";import{$a as V,B as _,H as j,I,N as f,Na as L,O as M,Oa as T,Y as m,Z as l,bb as R,da as x,ea as d,i as y,ja as n,ka as r,l as S,la as u,ma as g,na as h,o as b,pa as v,qa as D,s as w,v as k,w as E,x as p,xa as o,za as N}from"./chunk-YOW73LMR.js";function Q(a,t){if(a&1&&(g(0),n(1,"div",13)(2,"span",14),o(3,"Info alert!"),r(),o(4),r(),h()),a&2){let J=D();m(4),N(" ",J.messageError," ")}}function W(a,t){a&1&&(g(0),n(1,"span"),o(2,"Konfirmasi"),r(),f(),n(3,"svg",10),u(4,"path",15),r(),h())}function X(a,t){a&1&&(g(0),f(),n(1,"svg",16),u(2,"path",17)(3,"path",18),r(),o(4," Loading... "),h())}var O=(()=>{let t=class t{constructor(i,e,s,c,U,q){this.hasilValidasiNikServe=i,this.tahapanDaftarServ=e,this.responServe=s,this.callApiServe=c,this.tahapanDaftarServe=U,this.router=q,this.destroy=new y,this.agree=!1,this.konfirmasiGangguan=!1,this.isLoading=!1,this.messageError=null}ngOnInit(){}ngOnDestroy(){this.destroy.next(),this.destroy.complete()}onCheckboxChange(){this.agree=!this.agree}kembali(){let i=Z;i.forEach(e=>{e.name==="data siswa"||e.name==="nilai rapor"||e.name==="prestasi"||e.name==="afirmasi / disabilitas"||e.name==="anak guru"?e.process="done":e.name==="perpindahan orang tua / wali"?e.process="on proses":e.name==="konfirmasi"&&(e.process="none")}),this.tahapanDaftarServe.updateStepRegistrasi(i,"register/pindah-wali"),this.router.navigate(["register/pindah-wali"])}konfirmasi(){S(this.agree).pipe(p(()=>this.konfirmasiGangguan=!1),p(()=>this.isLoading=!0),b(i=>{if(!i)throw new Error("Harap di ceklist");return i}),k(()=>this.hasilValidasiNikServe.getHasilValidasiNik),k(i=>this.callApiServe.post({nik:i.nik,nisn:i.nisn},"siswa/simpan/konfirmasi")),p(i=>this.responServe.updateSuccessDaftarRespon({mode:"success",pesan:i.message})),p(()=>this.isLoading=!1),w(i=>{throw this.isLoading=!1,this.responServe.updateRespon({mode:"error",pesan:i.error.message}),this.konfirmasiGangguan=!0,i.error.message==="Silahkan tunggu verifikasi operator"&&(this.hasilValidasiNikServe.clearHasilValidasiNik(),this.tahapanDaftarServe.clearStepRegistrasi(),this.router.navigate(["/"])),i}),E(this.destroy)).subscribe()}};t.\u0275fac=function(e){return new(e||t)(l(A),l(C),l(F),l(B),l(C),l(V))},t.\u0275cmp=j({type:t,selectors:[["prappdb-konfirmasi"]],decls:20,vars:4,consts:[[1,"container","mx-auto","md:py-12"],[4,"ngIf"],[1,"max-w-full","mx-auto","md:px-8","md:py-4","px-2","py-2"],[1,"text-2xl","font-medium","mb-4"],[1,"font-normal","text-gray-700","mb-6"],[1,"flex","items-center","mb-4"],["type","checkbox",1,"form-checkbox","h-5","w-5","text-indigo-600",3,"change","ngModel"],[1,"ml-2","text-gray-700"],[1,"items-center","space-y-2","md:flex-row","md:justify-end","sm:flex","sm:flex-col","sm:space-y-0","sm:space-x-4","mb-4","md:mb-4"],["type","button",1,"gap-1","w-full","sm:w-auto","justify-center","inline-flex","text-black","bg-gray-100","hover:ring-1","hover:ring-gray-500","font-medium","rounded-lg","text-sm","px-5","py-2.5","text-center",3,"click"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 24 24","fill","currentColor",1,"w-6","h-6"],["fill-rule","evenodd","d","M9.53 2.47a.75.75 0 0 1 0 1.06L4.81 8.25H15a6.75 6.75 0 0 1 0 13.5h-3a.75.75 0 0 1 0-1.5h3a5.25 5.25 0 1 0 0-10.5H4.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0Z","clip-rule","evenodd"],["type","button",1,"gap-1","w-full","sm:w-auto","justify-center","text-white","inline-flex","bg-green-500","hover:bg-green-800","hover:text-white","font-medium","rounded-lg","text-sm","px-5","py-2.5","text-center",3,"click"],["role","alert",1,"p-4","mb-4","text-sm","text-red-800","rounded-lg","bg-red-50"],[1,"font-medium"],["fill-rule","evenodd","d","M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z","clip-rule","evenodd"],["aria-hidden","true","role","status","viewBox","0 0 100 101","fill","none","xmlns","http://www.w3.org/2000/svg",1,"inline","w-4","h-4","me-3","text-white","animate-spin"],["d","M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z","fill","#E5E7EB"],["d","M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z","fill","currentColor"]],template:function(e,s){e&1&&(n(0,"div",0),x(1,Q,5,1,"ng-container",1),n(2,"div",2)(3,"h2",3),o(4,"Konfirmasi Penggunaan Data Pribadi"),r(),n(5,"p",4),o(6,"Dengan ini saya menyetujui penggunaan data pribadi yang saya berikan untuk digunakan dalam proses Penerimaan Peserta Didik Baru (PPDB) dan saya menyatakan bahwa data yang saya isikan adalah benar. Jika dikemudian hari terbukti data yang saya isikan adalah palsu maka saya siap di diskualifikasi dari calon peserta didik baru dan ditindaklanjuti secara hukum yang berlaku."),r(),n(7,"label",5)(8,"input",6),v("change",function(){return s.onCheckboxChange()}),r(),n(9,"span",7),o(10,"Saya setuju dengan pernyataan di atas."),r()(),n(11,"div",8)(12,"button",9),v("click",function(){return s.kembali()}),f(),n(13,"svg",10),u(14,"path",11),r(),M(),n(15,"span"),o(16,"Kembali"),r()(),n(17,"button",12),v("click",function(){return s.konfirmasi()}),x(18,W,5,0,"ng-container",1)(19,X,5,0,"ng-container",1),r()()()()),e&2&&(m(),d("ngIf",s.konfirmasiGangguan),m(7),d("ngModel",s.agree),m(10),d("ngIf",!s.isLoading),m(),d("ngIf",s.isLoading))},dependencies:[L,K,G,H]});let a=t;return a})();var Y=[{path:"",component:O}],fe=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=I({type:t}),t.\u0275inj=_({imports:[T,P,R.forChild(Y)]});let a=t;return a})();export{fe as KonfirmasiModule};