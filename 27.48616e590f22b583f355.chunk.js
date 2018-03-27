webpackJsonp([27],{E3Ww:function(n,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var t=a("6Xbx"),p=a("/oeL"),o=a("BkNc"),c=a("Xa16"),e=a("qbdv"),u=a("bm2B"),l=a("JPbF"),i=a("sAA7"),k=function(){function n(){this.form=new u.d({}),this.model={},this.options={},this.fields=[{fieldGroupClassName:"row",fieldGroup:[{className:"col-6",type:"input",key:"firstName",templateOptions:{label:"First Name"}},{className:"col-6",type:"input",key:"lastName",templateOptions:{label:"Last Name"},expressionProperties:{"templateOptions.disabled":"!model.firstName"}}]},{className:"section-label",template:"<hr /><div><strong>Address:</strong></div>"},{fieldGroupClassName:"row",fieldGroup:[{className:"col-6",type:"input",key:"street",templateOptions:{label:"Street"}},{className:"col-3",type:"input",key:"cityName",templateOptions:{label:"City"}},{className:"col-3",type:"input",key:"zip",templateOptions:{type:"number",label:"Zip",max:99999,min:0,pattern:"\\d{5}"}}]},{template:"<hr />"},{type:"textarea",key:"otherInput",templateOptions:{label:"Other Input"}},{type:"checkbox",key:"otherToo",templateOptions:{label:"Other Checkbox"}}]}return n.prototype.submit=function(){alert(JSON.stringify(this.model))},n=t.b([Object(p.o)({selector:"formly-app-example",template:a("nJW+")})],n)}(),r=function(){function n(){}return n=t.b([Object(p.M)({imports:[e.b,u.h,i.a,l.e.forRoot()],declarations:[k]})],n)}();a.d(s,"ConfigModule",function(){return m});var m=function(){function n(){}return n=t.b([Object(p.M)({imports:[c.b,r,o.g.forChild([{path:"",component:c.a,data:{examples:[{title:"Advanced Layout",description:"\n              This is an example of using\n              <code>formGroup</code>s and the\n              <code>className</code> property to have an advanced layout.\n            ",component:k,files:[{file:"app.component.html",content:a("h84/")},{file:"app.component.ts",content:a("pzBX")},{file:"app.module.ts",content:a("MIJV")}]}]}}])]})],n)}()},MIJV:function(n,s){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> NgModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> CommonModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/common\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> ReactiveFormsModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyModule <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyBootstrapModule <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/bootstrap\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> AppComponent <span class="token punctuation" >}</span> from <span class="token string" >\'./app.component\'</span><span class="token punctuation" >;</span>\n@<span class="token function" >NgModule</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  imports<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    CommonModule<span class="token punctuation" >,</span>\n    ReactiveFormsModule<span class="token punctuation" >,</span>\n    FormlyBootstrapModule<span class="token punctuation" >,</span>\n    FormlyModule<span class="token punctuation" >.</span><span class="token function" >forRoot</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n  declarations<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    AppComponent<span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppModule</span> <span class="token punctuation" >{</span> <span class="token punctuation" >}</span>\n'},"h84/":function(n,s){n.exports='<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>form</span> <span class="token attr-name" >[formGroup]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span> <span class="token attr-name" >(ngSubmit)</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit()<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>formly-form</span> <span class="token attr-name" >[model]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>model<span class="token punctuation" >"</span></span> <span class="token attr-name" >[fields]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>fields<span class="token punctuation" >"</span></span> <span class="token attr-name" >[options]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>options<span class="token punctuation" >"</span></span> <span class="token attr-name" >[form]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit<span class="token punctuation" >"</span></span> <span class="token attr-name" >class</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>btn btn-primary submit-button<span class="token punctuation" >"</span></span> <span class="token attr-name" >[disabled]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>!form.valid<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Submit<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>button</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>formly-form</span><span class="token punctuation" >></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>form</span><span class="token punctuation" >></span></span>\n'},"nJW+":function(n,s){n.exports='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form">\n    <button type="submit" class="btn btn-primary submit-button" [disabled]="!form.valid">Submit</button>\n  </formly-form>\n</form>\n'},pzBX:function(n,s){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Component <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormGroup <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyFormOptions<span class="token punctuation" >,</span> FormlyFieldConfig <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n\n@<span class="token function" >Component</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  selector<span class="token punctuation" >:</span> <span class="token string" >\'formly-app-example\'</span><span class="token punctuation" >,</span>\n  templateUrl<span class="token punctuation" >:</span> <span class="token string" >\'./app.component.html\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppComponent</span> <span class="token punctuation" >{</span>\n  form <span class="token operator" >=</span> <span class="token keyword" >new</span> <span class="token class-name" >FormGroup</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  model<span class="token punctuation" >:</span> <span class="token keyword" >any</span> <span class="token operator" >=</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  options<span class="token punctuation" >:</span> FormlyFormOptions <span class="token operator" >=</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\n  fields<span class="token punctuation" >:</span> FormlyFieldConfig<span class="token punctuation" >[</span><span class="token punctuation" >]</span> <span class="token operator" >=</span> <span class="token punctuation" >[</span>\n    <span class="token punctuation" >{</span>\n      fieldGroupClassName<span class="token punctuation" >:</span> <span class="token string" >\'row\'</span><span class="token punctuation" >,</span>\n      fieldGroup<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n        <span class="token punctuation" >{</span>\n          className<span class="token punctuation" >:</span> <span class="token string" >\'col-6\'</span><span class="token punctuation" >,</span>\n          type<span class="token punctuation" >:</span> <span class="token string" >\'input\'</span><span class="token punctuation" >,</span>\n          key<span class="token punctuation" >:</span> <span class="token string" >\'firstName\'</span><span class="token punctuation" >,</span>\n          templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n            label<span class="token punctuation" >:</span> <span class="token string" >\'First Name\'</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >{</span>\n          className<span class="token punctuation" >:</span> <span class="token string" >\'col-6\'</span><span class="token punctuation" >,</span>\n          type<span class="token punctuation" >:</span> <span class="token string" >\'input\'</span><span class="token punctuation" >,</span>\n          key<span class="token punctuation" >:</span> <span class="token string" >\'lastName\'</span><span class="token punctuation" >,</span>\n          templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n            label<span class="token punctuation" >:</span> <span class="token string" >\'Last Name\'</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n          expressionProperties<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n            <span class="token string" >\'templateOptions.disabled\'</span><span class="token punctuation" >:</span> <span class="token string" >\'!model.firstName\'</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >{</span>\n      className<span class="token punctuation" >:</span> <span class="token string" >\'section-label\'</span><span class="token punctuation" >,</span>\n      template<span class="token punctuation" >:</span> <span class="token string" >\'&lt;hr />&lt;div>&lt;strong>Address:&lt;/strong>&lt;/div>\'</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >{</span>\n      fieldGroupClassName<span class="token punctuation" >:</span> <span class="token string" >\'row\'</span><span class="token punctuation" >,</span>\n      fieldGroup<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n        <span class="token punctuation" >{</span>\n          className<span class="token punctuation" >:</span> <span class="token string" >\'col-6\'</span><span class="token punctuation" >,</span>\n          type<span class="token punctuation" >:</span> <span class="token string" >\'input\'</span><span class="token punctuation" >,</span>\n          key<span class="token punctuation" >:</span> <span class="token string" >\'street\'</span><span class="token punctuation" >,</span>\n          templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n            label<span class="token punctuation" >:</span> <span class="token string" >\'Street\'</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >{</span>\n          className<span class="token punctuation" >:</span> <span class="token string" >\'col-3\'</span><span class="token punctuation" >,</span>\n          type<span class="token punctuation" >:</span> <span class="token string" >\'input\'</span><span class="token punctuation" >,</span>\n          key<span class="token punctuation" >:</span> <span class="token string" >\'cityName\'</span><span class="token punctuation" >,</span>\n          templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n            label<span class="token punctuation" >:</span> <span class="token string" >\'City\'</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >{</span>\n          className<span class="token punctuation" >:</span> <span class="token string" >\'col-3\'</span><span class="token punctuation" >,</span>\n          type<span class="token punctuation" >:</span> <span class="token string" >\'input\'</span><span class="token punctuation" >,</span>\n          key<span class="token punctuation" >:</span> <span class="token string" >\'zip\'</span><span class="token punctuation" >,</span>\n          templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n            type<span class="token punctuation" >:</span> <span class="token string" >\'number\'</span><span class="token punctuation" >,</span>\n            label<span class="token punctuation" >:</span> <span class="token string" >\'Zip\'</span><span class="token punctuation" >,</span>\n            max<span class="token punctuation" >:</span> <span class="token number" >99999</span><span class="token punctuation" >,</span>\n            min<span class="token punctuation" >:</span> <span class="token number" >0</span><span class="token punctuation" >,</span>\n            pattern<span class="token punctuation" >:</span> <span class="token string" >\'\\\\d{5}\'</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >{</span> template<span class="token punctuation" >:</span> <span class="token string" >\'&lt;hr />\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >{</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'textarea\'</span><span class="token punctuation" >,</span>\n      key<span class="token punctuation" >:</span> <span class="token string" >\'otherInput\'</span><span class="token punctuation" >,</span>\n      templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        label<span class="token punctuation" >:</span> <span class="token string" >\'Other Input\'</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >{</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'checkbox\'</span><span class="token punctuation" >,</span>\n      key<span class="token punctuation" >:</span> <span class="token string" >\'otherToo\'</span><span class="token punctuation" >,</span>\n      templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        label<span class="token punctuation" >:</span> <span class="token string" >\'Other Checkbox\'</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\n  <span class="token function" >submit</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token function" >alert</span><span class="token punctuation" >(</span>JSON<span class="token punctuation" >.</span><span class="token function" >stringify</span><span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>model<span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span>\n<span class="token punctuation" >}</span>\n'}});