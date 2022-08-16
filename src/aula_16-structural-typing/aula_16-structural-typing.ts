type VerifyUserFn = (user: User, sentValue: User) => boolean;

type User = {
  username: string;
  password: string;
};

const verifyUser: VerifyUserFn = (user, sentValue): boolean => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

let dataBase_User = { username: 'Igor', password: '1234' };
let sentUser = { username: 'Igor', password: '1234' };
let loggedIn = verifyUser(dataBase_User, sentUser);
console.log(loggedIn);

dataBase_User = { username: 'Cleito', password: '1234' };
sentUser = { username: 'Cleito', password: '123' };
loggedIn = verifyUser(dataBase_User, sentUser);
console.log(loggedIn);

export { dataBase_User };
