import { db } from '../database';
import Boom from '@hapi/boom';

export const getListingRoute = {
    method: 'GET',
    path: '/api/listings/{id}',
    handler: async (req, h) => {
        const id = req.params.id;
        const { results } = await db.query(
            'SELECT * FROM listings'
        );
        const listing = results.find(item=> item.id == id);
        if (!listing) throw Boom.notFound(`Listing does not exist with id ${id}`);
        return listing;
    }
}

