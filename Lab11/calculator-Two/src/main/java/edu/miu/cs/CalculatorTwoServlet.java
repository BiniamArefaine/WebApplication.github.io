package edu.miu.cs;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;


@WebServlet(urlPatterns = {"/calculator"})
public class CalculatorTwoServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("text/html");
        PrintWriter out = resp.getWriter();
        try {
            String num1 = req.getParameter("num1");
            String num2 = req.getParameter("num2");
            String num3 = req.getParameter("num3");
            String num4 = req.getParameter("num4");

            out.println("<form action='calculator'>");
            if (!"".equals(num3) && !"".equals(num4)) {
                Integer sum = Integer.parseInt(num3) + Integer.parseInt(num4);
                out.println("<input type=\"number\" name=\"num1\" value=" + num1 + "> + <input type=\"number\" name=\"num2\" value=" + num2 + "> = <input name=\"sum\" value=" + sum + " readonly>");
                out.println();
            } else {
                out.println("<input type=\"number\" name=\"num1\"> + <input type=\"number\" name=\"num2\"> = <input name=\"sum\" readonly>");
                out.println();
            }
            out.print("<br/>");
            if (!("".equals(num3) && "".equals(num4))) {
                int product = Integer.valueOf(num3) * Integer.valueOf(num4);
                out.println("<input type=\"number\" name=\"num3\" value=" + num3 + "> * <input name=\"num4\" value=" + num4 + "> = <input name=\"product\" value=" + product + " readonly>");
            } else {
                out.println("<input type=\"number\" name=\"num3\"> * <input name=\"num4\"> = <input name=\"product\" readonly>");
            }
            out.print("<br/>");
            out.print(" <input type=\"submit\" value=\"Submit\" >");
            out.print("</form>");

        } catch (Exception e) {
            out.print("Something is wrong...");
        }
    }




}

