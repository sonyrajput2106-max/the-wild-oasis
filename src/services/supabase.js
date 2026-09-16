import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://mzrppbwbezsnzbneammu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16cnBwYndiZXpzbnpibmVhbW11Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk1MjgyMzksImV4cCI6MjEwNTEwNDIzOX0.Fn5IZWENJqTi-BKAs2c3PStN4rFhIaSqnYGyNN_lx8A";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
