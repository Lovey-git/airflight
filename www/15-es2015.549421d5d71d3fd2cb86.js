(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{AkKA:function(e,t,i){"use strict";i.r(t),i.d(t,"TicketsPageModule",(function(){return g}));var s=i("ofXK"),n=i("3Pt+"),o=i("TEn/"),r=i("tyNb"),b=i("mrSG"),a=i("fXoL"),c=i("hD8V"),l=i("LLt/");function u(e,t){if(1&e&&(a.Kb(0,"ion-row",6),a.Kb(1,"ion-col"),a.Kb(2,"ion-item",7),a.Ib(3,"ion-icon",8),a.Kb(4,"ion-title",9),a.ec(5),a.Jb(),a.Jb(),a.Jb(),a.Kb(6,"ion-col"),a.Kb(7,"ion-item",7),a.Kb(8,"ion-title",10),a.ec(9),a.Jb(),a.Jb(),a.Jb(),a.Kb(10,"ion-col"),a.Kb(11,"ion-item",7),a.Kb(12,"ion-title",11),a.ec(13),a.Jb(),a.Jb(),a.Jb(),a.Jb()),2&e){const e=t.$implicit;a.xb(5),a.fc(e.email),a.xb(4),a.fc(e.created_at),a.xb(4),a.fc(e.role)}}const d=[{path:"",component:(()=>{class e{constructor(e,t,i,s,n,o){this.api=e,this.authService=t,this.alertCtrl=i,this.loadingCtrl=s,this.navCtrl=n,this.router=o}ngOnInit(){this.api.get_all_verrified_users().subscribe(e=>{0==e.status?(console.log(e.data),this.verifiedUsers=e.data):this.presentAlert(e.msg)},e=>{this.presentAlert(e.message)}),this.api.get_all_nonverrified_users().subscribe(e=>{0==e.status?(console.log(e.data),this.nonVerifiedUsers=e.data):this.presentAlert(e.msg)},e=>{this.presentAlert(e.message)}),this.api.get_all_users_by_search("").subscribe(e=>{0==e.status?(console.log(e.data),this.searchUsers=e.data):this.presentAlert(e.msg)},e=>{this.presentAlert(e.message)})}ionViewWillEnter(){0==this.authService.isLoggedin()&&this.router.navigateByUrl("home")}presentAlert(e){return Object(b.a)(this,void 0,void 0,(function*(){const t=yield this.alertCtrl.create({cssClass:"my-custom-class",header:"Air Food \u2708\ufe0f",subHeader:"Warning",message:e,buttons:["OK"]});yield t.present()}))}}return e.\u0275fac=function(t){return new(t||e)(a.Hb(c.a),a.Hb(l.a),a.Hb(o.b),a.Hb(o.B),a.Hb(o.D),a.Hb(r.g))},e.\u0275cmp=a.Bb({type:e,selectors:[["app-tickets"]],decls:18,vars:1,consts:[[1,"booking-form"],["value","Verified"],["value","Non-Verified"],["value","all"],["showCancelButton","focus"],["style","border-bottom: groove;",4,"ngFor","ngForOf"],[2,"border-bottom","groove"],["lines","none"],["color","success","slot","","name","checkmark-circle-outline"],[2,"text-align","left"],[2,"text-align","center"],[2,"text-align","right"]],template:function(e,t){1&e&&(a.Kb(0,"ion-content"),a.Kb(1,"ion-row",0),a.Kb(2,"ion-header"),a.Kb(3,"ion-segment"),a.Kb(4,"ion-segment-button",1),a.Kb(5,"ion-label"),a.ec(6,"Paid Tickets"),a.Jb(),a.Jb(),a.Kb(7,"ion-segment-button",2),a.Kb(8,"ion-label"),a.ec(9,"Non-Paid Tickets"),a.Jb(),a.Jb(),a.Kb(10,"ion-segment-button",3),a.Kb(11,"ion-label"),a.ec(12,"All Tickets"),a.Jb(),a.Jb(),a.Jb(),a.Ib(13,"ion-searchbar",4),a.Jb(),a.Jb(),a.Kb(14,"div",0),a.Kb(15,"ion-list-header"),a.ec(16,"Users"),a.Jb(),a.dc(17,u,14,3,"ion-row",5),a.Jb(),a.Jb()),2&e&&(a.xb(17),a.Xb("ngForOf",t.users))},directives:[o.f,o.r,o.j,o.t,o.J,o.u,o.n,o.s,o.K,o.p,s.h,o.e,o.m,o.k,o.x],styles:[""]}),e})()}];let h=(()=>{class e{}return e.\u0275mod=a.Fb({type:e}),e.\u0275inj=a.Eb({factory:function(t){return new(t||e)},imports:[[r.i.forChild(d)],r.i]}),e})(),g=(()=>{class e{}return e.\u0275mod=a.Fb({type:e}),e.\u0275inj=a.Eb({factory:function(t){return new(t||e)},imports:[[s.b,n.d,o.z,h]]}),e})()}}]);