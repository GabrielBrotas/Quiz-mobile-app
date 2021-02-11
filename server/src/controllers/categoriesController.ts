import { Request, Response } from 'express';

import GetCategoriesService from '../services/GetCategoriesService';

export default class QuestionContrller {
  public async read(request: Request, response: Response): Promise<Response> {
    const getCategoriesService = new GetCategoriesService();
    const categories = await getCategoriesService.execute();
    return response.send(categories)
  }

}
