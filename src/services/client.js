import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ertopikekvzxqzprshsb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVydG9waWtla3Z6eHF6cHJzaHNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODAwNjY2MDUsImV4cCI6MTk5NTY0MjYwNX0.PHev3st-2guvFPE7sryAsTxiV36gJHajQdCFGQ0Ffgk';

export const client = createClient(
  supabaseUrl,
  supabaseKey
);

export function checkError({ data, error }) {
  if (error) {
    throw error;
  }
  return data;
}
