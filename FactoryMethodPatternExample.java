package week1;

// --- Step 1: Document Interface ---
interface Document {
    void open();
}

// --- Step 2: Concrete Document Classes ---
class WordDocument implements Document {
    public void open() {
        System.out.println("Word document opened.");
    }
}

class PdfDocument implements Document {
    public void open() {
        System.out.println("PDF document opened.");
    }
}

class ExcelDocument implements Document {
    public void open() {
        System.out.println("Excel document opened.");
    }
}

// --- Step 3: Abstract Factory Class ---
abstract class DocumentFactory {
    public abstract Document createDocument();
}

// --- Step 4: Concrete Factory Classes ---
class WordFactory extends DocumentFactory {
    public Document createDocument() {
        return new WordDocument();
    }
}

class PdfFactory extends DocumentFactory {
    public Document createDocument() {
        return new PdfDocument();
    }
}

class ExcelFactory extends DocumentFactory {
    public Document createDocument() {
        return new ExcelDocument();
    }
}

// --- Step 5: Main Class to Test the Factory Method ---
public class FactoryMethodPatternExample {
    public static void main(String[] args) {
        // Create Word document using factory
        DocumentFactory wordFactory = new WordFactory();
        Document wordDoc = wordFactory.createDocument();
        wordDoc.open();

        // Create PDF document using factory
        DocumentFactory pdfFactory = new PdfFactory();
        Document pdfDoc = pdfFactory.createDocument();
        pdfDoc.open();

        // Create Excel document using factory
        DocumentFactory excelFactory = new ExcelFactory();
        Document excelDoc = excelFactory.createDocument();
        excelDoc.open();
    }
}
