package week1;

public class Algorithms_Data_Structures_EX7 {

    // Recursive Method to Forecast Future Value
    public static double forecastRecursive(double presentValue, double growthRate, int years) {
        if (years == 0) {
            return presentValue;
        }
        return forecastRecursive(presentValue, growthRate, years - 1) * (1 + growthRate);
    }

    // Optimized Iterative Method
    public static double forecastIterative(double presentValue, double growthRate, int years) {
        double futureValue = presentValue;
        for (int i = 0; i < years; i++) {
            futureValue *= (1 + growthRate);
        }
        return futureValue;
    }

    // Main Method for Testing
    public static void main(String[] args) {
        double presentValue = 10000;       // Initial investment
        double growthRate = 0.08;          // 8% annual growth
        int years = 5;                     // Forecast for 5 years

        System.out.println("Financial Forecast using Recursion:");
        double future1 = forecastRecursive(presentValue, growthRate, years);
        System.out.printf("Future Value after %d years: ₹%.2f\n", years, future1);

        System.out.println("\nFinancial Forecast using Iteration:");
        double future2 = forecastIterative(presentValue, growthRate, years);
        System.out.printf("Future Value after %d years: ₹%.2f\n", years, future2);
    }
}

