import java.util.*;

public class HelloWorld {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Input the number of items
        int N = sc.nextInt();

        // Input the IDs of items
        int[] ids = new int[N];
        for (int i = 0; i < N; i++) {
            ids[i] = sc.nextInt();
        }

        // Input the costs of items
        int[] costs = new int[N];
        for (int i = 0; i < N; i++) {
            costs[i] = sc.nextInt();
        }

        // Input the budget
        int A = sc.nextInt();

        int maxFreeItems = 0;
        int maxWorth = 0;

        // Iterate through each item
        for (int i = 0; i < N; i++) {
            int idToBuy = ids[i];
            int costToBuy = costs[i];

            // Calculate how many units can be purchased within the budget
            int maxUnits = A / costToBuy;

            // If no units can be bought, skip this item
            if (maxUnits == 0) continue;

            // Calculate free items for buying one unit
            List<Item> freeItems = new ArrayList<>();
            for (int j = 0; j < N; j++) {
                if (idToBuy != ids[j] && idToBuy % ids[j] == 0) {
                    freeItems.add(new Item(ids[j], costs[j]));
                }
            }

            // Total free items and worth for maxUnits
            int totalFreeItems = freeItems.size() * maxUnits;
            int totalFreeWorth = freeItems.stream().mapToInt(item -> item.cost).sum() * maxUnits;

            // Update the result if better
            if (totalFreeItems > maxFreeItems || 
                (totalFreeItems == maxFreeItems && totalFreeWorth > maxWorth)) {
                maxFreeItems = totalFreeItems;
                maxWorth = totalFreeWorth;
            }
        }

        // Print the result
        System.out.println(maxFreeItems + " " + maxWorth);
    }

    // Helper class to represent an item
    static class Item {
        int id;
        int cost;

        Item(int id, int cost) {
            this.id = id;
            this.cost = cost;
        }
    }
}
