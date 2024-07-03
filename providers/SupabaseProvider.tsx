"use client";

import { Database } from "@/types_db";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";

interface SupaBaseProviderProps {
    children: React.ReactNode;
};

const SupabaseProvider: React.FC<SupaBaseProviderProps> = ({
    children
}) => {
    const [superbaseClient] = useState(() => 
    createClientComponentClient<Database>()
    );

    return(
        <SessionContextProvider supabaseClient={superbaseClient}>
            {children}
        </SessionContextProvider>
    )
}

export default SupabaseProvider;