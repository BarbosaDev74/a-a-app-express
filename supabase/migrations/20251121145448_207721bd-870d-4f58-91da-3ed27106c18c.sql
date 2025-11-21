-- Adicionar colunas de nome e telefone na tabela orders
ALTER TABLE public.orders
ADD COLUMN customer_name TEXT,
ADD COLUMN customer_phone TEXT;