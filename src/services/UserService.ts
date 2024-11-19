class UserService {
  createUser = (name: string, email: string) => {
    const user = {
      name,
      email,
    };
    console.log(user);
  };
}
