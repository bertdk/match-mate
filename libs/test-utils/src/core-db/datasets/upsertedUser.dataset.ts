import { AnswerType, QuestionType } from '@match-mate-api/core-db';
import { Language, questionTextConstants } from '@match-mate-api/core-utils';
import { EntityManager } from '@mikro-orm/postgresql';
import {
  DiseaseFactory,
  QuestionFactory,
  TranslationFactory,
} from '../factories';
import { diseaseSpecificText } from './dataset.constants';

export async function loadUpsertedUserDataset(em: EntityManager) {
  const allDisease = await new DiseaseFactory(em).createOne({ icdCode: 'ALL' });
  const specificDisease = await new DiseaseFactory(em).createOne({
    icdCode: 'E10',
  });
  const languages = Object.values(Language);
  let question = await new QuestionFactory(em).createOne({
    answerType: AnswerType.date,
    translationKey: questionTextConstants.WHAT_IS_YOUR_BIRTH_DATE,
    questionType: QuestionType.standard,
    diseases: [allDisease],
  });
  await new TranslationFactory(em).createForLanguages(
    question.translationKey,
    languages,
    question.translationKey
  );

  question = await new QuestionFactory(em).createOne({
    answerType: AnswerType.number,
    translationKey: questionTextConstants.WHAT_IS_YOUR_AGE,
    questionType: QuestionType.standard,
    diseases: [allDisease],
  });
  await new TranslationFactory(em).createForLanguages(
    question.translationKey,
    languages,
    question.translationKey
  );

  question = await new QuestionFactory(em).createOne({
    answerType: AnswerType.string,
    translationKey: questionTextConstants.WHAT_IS_YOUR_GENDER,
    questionType: QuestionType.standard,
    diseases: [allDisease],
  });
  await new TranslationFactory(em).createForLanguages(
    question.translationKey,
    languages,
    question.translationKey
  );

  question = await new QuestionFactory(em).createOne({
    answerType: AnswerType.boolean,
    translationKey: 'Do you want to participate in a trial?',
    questionType: QuestionType.standard,
    diseases: [allDisease],
  });
  await new TranslationFactory(em).createForLanguages(
    question.translationKey,
    languages,
    question.translationKey
  );

  question = await new QuestionFactory(em).createOne({
    answerType: AnswerType.number,
    translationKey: 'What is your current weight?',
    questionType: QuestionType.standard,
    diseases: [allDisease],
  });
  await new TranslationFactory(em).createForLanguages(
    question.translationKey,
    languages,
    question.translationKey
  );

  question = await new QuestionFactory(em).createOne({
    answerType: AnswerType.number,
    translationKey: 'What is your current length?',
    questionType: QuestionType.standard,
    diseases: [allDisease],
  });
  await new TranslationFactory(em).createForLanguages(
    question.translationKey,
    languages,
    question.translationKey
  );

  question = await new QuestionFactory(em).createOne({
    answerType: AnswerType.string,
    translationKey: questionTextConstants.WHAT_IS_YOUR_ADDRESS,
    questionType: QuestionType.standard,
    diseases: [allDisease],
  });
  await new TranslationFactory(em).createForLanguages(
    question.translationKey,
    languages,
    question.translationKey
  );

  question = await new QuestionFactory(em).createOne({
    answerType: AnswerType.number,
    translationKey: questionTextConstants.WHAT_IS_YOUR_POSTAL_CODE,
    questionType: QuestionType.standard,
    diseases: [allDisease],
  });
  await new TranslationFactory(em).createForLanguages(
    question.translationKey,
    languages,
    question.translationKey
  );

  question = await new QuestionFactory(em).createOne({
    answerType: AnswerType.string,
    translationKey: questionTextConstants.WHAT_IS_YOUR_SECONDARY_ICD,
    questionType: QuestionType.standard,
    diseases: [allDisease],
  });
  await new TranslationFactory(em).createForLanguages(
    question.translationKey,
    languages,
    question.translationKey
  );

  question = await new QuestionFactory(em).createOne({
    answerType: AnswerType.number,
    translationKey: diseaseSpecificText,
    questionType: QuestionType.standard,
    diseases: [specificDisease],
  });
  await new TranslationFactory(em).createForLanguages(
    question.translationKey,
    languages,
    question.translationKey
  );
}
