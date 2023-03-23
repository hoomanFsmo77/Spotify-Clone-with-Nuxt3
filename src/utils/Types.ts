export type GenerateRandomString=(length:number)=>string
export type GetHashParams=()=>{access_token:string}|null
export type User_Information=SpotifyApi.CurrentUsersProfileResponse|null
export interface Sidebar_Item {
    id:number,
    title:string,
    icon:string,
    link:string
}
export interface Sidebar_List {
    section_1:Sidebar_Item[]
    section_2:Sidebar_Item[]

}