import { ISchoolClass } from 'src/@types/school';
import { IAwardClass, IAwardGroup, IAwardSkill, IAwardStudent } from '../@types/award';
import _mock from './_mock';
import { ITimeTableBellPeriod } from 'src/@types/timeTable';

export const _notifications = [...Array(5)].map((_, index) => ({
    id: _mock.id(index),
    title: [
        'Your order is placed',
        'Sylvan King',
        'You have new message',
        'You have new mail',
        'Delivery processing',
    ][index],
    description: [
        'waiting for shipping',
        'answered to your comment on the Minimal',
        '5 unread messages',
        'sent from Guido Padberg',
        'Your order is being shipped',
    ][index],
    avatar: [null, _mock.image.avatar(2), null, null, null][index],
    type: ['order_placed', 'friend_interactive', 'chat_message', 'mail', 'order_shipped'][index],
    createdAt: _mock.time(index),
    isUnRead: [true, true, false, false, false][index],
}));



export const STUDENTS = [
    {
        id: 5,
        firstname: 'Mustafa',
        lastname: 'Keskindag',
        class: 1,
        class_name: '1/A',
        photoURL: "https://api-dev-minimal-v4.vercel.app/assets/images/avatars/avatar_default.jpg",
        guardian_id: 20,
    },
    {
        id: 1,
        firstname: 'Sadik',
        lastname: 'Hanecioglu',
        class: 1,
        class_name: '5/C',
        photoURL: "https://api-prod-minimal-v4.vercel.app/assets/images/avatars/avatar_2.jpg",
        guardian_id: 20,
    }, {
        id: 6,
        firstname: 'Annabel',
        lastname: 'Kayla',
        class: 1,
        class_name: '1/A',
        photoURL: "https://api-dev-minimal-v4.vercel.app/assets/images/avatars/avatar_default.jpg",
        guardian_id: 26,

    },
    {
        id: 7,
        firstname: 'Adalberto',
        lastname: 'Adalberto',
        class: 1,
        class_name: '5/C',
        photoURL: "https://api-prod-minimal-v4.vercel.app/assets/images/avatars/avatar_2.jpg",
        guardian_id: 27,
    }
]

/**"accounts" | "classes" | "teams" | "pearson_e_textbook" | "uniforms" |
 "fees" | "books" | "student_documents" | "homework" | "classroom_concerns" |
 "academic_progress" | "violence" | "bullying" | "identifying_special_needs" |
 "uniform_issue" | "student_absence" | "teacher_rel_class_concern" | "teacher_not_communicationg" |
 "teacher_attitude" | "teacher_absence" | "academic_concern" | "student_behaviour" | "nanny" | "maintenance " */
export const SupportStatus = [
    {
        label: "accounts",
        value: "accounts"
    },
    {
        label: "classes",
        value: "classes"
    },
    {
        label: "teams",
        value: "teams"
    },
    {
        label: "pearson_e_textbook",
        value: "pearson_e_textbook"
    },
    {
        label: "uniforms",
        value: "uniforms"
    },
    {
        label: "fees",
        value: "fees"
    },
    {
        label: "books",
        value: "books"
    },
    {
        label: "student_documents",
        value: "student_documents"
    },
    {
        label: "homework",
        value: "homework"
    },
    {
        label: "classroom_concerns",
        value: "classroom_concerns"
    },
    {
        label: "academic_progress",
        value: "academic_progress"
    },
    {
        label: "violence",
        value: "violence"
    }
]

export const USER_TYPE_OPTIONS = [

    { 'value': 'student', 'label': 'Student' },
    { 'value': 'teacher', 'label': 'Teacher' },
    { 'value': 'guardian', 'label': 'Guardian' },
    { 'value': 'parent', 'label': 'Parent' },
    { 'value': 'academic', 'label': 'Academic' },
    { 'value': 'admin', 'label': 'Admin' },
    { 'value': 'nurse', 'label': 'Nurse' },
    { 'value': 'principal', 'label': 'Principal' },
]

export const USER_GENDER = [
    {'value': 'Female', 'label': 'Female'},
    {'value': 'Male', 'label': 'Male'},
    {'value': 'Other', 'label': 'Other'}
]

export const AwardStudents = []
export const TEACHERS = [
    {
        id: "1",
        name: "Test Teacher"

    },
    {
        id: "2",
        name: "Test Guardian"

    }

]

