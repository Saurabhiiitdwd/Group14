// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://arahfnrkkudoswcxkhgn.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFyYWhmbnJra3Vkb3N3Y3hraGduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM5NjgwMTEsImV4cCI6MjA1OTU0NDAxMX0.tcoJLw2YXts-IJT3z2yQUpPnM0ZFF40jN1i1ISXwPMg";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);