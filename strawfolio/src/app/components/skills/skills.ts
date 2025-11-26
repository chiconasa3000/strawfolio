import { Component } from '@angular/core';

interface Skill {
  name: string;
  icon: string; // SVG path
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  skills: Skill[] = [
    { name: 'Angular', icon: '<svg viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10"><path d="M12 2.5L2 21.5H22L12 2.5Z"/></svg>' },
    { name: 'TypeScript', icon: '<svg viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10"><path d="M2 2H22V22H2V2ZM16.5 16H15V8H16.5V16ZM12 16H10.5V11H8.5V9.5H14V11H12V16Z"/></svg>' },
    { name: 'Tailwind', icon: '<svg viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10"><path d="M12.0003 12.0002C12.0003 12.0002 14.5003 9.00024 16.5003 10.5002C18.5003 12.0002 16.5003 15.0002 16.5003 15.0002C16.5003 15.0002 19.5003 12.0002 21.5003 13.5002C23.5003 15.0002 21.5003 18.0002 21.5003 18.0002M12.0003 12.0002C12.0003 12.0002 9.50034 15.0002 7.50034 13.5002C5.50034 12.0002 7.50034 9.00024 7.50034 9.00024C7.50034 9.00024 4.50034 12.0002 2.50034 10.5002C0.500336 9.00024 2.50034 6.00024 2.50034 6.00024"/></svg>' },
    { name: 'Node.js', icon: '<svg viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10"><path d="M12 2L2 7V17L12 22L22 17V7L12 2Z"/></svg>' },
    { name: 'Git', icon: '<svg viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"/></svg>' },
    { name: 'Firebase', icon: '<svg viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10"><path d="M12 2L15 8L20 9L16 13L17 19L12 16L7 19L8 13L4 9L9 8L12 2Z"/></svg>' }
  ];
}
