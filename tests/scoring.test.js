import { ScoringFactory } from '../src/services/scoringfactory'

const goodBlock = {
  blocks: [{
    data: {
      text: "Playing games has always been thought to be important to the development of well-balanced and creative children; however, what part, if any, they should play in the lives of adults has never been researched that deeply. I believe that playing games is every bit as important for adults as for children. Not only is taking time out to play games with our children and other adults valuable to building interpersonal relationships but is also a wonderful way to release built up tension."
    },
    type: "paragraph"
  },
  {
    data: {
      text: "Playing games has always been thought to be important to the development of well-balanced and creative children; however, what part, if any, they should play in the lives of adults has never been researched that deeply. I believe that playing games is every bit as important for adults as for children. Not only is taking time out to play games with our children and other adults valuable to building interpersonal relationships but is also a wonderful way to release built up tension."
    },
    type: "paragraph"
  },
  {
    data: {
      text: "Playing games has always been thought to be important to the development of well-balanced and creative children; however, what part, if any, they should play in the lives of adults has never been researched that deeply. I believe that playing games is every bit as important for adults as for children. Not only is taking time out to play games with our children and other adults valuable to building interpersonal relationships but is also a wonderful way to release built up tension."
    },
    type: "paragraph"
  }],
  time: 1591399803000,
  version: "2.17.0"
};

const emptyBlock = {
  blocks: [],
  time: 1591399803000,
  version: "2.17.0"
};

const noTextBlock = {
  blocks: [{
    data: {
    },
    type: "paragraph"
  }],
  time: 1591399803000,
  version: "2.17.0"
};

const limitedBlock = {
  blocks: [{
    data: {
      text: "Some"
    },
    type: "paragraph"
  }],
  time: 1591399803000,
  version: "2.17.0"
};

describe('Test Good block', () => {
  test('Return a readability score', () => {
	var expected = 14;
	var actual = ScoringFactory.getReadingScore(goodBlock);
	expect(actual).toBe(expected);
  });

  test('Return an estimated reading time', () => {
	var expected = 8;
	var actual = ScoringFactory.getEstimatedReadingTime(goodBlock);
	expect(actual).toBe(expected);
  });

  test('Return a keyword object', () => {
	var expected = {"adults": 9, "bit": 3, "building": 3, "built": 3, "children": 9, "creative": 3, "deeply": 3, "development": 3, "games": 9, "important": 6, "interpersonal": 3, "lives": 3, "part": 3, "play": 6, "playing": 6, "relationships": 3, "release": 3, "researched": 3, "taking": 3, "tension": 3, "thought": 3, "time": 3, "valuable": 3, "well-balanced": 3, "wonderful": 3};
	var actual = ScoringFactory.getKeywords(goodBlock);
	expect(actual).toStrictEqual(expected);
  });
});

describe('Test an empty block', () => {
  test('Return a readability score', () => {
	var expected = 0;
	var actual = ScoringFactory.getReadingScore(emptyBlock);
	expect(actual).toBe(expected);
  });

  test('Return an estimated reading time', () => {
	var expected = 1;
	var actual = ScoringFactory.getEstimatedReadingTime(emptyBlock);
	expect(actual).toBe(expected);
  });

  test('Return a keyword object', () => {
	var expected = {};
	var actual = ScoringFactory.getKeywords(emptyBlock);
	expect(actual).toStrictEqual(expected);
  });
});

describe('Test no text block', () => {
  test('Return a readability score', () => {
	var expected = 20;
	var actual = ScoringFactory.getReadingScore(noTextBlock);
	expect(actual).toBe(expected);
  });

  test('Return an estimated reading time', () => {
	var expected = 1;
	var actual = ScoringFactory.getEstimatedReadingTime(noTextBlock);
	expect(actual).toBe(expected);
  });

  test('Return a keyword object', () => {
	var expected = {"undefined": 1};
	var actual = ScoringFactory.getKeywords(noTextBlock);
	expect(actual).toStrictEqual(expected);
  });
});

describe('Limited text block', () => {
  test('Return a readability score', () => {
	var expected = 0;
	var actual = ScoringFactory.getReadingScore(limitedBlock);
	expect(actual).toBe(expected);
  });

  test('Return an estimated reading time', () => {
	var expected = 1;
	var actual = ScoringFactory.getEstimatedReadingTime(limitedBlock);
	expect(actual).toBe(expected);
  });

  test('Return a keyword object', () => {
	var expected = {};
	var actual = ScoringFactory.getKeywords(limitedBlock);
	expect(actual).toStrictEqual(expected);
  });
});
