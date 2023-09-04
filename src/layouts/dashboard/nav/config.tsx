import { PATH_ADMIN, PATH_GUARDIAN, PATH_NURSE, PATH_PARENT, PATH_STUDENT, PATH_TEACHER, PATH_ACADEMIC, PATH_PRINCIPAL } from '../../../routes/paths';
import Iconify from '../../../components/iconify';

const icon = (name: string) => (
    <Iconify icon={`${name}`} sx={{ width: 1, height: 1 }} />
);

const ICONS = {
    dashboard: icon('material-symbols:dashboard-rounded'),
    personalcard: icon('mdi:user-card-details'),
    feed: icon('material-symbols:rate-review'),
    school: icon('material-symbols:school'),
    user: icon('material-symbols:person'),
    branch: icon('mdi:source-branch'),
    report: icon('material-symbols:bar-chart-rounded'),
    admission: icon('material-symbols:contact-page'),
    accident: icon('material-symbols:breaking-news-alt-1'),
    calendar: icon('material-symbols:calendar-today'),
    support: icon('material-symbols:contact-support-outline-rounded'),
    notifications: icon('material-symbols:notification-important-outline-rounded'),
    rewards: icon('material-symbols:workspace-premium'),
    upcoming: icon('material-symbols:event-upcoming'),
    overview: icon('tabler:device-desktop-analytics'),
    assets: icon('ion:images'),
    history: icon('material-symbols:history-rounded'),
    transactions: icon('icon-park-outline:transaction'),
    swap: icon('material-symbols:swap-calls-rounded'),
    alerts: icon('material-symbols:add-alert-outline-rounded'),
    calculator: icon('mdi:calculator-variant-outline'),
    pricing: icon('icomoon-free:price-tag'),
    updates: icon('material-symbols:system-update-alt-rounded'),
    community: icon('fluent:people-community-16-regular'),
    feedback: icon('uil:feedback'),
    take_attendance: icon('material-symbols:checklist-rtl'),
    student_mark: icon('material-symbols:add-task'),
    tracking: icon('material-symbols:donut-large'),
    dismissal: icon('material-symbols:recent-patient'),
    teacher: icon('material-symbols:group'),
    settings: icon('uil:setting'),
};

export const teacherNavConfig = [
    {
        subheader: 'teacher',
        items: [
            { title: 'Take attendance', path: PATH_TEACHER.take_attendance, icon: ICONS.take_attendance },
            {
                title: 'Student Marks', path: '#', icon: ICONS.student_mark, children: [
                    { title: 'Grade', path: PATH_TEACHER.student_marks.root },
                    { title: 'Kinder Grade', path: PATH_TEACHER.student_marks.kinder.list }
                ]
            },
            { title: 'Progress Tracking for Student', path: PATH_TEACHER.progress_tracking, icon: ICONS.tracking },
            {
                title: 'Rewards', path: '#', icon: ICONS.rewards, children: [
                    { title: 'Student', path: PATH_TEACHER.award.class_list },
                    { title: 'Group', path: '#' },
                ],
            },
            { title: 'Dismissal Process', path: PATH_TEACHER.dismissal_process, icon: ICONS.dismissal },
            {
                title: 'Teacher', path: PATH_TEACHER.teacher.about, icon: ICONS.teacher, children: [
                    { title: 'About', path: PATH_TEACHER.teacher.about },
                    { title: 'Lesson', path: PATH_TEACHER.teacher.lesson },
                    { title: 'Class', path: PATH_TEACHER.teacher.class },
                ],
            },
            { title: 'Support', path: PATH_TEACHER.support.list, icon: ICONS.dashboard },
            //{ title: 'notifications', path: PATH_GENERAL.notifications, icon: ICONS.notifications, info: <Label color="error">+32</Label>, },
        ],
    }
]

