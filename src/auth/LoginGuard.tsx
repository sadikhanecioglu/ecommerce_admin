import { useEffect } from 'react';
// next
import { useRouter } from 'next/router';
// routes
import { PATH_ADMIN, PATH_TEACHER, PATH_STUDENT, PATH_GUARDIAN, PATH_PARENT, PATH_NURSE, PATH_ACADEMIC, PATH_AUTH, PATH_PRINCIPAL } from '../routes/paths';
// components
import LoadingScreen from '../components/loading-screen';
//
import { useAuthContext } from './useAuthContext';
import { useAppSetting } from 'src/components/app-settings';

// ----------------------------------------------------------------------

type LoginGuardProps = {
    children: React.ReactNode;
};

export default function LoginGuard({ children }: LoginGuardProps) {
    const { push } = useRouter();

    const { isAuthenticated, isInitialized, user } = useAuthContext();

    useEffect(() => {
        if (isAuthenticated) {

            if (user?.role.includes('admin')) {
              push(PATH_ADMIN.dashboard);
            }
            else if (user?.role.includes('teacher'))
                push(PATH_TEACHER.dashboard);
            else if (user?.role.includes('student'))
                push(PATH_STUDENT.dashboard);
            else if (user?.role.includes('guardian'))
                push(PATH_GUARDIAN.dashboard);
            else if (user?.role.includes('parent'))
                push(PATH_PARENT.dashboard);
            else if (user?.role.includes('nurse'))
                push(PATH_NURSE.incident.list);
            else if (user?.role.includes('academic'))
                push(PATH_ACADEMIC.admission);
            else if (user?.role.includes('principal'))
                push(PATH_PRINCIPAL.dashboard);
            else
                push(PATH_AUTH.login);
        }



        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated]);

    if (isInitialized === isAuthenticated) {
        return <LoadingScreen />;
    }

    return <> {children} </>;
}
