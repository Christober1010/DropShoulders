import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]/route"

// In a real app, this would interact with your database
export async function GET(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  // In a real app, you would fetch the user from your database
  const user = {
    id: session.user.id || "1",
    name: session.user.name,
    email: session.user.email,
    image: session.user.image,
    // Additional user data would be fetched from your database
    phone: "555-123-4567",
    address: "123 Main St, Anytown, USA",
    bio: "I love comfortable and stylish clothing!",
  }

  return NextResponse.json(user)
}

export async function PUT(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const data = await request.json()

    // In a real app, you would update the user in your database
    const updatedUser = {
      id: session.user.id || "1",
      name: data.name || session.user.name,
      email: session.user.email, // Email can't be changed in this example
      image: session.user.image,
      phone: data.phone || "",
      address: data.address || "",
      bio: data.bio || "",
    }

    return NextResponse.json(updatedUser)
  } catch (error) {
    return NextResponse.json({ error: "Failed to update user" }, { status: 400 })
  }
}

