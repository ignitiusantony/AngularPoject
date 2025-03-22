import { Component, Input } from '@angular/core';
import { Project } from '../../../model/project';

@Component({
  selector: 'app-project-items',
  templateUrl: './project-items.component.html',
  styleUrl: './project-items.component.css'
})
export class ProjectItemsComponent {
  @Input() project: Project = {
    id: '',
    name: '',
    description: '',
    startDate: '',
    endDate: '',
    status: '',
    teamSize: '',
    image: ''
  };
}
