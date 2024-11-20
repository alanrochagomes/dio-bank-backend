import { UserService } from "./UserService";

describe("UserService", () => {
  const userService = new UserService();

  it("Deve adicionar um novo usuario", () => {
    const mockConsole = jest.spyOn(global.console, "log");
    userService.createUser("user", "user@test.com");
    expect(mockConsole).toHaveBeenCalled();
  });
});
