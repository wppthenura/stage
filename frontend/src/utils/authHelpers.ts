// examples/AuthHelpers.tsx (you can adapt into your Login/SignUp pages)
import { supabase } from '../lib/supabaseClient';

// Sign up with email/password
export async function signUpWithEmail(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    // you can include user_metadata
    // options: { data: { display_name: 'Pulindu' } }  // supabase v2 syntax differs slightly
  });
  return { data, error };
}

// Sign in with email/password
export async function signInWithEmail(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
}

// Sign in with Google
export async function signInWithGoogle() {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    // you can set options like redirectTo if needed
  });
  return { error };
}

// Get current session / user
export function getCurrentUser() {
  return supabase.auth.getUser();
}
