/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  AnswerType,
  Location,
  Question,
  QuestionType,
  Trial,
  UserAttribute,
} from '@match-mate-api/core-db';
import { faker } from '@faker-js/faker';
import { EntityManager } from '@mikro-orm/postgresql';
import {
  QuestionFactory,
  DiseaseFactory,
  TrialFactory,
  LocationFactory,
  UserAttributeFactory,
  TrialCriteriaFactory,
} from '../factories';

const constants = {
  questions: {
    country: 'What is your country?',
    icdCode: 'What is your primary ICDCode?',
  },
};

/** Create 120 questions, 2000 trials with matching and excluding criteria (100k) with attributes for a single user in order to test matching on a larger scale */
export async function loadLargeMatchingDataset(em: EntityManager) {
  const uid = 'userWithLargeMatchingSet1';
  const icdCode = 'E11';
  const locationData = { city: 'Leuven', country: 'Belgium', facility: 'KUL' };

  const diseaseQuestion = await em.findOneOrFail(Question, {
    translationKey: constants.questions.icdCode,
  });
  const countryQuestion = await em.findOneOrFail(Question, {
    translationKey: constants.questions.country,
  });

  // Creating 120 questions in total, 60 bool, 60 number
  const boolQuestions = await new QuestionFactory(em).create(60, {
    questionType: QuestionType.standard,
  });
  const numberQuestions = await new QuestionFactory(em).create(60, {
    questionType: QuestionType.standard,
    answerType: AnswerType.number,
  });
  // Add the disease icd code and question
  const disease = await new DiseaseFactory(em).createOne({ icdCode });

  // Add the trials the user will be a full match, not all criteria will exist as user attributes but all will match
  const trialsToMatch = await Promise.all(
    [...Array(50)].map((_, i) =>
      new TrialFactory(em).createOne({
        briefTitle: `Matching trial for ${uid} - ${i}/50`,
        diseases: [disease],
        locations: [new LocationFactory(em).makeOne(locationData)],
      })
    )
  );
  // Add the trials that will mostly match but on some boolean values will not
  const trialToExcludeByBool = await Promise.all(
    [...Array(1000)].map((_, i) =>
      new TrialFactory(em).createOne({
        briefTitle: `Excluded trial by boolean mismatch for ${uid} - ${i}/1000`,
        diseases: [disease],
        locations: [new LocationFactory(em).makeOne(locationData)],
      })
    )
  );
  // Add the trials that will mostly match but on some number values will not
  const trialToExcludeByNumber = await Promise.all(
    [...Array(1000)].map((_, i) =>
      new TrialFactory(em).createOne({
        briefTitle: `Excluded trial by number mismatch for ${uid} - ${i}/1000`,
        diseases: [disease],
        locations: [new LocationFactory(em).makeOne(locationData)],
      })
    )
  );

  // Add the general disease and location attributes.
  await new UserAttributeFactory(em).createOne({
    userId: uid,
    question: diseaseQuestion,
    boolValue: null,
    otherValue: icdCode,
    answerType: AnswerType.string,
  });
  await new UserAttributeFactory(em).createOne({
    userId: uid,
    question: countryQuestion,
    boolValue: null,
    otherValue: locationData.country,
    answerType: AnswerType.string,
  });

  // Get 80 of the 120 questions that will be used in the attributes, not all questions are answered and not all questions will have criteria
  const boolAttributes = await Promise.all(
    boolQuestions.map((q) =>
      createBoolAttribute(em, q, uid, !!faker.number.int({ min: 0, max: 1 }))
    )
  );
  const numberAttributes = await Promise.all(
    numberQuestions.map((q) =>
      createNumberAttribute(
        em,
        q,
        uid,
        faker.number.float({ min: -999999999, max: 999999999 })
      )
    )
  );

  const selectedBoolAttributes = boolAttributes.slice(0, 40);
  const selectedNumberAttributes = numberAttributes.slice(0, 40);

  // Add the criteria for the partially selected attributes
  await createMatchingBoolCriteria(em, trialsToMatch, selectedBoolAttributes);
  await createMatchingNumberCriteria(
    em,
    trialsToMatch,
    selectedNumberAttributes
  );

  // Add some criteria that fully matches for the excluded trials
  const boolAttributesToMatchOnEverything = selectedBoolAttributes.slice(0, 20);
  const numberAttributesToMatchOnEverything = selectedNumberAttributes.slice(
    0,
    20
  );
  const allExcludedTrials = trialToExcludeByBool.concat(trialToExcludeByNumber);
  await createMatchingBoolCriteria(
    em,
    allExcludedTrials,
    boolAttributesToMatchOnEverything
  );
  await createMatchingNumberCriteria(
    em,
    allExcludedTrials,
    numberAttributesToMatchOnEverything
  );

  // Add criteria that will exclude the trials
  const boolAttributesToMismatch = selectedBoolAttributes.slice(20, 30);
  const numberAttributesToMismatch = selectedNumberAttributes.slice(20, 30);
  await createNotMatchingBoolCriteria(
    em,
    trialToExcludeByBool,
    boolAttributesToMismatch
  );
  await createNotMatchingNumberCriteria(
    em,
    trialToExcludeByNumber,
    numberAttributesToMismatch
  );
}

