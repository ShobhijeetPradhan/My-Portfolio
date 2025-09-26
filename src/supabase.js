// src/supabase.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jzenujtbafvdzcoxwwrr.supabase.co' // <-- PASTE YOUR URL HERE
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6ZW51anRiYWZ2ZHpjb3h3d3JyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3MTc5MDcsImV4cCI6MjA3NDI5MzkwN30.G8dwFa2Mc1tEdYgR-D-1rlhW_Df4qJV-SLi4TfzqO9g'   

export const supabase = createClient(supabaseUrl, supabaseKey)