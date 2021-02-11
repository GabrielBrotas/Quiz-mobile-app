import Question from '../../schemas/Question';

export default class GetCategoriesService {
  async execute(): Promise<string[]> {
    const questions = await Question.find();
    const categories = questions.map( question => {
      return question.category
    })

    // remover as categorias existentes e remover duplicadas
    const categoriesWithoutdDuplicates = categories
      .filter((value, index, self) => self.indexOf(value) === index);

    return categoriesWithoutdDuplicates;
  }
}
