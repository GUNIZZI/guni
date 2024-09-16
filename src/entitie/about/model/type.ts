export interface ProjectModel {
    id?: string;
    name: string;
    date: string;
    part: string;
}

export interface CompModel {
    id?: string;
    name: string;
    startYear: number | string;
    endYear: number | string;
    inOffice: boolean;
    projects?: ProjectModel[];
}

export interface CompUpdateRequestModel {
    id?: string;
    name: string;
    startYear: number | string;
    endYear: number | string;
    inOffice: boolean;
}
