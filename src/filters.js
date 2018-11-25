import Vue from 'vue';

Vue.filter('emailMask', email => {
  if (typeof email !== 'string') {
    return email;
  }

  const emailSplit = email.split('@');
  if (emailSplit.length !== 2) {
    return email;
  }

  const emailPrefix = emailSplit[0].split('');
  for (let i = 2; i < emailPrefix.length; i++) {
    emailPrefix[i] = '*';
  }

  return emailPrefix.join('') + '@' + emailSplit[1];
})
