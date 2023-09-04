function path(root: string, sublink: string) {
    return `${root}${sublink}`;
}

const ROOTS_AUTH = '/auth';
const ROOTS_GENERAL = '/general';
const ROOTS_ADMIN = '/admin';
const ROOTS_TEACHER = '/teacher';
const ROOTS_DASHBOARD = '/home';
const ROOTS_ADMISSION = '/admission'
const ROOTS_STUDENT = '/student';
const ROOTS_GUARDIAN = '/guardian';
const ROOTS_PARENT = '/parent';
const ROOTS_NURSE = '/nurse'
const ROOTS_ACADEMIC = '/academic'
const ROOTS_PRINCIPAL = '/principal';

export const PATH_AUTH = {
    root: ROOTS_AUTH,
    login: path(ROOTS_AUTH, '/login'),
    register: path(ROOTS_AUTH, '/register'),
    resetPassword: path(ROOTS_AUTH, '/reset-password'),
};

export const PATH_GENERAL = {
    root: ROOTS_GENERAL,
    dashboard: path(ROOTS_GENERAL, '/dashboard'),
    profile: path(ROOTS_GENERAL, '/profile'),
    notifications: path(ROOTS_GENERAL, '/notifications'),
    user: {
        profile: path(ROOTS_ADMIN, '/profile'),
        account: path(ROOTS_ADMIN, '/profile'),
    },
    chat: {
        root: path(ROOTS_DASHBOARD, '/chat'),
        new: path(ROOTS_DASHBOARD, '/chat/new'),
        view: (name: string) => path(ROOTS_DASHBOARD, `/chat/${name}`),
    },
    account_settings: path(ROOTS_GENERAL, '/account-settings'),
    support: {
        root: path(ROOTS_ADMIN, '/support'),
        list: path(ROOTS_ADMIN, '/support/list'),
        view: (mailId: string) => path(ROOTS_STUDENT, `/support/${mailId}`),
    },
};

