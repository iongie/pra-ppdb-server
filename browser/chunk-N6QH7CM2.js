import{a as le,b as pe}from"./chunk-PY5V5PRX.js";import{b as me}from"./chunk-P4IB7WUJ.js";import{c as W,d as F,f as $,g as Q,i as X,j as Y,k as ee,l as te,m as ie,n as ae,o as ne,q as re}from"./chunk-LFLMX4KY.js";import{a as se}from"./chunk-ECMUYLIN.js";import{b as E,c as oe}from"./chunk-X4AFOLDU.js";import{d as U}from"./chunk-IFURFOTJ.js";import{$a as q,B as M,H as L,I as H,L as S,M as x,Ma as P,N as c,Na as O,O as b,Oa as B,V as G,Y as m,Z as v,bb as z,da as g,ea as l,g as j,i as I,ja as i,ka as a,l as D,la as u,ma as f,na as p,o as V,oa as R,pa as C,qa as K,s as N,u as T,v as k,w as A,x as d,xa as n,ya as Z,za as J}from"./chunk-YOW73LMR.js";function ue(s,o){s&1&&(f(0),i(1,"div",26)(2,"span",2),n(3,"Info alert!"),a(),n(4," Sepertinya terjadi gangguan, harap mencoba kembali "),a(),p())}function ce(s,o){if(s&1&&(f(0),i(1,"option",27),n(2),a(),p()),s&2){let w=o.$implicit;m(),l("value",w.id),m(),Z(w.n_jenis_afirmasi)}}function ge(s,o){s&1&&(f(0),i(1,"div",28),c(),i(2,"svg",29),u(3,"path",30),a(),b(),i(4,"span",31),n(5,"Info"),a(),i(6,"div")(7,"span",2),n(8,"Penting!"),a(),n(9," Jenis afirmasi harap diisi "),a()(),p())}function he(s,o){s&1&&(f(0),i(1,"div",28),c(),i(2,"svg",29),u(3,"path",30),a(),b(),i(4,"span",31),n(5,"Info"),a(),i(6,"div")(7,"span",2),n(8,"Penting!"),a(),n(9," Nomor kartu harap diisi "),a()(),p())}function be(s,o){s&1&&(f(0),c(),i(1,"svg",32),u(2,"path",33),a(),b(),i(3,"p",34)(4,"span",35),n(5,"Click to upload"),a()(),i(6,"p",36),n(7,"Hanya file berformat PNG, JPG, PDF "),a(),p())}function ve(s,o){if(s&1&&(f(0),c(),i(1,"svg",37),u(2,"path",38)(3,"path",39),a(),b(),i(4,"a",40)(5,"p",34),n(6),a()(),p()),s&2){let w=K();m(4),l("href",w.afirmasiData.file_url,G),m(2),J(" ",w.nameFile," ")}}function _e(s,o){s&1&&(f(0),i(1,"div",28),c(),i(2,"svg",29),u(3,"path",30),a(),b(),i(4,"span",31),n(5,"Info"),a(),i(6,"div")(7,"span",2),n(8,"Penting!"),a(),n(9," Harap mengupload kartu keluarga "),a()(),p())}function Se(s,o){s&1&&(f(0),n(1," Simpan dan Lanjut "),p())}function xe(s,o){s&1&&(f(0),c(),i(1,"svg",41),u(2,"path",42)(3,"path",43),a(),n(4," Loading... "),p())}var de=(()=>{let o=class o{constructor(t,e,r,h,_,y){this.fb=t,this.callApiServe=e,this.hasilValidasiNikServe=r,this.tahapanDaftarServe=h,this.router=_,this.responServe=y,this.destroy=new I,this.tambahAfirmasiGangguan=!1,this.afirmasiFormData=null,this.afirmasiData=pe,this.jenis=le,this.jenisError=!1,this.isLoading=!1,this.nameFile=null,this.messageError=null}ngOnInit(){this.getJenis(),this.dataAfirmasiForm(),this.dataAfirmasi()}ngOnDestroy(){this.destroy.next(),this.destroy.complete()}dataAfirmasiForm(){this.tambahAfirmasiForm=this.fb.group({jns_afirmasi_id:[null,[F.required]],no_kartu:[null,[F.required]],name_file:[null,[F.required]],file:[null]})}dataAfirmasi(){this.hasilValidasiNikServe.getHasilValidasiNik.pipe(k(t=>this.callApiServe.getWithParam("siswa/afirmasi","siswa_id",parseInt(t.siswa_id))),V(t=>t.data),d(t=>this.afirmasiData=t),d(t=>{this.tambahAfirmasiForm.get("jns_afirmasi_id")?.setValue(t.tmjenis_afirmasi_id),this.tambahAfirmasiForm.get("no_kartu")?.setValue(t.nomor),this.tambahAfirmasiForm.get("name_file")?.setValue(t.file_name),this.tambahAfirmasiForm.get("file")?.setValue(t.file_url),this.nameFile=t.file_name===""?null:t.file_name}),A(this.destroy)).subscribe()}getJenis(){this.callApiServe.get("afirmasi").pipe(d(()=>this.jenisError=!1),A(this.destroy)).subscribe({next:t=>{this.jenis=t.data},error:t=>{this.jenisError=!0}})}onJenisChange(t){return j(this,null,function*(){yield this.tambahAfirmasiForm.get("jns_afirmasi_id")?.setValue(t.target.value)})}get jenisAfirmasiIdControl(){return this.tambahAfirmasiForm.get("jns_afirmasi_id")}get noJenisAfirmasiId(){return this.jenisAfirmasiIdControl.hasError("required")&&this.jenisAfirmasiIdControl.touched}get nomorKartuControl(){return this.tambahAfirmasiForm.get("no_kartu")}get noNomorKartu(){return this.nomorKartuControl.hasError("required")&&this.nomorKartuControl.touched}get nameSertifikatControl(){return this.tambahAfirmasiForm.get("name_file")}get noNameSertifikat(){return this.nameSertifikatControl.hasError("required")&&this.nameSertifikatControl.touched}uploadFile(t){return j(this,null,function*(){try{let e=yield t.target.files[0];if(yield this.tambahAfirmasiForm.patchValue({file:e}),yield this.tambahAfirmasiForm.patchValue({name_file:e.name}),e.type!=="image/png"&&e.type!=="image/jpg"&&e.type!=="image/jpeg"&&e.type!=="application/pdf")throw new Error("Format File tidak diizinkan");this.nameFile=e.name}catch{}})}okTambah(){D(this.tambahAfirmasiForm.valid).pipe(d(()=>this.isLoading=!0),V(t=>{if(!t)throw Object.values(this.tambahAfirmasiForm.controls).forEach(e=>{e.markAsTouched()}),new Error("harap mengisi form data");return t}),k(()=>this.hasilValidasiNikServe.getHasilValidasiNik),d(t=>{this.afirmasiFormData=new FormData,this.afirmasiFormData.append("nik",t.nik),this.afirmasiFormData.append("nisn",t.nisn),this.afirmasiFormData.append("jns_afirmasi_id",this.tambahAfirmasiForm.get("jns_afirmasi_id")?.value),this.afirmasiFormData.append("no_kartu",this.tambahAfirmasiForm.get("no_kartu")?.value),this.afirmasiFormData.append("file",this.tambahAfirmasiForm.get("file")?.value)}),k(()=>this.callApiServe.post(this.afirmasiFormData,"siswa/simpan/afirmasi")),d(t=>this.responServe.updateRespon({mode:"success",pesan:t.message})),d(()=>this.dataAfirmasiForm()),d(()=>{let t=E;t.forEach(e=>{e.name==="data siswa"||e.name==="nilai rapor"||e.name==="prestasi"||e.name==="afirmasi / disabilitas"?e.process="done":e.name==="anak guru"&&(e.process="on proses")}),this.tahapanDaftarServe.updateStepRegistrasi(t,"register/anak-guru")}),d(()=>this.router.navigate(["register/anak-guru"])),N(t=>{if(this.isLoading=!1,this.responServe.updateRespon({mode:"error",pesan:t.error.message}),t.error.message==="Data sudah tersedia."){let e=E;e.forEach(r=>{r.name==="data siswa"||r.name==="nilai rapor"||r.name==="prestasi"||r.name==="afirmasi / disabilitas"?r.process="done":r.name==="anak guru"&&(r.process="on proses")}),this.tahapanDaftarServe.updateStepRegistrasi(e,"register/anak-guru"),this.router.navigate(["register/anak-guru"])}throw t}),d(()=>this.isLoading=!1),T(5e3),A(this.destroy)).subscribe()}lewati(){let t=E;t.forEach(e=>{e.name==="data siswa"||e.name==="nilai rapor"||e.name==="prestasi"||e.name==="afirmasi / disabilitas"?e.process="done":e.name==="anak guru"&&(e.process="on proses")}),this.tahapanDaftarServe.updateStepRegistrasi(t,"register/anak-guru"),this.router.navigate(["register/anak-guru"])}kembali(){let t=E;t.forEach(e=>{e.name==="data siswa"||e.name==="nilai rapor"?e.process="done":e.name==="prestasi"?e.process="on proses":e.name==="afirmasi / disabilitas"&&(e.process="none")}),this.tahapanDaftarServe.updateStepRegistrasi(t,"register/prestasi"),this.router.navigate(["register/prestasi"]),this.dataAfirmasiForm()}};o.\u0275fac=function(e){return new(e||o)(v(ne),v(se),v(U),v(oe),v(q),v(me))},o.\u0275cmp=L({type:o,selectors:[["prappdb-afirmasi"]],decls:55,vars:10,consts:[["formDir","ngForm"],["role","alert",1,"p-4","mb-4","text-sm","text-blue-800","rounded-lg","bg-blue-50","dark:bg-gray-800","dark:text-blue-400"],[1,"font-medium"],[4,"ngIf"],["enctype","multipart/form-data",1,"space-y-4","pb-1",3,"submit","formGroup"],[1,"mb-4","text-lg","font-medium","leading-none","text-gray-900"],[1,"grid","gap-4","mb-4","sm:grid-cols-2"],["for","jns_afirmasi_id",1,"block","mb-2","text-sm","font-medium","text-gray-900"],[1,"text-red-500"],["name","jns_afirmasi_id","id","jns_afirmasi_id","formControlName","jns_afirmasi_id",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-primary-500","focus:border-primary-500","block","w-full","p-2.5",3,"change"],["value","null"],[4,"ngFor","ngForOf"],["for","no_kartu",1,"block","mb-2","text-sm","font-medium","text-gray-900"],["type","text","name","no_kartu","id","no_kartu","placeholder","Nomor Kartu","formControlName","no_kartu",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-blue-500","focus:border-blue-500","block","w-full","p-2.5"],[1,"mb-4"],[1,"block","mb-2","text-sm","font-medium","text-gray-900"],[1,"flex","justify-center","items-center","w-full"],["for","dropzone-file",1,"flex","flex-col","justify-center","items-center","w-full","h-64","bg-gray-50","rounded-lg","border-2","border-gray-300","border-dashed","cursor-pointerhover:bg-gray-100"],[1,"flex","flex-col","justify-center","items-center","pt-5","pb-6"],["id","dropzone-file","type","file",1,"hidden",3,"change"],[1,"items-center","space-y-2","md:flex-row","md:justify-end","sm:flex","sm:flex-col","sm:space-y-0","sm:space-x-4","mb-4","md:mb-4"],["type","button",1,"gap-1","w-full","sm:w-auto","justify-center","inline-flex","text-black","bg-gray-100","hover:ring-1","hover:ring-gray-500","font-medium","rounded-lg","text-sm","px-5","py-2.5","text-center",3,"click"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 24 24","fill","currentColor",1,"w-6","h-6"],["fill-rule","evenodd","d","M9.53 2.47a.75.75 0 0 1 0 1.06L4.81 8.25H15a6.75 6.75 0 0 1 0 13.5h-3a.75.75 0 0 1 0-1.5h3a5.25 5.25 0 1 0 0-10.5H4.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0Z","clip-rule","evenodd"],["type","submit",1,"w-full","sm:w-auto","justify-center","items-center","text-white","inline-flex","gap-3","bg-primary-main","hover:bg-primary-hover","hover:text-white","font-medium","rounded-lg","text-sm","px-5","py-2.5","text-center"],["fill-rule","evenodd","d","M14.47 2.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H9a5.25 5.25 0 1 0 0 10.5h3a.75.75 0 0 1 0 1.5H9a6.75 6.75 0 0 1 0-13.5h10.19l-4.72-4.72a.75.75 0 0 1 0-1.06Z","clip-rule","evenodd"],["role","alert",1,"p-4","mb-4","text-sm","text-red-800","rounded-lg","bg-red-50"],[3,"value"],["role","alert",1,"mt-1","flex","items-center","p-4","mb-4","text-sm","text-red-800","rounded-lg","bg-red-50"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","currentColor","viewBox","0 0 20 20",1,"flex-shrink-0","inline","w-4","h-4","me-3"],["d","M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"],[1,"sr-only"],["aria-hidden","true","fill","none","stroke","currentColor","viewbox","0 0 24 24","xmlns","http://www.w3.org/2000/svg",1,"mb-3","w-10","h-10","text-gray-400"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"],[1,"mb-2","text-sm","text-gray-500"],[1,"font-semibold"],[1,"text-xs","text-gray-500"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 24 24","fill","currentColor",1,"mb-3","w-10","h-10","text-gray-400"],["fill-rule","evenodd","d","M9 1.5H5.625c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5Zm6.61 10.936a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 14.47a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z","clip-rule","evenodd"],["d","M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z"],["target","_blank","rel","noopener noreferrer",1,"font-medium","text-md","hover:underline",3,"href"],["aria-hidden","true","role","status","viewBox","0 0 100 101","fill","none","xmlns","http://www.w3.org/2000/svg",1,"inline","w-4","h-4","me-3","text-white","animate-spin"],["d","M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z","fill","#E5E7EB"],["d","M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z","fill","currentColor"]],template:function(e,r){if(e&1){let h=R();f(0)(1),i(2,"div",1)(3,"span",2),n(4,"Informasi!"),a(),n(5," Tahapan ini bisa dilewati, anda bisa langsung ke proses berikutnya "),a(),p(),g(6,ue,5,0,"ng-container",3),i(7,"form",4,0),C("submit",function(){return S(h),x(r.okTambah())}),i(9,"h3",5),n(10," Bukti Afirmasi atau Disabilitas "),a(),i(11,"div",6)(12,"div")(13,"label",7),n(14," Kategori "),i(15,"span",8),n(16,"*"),a()(),i(17,"select",9),C("change",function(y){return S(h),x(r.onJenisChange(y))}),i(18,"option",10),n(19,"Pilih Kategori Tujuan"),a(),g(20,ce,3,2,"ng-container",11),a(),g(21,ge,10,0,"ng-container",3),a(),i(22,"div")(23,"label",12),n(24," Nomor Kartu/Surat "),i(25,"span",8),n(26,"*"),a()(),u(27,"input",13),g(28,he,10,0,"ng-container",3),a()(),i(29,"div",14)(30,"span",15),n(31," Upload Kartu/Surat "),i(32,"span",8),n(33,"*"),a()(),i(34,"div",16)(35,"label",17)(36,"div",18),g(37,be,8,0,"ng-container",3)(38,ve,7,2,"ng-container",3),a(),i(39,"input",19),C("change",function(y){return S(h),x(r.uploadFile(y))}),a()()(),g(40,_e,10,0,"ng-container",3),a(),i(41,"div",20)(42,"button",21),C("click",function(){return S(h),x(r.kembali())}),c(),i(43,"svg",22),u(44,"path",23),a(),b(),i(45,"span"),n(46,"Kembali"),a()(),i(47,"button",24),g(48,Se,2,0,"ng-container",3)(49,xe,5,0,"ng-container",3),a(),i(50,"button",21),C("click",function(){return S(h),x(r.lewati())}),i(51,"span"),n(52,"Lewati"),a(),c(),i(53,"svg",22),u(54,"path",25),a()()()(),p()}e&2&&(m(6),l("ngIf",r.tambahAfirmasiGangguan),m(),l("formGroup",r.tambahAfirmasiForm),m(13),l("ngForOf",r.jenis),m(),l("ngIf",r.noJenisAfirmasiId),m(7),l("ngIf",r.noNomorKartu),m(9),l("ngIf",r.nameFile===null),m(),l("ngIf",r.nameFile!==null),m(2),l("ngIf",r.noNameSertifikat),m(8),l("ngIf",!r.isLoading),m(),l("ngIf",r.isLoading))},dependencies:[P,O,X,ie,ae,W,te,$,Q,Y,ee]});let s=o;return s})();var Ce=[{path:"",component:de}],Ke=(()=>{let o=class o{};o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=H({type:o}),o.\u0275inj=M({imports:[B,re,z.forChild(Ce)]});let s=o;return s})();export{Ke as AfirmasiModule};