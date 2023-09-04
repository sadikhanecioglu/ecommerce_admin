// ----------------------------------------------------------------------
export type IInvoice = {
  id: string,

  number: string,

  avatar: string,

  name: string,

  status: boolean,

  info: string,

  role: string,

  request: string,

  approve: string
};

export type IInvoiceLesson = {
  id: string,
  startTime: string,
  endTime: string,
  lesson: string,
  grade: string
}

export type IInvoiceAccident = {
  id: string,
  student: string,
  submitDate: string,
  details: string,
  acknowDate: string
}

export type IInvoiceAttendace = {
  date: string,
  day: string,
  status: {
    attend: string
  }[]
}
