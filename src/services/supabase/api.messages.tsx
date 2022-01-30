import supabaseClient from './api';

interface ISupabaseMessageProps {
  id: string;
  de: string;
  texto: string;
  para: string;
  created_at: Date;
}

type IPostMessageParams = Omit<ISupabaseMessageProps, 'id' | 'created_at'>;

export interface IMessageProps {
  id: string;
  from: string;
  to: string;
  text: string;
  created_at: Date;
}

interface ISubscribeMessagesListenerProps {
  handleSetMessage: (msgData: IMessageProps) => void;
}

const subscribeMessagesListener = ({
  handleSetMessage,
}: ISubscribeMessagesListenerProps) => {
  return supabaseClient
    .from<ISupabaseMessageProps>('mensagens')
    .on('INSERT', (data) => {
      const msg: IMessageProps = {
        id: data.new.id,
        from: data.new.de,
        to: data.new.para,
        text: data.new.texto,
        created_at: data.new.created_at,
      };
      handleSetMessage(msg);
    })
    .subscribe();
};

const getMessages = async (
  username: string,
  contact: string
): Promise<IMessageProps[]> => {
  const response = await supabaseClient
    .from<ISupabaseMessageProps>('mensagens')
    .select('*')
    .or(
      `and(de.eq.${username}, para.eq.${contact}), and(de.eq.${contact}, para.eq.${username})`
    );

  const parseResponse =
    response.data?.map((msg) => ({
      id: msg.id,
      from: msg.de,
      to: msg.para,
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
      to: msg.para,
      text: msg.texto,
      created_at: msg.created_at,
    })) || [];

  return parseResponse;
};

const deleteMessage = async (id: string): Promise<IMessageProps[]> => {
  const response = await supabaseClient
    .from<ISupabaseMessageProps>('mensagens')
    .delete()
    .match({ id });

  const parseResponse =
    response.data?.map((msg) => ({
      id: msg.id,
      to: msg.para,
      from: msg.de,
      text: msg.texto,
      created_at: msg.created_at,
    })) || [];

  return parseResponse;
};

export { subscribeMessagesListener, getMessages, postMessage, deleteMessage };
