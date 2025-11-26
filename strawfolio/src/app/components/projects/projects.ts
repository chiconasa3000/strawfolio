import { Component } from '@angular/core';
interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  github: string;
  color: string; // For the gradient placeholder
}
@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects: Project[] = [
    {
      title: 'E-Commerce Dashboard',
      description: 'A comprehensive analytical dashboard for online retailers. Features real-time sales tracking, inventory management, and reporting tools. Built with high performance in mind.',
      tags: ['Angular', 'RxJS', 'D3.js', 'Tailwind'],
      link: '#',
      github: '#',
      color: 'bg-gradient-to-br from-purple-600 to-blue-600'
    },
    {
      title: 'TaskMaster AI',
      description: 'An intelligent task management application that uses natural language processing to categorize and prioritize daily todo lists automatically.',
      tags: ['TypeScript', 'OpenAI API', 'Node.js', 'PostgreSQL'],
      link: '#',
      github: '#',
      color: 'bg-gradient-to-br from-emerald-500 to-teal-700'
    },
    {
      title: 'Crypto Tracker',
      description: 'Real-time cryptocurrency tracking application featuring live price updates, historical charts, and portfolio management capabilities.',
      tags: ['Angular', 'WebSockets', 'Chart.js', 'Firebase'],
      link: '#',
      github: '#',
      color: 'bg-gradient-to-br from-orange-500 to-red-600'
    }
  ];
}
