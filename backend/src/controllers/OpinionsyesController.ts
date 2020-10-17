import {Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Opineyes from '../models/Opineyes';

export default {
  async create(request: Request, response: Response) {
    const {
      name,
      email,
      whatsapp,
   } = request.body;
  
   const opineyesRepository = getRepository(Opineyes);
  
   const opineyes = opineyesRepository.create({
     name,
     email,
     whatsapp,
   });
  
   await opineyesRepository.save(opineyes);
  
   return response.json(opineyes);
  }
}