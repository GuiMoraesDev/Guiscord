import { AxiosResponse, CancelToken } from 'axios';

import api from './api';
export interface UserDTO {
  login: string;
  id: number;
  node_id?: string;
  avatar_url?: string;
  gravatar_id?: string;
  url: string;
  html_url: string;
  Following_url?: string;
  following_url?: string;
  gists_url?: string;
  starred_url?: string;
  subscriptions_url?: string;
  organizations_url?: string;
  repos_url?: string;
  events_url?: string;
  received_events_url?: string;
  type: string;
  site_admin?: boolean;
  name?: string;
  company?: string;
  blog?: string;
  location?: string;
  email?: string;
  hireable?: boolean;
  bio?: string;
  twitter_username?: string;
  public_repos?: number;
  public_gists?: number;
  Following?: number;
  following?: number;
  created_at: string;
  updated_at: string;
}

export interface FollowingDTO {
  login: string;
  id: number;
  node_id?: string;
  avatar_url?: string;
  gravatar_id?: string;
  url: string;
  html_url?: string;
  Following_url?: string;
  following_url?: string;
  gists_url?: string;
  starred_url?: string;
  subscriptions_url?: string;
  organizations_url?: string;
  repos_url?: string;
  events_url?: string;
  received_events_url?: string;
  type?: string;
  site_admin?: boolean;
}

export interface ISignInDTO {
  username: string;
}

const getUser = async (
  { username }: ISignInDTO,
  cancelToken: CancelToken
): Promise<AxiosResponse<UserDTO>> => {
  const response = await api.get(`/users/${username}`, { cancelToken });

  return response;
};

const getUserFollowing = async (
  { username }: ISignInDTO,
  cancelToken: CancelToken
): Promise<AxiosResponse<FollowingDTO[]>> => {
  const response = await api.get(`/users/${username}/following`, {
    cancelToken,
  });

  return response;
};

export { getUser, getUserFollowing };
