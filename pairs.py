def normalize_polygon(vertices):
    # Sort vertices lexicographically
    n = len(vertices)
    min_index = min(range(n), key=lambda i: vertices[i])
    # Rotate to make the lexicographically smallest vertex first
    normalized = vertices[min_index:] + vertices[:min_index]
    return normalized

def are_polygons_equal(p1, p2):
    # Normalize both polygons
    n1 = normalize_polygon(p1)
    n2 = normalize_polygon(p2)
    return n1 == n2

def find_matching_earrings(n, polygons):
    pairs = []
    for i in range(n):
        for j in range(i + 1, n):
            if are_polygons_equal(polygons[i], polygons[j]):
                pairs.append((i + 1, j + 1))  # Earrings are 1-based indexed
    return pairs

# Input
n = int(input())  # Number of earrings
polygons = []
for _ in range(n):
    k = int(input())  # Number of vertices
    vertices = [tuple(map(int, input().split())) for _ in range(k)]
    polygons.append(vertices)

# Find matching earrings
result = find_matching_earrings(n, polygons)

# Output the result
if result:
    print(" ".join(f"{p[0]} {p[1]}" for p in result))
else:
    print("No matching earrings found.")