export const adminNavConfig = [
    {
        subheader: 'admin',
        items: [
            {
                title: 'Registration', path: PATH_ADMIN.users, icon: ICONS.user
            },
            { title: 'Progress', path: PATH_ADMIN.progress_tracking, icon: ICONS.tracking },
            { title: 'Attendance', path: PATH_ADMIN.take_attendance, icon: ICONS.take_attendance },
            { title: 'Dismissal Process', path: PATH_ADMIN.dismissal_process, icon: ICONS.dismissal },
            {
                title: 'Grading', path: '#', icon: ICONS.student_mark, children: [
                    { title: 'Grade', path: PATH_TEACHER.student_marks.root },
                    { title: 'Kinder Grade', path: PATH_TEACHER.student_marks.kinder.list }
                ]
            },
            {
                title: 'Rewards', path: '#', icon: ICONS.rewards, children: [
                    { title: 'Student', path: PATH_TEACHER.award.class_list },
                    { title: 'Group', path: '#' },
                ],
            },
            {
                title: 'Feed', path: PATH_ADMIN.feed.view, icon: ICONS.feed, children: [
                    { title: 'Create Post', path: PATH_ADMIN.feed.create },
                    { title: 'View Feed', path: PATH_ADMIN.feed.view },
                ],
            },

            {
                title: 'Timetable', path: PATH_ADMIN.timetable.root, icon: ICONS.calendar, children: [
                    { title: 'Create a New Timetable', path: PATH_ADMIN.timetable.root },
                    { title: 'Generate Timetables', path: PATH_ADMIN.timetable.generate },
                    { title: 'Contract', path: PATH_ADMIN.timetable.contract },
                ]
            },
            { title: 'Support', path: PATH_ADMIN.support.list, icon: ICONS.dashboard },

            {
                title: 'Reports', path: '#', icon: ICONS.report, children: [
                    { title: 'Attendance', path: PATH_ADMIN.reports.attendance },
                    { title: 'Grading', path: '#' },
                    { title: 'Progress Tracking', path: '#' },
                ],
            },

            {
                title: 'Admission Application', path: PATH_ADMIN.admission, icon: ICONS.admission
            },
            { title: 'Health & Safety', path: PATH_ADMIN.accident_incident, icon: ICONS.accident },
            { title: 'External Apps', path: PATH_ADMIN.external_apps, icon: ICONS.dismissal },

        ],
    }
]

export const principalNavConfig = [
    {
        subheader: 'admin',
        items: [
            {
                title: 'Feed', path: PATH_PRINCIPAL.feed.view, icon: ICONS.feed, children: [
                    { title: 'Create Post', path: PATH_PRINCIPAL.feed.create },
                    { title: 'View Feed', path: PATH_PRINCIPAL.feed.view },
                ],
            },
            { title: 'Dismissal Process', path: PATH_PRINCIPAL.dismissal_process, icon: ICONS.dismissal },

            {
                title: 'Users', path: PATH_PRINCIPAL.users, icon: ICONS.user
            },
            {
                title: 'Reports', path: '#', icon: ICONS.report, children: [
                    { title: 'Attendance', path: PATH_PRINCIPAL.reports.attendance },
                    { title: 'Grading', path: '#' },
                    { title: 'Progress Tracking', path: '#' },
                ],
            },

            {
                title: 'Admission Application', path: PATH_PRINCIPAL.admission, icon: ICONS.admission
            },
            { title: 'Incident', path: PATH_PRINCIPAL.accident_incident, icon: ICONS.accident },
            { title: 'Support', path: PATH_PRINCIPAL.support.list, icon: ICONS.dashboard },
            {
                title: 'Timetable', path: PATH_PRINCIPAL.timetable.root, icon: ICONS.calendar, children: [
                    { title: 'Create a New Timetable', path: PATH_PRINCIPAL.timetable.root },
                    { title: 'Generate Timetables', path: PATH_PRINCIPAL.timetable.generate },
                    { title: 'Contract', path: PATH_PRINCIPAL.timetable.contract },
                ]
            },
            { title: 'External Apps', path: PATH_PRINCIPAL.external_apps, icon: ICONS.dismissal },

        ],
    }
]

