import supabaseClient from './api';

interface ISupabaseMessageProps {
  id: string;
  de: string;
  texto: string;
  created_at: Date;
}

type IPostMessageParams = Omit<ISupabaseMessageProps, 'id' | 'created_at'>;

export interface IMessageProps {
  id: string;
  from: string;
  text: string;
  created_at: Date;
}

const getMessages = async (): Promise<IMessageProps[]> => {
  const response = await supabaseClient
    .from<ISupabaseMessageProps>('mensagens')
    .select('*');

  const parseResponse =
    response.data?.map((msg) => ({
      id: msg.id,
      from: msg.de,
      text: msg.texto,
      created_at: msg.created_at,
    })) || [];

  return parseResponse;
};

const postMessage = async (
  msgData: IPostMessageParams
): Promise<IMessageProps[]> => {
  const response = await supabaseClient
    .from<ISupabaseMessageProps>('mensagens')
    .insert([msgData]);

  const parseResponse =
    response.data?.map((msg) => ({
      id: msg.id,
      from: msg.de,
      text: msg.texto,
      created_at: msg.created_at,
    })) || [];

  return parseResponse;
};

export { getMessages, postMessage };
