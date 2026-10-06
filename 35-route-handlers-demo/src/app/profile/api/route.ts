import { cookies, headers } from "next/headers"

export async function GET(){

    // Get headers
    const headerLists = await headers();
    console.log(headerLists.get("Authorization"));

    // Set cookies
    const cookieStore = await cookies();
    cookieStore.set("Theme", "Dark");

    // Get cookies
    console.log(cookieStore.get("Theme"))

    // Set headers
    return new Response("<h1>Profile API page</h1>",{
        headers: {"Content-Type": "text/html"}
    })
}