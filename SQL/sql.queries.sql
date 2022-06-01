--  Define a query that counts the total number of.com Companies(NAME ends with .com) located in Bangkok or Brussels

 SELECT NAME
 FROM COMPANIES
 WHERE NAME LIKE '%.com' AND (CITY = 'Bangkok' OR CITY = 'Brussels')


--  Define a query that selects the top 5 cities, sorted by the highest number of occurrences on top.

 SELECT TOP 5 CITY, count(CITY) as amout
 FROM COMPANIES
 GROUP BY CITY
 ORDER BY amout
 DESC


--  Select a unique list of K_COMPANY for all Companies with at least one contact linked without using joins.

 select COMPANIES.name, CONT_COMP.K_COMPANY, CONTACTS.NAME, CONT_COMP.K_CONTACT
 from COMPANIES, CONTACTS, CONT_COMP
 where COMPANIES.K_COMPANY = CONT_COMP.K_COMPANY and CONTACTS.K_CONTACT = CONT_COMP.K_CONTACT


--  Select all companies that are linked or not to contacts.All columns from tables COMPANIES and CONTACTS(joined by CONT_COMP) must be selected in only one statement.The result should be sorted by Company name(A - z), second by Contact name(Z - a).

 SELECT *
     FROM COMPANIES, CONTACTS
 union
 SELECT *
     FROM CONTACTS, COMPANIES
 ORDER BY COMPANIES.NAME asc, CONTACTS.NAME desc


--  Count the number of contacts without a link to a Company.

 SELECT COUNT(NAME)
 FROM CONTACTS
 LEFT JOIN CONT_COMP
      ON CONTACTS.K_CONTACT = CONT_COMP.K_CONTACT
 WHERE CONT_COMP.K_CONTACT IS NULL