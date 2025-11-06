export interface User {
    id: number;
    username: string;
    email: string;
}

const USERS_KEY = "users";
const CURRENT_USER_KEY = "currentUser";

// Helper: get all users from localStorage
const getStoredUsers = (): User[] => {
  const usersJson = localStorage.getItem(USERS_KEY);
  return usersJson ? JSON.parse(usersJson) : [];
};

// Register a new user
export const registerUser = (email: string, password: string): string => {
  const users = getStoredUsers();

  // check if user exists
  if (users.find((u) => u.email === email)) {
    throw new Error("User already exists");
  }

  const newUser = { email, password };
  users.push(newUser);

  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(newUser));

  return "Registration successful!";
};