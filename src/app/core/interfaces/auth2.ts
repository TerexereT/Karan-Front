export interface loginPost{
  grant_type: string
  client_id: string
  client_secret: string
  username: string
  password: string
}

export interface Token {
  access_token: string
  expires_in: number | 36000
  token_type: string | 'Bearer'
  scope: string
  refresh_token: string
}
