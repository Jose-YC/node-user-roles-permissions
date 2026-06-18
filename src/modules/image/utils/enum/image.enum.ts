export enum modules {
    PROFILE='profile',
    PRODUCT='product',
    // otros modulos que necesiten una imagen
}

export const police = {
    [modules.PROFILE]: { 
        publicid: (userid:number) => `users/${userid}/avatar`
    },

    [modules.PRODUCT]: { 
        publicid: (userid:number, name:string) => `users/${userid}/product/${name}-${Date.now()}`
    }
}