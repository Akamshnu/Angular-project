

class Product{
private pId:number = 111;
private pName:string="mobile";
private pPrice:number=10000;

set _productId(val){
    this.pId=val;    
}
get _productId(){
   return this.pId;
}

 producrDetail(){
    console.log('Product-Id:${this.pId} Product-Name:${this.pName} Price:${this.pPrice}')

  }
}

var producrObj=new Product();
producrObj.producrDetail();
producrObj._productId=501;
producrObj.producrDetail();