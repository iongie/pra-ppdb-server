import{a as l}from"./chunk-2YXIXTHU.js";import{A as o,E as n,d as e,g as r}from"./chunk-PGRBZLYU.js";var t={siswa_id:null,nisn:null,nama_lengkap:null,nik:null,sekolah_asal:null,sekolah_tujuan:null,no_pendaftaran:null,status:null,keterangan:null,pin:null,verifikasi_tahap:null,verifikasi_tahap_no:null,data_verifikasi_tahap:null};var k=(()=>{let s=class s{constructor(i){this.cookieStorage=i,this.prosesRegistrasi=new r(t),this.getProsesRegistrasi=this.prosesRegistrasi.asObservable(),this.initializecookieStorage()}initializecookieStorage(){return e(this,null,function*(){let i=yield this.cookieStorage.get("hasil-registrasi");this.prosesRegistrasi.next(i.length!==0?JSON.parse(i):t)})}updateProsesRegistrasi(i){return e(this,null,function*(){yield this.cookieStorage.set("hasil-registrasi",JSON.stringify(i),{secure:!0,sameSite:"Lax"}),this.prosesRegistrasi.next(i)})}clearProsesRegistrasi(){return e(this,null,function*(){yield this.cookieStorage.delete("hasil-registrasi"),this.prosesRegistrasi.next(t)})}};s.\u0275fac=function(c){return new(c||s)(n(l))},s.\u0275prov=o({token:s,factory:s.\u0275fac,providedIn:"root"});let a=s;return a})();export{t as a,k as b};
