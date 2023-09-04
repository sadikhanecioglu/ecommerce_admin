
import { useDispatch, useSelector } from "src/redux/store";
import { AppSettingContextProps, SomsUserRoles } from "./types";
import { ReactNode, createContext, useCallback, useContext, useEffect, useState } from "react";
import { useAuthContext } from "src/auth/useAuthContext";
import { setAdminCurrentBranch, setCurrentSchool, setSelectedUserType } from "./utils";
import { changeCurrentBranch, changeCurrentSchool, getTerms, getYears, getYearsByBranchId } from "src/redux/slices/school";
import { IBranch } from "src/@types/branch";
import { ITimeTableSchool } from "src/@types/timeTable";
import { getSchool } from "src/redux/slices/timeTable";


const initialState: AppSettingContextProps = {
    currentSchool: undefined,
    currentBranch: undefined,
    currentUserRole: undefined,
    isSettingInitialized: false,
    logOutBranch:() => {},
    logOutSchool:() => {},
}

export const AppSettingContext = createContext(initialState);

export const useAppSetting = () => {
    const context = useContext(AppSettingContext);
    if (!context) throw new Error('useSettingsContext must be use inside SettingsProvider');

    return context;
}

type AppSettingsProviderProps = {
    children: ReactNode;
};

export function AppSettingsProvider({ children }: AppSettingsProviderProps) {

    const dispatch = useDispatch();
    const { currentSchoolYear, currentBranch , currentSchool , currentTerm } = useSelector((state) => state.school)
    const { isGetSchoolFinish, isEmptySchool ,isLoading } = useSelector((state) => state.timeTable);
    const { isAuthenticated, user } = useAuthContext();
    const [selectedUserType, setSelectedUserType] = useState<string | null>();
    const [currentBranchState, setCurrentBranchState] = useState<IBranch | undefined>();
    const [currentSchoolState, setCurrentSchoolState] = useState<ITimeTableSchool | undefined>();
    const [initialized, setInitialized] = useState(false);

    const logOutBranch = () => {
        setAdminCurrentBranch(null);
        setCurrentBranchState(undefined);
    }

    const logOutSchool = () => {
        setCurrentSchool(null);
        setCurrentSchoolState(undefined);
        logOutBranch();
    }


    const initialize = useCallback(async () => {
        if (isAuthenticated && user) {
            //login
            let selectedUserType = typeof window !== 'undefined' ? localStorage.getItem('selectedUserType') : '';

            if (!selectedUserType) {
                setSelectedUserType(user.role[0]);
                selectedUserType = user.role[0];
                setSelectedUserType(selectedUserType);
            }

            if(selectedUserType == "admin"){
                let currentSchoolLocal = typeof window !== 'undefined' ? localStorage.getItem('currentSchool') : '';
                if (currentSchoolLocal) {
                   
                    const cs = JSON.parse(currentSchoolLocal) as ITimeTableSchool;
                    dispatch(changeCurrentSchool(cs))
                    const currentBranchLocal = typeof window !== 'undefined' ? localStorage.getItem('currentBranch') : '';
                    if (currentBranchLocal && selectedUserType == 'admin') {
                        const cr = JSON.parse(currentBranchLocal) as IBranch
                        dispatch(changeCurrentBranch(cr));
                     }
                
                }else{
                    setInitialized(true);
                }

            }           


            // else {
            //     dispatch(getSchool());
            // }



            if(selectedUserType != 'admin'){
                setCurrentSchoolState(undefined);
                setCurrentBranchState(undefined);
                dispatch(getYears());
             }

        }
    }, [isAuthenticated, user])

    useEffect(() => {
        initialize();
    }, [initialize])

    useEffect(() => {

        if(!currentTerm){
            
        }

    },[currentTerm])

    useEffect(() => {
        if (currentSchoolYear) {
            dispatch(getTerms(currentSchoolYear.id));
            setInitialized(true);
        }
    }, [currentSchoolYear])

    useEffect(() => {
        if (currentBranch) {
            dispatch(getYearsByBranchId(currentBranch.id));
            setCurrentBranchState(currentBranch);
            setAdminCurrentBranch(currentBranch);
            //maybe change position 
            
        }
    }, [currentBranch])

    useEffect(() => {


        if (currentSchool) {
            setCurrentSchool(currentSchool)
            setCurrentSchoolState(currentSchool);
            setInitialized(true);
        }

    }, [currentSchool])



    useEffect(() => {

        if (isGetSchoolFinish && !isLoading) {
            setInitialized(true);
        }

    }, [isGetSchoolFinish, isLoading])



    return <AppSettingContext.Provider value={{
        currentUserRole: selectedUserType as SomsUserRoles,
        currentBranch: currentBranchState,
        currentSchool: currentSchoolState,
        isSettingInitialized: initialized,
        logOutBranch:logOutBranch,
        logOutSchool:logOutSchool
    }}>
        {children}
    </AppSettingContext.Provider>


}