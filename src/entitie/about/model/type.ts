export interface ProjectModel {
    id?: string;
    name: string;
    date: string;
    part: string;
}

export interface CompModel {
    id?: string;
    name: string;
    startYear: number;
    endYear: number;
    inOffice: boolean;
    projects: ProjectModel[];
}
