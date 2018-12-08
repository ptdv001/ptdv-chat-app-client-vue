import { i18n } from '../i18n';

export const STATUS_LIST = {
  ONLINE: { locKey: 'status.online' },
  OFFLINE: { locKey: 'status.offline' },
  AWAY: { locKey: 'status.away' },
  BUSY: { locKey: 'status.busy' },
  TYPING: { locKey: 'status.typing' },
  UNKNOWN: { locKey: 'status.unknown' }
};

// Indirection here to avoid edge case where an updated localization would
// occasionally be updated before being loaded in Vue.
function translate(locKey) {
  return i18n.t(locKey);
}

export function getStatusById(statusId) {
  return STATUS_LIST[statusId] || STATUS_LIST.UNKNOWN;
}

export function getLocalizedStatus(statusId) {
  const status = getStatusById(statusId);
  return translate(status.locKey);
}
