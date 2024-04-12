
  export  interface ValidatorRequired{
        value:string | number
        required:boolean
        minLength?:number;
        maxLength?:number;
        min?:number;
        max?:number;
    }
    
    
    
   export function validate(validateInput:ValidatorRequired){
        let isvalid = true;
        if(validateInput.required){
          isvalid = isvalid && validateInput.value.toString().trim().length !== 0;
        }
    
        if(validateInput.minLength != null && typeof validateInput.value === 'string'){
            isvalid = isvalid && validateInput.value.length  > validateInput.minLength;
        }
    
        if(validateInput.maxLength != null && typeof validateInput.value === 'string'){
            isvalid = isvalid && validateInput.value.length  < validateInput.maxLength;
        }
    
        if(validateInput.min != null && typeof validateInput.value === 'number'){
            isvalid = isvalid && validateInput.value  > validateInput.min;
        }
    
        if(validateInput.max != null && typeof validateInput.value === 'number'){
            isvalid = isvalid && validateInput.value < validateInput.max;
        }
        return isvalid
    }