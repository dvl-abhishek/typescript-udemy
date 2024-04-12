
    
  export  function AutoBind(target:any,propertyName:string,descriptor:PropertyDescriptor){
        const originalMethod  =  descriptor.value
        const newMethod = {
            configurable:true,
            get(){
                const bindFu = originalMethod.bind(this)
                return bindFu
            }
        }
    return newMethod
    }
    