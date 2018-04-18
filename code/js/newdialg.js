var dialgModel=function(){

}
dialgModel.prototype.init=function(opt){
    this.initSet();
    for(var i in opt){
        this[i]=opt[i];
    }
    this.el=document.querySelector(""+this.windows);
    this.mask=this.checkDom("mask",false,this.el);
    this.dialg=this.checkDom(""+this.type,true,this.el);
    this.CreatStrue();
}
dialgModel.prototype.initSet=function(){
    this.title=this.cont="";
    // this.concelCallback=null;
    // this.confirmCallback=null;
}
dialgModel.prototype.checkDom=function(dom,flag,parent){
    var that=this,
        newDom;
    if(flag===true){
         newDom=document.querySelector("#dialg");
	}else{
         newDom=document.querySelector("."+dom);
	}
	if(newDom==null){
        newDom=document.createElement("div");
        if(flag==true){
            newDom.setAttribute("id","dialg");
            newDom.className=that.type;
		}
		parent.appendChild(newDom);
	}
    newDom.className=''+dom;
    this[dom]=newDom;
    $(newDom).show();
    
	return newDom;
}
dialgModel.prototype.CreatStrue=function(){
	var that=this,
		 Domarr=['tittle','cotent','btnbox'],
		 dom;
	     for(var i=0;i<Domarr.length;i++ ){
	     	 that[Domarr[i]]=that.checkDom(Domarr[i],false,that.dialg);
	     	 if(Domarr[i]=="tittle"){
                 that[Domarr[i]].className="tittle"+" "+that.showtype;
                 that[Domarr[i]].innerHTML=that.title;
                 that.checkDom("close",false,that.tittle);
			 }else if(Domarr[i]=="cotent"){
                 that[Domarr[i]].innerHTML=that.cont;
			 }
		 }
		 that.Creatbtn();
}
dialgModel.prototype.Creatbtn=function(){
      var that=this;
      if(that.dialgtype=='notice'){
      	   that.btnbox.className='btnbox btnNotice'
	  }else{
          that.btnbox.className='btnbox btnOpt'
      }
      
    var Domarr=['confirm','concel'];
    for(var i=0;i<Domarr.length;i++ ){
        that[Domarr[i]]=that.checkDom(Domarr[i],false,that.btnbox);
        if(Domarr[i]=="concel"){
            that[Domarr[i]].innerHTML="取消";
		}else{
            that[Domarr[i]].innerHTML="确定";
		}
    }
    that.bindEvent();
}
dialgModel.prototype.bindEvent=function(){
	var that=this;
	that.confirm.onclick=function(){
		 that.hide();
		 // that.confirmCallback(that.data);
	}
    that.concel.onclick=function(){
        that.hide();
        // that.concelCallback(that.data);
    }
    that.close.onclick=function(){
        that.hide();
    }
}
dialgModel.prototype.hide=function(){
    var that=this;
   $(that.mask).hide();
    $(that.dialg).hide();
}
dialgModel.prototype.setData=function(data){
     this.data=data;
}
dialgModel.prototype.clearData=function(data){
    this.data=null;
}

