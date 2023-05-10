import app from '../app';
import request from 'supertest';

describe('User Controller', () => {
    it('List all users', async () => {

        const response = await request(app)
            .get('/api/users')
            .auth('Authorization', { type: 'bearer' })
            .expect(200);

        expect(response.body).toHaveProperty('next');
    
    });

    it('User details', () => {

        return request(app)
            .get('/api/users/mcamatta/details')
            .auth('Authorization', { type: 'bearer' })
            .expect(200);
    });

    it('User repositories', () => {

        return request(app)
            .get('/api/users/mcamatta/repos')
            .auth('Authorization', { type: 'bearer' })
            .expect(200);
    });
});