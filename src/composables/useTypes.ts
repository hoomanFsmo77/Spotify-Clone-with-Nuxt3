export type CookieName='access_token'
export type GenerateRandomString=(length:number)=>string
export type GetHashParams=()=>{access_token:string}|null
export type SetCookie=(name:string,hash:string)=>void
export type GetCookie=(name:CookieName)=>string|null
export type User_Information=SpotifyApi.CurrentUsersProfileResponse|null