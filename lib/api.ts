import type { User, Product } from "@/lib/types"

// Simulated API calls with localStorage for persistence
// In a real app, these would be actual API calls to your backend

// Auth API
export async function loginUser(email: string, password: string): Promise<User> {
  // Simulate API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const usersJson = localStorage.getItem("users")
        const users = usersJson ? JSON.parse(usersJson) : []

        const user = users.find((u: User) => u.email === email)

        if (user) {
          // In a real app, you would verify the password here
          localStorage.setItem("currentUser", JSON.stringify(user))
          resolve(user)
        } else {
          reject(new Error("Invalid credentials"))
        }
      } catch (error) {
        reject(error)
      }
    }, 500)
  })
}

export async function signupUser(name: string, email: string, password: string): Promise<User> {
  // Simulate API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const usersJson = localStorage.getItem("users")
        const users = usersJson ? JSON.parse(usersJson) : []

        const existingUser = users.find((u: User) => u.email === email)

        if (existingUser) {
          reject(new Error("User already exists"))
        } else {
          const newUser: User = {
            id: Date.now().toString(),
            name,
            email,
          }

          users.push(newUser)
          localStorage.setItem("users", JSON.stringify(users))
          localStorage.setItem("currentUser", JSON.stringify(newUser))

          resolve(newUser)
        }
      } catch (error) {
        reject(error)
      }
    }, 500)
  })
}

export async function logoutUser(): Promise<void> {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      localStorage.removeItem("currentUser")
      resolve()
    }, 300)
  })
}

export async function getCurrentUser(): Promise<User | null> {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      const userJson = localStorage.getItem("currentUser")
      const user = userJson ? JSON.parse(userJson) : null
      resolve(user)
    }, 300)
  })
}

export async function updateUserProfile(userData: Partial<User>): Promise<User> {
  // Simulate API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const userJson = localStorage.getItem("currentUser")
        if (!userJson) {
          reject(new Error("User not found"))
          return
        }

        const currentUser = JSON.parse(userJson)
        const updatedUser = { ...currentUser, ...userData }

        // Update in users array
        const usersJson = localStorage.getItem("users")
        const users = usersJson ? JSON.parse(usersJson) : []
        const updatedUsers = users.map((u: User) => (u.id === updatedUser.id ? updatedUser : u))

        localStorage.setItem("users", JSON.stringify(updatedUsers))
        localStorage.setItem("currentUser", JSON.stringify(updatedUser))

        resolve(updatedUser)
      } catch (error) {
        reject(error)
      }
    }, 500)
  })
}

// Products API
interface ProductQueryParams {
  category?: string[]
  minPrice?: number
  maxPrice?: number
  featured?: boolean
  limit?: number
}

