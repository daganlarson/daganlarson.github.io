import { NextResponse } from "next/server";
import connect from "@/utils/db";
import User from "@/models/User";

export const GET = async (request) => {
    try {

        const users = await User.find();

        return new NextResponse(users, {status: 200});
    } catch (err) {
        return new NextResponse("It doesn't work!", {status: 500});
    }