export const PATH_ADMIN = {
    root: ROOTS_ADMIN,
    dashboard: path(ROOTS_ADMIN, '/dashboard'),
    teacher: {
        register: path(ROOTS_ADMIN, '/teacher-register'),
        profile: path(ROOTS_ADMIN, '/profile'),
    },
    take_attendance: path(ROOTS_ADMIN, '/take-attendance'),
    admission: path(ROOTS_ADMIN, '/admission'),
    users: path(ROOTS_ADMIN, '/users/list'),
    feed: {
        create: path(ROOTS_ADMIN, '/feed/create'),
        view: path(ROOTS_ADMIN, '/feed/list'),
    },
    chat: {
        root: path(ROOTS_ADMIN, '/chat'),
        new: path(ROOTS_ADMIN, '/chat/new'),
        view: (name: string) => path(ROOTS_ADMIN, `/chat/${name}`),
    },
    support: {
        root: path(ROOTS_ADMIN, '/support'),
        list: path(ROOTS_ADMIN, '/support/list'),
        view: (mailId: string) => path(ROOTS_ADMIN, `/support/${mailId}`),
    },
    accident_incident: path(ROOTS_ADMIN, '/incident/list'),
    timetable: {
        root: path(ROOTS_ADMIN, '/time-table/create-timetable'),
        contract: path(ROOTS_ADMIN, '/time-table/contract'),
        generate: path(ROOTS_ADMIN, '/time-table/generate-timetable'),
        teacher_class: path(ROOTS_ADMIN, '/time-table/teacher-class-timetable')
    },
    progress_tracking: path(ROOTS_ADMIN, '/progress-tracking'),
    dismissal_process: path(ROOTS_ADMIN, '/dismissal-process'),
    external_apps: path(ROOTS_ADMIN, '/external-apps/list'),
    notifications: path(ROOTS_ADMIN, '/notifications'),
    account_settings: path(ROOTS_ADMIN, '/account-settings'),
    branch: path(ROOTS_ADMIN, '/branch'),
    school_setup: {
        setup:path(ROOTS_ADMIN, '/school-setup/setup'),
        disallow:path(ROOTS_ADMIN, '/school-setup/disallow'),
        list:path(ROOTS_ADMIN, '/school-setup/list'),
    },
    reports: {
        root: path(ROOTS_ADMIN, '/reports'),
        attendance: path(ROOTS_ADMIN, '/reports/attendance'),
    }
};
export const PATH_PRINCIPAL = {
    root: ROOTS_PRINCIPAL,
    dashboard: path(ROOTS_PRINCIPAL, '/dashboard'),
    teacher: {
        register: path(ROOTS_PRINCIPAL, '/teacher-register'),
        profile: path(ROOTS_PRINCIPAL, '/profile'),
    },
    take_attendance: path(ROOTS_PRINCIPAL, '/take-attendance'),
    admission: path(ROOTS_PRINCIPAL, '/admission'),
    users: path(ROOTS_PRINCIPAL, '/users/list'),
    feed: {
        create: path(ROOTS_PRINCIPAL, '/feed/create'),
        view: path(ROOTS_PRINCIPAL, '/feed/list'),
    },
    chat: {
        root: path(ROOTS_PRINCIPAL, '/chat'),
        new: path(ROOTS_PRINCIPAL, '/chat/new'),
        view: (name: string) => path(ROOTS_PRINCIPAL, `/chat/${name}`),
    },
    support: {
        root: path(ROOTS_PRINCIPAL, '/support'),
        list: path(ROOTS_PRINCIPAL, '/support/list'),
        view: (mailId: string) => path(ROOTS_PRINCIPAL, `/support/${mailId}`),
    },
    accident_incident: path(ROOTS_PRINCIPAL, '/incident/list'),
    timetable: {
        root: path(ROOTS_PRINCIPAL, '/time-table/create-timetable'),
        contract: path(ROOTS_PRINCIPAL, '/time-table/contract'),
        generate: path(ROOTS_PRINCIPAL, '/time-table/generate-timetable'),
        teacher_class: path(ROOTS_PRINCIPAL, '/time-table/teacher-class-timetable')
    },
    dismissal_process: path(ROOTS_PRINCIPAL, '/dismissal-process'),
    external_apps: path(ROOTS_PRINCIPAL, '/external-apps/list'),
    notifications: path(ROOTS_PRINCIPAL, '/notifications'),
    account_settings: path(ROOTS_PRINCIPAL, '/account-settings'),
    reports: {
        root: path(ROOTS_PRINCIPAL, '/reports'),
        attendance: path(ROOTS_PRINCIPAL, '/reports/attendance'),
    }
};

export const PATH_TEACHER = {
    root: ROOTS_TEACHER,
    dashboard: path(ROOTS_TEACHER, '/dashboard'),
    take_attendance: path(ROOTS_TEACHER, '/take-attendance'),
    progress_tracking: path(ROOTS_TEACHER, '/progress-tracking'),
    dismissal_process: path(ROOTS_TEACHER, '/dismissal-process'),
    teacher: {
        about: path(ROOTS_TEACHER, '/about'),
        lesson: path(ROOTS_TEACHER, '/lesson'),
        class: path(ROOTS_TEACHER, '/class'),
    },
    student_marks: {
        root: path(ROOTS_TEACHER, '/grade/lessons'),
        grade: path(ROOTS_TEACHER, '/grade/[lessonId]'),
        kinder: {
            list: path(ROOTS_TEACHER, '/grade/kinder/list'),
            grade: path(ROOTS_TEACHER, '/grade/kinder/[studentId]')
        }
    },
    accident_incident: path(ROOTS_TEACHER, '/accident-incident'),
    award: {
        root: path(ROOTS_TEACHER, '/award'),
        class_list: path(ROOTS_TEACHER, '/award/class-list'),
        class: {
            edit: (classId: string) => path(ROOTS_TEACHER, `/award/edit/${classId}`)
        },
    },
    notifications: path(ROOTS_TEACHER, '/notifications'),
    account_settings: path(ROOTS_TEACHER, '/account-settings'),
    notification_permissions: path(ROOTS_TEACHER, '/notification-permissions'),
    limit_push: path(ROOTS_TEACHER, '/limit-push'),
    parent_permissions: path(ROOTS_TEACHER, '/parent-permissions'),
    change_password: path(ROOTS_TEACHER, '/change-password'),
    personal_information: path(ROOTS_TEACHER, '/personal-information'),
    support: {
        root: path(ROOTS_TEACHER, '/support'),
        list: path(ROOTS_TEACHER, '/support/list'),
        view: (mailId: string) => path(ROOTS_TEACHER, `/support/${mailId}`),
    },
};

