#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

struct Task {
    int taskID;
    string description;
    string teamMember;
    string project;
    string status;
};

vector<Task> taskArray;

// Function to print details of each task
void printTaskList() {
    cout << "Task List:" << endl;
    for(const auto& task : taskArray) {
        cout << "Task ID: " << task.taskID << endl;
        cout << "Description: " << task.description << endl;
        cout << "Assigned Team Member: " << task.teamMember << endl;
        cout << "Project Name: " << task.project << endl;
        cout << "Status: " << task.status << endl;
        cout << endl;
    }
}

// Binary search to find task by ID
int searchByTaskID(int id) {
    int low = 0, high = taskArray.size() - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (taskArray[mid].taskID == id)
            return mid;
        else if (taskArray[mid].taskID < id)
            low = mid + 1;
        else
            high = mid - 1;
    }
    return -1;
}

// Selection sort to sort by status
void sortByStatus() {
    for (int i = 0; i < taskArray.size() - 1; ++i) {
        int minIndex = i;
        for (int j = i + 1; j < taskArray.size(); ++j) {
            if (taskArray[j].status < taskArray[minIndex].status)
                minIndex = j;
        }
        if (minIndex != i)
            swap(taskArray[i], taskArray[minIndex]);
    }
}

// Insertion sort to sort by team member
void sortByTeamMember() {
    // Quick sort implementation
}

// Update task status by ID
void updateTaskStatus(int id, string newStatus) {
    int index = searchByTaskID(id);
    if (index != -1)
        taskArray[index].status = newStatus;
}

// Function to add a new task
void addTask(int id, string description, string teamMember, string project, string status) {
    Task newTask = {id, description, teamMember, project, status};
    taskArray.push_back(newTask);
}

// Function to remove a task by ID
void removeTask(int id) {
    int index = searchByTaskID(id);
    if (index != -1)
        taskArray.erase(taskArray.begin() + index);
}

// Function to filter tasks by project name
void filterByProject(string projectName) {
    cout << "Tasks for project " << projectName << ":" << endl;
    for(const auto& task : taskArray) {
        if (task.project == projectName) {
            cout << "Task ID: " << task.taskID << endl;
            cout << "Description: " << task.description << endl;
            cout << "Assigned Team Member: " << task.teamMember << endl;
            cout << "Project Name: " << task.project << endl;
            cout << "Status: " << task.status << endl;
            cout << endl;
        }
    }
}

// Function to generate report of tasks completed within a specified time period
void generateReport(string startDate, string endDate) {
    cout << "Tasks completed between " << startDate << " and " << endDate << ":" << endl;
    for(const auto& task : taskArray) {
        if (task.status == "Completed") {
            // Add logic to check if the task was completed within the specified time period
            cout << "Task ID: " << task.taskID << endl;
            cout << "Description: " << task.description << endl;
            cout << "Assigned Team Member: " << task.teamMember << endl;
            cout << "Project Name: " << task.project << endl;
            cout << "Status: " << task.status << endl;
            cout << endl;
        }
    }
}

int main() {
    // Sample usage
    addTask(1, "Design UI", "Hassan", "Project C++", "Pending");
    addTask(2, "Implement Backend", "Ali", "Project Python", "In Progress");
    addTask(3, "Write Documentation", "Khan", "Project Java", "Completed");

    printTaskList();

    int index = searchByTaskID(2);
    if (index != -1)
        updateTaskStatus(2, "Completed");

    sortByStatus();

    printTaskList();

    filterByProject("Project X");

    generateReport("2024-01-01", "2024-04-30");

    return 0;
}
