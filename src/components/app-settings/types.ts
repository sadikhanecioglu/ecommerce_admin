import { IBranch } from "src/@types/branch"
import { ITimeTableSchool } from "src/@types/timeTable"

export type SomsUserRoles = 'admin' | 'academic' | 'admission' | 'guardian' | 'nurse' | 'parent' | 'teacher' | undefined

export type AppSettingContextProps = {
    currentUserRole: SomsUserRoles,
    currentBranch: IBranch | undefined,
    currentSchool: ITimeTableSchool | undefined;
    isSettingInitialized:boolean;
    logOutBranch?:VoidFunction;
    logOutSchool?:VoidFunction;
}