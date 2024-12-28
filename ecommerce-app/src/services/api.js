export const fetchProducts = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };
  
  export const fetchProductById = async (id) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      return { data };
    } catch (error) {
      throw new Error("Error fetching product details");
    }
  };