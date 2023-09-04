
export const setAdminCurrentBranch = (currentBranch: any | null) => {
    if (currentBranch) {
      localStorage.setItem('currentBranch',JSON.stringify(currentBranch));
    } else {
      localStorage.removeItem('currentBranch');
    }
  };

  export const setSelectedUserType = (userTpe: string | null) => {
    if (userTpe) {
      localStorage.setItem('selectedUserType',userTpe);
    } else {
      localStorage.removeItem('selectedUserType');
    }
  };

  export const setCurrentSchool = (currentSchool: any | null) => {
    if (currentSchool) {
      localStorage.setItem('currentSchool',JSON.stringify(currentSchool));
    } else {
      localStorage.removeItem('currentSchool');
    }
  };