export const KINDER_GRADE_OPTIONS = [{
    label: 'Above Expectation',
    value: 'Above Expectation'
},
{
    label: 'On Expected Level',
    value: 'On Expected Level'
},
{
    label: 'Not Progressing',
    value: 'Not Progressing'
}]

export const SCORE_OPTIONS = [{
    label: 'Unacceptable',
    value: 'Unacceptable'
},
{
    label: 'On Level',
    value: 'On Level'
},
{
    label: 'Off Level',
    value: 'Off Level'
}]



export const AwardSkills: IAwardSkill[] = [
    {
        "id": 1,
        "name": "Programming",
        "point_weight": 1,
        "is_positive": true,
        "icon_name": "Skill1",
        "created_at": "2023-04-10T17:20:16.174314Z"
    },
    {
        "id": 2,
        "name": "Teamwork",
        "point_weight": 1,
        "is_positive": true,
        "icon_name": "Skill2",
        "created_at": "2023-04-10T17:20:43.598709Z"
    }, {
        "id": 3,
        "name": "Off Task",
        "point_weight": 1,
        "is_positive": false,
        "icon_name": "Skill1",
        "created_at": "2023-04-10T18:58:17.845288Z"
    }
]

export const GRADE_CLASS = [
    { name: '1/A', id: 1 },
    { name: '1/B', id: 2 },
    { name: '2/A', id: 3 }
];

export const GRADE_CLASS_NAME: ISchoolClass[] = [
    { class_name: '1/A', id: 1, class_description: '' },
    { class_name: '1/B', id: 2, class_description: '' },
    { class_name: '2/A', id: 3, class_description: '' }
];

export const GRADE_TERM = [
    { id: "1", name: 'Term 1' },
    { id: "2", name: 'Term 2' },
    { id: "3", name: 'Term 3' }

];

export const GRADE_TAB_GROUP = [
    { id: "student", name: 'Students' },
    { id: "groups", name: 'Groups' }

];


export const timetableData = [
    {
        class: "",
        term: [
            {
                day: "Sunday",
                lessons: [
                    {
                        hour: 1,
                        lesson: ""
                    },
                    {
                        hour: 2,
                        lesson: ""
                    },
                    {
                        hour: 3,
                        lesson: ""
                    },
                    {
                        hour: 4,
                        lesson: ""
                    },
                    {
                        hour: 5,
                        lesson: ""
                    },
                    {
                        hour: 6,
                        lesson: ""
                    },
                    {
                        hour: 7,
                        lesson: ""
                    }
                ]
            },
            {
                day: "Monday",
                lessons: [
                    {
                        hour: 1,
                        lesson: ""
                    },
                    {
                        hour: 2,
                        lesson: ""
                    },
                    {
                        hour: 3,
                        lesson: ""
                    },
                    {
                        hour: 4,
                        lesson: ""
                    },
                    {
                        hour: 5,
                        lesson: ""
                    },
                    {
                        hour: 6,
                        lesson: ""
                    },
                    {
                        hour: 7,
                        lesson: ""
                    }
                ]
            }
        ]
    },
    {
        class: "1/A",
        term: [
            {
                day: "Sunday",
                lessons: [
                    {
                        hour: 1,
                        lesson: "Science"
                    },
                    {
                        hour: 2,
                        lesson: ""
                    },
                    {
                        hour: 3,
                        lesson: ""
                    },
                    {
                        hour: 4,
                        lesson: "Science"
                    },
                    {
                        hour: 5,
                        lesson: ""
                    },
                    {
                        hour: 6,
                        lesson: ""
                    },
                    {
                        hour: 7,
                        lesson: ""
                    }
                ]
            },
            {
                day: "Monday",
                lessons: [
                    {
                        hour: 1,
                        lesson: ""
                    },
                    {
                        hour: 2,
                        lesson: ""
                    },
                    {
                        hour: 3,
                        lesson: "English"
                    },
                    {
                        hour: 4,
                        lesson: ""
                    },
                    {
                        hour: 5,
                        lesson: ""
                    },
                    {
                        hour: 6,
                        lesson: "English"
                    },
                    {
                        hour: 7,
                        lesson: ""
                    }
                ]
            }
        ]
    },
    {
        class: "2/A",
        term: [
            {
                day: "Sunday",
                lessons: [
                    {
                        hour: 1,
                        lesson: ""
                    },
                    {
                        hour: 2,
                        lesson: ""
                    },
                    {
                        hour: 3,
                        lesson: ""
                    },
                    {
                        hour: 4,
                        lesson: "Science"
                    },
                    {
                        hour: 5,
                        lesson: ""
                    },
                    {
                        hour: 6,
                        lesson: ""
                    },
                    {
                        hour: 7,
                        lesson: "Science"
                    }
                ]
            },
            {
                day: "Monday",
                lessons: [
                    {
                        hour: 1,
                        lesson: "Science"
                    },
                    {
                        hour: 2,
                        lesson: ""
                    },
                    {
                        hour: 3,
                        lesson: ""
                    },
                    {
                        hour: 4,
                        lesson: "Science"
                    },
                    {
                        hour: 5,
                        lesson: "Mathematics"
                    },
                    {
                        hour: 6,
                        lesson: "English"
                    },
                    {
                        hour: 7,
                        lesson: ""
                    }
                ]
            }
        ]
    },
    {
        class: "3/A",
        term: [
            {
                day: "Sunday",
                lessons: [
                    {
                        hour: 1,
                        lesson: ""
                    },
                    {
                        hour: 2,
                        lesson: ""
                    },
                    {
                        hour: 3,
                        lesson: ""
                    },
                    {
                        hour: 4,
                        lesson: ""
                    },
                    {
                        hour: 5,
                        lesson: "Mathematics"
                    },
                    {
                        hour: 6,
                        lesson: "English"
                    },
                    {
                        hour: 7,
                        lesson: ""
                    }
                ]
            },
            {
                day: "Monday",
                lessons: [
                    {
                        hour: 1,
                        lesson: ""
                    },
                    {
                        hour: 2,
                        lesson: "Mathematics"
                    },
                    {
                        hour: 3,
                        lesson: ""
                    },
                    {
                        hour: 4,
                        lesson: ""
                    },
                    {
                        hour: 5,
                        lesson: ""
                    },
                    {
                        hour: 6,
                        lesson: "English"
                    },
                    {
                        hour: 7,
                        lesson: "Science"
                    }
                ]
            }
        ]
    },
]

