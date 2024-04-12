

import { Component } from "./base-component";
import { projectState } from "../state/project-state";
import { Project } from "../model/project-model";
import { DragTarget } from "../model/drag-drop";
import { ProjectStatus } from "../model/project-model";
import { ProjectItem } from "./project-item";
import { AutoBind } from "../decorator/autoBindDecorator";

  export  class ProjectList extends Component<HTMLDivElement,HTMLElement> implements DragTarget  {
        assignProject:Project[] =[];
        constructor(private  type:'active' | 'finished'){
            super('project-list','app',false ,`${type}-projects`);
         this.configure();
         this.renderContent();
        }
        @AutoBind
        dragOverHandler(event: DragEvent){
            if(event.dataTransfer && event.dataTransfer.types[0] === 'text/plain'){
                event.preventDefault();
                const listEl = this.element.querySelector('ul')!;
                listEl?.classList.add('droppable');
            }
            
        }
        @AutoBind
        dropHandler(event: DragEvent){
        const priID =  event.dataTransfer!.getData('text/plain');
        projectState.moveProject(priID,this.type ==='active' ? ProjectStatus.Active :ProjectStatus.Finished)
    
        }
    
        @AutoBind
        dragLeaveHandler(_: DragEvent){
         const listEl =  this.element.querySelector('ul')!;
         listEl.classList.remove('droppable');
        }
    
        configure(){
            console.log('test')
            this.element.addEventListener('dragover',this.dragOverHandler)
            this.element.addEventListener('dragleave',this.dragLeaveHandler)
            this.element.addEventListener('drop',this.dropHandler)
            projectState.addListener((projects:Project[])=>{
                const releventProject =  projects.filter((pro)=>{
                    if(this.type === 'active'){
                        return pro.status === ProjectStatus.Active
                    }
                    return pro.status === ProjectStatus.Finished
                })
                this.assignProject = releventProject;
                this.renderProjects();
             });
        }
    
        renderContent(){
            const listId =  `${this.type}-projects-list`;
            this.element.querySelector('ul')!.id = listId
            this.element.querySelector('h2')!.textContent = this.type.toUpperCase() + 'PROJECTS';
    
        }
    
        private renderProjects(){
            const listEl = document.getElementById(`${this.type}-projects-list`) as HTMLUListElement;
             listEl.innerHTML = ''
            for (const proItem  of this.assignProject) {
              new ProjectItem(this.element.querySelector('ul')!.id,proItem)
            }
        }
       
    }