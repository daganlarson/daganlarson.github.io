import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Article from "@/models/Article";

export const GET = async (request: any) => {
    try {

        const articles = await Article.find();

        return new NextResponse(articles, {status: 200});
    } catch (err) {
        return new NextResponse("It doesn't work!", {status: 500});
    }
}