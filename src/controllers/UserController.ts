import {Request, Response} from 'express';
import axios from 'axios';
import UserService from '../services/UserServices';

class UserController {

    private readonly config: object;

    constructor() {
        this.config = {
            headers: {
                'X-GitHub-Api-Version': '2022-11-28',
                "Authorization": "Bearer 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"
            }
        }
    }

    public async users(request: Request, response: Response) {

        try {
            const userService = new UserService();
            const users = await axios.get(`https://api.github.com/users?since=${request.query.since}`, this.config);
            
            const data = await userService.treatPagination(request, users.data);

            return response.json(data);
        } catch (err) {
            return response.status(400).json({error: err.message});
        }
        
    }

    public async details(request: Request, response: Response) {

        try {
            const details = await axios.get(`https://api.github.com/users/${request.params.username}`, this.config);

            return response.json(details.data);
        } catch (err) {
            return response.status(400).json({error: err.message});
        }
    }

    public async repos(request: Request, response: Response) {

        try{
            const repos = await axios.get(`https://api.github.com/users/${request.params.username}/repos`, this.config);

            return response.json(repos.data);
        } catch (err) {
            return response.status(400).json({error: err.message});
        }
    }

}

export default UserController;