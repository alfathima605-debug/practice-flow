// pages/api/register.js
import bcrypt from "bcryptjs";
import fs from "fs";
import path from "path";

const usersFilePath = path.join(process.cwd(), "users.json");

// Helper to read users from file
function getUsers() {
  if (!fs.existsSync(usersFilePath)) {
    fs.writeFileSync(usersFilePath, JSON.stringify([]));
    return [];
  }
  const data = fs.readFileSync(usersFilePath, "utf8");
  return JSON.parse(data);
}

// Helper to write users array to file
function setUsers(users) {
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, password } = req.body;

  // Basic validation
  if (!name || !email || !password) {
    return res.status(400).json({ message: "Please provide name, email and password" });
  }

  if (password.length < 6) {
    return res.status(400).json({ message: "Password must be at least 6 characters" });
  }

  const users = getUsers();

  // Check if user already exists
  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    return res.status(400).json({ message: "User with this email already exists" });
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create new user
  const newUser = {
    id: Date.now().toString(), // Simple ID generation; in production use UUID or DB auto-increment
    name,
    email,
    password: hashedPassword,
  };

  users.push(newUser);
  setUsers(users);

  // Return success (without password)
  const { password: _, ...userWithoutPassword } = newUser;
  return res.status(201).json({ message: "User created successfully", user: userWithoutPassword });
}
