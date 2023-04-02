import {GenerateRandomString,GetHashParams} from "~/utils/Types";

export const generateRandomString:GenerateRandomString=(length:number):string=> {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

export const getHashParams:GetHashParams=():{access_token:string}|null=> {
    if(process.client){
        let hashParams:any = {};
        let e, r = /([^&;=]+)=?([^&;]*)/g,
            q = (window as any).location.hash.substring(1);
        while ( e = r.exec(q)) {
            hashParams[e[1]] = decodeURIComponent(e[2]);
        }
        return hashParams;
    }else{
        return  null
    }
}

export const getSidebarList = (id:string|undefined|null) => {
  return {
      section_1:[
          {
              id:1,
              title:'Home',
              icon:'fa-solid fa-house',
              link:'/'
          },{
              id:2,
              title:'Search',
              icon:'fa-brands fa-searchengin',
              link:'/search'
          },{
              id:3,
              title:'Your Library',
              icon:'fa-solid fa-book',
              link:'/collection'
          },
      ],
      section_2:[
          {
              id:1,
              title:'Create Playlist',
              icon:'fa-solid fa-square-plus',
              link:`/playlist/${id}`
          },
          {
              id:2,
              title:'Liked Songs',
              icon:'fa-brands fa-gratipay',
              link:'/collection/tracks'
          },
      ]
  }
}

export const filterItem = (data:any[])=>{
    return data.reduce((accumulator, current) => {
        if (!accumulator.find((item:any) => item.track.id === current.track.id)) {
            accumulator.push(current);
        }
        return accumulator;
    }, []);
}

export const filterFollowedList=(data:any[])=>{
    return  data.filter(item=>{
        if(item.images.length===3){
            return item
        }
    })
}

export const getRandomItem=(data:any[])=>{
    const source=[...data]
    const result=[]
    for(let i=0;i<2;i++){
        const randomNumber=Math.floor(Math.random()*source.length)
        result.push(source[randomNumber])
        source.splice(randomNumber,1)
    }
    return result
}