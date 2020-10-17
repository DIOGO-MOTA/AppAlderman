import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Opineno from '../models/Opineno';

export default {
  async create(request: Request, response: Response) {
    const {
      name,
      email,
      whatsapp,
   } = request.body;
  
   const opinenoRepository = getRepository(Opineno);
  
   const opineno = opinenoRepository.create({
     name,
     email,
     whatsapp,
   });
  
   await opinenoRepository.save(opineno);
  
   return response.json(opineno);
  }
}