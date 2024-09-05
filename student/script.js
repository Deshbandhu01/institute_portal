document.addEventListener("DOMContentLoaded", () => {
    // Simulate fetching data from the backend
    const courses = [
        {
            id: 1,
            title: "Mathematics - Grade 10",
            language: "English",
            content: "Mathematics content goes here...",
        },
        {
            id: 2,
            title: "Science - Grade 8",
            language: "Hindi",
            content: "Science content goes here...",
        },
    ];

    const assignments = [
        {
            id: 1,
            title: "Mathematics Assignment 1",
            dueDate: "30th August 2024",
        },
        {
            id: 2,
            title: "Science Quiz",
            dueDate: "2nd September 2024",
        },
    ];

    // Load courses into the course list
    function loadCourses() {
        const courseList = document.querySelector(".course-list");
        courseList.innerHTML = ""; // Clear the list first
        courses.forEach((course) => {
            const courseItem = document.createElement("div");
            courseItem.classList.add("course-item");
            courseItem.innerHTML = `
                <h3>${course.title}</h3>
                <p>Language: ${course.language}</p>
                <button class="view-content-btn" data-id="${course.id}">View Content</button>
                <button class="download-btn" data-id="${course.id}">Download for Offline</button>
            `;
            courseList.appendChild(courseItem);
        });

        // Attach event listeners for "View Content" buttons
        document.querySelectorAll(".view-content-btn").forEach((btn) => {
            btn.addEventListener("click", (e) => {
                const courseId = e.target.dataset.id;
                viewCourseContent(courseId);
            });
        });

        // Attach event listeners for "Download for Offline" buttons
        document.querySelectorAll(".download-btn").forEach((btn) => {
            btn.addEventListener("click", (e) => {
                const courseId = e.target.dataset.id;
                downloadCourseOffline(courseId);
            });
        });
    }

    // Load assignments into the assignment list
    function loadAssignments() {
        const assignmentList = document.querySelector(".assignment-list");
        assignmentList.innerHTML = ""; // Clear the list first
        assignments.forEach((assignment) => {
            const assignmentItem = document.createElement("div");
            assignmentItem.classList.add("assignment-item");
            assignmentItem.innerHTML = `
                <h3>${assignment.title}</h3>
                <p>Due Date: ${assignment.dueDate}</p>
                <button class="submit-btn" data-id="${assignment.id}">Submit</button>
            `;
            assignmentList.appendChild(assignmentItem);
        });

        // Attach event listeners for "Submit" buttons
        document.querySelectorAll(".submit-btn").forEach((btn) => {
            btn.addEventListener("click", (e) => {
                const assignmentId = e.target.dataset.id;
                submitAssignment(assignmentId);
            });
        });
    }

    // View course content
    function viewCourseContent(courseId) {
        const course = courses.find(c => c.id == courseId);
        if (course) alert(`Viewing content for ${course.title}: ${course.content}`);
        else alert("Course not found");
    }

    // Download course content for offline use (Simulation)
    function downloadCourseOffline(courseId) {
        const course = courses.find(c => c.id == courseId);
        if (course) alert(`Downloading ${course.title} for offline use...`);
        else alert("Course not found");
    }

    // Submit assignment (Simulation)
    function submitAssignment(assignmentId) {
        const assignment = assignments.find(a => a.id == assignmentId);
        if (assignment) alert(`Submitting ${assignment.title}...`);
        else alert("Assignment not found");
    }

    // Load data on page load
    loadCourses();
    loadAssignments();
});