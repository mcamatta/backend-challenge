import { Request } from "express";

class UserService {

    async treatPagination(request: Request, data: any) {
        
        const path = `${request.protocol}://${request.get('host')}${request.path}`; 
        const last = data[data.length - 1];
        
        if(!last) {
            throw new Error('Invalid parameter: since');
        }
        
        return {
            next: `${path}?since=${last.id}`,
            data: data
        };
        
    }

}

export default UserService;