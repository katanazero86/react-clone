export default {
  async requestLogin({ userId, userPassword }: { userId: string; userPassword: string }) {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          me: {
            userId,
            userName: 'test',
          },
          token: 'token value',
        });
      }, 3000);
    });
  },
  async requestLogout({ userId }: { userId: string }) {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('logout');
      }, 3000);
    });
  },
};
