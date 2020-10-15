package edu.miu.cs;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/calc")
public class CalculatorServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("text/plain");
        PrintWriter out = resp.getWriter();

        String num1 = req.getParameter("num1");
        String num2 = req.getParameter("num2");
        String num3 = req.getParameter("num3");
        String num4 = req.getParameter("num4");

        if(!"".equals(num1) && !"".equals(num2)){
            Integer sum = Integer.parseInt(num1) + Integer.parseInt(num2);
            out.println(num1 + " + " + num2 + " = " + sum);
        }

        if(!"".equals(num3) && !"".equals(num4)){
            Integer product = Integer.parseInt(num3) * Integer.parseInt(num4);
            out.println(num3 + " * " + num4 + " = " + product);
        }


    }
}