export const timeoffData = [
    {
        class: "Days",
        term: [
            {
                lessons: [
                    {
                        hour: 1,
                        lesson: ""
                    },
                    {
                        hour: 2,
                        lesson: ""
                    },
                    {
                        hour: 3,
                        lesson: ""
                    },
                    {
                        hour: 4,
                        lesson: ""
                    },
                    {
                        hour: 5,
                        lesson: ""
                    },
                    {
                        hour: 6,
                        lesson: ""
                    },
                    {
                        hour: 7,
                        lesson: ""
                    }
                ]
            }
        ]
    },
    {
        class: "Monday",
        term: [
            {
                lessons: [
                    {
                        hour: 1,
                        lesson: "Science"
                    },
                    {
                        hour: 2,
                        lesson: ""
                    },
                    {
                        hour: 3,
                        lesson: ""
                    },
                    {
                        hour: 4,
                        lesson: "Science"
                    },
                    {
                        hour: 5,
                        lesson: ""
                    },
                    {
                        hour: 6,
                        lesson: ""
                    },
                    {
                        hour: 7,
                        lesson: ""
                    }
                ]
            },
        ]
    },
    {
        class: "Tuesday",
        term: [
            {
                lessons: [
                    {
                        hour: 1,
                        lesson: ""
                    },
                    {
                        hour: 2,
                        lesson: ""
                    },
                    {
                        hour: 3,
                        lesson: ""
                    },
                    {
                        hour: 4,
                        lesson: "Science"
                    },
                    {
                        hour: 5,
                        lesson: ""
                    },
                    {
                        hour: 6,
                        lesson: ""
                    },
                    {
                        hour: 7,
                        lesson: "Science"
                    }
                ]
            },
        ]
    },
    {
        class: "Wednesday",
        term: [
            {
                lessons: [
                    {
                        hour: 1,
                        lesson: ""
                    },
                    {
                        hour: 2,
                        lesson: ""
                    },
                    {
                        hour: 3,
                        lesson: ""
                    },
                    {
                        hour: 4,
                        lesson: ""
                    },
                    {
                        hour: 5,
                        lesson: "Mathematics"
                    },
                    {
                        hour: 6,
                        lesson: "English"
                    },
                    {
                        hour: 7,
                        lesson: ""
                    }
                ]
            }
        ]
    },
    {
        class: "Thursday",
        term: [
            {
                lessons: [
                    {
                        hour: 1,
                        lesson: ""
                    },
                    {
                        hour: 2,
                        lesson: ""
                    },
                    {
                        hour: 3,
                        lesson: ""
                    },
                    {
                        hour: 4,
                        lesson: ""
                    },
                    {
                        hour: 5,
                        lesson: "Mathematics"
                    },
                    {
                        hour: 6,
                        lesson: "English"
                    },
                    {
                        hour: 7,
                        lesson: ""
                    }
                ]
            }
        ]
    },
    {
        class: "Friday",
        term: [
            {
                lessons: [
                    {
                        hour: 1,
                        lesson: ""
                    },
                    {
                        hour: 2,
                        lesson: ""
                    },
                    {
                        hour: 3,
                        lesson: ""
                    },
                    {
                        hour: 4,
                        lesson: ""
                    },
                    {
                        hour: 5,
                        lesson: "Mathematics"
                    },
                    {
                        hour: 6,
                        lesson: "English"
                    },
                    {
                        hour: 7,
                        lesson: ""
                    }
                ]
            }
        ]
    },
    {
        class: "Saturday",
        term: [
            {
                lessons: [
                    {
                        hour: 1,
                        lesson: ""
                    },
                    {
                        hour: 2,
                        lesson: ""
                    },
                    {
                        hour: 3,
                        lesson: ""
                    },
                    {
                        hour: 4,
                        lesson: ""
                    },
                    {
                        hour: 5,
                        lesson: "Mathematics"
                    },
                    {
                        hour: 6,
                        lesson: "English"
                    },
                    {
                        hour: 7,
                        lesson: ""
                    }
                ]
            }
        ]
    },
    {
        class: "Sunday",
        term: [
            {
                lessons: [
                    {
                        hour: 1,
                        lesson: ""
                    },
                    {
                        hour: 2,
                        lesson: ""
                    },
                    {
                        hour: 3,
                        lesson: ""
                    },
                    {
                        hour: 4,
                        lesson: ""
                    },
                    {
                        hour: 5,
                        lesson: "Mathematics"
                    },
                    {
                        hour: 6,
                        lesson: "English"
                    },
                    {
                        hour: 7,
                        lesson: ""
                    }
                ]
            }
        ]
    },
]

