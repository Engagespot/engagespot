export interface AblyTokenRequest{
    clientId: string
    keyName: string
    mac: string
    nonce: string
    timestamp: number
}