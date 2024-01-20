# InstaList
---
## Project Description:

InstaList is developed with the goal of aiding grocery store shoppers in their organization. Users are able to use our website to browse recipes which they can then directly add to their shopping list. Not only will the list of ingredients be added to the list, but they will be divided into sub-categories based around the most common grocery store organzation techniques. With this is mind, our users will see quicker trips to the grocery store as they will spend less time doubling back through aisles they have already been through. The year over year roadmap of InstaList will be published in early 2023 and we are excited about progressing this software in the future.

## Website Features:

Users will be able to make an account with a valid email address and password,  with a selection from a variety of profile pictures. From there they can update any dietary restrictions, then the account is fully set up. With this account, users can browse from a catelog of 2 million recipes supplied from the Edamam API. Users can easily check out these recipes, and decide to add them to a personal recipe list that stores your favorite dishes. These recipes can then add all the ingredients to make it to your shopping list at the press of a button.


## Application Architecture: 

 **Backend:**
  - SQL Database
  - Edamam.com API
  
 **Front-End:**
  - HTML, CSS and JS for user input and UI design
  - MVC (to to divide the information and create functions that allow for more accurate relationships to the databases)
    
**Communication:**
  - Model is responsible for managing the application. It receives user input from the controller. This will be an incorporation of HTML and the databases, as the users will insert their data, which will be directly inserted into the correlating database.
  - View renders presentation of the model in a particular format. Specifically, we will use HTML to create an aesthetically pleasing visual for the UI.
  - Controller responds to the user input and performs interactions on the data model objects by validating them. This will specifically be associated with the database, as the different user inputs will trigger different corresponding values within the database