export const gradeData = [
    {
        course: "English",
        homework: "20/20",
        participation: "20/20",
        quiz: "20/20",
        exam: "20/20",
        total: "20/20"
    },
    {
        course: "Mathematics",
        homework: "20/20",
        participation: "20/20",
        quiz: "20/20",
        exam: "20/20",
        total: "20/20"
    },
    {
        course: "Science",
        homework: "20/20",
        participation: "20/20",
        quiz: "20/20",
        exam: "20/20",
        total: "20/20"
    },
    {
        course: "Social Studies English",
        homework: "20/20",
        participation: "20/20",
        quiz: "20/20",
        exam: "20/20",
        total: "20/20"
    },
    {
        course: "Computer",
        homework: "20/20",
        participation: "20/20",
        quiz: "20/20",
        exam: "20/20",
        total: "20/20"
    },
    {
        course: "Arabic/AS",
        homework: "20/20",
        participation: "20/20",
        quiz: "20/20",
        exam: "20/20",
        total: "20/20"
    },
    {
        course: "Islamic/IS",
        homework: "20/20",
        participation: "20/20",
        quiz: "20/20",
        exam: "20/20",
        total: "20/20"
    },
    {
        course: "KSAArabic/English",
        homework: "20/20",
        participation: "20/20",
        quiz: "20/20",
        exam: "20/20",
        total: "20/20"
    },
    {
        course: "French",
        homework: "20/20",
        participation: "20/20",
        quiz: "20/20",
        exam: "20/20",
        total: "20/20"
    },
]
export const marksData = [
    {
        name: "Average",
        value: "90"
    },
    {
        name: "Final Mark",
        value: "90"
    },
    {
        name: "General Grade",
        value: "A"
    },
]
export const ranksData = [
    {
        name: "A+",
        value: "100-95"
    },
    {
        name: "A",
        value: "94-90"
    },
    {
        name: "B+",
        value: "89-85"
    },
    {
        name: "B",
        value: "84-80"
    },
    {
        name: "C+",
        value: "79-75"
    },
    {
        name: "C",
        value: "74-70"
    },
    {
        name: "D+",
        value: "69-65"
    },
    {
        name: "D",
        value: "64-60"
    },
    {
        name: "F",
        value: "Below 60"
    },
]


