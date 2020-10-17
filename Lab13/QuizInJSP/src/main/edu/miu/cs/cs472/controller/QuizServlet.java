package miu.cs.cs472.servlet;

import miu.cs.cs472.domain.QuizApp;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;


@WebServlet(urlPatterns = {"/","/quiz"})
public class QuizServlet extends HttpServlet {

    private QuizApp quizApp;
    public  static String sessionName = "quiz";
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        PrintWriter out = resp.getWriter();
        resp.setContentType("text/html");

        HttpSession session = req.getSession();
        if(session.getAttribute(sessionName) !=null){

            quizApp = (QuizApp)session.getAttribute(sessionName);
        }
        else {
            quizApp = new QuizApp();
            session.setAttribute(sessionName, quizApp);
        }
        if(quizApp.currentQuestion() <= quizApp.totalNumberQuestions()) {
            out.println("<html>\n" +
                    "<head>\n" +
                    "    <link href=\"css/quiz.css\" rel=\"stylesheet\" type=\"text/css\">\n" +
                    "</head>\n" +
                    "<body>\n" +
                    "<div>\n" +
                    "    <h2>The Number Quiz</h2>\n" +
                    "\n" +
                    "    <p>Your Current Score is " + quizApp.getScore() + "</p>\n" +
                    "\n" +
                    "    <p>Guess the next number in the sequence</p>\n" +
                    "\n" +
                    "    <p>" + quizApp.getQuestion(quizApp.currentQuestion()) + "</p>\n" +
                    "\n" +
                    "    <form action=\"quiz\" method=\"post\">\n" +
                    "        <label for=\"ans\">Your Answer </label><input type=\"number\" name=\"ans\" id=\"ans\" required>\n" +
                    "        <br><input type=\"hidden\" value=\"" + quizApp.currentQuestion() + "\" name=\"questionNo\"></br>\n" +
                    "        <input type=\"submit\" value=\"Submit\">\n" +
                    "    </form>\n" +
                    "\n" +
                    "</div>\n" +
                    "\n" +
                    "</body>\n" +
                    "</html>");
        }else{
            out.println("<h2>The Number Quiz</h2>");
            out.println("<p>Your Current Score is \"" + quizApp.getScore() + "\"</p>");
            out.println("<p>You have completed the number quiz with a score of  \"" + quizApp.getScore() + "\" out of "+ (quizApp.currentQuestion()-1) +" </p>");
        }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        HttpSession session = req.getSession();
        quizApp = (QuizApp)session.getAttribute(sessionName);
        int qustionNo = Integer.valueOf(req.getParameter("questionNo"));
        System.out.println("here-------------");
        int ans = Integer.valueOf(req.getParameter("ans"));
        if(quizApp !=null) {
            System.out.println("hre=--------- ");
            quizApp.setAnswer(qustionNo, ans);
        }
        session.setAttribute(sessionName, quizApp);
        resp.sendRedirect("quiz");
    }
}
