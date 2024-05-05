import{a as se}from"./chunk-ETNDFRPA.js";import{b as oe}from"./chunk-P4IB7WUJ.js";import{c as U,d as E,f as K,g as J,i as Q,j as X,k as Y,l as $,m as ee,n as te,o as ae,q as ie}from"./chunk-LFLMX4KY.js";import{a as ne}from"./chunk-ECMUYLIN.js";import{b as C,c as re}from"./chunk-X4AFOLDU.js";import{d as z}from"./chunk-IFURFOTJ.js";import{$a as q,B as T,H as j,I as L,L as x,M as w,N as c,Na as A,O as f,Oa as Z,V as H,Y as l,Z as b,bb as B,da as v,ea as m,g as W,i as I,ja as a,ka as i,l as D,la as h,ma as u,na as d,o as F,oa as G,pa as y,qa as O,s as N,u as M,v as k,w as P,x as p,xa as r,za as R}from"./chunk-YOW73LMR.js";function de(o,s){o&1&&(u(0),a(1,"div",1)(2,"span",2),r(3,"Info alert!"),i(),r(4," Sepertinya terjadi gangguan, harap mencoba kembali "),i(),d())}function pe(o,s){o&1&&(u(0),a(1,"div",27),c(),a(2,"svg",28),h(3,"path",29),i(),f(),a(4,"span",30),r(5,"Info"),i(),a(6,"div")(7,"span",2),r(8,"Danger alert!"),i(),r(9," Nomor surat harap diisi "),i()(),d())}function he(o,s){o&1&&(u(0),a(1,"div",27),c(),a(2,"svg",28),h(3,"path",29),i(),f(),a(4,"span",30),r(5,"Info"),i(),a(6,"div")(7,"span",2),r(8,"Danger alert!"),i(),r(9," Instansi wali harap diisi "),i()(),d())}function ue(o,s){o&1&&(u(0),c(),a(1,"svg",31),h(2,"path",32),i(),f(),a(3,"p",33)(4,"span",34),r(5,"Click to upload"),i()(),a(6,"p",35),r(7,"Hanya file berformat PNG, JPG, PDF "),i(),d())}function ce(o,s){if(o&1&&(u(0),c(),a(1,"svg",36),h(2,"path",37)(3,"path",38),i(),f(),a(4,"a",39)(5,"p",40),r(6),i()(),d()),o&2){let V=O();l(4),m("href",V.tambahPindahWali.file_url,H),l(2),R(" ",V.nameFile," ")}}function ge(o,s){o&1&&(u(0),a(1,"div",27),c(),a(2,"svg",28),h(3,"path",29),i(),f(),a(4,"span",30),r(5,"Info"),i(),a(6,"div")(7,"span",2),r(8,"Danger alert!"),i(),r(9," Harap mengupload surat "),i()(),d())}function fe(o,s){o&1&&(u(0),r(1," Simpan dan Lanjut "),d())}function be(o,s){o&1&&(u(0),c(),a(1,"svg",41),h(2,"path",42)(3,"path",43),i(),r(4," Loading... "),d())}var le=(()=>{let s=class s{constructor(t,e,n,g,S,_){this.fb=t,this.callApiServe=e,this.hasilValidasiNikServe=n,this.tahapanDaftarServe=g,this.router=S,this.responServe=_,this.destroy=new I,this.tambahPindahWaliGangguan=!1,this.tambahPindahWali=se,this.pindahWaliFormData=new FormData,this.jenisError=!1,this.isLoading=!1,this.nameFile=null,this.messageError=null}ngOnInit(){this.dataPindahWaliForm(),this.dataPindahWali()}ngOnDestroy(){this.destroy.next(),this.destroy.complete()}dataPindahWaliForm(){this.tambahPindahWaliForm=this.fb.group({no_surat:[null,[E.required]],instansi_ortu:[null,[E.required]],name_file:[null,[E.required]],file:[null]})}dataPindahWali(){this.hasilValidasiNikServe.getHasilValidasiNik.pipe(k(t=>this.callApiServe.getWithParam("siswa/pindah_ortu","siswa_id",parseInt(t.siswa_id))),F(t=>t.data),p(t=>this.tambahPindahWali=t),p(t=>{this.tambahPindahWaliForm.get("no_surat")?.setValue(t.no_sk),this.tambahPindahWaliForm.get("instansi_ortu")?.setValue(t.instansi_ortu),this.tambahPindahWaliForm.get("name_file")?.setValue(t.file_name),this.tambahPindahWaliForm.get("file")?.setValue(t.file_url),this.nameFile=t.file_name===""?null:t.file_name}),P(this.destroy)).subscribe()}get nomorSuratControl(){return this.tambahPindahWaliForm.get("no_surat")}get noNomorSUrat(){return this.nomorSuratControl.hasError("required")&&this.nomorSuratControl.touched}get instansiOrtuControl(){return this.tambahPindahWaliForm.get("instansi_ortu")}get noInstansiOrtu(){return this.instansiOrtuControl.hasError("required")&&this.instansiOrtuControl.touched}get nameSuratControl(){return this.tambahPindahWaliForm.get("name_file")}get noNameSurat(){return this.nameSuratControl.hasError("required")&&this.nameSuratControl.touched}get nameSertifikatControl(){return this.tambahPindahWaliForm.get("name_file")}get noNameSertifikat(){return this.nameSertifikatControl.hasError("required")&&this.nameSertifikatControl.touched}onInstansiOrtu(t){return W(this,null,function*(){yield this.tambahPindahWaliForm.get("instansi_ortu")?.setValue(t.target.value)})}uploadFile(t){return W(this,null,function*(){try{let e=yield t.target.files[0];if(yield this.tambahPindahWaliForm.patchValue({file:e}),yield this.tambahPindahWaliForm.patchValue({name_file:e.name}),e.type!=="image/png"&&e.type!=="image/jpg"&&e.type!=="image/jpeg"&&e.type!=="application/pdf")throw new Error("Format File tidak diizinkan");this.nameFile=e.name}catch{}})}okTambah(){D(this.tambahPindahWaliForm.valid).pipe(p(()=>this.isLoading=!0),F(t=>{if(!t)throw Object.values(this.tambahPindahWaliForm.controls).forEach(e=>{e.markAsTouched()}),new Error("harap mengisi form data");return t}),k(()=>this.hasilValidasiNikServe.getHasilValidasiNik),p(t=>{this.pindahWaliFormData=new FormData,this.pindahWaliFormData.append("nik",t.nik),this.pindahWaliFormData.append("nisn",t.nisn),this.pindahWaliFormData.append("instansi_ortu",this.tambahPindahWaliForm.get("instansi_ortu")?.value),this.pindahWaliFormData.append("no_surat",this.tambahPindahWaliForm.get("no_surat")?.value),this.pindahWaliFormData.append("file",this.tambahPindahWaliForm.get("file")?.value)}),k(()=>this.callApiServe.post(this.pindahWaliFormData,"siswa/simpan/pindah_ortu")),p(t=>this.responServe.updateRespon({mode:"success",pesan:t.message})),p(()=>this.dataPindahWaliForm()),p(()=>{let t=C;t.forEach(e=>{e.name==="data siswa"||e.name==="nilai rapor"||e.name==="prestasi"||e.name==="afirmasi / disabilitas"||e.name==="anak guru"||e.name==="perpindahan orang tua / wali"?e.process="done":e.name==="konfirmasi"&&(e.process="on proses")}),this.tahapanDaftarServe.updateStepRegistrasi(t,"register/konfirmasi")}),p(()=>this.router.navigate(["register/konfirmasi"])),N(t=>{if(this.isLoading=!1,this.responServe.updateRespon({mode:"error",pesan:t.error.message}),t.error.message==="Data sudah tersedia."){let e=C;e.forEach(n=>{n.name==="data siswa"||n.name==="nilai rapor"||n.name==="prestasi"||n.name==="afirmasi / disabilitas"||n.name==="anak guru"||n.name==="perpindahan orang tua / wali"?n.process="done":n.name==="konfirmasi"&&(n.process="on proses")}),this.tahapanDaftarServe.updateStepRegistrasi(e,"register/konfirmasi"),this.router.navigate(["register/konfirmasi"])}throw t}),p(()=>this.isLoading=!1),M(5e3),P(this.destroy)).subscribe()}lewati(){let t=C;t.forEach(e=>{e.name==="data siswa"||e.name==="nilai rapor"||e.name==="prestasi"||e.name==="afirmasi / disabilitas"||e.name==="anak guru"||e.name==="perpindahan orang tua / wali"?e.process="done":e.name==="konfirmasi"&&(e.process="on proses")}),this.tahapanDaftarServe.updateStepRegistrasi(t,"register/konfirmasi"),this.router.navigate(["register/konfirmasi"])}kembali(){let t=C;t.forEach(e=>{e.name==="data siswa"||e.name==="nilai rapor"||e.name==="prestasi"||e.name==="afirmasi / disabilitas"?e.process="done":e.name==="anak guru"?e.process="on proses":e.name==="perpindahan orang tua / wali"&&(e.process="none")}),this.tahapanDaftarServe.updateStepRegistrasi(t,"register/anak-guru"),this.router.navigate(["register/anak-guru"])}};s.\u0275fac=function(e){return new(e||s)(b(ae),b(ne),b(z),b(re),b(q),b(oe))},s.\u0275cmp=j({type:s,selectors:[["prappdb-pindah-wali"]],decls:58,vars:9,consts:[["formDir","ngForm"],["role","alert",1,"p-4","mb-4","text-sm","text-blue-800","rounded-lg","bg-blue-50","dark:bg-gray-800","dark:text-blue-400"],[1,"font-medium"],[4,"ngIf"],["enctype","multipart/form-data",1,"space-y-4","pb-1",3,"submit","formGroup"],[1,"mb-4","text-lg","font-medium","leading-none","text-gray-900"],[1,"grid","gap-4","mb-4","sm:grid-cols-2"],["for","no_surat",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],[1,"text-red-500"],["type","text","name","no_surat","id","no_surat","placeholder","Nomor surat","formControlName","no_surat",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-blue-500","focus:border-blue-500","block","w-full","p-2.5","dark:bg-gray-600","dark:border-gray-500","dark:placeholder-gray-400","dark:text-white"],["for","instansi_ortu",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["id","instansi_ortu","name","instansi_ortu","formControlName","instansi_ortu",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-primary-500","focus:border-primary-500","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-primary-500","dark:focus:border-primary-500",3,"change"],["value","null"],["value","negeri"],["value","swasta"],[1,"mb-4"],[1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],[1,"flex","justify-center","items-center","w-full"],["for","dropzone-file",1,"flex","flex-col","justify-center","items-center","w-full","h-64","bg-gray-50","rounded-lg","border-2","border-gray-300","border-dashed","cursor-pointer","dark:hover:bg-bray-800","dark:bg-gray-700","hover:bg-gray-100","dark:border-gray-600","dark:hover:border-gray-500","dark:hover:bg-gray-600"],[1,"flex","flex-col","justify-center","items-center","pt-5","pb-6"],["id","dropzone-file","type","file",1,"hidden",3,"change"],[1,"items-center","space-y-2","md:flex-row","md:justify-end","sm:flex","sm:flex-col","sm:space-y-0","sm:space-x-4","mb-4","md:mb-4"],["type","button",1,"gap-1","w-full","sm:w-auto","justify-center","inline-flex","text-black","bg-gray-100","hover:ring-1","hover:ring-gray-500","font-medium","rounded-lg","text-sm","px-5","py-2.5","text-center",3,"click"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 24 24","fill","currentColor",1,"w-6","h-6"],["fill-rule","evenodd","d","M9.53 2.47a.75.75 0 0 1 0 1.06L4.81 8.25H15a6.75 6.75 0 0 1 0 13.5h-3a.75.75 0 0 1 0-1.5h3a5.25 5.25 0 1 0 0-10.5H4.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0Z","clip-rule","evenodd"],["type","submit",1,"w-full","sm:w-auto","justify-center","items-center","text-white","inline-flex","gap-3","bg-primary-main","hover:bg-primary-hover","hover:text-white","font-medium","rounded-lg","text-sm","px-5","py-2.5","text-center"],["fill-rule","evenodd","d","M14.47 2.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H9a5.25 5.25 0 1 0 0 10.5h3a.75.75 0 0 1 0 1.5H9a6.75 6.75 0 0 1 0-13.5h10.19l-4.72-4.72a.75.75 0 0 1 0-1.06Z","clip-rule","evenodd"],["role","alert",1,"mt-1","flex","items-center","p-4","mb-4","text-sm","text-red-800","rounded-lg","bg-red-50","dark:bg-gray-800","dark:text-red-400"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","currentColor","viewBox","0 0 20 20",1,"flex-shrink-0","inline","w-4","h-4","me-3"],["d","M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"],[1,"sr-only"],["aria-hidden","true","fill","none","stroke","currentColor","viewbox","0 0 24 24","xmlns","http://www.w3.org/2000/svg",1,"mb-3","w-10","h-10","text-gray-400"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"],[1,"mb-2","text-sm","text-gray-500","dark:text-gray-400"],[1,"font-semibold"],[1,"text-xs","text-gray-500","dark:text-gray-400"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 24 24","fill","currentColor",1,"mb-3","w-10","h-10","text-gray-400"],["fill-rule","evenodd","d","M9 1.5H5.625c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5Zm6.61 10.936a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 14.47a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z","clip-rule","evenodd"],["d","M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z"],["target","_blank","rel","noopener noreferrer",1,"font-medium","text-md","hover:underline",3,"href"],[1,"mb-2","text-sm","text-gray-500"],["aria-hidden","true","role","status","viewBox","0 0 100 101","fill","none","xmlns","http://www.w3.org/2000/svg",1,"inline","w-4","h-4","me-3","text-white","animate-spin"],["d","M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z","fill","#E5E7EB"],["d","M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z","fill","currentColor"]],template:function(e,n){if(e&1){let g=G();u(0)(1),a(2,"div",1)(3,"span",2),r(4,"Informasi!"),i(),r(5," Tahapan ini bisa dilewati, anda bisa langsung ke proses berikutnya "),i(),d(),v(6,de,5,0,"ng-container",3),a(7,"form",4,0),y("submit",function(){return x(g),w(n.okTambah())}),a(9,"h3",5),r(10," Bukti Perpindahan Orang tua/Wali "),i(),a(11,"div",6)(12,"div")(13,"label",7),r(14," Nomor Surat Ket. Pindah "),a(15,"span",8),r(16,"*"),i()(),h(17,"input",9),v(18,pe,10,0,"ng-container",3),i(),a(19,"div")(20,"label",10),r(21," Instansi Orang tua/Wali "),a(22,"span",8),r(23,"*"),i()(),a(24,"select",11),y("change",function(_){return x(g),w(n.onInstansiOrtu(_))}),a(25,"option",12),r(26,"Pilih Instansi"),i(),a(27,"option",13),r(28,"Negeri"),i(),a(29,"option",14),r(30,"Swasta"),i()(),v(31,he,10,0,"ng-container",3),i()(),a(32,"div",15)(33,"span",16),r(34," Surat Ket. Pindah "),a(35,"span",8),r(36,"*"),i()(),a(37,"div",17)(38,"label",18)(39,"div",19),v(40,ue,8,0,"ng-container",3)(41,ce,7,2,"ng-container",3),i(),a(42,"input",20),y("change",function(_){return x(g),w(n.uploadFile(_))}),i()()(),v(43,ge,10,0,"ng-container",3),i(),a(44,"div",21)(45,"button",22),y("click",function(){return x(g),w(n.kembali())}),c(),a(46,"svg",23),h(47,"path",24),i(),f(),a(48,"span"),r(49,"Kembali"),i()(),a(50,"button",25),v(51,fe,2,0,"ng-container",3)(52,be,5,0,"ng-container",3),i(),a(53,"button",22),y("click",function(){return x(g),w(n.lewati())}),a(54,"span"),r(55,"Lewati"),i(),c(),a(56,"svg",23),h(57,"path",26),i()()()(),d()}e&2&&(l(6),m("ngIf",n.tambahPindahWaliGangguan),l(),m("formGroup",n.tambahPindahWaliForm),l(11),m("ngIf",n.noNomorSUrat),l(13),m("ngIf",n.noInstansiOrtu),l(9),m("ngIf",n.nameFile===null),l(),m("ngIf",n.nameFile!==null),l(2),m("ngIf",n.noNameSurat),l(8),m("ngIf",!n.isLoading),l(),m("ngIf",n.isLoading))},dependencies:[A,Q,ee,te,U,$,K,J,X,Y]});let o=s;return o})();var ve=[{path:"",component:le}],je=(()=>{let s=class s{};s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=L({type:s}),s.\u0275inj=T({imports:[Z,ie,B.forChild(ve)]});let o=s;return o})();export{je as PindahWaliModule};
