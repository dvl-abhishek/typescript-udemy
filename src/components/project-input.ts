

import { Component } from "./base-component";
import { projectState } from "../state/project-state";
import { ValidatorRequired } from "../util/validation";
import { validate } from "../util/validation";
import { AutoBind } from "../decorator/autoBindDecorator";

   export class ProjectTemplate extends Component<HTMLDivElement,HTMLFormElement>{
       
        inputTitleElement:HTMLInputElement;
        inputDescriptionElement:HTMLInputElement;
        inputPeopleElement:HTMLInputElement;
       constructor(){
           super('project-input','app',true,'user-input');
           
        this.inputTitleElement = this.element.querySelector('#title')  as HTMLInputElement
        this.inputDescriptionElement = this.element.querySelector('#description')  as HTMLInputElement
        this.inputPeopleElement = this.element.querySelector('#people')  as HTMLInputElement
   
        this.configure();
        
       }
       renderContent(): void {
       }
   
       @AutoBind
       submitHandler(event:Event){
           event.preventDefault();
           const userInput = this.getUserInput();
           console.log(userInput)
          if(Array.isArray(userInput)){
           const [title,des,value] = userInput;
           projectState.addProject(title,des,value);
          }
       }
       configure(){
           this.element.addEventListener('submit',this.submitHandler)
          }
   
       private getUserInput():[string,string,number] | void {
           const enterTitle = this.inputTitleElement.value
           const enterDescription = this.inputDescriptionElement.value
           const enterPeople = this.inputPeopleElement.value
   
           const  titleValidate:ValidatorRequired = {
            value:enterTitle,
            required:true
           }
   
           const  desValidate:ValidatorRequired = {
               value:enterDescription,
               required:true,
               minLength:5   
           }
   
           const  peopleValidate:ValidatorRequired = {
               value:enterPeople,
               required:true,
               min:1
           }
           if(!validate(titleValidate) || !validate(desValidate) || !validate(peopleValidate)){
               alert('invalid form');
               return;
           }else{
            return [enterTitle,enterDescription,+enterPeople];
           }
       }
     
   }
