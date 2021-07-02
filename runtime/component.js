export default (question, customQuestionSettings, questionViewSettings) => {
  // TODO: put your code here
  // client api docs: https://confirmit.github.io/ResponsiveSurveyRenderingV2/index.html
  const shelf = new customQuestionsLibrary.Shelf(question, customQuestionSettings);
  shelf.render();

};
