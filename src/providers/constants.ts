import type { Subject } from "@/types";

export const API_URL = "https://api.fake-rest.refine.dev";

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    name: "Introduction to Algorithms",
    code: "CS201",
    department: "Computer Science",
    description:
      "Covers fundamental algorithmic techniques including sorting, searching, graph algorithms, and complexity analysis.",
    createdAt: "2025-09-01T08:00:00.000Z",
  },
  {
    id: 2,
    name: "Calculus II",
    code: "MATH202",
    department: "Mathematics",
    description:
      "A continuation of Calculus I exploring integral calculus, techniques of integration, sequences, and series.",
    createdAt: "2025-09-01T08:00:00.000Z",
  },
  {
    id: 3,
    name: "Classical Mechanics",
    code: "PHY301",
    department: "Physics",
    description:
      "Examines Newtonian mechanics, Lagrangian and Hamiltonian formulations, rigid body dynamics, and oscillatory systems.",
    createdAt: "2025-09-01T08:00:00.000Z",
  },
];

export const DEPARTMENTS = [
  "Computer Science",
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "History",
  "Literature",
  "Economics",
];

export const DEPARTMENT_OPTIONS = DEPARTMENTS.map((dept) => ({
  label: dept,
  value: dept,
}));
