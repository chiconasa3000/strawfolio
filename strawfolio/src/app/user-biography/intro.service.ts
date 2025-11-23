import { Injectable, signal, computed } from '@angular/core';

@Injectable({ providedIn: 'root'})
export class IntroService{
    private startYear = signal(2023);

    yearsOfExperience = computed(()=> {
        const currentYear = new Date().getFullYear();
        return currentYear - this.startYear();
    });

    private totalProjects = signal(12);

    projectHeadline = computed(()=>{
        const count = this.totalProjects();
        return count > 10 ? `Over ${count} major projects completed.`:`${count} projects completed.`;
    });

    setProjectCount(count: number){
        this.totalProjects.set(count);
    }

    getYearsOfExperience(){
        return this.yearsOfExperience;
    }
}