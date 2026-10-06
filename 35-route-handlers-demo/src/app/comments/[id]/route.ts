import { comments } from "../data";

export async function GET(_request: Request, {params}: {params: Promise<{id: string}>}){
    const {id} = await params;

    const comment = comments.find((c) => c.id === String(id))

    return Response.json(comment);
}

export async function PATCH(request: Request, {params}: {params: Promise<{id: string}>}){
    const {id} = await params;
    const body = await request.json();

    const index = comments.findIndex((comment) => comment.id === id);
    comments[index].text = body.text;

    return Response.json(comments[index])
}

export async function DELETE(_request: Request, {params}: {params: Promise<{id: string}>}){
    const {id} = await params;

    const index = comments.findIndex((comment) => comment.id === id)
    const deletedComment = comments[index];
    comments.splice(index, 1);

    return Response.json(deletedComment)
}