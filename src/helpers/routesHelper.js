import history from '../utils/history';

export const isUserLogged = () => {
  const token = localStorage.token || sessionStorage.token;
  if (token) {
    return true;
  }

  return false;
};

const getLocation = () => {
  const { location } = history;
  return location;
};

export const checkPathByPathName = path => {
  const { pathname } = getLocation();
  return pathname.includes(path);
};

export const checkLoggedPath = (path = null) => {
  if (path) {
    if (!checkPathByPathName(path)) {
      history.push(path);
    }
  } else {
    if (!checkPathByPathName('/dashboard')) {
      history.push('/dashboard');
    }
  }
};

export const handleBackAction = () => {
  history.goBack();
};
