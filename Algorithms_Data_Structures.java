package week1;

import java.util.Arrays;
import java.util.Comparator;

class Product {
    int productId;
    String productName;
    String category;

    public Product(int id, String name, String category) {
        this.productId = id;
        this.productName = name;
        this.category = category;
    }

    @Override
    public String toString() {
        return "[" + productId + "] " + productName + " (" + category + ")";
    }
}

public class Algorithms_Data_Structures {

    //  Linear Search
    public static Product linearSearch(Product[] products, String name) {
        for (Product product : products) {
            if (product.productName.equalsIgnoreCase(name)) {
                return product;
            }
        }
        return null;
    }

    //  Binary Search
    public static Product binarySearch(Product[] products, String name) {
        int left = 0, right = products.length - 1;

        while (left <= right) {
            int mid = (left + right) / 2;
            int result = products[mid].productName.compareToIgnoreCase(name);

            if (result == 0) return products[mid];
            else if (result < 0) left = mid + 1;
            else right = mid - 1;
        }

        return null;
    }

    // 🧪 Main method to test search functions
    public static void main(String[] args) {

        Product[] productList = {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Shoes", "Footwear"),
                new Product(103, "Watch", "Accessories"),
                new Product(104, "Camera", "Electronics"),
                new Product(105, "Backpack", "Bags")
        };

        System.out.println("Linear Search Result:");
        Product found1 = linearSearch(productList, "Camera");
        System.out.println(found1 != null ? "Found: " + found1 : "Not Found");

        // Sort array for Binary Search
        Arrays.sort(productList, Comparator.comparing(p -> p.productName.toLowerCase()));

        System.out.println("\nBinary Search Result:");
        Product found2 = binarySearch(productList, "Camera");
        System.out.println(found2 != null ? "Found: " + found2 : "Not Found");
    }
}
