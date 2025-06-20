package week1;

// --- Singleton Logger Class ---
class Logger {
    // Step 1: Private static instance
    private static Logger instance;

    // Step 2: Private constructor to prevent direct instantiation
    private Logger() {
        System.out.println("Logger initialized.");
    }

    // Step 3: Public method to return the single instance
    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger();
        }
        return instance;
    }

    // Step 4: Example method for logging
    public void log(String message) {
        System.out.println("[LOG]: " + message);
    }
}

// --- Main class to test Singleton ---
public class SingletonPatternExample {
    public static void main(String[] args) {
        // Getting the Singleton instance
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        // Logging messages
        logger1.log("This is the first log.");
        logger2.log("This is the second log.");

        // Check if both instances are the same
        System.out.println("Are both loggers same? " + (logger1 == logger2));
    }
}
