import { useEffect, useState } from 'react';
// next
import { useRouter } from 'next/router';
// routes
import { PATH_ADMIN } from '../routes/paths';
// components
import LoadingScreen from '../components/loading-screen';
//
import { useAuthContext } from './useAuthContext';
import { useAppSetting } from 'src/components/app-settings';

// ----------------------------------------------------------------------

type BranchSelectGuardProps = {
    children: React.ReactNode;
};

export default function BranchSelectGuard({ children }: BranchSelectGuardProps) {
    const { pathname, push } = useRouter();

    const { isAuthenticated, isInitialized } = useAuthContext();
    const { currentSchool,currentBranch } = useAppSetting();
    const [requestedLocation, setRequestedLocation] = useState<string | null>(null);

    useEffect(() => {

        if (requestedLocation && pathname !== requestedLocation) {
            push(requestedLocation);
        }

        if(isAuthenticated){
            if (currentBranch && currentSchool) {
                
                push(PATH_ADMIN.dashboard);
            }
            if(currentSchool && !currentBranch){
                push(PATH_ADMIN.branch);
            }
        }


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated,currentSchool,currentBranch]);

    // if (isInitialized === isAuthenticated) {
    //   return <LoadingScreen />;
    // }

    return <> {children} </>;
}
