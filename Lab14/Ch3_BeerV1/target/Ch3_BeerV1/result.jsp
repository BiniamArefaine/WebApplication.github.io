<%@ page import="java.util.*" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<html>
<body>
<h1 align="center">Beer Recommendations JSP</h1>
<p>
<%--<%--%>
<%--List styles = (List)request.getAttribute("styles");--%>
<%--Iterator it = styles.iterator();--%>
<%--while(it.hasNext()) {--%>
<%--out.print("<br>try: " + it.next());--%>
<%--}--%>
<%--%>--%>

    <c:forEach var="beer" items="${styles}">
    <br>Try: <c:out value="${beer}"></c:out>
    </c:forEach>


</body>
</html>