export const PATH_ADMISSION = {
    root: ROOTS_ADMISSION,
    application: path(ROOTS_ADMISSION, '/application'),
};

export const PATH_STUDENT = {
    root: ROOTS_STUDENT,
    dashboard: path(ROOTS_STUDENT, '/dashboard'),
    dismissal_process: path(ROOTS_STUDENT, '/dismissal-process'),
    accident_incident: path(ROOTS_STUDENT, '/accident-incident'),
    attendance: path(ROOTS_STUDENT, '/attendance'),
    notifications: path(ROOTS_STUDENT, '/notifications'),
    account_settings: path(ROOTS_STUDENT, '/account-settings'),
    support: {
        root: path(ROOTS_ADMIN, '/support'),
        list: path(ROOTS_ADMIN, '/support/list'),
        view: (mailId: string) => path(ROOTS_STUDENT, `/support/${mailId}`),
    },
};

export const PATH_GUARDIAN = {
    root: ROOTS_GUARDIAN,
    dashboard: path(ROOTS_GUARDIAN, '/dashboard'),
    dismissal_process: path(ROOTS_GUARDIAN, '/dismissal-process'),
    accident_incident: path(ROOTS_GUARDIAN, '/accident-incident'),
    attendance: path(ROOTS_GUARDIAN, '/attendance'),
    grading: path(ROOTS_GUARDIAN, '/grading'),
    notifications: path(ROOTS_GUARDIAN, '/notifications'),
    account_settings: path(ROOTS_GUARDIAN, '/account-settings'),
    support: {
        root: path(ROOTS_GUARDIAN, '/support'),
        list: path(ROOTS_GUARDIAN, '/support/list'),
        view: (mailId: string) => path(ROOTS_GUARDIAN, `/support/${mailId}`),
    },
};

export const PATH_PARENT = {
    root: ROOTS_PARENT,
    dashboard: path(ROOTS_PARENT, '/dashboard'),
    progress_tracking: path(ROOTS_PARENT, '/progress-tracking'),
    dismissal_process: path(ROOTS_PARENT, '/dismissal-process'),
    accident_incident: path(ROOTS_PARENT, '/accident-incident'),
    attendance: path(ROOTS_PARENT, '/attendance'),
    reward: path(ROOTS_PARENT, '/reward'),
    notifications: path(ROOTS_PARENT, '/notifications'),
    account_settings: path(ROOTS_PARENT, '/account-settings'),
    support: {
        root: path(ROOTS_ADMIN, '/support'),
        list: path(ROOTS_ADMIN, '/support/list'),
        view: (mailId: string) => path(ROOTS_ADMIN, `/support/${mailId}`),
    },
};

export const PATH_NURSE = {
    root: ROOTS_NURSE,
    dashboard: path(ROOTS_NURSE, '/dashboard'),
    incident: {
        list: path(ROOTS_NURSE, '/incident/list'),
        create: path(ROOTS_NURSE, '/incident/create'),
    },
    notifications: path(ROOTS_NURSE, '/notifications'),
    account_settings: path(ROOTS_NURSE, '/account-settings'),

};

export const PATH_ACADEMIC = {
    root: ROOTS_ACADEMIC,
    dashboard: path(ROOTS_ACADEMIC, '/dashboard'),
    admission: path(ROOTS_ACADEMIC, '/admission'),
    notifications: path(ROOTS_ACADEMIC, '/notifications'),
    account_settings: path(ROOTS_ACADEMIC, '/account-settings'),

};

export const getPathByUserRole = (role: string) => {
    switch (role) {
        case "admin":
            return PATH_ADMIN;
        case "teacher":
            return PATH_TEACHER;
        case "guardian":
            return PATH_GUARDIAN;
        case "parent":
            return PATH_PARENT;
        case "student":
            return PATH_STUDENT;
        default:
            return PATH_GENERAL;
    }
}