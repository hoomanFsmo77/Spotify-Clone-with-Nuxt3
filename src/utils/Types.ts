export type GenerateRandomString=(length:number)=>string
export type GetHashParams=()=>{access_token:string}|null
export type User_Information=SpotifyApi.CurrentUsersProfileResponse|null