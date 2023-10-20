/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://gpjeipjsboqtxecoiqvo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdwamVpcGpzYm9xdHhlY29pcXZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc1OTM1MzQsImV4cCI6MjAxMzE2OTUzNH0.LLpBB20YX2OEbY24sz2LMg-cqTGcidw56NcKx6Sv7AM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
