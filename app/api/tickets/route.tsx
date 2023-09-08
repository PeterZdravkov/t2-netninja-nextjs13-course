import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: any) {
  const ticket = await request.json();

  // get supabase instance
  const supabase = createRouteHandlerClient({ cookies });

  // get current user session

  const {
    data: { session },
  }: any = await supabase.auth.getSession();

  //insert data into supabase
  const { data, error } = await supabase
    .from("Tickets")
    .insert({
      ...ticket,
      user_email: session.user.email,
    })
    .select()
    .single();

  return NextResponse.json({ data, error });
}
