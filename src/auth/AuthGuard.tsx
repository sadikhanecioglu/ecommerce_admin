import { useState, useEffect } from 'react';
// next
import { useRouter } from 'next/router';
// components
import LoadingScreen from '../components/loading-screen';
import Login from '../pages/auth/login';
import Disallow from 'src/pages/admin/school-setup/disallow';
import { useAuthContext } from './useAuthContext';
import { useAppSetting } from 'src/components/app-settings';
import { PATH_ADMIN, PATH_AUTH } from 'src/routes/paths';
import SchoolSetupPage from 'src/pages/admin/school-setup/setup';



// ----------------------------------------------------------------------

type AuthGuardProps = {
  children: React.ReactNode;
};

export default function AuthGuard({ children }: AuthGuardProps) {
  const { isAuthenticated, isInitialized ,user} = useAuthContext();
  const { currentBranch, currentUserRole, currentSchool, isSettingInitialized } = useAppSetting();
  const { pathname, push } = useRouter();

  const [requestedLocation, setRequestedLocation] = useState<string | null>(null);

  useEffect(() => {

    const pathArray = pathname.split('/')
    if (pathArray.length > 1) {
      if (currentUserRole && pathArray[1] != currentUserRole)
        push(`/${currentUserRole}/`);
    }
    if (requestedLocation && pathname !== requestedLocation) {
      push(requestedLocation);
    }
    if (isAuthenticated) {
      setRequestedLocation(null);

    }
  }, [isAuthenticated, pathname, push, requestedLocation, currentUserRole]);

  useEffect(() => {

    if (isSettingInitialized && currentUserRole == "admin") {
      if (!currentSchool && user?.is_superuser) {
        push(PATH_ADMIN.school_setup.list);
      }
      else if (!currentBranch && currentUserRole == "admin") {
        push(PATH_ADMIN.branch);
      }
    }

  }, [isAuthenticated, currentBranch, currentUserRole, currentSchool, isSettingInitialized])



  if (!isInitialized || !isSettingInitialized) {
    return <LoadingScreen />;
  }

  if (!isAuthenticated) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    push(PATH_AUTH.login);
    //return <Login />;
  }

  return <>{children}</>;
}
