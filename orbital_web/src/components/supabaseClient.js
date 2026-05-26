import { createClient } from '@supabase/supabase-js';

// Reemplaza 'YOUR_SUPABASE_URL' y 'YOUR_SUPABASE_ANON_KEY' con tus credenciales reales de Supabase.
// Puedes encontrarlas en tu proyecto Supabase, en "Settings" -> "API".
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://iovzqairkbszeidgbxlb.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlvdnpxYWlya2JzemVpZGdieGxiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk4MTQ2MTgsImV4cCI6MjA5NTM5MDYxOH0.8L5dlaU5_8nGr__KEyqup4_HHqsB5z8skVtV6S4VW7w';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);