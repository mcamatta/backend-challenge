import {Request, Response} from 'express';
import axios from 'axios';
import UserService from '../services/UserServices';

class UserController {

    public async users(request: Request, response: Response) {

        try {
            const userService = new UserService();
            const users = await axios.get(`https://api.github.com/users?since=${request.query.since}`);
            
            const data = await userService.treatPagination(request, users.data);

            return response.json(data);
        } catch (err) {
            return response.status(400).json({error: err.message});
        }
        
    }

    public async details(request: Request, response: Response) {

        try {
            const details = await axios.get(`https://api.github.com/users/${request.params.username}`);

            return response.json(details.data);
        } catch (err) {
            return response.status(400).json({error: err.message});
        }
    }

    public async repos(request: Request, response: Response) {

        try{
            const repos = await axios.get(`https://api.github.com/users/${request.params.username}/repos`);

            return response.json(repos.data);
        } catch (err) {
            return response.status(400).json({error: err.message});
        }
    }

}

export default UserController;