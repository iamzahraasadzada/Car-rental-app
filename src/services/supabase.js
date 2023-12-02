import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://nijbeyethssolpldqtjt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5pamJleWV0aHNzb2xwbGRxdGp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAyNTAzNjMsImV4cCI6MjAxNTgyNjM2M30.64GsFfo_kqquHLePVkD03TUuwt5FOkLh5-wJBPpRW0o";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
