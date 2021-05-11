export const removeEvent = event => {
  localStorage.setItem(event.name, event.data);
  localStorage.removeItem(event.name);
};

export function triggerTokenSyncEvent(events) {
  if (Array.isArray(events)) {
    events.forEach(event => {
      removeEvent(event);
    });
  } else {
    removeEvent(events);
  }
}

export function removeToken() {
  localStorage.removeItem('token');
  sessionStorage.removeItem('token');
}
