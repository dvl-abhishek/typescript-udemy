import { Project, ProjectStatus } from "../model/project-model";

   export  type Listener<T> =  (items:T[]) => void;
   export class State<T> {
        protected listeners:Listener<T>[]=[];
       
        addListener(listenerFn:Listener<T>){
            this.listeners.push(listenerFn);
        }
    }
    
   export class ProjectManagment extends State<Project> {
        private projects:Project[] = [];
        private static instance:ProjectManagment;
        private constructor(){
        super()
        }
    
      
    
       addProject(title:string,description:string,noOfpeople:number){
          const newProject = new Project(
            Math.random().toString(),
            title,
            description,
            noOfpeople,
            ProjectStatus.Active)
          this.projects.push(newProject);
          this.updateListeners();
         
        }
    
        moveProject(proId:string,newStatus:ProjectStatus){
        const project =  this.projects.find(el => el.id === proId );
        if(project && project.status !== newStatus){
            project.status = newStatus;
            this.updateListeners();
        }
        }
    
        private updateListeners(){
            for(const listenerFn of this.listeners){
                listenerFn(this.projects.slice());
              }
        }
    
        static getInstance(){
            if(this.instance){
            return this.instance
            }
            this.instance = new ProjectManagment();
            return this.instance;
        }
    }
  export const projectState =  ProjectManagment.getInstance();
    