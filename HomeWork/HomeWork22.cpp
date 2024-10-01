#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include <stdexcept>

using namespace std;

// Custom exceptions
class FileNotFoundException : public runtime_error {
public:
    FileNotFoundException(const string& message) : runtime_error(message) {}
};

class InvalidFileFormatException : public runtime_error {
public:
    InvalidFileFormatException(const string& message) : runtime_error(message) {}
};

class EmptyFileException : public runtime_error {
public:
    EmptyFileException(const string& message) : runtime_error(message) {}
};

struct LogEntry {
    int code = 0;            
    string message = "";       
    string type = "";          

    string toString() const {
        return to_string(code) + " " + type + " " + message;
    }
};

class LogManager {
private:
    string filePath;

    void checkFileFormat(const string& path) {
        if (path.substr(path.find_last_of(".") + 1) != "txt") {
            throw InvalidFileFormatException("File must be in .txt format");
        }
    }

    void checkFileExists(const string& path) {
        ifstream file(path);
        if (!file.good()) {
            throw FileNotFoundException("File not found");
        }
    }

    void checkFileNotEmpty(const string& path) {
        ifstream file(path);
        if (file.peek() == ifstream::traits_type::eof()) {
            throw EmptyFileException("File is empty");
        }
    }

public:
    LogManager(const string& path) {
        setFilePath(path);
    }

    void setFilePath(const string& path) {
        checkFileFormat(path);
        filePath = path;
    }

    string getFilePath() const {
        return filePath;
    }

    void addLog(const LogEntry& entry) {
        ofstream file(filePath, ios::app);
        if (!file.is_open()) {
            throw FileNotFoundException("Failed to open file for writing");
        }
        file << entry.toString() << endl;
        file.close();
    }

    vector<LogEntry> readLogs() {
        checkFileExists(filePath);
        checkFileNotEmpty(filePath);

        vector<LogEntry> logs;
        ifstream file(filePath);
        if (!file.is_open()) {
            throw FileNotFoundException("Failed to open file for reading");
        }

        LogEntry entry;
        while (file >> entry.code >> entry.type && getline(file, entry.message)) {
            logs.push_back(entry);
        }

        file.close();
        return logs;
    }

    void copyLogsTo(const string& newFilePath) {
        checkFileFormat(newFilePath);
        checkFileExists(filePath);
        checkFileNotEmpty(filePath);

        ifstream srcFile(filePath, ios::binary);
        ofstream destFile(newFilePath, ios::binary);

        if (!srcFile.is_open() || !destFile.is_open()) {
            throw FileNotFoundException("Failed to open files for copying");
        }

        destFile << srcFile.rdbuf(); 
        srcFile.close();
        destFile.close();
    }

    void deleteLog(int logCode) {
        checkFileExists(filePath);
        checkFileNotEmpty(filePath);

        ifstream file(filePath);
        ofstream tempFile("temp.txt");
        bool found = false;

        LogEntry entry;
        while (file >> entry.code >> entry.type && getline(file, entry.message)) {
            if (entry.code != logCode) {
                tempFile << entry.toString() << endl;
            }
            else {
                found = true;
            }
        }

        file.close();
        tempFile.close();

        if (!found) {
            throw runtime_error("Log with the specified code not found");
        }

        remove(filePath.c_str());

        if (rename("temp.txt", filePath.c_str()) != 0) {
            perror("Error renaming file");
            throw runtime_error("Failed to rename temp file to log file");
        }
    }

    void deleteAllLogs() {
        checkFileExists(filePath);
        checkFileNotEmpty(filePath);

        ofstream file(filePath, ofstream::out | ofstream::trunc);
        file.close();
    }
};

int main() {
    try {
        LogManager logManager("logs.txt");

        LogEntry entry1 = { 101, "Program started", "INFO" };
        LogEntry entry2 = { 102, "Database connection error", "ERROR" };
        LogEntry entry3 = { 103, "User logged in", "INFO" };

        logManager.addLog(entry1);
        logManager.addLog(entry2);
        logManager.addLog(entry3);

        vector<LogEntry> logs = logManager.readLogs();
        for (const auto& log : logs) {
            cout << log.toString() << endl;
        }

        logManager.copyLogsTo("backup_logs.txt");

        logManager.deleteLog(102);

        logs = logManager.readLogs();
        for (const auto& log : logs) {
            cout << log.toString() << endl;
        }

        logManager.deleteAllLogs();
    }
    catch (const exception& e) {
        cerr << "Error: " << e.what() << endl;
    }
}
