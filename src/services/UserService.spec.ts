import { User, UserService } from "./UserService";

describe("UserService", () => {
  const mockDb: User[] = [];
  const userService = new UserService(mockDb);

  it("You must add a new user", () => {
    const mockConsole = jest.spyOn(global.console, "log");
    userService.createUser("user", "user@test.com");
    expect(mockConsole).toHaveBeenCalledWith("DB updated", mockDb);
  });
});