export const TRANSCRIPT_LIST = {
    "generalInfos": {
        "final_report_for_year": "2022 - 2023",
        "grade": 1
    },
    "studentInfos": {
        "fullname": "Abbie Follorou",
        "nationality": null,
        "admission_date": null,
        "date_of_birth": null,
        "date_of_place": null,
        "id_number": null,
        "passport_number": null,
        "previous_school": null,
        "previous_grade": 0
    },
    "final_grade_list": [
        {
            "lesson": "History",
            "termDataList": [
                {
                    "title": "1",
                    "grade": 44
                },
                {
                    "title": "2",
                    "grade": 33
                },
                {
                    "title": "3",
                    "grade": 43
                },
                {
                    "title": "4",
                    "grade": 40.0
                },
                {
                    "title": "Average",
                    "grade": 40.0
                },
                {
                    "title": "Final Grade",
                    "grade": "F"
                }
            ]
        },
        {
            "lesson": "Science",
            "termDataList": [
                {
                    "title": "Term 1",
                    "grade": 46
                },
                {
                    "title": "Term 2",
                    "grade": 51
                },
                {
                    "title": "Term 3",
                    "grade": 53
                },
                {
                    "title": "Total",
                    "grade": 50.0
                },
                {
                    "title": "Average",
                    "grade": 50.0
                },
                {
                    "title": "Final Grade",
                    "grade": "F"
                }
            ]
        },
        {
            "lesson": "Mathematics",
            "termDataList": [
                {
                    "title": "Term 1",
                    "grade": 42
                },
                {
                    "title": "Term 2",
                    "grade": 39
                },
                {
                    "title": "Term 3",
                    "grade": 45
                },
                {
                    "title": "Total",
                    "grade": 42.0
                },
                {
                    "title": "Average",
                    "grade": 42.0
                },
                {
                    "title": "Final Grade",
                    "grade": "F"
                }
            ]
        },
        {
            "lesson": "English",
            "termDataList": [
                {
                    "title": "Term 1",
                    "grade": 65
                },
                {
                    "title": "Term 2",
                    "grade": 65
                },
                {
                    "title": "Term 3",
                    "grade": 70
                },
                {
                    "title": "Total",
                    "grade": 66.66666666666667
                },
                {
                    "title": "Average",
                    "grade": 66.66666666666667
                },
                {
                    "title": "Final Grade",
                    "grade": "D+"
                }
            ]
        }
    ],
    "grading_keys": [
        {
            "id": 12,
            "rank_name": "A+",
            "starting_mark": 95,
            "finish_mark": 100
        },
        {
            "id": 11,
            "rank_name": "A",
            "starting_mark": 90,
            "finish_mark": 94
        },
        {
            "id": 10,
            "rank_name": "B+",
            "starting_mark": 85,
            "finish_mark": 89
        },
        {
            "id": 9,
            "rank_name": "B",
            "starting_mark": 80,
            "finish_mark": 84
        },
        {
            "id": 8,
            "rank_name": "C+",
            "starting_mark": 75,
            "finish_mark": 79
        },
        {
            "id": 7,
            "rank_name": "C",
            "starting_mark": 70,
            "finish_mark": 74
        },
        {
            "id": 6,
            "rank_name": "D+",
            "starting_mark": 65,
            "finish_mark": 69
        },
        {
            "id": 5,
            "rank_name": "D",
            "starting_mark": 60,
            "finish_mark": 64
        },
        {
            "id": 4,
            "rank_name": "F",
            "starting_mark": 0,
            "finish_mark": 59
        }
    ]
}


export const BellPeriodTemplate: ITimeTableBellPeriod[] = [
    {

        id: 1,
        name: "1",
        short: "Name",
        start: "8:00",
        end: "8:45",

    },
    {
        id: 2,
        name: "2",
        short: "Name",
        start: "9:00",
        end: "9:45",

    },
    {

        id: 3,
        name: "3",
        short: "Name",
        start: "10:00",
        end: "10:45",

    },
    {

        id: 4,
        name: "4",
        short: "Name",
        start: "11:00",
        end: "11:45",

    },
    {

        id: 5,
        name: "5",
        short: "Name",
        start: "12:00",
        end: "12:45",

    },
    {

        id: 6,
        name: "6",
        short: "Name",
        start: "13:00",
        end: "13:45",

    },
    {

        id: 7,
        name: "7",
        short: "Name",
        start: "14:00",
        end: "14:45",

    },
]