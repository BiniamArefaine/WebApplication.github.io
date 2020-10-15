package miu.cs.cs472.domain;

import java.util.Arrays;

public class QuizApp{

    private String[] quizQuestions = {"3, 1, 4, 1, 5", "1, 1, 2, 3, 5", "1, 4, 9, 16, 25", "2, 3, 5, 7, 11", "1, 2, 4, 8, 16"};
    private int[] quizAnswers = {9, 8, 36, 13, 12};
    private int[] quizSolutions = new int[5];
    private int questionNumber = 1;


    public int getScore(){
        int score = 0;
        for(int i = 0; i < quizAnswers.length; i++ ){
            if(quizAnswers[i] == quizSolutions[i]){
                score++;
            }
        }

        return score;
    }

    public void setAnswer(int ansQuestion, int qSolutions) {
        System.out.println("here---------------");
        if (ansQuestion <= quizQuestions.length && quizSolutions[ansQuestion - 1] == 0) {
            questionNumber++;
        }
        quizSolutions[ansQuestion - 1] = qSolutions;

    }

    public int currentQuestion(){
        return questionNumber;
    }

    public int nextQuestion(){
        return questionNumber+1;
    }

    @Override
    public String toString() {
        return "miu.cs.cs472.domain.QuizApp{" +
                "quizQuestions=" + Arrays.toString(quizQuestions) +
                ", quizAnswers=" + Arrays.toString(quizAnswers) +
                ", quizSolutions=" + Arrays.toString(quizSolutions) +
                ", questionNumber=" + questionNumber +
                '}';
    }

    public int totalNumberQuestions() {
        return quizQuestions.length;
    }
    public String getQuestion(int questionNo) {
        return quizQuestions[questionNo - 1];
    }
}
