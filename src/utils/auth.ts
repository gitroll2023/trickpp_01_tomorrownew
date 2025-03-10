export const SESSION_DURATION = 2 * 60 * 60 * 1000; // 2시간

export function setAuthSession() {
  const expiryTime = Date.now() + SESSION_DURATION;
  localStorage.setItem('adminSessionExpiry', expiryTime.toString());
  localStorage.setItem('adminAuth', 'true');
}

export function clearAuthSession() {
  localStorage.removeItem('adminSessionExpiry');
  localStorage.removeItem('adminAuth');
}

export function getSessionTimeRemaining(): number {
  const expiryTime = localStorage.getItem('adminSessionExpiry');
  if (!expiryTime) return 0;
  
  const remaining = parseInt(expiryTime) - Date.now();
  return remaining > 0 ? remaining : 0;
}

export function isSessionValid(): boolean {
  const isAuth = localStorage.getItem('adminAuth') === 'true';
  const remaining = getSessionTimeRemaining();
  return isAuth && remaining > 0;
}
