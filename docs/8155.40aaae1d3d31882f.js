"use strict";(self.webpackChunkmySimpleIonicApp=self.webpackChunkmySimpleIonicApp||[]).push([[8155],{8155:(f,u,o)=>{o.r(u),o.d(u,{AuthModule:()=>h});var d=o(177),s=o(4341),r=o(4946),a=o(7477),m=o(467),t=o(8699);const g=[{path:"",component:(()=>{class n{constructor(i,e,c,l){this.fb=i,this.router=e,this.toastCtrl=c,this.cdr=l,this.loginForm=this.fb.group({username:["",s.k0.required],password:["",s.k0.required]})}ngOnInit(){}btnLogin(){var i=this;return(0,m.A)(function*(){const{username:e,password:c}=i.loginForm.value;console.log(e,c),"testuser"===e&&"test@123"===c?((yield i.toastCtrl.create({message:"Login successful!",duration:2e3,position:"bottom",color:"success"})).present(),yield i.router.navigateByUrl("/layout/home"),i.cdr.detectChanges()):(yield i.toastCtrl.create({message:"Invalid username or password.",duration:2e3,position:"bottom",color:"danger"})).present()})()}static{this.\u0275fac=function(e){return new(e||n)(t.rXU(s.ok),t.rXU(a.Ix),t.rXU(r.K_),t.rXU(t.gRc))}}static{this.\u0275cmp=t.VBU({type:n,selectors:[["app-login"]],decls:15,vars:1,consts:[[1,"login-background"],[1,"login-container"],[1,"top-content-alignment-style"],[1,"login-title"],[1,"login-form",3,"formGroup"],["lines","none",1,"input-item"],["type","text","required","","formControlName","username","placeholder","Username",1,"custom-input"],["type","password","required","","formControlName","password","placeholder","Password",1,"custom-input"],["expand","block",1,"login-button",3,"click"]],template:function(e,c){1&e&&(t.nrm(0,"ion-header"),t.j41(1,"ion-content",0)(2,"div",1)(3,"div",2)(4,"h2",3),t.EFF(5,"Login"),t.k0s()(),t.j41(6,"div",2)(7,"form",4)(8,"ion-item",5),t.nrm(9,"ion-input",6),t.k0s(),t.j41(10,"ion-item",5),t.nrm(11,"ion-input",7),t.k0s(),t.j41(12,"ion-button",8),t.bIt("click",function(){return c.btnLogin()}),t.EFF(13," Login "),t.k0s()()()()(),t.nrm(14,"ion-footer")),2&e&&(t.R7$(7),t.Y8G("formGroup",c.loginForm))},dependencies:[s.qT,s.BC,s.cb,s.YS,s.j4,s.JD,r.Jm,r.W9,r.M0,r.eU,r.$w,r.uz,r.Gw],styles:[".login-background[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh;padding:20px;box-sizing:border-box}.login-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;height:75%}.login-header[_ngcontent-%COMP%]{margin-bottom:20px}.login-title[_ngcontent-%COMP%]{font-size:2rem;color:#3880ff}.login-form[_ngcontent-%COMP%]{width:100%}.custom-input[_ngcontent-%COMP%]{--padding-start: 15px}.login-button[_ngcontent-%COMP%]{margin-top:20px;padding:10px}.custom-input[_ngcontent-%COMP%]{background-color:#f5f5f5;border-radius:4px;transition:border .3s ease,box-shadow .3s ease}.custom-input[_ngcontent-%COMP%]:hover{border:1px solid #c5c5c5}.custom-input[_ngcontent-%COMP%]:focus{border:1px solid #00f2fe;box-shadow:0 0 8px #00f2fe80;outline:none}.input-item[_ngcontent-%COMP%]{margin-bottom:10px}.top-content-alignment-style[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;margin-top:2vh!important}"]})}}return n})()},{path:"modules",loadChildren:()=>Promise.resolve().then(o.bind(o,5710)).then(n=>n.ModuleModule)},{path:"layout",loadChildren:()=>o.e(1153).then(o.bind(o,1153)).then(n=>n.LayoutModule)}];let p=(()=>{class n{static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275mod=t.$C({type:n})}static{this.\u0275inj=t.G2t({imports:[a.iI.forChild(g),a.iI]})}}return n})(),h=(()=>{class n{static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275mod=t.$C({type:n})}static{this.\u0275inj=t.G2t({imports:[d.MD,s.X1,r.bv,p]})}}return n})()}}]);