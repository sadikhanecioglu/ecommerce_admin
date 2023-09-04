import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
// slices
import admissionReducer from './slices/admission';
import chatReducer from './slices/chat';
import dismissalReducer from './slices/dismissal';
import accidentReducer from './slices/accident'
import attendanceReducer from './slices/attendance'
import supportReducer from './slices/support'
import progressReducer from './slices/progress'
import studentReducer from './slices/student'
import userReducer from './slices/user'
import rewardReducer from './slices/rewards'
import timeTableReducer from './slices/timeTable'
import feedReducer from './slices/feed'
import schoolReducer from './slices/school'
import gradeReducer from './slices/grade'
import notificationReducer from './slices/notification'
import externalLinkReducer from './slices/external'
import branchReducer from './slices/branch'
// ----------------------------------------------------------------------

const createNoopStorage = () => ({
  getItem(_key: string) {
    return Promise.resolve(null);
  },
  setItem(_key: string, value: any) {
    return Promise.resolve(value);
  },
  removeItem(_key: string) {
    return Promise.resolve();
  },
});

const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage();

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: [],
};

const admissionPersistConfig = {
  key: 'admission',
  storage,
  keyPrefix: 'redux-',
  whitelist: ['sortBy', 'checkout'],
};
const dismissalPersistConfig = {
  key: 'dismissal',
  storage,
  keyPrefix: 'redux-',
  whitelist: ['sortBy', 'checkout'],
};

const progressPersistConfig = {
  key: 'progress',
  storage,
  keyPrefix: 'redux-',
  whitelist: ['sortBy', 'checkout'],
};
const rewardPersistConfig = {
  key: 'reward',
  storage,
  keyPrefix: 'redux-',
  whitelist: ['sortBy', 'checkout'],
};
const schoolPersistConfig = {
  key: 'school',
  storage,
  keyPrefix: 'redux-',
  whitelist: ['sortBy', 'checkout'],
}

const notificationPersistConfig = {
  key: 'notification',
  storage,
  keyPrefix: 'redux-',
  whitelist: ['sortBy', 'checkout'],
}

const branchesPersistConfig = {
  key: 'notification',
  storage,
  keyPrefix: 'redux-',
  whitelist: ['sortBy', 'checkout'],
}

const rootReducer = combineReducers({
  admission: persistReducer(admissionPersistConfig, admissionReducer),
  chat: chatReducer,
  dismissal: persistReducer(dismissalPersistConfig, dismissalReducer),
  accident: accidentReducer,
  attendance: attendanceReducer,
  support: supportReducer,
  progress: persistReducer(progressPersistConfig, progressReducer),
  student: studentReducer,
  user: userReducer,
  reward: persistReducer(rewardPersistConfig, rewardReducer),
  timeTable: timeTableReducer,
  feed: feedReducer,
  school: persistReducer(schoolPersistConfig, schoolReducer),
  grade: gradeReducer,
  notification: persistReducer(notificationPersistConfig, notificationReducer),
  external: externalLinkReducer,
  branch: persistReducer(branchesPersistConfig, branchReducer)
});

export { rootPersistConfig, rootReducer };
