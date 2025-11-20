import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vkqqhuvhcndqmypdkrgj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZrcXFodXZoY25kcW15cGRrcmdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg1ODU2OTksImV4cCI6MjA3NDE2MTY5OX0.WEX2zvOQrgqB5dwNfmkSy7Lj-EHhxt_5DIzkA-ovv1Q'

export const supabase = createClient(supabaseUrl, supabaseKey)