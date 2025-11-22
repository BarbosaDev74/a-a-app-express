-- Tornar user_id nullable na tabela orders
ALTER TABLE public.orders 
ALTER COLUMN user_id DROP NOT NULL;

-- Remover a foreign key constraint se existir
ALTER TABLE public.orders 
DROP CONSTRAINT IF EXISTS orders_user_id_fkey;