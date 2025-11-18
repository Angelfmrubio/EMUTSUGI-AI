-- Create app_role enum
CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');

-- Create profiles table
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  nombre TEXT,
  email TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS on profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create user_roles table (separate from profiles for security)
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  UNIQUE(user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles (prevents RLS recursion)
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- RLS Policies for profiles table
CREATE POLICY "Users can view own profile"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON public.profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

-- RLS Policies for user_roles table
CREATE POLICY "Users can view own roles"
  ON public.user_roles FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Only admins can manage roles"
  ON public.user_roles FOR ALL
  USING (public.has_role(auth.uid(), 'admin'));

-- RLS Policies for usuarios table
CREATE POLICY "Users can view own data"
  ON public.usuarios FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own data"
  ON public.usuarios FOR INSERT
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update own data"
  ON public.usuarios FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Users can delete own data"
  ON public.usuarios FOR DELETE
  USING (auth.uid() = id);

-- RLS Policies for diagnosticos_diarios table
CREATE POLICY "Users can view own diagnostics"
  ON public.diagnosticos_diarios FOR SELECT
  USING (auth.uid() = usuario_id);

CREATE POLICY "Users can insert own diagnostics"
  ON public.diagnosticos_diarios FOR INSERT
  WITH CHECK (auth.uid() = usuario_id);

CREATE POLICY "Users can update own diagnostics"
  ON public.diagnosticos_diarios FOR UPDATE
  USING (auth.uid() = usuario_id);

CREATE POLICY "Users can delete own diagnostics"
  ON public.diagnosticos_diarios FOR DELETE
  USING (auth.uid() = usuario_id);

-- RLS Policies for compromisos table
CREATE POLICY "Users can view own commitments"
  ON public.compromisos FOR SELECT
  USING (auth.uid() = usuario_id);

CREATE POLICY "Users can insert own commitments"
  ON public.compromisos FOR INSERT
  WITH CHECK (auth.uid() = usuario_id);

CREATE POLICY "Users can update own commitments"
  ON public.compromisos FOR UPDATE
  USING (auth.uid() = usuario_id);

CREATE POLICY "Users can delete own commitments"
  ON public.compromisos FOR DELETE
  USING (auth.uid() = usuario_id);

-- RLS Policies for rituales_completados table
CREATE POLICY "Users can view own rituals"
  ON public.rituales_completados FOR SELECT
  USING (auth.uid() = usuario_id);

CREATE POLICY "Users can insert own rituals"
  ON public.rituales_completados FOR INSERT
  WITH CHECK (auth.uid() = usuario_id);

CREATE POLICY "Users can update own rituals"
  ON public.rituales_completados FOR UPDATE
  USING (auth.uid() = usuario_id);

CREATE POLICY "Users can delete own rituals"
  ON public.rituales_completados FOR DELETE
  USING (auth.uid() = usuario_id);

-- RLS Policies for Proyectos table (note: case-sensitive name)
CREATE POLICY "Users can view own projects"
  ON public."Proyectos" FOR SELECT
  USING (auth.uid() = "UID");

CREATE POLICY "Users can insert own projects"
  ON public."Proyectos" FOR INSERT
  WITH CHECK (auth.uid() = "UID");

CREATE POLICY "Users can update own projects"
  ON public."Proyectos" FOR UPDATE
  USING (auth.uid() = "UID");

CREATE POLICY "Users can delete own projects"
  ON public."Proyectos" FOR DELETE
  USING (auth.uid() = "UID");

-- Trigger to create profile and assign default role on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Insert profile
  INSERT INTO public.profiles (id, nombre, email)
  VALUES (
    NEW.id,
    NEW.raw_user_meta_data->>'nombre',
    NEW.email
  );
  
  -- Assign default 'user' role
  INSERT INTO public.user_roles (user_id, role)
  VALUES (NEW.id, 'user');
  
  RETURN NEW;
END;
$$;

-- Create trigger
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();