export async function getProducts(params: ProductQueryParams = {}): Promise<Product[]> {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      // In a real app, this would be fetched from your backend
      const products: Product[] = [
        {
          id: "1",
          name: "Classic Drop Shoulder Tee",
          price: 29.99,
          description: "A timeless drop shoulder t-shirt for everyday wear.",
          image: "https://slaystay.com/cdn/shop/files/Back01.png?v=1729505541&width=493",
          category: "basic",
          images: [
            "https://nobero.com/cdn/shop/files/WhatsAppImage2024-05-06at11.46.23AM.jpg?v=1723271991",
            "https://slaystay.com/cdn/shop/files/BACK_d361e750-060e-4ffb-8595-8c5ac32c26ce.png?v=1729165735&width=493",
            "https://nobero.com/cdn/shop/files/WhatsAppImage2024-05-06at11.46.23AM.jpg?v=1723271991",
            "https://slaystay.com/cdn/shop/files/BACK_d361e750-060e-4ffb-8595-8c5ac32c26ce.png?v=1729165735&width=493",
           
           
          ],
          colors: ["black", "white", "gray", "navy"],
          sizes: ["xs", "s", "m", "l", "xl"],
          features: ["100% cotton fabric", "Relaxed drop shoulder fit", "Ribbed crew neck", "Reinforced stitching"],
          care: ["Machine wash cold", "Tumble dry low", "Do not bleach", "Iron on low heat if needed"],
        },
        {
          id: "2",
          name: "Oversized Drop Shoulder Tee",
          price: 34.99,
          description: "An extra roomy drop shoulder t-shirt for maximum comfort.",
          image: "https://nobero.com/cdn/shop/files/WhatsAppImage2024-05-06at11.46.23AM.jpg?v=1723271991",
          category: "oversized",
          images: [
            "https://nobero.com/cdn/shop/files/WhatsAppImage2024-05-06at11.46.23AM.jpg?v=1723271991",
            "https://slaystay.com/cdn/shop/files/BACK_d361e750-060e-4ffb-8595-8c5ac32c26ce.png?v=1729165735&width=493",
            "https://nobero.com/cdn/shop/files/WhatsAppImage2024-05-06at11.46.23AM.jpg?v=1723271991",
            "https://slaystay.com/cdn/shop/files/BACK_d361e750-060e-4ffb-8595-8c5ac32c26ce.png?v=1729165735&width=493",
          ],
          colors: ["black", "white", "beige", "olive"],
          sizes: ["s", "m", "l", "xl"],
          features: ["95% cotton, 5% elastane", "Ultra-relaxed fit", "Extended drop shoulder", "Longer length"],
          care: ["Machine wash cold", "Tumble dry low", "Do not bleach", "Iron on low heat if needed"],
        },
        {
          id: "3",
          name: "Striped Drop Shoulder Tee",
          price: 32.99,
          description: "A stylish striped pattern on our signature drop shoulder cut.",
          image: "https://slaystay.com/cdn/shop/files/Back01.png?v=1729505541&width=493",
          category: "graphic",
          images: [
            "https://nobero.com/cdn/shop/files/WhatsAppImage2024-05-06at11.46.23AM.jpg?v=1723271991",
            "https://slaystay.com/cdn/shop/files/BACK_d361e750-060e-4ffb-8595-8c5ac32c26ce.png?v=1729165735&width=493",
            "https://nobero.com/cdn/shop/files/WhatsAppImage2024-05-06at11.46.23AM.jpg?v=1723271991",
            "https://slaystay.com/cdn/shop/files/BACK_d361e750-060e-4ffb-8595-8c5ac32c26ce.png?v=1729165735&width=493",
          ],
          colors: ["navy/white", "black/white", "olive/beige"],
          sizes: ["xs", "s", "m", "l", "xl"],
          features: [
            "100% organic cotton",
            "Classic striped pattern",
            "Relaxed drop shoulder fit",
            "Sustainable production",
          ],
          care: ["Machine wash cold", "Tumble dry low", "Do not bleach", "Iron on low heat if needed"],
        },
        {
          id: "4",
          name: "Graphic Drop Shoulder Tee",
          price: 39.99,
          description: "Express yourself with our artistic graphic drop shoulder tee.",
          image: "https://slaystay.com/cdn/shop/files/BACK_86118012-80ef-45e9-9485-42a7fa8095d4.png?v=1729166191&width=493",
          category: "graphic",
          images: [
            "https://nobero.com/cdn/shop/files/WhatsAppImage2024-05-06at11.46.23AM.jpg?v=1723271991",
            "https://slaystay.com/cdn/shop/files/BACK_d361e750-060e-4ffb-8595-8c5ac32c26ce.png?v=1729165735&width=493",
            "https://nobero.com/cdn/shop/files/WhatsAppImage2024-05-06at11.46.23AM.jpg?v=1723271991",
            "https://slaystay.com/cdn/shop/files/BACK_d361e750-060e-4ffb-8595-8c5ac32c26ce.png?v=1729165735&width=493",
          ],
          colors: ["white", "black", "gray"],
          sizes: ["xs", "s", "m", "l", "xl"],
          features: ["100% premium cotton", "Custom graphic print", "Relaxed drop shoulder fit", "Pre-shrunk fabric"],
          care: ["Machine wash cold", "Tumble dry low", "Do not bleach", "Turn inside out before washing"],
        },
        {
          id: "5",
          name: "Premium Drop Shoulder Tee",
          price: 44.99,
          description: "Our highest quality drop shoulder t-shirt made from luxury materials.",
          image: "https://slaystay.com/cdn/shop/files/BACK_86118012-80ef-45e9-9485-42a7fa8095d4.png?v=1729166191&width=493",
          category: "basic",
          images: [
            "https://nobero.com/cdn/shop/files/WhatsAppImage2024-05-06at11.46.23AM.jpg?v=1723271991",
            "https://slaystay.com/cdn/shop/files/BACK_d361e750-060e-4ffb-8595-8c5ac32c26ce.png?v=1729165735&width=493",
            "https://nobero.com/cdn/shop/files/WhatsAppImage2024-05-06at11.46.23AM.jpg?v=1723271991",
            "https://slaystay.com/cdn/shop/files/BACK_d361e750-060e-4ffb-8595-8c5ac32c26ce.png?v=1729165735&width=493",
          ],
          colors: ["black", "white", "navy", "burgundy"],
          sizes: ["xs", "s", "m", "l", "xl"],
          features: ["Pima cotton blend", "Luxury finish", "Perfect drape", "Reinforced seams", "Tagless design"],
          care: ["Machine wash cold", "Tumble dry low", "Do not bleach", "Iron on low heat if needed"],
        },
        {
          id: "6",
          name: "Vintage Wash Drop Shoulder Tee",
          price: 36.99,
          description: "A pre-washed drop shoulder tee with a lived-in vintage feel.",
          image: "https://slaystay.com/cdn/shop/files/BACK_764418d4-6373-461a-9508-b12c83bff247.png?v=1729166138&width=493",
          category: "basic",
          images: [
            "https://nobero.com/cdn/shop/files/WhatsAppImage2024-05-06at11.46.23AM.jpg?v=1723271991",
            "https://slaystay.com/cdn/shop/files/BACK_d361e750-060e-4ffb-8595-8c5ac32c26ce.png?v=1729165735&width=493",
            "https://nobero.com/cdn/shop/files/WhatsAppImage2024-05-06at11.46.23AM.jpg?v=1723271991",
            "https://slaystay.com/cdn/shop/files/BACK_d361e750-060e-4ffb-8595-8c5ac32c26ce.png?v=1729165735&width=493",
          ],
          colors: ["washed black", "washed blue", "washed olive"],
          sizes: ["xs", "s", "m", "l", "xl"],
          features: ["100% cotton", "Vintage wash treatment", "Relaxed drop shoulder fit", "Slightly faded look"],
          care: ["Machine wash cold", "Tumble dry low", "Do not bleach", "Iron on low heat if needed"],
        },
        {
          id: "7",
          name: "Limited Edition Drop Shoulder Tee",
          price: 49.99,
          description: "A special limited run drop shoulder tee with unique detailing.",
          image: "https://slaystay.com/cdn/shop/files/BACK_764418d4-6373-461a-9508-b12c83bff247.png?v=1729166138&width=493",
          category: "limited",
          images: [
            "https://nobero.com/cdn/shop/files/WhatsAppImage2024-05-06at11.46.23AM.jpg?v=1723271991",
            "https://slaystay.com/cdn/shop/files/BACK_d361e750-060e-4ffb-8595-8c5ac32c26ce.png?v=1729165735&width=493",
            "https://nobero.com/cdn/shop/files/WhatsAppImage2024-05-06at11.46.23AM.jpg?v=1723271991",
            "https://slaystay.com/cdn/shop/files/BACK_d361e750-060e-4ffb-8595-8c5ac32c26ce.png?v=1729165735&width=493",
          ],
          colors: ["black", "white"],
          sizes: ["s", "m", "l", "xl"],
          features: [
            "Limited production run",
            "Special edition design",
            "Numbered tag",
            "Premium materials",
            "Signature fit",
          ],
          care: ["Machine wash cold", "Tumble dry low", "Do not bleach", "Iron on low heat if needed"],
        },
        {
          id: "8",
          name: "Pocket Drop Shoulder Tee",
          price: 32.99,
          description: "A practical drop shoulder tee with a chest pocket detail.",
          image: "https://slaystay.com/cdn/shop/files/BACK_764418d4-6373-461a-9508-b12c83bff247.png?v=1729166138&width=493",
          category: "basic",
          images: [
            "https://nobero.com/cdn/shop/files/WhatsAppImage2024-05-06at11.46.23AM.jpg?v=1723271991",
            "https://slaystay.com/cdn/shop/files/BACK_d361e750-060e-4ffb-8595-8c5ac32c26ce.png?v=1729165735&width=493",
            "https://nobero.com/cdn/shop/files/WhatsAppImage2024-05-06at11.46.23AM.jpg?v=1723271991",
            "https://slaystay.com/cdn/shop/files/BACK_d361e750-060e-4ffb-8595-8c5ac32c26ce.png?v=1729165735&width=493",
          ],
          colors: ["black", "white", "navy", "olive"],
          sizes: ["xs", "s", "m", "l", "xl"],
          features: ["100% cotton", "Single chest pocket", "Relaxed drop shoulder fit", "Reinforced stitching"],
          care: ["Machine wash cold", "Tumble dry low", "Do not bleach", "Iron on low heat if needed"],
        },
      ]

      // Filter by category
      let filteredProducts = [...products]

      if (params.category && params.category.length > 0) {
        filteredProducts = filteredProducts.filter((product) => params.category?.includes(product.category || ""))
      }

      // Filter by price
      if (params.minPrice !== undefined) {
        filteredProducts = filteredProducts.filter((product) => product.price >= (params.minPrice || 0))
      }

      if (params.maxPrice !== undefined) {
        filteredProducts = filteredProducts.filter(
          (product) => product.price <= (params.maxPrice || Number.POSITIVE_INFINITY),
        )
      }

      // Filter featured products
      if (params.featured) {
        // For demo purposes, let's consider the first 4 products as featured
        filteredProducts = filteredProducts.slice(0, 4)
      }

      // Apply limit
      if (params.limit) {
        filteredProducts = filteredProducts.slice(0, params.limit)
      }

      resolve(filteredProducts)
    }, 500)
  })
}

export async function getProductById(id: string): Promise<Product> {
  // Simulate API call
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const products = await getProducts()
        const product = products.find((p) => p.id.toString() === id)

        if (product) {
          resolve(product)
        } else {
          reject(new Error("Product not found"))
        }
      } catch (error) {
        reject(error)
      }
    }, 500)
  })
}