export async function createMatchingBoolCriteria(
  em: EntityManager,
  trialsToMatch: Trial[],
  userAttributes: UserAttribute[]
) {
  return await Promise.all(
    trialsToMatch.flatMap((trial) =>
      userAttributes.map((userAttribute) =>
        createBoolCriteria(
          em,
          trial,
          userAttribute.question,
          userAttribute.boolValue
        )
      )
    )
  );
}

export async function createMatchingNumberCriteria(
  em: EntityManager,
  trialsToMatch: Trial[],
  userAttributes: UserAttribute[]
) {
  return await Promise.all(
    trialsToMatch.flatMap((trial) =>
      userAttributes.map((userAttribute) =>
        createNumberCriteria(em, trial, userAttribute.question, [
          faker.number.float({
            min: -999999999,
            max: userAttribute.numberValue,
          }),
          faker.number.float({
            min: userAttribute.numberValue,
            max: 999999999,
          }),
        ])
      )
    )
  );
}
export async function createNotMatchingBoolCriteria(
  em: EntityManager,
  trials: Trial[],
  userAttributes: UserAttribute[]
) {
  await Promise.all(
    trials.flatMap((trial) =>
      userAttributes.map((userAttribute) =>
        createBoolCriteria(
          em,
          trial,
          userAttribute.question,
          !userAttribute.boolValue
        )
      )
    )
  );
}
export async function createNotMatchingNumberCriteria(
  em: EntityManager,
  trials: Trial[],
  userAttributes: UserAttribute[]
) {
  await Promise.all(
    trials.flatMap((trial) =>
      userAttributes.map((userAttribute) => {
        const shouldLower = faker.number.int({ min: 0, max: 1 });
        const min = faker.number.float(
          shouldLower
            ? { min: -999999999, max: userAttribute.numberValue }
            : { min: userAttribute.numberValue, max: 999999999 }
        );
        const max = faker.number.float(
          shouldLower
            ? { min: -999999999, max: min }
            : { min: min, max: 999999999 }
        );
        return createNumberCriteria(em, trial, userAttribute.question, [
          min,
          max,
        ]);
      })
    )
  );
}

export async function createBoolCriteria(
  em: EntityManager,
  trialToMatch: Trial,
  question: Question,
  val: boolean
) {
  return await new TrialCriteriaFactory(em).createOne({
    trial: trialToMatch,
    value: val,
    question,
  });
}

export async function createNumberCriteria(
  em: EntityManager,
  trialToMatch: Trial,
  question: Question,
  range: [number, number]
) {
  return await new TrialCriteriaFactory(em).createOne({
    trial: trialToMatch,
    minThreshold: range[0],
    maxThreshold: range[1],
    question,
  });
}
export async function createBoolAttribute(
  em: EntityManager,
  question: Question,
  uid: string,
  val: boolean
) {
  return await new UserAttributeFactory(em).createOne({
    userId: uid,
    answerType: AnswerType.boolean,
    boolValue: val,
    question,
  });
}
export async function createNumberAttribute(
  em: EntityManager,
  question: Question,
  uid: string,
  value: number
) {
  return await new UserAttributeFactory(em).createOne({
    userId: uid,
    answerType: AnswerType.number,
    boolValue: null,
    numberValue: value,
    question,
  });
}
