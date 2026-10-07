export const dynamic = "force-static";
export const revalidate = 10;

export function GET(){
    return Response.json({time: new Date().toLocaleString()})
}