!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{AkKA:function(n,i,o){"use strict";o.r(i),o.d(i,"TicketsPageModule",(function(){return K}));var r=o("ofXK"),s=o("3Pt+"),a=o("TEn/"),c=o("tyNb"),b=o("mrSG"),l=o("fXoL"),u=o("hD8V"),f=o("LLt/");function d(e,t){if(1&e&&(l.Kb(0,"ion-row",6),l.Kb(1,"ion-col"),l.Kb(2,"ion-item",7),l.Ib(3,"ion-icon",8),l.Kb(4,"ion-title",9),l.ec(5),l.Jb(),l.Jb(),l.Jb(),l.Kb(6,"ion-col"),l.Kb(7,"ion-item",7),l.Kb(8,"ion-title",10),l.ec(9),l.Jb(),l.Jb(),l.Jb(),l.Kb(10,"ion-col"),l.Kb(11,"ion-item",7),l.Kb(12,"ion-title",11),l.ec(13),l.Jb(),l.Jb(),l.Jb(),l.Jb()),2&e){var n=t.$implicit;l.xb(5),l.fc(n.email),l.xb(4),l.fc(n.created_at),l.xb(4),l.fc(n.role)}}var g,h,m,p=[{path:"",component:(g=function(){function n(t,i,o,r,s,a){e(this,n),this.api=t,this.authService=i,this.alertCtrl=o,this.loadingCtrl=r,this.navCtrl=s,this.router=a}var i,o,r;return i=n,(o=[{key:"ngOnInit",value:function(){var e=this;this.api.get_all_verrified_users().subscribe((function(t){0==t.status?(console.log(t.data),e.verifiedUsers=t.data):e.presentAlert(t.msg)}),(function(t){e.presentAlert(t.message)})),this.api.get_all_nonverrified_users().subscribe((function(t){0==t.status?(console.log(t.data),e.nonVerifiedUsers=t.data):e.presentAlert(t.msg)}),(function(t){e.presentAlert(t.message)})),this.api.get_all_users_by_search("").subscribe((function(t){0==t.status?(console.log(t.data),e.searchUsers=t.data):e.presentAlert(t.msg)}),(function(t){e.presentAlert(t.message)}))}},{key:"ionViewWillEnter",value:function(){0==this.authService.isLoggedin()&&this.router.navigateByUrl("home")}},{key:"presentAlert",value:function(e){return Object(b.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.alertCtrl.create({cssClass:"my-custom-class",header:"Air Food \u2708\ufe0f",subHeader:"Warning",message:e,buttons:["OK"]});case 2:return n=t.sent,t.next=5,n.present();case 5:case"end":return t.stop()}}),t,this)})))}}])&&t(i.prototype,o),r&&t(i,r),n}(),g.\u0275fac=function(e){return new(e||g)(l.Hb(u.a),l.Hb(f.a),l.Hb(a.b),l.Hb(a.B),l.Hb(a.D),l.Hb(c.g))},g.\u0275cmp=l.Bb({type:g,selectors:[["app-tickets"]],decls:18,vars:1,consts:[[1,"booking-form"],["value","Verified"],["value","Non-Verified"],["value","all"],["showCancelButton","focus"],["style","border-bottom: groove;",4,"ngFor","ngForOf"],[2,"border-bottom","groove"],["lines","none"],["color","success","slot","","name","checkmark-circle-outline"],[2,"text-align","left"],[2,"text-align","center"],[2,"text-align","right"]],template:function(e,t){1&e&&(l.Kb(0,"ion-content"),l.Kb(1,"ion-row",0),l.Kb(2,"ion-header"),l.Kb(3,"ion-segment"),l.Kb(4,"ion-segment-button",1),l.Kb(5,"ion-label"),l.ec(6,"Paid Tickets"),l.Jb(),l.Jb(),l.Kb(7,"ion-segment-button",2),l.Kb(8,"ion-label"),l.ec(9,"Non-Paid Tickets"),l.Jb(),l.Jb(),l.Kb(10,"ion-segment-button",3),l.Kb(11,"ion-label"),l.ec(12,"All Tickets"),l.Jb(),l.Jb(),l.Jb(),l.Ib(13,"ion-searchbar",4),l.Jb(),l.Jb(),l.Kb(14,"div",0),l.Kb(15,"ion-list-header"),l.ec(16,"Users"),l.Jb(),l.dc(17,d,14,3,"ion-row",5),l.Jb(),l.Jb()),2&e&&(l.xb(17),l.Xb("ngForOf",t.users))},directives:[a.f,a.r,a.j,a.t,a.J,a.u,a.n,a.s,a.K,a.p,r.h,a.e,a.m,a.k,a.x],styles:[""]}),g)}],v=((m=function t(){e(this,t)}).\u0275mod=l.Fb({type:m}),m.\u0275inj=l.Eb({factory:function(e){return new(e||m)},imports:[[c.i.forChild(p)],c.i]}),m),K=((h=function t(){e(this,t)}).\u0275mod=l.Fb({type:h}),h.\u0275inj=l.Eb({factory:function(e){return new(e||h)},imports:[[r.b,s.d,a.z,v]]}),h)}}])}();