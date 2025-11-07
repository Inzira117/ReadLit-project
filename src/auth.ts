export interface User {
    username: string,
    email: string;
    password: string;
}

const USERS_KEY = "users";
const CURRENT_USER_KEY = "currentUser";

// Helper: get all users from localStorage
const getStoredUsers = (): User[] => {
  const usersJson = localStorage.getItem(USERS_KEY);
  return usersJson ? JSON.parse(usersJson) : [];
};

// Register a new user
export const registerUser = (
  username: string,
  email: string,
  password: string
): string => {
  const users = getStoredUsers();

  if (users.find((u) => u.email === email)) {
    throw new Error("User already exists");
  }

  const newUser: User = { username, email, password };
  users.push(newUser);

  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(newUser));

  return "Registration successful!";
};

// Login user
export const loginUser = (email: string, password: string): string => {
  const users = getStoredUsers();
  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    throw new Error("Invalid email or password");
  }

  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
  return "Login successful!";
};

// Logout user
export const logoutUser = (): void => {
  localStorage.removeItem(CURRENT_USER_KEY);
};

// Get current user
export const getCurrentUser = (): User | null => {
  const userJson = localStorage.getItem(CURRENT_USER_KEY);
  return userJson ? JSON.parse(userJson) : null;
};