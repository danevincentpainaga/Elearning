export interface TeacherSubjects {
    tsID: number,
    teacherID: number;
    teacher: string;
    subject: Subject;
    period: string;
    academicYear: string;
    createdBy: string;
}

export interface User {
    id: number;
    firstname: string;
    middlename: string;
    lastname: string;
    email: string;
    position: string;
}

export interface Subject {
    subjectID: number;
    subject: string;
    description: string;
}

export interface Teacher {
    teacherID: number;
    fullname?: string;
    firstname?: string;
    middlename?: string;
    lastname?: string;
    position: string;
    createdBy: string;
}

export interface AcademicYear {
    ayID: number;
    academic_year: string;
}