export const studentNavConfig = [
    {
        subheader: 'student',
        items: [
            {
                title: 'Personal Information', path: '#', icon: ICONS.user, children: [
                    { title: 'About', path: '#' },
                    { title: 'Medical', path: '#' },
                    { title: 'Sensitive Information', path: '#' },
                    { title: 'Permissions', path: '#' },
                ],
            },
            {
                title: 'Attendance', path: PATH_STUDENT.attendance, icon: ICONS.take_attendance
            },
            {
                title: 'Dismissal Process', path: PATH_STUDENT.dismissal_process, icon: ICONS.dismissal
            },
            {
                title: 'Grading', path: '#', icon: ICONS.report
            },
            {
                title: 'Rewards', path: '#', icon: ICONS.rewards
            },
            {
                title: 'Reports', path: '#', icon: ICONS.report
            },
            {
                title: 'Incident Event Form', path: PATH_STUDENT.accident_incident, icon: ICONS.accident
            },
            { title: 'Support', path: PATH_STUDENT.support.list, icon: ICONS.dashboard },
            //{ title: 'notifications', path: PATH_GENERAL.notifications, icon: ICONS.notifications, info: <Label color="error">+32</Label>, },
        ],
    }
]

export const guardianNavConfig = [
    {
        subheader: 'guardian',
        items: [

            {
                title: 'Dismissal Process', path: PATH_GUARDIAN.dismissal_process, icon: ICONS.dismissal
            },
            { title: 'Support', path: PATH_GUARDIAN.support.list, icon: ICONS.dashboard },
            {
                title: 'Grading', path: PATH_GUARDIAN.grading, icon: ICONS.student_mark
            },
            //{ title: 'notifications', path: PATH_GENERAL.notifications, icon: ICONS.notifications, info: <Label color="error">+32</Label>, },
        ],
    }
]

export const parentNavConfig = [
    {
        subheader: 'parent',
        items: [
            {
                title: 'Personal Information', path: '#', icon: ICONS.user, children: [
                    { title: 'About', path: '#' },
                    { title: 'Medical', path: '#' },
                    { title: 'Sensitive Information', path: '#' },
                    { title: 'Permissions', path: '#' },
                ],
            },
            {
                title: 'Attendance', path: PATH_PARENT.attendance, icon: ICONS.take_attendance
            },
            {
                title: 'Dismissal Process', path: PATH_PARENT.dismissal_process, icon: ICONS.dismissal
            },
            { title: 'Progress Tracking', path: PATH_PARENT.progress_tracking, icon: ICONS.tracking },
            {
                title: 'Rewards', path: '#', icon: ICONS.rewards, children: [
                    { title: 'Student', path: PATH_TEACHER.award.class_list },
                    { title: 'Group', path: '#' },
                ],
            },
            {
                title: 'Grading', path: '#', icon: ICONS.report
            },
            {
                title: 'Rewards', path: PATH_PARENT.reward, icon: ICONS.rewards
            },
            {
                title: 'Reports', path: '#', icon: ICONS.report
            },
            {
                title: 'Incident List', path: PATH_PARENT.accident_incident, icon: ICONS.accident
            },
            { title: 'Support', path: PATH_PARENT.support.list, icon: ICONS.dashboard },
            //{ title: 'notifications', path: PATH_GENERAL.notifications, icon: ICONS.notifications, info: <Label color="error">+32</Label>, },
        ],
    }
]

export const nurseNavConfig = [
    {
        subheader: 'nurse',
        items: [
            {
                title: 'Incident', path: '#', icon: ICONS.feed, children: [
                    { title: 'Incident List', path: PATH_NURSE.incident.list },
                    { title: 'Incident Create', path: PATH_NURSE.incident.create },
                ],
            },

        ],
    }
]

export const academicNavConfig = [
    {
        subheader: 'academic',
        items: [
            {
                title: 'Admission Application', path: PATH_ACADEMIC.admission, icon: ICONS.admission
            },

        ],
    }
]

