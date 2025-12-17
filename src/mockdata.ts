import type { NewHire } from "./types.ts";

export function getMockNewHires(): NewHire[] {
    const newHires: NewHire[] = [];
    const positions = ["Software Engineer", "HR Executive", "Product Manager", "Designer", "QA Engineer"];
    const departments = ["Engineering", "Human Resources", "Product", "Design", "Quality Assurance"];
    const managers = ["Jane Smith", "Robert King", "Alice Johnson", "David Brown"];
    const degrees = ["B.Tech", "MBA", "B.Sc", "MCA"];

    for (let i = 1; i <= 15; i++) {
        newHires.push({
            id: i,
            code: 1000 + i,
            firstName: `First${i}`,
            middleName: i % 3 === 0 ? `M${i}` : undefined, // optional middleName for some
            lastName: `Last${i}`,
            email: `user${i}@example.com`,
            position: positions[i % positions.length],
            department: departments[i % departments.length],
            manager: managers[i % managers.length],
            degree: degrees[i % degrees.length],
            dateOfJoining: `2024-${String((i % 12) + 1).padStart(2, "0")}-${String((i % 28) + 1).padStart(2, "0")}`,
            photoPath: `https://picsum.photos/200?random=${i}`
        });
    }

    return newHires;
}
