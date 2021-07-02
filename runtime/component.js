export default (question, customQuestionSettings, questionViewSettings) => {
  // TODO: put your code here
  // client api docs: https://confirmit.github.io/ResponsiveSurveyRenderingV2/index.html
  const container = document.getElementById(question.id);
  const div = document.createElement('div');
  div.innerText = 'hello world';
  container.appendChild(div);

};
